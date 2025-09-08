(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,U=q.trustedTypes,F=U?U.createPolicy("lit-html",{createHTML:t=>t}):void 0,X="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,ee="?"+A,ue=`<${ee}>`,_=document,I=()=>_.createComment(""),N=t=>t===null||typeof t!="object"&&typeof t!="function",V=Array.isArray,me=t=>V(t)||typeof t?.[Symbol.iterator]=="function",P=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,z=/>/g,x=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,Z=/"/g,te=/^(?:script|style|textarea|title)$/i,pe=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),$=pe(1),E=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),K=new WeakMap,w=_.createTreeWalker(_,129);function se(t,e){if(!V(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return F!==void 0?F.createHTML(e):e}const he=(t,e)=>{const s=t.length-1,r=[];let n,o=e===2?"<svg>":e===3?"<math>":"",a=T;for(let p=0;p<s;p++){const i=t[p];let l,d,c=-1,u=0;for(;u<i.length&&(a.lastIndex=u,d=a.exec(i),d!==null);)u=a.lastIndex,a===T?d[1]==="!--"?a=J:d[1]!==void 0?a=z:d[2]!==void 0?(te.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=x):d[3]!==void 0&&(a=x):a===x?d[0]===">"?(a=n??T,c=-1):d[1]===void 0?c=-2:(c=a.lastIndex-d[2].length,l=d[1],a=d[3]===void 0?x:d[3]==='"'?Z:Y):a===Z||a===Y?a=x:a===J||a===z?a=T:(a=x,n=void 0);const h=a===x&&t[p+1].startsWith("/>")?" ":"";o+=a===T?i+ue:c>=0?(r.push(l),i.slice(0,c)+X+i.slice(c)+A+h):i+A+(c===-2?p:h)}return[se(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class R{constructor({strings:e,_$litType$:s},r){let n;this.parts=[];let o=0,a=0;const p=e.length-1,i=this.parts,[l,d]=he(e,s);if(this.el=R.createElement(l,r),w.currentNode=this.el.content,s===2||s===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=w.nextNode())!==null&&i.length<p;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(X)){const u=d[a++],h=n.getAttribute(c).split(A),f=/([.?@])?(.*)/.exec(u);i.push({type:1,index:o,name:f[2],strings:h,ctor:f[1]==="."?fe:f[1]==="?"?ve:f[1]==="@"?$e:j}),n.removeAttribute(c)}else c.startsWith(A)&&(i.push({type:6,index:o}),n.removeAttribute(c));if(te.test(n.tagName)){const c=n.textContent.split(A),u=c.length-1;if(u>0){n.textContent=U?U.emptyScript:"";for(let h=0;h<u;h++)n.append(c[h],I()),w.nextNode(),i.push({type:2,index:++o});n.append(c[u],I())}}}else if(n.nodeType===8)if(n.data===ee)i.push({type:2,index:o});else{let c=-1;for(;(c=n.data.indexOf(A,c+1))!==-1;)i.push({type:7,index:o}),c+=A.length-1}o++}}static createElement(e,s){const r=_.createElement("template");return r.innerHTML=e,r}}function H(t,e,s=t,r){if(e===E)return e;let n=r!==void 0?s._$Co?.[r]:s._$Cl;const o=N(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(t),n._$AT(t,s,r)),r!==void 0?(s._$Co??=[])[r]=n:s._$Cl=n),n!==void 0&&(e=H(t,n._$AS(t,e.values),n,r)),e}class ge{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:r}=this._$AD,n=(e?.creationScope??_).importNode(s,!0);w.currentNode=n;let o=w.nextNode(),a=0,p=0,i=r[0];for(;i!==void 0;){if(a===i.index){let l;i.type===2?l=new k(o,o.nextSibling,this,e):i.type===1?l=new i.ctor(o,i.name,i.strings,this,e):i.type===6&&(l=new ye(o,this,e)),this._$AV.push(l),i=r[++p]}a!==i?.index&&(o=w.nextNode(),a++)}return w.currentNode=_,n}p(e){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,s),s+=r.strings.length-2):r._$AI(e[s])),s++}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,n){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=H(this,e,s),N(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):me(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=R.createElement(se(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(s);else{const o=new ge(n,this),a=o.u(this.options);o.p(s),this.T(a),this._$AH=o}}_$AC(e){let s=K.get(e.strings);return s===void 0&&K.set(e.strings,s=new R(e)),s}k(e){V(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,n=0;for(const o of e)n===s.length?s.push(r=new k(this.O(I()),this.O(I()),this,this.options)):r=s[n],r._$AI(o),n++;n<s.length&&(this._$AR(r&&r._$AB.nextSibling,n),s.length=n)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,n,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=s,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,s=this,r,n){const o=this.strings;let a=!1;if(o===void 0)e=H(this,e,s,0),a=!N(e)||e!==this._$AH&&e!==E,a&&(this._$AH=e);else{const p=e;let i,l;for(e=o[0],i=0;i<o.length-1;i++)l=H(this,p[r+i],s,i),l===E&&(l=this._$AH[i]),a||=!N(l)||l!==this._$AH[i],l===g?e=g:e!==g&&(e+=(l??"")+o[i+1]),this._$AH[i]=l}a&&!n&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fe extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class ve extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class $e extends j{constructor(e,s,r,n,o){super(e,s,r,n,o),this.type=5}_$AI(e,s=this){if((e=H(this,e,s,0)??g)===E)return;const r=this._$AH,n=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==g&&(r===g||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ye{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const be=q.litHtmlPolyfillSupport;be?.(R,k),(q.litHtmlVersions??=[]).push("3.3.1");const Ae=(t,e,s)=>{const r=s?.renderBefore??e;let n=r._$litPart$;return n===void 0&&(r._$litPart$=n=new k(e.insertBefore(I(),null),null,void 0,{})),n._$AI(t),n},xe=t=>{let e;const s=new Set,r=(l,d)=>{const c=typeof l=="function"?l(e):l;if(!Object.is(c,e)){const u=e;e=d??(typeof c!="object"||c===null)?c:Object.assign({},e,c),s.forEach(h=>h(e,u))}},n=()=>e,p={setState:r,getState:n,getInitialState:()=>i,subscribe:l=>(s.add(l),()=>s.delete(l))},i=e=t(r,n,p);return p},we=(t=>xe);function _e(t,e){let s;try{s=t()}catch{return}return{getItem:n=>{var o;const a=i=>i===null?null:JSON.parse(i,void 0),p=(o=s.getItem(n))!=null?o:null;return p instanceof Promise?p.then(a):a(p)},setItem:(n,o)=>s.setItem(n,JSON.stringify(o,void 0)),removeItem:n=>s.removeItem(n)}}const L=t=>e=>{try{const s=t(e);return s instanceof Promise?s:{then(r){return L(r)(s)},catch(r){return this}}}catch(s){return{then(r){return this},catch(r){return L(r)(s)}}}},Ce=(t,e)=>(s,r,n)=>{let o={storage:_e(()=>localStorage),partialize:m=>m,version:0,merge:(m,y)=>({...y,...m}),...e},a=!1;const p=new Set,i=new Set;let l=o.storage;if(!l)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),s(...m)},r,n);const d=()=>{const m=o.partialize({...r()});return l.setItem(o.name,{state:m,version:o.version})},c=n.setState;n.setState=(m,y)=>(c(m,y),d());const u=t((...m)=>(s(...m),d()),r,n);n.getInitialState=()=>u;let h;const f=()=>{var m,y;if(!l)return;a=!1,p.forEach(v=>{var b;return v((b=r())!=null?b:u)});const S=((y=o.onRehydrateStorage)==null?void 0:y.call(o,(m=r())!=null?m:u))||void 0;return L(l.getItem.bind(l))(o.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==o.version){if(o.migrate){const b=o.migrate(v.state,v.version);return b instanceof Promise?b.then(O=>[!0,O]):[!0,b]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var b;const[O,de]=v;if(h=o.merge(de,(b=r())!=null?b:u),s(h,!0),O)return d()}).then(()=>{S?.(h,void 0),h=r(),a=!0,i.forEach(v=>v(h))}).catch(v=>{S?.(void 0,v)})};return n.persist={setOptions:m=>{o={...o,...m},m.storage&&(l=m.storage)},clearStorage:()=>{l?.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>f(),hasHydrated:()=>a,onHydrate:m=>(p.add(m),()=>{p.delete(m)}),onFinishHydration:m=>(i.add(m),()=>{i.delete(m)})},o.skipHydration||f(),h||u},Se=Ce,He={image:{png:"./images/avatars/image-juliusomo.png",webp:"./images/avatars/image-juliusomo.webp"},username:"juliusomo"},Te=[{id:1,content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",createdAt:"1 month ago",score:12,user:{image:{png:"./images/avatars/image-amyrobson.png",webp:"./images/avatars/image-amyrobson.webp"},username:"amyrobson"},replies:[]},{id:2,content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",createdAt:"2 weeks ago",score:5,user:{image:{png:"./images/avatars/image-maxblagun.png",webp:"./images/avatars/image-maxblagun.webp"},username:"maxblagun"},replies:[{id:3,content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",createdAt:"1 week ago",score:4,replyingTo:"maxblagun",user:{image:{png:"./images/avatars/image-ramsesmiron.png",webp:"./images/avatars/image-ramsesmiron.webp"},username:"ramsesmiron"}},{id:4,content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",createdAt:"2 days ago",score:2,replyingTo:"ramsesmiron",user:{image:{png:"./images/avatars/image-juliusomo.png",webp:"./images/avatars/image-juliusomo.webp"},username:"juliusomo"}}]}],ne={currentUser:He,comments:Te},re=[{name:"year",secs:365*24*60*60},{name:"month",secs:720*60*60},{name:"week",secs:10080*60},{name:"day",secs:1440*60},{name:"hour",secs:3600},{name:"minute",secs:60},{name:"second",secs:1}],W=(t,e=0)=>t.reduce((s,r)=>Math.max(s,W(r.replies||[],r.id)),e);function M(t,e){for(const s of t){if(s.id===e)return s;const r=M(s.replies||[],e);if(r)return r}}const B=structuredClone(ne.comments);oe(B);const G={comments:B,currentUser:ne.currentUser,requestedDelete:null,nextId:W(B)+1,newCommentContent:"",userVotes:{}};function Ie(t,e){const s=i=>({id:i,content:"",user:e().currentUser,createdAt:"now",createdAtTs:Date.now(),createdAtTextExpiration:Date.now()+1e3,score:0,replies:[]});function r(i,l){const{comments:d}=e(),c=structuredClone(d),u=M(c,i);u&&(l(u),t({comments:c}))}function n(i){const{comments:l}=e(),d=structuredClone(l);c(d)&&t({comments:d,requestedDelete:null});function c(u){const h=u.findIndex(f=>f.id===i);return h!==-1?(u.splice(h,1),!0):u.some(f=>c(f.replies||[]))}}function o(i){const{comments:l}=e(),d=M(l,i);if(d&&!d.content.trim()){n(i);return}r(i,c=>{c.pendingReply=!1})}function a(i){const{nextId:l}=e();r(i,d=>{const c={...s(l),replyingTo:d.user.username,pendingReply:!0};(d.replies??=[]).push(c)}),t({nextId:l+1})}function p(i,l){const{comments:d,currentUser:c,userVotes:u}=e(),h=structuredClone(d),f=M(h,i);if(!f||f.user.username===c.username)return;const m=u[i],y={...u};if(m===l)f.score-=l,delete y[i];else{const S=l-(m||0);f.score+=S,y[i]=l}t({comments:h,userVotes:y})}return{findAndMutate:r,deleteComment:n,submitReply:o,addReply:a,setNewCommentContent:i=>t({newCommentContent:i}),addComment:()=>{const{newCommentContent:i,nextId:l,comments:d}=e(),c=i.trim();c&&t({comments:[...d,{...s(l),content:c}],nextId:l+1,newCommentContent:""})},setRequestedDelete:i=>t({requestedDelete:i}),vote:p}}const Ne=we()(Se((t,e)=>({...G,actions:Ie(t,e),getInitialState:()=>G}),{name:"comment-state",partialize:t=>({comments:t.comments,currentUser:t.currentUser,userVotes:t.userVotes}),onRehydrateStorage:t=>{t&&(t.nextId=W(t.comments)+1)}}));function Ee(t){const e=Date.now(),s=t.match(/(\d+)\s(\w+)/);if(s){const r=parseInt(s[1],10),n=s[2];for(const{name:o,secs:a}of re)if(n.startsWith(o))return{ts:e-r*a*1e3,expiration:e+a*1e3}}return{ts:e,expiration:e+1e3}}function oe(t){for(const e of t){if(!e.createdAtTs){const{ts:s,expiration:r}=Ee(e.createdAt);e.createdAtTs=s,e.createdAtTextExpiration=r}oe(e.replies||[])}}const{getState:C,subscribe:Re}=Ne,{addComment:ke,addReply:Me,deleteComment:Ue,findAndMutate:D,setNewCommentContent:De,setRequestedDelete:ie,submitReply:je,vote:Q}=C().actions;window.location.hash==="#reset"&&(localStorage.removeItem("comment-state"),history.replaceState(null,"",window.location.pathname+window.location.search));function Oe(t){const e=Date.now();if(t.createdAtTs&&t.createdAtTextExpiration&&e>t.createdAtTextExpiration){const s=Math.max(0,Math.floor((e-t.createdAtTs)/1e3));for(const{name:r,secs:n}of re){const o=Math.floor(s/n);if(o>=1){t.createdAt=`${o} ${r}${o>1?"s":""} ago`,t.createdAtTextExpiration=e+n*1e3;break}}}return t.createdAt}function Pe(){const t=C().requestedDelete;t&&Ue(t)}const Le=t=>{const{currentUser:e,userVotes:s}=C(),r=e.username===t.user.username,n=s?s[t.id]:0;return $`<span
    class="bg-grey-100 rounded-md px-4 py-2 font-medium text-purple-600 md:flex md:h-20 md:w-8 md:flex-col md:items-center md:gap-2 md:p-0 md:pt-2"
  >
    <button
      aria-label="Upvote comment"
      class="${n===1?"active-vote":"hover:text-purple-200"} inline disabled:cursor-not-allowed disabled:opacity-50"
      ?disabled=${r}
      @click=${()=>Q(t.id,1)}
    >
      <img src="./images/icon-plus.svg" alt="plus" />
    </button>
    <span class="px-2" aria-live="polite">${t.score}</span>
    <button
      aria-label="Downvote comment"
      class="${n===-1?"active-vote":"hover:text-purple-200"} inline disabled:cursor-not-allowed disabled:opacity-50"
      ?disabled=${r}
      @click=${()=>Q(t.id,-1)}
    >
      <img src="./images/icon-minus.svg" class="inline" alt="minus" />
    </button>
  </span>`},Be=t=>C().currentUser.username===t.user.username?$`
        <button
          ?disabled=${t.pendingEdit}
          class="px-2 font-medium text-pink-400 hover:text-pink-200 disabled:cursor-not-allowed disabled:opacity-50"
          @click=${()=>ie(t.id)}
        >
          <span
            ><img class="inline pr-1" src="./images/icon-delete.svg" />
            Delete</span
          >
        </button>
        <button
          ?disabled=${t.pendingEdit}
          class="px-2 font-medium text-purple-600 hover:text-purple-200 disabled:cursor-not-allowed disabled:opacity-50"
          @click=${()=>D(t.id,e=>e.pendingEdit=!0)}
        >
          <span
            ><img class="inline pr-1" src="./images/icon-edit.svg" /> Edit</span
          >
        </button>
      `:$`
        <button
          @click=${()=>Me(t.id)}
          ?disabled=${(t.replies??[]).some(e=>e.pendingReply)}
          class="px-2 font-medium text-purple-600 hover:text-purple-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span
            ><img class="inline pr-1" src="./images/icon-reply.svg" />
            Reply</span
          >
        </button>
      `,qe=(t,e=t.replyingTo?`@${t.replyingTo} `:"")=>t.pendingEdit?$`<textarea
          .value=${e+t.content}
          @input=${s=>D(t.id,r=>r.content=s.target.value.replace(e,""))}
          name="comment"
          class="border-grey-100 text-grey-500 col-span-12 row-start-2 mb-2 h-20 w-full rounded-lg border-1 px-6 py-2 md:col-span-11 md:col-start-2"
        ></textarea>
        <div
          class="col-span-12 row-start-4 flex flex-row justify-end md:col-span-11 md:col-start-2 md:row-start-3"
        >
          <button
            @click=${()=>{t.content.trim()&&D(t.id,s=>s.pendingEdit=!1)}}
            class="h-12 rounded-lg bg-purple-600 px-8 text-lg font-medium text-white hover:bg-purple-200 md:h-10 md:px-6"
          >
            UPDATE
          </button>
        </div>`:$`<div
        class="text-grey-500 col-span-12 row-start-2 mb-2 md:col-span-11 md:col-start-2"
      >
        ${t.replyingTo?$`<span class="font-bold text-purple-600">
              @${t.replyingTo}
            </span>`:null}
        ${t.content}
      </div>`,ae=(t,e,s,r)=>$`
  <form
    class="mx-auto flex w-full flex-wrap items-start justify-between gap-2 rounded-md bg-white p-4 md:w-full md:max-w-2xl"
    @submit=${n=>{n.preventDefault(),e()}}
    aria-label="Add a comment"
  >
    <div class="w-full md:order-2 md:w-auto md:flex-grow-2">
      <label for="comment-textarea" class="sr-only">Add a comment</label>
      <textarea
        id="comment-textarea"
        name="comment"
        placeholder="Add a comment..."
        .value=${s}
        @input=${n=>r(n.target.value)}
        class="border-grey-100 h-20 w-full rounded-lg border-1 px-6 py-2"
        aria-label="Comment text"
      ></textarea>
    </div>
    <img
      class="h-9 w-9 max-w-1/2 md:order-1"
      src=${C().currentUser.image.png}
      alt="Your profile picture"
    />
    <div class="max-w-1/2 md:order-3">
      <button
        type="submit"
        class="h-12 rounded-lg bg-purple-600 px-8 text-lg font-medium text-white hover:bg-purple-200 md:h-10 md:px-6"
      >
        ${t}
      </button>
    </div>
  </form>
`,Ve=()=>$`
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
          @click=${()=>ie(null)}
          class="bg-grey-500 rounded-lg py-3 text-white hover:opacity-50"
        >
          NO, CANCEL
        </button>
        <button
          @click=${Pe}
          class="rounded-lg bg-pink-400 py-3 text-white hover:opacity-50"
        >
          YES, DELETE
        </button>
      </div>
    </div>
  </div>
`,We=t=>t.pendingReply?ae("SUBMIT",()=>je(t.id),t.content,e=>D(t.id,s=>s.content=e)):$`<div
        class="mx-auto grid w-full grid-cols-12 items-center gap-2 rounded-md bg-white p-4 md:max-w-2xl"
      >
        <img
          class="col-span-2 h-4/5 md:col-span-1 md:col-start-2 md:row-start-1"
          src=${t.user.image.png}
          alt=""
        />
        <div
          class="col-span-5 flex items-center gap-2 font-bold md:col-span-3 md:col-start-3 md:row-start-1"
        >
          ${t.user.username}
          ${C().currentUser.username===t.user.username?$` <span
                class="text-grey-100 cursor-not-allowed rounded-xs bg-purple-600 px-1 pt-0.5 pb-1 text-sm leading-none font-bold"
              >
                you
              </span>`:null}
        </div>
        <div
          class="text-grey-500 col-span-5 col-start-8 content-center md:col-span-3 md:col-start-6"
        >
          ${Oe(t)}
        </div>
        ${qe(t)}
        <div
          class="col-span-5 row-start-3 md:col-start-1 md:row-span-2 md:row-start-1 md:self-start"
        >
          ${Le(t)}
        </div>
        <div
          class="col-span-7 col-start-6 mb-2 text-right md:col-start-9 md:row-start-1"
        >
          ${Be(t)}
        </div>
      </div> `,le=t=>$`
  <article class="comment">
    ${We(t)}
    <aside
      class="border-grey-100 mx-auto flex flex-col gap-2 border-l-2 pl-4 md:max-w-2xl"
      aria-label="Replies"
    >
      ${(t.replies||[]).map(le)}
    </aside>
  </article>
`;function Fe(){const t=C();return $` <section
    class="bg-grey-50 flex min-h-screen flex-col gap-2 p-4"
    aria-label="Comments section"
  >
    ${t.comments.map(le)}
    ${ae("SEND",ke,t.newCommentContent,De)}
    ${t.requestedDelete?Ve():null}
  </section>`}const ce=()=>Ae(Fe(),document.body);Re(ce);setInterval(ce,500);
