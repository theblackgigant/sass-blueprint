# colorToRGB

---

Creates shade of given color

## Parameters

- **[Color]** `$color` - Color to convert

## Returns

**[Color]** RGB version of given `$color`

## Example

```scss
colorToRGB(#ffffff) => 255, 255, 255
colorToRGB(hsl(0, 0%, 0%)) => 0, 0, 0
```

## Code

```scss
@function colorToRGB($color) {
  @return color.red($color), color.green($color), color.blue($color);
}
```

## Usefull links

- [red()](https://sass-lang.com/documentation/modules/color#red)
- [green()](https://sass-lang.com/documentation/modules/color#green)
- [blue()](https://sass-lang.com/documentation/modules/color#blue)

---
