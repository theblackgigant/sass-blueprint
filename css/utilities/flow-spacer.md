# .flow-spacer

The `.flow-spacer` utility automatically adds margin to all direct elements inside of it. This is usefull for content that is automatically generated or outputted via a wysiwyg editor.

## Overview

<div class="flow-spacer flow-spacer--overview">
  <h2>Lorem ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus maxime provident, quos sapiente quia asperiores cupiditate quod odit pariatur vitae, ipsa nobis minus corporis?</p>
  <h3>Lorem ipsum dolor</h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quasi!</p>
  <h3>Lorem ipsum dolor</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, natus?</p>
</div>

**Markup**

```html
<div class="flow-spacer">
  <h2>Lorem ipsum</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus
    maxime provident, quos sapiente quia asperiores cupiditate quod odit
    pariatur vitae, ipsa nobis minus corporis?
  </p>
  <h3>Lorem ipsum dolor</h3>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quasi!
  </p>
  <h3>Lorem ipsum dolor</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, natus?
  </p>
</div>
```

## Code

```css
.flow-spacer > * + * {
  margin-top: 0.75em;
}
```
