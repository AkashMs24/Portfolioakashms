/* ============================================================
   PORTFOLIO DATA — skills, architecture diagrams, case studies,
   JD-matching skill map, terminal command outputs, chatbot system
   prompt. Pure data, no DOM logic. Loaded before app.js.
   ============================================================ */

// Skill bars shown in the Technical Skills section
const SKILLS = {
  sg1:[{n:'Python',p:92},{n:'Scikit-learn',p:88},{n:'XGBoost/LightGBM',p:87},{n:'SHAP / XAI',p:86},{n:'TensorFlow',p:76},{n:'NLP / Text ML',p:82}],
  sg2:[{n:'Pandas / NumPy',p:91},{n:'SQL / MySQL',p:88},{n:'PostgreSQL',p:78},{n:'MongoDB',p:73},{n:'ETL Pipelines',p:79},{n:'R Language',p:68}],
  sg3:[{n:'FastAPI / Flask',p:83},{n:'React / TypeScript',p:75},{n:'Node.js',p:72},{n:'AWS Cloud',p:71},{n:'Oracle Cloud OCI',p:79},{n:'Git / GitHub',p:87}],
  sg4:[{n:'Streamlit',p:92},{n:'Power BI',p:82},{n:'Plotly / Matplotlib',p:88},{n:'Seaborn',p:84},{n:'D3.js',p:67},{n:'Dashboard Design',p:81}],
};


// System architecture diagrams for the Architecture modal (per project)
const ARCH={
  speech:{title:'SpeechFlow — System Architecture',nodes:[{l:'Audio Input'},{l:'WebRTC Capture',h:true},{l:'FastAPI Backend',h:true},{l:'Groq Whisper v3',h:true},{l:'LLaMA Summarizer',h:true},{l:'React Frontend',g:true}],metrics:[{l:'ASR',v:'Whisper v3'},{l:'Summarizer',v:'LLaMA 3.3'},{l:'Deploy',v:'Vercel'}]},
  collab:{title:'CollabBoard — System Architecture',nodes:[{l:'React Client'},{l:'Socket.IO Gateway',h:true},{l:'Node.js API',h:true},{l:'PostgreSQL',h:true},{l:'Groq Task AI',g:true},{l:'Live Board Sync',g:true}],metrics:[{l:'Sync',v:'WebSocket'},{l:'DB',v:'PostgreSQL'},{l:'Deploy',v:'Vercel'}]},
  xai:{title:'XAI Copilot — System Architecture',nodes:[{l:'Credit Application'},{l:'Feature Pipeline',h:true},{l:'LightGBM Model',h:true},{l:'SHAP Explainer',g:true},{l:'Bias Detector',g:true},{l:'LLM Appeal Engine',g:true}],metrics:[{l:'Core',v:'SHAP'},{l:'LLM',v:'LLaMA-3'},{l:'Deploy',v:'Vercel + FastAPI'}]},
  fraud:{title:'Fraud Detection — System Architecture',nodes:[{l:'Transaction CSV'},{l:'Feature Eng.',h:true},{l:'XGBoost (Cost-Sensitive)',h:true},{l:'SHAP TreeExplainer',g:true},{l:'FastAPI /predict',g:true},{l:'Streamlit Dashboard'}],metrics:[{l:'Recall',v:'94%'},{l:'Latency',v:'18ms'},{l:'XAI',v:'SHAP'}]},
  scamguard:{title:'SCAMGUARD AI — System Architecture',nodes:[{l:'Job Posting Text'},{l:'TF-IDF Vectorizer',h:true},{l:'LightGBM Classifier',h:true},{l:'SHAP Word Attribution',g:true},{l:'Streamlit UI'}],metrics:[{l:'Recall',v:'85%'},{l:'XAI',v:'Word-level SHAP'},{l:'Deploy',v:'Streamlit'}]},
  hr:{title:'HR Attrition — System Architecture',nodes:[{l:'Employee Records'},{l:'Feature Eng.',h:true},{l:'Random Forest',h:true},{l:'SHAP Waterfall',g:true},{l:'Per-employee Report',g:true}],metrics:[{l:'Accuracy',v:'89%'},{l:'XAI',v:'Per-employee SHAP'},{l:'Deploy',v:'Streamlit'}]},
  jeevan:{title:'JeevanMitra AI — System Architecture',nodes:[{l:'Voice / Text Input'},{l:'Web Speech API',h:true},{l:'Groq LLaMA-3',h:true},{l:'7 Farming Modules',g:true},{l:'GitHub Pages (No Backend)'}],metrics:[{l:'Languages',v:'6'},{l:'Infra Cost',v:'$0'},{l:'Built In',v:'48h'}]},
  medverify:{title:'MedVerify AI — System Architecture',nodes:[{l:'Uploaded Certificate'},{l:'OCR / Text Extraction',h:true},{l:'NLP Feature Pipeline',h:true},{l:'ML Fraud Classifier',h:true},{l:'Risk Verdict',g:true},{l:'Render Web App'}],metrics:[{l:'Task',v:'Doc Fraud'},{l:'Award',v:'Ideathon 2026'},{l:'Deploy',v:'Render'}]},
  recsys:{title:'Recommendation Engine — System Architecture',nodes:[{l:'Any Dataset (CSV)'},{l:'TF-IDF Vectorizer',h:true},{l:'Sentence-BERT Embeddings',h:true},{l:'Cold-Start Fallback',g:true},{l:'Per-item Explanation',g:true},{l:'Streamlit UI'}],metrics:[{l:'Domain',v:'Agnostic'},{l:'Cold-Start',v:'Handled'},{l:'XAI',v:'Per-item'}]},
  decisioniq:{title:'DecisionIQ — System Architecture',nodes:[{l:'Business Dataset'},{l:'XGBoost + RF Ensemble',h:true},{l:'Anomaly Detection',h:true},{l:'LLM Insight Generator',g:true},{l:'Plotly Dashboard'}],metrics:[{l:'Models',v:'XGB + RF'},{l:'Insights',v:'LLM-generated'},{l:'Deploy',v:'Streamlit'}]},
  abtest:{title:'A/B Testing Engine — Architecture',nodes:[{l:'Raw Experiment Data'},{l:'Cleaning & Segmentation',h:true},{l:'Hypothesis Testing',h:true},{l:'Confidence Intervals',g:true},{l:'Decision Report'}],metrics:[{l:'CI Level',v:'95%'},{l:'Method',v:'Frequentist'},{l:'Output',v:'Statistical Report'}]},
  speechflask:{title:'Speech-to-Text (Flask) — Architecture',nodes:[{l:'Audio Upload'},{l:'Flask Backend',h:true},{l:'SpeechRecognition API',h:true},{l:'Language Detection',g:true},{l:'Transcript Output'}],metrics:[{l:'Languages',v:'Multi (Indian)'},{l:'Framework',v:'Flask'},{l:'Context',v:'Internship Deliverable'}]},
};


