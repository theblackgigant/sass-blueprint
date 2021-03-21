# Buttons

---

## Overview

_For each version there is a `button` and an `a` version._

<!-- tabs:start -->

<!-- tab:Default -->

<div class='btn-overview'>
  <button class='btn'>Button</button>
  <a href='#' class='btn'>Button</a>
</div>

**Markup**

```html
<button class="btn">Button</button> <a href="#" class="btn">Button</a>
```

<!-- tab:Call to Action -->

<div class='btn-overview'>
  <button class='btn btn--cta'>Button</button>
  <a href='#' class='btn btn--cta'>Button</a>
</div>

**Markup**

```html
<button class="btn btn--cta">Button</button>
<a href="#" class="btn btn--cta">Button</a>
```

<!-- tab:Inset -->

<div class='btn-overview'>
  <button class='btn btn--inset'>Button</button>
  <a href='#' class='btn btn--inset'>Button</a>
</div>

**Markup**

```html
<button class="btn btn--inset">Button</button>
<a href="#" class="btn btn--inset">Button</a>
```

<!-- tab:Inset Inverted -->

<div class='btn-overview'>
  <button class='btn btn--inset-inverted'>Button</button>
  <a href='#' class='btn btn--inset-inverted'>Button</a>
</div>

**Markup**

```html
<button class="btn btn--inset-inverted">Button</button>
<a href="#" class="btn btn--inset-inverted">Button</a>
```

<!-- tab:Slide -->

<div class='btn-overview'>
  <button class='btn btn--slide'>Button</button>
  <a href='#' class='btn btn--slide'>Button</a>
</div>

**Markup**

```html
<button class="btn btn--slide">Button</button>
<a href="#" class="btn btn--slide">Button</a>
```

<!-- tabs:end -->

## Code

```scss
.btn {
  display: inline-flex;
  @extend %flex--center;
  background: none;
  border: var(--border-size, 1px) var(--border-style) var(--clr-neutral-900);
  outline: var(--outline-size, 0px) var(--border-style) var(--clr-neutral-900);
  color: var(--clr-neutral-900);
  cursor: pointer;
  padding: calc(0.75em - var(--border-size, 1px)) calc(
      2rem - var(--border-size, 1px)
    );
  transition: background-color var(--timing-fast) var(--easing), color var(
        --timing-fast
      ) var(--easing);

  &:visited {
    color: var(--clr-neutral-900);
  }

  &:hover,
  &:focus {
    background: var(--clr-neutral-900);
    color: var(--clr-neutral-0);
  }

  &--cta {
    --border-size: 0px;
    border: none;
    color: var(--clr-neutral-0);
    background: var(--clr-cta-500);

    &:visited {
      color: var(--clr-neutral-0);
    }

    &:hover,
    &:focus {
      background: var(--clr-neutral-900);
    }
  }

  &--inset {
    --border-size: 2px;
    --outline-size: var(--border-size);
    outline-offset: calc(var(--outline-size) * -1);
    transition: outline-offset var(--timing-fast) var(--easing);

    &:hover,
    &:focus {
      background: none;
      color: inherit;
      outline-offset: calc(var(--outline-size) * -3);
    }
  }

  &--inset-inverted {
    --border-size: 0px;
    --outline-size: 2px;
    background: var(--clr-secondary-500);
    color: var(--clr-neutral-0);
    outline-color: var(--clr-neutral-0);
    outline-offset: 0;
    transition: outline-offset var(--timing-fast) var(--easing);

    &:visited {
      color: var(--clr-neutral-0);
    }

    &:hover,
    &:focus {
      background: var(--clr-secondary-500);
      outline-offset: calc(var(--outline-size) * -3);
    }
  }

  &--slide {
    position: relative;

    @include pseudo {
      @extend %absolute;
      @extend %absolute--full;
      background: var(--clr-secondary-500);
      max-width: 0;
      transition: max-width var(--timing-fast) var(--easing), color var(
            --timing-fast
          ) var(--easing);
      z-index: -1;
    }

    &:hover,
    &:focus {
      background: none;

      @include pseudo {
        max-width: 100%;
      }
    }
  }
}
```

## Requirements

- **[Mixin]** [pseudo](/mixins/pseudo.md)
- **[Placeholder]** [%flex](placeholders/flex.md)
- **[Placeholder]** [%absolute](placeholders/absolute.md)

## Usefull links

- [calc()](<https://developer.mozilla.org/en-US/docs/Web/CSS/calc()>)

---
