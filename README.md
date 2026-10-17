# Portfolio site

Built with Astro. Pages: Home, About, Professional, Projects (with a subpage per project), Life Stuff.

## Run it locally
    npm install
    npm run dev        # preview at http://localhost:4321
    npm run build      # test a production build

## Where to edit things
| What | File |
|---|---|
| Your name, tagline, email, social links, nav menu | `src/site.ts` |
| About / Professional / Life Stuff text | `src/pages/about.md`, `professional.md`, `life-stuff.md` |
| Colors and fonts | top of `src/styles/global.css` |
| Your domain | `astro.config.mjs` |
| Resume download | put a file at `public/resume.pdf` |

## Add a project
1. Put a photo in `public/images/projects/` (resize to ~1600px wide first).
2. Copy any file in `src/content/projects/`, rename it (the filename becomes the URL), and edit.
3. Commit and push. The site rebuilds automatically.

Set `draft: true` in a project's header to hide it without deleting it.
