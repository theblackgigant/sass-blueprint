# Reset

Resets some `CSS` attributes to get better cross browser consistency.

More information can be found at: [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset)

---

# \* (Universal selector)

Reset `box-sizing` for all elements

## Code

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

# body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd

Remove default `margin`

## Code

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
```

---

# ul[role='list'], ol[role='list']

Remove list styles on `ul`, `ol` elements with a list role, which suggests default styling will be removed

## Code

```css
ul[role='list'],
ol[role='list'] {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

---

# html:focus-within

Apply smooth scrolling when the page is focused.

!> Don't apply it to the `html` directly since this [interferes](https://css-tricks.com/fixing-smooth-scrolling-with-find-on-page/) with the search on page feature.

## Code

```css
html:focus-within {
  scroll-behavior: smooth;
}
```

---

# body

The `line-height` is set to `1.5` because the default `1.2` just isn’t big enough for accessible, readable text.

!> Setting `text-rendering` to `optimizeLegibility` has some [serious performance issues](https://marco.org/2012/11/15/text-rendering-optimize-legibility), apply it only if you know what the maximum text length will be.

## Code

```css
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
```

---

# a:not([class])

Make underlines more readable on links that don't have a class.

## Code

```css
a:not([class]) {
  text-decoration-skip-ink: auto;
}
```

---

# img, picture

Removes weird gap on images and prevents them from stretching to wide.

## Code

```css
img,
picture {
  max-width: 100%;
  display: block;
}
```

---

# input, button, textarea, select

Inherit fonts for inputs and buttons.

## Code

```css
input,
button,
textarea,
select {
  font: inherit;
}
```

---

# prefers-reduced-motion

Remove all animations, transitions and smooth scroll for people that prefer not to see them.

## Code

```css
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---
