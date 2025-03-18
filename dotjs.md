# DotJS

https://microsoft.github.io/genaiscript/

Programmatically assemble prompts for LLMs using JavaScript. Orchestrate LLMs, tools, and data in a single script.

JavaScript toolbox to work with prompts
Abstraction to make it easy and productive
Seamless Visual Studio Code integration

* Meet GenAIScript: your "boring" tasks automator [GenAIScript: the jQuery of LLMs]

Prompting is the New Scripting: Meet GenAIScript

Now I need an abstract, with few ideas:
- the pace of AI advances is crazy (like JS used to be 10 years ago) and it's hard to keep up with the new models.
- While AI apps are becoming increasingly more complex, with agents being the new graal, a fast iteration loop is key to your app success. 
- We'll see how LangChain.js can help with see, allowing a seemless transition from a local dev loop to a production app in the cloud


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

- Code: 5min Now I wanted to push things a bit further. 
  * Agent demo: GIT changelog generator? presentation generator from readme+code?
  * debug/traces

- Code: 3min Copilot integration
  * Logo generation

- More: 1min MCP tools, transcription, image/video as input, RAG, @agentic tools, schema, zod, TS

- Conclusion: 1min Right now, it's build as tool for you to use rather than a framework to build applications, but I hope that we'll get GenAI frameworks in the future that gets inspired by this simplicity.

If you feel like GenAI could help you automate some of your tasks, but you don’t know where to start and you don't want to spend too much time on it, GenAIScript is a great place to begin.




<!--
- The promise of AI: gaining time for more interesting tasks
  * Text prompts are not enough: you need to be able to interagrate with other tools, data, and file.
  * Not talking about AI from an application perspective, but merely as a tool itself that you can use to automate some parts your work.
  * The problem: the pace of AI advances is crazy, like JS 10 years ago, there are new models, new patterns, new tools every week.
  * As a developer, I often rely of scripts to automate some tasks, but I don't want to spend time learning all this and developer actuall applications that I need to maintain for this.
 -->

### Demo/use cases

* Real sample repo:
  - Auto review PRs
  - Diagram generation (mermaid) w/ Copilot integration
  - Copilot integration => optimize
  - Localization

* works locally w/ Ollama
* debugging scripts

## Title

Meet GenAIScript: Your "boring" Task Automator


## Abstract ideas

I don't know about you, but these I feel like we at least take the same or even more time to try using AI to simplify our work, than actually doing it. While LLMs are certainly useful, it needs a significant amount of work to be leverage them effectively for everyday's tasks. 
- Mention: including files, images, audio. Multi-step workflows. custom AI tools, agentic workflows.


## Plan









-------------------------

Budget: 800 euros

Pitch: LangChain.js and local development loop

* relevance for JS ecosystem: we used to have 1 new JS lib / week, now it's 1 new model / week :D
* Not tied to a platform: we switched 3 times the JS SDK in the last 2 years, but for the LC.js code I wrote I just had to change the import statement

## Title

Unchained Inner Loop with LangChain.js

## Abstract

The pace of AI innovation is dizzying — much like the explosive growth of JavaScript a decade ago — making it hard to keep up with new models and breakthroughs. As applications evolve into complex systems, with intelligent agents emerging as the next holy grail, a rapid development loop becomes critical to your app's success. In this session we'll explore how LangChain.js can be your secret weapon for maintaining a fast and local development cycle. We'll explore how from a simple idea you can quickly prototype, iterate, and evaluate your LLM-based apps. Then, watch how effortlessly this workflow transitions from a local setup to a production-ready cloud environment.




## Plan

- 3min: Intro: we went from 1 new JS lib / week to 1 new model / week :D
  * How can we apply what we learned from the web development ecosystem to AI?
  * Presentation: Angular GDE, MS Advocate, LC.js contributor
  * Personal story: facing SDK changes, new models to explore, new tools... so little time/still 24h hours in a day! You can't lose time migrating your codebase all the time time.

- 3min: The AI development loop stack
  * pitch: you prototype & evaluate locally, then eventually transition to the cloud
  * the idea: YT ask agent
  * LangChain.js / Ollama / Promptfoo / (smoke)?
  * Show a bit of the setup: TDD with AI, local models, promptfoo AI as judge

- 10min Demo: agent-based YT QA prototype
  * 
  * Ollama + local models
  * Promptfoo for prompt/model eval

- 2min Show the LC.js code: building blocks for Models/Data loader/Memory/Agent which are vendor independant
  * How easy it is to switch models
  * How easy it is to switch data sources

- 2min conlusion: 
  * You can see that I'm enthusiastic about LangChain.js, because it's a tool that allows me to focus on the important parts of what I'm building. And while I enjoy the challenge of working on cutting-edge AI solutions, I want the same development flexibility that I have when I'm working on web projects. The stack I've shown you today is a step in that direction, and I hope you'll give it a try.
  
## Demo

Level up https://github.com/sinedied/langchainjs-quickstart-demo

+ agent: playwright search tool (find video)
+ get transcript with timings (does it work?)
+ generate video url with the passage that answer the question, along with a summary of the answer

- https://www.google.com/search?q=dotjs+2024+video+lea+verou



## Ideas

Trying to keep up with the latest advances in AI can be overwhelming, although not dissimilar to the pace of the JS ecosystem 10 years ago. 


The current pace of AI research is staggering, with new models being released every week. In this context, how can developers keep up with the latest advances in AI and integrate them into their applications? In this talk, we'll explore how LangChain.js, an open-source framework for generative AI, can help you build AI applications faster and more efficiently. We'll dive into the inner loop of AI development, from prototyping to production, and show how LangChain.js can streamline the process and make it easier to experiment with new models and techniques. Whether you're a seasoned AI developer or just getting started, LangChain.js can help you stay ahead of the curve and build cutting-edge AI applications with ease.


## old build abstract

Title: Generative AI: From your local machine to Azure with LangChain   

Description: This demo session will dive into the the process of building a generative AI application using LangChain.js and Azure. In this session, we'll take you through the development journey, starting from an idea and progressing towards production. We'll explore how LangChain framework together with Azure AI building blocks allows you to quickly build complex AI applications at the various stages of development. 



Discover the process of building a generative AI application using LangChain.js and Azure. In this session, we'll take you through the development journey, starting from an idea and progressing to production. Our focus will be on implementing a Retrieval-Augmented Genaration (RAG) approach for a chat support system based on PDFs documents. We'll demonstrate how we built a local prototype using open-source models and Ollama, followed by its migration to Azure for production. 


## refs
https://pretty-radio-b75.notion.site/DeepScaleR-Surpassing-O1-Preview-with-a-1-5B-Model-by-Scaling-RL-19681902c1468005bed8ca303013a4e2