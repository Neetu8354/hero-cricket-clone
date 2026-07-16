export const SITE = {
  name: "Betfair Bets",
  tagline: "India's Premium Cricket Stats & Predictions Hub",
  url: "https://www.betfairbets.live",
  whatsapp: "https://wa.link/reddyanna_",
  currency: "₹",
};

export const formatCoins = (n: number) =>
  `${SITE.currency}${n.toLocaleString("en-IN")}`;