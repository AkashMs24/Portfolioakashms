# Akash M S — Portfolio

Personal portfolio site for **Akash M S** — B.Tech CSE (Data Science), Presidency University, Bengaluru. AI Engineer / Data Scientist / XAI Specialist.

Live sections include project deep-dives, an AI resume-tailoring engine (JD matcher), a terminal-style command interface, a Groq-powered chatbot, and live GitHub activity — all static, client-side, no backend server required.

## 🗂 Project Structure

```
portfolio-split/
├── index.html          # Page markup (all sections: hero, about, experience, projects, skills, certs, contact)
├── css/
│   └── style.css       # All styling (dark theme, animations, responsive layout)
├── js/
│   ├── data.js          # Static data — skills, architecture diagrams, 10 full case studies,
│   │                     terminal command outputs, chatbot system prompt, JD-skill map
│   └── app.js           # Behavior — cursor, nav, reveal animations, terminal, chatbot,
│                          JD matcher, project filters, case-study renderer
├── api/
│   └── chat.js          # Vercel serverless function — proxies chatbot requests to Groq
│                          using a server-side API key. Keeps the key off the client entirely.
└── README.md
```

`data.js` must load before `app.js` (already wired correctly in `index.html`).

## ✨ Features

- **Project deep-dives** — 10 full 7-tab case studies (Problem → Data → Architecture → Model → Explainability → Challenges → Results), switchable via a project selector
- **Architecture modal** — every one of the 12 projects has a one-click system architecture diagram
- **AI Resume Tailoring Engine** — paste a JD, get a skill-match score and ATS-style summary (client-side keyword matching, no API needed)
- **Terminal mode** — type `help`, `whoami`, `projects`, `stack`, `certs`, `contact`, `experience`, `awards`, `springer`, `clear`, `exit`
- **Portfolio chatbot** — powered by Groq LLaMA-3.3-70b via a Vercel serverless function (`/api/chat`). Your Groq API key lives only in Vercel's environment variables — visitors never see or enter any key
- **Live GitHub activity heatmap** — pulls real contribution data from the GitHub API with a deterministic offline fallback if the API is unreachable
- **Fully responsive** — custom mobile nav, collapsed grids, and touch-friendly cursor fallback

## 🚀 Run Locally

The site itself is static, but the chatbot depends on the `/api/chat` serverless function, so a plain static file server (Python/`serve`) won't run the chatbot locally — those routes only exist when served by Vercel's runtime.

**To test everything, including the chatbot:**
```bash
npm i -g vercel
cd portfolio-split
vercel dev
```
This spins up the site plus the serverless function locally, using a `.env` file for `GROQ_API_KEY` (see below).

**To just preview the static pages (no chatbot) without Vercel:**
```bash
python3 -m http.server 8000
# or: npx serve .
```
Then open `http://localhost:8000`.

## 🔑 Groq API Key Setup (server-side, one-time)

The chatbot now runs entirely on **your** Groq key — visitors never enter one.

1. Get a free key at [console.groq.com/keys](https://console.groq.com/keys).
2. In the Vercel dashboard: **Project → Settings → Environment Variables**.
3. Add:
   - **Name:** `GROQ_API_KEY`
   - **Value:** your key (starts with `gsk_...`)
   - **Environments:** Production, Preview, Development (check all three)
4. Redeploy (Vercel → Deployments → ⋯ → Redeploy), or just push a new commit.

For local `vercel dev` testing, create a `.env` file in the project root (already gitignored — never commit this):
```
GROQ_API_KEY=gsk_your_key_here
```

The key is read only inside `api/chat.js` on Vercel's server — it is never bundled into `js/*.js` or sent to the browser, so it can't be found via view-source or dev tools.

## ☁️ Deploy to Vercel

Since this project now includes a serverless function (`api/chat.js`), Vercel auto-detects and deploys it alongside the static site — no extra configuration needed.

**Option A — GitHub import (recommended)**
1. Push this folder to a GitHub repo (see Git steps below).
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo.
3. Framework preset: **Other** (auto-detected) — build/output settings can stay default.
4. Add the `GROQ_API_KEY` environment variable (see above) *before* the first deploy, or add it after and redeploy.
5. Deploy.

**Option B — Vercel CLI**
```bash
npm i -g vercel
cd portfolio-split
vercel
```
Follow the prompts; accept defaults. Set `GROQ_API_KEY` via `vercel env add GROQ_API_KEY` or through the dashboard, then redeploy.

**Option C — Drag and drop**
Drag the `portfolio-split` folder onto [vercel.com/new](https://vercel.com/new), then add `GROQ_API_KEY` in Settings → Environment Variables and redeploy.

## 📦 Push to GitHub

```bash
cd portfolio-split
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/AkashMs24/<your-repo-name>.git
git push -u origin main
```

## 🔧 Updating Content

| To change...                        | Edit...                          |
|--------------------------------------|-----------------------------------|
| Project cards, sections, layout      | `index.html`                     |
| Colors, fonts, spacing, animations   | `css/style.css`                  |
| Skill bars, case studies, terminal commands, chatbot knowledge | `js/data.js` |
| Interactivity / behavior             | `js/app.js`                      |
| Chatbot model, token limits, guardrails | `api/chat.js`                  |

## 📄 License

Personal portfolio — content and copy belong to Akash M S. Feel free to fork the structure/code for your own portfolio.

## 📬 Contact

- Email: ms29akash@gmail.com
- LinkedIn: [akash-m-s-414a21297](https://www.linkedin.com/in/akash-m-s-414a21297)
- GitHub: [AkashMs24](https://github.com/AkashMs24)
