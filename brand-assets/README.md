# Brand assets

Social media images matching the website's palette and the "florescer"
fern/branch mark used for the logo and favicon. Not part of the Next.js app
— just deliverables for LinkedIn/Instagram.

## Files

| File | Size | Use |
| --- | --- | --- |
| `linkedin-cover.png` | 1584×396 | LinkedIn profile cover photo. Name/title/CRP text sits right-of-center; the bottom-left corner is kept clear since LinkedIn overlaps the profile photo there. |
| `instagram-story-*.png` | 1080×1920 | Instagram Story background. Middle band left empty for your own text/stickers. |
| `instagram-post-*.png` | 1080×1080 | Instagram feed post background, same three variants. |

Three palette variants for the Instagram sizes:
- **sage** — `--bg-soft` background (the site's main background tone)
- **cream** — `--white` background, airier/lighter feel
- **dark** — `--contrast` background, for an occasional high-contrast post

## Regenerating / editing

`_generate.js` builds the `.svg` sources (reads the fern path straight from
`public/logo.svg`, so it stays in sync if the logo ever changes) — run
`node _generate.js` from this folder to rebuild them. The `.svg` files are
then rasterized to PNG, e.g.:

```
npx sharp-cli -i linkedin-cover.svg -o . -f png resize 1584 396
```

Colors used (same tokens as `src/app/globals.css`):

| Token | Hex |
| --- | --- |
| `--bg-soft` | `#CAD2C5` |
| `--highlight` | `#84A98C` |
| `--mid-tone` | `#52796F` |
| `--text-dark` | `#354F52` |
| `--contrast` | `#2F3E46` |
| `--white` | `#F9FAFA` |
