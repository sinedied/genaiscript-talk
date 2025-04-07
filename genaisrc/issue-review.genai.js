script({
  title: "Review GitHub Issue",
  description: "Review a GitHub issue and provide feedback.",
  group: "GitHub Actions",
  parameters: {
    issue: {
      type: "integer",
      description: "The issue number to answer.",
      required: false,
    },
  },
});

const { title, body } = await github.getIssue(env.vars.issue);

def("TITLE", title);
def("BODY", body);

$`## Role
You're an expert software engineer with 20 years of open source experience.

## Task
You're reviewing a GitHub issue.
Review the <TITLE> and <BODY> and report your feedback that will be added as a comment to the issue.
Be brief and friendly.

## Instructions
- Check that it has enough details to help the developer. Ask clarifying questions if needed.
- Do not suggest code changes or guidance. Only provide feedback on the issue itself.
`;