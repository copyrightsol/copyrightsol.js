// src\constants.ts
import { PublicKey } from "@solana/web3.js";

// Solana creator to receive fees
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  "9EMpMcQ6z8LnZw8vFggfTM1cp9VdxRQPNZMDeWMEyc7a",
);

// Platform fees
export const PLATFORM_CREATOR_FEE = 0.15; // 15%
export const PLATFORM_JACKPOT_FEE = 0.01; // 1%

// Toggle live toast events - all game events (true = on, false = off)
export const LIVE_EVENT_TOAST = true;

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          FOOTER LINKS                │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const FOOTER_LINKS = [
  {
    href: "http://cprsol.com/",
    title: "👨‍💻 Watch the Vision",
  },
  {
    href: "https://t.me/copyrightsolv2",
    title: "🚀 Join Telegram",
  },
  {
    href: "https://copyrightsol.gitbook.io/whitepaper",
    title: "📖 Copyright Docs",
  },
  {
    href: "https://discord.gg/copyrightsol",
    title: "💬 Join Discord",
  },
];

export const FOOTER_TWITTER_LINK = {
  href: "https://twitter.com/copyrightsol",
  title: "© 2024 CPRSOL.FUN is owned and operated by COPYRIGHTSOL Holdings Limited (Cyprus).",
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          METATAGS (SEO)              │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const BASE_SEO_CONFIG = {
  defaultTitle: "Copyrightsol.fun",
  description:
    "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://play-gamba.vercel.app/",
    title: "Copyrightsol.fun",
    description:
      "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.",
    images: [
      {
        url: "https://play-gamba.vercel.app/seo.png",
        alt: "Copyrightsol.fun",
      },
    ],
    site_name: "Copyrightsol.fun",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "https://twitter.com/copyrightsol",
    handle: "@copyrightsol",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "casino, gaming, rewards, gambling, entertainment, copyrightsol",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │      SUPPORTED PLATFORM TOKENS       │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const TOKENLIST = [
  // SOL
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // Copyrightsol
  {
    mint: new PublicKey("CyxzG1wx1gr5JtWxMu8Z7Wzw4Wy9im8b27Sr6d5ZLron"),
    name: "COPYRIGHTSOL",
    symbol: "COPYRIGHT",
    image:
      "https://photos.pinksale.finance/file/pinksale-logo-upload/1715629917797-4ae3466d56215938a04af8c039a0389a.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
];
