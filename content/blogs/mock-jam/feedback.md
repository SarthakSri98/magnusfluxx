---
title: "Designing the feedback prompt which help you actually improve"
description: ""
date: "2024-03-23"
tags: ["AI", "Product Management", "Interview Preparation"]
---

# Designing the Feedback Prompt That Helps You Actually Improve

Most feedback tools try to evaluate you.  
I didn’t want that.

When I built MockJam, the goal wasn’t to tell you whether your answer was “good” or “bad.”  
The goal was to help you **get better** - on your own, session by session.

But that only happens if the feedback is:
- Timely
- Honest
- Structured
- And - this part’s underrated - **emotionally believable**

---

## The Problem With AI Feedback

When I practiced with ChatGPT early on, I saw improvement. But also this pattern:

- It gave the right structure.
- It caught when I jumped to solutions.
- But... it was **too nice**.

Even when I gave a very average answer, it said:
> “Nice start! Maybe add some user pain points.”

I had to **keep pasting the prompt again and again**, reminding it to be stricter.  
That got tiring. And any process with friction, you eventually stop doing.

That’s when I realized: I don’t just need better prompting.  
I need to design the **entire response behavior** like a real interview.

---

## Step 1: Defining What “Good” Actually Looks Like

This was the real work. Prompting was the easy part.

I built a simple internal rubric - based on how real PM interviews actually unfold:

1. **Goal** – Did you define the right outcome?
2. **User** – Do you understand who you're solving for?
3. **Friction** – Is there a sharp, non-obvious user pain?
4. **Prioritization** – Did you take a stance?
5. **Move** – Are you clear about what happens next?
6. **Metric** – Do you know how to measure success?

I didn’t show this to the user.  
But this is what the system reacts to behind the scenes.

---

## Step 2: Human Reactions, Not Grades

I didn’t want to say “7/10 in prioritization.”

I wanted something more real.  
So I designed the feedback to always return this structure:

```json
{
  "emotionalReaction": "One real, human reaction to the candidate’s answer.",
  "pushThinking": "Ask one sharp, grounded follow-up only if it adds value.",
  "optionalTacticalNudge": "Only if the candidate is stuck or vague."
}

Even with a half-baked answer, feedback would be:

- “You’re circling. What’s your actual move?”
- “This sounds clean, but doesn’t solve anything. Where’s the tension?”

**Short. Plainspoken. Focused.**

### Step 3: When Not to Judge

A key challenge was knowing when to stay silent. If someone is still framing their thoughts-defining users, scoping context-they need space, not critique.

**Behavior Logic:**

- Don’t evaluate while the user is structuring.
- Only react after a decision is made.
- Interrupt if they spiral, but don’t rush.

### What It Changed

Implementing this system shifted things, even for me. Using MockJam daily, I felt the AI's pressure like a real person:

- I spoke slower.
- I thought deeper.
- I committed to one strong path instead of listing.

This wasn’t feedback for feedback’s sake. It was reinforcement learning-for humans.

### Final Thought

Most AI tools aim to sound smart. I wanted MockJam to make you sharper. Designing this prompt system wasn’t about clever instructions-it was about understanding what truly helps people improve and building that into the product. That’s what I’ll keep iterating.