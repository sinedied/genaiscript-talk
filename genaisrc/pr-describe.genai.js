const changes = await git.diff({
  staged: true,
  excludedPaths: [
    "**/package-lock.json",
  ],
});

def("GIT_DIFF", changes, {
  language: "diff",
  maxTokens: 20000,
})

$`You're an expert software engineer with 20 years of open source experience.

## Task

Write a high level summary of the changes in GIT_DIFF for a pull request in a way that a software engineer will understand, without wasting time on unnecessary details.

## Instructions

- do NOT explain that GIT_DIFF displays changes in the codebase
- try to extract the intent of the changes, don't focus on the details
- use bullet points to list the changes
- use emojis to make the description more engaging
- focus on the most important changes
- ignore comments about imports (like added, remove, changed, etc.)
`;
