---
title: Animated CSS Accordions
date: 11-22-2025
permalink: animated-css-accordions
---

The [details and summary HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) are a modern way to create accordions. On top of that, we can add small bit of CSS to animate the open and closed state.

It will be accessible, lean, and quick to create. Also, no javascript will be necessary to control states by adding classes to the DOM.

Here's a very simple example of how the stock accordion works:
```html
<details>
  <summary>Tab</summary>
  Tab content that's hidden by default.
</details>
```

You can add the open attribute to have an accordion open on page load.
```html
<details open>
  <summary>Tab</summary>
  Now you can see this content on load.
</details>
```

Now to the animation, we'll need to use [interpolate-size](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interpolate-size) to animate height changes. This isn't fully supported in all browsers at the time of writing this. But the good news is nothing will break if so, it'll just not animate.

The finishing steps are applying css transitions to shadow dom elements for block-size, content-visibility, and opacity.

```css
details::details-content {
  block-size: 0;
  opacity: 0;
  transition:
    block-size  0.3s ease,
    content-visibility 0.3s ease,
    opacity 0.3s ease;
    transition-behavior: allow-discrete;
}

details[open]::details-content {
  block-size: auto;
  opacity: 1;
}
```

That will make an open and close state buttery smooth! Check out the demo:
<p class="codepen" data-height="300" data-default-tab="html" data-slug-hash="xbVPYyg" data-pen-title="Multi Select" data-user="gweatherson" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/gweatherson/pen/xbVPYyg">
  Multi Select</a> by Glenn Weatherson (<a href="https://codepen.io/gweatherson">@gweatherson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://public.codepenassets.com/embed/index.js"></script>

* [docs: interpolate-size](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interpolate-size)
* [docs: details and summary HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)