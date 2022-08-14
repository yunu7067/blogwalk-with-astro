---
layout: '@lays/BlogPost.astro'
title: 'About this blog.'
publishDate: 2022-07-01
description: 'Description about this blog.'
tags: ['about', 'hello-blog']
series: 'Blog Guide'
---

# About Page

```html
<!-- ![social](/src/assets/social.png)
![social](/src/assets/introducing-astro.jpg) -->
```

![social](/assets/social.png)

![social](/assets/introducing-astro.jpg)

```

<p>
  <Picture src={import("/src/assets/social.png")} alt="social" widths={[320, 768]} />
</p>
<p>
  <Picture src={import("/src/assets/introducing-astro.jpg")} alt="social" widths={[320, 768]} />
</p>
```

```markdown {5}
---
# src/pages/post/blog-post.md
---

interface a {
b : String;
}
```

- test

  teaklfjlsdjflsd
  sdfsfs
  s
  sdf

  sadfas
