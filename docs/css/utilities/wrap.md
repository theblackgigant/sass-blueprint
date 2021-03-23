# .wrap

The `.wrap` utility will contain elements within it's container. This is helpfull for centering our content within a given space.

## Overview

_Resize browser to see the effects_

<div class="wrap wrap--overview">
  <span>This element cannot be wider than the wrapper limit</span>
</div>

**Markup**

```html
<div class="wrap">
  <span>This element cannot be wider than the wrapper limit</span>
</div>
```

## Code

```css
.wrap {
  max-width: var(--breakpoint-medium);
  margin: 0 auto;
}
```
