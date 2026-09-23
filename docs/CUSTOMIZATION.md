# Customization

Amo is designed around CSS custom properties. You can override the variables globally or on an individual component.

```css
:root {
  --fill: #34437d;
  --on: #fffdf8;
  --accent: #34437d;
  --dur: 700ms;
  --radius: 16px;
  --ease: cubic-bezier(.65, .05, .25, 1);
  --t: var(--dur) var(--ease);
}
```

Per-component overrides work too:

```css
.my-button {
  --fill: #3e5c3a;
  --on: #fffdf8;
  --dur: 450ms;
  --radius: 12px;
}
```

Use the demo's controls to explore the effect of duration, radius, and color changes before copying an effect into your project.