// Skill keyword map used by the JD-matching / resume-tailoring engine
const MY_SKILLS={python:.92,sql:.88,pandas:.91,numpy:.91,'scikit-learn':.88,'machine learning':.87,ml:.87,nlp:.82,'natural language':.82,'text classification':.82,xgboost:.87,lightgbm:.85,tensorflow:.76,'deep learning':.73,'power bi':.82,'data visualization':.86,'data analysis':.89,analytics:.88,streamlit:.92,flask:.82,fastapi:.83,react:.75,'node.js':.72,'node js':.72,aws:.71,cloud:.71,oracle:.79,mongodb:.73,postgresql:.79,mysql:.88,shap:.87,'xai':.87,'explainability':.87,'explainable ai':.87,plotly:.88,matplotlib:.85,git:.87,'real-time':.74,websocket:.72,'socket.io':.70,groq:.75,langchain:.72,llm:.74,llama:.73};

// Terminal command outputs
const CMDS={
  help:()=>`Available commands:\n  whoami       about Akash\n  about        about Akash (alias of whoami)\n  projects     list all live projects\n  stack        full tech stack\n  certs        18 certifications\n  contact      contact info\n  experience   internship history\n  awards       hackathon wins & scholarships\n  springer     published paper details\n  clear        clear terminal\n  exit         close terminal`,
  whoami:()=>`Akash M S — AI Engineer · Data Scientist · XAI Specialist\n  University  Presidency University, Bangalore\n  Degree      B.Tech CSE (Data Science) · 2023–2027\n  Status      Open to Work · 10 live apps ·      Optum STEM Scholar 2025–26 (₹30,000)`,
  about:()=>CMDS.whoami(),
  projects:()=>`[1] SpeechFlow                       LIVE · React+FastAPI+Groq · voice-scriptt.vercel.app\n[2] CollabBoard                      LIVE · Node+Socket.IO+PG · collabboard-akashms24s...\n[3] XAI Copilot — Credit Risk        LIVE · FastAPI+SHAP+LLM · xai-copilot.vercel.app\n[4] Fraud Detection System           LIVE · XGBoost+SHAP · Streamlit\n[5] SCAMGUARD AI — Job Fraud         LIVE · NLP+LightGBM · Streamlit\n[6] HR Attrition Risk System         LIVE  · Streamlit\n[7] JeevanMitra AI                   LIVE · 🏆 FUSIONX 2026 Winner\n[8] MedVerify AI                     LIVE · 🥈 Ideathon 2026 · medverify-nws7.onrender.com\n[9] Recommendation Engine            LIVE · Streamlit\n[10] DecisionIQ BI Platform          LIVE · Streamlit`,
  stack:()=>`Languages   Python · SQL · JavaScript · TypeScript · R\nML/AI       scikit-learn · XGBoost · LightGBM · TF · SHAP · LangChain\nBackend     FastAPI · Flask · Node.js · Express · Socket.IO\nFrontend    React · TypeScript · Streamlit · HTML/CSS\nCloud       AWS · Oracle OCI · Vercel · Render\nDatabases   PostgreSQL · MySQL · MongoDB\nBI          Power BI · Plotly · Matplotlib · Seaborn\nOther       Git · GitHub Actions · WebSocket · Groq API`,
  certs:()=>`Oracle OCI Data Science Professional   Active — Oct 2027\nOracle OCI Generative AI Professional Active — Oct 2027\nOracle OCI AI Foundations Associate   Active — Oct 2027\nGoogle Data Analytics Professional    Nov 2025\nMeta — GenAI in Data Analytics        Aug 2025\nAWS — Introduction to IT & Cloud      Nov 2025\nHackerRank SQL Certified Professional Jul 2025\nPower BI Data Analyst Prep            Sep 2025\n+ 10 more across Coursera, TechXNinjas, Walmart`,
  contact:()=>`Email     ms29akash@gmail.com\nLinkedIn  linkedin.com/in/akash-m-s-414a21297\nGitHub    github.com/AkashMs24\nSpeechFlow  voice-scriptt.vercel.app\nXAI Copilot xai-copilot.vercel.app\nMedVerify   medverify-nws7.onrender.com\nStreamlit  share.streamlit.io/user/akashms24`,
  experience:()=>`Mar 2025–Present  Backend Dev Intern · PetOlife Technologies (CTO-direct)\nJul–Sep 2025      AI & Data Intern  · Hostingsignal · ASR/NLP\nFeb–Jun 2025      Operations Intern · CampusX · Bengaluru`,
  awards:()=>`🏆 FUSIONX 2026 — Best AI Innovation for Social Impact\n   JeevanMitra AI · 48h hackathon · 6 languages · zero infra\n\n🥈 Ideathon 2026 — 3rd Place\n   MedVerify AI — Fake Medical Certificate Detector (now live)\n\n🎓 Optum STEM Scholar 2025–26 (₹30,000 · NASSCOM Foundation)\n\n🌍 4th Innovative Project Expo 2024 — Top 70 Globally\n\n🎯 Paranox 2.0 National Innovation Hackathon\n🎯 Walmart Sparkathon`,
  springer:()=>`📄 COMSYS 2026\n   Title: "Explainable Machine Learning Insights for\n           Understanding Employee Turnover"\n   Method: SHAP-based XAI analysis on HR attrition models\n   Based on: Employee Attrition Risk Assessment project\n   Status: Accepeted`,
  clear:()=>{document.getElementById('term-output').innerHTML='';return null},
  exit:()=>{closeTerminal();return null},
};


