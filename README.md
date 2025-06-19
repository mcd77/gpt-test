# gpt-test

This repository contains a minimal but professional-looking Next.js blog configured for deployment to GitHub Pages.

## Getting Started

Install dependencies (requires internet access):

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build and Export

Build the project and export static files:

```bash
npm run build
```

The static site will be generated in the `out/` directory. Deploy the contents of this directory to the `gh-pages` branch or a folder configured for GitHub Pages.

The `next.config.js` file sets `basePath` and `assetPrefix` for production so that the site works when served from the `/gpt-test` subpath on GitHub Pages.

## Adding Posts

Add Markdown files to the `posts/` directory. Each file should begin with YAML front matter containing `title` and `date` fields. For example:

```markdown
---
title: "My First Post"
date: "2025-06-20"
---

Hello world!
```

Run `npm run build` to generate static pages for each post. Deploy the `out/` directory to GitHub Pages.

## Customizing the Look

Global styles live in `styles/globals.css`. The site uses a dark theme and includes a responsive navigation bar that collapses into a menu button on small screens. Modify these styles or the components in `pages/components/` to further personalize the blog.
