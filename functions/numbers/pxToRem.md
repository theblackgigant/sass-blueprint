# pxToRem

---

Converts `px` to `rem` unit

## Parameters

- **[Number]** `$size` - Pixel size to be converted
- **[Number]** `$rem` _14px_ - Base rem size in pixels

## Returns

**[Number]** Rem value for given `$size`

## Example

```scss
pxToRem(14px) => 1rem
pxToRem(52px) => 3.714rem
pxToRem(20px, 16px) => 1.25rem
```

## Code

```scss
@function pxToRem($size, $rem: 14px) {
  @return numToFixed($size / $rem) * 1rem;
}
```

## Requirements

**[Function]** [numToFixed](/functions/numbers/numToFixed.md)

## Usefull links

- [round()](https://sass-lang.com/documentation/modules/math#round)

---
