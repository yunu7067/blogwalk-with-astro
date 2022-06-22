---
setup: |
  import Layout from '../../../layouts/BlogPost.astro'
  import { Picture } from "astro-imagetools/components";
title: Nice!
publishDate: 12 Sep 2021
name: Nate Moore
value: 128
description: Just a Hello World Post!
---

![Astro](/public/assets/blog/introducing-astro.jpg)


This is so cool!

Do variables work {frontmatter.value * 2}?


```javascript
// Example JavaScript

const x = 7;
function returnSeven() {
  return x;
}

```
