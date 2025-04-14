script({
  parameters: {
    question: "Plan a 3 days trip to Egypt",
  },
  model: "large",
});

defAgent(
  "local_agent",
  "Local assistant that can suggest local activities or places to visit",
  `You are a helpful assistant that can suggest authentic and interesting local activities or places to visit for a user based on the context information provided in <QUERY>.`
);

defAgent(
  "planner_agent",
  "Trip planning assistant",
  `You are a helpful assistant that can suggest a travel plan for a user based on <QUERY>.`
);

defAgent(
  "language_agent",
  "Language assistant that can provide language tips for a given destination",
  `You are a helpful assistant that can review travel plans, providing feedback on important/critical tips about how best to address language or communication challenges for the given destination in <QUERY>. If the plan already includes language tips, you can mention that the plan is satisfactory, with rationale.`
);

defAgent(
  "travel_summary_agent",
  "A helpful assistant that can summarize the travel plan",
  `You are a helpful assistant that can take in all of the suggestions and advice from the other agents and provide a detailed final travel plan. Your response must be the complete plan with all perspectives integrated.`
);

$`## Question
${env.vars.question}

## Instructions
Refer with ALL specialized agents to answer the question with a final travel summary.
`;
