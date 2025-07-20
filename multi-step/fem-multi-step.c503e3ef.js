function e(e){return e&&e.__esModule?e.default:e}const t=globalThis,s=t.trustedTypes,l=s?s.createPolicy("lit-html",{createHTML:e=>e}):void 0,i="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+n,r=`<${o}>`,a=document,d=()=>a.createComment(""),c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,h=Array.isArray,p="[ 	\n\f\r]",u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,$=/>/g,x=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),f=/'/g,g=/"/g,v=/^(?:script|style|textarea|title)$/i,b=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),y=b(1),A=(b(2),b(3),Symbol.for("lit-noChange")),_=Symbol.for("lit-nothing"),w=new WeakMap,H=a.createTreeWalker(a,129);function N(e,t){if(!h(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==l?l.createHTML(t):t}class k{constructor({strings:e,_$litType$:t},l){let a;this.parts=[];let c=0,h=0,p=e.length-1,b=this.parts,[y,A]=((e,t)=>{let s=e.length-1,l=[],o,a=2===t?"<svg>":3===t?"<math>":"",d=u;for(let t=0;t<s;t++){let s=e[t],c,h,p=-1,b=0;for(;b<s.length&&(d.lastIndex=b,null!==(h=d.exec(s)));)b=d.lastIndex,d===u?"!--"===h[1]?d=m:void 0!==h[1]?d=$:void 0!==h[2]?(v.test(h[2])&&(o=RegExp("</"+h[2],"g")),d=x):void 0!==h[3]&&(d=x):d===x?">"===h[0]?(d=o??u,p=-1):void 0===h[1]?p=-2:(p=d.lastIndex-h[2].length,c=h[1],d=void 0===h[3]?x:'"'===h[3]?g:f):d===g||d===f?d=x:d===m||d===$?d=u:(d=x,o=void 0);let y=d===x&&e[t+1].startsWith("/>")?" ":"";a+=d===u?s+r:p>=0?(l.push(c),s.slice(0,p)+i+s.slice(p)+n+y):s+n+(-2===p?t:y)}return[N(e,a+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),l]})(e,t);if(this.el=k.createElement(y,l),H.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=H.nextNode())&&b.length<p;){if(1===a.nodeType){if(a.hasAttributes())for(let e of a.getAttributeNames())if(e.endsWith(i)){let t=A[h++],s=a.getAttribute(e).split(n),l=/([.?@])?(.*)/.exec(t);b.push({type:1,index:c,name:l[2],strings:s,ctor:"."===l[1]?j:"?"===l[1]?E:"@"===l[1]?P:C}),a.removeAttribute(e)}else e.startsWith(n)&&(b.push({type:6,index:c}),a.removeAttribute(e));if(v.test(a.tagName)){let e=a.textContent.split(n),t=e.length-1;if(t>0){a.textContent=s?s.emptyScript:"";for(let s=0;s<t;s++)a.append(e[s],d()),H.nextNode(),b.push({type:2,index:++c});a.append(e[t],d())}}}else if(8===a.nodeType)if(a.data===o)b.push({type:2,index:c});else{let e=-1;for(;-1!==(e=a.data.indexOf(n,e+1));)b.push({type:7,index:c}),e+=n.length-1}c++}}static createElement(e,t){let s=a.createElement("template");return s.innerHTML=e,s}}function T(e,t,s=e,l){if(t===A)return t;let i=void 0!==l?s._$Co?.[l]:s._$Cl,n=c(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e))._$AT(e,s,l),void 0!==l?(s._$Co??=[])[l]=i:s._$Cl=i),void 0!==i&&(t=T(e,i._$AS(e,t.values),i,l)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,l=(e?.creationScope??a).importNode(t,!0);H.currentNode=l;let i=H.nextNode(),n=0,o=0,r=s[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new S(i,i.nextSibling,this,e):1===r.type?t=new r.ctor(i,r.name,r.strings,this,e):6===r.type&&(t=new I(i,this,e)),this._$AV.push(t),r=s[++o]}n!==r?.index&&(i=H.nextNode(),n++)}return H.currentNode=a,l}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class S{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,l){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=l,this._$Cv=l?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let s;c(e=T(this,e,t))?e===_||null==e||""===e?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==A&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):h(s=e)||"function"==typeof s?.[Symbol.iterator]?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&c(this._$AH)?this._$AA.nextSibling.data=e:this.T(a.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,l="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=k.createElement(N(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===l)this._$AH.p(t);else{let e=new M(l,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=w.get(e.strings);return void 0===t&&w.set(e.strings,t=new k(e)),t}k(e){h(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,l=0;for(let i of e)l===t.length?t.push(s=new S(this.O(d()),this.O(d()),this,this.options)):s=t[l],s._$AI(i),l++;l<t.length&&(this._$AR(s&&s._$AB.nextSibling,l),t.length=l)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class C{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,l,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=l,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}_$AI(e,t=this,s,l){let i=this.strings,n=!1;if(void 0===i)(n=!c(e=T(this,e,t,0))||e!==this._$AH&&e!==A)&&(this._$AH=e);else{let l,o,r=e;for(e=i[0],l=0;l<i.length-1;l++)(o=T(this,r[s+l],t,l))===A&&(o=this._$AH[l]),n||=!c(o)||o!==this._$AH[l],o===_?e=_:e!==_&&(e+=(o??"")+i[l+1]),this._$AH[l]=o}n&&!l&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class E extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class P extends C{constructor(e,t,s,l,i){super(e,t,s,l,i),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??_)===A)return;let s=this._$AH,l=e===_&&s!==_||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==_&&(s===_||l);l&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class I{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const O=t.litHtmlPolyfillSupport;O?.(k,S),(t.litHtmlVersions??=[]).push("3.3.1");var B={};B=import.meta.resolve("2Rfe4");var R={};R=import.meta.resolve("dG2YH");var U={};U=import.meta.resolve("a3a6U");const L=y`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="80"
  height="80"
  viewBox="0 0 80 80"
>
  <g fill="none">
    <circle cx="40" cy="40" r="40" fill="#F9818E" />
    <path
      fill="#E96170"
      d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
    />
    <path
      fill="#FFF"
      d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
    />
  </g>
</svg>`,D=["YOUR INFO","SELECT PLAN","ADD-ONS","SUMMARY"],F=(()=>{let t=(e,t,s)=>({name:e,icon:t,monthly:s,yearly:10*s});return[t("Arcade",y`<img src="${e(R)}" alt="Arcade" />`,9),t("Advanced",y`<img src="${e(B)}" alt="Advanced" />`,12),t("Pro",y`<img src="${e(U)}" alt="Pro" />`,15)]})(),W=(()=>{let e=(e,t,s)=>({name:e,description:t,monthly:s,yearly:10*s});return[e("Online service","Access to multiplayer games",1),e("Larger storage","Extra 1TB of cloud save",2),e("Customizable profile","Custom theme on your profile",2)]})(),Y={step:1,schedule:"monthly",addons:new Set,plan:F[0],...Object.fromEntries(new URLSearchParams(window.location.search))},Z=()=>"monthly"===Y.schedule?"mo":"yr";function V(e,t,s){let l=`input-${s}`;return y`
    <div class="flex flex-row justify-between">
      <label for=${l} class="mx-4 mt-4 font-semibold text-blue-950">${e}</label>
      ${1!=Y.validate_step||Y[s]?null:y`<span class="mx-4 mt-4 font-bold text-red-500"
              >This field is required</span
            >`}
      </div>
      <input
        id=${l}
        class="mx-4 border rounded-sm p-2"
        type="text"
        placeholder=${t}
        value=${Y[s]??""}
        @change=${function(){Y[s]=this.value}}
      />
    </div>
  `}const z=e=>y`<label class="cursor-pointer">
    <input
      type="radio"
      name="plan"
      class="sr-only"
      .checked=${Y.plan===e}
      @click=${()=>Y.plan=e}
    />
    <div
      class="border-grey-500 ${Y.plan===e?"border-purple-600 bg-blue-100":""} mx-4 my-2 flex flex-row rounded-lg border hover:border-purple-600 md:my-4 md:flex-col"
    >
      <div class="m-4">${e.icon}</div>
      <div class="flex flex-grow flex-col">
        <p class="mx-4 mt-4 font-semibold text-blue-950">${e.name}</p>
        <p class="mx-4 text-gray-500">
          &dollar;${e[Y.schedule]}/${Z()}
        </p>
        ${"monthly"===Y.schedule?null:y`<p class="mx-4">2 months free</p>`}
      </div>
    </div>
  </label>`,G=e=>{let t=Y.addons.has(e);return y`
    <label
      class="${t?"border-purple-600 bg-blue-100":""} my-2 flex cursor-pointer flex-row items-center rounded-lg border border-purple-200 p-4 hover:border-purple-600"
    >
      <input
        type="checkbox"
        class="h-5 w-5 accent-purple-600"
        .checked=${t}
        @click=${()=>{t?Y.addons.delete(e):Y.addons.add(e)}}
      />
      <div class="ml-4 flex-grow">
        <p class="font-semibold text-blue-950">${e.name}</p>
        <p class="text-sm text-gray-500">${e.description}</p>
      </div>
      <p class="text-purple-600">
        +&dollar;${e[Y.schedule]}/${Z()}
      </p>
    </label>
  `},K=[()=>y` <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">
      Personal info
    </h1>
    <p class="mx-4 mt-4 text-xl text-gray-500">
      Please provide your name, email address, and phone number.
    </p>
    ${V("Name","e.g. Stephen King","name")}
    ${V("Email Address","e.g. stephenking@lorem.com","email")}
    ${V("Phone Number","e.g. +1 234 567 890","phone")}`,()=>y`<div class="flex flex-col">
    <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">Select your plan</h1>
    <p class="mx-4 mt-4 text-gray-500">
      You have the option of monthly or yearly billing.
    </p>
    <div class="flex flex-col md:grid md:grid-cols-3">
      ${F.map(z)}
    </div>
    ${y` <label
    class="mx-4 my-2 flex cursor-pointer flex-row items-center justify-center rounded-lg bg-blue-100 py-4"
  >
    <p
      class="${"monthly"===Y.schedule?"text-blue-950 font-semibold":"text-gray-500"}"
    >
      Monthly
    </p>
    <!-- SR-only input with label for accessiblity -->
    <input
      type="checkbox"
      class="sr-only"
      .checked=${"monthly"!==Y.schedule}
      @click=${()=>Y.schedule="monthly"===Y.schedule?"yearly":"monthly"}
    />
    <div
      class="${"monthly"===Y.schedule?"":"justify-end"} mx-4 flex h-4 w-7 items-center rounded-full bg-blue-950"
    >
      <span class="h-3 w-3 rounded-full bg-white"></span>
    </div>
    <p
      class=${"monthly"===Y.schedule?"text-gray-500":"text-blue-950 font-semibold"}
    >
      Yearly
    </p>
  </label>`}
  </div>`,()=>y`<div class="flex flex-col">
    <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">Pick add-ons</h1>
    <p class="mx-4 mt-4 text-gray-500">
      Add-ons help enhance your gaming experience.
    </p>
    <div class="mx-4 flex flex-col">${W.map(G)}</div>
  </div>`,()=>y`<div class="flex flex-col">
    <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">Finishing up</h1>
    <p class="mx-4 mt-4 text-gray-500">
      Double-check everything looks OK before confirming.
    </p>
    <div class="m-4 flex flex-col">
      <div class="flex flex-row justify-between rounded-t-lg bg-blue-100 p-4">
        <div class="flex flex-col">
          <p class="font-semibold text-blue-950">
            ${Y.plan.name} (${"monthly"===Y.schedule?"Monthly":"Yearly"})
          </p>
          <a class="text-gray-500 underline" @click=${()=>Y.step=2}>
            Change
          </a>
        </div>
        <span class="text-blue-950">
          &dollar;${Y.plan[Y.schedule]}/${Z()}
        </span>
      </div>
      <div class="flex flex-row justify-between rounded-b-lg bg-blue-100 p-4">
        <div class="flex w-1/1 flex-col text-gray-500">
          ${W.filter(e=>Y.addons.has(e)).map(e=>y` <div class="flex w-1/1 flex-row justify-between">
                  <div>${e.name}</div>
                  <div class="text-blue-950">
                    +&dollar;${e[Y.schedule]}/${Z()}
                  </div>
                </div>`)}
        </div>
      </div>
      <div class="flex w-1/1 flex-row justify-between p-4">
        <div class="text-gray-500">
          Total (per ${"monthly"===Y.schedule?"month":"year"})
        </div>
        <div class="font-semibold text-purple-600">
          +&dollar;${W.filter(e=>Y.addons.has(e)).reduce((e,t)=>e+t[Y.schedule],Y.plan[Y.schedule])}/${Z()}
        </div>
      </div>
    </div>
  </div>`,()=>y`<div class="flex h-[40vh] flex-col items-center md:h-1/1">
    <div class="grow-1"></div>
    ${L}
    <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">Thank you!</h1>
    <p class="mx-4 mt-4 text-center text-gray-500 md:w-md">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
    <div class="grow-1"></div>
  </div>`],q=()=>((e,t,s)=>{let l=s?.renderBefore??t,i=l._$litPart$;if(void 0===i){let e=s?.renderBefore??null;l._$litPart$=i=new S(t.insertBefore(d(),e),e,void 0,s??{})}return i._$AI(e),i})(y` <main class="min-h-screen bg-blue-100 flex flex-col justify-start md:justify-center">
  <div class="flex flex-col md:flex-row md:m-auto md:bg-white md:rounded-lg md:p-4 md:min-w-3/5">
    ${y`<section
    class="bg-[url(../assets/images/bg-sidebar-mobile.svg)] bg-cover md:rounded-lg md:bg-[url(../assets/images/bg-sidebar-desktop.svg)] md:bg-no-repeat"
  >
    <div class="m-auto flex flex-row justify-center pt-10 pb-20 md:flex-col">
      ${[1,2,3,4].map(e=>y` <div class="justify-left m-4 flex items-center gap-4">
            <span
              class="${e===Y.step||4===e&&Y.step>4?"bg-blue-200 text-black":"bg-transparent text-blue-200"} rounded-full border border-blue-200 px-4 py-2 text-lg font-bold"
            >
              ${e}
            </span>
            <span class="hidden md:block">
              <p class="text-grey-500">Step ${e}</p>
              <p class="font-bold text-purple-200">${D[e-1]}</p>
            </span>
          </div>`)}
    </div>
  </section>`}
    <div class="md:grow-1"></div>
    <section class="flex flex-col mx-4 mt-[-40px] md:mt-0 bg-white rounded-lg md:grow-2">
      ${K[Y.step-1]()}
      <div class="mb-4"></div>
      <div class="flex-grow"></div>
      ${Y.step>4?null:y`<section class="flex justify-end bg-white p-4">
              ${1===Y.step?null:y`<button
                      class="px-4 py-2 text-gray-500"
                      @click=${()=>Y.step--}
                    >
                      Go Back
                    </button>
                    <div class="flex-grow"></div>`}
              <button
                class="${4===Y.step?"bg-purple-600":"bg-blue-950"} rounded-md px-4 py-2 text-white"
                @click=${()=>{Y.validate_step=Y.step,(1===Y.step?["name","email","phone"].reduce((e,t)=>e&&!!Y[t],!0):Y.step<5)&&Y.step++}}
              >
                ${4===Y.step?"Confirm":"Next Step"}
              </button>
            </section>`}
    </section>
    <div class="md:grow-1"></div>
  </main>`,document.body);window.onchange=window.onclick=q,q();
//# sourceMappingURL=fem-multi-step.c503e3ef.js.map
