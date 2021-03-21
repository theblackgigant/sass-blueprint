# shadeColor

---

Creates shade of a given color

## Parameters

- **[Color]** `$color` - Color to shade
- **[Number]** `$weight` - How much black to apply (percentage)

## Returns

**[Color]** Shaded color

## Example

```scss
shadeColor(#ff0000, 20%) => #cc0000
shadeColor(#0000ff, 80%) => #000033
```

## Code

```scss
@function shadeColor($color, $weight) {
  @return color.mix(black, $color, $weight);
}
```

## Usefull links

- [mix()](https://sass-lang.com/documentation/modules/color#mix)

---
