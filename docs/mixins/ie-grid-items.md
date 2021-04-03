# IE Grid Items

---

Add fallback styling for grids in Internet Explorer.

## Parameters

- **[Number]** `$cols` - Number of columns
- **[Number]** `$rows` - Number of rows

## Example

```scss
@include ie-grid-items(3, 2);
```

## Code

```scss
@mixin ie-grid-items($cols, $rows) {
  $row: 1;
  $column: 0;

  @for $i from 1 through $rows * $cols {
    $column: $column + 1;

    &:nth-child(#{$i}) {
      -ms-grid-column: 1;
      -ms-grid-row: $i;

      @include mq('medium') {
        -ms-grid-column: $column;
        -ms-grid-row: $row;
      }
    }

    @if ($i % $cols == 0) {
      $column: 0;
      $row: $row + 1;
    }
  }
}
```

## Requirements

- **[Mixin]** [mq](mixins/mq.md)

---
