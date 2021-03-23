# Font scale

---

Font scales are generated from a min-max range. This is done to make the font-size change based on your screen size.

## Overview

_Resize browser to see the effects_

<div class='fs-overview'>
  <div class='fs-overview__item fs-overview__item--900'>fs-900</div>
  <div class='fs-overview__item fs-overview__item--800'>fs-800</div>
  <div class='fs-overview__item fs-overview__item--700'>fs-700</div>
  <div class='fs-overview__item fs-overview__item--600'>fs-600</div>
  <div class='fs-overview__item fs-overview__item--500'>fs-500</div>
  <div class='fs-overview__item fs-overview__item--400'>fs-400</div>
  <div class='fs-overview__item fs-overview__item--300'>fs-300</div>
  <div class='fs-overview__item fs-overview__item--200'>fs-200</div>
</div>

## SCSS variables

```scss
$font-scale: (
  200: fontScale(0.786rem, 0.857rem),
  300: fontScale(1rem, 1.143rem),
  400: fontScale(1.143rem, 1.286rem),
  500: fontScale(1.286rem, 1.5rem),
  600: fontScale(1.5rem, 1.714rem),
  700: fontScale(1.714rem, 2rem),
  800: fontScale(2.286rem, 2.857rem),
  900: fontScale(2.857rem, 3.714rem),
) !default;
```

## CSS Variables

```css
:root {
  --fs-200: clamp(0.786rem, calc(0.753rem + 0.127vw), 0.857rem);
  --fs-300: clamp(1rem, calc(0.934rem + 0.257vw), 1.143rem);
  --fs-400: clamp(1.143rem, calc(1.077rem + 0.257vw), 1.286rem);
  --fs-500: clamp(1.286rem, calc(1.187rem + 0.384vw), 1.5rem);
  --fs-600: clamp(1.5rem, calc(1.401rem + 0.384vw), 1.714rem);
  --fs-700: clamp(1.714rem, calc(1.582rem + 0.513vw), 2rem);
  --fs-800: clamp(2.286rem, calc(2.022rem + 1.025vw), 2.857rem);
  --fs-900: clamp(2.857rem, calc(2.461rem + 1.538vw), 3.714rem);
}
```

## Requirements

- **[Function]** [fontScale](/functions/strings/fontScale.md)

## Used by

- **[CSS]** [:root](css/base/root.md)

## Usefull links

- [clamp()](<https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()>)
- [calc()](<https://developer.mozilla.org/en-US/docs/Web/CSS/calc()>)

---
