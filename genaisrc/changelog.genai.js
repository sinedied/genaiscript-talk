defAgent(
  "git-cli",
  "Query a repo with Git to accomplish tasks",
  `You're a helpful LLM agent that can use a subset of git commands on the current repository.
  Answer the question in QUERY.`,
  { system: ["system.git", "system.git_diff"] }
);

$`Create a file CHANGELOG.md.
Include a list of changes since the last git tag, including new features and bug fixes sections.
Be clear and concise, do not include any unnecessary details like who did it and skip useless commits.
Use language understandable for a non-technical audience.`;
