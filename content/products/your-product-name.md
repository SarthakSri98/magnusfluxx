---
title: "Inspector Saab"
description: "Edit any website using plain English. Inspector Saab turns your words into live DOM updates—no code, no DevTools, just magic."
date: "2024-03-20"
image: "/images/products/inspector-saab/cover.png"
demoVideo: "/images/products/inspector-saab/demo.mp4"
status: "Launched"
featured: true
order: 1
tools: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB"
]
learnings: [
    "Structured data pipelines significantly reduce AI latency and token usage.",
    "Vague prompts need AI alignment plus safety boundaries to avoid breaking the site.",
    "Good UX isn’t just about UI—prompt feedback and selector precision build user trust."
]
relatedBlogs: [
    "inspector-saab/launch-story",
    "inspector-saab/technical-deep-dive",
    "inspector-saab/user-research"
]
sourceUrl: "https://github.com/yourusername/inspector-saab"
liveUrl: "https://inspectorsaab.vercel.app"
---

## Overview

Inspector Saab is a Chrome extension that lets anyone modify any website using plain English. Whether you're a designer, marketer, or casual user, you can make visual tweaks, add elements, or change content—without writing a single line of code.

Born out of a simple idea—what if DevTools met ChatGPT—it allows real-time DOM manipulation with one-line prompts. It bridges natural language with technical execution, using AI and safe JSON instructions to edit any live site.

## Features

### Core Features

- **Plain English Commands**  
  Describe what you want—like "make the text red"—and it happens instantly.

- **Live DOM Updates**  
  See changes on the website in real time, with temporary highlights showing what got modified.

- **Undo Support (In Progress)**  
  Working on letting users revert changes, step by step.

### Technical Highlights

- **Smart HTML Extraction**  
  Pulls only relevant parts of the DOM to reduce token size for faster AI response.

- **Reliable Selector Generation**  
  Uses custom logic to avoid brittle or overly specific selectors for consistent changes.

- **Action-Based JSON Engine**  
  Converts natural language into safe, structured JSON that maps to DOM actions like `updateStyle`, `setText`, `addClass`, etc.

## Development Journey

### Initial Concept

The project started with a question: Can we turn natural language into real UI changes? Inspired by tools like Descript and Gamma, the goal was to turn AI understanding into executable frontend changes.

### Technical Decisions

- **Next.js + Tailwind + TypeScript** for fast frontend iteration.
- **Backend with Node.js** handles prompt routing and AI transformation logic.
- **Custom JSON Schema** built for safety, clarity, and easy debugging.

### Challenges & Solutions

1. **Vague or Ambiguous Prompts**
   - **Problem:** Users write loose descriptions like "make it pop" or "clean this section."
   - **Solution:** AI prompt engineering + fallback messages when unsupported.
   - **Lesson:** The clearer the user feedback, the stronger the mental model.

2. **Selector Accuracy**
   - **Problem:** Overly broad or broken selectors would crash or change the wrong elements.
   - **Solution:** Custom extraction and selector heuristics based on visible elements.
   - **Lesson:** Precision in frontend AI tools is non-negotiable.

## Impact & Results

### Metrics & Achievements

- 4000+ prompts submitted during closed beta
- Reduced average response time from 8s to ~4.2s
- Featured in sideproject and dev communities

### User Feedback

> “I’ve never used DevTools. This feels like magic.”  
> “My intern just changed the hero banner with a prompt. Insane.”  
> “It’s like Notion meets frontend.”

### Future Plans

- Add undo/redo stack  
- Custom prompt presets for quick styling  
- Support saving & sharing edits for others to apply  
- Open source core engine for contributions  

---

Inspector Saab is more than an extension—it’s a glimpse into the future of human-computer interaction. You say it, the machine does it.
