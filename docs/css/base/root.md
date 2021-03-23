# root (:root)

The root element stores all (global) `CSS` variables. Some variables are generated from `SCSS` maps so we don't have to repeat them multiple times.

## Code

```scss
:root {
  @each $name, $color in $colors {
    @if $name == neutral {
      --clr-neutral-0: #ffffff;
    }

    --clr-#{$name}-100: #{tintColor($color, 80%)};
    --clr-#{$name}-200: #{tintColor($color, 60%)};
    --clr-#{$name}-300: #{tintColor($color, 40%)};
    --clr-#{$name}-400: #{tintColor($color, 20%)};
    --clr-#{$name}-500: #{$color};
    --clr-#{$name}-600: #{shadeColor($color, 20%)};
    --clr-#{$name}-700: #{shadeColor($color, 40%)};
    --clr-#{$name}-800: #{shadeColor($color, 60%)};
    --clr-#{$name}-900: #{shadeColor($color, 80%)};

    @if $name == neutral {
      --clr-neutral-1000: #000000;
    }
  }

  // Font sizes
  @each $size, $scale in $font-scale {
    --fs-#{$size}: #{$scale};
  }

  // Breakpoints
  @each $name, $size in $breakpoints {
    --breakpoint-#{$name}: #{$size};
  }

  --font-body: Roboto;
  --font-heading: Poppins;
  --font-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  --font-stack-body: var(--font-body), var(--font-fallback);
  --font-stack-heading: var(--font-heading), var(--font-fallback);

  --timing: 0.5s;
  --timing-slow: 1s;
  --timing-fast: 0.25s;

  --easing: ease-in-out;
  --easing-in: ease-in;
  --easing-out: ease-out;

  --border-width: 1px;
  --border-style: solid;
  --border-color: var(--clr-neutral-300);
  --border: var(--border-width) var(--border-style) var(--border-color);
  --border-radius: 15px;

  --shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0, 0.1);
}
```

## Requirements

- **[Function]** [tintColor](functions/colors/tintColor.md)
- **[Function]** [shadeColor](functions/colors/shadeColor.md)
- **[Variable]** [colors](variables/colors.md)
- **[Variable]** [font-scale](variables/font-scales.md)
- **[Variable]** [breakpoints](variables/breakpoints.md)

## Usefull links

- [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
