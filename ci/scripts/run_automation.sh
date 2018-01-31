#!/usr/bin/env bash
set -e -u

function postMessage {
cat > res.json << EOF
  {
    "url": "$REPO",
    "ts": $(date +%s),
    "results": $(cat at.json),
    "task": "Automation"
  }
EOF

  yarn global add mustache
  mustache res.json ci/message/slack-message.mustache > ../messages/slack.txt
}

cd source

if [ -r .git/id ]
  then #PR deploy
    PR_ID=$(< .git/id)
    export AT_BASE_URL="https://$PR_ID.$STORAGE_BUCKET"
fi

yarn install
trap postMessage EXIT
xvfb-run -a --server-args="-screen 0 1024x768x24" yarn test:ats --outputFile=at.json --json
