const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};G();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var T;const S=window,_=S.trustedTypes,P=_?_.createPolicy("lit-html",{createHTML:i=>i}):void 0,I="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,U="?"+v,K=`<${U}>`,b=document,y=()=>b.createComment(""),k=i=>i===null||typeof i!="object"&&typeof i!="function",D=Array.isArray,Y=i=>D(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",E=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,j=/>/g,$=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,F=/"/g,W=/^(?:script|style|textarea|title)$/i,J=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),f=J(1),C=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),O=new WeakMap,A=b.createTreeWalker(b,129,null,!1);function z(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return P!==void 0?P.createHTML(e):e}const Q=(i,e)=>{const t=i.length-1,n=[];let s,r=e===2?"<svg>":"",o=x;for(let d=0;d<t;d++){const a=i[d];let l,h,u=-1,m=0;for(;m<a.length&&(o.lastIndex=m,h=o.exec(a),h!==null);)m=o.lastIndex,o===x?h[1]==="!--"?o=R:h[1]!==void 0?o=j:h[2]!==void 0?(W.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=$):h[3]!==void 0&&(o=$):o===$?h[0]===">"?(o=s!=null?s:x,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?$:h[3]==='"'?F:B):o===F||o===B?o=$:o===R||o===j?o=x:(o=$,s=void 0);const g=o===$&&i[d+1].startsWith("/>")?" ":"";r+=o===x?a+K:u>=0?(n.push(l),a.slice(0,u)+I+a.slice(u)+v+g):a+v+(u===-2?(n.push(void 0),d):g)}return[z(i,r+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class N{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let r=0,o=0;const d=e.length-1,a=this.parts,[l,h]=Q(e,t);if(this.el=N.createElement(l,n),A.currentNode=this.el.content,t===2){const u=this.el.content,m=u.firstChild;m.remove(),u.append(...m.childNodes)}for(;(s=A.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const m of s.getAttributeNames())if(m.endsWith(I)||m.startsWith(v)){const g=h[o++];if(u.push(m),g!==void 0){const q=s.getAttribute(g.toLowerCase()+I).split(v),M=/([.?@])?(.*)/.exec(g);a.push({type:1,index:r,name:M[2],strings:q,ctor:M[1]==="."?ee:M[1]==="?"?se:M[1]==="@"?ie:L})}else a.push({type:6,index:r})}for(const m of u)s.removeAttribute(m)}if(W.test(s.tagName)){const u=s.textContent.split(v),m=u.length-1;if(m>0){s.textContent=_?_.emptyScript:"";for(let g=0;g<m;g++)s.append(u[g],y()),A.nextNode(),a.push({type:2,index:++r});s.append(u[m],y())}}}else if(s.nodeType===8)if(s.data===U)a.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(v,u+1))!==-1;)a.push({type:7,index:r}),u+=v.length-1}r++}}static createElement(e,t){const n=b.createElement("template");return n.innerHTML=e,n}}function w(i,e,t=i,n){var s,r,o,d;if(e===C)return e;let a=n!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[n]:t._$Cl;const l=k(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,n)),n!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[n]=a:t._$Cl=a),a!==void 0&&(e=w(i,a._$AS(i,e.values),a,n)),e}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:b).importNode(n,!0);A.currentNode=r;let o=A.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new H(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new ne(o,this,e)),this._$AV.push(h),l=s[++a]}d!==(l==null?void 0:l.index)&&(o=A.nextNode(),d++)}return A.currentNode=b,r}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class H{constructor(e,t,n,s){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),k(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Y(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==p&&k(this._$AH)?this._$AA.nextSibling.data=e:this.$(b.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=N.createElement(z(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(n);else{const o=new X(r,this),d=o.u(this.options);o.v(n),this.$(d),this._$AH=o}}_$AC(e){let t=O.get(e.strings);return t===void 0&&O.set(e.strings,t=new N(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const r of e)s===t.length?t.push(n=new H(this.k(y()),this.k(y()),this,this.options)):n=t[s],n._$AI(r),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class L{constructor(e,t,n,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const r=this.strings;let o=!1;if(r===void 0)e=w(this,e,t,0),o=!k(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const d=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=w(this,d[n+a],t,a),l===C&&(l=this._$AH[a]),o||(o=!k(l)||l!==this._$AH[a]),l===p?e=p:e!==p&&(e+=(l!=null?l:"")+r[a+1]),this._$AH[a]=l}o&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class ee extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}const te=_?_.emptyScript:"";class se extends L{constructor(){super(...arguments),this.type=4}j(e){e&&e!==p?this.element.setAttribute(this.name,te):this.element.removeAttribute(this.name)}}class ie extends L{constructor(e,t,n,s,r){super(e,t,n,s,r),this.type=5}_$AI(e,t=this){var n;if((e=(n=w(this,e,t,0))!==null&&n!==void 0?n:p)===C)return;const s=this._$AH,r=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const V=S.litHtmlPolyfillSupport;V==null||V(N,H),((T=S.litHtmlVersions)!==null&&T!==void 0?T:S.litHtmlVersions=[]).push("2.8.0");const oe=(i,e,t)=>{var n,s;const r=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=r._$litPart$;if(o===void 0){const d=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new H(e.insertBefore(y(),d),d,void 0,t!=null?t:{})}return o._$AI(i),o},re="https://restcountries.com/v3.1";function ae({route:i="all",query:e="",fields:t,status:n,codes:s,fullText:r}){const o=new URL(re);return n!==void 0&&(i="independent"),o.pathname+=`/${i}/${e.toLowerCase()}`,n!==void 0&&o.searchParams.set("status",String(n)),r!==void 0&&o.searchParams.set("fullText",String(r)),s&&o.searchParams.append("codes",s.toLowerCase()),t=Array.from(new Set(t)),t&&t.length&&o.searchParams.set("fields",t.join(",")),o}function le(i){i||console.error("Couldn't find any country that matches your query, if you think it is issue please submit it via github issues")}function ce(i){console.warn("A network or REST Countries API side error happened while fetching data. Try again later."),console.warn("If this error persists, please verify the status of the REST Countries API. If the issue continues, feel free to report it on GitHub: https://github.com/yusifaliyevpro/countries"),console.error(i)}async function de({independent:i,fields:e},t){try{e.length>10&&console.error("You can specify up to 10 fields only");const n=ae({status:i,fields:e}),s=await fetch(n.toString(),t);return le(s.ok),s.ok?await s.json():null}catch(n){return ce(n),null}}const he=["name","population","region","capital","flags","cca3","subregion","currencies","languages","borders"],ue=i=>new Proxy(i,{set(e,t,n){const s=Reflect.set(e,t,n);if(t==="countries"||t==="searchTerm"||t==="regionFilter"){const r=e;r.filteredCountries=r.countries.filter(o=>{const d=o.name.common.toLowerCase().includes(r.searchTerm),a=r.regionFilter?o.region===r.regionFilter:!0;return d&&a})}return oe(we(),document.body),s}}),c=ue({countries:[],filteredCountries:[],loading:!0,error:null,darkMode:!1,selectedCountry:null,searchTerm:"",regionFilter:""}),pe=()=>{c.darkMode=!c.darkMode,c.darkMode?(document.documentElement.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode","false"))};function me(){c.searchTerm=this.value.toLowerCase()}function ge(){c.regionFilter=this.value}const Z=()=>{const i=window.location.hash.slice(1);if(i){const e=c.countries.find(t=>t.cca3===i);e?(c.selectedCountry=e,window.scrollTo(0,0)):c.selectedCountry=null}else c.selectedCountry=null},fe=()=>{window.location.hash=""},ve=async()=>{try{const i=await de({fields:he});c.countries=i,c.loading=!1,Z()}catch(i){c.error=i.message,c.loading=!1}};window.addEventListener("hashchange",Z);const $e=()=>f`
  <header class="bg-white dark:bg-blue-900 shadow-md py-6 px-12 md:px-20 flex justify-between items-center transition-colors duration-200">
    <h1 class="font-extrabold text-lg md:text-2xl text-grey-950 dark:text-white">Where in the world?</h1>
    <button @click=${pe} class="flex items-center gap-2 font-semibold text-grey-950 dark:text-white">
      <span class="${c.darkMode?"material-icons":"material-icons-outlined"}">dark_mode</span>
      ${c.darkMode?"Light Mode":"Dark Mode"}
    </button>
  </header>
