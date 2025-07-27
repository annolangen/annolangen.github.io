function t(t){return t&&t.__esModule?t.default:t}const e=globalThis,s=e.trustedTypes,i=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,r="$lit$",o=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o,l=`<${n}>`,a=document,d=()=>a.createComment(""),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,$="[ 	\n\f\r]",p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,u=/>/g,A=RegExp(`>|${$}(?:([^\\s"'>=/]+)(${$}*=${$}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,v=/"/g,f=/^(?:script|style|textarea|title)$/i,g=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),x=g(1),b=(g(2),g(3),Symbol.for("lit-noChange")),y=Symbol.for("lit-nothing"),w=new WeakMap,k=a.createTreeWalker(a,129);function H(t,e){if(!c(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(e):e}class C{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let h=0,c=0,$=t.length-1,g=this.parts,[x,b]=((t,e)=>{let s=t.length-1,i=[],n,a=2===e?"<svg>":3===e?"<math>":"",d=p;for(let e=0;e<s;e++){let s=t[e],h,c,$=-1,g=0;for(;g<s.length&&(d.lastIndex=g,null!==(c=d.exec(s)));)g=d.lastIndex,d===p?"!--"===c[1]?d=m:void 0!==c[1]?d=u:void 0!==c[2]?(f.test(c[2])&&(n=RegExp("</"+c[2],"g")),d=A):void 0!==c[3]&&(d=A):d===A?">"===c[0]?(d=n??p,$=-1):void 0===c[1]?$=-2:($=d.lastIndex-c[2].length,h=c[1],d=void 0===c[3]?A:'"'===c[3]?v:_):d===v||d===_?d=A:d===m||d===u?d=p:(d=A,n=void 0);let x=d===A&&t[e+1].startsWith("/>")?" ":"";a+=d===p?s+l:$>=0?(i.push(h),s.slice(0,$)+r+s.slice($)+o+x):s+o+(-2===$?e:x)}return[H(t,a+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=C.createElement(x,i),k.currentNode=this.el.content,2===e||3===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=k.nextNode())&&g.length<$;){if(1===a.nodeType){if(a.hasAttributes())for(let t of a.getAttributeNames())if(t.endsWith(r)){let e=b[c++],s=a.getAttribute(t).split(o),i=/([.?@])?(.*)/.exec(e);g.push({type:1,index:h,name:i[2],strings:s,ctor:"."===i[1]?R:"?"===i[1]?E:"@"===i[1]?I:T}),a.removeAttribute(t)}else t.startsWith(o)&&(g.push({type:6,index:h}),a.removeAttribute(t));if(f.test(a.tagName)){let t=a.textContent.split(o),e=t.length-1;if(e>0){a.textContent=s?s.emptyScript:"";for(let s=0;s<e;s++)a.append(t[s],d()),k.nextNode(),g.push({type:2,index:++h});a.append(t[e],d())}}}else if(8===a.nodeType)if(a.data===n)g.push({type:2,index:h});else{let t=-1;for(;-1!==(t=a.data.indexOf(o,t+1));)g.push({type:7,index:h}),t+=o.length-1}h++}}static createElement(t,e){let s=a.createElement("template");return s.innerHTML=t,s}}function N(t,e,s=t,i){if(e===b)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl,o=h(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t))._$AT(t,s,i),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=N(t,r._$AS(t,e.values),r,i)),e}class S{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??a).importNode(e,!0);k.currentNode=i;let r=k.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new P(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new M(r,this,t)),this._$AV.push(e),l=s[++n]}o!==l?.index&&(r=k.nextNode(),o++)}return k.currentNode=a,i}p(t){let e=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){let s;h(t=N(this,t,e))?t===y||null==t||""===t?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==b&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c(s=t)||"function"==typeof s?.[Symbol.iterator]?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&h(this._$AH)?this._$AA.nextSibling.data=t:this.T(a.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=C.createElement(H(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let t=new S(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=w.get(t.strings);return void 0===e&&w.set(t.strings,e=new C(t)),e}k(t){c(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new P(this.O(d()),this.O(d()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(void 0===r)(o=!h(t=N(this,t,e,0))||t!==this._$AH&&t!==b)&&(this._$AH=t);else{let i,n,l=t;for(t=r[0],i=0;i<r.length-1;i++)(n=N(this,l[s+i],e,i))===b&&(n=this._$AH[i]),o||=!h(n)||n!==this._$AH[i],n===y?t=y:t!==y&&(t+=(n??"")+r[i+1]),this._$AH[i]=n}o&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class R extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class E extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class I extends T{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??y)===b)return;let s=this._$AH,i=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==y&&(s===y||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class M{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const O=e.litHtmlPolyfillSupport;O?.(C,P),(e.litHtmlVersions??=[]).push("3.3.1");var U={};U=import.meta.resolve("k1bST");var j={};j=import.meta.resolve("2IHB2");var B={};B=import.meta.resolve("92igf");var L={};L=import.meta.resolve("04k1h");var W={};W=import.meta.resolve("bmAK7");var D={};D=import.meta.resolve("6qNzz");const Y=[{name:"rock",borderColor:"border-rock",shadowColor:"shadow-rock-to",imgHtml:x`<img src=${t(B)} alt="Rock" />`},{name:"paper",borderColor:"border-paper",shadowColor:"shadow-paper-to",imgHtml:x`<img src=${t(U)} alt="Paper" />`},{name:"scissors",borderColor:"border-scissors",shadowColor:"shadow-scissors-to",imgHtml:x`<img src=${t(j)} alt="Scissors" />`}],z={showRules:!1,score:0,step:1,youPick:Y[0],housePick:Y[0],outcome:"YOU WIN"},K={rock:{rock:0,paper:-1,scissors:1},paper:{rock:1,paper:0,scissors:-1},scissors:{rock:-1,paper:1,scissors:0}},V=t=>new Promise(e=>setTimeout(e,t));async function Z(t){z.youPick=t,z.step=2,J(),await V(500),z.housePick=Y[Math.floor(Math.random()*Y.length)],J(),await V(500),z.step=3,J(),await V(500),z.step=4;let e=K[z.youPick.name][z.housePick.name];z.outcome=e>0?"YOU WIN":e<0?"YOU LOSE":"DRAW",z.score+=e,J()}const q=x`<div
  class="absolute flex h-screen w-screen flex-col items-center justify-around bg-white md:m-24 md:h-100 md:w-100 md:rounded"
>
  <div class="w-stretch m-4 flex justify-center md:flex-row md:justify-between">
    <div class="text-dark-text px-4 text-3xl font-bold">RULES</div>
    <button class="hidden md:block" @click="${()=>z.showRules=!1}">
      <img src=${t(D)} alt="Close" />
    </button>
  </div>
  <img src=${t(W)} alt="Rules" />
  <button class="md:hidden" @click="${()=>z.showRules=!1}">
    <img src=${t(D)} alt="Close" />
  </button>
</div>`,F=(t,e="")=>x` <button
    class="${t.borderColor} ${t.shadowColor} ${e} shadow-solid-bottom relative m-4 rounded-full border-16"
  >
    <span
      class="flex h-24 w-24 items-center justify-center rounded-full bg-slate-300"
    >
      ${t.imgHtml}
    </span>
  </button>`,G=(t,e="")=>x`<div @click="${()=>Z(t)}">${F(t)}</div>`,J=()=>((t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(void 0===r){let t=s?.renderBefore??null;i._$litPart$=r=new P(e.insertBefore(d(),t),t,void 0,s??{})}return r._$AI(t),r})(x`
  <div class="flex h-screen flex-col items-center justify-between">
    <div
      class="border-header-outline w-stretch m-6 flex max-w-lg flex-row justify-between rounded-md border-2 p-2 text-slate-100"
    >
      <div class="mx-3 flex flex-col justify-center text-xl/4 font-bold">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div class="flex flex-col justify-items-center rounded bg-slate-100 p-2">
        <span class="text-score-text text-xxs">SCORE</span>
        <span class="text-dark-text px-4 text-3xl font-extrabold"
          >${z.score}</span
        >
      </div>
    </div>
    ${1===z.step?x`
  <div
    class="w-stretch aspect-ratio-1-1 relative m-16 max-w-xs bg-contain bg-center bg-no-repeat"
    style="background-image: url(${t(L)})"
  >
    <!-- Paper -->
    <div class="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
      ${G(Y[1])}
    </div>

    <!-- Scissors -->
    <div class="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4">
      ${G(Y[2])}
    </div>

    <!-- Rock -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0">
      ${G(Y[0])}
    </div>
  </div>
`:x` <div class="flex flex-wrap justify-center gap-8 md:flex-nowrap">
    ${x`<div class="order-1 flex flex-col items-center">
    <span class="order-2 text-sm tracking-widest text-white md:order-1 md:mb-8"
      >YOU PICKED</span
    >
    <div class="order-1 md:order-2">
      ${F(z.youPick,"YOU WIN"===z.outcome&&4===z.step?"rippled-border":"")}
    </div>
  </div> `} ${4===z.step?x`
  <div class="order-3 flex flex-col items-center self-center md:order-2">
    <h1
      class="mt-16 mb-4 self-center text-5xl font-bold tracking-wider text-white md:mt-0"
    >
      ${z.outcome}
    </h1>
    <button
      class="text-dark-text self-center rounded-lg bg-white px-16 py-2 text-sm tracking-widest hover:text-red-600"
      @click="${()=>z.step=1}"
    >
      PLAY AGAIN
    </button>
  </div>
`:null} ${x`<div class="h-stretch order-2 flex flex-col items-center md:order-3">
    <span class="order-2 text-sm tracking-widest text-white md:order-1 md:mb-8"
      >THE HOUSE PICKED</span
    >
    <div class="h-stretch order-1 md:order-2">
      ${2==z.step?x`<div
            class="mt-8 mb-4 h-24 w-24 self-center rounded-full bg-[var(--background-to)]"
          ></div>`:F(z.housePick,"YOU LOSE"===z.outcome&&4===z.step?"rippled-border":"")}
    </div>
  </div>`}
  </div>`}
    <button
      class="bordered m-12 rounded-md border-1 border-slate-300 px-10 py-2 tracking-widest text-slate-300 md:self-end"
      @click="${()=>z.showRules=!0}"
    >
      RULES
    </button>
    ${z.showRules?q:null}
  </div>
`,document.body);window.onclick=J,J();
//# sourceMappingURL=fem-rock-paper-scissors.a4d9254f.js.map
