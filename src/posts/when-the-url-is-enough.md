---
title: "When the URL is Enough"
description: "LLMs aren't just good at converting text from one format to another, but the \"knowledge\" of the world they have brings unintended benefits."
date: 2026-04-02
---

LLMs aren't just good at converting text from one format to another, but the "knowledge" of the world they have brings unintended benefits.

I've recently been developing an app called [Open Cookbook](/open-cookbook/). My wife and I like to cook, and we have an iPad in the kitchen. We have a variety of recipe sources, including handwritten notes, recipe books, and bookmarks to websites.  The idea is to create a single, centralized copy of all the recipes we like, easily accessible through our preferred viewing medium, an iPad. The recipes are memorialized in an open format, [RecipeMD](https://recipemd.org/), which is a subset of Markdown. 

I started building a feature to create a copy of a recipe by providing a website. The idea is to extract the ingredients and the instructions, but strip out all the fluff. Recipes from blogs often have personal stories attached. Blogging is storytelling, but when I'm in the kitchen, I'm looking for ingredients, not a plot twist. Other recipe websites are chock full of ads. So much so that it's hard to even find the ingredients section. There are great recipes on websites out there, but the experience is less than ideal.

To get going as quickly as possible, I decided to use an LLM (Claude) to do the processing. Following the principles of my app, I really want to build an edition that runs on-device, but that can come as a future iteration.  I created a prompt to convert generic recipe text into the [RecipeMD](https://recipemd.org/) format.

Next, the trick was to get the recipe from the website and apply it to the prompt I had written. My initial plan was to simply extract the HTML from the server and feed it into Claude, but I hesitated. In 2026, is the HTML enough? Is there Javascript to execute to get the recipe contents? I was about to do a deep dive of popular recipe websites, but then I remembered that in my conversations with Claude on the web, it often interacts with websites. What if I offloaded this part of the processing to Claude instead? Surely they've solved this problem. I tried crafting a prompt that looked something like. "Extract the recipe from \<URL\>. The format is defined as follows: ..." on the Claude website, and it worked! Was it really that easy?

I copied the same prompt into the backend of my app.  I picked a random recipe from a popular blog that my wife likes and input the link into my app. And what do you know? It worked there too! Another day in the life of a vibe coder. I finished my cup of coffee, and prepped to make a release.

As I was doing final testing, I was reviewing log messages. As I scrolled back through, I noticed something strange. The response I got from Claude through my app was something like this: "I am not able to access websites through the Claude API. But it seems like you're looking for this recipe. Here it is: ..." O_O To create the output the user wanted, Claude didn't even need the content of the website; it was already trained on said popular blog and inferred what the user wanted from the URL alone!!

I suspect this plays out in other subtle ways. For example, we have some handwritten notes from the America's Test Kitchen video recipe for [Mapo Tofu](https://www.youtube.com/watch?v=GUrA24dd7ys). There are missing ingredient amounts, a lack of ordering, and hard to read handwriting. But surprisingly, when I upload the text into Claude, it comes up with an extremely high-quality version of the recipe. It's like the user input becomes not the source of truth, but hints at a recipe that it was, likely, already trained on.

Do I really even need to look up the recipe on the web? Just look at the URL! Nevertheless, I did find the Claude [Web Fetch tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool) and wired it up. If you import a recipe from a website, Claude will actually visit it on your behalf (presumably - maybe they're even optimizing for it on their end).

I knew LLMs were good (broadly speaking) at reasoning about text and converting from one format to another. But there were unexpected benefits of having been trained on the very domain of my app. In chatting about this with a former colleague, he referenced this paper, where you can [extract significant amount of training text from production language models](https://arxiv.org/abs/2601.02671).

We live in interesting times.

