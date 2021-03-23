# fontScale

---

Creates a scaling font size

## Parameters

- **[Number]** `$minFs` - Minimum size of the text
- **[Number]** `$maxFs` - Maximum size of the text
- **[Number]** `$minVW` _360px_ - Viewport width when font-size should be smallest
- **[Number]** `$maxVW` _1140px_ - Viewport witdh when font-size should be biggest
- **[Number]** `$px-per-rem` _14px_ - How many px their are in a single rem

## Returns

**[String]** Clamp function that scales the `font-size`

## Example

```scss
fontScale(1rem, 2rem) => clamp(1rem, calc(0.538rem + 1.795vw), 2rem)
fontScale(1rem, 2rem, $px-per-rem: 16px) => clamp(1rem, calc(0.538rem + 2.051vw), 2rem)
fontScale(2rem, 3.5rem) => clamp(2rem, calc(1.308rem + 2.692vw), 3.5rem)
```

## Code

```scss
@function fontScale(
  $minFS,
  $maxFS,
  $minVW: 360px,
  $maxVW: 1140px,
  $px-per-rem: 14px
) {
  $minVW: $minVW / $px-per-rem;
  $maxVW: $maxVW / $px-per-rem;
  $slope: (($maxFS - $minFS) / ($maxVW - $minVW)) / 1rem;
  $yAxisIntersection: -$minVW * $slope + $minFS;

  $slopeRound: numToFixed($slope * 100) * 1vw;
  $yIntersectionRound: numToFixed($yAxisIntersection);

  @return clamp(
    #{$minFS},
    calc(#{$yIntersectionRound} + #{$slopeRound}),
    #{$maxFS}
  );
}
```

## Requirements

- **[Function]** [numToFixed](/functions/numbers/numToFixed.md)

## Used by

- **[Variable]** [font-scale](/variables/font-scales.md)

## Usefull links

- [clamp()](<https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()>)

---
