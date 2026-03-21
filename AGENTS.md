# opencode-autoask

## Package manager

Use **npm** — not pnpm or bun.

```sh
npm install       # install deps
npm run build     # compile TypeScript → dist/
npm run typecheck # type-check without emitting
npm run format    # format with prettier
```

## Publishing

```sh
npm run build
npm publish --access public
```

## Notes

- No test suite — plugin is a single transformation function with no side effects
- `dist/` is gitignored; it is built on publish via `prepublishOnly`
- Entry point: `index.ts` → compiled to `dist/index.js`
