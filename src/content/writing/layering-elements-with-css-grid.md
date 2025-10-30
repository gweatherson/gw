---
title: Layering elements with CSS grid
date: 10-15-2025
permalink: layering-elements-with-css-grid
---

One of my favorite little css tricks is using grid to stack elements when needed. This may be a no-duh moment for other humans, but hopefully it can help some folks out.

```css
// The foundation
.parent {
  display: grid;
}

.first-child,
.section-child {
  grid-area: 1 / 1;
}

// Simplier example
.parent {
  display: grid;
}

.parent * {
  grid-area: 1 / 1;
}
```


I often use these rules for stacking in a hero, but basically any place where a background element is needed with content on top. Cards, full width call to actions, you name it. Pretty neat!

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ZYQJYxo" data-pen-title="Grid Area Hero" data-user="gweatherson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/gweatherson/pen/ZYQJYxo">
  Grid Area Hero</a> by Glenn Weatherson (<a href="https://codepen.io/gweatherson">@gweatherson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

[Link to Codepen](https://codepen.io/gweatherson/pen/ZYQJYxo)

From there, a few positioning rules can change the content alignment. It's not only about centered content on top of a layer underneath.

```css
.content {
  place-self: start;
  align-self: end;
  align-items: start;
}
```

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MYKBwwx" data-pen-title="Grid Area Hero (Alternative Positioning)" data-user="gweatherson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/gweatherson/pen/MYKBwwx">
  Grid Area Hero (Alternative Positioning)</a> by Glenn Weatherson (<a href="https://codepen.io/gweatherson">@gweatherson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

[Link to Codepen](https://codepen.io/gweatherson/pen/MYKBwwx)

The older method would have been using absolute positioning and then vertically and/or horizontally centering the above element(s) using transforms or some other form of positioning. This works, but it now feels hacky and is typically more code.