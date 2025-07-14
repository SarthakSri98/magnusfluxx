---
title: "Building and Launching Inspector Saab: Making Web Editing Human"
description: "The journey of creating a Chrome extension that lets anyone edit any website using plain English-no code required."
date: "2024-03-20"
image: "/inspectorsaab.png"
tags: ["Product Development", "Launch", "AI", "Chrome Extension"]
relatedProduct: "inspector-saab"
type: "Product Story"
featured: true
---
# 🕵️‍♂️ Building Inspector Saab  
### What a Chrome extension taught me about product thinking in the age of AI

> “I didn’t build a text-to-JSON tool. I built an interface for human intent.”

---

## 🚧 The Problem

Everyone talks about AI making things easier. But when I looked at tools that let you "edit with AI," they were either:

- **Too abstract** (generate a full landing page but not change an existing one),
- **Too rigid** (limited to predefined templates or no-code zones),
- Or **too dev-heavy** (inspect element, write JS, inject manually).

What was missing was a way to *just point at a site and say what you want*.  
No dev tools. No API docs. Just words.

So I asked myself:
**What if you could change any website with plain English?**

---

## 🎥 Watch the Demo

For a quick overview of how Inspector Saab works, check out our [YouTube demo](https://youtu.be/8Ca8_znZgu8). This video walks you through the key features and shows the extension in action, making web editing as simple as speaking your intent.

<iframe width="930" height="582" src="https://www.youtube.com/embed/8Ca8_znZgu8" title="Inspector Saab – Edit Any Website Instantly Using Plain English" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Here are a few moments where real user friction shaped real product decisions:

### 🟨 Moment 1: The Blank Prompt Paralysis  
**User behavior:** They'd install the extension, open the popup… and freeze.

**Why?**  
They didn’t know what to type.  
Not laziness - just no mental model of what was possible.

**Product move:**  
I added **suggested prompts** - like “make the text red” or “add a scroll to top button” - that:
- Had immediate visual payoff,
- Were safe to run,
- And showed what the tool *could* do.

---

### 🟨 Moment 2: “Highlight the word ‘chakra’”

One user typed: “Highlight the word chakra in this blog.”  
It failed. Badly.

**Insight:**  
I was only thinking in terms of tags, not inner text.  
Real users think in **content**, not structure.

**Product move:**  
Built a **text-targeting handler** for partial word matches.  
Wrote a custom logic that walks through DOM nodes and applies spans - surgically, without breaking layout.

This feature didn’t come from imagination. It came from *embarrassment*.  
And that’s how you learn.

---

### 🟨 Moment 3: “Make this scroll smoothly to top when I click”

I resisted event handling at first.  
“Too risky,” I thought. “Too open-ended.”

But this request kept popping up.

**Product move:**  
I compromised: supported **scroll-related JavaScript events only**, with hardcoded handler functions - safe, limited, but magical.

This was my first lesson in **controlled power** - enabling just enough flexibility without opening the floodgates.

---