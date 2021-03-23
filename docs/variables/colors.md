# Colors

---

Each `SCSS` color will be a converted to a `CSS` variable. Where `500` will be the neutral point (the color you specified).

Their tints and shades are the same color with an added amount of either white (tints) or black (shades). These steps increment by 20% each time.

## Overview

<!-- Table will be loaded via the colorToTable plugin, entry span is it's hook -->

<span class='color-table-entry'></span>

## SCSS variables

```scss
$colors: (
  primary: hsl(186, 37%, 38%),
  secondary: hsl(200, 100%, 36%),
  cta: hsl(0, 66%, 60%),
  neutral: hsl(210, 11%, 71%),
) !default;
```

## CSS Variables

```css
:root {
  --clr-primary-100: #d8e5e7;
  --clr-primary-200: #b1cbce;
  --clr-primary-300: #8bb2b6;
  --clr-primary-400: #64989d;
  --clr-primary-500: #3d7e85;
  --clr-primary-600: #31656a;
  --clr-primary-700: #254c50;
  --clr-primary-800: #183235;
  --clr-primary-900: #0c191b;
  --clr-secondary-100: #cce4f1;
  --clr-secondary-200: #99cae3;
  --clr-secondary-300: #66afd4;
  --clr-secondary-400: #3395c6;
  --clr-secondary-500: #007ab8;
  --clr-secondary-600: #006293;
  --clr-secondary-700: #00496e;
  --clr-secondary-800: #00314a;
  --clr-secondary-900: #001825;
  --clr-cta-100: #f8dddd;
  --clr-cta-200: #f1bbbb;
  --clr-cta-300: #ea9a9a;
  --clr-cta-400: #e37878;
  --clr-cta-500: #dc5656;
  --clr-cta-600: #b04545;
  --clr-cta-700: #843434;
  --clr-cta-800: #582222;
  --clr-cta-900: #2c1111;
  --clr-neutral-0: #ffffff;
  --clr-neutral-100: #eff0f2;
  --clr-neutral-200: #dee1e5;
  --clr-neutral-300: #ced3d7;
  --clr-neutral-400: #bdc4ca;
  --clr-neutral-500: #adb5bd;
  --clr-neutral-600: #8a9197;
  --clr-neutral-700: #686d71;
  --clr-neutral-800: #45484c;
  --clr-neutral-900: #232426;
  --clr-neutral-1000: #000000;
}
```

## Used by

- **[CSS]** [:root](css/base/root.md)

---