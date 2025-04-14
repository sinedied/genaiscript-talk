script({
  mcpServers: {
    playwright: {
      command: "npx",
      args: ["-y", "@playwright/mcp"],
    },
    youtube: {
      command: "npx",
      args: ["-y", "@sinco-lab/mcp-youtube-transcript"],
    },
  },
});

$`## Role
You're an expert tech analyst. 

## Content
- https://developer.microsoft.com/javascript/
- https://www.youtube.com/watch?v=PrhPSUHXWJ4

## Task
Go through all specified content and summarize key points and latest updates in 3 bullets points in total.
`;
