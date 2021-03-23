# %flex

---

Easily create `flex` items without having to retype the syntax.

## Example

```scss
.foo {
  @extend %flex;
  // Your CSS here
}
.bar {
  @extend %flex;
  @extend %flex--center;
  // Your CSS here
}
```

## Code

```scss
%flex {
  display: flex;

  &--center {
    align-items: center;
    justify-content: center;
  }
}
```

## Used by

- **[CSS]** [.btn](css/components/buttons.md)

---
