# Icon Sorter (Figma plugin)

Icon Sorter is a Figma plugin that helps you organise and normalise icon frames so they’re consistent and easy to use in your designs.

## Setup

- **Requirements**: Node.js (LTS) and npm
- Install dependencies:

```bash
npm install
```

- Build the plugin code:

```bash
npm run build
```

This compiles `code.ts` to `code.js` using `tsc`.

## Using in Figma

1. In Figma, go to **Plugins → Development → Import plugin from manifest…**
2. Select this folder’s `manifest.json`.
3. Run the plugin from **Plugins → Development → Icon Sorter**.

## Development

- Edit `code.ts` for plugin logic.
- Edit `ui.html` for the plugin UI.
- Update `manifest.json` if you change file names or metadata.

