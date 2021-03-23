# getDirectParent

---

Get direct parent from selector

## Parameters

- **[List]** `$element` - Element to get the parent from

## Returns

**[Selector]** Direct parent of element

## Example

```css
.block .item {
  getDirectParent(&) => .item
}
.block .item .subitem {
  getDirectParent(&) => .subitem
}
```

## Code

```scss
@function getDirectParent($element) {
  $selector: list.nth($element, 1);
  $direct-parent: list.nth($selector, list.length($selector));

  @return $direct-parent;
}
```

## Usefull links

- [nth()](https://sass-lang.com/documentation/modules/list#nth)
- [length()](https://sass-lang.com/documentation/modules/list#length)

---
