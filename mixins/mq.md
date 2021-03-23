# Media query

---

## Parameters

- **[String]** `$key` - Key present in `$breakpoints`

## Example

```scss
@include mq('small') {
  // Your CSS here
}
@include mq('medium') {
  // Your CSS here
}
```

## Code

```scss
@mixin mq($key) {
  @if map.has-key($breakpoints, $key) {
    $size: map.get($breakpoints, $key);

    @media only screen and (min-width: #{$size}) {
      @content;
    }
  } @else {
    @error "Map does not contain key: '#{$key}'";
  }
}
```

## Requirements

- **[Variable]** [breakpoints](variables/breakpoints.md)

## Used by

- **[CSS]** [.grid](css/components/grid.md)
- **[CSS]** [.columns](css/components/grid.md)

## Usefull links

- [has-key()](https://sass-lang.com/documentation/modules/map#has-key)
- [get()](https://sass-lang.com/documentation/modules/map#get)

---
