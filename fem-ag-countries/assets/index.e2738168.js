const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};G();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var T;const M=window,_=M.trustedTypes,P=_?_.createPolicy("lit-html",{createHTML:s=>s}):void 0,I="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,U="?"+v,K=`<${U}>`,A=document,y=()=>A.createComment(""),k=s=>s===null||typeof s!="object"&&typeof s!="function",D=Array.isArray,Y=s=>D(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",E=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,B=/>/g,$=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,F=/"/g,W=/^(?:script|style|textarea|title)$/i,J=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=J(1),C=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),V=new WeakMap,b=A.createTreeWalker(A,129,null,!1);function z(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return P!==void 0?P.createHTML(e):e}const Q=(s,e)=>{const t=s.length-1,n=[];let i,r=e===2?"<svg>":"",o=w;for(let c=0;c<t;c++){const l=s[c];let a,u,h=-1,m=0;for(;m<l.length&&(o.lastIndex=m,u=o.exec(l),u!==null);)m=o.lastIndex,o===w?u[1]==="!--"?o=R:u[1]!==void 0?o=B:u[2]!==void 0?(W.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=$):u[3]!==void 0&&(o=$):o===$?u[0]===">"?(o=i!=null?i:w,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,a=u[1],o=u[3]===void 0?$:u[3]==='"'?F:j):o===F||o===j?o=$:o===R||o===B?o=w:(o=$,i=void 0);const p=o===$&&s[c+1].startsWith("/>")?" ":"";r+=o===w?l+K:h>=0?(n.push(a),l.slice(0,h)+I+l.slice(h)+v+p):l+v+(h===-2?(n.push(void 0),c):p)}return[z(s,r+(s[t]||"<?>")+(e===2?"</svg>":"")),n]};class N{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,o=0;const c=e.length-1,l=this.parts,[a,u]=Q(e,t);if(this.el=N.createElement(a,n),b.currentNode=this.el.content,t===2){const h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(i=b.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const m of i.getAttributeNames())if(m.endsWith(I)||m.startsWith(v)){const p=u[o++];if(h.push(m),p!==void 0){const q=i.getAttribute(p.toLowerCase()+I).split(v),S=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:S[2],strings:q,ctor:S[1]==="."?ee:S[1]==="?"?ie:S[1]==="@"?se:L})}else l.push({type:6,index:r})}for(const m of h)i.removeAttribute(m)}if(W.test(i.tagName)){const h=i.textContent.split(v),m=h.length-1;if(m>0){i.textContent=_?_.emptyScript:"";for(let p=0;p<m;p++)i.append(h[p],y()),b.nextNode(),l.push({type:2,index:++r});i.append(h[m],y())}}}else if(i.nodeType===8)if(i.data===U)l.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(v,h+1))!==-1;)l.push({type:7,index:r}),h+=v.length-1}r++}}static createElement(e,t){const n=A.createElement("template");return n.innerHTML=e,n}}function x(s,e,t=s,n){var i,r,o,c;if(e===C)return e;let l=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl;const a=k(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=x(s,l._$AS(s,e.values),l,n)),e}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:A).importNode(n,!0);b.currentNode=r;let o=b.nextNode(),c=0,l=0,a=i[0];for(;a!==void 0;){if(c===a.index){let u;a.type===2?u=new H(o,o.nextSibling,this,e):a.type===1?u=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(u=new ne(o,this,e)),this._$AV.push(u),a=i[++l]}c!==(a==null?void 0:a.index)&&(o=b.nextNode(),c++)}return b.currentNode=A,r}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class H{constructor(e,t,n,i){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),k(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Y(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&k(this._$AH)?this._$AA.nextSibling.data=e:this.$(A.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=N.createElement(z(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(n);else{const o=new X(r,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=V.get(e.strings);return t===void 0&&V.set(e.strings,t=new N(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new H(this.k(y()),this.k(y()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class L{constructor(e,t,n,i,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const r=this.strings;let o=!1;if(r===void 0)e=x(this,e,t,0),o=!k(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const c=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=x(this,c[n+l],t,l),a===C&&(a=this._$AH[l]),o||(o=!k(a)||a!==this._$AH[l]),a===g?e=g:e!==g&&(e+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}o&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ee extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}const te=_?_.emptyScript:"";class ie extends L{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,te):this.element.removeAttribute(this.name)}}class se extends L{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){var n;if((e=(n=x(this,e,t,0))!==null&&n!==void 0?n:g)===C)return;const i=this._$AH,r=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const O=M.litHtmlPolyfillSupport;O==null||O(N,H),((T=M.litHtmlVersions)!==null&&T!==void 0?T:M.litHtmlVersions=[]).push("2.8.0");const oe=(s,e,t)=>{var n,i;const r=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=r._$litPart$;if(o===void 0){const c=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new H(e.insertBefore(y(),c),c,void 0,t!=null?t:{})}return o._$AI(s),o},re="https://restcountries.com/v3.1";function le({route:s="all",query:e="",fields:t,status:n,codes:i,fullText:r}){const o=new URL(re);return n!==void 0&&(s="independent"),o.pathname+=`/${s}/${e.toLowerCase()}`,n!==void 0&&o.searchParams.set("status",String(n)),r!==void 0&&o.searchParams.set("fullText",String(r)),i&&o.searchParams.append("codes",i.toLowerCase()),t=Array.from(new Set(t)),t&&t.length&&o.searchParams.set("fields",t.join(",")),o}function ae(s){s||console.error("Couldn't find any country that matches your query, if you think it is issue please submit it via github issues")}function de(s){console.warn("A network or REST Countries API side error happened while fetching data. Try again later."),console.warn("If this error persists, please verify the status of the REST Countries API. If the issue continues, feel free to report it on GitHub: https://github.com/yusifaliyevpro/countries"),console.error(s)}async function ce({independent:s,fields:e},t){try{e.length>10&&console.error("You can specify up to 10 fields only");const n=le({status:s,fields:e}),i=await fetch(n.toString(),t);return ae(i.ok),i.ok?await i.json():null}catch(n){return de(n),null}}const ue=["name","population","region","capital","flags","cca3","subregion","currencies","languages","borders"],he=s=>new Proxy(s,{set(e,t,n){const i=Reflect.set(e,t,n);if(t==="countries"||t==="searchTerm"||t==="regionFilter"){const r=e;r.filteredCountries=r.countries.filter(o=>{const c=o.name.common.toLowerCase().includes(r.searchTerm),l=r.regionFilter?o.region===r.regionFilter:!0;return c&&l})}return oe(xe(),document.body),i}}),d=he({countries:[],filteredCountries:[],loading:!0,error:null,darkMode:!1,selectedCountry:null,searchTerm:"",regionFilter:""}),ge=()=>{d.darkMode=!d.darkMode,d.darkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode","false"))};function me(){d.searchTerm=this.value.toLowerCase()}function pe(){d.regionFilter=this.value}const Z=()=>{const s=window.location.hash.slice(1);if(s){const e=d.countries.find(t=>t.cca3===s);e?(d.selectedCountry=e,window.scrollTo(0,0)):d.selectedCountry=null}else d.selectedCountry=null},fe=()=>{window.location.hash=""},ve=async()=>{try{const s=await ce({fields:ue});d.countries=s,d.loading=!1,Z()}catch(s){d.error=s.message,d.loading=!1}};window.addEventListener("hashchange",Z);const $e=()=>f`
  <header class="bg-white dark:bg-blue-900 shadow-md py-6 px-12 md:px-20 flex justify-between items-center transition-colors duration-200">
    <h1 class="font-extrabold text-lg md:text-2xl text-grey-950 dark:text-white">Where in the world?</h1>
    <button @click=${ge} class="flex items-center gap-2 font-semibold text-grey-950 dark:text-white">
      <span class="${d.darkMode?"material-icons":"material-icons-outlined"}">dark_mode</span>
      ${d.darkMode?"Light Mode":"Dark Mode"}
    </button>
  </header>
