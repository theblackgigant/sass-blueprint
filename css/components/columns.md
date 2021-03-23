# Columns

---

The column component can be used to display data in a column based system. Most common is the twelve column system. This is also the system we use, though this can easily be modified via the `$columns` variable.

## Overview

_Resize browser to see responsive version._

<!-- tabs:start -->

<!-- tab:12 -->
<div class='columns'>
  <div class='columns__col columns__col--12'>12</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--12">12</div>
</div>
```

<!-- tab:11-1 -->
<div class='columns'>
  <div class='columns__col columns__col--11'>11</div>
  <div class='columns__col columns__col--1'>1</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--11">11</div>
  <div class="columns__col columns__col--1">1</div>
</div>
```

<!-- tab:10-2 -->
<div class='columns'>
  <div class='columns__col columns__col--10'>10</div>
  <div class='columns__col columns__col--2'>2</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--10">10</div>
  <div class="columns__col columns__col--2">2</div>
</div>
```

<!-- tab:9-3 -->
<div class='columns'>
  <div class='columns__col columns__col--9'>9</div>
  <div class='columns__col columns__col--3'>3</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--9">9</div>
  <div class="columns__col columns__col--3">3</div>
</div>
```

<!-- tab:8-4 -->
<div class='columns'>
  <div class='columns__col columns__col--8'>8</div>
  <div class='columns__col columns__col--4'>4</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--8">8</div>
  <div class="columns__col columns__col--4">4</div>
</div>
```

<!-- tab:7-5 -->
<div class='columns'>
  <div class='columns__col columns__col--7'>7</div>
  <div class='columns__col columns__col--5'>5</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--7">7</div>
  <div class="columns__col columns__col--5">5</div>
</div>
```

<!-- tab:6-6 -->
<div class='columns'>
  <div class='columns__col columns__col--6'>6</div>
  <div class='columns__col columns__col--6'>6</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--6">6</div>
  <div class="columns__col columns__col--6">6</div>
</div>
```

<!-- tab:3x4 -->
<div class='columns'>
  <div class='columns__col columns__col--4'>4</div>
  <div class='columns__col columns__col--4'>4</div>
  <div class='columns__col columns__col--4'>4</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--4">4</div>
  <div class="columns__col columns__col--4">4</div>
  <div class="columns__col columns__col--4">4</div>
</div>
```

<!-- tab:4x3 -->
<div class='columns'>
  <div class='columns__col columns__col--3'>3</div>
  <div class='columns__col columns__col--3'>3</div>
  <div class='columns__col columns__col--3'>3</div>
  <div class='columns__col columns__col--3'>3</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--3">3</div>
  <div class="columns__col columns__col--3">3</div>
  <div class="columns__col columns__col--3">3</div>
  <div class="columns__col columns__col--3">3</div>
</div>
```

<!-- tab:6x2 -->
<div class='columns'>
  <div class='columns__col columns__col--2'>2</div>
  <div class='columns__col columns__col--2'>2</div>
  <div class='columns__col columns__col--2'>2</div>
  <div class='columns__col columns__col--2'>2</div>
  <div class='columns__col columns__col--2'>2</div>
  <div class='columns__col columns__col--2'>2</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--2">2</div>
  <div class="columns__col columns__col--2">2</div>
  <div class="columns__col columns__col--2">2</div>
  <div class="columns__col columns__col--2">2</div>
  <div class="columns__col columns__col--2">2</div>
  <div class="columns__col columns__col--2">2</div>
</div>
```

<!-- tab:12x1 -->
<div class='columns'>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
  <div class='columns__col columns__col--1'>1</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
  <div class="columns__col columns__col--1">1</div>
</div>
```

<!-- tab:3-6-3 -->
<div class='columns'>
  <div class="columns__col columns__col--3">3</div>
  <div class="columns__col columns__col--6">6</div>
  <div class="columns__col columns__col--3">3</div>
</div>

**Markup**

```html
<div class="columns">
  <div class="columns__col columns__col--3">3</div>
  <div class="columns__col columns__col--6">6</div>
  <div class="columns__col columns__col--3">3</div>
</div>
```

<!-- tabs:end -->

!> Every combination is possible as long as each row adds up to the number that you've defined for `$columns` (default: 12).

## Code

```scss
.columns {
  $columns: 12;
  --gap: 2rem;
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat($columns, 1fr);

  &__col {
    @for $i from 1 through $columns {
      @include mq('small') {
        &--#{$i} {
          grid-column-start: span $i;
        }
      }
    }
  }
}
```

## Requirements

- **[Mixin]** [mq](/mixins/mq.md)

## Usefull links

- [repeat()](<https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()>)

---
