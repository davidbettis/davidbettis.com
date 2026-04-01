# CLAUDE.md

## Project Overview

Personal website for David Bettis (davidbettis.com). A simple, content-focused static site.

## Tech Stack

- **Static site generator:** Eleventy (11ty) v3
- **Templating:** Nunjucks (`.njk` layouts) + Markdown (`.md` content)
- **Markdown:** markdown-it with `markdown-it-attrs` plugin for inline attributes
- **Hosting:** AWS S3 + CloudFront CDN
- **Build tool:** Make (not npm scripts)

## Commands

- `make build` — install deps and build the site
- `make server` — local dev server with hot reload
- `make deploy` — build, sync to S3, invalidate CloudFront cache
- `make clean` — remove `_site` and `node_modules`

## Directory Structure

```
src/                    # Eleventy input directory
├── _includes/
│   └── base.njk        # Single base layout (all pages use layout: base)
├── assets/
│   ├── css/
│   ├── fonts/
│   └── images/
├── open-cookbook/       # Project page + privacy policy
│   ├── index.md
│   └── privacy-policy/
│       └── index.md
└── index.md            # Homepage
public/                 # Build output (gitignored)
.eleventy.js            # Eleventy config
config.sh               # Deploy credentials (gitignored)
```

## Content Conventions

- Pages are Markdown files with YAML front matter (`title`, `layout`, `description`)
- URL structure follows directory layout: `src/foo/index.md` → `/foo/`
- HTML is allowed inline in Markdown (`html: true` in markdown-it config)
- Markdown attributes plugin enables syntax like `{.class width=100}`
- Static assets are passthrough-copied (no compilation/bundling)
