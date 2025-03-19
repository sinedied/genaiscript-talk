script({
  model: "azure:gpt-4o-mini",
  group: "talk",
});

if (!env.vars.question) {
  throw new Error("Please provide a few keywords for the background.");
}

const { text } = await runPrompt(`
  ## Orignal prompt
  ${env.vars.question}

  ## Instructions
  Create an enriched prompt for Dall-E 3, adding details to the original prompt so it can generate a background image for a presentation. Only output the prompt text. Do not include any other text or explanation.`);

const genBackground = () => generateImage(text, { model: "azure:dall-e-3", size: "1792x1024" });

const results = await Promise.all([ genBackground(), genBackground(), genBackground()]);

env.output.appendContent(
  `Here are 3 ideas for your background:
  ${results.map((r, i) => `[![background ${i+1}](${r.image.filename})](${r.image.filename})`).join(" ")}`
);
