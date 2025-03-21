script({
  tools: ["fs_read_file", "fs_find_files"],
  system: ["system.files"],
});

$`## Role
You're an expert JavaScript developer. You are going to refactor a JavaScript file.

## Task
1. Find all **/*.genai.js files in the workspace. When querying the content of the single file, ask "Give me the content of the file and nothing else" and provide the file path.
2. For each file, check that it has a "script({})" call at the top of the file. Create one if it doesn't exist.
3. Update the "script({})" call to include the "group" property, and add a short name based on the script's purpose. Group names for related scripts should be the same.
4. Do no change anything else in the file.
5. Update the original file with the new content.`;
