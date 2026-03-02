import { ImageResponse } from "next/og";
import { renderSolFaceSVG, deriveName } from "solfaces";

export const runtime = "nodejs";
export const alt = "SolFaces — Deterministic Wallet Avatars for Solana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OG_WALLETS = [
  "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "7JfkjvMnwTvZNGNam2RgJ1BBxMpsqaQRaWmvejig7uCa",
  "DRpbCBMxVnDK7maPMogrLoau8HeS5vochbhsCLeMN6dS",
  "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
  "HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH",
  "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
];

export default function OGImage() {
  const faces = OG_WALLETS.map((wallet) => ({
    svg: renderSolFaceSVG(wallet, { size: 96 }),
    name: deriveName(wallet, "display"),
  }));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0e0f14 0%, #1a1b23 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "0.2em",
            color: "#e8e8f0",
            marginBottom: 16,
          }}
        >
          SOLFACES
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#8c8ca0",
            marginBottom: 48,
          }}
        >
          Deterministic wallet avatars & names for Solana
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
        >
          {faces.map(({ svg, name }, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <img
                src={`data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`}
                width={96}
                height={96}
                alt={name}
              />
              <span style={{ fontSize: 13, color: "#8c8ca0" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
