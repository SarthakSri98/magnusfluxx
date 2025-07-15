---
title: "Dodo Kit"
description: "A digital mediakit for Influencers"
why: "I created DodoKit to help creators who needed a well-designed media kit to reach out to brands but were deterred by the manual effort required."
how:
  - "Login to https://dodoclub.in"
  - "Click on mediakit"
  - "Fill your InstaId, you will be in a waitlist"
  - "Dodokit does its magic"
  - "You get notified about your brand new digital mediakit"
highlight:
  - "Designed the product flow and GTM strategy, reached out to hundreds of creators manually, did multiple iterations, onboarded 50 as of now."
date: "2024-03-21"
status: "Live"
featured: true
image: "/dodokit.jpeg"
tools: []
relatedBlogs:
  - "dodo-kit/launch-story"
urls: 
  - title: "Live"
    url: "https://dodoclub.in"

---

## Overview

Dodo Kit is a modern design system built for developers who care about accessibility, performance, and developer experience. It provides a comprehensive set of components that are:

- Fully accessible
- Highly performant
- Easy to customize
- Well documented

## Features

### Core Components

- **Button System**  
  Flexible, accessible buttons with variants and states.

- **Form Controls**  
  Input, Select, Checkbox, Radio, and more with full ARIA support.

- **Navigation**  
  Menus, Tabs, and Breadcrumbs that work with keyboard navigation.

### Developer Experience

- **TypeScript First**  
  Full type safety and excellent IDE support.

- **Tailwind Integration**  
  Works seamlessly with your Tailwind setup.

- **Storybook Documentation**  
  Interactive examples and documentation.

## Getting Started

```bash
npm install @dodo-kit/core
```

Then import and use components:

```tsx
import { Button } from '@dodo-kit/core'

function App() {
  return (
    <Button variant="primary">
      Get Started
    </Button>
  )
}
```

## Why Another Design System?

We built Dodo Kit because we believe developer experience matters. Every component is designed to be:

1. **Intuitive to Use**  
   Clear props, consistent patterns, no surprises.

2. **Easy to Customize**  
   Extend with Tailwind, override with CSS, or use the theme API.

3. **Production Ready**  
   Battle-tested in real applications.

## What's Next

- More complex components
- Animation primitives
- Theme builder
- CLI tools

Join us in building the next generation of web interfaces!
