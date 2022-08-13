---
setup: |
  import Layout from '@lays/BlogPost.astro'
  import { Picture } from '@astrojs/image/components'
title: 'About this blog.'
publishDate: 2022-07-01
description: 'Description about this blog.'
tags: ['about', 'hello-blog']
series: 'Blog Guide'
---

# About Page

<!-- ![social](/src/assets/social.png)
![social](/src/assets/introducing-astro.jpg) -->

<p>
  <Picture src={import("/src/assets/social.png")} alt="social" widths={[320, 768]} />
</p>
<p>
  <Picture src={import("/src/assets/introducing-astro.jpg")} alt="social" widths={[320, 768]} />
</p>

- test

  teaklfjlsdjflsd
  sdfsfs
  s
  sdf

  sadfas
