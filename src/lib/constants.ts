// Curated wallet addresses that produce visually diverse SolFaces
export const DEMO_WALLETS = [
  "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "7JfkjvMnwTvZNGNam2RgJ1BBxMpsqaQRaWmvejig7uCa",
  "DRpbCBMxVnDK7maPMogrLoau8HeS5vochbhsCLeMN6dS",
  "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
  "HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH",
  "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
  "GKvwBfDt73p8FkZT9kDqEHo3CWaGPNb1ikGkW36SQok",
  "3Kzh9qAqVWQhEsfJvB5GSCRm7diLkSPdqN4XNYSz2fDP",
  "Cw8CFywVQ69XFfHSpJieSfKsVb1BYfbDBHmmz5RCjPhU",
  "FmCWPrLEEBfTNLVEUz2FSviJbEtZfhPMiuAVPkUCcCe",
  "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
  "EchesyfXePKhf7mUEzJ2wADqHeR8GDC3V4mBeStLcbDm",
  "BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4",
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
  "So11111111111111111111111111111111111111112",
] as const;

// Pre-selected wallets for playground quick-try buttons (labels are SolNames)
export const QUICK_TRY_WALLETS = [
  { address: DEMO_WALLETS[0], label: "Planar Beaver" },
  { address: DEMO_WALLETS[1], label: "Fierce Sortie" },
  { address: DEMO_WALLETS[2], label: "Cedar Reed" },
  { address: DEMO_WALLETS[3], label: "Deep Galaxy" },
  { address: DEMO_WALLETS[4], label: "Braced Wellspring" },
] as const;

export const SECTION_IDS = {
  hero: "hero",
  playground: "playground",
  install: "install",
  solnames: "solnames",
  why: "why-solfaces",
  themes: "themes",
  code: "code-examples",
  agent: "agent-identity",
  api: "api-reference",
  footer: "footer",
} as const;

export const GITHUB_URL = "https://github.com/jorger3301/solfaces";
export const NPM_URL = "https://www.npmjs.com/package/solfaces";
