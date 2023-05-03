import{d as p,m as h,o,c as i,r as b,L as m,b as C,h as c,q as v,t as u,B as f,n as _,C as x,Q as g,a5 as k,u as T,k as w,a6 as $,a7 as A,a8 as P,a9 as S,aa as E,ab as R,ac as V,ad as D,ae as B,af as L,ag as O,ah as j,ai as F,M as q}from"./chunks/framework.1026cf52.js";import{t as z}from"./chunks/theme.570576a3.js";const I=p({__name:"example",props:{background:null},setup(e){const a=e,t=h(()=>{if(a.background==="light-grid")return{"background-image":"repeating-linear-gradient(135deg, rgba(189,189,189,0.1) 0px, rgba(189,189,189,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))"};if(a.background==="blue-circle")return{"background-image":"radial-gradient(circle at 31% 83%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 54% 21%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 68% 13%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 30% 64%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 51% 96%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 40% 16%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 75% 47%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 44% 44%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 10% 17%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 90% 72%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 0% 45%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 4%,transparent 4%, transparent 96%),linear-gradient(90deg, rgb(18, 30, 254),rgb(34, 191, 228))"};if(a.background==="light-circle")return{"background-image":"radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))"}});return(r,n)=>(o(),i("div",{class:"text-base example -rounded -border -p-4",style:m(C(t))},[b(r.$slots,"default")],4))}}),M=p({__name:"css-prop-value",props:{prop:null,placeholder:null,target:null},setup(e){const a=e,t=c(a.placeholder??a.prop),r=c();return v(()=>{const n=()=>{let s=null;if(a.target?s=document.querySelector(a.target):s=r.value,!s)return;const d=getComputedStyle(s);t.value=d.getPropertyValue(a.prop)};n(),setTimeout(n,500)}),(n,s)=>(o(),i("span",{ref_key:"ele",ref:r},u(t.value),513))}}),N={key:0,class:"text-center copy-code-span-tip success px-2"},U={key:1,class:"pr-1 copy-code-span-tip bg-canvas"},G=p({__name:"copy-code",props:{code:null,tip:null,copyTip:null},setup(e){const a=e,t=c(!1),r=c(0),n=()=>{navigator.clipboard.writeText(a.code),t.value=!0,r.value=window.setTimeout(()=>{t.value=!1,r.value=0},2e3)};return f(()=>{r.value&&clearTimeout(r.value)}),(s,d)=>(o(),i("div",{class:_(`copy-code-span relative cursor-pointer${t.value?" is-copied":""}`),onClick:n},[b(s.$slots,"default"),t.value?(o(),i("div",N,u(a.copyTip??"已复制"),1)):(o(),i("div",U,u(e.tip??e.code),1))],2))}});const H={key:0,class:"right-0 text-center semantic-color-name is-copied success"},Q={key:1,class:"pr-1 semantic-color-name bg-canvas"},J=p({__name:"color-tile",props:{color:null,tileClass:null},setup(e){const a=c(!1),t=c(0),r=n=>{navigator.clipboard.writeText(n),a.value=!0,t.value=window.setTimeout(()=>{a.value=!1,t.value=0},2e3)};return f(()=>{t.value&&clearTimeout(t.value)}),(n,s)=>(o(),i("div",{class:"relative cursor-pointer semantic-color-item",onClick:s[0]||(s[0]=d=>r(`--${e.color}`))},[x("div",{class:_(`${e.tileClass||"w-full h-8 rounded"}${a.value?" ring-2 ring-success":""} semantic-color-tile`),style:m(`background-color: var(--${e.color})`)},null,6),b(n.$slots,"default"),a.value?(o(),i("div",H,"已复制")):(o(),i("div",Q,"--"+u(e.color),1))]))}});const K={extends:z,enhanceApp({app:e}){e.component("Example",I),e.component("CssPropValue",M),e.component("CopyCode",G),e.component("ColorTile",J)}};function y(e){if(e.extends){const a=y(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const l=y(K),W=p({name:"VitePressApp",setup(){const{site:e}=T();return v(()=>{w(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),$(),A(),P(),l.setup&&l.setup(),()=>S(l.Layout)}});async function X(){const e=Z(),a=Y();a.provide(E,e);const t=R(e.route);return a.provide(V,t),a.component("Content",D),a.component("ClientOnly",B),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),l.enhanceApp&&await l.enhanceApp({app:a,router:e,siteData:L}),{app:a,router:e,data:t}}function Y(){return O(W)}function Z(){let e=g,a;return j(t=>{let r=F(t);return e&&(a=r),(e||a===r)&&(r=r.replace(/\.js$/,".lean.js")),g&&(e=!1),q(()=>import(r),[])},l.NotFound)}g&&X().then(({app:e,router:a,data:t})=>{a.go().then(()=>{k(a.route,t.site),e.mount("#app")})});export{X as createApp};
