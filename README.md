# LukeGreenwood.com

A fast, single‑page personal landing site for Luke Greenwood.

- Evergreen aesthetic with accessible, responsive layout
- Hero photo optimized (1x/2x JPEG) with `<picture>` + `preload`
- Zero JS frameworks; inline CSS for instant first paint
- Social buttons: LinkedIn, YouTube, Amazon
- SVG favicon (white LG on evergreen); Apple touch icon uses headshot
- Google Analytics 4 with lightweight click tracking

## Live

- https://www.lukegreenwood.com/

## Edit Content

Open `index.html` and update:
- Tagline words near the header
- Bio paragraphs inside `.bio-wrap`
- Social links in the `<nav class="links">`

## Performance Notes

- Avatar is served via `<picture>` with 480/960px JPEGs.
- External icons are lazy‑loaded; preconnect hints are added for speed.
- CSS is inlined to avoid an extra request.

## Analytics

Google Analytics 4 is integrated via `gtag.js` with Measurement ID:

- `G-Z8ZV3XF2VK` (configured in the `<head>`)

Custom event: `link_click` for Work/Music/Poetry with `link_label`, `link_url`, `link_platform`.
To test quickly, open the site with `?ga_debug=1` and check GA DebugView.

## Deployment (GitHub Pages)

- Branch: `main`
- Custom domain: `www.lukegreenwood.com` (CNAME file included)
- Ensure DNS points to GitHub Pages and “Enforce HTTPS” is enabled in Pages settings.

## Local Preview

Just open `index.html` in a browser. No build step required.

