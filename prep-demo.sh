#!/bin/bash

echo "Preparing demo environment..."

## Prepare files
echo "" > ./genaisrc/pr-describe.genai.js
echo "" > ./genaisrc/issue-review.genai.js
echo "" > ./genaisrc/changelog.genai.js
echo "" > ./genaisrc/background.genai.js

## Open files
code ./genaisrc/pr-describe.genai.js
