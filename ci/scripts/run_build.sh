#!/usr/bin/env bash
set -e -u

function postMessage {
cat > res.json << EOF
    {
      "url": "$REPO",
      "ts": $(date +%s),
      "task": "Build Failure"
    }
EOF

  yarn global add mustache
  mustache res.json ci/message/slack-message.mustache > ../messages/slack.txt
}


cd source
yarn install
trap postMessage EXIT
yarn build

mv public ../build
mv .git ../build
