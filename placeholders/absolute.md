# %absolute

---

Easily create `absolute` items without having to retype the syntax.

## Example

```scss
.foo {
  @extend %absolute;
  // Your CSS here
}
.bar {
  @extend %absolute;
  @extend %absolute--full;
  // Your CSS here
}
```

## Code

```scss
%absolute {
  position: absolute;

  &--full {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
```

## Used by

- **[CSS]** [.btn](css/components/buttons.md)

---
