---
title: "Dodo Kit"
description: "A modern, accessible design system that puts developers first. Built with React, TypeScript, and Tailwind CSS."
date: "2024-03-21"
status: "Live"
featured: true
image: "/dodokit.jpeg"
tools: [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Storybook",
  "Radix UI"
]
relatedBlogs: [
  "dodo-kit/launch-story"
]
sourceUrl: "https://github.com/yourusername/dodo-kit"
liveUrl: "https://dodo-kit.vercel.app"
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
