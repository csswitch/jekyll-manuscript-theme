---
layout: post
title: "Editorial Typography with CSS: The Principles Behind Print-Quality Web Type"
date: 2024-01-22
author: The Editor
category: Craft
tags: [css, typography, design, web-development]
---

Typography is the invisible architecture of a page. When it works, readers don't notice it. When it fails, they feel it — restless, tired, unable to finish the sentence they started.

This essay is about making type work. Specifically, about borrowing from print — from centuries of editorial refinement — and applying those lessons to CSS. We'll cover the exact techniques used in Manuscript Theme.

## The Drop Cap

Nothing announces "this is an essay" quite like a drop cap. The first letter of a paragraph, enlarged, dropped down to sit alongside two or three lines of body text.

In CSS, this is a single rule:

```css
p:first-of-type::first-letter {
  font-family: 'Cormorant Garamond', serif;
  font-size: 4.5rem;
  font-weight: 700;
  float: left;
  line-height: 0.75;
  margin: 0.05em 0.1em 0 0;
}
```

The trick is `line-height: 0.75` — lower than 1 — combined with careful `margin` adjustment. Too high and the letter floats above the line. Too low and it sinks below it.

## The Oxford Double Rule

Print magazines use rules — horizontal lines — as structural elements. The Oxford style uses a double rule: a thin line stacked above a thick one, or vice versa, creating visual weight without a full header.

In CSS:

```css
border-top: 3px double #1a1410;
```

The `double` value in `border-style` renders as two parallel lines with a gap between them. It's a small thing. It signals craft.

## Pull Quotes

A pull quote is a line lifted from the body text and displayed larger, in the margin or across a column. It signals to the skimming reader: *here is the important part*.

In Manuscript Theme, pull quotes use standard Markdown blockquote syntax — `>` — and are styled as oversized callouts:

```css
blockquote {
  border-left: 4px solid #8b1a1a;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-style: italic;
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
}

blockquote::before {
  content: '\201C';
  font-size: 5rem;
  position: absolute;
  left: -0.5rem;
  top: -1rem;
  opacity: 0.15;
}
```

The `\201C` is the Unicode left double quotation mark — `"`. At 5rem, scaled down in opacity, it sits as a decorative watermark behind the blockquote.

## Paragraph Indentation

Books and magazines use indentation to separate paragraphs, not blank lines. It's more space-efficient and feels more typographically controlled.

```css
p + p {
  text-indent: 1.5em;
  margin-top: 0;
}
```

The `p + p` selector only applies indentation to paragraphs that follow another paragraph — so the first paragraph in a section doesn't get indented.

## Warm White vs. Pure White

The cream background (`#faf7f2`) in Manuscript Theme isn't an accident. Pure white (`#ffffff`) creates high contrast against dark text — technically readable, but tiring over long reading sessions.

Warm off-white reduces that contrast slightly, making longer pieces more comfortable to read. It also gives the page a paper-like quality that reinforces the editorial aesthetic.

---

These are small decisions. Typography is full of small decisions. But accumulated, they determine whether your blog feels like it was put together carefully, or assembled from a template.

Manuscript Theme is the careful version.

> *The best typography is invisible. The reader should think only about the ideas, never about the letters carrying them.*