// System prompt for the portfolio chatbot (Groq LLaMA-3.3-70b)
const CHAT_SYS=`You are Akash M S's portfolio assistant — smart, friendly, and knowledgeable about his work. Keep answers concise (2-4 sentences) unless asked for detail.

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

// Full 7-tab project deep-dive case studies
const CASE_STUDIES = {

fraud:{
  name:'Fraud Detection',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">Banks lose billions to fraud yearly — but standard classifiers optimize for accuracy, not cost.</div>
    <p class="cs-text">A model with 99% accuracy that flags <em>no fraud</em> is useless in production. Standard ML treats a missed fraud (false negative) the same as a false alarm — but in banking, a missed ₹50,000 fraud costs far more than wrongly flagging a transaction. The real objective isn't accuracy. It's <strong>minimizing cost-weighted error.</strong></p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>Built a cost-sensitive classifier where FN penalty = 5× FP penalty — mirroring real banking loss ratios. Every design decision flows from this single framing.</div>`,
  td:`<div class="cs-label">Dataset & Preprocessing</div>
    <div class="cs-headline">284,807 transactions · 492 fraud cases · 0.17% fraud rate</div>
    <p class="cs-text">Extreme class imbalance required deliberate handling. Applied <strong>SMOTE</strong> for minority class augmentation combined with <strong>class_weight='balanced'</strong>. Features are PCA-transformed (V1–V28) plus Amount and Time.</p>
    <p class="cs-text">Key preprocessing: log1p-scale Amount (removes right skew) · cyclical encode Time with sin/cos (23:59 ≈ 00:01) · SMOTE on training split only to prevent leakage · StandardScaler fit on train only.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Raw transaction → fraud verdict + explanation in &lt;20ms end-to-end</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">Raw CSV</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Feature Eng.<br><small style="font-size:8px">Log · Cyclical</small></div><span class="arch-arrow">→</span>
      <div class="arch-node hl">XGBoost<br><small style="font-size:8px">Cost-sensitive</small></div><span class="arch-arrow">→</span>
      <div class="arch-node green">SHAP<br><small style="font-size:8px">TreeExplainer</small></div><span class="arch-arrow">→</span>
      <div class="arch-node green">FastAPI<br><small style="font-size:8px">/predict</small></div><span class="arch-arrow">→</span>
      <div class="arch-node">Streamlit<br><small style="font-size:8px">Dashboard</small></div>
    </div>`,
  tm:`<div class="cs-label">Model Selection Rationale</div>
    <div class="cs-headline">XGBoost chosen over 3 alternatives — here's exactly why.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Model</span><span>Recall</span><span>Latency</span><span>SHAP</span><span>Verdict</span></div>
      <div class="compare-row"><span>Logistic Regression</span><span style="color:var(--rose)">61%</span><span style="color:var(--green)">2ms</span><span style="color:#ffaa00">Partial</span><span style="color:var(--rose)">✗ Too simple</span></div>
      <div class="compare-row"><span>Random Forest</span><span style="color:#ffaa00">79%</span><span style="color:#ffaa00">35ms</span><span style="color:var(--green)">✓ Full</span><span style="color:#ffaa00">∼ Baseline</span></div>
      <div class="compare-row compare-winner"><span>XGBoost ★</span><span style="color:var(--green)">94%</span><span style="color:var(--green)">18ms</span><span style="color:var(--green)">✓ Full</span><span style="color:var(--green)">✓ Chosen</span></div>
      <div class="compare-row"><span>Neural Network</span><span style="color:var(--green)">92%</span><span style="color:var(--rose)">210ms</span><span style="color:var(--rose)">✗ None</span><span style="color:var(--rose)">✗ Black box</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — Why SHAP</div>
    <div class="cs-headline">A fraud alert without a reason is useless. SHAP turns every prediction into a story.</div>
    <p class="cs-text">Used <strong>TreeExplainer</strong> — exact Shapley values for tree models, 10× faster than KernelExplainer. Each prediction outputs which features pushed toward fraud and by how much. Example output for a flagged transaction:</p>
    <div style="background:var(--bg3);border:1px solid var(--border);padding:18px;margin-top:12px">
      <div style="font-family:var(--mono);font-size:9px;color:var(--text3);letter-spacing:.1em;margin-bottom:14px">Transaction #84291 — FRAUD (confidence: 92.3%)</div>
      <div class="shap-row"><span class="shap-feat">High Amount</span><div class="shap-bar"><div class="shap-fill" style="width:80%;background:var(--rose)"></div></div><span class="shap-val" style="color:var(--rose)">+0.41 ↑ fraud</span></div>
      <div class="shap-row"><span class="shap-feat">Unknown Merchant</span><div class="shap-bar"><div class="shap-fill" style="width:55%;background:var(--rose)"></div></div><span class="shap-val" style="color:var(--rose)">+0.28 ↑ fraud</span></div>
      <div class="shap-row"><span class="shap-feat">Late Night (2AM)</span><div class="shap-bar"><div class="shap-fill" style="width:38%;background:var(--rose)"></div></div><span class="shap-val" style="color:var(--rose)">+0.19 ↑ fraud</span></div>
      <div class="shap-row"><span class="shap-feat">Known Location</span><div class="shap-bar"><div class="shap-fill" style="width:22%;background:var(--green)"></div></div><span class="shap-val" style="color:var(--green)">−0.09 ↓ fraud</span></div>
    </div>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Every obstacle became an architecture decision.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>0.17% fraud — all-Legit predictions</span><span style="color:var(--green)">SMOTE + class_weight</span><span>Balances gradient updates without test leakage</span></div>
      <div class="cs-challenge-row"><span>Equal FP/FN penalty → poor recall</span><span style="color:var(--green)">Cost matrix (FN=5×FP)</span><span>Aligns loss with real banking loss ratios</span></div>
      <div class="cs-challenge-row"><span>SHAP too slow (&gt;200ms)</span><span style="color:var(--green)">TreeExplainer + cache</span><span>Exact Shapley in &lt;5ms for tree models</span></div>
      <div class="cs-challenge-row"><span>Time is circular (23:59 ≈ 00:01)</span><span style="color:var(--green)">Cyclical sin/cos encode</span><span>Preserves continuity at day boundaries</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">94% fraud recall · 18ms inference · live on Streamlit Cloud</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">94%</div><div class="cs-m-label">Fraud Recall</div><div class="cs-m-sub">94 in 100 caught</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">0.87</div><div class="cs-m-label">F1 Score</div><div class="cs-m-sub">Fraud class</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">18ms</div><div class="cs-m-label">P95 Latency</div><div class="cs-m-sub">Predict + explain</div></div>
    </div>
    <div class="cs-insight" style="margin-top:16px">Deployed on Streamlit Cloud · accepts any transaction CSV · full SHAP waterfall per prediction · production-realistic from day one.</div>`
},

