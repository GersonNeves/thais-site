# Deployment Guide — Cloudflare + Custom Domain

This is a step-by-step walkthrough for putting the site live on Cloudflare with
Thais's own domain. It's written for someone doing this for the first time —
follow it top to bottom.

**Two separate things are happening here, and it helps to keep them mentally
separate:**

1. **Hosting** — Cloudflare runs the actual Next.js app (Cloudflare Workers).
2. **Domain** — a human-readable address (e.g. `thaisfontanapsi.com.br`) that
   points at that hosting.

You need both, and they get connected to each other near the end.

> Official reference, in case anything below drifts out of date:
> https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs

---

## Part 1 — Get a domain name

If you already own a domain, skip to [Part 1b](#part-1b--already-own-a-domain).

### Part 1a — Buying a new domain

You can buy it through Cloudflare Registrar (Cloudflare sells domains at cost,
no markup, and it auto-connects to your Cloudflare account — simplest option)
or through any other registrar (Namecheap, GoDaddy, registro.br for `.com.br`, etc).

**Recommended: Cloudflare Registrar**

1. Go to https://dash.cloudflare.com and create a free Cloudflare account if
   you don't have one yet (email + password).
2. In the left sidebar, click **Domain Registration → Register Domain**.
3. Search for the domain you want (e.g. `thaisfontanapsi.com.br` or
   `thaisfontana.com`). Note: Cloudflare Registrar doesn't sell every TLD —
   `.com.br` support can be limited; if it's not available, buy it at
   [registro.br](https://registro.br) instead and follow Part 1b below.
4. Complete the purchase. The domain is automatically added to your Cloudflare
   account with Cloudflare as the DNS provider — no extra setup needed.

### Part 1b — Already own a domain

If the domain lives at another registrar, you need to point it at Cloudflare:

1. In the Cloudflare dashboard, click **Add a domain** and enter it.
2. Cloudflare scans your existing DNS records and shows you two **nameservers**
   (something like `ana.ns.cloudflare.com` and `bob.ns.cloudflare.com`).
3. Log into your domain's current registrar (wherever you originally bought
   it) and replace its nameservers with the two Cloudflare gave you. This
   setting is usually called "Nameservers" or "DNS management."
4. This can take anywhere from a few minutes to 24 hours to propagate.
   Cloudflare emails you once it's active.

---

## Part 2 — Deploy the Next.js app to Cloudflare Workers

This part uses Cloudflare's official Next.js adapter (`@opennextjs/cloudflare`),
which runs the app on Cloudflare Workers. This supports the full app —
including `next/image` optimization — unlike a plain static export.

### 2.1 Install the Cloudflare tooling

From the project folder, run:

```bash
npm install --save-dev wrangler @opennextjs/cloudflare
```

- `wrangler` is Cloudflare's CLI (deploys things, manages your Worker).
- `@opennextjs/cloudflare` adapts the Next.js build output to run on Workers.

### 2.2 Log in to Cloudflare from the CLI

```bash
npx wrangler login
```

This opens a browser tab to authorize the CLI against your Cloudflare account.

### 2.3 Add the two config files

Create `wrangler.jsonc` in the project root:

```jsonc
{
  "name": "thais-site",
  "main": ".open-next/worker.js",
  "compatibility_date": "2026-08-01",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  }
}
```

Create `open-next.config.ts` in the project root:

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
```

Add two scripts to `package.json` (inside `"scripts"`):

```json
"preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
"deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"
```

> These exact filenames/commands are the standard OpenNext Cloudflare setup as
> of writing. If a command below errors out, check the official guide linked
> at the top — Cloudflare's tooling evolves and the guide is the source of
> truth.

### 2.4 First deploy

```bash
npm run deploy
```

This builds the app and uploads it to Cloudflare. When it finishes, it prints
a URL like `https://thais-site.<your-subdomain>.workers.dev` — open it to
confirm the site is live.

### 2.5 Connect your domain to the Worker

1. In the Cloudflare dashboard, go to **Workers & Pages**, click your
   `thais-site` Worker.
2. Go to **Settings → Domains & Routes → Add → Custom Domain**.
3. Enter your domain (e.g. `thaisfontanapsi.com.br`) and confirm. Cloudflare
   automatically creates the DNS record and issues an SSL certificate — no
   manual DNS editing needed since the domain already lives on Cloudflare.
4. Give it a few minutes, then visit your real domain in a browser.

### 2.6 Automatic deploys on every GitHub push (recommended)

Instead of running `npm run deploy` by hand each time:

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Connect to Git**.
2. Authorize Cloudflare to access your GitHub account and pick the
   `GersonNeves/thais-site` repository.
3. Set the build command to `npm run deploy` (or follow whatever Cloudflare's
   setup wizard suggests for a Next.js repo — it usually auto-detects this).
4. Save. From now on, every push to `main` automatically rebuilds and
   redeploys the live site.

---

## Part 3 — Update the site's real URL

Once the domain is live, tell the app about it so metadata (Open Graph tags,
sitemap, JSON-LD) point at the real address instead of the placeholder:

- In Cloudflare's Worker settings, add an environment variable
  `NEXT_PUBLIC_SITE_URL` set to your real domain, e.g.
  `https://thaisfontanapsi.com.br`.
- Alternatively, ask me to hardcode it in `src/content/site.ts` once the
  domain is decided — either works.

---

## Verifying everything works

- [ ] `https://<your-domain>` loads the site over HTTPS (padlock icon, no warnings)
- [ ] `https://<your-domain>/sitemap.xml` returns XML
- [ ] `https://<your-domain>/robots.txt` returns text
- [ ] Site loads correctly on a phone (mobile menu, WhatsApp button)
- [ ] The WhatsApp button/links use the real phone number (see the TODOs in
      `src/content/site.ts` — fill those in before or after going live)

## If something goes wrong

- `npm run deploy` failing: read the error message, it's usually a missing
  login (`npx wrangler login`) or a typo in `wrangler.jsonc`.
- Domain not resolving after nameserver change: DNS propagation can take up
  to 24 hours; check status at https://dnschecker.org.
- Anything else: come back here and paste the error — happy to debug it
  together.
