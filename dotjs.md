# DotJS

https://microsoft.github.io/genaiscript/

## Use cases examples
- refactoring agent => find all .ts files, and migrate the code to use the new API
- spell checker before commit
- user story generator from docx spec

## Timing

Ton slot est de 27mn: avec 20mn de talk, et 7mn de Q&A (questions de l'audience). Le talk ne doit absolument pas dépasser les 20mns.

## Abstract

**Prompting is the New Scripting: Meet GenAIScript**

jQuery once made web development easier by abstracting away complexities, allowing developers to focus on building rather than battling browser quirks. Today, AI development faces a similar challenge. New patterns emerge constantly and keeping up can be overwhelming, especially as AI tools become more powerful and complex. What if you could leverage cutting-edge AI capabilities to automate tasks using simple, familiar JavaScript abstractions? Enter GenAIScript—a way to integrate AI into your workflow effortlessly, treating prompts like reusable code snippets. In this talk, we’ll explore how GenAIScript makes AI automation feel as intuitive as writing JavaScript, helping you streamline repetitive work without the need for deep AI expertise.

## Social

Excited to be speaking at DotJS this year! 🙌 I'll be diving into how AI can supercharge automation in JavaScript—rethinking prompting as a scripting discipline with http://aka.ms/genaiscript

See you there! ⚡ #DotJS #AI #JavaScript

Yohan Is a DotJS 2025 Speaker!
DotJS - April 3 - Paris

## Prepare plan

1/ The main message of the talk. For a 20mn or 10mn format, TED-like, it’s necessary to have the main message you’d like to convey in 1 sentence, and one sentence only. Yes, even for deep technical topics. 

  GenAIScript is a JS toolbox for GenAI to help you get more productive with it, allowing you to create agents to do complex tasks for you, as simple as writing a script. 

2/ The first sentence of the talk. The catchphrase. This is one of the most important parts of your talk. Try to not start by "glad to be here" but by a hook of your topic. 

  jQuery once simplified web development by abstracting away complexities—AI needs the same today.

3/ The last sentence of the talk. It’s often a call to action, it’s what you want to leave to the audience, very important to give something practical and applicable. 

  If you feel like GenAI could help you automate some of your tasks, but you don’t know where to start and you don't want to spend too much time on it, GenAIScript is a great place to begin.

### Plan

- Hook: 2min
- Intro: 2min I maintain many open source projects on my free time, and I'm always looking for ways to make it more manageable. Even simple things like going through issues to say that you can't help with a bug if you don't have more context on how to reproduce it, or asking for more details about the changes in a PR.

That's how I initially started using GenAIScript.

- GenAIScript is a JS toolbox for GenAI to help you get more productive with it, allowing you to create even agents to do complex tasks for you, as simple as writing a script. 

- Code: 5min start with the simple things, like asking for more details about a PR, or asking for more context on an issue.
  * Live demo: resume a PR
  * Talk about data pulled automatically from the PR, files etc.
  * Running the script on the repo through CLI with GitHub Actions

- (bonus) Spec in docx => create user story, give it complexity, and MD file in /task

- Code: 5min Now I wanted to push things a bit further. 
  * Agent demo: GIT changelog generator? presentation generator from readme+code?
  * debug/traces

- Code: 3min Copilot integration
  * Background generation

- More: 1min MCP tools, transcription, image/video as input, RAG, @agentic tools, schema, zod, TS
  * show more complex code in a slide

- Conclusion: 1min Right now, it's build as tool for you to use rather than a framework to build applications, but I hope that we'll get GenAI frameworks in the future that gets inspired by this simplicity.

- CTA: If you feel like GenAI could help you automate some of your tasks, but you don’t know where to start and you don't want to spend too much time on it, GenAIScript is a great place to begin.

<!--
- The promise of AI: gaining time for more interesting tasks
  * Text prompts are not enough: you need to be able to interagrate with other tools, data, and file.
  * Not talking about AI from an application perspective, but merely as a tool itself that you can use to automate some parts your work.
  * The problem: the pace of AI advances is crazy, like JS 10 years ago, there are new models, new patterns, new tools every week.
  * As a developer, I often rely of scripts to automate some tasks, but I don't want to spend time learning all this and developer actuall applications that I need to maintain for this.
 -->