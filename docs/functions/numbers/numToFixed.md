# numToFixed

---

Formats a number using fixed-point notation

## Parameters

- **[Number]** `$num` - Number to format
- **[Number]** `$digits` _3_ - Max number of digits

## Returns

**[Number]** Formatted number

## Example

```scss
numToFixed(5.12345) => 5.123
numToFixed(5.12345, $digits: 1) => 5.1
```

## Code

```scss
@function numToFixed($num, $digits: 3) {
  $base: 1;

  @if $digits > 0 {
    @for $i from 1 through $digits {
      $base: $base * 10;
    }
  }

  @return math.round($num * $base) / $base;
}
```

## Used by

- **[Function]** [fontScale](/functions/strings/fontScale.md)
- **[Function]** [pxToRem](/functions/numbers/pxToRem.md)

## Usefull links

- [round()](https://sass-lang.com/documentation/modules/math#round)

---