speech:{
  name:'SpeechFlow',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">India has 20+ major spoken languages — most ASR tools only handle English well.</div>
    <p class="cs-text">Existing browser dictation and cheap APIs choke on Indian accents, code-switching, and regional languages. Teams needing multilingual transcription either pay for expensive enterprise ASR or accept poor accuracy. The goal was a <strong>production-quality, low-latency speech-to-text platform</strong> that works across languages without enterprise pricing.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>Groq's LPU inference is fast enough to make Whisper large-v3 usable in a real-time product loop, not just batch transcription — that speed is the whole product.</div>`,
  td:`<div class="cs-label">Audio Pipeline & Data Handling</div>
    <div class="cs-headline">Browser audio is messy — WebM containers, variable sample rates, unpredictable silence.</div>
    <p class="cs-text">Captured audio via <strong>WebRTC/MediaRecorder</strong> in WebM/Opus format, chunked for streaming upload. Backend normalizes sample rate and strips leading/trailing silence before sending to Whisper, which meaningfully improves transcription accuracy on short clips.</p>
    <p class="cs-text">Handles multi-minute recordings by chunking on natural pause boundaries rather than fixed intervals, avoiding mid-word cuts that would hurt the LLaMA summarization step downstream.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Voice in, transcript + summary out — two-model pipeline behind one API.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">React/TS Client</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">WebRTC Capture</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">FastAPI Backend</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Groq Whisper v3</div><span class="arch-arrow">→</span>
      <div class="arch-node green">LLaMA 3.3 Summarizer</div><span class="arch-arrow">→</span>
      <div class="arch-node">Vercel Edge</div>
    </div>`,
  tm:`<div class="cs-label">Model Selection Rationale</div>
    <div class="cs-headline">Why Groq-hosted Whisper over local transformers or browser-native APIs.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Approach</span><span>Accuracy</span><span>Latency</span><span>Multi-lang</span><span>Verdict</span></div>
      <div class="compare-row"><span>Browser Web Speech API</span><span style="color:var(--rose)">Low</span><span style="color:var(--green)">Instant</span><span style="color:var(--rose)">Weak</span><span style="color:var(--rose)">✗ Inconsistent</span></div>
      <div class="compare-row"><span>Local transformers (CPU)</span><span style="color:#ffaa00">Good</span><span style="color:var(--rose)">3–8s</span><span style="color:var(--green)">Strong</span><span style="color:var(--rose)">✗ Too slow</span></div>
      <div class="compare-row compare-winner"><span>Groq Whisper large-v3 ★</span><span style="color:var(--green)">High</span><span style="color:var(--green)">&lt;1s</span><span style="color:var(--green)">Strong</span><span style="color:var(--green)">✓ Chosen</span></div>
    </div>
    <p class="cs-text" style="margin-top:14px">The LLaMA 3.3-70b layer on top isn't just transcription — it condenses long recordings into structured summaries, so the product delivers a usable output, not just raw text.</p>`,
  tx:`<div class="cs-label">Why This Still Needs "Explainability"</div>
    <div class="cs-headline">Transparency here means confidence, not SHAP values.</div>
    <p class="cs-text">Speech systems fail silently — a wrong transcription looks as confident as a right one. SpeechFlow surfaces <strong>per-segment confidence scores</strong> from Whisper's output and flags low-confidence spans in the UI, so users know which parts of a transcript to double-check rather than trusting it blindly.</p>
    <div class="cs-insight"><span class="cs-insight-label">DESIGN PRINCIPLE</span>Every AI output in this portfolio surfaces its own uncertainty — whether that's a SHAP value or a confidence score — instead of presenting predictions as ground truth.</div>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Migrating from local transformers to a hosted API forced several production fixes.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>Local model too slow for live demo</span><span style="color:var(--green)">Switched to Groq API</span><span>LPU inference cuts latency from seconds to &lt;1s</span></div>
      <div class="cs-challenge-row"><span>CORS blocking browser → API calls</span><span style="color:var(--green)">FastAPI CORS middleware</span><span>Explicit origin allowlist for Vercel domain</span></div>
      <div class="cs-challenge-row"><span>WebM audio rejected by some decoders</span><span style="color:var(--green)">Server-side re-encode</span><span>Normalizes format before model call</span></div>
      <div class="cs-challenge-row"><span>Mobile browsers hardcoded desktop assumptions</span><span style="color:var(--green)">Responsive audio UI rebuild</span><span>Works across phone/tablet/desktop</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">Sub-second transcription · multilingual · live on Vercel.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">&lt;1s</div><div class="cs-m-label">ASR Latency</div><div class="cs-m-sub">Whisper v3 on Groq</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">Multi</div><div class="cs-m-label">Languages</div><div class="cs-m-sub">Indian + global</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Live</div><div class="cs-m-label">Deployment</div><div class="cs-m-sub">Vercel + FastAPI</div></div>
    </div>
    <div class="cs-insight" style="margin-top:16px">Full-stack production build — React/TypeScript frontend, FastAPI backend, real audio pipeline handling — not a notebook demo.</div>`
},

