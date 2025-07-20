const e=globalThis,t=e.trustedTypes,s=t?t.createPolicy("lit-html",{createHTML:e=>e}):void 0,l="$lit$",i=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+i,o=`<${n}>`,r=document,a=()=>r.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,h=Array.isArray,c="[ 	\n\f\r]",p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,u=/-->/g,m=/>/g,$=RegExp(`>|${c}(?:([^\\s"'>=/]+)(${c}*=${c}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),f=/'/g,x=/"/g,v=/^(?:script|style|textarea|title)$/i,g=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),b=g(1),y=(g(2),g(3),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),_=new WeakMap,w=r.createTreeWalker(r,129);function H(e,t){if(!h(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(t):t}class N{constructor({strings:e,_$litType$:s},r){let d;this.parts=[];let h=0,c=0,g=e.length-1,b=this.parts,[y,A]=((e,t)=>{let s=e.length-1,n=[],r,a=2===t?"<svg>":3===t?"<math>":"",d=p;for(let t=0;t<s;t++){let s=e[t],h,c,g=-1,b=0;for(;b<s.length&&(d.lastIndex=b,null!==(c=d.exec(s)));)b=d.lastIndex,d===p?"!--"===c[1]?d=u:void 0!==c[1]?d=m:void 0!==c[2]?(v.test(c[2])&&(r=RegExp("</"+c[2],"g")),d=$):void 0!==c[3]&&(d=$):d===$?">"===c[0]?(d=r??p,g=-1):void 0===c[1]?g=-2:(g=d.lastIndex-c[2].length,h=c[1],d=void 0===c[3]?$:'"'===c[3]?x:f):d===x||d===f?d=$:d===u||d===m?d=p:(d=$,r=void 0);let y=d===$&&e[t+1].startsWith("/>")?" ":"";a+=d===p?s+o:g>=0?(n.push(h),s.slice(0,g)+l+s.slice(g)+i+y):s+i+(-2===g?t:y)}return[H(e,a+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,s);if(this.el=N.createElement(y,r),w.currentNode=this.el.content,2===s||3===s){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(d=w.nextNode())&&b.length<g;){if(1===d.nodeType){if(d.hasAttributes())for(let e of d.getAttributeNames())if(e.endsWith(l)){let t=A[c++],s=d.getAttribute(e).split(i),l=/([.?@])?(.*)/.exec(t);b.push({type:1,index:h,name:l[2],strings:s,ctor:"."===l[1]?F:"?"===l[1]?C:"@"===l[1]?E:S}),d.removeAttribute(e)}else e.startsWith(i)&&(b.push({type:6,index:h}),d.removeAttribute(e));if(v.test(d.tagName)){let e=d.textContent.split(i),s=e.length-1;if(s>0){d.textContent=t?t.emptyScript:"";for(let t=0;t<s;t++)d.append(e[t],a()),w.nextNode(),b.push({type:2,index:++h});d.append(e[s],a())}}}else if(8===d.nodeType)if(d.data===n)b.push({type:2,index:h});else{let e=-1;for(;-1!==(e=d.data.indexOf(i,e+1));)b.push({type:7,index:h}),e+=i.length-1}h++}}static createElement(e,t){let s=r.createElement("template");return s.innerHTML=e,s}}function M(e,t,s=e,l){if(t===y)return t;let i=void 0!==l?s._$Co?.[l]:s._$Cl,n=d(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e))._$AT(e,s,l),void 0!==l?(s._$Co??=[])[l]=i:s._$Cl=i),void 0!==i&&(t=M(e,i._$AS(e,t.values),i,l)),t}class k{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,l=(e?.creationScope??r).importNode(t,!0);w.currentNode=l;let i=w.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new T(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new j(i,this,e)),this._$AV.push(t),a=s[++o]}n!==a?.index&&(i=w.nextNode(),n++)}return w.currentNode=r,l}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,l){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=l,this._$Cv=l?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let s;d(e=M(this,e,t))?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==y&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):h(s=e)||"function"==typeof s?.[Symbol.iterator]?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=e:this.T(r.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,l="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=N.createElement(H(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===l)this._$AH.p(t);else{let e=new k(l,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=_.get(e.strings);return void 0===t&&_.set(e.strings,t=new N(e)),t}k(e){h(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,l=0;for(let i of e)l===t.length?t.push(s=new T(this.O(a()),this.O(a()),this,this.options)):s=t[l],s._$AI(i),l++;l<t.length&&(this._$AR(s&&s._$AB.nextSibling,l),t.length=l)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,l,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=l,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}_$AI(e,t=this,s,l){let i=this.strings,n=!1;if(void 0===i)(n=!d(e=M(this,e,t,0))||e!==this._$AH&&e!==y)&&(this._$AH=e);else{let l,o,r=e;for(e=i[0],l=0;l<i.length-1;l++)(o=M(this,r[s+l],t,l))===y&&(o=this._$AH[l]),n||=!d(o)||o!==this._$AH[l],o===A?e=A:e!==A&&(e+=(o??"")+i[l+1]),this._$AH[l]=o}n&&!l&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class F extends S{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class C extends S{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class E extends S{constructor(e,t,s,l,i){super(e,t,s,l,i),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??A)===y)return;let s=this._$AH,l=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==A&&(s===A||l);l&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class j{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const Z=e.litHtmlPolyfillSupport;Z?.(N,T),(e.litHtmlVersions??=[]).push("3.3.1");const B=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 40 40"
>
  <g fill="none" fill-rule="evenodd">
    <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
    <path
      fill="#FFF"
      fill-rule="nonzero"
      d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
    />
  </g>
</svg>`,P=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 40 40"
>
  <g fill="none" fill-rule="evenodd">
    <circle cx="20" cy="20" r="20" fill="#F9818E" />
    <path
      fill="#FFF"
      fill-rule="nonzero"
      d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
    />
  </g>
</svg>`,I=b`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 40 40"
>
  <g fill="none" fill-rule="evenodd">
    <circle cx="20" cy="20" r="20" fill="#483EFF" />
    <path
      fill="#FFF"
      fill-rule="nonzero"
      d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
    />
  </g>
</svg>`,O=b`<svg
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
</svg>`,L=["YOUR INFO","SELECT PLAN","ADD-ONS","SUMMARY"],R=(()=>{let e=(e,t,s)=>({name:e,icon:t,monthly:s,yearly:10*s});return[e("Arcade",B,9),e("Advanced",P,12),e("Pro",I,15)]})(),U=(()=>{let e=(e,t,s)=>({name:e,description:t,monthly:s,yearly:10*s});return[e("Online service","Access to multiplayer games",1),e("Larger storage","Extra 1TB of cloud save",2),e("Customizable profile","Custom theme on your profile",2)]})(),D={step:1,schedule:"monthly",addons:new Set,plan:R[0],...Object.fromEntries(new URLSearchParams(window.location.search))},W=()=>"monthly"===D.schedule?"mo":"yr";function z(e,t,s){let l=`input-${s}`;return b`
    <div class="flex flex-row justify-between">
      <label for=${l} class="mx-4 mt-4 font-semibold text-blue-950">${e}</label>
      ${1!=D.validate_step||D[s]?null:b`<span class="mx-4 mt-4 font-bold text-red-500"
              >This field is required</span
            >`}
      </div>
      <input
        id=${l}
        class="mx-4 border rounded-sm p-2"
        type="text"
        placeholder=${t}
        value=${D[s]??""}
        @change=${function(){D[s]=this.value}}
      />
    </div>
  `}const V=e=>b`<label class="cursor-pointer">
    <input
      type="radio"
      name="plan"
      class="sr-only"
      .checked=${D.plan===e}
      @click=${()=>D.plan=e}
    />
    <div
      class="border-grey-500 ${D.plan===e?"border-purple-600 bg-blue-100":""} mx-4 my-2 flex flex-row rounded-lg border hover:border-purple-600 md:my-4 md:flex-col"
    >
      <div class="m-4">${e.icon}</div>
      <div class="flex flex-grow flex-col">
        <p class="mx-4 mt-4 font-semibold text-blue-950">${e.name}</p>
        <p class="mx-4 text-gray-500">
          &dollar;${e[D.schedule]}/${W()}
        </p>
        ${"monthly"===D.schedule?null:b`<p class="mx-4">2 months free</p>`}
      </div>
    </div>
  </label>`,Y=e=>{let t=D.addons.has(e);return b`
    <label
      class="${t?"border-purple-600 bg-blue-100":""} my-2 flex cursor-pointer flex-row items-center rounded-lg border border-purple-200 p-4 hover:border-purple-600"
    >
      <input
        type="checkbox"
        class="h-5 w-5 accent-purple-600"
        .checked=${t}
        @click=${()=>{t?D.addons.delete(e):D.addons.add(e)}}
      />
      <div class="ml-4 flex-grow">
        <p class="font-semibold text-blue-950">${e.name}</p>
        <p class="text-sm text-gray-500">${e.description}</p>
      </div>
      <p class="text-purple-600">
        +&dollar;${e[D.schedule]}/${W()}
      </p>
    </label>
  `},K=[()=>b` <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">
      Personal info
    </h1>
    <p class="mx-4 mt-4 text-xl text-gray-500">
      Please provide your name, email address, and phone number.
    </p>
    ${z("Name","e.g. Stephen King","name")}
    ${z("Email Address","e.g. stephenking@lorem.com","email")}
    ${z("Phone Number","e.g. +1 234 567 890","phone")}`,()=>b`<div class="flex flex-col">
    <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">Select your plan</h1>
    <p class="mx-4 mt-4 text-gray-500">
      You have the option of monthly or yearly billing.
    </p>
    <div class="flex flex-col md:grid md:grid-cols-3">
      ${R.map(V)}
    </div>
    ${b` <label
    class="mx-4 my-2 flex cursor-pointer flex-row items-center justify-center rounded-lg bg-blue-100 py-4"
  >
    <p
      class="${"monthly"===D.schedule?"text-blue-950 font-semibold":"text-gray-500"}"
    >
      Monthly
    </p>
    <!-- SR-only input with label for accessiblity -->
    <input
      type="checkbox"
      class="sr-only"
      .checked=${"monthly"!==D.schedule}
      @click=${()=>D.schedule="monthly"===D.schedule?"yearly":"monthly"}
    />
    <div
      class="${"monthly"===D.schedule?"":"justify-end"} mx-4 flex h-4 w-7 items-center rounded-full bg-blue-950"
    >
      <span class="h-3 w-3 rounded-full bg-white"></span>
    </div>
    <p
      class=${"monthly"===D.schedule?"text-gray-500":"text-blue-950 font-semibold"}
    >
      Yearly
    </p>
  </label>`}
  </div>`,()=>b`<div class="flex flex-col">
    <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">Pick add-ons</h1>
    <p class="mx-4 mt-4 text-gray-500">
      Add-ons help enhance your gaming experience.
    </p>
    <div class="mx-4 flex flex-col">${U.map(Y)}</div>
  </div>`,()=>b`<div class="flex flex-col">
    <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">Finishing up</h1>
    <p class="mx-4 mt-4 text-gray-500">
      Double-check everything looks OK before confirming.
    </p>
    <div class="m-4 flex flex-col">
      <div class="flex flex-row justify-between rounded-t-lg bg-blue-100 p-4">
        <div class="flex flex-col">
          <p class="font-semibold text-blue-950">
            ${D.plan.name} (${"monthly"===D.schedule?"Monthly":"Yearly"})
          </p>
          <a class="text-gray-500 underline" @click=${()=>D.step=2}>
            Change
          </a>
        </div>
        <span class="text-blue-950">
          &dollar;${D.plan[D.schedule]}/${W()}
        </span>
      </div>
      <div class="flex flex-row justify-between rounded-b-lg bg-blue-100 p-4">
        <div class="flex w-1/1 flex-col text-gray-500">
          ${U.filter(e=>D.addons.has(e)).map(e=>b` <div class="flex w-1/1 flex-row justify-between">
                  <div>${e.name}</div>
                  <div class="text-blue-950">
                    +&dollar;${e[D.schedule]}/${W()}
                  </div>
                </div>`)}
        </div>
      </div>
      <div class="flex w-1/1 flex-row justify-between p-4">
        <div class="text-gray-500">
          Total (per ${"monthly"===D.schedule?"month":"year"})
        </div>
        <div class="font-semibold text-purple-600">
          +&dollar;${U.filter(e=>D.addons.has(e)).reduce((e,t)=>e+t[D.schedule],D.plan[D.schedule])}/${W()}
        </div>
      </div>
    </div>
  </div>`,()=>b`<div class="flex h-[40vh] flex-col items-center md:h-1/1">
    <div class="grow-1"></div>
    ${O}
    <h1 class="mx-4 mt-4 text-3xl font-bold text-blue-950">Thank you!</h1>
    <p class="mx-4 mt-4 text-center text-gray-500 md:w-md">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
    <div class="grow-1"></div>
  </div>`],q=()=>((e,t,s)=>{let l=s?.renderBefore??t,i=l._$litPart$;if(void 0===i){let e=s?.renderBefore??null;l._$litPart$=i=new T(t.insertBefore(a(),e),e,void 0,s??{})}return i._$AI(e),i})(b` <main class="min-h-screen bg-blue-100 flex flex-col justify-start md:justify-center">
  <div class="flex flex-col md:flex-row md:m-auto md:bg-white md:rounded-lg md:p-4 md:min-w-3/5">
    ${b`<section
    class="bg-[url(../assets/images/bg-sidebar-mobile.svg)] bg-cover md:rounded-lg md:bg-[url(../assets/images/bg-sidebar-desktop.svg)] md:bg-no-repeat"
  >
    <div class="m-auto flex flex-row justify-center pt-10 pb-20 md:flex-col">
      ${[1,2,3,4].map(e=>b` <div class="justify-left m-4 flex items-center gap-4">
            <span
              class="${e===D.step||4===e&&D.step>4?"bg-blue-200 text-black":"bg-transparent text-blue-200"} rounded-full border border-blue-200 px-4 py-2 text-lg font-bold"
            >
              ${e}
            </span>
            <span class="hidden md:block">
              <p class="text-grey-500">Step ${e}</p>
              <p class="font-bold text-purple-200">${L[e-1]}</p>
            </span>
          </div>`)}
    </div>
  </section>`}
    <div class="md:grow-1"></div>
    <section class="flex flex-col mx-4 mt-[-40px] md:mt-0 bg-white rounded-lg md:grow-2">
      ${K[D.step-1]()}
      <div class="mb-4"></div>
      <div class="flex-grow"></div>
      ${D.step>4?null:b`<section class="flex justify-end bg-white p-4">
              ${1===D.step?null:b`<button
                      class="px-4 py-2 text-gray-500"
                      @click=${()=>D.step--}
                    >
                      Go Back
                    </button>
                    <div class="flex-grow"></div>`}
              <button
                class="rounded-md bg-blue-950 px-4 py-2 text-white"
                @click=${()=>{D.validate_step=D.step,(1===D.step?["name","email","phone"].reduce((e,t)=>e&&!!D[t],!0):D.step<5)&&D.step++}}
              >
                Next Step
              </button>
            </section>`}
    </section>
    <div class="md:grow-1"></div>
  </main>`,document.body);window.onchange=window.onclick=q,q();
//# sourceMappingURL=fem-multi-step.864609ce.js.map
