# Pseudo

---

## Parameters

- **[String]** `$type` _before_ - Type of pseudo selector
- **[String]** `$content` _""_ - Content to use

## Example

```scss
@include pseudo {
  // Your CSS here
}
@include pseudo($type: after) {
  // Your CSS here
}
```

## Code

```scss
@mixin pseudo($type: before, $content: '') {
  &::#{$type} {
    content: $content;
    @content;
  }
}
```

## Used by

- **[CSS]** [.btn](css/components/buttons.md)

---
