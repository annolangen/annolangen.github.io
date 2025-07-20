const t=globalThis,e=t.trustedTypes,i=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,s="$lit$",r=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+r,o=`<${n}>`,l=document,a=()=>l.createComment(""),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,d="[ 	\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,u=/>/g,A=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,_=/"/g,m=/^(?:script|style|textarea|title)$/i,v=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),f=v(1),x=(v(2),v(3),Symbol.for("lit-noChange")),y=Symbol.for("lit-nothing"),w=new WeakMap,b=l.createTreeWalker(l,129);function H(t,e){if(!c(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(e):e}class T{constructor({strings:t,_$litType$:i},l){let h;this.parts=[];let c=0,d=0,v=t.length-1,f=this.parts,[x,y]=((t,e)=>{let i=t.length-1,n=[],l,a=2===e?"<svg>":3===e?"<math>":"",h=$;for(let e=0;e<i;e++){let i=t[e],c,d,v=-1,f=0;for(;f<i.length&&(h.lastIndex=f,null!==(d=h.exec(i)));)f=h.lastIndex,h===$?"!--"===d[1]?h=p:void 0!==d[1]?h=u:void 0!==d[2]?(m.test(d[2])&&(l=RegExp("</"+d[2],"g")),h=A):void 0!==d[3]&&(h=A):h===A?">"===d[0]?(h=l??$,v=-1):void 0===d[1]?v=-2:(v=h.lastIndex-d[2].length,c=d[1],h=void 0===d[3]?A:'"'===d[3]?_:g):h===_||h===g?h=A:h===p||h===u?h=$:(h=A,l=void 0);let x=h===A&&t[e+1].startsWith("/>")?" ":"";a+=h===$?i+o:v>=0?(n.push(c),i.slice(0,v)+s+i.slice(v)+r+x):i+r+(-2===v?e:x)}return[H(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]})(t,i);if(this.el=T.createElement(x,l),b.currentNode=this.el.content,2===i||3===i){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(h=b.nextNode())&&f.length<v;){if(1===h.nodeType){if(h.hasAttributes())for(let t of h.getAttributeNames())if(t.endsWith(s)){let e=y[d++],i=h.getAttribute(t).split(r),s=/([.?@])?(.*)/.exec(e);f.push({type:1,index:c,name:s[2],strings:i,ctor:"."===s[1]?E:"?"===s[1]?I:"@"===s[1]?V:S}),h.removeAttribute(t)}else t.startsWith(r)&&(f.push({type:6,index:c}),h.removeAttribute(t));if(m.test(h.tagName)){let t=h.textContent.split(r),i=t.length-1;if(i>0){h.textContent=e?e.emptyScript:"";for(let e=0;e<i;e++)h.append(t[e],a()),b.nextNode(),f.push({type:2,index:++c});h.append(t[i],a())}}}else if(8===h.nodeType)if(h.data===n)f.push({type:2,index:c});else{let t=-1;for(;-1!==(t=h.data.indexOf(r,t+1));)f.push({type:7,index:c}),t+=r.length-1}c++}}static createElement(t,e){let i=l.createElement("template");return i.innerHTML=t,i}}function C(t,e,i=t,s){if(e===x)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl,n=h(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=C(t,r._$AS(t,e.values),r,s)),e}class N{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??l).importNode(e,!0);b.currentNode=s;let r=b.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new M(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new D(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=b.nextNode(),n++)}return b.currentNode=l,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){let i;h(t=C(this,t,e))?t===y||null==t||""===t?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==x&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c(i=t)||"function"==typeof i?.[Symbol.iterator]?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&h(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=T.createElement(H(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new N(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=w.get(t.strings);return void 0===e&&w.set(t.strings,e=new T(t)),e}k(t){c(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new M(this.O(a()),this.O(a()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!h(t=C(this,t,e,0))||t!==this._$AH&&t!==x)&&(this._$AH=t);else{let s,o,l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=C(this,l[i+s],e,s))===x&&(o=this._$AH[s]),n||=!h(o)||o!==this._$AH[s],o===y?t=y:t!==y&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class E extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class I extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class V extends S{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??y)===x)return;let i=this._$AH,s=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==y&&(i===y||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const k=t.litHtmlPolyfillSupport;k?.(T,M),(t.litHtmlVersions??=[]).push("3.3.0");var B,R,P=((B=P||{})[B.RAW=0]="RAW",B[B.TABLE=1]="TABLE",B),U=((R=U||{})[R.ASC=0]="ASC",R[R.DESC=1]="DESC",R);const W=[{name:"Priority",accessor:t=>t.priority},{name:"Completion Date",accessor:t=>t.completionDate},{name:"Creation Date",accessor:t=>t.creationDate},{name:"Description",accessor:t=>z(t)}],L={rawText:localStorage.getItem("todo.txt")||"",toHighlight:"",currentView:0,tags:[],order:function t(){let e=null,i=t=>(e&&e.length===t.length||(e=Array.from({length:t.length},(t,e)=>e)),e),s=(r,n,o)=>{if(n<0||n>=W.length)return t();e=Array.from({length:r.length},(t,e)=>e);let l=3===n?t=>t.description:W[n].accessor,a=(t,e)=>(l(r[t])||"").localeCompare(l(r[e])||"");return e.sort(1===o?(t,e)=>a(e,t):a),{column:n,direction:o,permutation:i,reorder:s}};return{direction:0,permutation:i,reorder:s}}(),isMobileView:window.matchMedia("(max-width: 768px)").matches};function O(t){let e=t.currentTarget,i=""===L.rawText;L.rawText=e.value,i&&""!==L.rawText&&(localStorage.setItem("todo.txt",L.rawText),0===L.currentView&&(L.currentView=1))}function z(t){let e,{description:i}=t,s=/([+@][a-zA-Z0-9-]+|[a-zA-Z0-9-]+:[a-zA-Z0-9-]+)/g,r=[],n=0;for(;null!==(e=s.exec(i));){e.index>n&&r.push(i.slice(n,e.index));let t=e[0];r.push(f`<a
        @mouseover=${()=>{L.toHighlight=t,F()}}
        @mouseout=${()=>{L.toHighlight="",F()}}
        @click=${()=>{L.tags.push(t),L.toHighlight=""}}
        style="cursor: pointer; ${L.toHighlight===t?"background-color: #FFFF00;":""}"
        >${t}</a
      >`),n=s.lastIndex}return n<i.length&&r.push(i.slice(n)),r}function Z(t){let e=t,i=/^(x?)/.exec(t);t=t.slice(i[0].length);let s=/^ *(?:\(([A-Z])\))?/.exec(t);t=t.slice(s[0].length);let r=/^ *(\d{4}-\d{2}-\d{2})?/.exec(t);t=t.slice(r[0].length);let n=/^ *(\d{4}-\d{2}-\d{2})?/.exec(t);t=t.slice(n[0].length);let o=/^ *(.*)/.exec(t);return{raw:e,isComplete:"x"===i[1],priority:s[1]||void 0,completionDate:r[1]||void 0,creationDate:n[1]||void 0,description:o[1]}}const j=document.getElementById("app")||document.body,F=()=>((t,e,i)=>{let s=i?.renderBefore??e,r=s._$litPart$;if(void 0===r){let t=i?.renderBefore??null;s._$litPart$=r=new M(e.insertBefore(a(),t),t,void 0,i??{})}return r._$AI(t),r})(f`<section class="section">
    <div class="container">
      <div class="box">
        <h1 class="title">Todo.txt Viewer</h1>
        <div class="tags">
          ${L.tags.map(t=>f`<span class="tag is-rounded">
                ${t}
                <button
                  class="delete"
                  @click=${()=>L.tags=L.tags.filter(e=>e!==t)}
                ></button>
              </span>`)}
        </div>
        ${""===L.rawText?f`<p class="subtitle">
              Paste the contents of your <code>todo.txt</code> file into the
              area of the Raw Text tab.
            </p>`:""}
        <div class="tabs">
          <ul>
            <li class=${0===L.currentView?"is-active":""}>
              <a @click=${()=>L.currentView=0}>Raw Text</a>
            </li>
            <li class=${1===L.currentView?"is-active":""}>
              <a @click=${()=>L.currentView=1}>Table</a>
            </li>
          </ul>
        </div>
        ${0===L.currentView?f`<div class="field">
              <div class="control">
                <textarea
                  class="textarea is-family-monospace"
                  @input=${O}
                  rows="15"
                  placeholder="e.g., (A) Buy milk +groceries @store"
                  .value=${L.rawText}
                ></textarea>
              </div>
            </div>`:L.isMobileView?f`<div class="field">${function(t){let e=t.split("\n").map(t=>Z(t));return f` <div class="field has-addons">
      <div class="control">
        <div class="select">
          <select
            @change=${function(t){let i=parseInt(t.currentTarget.value,10);L.order=L.order.reorder(e,i,L.order.direction)}}
            .value=${(L.order.column??-1).toString()}
          >
            <option value="-1" disabled>Sort by</option>
            ${W.map((t,e)=>f`<option value=${e}>${t.name}</option>`)}
          </select>
        </div>
      </div>
      <div class="control">
        <button class="button" @click=${function(){let t=+(0===L.order.direction);L.order=L.order.reorder(e,L.order.column??0,t)}}>
          ${0===L.order.direction?"⬆":"⬇"}
        </button>
      </div>
    </div>
    ${L.order.permutation(e).map(t=>(function(t){let{isComplete:e,priority:i,completionDate:s,creationDate:r}=t;return f`<div
    class="card mb-3"
    style=${e?"text-decoration: line-through; opacity: 0.6;":""}
  >
    <div class="card-content py-3 px-4">
      <div class="content">
        <p class="mb-2">${z(t)}</p>
        <div class="tags">
          ${i?f`<span class="tag is-warning is-light">P: ${i}</span>`:""}
          ${r?f`<span class="tag is-info is-light"
                >Created: ${r}</span
              >`:""}
          ${s?f`<span class="tag is-success is-light"
                >Completed: ${s}</span
              >`:""}
        </div>
      </div>
    </div>
  </div>`})(e[t]))}`}(L.rawText)}</div>`:f`<div class="field">${function(t){let e=t.split("\n").map(t=>Z(t));return f`<table class="table is-fullwidth is-hoverable is-striped">
    <thead>
      <tr>
        ${W.map(({name:t},i)=>f`<th @click=${()=>{L.order=L.order.reorder(e,i,+(L.order.column===i&&0===L.order.direction))}} style="cursor: pointer;">
              ${t}
            </th>`)}
      </tr>
    </thead>
    <tbody>
      ${L.order.permutation(e).filter(t=>L.tags.reduce((i,s)=>i&&e[t].description.includes(s),!0)).map(t=>f`<tr
              style=${e[t].isComplete?"text-decoration: line-through":""}
            >
              ${W.map(i=>f`<td>${i.accessor(e[t])}</td>`)}
            </tr>`)}
    </tbody>
  </table>`}(L.rawText)}</div>`}
      </div>
    </div>
  </section>`,j);window.onclick=window.oninput=window.onhashchange=F,window.onresize=()=>{L.isMobileView=window.matchMedia("(max-width: 768px)").matches,F()},F();
//# sourceMappingURL=todotxt.9061b6fc.js.map
