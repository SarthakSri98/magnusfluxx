---
title: "Inspector Saab"
description: "Edit any website using plain English. Inspector Saab translates your intent into real-time changes-no coding, no DevTools, just words."
why: "I created Inspector Saab to empower anyone to edit websites effortlessly using plain English, eliminating the need for coding or DevTools."
how:
  - "Install the Chrome extension and open it on any website."
  - "Type your desired changes in plain English, like 'remove ads'."
  - "Inspector Saab interprets your command and applies the changes live."
  - "Visual feedback highlights the changes temporarily for clarity."
  - "Enjoy the freedom to experiment without affecting the actual site data."
  - "Receive instant results, making web editing intuitive and accessible."
highlight:
  - "Linkedin post about the extension reached 30,000 folks"
  - "Extension live on chrome store, got 20 users."
  - "Open-sourced the code, got 10+ forks and 4 stars as of now"
date: "2024-03-20"
image: "/inspectorsaab.png"
demoVideo: "/images/products/inspector-saab/demo.mp4"
status: "Launched"
featured: true
order: 1
tools: []
learnings:
  - "Natural language input makes people dream big-too big sometimes."
  - "Speed and visual feedback matter more than accuracy in early UX."
  - "People love power tools that feel like play, not productivity."
relatedBlogs:
  - "inspector-saab/launch-story"
  - "inspector-saab/technical-deep-dive"
  - "inspector-saab/user-research"
urls: 
  - title: "GitHub"
    url: "https://github.com/SarthakSri98/inspector-saab-frontend"
  - title: "Demo"
    url: "https://www.linkedin.com/posts/sarthaksri98_built-something-interesting-a-chrome-extension-activity-7340056015993753600-0vwz"
  - title: "Chrome Web Store"
    url: "https://chromewebstore.google.com/detail/ehjancnpaljecpdeohhjhnhodffoiilb"
---

## Overview

Inspector Saab is a Chrome extension that lets you *edit any website* just by typing what you want in plain English.

You don’t touch code. You don’t open DevTools. You just describe what you want-like “make the headings blue” or “highlight this section”-and it happens live on the page.

Built for curious tinkerers, designers, marketers, and indie hackers who often say, “I wish I could just…”.

It’s open source. It’s a playground. It’s an experiment in what happens when natural language becomes executable.

## Features

### Core Features

- **Plain English Commands**  
  Edit live websites using one-line prompts-no syntax, just intent.

- **Visual Feedback**  
  Changes are temporarily highlighted so users instantly see the result of their prompt.

- **Safe Sandbox**  
  All changes happen on your screen only-no impact on actual site data or backend.

### What Makes It Different

- **Doesn’t fake it**: There’s no illusion. You actually control the DOM in real-time.
- **Feels like power with no learning curve**: People who’ve never used DevTools found themselves “styling websites like a pro.”
- **Not limited to a product's UI**: This isn’t a no-code builder for *your* site-it works on *any* site on the internet.

## Development Journey

### How It Started

The idea began with a simple obsession:  
*“What if natural language could actually modify a website’s structure or style, live?”*

I was exploring structured outputs from AI-using ChatGPT to turn English into JSON-and realized I could map that JSON to DOM actions. Instead of building a Notion clone, I asked: *Why not build DevTools for everyone?*

### Product Moments That Shaped It

- A friend typed: **"Highlight the word 'chakra' in this blog"**  
  It failed. I realized the system couldn’t understand text-specific targeting. That led to adding `textContent` analysis and a custom highlight handler.

- Someone asked: **"Make this scroll smoothly to top when I click"**  
  I had to decide: do I support JS event handlers or keep it visual-only? After 2 DMs and testing, I added safe `onclick` bindings only for scroll-based events.

- One person used it to turn a whole landing page black-and-white to test contrast.  
  That wasn’t a planned feature, but it revealed how people were using this for accessibility testing.

### Technical? Sure. But It’s Product First.

I built it to learn AI pipelines. But the biggest lessons weren’t technical:
- Users don’t write perfect prompts.
- They expect creative interpretation, not literal logic.
- The “aha!” moment is visual. Every ms of delay hurts trust.

## Challenges & Real Decisions

1. **Handling Vague Prompts**
   - *Problem:* People write prompts like “make this beautiful” or “clean this section.”
   - *Solution:* Instead of rejecting, I added playful feedback like “Mere bas ka nahi hai yeh… try something simpler?”
   - *Lesson:* Even saying “no” should feel like part of the experience.

2. **Selector Precision vs Simplicity**
   - *Problem:* Matching vague commands to correct DOM elements without breaking layout.
   - *Solution:* Built a selective DOM extractor that only sends relevant HTML to the AI for each page.
   - *Lesson:* Most people want to change what they see-not what's hidden.

3. **Expectations vs Safety**
   - *Problem:* Some users wanted to make real edits on real dashboards.
   - *Solution:* Kept everything sandboxed. Local-only. No write access. Made this limitation clear in copy.
   - *Lesson:* Trust dies when a tool overpromises. It’s okay to say “this is just cosmetic-for now.”

## Impact & What’s Next

### What Worked

- People *got it* without reading docs.
- It sparked joy-users typed things like “change everything to Comic Sans” just for fun.
- It became a great demo to show how AI can *do* things, not just chat.

### What Didn’t

- Many tried overly ambitious prompts like “add a login popup” or “translate this page.”
- It didn’t work well on single-page apps with dynamic content unless DOM was stable.

### Next Steps

- Adding **Undo** (harder than it looks because of dynamic states).
- Creating **prompt presets** to inspire creativity.
- Experimenting with **sidekick mode**-suggesting changes based on page structure.

---

Inspector Saab isn’t meant to replace dev tools.  
It’s meant to *reimagine* how we interact with the web-  
with language, play, and control in your hands.

Try it. Break it. Remix it.

And if you love it, contribute on GitHub.
