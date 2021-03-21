# prefers-reduced-motion

---

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

## Usefull links

- [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset)
