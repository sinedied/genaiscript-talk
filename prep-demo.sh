#!/bin/bash

echo "Preparing demo environment..."

# Common preparation for all demos

echo "" > ./genaisrc/issue-review.genai.js
echo "" > ./genaisrc/changelog.genai.js
echo "" > ./genaisrc/background.genai.js

# For staged changes
echo '
<template>
  <footer>
    <p>GenAIScript presentation</p>
    <div>
      <a href="https://bit.ly/genaiscript-talk">GitHub repo</a>
    </div>
  </footer>
</template>
' > ./components/Footer.vue
git add ./components/Footer.vue

if [ "$1" == "long" ]; then
    ## Prepare files
  echo "" > ./genaisrc/pr-describe.genai.js

  ## Open files
  code ./genaisrc/pr-describe.genai.js

  echo "Setup done for long version"
else
  ## Open files
  code ./genaisrc/issue-review.genai.js

  echo "Setup done for short version"
fi
