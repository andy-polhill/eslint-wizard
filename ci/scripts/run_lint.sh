#!/usr/bin/env bash
set -e -u

function postMessage {
cat > res.json << EOF
  {
    "url": "$REPO",
    "ts": $(date +%s),
    "results": $(cat lint.json),
    "task": "Lint"
  }
EOF

  yarn global add mustache
  mustache res.json ci/message/slack-message.mustache > ../messages/slack.txt
}

cd source
yarn install
trap postMessage EXIT
yarn lint:js --format=json --output-file=lint.json
