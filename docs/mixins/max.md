# Max

---

The max() CSS function lets you set the largest (most positive) value from a list of comma-separated expressions as the value of a CSS property value.

## Parameters

- **[String]** `$property` - CSS property to that uses the `max`
- **[List]** `$values` - list of values to add to the `max` function, first element will be used as fallback

## Example

```scss
@include max(height, 20rem, 50vh);
```

## Code

```scss
@mixin max($property, $values...) {
  #{$property}: list.nth($values, 1);
  #{$property}: max(#{$values});
}
```

## Usefull links

- [max()](<https://developer.mozilla.org/en-US/docs/Web/CSS/max()>)
- [nth()](https://sass-lang.com/documentation/modules/list#nth)

---
