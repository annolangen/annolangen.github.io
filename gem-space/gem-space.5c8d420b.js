function e(e){return e&&e.__esModule?e.default:e}const t=globalThis,s=t.trustedTypes,i=s?s.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",r=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+r,l=`<${n}>`,o=document,h=()=>o.createComment(""),c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,d=Array.isArray,p="[ 	\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,u=/>/g,f=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,x=/"/g,$=/^(?:script|style|textarea|title)$/i,y=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),w=y(1),v=(y(2),y(3),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),_=new WeakMap,k=o.createTreeWalker(o,129);function H(e,t){if(!d(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(t):t}class E{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let c=0,d=0,p=e.length-1,y=this.parts,[w,v]=((e,t)=>{let s=e.length-1,i=[],n,o=2===t?"<svg>":3===t?"<math>":"",h=g;for(let t=0;t<s;t++){let s=e[t],c,d,p=-1,y=0;for(;y<s.length&&(h.lastIndex=y,null!==(d=h.exec(s)));)y=h.lastIndex,h===g?"!--"===d[1]?h=m:void 0!==d[1]?h=u:void 0!==d[2]?($.test(d[2])&&(n=RegExp("</"+d[2],"g")),h=f):void 0!==d[3]&&(h=f):h===f?">"===d[0]?(h=n??g,p=-1):void 0===d[1]?p=-2:(p=h.lastIndex-d[2].length,c=d[1],h=void 0===d[3]?f:'"'===d[3]?x:b):h===x||h===b?h=f:h===m||h===u?h=g:(h=f,n=void 0);let w=h===f&&e[t+1].startsWith("/>")?" ":"";o+=h===g?s+l:p>=0?(i.push(c),s.slice(0,p)+a+s.slice(p)+r+w):s+r+(-2===p?t:w)}return[H(e,o+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=E.createElement(w,i),k.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=k.nextNode())&&y.length<p;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(a)){let t=v[d++],s=o.getAttribute(e).split(r),i=/([.?@])?(.*)/.exec(t);y.push({type:1,index:c,name:i[2],strings:s,ctor:"."===i[1]?M:"?"===i[1]?I:"@"===i[1]?O:C}),o.removeAttribute(e)}else e.startsWith(r)&&(y.push({type:6,index:c}),o.removeAttribute(e));if($.test(o.tagName)){let e=o.textContent.split(r),t=e.length-1;if(t>0){o.textContent=s?s.emptyScript:"";for(let s=0;s<t;s++)o.append(e[s],h()),k.nextNode(),y.push({type:2,index:++c});o.append(e[t],h())}}}else if(8===o.nodeType)if(o.data===n)y.push({type:2,index:c});else{let e=-1;for(;-1!==(e=o.data.indexOf(r,e+1));)y.push({type:7,index:c}),e+=r.length-1}c++}}static createElement(e,t){let s=o.createElement("template");return s.innerHTML=e,s}}function T(e,t,s=e,i){if(t===v)return t;let a=void 0!==i?s._$Co?.[i]:s._$Cl,r=c(t)?void 0:t._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=a:s._$Cl=a),void 0!==a&&(t=T(e,a._$AS(e,t.values),a,i)),t}class S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??o).importNode(t,!0);k.currentNode=i;let a=k.nextNode(),r=0,n=0,l=s[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new N(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new j(a,this,e)),this._$AV.push(t),l=s[++n]}r!==l?.index&&(a=k.nextNode(),r++)}return k.currentNode=o,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let s;c(e=T(this,e,t))?e===A||null==e||""===e?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==v&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):d(s=e)||"function"==typeof s?.[Symbol.iterator]?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&c(this._$AH)?this._$AA.nextSibling.data=e:this.T(o.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=E.createElement(H(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new S(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=_.get(e.strings);return void 0===t&&_.set(e.strings,t=new E(e)),t}k(e){d(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let a of e)i===t.length?t.push(s=new N(this.O(h()),this.O(h()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class C{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}_$AI(e,t=this,s,i){let a=this.strings,r=!1;if(void 0===a)(r=!c(e=T(this,e,t,0))||e!==this._$AH&&e!==v)&&(this._$AH=e);else{let i,n,l=e;for(e=a[0],i=0;i<a.length-1;i++)(n=T(this,l[s+i],t,i))===v&&(n=this._$AH[i]),r||=!c(n)||n!==this._$AH[i],n===A?e=A:e!==A&&(e+=(n??"")+a[i+1]),this._$AH[i]=n}r&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class I extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class O extends C{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??A)===v)return;let s=this._$AH,i=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==A&&(s===A||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class j{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const L=t.litHtmlPolyfillSupport;L?.(E,N),(t.litHtmlVersions??=[]).push("3.3.1");const W={"":"bg-page-home",destination:"bg-page-destination",crew:"bg-page-crew",technology:"bg-page-technology"},R=()=>{let e=document.getElementById("mobile-menu");e&&e.classList.toggle("hidden")},D=()=>w`
  <div
    class="grid h-full items-center gap-8 px-6 text-center lg:grid-cols-2 lg:px-24 lg:text-left"
  >
    <div>
      <h2
        class="font-family-barlow-condensed text-xl tracking-widest text-light-blue md:text-2xl"
      >
        SO, YOU WANT TO TRAVEL TO
      </h2>
      <h1 class="my-4 font-family-bellefair text-8xl md:text-9xl">SPACE</h1>
      <p
        class="font-family-barlow text-base leading-relaxed text-white md:text-lg"
      >
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div class="group flex items-center justify-center">
      <div
        class="absolute h-64 w-64 rounded-full bg-white/10 transition-transform group-hover:scale-150"
      ></div>
      <a
        href="#destination"
        class="z-10 flex h-48 w-48 items-center justify-center rounded-full bg-white font-family-bellefair text-2xl tracking-widest text-dark-blue uppercase md:h-64 md:w-64 md:text-3xl"
        >Explore</a
      >
    </div>
  </div>
`;var B={};const P=e(B=JSON.parse('{"destinations":[{"name":"Moon","images":{"png":"./assets/destination/image-moon.png","webp":"./assets/destination/image-moon.webp"},"description":"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.","distance":"384,400 km","travel":"3 days"},{"name":"Mars","images":{"png":"./assets/destination/image-mars.png","webp":"./assets/destination/image-mars.webp"},"description":"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!","distance":"225 mil. km","travel":"9 months"},{"name":"Europa","images":{"png":"./assets/destination/image-europa.png","webp":"./assets/destination/image-europa.webp"},"description":"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.","distance":"628 mil. km","travel":"3 years"},{"name":"Titan","images":{"png":"./assets/destination/image-titan.png","webp":"./assets/destination/image-titan.webp"},"description":"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.","distance":"1.6 bil. km","travel":"7 years"}],"crew":[{"name":"Douglas Hurley","images":{"png":"./assets/crew/image-douglas-hurley.png","webp":"./assets/crew/image-douglas-hurley.webp"},"role":"Commander","bio":"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{"name":"Mark Shuttleworth","images":{"png":"./assets/crew/image-mark-shuttleworth.png","webp":"./assets/crew/image-mark-shuttleworth.webp"},"role":"Mission Specialist","bio":"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{"name":"Victor Glover","images":{"png":"./assets/crew/image-victor-glover.png","webp":"./assets/crew/image-victor-glover.webp"},"role":"Pilot","bio":"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{"name":"Anousheh Ansari","images":{"png":"./assets/crew/image-anousheh-ansari.png","webp":"./assets/crew/image-anousheh-ansari.webp"},"role":"Flight Engineer","bio":"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],"technology":[{"name":"Launch vehicle","images":{"portrait":"./assets/technology/image-launch-vehicle-portrait.jpg","landscape":"./assets/technology/image-launch-vehicle-landscape.jpg"},"description":"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!"},{"name":"Spaceport","images":{"portrait":"./assets/technology/image-spaceport-portrait.jpg","landscape":"./assets/technology/image-spaceport-landscape.jpg"},"description":"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{"name":"Space capsule","images":{"portrait":"./assets/technology/image-space-capsule-portrait.jpg","landscape":"./assets/technology/image-space-capsule-landscape.jpg"},"description":"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]}')).technology,U={"":D,destination:t=>(t=>{let s=e(B).destinations.find(e=>e.name===t)||e(B).destinations[0];return w`
    <div class="grid h-full items-center gap-8 lg:grid-cols-2">
      <div class="px-6 pt-32 text-center lg:px-24 lg:text-left">
        <h2
          class="font-family-barlow-condensed text-xl tracking-widest text-light-blue uppercase md:text-2xl"
        >
          <b>01</b> Pick your destination
        </h2>
        <img
          src=${s.images.webp}
          alt=${s.name}
          class="mx-auto my-8 w-1/2 md:w-3/4 lg:w-full"
        />
      </div>
      <div class="px-6 text-center lg:px-24 lg:text-left">
        <nav
          class="flex justify-center space-x-8 font-family-barlow-condensed tracking-widest text-light-blue lg:justify-start"
        >
          ${e(B).destinations.map(e=>w`
              <a
                href=${`#destination/${e.name}`}
                class=${`uppercase pb-2 border-b-2 ${s.name===e.name?"border-white text-white":"border-transparent"}`}
                >${e.name}</a
              >
            `)}
        </nav>
        <h1 class="my-4 font-family-bellefair text-8xl uppercase md:text-9xl">
          ${s.name}
        </h1>
        <p
          class="font-family-barlow text-base leading-relaxed text-light-blue md:text-lg"
        >
          ${s.description}
        </p>
        <hr class="my-8 border-white/25" />
        <div
          class="flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-16 lg:justify-start"
        >
          <div>
            <h3
              class="font-family-barlow-condensed tracking-widest text-light-blue"
            >
              AVG. DISTANCE
            </h3>
            <p class="font-family-bellefair text-3xl uppercase">
              ${s.distance}
            </p>
          </div>
          <div>
            <h3
              class="font-family-barlow-condensed tracking-widest text-light-blue"
            >
              EST. TRAVEL TIME
            </h3>
            <p class="font-family-bellefair text-3xl uppercase">
              ${s.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  `})(t),crew:t=>(t=>{let s=e(B).crew.find(e=>e.name===t)||e(B).crew[0];return w`
    <div class="grid h-full items-center gap-8 lg:grid-cols-2">
      <div
        class="order-2 px-6 pt-32 text-center lg:order-1 lg:px-24 lg:text-left"
      >
        <h2
          class="font-family-barlow-condensed text-xl tracking-widest text-light-blue uppercase md:text-2xl"
        >
          <b>02</b> Meet your crew
        </h2>
        <h3
          class="my-4 font-family-bellefair text-4xl text-white/50 uppercase md:text-5xl"
        >
          ${s.role}
        </h3>
        <h1 class="my-4 font-family-bellefair text-5xl uppercase md:text-6xl">
          ${s.name}
        </h1>
        <p
          class="font-family-barlow text-base leading-relaxed text-light-blue md:text-lg"
        >
          ${s.bio}
        </p>
        <nav class="my-8 flex justify-center space-x-4 lg:justify-start">
          ${e(B).crew.map(e=>w`
              <a
                href=${`#crew/${e.name}`}
                class=${`w-4 h-4 rounded-full ${s.name===e.name?"bg-white":"bg-white/25"}`}
              ></a>
            `)}
        </nav>
      </div>
      <div class="order-1 flex items-center justify-center lg:order-2">
        <img
          src=${s.images.webp}
          alt=${s.name}
          class="w-3/4 md:w-1/2 lg:w-full"
        />
      </div>
    </div>
  `})(t),technology:e=>(e=>{let t=P.find(t=>t.name===e)||P[0];return w`
    <div class="grid h-full items-center gap-8 lg:grid-cols-2">
      <div
        class="order-2 px-6 pt-32 text-center lg:order-1 lg:px-24 lg:text-left"
      >
        <h2
          class="font-family-barlow-condensed text-xl tracking-widest text-light-blue uppercase md:text-2xl"
        >
          <b>03</b> Space launch 101
        </h2>
        <div class="flex flex-col items-center lg:flex-row">
          <nav
            class="my-8 flex justify-center space-x-4 lg:mr-8 lg:flex-col lg:justify-start lg:space-y-4 lg:space-x-0"
          >
            ${P.map((e,s)=>w`
                <a
                  href=${`#technology/${e.name}`}
                  class=${`flex h-16 w-16 items-center justify-center rounded-full font-family-bellefair text-2xl ${t.name===e.name?"bg-white text-dark-blue":"border border-white/25"}`}
                  >${s+1}</a
                >
              `)}
          </nav>
          <div>
            <h3
              class="my-4 font-family-barlow-condensed text-lg text-light-blue uppercase"
            >
              THE TERMINOLOGY…
            </h3>
            <h1
              class="my-4 font-family-bellefair text-5xl uppercase md:text-6xl"
            >
              ${t.name}
            </h1>
            <p
              class="font-family-barlow text-base leading-relaxed text-light-blue md:text-lg"
            >
              ${t.description}
            </p>
          </div>
        </div>
      </div>
      <div class="order-1 lg:order-2">
        <img
          src=${t.images.portrait}
          alt=${t.name}
          class="hidden w-full lg:block"
        />
        <img
          src=${t.images.landscape}
          alt=${t.name}
          class="w-full lg:hidden"
        />
      </div>
    </div>
  `})(e)},G=()=>{let e,[t,s]=window.location.hash.slice(1).split("/");((e,t,s)=>{let i=s?.renderBefore??t,a=i._$litPart$;if(void 0===a){let e=s?.renderBefore??null;i._$litPart$=a=new N(t.insertBefore(h(),e),e,void 0,s??{})}return a._$AI(e)})((e=(U[t]||D)(s?decodeURIComponent(s):void 0),w`
  <div
    class="${W[t]} flex h-screen flex-col bg-cover bg-center font-sans text-white"
  >
    <header
      class="flex items-center justify-between p-6 md:p-0 md:pt-10 md:pl-6"
    >
      <div class="flex-shrink-0">
        <img src="assets/shared/logo.svg" alt="Logo" class="h-10 w-10" />
      </div>

      <hr class="z-10 -mr-8 ml-12 hidden flex-grow border-white/25 lg:block" />

      <nav
        class="relative hidden h-24 items-center space-x-8 bg-white/5 px-12 text-lg text-white backdrop-blur-xl md:flex"
      >
        <a
          href="#"
          class="${""===t?"border-white":"border-transparent"} border-b-4 pb-8 hover:border-white/50"
          ><b>00</b> HOME</a
        >
        <a
          href="#destination"
          class="${t.startsWith("destination")?"border-white":"border-transparent"} border-b-4 pb-8 hover:border-white/50"
          ><b>01</b> DESTINATION</a
        >
        <a
          href="#crew"
          class="${t.startsWith("crew")?"border-white":"border-transparent"} border-b-4 pb-8 hover:border-white/50"
          ><b>02</b> CREW</a
        >
        <a
          href="#technology"
          class="${t.startsWith("technology")?"border-white":"border-transparent"} border-b-4 pb-8 hover:border-white/50"
          ><b>03</b> TECHNOLOGY</a
        >
      </nav>
      <div class="md:hidden">
        <button @click=${R}>
          <img src="assets/shared/icon-hamburger.svg" alt="Menu" />
        </button>
      </div>
    </header>
    <div
      id="mobile-menu"
      class="absolute top-0 right-0 hidden h-full w-64 bg-white/5 font-family-barlow-condensed text-xl tracking-widest text-white backdrop-blur-xl"
    >
      <button @click=${R} class="absolute top-8 right-6">
        <img src="assets/shared/icon-close.svg" alt="Close" />
      </button>
      <nav class="mt-32 ml-8 flex flex-col space-y-8">
        <a href="#"><b>00</b> HOME</a>
        <a href="#destination"><b>01</b> DESTINATION</a>
        <a href="#crew"><b>02</b> CREW</a>
        <a href="#technology"><b>03</b> TECHNOLOGY</a>
      </nav>
    </div>
    <main class="flex-grow">${e}</main>
  </div>
`),document.body)};window.onhashchange=G,G();
//# sourceMappingURL=gem-space.5c8d420b.js.map
