// One-off generator script. Reads the fern/"florescer" mark from
// public/logo.svg and composes branded background SVGs for LinkedIn and
// Instagram, matching the website's palette. Run with: node _generate.js
// Produces .svg files in this folder, which are then rasterized separately.
const fs = require("fs");
const path = require("path");

const LOGO_SVG = fs.readFileSync(
  path.join(__dirname, "..", "public", "logo.svg"),
  "utf8"
);
const FERN_PATH = LOGO_SVG.match(/<path[^>]*\bd="([^"]+)"/)[1];
// Fern path's own viewBox (from logo.svg)
const FERN_VB_W = 864;
const FERN_VB_H = 1039.79;

const PALETTE = {
  bgSoft: "#CAD2C5",
  highlight: "#84A98C",
  midTone: "#52796F",
  textDark: "#354F52",
  contrast: "#2F3E46",
  white: "#F9FAFA",
};

// Places one instance of the fern mark: x,y = top-left, h = rendered height
// (width follows the path's own aspect ratio), rotation in degrees, color,
// opacity.
function fern({ x, y, h, rotate = 0, color, opacity = 1 }) {
  const w = h * (FERN_VB_W / FERN_VB_H);
  return `<g transform="translate(${x},${y}) rotate(${rotate}, ${w / 2}, ${h / 2})" opacity="${opacity}">
    <svg width="${w}" height="${h}" viewBox="0 0 ${FERN_VB_W} ${FERN_VB_H}">
      <path d="${FERN_PATH}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </g>`;
}

function svgDoc(width, height, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
${inner}
</svg>`;
}

function write(name, svg) {
  fs.writeFileSync(path.join(__dirname, name), svg);
  console.log("wrote", name);
}

// ---------------------------------------------------------------------
// LinkedIn cover: 1584x396. Profile photo overlaps the bottom-left corner
// (roughly a 300x300 circle centered around x=170,y=396 on LinkedIn's own
// crop), so keep that corner clear and anchor content to the right.
// ---------------------------------------------------------------------
{
  const w = 1584;
  const h = 396;
  const inner = `
    <rect width="${w}" height="${h}" fill="${PALETTE.bgSoft}"/>
    ${fern({ x: -60, y: -180, h: 620, rotate: -12, color: PALETTE.midTone, opacity: 0.16 })}
    ${fern({ x: 1180, y: 40, h: 520, rotate: 8, color: PALETTE.midTone, opacity: 0.22 })}
    <text x="1000" y="190" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="${PALETTE.contrast}">Thais Fontana</text>
    <text x="1000" y="228" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="bold" letter-spacing="3" fill="${PALETTE.midTone}">PSICÓLOGA CLÍNICA</text>
    <text x="1000" y="258" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="15" letter-spacing="1" fill="${PALETTE.textDark}">CRP 06/160986</text>
  `;
  write("linkedin-cover.svg", svgDoc(w, h, inner));
}

// ---------------------------------------------------------------------
// Instagram Story backgrounds: 1080x1920, three palette variants.
// Middle band left clear for the user's own text/stickers.
// ---------------------------------------------------------------------
const storyVariants = [
  {
    name: "instagram-story-sage",
    bg: PALETTE.bgSoft,
    fernColor: PALETTE.midTone,
    ferns: [
      { x: -180, y: -120, h: 760, rotate: -18, opacity: 0.22 },
      { x: 640, y: 1300, h: 820, rotate: 10, opacity: 0.24 },
    ],
  },
  {
    name: "instagram-story-cream",
    bg: PALETTE.white,
    fernColor: PALETTE.highlight,
    ferns: [
      { x: -140, y: 1420, h: 700, rotate: -8, opacity: 0.55 },
      { x: 560, y: -160, h: 640, rotate: 20, opacity: 0.45 },
    ],
  },
  {
    name: "instagram-story-dark",
    bg: PALETTE.contrast,
    fernColor: PALETTE.highlight,
    ferns: [
      { x: -160, y: -140, h: 780, rotate: -15, opacity: 0.5 },
      { x: 600, y: 1360, h: 760, rotate: 12, opacity: 0.4 },
    ],
  },
];

for (const v of storyVariants) {
  const w = 1080;
  const h = 1920;
  const inner = `
    <rect width="${w}" height="${h}" fill="${v.bg}"/>
    ${v.ferns.map((f) => fern({ ...f, color: v.fernColor })).join("\n")}
  `;
  write(`${v.name}.svg`, svgDoc(w, h, inner));
}

// ---------------------------------------------------------------------
// Instagram Post backgrounds: 1080x1080, same three variants.
// ---------------------------------------------------------------------
const postVariants = [
  {
    name: "instagram-post-sage",
    bg: PALETTE.bgSoft,
    fernColor: PALETTE.midTone,
    ferns: [
      { x: -160, y: -140, h: 620, rotate: -18, opacity: 0.22 },
      { x: 660, y: 680, h: 560, rotate: 12, opacity: 0.24 },
    ],
  },
  {
    name: "instagram-post-cream",
    bg: PALETTE.white,
    fernColor: PALETTE.highlight,
    ferns: [
      { x: -120, y: 700, h: 520, rotate: -8, opacity: 0.55 },
      { x: 620, y: -140, h: 480, rotate: 20, opacity: 0.45 },
    ],
  },
  {
    name: "instagram-post-dark",
    bg: PALETTE.contrast,
    fernColor: PALETTE.highlight,
    ferns: [
      { x: -140, y: -120, h: 600, rotate: -15, opacity: 0.5 },
      { x: 640, y: 700, h: 560, rotate: 12, opacity: 0.4 },
    ],
  },
];

for (const v of postVariants) {
  const w = 1080;
  const h = 1080;
  const inner = `
    <rect width="${w}" height="${h}" fill="${v.bg}"/>
    ${v.ferns.map((f) => fern({ ...f, color: v.fernColor })).join("\n")}
  `;
  write(`${v.name}.svg`, svgDoc(w, h, inner));
}
