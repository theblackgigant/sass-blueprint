# tintColor

---

Creates tint of a given color

## Parameters

- **[Color]** `$color` - Color to tint
- **[Number]** `$weight` - How much white to apply (percentage)

## Returns

**[Color]** Tinted color

## Example

```scss
tintColor(#ff0000, 20%) => #ff3333
tintColor(#0000ff, 80%) => #ccffcc
```

## Code

```scss
@function tintColor($color, $weight) {
  @return color.mix(black, $color, $weight);
}
```

## Usefull links

- [mix()](https://sass-lang.com/documentation/modules/color#mix)

---
