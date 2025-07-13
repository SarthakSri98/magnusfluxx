---
title: "To give the Actual Interview Experience"
description: ""
date: "2024-03-23"
tags: ["AI", "Product Management", "Interview Preparation"]
---
# Product Requirement Document (PRD)

## Product Name: MockJam  
### Subtitle: Practice real PM interviews. Anytime. Anywhere.

---

## 🧭 Vision

To help aspiring and practicing product managers build clarity under pressure by simulating **real PM interviews** - solo, repeatable, and brutally honest.

---

## 🎯 Problem

Most PM candidates fail not because they don’t know the frameworks -  
they fail because they don’t know how to **think clearly in the moment**.

Mock interviews work, but:
- Finding serious partners is hard
- Feedback is either sugar-coated or vague
- People feel nervous or unprepared
- Realism is missing - nothing feels like the actual interview

So they stop doing mocks.

There’s no LeetCode for PMs.  
No habit-forming practice loop.  
No space to **fail safely, learn fast, and build thinking muscle.**

---

## 🧪 Solution (v1 Scope)

A solo mock interview tool for PMs that:
- Asks real PM questions (from Product Sense to Strategy)
- Reacts like a real interviewer using AI
- Gives structured, sharp, no-fluff feedback
- Removes social hesitation (no peer needed)
- Can be repeated anytime

---

## 👤 Target User

- PM job switchers (tech → PM, APM → PM)
- Candidates in interview prep sprints
- PMs leveling up for FAANG-style rounds
- People who prefer async, private prep over peer groups

---

## ✍️ Core User Flow (v1)

1. **Landing Page**
   - Value proposition + sample questions + screenshots
   - CTA: "Start your first mock free"

2. **Signup**
   - Google Auth (Firebase)
   - Store `uid` + email only

3. **Mock Interview Flow**
   - User selects category (Product Sense / Metrics / etc.)
   - Interview starts with warm intro
   - Candidate responds (typed or voice)
   - AI evaluates based on prompt logic
   - Returns feedback as structured JSON:
     - `emotionalReaction`
     - `pushThinking`
     - `optionalTacticalNudge`

4. **Post-Interview**
   - Shows full transcript + feedback
   - Option to retry question
   - Save session to history

5. **History Page**
   - View past mocks + feedback
   - Compare thinking evolution

---

## 📐 Feedback System (Covered in separate PRD but summary below)

- Based on real interview triggers
- 6-dimension rubric: Goal, User, Friction, Prioritize, Move, Metric
- Only evaluates after commitment
- Interrupts vague or spiraling logic
- Never over-praises. Only reacts when it matters.

(See: `MockJam_FeedbackSystem_PRD.md` for full details)

---

## 🚫 Not in v1 (Intentionally)

- Peer-to-peer mock sessions
- Leaderboard / gamification
- Self-rating / star system
- Resume review / case study upload
- Video recording

These add friction or require moderation.  
**V1 is all about flow, repetition, habit.**

---

## 📊 Success Metrics

### Activation
- % of users who start a mock within 10 minutes of signup

### Retention
- % of users who complete 3+ mocks in first 5 days
- % of returning users in Week 2

### Quality
- % of users who say feedback “felt like a real interview” (survey)
- % of mocks with full answer + rubric triggered

### Behavior
- Median mocks per active user (weekly)
- Most common dropout point in the flow

---

## 🛠️ Tech Stack

- **Frontend**: Next.js + Tailwind
- **Backend**: Firebase Functions + Firestore
- **Auth**: Firebase Auth (Google only in v1)
- **AI Layer**: OpenAI API (GPT-4), custom prompt
- **Audio (v2)**: Deepgram or Whisper for voice input (if used)
- **Payments (post-launch)**: Razorpay (India) + Paddle (Global)

---

## 🔁 Feedback Loop

- Internal usage: I use it daily to improve prompt and logic
- Early user testers from HelloPM and friends
- Feedback via 1-click emoji + optional text (“Did this feel real?”)

---

## 🧱 Moat (What Makes MockJam Different)

- Built for solo practice, no scheduling overhead
- System simulates real tension, not just structure
- High-quality prompt system refined with every real mock
- Structured feedback that teaches *how to think*, not just what to say
- Product is shaped by personal need + firsthand insights, not theory

---

## 🗺️ Future Ideas (Not in v1)

- Streak system (mock daily, maintain streak)
- Scenario-based interview sets (e.g., “You’re PM at Spotify...”)
- Add follow-up loops (multi-question drills)
- Community leaderboard (only if it feels safe & fun)
- Audio-based input with real-time interruption

---

## 🤝 Team

- Solo builder: Design, frontend, backend, prompt, infra - all me
- Goal: Launch > Learn > Iterate fast > Then build outward

---

## 🧵 Closing Line

MockJam isn't about simulating a perfect interview.  
It's about making you **practice like it’s real** -  
so when it is, you’re already used to the pressure.

