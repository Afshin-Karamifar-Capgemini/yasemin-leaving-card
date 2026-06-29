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
    name: "Afshin",
    message: "So sad to see our kindest teammate leave Capgemini — someone who genuinely cares about her teammates, who brings such wonderful energy to our calls, and who checked in on me every day during everything happening in Iran. I am so happy for you too, because I know how brilliant you are — I am certain you will get exactly where you want to be, and you will make a wonderful manager. Wishing you all the very best!",
    role: "Full-Stack guild",
    font: "Caveat",
    colour: "#0b6e4f",
    rotate: -2,
  },
  {
    name: "Dane",
    message:
      "All the best with your new role! You will not be able to be replaced here and I am sure the DCX door will always be open.",
    font: "Permanent Marker",
    colour: "#2a9d8f",
    size: 1.7,
  },
  {
    name: "Gita xx",
    message: "Yasemin, Congratulations on your new role! Thank you for everything you've contributed while working with us. It's been a pleasure working with you. I've really appreciated your support and the positive energy you've brought to the team. You'll definitely be missed. Wishing you every success in the next chapter!",
    font: "Caveat",
  },
  {
    name: "Krishnan",
    message: "Working with you has been such a great experience, Yasemin!\nYou were always ready to help whenever I was in trouble, and I truly appreciate how you not only helped me but also taught and guided me along the way. I learned a lot from you.\nIt has been a genuinely great experience working with you. Thanks for all the help, knowledge, and positive energy you brought to the team.\nIt won't be the same without you — you'll definitely be missed.\nWishing you lots of success and happiness in what's next. Stay in touch!",
    font: "Kalam",
    colour: "#5b2d8e",
    rotate: 2,
  },
];
