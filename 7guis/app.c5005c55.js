parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"P1HH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isDirective=exports.directive=void 0;const e=new WeakMap,t=t=>(...s)=>{const i=t(...s);return e.set(i,!0),i};exports.directive=t;const s=t=>"function"==typeof t&&e.has(t);exports.isDirective=s;
},{}],"JQ4u":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeNodes=exports.reparentNodes=exports.isCEPolyfill=void 0;const e=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback;exports.isCEPolyfill=e;const o=(e,o,s=null,l=null)=>{for(;o!==s;){const s=o.nextSibling;e.insertBefore(o,l),o=s}};exports.reparentNodes=o;const s=(e,o,s=null)=>{for(;o!==s;){const s=o.nextSibling;e.removeChild(o),o=s}};exports.removeNodes=s;
},{}],"m4zr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nothing=exports.noChange=void 0;const e={};exports.noChange=e;const o={};exports.nothing=o;
},{}],"kXJ6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lastAttributeNameRegex=exports.createMarker=exports.isTemplatePartActive=exports.Template=exports.boundAttributeSuffix=exports.markerRegex=exports.nodeMarker=exports.marker=void 0;const e=`{{lit-${String(Math.random()).slice(2)}}}`;exports.marker=e;const t=`\x3c!--${e}--\x3e`;exports.nodeMarker=t;const r=new RegExp(`${e}|${t}`);exports.markerRegex=r;const s="$lit$";exports.boundAttributeSuffix=s;class o{constructor(t,o){this.parts=[],this.element=o;const i=[],l=[],p=document.createTreeWalker(o.content,133,null,!1);let c=0,d=-1,u=0;const{strings:f,values:{length:h}}=t;for(;u<h;){const t=p.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let i=0;for(let t=0;t<o;t++)n(e[t].name,s)&&i++;for(;i-- >0;){const e=f[u],o=x.exec(e)[2],n=o.toLowerCase()+s,i=t.getAttribute(n);t.removeAttribute(n);const a=i.split(r);this.parts.push({type:"attribute",index:d,name:o,strings:a}),u+=a.length-1}}"TEMPLATE"===t.tagName&&(l.push(t),p.currentNode=t.content)}else if(3===t.nodeType){const o=t.data;if(o.indexOf(e)>=0){const e=t.parentNode,l=o.split(r),p=l.length-1;for(let r=0;r<p;r++){let o,i=l[r];if(""===i)o=a();else{const e=x.exec(i);null!==e&&n(e[2],s)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-s.length)+e[3]),o=document.createTextNode(i)}e.insertBefore(o,t),this.parts.push({type:"node",index:++d})}""===l[p]?(e.insertBefore(a(),t),i.push(t)):t.data=l[p],u+=p}}else if(8===t.nodeType)if(t.data===e){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(a(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(i.push(t),d--),u++}else{let r=-1;for(;-1!==(r=t.data.indexOf(e,r+1));)this.parts.push({type:"node",index:-1}),u++}}else p.currentNode=l.pop()}for(const e of i)e.parentNode.removeChild(e)}}exports.Template=o;const n=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},i=e=>-1!==e.index;exports.isTemplatePartActive=i;const a=()=>document.createComment("");exports.createMarker=a;const x=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;exports.lastAttributeNameRegex=x;
},{}],"nn5n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TemplateInstance=void 0;var e=require("./dom.js"),t=require("./template.js");class s{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const s=e.isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),o=[],r=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let i,p=0,l=0,a=n.nextNode();for(;p<r.length;)if(i=r[p],(0,t.isTemplatePartActive)(i)){for(;l<i.index;)l++,"TEMPLATE"===a.nodeName&&(o.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=o.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));p++}else this.__parts.push(void 0),p++;return e.isCEPolyfill&&(document.adoptNode(s),customElements.upgrade(s)),s}}exports.TemplateInstance=s;
},{"./dom.js":"JQ4u","./template.js":"kXJ6"}],"SM33":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SVGTemplateResult=exports.TemplateResult=void 0;var e=require("./dom.js"),t=require("./template.js");const s=` ${t.marker} `;class r{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let r="",n=!1;for(let l=0;l<e;l++){const e=this.strings[l],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=t.lastAttributeNameRegex.exec(e);r+=null===o?e+(n?s:t.nodeMarker):e.substr(0,o.index)+o[1]+o[2]+t.boundAttributeSuffix+o[3]+t.marker}return r+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}exports.TemplateResult=r;class n extends r{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),s=t.content,r=s.firstChild;return s.removeChild(r),(0,e.reparentNodes)(s,r.firstChild),t}}exports.SVGTemplateResult=n;
},{"./dom.js":"JQ4u","./template.js":"kXJ6"}],"PIiJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventPart=exports.PropertyPart=exports.PropertyCommitter=exports.BooleanAttributePart=exports.NodePart=exports.AttributePart=exports.AttributeCommitter=exports.isIterable=exports.isPrimitive=void 0;var t=require("./directive.js"),e=require("./dom.js"),i=require("./part.js"),s=require("./template-instance.js"),n=require("./template-result.js"),r=require("./template.js");const o=t=>null===t||!("object"==typeof t||"function"==typeof t);exports.isPrimitive=o;const a=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);exports.isIterable=a;class h{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new l(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(o(t)||!a(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}exports.AttributeCommitter=h;class l{constructor(t){this.value=void 0,this.committer=t}setValue(e){e===i.noChange||o(e)&&e===this.value||(this.value=e,(0,t.isDirective)(e)||(this.committer.dirty=!0))}commit(){for(;(0,t.isDirective)(this.value);){const t=this.value;this.value=i.noChange,t(this)}this.value!==i.noChange&&this.committer.commit()}}exports.AttributePart=l;class u{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild((0,r.createMarker)()),this.endNode=t.appendChild((0,r.createMarker)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=(0,r.createMarker)()),t.__insert(this.endNode=(0,r.createMarker)())}insertAfterPart(t){t.__insert(this.startNode=(0,r.createMarker)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}const e=this.__pendingValue;e!==i.noChange&&(o(e)?e!==this.value&&this.__commitText(e):e instanceof n.TemplateResult?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):a(e)?this.__commitIterable(e):e===i.nothing?(this.value=i.nothing,this.clear()):this.__commitText(e))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof s.TemplateInstance&&this.value.template===e)this.value.update(t.values);else{const i=new s.TemplateInstance(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)void 0===(i=e[s])&&(i=new u(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){(0,e.removeNodes)(this.startNode.parentNode,t.nextSibling,this.endNode)}}exports.NodePart=u;class d{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}if(this.__pendingValue===i.noChange)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i.noChange}}exports.BooleanAttributePart=d;class c extends h{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new p(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}exports.PropertyCommitter=c;class p extends l{}exports.PropertyPart=p;let _=!1;try{const t={get capture(){return _=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(g){}class m{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;(0,t.isDirective)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.noChange,t(this)}if(this.__pendingValue===i.noChange)return;const e=this.__pendingValue,s=this.value,n=null==e||null!=s&&(e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive),r=null!=e&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=v(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i.noChange}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}exports.EventPart=m;const v=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
},{"./directive.js":"P1HH","./dom.js":"JQ4u","./part.js":"m4zr","./template-instance.js":"nn5n","./template-result.js":"SM33","./template.js":"kXJ6"}],"mAZn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultTemplateProcessor=exports.DefaultTemplateProcessor=void 0;var e=require("./parts.js");class t{handleAttributeExpressions(t,r,s,o){const a=r[0];if("."===a){return new e.PropertyCommitter(t,r.slice(1),s).parts}return"@"===a?[new e.EventPart(t,r.slice(1),o.eventContext)]:"?"===a?[new e.BooleanAttributePart(t,r.slice(1),s)]:new e.AttributeCommitter(t,r,s).parts}handleTextExpression(t){return new e.NodePart(t)}}exports.DefaultTemplateProcessor=t;const r=new t;exports.defaultTemplateProcessor=r;
},{"./parts.js":"PIiJ"}],"K8aL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.templateFactory=t,exports.templateCaches=void 0;var e=require("./template.js");function t(t){let s=r.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const a=t.strings.join(e.marker);return void 0===(n=s.keyString.get(a))&&(n=new e.Template(t,t.getTemplateElement()),s.keyString.set(a,n)),s.stringsArray.set(t.strings,n),n}const r=new Map;exports.templateCaches=r;
},{"./template.js":"kXJ6"}],"dvwX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=exports.parts=void 0;var e=require("./dom.js"),t=require("./parts.js"),r=require("./template-factory.js");const s=new WeakMap;exports.parts=s;const o=(o,a,p)=>{let d=s.get(a);void 0===d&&((0,e.removeNodes)(a,a.firstChild),s.set(a,d=new t.NodePart(Object.assign({templateFactory:r.templateFactory},p))),d.appendInto(a)),d.setValue(o),d.commit()};exports.render=o;
},{"./dom.js":"JQ4u","./parts.js":"PIiJ","./template-factory.js":"K8aL"}],"KMqM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"DefaultTemplateProcessor",{enumerable:!0,get:function(){return e.DefaultTemplateProcessor}}),Object.defineProperty(exports,"defaultTemplateProcessor",{enumerable:!0,get:function(){return e.defaultTemplateProcessor}}),Object.defineProperty(exports,"SVGTemplateResult",{enumerable:!0,get:function(){return t.SVGTemplateResult}}),Object.defineProperty(exports,"TemplateResult",{enumerable:!0,get:function(){return t.TemplateResult}}),Object.defineProperty(exports,"directive",{enumerable:!0,get:function(){return r.directive}}),Object.defineProperty(exports,"isDirective",{enumerable:!0,get:function(){return r.isDirective}}),Object.defineProperty(exports,"removeNodes",{enumerable:!0,get:function(){return n.removeNodes}}),Object.defineProperty(exports,"reparentNodes",{enumerable:!0,get:function(){return n.reparentNodes}}),Object.defineProperty(exports,"noChange",{enumerable:!0,get:function(){return o.noChange}}),Object.defineProperty(exports,"nothing",{enumerable:!0,get:function(){return o.nothing}}),Object.defineProperty(exports,"AttributeCommitter",{enumerable:!0,get:function(){return i.AttributeCommitter}}),Object.defineProperty(exports,"AttributePart",{enumerable:!0,get:function(){return i.AttributePart}}),Object.defineProperty(exports,"BooleanAttributePart",{enumerable:!0,get:function(){return i.BooleanAttributePart}}),Object.defineProperty(exports,"EventPart",{enumerable:!0,get:function(){return i.EventPart}}),Object.defineProperty(exports,"isIterable",{enumerable:!0,get:function(){return i.isIterable}}),Object.defineProperty(exports,"isPrimitive",{enumerable:!0,get:function(){return i.isPrimitive}}),Object.defineProperty(exports,"NodePart",{enumerable:!0,get:function(){return i.NodePart}}),Object.defineProperty(exports,"PropertyCommitter",{enumerable:!0,get:function(){return i.PropertyCommitter}}),Object.defineProperty(exports,"PropertyPart",{enumerable:!0,get:function(){return i.PropertyPart}}),Object.defineProperty(exports,"parts",{enumerable:!0,get:function(){return u.parts}}),Object.defineProperty(exports,"render",{enumerable:!0,get:function(){return u.render}}),Object.defineProperty(exports,"templateCaches",{enumerable:!0,get:function(){return a.templateCaches}}),Object.defineProperty(exports,"templateFactory",{enumerable:!0,get:function(){return a.templateFactory}}),Object.defineProperty(exports,"TemplateInstance",{enumerable:!0,get:function(){return p.TemplateInstance}}),Object.defineProperty(exports,"createMarker",{enumerable:!0,get:function(){return s.createMarker}}),Object.defineProperty(exports,"isTemplatePartActive",{enumerable:!0,get:function(){return s.isTemplatePartActive}}),Object.defineProperty(exports,"Template",{enumerable:!0,get:function(){return s.Template}}),exports.svg=exports.html=void 0;var e=require("./lib/default-template-processor.js"),t=require("./lib/template-result.js"),r=require("./lib/directive.js"),n=require("./lib/dom.js"),o=require("./lib/part.js"),i=require("./lib/parts.js"),u=require("./lib/render.js"),a=require("./lib/template-factory.js"),p=require("./lib/template-instance.js"),s=require("./lib/template.js");(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const l=(r,...n)=>new t.TemplateResult(r,n,"html",e.defaultTemplateProcessor);exports.html=l;const c=(r,...n)=>new t.SVGTemplateResult(r,n,"svg",e.defaultTemplateProcessor);exports.svg=c;
},{"./lib/default-template-processor.js":"mAZn","./lib/template-result.js":"SM33","./lib/directive.js":"P1HH","./lib/dom.js":"JQ4u","./lib/part.js":"m4zr","./lib/parts.js":"PIiJ","./lib/render.js":"dvwX","./lib/template-factory.js":"K8aL","./lib/template-instance.js":"nn5n","./lib/template.js":"kXJ6"}],"RS1Y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=100,t="Z".charCodeAt(0)-"A".charCodeAt(0)+1,n=r*t,u=/^([a-z])([0-9][0-9]?)/i,e=/^(sum|prod|add|sub|div|mul)[(]/,c=function(r){return NaN},a=i("",c);function o(){var u=Array.from({length:r},function(r,n){return Array.from({length:t},function(r,t){return a})});function e(r,t){var e=u[r][t];return function(r){return r>n?NaN:e(r+1)}}return{value:function(r,t){return u[r][t].value()},cell:function(r,t){return u[r][t].displayString},setCell:function(r,t,n){return u[r][t]=n.startsWith("=")?i(n,h(g(n.substr(1)),e)):s(n)}}}function i(r,t){var n=t;return n.displayString=r,n.value=function(){return f(t(0),r)},n}exports.newSpreadsheet=o;var f=function(r,t){return isNaN(r)?t:String(r)};function h(r,t){var n=r.tryMatch(u);if(n){var a=v(n);return t(a[0],a[1])}var o=r.tryMatch(e);if(o)return l[o[1]](r,t);var i=r.tryMatch(/^[^ ,()]+/);if(!i)return c;var f=Number(i[0]);return function(r){return f}}function v(r){if(!r)throw new Error("syntax error: expected reference");return[Number(r[2]),r[1].toUpperCase().charCodeAt(0)-"A".charCodeAt(0)]}function s(r){var t=Number(r);return i(r,function(r){return t})}var d=function(r){return function(t,n){var u=N(t,n),e=u[0],c=u[1];return function(t){return r(e(t),c(t))}}},l={sum:m,prod:y,add:d(function(r,t){return r+t}),sub:d(function(r,t){return r-t}),div:d(function(r,t){return r/t}),mul:d(function(r,t){return r*t})};function m(r,t){var n=p(b(r,t));return function(r){return n(r).reduce(function(r,t){return r+t},0)}}function y(r,t){var n=p(b(r,t));return function(r){return n(r).reduce(function(r,t){return r*t},1)}}var p=function(r){return function(t){return r.map(function(r){return r(t)}).filter(function(r){return!isNaN(r)})}};function N(r,t){var n=h(r,t);r.tryMatch(/^ *, */)||r.match(",");var u=h(r,t);return r.tryMatch(/^ *[)] */)||r.match(")"),[n,u]}function b(r,t){var n=v(r.tryMatch(u)),e=n[0],c=n[1];r.match(":");var a=v(r.tryMatch(u)),o=a[0],i=a[1];r.tryMatch(/^ *[)] */)||r.match(")");var f=o-e+1,h=i-c+1;return Array.from({length:f},function(r,t){return e+t}).reduce(function(r,n){return r.concat(Array.from({length:h},function(r,u){return t(n,u)}))},[])}function g(r){var t=0;return{match:function(n){if(r.substr(t,n.length)!==n)throw new Error("Parse error wanted "+n+" at "+r.substr(t));t+=n.length},tryMatch:function(n){var u=n.exec(r.substr(t));return u&&(t+=u[0].length),u}}}
},{}],"7oXR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.styleMap=void 0;var t=require("../lit-html.js");const e=new WeakMap,r=(0,t.directive)(r=>s=>{if(!(s instanceof t.AttributePart)||s instanceof t.PropertyPart||"style"!==s.committer.name||s.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=s,{style:n}=i.element;e.has(s)||(n.cssText=i.strings.join(" "));const o=e.get(s);for(const t in o)t in r||(-1===t.indexOf("-")?n[t]=null:n.removeProperty(t));for(const t in r)-1===t.indexOf("-")?n[t]=r[t]:n.setProperty(t,r[t]);e.set(s,r)});exports.styleMap=r;
},{"../lit-html.js":"KMqM"}],"93ha":[function(require,module,exports) {
"use strict";var n=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},e=this&&this.__assign||function(){return(e=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},t=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;var r=Array(n),i=0;for(e=0;e<t;e++)for(var l=arguments[e],a=0,u=l.length;a<u;a++,i++)r[i]=l[a];return r};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../node_modules/lit-html/lit-html"),i=require("./spreadsheet"),l=require("../node_modules/lit-html/directives/style-map.js");function a(){var e=0;function t(){e+=1,N()}return function(){return r.html(m||(m=n(['\n    <form class="pure-form">\n      <label>','</label>\n      <div class="pure-button pure-button-primary" @click=',">Count</div>\n    </form>\n  "],['\n    <form class="pure-form">\n      <label>','</label>\n      <div class="pure-button pure-button-primary" @click=',">Count</div>\n    </form>\n  "])),e,t)}}function u(){var e=32;function t(n){e=Number(n.target.value),N()}function i(n){e=Math.round(1.8*Number(n.target.value)+32),N()}return function(){return r.html(v||(v=n(['\n    <form class="pure-form">\n      <input\n        id="celsius"\n        .value="','"\n        @input=','\n      />\n      <label for="celsius">Celsius =</label>\n      <input id="fahrenheit" .value="','" @input=',' />\n      <label for="fahrenheit">Fahrenheit</label>\n    </form>\n  '],['\n    <form class="pure-form">\n      <input\n        id="celsius"\n        .value="','"\n        @input=','\n      />\n      <label for="celsius">Celsius =</label>\n      <input id="fahrenheit" .value="','" @input=',' />\n      <label for="fahrenheit">Fahrenheit</label>\n    </form>\n  '])),Math.round((e-32)/1.8),i,e,t)}}function s(){var e="one-way flight",t=(new Date).toISOString().substr(0,10),i=t,l=!1;function a(n){e=n.target.value,N()}function u(n){t=n.target.value,N()}function s(n){i=n.target.value,N()}function o(){l=!0,N()}return function(){return r.html(h||(h=n(['\n    <form class="pure-form">\n      <fieldset class="pure-group">\n        <select class="pure-input-1-4" id="flight_type" @change=','>\n          <option>one-way flight</option>\n          <option>return flight</option>\n        </select>\n        <input\n          class="pure-input-1-4"\n          type="date"\n          .value=',"\n          @change=",'\n        />\n        <input\n          class="pure-input-1-4"\n          type="date"\n          .value=',"\n          @change=","\n          ?disabled=",'\n        />\n        <div\n          class="pure-button pure-button-primary pure-input-1-4"\n          ?disabled=',"\n          @click=",'\n        >\n          Book\n        </div>\n      </fieldset>\n    </form>\n    <div style="display:','">\n      You have booked a '," on\n      ","",".\n    </div>\n  "],['\n    <form class="pure-form">\n      <fieldset class="pure-group">\n        <select class="pure-input-1-4" id="flight_type" @change=','>\n          <option>one-way flight</option>\n          <option>return flight</option>\n        </select>\n        <input\n          class="pure-input-1-4"\n          type="date"\n          .value=',"\n          @change=",'\n        />\n        <input\n          class="pure-input-1-4"\n          type="date"\n          .value=',"\n          @change=","\n          ?disabled=",'\n        />\n        <div\n          class="pure-button pure-button-primary pure-input-1-4"\n          ?disabled=',"\n          @click=",'\n        >\n          Book\n        </div>\n      </fieldset>\n    </form>\n    <div style="display:','">\n      You have booked a '," on\n      ","",".\n    </div>\n  "])),a,t,u,t,s,"one-way flight"===e,"one-way flight"!==e&&i<=t,o,l?"block":"none",e,t,"one-way flight"!==e?" returning on "+i:"")}}function o(){var e=0,t=25,i=setInterval(l,100);function l(){e<t?e=Math.round(10*e+1)/10:(e=t,clearInterval(i),i=null),N()}function a(n){t=Number(n.target.value),N()}function u(){e=0,i||(i=setInterval(l,100)),N()}return function(){return r.html(b||(b=n(['\n    <style>\n      td {\n        padding: 0.5em 1em;\n      }\n    </style>\n    <table>\n      <tr>\n        <td style="text-align:right">Elapsed time</td>\n        <td style="border: 1px;border-style: solid;width:20em">\n          <div\n            style="height: 16px;background:teal;width:','%"\n          ></div>\n        </td>\n      </tr>\n      <tr>\n        <td style="text-align:right">Elapsed seconds</td>\n        <td>','</td>\n      </tr>\n      <tr>\n        <td style="text-align:right">Duration</td>\n        <td>\n          <input\n            type="range"\n            min="1"\n            max="60"\n            .value="','"\n            style="width:100%"\n            @input=','\n          />\n        </td>\n      </tr>\n    </table>\n\n    <div class="pure-button pure-button-primary" @click=',">Reset</div>\n  "],['\n    <style>\n      td {\n        padding: 0.5em 1em;\n      }\n    </style>\n    <table>\n      <tr>\n        <td style="text-align:right">Elapsed time</td>\n        <td style="border: 1px;border-style: solid;width:20em">\n          <div\n            style="height: 16px;background:teal;width:','%"\n          ></div>\n        </td>\n      </tr>\n      <tr>\n        <td style="text-align:right">Elapsed seconds</td>\n        <td>','</td>\n      </tr>\n      <tr>\n        <td style="text-align:right">Duration</td>\n        <td>\n          <input\n            type="range"\n            min="1"\n            max="60"\n            .value="','"\n            style="width:100%"\n            @input=','\n          />\n        </td>\n      </tr>\n    </table>\n\n    <div class="pure-button pure-button-primary" @click=',">Reset</div>\n  "])),Math.min(100,100*e/t),e,t,a,u)}}function d(){var e="",t=void 0,i=["Emil, Hans","Mustermann, Max","Tisch, Roman"],l=document.createElement("input"),a=document.createElement("input");function u(n){e=n.target.value,N()}function s(n){t=Number(n.target.value);var e=i[t].match("([^,]*), (.*)");a.value=e[1],l.value=e[2],N()}function o(){t=void 0,a.value="",l.value="",N()}function d(){i.push(a.value+", "+l.value),o()}function c(){i[t]=a.value+", "+l.value,N()}function p(){delete i[t],o()}return l.type="text",a.type="text",function(){return r.html(g||(g=n(['\n    <form class="pure-form pure-form-aligned">\n      <div>\n        <label>Filter prefix:</label>\n        <input type="text" .value='," @input=",' />\n      </div>\n      <div>\n        <select size="2" style="height:100px" @change=',">\n          ",'\n        </select>\n        <fieldset style="display:inline-block;vertical-align:middle;">\n          <div class="pure-control-group"><label>Surname:</label>','</div>\n          <div class="pure-control-group"><label>Name:</label>','</div>\n        </fieldset>\n      </div>\n      <div>\n        <span class="pure-button pure-button-primary" @click=','\n          >Create</span\n        >\n        <span\n          class="pure-button pure-button-primary"\n          ?disabled=',"\n          @click=",'\n          >Update</span\n        >\n        <span\n          class="pure-button pure-button-primary"\n          ?disabled=',"\n          @click=","\n          >Delete</span\n        >\n      </div>\n    </form>\n  "],['\n    <form class="pure-form pure-form-aligned">\n      <div>\n        <label>Filter prefix:</label>\n        <input type="text" .value='," @input=",' />\n      </div>\n      <div>\n        <select size="2" style="height:100px" @change=',">\n          ",'\n        </select>\n        <fieldset style="display:inline-block;vertical-align:middle;">\n          <div class="pure-control-group"><label>Surname:</label>','</div>\n          <div class="pure-control-group"><label>Name:</label>','</div>\n        </fieldset>\n      </div>\n      <div>\n        <span class="pure-button pure-button-primary" @click=','\n          >Create</span\n        >\n        <span\n          class="pure-button pure-button-primary"\n          ?disabled=',"\n          @click=",'\n          >Update</span\n        >\n        <span\n          class="pure-button pure-button-primary"\n          ?disabled=',"\n          @click=","\n          >Delete</span\n        >\n      </div>\n    </form>\n  "])),e,u,s,i.map(function(t,i){return!e.length||t.startsWith(e)?r.html(f||(f=n(["\n                  <option value=",">","</option>\n                "],["\n                  <option value=",">","</option>\n                "])),i,t):r.html(y||(y=n([""],[""])))}),a,l,d,void 0===t,c,void 0===t,p)}}function c(){var i={circles:[]},l=[],a=[];function u(){a.push(i),i=l.pop(),N()}function s(){l.push(i),i=a.pop(),N()}var o=void 0;function d(n){o=Number(this.dataset.index),l.push(i),(i={circles:t(i.circles)}).circles[o]=e({},i.circles[o]),n.stopPropagation(),N()}function c(n){i.circles[o].r=Number(this.value),N()}function p(n){void 0!==o&&(l.push(i),o=void 0);var e,r=this.getBoundingClientRect();e={circles:t(i.circles,[{x:n.x-r.left,y:n.y-r.top,r:20}])},l.push(i),i=e,N()}return function(){return r.html(w||(w=n(['\n    <div style="content-align:center">\n      <span\n        class="pure-button pure-button-primary"\n        ?disabled=',"\n        @click=",'\n        >Undo</span\n      >\n      <span\n        class="pure-button pure-button-primary"\n        ?disabled=',"\n        @click=","\n        >Redo</span\n      >\n    </div>\n    <svg @click=",' style="border: 2px solid;">\n      ',"\n    </svg>\n    ","\n  "],['\n    <div style="content-align:center">\n      <span\n        class="pure-button pure-button-primary"\n        ?disabled=',"\n        @click=",'\n        >Undo</span\n      >\n      <span\n        class="pure-button pure-button-primary"\n        ?disabled=',"\n        @click=","\n        >Redo</span\n      >\n    </div>\n    <svg @click=",' style="border: 2px solid;">\n      ',"\n    </svg>\n    ","\n  "])),!l.length,u,!a.length,s,p,i.circles.map(function(e,t){var i=e.x,l=e.y,a=e.r;return r.svg(x||(x=n(["\n          <circle cx="," cy="," r=",' \n            style="fill:',';stroke-width: 1;stroke: black;transition: fill 0.2s ease 0s;"\n             data-index=',"\n             @click=",">\n          </circle>"],["\n          <circle cx="," cy="," r=",' \n            style="fill:',';stroke-width: 1;stroke: black;transition: fill 0.2s ease 0s;"\n             data-index=',"\n             @click=",">\n          </circle>"])),i,l,a,t===o?"grey":"transparent",t,d)}),(t=void 0===o?{x:0,y:0,r:0,display:"none"}:e(e({},i.circles[o]),{display:"block"}),m=t.x,v=t.y,h=t.r,b=t.display,r.html(k||(k=n(['\n      <div class="pure-form" style="display:','">\n        <label>Adjust radius of circle at (',", ",'):</label>\n        <input type="range" @input='," .value="," />\n      </div>\n    "],['\n      <div class="pure-form" style="display:','">\n        <label>Adjust radius of circle at (',", ",'):</label>\n        <input type="range" @input='," .value="," />\n      </div>\n    "])),b,m,v,c,h)));var t,m,v,h,b}}function p(){var e=void 0,t=i.newSpreadsheet(),l=document.createElement("td");l.contentEditable="true",l.addEventListener("keydown",function(n){if(e){var r=a[n.key];if(r){var i=e,u=i.i,s=i.j;t.setCell(u,s,this.innerText),r(u,s),N(),e&&(l.innerText=t.cell(e.i,e.j),l.focus())}}});var a={Enter:function(n,t){return e=void 0},ArrowRight:function(n,t){return t<26&&(e.j+=1)},ArrowLeft:function(n,t){return t>0&&(e.j-=1)},ArrowUp:function(n,t){return n>0&&(e.i-=1)},ArrowDown:function(n,t){return n<99&&(e.i+=1)}};return function(){return r.html(A||(A=n(['\n    <div style="height: 30em;overflow:auto">\n      <table class="pure-table pure-table-bordered">\n        <tr style="background: rgb(246, 246, 246); user-select: none;">\n          <th style="min-width:30px"></th>\n          ',"\n        </tr>\n        ","\n      </table>\n    </div>\n    <span>\n      Click inside a cell to edit its content. Hit enter to apply. Click outside\n      the cell or hit escape to abort. Here are some example contents: '5.5',\n      'Some text', '=A1', '=sum(B2:C4)', '=div(C1, 5)'.\n    </span>\n  "],['\n    <div style="height: 30em;overflow:auto">\n      <table class="pure-table pure-table-bordered">\n        <tr style="background: rgb(246, 246, 246); user-select: none;">\n          <th style="min-width:30px"></th>\n          ',"\n        </tr>\n        ","\n      </table>\n    </div>\n    <span>\n      Click inside a cell to edit its content. Hit enter to apply. Click outside\n      the cell or hit escape to abort. Here are some example contents: '5.5',\n      'Some text', '=A1', '=sum(B2:C4)', '=div(C1, 5)'.\n    </span>\n  "])),Array.from({length:26},function(e,t){return r.html(C||(C=n(['\n              <th style="min-width:64px; border: 1px solid rgb(187, 187, 187);">\n                ',"\n              </th>\n            "],['\n              <th style="min-width:64px; border: 1px solid rgb(187, 187, 187);">\n                ',"\n              </th>\n            "])),String.fromCharCode(65+t))}),Array.from({length:100},function(i,a){return r.html(E||(E=n(['\n            <tr>\n              <td\n                style="background: rgb(246, 246, 246); border: 1px solid rgb(187, 187, 187); user-select: none; text-align: center;"\n              >\n                <b>',"</b>\n              </td>\n              ","\n            </tr>\n          "],['\n            <tr>\n              <td\n                style="background: rgb(246, 246, 246); border: 1px solid rgb(187, 187, 187); user-select: none; text-align: center;"\n              >\n                <b>',"</b>\n              </td>\n              ","\n            </tr>\n          "])),a,Array.from({length:26},function(i,u){return e&&e.i===a&&e.j===u?l:r.html(j||(j=n(["\n                      <td\n                        @click=","\n                      >\n                        ","\n                      </td>\n                    "],["\n                      <td\n                        @click=","\n                      >\n                        ","\n                      </td>\n                    "])),function(n){e={i:a,j:u},l.innerText=t.cell(a,u),N(),l.focus()},t.value(a,u))}))}))}}var m,v,h,b,f,y,g,x,k,w,C,j,E,A,_,O,D,M={counter:{name:"Counter",render:a()},converter:{name:"Temperature Converter",render:u()},booker:{name:"Flight Booker",render:s()},timer:{name:"Timer",render:o()},crud:{name:"CRUD",render:d()},drawer:{name:"Circle Drawer",render:c()},cells:{name:"Cells",render:p()}},N=function(){return r.render(r.html(D||(D=n(['\n      <div\n        class="pure-menu-scrollable pure-menu-horizontal"\n        style="height:32px;background-color:blanchedalmond"\n      >\n        <div class="pure-menu-heading">Examples</div>\n        <ul class="pure-menu-list">\n          ','\n        </ul>\n      </div>\n      <p></p>\n      <div\n        style="margin-left:auto; margin-right:auto; max-width:48em; color:#777"\n      >\n        ',"\n      </div>\n    "],['\n      <div\n        class="pure-menu-scrollable pure-menu-horizontal"\n        style="height:32px;background-color:blanchedalmond"\n      >\n        <div class="pure-menu-heading">Examples</div>\n        <ul class="pure-menu-list">\n          ','\n        </ul>\n      </div>\n      <p></p>\n      <div\n        style="margin-left:auto; margin-right:auto; max-width:48em; color:#777"\n      >\n        ',"\n      </div>\n    "])),Object.entries(M).map(function(e){var t=e[0],i=e[1].name;return r.html(_||(_=n(['\n                <li class="pure-menu-item">\n                  <a href="#','" class="pure-menu-link">',"</a>\n                </li>\n              "],['\n                <li class="pure-menu-item">\n                  <a href="#','" class="pure-menu-link">',"</a>\n                </li>\n              "])),t,i)}),Object.entries(M).map(function(e){var t=e[0],i=e[1].render;return r.html(O||(O=n(['\n              <div\n                style="','"\n              >\n                ',"\n              </div>\n            "],['\n              <div\n                style="','"\n              >\n                ',"\n              </div>\n            "])),l.styleMap("#"+t===window.location.hash?{}:{display:"none"}),i())})),document.body)};window.location.hash||(window.location.hash="counter"),N(),window.addEventListener("hashchange",N);
},{"../node_modules/lit-html/lit-html":"KMqM","./spreadsheet":"RS1Y","../node_modules/lit-html/directives/style-map.js":"7oXR"}]},{},["93ha"], null)
//# sourceMappingURL=app.c5005c55.js.map