# Leaving Card 💌

A simple, dependency-free leaving card that renders in the browser. The team
signs it by opening pull requests, and the card grows into a scrolling wall of
wonky, hand-signed messages.

## Sign the card

See **[SIGNING.md](SIGNING.md)**. In short: add one entry to
`js/signatures.js` and open a pull request. Copilot can do it for you — it
follows [`.github/copilot-instructions.md`](.github/copilot-instructions.md).

## View the card

Open `index.html` in any browser. No build step, no server, no dependencies
(the handwriting fonts load from Google Fonts when you're online).

To share it with the team, host the folder anywhere static — GitHub Pages
works well: enable Pages on the repository and point it at the root.

## Project layout

| File                               | Purpose                                            |
| ---------------------------------- | -------------------------------------------------- |
| `index.html`                       | The page structure and font loading.               |
| `css/styles.css`                   | The paper-card look and scrolling notes layout.    |
| `js/config.js`                     | Who the card is for (recipient, subtitle, footer). |
| `js/signatures.js`                 | The signatures — **this is the file signers edit.**|
| `js/card.js`                       | Renders the notes with varied, hand-signed styling.|
| `.github/copilot-instructions.md`  | How Copilot should add a signature.                |
| `SIGNING.md`                       | How a person signs the card.                       |

## Set it up for someone

Edit `js/config.js` to set the recipient's name, subtitle and footer line.
Each signature gets a font, colour, tilt and size automatically (derived from
the signer's name) so no two look alike — signers can override any of these if
they want. It comfortably handles 10, 20, 30+ messages, scrolling within the
card.

## Notes on safety

Messages are rendered with `textContent`, never `innerHTML`, so text from pull
requests cannot inject markup or scripts into the page.
