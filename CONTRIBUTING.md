# Contributing to Amo

Thanks for contributing to Amo.

## Before opening an issue

- Search existing issues first.
- Include a minimal reproduction when reporting a bug.
- Mention the browser and operating system when behavior is browser-specific.

## Adding a new effect

1. Choose the appropriate component family.
2. Add a uniquely named effect class to `src/amo.css`.
3. Keep the effect self-contained and avoid global selectors.
4. Add reduced-motion behavior.
5. If pointer coordinates are required, add the smallest possible helper to `src/amo.js`.
6. Add the effect to the interactive demo catalogue.
7. Test keyboard focus, pointer interaction, reduced motion, and small screens.
8. Update the changelog.

## Pull requests

A useful pull request should contain:

- a clear description of the change
- before/after behavior when relevant
- browser/testing notes
- documentation updates for public API changes

## Commit messages

Use concise messages such as:

```text
feat: add magnetic card hover
fix: reset parallax variables on pointerleave
docs: expand installation examples
```
