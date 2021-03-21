# body

---

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

## Usefull links

- [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset)
