# Manuscript Theme

[![License: csswitch Commercial](https://img.shields.io/badge/license-csswitch%20commercial-blue.svg)](./LICENSE)
[![Buy on Gumroad](https://img.shields.io/badge/Buy-%2449-brightgreen.svg)](https://csswitch.gumroad.com/l/csswitch-manuscript)
[![Live Demo](https://img.shields.io/badge/demo-live-orange.svg)](https://csswitch.github.io/jekyll-manuscript-theme/)

> **⚠️ License notice:** This theme is source-available but **not free to use**.  
> Viewing and learning from the code is welcome. Deploying it on any live site requires a [paid license](https://csswitch.gumroad.com/l/csswitch-manuscript).  
> See [LICENSE](./LICENSE) for full terms.

![Jekyll](https://img.shields.io/badge/Jekyll-4.x-red?logo=jekyll)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-compatible-success?logo=github)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-informational)

> **Editorial magazine-style Jekyll theme for writers, essayists, and independent publishers.**

**[Live Demo →](https://csswitch.github.io/jekyll-manuscript-theme/)**

---

## Overview

Manuscript is a Jekyll theme designed around the principles of print editorial typography. Drop caps, pull quotes, Oxford double rules, warm cream backgrounds, and exquisite serif fonts — built for long-form writing, not dashboards.

Inspired by *The New Yorker*, *The Atlantic*, and *Granta*.

## Features

- 🖋 **Drop cap** on first paragraph of every post
- 📐 **Oxford double rule** as structural separator
- 💬 **Pull quote** blockquote style (oversized quotation mark)
- 🎨 **Editorial color palette** — warm cream, ink, editorial red accent
- 📰 **Two-column post grid** on homepage
- 🔖 **Featured first post** — lead article treatment
- 🏷 **Tags cloud** + per-tag archive page
- 📅 **Year-grouped archive**
- ⏱ **Reading time** (vanilla JS, no library)
- 📋 **Copy code** button on all code blocks
- 📱 **Responsive** — mobile-first
- 🔍 **SEO optimized** — jekyll-seo-tag
- 📡 **RSS feed** — jekyll-feed
- ⚡ **No jQuery** — vanilla JS only
- 🔌 **GitHub Pages compatible** plugins only

## Fonts

| Role | Font |
|------|------|
| Display/Headlines | Cormorant Garamond (600, 700, italic) |
| Body copy | Lora (400, 500, italic) |
| Code | IBM Plex Mono |
| UI/meta | IBM Plex Sans |

All loaded from Google Fonts — no self-hosting required.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `$cream` | `#faf7f2` | Page background |
| `$cream-2` | `#f0ebe2` | Card backgrounds |
| `$ink` | `#1a1410` | Headlines |
| `$ink-dark` | `#0d0a07` | Masthead background |
| `$accent` | `#8b1a1a` | Editorial red (links, rules, hover) |
| `$text` | `#2a211a` | Body text |

## Installation

### Quick Start

```bash
git clone https://github.com/csswitch/jekyll-manuscript-theme.git my-site
cd my-site
bundle install
bundle exec jekyll serve
```

### Use with Existing Site

1. Copy `_sass/`, `_layouts/`, `assets/`, `_config.yml` to your project
2. Update `_config.yml` with your site details
3. Run `bundle install && bundle exec jekyll serve`

## Configuration

```yaml
# _config.yml
title: Your Publication Name
description: "Tagline or description"
url: "https://yourusername.github.io"

# Manuscript theme config
manuscript:
  drop_cap: true          # Drop cap on first paragraph of posts
  pullquote: true         # Styled blockquotes as pull quotes
  reading_time: true      # Reading time in post header
  issue_number: "Vol. 1"  # Shown in masthead (optional)
```

## File Structure

```
jekyll-manuscript-theme/
├── _config.yml
├── _layouts/
│   ├── default.html      # Base layout (masthead + nav + footer)
│   ├── home.html         # Post list with featured first post
│   ├── post.html         # Individual post with drop cap + header
│   └── page.html         # Generic page
├── _sass/
│   ├── _variables.scss   # Design tokens, fonts, mixins
│   ├── _base.scss        # Typography reset, blockquotes, tables
│   ├── _layout.scss      # Masthead, nav, page wrapper, footer
│   └── _components.scss  # Cards, tags, headers, pagination
├── assets/
│   ├── css/main.scss
│   ├── js/manuscript.js
│   └── img/favicon.svg
├── _posts/
│   └── YYYY-MM-DD-*.md
├── index.html
├── about.md
├── archive.md
└── tags.md
```

## License

MIT License — free to use for personal and commercial projects.

---

**Part of the [csswitch](https://github.com/csswitch) premium Jekyll template pack.**  
Browse all 10 themes: [csswitch.github.io](https://csswitch.github.io)
