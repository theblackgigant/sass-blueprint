# Transitions

---

Transition properties can be changed inside the `:root` element. There are no `SCSS` variants since these values are hardcoded.

These variables could also be used inside animations to make your whole application use the same timings and durations.

## Overview

_Hover over the cells to see the different transitions_

<table class='transition-table'>
  <thead>
    <tr>
      <th>Easing</td>
      <th>Default</th>
      <th>Slow</th>
      <th>Fast</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Default</td>
      <td class='transition-table__cell'>
        <span class='transition-table__block'></span>
      </td>
      <td class='transition-table__cell'>
        <span class='transition-table__block transition-table__block--slow'></span>
      </td>
      <td class='transition-table__cell'>
        <span class='transition-table__block transition-table__block--fast'></span>
      </td>
    </tr>
    <tr>
      <td>Easing-in</td>
      <td class='transition-table__cell'>
        <span class='transition-table__block transition-table__block--in'></span>
      </td>
      <td class='transition-table__cell'>
        <span class='transition-table__block transition-table__block--in transition-table__block--slow'></span>
      </td>
      <td class='transition-table__cell'>
        <span class='transition-table__block transition-table__block--in transition-table__block--fast'></span>
      </td>
    </tr>
    <tr>
      <td>Easing-out</td>
      <td class='transition-table__cell'>
        <span class='transition-table__block transition-table__block--out'></span>
      </td>
      <td class='transition-table__cell'>
        <span class='transition-table__block transition-table__block--out transition-table__block--slow'></span>
      </td>
      <td class='transition-table__cell'>
        <span class='transition-table__block transition-table__block--out transition-table__block--fast'></span>
      </td>
    </tr>
  </tbody>
</table>

## CSS Variables

```css
:root {
  --timing: 0.5s;
  --timing-slow: 1s;
  --timing-fast: 0.25s;

  --easing: ease-in-out;
  --easing-in: ease-in;
  --easing-out: ease-out;
}
```

---
