# Breakpoints

---

Breakpoints are used for media queries and wrap elements.

## Overview

_Resize browser to see the effects_

<div class='breakpoint-overview'>
  I'm red on a large screen, green on a medium screen and blue on a small screen.
</div>

## SCSS variables

```scss
$breakpoints: (
  small: 40em,
  medium: 65em,
) !default;
```

## CSS Variables

```css
:root {
  --breakpoint-small: 40em;
  --breakpoint-medium: 65em;
}
```

## Used by

- **[Mixin]** [mq](/mixins/mq.md)
- **[CSS]** [:root](css/base/root.md)

---
