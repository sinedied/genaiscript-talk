# Demos

#### Preparation:
- Run slide server
- Update extension!
- Clean terminal
- /!\ Check `.env`, that all demos works (may need `az login` for managed identity)
- Open repo in VSCode, run `./prep-demo.sh`
- Open browser to the right with tabs:
  * Issue: https://github.com/sinedied/genaiscript-talk/issues/4
  * PR: https://github.com/sinedied/genaiscript-talk/pull/6

## Issue reviewer: 7min
- Open `issue-review.genai.js`
  * Here I've created a new GenAIScript.
  * The first thing you may have noticed is this `.genai.js` extension:
  * This is what enables the GenAIScript environment. It works with TS and you can use ES Modules.
  * Now let's start with the prompt: I want to build a script that will help me review issues.
  * `issue_prompt` explain the prompt
  * `issue_def` to define the title/body
  * Here comes usually the difficult part: how to give the AI model the proper context so that it can do its job?
  * `issue_github` to get the issue
  * `issue_script` to set the meta

- Explain how to run or debug the script, then run the script

- Now, I want this script to run on my GH repo, so I created a GH Action.
  * I won't dive too much into the details, but the important parts here are:
    - The action is triggered on issue events
    - It runs the script using `npx` and the genaiscript CLI
    - It uses the `GITHUB_TOKEN` and the permissions to create a comment
  * Open the issue in the repo and show the results

- Run the script
  * Show the extension panel
  * Add title/description meta
  * Change the model to "ollama:phi4"

## Copilot: Gen background: 4min
- Open `background.genai.js`
  * Now let's do something a bit different: when I work on a talk, I'm always looking for nice backgrounds for my slides. So I wanted to see if could use a script for that.
  * `bg_prompt` explain the prompt
  * `bg_def` to define the question
  * `bg_tool` to define the tool => tool+prompt=agent
  * `bg_script` to set the meta

- @genaiscript /run background geometric gradients blue

## Agent: Git changelog generator: 4min
- Open `changelog.genai.js`
  * `ch_prompt` explain the prompt
  * `ch_def_agent` explain agent

## PR reviewer: bonus
- Open `pr-describe.genai.js`
  * Here I've created a new GenAIScript.
  * The first thing you may have noticed is this `.genai.js` extension:
  * This is what enables the GenAIScript environment. It works with TS and you can use ES Modules.
  * Now let's start with the prompt: I want to build a script that will help me review PRs, by describing what's in the PR.
  * `pr_prompt` explain the prompt
  * `pr_def` to define the GIT_DIFF
  * `pr_changes` to get the git changes

- Test it: stage some changes
  * Explain how to run or debug the script
  * Show the chat panel

- Now, we want this script to run on my GH repo, so I created a GH Action.
  * I won't dive too much into the details, but the important parts here are:
    - The action is triggered on PR events
    - It runs the script using `npx` and the genaiscript CLI
    - It uses the `GITHUB_TOKEN` and the permissions to update the PR
  * Open the PR in the repo and show the results

## (Bonus) group refactor





