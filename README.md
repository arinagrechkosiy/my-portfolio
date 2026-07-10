# Hi, I'm Arina Grecgkosii

This is my personal portfolio site, built for my Front-End Programming final project. It's a place to introduce myself, talk about what I'm into, and let people actually reach me through a contact form that works - not just a fake "message sent!" popup.

**Live site:** https://my-portfolio-phi-pink-74.vercel.app
**Repo:** https://github.com/arinagrechkosiy/my-portfolio

---

## How I built this

## How I built this

I started by deciding to build the site in **React with Vite**, since that's what the course recommended and it's fast to set up. Everything was built in **VS Code**, running commands through the terminal — `npm create vite@latest`, then `npm install`, then `npm run dev` to get a local dev server going at `localhost:5173` so I could see changes live as I worked.

Once the basic Vite starter was running, I set up the folder structure: a `components` folder for shared pieces like the navigation bar and footer, and a `pages` folder for the actual Home, About, and Contact views. Then I installed `react-router-dom` so the site could switch between pages without full reloads, and wired up the routes in `App.jsx`.

**Design direction first.** Before writing much code, I picked the visual direction — a bold yellow background (`#FFF56E`) with heavy, condensed typography (Anton), going for a high-contrast, editorial poster look rather than a typical soft portfolio aesthetic.

**Building page by page.** I built Home first — the hero section with my name, role, and location, plus a highlights section underneath. Then About, where I uploaded a personal photo (shot in Milan) and wrote a short bio, added skill tags and language tags. Then Contact, which took the most time because of the form logic.

**The background image detour.** Once the yellow background felt too flat on its own, I made a hand-drawn-style swirl graphic and uploaded it as a background image sitting behind the hero text, to add some movement and texture.

**Dark mode.** After building the toggle (state + `localStorage` so it remembers your choice), I noticed the swirl image I'd made for light mode looked wrong against a dark background — the colors just clashed. So I had to go back, create a second version of that image specifically for dark mode, upload it separately, and write logic to swap between the two images depending on which theme is active.

**The contact form.** This was the part I cared about getting right. I didn't want a form that just shows a fake "message sent!" popup and does nothing. I connected it to **Formspree**, so submissions actually get emailed to me. I added client-side validation — required fields, email format checking, minimum message length — with error messages tied to each field so screen readers pick them up correctly. Then I tested it for real: filled it out from my phone with a test name and email, hit send, and confirmed the email actually landed in my inbox.

**Accessibility and responsiveness.** Once the core site was done, I ran a Lighthouse audit in Chrome DevTools to check for accessibility issues — labels, contrast, keyboard navigation — and fixed what came up until I hit a clean 100 on Accessibility and Best Practices. I also checked the site at mobile widths using DevTools' device toolbar and on my actual phone, to make sure nothing broke on a smaller screen.

**Getting it online.** For deployment, I used **Vercel** — mainly because it's built specifically for frontend frameworks like Vite/React, deployment is a single terminal command (`vercel --prod`), and it gives you a live HTTPS link instantly with zero server configuration. For the source code, I set up a **GitHub** repository, since it's the standard way to host and share a project's code, keeps a full history of changes, and is what the assignment specifically asked for as a submission format. Once both were set up, I connected the two so that pushing to GitHub can automatically redeploy the site on Vercel going forward.

---

## Tech stack

- **React** (via Vite)
- **react-router-dom** for page navigation
- **Formspree** for the contact form backend
- Plain CSS with CSS variables, so the light/dark theme switch is just swapping variable values

---

## What's on the site

- **Home** — intro, my name/role/location, and a highlights section
- **About** — a short bio, my skills, and languages I speak
- **Contact** — a real form (Name, Email, Message) with:
  - Required-field validation
  - Email format checking
  - Minimum message length
  - Error messages that show up right next to the field that needs fixing
  - A genuine success confirmation once it sends
- **Dark mode toggle** — remembers your choice next time you visit, via localStorage
- Built to be responsive and to pass an accessibility audit cleanly

---

## A peek at the code

**Switching between pages** (`src/App.jsx`):

\`\`\`jsx
<Routes>
  <Route path="/" element={<Home theme={theme} />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
\`\`\`

**Remembering dark mode** (`src/App.jsx`):

\`\`\`jsx
const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}, [theme])
\`\`\`

**Form validation that's actually accessible** (`src/pages/Contact.jsx`):

\`\`\`jsx
<input
  id="email"
  aria-invalid={!!errors.email}
  aria-describedby={errors.email ? 'email-error' : undefined}
/>
{errors.email && (
  <p id="email-error" role="alert">{errors.email}</p>
)}
\`\`\`

---

## Screenshots

### Home
![Home page](docs/screenshots/Screenshot%202026-07-10%20at%2021.31.09.png)

### About
![About page](docs/screenshots/Screenshot%202026-07-10%20at%2021.31.42.png)

### Contact
![Contact page](docs/screenshots/Screenshot%202026-07-10%20at%2021.31.48.png)

### Mobile — Home
![Mobile home](docs/screenshots/IMG_6101.PNG)

That's the mobile view of the homepage — checked how everything reflows on a smaller screen.

### Mobile — testing the contact form
![Mobile contact test](docs/screenshots/IMG_6099.PNG)

This is where I actually tested the contact form on mobile — filled it in with a test name and email like a real visitor would.

### Proof it actually sends
![Email received](docs/screenshots/IMG_6100.PNG)

And this is the email I got back a minute later — so the form isn't just a nice-looking dead end, it genuinely delivers messages to my inbox through Formspree.

---

## Accessibility Audit

I ran a Lighthouse audit through Chrome DevTools to check everything was actually accessible, not just "looked" accessible.

![Lighthouse overview](docs/screenshots/Screenshot%202026-07-10%20at%2020.12.24.png)

Overall scores: 62 Performance (dev server, unoptimized — production build performs better), **100 Accessibility**, **100 Best Practices**, 83 SEO.

![Lighthouse accessibility detail](docs/screenshots/Screenshot%202026-07-10%20at%2020.12.38.png)

Zoomed into the Accessibility score specifically — clean 100, no automated issues flagged.

---

## Running it yourself

\`\`\`bash
git clone https://github.com/arinagrechkosiy/my-portfolio.git
cd my-portfolio
npm install
npm run dev
\`\`\`

Build for production:

\`\`\`bash
npm run build
\`\`\`

---

## Deployed on

Vercel, connected to this GitHub repo — every push to `main` auto-deploys.