`,Ae=i=>{var e;return f`
  <div @click=${()=>window.location.hash=i.cca3} class="bg-white dark:bg-blue-900 rounded-md shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
    <img src="${i.flags.png}" alt="${i.name.common} Flag" class="w-full aspect-[3/2] object-fill">
    <div class="p-6">
      <h2 class="font-extrabold text-lg mb-4 text-grey-950 dark:text-white">${i.name.common}</h2>
      <div class="text-sm space-y-1 text-grey-950 dark:text-white">
        <p><span class="font-semibold">Population:</span> ${i.population.toLocaleString()}</p>
        <p><span class="font-semibold">Region:</span> ${i.region}</p>
        <p><span class="font-semibold">Capital:</span> ${((e=i.capital)==null?void 0:e[0])||"N/A"}</p>
      </div>
    </div>
  </div>
`},be=()=>f`
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 md:mb-16">
    <div class="relative w-full md:w-96 shadow-md rounded-md bg-white dark:bg-blue-900">
      <span class="absolute left-6 top-4 text-grey-400 dark:text-white material-icons">search</span>
      <input 
        type="text" 
        placeholder="Search for a country..." 
        .value=${c.searchTerm}
        @input=${me}
        class="w-full pl-16 pr-4 py-4 rounded-md bg-transparent text-grey-950 dark:text-white placeholder-grey-400 dark:placeholder-white outline-none font-semibold"
      >
    </div>
    
    <div class="relative w-48 shadow-md rounded-md bg-white dark:bg-blue-900">
      <select 
        .value=${c.regionFilter}
        @change=${ge}
        class="w-full px-6 py-4 rounded-md bg-transparent text-grey-950 dark:text-white appearance-none cursor-pointer outline-none font-semibold"
      >
        <option value="" disabled selected hidden>Filter by Region</option>
        <option value="" class="bg-white dark:bg-blue-900">All Regions</option>
        <option value="Africa" class="bg-white dark:bg-blue-900">Africa</option>
        <option value="Americas" class="bg-white dark:bg-blue-900">Americas</option>
        <option value="Asia" class="bg-white dark:bg-blue-900">Asia</option>
        <option value="Europe" class="bg-white dark:bg-blue-900">Europe</option>
        <option value="Oceania" class="bg-white dark:bg-blue-900">Oceania</option>
      </select>
       <span class="absolute right-4 top-4 pointer-events-none text-grey-400 dark:text-white material-icons">expand_more</span>
    </div>
  </div>

  ${c.loading?f`<p class="text-center text-xl">Loading...</p>`:""}
  ${c.error?f`<p class="text-center text-red-500">${c.error}</p>`:""}
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20">
    ${c.filteredCountries.map(Ae)}
  </div>
