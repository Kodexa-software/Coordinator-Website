# Coordinator website

The site for [Coordinator](https://github.com/Kodexa-software/Coordinator), live at
**[coordinator.kodexa.workers.dev](https://coordinator.kodexa.workers.dev)**.

- `public/`: the site, plain HTML with no build step. Open `public/index.html` to preview it.
- `wrangler.jsonc`: deploys `public/` to Cloudflare as static assets:
  `CLOUDFLARE_ACCOUNT_ID=<account> npx wrangler deploy`.

Install commands, version numbers and comparisons on the site follow the Coordinator repo's README and
CHANGELOG; update them together.
