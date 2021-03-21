# @font-face

---

Load font subsets from fonts folder. Generation of subsets should be done by yourself. An explanation on how to generate them can be found at the [bottom](css/font-face?id=generating-subsets) of the page.

## Overview

Font files should use the following structure:

```text
~
└── fonts
  └── [font-name]
      ├── [Font-name]-[Weight].woff
      ├── [Font-name]-[Weight].woff2
      ├── [Font-name]-[Weight]-Extra.woff
      └── [Font-name]-[Weight]-Extra.woff2
```

<table class="fonts-table">
  <thead>
    <tr>
      <th>Files</th>
      <th>Unicode ID</th>
      <th>File types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[Font-name]-[Weight]</td>
      <td>1</td>
      <td>woff, woff2</td>
    </tr>
    <tr>
      <td>[Font-name]-[Weight]-Extra</td>
      <td>2</td>
      <td>woff, woff2</td>
    </tr>
  </tbody>
</table>

!> Make sure to follow the same lowercase and uppercase names as the structure shows

## Code

```scss
@each $font in $fonts {
  @each $weight, $font-weight in $font-weights {
    $font-name: capitalize($font);
    $weight-name: capitalize($weight);
    $path: '../../fonts/' + $font + '/' + $font-name + '-' + $weight-name;
    $local: $font-name;

    @if $weight != regular {
      $local: $font-name + $weight-name;
    }

    @each $prop, $unicode in $unicodes {
      @if $prop != basic {
        $path: $path + '-' + capitalize($prop);
      }

      @font-face {
        font-family: $font-name;
        src: local($local), local($font-name + '-' + $weight-name),
          url($path + '.woff2') format('woff2'), url($path + '.woff') format('woff');
        font-weight: $font-weight;
        font-display: swap;
        unicode-range: string.unquote($unicode);
      }
    }
  }
}
```

## Requirements

- **[Function]** [capitalize](functions/strings/capitalize.md)
- **[Variable]** [unicodes](variables/unicodes.md)
- **[Variable]** [font-weights](variables/font-family.md)
- **[Variable]** [fonts](variables/font-family.md)

## Usefull links

- [unquote()](https://sass-lang.com/documentation/modules/string#unquote)

---

# Generating subsets

## Why do we create subsets?

The reason why we create subsets it to increase performance by reducing the size of our font files. This is done by removing the characters we don't need (aka subsetting).

A good example can be found at [CSS-Tricks](https://css-tricks.com/three-techniques-performant-custom-font-usage/)

## How do we create subsets?

Subsets can be generated with the `pyftsubset` command from [FontTools](https://github.com/fonttools/fonttools), a library for manipulating fonts written in Python.

The command looks something like:

```shell
pyftsubset [input] --unicodes="[unicode-range]" --flavor="[file type]" --output-file="[output]"
```

Lets take our **Roboto** font. To generate all the files for our **Regular** font file we'll use the following commands:

_Make sure you execute this command from the folder that contains your Roboto-Regular.ttf_

```shell
pyftsubset Roboto-Regular.ttf --unicodes="U+0020-007F,U+00A0-00FF" --flavor="woff2" --output-file="Roboto-Regular.woff2"
pyftsubset Roboto-Regular.ttf --unicodes="U+0020-007F,U+00A0-00FF" --flavor="woff" --output-file="Roboto-Regular.woff"

pyftsubset Roboto-Regular.ttf --unicodes="U+0100-017F,U+20A0-20CF" --flavor="woff2" --output-file="Roboto-Regular-Extra.woff2"
pyftsubset Roboto-Regular.ttf --unicodes="U+0100-017F,U+20A0-20CF" --flavor="woff" --output-file="Roboto-Regular-Extra.woff"
```

---
