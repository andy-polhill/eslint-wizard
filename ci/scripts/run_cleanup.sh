#!/usr/bin/env bash
set -e -u

echo $GCP_SERVICE_ACCOUNT_KEY > key.json
gcloud auth activate-service-account --key-file key.json

gcloud config set project $GCP_PROJECT

ARR_IN=(${GITHUB_REPO/\// })
OWNER=${ARR_IN[0]}
NAME=${ARR_IN[1]}
BUCKETS=$(gsutil ls)
REGEX="gs:\/\/([0-9]{1,4})\.$STORAGE_BUCKET*"

echo "=== Running cleanup ==="
echo "repo: $GITHUB_REPO"
echo "bucket: $STORAGE_BUCKET"
echo "owner: $OWNER"
echo "name: $NAME"

# loop through all of the buckets
while IFS= read -r DEPLOY;
  do
    # is the bucket related to our project
    if [[ $DEPLOY =~ $REGEX ]];
    then
      # get the PR number
      PR_ID="${BASH_REMATCH[1]}"

      # graph ql query to get the status of the pr
      RESPONSE=$(curl \
        -H "Authorization: bearer $ACCESS_TOKEN" \
        -X POST -s \
        -d \ '{ "query": "query { repository(owner: \"'"$OWNER"'\", name: \"'"$NAME"'\") { pullRequest(number: '"$PR_ID"') { state } } }" }' \
        'https://api.github.com/graphql' \
      )

      # if it it's closed or merged, lets delete it
      if [[ $RESPONSE == *"{\"state\":\"CLOSED\"}"* || $RESPONSE == *"{\"state\":\"MERGED\"}"* ]]
      then
        echo "delete $DEPLOY"

        # delete the bucket and it's contents
        ! gsutil -m rm -r $DEPLOY

        # forward all load balancer traffic to the new backend-bucket
        ! gcloud compute url-maps remove-path-matcher --quiet "lb--$GCP_PROJECT" \
          --path-matcher-name="pr-$PR_ID-$APP_NAME-$GCP_PROJECT--path-matcher"

        # delete the backend bucket
        ! gcloud compute backend-buckets delete --quiet "pr-$PR_ID-$APP_NAME-$GCP_PROJECT"
      fi

    fi
done <<< "$BUCKETS"
