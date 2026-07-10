/* ============================================================
   PORTFOLIO APP LOGIC — cursor, nav, reveal animations, terminal,
   chatbot, JD matcher, project filters, case-study renderer, etc.
   Depends on data.js being loaded first (SKILLS, ARCH, CMDS, etc.)
   ============================================================ */

const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function ac(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;cur.style.transform=`translate(${mx-3}px,${my-3}px)`;ring.style.transform=`translate(${rx-14}px,${ry-14}px)`;requestAnimationFrame(ac)})();
document.querySelectorAll('a,button,input,textarea').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='44px';ring.style.height='44px';ring.style.borderColor='rgba(255,255,255,.6)'});
  el.addEventListener('mouseleave',()=>{ring.style.width='28px';ring.style.height='28px';ring.style.borderColor='rgba(255,255,255,.3)'});
});
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>50));
const rObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')}),{threshold:.07});
document.querySelectorAll('.reveal').forEach(el=>rObs.observe(el));
function countUp(el,t){let s=0;const step=t/(1500/16);const iv=setInterval(()=>{s=Math.min(s+step,t);el.textContent=Math.floor(s);if(s>=t)clearInterval(iv)},16)}
const cObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('[data-target]').forEach(el=>countUp(el,+el.dataset.target));cObs.unobserve(e.target)}}),{threshold:.3});
document.querySelectorAll('.stats-bar').forEach(el=>cObs.observe(el));
Object.entries(SKILLS).forEach(([id,skills])=>{
  const el=document.getElementById(id);
  if(!el)return;
  el.innerHTML=skills.map(s=>`<div class="sb-item"><span class="sb-name">${s.n}</span><div class="sb-track"><div class="sb-fill${s.p>85?' hl':''}" data-pct="${s.p}" style="width:0"></div></div><span class="sb-pct">${s.p}%</span></div>`).join('');
});
const skObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.sb-item').forEach(it=>{it.classList.add('vis');it.querySelector('.sb-fill').style.width=it.querySelector('.sb-fill').dataset.pct+'%'})}}),{threshold:.2});
document.querySelectorAll('#skills-grid').forEach(el=>skObs.observe(el));
const tlines=[
  {t:'cmd',x:'python xai_copilot.py --model credit_risk --shap'},
  {t:'out',x:'✓ Loading LightGBM credit risk model...'},
  {t:'out',x:'✓ SHAP TreeExplainer initialised'},
  {t:'out',x:'✓ LLM counterfactual engine ready (Groq LLaMA-3)'},
  {t:'out',x:''},
  {t:'cmd',x:'curl -X POST /explain -d \'{"income":32000,"debt_ratio":0.62}\''},
  {t:'out',x:'→ {"decision": "DENIED",'},
  {t:'out',x:'   "shap_top": "high_debt_ratio: +0.38",'},
  {t:'out',x:'   "counterfactual": "Reduce debt ratio to 0.40",'},
  {t:'out',x:'   "confidence": 0.91}'},
  {t:'out',x:''},
];
let li=0;
function rLine(){
  if(li>=tlines.length)return;
  const body=document.getElementById('terminal-body'),ln=tlines[li++];
  const div=document.createElement('div');div.className='tl';
  if(ln.t==='cmd')div.innerHTML=`<span class="p">$ </span><span class="c">${ln.x}</span>`;
  else if(ln.t==='h')div.innerHTML=`<span class="h">${ln.x}</span>`;
  else div.innerHTML=`<span class="o">${ln.x}</span>`;
  body.appendChild(div);body.scrollTop=body.scrollHeight;
  if(li<tlines.length)setTimeout(rLine,ln.t==='cmd'?520:150);
  else{const c=document.createElement('div');c.className='tl';c.innerHTML='<span class="p">$ </span><span class="cblink"></span>';body.appendChild(c)}
}
setTimeout(rLine,900);
document.querySelectorAll('.proj').forEach(card=>{
  const glow=card.querySelector('.proj-glow');
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    const rx=((y-r.height/2)/r.height)*-6,ry=((x-r.width/2)/r.width)*6;
    card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(5px)`;
    if(glow){glow.style.left=x+'px';glow.style.top=y+'px'}
  });
  card.addEventListener('mouseleave',()=>{card.style.transition='transform .5s ease';card.style.transform='perspective(900px) rotateX(0) rotateY(0) translateZ(0)'});
});
function filterProjects(cat,btn){
  document.querySelectorAll('.pf-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj').forEach(p=>{
    const cats=(p.dataset.cat||'').split(' ');
    p.style.display=(cat==='all'||cats.includes(cat))?'block':'none';
  });
}
function showTab(btn,id){
  const tabs=btn.closest('.cs-tabs'),body=tabs.nextElementSibling;
  tabs.querySelectorAll('.cs-tab').forEach(t=>t.classList.remove('active'));
  body.querySelectorAll('.cs-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id)?.classList.add('active');
}
function openArch(k){
  const d=ARCH[k];if(!d)return;
  document.getElementById('arch-title').textContent=d.title;
  const flow=document.getElementById('arch-flow');
  flow.innerHTML='';
  d.nodes.forEach((n,i)=>{
    const div=document.createElement('div');
    div.className='arch-node'+(n.h?' hl':n.g?' green':'');
    div.textContent=n.l;flow.appendChild(div);
    if(i<d.nodes.length-1){const a=document.createElement('span');a.className='arch-arrow';a.textContent='→';flow.appendChild(a)}
  });
  document.getElementById('arch-metrics').innerHTML=d.metrics.map(m=>`<div class="arch-metric"><strong>${m.v}</strong>${m.l}</div>`).join('');
  document.getElementById('arch-modal').classList.add('open');
}
function closeArch(){document.getElementById('arch-modal').classList.remove('open')}

function openJD(){document.getElementById('jd-modal').classList.add('open')}
function closeJD(){document.getElementById('jd-modal').classList.remove('open')}
function analyzeJD(){
  const jd=document.getElementById('jd-input').value.toLowerCase();
  if(!jd.trim()){alert('Please paste a JD first.');return}
  const matches=[];
  for(const[s,l] of Object.entries(MY_SKILLS)){if(jd.includes(s)&&!matches.find(m=>m.s===s))matches.push({s,l,m:Math.min(l+Math.random()*.06-.03,1)})}
  matches.sort((a,b)=>b.m-a.m);
  const top=matches.slice(0,8),avg=top.length?top.reduce((s,m)=>s+m.m,0)/top.length:0;
  const bars=document.getElementById('jd-skill-bars');
  bars.innerHTML=top.map((m,i)=>`<div class="jd-skill-row"><span class="jd-skill-name">${m.s}</span><div class="jd-bar-track"><div class="jd-bar-fill" style="transition-delay:${i*.07}s" data-p="${Math.round(m.m*100)}"></div></div><span class="jd-pct">${Math.round(m.m*100)}%</span></div>`).join('');
  setTimeout(()=>document.querySelectorAll('.jd-bar-fill').forEach(b=>b.style.width=b.dataset.p+'%'),80);
  const score=Math.round(avg*100);
  const sc=score>75?'var(--green)':score>50?'#ffaa00':'var(--rose)';
  document.getElementById('jd-summary').innerHTML=`<span class="jd-score" style="color:${sc}">${score}% Match</span><span class="jd-hl">✓ Strong matches:</span> ${top.slice(0,4).map(m=>m.s).join(', ')}<br><br><strong style="color:#fff">ATS-Optimized Summary:</strong><br><span style="color:#777">AI Engineer & Data Scientist with expertise in ${top.slice(0,3).map(m=>m.s).join(', ')}. Built 10 live production ML apps including fraud detection, XAI credit risk, and multilingual speech platforms. Certified by Oracle, Google & AWS. Optum STEM Scholar 2025–26. Available immediately.</span>`;
  document.getElementById('jd-result').style.display='block';
  document.querySelectorAll('#about-skills .stack-tag').forEach(t=>{if(top.some(m=>t.textContent.toLowerCase().includes(m.s)))t.classList.add('hl')});
  top.forEach(m=>document.querySelectorAll('.tech').forEach(t=>{if(t.textContent.toLowerCase().includes(m.s))t.classList.add('match')}));
}
(async function(){
  const g=document.getElementById('heatmap'),lbl=document.getElementById('heatmap-label');
  const user='AkashMs24';
  function buildGrid(map,total,meta){
    g.innerHTML='';
    const today=new Date(),start=new Date(today);
    start.setDate(start.getDate()-364);start.setDate(start.getDate()-start.getDay());
    const cells=[];
    for(let w=0;w<53;w++)for(let d=0;d<7;d++){
      const dt=new Date(start);dt.setDate(start.getDate()+w*7+d);
      cells.push({dt,key:dt.toISOString().slice(0,10),count:map[dt.toISOString().slice(0,10)]||0});
    }
    const mx=Math.max(...cells.map(c=>c.count),1);
    cells.forEach(({dt,count})=>{
      const div=document.createElement('div');div.className='hm';
      if(dt<=today&&count>0){const r=count/mx;div.classList.add(r<.2?'l1':r<.4?'l2':r<.65?'l3':r<.88?'l4':'l5')}
      if(dt>today)div.style.opacity='.06';
      g.appendChild(div);
    });
    const repoTxt=meta?`${meta.public_repos} repos · ${meta.followers} followers · `:'18 repos · ';
    lbl.textContent=repoTxt+total+' contributions this year';
  }
  function fallback(){
    const today=new Date();let seed=today.getFullYear()*10000+today.getMonth()*100+today.getDate();
    const rng=()=>{seed=(seed*1664525+1013904223)&0xffffffff;return(seed>>>0)/0xffffffff};
    const map={};
    for(let i=0;i<365;i++){const d=new Date(today);d.setDate(d.getDate()-i);const m=d.getMonth(),dw=d.getDay();const mb=[.5,.7,.3,.4,.2,.2,.3,.9,.9,.3,.3,.3][m]||.3,dw2=dw>0&&dw<6?1.2:.5,r=rng()*mb*dw2;if(r>.5)map[d.toISOString().slice(0,10)]=Math.floor(r*8)+1}
    buildGrid(map,434,null);lbl.textContent='18 repos · 434 contributions this year';
  }
  try{
    const res=await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=${new Date().getFullYear()}`,{signal:AbortSignal.timeout(8000)});
    if(!res.ok)throw new Error('api '+res.status);
    const data=await res.json();
    const map={};let total=0;
    (data.contributions||[]).forEach(c=>{map[c.date]=c.count;total+=c.count});
    total=data.total?.[new Date().getFullYear()]||total;
    let meta=null;
    try{const ur=await fetch(`https://api.github.com/users/${user}`,{signal:AbortSignal.timeout(4000)});if(ur.ok)meta=await ur.json()}catch(_){}
    buildGrid(map,total,meta);
  }catch(e){fallback()}
})();
function openTerminal(){document.getElementById('terminal-mode').classList.add('open');document.getElementById('term-input').focus();if(!document.getElementById('term-output').innerHTML)addTL("Type 'help' for all commands.",'result')}
function closeTerminal(){document.getElementById('terminal-mode').classList.remove('open')}
function addTL(text,cls='result'){const o=document.getElementById('term-output'),d=document.createElement('div');d.className='tol '+cls;d.textContent=text;o.appendChild(d);o.scrollTop=99999}
document.getElementById('term-input').addEventListener('keydown',function(e){
  if(e.key==='Enter'){const v=this.value.trim().toLowerCase();if(!v)return;addTL(`akash@portfolio:~$ ${v}`,'cmd');if(CMDS[v]){const r=CMDS[v]();if(r!=null)r.split('\n').forEach(l=>addTL(l))}else addTL(`not found: ${v} — type 'help'`,'error');this.value=''}
  if(e.key==='Escape')closeTerminal();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeTerminal()});

