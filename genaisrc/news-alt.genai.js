script({
  mcpServers: {
    fetch: {
      command: "uvx",
      args: ["mcp-server-fetch"],
    },
  },
});

$`## Role
You're an expert tech analyst.

## Current date
${new Date().toISOString().split("T")[0]}

## Task
Use the mensual baseline recaps like this URL https://web.dev/blog/baseline-digest-<month_in_3_letters>-<year>?hl=fr and summarize the key new features of the web platform for the past 3 completed months as short bullet points.
- Focus on new features, improvements, and changes that impact developers and can be used in production.
- Exclude features that are not yet in production or are experimental.

Answer in French.
`;
