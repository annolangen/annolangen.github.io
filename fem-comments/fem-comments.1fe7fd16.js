let e;function t(e){return e&&e.__esModule?e.default:e}const s=globalThis,i=s.trustedTypes,n=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,r="$lit$",o=`lit$${Math.random().toFixed(9).slice(2)}$`,a="?"+o,l=`<${a}>`,d=document,c=()=>d.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,m=Array.isArray,p=e=>m(e)||"function"==typeof e?.[Symbol.iterator],u="[ 	\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$=/-->/g,A=/>/g,f=RegExp(`>|${u}(?:([^\\s"'>=/]+)(${u}*=${u}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,_=/"/g,x=/^(?:script|style|textarea|title)$/i,b=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),y=b(1),w=(b(2),b(3),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),N=new WeakMap,H=d.createTreeWalker(d,129);function k(e,t){if(!m(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(t):t}const C=(e,t)=>{let s=e.length-1,i=[],n,a=2===t?"<svg>":3===t?"<math>":"",d=g;for(let t=0;t<s;t++){let s=e[t],c,h,m=-1,p=0;for(;p<s.length&&(d.lastIndex=p,null!==(h=d.exec(s)));)p=d.lastIndex,d===g?"!--"===h[1]?d=$:void 0!==h[1]?d=A:void 0!==h[2]?(x.test(h[2])&&(n=RegExp("</"+h[2],"g")),d=f):void 0!==h[3]&&(d=f):d===f?">"===h[0]?(d=n??g,m=-1):void 0===h[1]?m=-2:(m=d.lastIndex-h[2].length,c=h[1],d=void 0===h[3]?f:'"'===h[3]?_:v):d===_||d===v?d=f:d===$||d===A?d=g:(d=f,n=void 0);let u=d===f&&e[t+1].startsWith("/>")?" ":"";a+=d===g?s+l:m>=0?(i.push(c),s.slice(0,m)+r+s.slice(m)+o+u):s+o+(-2===m?t:u)}return[k(e,a+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class E{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let l=0,d=0,h=e.length-1,m=this.parts,[p,u]=C(e,t);if(this.el=E.createElement(p,s),H.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=H.nextNode())&&m.length<h;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(r)){let t=u[d++],s=n.getAttribute(e).split(o),i=/([.?@])?(.*)/.exec(t);m.push({type:1,index:l,name:i[2],strings:s,ctor:"."===i[1]?U:"?"===i[1]?R:"@"===i[1]?j:D}),n.removeAttribute(e)}else e.startsWith(o)&&(m.push({type:6,index:l}),n.removeAttribute(e));if(x.test(n.tagName)){let e=n.textContent.split(o),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let s=0;s<t;s++)n.append(e[s],c()),H.nextNode(),m.push({type:2,index:++l});n.append(e[t],c())}}}else if(8===n.nodeType)if(n.data===a)m.push({type:2,index:l});else{let e=-1;for(;-1!==(e=n.data.indexOf(o,e+1));)m.push({type:7,index:l}),e+=o.length-1}l++}}static createElement(e,t){let s=d.createElement("template");return s.innerHTML=e,s}}function I(e,t,s=e,i){if(t===w)return t;let n=void 0!==i?s._$Co?.[i]:s._$Cl,r=h(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e))._$AT(e,s,i),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(t=I(e,n._$AS(e,t.values),n,i)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??d).importNode(t,!0);H.currentNode=i;let n=H.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new S(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new O(n,this,e)),this._$AV.push(t),a=s[++o]}r!==a?.index&&(n=H.nextNode(),r++)}return H.currentNode=d,i}p(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class S{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=I(this,e,t))?e===T||null==e||""===e?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==w&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):p(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(d.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=E.createElement(k(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new M(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=N.get(e.strings);return void 0===t&&N.set(e.strings,t=new E(e)),t}k(e){m(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let n of e)i===t.length?t.push(s=new S(this.O(c()),this.O(c()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(e,t=this,s,i){let n=this.strings,r=!1;if(void 0===n)(r=!h(e=I(this,e,t,0))||e!==this._$AH&&e!==w)&&(this._$AH=e);else{let i,o,a=e;for(e=n[0],i=0;i<n.length-1;i++)(o=I(this,a[s+i],t,i))===w&&(o=this._$AH[i]),r||=!h(o)||o!==this._$AH[i],o===T?e=T:e!==T&&(e+=(o??"")+n[i+1]),this._$AH[i]=o}r&&!i&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class U extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}class R extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}}class j extends D{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??T)===w)return;let s=this._$AH,i=e===T&&s!==T||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==T&&(s===T||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class O{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const B=s.litHtmlPolyfillSupport;B?.(E,S),(s.litHtmlVersions??=[]).push("3.3.1");const{I:G}={M:r,P:o,A:a,C:1,L:C,R:M,D:p,V:I,I:S,H:D,N:R,U:j,B:U,F:O};class P{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const L=(e,t)=>{let s=e._$AN;if(void 0===s)return!1;for(let e of s)e._$AO?.(t,!1),L(e,t);return!0},W=e=>{let t,s;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===s?.size)},q=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),J(t)}};function V(e){void 0!==this._$AN?(W(this),this._$AM=e,q(this)):this._$AM=e}function z(e,t=!1,s=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let e=s;e<i.length;e++)L(i[e],!1),W(i[e]);else null!=i&&(L(i,!1),W(i));else L(this,e)}const J=e=>{2==e.type&&(e._$AP??=z,e._$AQ??=V)};class Y extends P{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),q(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(L(this,e),W(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const F=()=>new Z;class Z{}const Q=new WeakMap,K=(e=class extends Y{render(e){return T}update(e,[t]){let s=t!==this.G;return s&&void 0!==this.G&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),T}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,s=Q.get(t);void 0===s&&(s=new WeakMap,Q.set(t,s)),void 0!==s.get(this.G)&&this.G.call(this.ht,void 0),s.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?Q.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}},(...t)=>({_$litDirective$:e,values:t}));var X={};X=JSON.parse('{"currentUser":{"image":{"png":"./images/avatars/image-juliusomo.png","webp":"./images/avatars/image-juliusomo.webp"},"username":"juliusomo"},"comments":[{"id":1,"content":"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.","createdAt":"1 month ago","score":12,"user":{"image":{"png":"./images/avatars/image-amyrobson.png","webp":"./images/avatars/image-amyrobson.webp"},"username":"amyrobson"},"replies":[]},{"id":2,"content":"Woah, your project looks awesome! How long have you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!","createdAt":"2 weeks ago","score":5,"user":{"image":{"png":"./images/avatars/image-maxblagun.png","webp":"./images/avatars/image-maxblagun.webp"},"username":"maxblagun"},"replies":[{"id":3,"content":"If you\'re still new, I\'d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It\'s very tempting to jump ahead but lay a solid foundation first.","createdAt":"1 week ago","score":4,"replyingTo":"maxblagun","user":{"image":{"png":"./images/avatars/image-ramsesmiron.png","webp":"./images/avatars/image-ramsesmiron.webp"},"username":"ramsesmiron"}},{"id":4,"content":"I couldn\'t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.","createdAt":"2 days ago","score":2,"replyingTo":"ramsesmiron","user":{"image":{"png":"./images/avatars/image-juliusomo.png","webp":"./images/avatars/image-juliusomo.webp"},"username":"juliusomo"}}]}]}');const ee=[{name:"year",secs:31536e3},{name:"month",secs:2592e3},{name:"week",secs:604800},{name:"day",secs:86400},{name:"hour",secs:3600},{name:"minute",secs:60},{name:"second",secs:1}],et=(e,t)=>e.reduce((e,t)=>Math.max(e,et(t.replies||[],t.id)),t);function es(){let e={...t(X),nextId:et(t(X).comments||[],0)+1};return function e(t){for(let s of t){if(!s.createdAtTs){let{ts:e,expiration:t}=function(e){let t=Date.now(),s=e.match(/(\d+)\s(\w+)/);if(s){let e=parseInt(s[1],10),i=s[2];for(let{name:s,secs:n}of ee)if(i.startsWith(s))return{ts:t-e*n*1e3,expiration:t+1e3*n}}return{ts:t,expiration:t+1e3}}(s.createdAt);s.createdAtTs=e,s.createdAtTextExpiration=t}e(s.replies||[])}}(e.comments),e}const ei=()=>localStorage.setItem("commentState",JSON.stringify(en)),en="#reset"===window.location.hash?es():function(){let e=localStorage.getItem("commentState");if(e){let t=JSON.parse(e);return t.nextId=et(t.comments||[],0)+1,t}return es()}();function er(){en.requestedDelete&&(!function e(t,s){let i=t.findIndex(e=>e.id===s);if(i>-1)return t.splice(i,1),!0;for(let i of t)if(e(i.replies||[],s))return!0;return!1}(en.comments,en.requestedDelete),en.requestedDelete=null,ei())}const eo=e=>({id:en.nextId++,content:e,user:en.currentUser,createdAt:"now",createdAtTs:Date.now(),createdAtTextExpiration:Date.now()+1e3,score:0}),ea=e=>{en.comments.push(eo(e)),ei()},el=(e,t,s=F())=>y`
  <form
    class="mx-auto flex w-full flex-wrap items-start justify-between gap-2 rounded-md bg-white p-4 md:w-full md:max-w-2xl"
    @submit=${e=>{e.preventDefault(),t(s.value.value),s.value.value="",ec()}}
    aria-label="Add a comment"
  >
    <div class="w-full md:order-2 md:w-auto md:flex-grow-2">
      <label for="comment-textarea" class="sr-only">Add a comment</label>
      <textarea
        id="comment-textarea"
        ${K(s)}
        name="comment"
        placeholder="Add a comment..."
        class="border-grey-100 h-20 w-full rounded-lg border-1 px-6 py-2"
        aria-label="Comment text"
      ></textarea>
    </div>
    <img
      class="h-9 w-9 max-w-1/2 md:order-1"
      src=${en.currentUser.image.png}
      alt="Your profile picture"
    />
    <div class="max-w-1/2 md:order-3">
      <button
        type="submit"
        class="h-12 rounded-lg bg-purple-600 px-8 text-lg font-medium text-white hover:bg-purple-200 md:h-10 md:px-6"
      >
        ${e}
      </button>
    </div>
  </form>
`,ed=e=>y`
  <article class="comment">
    ${e.pendingReply?el("REPLY",t=>{e.content=t,e.pendingReply=!1,ei()}):y`<div
        class="mx-auto grid w-full grid-cols-12 items-center gap-2 rounded-md bg-white p-4 md:max-w-2xl"
      >
        <img
          class="col-span-2 h-4/5 md:col-span-1 md:col-start-2 md:row-start-1"
          src=${e.user.image.png}
          alt=""
        />
        <div
          class="col-span-5 font-bold md:col-span-3 md:col-start-3 md:row-start-1"
        >
          ${e.user.username}
          ${en.currentUser.username===e.user.username?y` <span
                class="text-grey-100 cursor-not-allowed rounded-xs bg-purple-600 px-1 pt-0.5 pb-1 text-sm leading-none font-bold"
              >
                you
              </span>`:null}
        </div>
        <div
          class="text-grey-500 col-span-5 col-start-8 content-center md:col-span-3 md:col-start-6"
        >
          ${function(e){let t=Date.now();if(e.createdAtTs&&e.createdAtTextExpiration&&t>e.createdAtTextExpiration){let s=Math.max(0,Math.floor((t-e.createdAtTs)/1e3));for(let{name:i,secs:n}of ee){let r=Math.floor(s/n);if(r>=1){e.createdAt=`${r} ${i}${r>1?"s":""} ago`,e.createdAtTextExpiration=t+1e3*n;break}}}return e.createdAt}(e)}
        </div>
        ${((e,t=F(),s=e.replyingTo?`@${e.replyingTo} `:"")=>e.pendingEdit?y`<textarea
          name="comment"
          ${K(t)}
          class="border-grey-100 text-grey-500 col-span-12 row-start-2 mb-2 h-20 w-full rounded-lg border-1 px-6 py-2 md:col-span-11 md:col-start-2"
        >
${s}${e.content}
        </textarea
        >
        <div
          class="col-span-12 row-start-4 flex flex-row justify-end md:col-span-11 md:col-start-2 md:row-start-3"
        >
          <button
            @click=${()=>{e.content=t.value.value.replace(s,""),e.pendingEdit=!1}}
            class="h-12 rounded-lg bg-purple-600 px-8 text-lg font-medium text-white hover:bg-purple-200 md:h-10 md:px-6"
          >
            UPDATE
          </button>
        </div>`:y`<div
        class="text-grey-500 col-span-12 row-start-2 mb-2 md:col-span-11 md:col-start-2"
      >
        ${e.replyingTo?y`<span class="font-bold text-purple-600">
              @${e.replyingTo}
            </span>`:null}
        ${e.content}
      </div>`)(e)}
        <div
          class="col-span-5 row-start-3 md:col-start-1 md:row-span-2 md:row-start-1 md:self-start"
        >
          ${y`
  <span
    class="bg-grey-100 rounded-md px-4 py-2 font-medium text-purple-600 hover:text-purple-200 md:flex md:h-20 md:w-8 md:flex-col md:items-center md:gap-2 md:p-0 md:pt-2"
  >
    <button
      aria-label="Upvote comment"
      class="inline"
      @click=${()=>{e.score++,ei()}}
    >
      <img src="./images/icon-plus.svg" alt="plus" />
    </button>
    <span class="px-2" aria-live="polite">${e.score}</span>
    <button
      aria-label="Downvote comment"
      class="inline"
      @click=${()=>{e.score--,ei()}}
    >
      <img src="./images/icon-minus.svg" class="inline" alt="minus" />
    </button>
  </span>
`}
        </div>
        <div
          class="col-span-7 col-start-6 mb-2 text-right md:col-start-9 md:row-start-1"
        >
          ${en.currentUser.username===e.user.username?y`
        <button
          ?disabled=${e.pendingEdit}
          class="px-2 font-medium text-pink-400 hover:text-pink-200 disabled:cursor-not-allowed disabled:opacity-50"
          @click=${()=>en.requestedDelete=e.id}
        >
          <span
            ><img class="inline pr-1" src="./images/icon-delete.svg" />
            Delete</span
          >
        </button>
        <button
          ?disabled=${e.pendingEdit}
          class="px-2 font-medium text-purple-600 hover:text-purple-200 disabled:cursor-not-allowed disabled:opacity-50"
          @click=${()=>e.pendingEdit=!0}
        >
          <span
            ><img class="inline pr-1" src="./images/icon-edit.svg" /> Edit</span
          >
        </button>
      `:y`
        <button
          @click=${()=>(e.replies??=[]).push({...eo(""),replyingTo:e.user.username,pendingReply:!0})}
          ?disabled=${(e.replies??[]).some(e=>e.pendingReply)}
          class="px-2 font-medium text-purple-600 hover:text-purple-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span
            ><img class="inline pr-1" src="./images/icon-reply.svg" />
            Reply</span
          >
        </button>
      `}
        </div>
      </div> `}
    <aside
      class="border-grey-100 mx-auto flex flex-col gap-2 border-l-2 pl-4 md:max-w-2xl"
      aria-label="Replies"
    >
      ${(e.replies||[]).map(ed)}
    </aside>
  </article>
`,ec=()=>((e,t,s)=>{let i=s?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=s?.renderBefore??null;i._$litPart$=n=new S(t.insertBefore(c(),e),e,void 0,s??{})}return n._$AI(e),n})(y` <section
    class="bg-grey-50 flex min-h-screen flex-col gap-2 p-4"
    aria-label="Comments section"
  >
    ${en.comments.map(ed)} ${el("SEND",ea)}
    ${en.requestedDelete?y`
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    role="dialog"
    aria-modal="true"
    aria-labelledby="delete-title"
    aria-describedby="delete-desc"
  >
    <div class="mx-4 max-w-sm rounded-lg bg-white p-6">
      <h2 id="delete-title" class="text-grey-800 text-2xl font-bold">
        Delete comment
      </h2>
      <p id="delete-desc" class="text-grey-500 my-4">
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </p>
      <div class="grid grid-cols-2 gap-4 font-medium">
        <button
          @click=${()=>en.requestedDelete=null}
          class="bg-grey-500 rounded-lg py-3 text-white hover:opacity-50"
        >
          NO, CANCEL
        </button>
        <button
          @click=${er}
          class="rounded-lg bg-pink-400 py-3 text-white hover:opacity-50"
        >
          YES, DELETE
        </button>
      </div>
    </div>
  </div>
`:null}
  </section>`,document.body);window.onclick=window.oninput=ec,ec(),setInterval(ec,1e3);
//# sourceMappingURL=fem-comments.1fe7fd16.js.map