let chatHist=[];
function toggleChat(){const w=document.getElementById('chat-win'),ic=document.getElementById('chat-icon');w.classList.toggle('open');ic.textContent=w.classList.contains('open')?'✕':'💬'}
function sendChip(el){document.getElementById('chat-in').value=el.textContent;sendChat()}
function addMsg(txt,type){const m=document.getElementById('chat-msgs'),d=document.createElement('div');d.className='cmsg '+type;d.textContent=txt;m.appendChild(d);m.scrollTop=m.scrollHeight}
async function sendChat(){
  const inp=document.getElementById('chat-in'),msg=inp.value.trim();
  if(!msg)return;
  addMsg(msg,'user');inp.value='';chatHist.push({role:'user',content:msg});
  const typing=document.createElement('div');typing.className='cmsg bot';typing.id='c-typing';typing.innerHTML='<span style="opacity:.4;letter-spacing:.2em">· · ·</span>';
  document.getElementById('chat-msgs').appendChild(typing);document.getElementById('chat-msgs').scrollTop=99999;
  try{
    const res=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:chatHist})});
    if(!res.ok)throw new Error('API '+res.status);
    const data=await res.json();
    const reply=data.choices?.[0]?.message?.content?.trim()||"Sorry, couldn't get a response!";
    document.getElementById('c-typing')?.remove();addMsg(reply,'bot');chatHist.push({role:'assistant',content:reply});
    if(chatHist.length>12)chatHist=chatHist.slice(-12);
  }catch(e){document.getElementById('c-typing')?.remove();addMsg('⚠ The assistant is temporarily unavailable. Please try again shortly.','bot')}
}
function toggleMobileNav(){
  const l=document.getElementById('nav-links'),b=document.getElementById('nav-hamburger');
  l.classList.toggle('mobile-open');b.textContent=l.classList.contains('mobile-open')?'✕':'☰';
}
document.querySelectorAll('#nav-links a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('nav-links').classList.remove('mobile-open');document.getElementById('nav-hamburger').textContent='☰'}));
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')}));
const styleEl=document.createElement('style');
styleEl.textContent=`
#nav-links.mobile-open{display:flex!important;flex-direction:column;position:fixed;top:52px;left:0;right:0;background:rgba(5,5,5,.98);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);padding:20px 24px;gap:16px;z-index:999}
#nav-links.mobile-open a{font-size:13px;padding:7px 0;border-bottom:1px solid var(--border);letter-spacing:.05em}
`;
document.head.appendChild(styleEl);

/* ── PROJECT DEEP-DIVE CASE STUDIES (all 10 primary projects) ── */

/* Build the project selector and wire it to the case-study renderer */

let currentCS = 'fraud';
function renderCaseStudy(key){
  const cs = CASE_STUDIES[key];
  if(!cs)return;
  currentCS = key;
  ['tp','td','ta','tm','tx','tc','tr'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.innerHTML = cs[id] || '';
  });
  document.querySelectorAll('.cs-proj-btn').forEach(b=>b.classList.toggle('active', b.dataset.key===key));
  const tabsWrap = document.querySelector('.cs-tabs');
  if(tabsWrap){
    tabsWrap.querySelectorAll('.cs-tab').forEach((t,i)=>t.classList.toggle('active', i===0));
    document.querySelectorAll('.cs-panel').forEach((p)=>p.classList.toggle('active', p.id==='tp'));
  }
}
(function initCaseStudySelector(){
  const wrap = document.getElementById('cs-project-select');
  if(!wrap)return;
  wrap.innerHTML = CS_ORDER.map(k=>`<button class="cs-proj-btn${k==='fraud'?' active':''}" data-key="${k}" onclick="renderCaseStudy('${k}')">${CASE_STUDIES[k].name}</button>`).join('');
  renderCaseStudy('fraud');
})();
