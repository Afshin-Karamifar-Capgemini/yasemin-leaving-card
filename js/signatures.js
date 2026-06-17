/*
 * Signatures for the leaving card.
 *
 * To sign: add a new object to the END of the SIGNATURES array below, then
 * open a pull request. See SIGNING.md for the full guide.
 *
 * Each entry supports:
 *   name      (required)  Your name, as you want it signed.
 *   message   (required)  Your message. Use \n for a line break.
 *   role      (optional)  A short line under your name, e.g. "Platform team".
 *   font      (optional)  One of the named fonts in SIGNATURE_FONTS (card.js).
 *   colour    (optional)  Any CSS colour, e.g. "#1a3a6b" or "teal".
 *   rotate    (optional)  Tilt in degrees, roughly -5 to 5.
 *   size      (optional)  Text size in rem, roughly 1.2 to 2.0.
 *
 * Leave any optional field out and the card picks a tasteful, consistent
 * style for you automatically. The result is meant to look hand signed:
 * wonky, varied and individual.
 */
window.SIGNATURES = [
  {
    name: "The Team",
    message:
      "It hasn't been the same without you already.\nThank you for every shipped feature, every code review and every laugh along the way.",
  },
  {
    name: "Sam",
    message: "Best pair-programming partner I could have asked for. Go smash it! 🚀",
    role: "Backend guild",
    colour: "#0b6e4f",
    rotate: -3,
  },
  {
    name: "Priya",
    message: "Who am I going to ask about flexbox now?? Good luck, you legend.",
    font: "Permanent Marker",
    colour: "#9a031e",
    rotate: 2,
  },
];
