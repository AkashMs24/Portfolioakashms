# Akash M S — Portfolio

https://akashms.vercel.app/

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
└── README.md
```

`data.js` must load before `app.js` (already wired correctly in `index.html`).

## ✨ Features

- **Project deep-dives** — 10 full 7-tab case studies (Problem → Data → Architecture → Model → Explainability → Challenges → Results), switchable via a project selector
- **Architecture modal** — every one of the 12 projects has a one-click system architecture diagram
- **AI Resume Tailoring Engine** — paste a JD, get a skill-match score and ATS-style summary (client-side keyword matching, no API needed)
- **Terminal mode** — type `help`, `whoami`, `projects`, `stack`, `certs`, `contact`, `experience`, `awards`, `springer`, `clear`, `exit`
- **Portfolio chatbot** — powered by Groq LLaMA-3.3-70b; visitor supplies their own free Groq API key, stored only in `sessionStorage` (never sent anywhere but Groq's API)
- **Live GitHub activity heatmap** — pulls real contribution data from the GitHub API with a deterministic offline fallback if the API is unreachable
- **Fully responsive** — custom mobile nav, collapsed grids, and touch-friendly cursor fallback

## 🚀 Run Locally

No build step, no dependencies. Any static file server works:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node
npx serve .

# Option 3: VS Code Live Server extension
```

Then open `http://localhost:8000`.

> Opening `index.html` directly via `file://` also works for everything except the GitHub heatmap fetch and chatbot calls, which some browsers block for local files due to CORS/fetch restrictions on `file://` origins — use a local server to test those.

## ☁️ Deploy to Vercel

Since this is a static site (`index.html` + `css/` + `js/`, no server code), Vercel needs zero configuration.

**Option A — GitHub import (recommended)**
1. Push this folder to a GitHub repo (see Git steps below).
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo.
3. Framework preset: **Other** (or leave auto-detected as static).
4. Build command: *(leave empty)* — Output directory: *(leave empty / `.`)*
5. Deploy.

**Option B — Vercel CLI**
```bash
npm i -g vercel
cd portfolio-split
vercel
```
Follow the prompts; accept defaults (no build command needed).

**Option C — Drag and drop**
Drag the `portfolio-split` folder onto [vercel.com/new](https://vercel.com/new).

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

## 🔑 Chatbot API Key

The chatbot requires visitors to bring their own free Groq API key (get one at [console.groq.com/keys](https://console.groq.com/keys)). It is stored client-side only via `sessionStorage` and cleared when the tab closes — it is never persisted or sent to any server other than Groq's official API endpoint.

## 📄 License

Personal portfolio — content and copy belong to Akash M S. Feel free to fork the structure/code for your own portfolio.

## 📬 Contact

- Email: ms29akash@gmail.com
- LinkedIn: [akash-m-s-414a21297](https://www.linkedin.com/in/akash-m-s-414a21297)
- GitHub: [AkashMs24](https://github.com/AkashMs24)
