---
title: "How I got the idea for building MockJam?"
description: "An AI Mock interivewer tool for PMs and aspiring PMs."
date: "2024-03-23"
tags: ["api", "development", "testing"]
---
# How I Got the Idea for Building MockJam

When I decided to transition into product management, I wasn’t short on skills - but I was short on feedback.

- I had a strong technical foundation.
- I understood frameworks like **CIRCLES**, **RICE**, and **MoSCoW**.
- But I kept falling into familiar traps:
  - Jumping straight to solutions.
  - Rambling instead of structuring my thoughts.
  - Struggling to speak clearly under pressure.

Reading wasn't enough. These habits needed to be rewired through *deliberate, repetitive practice*.

---

## My First Attempts

I started small and Practiced on my own.

- Practiced product sense questions with **ChatGPT**.
- Spoke my answers aloud, to simulate real interviews.
- It helped catch patterns like skipping user thinking or diving into features too quickly.

But there was friction:
- **ChatGPT was too polite**, often overpraising weak answers.
- I had to **re-paste prompts repeatedly**, forcing it to behave like a tough interviewer.
- The manual setup meant I eventually started avoiding it.

> Any process with friction, even mild, is hard to sustain.  
> The brain starts avoiding it, or doing it less often.

That’s when I started giving mocks with peers. And that’s when the learning accelerated. Every session gave me clarity: what I improved, what I needed to fix. I wanted to keep going. But...

---

## The Real Problem

Most candidates, including me, knew mock interviews worked.  
But no one did them consistently. Why?

I started treating this like a real product problem. I ran a survey, talked to peers in HelloPM community, and scanned Slack/product subreddits.

Here’s what I learned:

- People felt **underprepared** and didn’t want to look “dumb.”
- **Scheduling with partners** was painful and slow.
- Feedback was **too vague**, often polite instead of useful.
- Everyone knew mocks worked - but few made it a habit.

These weren’t technical problems.  
They were human ones, driven by hesitation, social dynamics, and inconsistent setups

That’s where I saw an opportunity, not just to build a tool, but to **reduce friction in a loop that worked**. 
- Cricketers have nets to practice, 
- Engineers have, leetcode
- But, We product folks? 
---

## Building MockJam

I didn’t try to build a polished product from day one.  
I scoped just enough to solve *my* loop with minimal friction.

- Used **Cursor’s agentic mode** to speed up development.
- Built the **frontend, backend, and auth layer** myself.
- Used my past experience with **AI prompting** to fine-tune interview behavior.
- Shipped the first working version in **under 2 weeks**.

Then I used it. Daily.

The mocks forced me to slow down, be clear, and structure better.  
The product improved as I improved.  
Each feedback session refined both the tool and my own responses.

---

This blog is the start of a series.  
In the next posts, I’ll go deeper into individual product decisions, from how I structured feedback, to why I rejected peer-to-peer formats, to how I’m thinking about habit formation and retention.
