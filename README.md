# Amo - Hover Animation Library

Amo is a CSS-first hover animation library for polished web micro-interactions. It provides reusable effects for **buttons, cards, text, icons, images, navigation links, badges, and list items**, with a standalone interactive showcase.

> Designed to be copied into real projects: pick an effect, copy its HTML/CSS, and customize the CSS variables.

## Highlights

- 40+ button hover effects
- Card, text, icon, image, navigation, badge, and list interactions
- CSS-first implementation with minimal JavaScript for pointer-aware effects
- Custom fill/text colors, duration, easing, and radius through CSS variables
- `prefers-reduced-motion` support
- No framework required
- No runtime dependencies
- Interactive demo with copyable CSS and HTML snippets

## Project structure

```text
amo-hover-library/
├── src/
│   ├── amo.css          # Core animation library
│   └── amo.js           # Optional pointer-aware helpers
├── demo/
│   ├── index.html       # Full interactive showcase
│   └── page.css         # Showcase-only page styles
├── docs/                # Documentation space
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── package.json
└── README.md
```

## Quick start

### 1. Include the library

```html
<link rel="stylesheet" href="src/amo.css">
<script src="src/amo.js" defer></script>
```

### 2. Add an effect

```html
<button class="btn fx-slide-lr">
  <span class="btn__label">Hover me</span>
</button>
```

The library is intentionally class-based. The `fx-*` class selects the button effect.

### 3. Customize the look

```css
:root {
  --fill: #8f3a1e;
  --on: #fffdf8;
  --dur: 550ms;
  --radius: 999px;
  --ease: cubic-bezier(.65, .05, .25, 1);
  --t: var(--dur) var(--ease);
}
```

The same CSS-variable approach is used across the component families. Some effects also use `--accent`, `--card`, `--line`, `--stage`, and related variables.

## Component families

| Family | Base class | Effect prefix | Example |
|---|---|---|---|
| Buttons | `.btn` | `.fx-*` | `.fx-radial` |
| Cards | `.cd` | `.cd-*` | `.cd-lift` |
| Text | `.tx` | `.tx-*` | `.tx-highlight` |
| Icons | `.icon` | `.ic-*` | `.ic-spin` |
| Images | `.img` | `.im-*` | `.im-zoom-in` |
| Navigation | `.nav-link` | `.nv-*` | `.nv-underline` |
| Badges | `.badge` | `.bd-*` | `.bd-glow` |
| List items | `.list-item` | `.li-*` | `.li-border` |

## Pointer-aware effects

Most effects are pure CSS. A small set needs pointer coordinates or JavaScript state. `src/amo.js` automatically initializes these when the script is loaded.

Examples include:

- `.fx-ripple`
- `.fx-magnetic`
- `.cd-tilt`
- `.cd-spot`
- `.cd-parallax`
- `.im-parallax`
- `.nv-group`
- `.tx-scramble`

If you only use CSS-only effects, `amo.js` is optional.

## Reduced motion

Amo respects the user's motion preference with `@media (prefers-reduced-motion: reduce)` rules. Keep this behavior intact when adapting individual effects.

## Interactive demo

Open `demo/index.html` directly in a browser, or serve the repository with any static HTTP server.

For example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/demo/`.

The demo lets you:

- browse effects by component family
- change colors
- change animation speed
- change corner radius
- switch light/dark presentation
- replay animations
- copy individual CSS and HTML snippets
- inspect accessibility and reduced-motion behavior

## Browser support

Amo uses modern CSS features such as custom properties, transforms, transitions, animations, `clip-path`, gradients, and 3D transforms. Effects can vary by browser depending on support for individual CSS features.

For production use, test the specific effects you depend on in your browser support matrix.

## Accessibility notes

- Prefer semantic interactive elements (`button`, `a`) rather than clickable `div`s.
- Keep visible focus styles when integrating the components.
- Do not rely on hover animation as the only way to communicate state.
- Preserve `prefers-reduced-motion` behavior.
- Keep sufficient color contrast between `--fill` and `--on`.

## Design philosophy

Amo is intentionally not a JavaScript animation framework. The core motion is expressed with CSS so effects remain easy to inspect, copy, override, and remove.

JavaScript is reserved for interactions that depend on pointer position or dynamic text state.

## Versioning

The project follows semantic-versioning conventions for public releases:

- **MAJOR** - breaking class/API changes
- **MINOR** - new effects or backwards-compatible features
- **PATCH** - bug fixes and documentation improvements

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

See [SECURITY.md](SECURITY.md).

## License

MIT © 2026 Amol Rakh
