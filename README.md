# Sirigirisetty Pradeep Kumar — Portfolio (React)

Live at: https://pradeepkumarsirigirisetty.github.io

## Project Structure

```
src/
  components/
    Navbar.jsx      ← Fixed navigation with mobile menu
    Hero.jsx        ← Hero section with photo and CTA buttons
    About.jsx       ← About me section
    Skills.jsx      ← Skills with badge styling
    Projects.jsx    ← Project cards with case study toggles
    Contact.jsx     ← Contact form + quick links
    Footer.jsx      ← Footer with year auto-update
  App.jsx           ← Root component
  index.js          ← Entry point
  index.css         ← Global styles
public/
  index.html        ← HTML shell with all SEO meta tags
```

## How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# Opens at http://localhost:3000
```

## How to Deploy to GitHub Pages

```bash
# 1. Install gh-pages (already in package.json)
npm install

# 2. Deploy
npm run deploy
```

This builds the app and pushes it to the `gh-pages` branch automatically.
Your site will be live at: https://pradeepkumarsirigirisetty.github.io

## Adding your Resume PDF

1. Place your `Pradeep_Kumar_Resume.pdf` in the `/public` folder
2. It will be available at: https://pradeepkumarsirigirisetty.github.io/Pradeep_Kumar_Resume.pdf
3. The Contact component already links to it correctly

## Connecting the Contact Form

The form is front-end only. To make it work, sign up at https://formspree.io and replace the form's onSubmit with:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });
  setSubmitted(true);
};
```

## Built With

- React 18
- CSS Variables (no Tailwind dependency — pure CSS)
- Google Fonts (DM Sans + DM Mono)
- GitHub Pages for hosting
