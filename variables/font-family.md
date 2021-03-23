# Font family

---

Font families can be changed inside the `:root` element. There are no `SCSS` variants since these values are hardcoded.

## SCSS Variables

_These variables are only used for creating our @font-faces_

```scss
$font-weights: (
  light: 100,
  regular: 400,
  bold: 700,
) !default;

$fonts: (roboto, poppins) !default;
```

## CSS Variables

```css
:root {
  --font-body: Roboto;
  --font-heading: Poppins;
  --font-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  --font-stack-body: var(--font-body), var(--font-fallback);
  --font-stack-heading: var(--font-heading), var(--font-fallback);
}
```

## Used by

- **[CSS]** [@font-face](css/base/font-face.md)

---
