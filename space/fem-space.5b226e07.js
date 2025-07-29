function e(e){return e&&e.__esModule?e.default:e}const t=globalThis,s=t.trustedTypes,i=s?s.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+n,r=`<${o}>`,l=document,c=()=>l.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,d=Array.isArray,p="[ 	\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,u=/-->/g,g=/>/g,f=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,w=/"/g,x=/^(?:script|style|textarea|title)$/i,$=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),y=$(1),A=($(2),$(3),Symbol.for("lit-noChange")),b=Symbol.for("lit-nothing"),_=new WeakMap,k=l.createTreeWalker(l,129);function H(e,t){if(!d(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(t):t}class S{constructor({strings:e,_$litType$:t},i){let l;this.parts=[];let h=0,d=0,p=e.length-1,$=this.parts,[y,A]=((e,t)=>{let s=e.length-1,i=[],o,l=2===t?"<svg>":3===t?"<math>":"",c=m;for(let t=0;t<s;t++){let s=e[t],h,d,p=-1,$=0;for(;$<s.length&&(c.lastIndex=$,null!==(d=c.exec(s)));)$=c.lastIndex,c===m?"!--"===d[1]?c=u:void 0!==d[1]?c=g:void 0!==d[2]?(x.test(d[2])&&(o=RegExp("</"+d[2],"g")),c=f):void 0!==d[3]&&(c=f):c===f?">"===d[0]?(c=o??m,p=-1):void 0===d[1]?p=-2:(p=c.lastIndex-d[2].length,h=d[1],c=void 0===d[3]?f:'"'===d[3]?w:v):c===w||c===v?c=f:c===u||c===g?c=m:(c=f,o=void 0);let y=c===f&&e[t+1].startsWith("/>")?" ":"";l+=c===m?s+r:p>=0?(i.push(h),s.slice(0,p)+a+s.slice(p)+n+y):s+n+(-2===p?t:y)}return[H(e,l+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=S.createElement(y,i),k.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(l=k.nextNode())&&$.length<p;){if(1===l.nodeType){if(l.hasAttributes())for(let e of l.getAttributeNames())if(e.endsWith(a)){let t=A[d++],s=l.getAttribute(e).split(n),i=/([.?@])?(.*)/.exec(t);$.push({type:1,index:h,name:i[2],strings:s,ctor:"."===i[1]?M:"?"===i[1]?j:"@"===i[1]?I:E}),l.removeAttribute(e)}else e.startsWith(n)&&($.push({type:6,index:h}),l.removeAttribute(e));if(x.test(l.tagName)){let e=l.textContent.split(n),t=e.length-1;if(t>0){l.textContent=s?s.emptyScript:"";for(let s=0;s<t;s++)l.append(e[s],c()),k.nextNode(),$.push({type:2,index:++h});l.append(e[t],c())}}}else if(8===l.nodeType)if(l.data===o)$.push({type:2,index:h});else{let e=-1;for(;-1!==(e=l.data.indexOf(n,e+1));)$.push({type:7,index:h}),e+=n.length-1}h++}}static createElement(e,t){let s=l.createElement("template");return s.innerHTML=e,s}}function N(e,t,s=e,i){if(t===A)return t;let a=void 0!==i?s._$Co?.[i]:s._$Cl,n=h(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=a:s._$Cl=a),void 0!==a&&(t=N(e,a._$AS(e,t.values),a,i)),t}class T{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??l).importNode(t,!0);k.currentNode=i;let a=k.nextNode(),n=0,o=0,r=s[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new C(a,a.nextSibling,this,e):1===r.type?t=new r.ctor(a,r.name,r.strings,this,e):6===r.type&&(t=new D(a,this,e)),this._$AV.push(t),r=s[++o]}n!==r?.index&&(a=k.nextNode(),n++)}return k.currentNode=l,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class C{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let s;h(e=N(this,e,t))?e===b||null==e||""===e?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==A&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):d(s=e)||"function"==typeof s?.[Symbol.iterator]?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(l.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=S.createElement(H(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new T(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=_.get(e.strings);return void 0===t&&_.set(e.strings,t=new S(e)),t}k(e){d(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let a of e)i===t.length?t.push(s=new C(this.O(c()),this.O(c()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class E{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(e,t=this,s,i){let a=this.strings,n=!1;if(void 0===a)(n=!h(e=N(this,e,t,0))||e!==this._$AH&&e!==A)&&(this._$AH=e);else{let i,o,r=e;for(e=a[0],i=0;i<a.length-1;i++)(o=N(this,r[s+i],t,i))===A&&(o=this._$AH[i]),n||=!h(o)||o!==this._$AH[i],o===b?e=b:e!==b&&(e+=(o??"")+a[i+1]),this._$AH[i]=o}n&&!i&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends E{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class j extends E{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class I extends E{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??b)===A)return;let s=this._$AH,i=e===b&&s!==b||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==b&&(s===b||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class D{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const O=t.litHtmlPolyfillSupport;O?.(S,C),(t.litHtmlVersions??=[]).push("3.3.1");var P={};const B={step:1,destination:e(P=JSON.parse('{"destinations":[{"name":"Moon","images":{"png":"./assets/destination/image-moon.png","webp":"./assets/destination/image-moon.webp"},"description":"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","distance":"384,400 km","travel":"3 days"},{"name":"Mars","images":{"png":"./assets/destination/image-mars.png","webp":"./assets/destination/image-mars.webp"},"description":"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!","distance":"225 mil. km","travel":"9 months"},{"name":"Europa","images":{"png":"./assets/destination/image-europa.png","webp":"./assets/destination/image-europa.webp"},"description":"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","distance":"628 mil. km","travel":"3 years"},{"name":"Titan","images":{"png":"./assets/destination/image-titan.png","webp":"./assets/destination/image-titan.webp"},"description":"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","distance":"1.6 bil. km","travel":"7 years"}],"crew":[{"name":"Douglas Hurley","images":{"png":"./assets/crew/image-douglas-hurley.png","webp":"./assets/crew/image-douglas-hurley.webp"},"role":"Commander","bio":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{"name":"Mark Shuttleworth","images":{"png":"./assets/crew/image-mark-shuttleworth.png","webp":"./assets/crew/image-mark-shuttleworth.webp"},"role":"Mission Specialist","bio":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{"name":"Victor Glover","images":{"png":"./assets/crew/image-victor-glover.png","webp":"./assets/crew/image-victor-glover.webp"},"role":"Pilot","bio":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{"name":"Anousheh Ansari","images":{"png":"./assets/crew/image-anousheh-ansari.png","webp":"./assets/crew/image-anousheh-ansari.webp"},"role":"Flight Engineer","bio":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],"technology":[{"name":"Launch vehicle","images":{"portrait":"./assets/technology/image-launch-vehicle-portrait.jpg","landscape":"./assets/technology/image-launch-vehicle-landscape.jpg"},"description":"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!"},{"name":"Spaceport","images":{"portrait":"./assets/technology/image-spaceport-portrait.jpg","landscape":"./assets/technology/image-spaceport-landscape.jpg"},"description":"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{"name":"Space capsule","images":{"portrait":"./assets/technology/image-space-capsule-portrait.jpg","landscape":"./assets/technology/image-space-capsule-landscape.jpg"},"description":"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}')).destinations[0],crew:e(P).crew[0],technology:e(P).technology[0]},U=()=>y`<header
    class="relative flex w-full flex-row items-center justify-between px-6 pt-6"
  >
    <img src="/assets/shared/logo.svg" alt="logo" class="h-8 w-8" />
    <input type="checkbox" id="menu" class="peer sr-only" />
    <label for="menu" id="menu-button" class="z-20 md:hidden"></label>
    <nav
      class="absolute top-0 right-0 hidden h-screen w-2/3 flex-col gap-4 bg-white/10 p-6 pt-24 text-white backdrop-blur-md peer-checked:z-20 peer-checked:flex"
    >
      <a href="#home">Home</a>
      <a href="#destination">Destination</a>
      <a href="#crew">Crew</a>
      <a href="#technology">Technology</a>
    </nav>
    <hr class="mr-[-8rem] ml-4 hidden flex-grow text-slate-700 md:block" />
    <nav class="z-1 hidden flex-row backdrop-blur md:flex">
      ${["home","destination","crew","technology"].map((e,t)=>y`<a
            href="#${e}"
            class="${e===window.location.hash.slice(1)?"border-b-2":""} mx-4 py-6"
          >
            <div class="flex flex-row gap-4">
              <span class="text-bold">0${t}</span>
              <div class="tracking-widest uppercase opacity-50">${e}</div>
            </div>
          </a>`)}
    </nav>
  </header>`,W=()=>((e,t,s)=>{let i=s?.renderBefore??t,a=i._$litPart$;if(void 0===a){let e=s?.renderBefore??null;i._$litPart$=a=new C(t.insertBefore(c(),e),e,void 0,s??{})}return a._$AI(e),a})((()=>{switch(window.location.hash){case"#destination":return y`<div
    id="destination"
    class="flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat text-white"
  >
    ${U()}
    <main class="flex h-full w-full max-w-330 flex-col items-center">
      <h2 class="text-lg tracking-widest uppercase opacity-80 md:self-start">
        <span class="font-bold md:m-16">01</span> Pick your destination
      </h2>
      <div class="flex h-full flex-row flex-wrap">
        <div class="mx-auto flex items-center p-4 md:w-1/2 md:p-8">
          <img
            class="mx-auto max-h-[33vh] md:max-h-full"
            src=${B.destination.images.png}
            alt=${B.destination.name}
          />
        </div>

        <div
          class="flex flex-col items-center gap-2 opacity-80 md:w-1/2 md:p-8"
        >
          <nav class="flex flex-row">
            ${e(P).destinations.map(e=>y`<button
                  @click=${()=>{B.destination=e,W()}}
                  class="${e==B.destination?"border-white":"border-transparent hover:border-white/50"} mx-4 border-b-2 pb-2 tracking-widest uppercase"
                >
                  ${e.name}
                </button>`)}
          </nav>
          <h1 class="font-serif text-6xl uppercase md:text-8xl">
            ${B.destination.name}
          </h1>
          <p class="max-w-md px-4 text-center">
            ${B.destination.description}
          </p>
          <div class="gap flex w-full flex-col">
            <hr class="my-4 w-full border-white/25" />
            <div class="flex flex-row justify-center md:justify-between">
              <div class="flex flex-col items-center md:items-start">
                <div class="text-sm tracking-widest uppercase">
                  Avg. Distance
                </div>
                <div class="font-serif text-2xl uppercase">
                  ${B.destination.distance}
                </div>
              </div>
              <div
                class="mx-8 hidden flex-col items-center md:flex md:items-start"
              >
                <div class="text-sm tracking-widest uppercase">
                  Est. Travel Time
                </div>
                <div class="font-serif text-2xl uppercase">
                  ${B.destination.travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>`;case"#crew":return y`<div
    id="crew"
    class="flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat text-white"
  >
    ${U()}
    <main class="flex h-[80vh] w-full max-w-330 flex-col md:pl-32">
      <h2 class="hidden text-lg tracking-widest uppercase opacity-50 md:block">
        <span class="mr-2 font-bold">02</span> Meet your crew
      </h2>
      <div class="flex h-full w-full flex-row flex-wrap md:items-end">
        <img
          class="mx-auto max-h-1/2 md:order-2 md:max-h-full md:max-w-1/2"
          src=${B.crew.images.png}
          alt=${B.crew.name}
        />
        <div
          class="mt-8 flex h-full w-full flex-col items-center gap-4 md:w-1/2 md:items-start"
        >
          <nav class="flex flex-row md:order-4 md:mt-32">
            ${e(P).crew.map(e=>y`<button
                  @click=${()=>{B.crew=e}}
                  class="filled ${e==B.crew?"":"opacity-20 hover:bg-white"} mx-2 h-2 w-2 rounded-full bg-white"
                ></button>`)}
          </nav>
          <div class="text-sm uppercase opacity-33 md:text-lg">
            ${B.crew.role}
          </div>
          <div class="font-serif text-xl opacity-50 md:text-4xl">
            ${B.crew.name}
          </div>
          <p class="max-w-lg px-4 text-center opacity-50 md:px-0 md:text-left">
            ${B.crew.bio}
          </p>
        </div>
      </div>
    </main>
  </div>`;case"#technology":return y`<div
    id="technology"
    class="flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat text-white"
  >
    ${U()}
    <main class="flex h-[85vh] w-full max-w-330 flex-col gap-6 md:pl-32">
      <h2 class="text-lg tracking-widest uppercase opacity-50">
        <span class="mr-2 font-bold">03</span> Space launch 101
      </h2>
      <div
        class="flex h-full w-full flex-row flex-wrap items-center justify-center md:justify-between"
      >
        <div class="w-full md:hidden">
          <img
            class="max-h-full max-w-full object-contain"
            src=${B.technology.images.landscape}
            alt=${B.destination.name}
          />
        </div>
        <nav
          class="flex flex-row items-center gap-4 opacity-50 md:flex-col md:opacity-100"
        >
          ${e(P).technology.map((e,t)=>y`<button
                @click=${()=>B.technology=e}
                class="${B.technology==e?"bg-white text-black":"bg-transparent"} h-8 w-8 rounded-full border-1 md:h-20 md:w-20 md:text-2xl"
              >
                ${t}
              </button>`)}
        </nav>
        <div
          class="flex flex-col items-center opacity-50 md:w-1/2 md:items-start md:opacity-80"
        >
          <p class="uppercase">The technology ...</p>
          <h1 class="font-serif text-4xl uppercase">
            ${B.technology.name}
          </h1>
          <p class="my-4 text-center md:text-left">
            ${B.technology.description}
          </p>
        </div>
        <div class="hidden w-full md:block md:w-1/3">
          <img
            class="max-h-full max-w-full object-contain"
            src=${B.technology.images.portrait}
            alt=${B.destination.name}
          />
        </div>
      </div>
    </main>
  </div>`;default:return y`
  <div
    id="home"
    class="flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat text-white"
  >
    <div class="hidden w-screen md:block">${U()}</div>
    <div class="flex-grow-2"></div>
    <div class="md:items-en flex w-full max-w-330 flex-row flex-wrap">
      <main class="m-8 flex w-full flex-col items-center gap-8 md:w-1/2">
        <div class="text-lg uppercase opacity-50">
          So, you want to travel to
        </div>
        <div class="font-serif text-8xl">SPACE</div>
        <div class="max-w-md text-center opacity-50">
          You’ll never have enough time. Space Let’s face it; if you want to go
          to space, you might as well genuinely go to outer space and not hover
          kind of on the edge of it. Well sit back, and relax because we’ll give
          you a truly out of this world experience!
        </div>
      </main>
      <button
        @click=${()=>window.location.hash="#destination"}
        class="mx-auto my-auto aspect-1/1 rounded-full bg-white p-12 text-3xl text-slate-900"
      >
        Explore
      </button>
    </div>
    <div class="flex-grow-1"></div>
  </div>
`}})(),document.body);window.onclick=window.onhashchange=window.oninput=W,W();
//# sourceMappingURL=fem-space.5b226e07.js.map