collab:{
  name:'CollabBoard',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">Remote teams need a shared board that updates instantly for everyone — not on refresh.</div>
    <p class="cs-text">Most lightweight Kanban tools either poll for updates (laggy) or need heavyweight infrastructure. The goal was a Trello-style board where <strong>every drag, edit, and comment appears for all collaborators in real time</strong>, with AI helping triage the backlog instead of leaving it to manual sorting.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>Real-time collaboration is a conflict-resolution problem as much as a networking one — two people moving the same card at once needs a deterministic outcome, not a race condition.</div>`,
  td:`<div class="cs-label">Data Model & State Sync</div>
    <div class="cs-headline">PostgreSQL as source of truth, Socket.IO as the broadcast layer.</div>
    <p class="cs-text">Boards, columns, cards, and activity logs are normalized in <strong>PostgreSQL</strong>. Every mutation writes to the DB first, then broadcasts a diff over <strong>Socket.IO</strong> rooms scoped per board — so only relevant clients receive updates, keeping payloads small as boards scale.</p>
    <p class="cs-text">Card position uses fractional indexing rather than integer order, so reordering one card never requires rewriting every other card's position — critical once multiple users are moving cards concurrently.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Optimistic UI updates reconciled against a authoritative server state.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">React Client</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Socket.IO Gateway</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Node.js API</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">PostgreSQL</div><span class="arch-arrow">→</span>
      <div class="arch-node green">Groq Task AI</div><span class="arch-arrow">→</span>
      <div class="arch-node green">Broadcast to Room</div>
    </div>`,
  tm:`<div class="cs-label">Conflict Resolution Design</div>
    <div class="cs-headline">Last-write-wins with server reconciliation, chosen over full CRDT complexity.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Approach</span><span>Complexity</span><span>Consistency</span><span>Fit</span><span>Verdict</span></div>
      <div class="compare-row"><span>Client-only optimistic</span><span style="color:var(--green)">Low</span><span style="color:var(--rose)">Weak</span><span style="color:#ffaa00">Partial</span><span style="color:var(--rose)">✗ Drifts under load</span></div>
      <div class="compare-row compare-winner"><span>Server-reconciled LWW ★</span><span style="color:#ffaa00">Medium</span><span style="color:var(--green)">Strong</span><span style="color:var(--green)">Good</span><span style="color:var(--green)">✓ Chosen</span></div>
      <div class="compare-row"><span>Full CRDT</span><span style="color:var(--rose)">High</span><span style="color:var(--green)">Strong</span><span style="color:#ffaa00">Overkill</span><span style="color:var(--rose)">✗ Unnecessary here</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — AI Task Suggestions</div>
    <div class="cs-headline">The AI doesn't silently reorder your board — it explains every suggestion.</div>
    <p class="cs-text">Groq-powered task suggestions (auto-labeling priority, suggesting due dates, flagging stale cards) always come with a one-line rationale shown in the UI — e.g. "Flagged as high priority: mentions 'blocker' and is due in 2 days" — so users can accept, edit, or dismiss with full context rather than trusting a black-box reorder.</p>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Real-time systems break in ways single-user apps never do.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>Two users reorder same card simultaneously</span><span style="color:var(--green)">Fractional indexing</span><span>Avoids full-list rewrite races</span></div>
      <div class="cs-challenge-row"><span>Socket reconnect losing missed events</span><span style="color:var(--green)">Room replay on reconnect</span><span>Client resyncs from last known state</span></div>
      <div class="cs-challenge-row"><span>Broadcasting entire board on every change</span><span style="color:var(--green)">Diff-only payloads</span><span>Keeps bandwidth low as boards grow</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">Instant multi-user sync · live on Vercel.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Real-time</div><div class="cs-m-label">Sync Model</div><div class="cs-m-sub">Socket.IO rooms</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">PostgreSQL</div><div class="cs-m-label">Source of Truth</div><div class="cs-m-sub">Normalized schema</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">AI</div><div class="cs-m-label">Task Suggestions</div><div class="cs-m-sub">Groq-powered</div></div>
    </div>`
},

xai:{
  name:'XAI Copilot',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">A loan denial with no explanation is a compliance risk and a customer-trust failure.</div>
    <p class="cs-text">Fair-lending regulations increasingly require lenders to state <strong>why</strong> a credit decision was made — not just what it was. Most credit scoring models are opaque gradient-boosted ensembles that produce a score with no actionable reason attached, leaving compliance teams to reverse-engineer explanations after the fact.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>An explanation that doesn't tell the applicant what to change isn't useful — SHAP shows why, but a counterfactual shows the path forward. XAI Copilot does both.</div>`,
  td:`<div class="cs-label">Data & Feature Design</div>
    <div class="cs-headline">Credit features engineered for both predictive power and interpretability.</div>
    <p class="cs-text">Uses standard credit-risk features — income, debt-to-income ratio, credit history length, utilization — deliberately kept in business-readable units (ratios, currency, months) rather than opaque PCA components, so SHAP outputs map directly onto terms a loan officer or applicant already understands.</p>
    <p class="cs-text">A separate <strong>bias audit pass</strong> checks model outputs across protected proxy groups (e.g. geography as a proxy for demographics) to catch disparate impact before deployment.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Decision → explanation → counterfactual appeal, all in one request.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">Credit Application</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Feature Pipeline</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">LightGBM Model</div><span class="arch-arrow">→</span>
      <div class="arch-node green">SHAP Explainer</div><span class="arch-arrow">→</span>
      <div class="arch-node green">Bias Detector</div><span class="arch-arrow">→</span>
      <div class="arch-node green">LLM Appeal Engine</div>
    </div>`,
  tm:`<div class="cs-label">Model Selection Rationale</div>
    <div class="cs-headline">LightGBM chosen for speed + native SHAP support at credit-decision scale.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Model</span><span>AUC</span><span>Latency</span><span>SHAP</span><span>Verdict</span></div>
      <div class="compare-row"><span>Logistic Regression</span><span style="color:#ffaa00">0.74</span><span style="color:var(--green)">2ms</span><span style="color:var(--green)">✓ Full</span><span style="color:#ffaa00">∼ Too rigid</span></div>
      <div class="compare-row compare-winner"><span>LightGBM ★</span><span style="color:var(--green)">0.89</span><span style="color:var(--green)">6ms</span><span style="color:var(--green)">✓ Full</span><span style="color:var(--green)">✓ Chosen</span></div>
      <div class="compare-row"><span>Deep Neural Net</span><span style="color:var(--green)">0.90</span><span style="color:var(--rose)">120ms</span><span style="color:var(--rose)">✗ Approx only</span><span style="color:var(--rose)">✗ Not compliant-ready</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — Counterfactual Appeals</div>
    <div class="cs-headline">"Denied because X" is only half the answer — the LLM layer adds "here's what to change."</div>
    <p class="cs-text">SHAP identifies the top negative contributors to a decision (e.g. high debt-to-income ratio). An LLM layer then converts that into a concrete, achievable counterfactual: <strong>"Reduce debt ratio from 0.62 to 0.40 to flip this decision."</strong> This is grounded directly in the SHAP values — the LLM explains, it doesn't invent new reasoning.</p>
    <div class="cs-insight"><span class="cs-insight-label">BIAS CHECK</span>Every decision is also scored against a fairness pass so a denial reason can't quietly encode a protected-class proxy without being flagged for review.</div>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Keeping the LLM grounded in the model's actual reasoning was the hardest part.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>LLM hallucinating reasons not in SHAP output</span><span style="color:var(--green)">Constrained prompt + SHAP injection</span><span>LLM only rephrases, never invents factors</span></div>
      <div class="cs-challenge-row"><span>Bias detection needs group-level stats, not per-request</span><span style="color:var(--green)">Batched fairness audit job</span><span>Runs periodically, flags drift over time</span></div>
      <div class="cs-challenge-row"><span>Counterfactuals suggesting unrealistic changes</span><span style="color:var(--green)">Feasibility bounds per feature</span><span>Only suggests changes within realistic ranges</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">0.89 AUC · full SHAP transparency · LLM-generated appeal paths.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">0.89</div><div class="cs-m-label">Model AUC</div><div class="cs-m-sub">LightGBM</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">100%</div><div class="cs-m-label">Decisions Explained</div><div class="cs-m-sub">Per-request SHAP</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Live</div><div class="cs-m-label">Deployment</div><div class="cs-m-sub">Vercel + FastAPI</div></div>
    </div>`
},

