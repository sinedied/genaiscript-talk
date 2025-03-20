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

$`## Role
You're an expert software engineer with 20 years of open source experience.

## Task
Write a high level summary of the changes in GIT_DIFF for a pull request in a way that a software engineer will understand.

## Instructions
- Do NOT explain that GIT_DIFF displays changes in the codebase
- Try to extract the intent of the changes, don't focus on the details
- Use bullet points to list the changes
- Use emojis to make the description more engaging
- Focus on the most important changes
- Ignore comments about imports (like added, remove, changed, etc.)
`;
