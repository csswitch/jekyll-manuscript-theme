---
layout: post
title: "Welcome to Manuscript Theme"
date: 2024-01-15
author: The Editor
category: Editorial
tags: [jekyll, typography, blogging]
---

This is Manuscript — a Jekyll theme for writers who care about typography as much as they care about words.

Most blog themes are designed around the dashboard, the admin panel, the statistics. Manuscript is designed around the page. The paragraph. The sentence.

## What Sets Manuscript Apart

Open any issue of *The New Yorker*, *The Atlantic*, or *Granta* and you'll notice something immediately: the type is doing the heavy lifting. There's no hero image. No gradient button. No animated scroll reveal. Just text, beautifully set.

That's the ambition here.

- **Cormorant Garamond** for headlines — a free display serif that rivals expensive foundry fonts
- **Lora** for body text — purpose-built for screens, warm and readable at length
- **Drop caps** mark the beginning of essays like magazine features
- **Pull quotes** let you lift the most important lines into margin-width callouts
- **Warm cream background** because pure white is a mistake for long-form reading

## Getting Started

Edit `_config.yml` to set your publication name, description, and the `manuscript:` config block:

```yaml
manuscript:
  drop_cap: true
  pullquote: true
  reading_time: true
  issue_number: "Vol. 1, No. 1"
```

Then create posts in `_posts/` using the standard Jekyll naming convention: `YYYY-MM-DD-title.md`.

> This is a pull quote. Use `>` blockquote syntax in your Markdown to render the editorial pull-quote style.

## Sample Post Structure

Every post supports these front matter fields:

```yaml
---
layout: post
title: "Your Essay Title"
date: 2024-01-15
author: Your Name
category: Essays          # shown as kicker above the title
tags: [writing, culture]
---
```

The first paragraph of every post automatically receives the drop cap treatment. Write your opening line as if it's the beginning of a magazine feature — because it is.

---

*Manuscript Theme is part of the csswitch premium Jekyll template pack. Browse all themes at [csswitch.github.io](https://csswitch.github.io).*
