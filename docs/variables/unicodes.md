# Unicodes

---

Unicodes describe what characters there are in a font file. If the page doesn't use any character in this range, the font is not downloaded. if it uses at least one, the whole font is downloaded.

## Overview

<table class="unicode-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Unicode range(s)</th>
      <th>Unicode range name(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>U+0020-007F,U+00A0-00FF</td>
      <td>Basic Latin, Latin-1 Supplement</td>
    </tr>
    <tr>
      <td>2</td>
      <td>U+0100-017F,U+20A0-20CF</td>
      <td>Latin Extended-A, Currency Symbols</td>
    </tr>
  </tbody>
</table>

> [jrgraphix](https://jrgraphix.net/r/Unicode/) has a complete list so you can check what characters are available in a unicode range

## SCSS Variables

```scss
$unicodes: (
  basic: 'U+0020-007F,U+00A0-00FF',
  extra: 'U+0100-017F,U+20A0-20CF',
) !default;
```

## Used by

- **[CSS]** [@font-face](css/base/font-face.md)

---
