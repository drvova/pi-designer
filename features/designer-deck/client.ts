import type { DeckSnapshot } from "./types.ts";

export function getClientHtml(): string {
  return `<!DOCTYPE html>
<html lang="en" data-theme="auto">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>pi-designer Deck</title>
<link rel="icon" href="data:,">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css" media="(prefers-color-scheme: dark)">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css" media="(prefers-color-scheme: light)">
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<style>
:root,[data-theme="light"]{--bg:#fafaf8;--fg:#1a1a1a;--card:#fff;--border:#ddd;--accent:#6366f1;--accent-light:#e0e7ff;--muted:#888;--code-bg:#1e1e2e}
[data-theme="dark"]{--bg:#0f0f12;--fg:#e4e4e7;--card:#18181b;--border:#2e2e33;--accent:#818cf8;--accent-light:#312e81;--muted:#71717a;--code-bg:#0d0d12}
*{box-sizing:border-box;margin:0;padding:0}
body{font:14px/1.6 system-ui,sans-serif;background:var(--bg);color:var(--fg);min-height:100vh;transition:background .2s,color .2s}
header{position:sticky;top:0;z-index:100;background:var(--card);border-bottom:1px solid var(--border);padding:.5rem 1.5rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap}
header h1{font-size:1rem;font-weight:600;flex:0 0 auto}
.toolbar{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap;margin-left:auto}
button,.btn{cursor:pointer;border:1px solid var(--border);background:var(--card);color:var(--fg);padding:.35rem .75rem;border-radius:6px;font-size:.8rem;transition:all .15s}
button:hover,.btn:hover{border-color:var(--accent);background:var(--accent-light)}
button.primary{background:var(--accent);color:#fff;border-color:var(--accent)}
button:disabled{opacity:.5;cursor:default}
select{padding:.3rem .5rem;border-radius:6px;border:1px solid var(--border);background:var(--card);color:var(--fg);font-size:.8rem}
main{max-width:100%;padding:1.5rem}
.slide{margin-bottom:2.5rem}
.slide-prompt{font-size:1.1rem;font-weight:600;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px solid var(--border)}
.grid{display:grid;gap:1.5rem}
.option{background:var(--card);border:2px solid var(--border);border-radius:12px;overflow:hidden;cursor:pointer;transition:border-color .2s,box-shadow .2s;position:relative}
.option:hover{border-color:var(--accent)}
.option.selected{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-light)}
.option-header{padding:.6rem .9rem;font-weight:600;font-size:.85rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:.5rem}
.option-badge{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:var(--accent);color:#fff;font-size:.7rem;font-weight:700;flex-shrink:0}
.option.selected .option-badge{background:var(--accent)}
.option:not(.selected) .option-badge{background:var(--muted)}
.preview{padding:0;background:var(--code-bg);overflow:auto;min-height:60px;max-height:500px;font-size:.78rem}
.preview pre{margin:0;padding:.8rem;background:transparent!important;color:#e4e4e7}
.preview pre code{background:transparent!important}
.preview-html{padding:.8rem;background:#fff;color:#1a1a1a;overflow:auto;max-height:500px}
[data-theme="dark"] .preview-html{background:#1a1a1f;color:#e4e4e7}
.preview-image{text-align:center;padding:.8rem}
.preview-image img{max-width:100%;border-radius:6px;border:1px solid var(--border)}
.mermaid{text-align:center;padding:1rem}
.aside{padding:.5rem .9rem .7rem;font-size:.78rem;color:var(--muted);border-top:1px solid var(--border);white-space:pre-line}
.option-meta{padding:.4rem .9rem;font-size:.72rem;color:var(--muted);display:flex;gap:.5rem;align-items:center;border-top:1px solid var(--border)}
.note-input{width:100%;border:1px solid var(--border);border-radius:4px;padding:.3rem .5rem;font-size:.78rem;background:var(--card);color:var(--fg);margin-top:.4rem}
.note-input:focus{outline:none;border-color:var(--accent)}
.bar{position:fixed;bottom:0;left:0;right:0;padding:.6rem 1.5rem;background:var(--card);border-top:1px solid var(--border);display:flex;gap:.8rem;align-items:center;z-index:200;transform:translateY(100%);transition:transform .3s}
.bar.visible{transform:translateY(0)}
.bar-spacer{flex:1}
.summary-area{margin:1.5rem 0;padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:8px}
.summary-area textarea{width:100%;min-height:60px;border:1px solid var(--border);border-radius:4px;padding:.5rem;background:var(--bg);color:var(--fg);font:inherit;resize:vertical}
.loading{display:flex;align-items:center;gap:.5rem;padding:.6rem 0;color:var(--muted);font-size:.8rem}
.loading-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);animation:pulse 1.2s infinite}
@keyframes pulse{0%,100%{opacity:.3}50%{opacity:1}}
@media(max-width:640px){.grid{grid-template-columns:1fr!important}header{padding:.5rem .8rem}}
</style>
</head>
<body>
<header>
<h1>Design Deck</h1>
<div class="toolbar">
<select id="modelSel" onchange="sendModel()" title="Model"></select>
<select id="thinkingSel" onchange="sendModel()" title="Thinking"></select>
<button onclick="toggleTheme()" title="Theme (Cmd+Shift+L)" id="themeBtn">Auto</button>
<button onclick="saveDeck()" title="Save (Cmd+S)">Save</button>
<button onclick="confirmCancel()" class="primary">Done</button>
</div>
</header>
<main id="main"></main>
<div class="bar" id="confirmBar">
<span>Discard all selections?</span>
<div class="bar-spacer"></div>
<button onclick="hideBar()">Cancel</button>
<button onclick="doCancel()" class="primary">Discard</button>
</div>
<div class="bar" id="escBar" style="transform:translateY(100%)">
<span id="escMsg"></span>
<div class="bar-spacer"></div>
<button onclick="hideEsc()">Dismiss</button>
</div>
<script>
let state={slides:[],selectedOptions:{},notes:[],summary:"",theme:"auto",models:[],thinkingLevels:[],selectedModel:"",thinkingLevel:"",generating:false};
let activeSlide=0,activeOption=-1;
const escBar=document.getElementById('escBar');
const escMsg=document.getElementById('escMsg');
function init(){
const es=new EventSource('/sse');
es.onmessage=(e)=>{const d=JSON.parse(e.data);handleSse(d)};
document.addEventListener('keydown',onKey);
mermaid.initialize({startOnLoad:false,theme:state.theme==='dark'?'dark':'default'});
}
function handleSse(d){
if(d.type==='deck'||d.type==='update'){state=d.state;render()}
if(d.type==='generating'){state.generating=true;state.models=d.state.models;state.thinkingLevels=d.state.thinkingLevels;renderToolbar()}
if(d.type==='selection'){state.selectedOptions[d.slideId]=d.optionId;render()}
if(d.type==='idle_timeout'){showEsc('Deck closed (idle timeout).');setTimeout(()=>window.close(),3000)}
}
function render(){
const main=document.getElementById('main');
main.innerHTML='';
renderToolbar();
state.slides.forEach((slide,si)=>{
const div=document.createElement('div');div.className='slide';
const cols=slide.columns||Math.min(4,slide.options.length||1);
const p=document.createElement('div');p.className='slide-prompt';p.textContent=slide.prompt;div.appendChild(p);
const grid=document.createElement('div');grid.className='grid';grid.style.gridTemplateColumns='repeat('+cols+',1fr)';
slide.options.forEach((opt,oi)=>{
const card=document.createElement('div');card.className='option';
const selected=state.selectedOptions[slide.id]===opt.id;if(selected)card.classList.add('selected');
card.setAttribute('role','radio');card.setAttribute('aria-checked',selected);card.setAttribute('tabindex','0');
card.dataset.slide=si;card.dataset.option=oi;
const hdr=document.createElement('div');hdr.className='option-header';
const badge=document.createElement('span');badge.className='option-badge';badge.textContent=oi+1;
const title=document.createElement('span');title.textContent=opt.title;
hdr.appendChild(badge);hdr.appendChild(title);card.appendChild(hdr);
const preview=renderPreview(opt);if(preview)card.appendChild(preview);
if(opt.aside){const aside=document.createElement('div');aside.className='aside';aside.textContent=opt.aside;card.appendChild(aside)}
const meta=document.createElement('div');meta.className='option-meta';
const note=document.createElement('input');note.className='note-input';note.placeholder='Note...';
const existingNote=state.notes.find(n=>n.slideId===slide.id&&n.optionId===opt.id);
if(existingNote)note.value=existingNote.note;
note.addEventListener('input',()=>{const ex=state.notes.find(n=>n.slideId===slide.id&&n.optionId===opt.id);if(ex)ex.note=note.value;else state.notes.push({slideId:slide.id,optionId:opt.id,note:note.value})});
meta.appendChild(note);card.appendChild(meta);
card.onclick=()=>selectOption(si,oi);
card.onfocus=()=>{activeSlide=si;activeOption=oi};
grid.appendChild(card)});
div.appendChild(grid);
const sel=state.selectedOptions[slide.id];
if(sel){const note=document.createElement('div');note.className='summary-area';note.style.marginTop='.5rem';
const ta=document.createElement('textarea');ta.placeholder='Final instructions for this slide...';
const sn=state.notes.find(n=>n.slideId===slide.id&&n.optionId===sel);if(sn)ta.value=sn.note;
ta.addEventListener('input',()=>{const ex=state.notes.find(n=>n.slideId===slide.id&&n.optionId===sel);if(ex)ex.note=ta.value;else state.notes.push({slideId:slide.id,optionId:sel,note:ta.value})});
note.appendChild(ta);div.appendChild(note)}
main.appendChild(div)});
if(state.slides.length>0&&state.selectedOptions[state.slides[state.slides.length-1]?.id]){
const sum=document.createElement('div');sum.className='summary-area';
const label=document.createElement('label');label.textContent='Summary / final instructions';label.style.fontWeight='600';label.style.display='block';label.style.marginBottom='.4rem';
const ta=document.createElement('textarea');ta.placeholder='Summary of decisions...';ta.value=state.summary;
ta.addEventListener('input',()=>state.summary=ta.value);
sum.appendChild(label);sum.appendChild(ta);main.appendChild(sum)}
if(state.generating){const ld=document.createElement('div');ld.className='loading';ld.innerHTML='<span class="loading-dot"></span> Generating more options...';main.appendChild(ld)}
Prism.highlightAllUnder(main);
renderMermaid(main);
}
function renderPreview(opt){
if(opt.previewHtml){const d=document.createElement('div');d.className='preview-html';const iframe=document.createElement('iframe');iframe.style.width='100%';iframe.style.minHeight='100px';iframe.style.border='0';iframe.sandbox='allow-same-origin';iframe.srcdoc=opt.previewHtml;d.appendChild(iframe);return d}
if(!opt.blocks||opt.blocks.length===0)return null;
const d=document.createElement('div');d.className='preview';
for(const b of opt.blocks){
if(b.type==='code'){const pre=document.createElement('pre');const code=document.createElement('code');code.className='language-'+(b.language||'text');code.textContent=b.content;pre.appendChild(code);d.appendChild(pre)}
else if(b.type==='mermaid'){const div=document.createElement('div');div.className='mermaid';div.textContent=b.content;d.appendChild(div)}
else if(b.type==='html'){const inner=document.createElement('div');inner.className='preview-html';inner.innerHTML=b.content;d.appendChild(inner)}
else if(b.type==='image'){const img=document.createElement('div');img.className='preview-image';const i=document.createElement('img');i.src='/image/'+encodeURIComponent(b.content);img.appendChild(i);d.appendChild(img)}
}
return d}
function renderMermaid(root){const els=root.querySelectorAll('.mermaid');els.forEach((el,i)=>{try{mermaid.render('m'+i,el.textContent,(svg)=>{el.innerHTML=svg})}catch{}})}
function renderToolbar(){
const ms=document.getElementById('modelSel');ms.innerHTML='';
if(state.models.length===0){ms.style.display='none'}else{ms.style.display='';state.models.forEach(m=>{const o=document.createElement('option');o.value=m;o.textContent=m;if(m===state.selectedModel)o.selected=true;ms.appendChild(o)})}
const ts=document.getElementById('thinkingSel');ts.innerHTML='';
if(state.thinkingLevels.length===0){ts.style.display='none'}else{ts.style.display='';state.thinkingLevels.forEach(t=>{const o=document.createElement('option');o.value=t;o.textContent=t;if(t===state.thinkingLevel)o.selected=true;ts.appendChild(o)})}
}
function selectOption(si,oi){const slide=state.slides[si];const opt=slide.options[oi];
fetch('/select',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slideId:slide.id,optionId:opt.id,notes:state.notes.filter(n=>n.slideId===slide.id).map(n=>n.note).join('\\n')})});
activeSlide=si;activeOption=oi;render()}
function onKey(e){
const slide=state.slides[activeSlide];if(!slide)return;
if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();activeOption=Math.min(slide.options.length-1,activeOption+1);focusOption()}
if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();activeOption=Math.max(0,activeOption-1);focusOption()}
if(e.key==='Enter'||e.key===' '){e.preventDefault();selectOption(activeSlide,activeOption)}
if(/^[1-9]$/.test(e.key)){const idx=parseInt(e.key)-1;if(idx<slide.options.length){activeOption=idx;selectOption(activeSlide,activeOption)}}
if(e.key==='Escape'){if(Object.keys(state.selectedOptions).length>0){confirmCancel()}else{doCancel()}}
if((e.metaKey||e.ctrlKey)&&e.key==='s'){e.preventDefault();saveDeck()}
if((e.metaKey||e.ctrlKey)&&e.shiftKey&&(e.key==='l'||e.key==='L')){e.preventDefault();toggleTheme()}
}
function focusOption(){const cards=document.querySelectorAll('.option');const slide=state.slides[activeSlide];const offset=state.slides.slice(0,activeSlide).reduce((s,sl)=>s+sl.options.length,0);const card=cards[offset+activeOption];if(card)card.focus()}
function sendModel(){const m=document.getElementById('modelSel').value;const t=document.getElementById('thinkingSel').value;state.selectedModel=m;state.thinkingLevel=t;fetch('/model',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:m,thinkingLevel:t})})}
function toggleTheme(){const themes=['light','dark','auto'];const next=themes[(themes.indexOf(state.theme)+1)%3];state.theme=next;document.documentElement.dataset.theme=next;document.getElementById('themeBtn').textContent=next[0].toUpperCase()+next.slice(1);localStorage.setItem('deck-theme',next);fetch('/theme',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({theme:next})})}
function saveDeck(){const summary=state.summary;fetch('/select',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slideId:'__save',optionId:'__save',summary})});showEsc('Deck saved.')}
function confirmCancel(){const bar=document.getElementById('confirmBar');bar.classList.toggle('visible');if(!bar.classList.contains('visible')){doCancel()}}
function doCancel(){fetch('/cancel',{method:'POST'})}
function hideBar(){document.getElementById('confirmBar').classList.remove('visible')}
function showEsc(msg){escMsg.textContent=msg;escBar.style.transform='translateY(0)';setTimeout(()=>escBar.style.transform='translateY(100%)',3000)}
function hideEsc(){escBar.style.transform='translateY(100%)'}
const savedTheme=localStorage.getItem('deck-theme');if(savedTheme){state.theme=savedTheme;document.documentElement.dataset.theme=savedTheme}
init();
<\/script>
</body>
</html>`;
}

