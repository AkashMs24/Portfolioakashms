// api/chat.js
//
// Vercel serverless function — proxies chatbot requests to Groq using a
// server-side API key (set as an environment variable in the Vercel
// dashboard). The browser never sees or handles the key.
//
// Required env var (Vercel → Project → Settings → Environment Variables):
//   GROQ_API_KEY = gsk_...
//
// Frontend calls this as: POST /api/chat  with body { messages: [{role,content}, ...] }
// The system prompt is added HERE, server-side — the browser never sends it.

const CHAT_SYS = `You are Akash M S's portfolio assistant — smart, friendly, and knowledgeable about his work. Keep answers concise (2-4 sentences) unless asked for detail.

ABOUT AKASH M S:
- B.Tech CSE (Data Science), Presidency University Bengaluru, graduating 2027
- FUSIONX 2026 Hackathon Winner — Best AI Innovation for Social Impact (JeevanMitra AI)
- Ideathon 2026 — 3rd Place (MedVerify AI — Fake Medical Certificate Detector, now live)
- Optum STEM Scholar 2025–26 (₹30,000, NASSCOM Foundation, national selection)
- Open to: Data Science, ML Engineering, AI Engineer roles; AI startups, fintech, product companies
- Email: ms29akash@gmail.com | LinkedIn: akash-m-s-414a21297 | GitHub: AkashMs24

CURRENT/RECENT EXPERIENCE:
1. PetOlife Technologies — Backend Dev Intern (Mar 2025–present, working directly with CTO)
2. Hostingsignal — AI & Data Intern (Jul–Sep 2025, multilingual ASR, NLP pipelines)
3. CampusX — Operations Intern (Feb–Jun 2025)

PROJECTS (all live):
1. SpeechFlow — Production speech-to-text, React+TypeScript+FastAPI+Groq Whisper v3 → voice-scriptt.vercel.app
2. CollabBoard — Real-time Kanban, Node.js+Socket.IO+PostgreSQL+Groq AI → live on Vercel
3. XAI Copilot — Credit risk explainability + bias detection + LLM counterfactual appeals → xai-copilot.vercel.app
4. Cost-Sensitive Fraud Detection — XGBoost+SHAP, 94% recall, 18ms latency, FastAPI+Streamlit
5. SCAMGUARD AI — Job fraud NLP classifier, 85% recall, SHAP word attribution, Streamlit
6. HR Attrition Risk System — Random Forest+SHAP, COMSYS (springer) paper basis, Streamlit
7. JeevanMitra AI — FUSIONX winner, 6 Indian languages, zero infra, 48h build
8. MedVerify AI — Ideathon 3rd place, fake medical certificate detection → medverify-nws7.onrender.com
9. Recommendation Engine — Domain-agnostic, cold-start, TF-IDF+sentence-BERT, Streamlit
10. DecisionIQ — ML+LLM BI platform, XGBoost+Random Forest, Streamlit

TECH STACK: Python, SQL, JavaScript/TypeScript, R, React, Node.js, FastAPI, Flask, Socket.IO, PostgreSQL, MongoDB, scikit-learn, XGBoost, LightGBM, TensorFlow, SHAP, LangChain, Groq API, AWS, Oracle OCI, Power BI, Streamlit, Plotly

18 CERTS: 3 active Oracle OCI (Data Science Pro + GenAI Pro + AI Foundations, valid Oct 2027), Google Data Analytics Pro, Meta GenAI, AWS, HackerRank SQL, Power BI, + 10 more

PHILOSOPHY: "WHY always beats WHAT" — specializes in Explainable AI where every prediction comes with a business-readable reason.`;

const MAX_MESSAGES = 14;
const MAX_CHARS_PER_MSG = 2000;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server misconfigured: GROQ_API_KEY is not set.' });
    return;
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: 'Invalid JSON body.' });
    return;
  }

  const { messages } = body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: '"messages" must be a non-empty array.' });
    return;
  }
  if (messages.length > MAX_MESSAGES) {
    res.status(400).json({ error: `Too many messages (max ${MAX_MESSAGES}).` });
    return;
  }

  const cleanMessages = [];
  for (const m of messages) {
    if (typeof m?.content !== 'string' || (m.role !== 'user' && m.role !== 'assistant')) {
      res.status(400).json({ error: 'Each message needs role "user" or "assistant" and string content.' });
      return;
    }
    if (m.content.length > MAX_CHARS_PER_MSG) {
      res.status(400).json({ error: `A message exceeds the ${MAX_CHARS_PER_MSG} character limit.` });
      return;
    }
    cleanMessages.push({ role: m.role, content: m.content });
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 400,
        temperature: 0.7,
        messages: [{ role: 'system', content: CHAT_SYS }, ...cleanMessages],
      }),
    });

    const data = await groqRes.json();

    if (!groqRes.ok) {
      res.status(groqRes.status).json({ error: 'Upstream Groq API error.', detail: data });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(502).json({ error: 'Failed to reach Groq API.', detail: String(err) });
  }
};