`,be=s=>{var e;return f`
  <a href="#${s.cca3}" class="bg-white dark:bg-blue-900 rounded-md shadow-md overflow-hidden block hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-blue-950" aria-label="View details for ${s.name.common}">
    <article>
      <img src="${s.flags.png}" alt="Flag of ${s.name.common}" class="w-full aspect-[3/2] object-fill">
      <div class="p-6">
        <h2 class="font-extrabold text-lg mb-4 text-grey-950 dark:text-white">${s.name.common}</h2>
        <dl class="text-sm space-y-1 text-grey-950 dark:text-white">
          <div><dt class="font-semibold inline">Population:</dt> <dd class="inline">${s.population.toLocaleString()}</dd></div>
          <div><dt class="font-semibold inline">Region:</dt> <dd class="inline">${s.region}</dd></div>
          <div><dt class="font-semibold inline">Capital:</dt> <dd class="inline">${((e=s.capital)==null?void 0:e[0])||"N/A"}</dd></div>
        </dl>
      </div>
    </article>
  </a>
`},Ae=()=>f`
  <section aria-label="Search and filter controls">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 md:mb-16">
      <div class="relative w-full md:w-96 shadow-md rounded-md bg-white dark:bg-blue-900">
        <span class="absolute left-6 top-4 text-grey-400 dark:text-white material-icons" aria-hidden="true">search</span>
        <label for="country-search" class="sr-only">Search for a country</label>
        <input 
          id="country-search"
          type="text" 
          placeholder="Search for a country..." 
          .value=${d.searchTerm}
          @input=${me}
          class="w-full pl-16 pr-4 py-4 rounded-md bg-transparent text-grey-950 dark:text-white placeholder-grey-400 dark:placeholder-white outline-none font-semibold"
          aria-label="Search for a country"
        >
      </div>
      
      <div class="relative w-48 shadow-md rounded-md bg-white dark:bg-blue-900">
        <label for="region-filter" class="sr-only">Filter by region</label>
        <select 
          id="region-filter"
          .value=${d.regionFilter}
          @change=${pe}
          class="w-full px-6 py-4 rounded-md bg-transparent text-grey-950 dark:text-white appearance-none cursor-pointer outline-none font-semibold"
          aria-label="Filter countries by region"
        >
          <option value="" disabled selected hidden>Filter by Region</option>
          <option value="" class="bg-white dark:bg-blue-900">All Regions</option>
          <option value="Africa" class="bg-white dark:bg-blue-900">Africa</option>
          <option value="Americas" class="bg-white dark:bg-blue-900">Americas</option>
          <option value="Asia" class="bg-white dark:bg-blue-900">Asia</option>
          <option value="Europe" class="bg-white dark:bg-blue-900">Europe</option>
          <option value="Oceania" class="bg-white dark:bg-blue-900">Oceania</option>
        </select>
         <span class="absolute right-4 top-4 pointer-events-none text-grey-400 dark:text-white material-icons" aria-hidden="true">expand_more</span>
      </div>
    </div>
  </section>

  ${d.loading?f`<p class="text-center text-xl" role="status" aria-live="polite">Loading countries...</p>`:""}
  ${d.error?f`<p class="text-center text-red-500" role="alert">${d.error}</p>`:""}
  
  <section aria-label="Countries list" role="region">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20">
      ${d.filteredCountries.map(be)}
    </div>
    ${!d.loading&&d.filteredCountries.length===0?f`<p class="text-center text-xl" role="status">No countries found matching your search.</p>`:""}
  </section>
