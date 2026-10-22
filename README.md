# Pradeep Fitness Arena — Website Bundle

A static, responsive website built with plain HTML, CSS and JavaScript. No build step or JavaScript package installation is required.

## Files

- `index.html` — page structure and content
- `style.css` — responsive styling, motion, hover effects and accessibility states
- `script.js` — mobile navigation, scroll reveals, review expansion and photo lightbox
- `assets/brand/ap-logo.png` — cropped transparent AP logo with tagline
- `assets/media/` — gym, equipment, team and competition photos supplied for the site
- `assets/reviews/` — original review screenshots retained for reference; the live site displays readable text cards instead of screenshots
- `assets/reference/` — the supplied owner-details screenshot, kept as reference and not shown on the live page

## Preview locally

Open `index.html` in a browser. The page is dependency-light and works as a static site. For best font availability, an internet connection lets the page load DM Sans and Barlow Condensed from Google Fonts; system fallbacks are defined if the fonts cannot load.

## Deploy

Upload the contents of this folder to the root of your static hosting provider (GitHub Pages, Netlify, Hostinger static hosting, or similar). Keep `assets`, `style.css`, and `script.js` beside `index.html`; do not move these folders without updating the relative paths.

## Business details used

- Name: Pradeep Fitness Arena
- Founder: Pradeep G (based on the details supplied with the project)
- Phone: +91 96631 14894 (from the gym listing and supplied business details)
- Address: Bus Stop, No. 3, 1st Floor, 1st A Main Road, Maruthi Nagara, Attiguppe, Bengaluru, Karnataka 560072
- Directions: the Google Maps link supplied for the project
- Instagram: `@pradeep.fitnessarena`

Hours and prices are intentionally not stated because the details available were inconsistent or not supplied as confirmed current information. The award highlight uses the wording visible in the user-supplied award photo: “Most Muscular Overall, 1st Prize.” Search results did not independently verify a full competition record for this specific founder, so no unverified medal count or competition list has been invented.

## Notes

- The gallery and testimonial text are authored from the supplied media and review screenshots.
- All image references in the HTML/JavaScript point to local assets. No hotlinked gym photos are required.
- Animations respect `prefers-reduced-motion`; photo lightbox controls support mouse, touch and keyboard.
