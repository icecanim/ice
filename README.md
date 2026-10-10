<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ICE Development · FiveM Scripts</title>
<link rel="icon" href="favicon.png">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
<style>
:root{--bg:#05080f;--card:#0b121e;--line:#17243a;--ice:#7dd3fc;--ice2:#38bdf8;--tx:#e6f1fb;--mu:#7f93ad;--p:0}
*{box-sizing:border-box;margin:0}html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--tx);font:400 16px/1.6 Inter,system-ui,sans-serif;overflow-x:hidden}
a{color:inherit;text-decoration:none}
#pre{position:fixed;inset:0;z-index:99;pointer-events:none}
#pre .pa,#pre .pb2{position:absolute;left:0;width:100%;height:50.5%;background:var(--bg);transition:transform 1s cubic-bezier(.76,0,.24,1) .35s}
.pa{top:0}.pb2{bottom:0}
.pt{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;text-align:center;transition:opacity .6s,transform .9s cubic-bezier(.7,0,.3,1),filter .9s}
.pt span{display:inline-block;opacity:0;transform:translateY(70%);filter:blur(12px);animation:li .9s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:calc(var(--i)*.07s + .15s)}
.l1{font-size:clamp(80px,17vw,200px);font-weight:800;letter-spacing:.05em;line-height:1}
.l1 span{background:linear-gradient(180deg,#fff 25%,var(--ice2));-webkit-background-clip:text;color:transparent;filter:blur(12px) drop-shadow(0 0 30px #38bdf866)}
.l2{font-size:clamp(13px,2.3vw,26px);letter-spacing:.55em;color:var(--ice);font-weight:600;margin-top:6px}
.l2 span{animation-delay:calc(var(--i)*.045s + .8s)}
.ln{display:block;height:2px;width:0;background:linear-gradient(90deg,transparent,var(--ice2),transparent);margin:10px 0;animation:lw .9s cubic-bezier(.2,.8,.2,1) .6s forwards}
@keyframes li{to{opacity:1;transform:none;filter:blur(0)}}@keyframes lw{to{width:min(420px,70vw)}}
#pre.go .pt{opacity:0;transform:scale(1.3);filter:blur(10px)}
#pre.go .pa{transform:translateY(-101%)}#pre.go .pb2{transform:translateY(101%)}
body.ld{overflow:hidden}
.hc>*{opacity:0;transform:translateY(34px);transition:opacity .9s,transform .9s cubic-bezier(.2,.8,.2,1)}
.hc>:nth-child(2){transition-delay:.12s}.hc>:nth-child(3){transition-delay:.24s}.hc>:nth-child(4){transition-delay:.36s}
body.ready .hc>*{opacity:1;transform:none}
#bar{position:fixed;top:0;left:0;height:3px;width:100%;transform-origin:0;transform:scaleX(0);background:linear-gradient(90deg,var(--ice2),#fff);z-index:60}
nav{position:fixed;top:var(--ah,0px);transition:top .8s cubic-bezier(.2,.8,.2,1);width:100%;z-index:50;display:flex;align-items:center;gap:28px;padding:14px 5%;background:#05080ff2;border-bottom:1px solid var(--line)}
nav b{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.5px}nav b img{width:30px}
nav .l{display:flex;gap:22px;margin-left:auto;color:var(--mu);font-size:14px}nav .l a:hover{color:var(--ice)}
.btn{background:linear-gradient(135deg,var(--ice2),#0ea5e9);color:#02121f;font-weight:800;padding:12px 24px;border-radius:12px;border:0;cursor:pointer;font-size:15px;transition:.25s;display:inline-block}
.btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px #38bdf855}.btn.g{background:transparent;color:var(--tx);border:1px solid var(--line)}
#cartBtn{position:relative}#cnt{position:absolute;top:-8px;right:-8px;background:#fff;color:#000;border-radius:99px;font-size:11px;padding:1px 7px}
section{padding:110px 5%;position:relative}h2{font-size:clamp(28px,4vw,46px);font-weight:800;margin-bottom:12px}h2 span,.hl{color:var(--ice)}
.sub{color:var(--mu);max-width:560px;margin-bottom:40px}
#hero{min-height:100vh;display:flex;align-items:center;overflow:hidden;background:radial-gradient(60% 50% at 70% 30%,#0b3a5c66,transparent),var(--bg)}
#snow{position:absolute;inset:0;width:100%;height:100%}
.hc{position:relative;z-index:2;max-width:640px;will-change:transform}
.tag{display:inline-block;border:1px solid var(--line);color:var(--ice);padding:4px 14px;border-radius:99px;font-size:13px;margin-bottom:18px;background:#0b121e}
h1{font-size:clamp(40px,7vw,84px);line-height:1.02;font-weight:800;margin-bottom:20px}
h1 em{font-style:normal;background:linear-gradient(90deg,#fff,var(--ice2),#fff);-webkit-background-clip:text;color:transparent}
@keyframes sh{to{background-position:200%}}
.hv{position:absolute;right:6%;top:50%;z-index:1;width:min(420px,40vw);transform:translateY(-50%);will-change:transform;opacity:0;transition:opacity 1.2s .6s}body.ready .hv{opacity:1}
.fc{background:#0b121ecc;border:1px solid var(--line);border-radius:18px;padding:18px;margin-bottom:14px;animation:fl 5s ease-in-out infinite}
.fc:nth-child(2){animation-delay:-1.5s;margin-left:50px}.fc:nth-child(3){animation-delay:-3s}
@keyframes fl{50%{transform:translateY(-14px)}}
.fc i{display:block;height:8px;border-radius:9px;background:var(--line);margin-top:10px;overflow:hidden}.fc i:after{content:"";display:block;height:100%;width:100%;transform-origin:0;background:var(--ice2);animation:ld 3s ease-in-out infinite alternate}
@keyframes ld{from{transform:scaleX(.15)}to{transform:scaleX(.7)}}
.rv{opacity:0;transform:translateY(50px) scale(.97);transition:1s cubic-bezier(.2,.8,.2,1)}.rv.in{opacity:1;transform:none}
.g3{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
.box{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:28px;transition:.3s}
.box:hover{border-color:var(--ice2);transform:translateY(-6px);box-shadow:0 20px 50px #38bdf81f}.box h3{margin-bottom:8px}.box p{color:var(--mu);font-size:15px}
.big{font-size:44px;font-weight:800;color:var(--ice)}
#flow{height:320vh;padding:0}.st{position:sticky;top:0;height:100vh;display:flex;align-items:center;gap:5%;padding:0 5%}
.steps{flex:1}.step{display:flex;gap:18px;padding:18px 0;opacity:.25;transition:.5s}.step.on{opacity:1}
.step b{width:46px;height:46px;border-radius:50%;border:2px solid var(--line);display:grid;place-items:center;flex:none;transition:.5s}
.step.on b{background:var(--ice2);color:#02121f;border-color:var(--ice2);box-shadow:0 0 30px #38bdf877}
.step p{color:var(--mu);font-size:14px}
.term{flex:1;background:#060a12;border:1px solid var(--line);border-radius:16px;font:13px/1.9 'JetBrains Mono',monospace;min-height:340px;padding:0 0 18px;overflow:hidden}
.th{background:#0b121e;padding:10px 16px;display:flex;gap:7px;margin-bottom:14px}.th s{width:11px;height:11px;border-radius:50%;background:#2a3a55}
.term p{padding:0 18px;opacity:0;transform:translateX(-14px);transition:.4s}.term p.on{opacity:1;transform:none}.ok{color:#4ade80}.ic{color:var(--ice)}
.pg{height:6px;background:var(--line);border-radius:9px;margin:18px;overflow:hidden}.pg i{display:block;height:100%;width:100%;transform-origin:0;transform:scaleX(0);background:var(--ice2)}
.tools{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:30px}.tools button,.tools input{background:var(--card);border:1px solid var(--line);color:var(--tx);padding:10px 18px;border-radius:99px;cursor:pointer;font:inherit;font-size:14px}
.tools button.on{background:var(--ice2);color:#02121f;border-color:var(--ice2)}.tools input{margin-left:auto;cursor:text;min-width:220px}
.pc{background:var(--card);border:1px solid var(--line);border-radius:20px;overflow:hidden;transition:transform .2s,border-color .3s;display:flex;flex-direction:column}
.pc:hover{border-color:var(--ice2)}.pi{aspect-ratio:16/10;background:linear-gradient(135deg,#0c2540,#07111f);display:grid;place-items:center;overflow:hidden;font-size:40px}
.pi img{width:100%;height:100%;object-fit:cover;transition:.6s}.pc:hover .pi img{transform:scale(1.08)}
.pb{padding:20px;display:flex;flex-direction:column;gap:8px;flex:1}.pb small{color:var(--ice);font-size:12px;letter-spacing:1px}
.pb p{color:var(--mu);font-size:14px;flex:1;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.pf{display:flex;align-items:center;justify-content:space-between;margin-top:8px}.pf b{font-size:22px}.pf .btn{padding:9px 18px;font-size:14px}.old{color:var(--mu);text-decoration:line-through;font-size:13px;margin-right:6px}
#dr{position:fixed;top:0;right:0;height:100%;width:min(400px,100%);background:#080d17;border-left:1px solid var(--line);z-index:70;transform:translateX(100%);transition:.45s cubic-bezier(.2,.8,.2,1);padding:24px;display:flex;flex-direction:column}
#dr.open{transform:none}#items{flex:1;overflow:auto}.ci{display:flex;justify-content:space-between;gap:10px;padding:14px 0;border-bottom:1px solid var(--line);font-size:14px}.ci a{color:#f87171;cursor:pointer}
#toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%,120px);background:var(--ice2);color:#02121f;font-weight:800;padding:12px 24px;border-radius:12px;z-index:90;transition:.4s}#toast.s{transform:translate(-50%,0)}
details{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px 22px;margin-bottom:12px}summary{cursor:pointer;font-weight:600}details p{color:var(--mu);margin-top:10px}
#info,#faq{content-visibility:auto;contain-intrinsic-size:auto 600px}
#ann{position:fixed;top:0;left:0;width:100%;height:38px;z-index:55;overflow:hidden;display:flex;align-items:center;background:linear-gradient(90deg,#062a46,#0b4a73 50%,#062a46);border-bottom:1px solid #38bdf866;transform:translateY(-100%);transition:transform .8s cubic-bezier(.2,.8,.2,1)}
#ann.on{transform:none}#ann:before{content:"";position:absolute;top:0;left:0;width:30%;height:100%;background:linear-gradient(90deg,transparent,#ffffff2e,transparent);transform:translateX(-120%) skewX(-20deg);animation:sw 5s linear infinite;pointer-events:none}
@keyframes sw{to{transform:translateX(400%) skewX(-20deg)}}
#ann .bg{position:relative;z-index:2;flex:none;display:flex;align-items:center;gap:7px;padding:0 16px 0 14px;height:100%;background:#062a46;font-weight:800;font-size:12px;letter-spacing:2px;box-shadow:10px 0 14px #062a46}
#ann .bg i{width:8px;height:8px;border-radius:50%;background:#4ade80;animation:pl 1.4s infinite}@keyframes pl{50%{opacity:.25;transform:scale(1.5)}}
.tk{display:flex;width:max-content;animation:mq var(--d,30s) linear infinite;will-change:transform}#ann:hover .tk{animation-play-state:paused}@keyframes mq{to{transform:translateX(-50%)}}
.it{padding:0 28px;white-space:nowrap;font-weight:600;font-size:14px;display:flex;align-items:center;gap:10px}.it:after{content:"❄";color:#7dd3fc99;margin-left:18px}
.it b{font-size:11px;padding:2px 9px;border-radius:99px;letter-spacing:1px;background:#7dd3fc;color:#02121f}.it b.news{background:#fff}.it b.sale{background:#fb923c}
footer{border-top:1px solid var(--line);padding:40px 5%;color:var(--mu);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:14px}
@media(max-width:860px){.hv{display:none}.st{flex-direction:column;justify-content:center;gap:20px}.term{min-height:240px;width:100%}nav .l{display:none}nav .btn{margin-left:auto}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style></head><body class="ld">
<div id="ann"><span class="bg"><i></i>LIVE</span><div class="tk" id="tk"></div></div>
<div id="pre"><i class="pa"></i><i class="pb2"></i><div class="pt"><div class="l1" id="t1"></div><i class="ln"></i><div class="l2" id="t2"></div></div></div><div id="bar"></div>
<nav><b><img src="favicon.png" alt="">ICE DEVELOPMENT</b>
<div class="l"><a href="#info">Why ICE</a><a href="#flow">How it works</a><a href="#shop">Scripts</a><a href="#faq">FAQ</a><a href="https://discord.gg/PdzvsTh8Q2" target="_blank">Discord</a><a href="https://ice-tr.netlify.app/" target="_blank">Who is ICE?</a></div>
<button class="btn g" id="cartBtn" onclick="dr.classList.add('open')">Cart<span id="cnt">0</span></button></nav>

<section id="hero"><canvas id="snow"></canvas>
<div class="hc"><span class="tag">❄ Premium FiveM Scripts</span>
<h1>Cold-built scripts.<br><em>Zero lag.</em></h1>
<p class="sub">High quality jobs, HUDs and roleplay systems for QBCore, ESX and QBOX. Optimized, documented and delivered instantly.</p>
<div><a class="btn" href="#shop">Browse Scripts</a> <a class="btn g" href="#flow">See how it works</a></div></div>
<div class="hv"><div class="fc">⚙ On the path to becoming the best... 👑<i></i></div><div class="fc">Become #1 System 🤩<i></i></div><div class="fc">Matchless systems developing... 💫<i></i></div></div></section>


<section id="info"><h2 class="rv">Why <span>ICE Development</span></h2><p class="sub rv">Quality and different content, backed by real support.</p>
<div class="g3">
<div class="box rv"><div class="big" data-n="100" data-s="+">0</div><h3>Scripts</h3><p>Browse our complete library of jobs, HUDs and systems.</p></div>
<div class="box rv"><div class="big">24/7</div><h3>Support</h3><p>Reach us on Discord any time and get quick help.</p></div>
<div class="box rv"><div class="big" data-n="3" data-s=" Frameworks">0</div><h3>QBCore · ESX · QBOX</h3><p>Built to run on the frameworks you actually use.</p></div>
<div class="box rv"><div class="big">⚡</div><h3>Instant delivery</h3><p>Pay on Tebex and receive your files immediately.</p></div></div></section>

<section id="flow"><div class="st">
<div class="steps"><h2>A system that <span>runs itself</span></h2>
<div class="step"><b>1</b><div><h3>Pick a script</h3><p>Every package syncs live from our Tebex store.</p></div></div>
<div class="step"><b>2</b><div><h3>Secure checkout</h3><p>Basket is created through the Tebex Headless API.</p></div></div>
<div class="step"><b>3</b><div><h3>Instant delivery</h3><p>Your license is bound and files are unlocked.</p></div></div>
<div class="step"><b>4</b><div><h3>Drop in &amp; play</h3><p>Ensure the resource and enjoy.</p></div></div></div>
<div class="term"><div class="th"><s></s><s></s><s></s></div>
<p><span class="ic">$</span> ice sync --store tebex</p><p class="ok">✔ catalog loaded · packages imported</p>
<p><span class="ic">$</span> ice basket create</p><p class="ok">✔ basket ready · checkout link generated</p>
<p><span class="ic">$</span> ice deliver --license auto</p><p class="ok">✔ payment confirmed · files unlocked</p>
<p><span class="ic">$</span> ensure ice_script</p><p class="ok">✔ started · 0.00ms</p><div class="pg"><i></i></div></div></div></section>

<section id="shop"><h2 class="rv"><span>Script</span> Store</h2><p class="sub rv">Automatically synced from Tebex. Always up to date.</p>
<div class="tools" id="cats"></div><div class="g3" id="grid"></div></section>

<section id="faq"><h2 class="rv">FAQ</h2><div style="max-width:760px">
<details class="rv"><summary>How do I receive my scripts?</summary><p>After payment, your files are available instantly on your Tebex/Cfx.re account.</p></details>
<details class="rv"><summary>Why am I logging in with my FiveM account?</summary><p>This process is performed so that the systems can be linked to your Keymaster/Cfx.re account.</p></details>
<details class="rv"><summary>Which frameworks are supported?</summary><p>QBCore, ESX and QBOX. Check each product page for details.</p></details>
<details class="rv"><summary>Refunds?</summary><p>Scripts that run properly are not refundable. Open source purchases are not refunded.</p></details></div></section>

<footer><span>© 2026 ICE Development. All rights reserved.</span><span>Payments processed securely by Tebex</span></footer>

<aside id="dr"><div style="display:flex;justify-content:space-between;margin-bottom:16px"><h3>Your Cart</h3><a onclick="dr.classList.remove('open')" style="cursor:pointer">✕</a></div>
<div id="usr" style="margin-bottom:14px;font-size:14px"></div><div id="items"></div><div class="pf"><span>Total</span><b id="tot">0</b></div><button class="btn" style="width:100%;margin-top:14px" onclick="checkout()">Checkout with Tebex</button></aside>
<div id="toast"></div>

<script defer src="https://js.tebex.io/v/1.js"></script>
<script>
/* ====== CONFIG: only the PUBLIC token goes here. Never put the Private Key in frontend code. ====== */
const PUBLIC_TOKEN='133j5-c9c0b59405aae77f9d557325fd472e214099a8fa';
const API='https://headless.tebex.io/api';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let all=[],cart=JSON.parse(localStorage.getItem('ice_cart')||'[]'),cur='USD',cat='All',q='';
const pre=$('#pre'),sp=(t,id)=>$(id).innerHTML=[...t].map((c,i)=>`<span style="--i:${i}">${c===' '?'&nbsp;':c}</span>`).join('');
sp('ICE','#t1');sp('DEVELOPMENT','#t2');
const t0=performance.now(),fin=()=>setTimeout(()=>{pre.classList.add('go');document.body.classList.add('ready');document.body.classList.remove('ld');setTimeout(ann,1100);setTimeout(()=>pre.remove(),1800)},Math.max(0,2700-(performance.now()-t0)));
document.readyState==='complete'?fin():addEventListener('load',fin);
const fmt=n=>new Intl.NumberFormat('en',{style:'currency',currency:cur}).format(n);
const esc=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const strip=h=>esc(String(h||'').replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').trim());
function toast(t,ms=1800){const e=$('#toast');e.textContent=t;e.classList.add('s');setTimeout(()=>e.classList.remove('s'),ms)}
const demo=[['Hud V5',23,'HUD'],['Ambulance Job',50,'Jobs'],['Radio V2',35,'Systems']].map((d,i)=>({id:'d'+i,name:d[0],price:d[1],cat:d[2],image:'',desc:'Demo item — live Tebex packages load automatically when the API is reachable.'}));
async function load(){
 try{
  const [a,c]=await Promise.all([fetch(`${API}/accounts/${PUBLIC_TOKEN}`).then(r=>r.json()),fetch(`${API}/accounts/${PUBLIC_TOKEN}/categories?includePackages=1`).then(r=>r.json())]);
  cur=a.data?.account?.currency?.iso_4217||'USD';
  all=c.data.flatMap(k=>(k.packages||[]).map(p=>({id:p.id,name:p.name,price:p.total_price??p.base_price,old:p.discount>0?p.base_price:0,type:p.type||'single',cat:k.name,image:p.image||'',desc:strip(p.description)}))).filter((p,i,arr)=>arr.findIndex(x=>x.id===p.id)===i);
  if(!all.length)throw 0
 }catch(e){all=demo;toast('Tebex API unreachable — showing demo items')}
 const n=$('[data-n]');if(n&&all!==demo)n.dataset.n=all.length;
 draw();watchCounters()
}
function draw(){
 const cats=['All',...new Set(all.map(p=>p.cat))];
 $('#cats').innerHTML=cats.map(c=>`<button class="${c===cat?'on':''}" onclick="cat='${esc(c).replace(/'/g,"\\'")}';draw()">${esc(c)}</button>`).join('')+`<input placeholder="Search scripts..." value="${esc(q)}" oninput="q=this.value;clearTimeout(window.st);window.st=setTimeout(grid,150)">`;
 grid();const i=$('#cats input');
}
function grid(){
 const l=all.filter(p=>(cat==='All'||p.cat===cat)&&p.name.toLowerCase().includes(q.toLowerCase()));
 $('#grid').innerHTML=l.map(p=>`<div class="pc rv"><div class="pi">${p.image?`<img loading="lazy" src="${esc(p.image)}" alt="">`:'❄'}</div><div class="pb"><small>${esc(p.cat).toUpperCase()}</small><h3>${esc(p.name)}</h3><p>${p.desc}</p><div class="pf"><div>${p.old?`<span class="old">${fmt(p.old)}</span>`:''}<b>${fmt(p.price)}</b></div><button class="btn" onclick="add('${p.id}')">Add to Cart</button></div></div></div>`).join('')||'<p class="sub">No scripts found.</p>';
 obs();tilt()
}
const save=()=>{localStorage.setItem('ice_cart',JSON.stringify(cart));render()};
function add(id){const p=all.find(x=>String(x.id)===String(id));if(!p||cart.find(x=>x.id==id))return toast('Already in cart');cart.push({id:p.id,name:p.name,price:p.price,type:p.type||'single'});save();toast(p.name+' added');if(!user&&!String(p.id).startsWith('d')){toast('Redirecting to FiveM login...',3000);setTimeout(login,900)}}
function rm(i){cart.splice(i,1);save()}
function render(){$('#cnt').textContent=cart.length;$('#tot').textContent=fmt(cart.reduce((s,x)=>s+x.price,0));
 $('#items').innerHTML=cart.map((x,i)=>`<div class="ci"><span>${esc(x.name)}</span><span>${fmt(x.price)} <a onclick="rm(${i})">✕</a></span></div>`).join('')||'<p class="sub">Your cart is empty.</p>'}
let bk=localStorage.getItem('ice_basket'),user=localStorage.getItem('ice_user');
const H={'Content-Type':'application/json'},BA=`${API}/accounts/${PUBLIC_TOKEN}/baskets`,home=()=>location.origin+location.pathname;
function ui(){$('#usr').innerHTML=user?`Logged in as <b>${esc(user)}</b> · <a onclick="logout()" style="cursor:pointer;color:var(--ice)">Log out</a>`:`<button class="btn" style="width:100%" onclick="login()">Login with FiveM</button>`}
function logout(){bk=user=null;localStorage.removeItem('ice_basket');localStorage.removeItem('ice_user');ui()}
async function sync(){
 if(bk){try{const b=await fetch(`${BA}/${bk}`).then(r=>r.json());user=b.data?.username||null;user?localStorage.setItem('ice_user',user):localStorage.removeItem('ice_user')}catch(e){}}
 ui()
}
async function login(){
 try{
  const b=await fetch(BA,{method:'POST',headers:H,body:JSON.stringify({complete_url:home(),cancel_url:home()})}).then(r=>r.json());
  bk=b.data.ident;localStorage.setItem('ice_basket',bk);
  const a=await fetch(`${BA}/${bk}/auth?returnUrl=${encodeURIComponent(home()+'#shop')}`).then(r=>r.json());
  const l=Array.isArray(a)?a:(a.data||[]);console.log('Tebex auth links',l);
  const u=(l.find(x=>/cfx|fivem/i.test((x.name||'')+(x.url||'')))||l[0])?.url;
  if(!u)throw new Error('No login link returned');
  location.href=u
 }catch(e){console.error(e);toast('Login error: '+(e.message||'try again'),6000)}
}
async function checkout(){
 if(!cart.length)return toast('Cart is empty');if(String(cart[0].id).startsWith('d'))return toast('Demo items cannot be purchased');
 if(!bk||!user)return login();
 try{
  const cu=await fetch(`${BA}/${bk}`).then(r=>r.json());
  const have=(cu.data?.packages||[]).map(p=>String(p.id));
  for(const id of have)if(!cart.some(x=>String(x.id)===id))await fetch(`${API}/baskets/${bk}/packages/remove`,{method:'POST',headers:H,body:JSON.stringify({package_id:Number(id)})});
  for(const x of cart){
   if(have.includes(String(x.id)))continue;
   const r=await fetch(`${API}/baskets/${bk}/packages`,{method:'POST',headers:H,body:JSON.stringify({package_id:Number(x.id),quantity:1,type:x.type||'single'})});
   if(!r.ok){const j=await r.json().catch(()=>({}));console.error('Tebex add package failed',r.status,j);throw new Error(`${x.name}: ${j.detail||j.title||j.message||r.status}`)}
  }
  const chk=await fetch(`${BA}/${bk}`).then(r=>r.json());
  if(!(chk.data?.packages||[]).length)throw new Error('Basket is empty on Tebex side (see console)');
  if(window.Tebex){Tebex.checkout.init({ident:bk,theme:'dark'});Tebex.checkout.launch();dr.classList.remove('open')}
  else location.href=chk.data.links.checkout
 }catch(e){console.error(e);toast('Checkout error: '+(e.message||'try again'),6000);if(/login|basket/i.test(e.message||''))logout()}
}
/* ---- animations ---- */
function obs(){const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add('in'),o.unobserve(e.target))),{threshold:.12});$$('.rv:not(.in)').forEach(e=>o.observe(e))}
function tilt(){$$('.pc').forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px)`};c.onmouseleave=()=>c.style.transform=''})}
function watchCounters(){$$('[data-n]').forEach(e=>{new IntersectionObserver((es,o)=>{if(!es[0].isIntersecting)return;o.disconnect();const t=+e.dataset.n,s=e.dataset.s||'';let k=0;const i=setInterval(()=>{k+=Math.ceil(t/40);if(k>=t){k=t;clearInterval(i)}e.textContent=k+s},30)}).observe(e)})}
const steps=$$('.step'),lines=$$('.term p'),bar=$('#bar'),hc=$('.hc'),hv=$('.hv'),pgi=$('.pg i'),flow=$('#flow'),de=document.documentElement;
let tk=0,ls=-1,ll=-1;
function frame(){tk=0;const y=scrollY,h=de.scrollHeight-innerHeight;bar.style.transform=`scaleX(${h>0?y/h:0})`;
 if(y<innerHeight*1.2){const hp=Math.min(1,y/innerHeight);hc.style.transform=`translate3d(0,${-hp*120}px,0)`;hv.style.transform=`translateY(calc(-50% + ${-hp*200}px)) rotate(${hp*8}deg)`}
 const r=flow.getBoundingClientRect();
 if(r.top<innerHeight&&r.bottom>0){const p=Math.max(0,Math.min(1,-r.top/(r.height-innerHeight)));pgi.style.transform=`scaleX(${p})`;
  const sn=p<.02?0:Math.min(4,Math.floor((p-.02)*4)+1),ln=p<.02?0:Math.min(8,Math.floor((p-.02)*8)+1);
  if(sn!==ls){ls=sn;steps.forEach((s,i)=>s.classList.toggle('on',i<sn))}
  if(ln!==ll){ll=ln;lines.forEach((l,i)=>l.classList.toggle('on',i<ln))}}
}
addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(frame)},{passive:true});frame();
const cv=$('#snow'),cx=cv.getContext('2d');let fl=[],vis=true,on=false;
function rs(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;fl=Array.from({length:Math.min(70,cv.width/16|0)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*2+.6,s:Math.random()*.9+.3,d:Math.random()*6}))}
rs();let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(rs,200)});
function snow(){if(!vis||document.hidden){on=false;return}
 cx.clearRect(0,0,cv.width,cv.height);cx.fillStyle='rgba(191,233,255,.6)';cx.beginPath();
 for(const f of fl){f.y+=f.s;f.d+=.01;f.x+=Math.sin(f.d)*.6;if(f.y>cv.height){f.y=-5;f.x=Math.random()*cv.width}cx.moveTo(f.x+f.r,f.y);cx.arc(f.x,f.y,f.r,0,6.3)}
 cx.fill();requestAnimationFrame(snow)}
function go(){if(!on&&vis&&!document.hidden){on=true;requestAnimationFrame(snow)}}
new IntersectionObserver(e=>{vis=e[0].isIntersecting;go()}).observe(cv);document.addEventListener('visibilitychange',go);go();

async function ann(){
 try{
  const a=await fetch('/.netlify/functions/ann').then(r=>r.json());if(!Array.isArray(a)||!a.length)return;
  const ic={event:'EVENT',news:'NEWS',sale:'SALE'},left=e=>{const d=Date.parse(e)-Date.now();if(!e||d<=0)return'';const h=Math.floor(d/36e5),dd=Math.floor(h/24);return ' · ends in '+(dd?dd+'d '+(h%24)+'h':h?h+'h':Math.max(1,Math.floor(d/6e4))+'m')};
  const grp=()=>{const g=document.createDocumentFragment();a.forEach(x=>{const d=document.createElement('div'),b=document.createElement('b');d.className='it';b.className=x.type;b.textContent=ic[x.type]||'NEWS';d.append(b,document.createTextNode(x.text+left(x.end)));g.append(d)});return g};
  const tk=$('#tk');tk.append(grp());const gw=tk.scrollWidth||300,n=Math.max(1,Math.ceil(innerWidth/gw));
  tk.replaceChildren();for(let i=0;i<n*2;i++)tk.append(grp());
  tk.style.setProperty('--d',Math.max(12,gw*n/70)+'s');
  document.documentElement.style.setProperty('--ah','38px');$('#ann').classList.add('on')
 }catch(e){}
}
obs();render();load();sync();
</script></body></html>