`,_e=s=>{var r,o,c;const e=l=>{const a=d.countries.find(u=>u.cca3===l);return a?a.name.common:l},t=s.name.nativeName?(r=Object.values(s.name.nativeName)[0])==null?void 0:r.common:s.name.common,n=s.currencies?Object.values(s.currencies).map(l=>l.name).join(", "):"N/A",i=s.languages?Object.values(s.languages).join(", "):"N/A";return f`
    <nav aria-label="Back to countries list">
      <button @click=${fe} class="bg-white dark:bg-blue-900 shadow-md px-8 py-2 rounded-md mb-12 text-grey-950 dark:text-white flex items-center gap-2 hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-blue-950" aria-label="Go back to countries list">
         <span class="material-icons" aria-hidden="true">arrow_back</span> Back
      </button>
    </nav>

    <article class="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center lg:items-start text-grey-950 dark:text-white">
        <img src="${s.flags.svg}" alt="Flag of ${s.name.common}" class="w-full lg:w-1/2 max-w-xl shadow-lg">
        
        <section aria-labelledby="country-name">
            <h2 id="country-name" class="text-3xl font-extrabold mb-8">${s.name.common}</h2>
            
            <div class="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
                <dl class="space-y-2">
                    <div><dt class="font-semibold inline">Native Name:</dt> <dd class="inline">${t}</dd></div>
                    <div><dt class="font-semibold inline">Population:</dt> <dd class="inline">${s.population.toLocaleString()}</dd></div>
                    <div><dt class="font-semibold inline">Region:</dt> <dd class="inline">${s.region}</dd></div>
                    <div><dt class="font-semibold inline">Sub Region:</dt> <dd class="inline">${s.subregion}</dd></div>
                    <div><dt class="font-semibold inline">Capital:</dt> <dd class="inline">${((o=s.capital)==null?void 0:o[0])||"N/A"}</dd></div>
                </dl>
                <dl class="space-y-2">
                    <div><dt class="font-semibold inline">Currencies:</dt> <dd class="inline">${n}</dd></div>
                    <div><dt class="font-semibold inline">Languages:</dt> <dd class="inline">${i}</dd></div>
                </dl>
            </div>

            <section aria-labelledby="border-countries-heading">
                <div class="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <h3 id="border-countries-heading" class="font-semibold text-lg whitespace-nowrap">Border Countries:</h3>
                    <nav aria-label="Neighboring countries">
                      <div class="flex flex-wrap gap-2" role="list">
                          ${(c=s.borders)!=null&&c.length?s.borders.map(l=>f`
                              <a 
                                  href="#${l}"
                                  role="listitem"
                                  class="bg-white dark:bg-blue-900 border-2 border-gray-200 dark:border-none px-6 py-1 rounded text-sm hover:opacity-75 transition-opacity text-grey-950 dark:text-white font-light inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-blue-950"
                                  aria-label="View details for ${e(l)}"
                              >
                                  ${e(l)}
                              </a>
                          `):f`<span class="opacity-75" role="listitem">None</span>`}
                      </div>
                    </nav>
                </div>
            </section>
        </section>
    </article>
    `},xe=()=>f`
  ${$e()}
  <main class="container mx-auto px-12 md:px-20 py-8 min-h-screen">
    ${d.selectedCountry?_e(d.selectedCountry):Ae()}
  </main>
`;localStorage.getItem("darkMode")==="true"||!("darkMode"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(d.darkMode=!0,document.documentElement.classList.add("dark")):(d.darkMode=!1,document.documentElement.classList.remove("dark"));ve();
