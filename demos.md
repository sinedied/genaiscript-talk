# Demos

## TODO
- [ ] Create demo PR
- [ ] Create demo issue

#### Preparation:
- Run slide server
- /!\ Check `.env`, that all demos works (may need `az login` for managed identity)
- Open repo in VSCode, run `./prep-demo.sh`
- Open browser with tabs:
  * PR: 
  * Issue:

## PR reviewer
- Open `pr-describe.genai.js`
  * First, two things you may have noticed to create a GenAIScript:
    - I have a `.genai.js` extension, that enables the GenAIScript environment. It works with TS too, and .mjs/.mts if you want to use ES Modules.
    - The script is located into a `genaisrc` folder. This folder can be anywhere in your project.
  * Now let's start with the prompt: I want to build a script that will help me review PRs, by describing what's in the PR.
  * `pr_prompt` explain the prompt
  * `pr_def` to define the GIT_DIFF
  * `pr_changes` to get the git changes

- Test it: stage some changes
  * Show the chat panel

- Now, we want this script to run on my GH repo, so I created a GH Action.
  * I won't dive too much into the details, but the important parts here are:
    - The action is triggered on PR events
    - It runs the script using `npx` and the genaiscript CLI
    - It uses the `GITHUB_TOKEN` and the permissions to update the PR
  * Open the PR in the repo and show the results

- Issue comment
  * script metadata

## Issue reviewer
- Open `issue-review.genai.js`
  * `issue_prompt` explain the prompt
  * `issue_def` to define the title/body
  * `issue_github` to get the issue
  * `issue_script` to set the meta

- Run the script
  * Show the extension panel
  * Add title/description meta
  * Change the model to "ollama:phi4"


## Agent: Git changelog generator
- Open `changelog.genai.js`
  * `ch_prompt` explain the prompt
  * `ch_def_agent` explain agent

## Copilot: Gen background
- Open `background.genai.js`
  * `bg_prompt` explain the prompt
  * `bg_def` to define the GIT_DIFF

- @genaiscript /run background geometric gradients soft blue





