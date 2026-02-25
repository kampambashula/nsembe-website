# Nsembe Technologies — Landing Page

A modern, responsive Next.js landing page for Nsembe Technologies.

## Tech Stack

- **Next.js 15** (Pages Router)
- **Tailwind CSS 3** with custom theme colors
- **Google Fonts**: Syne (display), DM Sans (body), JetBrains Mono

## Custom Theme Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-green-light` | `#6be76a` | Accents, bullets, stats |
| `--color-green-medium` | `#55ea1d` | Globe icon, highlights |
| `--color-cyan-light` | `#46e9ca` | Primary accents, borders, links |
| `--color-cyan-medium` | `#6aa6b4` | Secondary accents, education market |
| `--color-dark-bg` | `#143627` | Main background |

## Sections

1. **Hero** — Company branding, tagline, CTA, animated SVG illustration
2. **Platforms** — Cards for Cliicae, Savara, Mansacore Growth, School Server OS
3. **Market Focus** — Government, Enterprise, NGOs, Schools with mission/vision
4. **Contact** — Contact form + direct email CTA
5. **Footer** — Social links, navigation, copyright

## Project Structure

```
nsembe-technologies/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── PlatformCard.js
│   ├── Platforms.js
│   ├── MarketFocus.js
│   ├── ContactForm.js
│   └── Footer.js
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
├── public/
│   └── favicon.ico (add your own)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Setup & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Replacing Placeholder Images
The hero illustration is an inline SVG — replace with an `<Image>` component pointing to your asset.

### Contact Form
The form currently simulates submission. To wire it up to a real backend:
1. Replace the `setTimeout` in `ContactForm.js` with a `fetch` call
2. Add your API endpoint (e.g. `/api/contact`) or use services like Formspree, Resend, etc.

### Fonts
Loaded via Google Fonts in `globals.css`. Change the `@import` URL and `fontFamily` in `tailwind.config.js` to swap fonts.
