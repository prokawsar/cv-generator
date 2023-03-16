import{S as nt,i as at,s as rt,a as ot,e as C,c as st,b as K,g as de,t as F,d as pe,f as B,h as M,j as it,o as Ie,k as lt,l as ct,m as ft,n as ve,p as V,q as ut,r as dt,u as pt,v as H,w as W,x as Ue,y as Y,z as X,A as ce}from"./chunks/index-c2872cc9.js";import{S as et,I as q,g as ze,f as He,a as Ee,b as fe,s as J,i as We,c as ue,P as Ye,d as ht,e as mt,h as _t}from"./chunks/singletons-db910752.js";import{_ as x}from"./chunks/preload-helper-41c905a7.js";function gt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function wt(a){return a.split("%25").map(decodeURI).join("%25")}function yt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(a,e){const t=new URL(a);for(const s of bt){let i=t[s];Object.defineProperty(t,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return Et(t),t}function Et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function St(a){return a.replace(/\/$/,"")+kt}function Rt(a){let e=5381;if(typeof a=="string"){let t=a.length;for(;t;)e=e*33^a.charCodeAt(--t)}else if(ArrayBuffer.isView(a)){const t=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ne(a)),he(a,e));const te=new Map;function Lt(a,e){const t=Ne(a,e),s=document.querySelector(t);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),n=s.getAttribute("data-ttl");return n&&te.set(t,{body:i,init:u,ttl:1e3*Number(n)}),Promise.resolve(new Response(i,u))}return he(a,e)}function It(a,e,t){if(te.size>0){const s=Ne(a,t),i=te.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(i.body,i.init);te.delete(s)}}return he(e,t)}function Ne(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Rt(e.body)}"]`),s}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Ut(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const n=s.split(/\[(.+?)\](?!\])/);return"/"+n.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(U=>parseInt(U,16))));const g=Ot.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,R,E,L,T]=g;return e.push({name:L,matcher:T,optional:!!R,rest:!!E,chained:E?m===1&&n[0]==="":!1}),E?"(.*?)":R?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function Ut(a){return a.slice(1).split("/").filter(Pt)}function Nt(a,e,t){const s={},i=a.slice(1);let u="";for(let n=0;n<e.length;n+=1){const l=e[n];let _=i[n];if(l.chained&&l.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)l.rest&&(s[l.name]="");else{if(l.matcher&&!t[l.matcher](_)){if(l.optional&&l.chained){let m=i.indexOf(void 0,n);if(m===-1){const g=e[n+1];if(g!=null&&g.rest&&g.chained)u=_;else return}for(;m>=n;)i[m]=i[m-1],m-=1;continue}return}s[l.name]=_}}if(!u)return s}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function $t(a,e,t,s){const i=new Set(e);return Object.entries(t).map(([l,[_,m,g]])=>{const{pattern:R,params:E}=At(l),L={id:l,exec:T=>{const U=R.exec(T);if(U)return Nt(U,E,s)},errors:[1,...g||[]].map(T=>a[T]),layouts:[0,...m||[]].map(n),leaf:u(_)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function u(l){const _=l<0;return _&&(l=~l),[_,a[l]]}function n(l){return l===void 0?l:[i.has(l),a[l]]}}function jt(a){let e,t,s;var i=a[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=H(i,u(a))),{c(){e&&W(e.$$.fragment),t=C()},l(n){e&&Ue(e.$$.fragment,n),t=C()},m(n,l){e&&Y(e,n,l),K(n,t,l),s=!0},p(n,l){const _={};if(l&4&&(_.data=n[2]),l&2&&(_.form=n[1]),l&1&&i!==(i=n[0][0])){if(e){de();const m=e;F(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}i?(e=H(i,u(n)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&B(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&M(t),e&&X(e,n)}}}function Tt(a){let e,t,s;var i=a[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[Dt]},$$scope:{ctx:n}}}}return i&&(e=H(i,u(a))),{c(){e&&W(e.$$.fragment),t=C()},l(n){e&&Ue(e.$$.fragment,n),t=C()},m(n,l){e&&Y(e,n,l),K(n,t,l),s=!0},p(n,l){const _={};if(l&4&&(_.data=n[2]),l&523&&(_.$$scope={dirty:l,ctx:n}),l&1&&i!==(i=n[0][0])){if(e){de();const m=e;F(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}i?(e=H(i,u(n)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&B(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&M(t),e&&X(e,n)}}}function Dt(a){let e,t,s;var i=a[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=H(i,u(a))),{c(){e&&W(e.$$.fragment),t=C()},l(n){e&&Ue(e.$$.fragment,n),t=C()},m(n,l){e&&Y(e,n,l),K(n,t,l),s=!0},p(n,l){const _={};if(l&8&&(_.data=n[3]),l&2&&(_.form=n[1]),l&1&&i!==(i=n[0][1])){if(e){de();const m=e;F(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}i?(e=H(i,u(n)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&B(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&M(t),e&&X(e,n)}}}function Xe(a){let e,t=a[5]&&Ze(a);return{c(){e=lt("div"),t&&t.c(),this.h()},l(s){e=ct(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ft(e);t&&t.l(i),i.forEach(M),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(s,i){K(s,e,i),t&&t.m(e,null)},p(s,i){s[5]?t?t.p(s,i):(t=Ze(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&M(e),t&&t.d()}}}function Ze(a){let e;return{c(){e=ut(a[6])},l(t){e=dt(t,a[6])},m(t,s){K(t,e,s)},p(t,s){s&64&&pt(e,t[6])},d(t){t&&M(e)}}}function Vt(a){let e,t,s,i,u;const n=[Tt,jt],l=[];function _(g,R){return g[0][1]?0:1}e=_(a),t=l[e]=n[e](a);let m=a[4]&&Xe(a);return{c(){t.c(),s=ot(),m&&m.c(),i=C()},l(g){t.l(g),s=st(g),m&&m.l(g),i=C()},m(g,R){l[e].m(g,R),K(g,s,R),m&&m.m(g,R),K(g,i,R),u=!0},p(g,[R]){let E=e;e=_(g),e===E?l[e].p(g,R):(de(),F(l[E],1,1,()=>{l[E]=null}),pe(),t=l[e],t?t.p(g,R):(t=l[e]=n[e](g),t.c()),B(t,1),t.m(s.parentNode,s)),g[4]?m?m.p(g,R):(m=Xe(g),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i(g){u||(B(t),u=!0)},o(g){F(t),u=!1},d(g){l[e].d(g),g&&M(s),m&&m.d(g),g&&M(i)}}}function qt(a,e,t){let{stores:s}=e,{page:i}=e,{components:u}=e,{form:n}=e,{data_0:l=null}=e,{data_1:_=null}=e;it(s.page.notify);let m=!1,g=!1,R=null;return Ie(()=>{const E=s.page.subscribe(()=>{m&&(t(5,g=!0),t(6,R=document.title||"untitled page"))});return t(4,m=!0),E}),a.$$set=E=>{"stores"in E&&t(7,s=E.stores),"page"in E&&t(8,i=E.page),"components"in E&&t(0,u=E.components),"form"in E&&t(1,n=E.form),"data_0"in E&&t(2,l=E.data_0),"data_1"in E&&t(3,_=E.data_1)},a.$$.update=()=>{a.$$.dirty&384&&s.page.set(i)},[u,n,l,_,m,g,R,s,i]}class Ct extends nt{constructor(e){super(),at(this,e,qt,Vt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft={},me=[()=>x(()=>import("./chunks/0-059920c6.js"),["./chunks\\0-059920c6.js","./components\\pages\\_layout.svelte-38da52b0.js","./chunks\\index-c2872cc9.js","./chunks\\store-38e9ee59.js","./chunks\\index-3e679e32.js","./chunks\\stores-e36d7600.js","./chunks\\singletons-db910752.js","./assets\\_layout-3a139c6b.css"],import.meta.url),()=>x(()=>import("./chunks/1-71aa0cd0.js"),["./chunks\\1-71aa0cd0.js","./components\\pages\\_error.svelte-89bfecef.js","./chunks\\index-c2872cc9.js","./chunks\\stores-e36d7600.js","./chunks\\singletons-db910752.js","./chunks\\index-3e679e32.js"],import.meta.url),()=>x(()=>import("./chunks/2-4cd10945.js"),["./chunks\\2-4cd10945.js","./components\\pages\\_page.svelte-7c9f4294.js","./chunks\\index-c2872cc9.js","./chunks\\store-38e9ee59.js","./chunks\\index-3e679e32.js","./chunks\\singletons-db910752.js","./chunks\\public-f65b3fc4.js","./chunks\\preload-helper-41c905a7.js"],import.meta.url),()=>x(()=>import("./chunks/3-afe7227d.js"),["./chunks\\3-afe7227d.js","./components\\pages\\login\\_page.svelte-5d76d7da.js","./chunks\\index-c2872cc9.js","./chunks\\store-38e9ee59.js","./chunks\\index-3e679e32.js","./chunks\\public-f65b3fc4.js","./chunks\\preload-helper-41c905a7.js"],import.meta.url),()=>x(()=>import("./chunks/4-6d04abfb.js"),["./chunks\\4-6d04abfb.js","./components\\pages\\templates\\_page.svelte-98692986.js","./chunks\\index-c2872cc9.js","./assets\\_page-0afc4243.css"],import.meta.url)],Bt=[],Mt={"/":[2],"/login":[3],"/templates":[4]},Gt={handleError:({error:a})=>{console.error(a)}};class Oe{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(e,t){this.status=e,this.location=t}}async function Jt(a){var e;for(const t in a)if(typeof((e=a[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,zt=-2,Ht=-3,Wt=-4,Yt=-5,Xt=-6;function Zt(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const t=a,s=Array(t.length);function i(u,n=!1){if(u===Kt)return;if(u===Ht)return NaN;if(u===Wt)return 1/0;if(u===Yt)return-1/0;if(u===Xt)return-0;if(n)throw new Error("Invalid input");if(u in s)return s[u];const l=t[u];if(!l||typeof l!="object")s[u]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const _=l[0],m=e==null?void 0:e[_];if(m)return s[u]=m(i(l[1]));switch(_){case"Date":s[u]=new Date(l[1]);break;case"Set":const g=new Set;s[u]=g;for(let L=1;L<l.length;L+=1)g.add(i(l[L]));break;case"Map":const R=new Map;s[u]=R;for(let L=1;L<l.length;L+=2)R.set(i(l[L]),i(l[L+1]));break;case"RegExp":s[u]=new RegExp(l[1],l[2]);break;case"Object":s[u]=Object(l[1]);break;case"BigInt":s[u]=BigInt(l[1]);break;case"null":const E=Object.create(null);s[u]=E;for(let L=1;L<l.length;L+=2)E[l[L]]=i(l[L+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(l.length);s[u]=_;for(let m=0;m<l.length;m+=1){const g=l[m];g!==zt&&(_[m]=i(g))}}else{const _={};s[u]=_;for(const m in l){const g=l[m];_[m]=i(g)}}return s[u]}return i(0)}const Se=$t(me,Bt,Mt,Ft),Ae=me[0],Pe=me[1];Ae();Pe();let ne={};try{ne=JSON.parse(sessionStorage[et])}catch{}function Re(a){ne[a]=ue()}function Qt({target:a,base:e}){var Ge;const t=document.documentElement,s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},l=!1,_=!1,m=!0,g=!1,R=!1,E=!1,L=!1,T,U=(Ge=history.state)==null?void 0:Ge[q];U||(U=Date.now(),history.replaceState({...history.state,[q]:U},"",location.href));const _e=ne[U];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let G,$e,ae;async function je(){ae=ae||Promise.resolve(),await ae,ae=null;const r=new URL(location.href),o=se(r,!0);i=null,await De(o,r,[])}async function ge(r,{noScroll:o=!1,replaceState:f=!1,keepFocus:c=!1,state:d={},invalidateAll:p=!1},h,b){return typeof r=="string"&&(r=new URL(r,ze(document))),ie({url:r,scroll:o?ue():null,keepfocus:c,redirect_chain:h,details:{state:d,replaceState:f},nav_token:b,accepted:()=>{p&&(L=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const o=se(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:Ce(o).then(f=>(f.type==="loaded"&&f.state.error&&(i=null),f))},i.promise}async function re(...r){const f=Se.filter(c=>r.some(d=>c.exec(d))).map(c=>Promise.all([...c.layouts,c.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(f)}async function De(r,o,f,c,d={},p){var b,y;$e=d;let h=r&&await Ce(r);if(h||(h=await Me(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,$e!==d)return!1;if(h.type==="redirect")if(f.length>10||f.includes(o.pathname))h=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(h.location,o).href,{},[...f,o.pathname],d),!1;else((y=(b=h.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await J.updated.check()&&await le(o);if(s.length=0,L=!1,g=!0,c&&c.details){const{details:w}=c,S=w.replaceState?0:1;w.state[q]=U+=S,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(i=null,_?(n=h.state,h.props.page&&(h.props.page.url=o),T.$set(h.props)):Ve(h),c){const{scroll:w,keepfocus:S}=c;if(S||Le(),await ce(),m){const I=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ce();m=!0,h.props.page&&(G=h.props.page),p&&p(),g=!1}function Ve(r){var c;n=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),G=r.props.page,T=new Ct({target:a,props:{...r.props,stores:J},hydrate:!0});const f={from:null,to:{params:n.params,route:{id:((c=n.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(d=>d(f)),_=!0}async function Z({url:r,params:o,branch:f,status:c,error:d,route:p,form:h}){const b=f.filter(Boolean);let y="never";for(const O of f)(O==null?void 0:O.slash)!==void 0&&(y=O.slash);r.pathname=gt(r.pathname,y),r.search=r.search;const w={type:"loaded",state:{url:r,params:o,branch:f,error:d,route:p},props:{components:b.map(O=>O.node.component)}};h!==void 0&&(w.props.form=h);let S={},I=!G;for(let O=0;O<b.length;O+=1){const v=b[O];S={...S,...v.data},(I||!n.branch.some($=>$===v))&&(w.props[`data_${O}`]=S,I=I||Object.keys(v.data??{}).length>0)}return I||(I=Object.keys(G.data).length!==Object.keys(S).length),(!n.url||r.href!==n.url.href||n.error!==d||h!==void 0||I)&&(w.props.page={error:d,params:o,route:p,status:c,url:new URL(r),form:h??null,data:I?S:G.data}),w}async function we({loader:r,parent:o,url:f,params:c,route:d,server_data_node:p}){var w,S,I;let h=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((w=y.universal)!=null&&w.load){let D=function(...v){for(const $ of v){const{href:j}=new URL($,f);b.dependencies.add(j)}};const O={route:{get id(){return b.route=!0,d.id}},params:new Proxy(c,{get:(v,$)=>(b.params.add($),v[$])}),data:(p==null?void 0:p.data)??null,url:vt(f,()=>{b.url=!0}),async fetch(v,$){let j;v instanceof Request?(j=v.url,$={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...$}):j=v;const k=new URL(j,f).href;return D(k),_?It(j,k,$):Lt(j,$)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,o()}};h=await y.universal.load.call(null,O)??null,h=h?await Jt(h):null}return{node:y,loader:r,server:p,universal:(S=y.universal)!=null&&S.load?{type:"data",data:h,uses:b}:null,data:h??(p==null?void 0:p.data)??null,slash:((I=y.universal)==null?void 0:I.trailingSlash)??(p==null?void 0:p.slash)}}function qe(r,o,f,c,d){if(L)return!0;if(!c)return!1;if(c.parent&&r||c.route&&o||c.url&&f)return!0;for(const p of c.params)if(d[p]!==n.params[p])return!0;for(const p of c.dependencies)if(s.some(h=>h(new URL(p))))return!0;return!1}function ye(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ce({id:r,invalidating:o,url:f,params:c,route:d}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:p,layouts:h,leaf:b}=d,y=[...h,b];p.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const S=n.url?r!==n.url.pathname+n.url.search:!1,I=n.route?r!==n.route.id:!1,D=y.reduce((k,P,N)=>{var Q;const A=n.branch[N],z=!!(P!=null&&P[0])&&((A==null?void 0:A.loader)!==P[1]||qe(k.some(Boolean),I,S,(Q=A.server)==null?void 0:Q.uses,c));return k.push(z),k},[]);if(D.some(Boolean)){try{w=await xe(f,D)}catch(k){return oe({status:500,error:await ee(k,{url:f,params:c,route:{id:d.id}}),url:f,route:d})}if(w.type==="redirect")return w}const O=w==null?void 0:w.nodes;let v=!1;const $=y.map(async(k,P)=>{var Q;if(!k)return;const N=n.branch[P],A=O==null?void 0:O[P];if((!A||A.type==="skip")&&k[1]===(N==null?void 0:N.loader)&&!qe(v,I,S,(Q=N.universal)==null?void 0:Q.uses,c))return N;if(v=!0,(A==null?void 0:A.type)==="error")throw A;return we({loader:k[1],url:f,params:c,route:d,parent:async()=>{var Ke;const Je={};for(let be=0;be<P;be+=1)Object.assign(Je,(Ke=await $[be])==null?void 0:Ke.data);return Je},server_data_node:ye(A===void 0&&k[0]?{type:"skip"}:A??null,N==null?void 0:N.server)})});for(const k of $)k.catch(()=>{});const j=[];for(let k=0;k<y.length;k+=1)if(y[k])try{j.push(await $[k])}catch(P){if(P instanceof Qe)return{type:"redirect",location:P.location};let N=500,A;O!=null&&O.includes(P)?(N=P.status??N,A=P.error):P instanceof Oe?(N=P.status,A=P.body):A=await ee(P,{params:c,url:f,route:{id:d.id}});const z=await Fe(k,j,p);return z?await Z({url:f,params:c,branch:j.slice(0,z.idx).concat(z.node),status:N,error:A,route:d}):await Me(f,{id:d.id},A,N)}else j.push(void 0);return await Z({url:f,params:c,branch:j,status:200,error:null,route:d,form:o?void 0:null})}async function Fe(r,o,f){for(;r--;)if(f[r]){let c=r;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await f[r](),loader:f[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:o,url:f,route:c}){const d={},p=await Ae();let h=null;if(p.server)try{const w=await xe(f,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;h=w.nodes[0]??null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||l)&&await le(f)}const b=await we({loader:Ae,url:f,params:d,route:c,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Z({url:f,params:d,branch:[b,y],status:r,error:o,route:null})}function se(r,o){if(We(r,e))return;const f=wt(r.pathname.slice(e.length)||"/");for(const c of Se){const d=c.exec(f);if(d)return{id:r.pathname+r.search,invalidating:o,route:c,params:yt(d),url:r}}}function Be({url:r,type:o,intent:f,delta:c}){var b,y;let d=!1;const p={from:{params:n.params,route:{id:((b=n.route)==null?void 0:b.id)??null},url:n.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((y=f==null?void 0:f.route)==null?void 0:y.id)??null},url:r},willUnload:!f,type:o};c!==void 0&&(p.delta=c);const h={...p,cancel:()=>{d=!0}};return R||u.before_navigate.forEach(w=>w(h)),d?null:p}async function ie({url:r,scroll:o,keepfocus:f,redirect_chain:c,details:d,type:p,delta:h,nav_token:b,accepted:y,blocked:w}){const S=se(r,!1),I=Be({url:r,type:p,delta:h,intent:S});if(!I){w();return}Re(U),y(),R=!0,_&&J.navigating.set(I),await De(S,r,c,{scroll:o,keepfocus:f,details:d},b,()=>{R=!1,u.after_navigate.forEach(D=>D(I)),J.navigating.set(null)})}async function Me(r,o,f,c){return r.origin===location.origin&&r.pathname===location.pathname&&!l?await oe({status:c,error:f,url:r,route:o}):await le(r)}function le(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;t.addEventListener("mousemove",p=>{const h=p.target;clearTimeout(r),r=setTimeout(()=>{c(h,2)},20)});function o(p){c(p.composedPath()[0],1)}t.addEventListener("mousedown",o),t.addEventListener("touchstart",o,{passive:!0});const f=new IntersectionObserver(p=>{for(const h of p)h.isIntersecting&&(re(new URL(h.target.href).pathname),f.unobserve(h.target))},{threshold:0});function c(p,h){const b=He(p,t);if(!b)return;const{url:y,external:w}=Ee(b,e);if(w)return;const S=fe(b);S.reload||(h<=S.preload_data?Te(y):h<=S.preload_code&&re(y.pathname))}function d(){f.disconnect();for(const p of t.querySelectorAll("a")){const{url:h,external:b}=Ee(p,e);if(b)continue;const y=fe(p);y.reload||(y.preload_code===Ye.viewport&&f.observe(p),y.preload_code===Ye.eager&&re(h.pathname))}}u.after_navigate.push(d),d()}return{after_navigate:r=>{Ie(()=>(u.after_navigate.push(r),()=>{const o=u.after_navigate.indexOf(r);u.after_navigate.splice(o,1)}))},before_navigate:r=>{Ie(()=>(u.before_navigate.push(r),()=>{const o=u.before_navigate.indexOf(r);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!_)&&(m=!1)},goto:(r,o={})=>ge(r,o,[]),invalidate:r=>{if(typeof r=="function")s.push(r);else{const{href:o}=new URL(r,location.href);s.push(f=>f.href===o)}return je()},invalidateAll:()=>(L=!0,je()),preload_data:async r=>{const o=new URL(r,ze(document));await Te(o)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:f,route:c}=n;if(!c)return;const d=await Fe(n.branch.length,f,c.errors);if(d){const p=await Z({url:o,params:n.params,branch:f.slice(0,d.idx).concat(d.node),status:r.status??500,error:r.error,route:c});n=p.state,T.$set(p.props),ce().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...G,form:r.data,status:r.status}};T.$set(o),r.type==="success"&&ce().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c;let f=!1;if(!R){const d={from:{params:n.params,route:{id:((c=n.route)==null?void 0:c.id)??null},url:n.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};u.before_navigate.forEach(p=>p(d))}f?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(U);try{sessionStorage[et]=JSON.stringify(ne)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),t.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const f=He(o.composedPath()[0],t);if(!f)return;const{url:c,external:d,has:p}=Ee(f,e),h=fe(f);if(!c||!(f instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||p.download)return;if(d||h.reload){Be({url:c,type:"link"})||o.preventDefault(),R=!0;return}const[y,w]=c.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){E=!0,Re(U),n.url=c,J.page.set({...G,url:c}),J.page.notify();return}ie({url:c,scroll:h.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),t.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||f.method)!=="get")return;const p=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||f.action);if(We(p,e))return;const{noscroll:h,reload:b}=fe(o.target);b||(o.preventDefault(),o.stopPropagation(),p.search=new URLSearchParams(new FormData(o.target)).toString(),ie({url:p,scroll:h?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var f;if((f=o.state)!=null&&f[q]){if(o.state[q]===U)return;const c=o.state[q]-U;ie({url:new URL(location.href),scroll:ne[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{E&&(E=!1,history.replaceState({...history.state,[q]:++U},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&J.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:f,params:c,route:d,data:p,form:h})=>{l=!0;const b=new URL(location.href);({params:c={},route:d={id:null}}=se(b,!1)||{});let y;try{const w=f.map(async(S,I)=>{const D=p[I];return we({loader:me[S],url:b,params:c,route:d,parent:async()=>{const O={};for(let v=0;v<I;v+=1)Object.assign(O,(await w[v]).data);return O},server_data_node:ye(D)})});y=await Z({url:b,params:c,branch:await Promise.all(w),status:r,error:o,form:h,route:Se.find(({id:S})=>S===d.id)??null})}catch(w){if(w instanceof Qe){await le(new URL(w.location,location.href));return}y=await oe({status:w instanceof Oe?w.status:500,error:await ee(w,{url:b,params:c,route:d}),url:b,route:d})}Ve(y)}}}async function xe(a,e){var u;const t=new URL(a);t.pathname=St(a.pathname),t.searchParams.append("x-sveltekit-invalidated",e.map(n=>n?"1":"").join("_"));const s=await he(t.href),i=await s.json();if(!s.ok)throw new Error(i);return(u=i.nodes)==null||u.forEach(n=>{(n==null?void 0:n.type)==="data"&&(n.data=Zt(n.data),n.uses={dependencies:new Set(n.uses.dependencies??[]),params:new Set(n.uses.params??[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),i}function ee(a,e){return a instanceof Oe?a.body:Gt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function nn({env:a,hydrate:e,paths:t,target:s,version:i}){ht(t),_t(i);const u=Qt({target:s,base:t.base});mt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{nn as start};