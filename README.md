# workspace-root

Bug reproduction. To run development build, use `yarn dev` in workspace-root. To run production build, use `yarn build` in workspace-root.

## Stack

- Yarn 2 PnP mode
- Yarn workspaces monorepo
- Preact Framework using `preact/compat`
- tsup for building `component-library`
- Vite for building `webapp`
- `twin.macro` and `@emotion/react` for CSS-in-JS
- Fork of `@preact/preset-vite` with support for changing `importSource` to `@emotion/react`
  - See <https://github.com/preactjs/preset-vite/pull/47>
