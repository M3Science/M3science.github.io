# The Particle Post

**The Concierge of Science Communication**

A multi-disciplinary portfolio website built with [Eleventy (11ty)](https://www.11ty.dev/) and deployed via GitHub Pages.

---

## Project Structure

```
particle-post/
├── .github/
│   └── workflows/
│       └── deploy.yml       ← GitHub Actions deploy pipeline
├── src/
│   ├── _data/               ← All site content (JSON)
│   │   ├── site.json        ← Site name, tagline, contact info
│   │   ├── nav.json         ← Navigation links
│   │   ├── domains.json     ← Hero domain cards
│   │   ├── physics_projects.json
│   │   ├── code_projects.json
│   │   ├── episodes.json    ← Podcast episodes
│   │   ├── stats_physics.json
│   │   ├── stats_podcast.json
│   │   ├── skills.json
│   │   ├── collab_types.json
│   │   ├── contact_links.json
│   │   └── about.json
│   ├── _includes/
│   │   └── base.njk         ← Base HTML layout (nav, footer)
│   ├── assets/
│   │   ├── css/main.css     ← All styles
│   │   └── js/main.js       ← Particles, scroll reveal, mobile nav
│   └── index.njk            ← Main page template
├── .eleventy.js             ← Eleventy config
├── .gitignore
├── package.json
└── README.md
```

---

## Local Development

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Start local dev server with hot reload
npm start
# → http://localhost:8080
```

---

## Editing Content

All content lives in `src/_data/` as JSON files. No HTML knowledge needed.

### Update site info
Edit `src/_data/site.json` — name, tagline, email, social links.

### Add a podcast episode
Open `src/_data/episodes.json` and add an object to the array:
```json
{
  "number": "07",
  "title": "Your Episode Title",
  "guest": "Guest Name or null",
  "topics": "Topic · Subtopic",
  "duration": "1h 05min",
  "date": "Mar 2025"
}
```

### Add a project
Open `src/_data/physics_projects.json` or `code_projects.json`:
```json
{
  "featured": false,
  "label": "Category Label",
  "title": "Project Title",
  "body": "Project description paragraph.",
  "tags": [
    { "text": "Primary Tag", "accent": true },
    { "text": "Secondary Tag" }
  ]
}
```

### Replace the photo
Put your image in `src/assets/` and update the `about-photo-placeholder` div in `src/index.njk` with a real `<img>` tag.

---

## Deploying to GitHub Pages

### First-time setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow auto-deploys

Every subsequent push to `main` triggers a build and deploy automatically.

### Custom domain (optional)
Add a `CNAME` file to `src/assets/` containing your domain (e.g. `theparticlepost.com`), and configure your DNS with a CNAME record pointing to `yourusername.github.io`.

---

## Tech Stack

- **[Eleventy 2.x](https://www.11ty.dev/)** — static site generator
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — templating language
- **JSON** — content data files
- **Vanilla CSS + JS** — no framework dependencies
- **GitHub Actions** — CI/CD deploy pipeline
- **GitHub Pages** — hosting
