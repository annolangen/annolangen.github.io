var t;let e,i;const s=window,n=s.trustedTypes,l=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",r=`lit$${(Math.random()+"").slice(9)}$`,a="?"+r,h=`<${a}>`,d=document,c=()=>d.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),p="[ 	\n\f\r]",A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,g=/>/g,m=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),f=/'/g,y=/"/g,b=/^(?:script|style|textarea|title)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),x=H(1),w=(H(2),Symbol.for("lit-noChange")),N=Symbol.for("lit-nothing"),T=new WeakMap,k=d.createTreeWalker(d,129,null,!1);function C(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==l?l.createHTML(e):e}const S=(t,e)=>{let i=t.length-1,s=[],n,l=2===e?"<svg>":"",a=A;for(let e=0;e<i;e++){let i=t[e],d,c,$=-1,u=0;for(;u<i.length&&(a.lastIndex=u,null!==(c=a.exec(i)));)u=a.lastIndex,a===A?"!--"===c[1]?a=_:void 0!==c[1]?a=g:void 0!==c[2]?(b.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=m):void 0!==c[3]&&(a=m):a===m?">"===c[0]?(a=null!=n?n:A,$=-1):void 0===c[1]?$=-2:($=a.lastIndex-c[2].length,d=c[1],a=void 0===c[3]?m:'"'===c[3]?y:f):a===y||a===f?a=m:a===_||a===g?a=A:(a=m,n=void 0);let v=a===m&&t[e+1].startsWith("/>")?" ":"";l+=a===A?i+h:$>=0?(s.push(d),i.slice(0,$)+o+i.slice($)+r+v):i+r+(-2===$?(s.push(void 0),e):v)}return[C(t,l+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let l=0,h=0,d=t.length-1,$=this.parts,[u,v]=S(t,e);if(this.el=M.createElement(u,i),k.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=k.nextNode())&&$.length<d;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(o)||e.startsWith(r)){let i=v[h++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+o).split(r),e=/([.?@])?(.*)/.exec(i);$.push({type:1,index:l,name:e[2],strings:t,ctor:"."===e[1]?R:"?"===e[1]?D:"@"===e[1]?L:P})}else $.push({type:6,index:l})}for(let e of t)s.removeAttribute(e)}if(b.test(s.tagName)){let t=s.textContent.split(r),e=t.length-1;if(e>0){s.textContent=n?n.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],c()),k.nextNode(),$.push({type:2,index:++l});s.append(t[e],c())}}}else if(8===s.nodeType){if(s.data===a)$.push({type:2,index:l});else{let t=-1;for(;-1!==(t=s.data.indexOf(r,t+1));)$.push({type:7,index:l}),t+=r.length-1}}l++}}static createElement(t,e){let i=d.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,s){var n,l,o;if(e===w)return e;let r=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl,a=$(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==a&&(null===(l=null==r?void 0:r._$AO)||void 0===l||l.call(r,!1),void 0===a?r=void 0:(r=new a(t))._$AT(t,i,s),void 0!==s?(null!==(o=i._$Co)&&void 0!==o?o:i._$Co=[])[s]=r:i._$Cl=r),void 0!==r&&(e=I(t,r._$AS(t,e.values),r,s)),e}class E{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(i,!0);k.currentNode=n;let l=k.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new B(l,l.nextSibling,this,t):1===a.type?e=new a.ctor(l,a.name,a.strings,this,t):6===a.type&&(e=new z(l,this,t)),this._$AV.push(e),a=s[++r]}o!==(null==a?void 0:a.index)&&(l=k.nextNode(),o++)}return k.currentNode=d,n}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){$(t=I(this,t,e))?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==N&&$(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{let t=new E(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new M(t)),e}T(t){u(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new B(this.k(c()),this.k(c()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class P{constructor(t,e,i,s,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let n=this.strings,l=!1;if(void 0===n)(l=!$(t=I(this,t,e,0))||t!==this._$AH&&t!==w)&&(this._$AH=t);else{let s,o;let r=t;for(t=n[0],s=0;s<n.length-1;s++)(o=I(this,r[i+s],e,s))===w&&(o=this._$AH[s]),l||(l=!$(o)||o!==this._$AH[s]),o===N?t=N:t!==N&&(t+=(null!=o?o:"")+n[s+1]),this._$AH[s]=o}l&&!s&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const U=n?n.emptyScript:"";class D extends P{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,U):this.element.removeAttribute(this.name)}}class L extends P{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:N)===w)return;let s=this._$AH,n=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,l=t!==N&&(s===N||n);n&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const j=s.litHtmlPolyfillSupport;null==j||j(M,B),(null!==(t=s.litHtmlVersions)&&void 0!==t?t:s.litHtmlVersions=[]).push("2.8.0");const O=(t,e,i)=>{var s,n;let l=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,o=l._$litPart$;if(void 0===o){let t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;l._$litPart$=o=new B(e.insertBefore(c(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o};let V=!1,W=!1;const q=t=>t?x`
        <table>
          <tr>
            <th>Name</th>
            <th>ID</th>
          </tr>
          ${t.map(t=>x`<tr>
                <td>${t.name}</td>
                <td>${t.id}</td>
              </tr>`)}
        </table>
      `:"";let Y=!1;function Z(){!e&&!i&&W&&V&&X(),O(x`
      <nav class="main-nav navbar is-light">
        <div class="container">
          <div class="navbar-brand">
            <a
              class="navbar-burger ${Y?"":"is-active"}"
              @click=${Y=!Y}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div class="navbar-end navbar-menu ${Y?"is-active":""}">
            <a class="navbar-item button is-text" @click=${G}>
              ${W?"Refresh Sign-in":"Sign in"}
            </a>
            <a
              class="navbar-item button is-text"
              ?disabled=${!W}
              @click=${K}
            >
              Sign out
            </a>
          </div>
        </div>
      </nav>
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column">
          <section class="section">
            <h1 class="title">Todo</h1>
            <hr />
            <div class="content">
              ${i?x`<h5>Files:</h5>`:""}
              ${i?q(i.result.files):""}
              ${W?"":"Please sign in to see files."}
            </div>
          </section>
        </div>
      </div>
    `,document.body)}const F=google.accounts.oauth2.initTokenClient({client_id:"911301528634-t24naf0gh17r0cviru6k30d1oh37htuc.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive.metadata.readonly",callback:t=>{if(void 0!==t.error)throw t;W=!0,Z()}});function G(){null===gapi.client.getToken()?F.requestAccessToken({prompt:"consent"}):F.requestAccessToken({prompt:""})}function K(){let t=gapi.client.getToken();null!==t&&(google.accounts.oauth2.revoke(t.access_token,()=>{W=!1,Z()}),gapi.client.setToken(null))}async function X(){e=gapi.client.drive.files.list({pageSize:10,fields:"files(id, name)"}),i=await e,e=void 0,Z()}gapi.load("client",async()=>{await gapi.client.init({apiKey:"AIzaSyDz8AXBiObcgf8uz0uc5lOmtG9YLyYAyM4",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]}),V=!0,Z()}),window.onclick=Z,Z();
//# sourceMappingURL=index.a21a5846.js.map
