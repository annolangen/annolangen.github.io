(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e=>e,n=e.trustedTypes,r=n?n.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,i=`$lit$`,a=`lit$${Math.random().toFixed(9).slice(2)}$`,o=`?`+a,s=`<${o}>`,c=document,l=()=>c.createComment(``),u=e=>e===null||typeof e!=`object`&&typeof e!=`function`,d=Array.isArray,f=e=>d(e)||typeof e?.[Symbol.iterator]==`function`,p=`[ 	
\f\r]`,m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,h=/-->/g,g=/>/g,_=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),v=/'/g,y=/"/g,b=/^(?:script|style|textarea|title)$/i,x=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),S=x(1),C=x(2),w=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),E=new WeakMap,D=c.createTreeWalker(c,129);function O(e,t){if(!d(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return r===void 0?t:r.createHTML(t)}var ee=(e,t)=>{let n=e.length-1,r=[],o,c=t===2?`<svg>`:t===3?`<math>`:``,l=m;for(let t=0;t<n;t++){let n=e[t],u,d,f=-1,p=0;for(;p<n.length&&(l.lastIndex=p,d=l.exec(n),d!==null);)p=l.lastIndex,l===m?d[1]===`!--`?l=h:d[1]===void 0?d[2]===void 0?d[3]!==void 0&&(l=_):(b.test(d[2])&&(o=RegExp(`</`+d[2],`g`)),l=_):l=g:l===_?d[0]===`>`?(l=o??m,f=-1):d[1]===void 0?f=-2:(f=l.lastIndex-d[2].length,u=d[1],l=d[3]===void 0?_:d[3]===`"`?y:v):l===y||l===v?l=_:l===h||l===g?l=m:(l=_,o=void 0);let x=l===_&&e[t+1].startsWith(`/>`)?` `:``;c+=l===m?n+s:f>=0?(r.push(u),n.slice(0,f)+i+n.slice(f)+a+x):n+a+(f===-2?t:x)}return[O(e,c+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},k=class e{constructor({strings:t,_$litType$:r},s){let c;this.parts=[];let u=0,d=0,f=t.length-1,p=this.parts,[m,h]=ee(t,r);if(this.el=e.createElement(m,s),D.currentNode=this.el.content,r===2||r===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(c=D.nextNode())!==null&&p.length<f;){if(c.nodeType===1){if(c.hasAttributes())for(let e of c.getAttributeNames())if(e.endsWith(i)){let t=h[d++],n=c.getAttribute(e).split(a),r=/([.?@])?(.*)/.exec(t);p.push({type:1,index:u,name:r[2],strings:n,ctor:r[1]===`.`?ne:r[1]===`?`?re:r[1]===`@`?ie:M}),c.removeAttribute(e)}else e.startsWith(a)&&(p.push({type:6,index:u}),c.removeAttribute(e));if(b.test(c.tagName)){let e=c.textContent.split(a),t=e.length-1;if(t>0){c.textContent=n?n.emptyScript:``;for(let n=0;n<t;n++)c.append(e[n],l()),D.nextNode(),p.push({type:2,index:++u});c.append(e[t],l())}}}else if(c.nodeType===8)if(c.data===o)p.push({type:2,index:u});else{let e=-1;for(;(e=c.data.indexOf(a,e+1))!==-1;)p.push({type:7,index:u}),e+=a.length-1}u++}}static createElement(e,t){let n=c.createElement(`template`);return n.innerHTML=e,n}};function A(e,t,n=e,r){if(t===w)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=u(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=A(e,i._$AS(e,t.values),i,r)),t}var te=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??c).importNode(t,!0);D.currentNode=r;let i=D.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new j(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ae(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=D.nextNode(),a++)}return D.currentNode=c,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},j=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),u(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==w&&this._(e):e._$litType$===void 0?e.nodeType===void 0?f(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&u(this._$AH)?this._$AA.nextSibling.data=e:this.T(c.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=k.createElement(O(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new te(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=E.get(e.strings);return t===void 0&&E.set(e.strings,t=new k(e)),t}k(t){d(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(l()),this.O(l()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let n=t(e).nextSibling;t(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},M=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=A(this,e,t,0),a=!u(e)||e!==this._$AH&&e!==w,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=A(this,r[n+o],t,o),s===w&&(s=this._$AH[o]),a||=!u(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ne=class extends M{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},re=class extends M{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},ie=class extends M{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??T)===w)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ae=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}},oe=e.litHtmlPolyfillSupport;oe?.(k,j),(e.litHtmlVersions??=[]).push(`3.3.3`);var se=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new j(t.insertBefore(l(),e),e,void 0,n??{})}return i._$AI(e),i},ce=`356448156280-v8uhggf2sfgrgu5tb099tlg3qu0phe22.apps.googleusercontent.com`,le=`${window.location.origin}${window.location.pathname.replace(/\/$/,``)}`,ue=[`https://www.googleapis.com/auth/googlehealth.sleep.readonly`,`https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly`,`https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly`].join(` `),N=[`steps`,`calories`,`fatBurn`,`cardio`,`peak`],de={steps:`Steps`,calories:`Active Calories`,fatBurn:`Fat Burn AZM`,cardio:`Cardio AZM`,peak:`Peak AZM`},P={steps:`#00f0ff`,calories:`#ff5722`,fatBurn:`#ffeb3b`,cardio:`#e91e63`,peak:`#b388ff`},F={sleepSummary:`Loading...`,sleepData:`Waiting for payload...`,stepsData:`Waiting for payload...`,caloriesData:`Waiting for payload...`,azmData:`Waiting for payload...`,restingHRData:`Waiting for payload...`,chartData:[],highlightedSeries:`none`,hoveredSeries:`none`,hoveredIndex:-1,activeTab:`sleep`,loading:!0};function fe(){window.location.href=`https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${encodeURIComponent(ce)}&redirect_uri=${encodeURIComponent(le)}&scope=${encodeURIComponent(ue)}`}function pe(){let e=window.location.hash;if(!e)return;let t=new URLSearchParams(e.substring(1)),n=t.get(`access_token`),r=t.get(`error`);if(r){F.error=`Authentication error: ${r}`;return}n&&(sessionStorage.setItem(`access_token`,n),window.history.replaceState({},document.title,window.location.pathname),H())}function I(e){return new Date(e.getTime()-e.getTimezoneOffset()*60*1e3).toISOString().split(`T`)[0]}function L(e){let t=new Date(e);return isNaN(t.getTime())?``:I(t)}function me(){let e=[],t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`];for(let n=6;n>=0;n--){let r=new Date(Date.now()-n*24*60*60*1e3),i=I(r),a=`${t[r.getDay()]} ${r.getDate()}`;e.push({dateStr:i,label:a})}return e}async function he(){let e=sessionStorage.getItem(`access_token`);if(!e)return;let t=`https://health.googleapis.com/v4/users/me/dataTypes/sleep/dataPoints?filter=sleep.interval.civil_end_time>=%22${new Date(Date.now()-2880*60*1e3).toISOString().split(`T`)[0]}%22`;try{let n=await R(t,{Authorization:`Bearer ${e}`,Accept:`application/json`});F.sleepData=JSON.stringify(n,null,2);let r=n.flatMap(e=>e.dataPoints??[]);if(r.length>0){let e=r.filter(e=>e.sleep?.interval).sort((e,t)=>new Date(t.sleep?.interval?.endTime??0).getTime()-new Date(e.sleep?.interval?.endTime??0).getTime());if(e.length>0){let t=e[0],n=new Date(t.sleep?.interval?.startTime??0),r=(new Date(t.sleep?.interval?.endTime??0).getTime()-n.getTime())/1e3/60;F.sleepSummary=`${Math.floor(r/60)}h ${Math.round(r%60)}m`}else F.sleepSummary=`No main log found.`}else F.sleepSummary=`No log found for last night.`}catch(e){F.error=`Failed to pull sleep data: ${e instanceof Error?e.message:String(e)}`}}async function R(e,t,n){let r=[],i=``,a=new Set;for(;;){let o=await fetch(e+(i?`&pageToken=${encodeURIComponent(i)}`:``),{headers:t});if(!o.ok)return r;let s=await o.json();if(r.push(s),n?.(s),(s.dataPoints??[]).length===0)return r;let c=s.nextPageToken?.trim();if(!c||c===i||a.has(c))return r;a.add(c),i=c}}function z(e,t){let n=t.flatMap(e=>e.dataPoints??[]);for(let t of n){let n=t.steps?.interval?.startTime||t.interval?.startTime||t.startTime;if(!n)continue;let r=L(n);if(r&&e.has(r)){let n=e.get(r),i=t.steps?.count||t.value?.intVal||t.count||`0`;n.steps+=parseInt(String(i),10)}}}function B(e,t){let n=t.flatMap(e=>e.dataPoints??[]);for(let t of n){let n=t.activeEnergyBurned?.interval?.startTime||t.interval?.startTime||t.startTime;if(!n)continue;let r=L(n);if(r&&e.has(r)){let n=e.get(r),i=t.activeEnergyBurned?.kcal||t.value?.fpVal||t.kcal||`0`;n.calories+=parseFloat(String(i))}}}function V(e,t){let n=t.flatMap(e=>e.dataPoints??[]);for(let t of n){let n=t.activeZoneMinutes?.interval?.startTime||t.interval?.startTime||t.startTime;if(!n)continue;let r=L(n);if(r&&e.has(r)){let n=e.get(r),i=t.activeZoneMinutes||t,a=i.heartRateZone||t.value?.strVal||``,o=i.activeZoneMinutes||t.value?.intVal||`0`,s=typeof o==`number`?o:parseInt(String(o),10);a===`FAT_BURN`?n.fatBurn+=s:a===`CARDIO`?n.cardio+=s:a===`PEAK`&&(n.peak+=s)}}}async function ge(){let e=sessionStorage.getItem(`access_token`);if(!e)return;let t=me(),n=t[0].dateStr,r=new Map;for(let e of t)r.set(e.dateStr,{dateStr:e.label,dateKey:e.dateStr,steps:0,calories:0,fatBurn:0,cardio:0,peak:0});let i=`https://health.googleapis.com/v4/users/me/dataTypes/steps/dataPoints?filter=steps.interval.civil_start_time>=%22${n}%22`,a=`https://health.googleapis.com/v4/users/me/dataTypes/active-energy-burned/dataPoints?filter=active_energy_burned.interval.civil_start_time>=%22${n}%22`,o=`https://health.googleapis.com/v4/users/me/dataTypes/active-zone-minutes/dataPoints?filter=active_zone_minutes.interval.civil_start_time>=%22${n}%22`,s=`https://health.googleapis.com/v4/users/me/dataTypes/daily-resting-heart-rate/dataPoints?filter=daily_resting_heart_rate.date>=%22${n}%22`,c={Authorization:`Bearer ${e}`,Accept:`application/json`};try{let[e,n,l,u]=await Promise.all([R(i,c,e=>{F.stepsData=`${F.stepsData}\n${JSON.stringify(e,null,2)}`,z(r,[e]),F.chartData=Array.from(r.values()),$()}),R(a,c,e=>{F.caloriesData=`${F.caloriesData}\n${JSON.stringify(e,null,2)}`,B(r,[e]),F.chartData=Array.from(r.values()),$()}),R(o,c,e=>{F.azmData=`${F.azmData}\n${JSON.stringify(e,null,2)}`,V(r,[e]),F.chartData=Array.from(r.values()),$()}),R(s,c,e=>{F.restingHRData=`${F.restingHRData}\n${JSON.stringify(e,null,2)}`,$()})]);F.stepsData=JSON.stringify(e,null,2),F.caloriesData=JSON.stringify(n,null,2),F.azmData=JSON.stringify(l,null,2),F.restingHRData=u.length?JSON.stringify(u,null,2):`No resting heart rate data found.`,z(r,e),B(r,n),V(r,l),F.chartData=t.map(e=>r.get(e.dateStr)??{dateStr:e.label,dateKey:e.dateStr,steps:0,calories:0,fatBurn:0,cardio:0,peak:0}),$()}catch(e){F.error=`Failed to pull activity data: ${e instanceof Error?e.message:String(e)}`}}function _e(){sessionStorage.clear(),window.location.reload()}async function H(){sessionStorage.getItem(`access_token`)?(F.loading=!0,F.error=void 0,$(),await Promise.all([he(),ge()]),F.loading=!1,$()):pe()}var U=600,W=250,G=65,K=20,q=20,J=30,Y=U-G-K,X=W-q-J;function Z(e){let t=e.currentTarget.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*U-G;if(n<-10||n>525)F.hoveredIndex=-1;else{let e=Math.round(n/(Y/6));F.hoveredIndex=Math.max(0,Math.min(6,e))}$()}function ve(){F.hoveredIndex=-1,$()}function ye(e,t){let n=t[e],r=[];for(let t=0;t<=4;t++){let i=t/4*n,a=q+X*(1-t/4),o=``;o=e===`steps`?i>=1e3?`${(i/1e3).toFixed(1)}k`:`${Math.round(i)}`:e===`calories`?`${Math.round(i)} kcal`:`${i.toFixed(0)}m`,r.push(C`
      <g>
        <line
          x1=${G-5}
          y1=${a}
          x2=${G}
          y2=${a}
          stroke="#666"
        />
        <text
          x=${G-8}
          y=${a+4}
          fill="#aaa"
          font-size="8"
          text-anchor="end"
          >${o}</text
        >
      </g>
    `)}return r}function be(){let e=[];for(let t=0;t<=4;t++){let n=t*25,r=q+X*(1-t/4);e.push(C`
      <g>
        <line
          x1=${G-5}
          y1=${r}
          x2=${G}
          y2=${r}
          stroke="#444"
        />
        <text
          x=${G-8}
          y=${r+4}
          fill="#555"
          font-size="8"
          text-anchor="end"
          >${n}%</text
        >
      </g>
    `)}return e}var xe=()=>{let e=F.chartData;if(e.length===0)return S`
      <div class="box has-background-grey-darker has-text-light">
        <h3 class="title is-5">7-Day Activity Trends</h3>
        <div class="has-text-centered p-6">
          <div class="button is-loading is-text">Loading...</div>
          <p class="has-text-grey-light mt-2">Fetching activity data...</p>
        </div>
      </div>
    `;let t={steps:1e3,calories:100,fatBurn:10,cardio:10,peak:10};for(let n of N){let r=e.map(e=>e[n]),i=Math.max(...r);i>0&&(t[n]=i)}let n=e=>G+e/6*Y,r=(e,t)=>t<=0?220:q+X*(1-e/t),i=F.hoveredSeries===`none`?F.highlightedSeries:F.hoveredSeries,a=i===`none`?be():ye(i,t),o=N.map(a=>{let o=P[a],s=i===`none`||i===a,c=i===a?3.5:i===`none`?2:1,l=s?1:.15,u=e.map((e,i)=>({x:n(i),y:r(e[a],t[a])}));return C`
      <path
        class="chart-line"
        d=${u.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `)}
        fill="none"
        stroke=${o}
        stroke-width=${c}
        opacity=${l}
      />
      ${u.map((e,t)=>{let n=F.hoveredIndex===t,r=n?6:i===a?4:3,s=n?1:l,c=n?`#ffffff`:`none`,u=n?1.5:0;return C`
          <circle
            class="chart-dot"
            cx=${e.x}
            cy=${e.y}
            r=${r}
            fill=${o}
            stroke=${c}
            stroke-width=${u}
            opacity=${s}
          />
        `})}
    `}),s=F.hoveredIndex===-1?``:C`
          <line
            x1=${n(F.hoveredIndex)}
            y1=${q}
            x2=${n(F.hoveredIndex)}
            y2=${220}
            stroke="#666"
            stroke-dasharray="4 4"
            stroke-width="1.5"
          />
        `,c=S`<div class="has-text-grey-light is-size-7">
    Hover or tap on the chart lines to inspect daily counts. Click a legend item
    to lock the Y-scale.
  </div>`;if(F.hoveredIndex!==-1){let t=e[F.hoveredIndex];c=S`
      <div
        class="level is-mobile py-2 px-3 mb-0"
        style="background: rgba(255,255,255,0.05); border-radius: 4px;"
      >
        <div class="level-left">
          <div class="level-item">
            <strong class="has-text-light"
              >${t.dateKey} (${t.dateStr})</strong
            >
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <span
              class="tag is-info is-light mr-2"
              style="border-left: 4px solid ${P.steps}; font-weight: 600;"
              >${t.steps.toLocaleString()} steps</span
            >
            <span
              class="tag is-warning is-light mr-2"
              style="border-left: 4px solid ${P.calories}; font-weight: 600;"
              >${t.calories.toFixed(0)} kcal</span
            >
            <span
              class="tag is-dark mr-1"
              style="border-left: 4px solid ${P.fatBurn}"
              >${t.fatBurn}m Fat</span
            >
            <span
              class="tag is-dark mr-1"
              style="border-left: 4px solid ${P.cardio}"
              >${t.cardio}m Cardio</span
            >
            <span
              class="tag is-dark"
              style="border-left: 4px solid ${P.peak}"
              >${t.peak}m Peak</span
            >
          </div>
        </div>
      </div>
    `}let l=N.map(e=>{let t=P[e],n=i!==`none`&&i!==e,r=F.highlightedSeries===e;return S`
      <div
        class="legend-item ${n?`dimmed`:``}"
        style="border: 1px solid ${r?t:`transparent`}; border-radius: 4px; padding: 4px 8px; cursor: pointer; display: flex; align-items: center; background: rgba(0,0,0,0.2);"
        @mouseenter=${()=>{F.hoveredSeries=e,$()}}
        @mouseleave=${()=>{F.hoveredSeries=`none`,$()}}
        @click=${t=>{t.stopPropagation(),F.highlightedSeries=r?`none`:e,$()}}
      >
        <span
          style="width: 12px; height: 12px; border-radius: 2px; background: ${t}; margin-right: 6px;"
        ></span>
        <span
          class="is-size-7 has-text-weight-semibold"
          style="color: ${r?t:`#fff`}"
          >${de[e]}</span
        >
      </div>
    `});return S`
    <div class="box has-background-grey-darker has-text-light">
      <h3 class="title is-5 mb-3">7-Day Activity Trends</h3>

      <div class="mb-3" style="min-height: 40px;">${c}</div>

      <div
        class="chart-container mb-4"
        style="background: #181818; border-radius: 6px; padding: 10px; position: relative;"
        @click=${()=>{F.highlightedSeries=`none`,$()}}
      >
        <svg
          viewBox="0 0 ${U} ${W}"
          width="100%"
          style="overflow: visible;"
          @mousemove=${Z}
          @mouseleave=${ve}
        >
          <!-- Grid lines -->
          ${[0,1,2,3,4].map(e=>{let t=q+e/4*X;return C`<line
              x1=${G}
              y1=${t}
              x2=${U-K}
              y2=${t}
              stroke="#2a2a2a"
              stroke-width="1"
            />`})}

          <!-- X axis -->
          <line
            x1=${G}
            y1=${W-J}
            x2=${U-K}
            y2=${W-J}
            stroke="#444"
            stroke-width="1.5"
          />

          <!-- Y axis ticks -->
          ${a}

          <!-- X axis labels (days) -->
          ${e.map((e,t)=>C`
              <text
                x=${n(t)}
                y=${238}
                fill="#aaa"
                font-size="9"
                text-anchor="middle"
                >${e.dateStr}</text
              >
            `)}

          <!-- SVG Series Lines & Dots -->
          ${o}

          <!-- Vertical Indicator Line -->
          ${s}
        </svg>
      </div>

      <div
        class="is-flex is-flex-wrap-wrap is-justify-content-center"
        style="gap: 0.75rem;"
      >
        ${l}
      </div>
    </div>
  `},Se=()=>S`<!-- Dashboard View -->
    <div
      id="dashboard-view"
      class="box has-background-grey-darker has-text-light"
    >
      <div class="columns">
        <div class="column is-4">
          <div class="box has-background-black-bis p-4">
            <h3 class="title is-5 mb-2">Last Night's Sleep</h3>
            <div class="title is-2 has-text-warning mb-4">
              ${F.sleepSummary}
            </div>
            <button
              id="logout-button"
              @click=${_e}
              class="button is-danger is-light is-small"
            >
              Disconnect Account
            </button>
          </div>
        </div>
        <div class="column is-8">${xe()}</div>
      </div>

      <h4 class="title is-5 mt-5">Raw API Payloads Ingestion Inspection</h4>
      <div class="tabs is-boxed mb-2">
        <ul>
          <li class=${F.activeTab===`sleep`?`is-active`:``}>
            <a
              @click=${()=>{F.activeTab=`sleep`,$()}}
              >Sleep</a
            >
          </li>
          <li class=${F.activeTab===`steps`?`is-active`:``}>
            <a
              @click=${()=>{F.activeTab=`steps`,$()}}
              >Steps</a
            >
          </li>
          <li class=${F.activeTab===`calories`?`is-active`:``}>
            <a
              @click=${()=>{F.activeTab=`calories`,$()}}
              >Calories</a
            >
          </li>
          <li class=${F.activeTab===`azm`?`is-active`:``}>
            <a
              @click=${()=>{F.activeTab=`azm`,$()}}
              >Active Zone Min</a
            >
          </li>
          <li class=${F.activeTab===`resting_hr`?`is-active`:``}>
            <a
              @click=${()=>{F.activeTab=`resting_hr`,$()}}
              >Resting HR</a
            >
          </li>
        </ul>
      </div>
      <pre
        id="raw-json"
        class="content has-background-black-ter has-text-success p-4"
        style="max-height: 350px; overflow-y: auto; font-family: monospace; font-size: 0.8rem;"
      >
${(()=>{switch(F.activeTab){case`sleep`:return F.sleepData;case`steps`:return F.stepsData;case`calories`:return F.caloriesData;case`azm`:return F.azmData;case`resting_hr`:return F.restingHRData}})()}</pre>
    </div>`,Ce=()=>S`<!-- Auth View -->
    <div class="box has-background-grey-darker has-text-light">
      <h3 class="title is-5">Connect Your Account</h3>
      <p class="mb-4">
        Authorize this application to read your sleep, activity, and vitals
        metric data securely using Google OAuth 2.0.
      </p>
      <button @click=${fe} class="button is-info">
        Login with Google
      </button>
    </div>`,Q=()=>S`<!-- Error View -->
    <div
      id="error-view"
      class="notification is-danger is-light ${F.error?``:`is-hidden`}"
    >
      <strong>Error:</strong> <span id="error-message">${F.error}</span>
    </div>`;function we(){let e=sessionStorage.getItem(`access_token`);return S` <style>
      .chart-line {
        transition:
          stroke-width 0.15s ease,
          opacity 0.15s ease;
      }
      .chart-dot {
        transition:
          r 0.15s ease,
          opacity 0.15s ease;
      }
      .legend-item {
        transition:
          opacity 0.15s ease,
          border-color 0.15s ease;
      }
      .legend-item:hover {
        background: rgba(255, 255, 255, 0.08) !important;
      }
      .legend-item.dimmed {
        opacity: 0.25;
      }
      .tabs.is-boxed li.is-active a {
        background-color: #2b2b2b !important;
        border-color: #444 !important;
        color: #00f0ff !important;
      }
      .tabs.is-boxed a {
        color: #aaa;
        border-radius: 4px 4px 0 0;
      }
      .tabs.is-boxed a:hover {
        background-color: rgba(255, 255, 255, 0.05);
        color: #fff;
      }
      .box.has-background-grey-darker {
        background-color: #1e1e1e !important;
      }
      .box.has-background-black-bis {
        background-color: #121212 !important;
      }
    </style>
    <div class="container is-fluid px-5">
      <section class="section px-0 py-5">
        <h1 class="title is-2 has-text-info mb-1">
          Fitbit Large Screen Dashboard
        </h1>
        <p class="subtitle is-6 has-text-grey-lighter mb-5">
          A purely client-side static interface reading directly from the Google
          Health REST API.
        </p>

        ${F.error?Q():``}
        ${e?Se():S`${Ce()} ${F.error?Q():``}`}
      </section>
    </div>`}var $=()=>se(we(),document.body);window.addEventListener(`popstate`,$),window.addEventListener(`hashchange`,$),window.addEventListener(`click`,$),$(),H();