---
title: Dark and Light Mode the Easy Way
date: 10-28-2025
permalink: dark-and-light-mode-the-easy-way
---

There are many ways to have different styles on a site, specifically a light and dark mode. Some methods to achieve this can be including media queries, or using javascript to apply a class to the DOM. These are perfectly fine, especially if you want the user to have control of what they desire with a toggle.

But today we're going over a simplified way with the handy [light-dark CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark).

Before we get to the final example let's go over how this would be done using a media query with [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

```css
body {
  background: white;

  @media (prefers-color-scheme: dark) {
    background: black;
  }
}
```

Let's look at a demo:
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PwZBZWz" data-pen-title="prefers-color-scheme example" data-user="gweatherson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/gweatherson/pen/PwZBZWz">
  prefers-color-scheme example</a> by Glenn Weatherson (<a href="https://codepen.io/gweatherson">@gweatherson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

But what's so bad about that? Nothing! But when you start increasing a site's scale, the media queries spread around like ants on a floor made of syrup.


Now, onto the light-dark() example.

```root: {
  color-scheme: light dark;
}

body {
  background: light-dark(white, black);
}```

Ahh, bliss, sure you have to define the a root variable but there's nothing like 1 liners afterwards.

Here's the same demo above but using light-dark() instead:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ByjPqEG" data-pen-title="prefers-color-scheme example" data-user="gweatherson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/gweatherson/pen/ByjPqEG">
  prefers-color-scheme example</a> by Glenn Weatherson (<a href="https://codepen.io/gweatherson">@gweatherson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

* [mdn: prefers-color-scheme documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
* [mdn: light-dark() documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)