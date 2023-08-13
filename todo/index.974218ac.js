var t;let e,i,s;const n=window,o=n.trustedTypes,l=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,r="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,h="?"+a,c=`<${h}>`,d=document,$=()=>d.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,p=t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),_="[ 	\n\f\r]",A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,m=/>/g,f=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,x=/"/g,b=/^(?:script|style|textarea|title)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),w=H(1),N=(H(2),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),S=new WeakMap,T=d.createTreeWalker(d,129,null,!1);function I(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==l?l.createHTML(e):e}const C=(t,e)=>{let i=t.length-1,s=[],n,o=2===e?"<svg>":"",l=A;for(let e=0;e<i;e++){let i=t[e],h,d,$=-1,u=0;for(;u<i.length&&(l.lastIndex=u,null!==(d=l.exec(i)));)u=l.lastIndex,l===A?"!--"===d[1]?l=g:void 0!==d[1]?l=m:void 0!==d[2]?(b.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=f):void 0!==d[3]&&(l=f):l===f?">"===d[0]?(l=null!=n?n:A,$=-1):void 0===d[1]?$=-2:($=l.lastIndex-d[2].length,h=d[1],l=void 0===d[3]?f:'"'===d[3]?x:y):l===x||l===y?l=f:l===g||l===m?l=A:(l=f,n=void 0);let v=l===f&&t[e+1].startsWith("/>")?" ":"";o+=l===A?i+c:$>=0?(s.push(h),i.slice(0,$)+r+i.slice($)+a+v):i+a+(-2===$?(s.push(void 0),e):v)}return[I(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,l=0,c=t.length-1,d=this.parts,[u,v]=C(t,e);if(this.el=M.createElement(u,i),T.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=T.nextNode())&&d.length<c;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(r)||e.startsWith(a)){let i=v[l++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+r).split(a),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?P:"?"===e[1]?z:"@"===e[1]?L:U})}else d.push({type:6,index:n})}for(let e of t)s.removeAttribute(e)}if(b.test(s.tagName)){let t=s.textContent.split(a),e=t.length-1;if(e>0){s.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],$()),T.nextNode(),d.push({type:2,index:++n});s.append(t[e],$())}}}else if(8===s.nodeType){if(s.data===h)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(a,t+1));)d.push({type:7,index:n}),t+=a.length-1}}n++}}static createElement(t,e){let i=d.createElement("template");return i.innerHTML=t,i}}function E(t,e,i=t,s){var n,o,l;if(e===N)return e;let r=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl,a=u(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==a&&(null===(o=null==r?void 0:r._$AO)||void 0===o||o.call(r,!1),void 0===a?r=void 0:(r=new a(t))._$AT(t,i,s),void 0!==s?(null!==(l=i._$Co)&&void 0!==l?l:i._$Co=[])[s]=r:i._$Cl=r),void 0!==r&&(e=E(t,r._$AS(t,e.values),r,s)),e}class D{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(i,!0);T.currentNode=n;let o=T.nextNode(),l=0,r=0,a=s[0];for(;void 0!==a;){if(l===a.index){let e;2===a.type?e=new B(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new O(o,this,t)),this._$AV.push(e),a=s[++r]}l!==(null==a?void 0:a.index)&&(o=T.nextNode(),l++)}return T.currentNode=d,n}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){u(t=E(this,t,e))?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==N&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):p(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(I(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{let t=new D(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=S.get(t.strings);return void 0===e&&S.set(t.strings,e=new M(t)),e}T(t){v(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new B(this.k($()),this.k($()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,i,s,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let n=this.strings,o=!1;if(void 0===n)(o=!u(t=E(this,t,e,0))||t!==this._$AH&&t!==N)&&(this._$AH=t);else{let s,l;let r=t;for(t=n[0],s=0;s<n.length-1;s++)(l=E(this,r[i+s],e,s))===N&&(l=this._$AH[s]),o||(o=!u(l)||l!==this._$AH[s]),l===k?t=k:t!==k&&(t+=(null!=l?l:"")+n[s+1]),this._$AH[s]=l}o&&!s&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class P extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const R=o?o.emptyScript:"";class z extends U{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class L extends U{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=E(this,t,e,0))&&void 0!==i?i:k)===N)return;let s=this._$AH,n=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==k&&(s===k||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class O{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const V=n.litHtmlPolyfillSupport;null==V||V(M,B),(null!==(t=n.litHtmlVersions)&&void 0!==t?t:n.litHtmlVersions=[]).push("2.8.0");const j=(t,e,i)=>{var s,n;let o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,l=o._$litPart$;if(void 0===l){let t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=l=new B(e.insertBefore($(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l};let W=!1;const Z=function(t="https://www.googleapis.com/auth/drive"){let e=JSON.parse(localStorage.getItem("oauthToken")||"{}"),i=google.accounts.oauth2.initTokenClient({client_id:"911301528634-t24naf0gh17r0cviru6k30d1oh37htuc.apps.googleusercontent.com",scope:t,callback:t=>{if(void 0!==t.error)throw t;e={access_token:t.access_token,expiration:parseFloat(t.expires_in)-1+Date.now()/1e3},localStorage.setItem("oauthToken",JSON.stringify(e)),K()}});function s(){i.requestAccessToken({prompt:e.access_token?"":"consent"})}return gapi.load("client",async()=>{e.access_token&&e.expiration&&Date.now()/1e3<e.expiration&&(gapi.client.setToken({access_token:e.access_token}),K())}),{state:()=>e.expiration?e.expiration>Date.now()/1e3?"valid":"expired":"none",signIn:s,refresh:s,signOut(){e.access_token&&google.accounts.oauth2.revoke(e.access_token,()=>{}),e={},localStorage.removeItem("oauthToken")}}}(),q=(s=!1,()=>w`<nav class="main-nav navbar is-light">
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-burger ${s?"":"is-active"}"
            @click=${s=!s}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div class="navbar-end navbar-menu ${s?"is-active":""}">
          <a
            class="navbar-item button is-text is-size-3-touch"
            @click=${Z.signIn}
          >
            ${"valid"==Z.state()?"Refresh Sign-in":"Sign in"}
          </a>
          <a
            class="navbar-item button is-text is-size-3-touch"
            ?disabled=${"none"===Z.state()}
            @click=${Z.signOut}
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>`),F=()=>!e&&!i&&"valid"==Z.state()&&W,J=t=>t?w`
        <table>
          <tr>
            <th>Name</th>
            <th>ID</th>
          </tr>
          ${t.map(t=>w`<tr>
                <td>${t.name}</td>
                <td>${t.id}</td>
              </tr>`)}
        </table>
      `:"";function K(){F()&&Y(),j(w`
      ${q()}
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column">
          <section class="section">
            <h1 class="title is-size-1-touch">Todo</h1>
            <hr />
            <div class="content">
              ${i?w`<h5>Files:</h5>`:""}
              ${i?J(i.result.files):""}
              ${"valid"===Z.state()?"":"Please sign in to see files."}
            </div>
          </section>
        </div>
      </div>
    `,document.body)}async function Y(){e=gapi.client.drive.files.list({pageSize:10,fields:"files(id, name)"}),i=await e,e=void 0,K()}gapi.load("client",async()=>{await gapi.client.init({apiKey:"AIzaSyAbL1uK3NIaqSm3wYVifT6cVI3iUgDZc_o",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]}),W=!0,K()}),window.onclick=K,K();
//# sourceMappingURL=index.974218ac.js.map
