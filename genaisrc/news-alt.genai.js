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

## Content
- https://web.dev/baseline?hl=fr

## Task
Go through all specified content its sublinks and summarize the key new features of the web platform for the past 3 months as short bullet points.
- Focus on new features, improvements, and changes that impact developers and can be used in production.
- Exclude features that are not yet in production or are experimental.

Answer in French.
`;
