import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Cloudflare / OpenNext build output — generated, never hand-edited.
    ".open-next/**",
    ".wrangler/**",
  ]),
  {
    // Standalone Node script for regenerating the social media artwork,
    // not part of the Next.js app bundle.
    files: ["brand-assets/_generate.js"],
    languageOptions: { globals: { require: "readonly", module: "writable", __dirname: "readonly" } },
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
]);

export default eslintConfig;
