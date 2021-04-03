# Min

---

The min() CSS function lets you set the smallest (most negative) value from a list of comma-separated expressions as the value of a CSS property value.

## Parameters

- **[String]** `$property` - CSS property to that uses the `min`
- **[List]** `$values` - list of values to add to the `min` function, first element will be used as fallback

## Example

```scss
@include min(height, 20rem, 50vh);
```

## Code

```scss
@mixin min($property, $values...) {
  #{$property}: list.nth($values, 1);
  #{$property}: min(#{$values});
}
```

## Usefull links

- [min()](<https://developer.mozilla.org/en-US/docs/Web/CSS/min()>)
- [nth()](https://sass-lang.com/documentation/modules/list#nth)

---
