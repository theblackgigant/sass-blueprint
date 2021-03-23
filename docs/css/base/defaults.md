# Defaults

Apply some default styling to elements.

---

# html

Apply our base `font-size` for rem scaling.

## Code

```css
html {
  font-size: 14px;
}
```

---

# body

Apply color and font settings for general text.

## Code

```css
body {
  font-size: var(--fs-300);
  font-family: var(--font-stack-body);
  color: var(--clr-neutral-900);
}
```

---

# h1, h2, h3, h4

Apply color and font settings for headings.

## Code

```css
h1,
h2,
h3,
h4 {
  font-family: var(--font-stack-heading);
  font-weight: 700;
  line-height: 1.1;
  color: var(--clr, var(--clr-neutral-1000));
}
```

---

# h1 .h1, h2 .h2, h3 .h3, h4 .h4, small .small

Apply font scaling to elements.

## Code

```css
h1,
.h1 {
  font-size: var(--fs-800);
}

h2,
.h2 {
  font-size: var(--fs-700);
}

h3,
.h3 {
  font-size: var(--fs-600);
}

h4,
.h4 {
  font-size: var(--fs-500);
}

small,
.small {
  font-size: var(--fs-200);
}
```

---

# a

Ignore default browser styling on all links.

## Code

```scss
a {
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
    text-decoration: none;
  }
}
```

---

# a[href]:not([class])

Add styling to all links without a class.

## Code

```css
a[href]:not([class]) {
  color: var(--clr-primary-500);
}
```

---

# img

Add more aesthetically-pleasing broken images.

## Code

```scss
img {
  font-size: var(--fs-300);
  text-align: center;

  @include pseudo($content: "We're sorry, the image is broken :(") {
    display: block;
    margin-bottom: 0.75rem;
  }

  @include pseudo($type: after, $content: '(url: ' attr(src) ')') {
    display: block;
    font-size: var(--fs-200);
    margin-top: 0.75rem;
  }
}
```

---

# input:not([type='button'], [type='submit'], [type='color'], [type='checkbox'], [type='radio']), textarea

Add default styling to input elements.

## Code

```scss
input:not([type='button'], [type='submit'], [type='color'], [type='checkbox'], [type='radio']),
textarea {
  display: block;
  width: 100%;
  padding: 0.375rem 1rem;
  color: var(--clr-neutral-800);
  outline: 0;
  background: var(--clr-neutral-0);
  background-clip: padding-box;
  border: var(--border);
  transition: border-color var(--timing-fast) var(--easing);

  &::placeholder {
    color: var(--clr-neutral-600);
    opacity: 1;
  }

  &:focus {
    border-color: var(--clr-neutral-700);
  }
}
```

---
