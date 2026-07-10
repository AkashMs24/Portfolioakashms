// api/chat.js
//
// Vercel serverless function — proxies chatbot requests to Groq using a
// server-side API key (set as an environment variable in the Vercel
// dashboard). The browser never sees or handles the key.
//
// Required env var (set in Vercel → Project → Settings → Environment Variables):
//   GROQ_API_KEY = gsk_...
//
// Frontend calls this as: POST /api/chat  with body { messages: [...] }

const MAX_MESSAGES = 14;      // hard cap on conversation length sent per request
const MAX_CHARS_PER_MSG = 2000; // hard cap on any single message's length

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

  // Basic abuse guardrails since this endpoint is public (no visitor auth).
  if (messages.length > MAX_MESSAGES) {
    res.status(400).json({ error: `Too many messages (max ${MAX_MESSAGES}).` });
    return;
  }
  for (const m of messages) {
    if (typeof m?.content !== 'string' || typeof m?.role !== 'string') {
      res.status(400).json({ error: 'Each message needs a string "role" and "content".' });
      return;
    }
    if (m.content.length > MAX_CHARS_PER_MSG) {
      res.status(400).json({ error: `A message exceeds the ${MAX_CHARS_PER_MSG} character limit.` });
      return;
    }
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
        messages,
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
}
