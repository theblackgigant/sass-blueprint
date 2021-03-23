# Grid

---

The grid component can be used for displaying data in basic grids. All grids are responsive and will automatically add more rows if you provide enough cells.

## Overview

_Resize browser to see responsive version._

<!-- tabs:start -->

<!-- tab:3 column (default) -->

<div class='grid'>
  <div class='grid__cell'>Cell</div>
  <div class='grid__cell'>Cell</div>
  <div class='grid__cell'>Cell</div>
</div>

**Markup**

```html
<div class="grid">
  <div class="grid__cell">Cell</div>
  <div class="grid__cell">Cell</div>
  <div class="grid__cell">Cell</div>
</div>
```

<!-- tab:2 column -->

<div class='grid grid--two-columns'>
  <div class='grid__cell'>Cell</div>
  <div class='grid__cell'>Cell</div>
</div>

**Markup**

```html
<div class="grid grid--two-columns">
  <div class="grid__cell">Cell</div>
  <div class="grid__cell">Cell</div>
</div>
```

<!-- tab:4 column -->

<div class='grid grid--four-columns'>
  <div class='grid__cell'>Cell</div>
  <div class='grid__cell'>Cell</div>
  <div class='grid__cell'>Cell</div>
  <div class='grid__cell'>Cell</div>
</div>

**Markup**

```html
<div class="grid grid--four-columns">
  <div class="grid__cell">Cell</div>
  <div class="grid__cell">Cell</div>
  <div class="grid__cell">Cell</div>
  <div class="grid__cell">Cell</div>
</div>
```

<!-- tab:Content + Sidebar -->

<div class='grid grid--content-side'>
  <div class='grid__cell'>Content</div>
  <div class='grid__cell'>Sidebar</div>
</div>

**Markup**

```html
<div class="grid grid--content-side">
  <div class="grid__cell">Content</div>
  <div class="grid__cell">Sidebar</div>
</div>
```

<!-- tab:Sidebar + Content -->

<div class='grid grid--side-content'>
  <div class='grid__cell'>Sidebar</div>
  <div class='grid__cell'>Content</div>
</div>

**Markup**

```html
<div class="grid grid--side-content">
  <div class="grid__cell">Sidebar</div>
  <div class="grid__cell">Content</div>
</div>
```

<!-- tab:Sidebar + Content + Sidebar -->

<div class='grid grid--side-content-side'>
  <div class='grid__cell'>Sidebar</div>
  <div class='grid__cell'>Content</div>
  <div class='grid__cell'>Sidebar</div>
</div>

**Markup**

```html
<div class="grid grid--side-content-side">
  <div class="grid__cell">Sidebar</div>
  <div class="grid__cell">Content</div>
  <div class="grid__cell">Sidebar</div>
</div>
```

<!-- tabs:end -->

## Code

_More layouts can be added by creating a class and supplying a `--col-template`._

```scss
.grid {
  display: grid;
  grid-template-columns: var(--col-template, 1fr);
  gap: 2rem;

  @include mq('small') {
    --col-template: repeat(3, 1fr);

    &--two-columns {
      --col-template: repeat(2, 1fr);
    }

    &--four-columns {
      --col-template: repeat(2, 1fr);

      @include mq('medium') {
        --col-template: repeat(4, 1fr);
      }
    }

    &--content-side {
      --col-template: 3fr 1fr;
    }

    &--side-content {
      --col-template: 1fr 3fr;
    }

    &--side-content-side {
      --col-template: 1fr 2fr 1fr;
    }
  }
}
```

## Requirements

- **[Mixin]** [mq](/mixins/mq.md)

## Usefull links

- [repeat()](<https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()>)

---