export function getExportHtml(snapshot: DeckSnapshot): string {
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Design Deck Export — ${snapshot.savedAt}</title>
<style>body{font:14px/1.6 system-ui,sans-serif;max-width:900px;margin:2rem auto;padding:0 1rem}
h2{border-bottom:1px solid #ccc;padding-bottom:.3rem;margin-top:2rem}
.opt{border:2px solid #ddd;border-radius:8px;margin:.5rem 0;padding:.5rem .8rem}
.opt.sel{border-color:#6366f1;background:#eef}
pre{background:#1e1e2e;color:#e4e4e7;padding:.8rem;border-radius:6px;overflow:auto}
.note{color:#666;font-style:italic;margin:.3rem 0}
.summary{background:#f5f5f0;padding:1rem;border-radius:8px;margin-top:2rem}</style>
</head><body>
<h1>Design Deck Export</h1>
<p>Saved: ${snapshot.savedAt}</p>
${snapshot.slides.map(s => `
<h2>${s.prompt}</h2>
${s.options.map(o => `
<div class="opt${snapshot.selectedOptions[s.id] === o.id ? ' sel' : ''}">
<strong>${o.title}</strong>${snapshot.selectedOptions[s.id] === o.id ? ' (selected)' : ''}
${o.blocks?.map(b => b.type === 'code' ? `<pre><code>${b.content.replace(/</g, '&lt;')}</code></pre>` : `<div>${b.content}</div>`).join('') || ''}
${o.aside ? `<div class="note">${o.aside}</div>` : ''}
</div>`).join('')}
${(snapshot.notes.filter(n => n.slideId === s.id).map(n => `<div class="note">${n.note}</div>`).join(''))}
`).join('')}
${snapshot.summary ? `<div class="summary"><strong>Summary:</strong> ${snapshot.summary}</div>` : ''}
</body></html>`;
}
