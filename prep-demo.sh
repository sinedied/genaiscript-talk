#!/bin/bash

echo "Preparing demo environment..."

## Prepare files
# echo "" > ./genaisrc/pr-describe.genai.js
echo "" > ./genaisrc/issue-review.genai.js
echo "" > ./genaisrc/changelog.genai.js
echo "" > ./genaisrc/background.genai.js

# For staged changes
echo '
<template>
  <footer>
    <p>Presentation made for dotJS conference</p>
    <div>
      <a href="https://bit.ly/genaiscript-talk">GitHub repo</a>
    </div>
  </footer>
</template>
' > ./components/Footer.vue
git add ./components/Footer.vue

## Open files
# code ./genaisrc/pr-describe.genai.js
code ./genaisrc/issue-review.genai.js
