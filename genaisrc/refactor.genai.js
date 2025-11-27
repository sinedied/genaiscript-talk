script({
  model: "large",
  system: ["system.files"],
});

defAgent(
  "refactor",
  "Refactor a JavaScript file",
  `## Role
  You're an expert JavaScript developer. Update the JavaScript file specified in QUERY.
  
  ## Instructions
  1. Check that it has a "script({})" call at the top of the file. Add one at the top if it doesn't exist.
  2. Update the "script({})" call to include the "group" property, and generate a short name based on the script's purpose. Group names for related scripts should be the same.
  3. Make sure the updated code is still valid JavaScript.
  4. Do NOT change anything else in the file.
  5. Update the original file with the new content.
  `,
  { tools: ["fs_read_file"], system: ["system.files"] }
);

defAgent(
  "files",
  "Find files in the repository",
  `You're a helpful LLM agent that can use tools to find files in this repository.
  Answer the question in QUERY.`,
  { tools: ["fs_find_files"] }
);

$`You're a code refactoring agent. Perform the following tasks:

1. Find all **/*.genai.js files in this repository and then pick ONLY the first 3 files.
2. For each file, send it to the refactor agent. DO NOT change anything yourself.
3. Update the original file with the refactored content.
`;