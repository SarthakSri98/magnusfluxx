#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
}

function question(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, resolve)
    })
}

async function main() {
    const title = await question('Blog post title: ')
    const tags = (await question('Tags (comma-separated): ')).split(',').map(t => t.trim())
    const excerpt = await question('Excerpt: ')

    const date = new Date().toISOString().split('T')[0]
    const slug = slugify(title)
    const filePath = path.join(BLOG_DIR, `${slug}.md`)

    const content = `---
title: "${title}"
date: "${date}"
tags: ${JSON.stringify(tags)}
excerpt: "${excerpt}"
---

Write your blog post content here...

## Introduction

## Main Content

## Conclusion
`

    fs.writeFileSync(filePath, content)
    console.log(`\nCreated blog post at: ${filePath}`)
    rl.close()
}

main().catch(console.error) 