scamguard:{
  name:'SCAMGUARD AI',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">Fake job postings scam thousands of applicants — most red flags are hidden in phrasing.</div>
    <p class="cs-text">Scam job listings often mimic legitimate postings closely enough to fool keyword filters — "no experience needed, earn ₹50,000/week" reads differently than a genuine listing, but only if the model can attribute risk to specific language patterns rather than a single blunt keyword list.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>A binary "scam / not scam" label doesn't help a job-seeker evaluate a borderline posting — showing which exact words drove the score does.</div>`,
  td:`<div class="cs-label">Dataset & Preprocessing</div>
    <div class="cs-headline">Labeled job postings dataset, cleaned and vectorized for word-level attribution.</div>
    <p class="cs-text">Text cleaned (lowercasing, punctuation/HTML stripping) and vectorized with <strong>TF-IDF</strong>, preserving individual tokens so SHAP can attribute risk to specific words and phrases rather than opaque embeddings.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Paste a job description → get an instant fraud risk score with word-level reasoning.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">Job Posting Text</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">TF-IDF Vectorizer</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">LightGBM Classifier</div><span class="arch-arrow">→</span>
      <div class="arch-node green">SHAP Word Attribution</div><span class="arch-arrow">→</span>
      <div class="arch-node">Streamlit UI</div>
    </div>`,
  tm:`<div class="cs-label">Model Selection Rationale</div>
    <div class="cs-headline">LightGBM over TF-IDF chosen for speed and native SHAP support on sparse text features.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Model</span><span>Recall</span><span>Interpretability</span><span>Verdict</span></div>
      <div class="compare-row"><span>Naive Bayes</span><span style="color:#ffaa00">72%</span><span style="color:#ffaa00">Partial</span><span style="color:var(--rose)">∼ Weaker recall</span></div>
      <div class="compare-row compare-winner"><span>LightGBM + TF-IDF ★</span><span style="color:var(--green)">85%</span><span style="color:var(--green)">Full (SHAP)</span><span style="color:var(--green)">✓ Chosen</span></div>
      <div class="compare-row"><span>Transformer classifier</span><span style="color:var(--green)">87%</span><span style="color:var(--rose)">Low</span><span style="color:var(--rose)">✗ No word-level XAI</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — Word-Level SHAP</div>
    <div class="cs-headline">Every risk score comes with the exact phrases that triggered it.</div>
    <p class="cs-text">Rather than a single opaque probability, the tool highlights specific n-grams like <strong>"no experience required"</strong> or <strong>"pay upfront fee"</strong> with their individual SHAP contribution — so a user can judge for themselves whether the flagged language is actually suspicious in context.</p>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Legit and scam postings share a lot of overlapping vocabulary.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>Vague postings look scammy but aren't</span><span style="color:var(--green)">Weighted n-grams over single words</span><span>Captures phrase context, not isolated terms</span></div>
      <div class="cs-challenge-row"><span>TF-IDF sparse dimensionality</span><span style="color:var(--green)">Vocabulary pruning + min_df filter</span><span>Keeps model fast without losing signal</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">85% fraud recall with word-level SHAP explanations, live on Streamlit.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">85%</div><div class="cs-m-label">Fraud Recall</div><div class="cs-m-sub">Held-out test set</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">Word</div><div class="cs-m-label">XAI Granularity</div><div class="cs-m-sub">Per n-gram SHAP</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Live</div><div class="cs-m-label">Deployment</div><div class="cs-m-sub">Streamlit Cloud</div></div>
    </div>`
},

hr:{
  name:'HR Attrition',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">Knowing WHO will quit is only half the value — HR needs to know WHY, per employee.</div>
    <p class="cs-text">Generic attrition scores tell a manager "this employee is at risk" but not what's driving it — compensation, overtime, tenure stagnation, or something else entirely. Without a reason, HR can't design a targeted retention intervention.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>This project's XAI methodology became the basis for a COMSYS 2026 (Springer) paper on explainable ML for employee turnover — the explainability wasn't an add-on, it was the research contribution.</div>`,
  td:`<div class="cs-label">Dataset & Features</div>
    <div class="cs-headline">HR analytics dataset with tenure, compensation, satisfaction, and workload features.</div>
    <p class="cs-text">Features include monthly income, years at company, overtime status, job satisfaction score, and distance from home — kept in business-native units so SHAP outputs read naturally to an HR manager without translation.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Employee record → attrition risk score → per-employee SHAP waterfall.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">Employee Records</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Feature Eng.</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Random Forest</div><span class="arch-arrow">→</span>
      <div class="arch-node green">SHAP Waterfall</div><span class="arch-arrow">→</span>
      <div class="arch-node green">Per-employee Report</div>
    </div>`,
  tm:`<div class="cs-label">Model Selection Rationale</div>
    <div class="cs-headline">Random Forest chosen for stability on tabular HR data with mixed feature types.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Model</span><span>Accuracy</span><span>Stability</span><span>Verdict</span></div>
      <div class="compare-row"><span>Logistic Regression</span><span style="color:#ffaa00">81%</span><span style="color:var(--green)">High</span><span style="color:#ffaa00">∼ Underfits interactions</span></div>
      <div class="compare-row compare-winner"><span>Random Forest ★</span><span style="color:var(--green)">89%</span><span style="color:var(--green)">High</span><span style="color:var(--green)">✓ Chosen</span></div>
      <div class="compare-row"><span>XGBoost</span><span style="color:var(--green)">90%</span><span style="color:#ffaa00">Medium</span><span style="color:#ffaa00">∼ Marginal gain, less stable on small data</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — Per-Employee Waterfalls</div>
    <div class="cs-headline">Every at-risk employee gets an individual SHAP waterfall, not a shared feature-importance chart.</div>
    <p class="cs-text">Global feature importance tells you "overtime matters on average" — it doesn't tell you whether <em>this specific employee's</em> risk comes from overtime, pay, or tenure. Per-employee SHAP waterfalls decompose each individual's score into the exact factors driving it, so HR can act on a specific case rather than a population-level trend.</p>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Translating SHAP output into something non-technical HR staff can use directly.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>Raw SHAP plots too technical for HR audience</span><span style="color:var(--green)">Waterfall + plain-English labels</span><span>Non-technical stakeholders read it directly</span></div>
      <div class="cs-challenge-row"><span>Small dataset risking overfit</span><span style="color:var(--green)">Cross-validated RF with depth limits</span><span>Generalizes without memorizing training rows</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">89% accuracy · per-employee explainability · basis for a published paper.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">89%</div><div class="cs-m-label">Accuracy</div><div class="cs-m-sub">Random Forest</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">Per-emp.</div><div class="cs-m-label">XAI Granularity</div><div class="cs-m-sub">SHAP waterfall</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Paper</div><div class="cs-m-label">COMSYS 2026</div><div class="cs-m-sub">Springer, accepted</div></div>
    </div>`
},

jeevan:{
  name:'JeevanMitra AI',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">Smallholder farmers need AI-grade crop guidance — on ₹2000 phones, with no reliable backend.</div>
    <p class="cs-text">Most agri-tech apps assume constant connectivity and capable hardware. The FUSIONX 2026 brief was to build something usable for farmers in rural India in 48 hours — meaning zero backend infrastructure cost, voice-first interaction for low-literacy users, and support across multiple Indian languages.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>Constraint-driven design: no backend meant every feature had to run client-side or via a single fast LLM call — this forced a simpler, more robust architecture than a "proper" server-based app.</div>`,
  td:`<div class="cs-label">Feature Set & Data Sources</div>
    <div class="cs-headline">7 farming modules built without a dedicated data pipeline.</div>
    <p class="cs-text">Crop advisory, yield forecasting, disease detection (via description/photo prompts to the LLM), and live market price lookups — all driven through structured prompts to Groq's LLaMA-3 rather than a trained model per feature, since there was no time or infra budget to collect and train on agricultural datasets in 48 hours.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Zero-backend design — everything runs from a static GitHub Pages deploy.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">Voice / Text Input</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Web Speech API</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Groq LLaMA-3</div><span class="arch-arrow">→</span>
      <div class="arch-node green">7 Farming Modules</div><span class="arch-arrow">→</span>
      <div class="arch-node">GitHub Pages (No Backend)</div>
    </div>`,
  tm:`<div class="cs-label">Architecture Decision — Why No Trained Model</div>
    <div class="cs-headline">LLM-as-reasoning-engine chosen over a custom trained model given the 48-hour constraint.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Approach</span><span>Build Time</span><span>Infra Cost</span><span>Verdict</span></div>
      <div class="compare-row"><span>Custom trained CV/NLP model</span><span style="color:var(--rose)">Weeks</span><span style="color:var(--rose)">Server needed</span><span style="color:var(--rose)">✗ Infeasible in 48h</span></div>
      <div class="compare-row compare-winner"><span>LLM prompt engineering ★</span><span style="color:var(--green)">Hours</span><span style="color:var(--green)">$0</span><span style="color:var(--green)">✓ Chosen</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — Voice-First Transparency</div>
    <div class="cs-headline">Recommendations are read back in the farmer's own language, not just displayed as text.</div>
    <p class="cs-text">Every crop or market recommendation is spoken aloud via the Web Speech API in the user's selected language, with the reasoning included in plain language ("prices are up because of seasonal demand") rather than a bare number — critical for users who may not read fluently.</p>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Building for the lowest common denominator of hardware and connectivity.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>No backend budget or time</span><span style="color:var(--green)">Static site + client-side API calls</span><span>Runs entirely on GitHub Pages at $0 cost</span></div>
      <div class="cs-challenge-row"><span>Low-end phones, patchy connectivity</span><span style="color:var(--green)">Lightweight JS, minimal assets</span><span>Loads and runs on ₹2000 devices</span></div>
      <div class="cs-challenge-row"><span>Low-literacy target users</span><span style="color:var(--green)">Voice-first UI in 6 languages</span><span>Removes reading as a barrier to access</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">🏆 FUSIONX 2026 Winner — Best AI Innovation for Social Impact.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">6</div><div class="cs-m-label">Languages</div><div class="cs-m-sub">Voice-enabled</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">$0</div><div class="cs-m-label">Infra Cost</div><div class="cs-m-sub">No backend</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">48h</div><div class="cs-m-label">Build Time</div><div class="cs-m-sub">Hackathon sprint</div></div>
    </div>`
},

