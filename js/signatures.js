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
    name: "Martin Palastanga",
    message:
      "It's been an absolute pleasure working with you Yasemin, continually inspiring us all with your attention to detail and amazing ability to truly understand what we build.\nWishing you every success in the future!",
    font: "Indie Flower",
    colour: "#ffb703"
  },
  {
    name: "Dane",
    message:
      "All the best with your new role! You will not be able to be replaced here and I am sure the DCX door will always be open.",
    font: "Permanent Marker",
    colour: "#2a9d8f",
    size: 1.7,
  },
];