`,_e=i=>{var r,o,d;const e=a=>{const l=c.countries.find(h=>h.cca3===a);return l?l.name.common:a},t=i.name.nativeName?(r=Object.values(i.name.nativeName)[0])==null?void 0:r.common:i.name.common,n=i.currencies?Object.values(i.currencies).map(a=>a.name).join(", "):"N/A",s=i.languages?Object.values(i.languages).join(", "):"N/A";return f`
    <button @click=${fe} class="bg-white dark:bg-blue-900 shadow-md px-8 py-2 rounded-md mb-12 text-grey-950 dark:text-white flex items-center gap-2 hover:opacity-75 transition-opacity">
       <span class="material-icons">arrow_back</span> Back
    </button>

    <div class="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center lg:items-start text-grey-950 dark:text-white">
        <img src="${i.flags.svg}" alt="${i.name.common} Flag" class="w-full lg:w-1/2 max-w-xl shadow-lg">
        
        <div class="w-full lg:w-1/2 py-8">
            <h2 class="text-3xl font-extrabold mb-8">${i.name.common}</h2>
            
            <div class="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
                <div class="space-y-2">
                    <p><span class="font-semibold">Native Name:</span> ${t}</p>
                    <p><span class="font-semibold">Population:</span> ${i.population.toLocaleString()}</p>
                    <p><span class="font-semibold">Region:</span> ${i.region}</p>
                    <p><span class="font-semibold">Sub Region:</span> ${i.subregion}</p>
                    <p><span class="font-semibold">Capital:</span> ${((o=i.capital)==null?void 0:o[0])||"N/A"}</p>
                </div>
                <div class="space-y-2">
                    <p><span class="font-semibold">Currencies:</span> ${n}</p>
                    <p><span class="font-semibold">Languages:</span> ${s}</p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <span class="font-semibold text-lg whitespace-nowrap">Border Countries:</span>
                <div class="flex flex-wrap gap-2">
                    ${(d=i.borders)!=null&&d.length?i.borders.map(a=>f`
                        <button 
                            @click=${()=>{const l=c.countries.find(h=>h.cca3===a);l&&(window.location.hash=l.cca3)}}
                            class="bg-white dark:bg-blue-900 border-2 border-gray-200 dark:border-none px-6 py-1 rounded text-sm hover:opacity-75 transition-opacity text-grey-950 dark:text-white font-light"
                        >
                            ${e(a)}
                        </button>
                    `):f`<span class="opacity-75">None</span>`}
                </div>
            </div>
        </div>
    </div>
    `},we=()=>f`
  ${$e()}
  <main class="container mx-auto px-12 md:px-20 py-8 min-h-screen">
    ${c.selectedCountry?_e(c.selectedCountry):be()}
  </main>
`;localStorage.getItem("darkMode")==="true"||!("darkMode"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(c.darkMode=!0,document.documentElement.classList.add("dark")):(c.darkMode=!1,document.documentElement.classList.remove("dark"));ve();
