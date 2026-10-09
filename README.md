# Bola Motors Parts — website

Static, mobile-first marketing site for **Bola Motors Parts**, truck and auto parts, SEC 50 LOT 23 Milfordhaven Rd, Lae, Morobe Province, Papua New Guinea.

Live: https://whj23china.github.io/bola-motors-parts/

- Plain HTML / CSS / vanilla JS — no build step, no tracking, no cookies.
- Pages: `index.html`, `parts.html`, `about.html`, `contact.html`, `quote.html`, `404.html`.
- Quote form opens a pre-filled `mailto:` to `josephweng58@gmail.com` (set in `js/main.js`, `QUOTE_EMAIL`).
- SEO: meta + Open Graph on every page, `AutoPartsStore` JSON-LD on Home and Contact, `sitemap.xml`, `robots.txt`.
- Hosted on GitHub Pages from `main` / root (`.nojekyll` present).

## Edit
Edit the HTML files directly. Header/footer are repeated in each page — change all pages when editing them.
If you move to your own domain, update the `https://whj23china.github.io/bola-motors-parts/` URLs (canonical, og:*, JSON-LD, sitemap.xml, robots.txt) and the `<base href>` in `404.html`.

## Preview locally
```bash
python3 -m http.server 8000   # then open http://127.0.0.1:8000/
```
