script({
  parameters: {
    question: {
      type: "string",
      description: "The question to answer.",
      required: true,
    },
  },
});

defTool(
  "gen_image",
  "Generate an image",
  { prompt: "" },
  async (args) => {
    const { image } = await generateImage(args.prompt, { size: "1792x1024" });
    env.output.appendContent(`[![background](${image.filename})](${image.filename})`);
    return image.filename;
  },
);

def("QUERY", env.vars.question);

$`## Instructions
Create an enriched prompt for Dall-E 3 based on QUERY, adding details to the original prompt so it can generate a background image for a presentation.
Then generate 3 images based on the same enriched prompt using the gen_image tool.
Once you've finished, just say that you're done.`;