medverify:{
  name:'MedVerify AI',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">Forged medical certificates enable insurance fraud and workplace absenteeism abuse.</div>
    <p class="cs-text">HR teams and insurers manually review medical certificates with no systematic way to catch forgeries — inconsistent formatting, mismatched letterheads, or fabricated diagnosis codes often slip through visual inspection alone. The goal was an NLP + ML system that flags suspicious certificates automatically, giving reviewers a starting point instead of a blank page.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>Document fraud detection is a text-consistency problem as much as an image problem — mismatches between stated diagnosis, prescribed rest period, and issuing authority are strong signals a pure image classifier would miss.</div>`,
  td:`<div class="cs-label">Data & Preprocessing</div>
    <div class="cs-headline">Certificate text extracted and structured before any fraud scoring happens.</div>
    <p class="cs-text">Uploaded certificates go through OCR/text extraction to pull structured fields — hospital name, doctor registration number, diagnosis, dates, and rest duration. These fields are then checked for internal consistency and against known patterns of legitimate documentation.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Upload → extract → classify → risk verdict, deployed live on Render.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">Uploaded Certificate</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">OCR / Text Extraction</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">NLP Feature Pipeline</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">ML Fraud Classifier</div><span class="arch-arrow">→</span>
      <div class="arch-node green">Risk Verdict</div><span class="arch-arrow">→</span>
      <div class="arch-node">Render Web App</div>
    </div>`,
  tm:`<div class="cs-label">Model Selection Rationale</div>
    <div class="cs-headline">A feature-engineered ML classifier over document consistency signals, not raw image classification.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Approach</span><span>Interpretability</span><span>Data Needed</span><span>Verdict</span></div>
      <div class="compare-row"><span>Pure image CNN classifier</span><span style="color:var(--rose)">Low</span><span style="color:var(--rose)">Large labeled set</span><span style="color:var(--rose)">✗ Infeasible for hackathon scale</span></div>
      <div class="compare-row compare-winner"><span>NLP consistency features + ML ★</span><span style="color:var(--green)">High</span><span style="color:#ffaa00">Moderate</span><span style="color:var(--green)">✓ Chosen</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — Flagging Specific Inconsistencies</div>
    <div class="cs-headline">A verdict of "suspicious" always names which field triggered it.</div>
    <p class="cs-text">Rather than a single fraud score, the system reports the specific inconsistency driving concern — e.g. "rest period exceeds typical duration for stated diagnosis" or "registration number format doesn't match issuing state" — so a human reviewer can quickly confirm or dismiss the flag.</p>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Balancing false positives against the cost of missing a real forgery.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>Wide variation in legitimate certificate formats</span><span style="color:var(--green)">Field-level consistency checks over templates</span><span>Generalizes across formats instead of memorizing one</span></div>
      <div class="cs-challenge-row"><span>OCR errors on low-quality scans</span><span style="color:var(--green)">Confidence-aware field extraction</span><span>Flags low-confidence fields for manual review</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">🥈 Ideathon 2026 — 3rd Place · now live on Render.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">🥈</div><div class="cs-m-label">Ideathon 2026</div><div class="cs-m-sub">3rd Place</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">NLP</div><div class="cs-m-label">Core Method</div><div class="cs-m-sub">Document consistency</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Live</div><div class="cs-m-label">Deployment</div><div class="cs-m-sub">Render</div></div>
    </div>
    <div class="cs-insight" style="margin-top:16px">GitHub: <strong>github.com/AkashMs24/medverify</strong> · Live demo: <strong>medverify-nws7.onrender.com</strong></div>`
},

recsys:{
  name:'Recommendation Engine',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">Most recommendation engines fail on day one — no user history means no recommendations.</div>
    <p class="cs-text">Classic collaborative filtering needs interaction history to work, which means new users, new products, or entirely new domains all hit the same "cold-start" wall. The goal was a recommender that works immediately on <strong>any</strong> dataset — movies, jobs, products — without retraining or waiting for interaction data to accumulate.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>Content-based similarity (what an item IS) sidesteps cold-start entirely, since it needs zero interaction history — only item descriptions.</div>`,
  td:`<div class="cs-label">Data Handling — Domain Agnostic by Design</div>
    <div class="cs-headline">Accepts any CSV with a text description field — no schema lock-in.</div>
    <p class="cs-text">Text fields (titles, descriptions, tags) are vectorized via <strong>TF-IDF</strong> for fast baseline similarity, with <strong>Sentence-BERT embeddings</strong> layered on top for semantic similarity that catches conceptually related items even without shared keywords.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Two-stage similarity pipeline with an explicit cold-start fallback path.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">Any Dataset (CSV)</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">TF-IDF Vectorizer</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Sentence-BERT Embeddings</div><span class="arch-arrow">→</span>
      <div class="arch-node green">Cold-Start Fallback</div><span class="arch-arrow">→</span>
      <div class="arch-node green">Per-item Explanation</div><span class="arch-arrow">→</span>
      <div class="arch-node">Streamlit UI</div>
    </div>`,
  tm:`<div class="cs-label">Approach Rationale</div>
    <div class="cs-headline">Content-based + semantic hybrid chosen over pure collaborative filtering.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Approach</span><span>Cold-Start</span><span>Domain-agnostic</span><span>Verdict</span></div>
      <div class="compare-row"><span>Collaborative filtering</span><span style="color:var(--rose)">Fails</span><span style="color:var(--rose)">Needs retraining</span><span style="color:var(--rose)">✗ Rejected</span></div>
      <div class="compare-row compare-winner"><span>TF-IDF + Sentence-BERT ★</span><span style="color:var(--green)">Handled</span><span style="color:var(--green)">Yes</span><span style="color:var(--green)">✓ Chosen</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — Per-Item Natural Language Reasons</div>
    <div class="cs-headline">Every recommendation says why, in plain language, not just a similarity score.</div>
    <p class="cs-text">Instead of "similarity: 0.87," the engine outputs "recommended because it shares themes of X and Y with items you've shown interest in" — generated from the actual overlapping terms and embedding neighborhoods, not a templated guess.</p>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Making one pipeline work across wildly different datasets without per-domain tuning.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>TF-IDF misses synonyms/related concepts</span><span style="color:var(--green)">Sentence-BERT semantic layer</span><span>Catches conceptual similarity beyond keyword overlap</span></div>
      <div class="cs-challenge-row"><span>Brand-new users with zero history</span><span style="color:var(--green)">Popularity + content fallback</span><span>Always returns relevant results, even on request #1</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">Works across any domain, zero history required, live on Streamlit.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Any</div><div class="cs-m-label">Domain</div><div class="cs-m-sub">No retraining</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">0</div><div class="cs-m-label">History Needed</div><div class="cs-m-sub">Cold-start solved</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Live</div><div class="cs-m-label">Deployment</div><div class="cs-m-sub">Streamlit Cloud</div></div>
    </div>`
},

