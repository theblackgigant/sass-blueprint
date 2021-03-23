# capitalize

---

Capitalize a given string

## Parameters

- **[String]** `$string` - String to capitalize

## Returns

**[String]** Capitalized version of `$string`

## Example

```scss
capitalize(foo) => Foo
capitalize(bar) => Bar
```

## Code

```scss
@function capitalize($string) {
  @return string.to-upper-case(string.slice($string, 1, 1)) + string.slice($string, 2);
}
```

## Used by

- **[CSS]** [@font-face](css/base/font-face.md)

## Usefull links

- [to-upper-case()](https://sass-lang.com/documentation/modules/string#to-upper-case)
- [str-slice()](https://sass-lang.com/documentation/modules/string#slice)

---