decisioniq:{
  name:'DecisionIQ',
  tp:`<div class="cs-label">Business Problem</div>
    <div class="cs-headline">Business teams have dashboards full of numbers but no one translating them into decisions.</div>
    <p class="cs-text">Standard BI tools plot trends and anomalies but leave interpretation entirely to the viewer. Small teams without a dedicated analyst need the "so what" — a system that not only forecasts and flags anomalies but explains what action they suggest.</p>
    <div class="cs-insight"><span class="cs-insight-label">KEY INSIGHT</span>Combining a numeric forecasting ensemble with an LLM reasoning layer turns "revenue dipped 12% in week 3" into an actual recommendation, not just a chart annotation.</div>`,
  td:`<div class="cs-label">Data Handling</div>
    <div class="cs-headline">Accepts any tabular business dataset — sales, ops, marketing spend.</div>
    <p class="cs-text">Time-series and categorical features are auto-detected on upload; missing values and outliers are handled before being fed into the forecasting ensemble, so the tool works on messy real-world exports rather than requiring pre-cleaned data.</p>`,
  ta:`<div class="cs-label">System Architecture</div>
    <div class="cs-headline">Ensemble forecasting + anomaly detection + LLM narrative layer.</div>
    <div class="arch-flow" style="margin-top:16px">
      <div class="arch-node">Business Dataset</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">XGBoost + RF Ensemble</div><span class="arch-arrow">→</span>
      <div class="arch-node hl">Anomaly Detection</div><span class="arch-arrow">→</span>
      <div class="arch-node green">LLM Insight Generator</div><span class="arch-arrow">→</span>
      <div class="arch-node">Plotly Dashboard</div>
    </div>`,
  tm:`<div class="cs-label">Model Selection Rationale</div>
    <div class="cs-headline">Ensembling XGBoost and Random Forest for more robust forecasts than either alone.</div>
    <div class="compare-table">
      <div class="compare-row compare-header"><span>Approach</span><span>Robustness</span><span>Interpretability</span><span>Verdict</span></div>
      <div class="compare-row"><span>Single XGBoost</span><span style="color:#ffaa00">Good</span><span style="color:var(--green)">High</span><span style="color:#ffaa00">∼ Baseline</span></div>
      <div class="compare-row compare-winner"><span>XGBoost + RF Ensemble ★</span><span style="color:var(--green)">Strong</span><span style="color:var(--green)">High</span><span style="color:var(--green)">✓ Chosen</span></div>
    </div>`,
  tx:`<div class="cs-label">Explainability — LLM-Generated Business Narratives</div>
    <div class="cs-headline">Anomalies are explained in business language, grounded in the actual detected pattern.</div>
    <p class="cs-text">When an anomaly or trend shift is detected, the LLM layer is given the underlying statistics (magnitude, direction, affected segment) and generates a plain-English narrative and suggested next step — constrained to only describe what the numbers actually show.</p>`,
  tc:`<div class="cs-label">Engineering Challenges & Decisions</div>
    <div class="cs-headline">Keeping "AI insights" grounded instead of generic filler text.</div>
    <div style="display:flex;flex-direction:column;gap:1px;background:var(--border)">
      <div class="cs-challenge-head"><span>Problem</span><span>Decision</span><span>Why It Works</span></div>
      <div class="cs-challenge-row"><span>LLM insights sounding generic/templated</span><span style="color:var(--green)">Stat injection into prompt</span><span>Forces narrative to reference actual numbers</span></div>
      <div class="cs-challenge-row"><span>Any-dataset support breaking on odd schemas</span><span style="color:var(--green)">Auto column-type detection</span><span>Handles varied business exports without manual config</span></div>
    </div>`,
  tr:`<div class="cs-label">Results & Metrics</div>
    <div class="cs-headline">Forecasting + anomaly detection + LLM narrative, live on Streamlit.</div>
    <div class="cs-metrics">
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">LLM</div><div class="cs-m-label">Insight Layer</div><div class="cs-m-sub">Grounded narratives</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--blue)">Ensemble</div><div class="cs-m-label">Forecast Model</div><div class="cs-m-sub">XGBoost + RF</div></div>
      <div class="cs-m"><div class="cs-m-val" style="color:var(--green)">Live</div><div class="cs-m-label">Deployment</div><div class="cs-m-sub">Streamlit Cloud</div></div>
    </div>`
}

};

const CS_ORDER = ['fraud','speech','collab','xai','scamguard','hr','jeevan','medverify','recsys','decisioniq'];
