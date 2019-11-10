// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/lit-html/lib/directive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDirective = exports.directive = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

const directive = f => (...args) => {
  const d = f(...args);
  directives.set(d, true);
  return d;
};

exports.directive = directive;

const isDirective = o => {
  return typeof o === 'function' && directives.has(o);
};

exports.isDirective = isDirective;
},{}],"node_modules/lit-html/lib/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNodes = exports.reparentNodes = exports.isCEPolyfill = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

exports.isCEPolyfill = isCEPolyfill;

const reparentNodes = (container, start, end = null, before = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */


exports.reparentNodes = reparentNodes;

const removeNodes = (container, start, end = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

exports.removeNodes = removeNodes;
},{}],"node_modules/lit-html/lib/part.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nothing = exports.noChange = void 0;

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

exports.noChange = noChange;
const nothing = {};
exports.nothing = nothing;
},{}],"node_modules/lit-html/lib/template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastAttributeNameRegex = exports.createMarker = exports.isTemplatePartActive = exports.Template = exports.boundAttributeSuffix = exports.markerRegex = exports.nodeMarker = exports.marker = void 0;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

exports.marker = marker;
const nodeMarker = `<!--${marker}-->`;
exports.nodeMarker = nodeMarker;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */

exports.markerRegex = markerRegex;
const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

exports.boundAttributeSuffix = boundAttributeSuffix;

class Template {
  constructor(result, element) {
    this.parts = [];
    this.element = element;
    const nodesToRemove = [];
    const stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(element.content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    let lastPartIndex = 0;
    let index = -1;
    let partIndex = 0;
    const {
      strings,
      values: {
        length
      }
    } = result;

    while (partIndex < length) {
      const node = walker.nextNode();

      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }

      index++;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            const attributes = node.attributes;
            const {
              length
            } = attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondence between part index and attribute index.

            let count = 0;

            for (let i = 0; i < length; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              const stringForPart = strings[partIndex]; // Find the attribute name

              const name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              const attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              const statics = attributeValue.split(markerRegex);
              this.parts.push({
                type: 'attribute',
                index,
                name,
                strings: statics
              });
              partIndex += statics.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          const data = node.data;

          if (data.indexOf(marker) >= 0) {
            const parent = node.parentNode;
            const strings = data.split(markerRegex);
            const lastIndex = strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (let i = 0; i < lastIndex; i++) {
              let insert;
              let s = strings[i];

              if (s === '') {
                insert = createMarker();
              } else {
                const match = lastAttributeNameRegex.exec(s);

                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }

                insert = document.createTextNode(s);
              }

              parent.insertBefore(insert, node);
              this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            const parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;
            this.parts.push({
              type: 'node',
              index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.

            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            let i = -1;

            while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              this.parts.push({
                type: 'node',
                index: -1
              });
              partIndex++;
            }
          }
        }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }

}

exports.Template = Template;

const endsWith = (str, suffix) => {
  const index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

const isTemplatePartActive = part => part.index !== -1; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.


exports.isTemplatePartActive = isTemplatePartActive;

const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */


exports.createMarker = createMarker;
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
exports.lastAttributeNameRegex = lastAttributeNameRegex;
},{}],"node_modules/lit-html/lib/template-instance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateInstance = void 0;

var _dom = require("./dom.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
  constructor(template, processor, options) {
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  update(values) {
    let i = 0;

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.setValue(values[i]);
      }

      i++;
    }

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.commit();
      }
    }
  }

  _clone() {
    // There are a number of steps in the lifecycle of a template instance's
    // DOM fragment:
    //  1. Clone - create the instance fragment
    //  2. Adopt - adopt into the main document
    //  3. Process - find part markers and create parts
    //  4. Upgrade - upgrade custom elements
    //  5. Update - set node, attribute, property, etc., values
    //  6. Connect - connect to the document. Optional and outside of this
    //     method.
    //
    // We have a few constraints on the ordering of these steps:
    //  * We need to upgrade before updating, so that property values will pass
    //    through any property setters.
    //  * We would like to process before upgrading so that we're sure that the
    //    cloned fragment is inert and not disturbed by self-modifying DOM.
    //  * We want custom elements to upgrade even in disconnected fragments.
    //
    // Given these constraints, with full custom elements support we would
    // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
    //
    // But Safari dooes not implement CustomElementRegistry#upgrade, so we
    // can not implement that order and still have upgrade-before-update and
    // upgrade disconnected fragments. So we instead sacrifice the
    // process-before-upgrade constraint, since in Custom Elements v1 elements
    // must not modify their light DOM in the constructor. We still have issues
    // when co-existing with CEv0 elements like Polymer 1, and with polyfills
    // that don't strictly adhere to the no-modification rule because shadow
    // DOM, which may be created in the constructor, is emulated by being placed
    // in the light DOM.
    //
    // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
    // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
    // in one step.
    //
    // The Custom Elements v1 polyfill supports upgrade(), so the order when
    // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
    // Connect.
    const fragment = _dom.isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const stack = [];
    const parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(fragment, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false);
    let partIndex = 0;
    let nodeIndex = 0;
    let part;
    let node = walker.nextNode(); // Loop through all the nodes and parts of a template

    while (partIndex < parts.length) {
      part = parts[partIndex];

      if (!(0, _template.isTemplatePartActive)(part)) {
        this.__parts.push(undefined);

        partIndex++;
        continue;
      } // Progress the tree walker until we find our next part's node.
      // Note that multiple parts may share the same node (attribute parts
      // on a single element), so this loop may not run at all.


      while (nodeIndex < part.index) {
        nodeIndex++;

        if (node.nodeName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }

        if ((node = walker.nextNode()) === null) {
          // We've exhausted the content inside a nested template element.
          // Because we still have parts (the outer for-loop), we know:
          // - There is a template in the stack
          // - The walker will find a nextNode outside the template
          walker.currentNode = stack.pop();
          node = walker.nextNode();
        }
      } // We've arrived at our part's node.


      if (part.type === 'node') {
        const part = this.processor.handleTextExpression(this.options);
        part.insertAfterNode(node.previousSibling);

        this.__parts.push(part);
      } else {
        this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
      }

      partIndex++;
    }

    if (_dom.isCEPolyfill) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }

    return fragment;
  }

}

exports.TemplateInstance = TemplateInstance;
},{"./dom.js":"node_modules/lit-html/lib/dom.js","./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/template-result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGTemplateResult = exports.TemplateResult = void 0;

var _dom = require("./dom.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */
const commentMarker = ` ${_template.marker} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

class TemplateResult {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  getHTML() {
    const l = this.strings.length - 1;
    let html = '';
    let isCommentBinding = false;

    for (let i = 0; i < l; i++) {
      const s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
      // into the template source before it's parsed by the browser's HTML
      // parser. The marker type is based on whether the expression is in an
      // attribute, text, or comment poisition.
      //   * For node-position bindings we insert a comment with the marker
      //     sentinel as its text content, like <!--{{lit-guid}}-->.
      //   * For attribute bindings we insert just the marker sentinel for the
      //     first binding, so that we support unquoted attribute bindings.
      //     Subsequent bindings can use a comment marker because multi-binding
      //     attributes must be quoted.
      //   * For comment bindings we insert just the marker sentinel so we don't
      //     close the comment.
      //
      // The following code scans the template source, but is *not* an HTML
      // parser. We don't need to track the tree structure of the HTML, only
      // whether a binding is inside a comment, and if not, if it appears to be
      // the first binding in an attribute.

      const commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
      // comment close. Because <-- can appear in an attribute value there can
      // be false positives.

      isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceeding the
      // expression. This can match "name=value" like structures in text,
      // comments, and attribute values, so there can be false-positives.

      const attributeMatch = _template.lastAttributeNameRegex.exec(s);

      if (attributeMatch === null) {
        // We're only in this branch if we don't have a attribute-like
        // preceeding sequence. For comments, this guards against unusual
        // attribute values like <div foo="<!--${'bar'}">. Cases like
        // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
        // below.
        html += s + (isCommentBinding ? commentMarker : _template.nodeMarker);
      } else {
        // For attributes we use just a marker sentinel, and also append a
        // $lit$ suffix to the name to opt-out of attribute-specific parsing
        // that IE and Edge do for style and certain SVG attributes.
        html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template.boundAttributeSuffix + attributeMatch[3] + _template.marker;
      }
    }

    html += this.strings[l];
    return html;
  }

  getTemplateElement() {
    const template = document.createElement('template');
    template.innerHTML = this.getHTML();
    return template;
  }

}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */


exports.TemplateResult = TemplateResult;

class SVGTemplateResult extends TemplateResult {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }

  getTemplateElement() {
    const template = super.getTemplateElement();
    const content = template.content;
    const svgElement = content.firstChild;
    content.removeChild(svgElement);
    (0, _dom.reparentNodes)(content, svgElement.firstChild);
    return template;
  }

}

exports.SVGTemplateResult = SVGTemplateResult;
},{"./dom.js":"node_modules/lit-html/lib/dom.js","./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/parts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventPart = exports.PropertyPart = exports.PropertyCommitter = exports.BooleanAttributePart = exports.NodePart = exports.AttributePart = exports.AttributeCommitter = exports.isIterable = exports.isPrimitive = void 0;

var _directive = require("./directive.js");

var _dom = require("./dom.js");

var _part = require("./part.js");

var _templateInstance = require("./template-instance.js");

var _templateResult = require("./template-result.js");

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */
const isPrimitive = value => {
  return value === null || !(typeof value === 'object' || typeof value === 'function');
};

exports.isPrimitive = isPrimitive;

const isIterable = value => {
  return Array.isArray(value) || // tslint:disable-next-line:no-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */


exports.isIterable = isIterable;

class AttributeCommitter {
  constructor(element, name, strings) {
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createPart() {
    return new AttributePart(this);
  }

  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    let text = '';

    for (let i = 0; i < l; i++) {
      text += strings[i];
      const part = this.parts[i];

      if (part !== undefined) {
        const v = part.value;

        if (isPrimitive(v) || !isIterable(v)) {
          text += typeof v === 'string' ? v : String(v);
        } else {
          for (const t of v) {
            text += typeof t === 'string' ? t : String(t);
          }
        }
      }
    }

    text += strings[l];
    return text;
  }

  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }

}
/**
 * A Part that controls all or part of an attribute value.
 */


exports.AttributeCommitter = AttributeCommitter;

class AttributePart {
  constructor(committer) {
    this.value = undefined;
    this.committer = committer;
  }

  setValue(value) {
    if (value !== _part.noChange && (!isPrimitive(value) || value !== this.value)) {
      this.value = value; // If the value is a not a directive, dirty the committer so that it'll
      // call setAttribute. If the value is a directive, it'll dirty the
      // committer if it calls setValue().

      if (!(0, _directive.isDirective)(value)) {
        this.committer.dirty = true;
      }
    }
  }

  commit() {
    while ((0, _directive.isDirective)(this.value)) {
      const directive = this.value;
      this.value = _part.noChange;
      directive(this);
    }

    if (this.value === _part.noChange) {
      return;
    }

    this.committer.commit();
  }

}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */


exports.AttributePart = AttributePart;

class NodePart {
  constructor(options) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendInto(container) {
    this.startNode = container.appendChild((0, _template.createMarker)());
    this.endNode = container.appendChild((0, _template.createMarker)());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendIntoPart(part) {
    part.__insert(this.startNode = (0, _template.createMarker)());

    part.__insert(this.endNode = (0, _template.createMarker)());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterPart(ref) {
    ref.__insert(this.startNode = (0, _template.createMarker)());

    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    const value = this.__pendingValue;

    if (value === _part.noChange) {
      return;
    }

    if (isPrimitive(value)) {
      if (value !== this.value) {
        this.__commitText(value);
      }
    } else if (value instanceof _templateResult.TemplateResult) {
      this.__commitTemplateResult(value);
    } else if (value instanceof Node) {
      this.__commitNode(value);
    } else if (isIterable(value)) {
      this.__commitIterable(value);
    } else if (value === _part.nothing) {
      this.value = _part.nothing;
      this.clear();
    } else {
      // Fallback, will render the string representation
      this.__commitText(value);
    }
  }

  __insert(node) {
    this.endNode.parentNode.insertBefore(node, this.endNode);
  }

  __commitNode(value) {
    if (this.value === value) {
      return;
    }

    this.clear();

    this.__insert(value);

    this.value = value;
  }

  __commitText(value) {
    const node = this.startNode.nextSibling;
    value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
    // it can't be implicitly converted - i.e. it's a symbol.

    const valueAsString = typeof value === 'string' ? value : String(value);

    if (node === this.endNode.previousSibling && node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
      } else {
      this.__commitNode(document.createTextNode(valueAsString));
    }

    this.value = value;
  }

  __commitTemplateResult(value) {
    const template = this.options.templateFactory(value);

    if (this.value instanceof _templateInstance.TemplateInstance && this.value.template === template) {
      this.value.update(value.values);
    } else {
      // Make sure we propagate the template processor from the TemplateResult
      // so that we use its syntax extension, etc. The template factory comes
      // from the render function options so that it can control template
      // caching and preprocessing.
      const instance = new _templateInstance.TemplateInstance(template, value.processor, this.options);

      const fragment = instance._clone();

      instance.update(value.values);

      this.__commitNode(fragment);

      this.value = instance;
    }
  }

  __commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If _value is an array, then the previous render was of an
    // iterable and _value will contain the NodeParts from the previous
    // render. If _value is not an array, clear this part and make a new
    // array for NodeParts.
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    } // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render


    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;

    for (const item of value) {
      // Try to reuse an existing part
      itemPart = itemParts[partIndex]; // If no existing part, create a new one

      if (itemPart === undefined) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);

        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }

      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }

    if (partIndex < itemParts.length) {
      // Truncate the parts array so _value reflects the current state
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }

  clear(startNode = this.startNode) {
    (0, _dom.removeNodes)(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }

}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */


exports.NodePart = NodePart;

class BooleanAttributePart {
  constructor(element, name, strings) {
    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    if (this.__pendingValue === _part.noChange) {
      return;
    }

    const value = !!this.__pendingValue;

    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, '');
      } else {
        this.element.removeAttribute(this.name);
      }

      this.value = value;
    }

    this.__pendingValue = _part.noChange;
  }

}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */


exports.BooleanAttributePart = BooleanAttributePart;

class PropertyCommitter extends AttributeCommitter {
  constructor(element, name, strings) {
    super(element, name, strings);
    this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
  }

  _createPart() {
    return new PropertyPart(this);
  }

  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }

    return super._getValue();
  }

  commit() {
    if (this.dirty) {
      this.dirty = false; // tslint:disable-next-line:no-any

      this.element[this.name] = this._getValue();
    }
  }

}

exports.PropertyCommitter = PropertyCommitter;

class PropertyPart extends AttributePart {} // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.


exports.PropertyPart = PropertyPart;
let eventOptionsSupported = false;

try {
  const options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }

  }; // tslint:disable-next-line:no-any

  window.addEventListener('test', options, options); // tslint:disable-next-line:no-any

  window.removeEventListener('test', options, options);
} catch (_e) {}

class EventPart {
  constructor(element, eventName, eventContext) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = e => this.handleEvent(e);
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while ((0, _directive.isDirective)(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part.noChange;
      directive(this);
    }

    if (this.__pendingValue === _part.noChange) {
      return;
    }

    const newListener = this.__pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    if (shouldAddListener) {
      this.__options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    this.value = newListener;
    this.__pendingValue = _part.noChange;
  }

  handleEvent(event) {
    if (typeof this.value === 'function') {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }

} // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.


exports.EventPart = EventPart;

const getOptions = o => o && (eventOptionsSupported ? {
  capture: o.capture,
  passive: o.passive,
  once: o.once
} : o.capture);
},{"./directive.js":"node_modules/lit-html/lib/directive.js","./dom.js":"node_modules/lit-html/lib/dom.js","./part.js":"node_modules/lit-html/lib/part.js","./template-instance.js":"node_modules/lit-html/lib/template-instance.js","./template-result.js":"node_modules/lit-html/lib/template-result.js","./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/default-template-processor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTemplateProcessor = exports.DefaultTemplateProcessor = void 0;

var _parts = require("./parts.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(element, name, strings, options) {
    const prefix = name[0];

    if (prefix === '.') {
      const committer = new _parts.PropertyCommitter(element, name.slice(1), strings);
      return committer.parts;
    }

    if (prefix === '@') {
      return [new _parts.EventPart(element, name.slice(1), options.eventContext)];
    }

    if (prefix === '?') {
      return [new _parts.BooleanAttributePart(element, name.slice(1), strings)];
    }

    const committer = new _parts.AttributeCommitter(element, name, strings);
    return committer.parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */


  handleTextExpression(options) {
    return new _parts.NodePart(options);
  }

}

exports.DefaultTemplateProcessor = DefaultTemplateProcessor;
const defaultTemplateProcessor = new DefaultTemplateProcessor();
exports.defaultTemplateProcessor = defaultTemplateProcessor;
},{"./parts.js":"node_modules/lit-html/lib/parts.js"}],"node_modules/lit-html/lib/template-factory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateFactory = templateFactory;
exports.templateCaches = void 0;

var _template = require("./template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  const key = result.strings.join(_template.marker); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template.Template(result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}

const templateCaches = new Map();
exports.templateCaches = templateCaches;
},{"./template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/lib/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.parts = void 0;

var _dom = require("./dom.js");

var _parts = require("./parts.js");

var _templateFactory = require("./template-factory.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */
const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

exports.parts = parts;

const render = (result, container, options) => {
  let part = parts.get(container);

  if (part === undefined) {
    (0, _dom.removeNodes)(container, container.firstChild);
    parts.set(container, part = new _parts.NodePart(Object.assign({
      templateFactory: _templateFactory.templateFactory
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

exports.render = render;
},{"./dom.js":"node_modules/lit-html/lib/dom.js","./parts.js":"node_modules/lit-html/lib/parts.js","./template-factory.js":"node_modules/lit-html/lib/template-factory.js"}],"node_modules/lit-html/lit-html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DefaultTemplateProcessor", {
  enumerable: true,
  get: function () {
    return _defaultTemplateProcessor.DefaultTemplateProcessor;
  }
});
Object.defineProperty(exports, "defaultTemplateProcessor", {
  enumerable: true,
  get: function () {
    return _defaultTemplateProcessor.defaultTemplateProcessor;
  }
});
Object.defineProperty(exports, "SVGTemplateResult", {
  enumerable: true,
  get: function () {
    return _templateResult.SVGTemplateResult;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function () {
    return _templateResult.TemplateResult;
  }
});
Object.defineProperty(exports, "directive", {
  enumerable: true,
  get: function () {
    return _directive.directive;
  }
});
Object.defineProperty(exports, "isDirective", {
  enumerable: true,
  get: function () {
    return _directive.isDirective;
  }
});
Object.defineProperty(exports, "removeNodes", {
  enumerable: true,
  get: function () {
    return _dom.removeNodes;
  }
});
Object.defineProperty(exports, "reparentNodes", {
  enumerable: true,
  get: function () {
    return _dom.reparentNodes;
  }
});
Object.defineProperty(exports, "noChange", {
  enumerable: true,
  get: function () {
    return _part.noChange;
  }
});
Object.defineProperty(exports, "nothing", {
  enumerable: true,
  get: function () {
    return _part.nothing;
  }
});
Object.defineProperty(exports, "AttributeCommitter", {
  enumerable: true,
  get: function () {
    return _parts.AttributeCommitter;
  }
});
Object.defineProperty(exports, "AttributePart", {
  enumerable: true,
  get: function () {
    return _parts.AttributePart;
  }
});
Object.defineProperty(exports, "BooleanAttributePart", {
  enumerable: true,
  get: function () {
    return _parts.BooleanAttributePart;
  }
});
Object.defineProperty(exports, "EventPart", {
  enumerable: true,
  get: function () {
    return _parts.EventPart;
  }
});
Object.defineProperty(exports, "isIterable", {
  enumerable: true,
  get: function () {
    return _parts.isIterable;
  }
});
Object.defineProperty(exports, "isPrimitive", {
  enumerable: true,
  get: function () {
    return _parts.isPrimitive;
  }
});
Object.defineProperty(exports, "NodePart", {
  enumerable: true,
  get: function () {
    return _parts.NodePart;
  }
});
Object.defineProperty(exports, "PropertyCommitter", {
  enumerable: true,
  get: function () {
    return _parts.PropertyCommitter;
  }
});
Object.defineProperty(exports, "PropertyPart", {
  enumerable: true,
  get: function () {
    return _parts.PropertyPart;
  }
});
Object.defineProperty(exports, "parts", {
  enumerable: true,
  get: function () {
    return _render.parts;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _render.render;
  }
});
Object.defineProperty(exports, "templateCaches", {
  enumerable: true,
  get: function () {
    return _templateFactory.templateCaches;
  }
});
Object.defineProperty(exports, "templateFactory", {
  enumerable: true,
  get: function () {
    return _templateFactory.templateFactory;
  }
});
Object.defineProperty(exports, "TemplateInstance", {
  enumerable: true,
  get: function () {
    return _templateInstance.TemplateInstance;
  }
});
Object.defineProperty(exports, "createMarker", {
  enumerable: true,
  get: function () {
    return _template.createMarker;
  }
});
Object.defineProperty(exports, "isTemplatePartActive", {
  enumerable: true,
  get: function () {
    return _template.isTemplatePartActive;
  }
});
Object.defineProperty(exports, "Template", {
  enumerable: true,
  get: function () {
    return _template.Template;
  }
});
exports.svg = exports.html = void 0;

var _defaultTemplateProcessor = require("./lib/default-template-processor.js");

var _templateResult = require("./lib/template-result.js");

var _directive = require("./lib/directive.js");

var _dom = require("./lib/dom.js");

var _part = require("./lib/part.js");

var _parts = require("./lib/parts.js");

var _render = require("./lib/render.js");

var _templateFactory = require("./lib/template-factory.js");

var _templateInstance = require("./lib/template-instance.js");

var _template = require("./lib/template.js");

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */
// TODO(justinfagnani): remove line when we get NodePart moving methods
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.2');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */

const html = (strings, ...values) => new _templateResult.TemplateResult(strings, values, 'html', _defaultTemplateProcessor.defaultTemplateProcessor);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */


exports.html = html;

const svg = (strings, ...values) => new _templateResult.SVGTemplateResult(strings, values, 'svg', _defaultTemplateProcessor.defaultTemplateProcessor);

exports.svg = svg;
},{"./lib/default-template-processor.js":"node_modules/lit-html/lib/default-template-processor.js","./lib/template-result.js":"node_modules/lit-html/lib/template-result.js","./lib/directive.js":"node_modules/lit-html/lib/directive.js","./lib/dom.js":"node_modules/lit-html/lib/dom.js","./lib/part.js":"node_modules/lit-html/lib/part.js","./lib/parts.js":"node_modules/lit-html/lib/parts.js","./lib/render.js":"node_modules/lit-html/lib/render.js","./lib/template-factory.js":"node_modules/lit-html/lib/template-factory.js","./lib/template-instance.js":"node_modules/lit-html/lib/template-instance.js","./lib/template.js":"node_modules/lit-html/lib/template.js"}],"node_modules/lit-html/directives/style-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleMap = void 0;

var _litHtml = require("../lit-html.js");

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */
const styleMapCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS propertes. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */

const styleMap = (0, _litHtml.directive)(styleInfo => part => {
  if (!(part instanceof _litHtml.AttributePart) || part instanceof _litHtml.PropertyPart || part.committer.name !== 'style' || part.committer.parts.length > 1) {
    throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
  }

  const {
    committer
  } = part;
  const {
    style
  } = committer.element; // Handle static styles the first time we see a Part

  if (!styleMapCache.has(part)) {
    style.cssText = committer.strings.join(' ');
  } // Remove old properties that no longer exist in styleInfo


  const oldInfo = styleMapCache.get(part);

  for (const name in oldInfo) {
    if (!(name in styleInfo)) {
      if (name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[name] = null;
      } else {
        style.removeProperty(name);
      }
    }
  } // Add or update properties


  for (const name in styleInfo) {
    if (name.indexOf('-') === -1) {
      // tslint:disable-next-line:no-any
      style[name] = styleInfo[name];
    } else {
      style.setProperty(name, styleInfo[name]);
    }
  }

  styleMapCache.set(part, styleInfo);
});
exports.styleMap = styleMap;
},{"../lit-html.js":"node_modules/lit-html/lit-html.js"}],"ts/spreadsheet.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROW_COUNT = 100;
var COL_COUNT = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
var CELL_COUNT = ROW_COUNT * COL_COUNT;
var REF_PATTERN = /^([a-z])([0-9][0-9]?)/i; // Cell references A0 to Z99

var OP_PATTERN = /^(sum|prod|add|sub|div|mul)[(]/;

var ALWAYS_NAN = function ALWAYS_NAN(depth) {
  return NaN;
};

var EMPTY_FORMULA = newFormula('', ALWAYS_NAN);

function newSpreadsheet() {
  var cells = Array.from({
    length: ROW_COUNT
  }, function (_, i) {
    return Array.from({
      length: COL_COUNT
    }, function (_, j) {
      return EMPTY_FORMULA;
    });
  });

  var deref = function deref(row, col) {
    return function (depth) {
      return depth > CELL_COUNT ? NaN : cells[row][col](depth + 1);
    };
  };

  return {
    value: function value(row, col) {
      return cells[row][col].value();
    },
    cell: function cell(row, col) {
      return cells[row][col].displayString;
    },
    setCell: function setCell(row, col, cell) {
      return cells[row][col] = cell.startsWith('=') ? newFormula(cell, parseExpr(newParseState(cell.substr(1)), deref)) : parseConstant(cell);
    }
  };
}

exports.newSpreadsheet = newSpreadsheet;

function newFormula(displayString, calc) {
  var result = calc;
  result.displayString = displayString;

  result.value = function () {
    return toStringWithFallback(calc(0), displayString);
  };

  return result;
}

var toStringWithFallback = function toStringWithFallback(n, fallback) {
  return isNaN(n) ? fallback : String(n);
};

function parseExpr(expr, env) {
  var refMatch = expr.tryMatch(REF_PATTERN);

  if (refMatch) {
    var _a = parseRef(refMatch),
        row = _a[0],
        col = _a[1];

    return env(row, col);
  }

  var opMatch = expr.tryMatch(OP_PATTERN);

  if (opMatch) {
    return ARG_PARSER_BY_OP[opMatch[1]](expr, env);
  }

  var constMatch = expr.tryMatch(/^[^ ,()]+/);

  if (!constMatch) {
    return ALWAYS_NAN;
  }

  var n = Number(constMatch[0]);
  return function (_) {
    return n;
  };
}

function parseRef(refMatch) {
  if (!refMatch) throw new Error('syntax error: expected reference');
  return [Number(refMatch[2]), refMatch[1].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0)];
} // Returns Formula with the given text as display string. The
// Formula's calculated value is the given text as a number if
// possible, NaN otherwise.


function parseConstant(text) {
  var n = Number(text);
  return newFormula(text, function (_) {
    return n;
  });
}

var binOp = function binOp(op) {
  return function (args, env) {
    var _a = parseTwoArgs(args, env),
        first = _a[0],
        second = _a[1];

    return function (depth) {
      return op(first(depth), second(depth));
    };
  };
};

var ARG_PARSER_BY_OP = {
  sum: sum,
  prod: prod,
  add: binOp(function (x, y) {
    return x + y;
  }),
  sub: binOp(function (x, y) {
    return x - y;
  }),
  div: binOp(function (x, y) {
    return x / y;
  }),
  mul: binOp(function (x, y) {
    return x * y;
  })
};

function sum(rect, env) {
  var argValues = rectValues(parseRect(rect, env));
  return function (depth) {
    return argValues(depth).reduce(function (a, n) {
      return a + n;
    }, 0);
  };
}

function prod(rect, env) {
  var argValues = rectValues(parseRect(rect, env));
  return function (depth) {
    return argValues(depth).reduce(function (a, n) {
      return a * n;
    }, 1);
  };
} // Function returning a list of (non-NaN) numbers from the given calculators.


var rectValues = function rectValues(rectCalculators) {
  return function (depth) {
    return rectCalculators.map(function (f) {
      return f(depth);
    }).filter(function (n) {
      return !isNaN(n);
    });
  };
};

function parseTwoArgs(args, env) {
  var first = parseExpr(args, env);
  if (!args.tryMatch(/^ *, */)) args.match(',');
  var second = parseExpr(args, env);
  if (!args.tryMatch(/^ *[)] */)) args.match(')');
  return [first, second];
}

function parseRect(rect, env) {
  var _a = parseRef(rect.tryMatch(REF_PATTERN)),
      ulRow = _a[0],
      ulCol = _a[1];

  rect.match(':');

  var _b = parseRef(rect.tryMatch(REF_PATTERN)),
      lrRow = _b[0],
      lrCol = _b[1];

  if (!rect.tryMatch(/^ *[)] */)) rect.match(')');
  var h = lrRow - ulRow + 1;
  var w = lrCol - ulCol + 1;
  return Array.from({
    length: h
  }, function (_, i) {
    return ulRow + i;
  }).reduce(function (acc, i) {
    return acc.concat(Array.from({
      length: w
    }, function (_, j) {
      return env(i, j);
    }));
  }, []);
}

function newParseState(text) {
  var pos = 0;

  function match(expected) {
    if (text.substr(pos, expected.length) === expected) {
      pos += expected.length;
    } else {
      throw new Error("Parse error wanted " + expected + " at " + text.substr(pos));
    }
  }

  function tryMatch(r) {
    var match = r.exec(text.substr(pos));

    if (match) {
      pos += match[0].length;
    }

    return match;
  }

  return {
    match: match,
    tryMatch: tryMatch
  };
}
},{}],"ts/model.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var spreadsheet_1 = require("./spreadsheet");

function newCounter() {
  var count = 0;
  return {
    get count() {
      return count;
    },

    incr: function incr() {
      return count += 1;
    }
  };
}

function newConverter() {
  var temp = 32; // in Fahrenheitn

  return {
    get celsius() {
      return Math.round((temp - 32) / 1.8);
    },

    set celsius(c) {
      temp = Math.round(c * 1.8 + 32);
    },

    get fahrenheit() {
      return temp;
    },

    set fahrenheit(f) {
      temp = f;
    }

  };
}

function newBooker() {
  var outbound = new Date().toISOString().substr(0, 10); // match yyyy-MM-dd format used by date input

  var back = undefined;
  var booked = false;
  return {
    outbound: outbound,
    booked: booked,

    get back() {
      return back;
    },

    set back(b) {
      back = b === undefined || b > outbound ? b : outbound;
    }

  };
}

function newTimer() {
  var elapsed = 0;
  var duration = 25;
  var timer = setInterval(tick, 100);

  function tick() {
    elapsed = Math.round(10 * elapsed + 1) / 10;
    normalize();
  }

  function normalize() {
    if (elapsed < duration) {
      if (!timer) {
        timer = setInterval(tick, 100);
      }
    } else {
      elapsed = duration;

      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
  }

  return {
    get elapsed() {
      return elapsed;
    },

    get duration() {
      return duration;
    },

    set duration(d) {
      duration = d;
      normalize();
    },

    reset: function reset() {
      elapsed = 0;
      normalize();
    }
  };
}

function newCrud() {
  var prefix = '';
  var selected = undefined;
  var nameList = ['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'];

  function setSelected(i) {
    selected = i;

    if (i !== undefined) {
      var match = nameList[i].match('([^,]*), (.*)');

      if (match) {
        return {
          first: match[2],
          last: match[1]
        };
      }
    }

    return {
      first: '',
      last: ''
    };
  }

  return {
    get prefix() {
      return prefix;
    },

    set prefix(p) {
      prefix = p;
    },

    mapPrefixFiltered: function mapPrefixFiltered(mapFn) {
      return prefix.length ? nameList.reduce(function (p, c, i) {
        return c.startsWith(prefix) ? __spreadArrays(p, [mapFn(c, i)]) : p;
      }, []) : nameList.map(mapFn);
    },

    get selected() {
      return selected;
    },

    setSelected: setSelected,
    create: function create(first, last) {
      selected = nameList.length;
      nameList.push(last + ', ' + first);
    },
    updateSelected: function updateSelected(first, last) {
      return nameList[selected || 0] = last + ', ' + first;
    },
    deleteSelected: function deleteSelected() {
      delete nameList[selected || 0];
      setSelected(undefined);
    }
  };
}

function newCircles() {
  var state = {
    circles: []
  };
  var _undo = [];
  var _redo = [];
  return {
    get circles() {
      return state.circles;
    },

    get updating() {
      return state.updating;
    },

    addCircle: function addCircle(circle) {
      _undo.push(state);

      state = {
        circles: __spreadArrays(state.circles, [circle])
      };
    },
    setCircleForUpdate: function setCircleForUpdate(i) {
      _undo.push(state);

      var updating = __assign({}, state.circles[i]);

      state = {
        circles: __spreadArrays(state.circles),
        updating: updating
      };
      state.circles[i] = updating;
    },

    get canUndo() {
      return _undo.length > 0;
    },

    undo: function undo() {
      if (!_undo.length) throw new Error('empty undo');

      _redo.push(state);

      state = _undo.pop();
    },

    get canRedo() {
      return _redo.length > 0;
    },

    redo: function redo() {
      if (!_redo.length) throw new Error('empty redo');

      _undo.push(state);

      state = _redo.pop();
    }
  };
}

exports.PAGE_MODEL = {
  counter: newCounter(),
  converter: newConverter(),
  booker: newBooker(),
  timer: newTimer(),
  crud: newCrud(),
  circles: newCircles(),
  cells: spreadsheet_1.newSpreadsheet()
};
},{"./spreadsheet":"ts/spreadsheet.ts"}],"ts/pure-view.ts":[function(require,module,exports) {
"use strict";

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lit_html_1 = require("../node_modules/lit-html/lit-html");

var style_map_js_1 = require("../node_modules/lit-html/directives/style-map.js");

var model_1 = require("./model");

var newCounter = function newCounter(counter) {
  return function () {
    return lit_html_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  <form class=\"pure-form\">\n    <label>", "</label>\n    <div class=\"pure-button pure-button-primary\" @click=", ">\n      Count\n    </div>\n  </form>\n"], ["\n  <form class=\"pure-form\">\n    <label>", "</label>\n    <div class=\"pure-button pure-button-primary\" @click=", ">\n      Count\n    </div>\n  </form>\n"])), counter.count, counter.incr);
  };
};

function newConverter(converter) {
  function setCelsius() {
    converter.celsius = Number(this.value);
  }

  function setFahrenheit() {
    converter.fahrenheit = Number(this.value);
  }

  return function () {
    return lit_html_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    <form class=\"pure-form\">\n      <input id=\"celsius\" .value=\"", "\" @input=", " />\n      <label for=\"celsius\">Celsius =</label>\n      <input\n        id=\"fahrenheit\"\n        .value=\"", "\"\n        @input=", "\n      />\n      <label for=\"fahrenheit\">Fahrenheit</label>\n    </form>\n  "], ["\n    <form class=\"pure-form\">\n      <input id=\"celsius\" .value=\"", "\" @input=", " />\n      <label for=\"celsius\">Celsius =</label>\n      <input\n        id=\"fahrenheit\"\n        .value=\"", "\"\n        @input=", "\n      />\n      <label for=\"fahrenheit\">Fahrenheit</label>\n    </form>\n  "])), converter.celsius, setCelsius, converter.fahrenheit, setFahrenheit);
  };
}

function newBooker(booker) {
  var type = 'one-way flight';

  function typeChange() {
    type = this.value;
    booker.back = type === 'return flight' ? '' : undefined;
  }

  function outboundChange() {
    booker.outbound = this.value;
  }

  function returnChange() {
    booker.back = this.value;
  }

  var bookClick = function bookClick() {
    return booker.booked = true;
  };

  return function () {
    return lit_html_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    <form class=\"pure-form\">\n      <fieldset class=\"pure-group\">\n        <select class=\"pure-input-1-4\" @change=", ">\n          <option>one-way flight</option>\n          <option>return flight</option>\n        </select>\n        <input\n          class=\"pure-input-1-4\"\n          type=\"date\"\n          .value=", "\n          @change=", "\n        />\n        <input\n          class=\"pure-input-1-4\"\n          type=\"date\"\n          .value=", "\n          @change=", "\n          ?disabled=", "\n        />\n        <div\n          class=\"pure-button pure-button-primary pure-input-1-4\"\n          ?disabled=", "\n          @click=", "\n        >\n          Book\n        </div>\n      </fieldset>\n    </form>\n    <div style=\"display:", "\">\n      You have booked a ", " on\n      ", "", ".\n    </div>\n  "], ["\n    <form class=\"pure-form\">\n      <fieldset class=\"pure-group\">\n        <select class=\"pure-input-1-4\" @change=", ">\n          <option>one-way flight</option>\n          <option>return flight</option>\n        </select>\n        <input\n          class=\"pure-input-1-4\"\n          type=\"date\"\n          .value=", "\n          @change=", "\n        />\n        <input\n          class=\"pure-input-1-4\"\n          type=\"date\"\n          .value=", "\n          @change=", "\n          ?disabled=", "\n        />\n        <div\n          class=\"pure-button pure-button-primary pure-input-1-4\"\n          ?disabled=", "\n          @click=", "\n        >\n          Book\n        </div>\n      </fieldset>\n    </form>\n    <div style=\"display:", "\">\n      You have booked a ", " on\n      ", "", ".\n    </div>\n  "])), typeChange, booker.outbound, outboundChange, booker.back, returnChange, booker.back === undefined, booker.back !== undefined && booker.back <= booker.outbound, bookClick, booker.booked ? 'block' : 'none', type, booker.outbound, booker.back !== undefined ? ' returning on ' + booker.back : '');
  };
}

function newTimer(model) {
  var timer = null;

  function durationChange() {
    model.duration = Number(this.value);
  }

  return function () {
    if (timer) {
      if (model.elapsed >= model.duration) {
        clearInterval(timer);
        timer = null;
      }
    } else {
      if (model.elapsed < model.duration) {
        timer = setInterval(renderBody, 100);
      }
    }

    return lit_html_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      <style>\n        td {\n          padding: 0.5em 1em;\n        }\n      </style>\n      <table>\n        <tr>\n          <td style=\"text-align:right\">Elapsed time</td>\n          <td style=\"width:20em\">\n            <progress\n              value=", "\n              max=", "\n              style=\"width:100%\"\n            >\n              Progress:\n              ", "%\n            </progress>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"text-align:right\">Elapsed seconds</td>\n          <td>", "</td>\n        </tr>\n        <tr>\n          <td style=\"text-align:right\">Duration</td>\n          <td>\n            <input\n              type=\"range\"\n              min=\"1\"\n              max=\"60\"\n              .value=\"", "\"\n              style=\"width:100%\"\n              @input=", "\n            />\n          </td>\n        </tr>\n      </table>\n\n      <div class=\"pure-button pure-button-primary\" @click=", ">\n        Reset\n      </div>\n    "], ["\n      <style>\n        td {\n          padding: 0.5em 1em;\n        }\n      </style>\n      <table>\n        <tr>\n          <td style=\"text-align:right\">Elapsed time</td>\n          <td style=\"width:20em\">\n            <progress\n              value=", "\n              max=", "\n              style=\"width:100%\"\n            >\n              Progress:\n              ", "%\n            </progress>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"text-align:right\">Elapsed seconds</td>\n          <td>", "</td>\n        </tr>\n        <tr>\n          <td style=\"text-align:right\">Duration</td>\n          <td>\n            <input\n              type=\"range\"\n              min=\"1\"\n              max=\"60\"\n              .value=\"", "\"\n              style=\"width:100%\"\n              @input=", "\n            />\n          </td>\n        </tr>\n      </table>\n\n      <div class=\"pure-button pure-button-primary\" @click=", ">\n        Reset\n      </div>\n    "])), model.elapsed, model.duration, Math.min(100, 100 * model.elapsed / model.duration), model.elapsed, model.duration, durationChange, model.reset);
  };
}

function newCrud(model) {
  var firstInput = document.createElement('input');
  var lastInput = document.createElement('input');
  firstInput.type = 'text';
  lastInput.type = 'text';

  function prefixChange() {
    model.prefix = this.value;
  }

  function selectionChange() {
    setSelected(Number(this.value));
  }

  function setSelected(i) {
    var _a = model.setSelected(i),
        first = _a.first,
        last = _a.last;

    lastInput.value = last;
    firstInput.value = first;
  }

  function deleteSelected() {
    model.deleteSelected();
    lastInput.value = '';
    firstInput.value = '';
  }

  var create = function create() {
    return model.create(firstInput.value, lastInput.value);
  };

  var update = function update() {
    return model.updateSelected(firstInput.value, lastInput.value);
  };

  return function () {
    return lit_html_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    <form class=\"pure-form pure-form-aligned\">\n      <div>\n        <label>Filter prefix:</label>\n        <input type=\"text\" .value=", " @input=", " />\n      </div>\n      <div>\n        <select size=\"2\" style=\"height:100px\" @change=", ">\n          ", "\n        </select>\n        <fieldset style=\"display:inline-block;vertical-align:middle;\">\n          <div class=\"pure-control-group\">\n            <label>Surname:</label>", "\n          </div>\n          <div class=\"pure-control-group\">\n            <label>Name:</label>", "\n          </div>\n        </fieldset>\n      </div>\n      <div>\n        <span class=\"pure-button pure-button-primary\" @click=", "\n          >Create</span\n        >\n        <span\n          class=\"pure-button pure-button-primary\"\n          ?disabled=", "\n          @click=", "\n          >Update</span\n        >\n        <span\n          class=\"pure-button pure-button-primary\"\n          ?disabled=", "\n          @click=", "\n          >Delete</span\n        >\n      </div>\n    </form>\n  "], ["\n    <form class=\"pure-form pure-form-aligned\">\n      <div>\n        <label>Filter prefix:</label>\n        <input type=\"text\" .value=", " @input=", " />\n      </div>\n      <div>\n        <select size=\"2\" style=\"height:100px\" @change=", ">\n          ", "\n        </select>\n        <fieldset style=\"display:inline-block;vertical-align:middle;\">\n          <div class=\"pure-control-group\">\n            <label>Surname:</label>", "\n          </div>\n          <div class=\"pure-control-group\">\n            <label>Name:</label>", "\n          </div>\n        </fieldset>\n      </div>\n      <div>\n        <span class=\"pure-button pure-button-primary\" @click=", "\n          >Create</span\n        >\n        <span\n          class=\"pure-button pure-button-primary\"\n          ?disabled=", "\n          @click=", "\n          >Update</span\n        >\n        <span\n          class=\"pure-button pure-button-primary\"\n          ?disabled=", "\n          @click=", "\n          >Delete</span\n        >\n      </div>\n    </form>\n  "])), model.prefix, prefixChange, selectionChange, model.mapPrefixFiltered(function (name, i) {
      return lit_html_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                <option value=", ">", "</option>\n              "], ["\n                <option value=", ">", "</option>\n              "])), i, name);
    }), lastInput, firstInput, create, model.selected === undefined, update, model.selected === undefined, deleteSelected);
  };
}

function newCircles(model) {
  function adjustRadius() {
    model.updating.r = Number(this.value);
  }

  var radiusControl = function radiusControl(_a) {
    var x = _a.x,
        y = _a.y,
        r = _a.r;
    return lit_html_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    <p class=\"pure-form\">\n      <label>Adjust radius of circle at (", ", ", "):</label>\n      <input type=\"range\" @input=", " .value=", " />\n    </p>\n  "], ["\n    <p class=\"pure-form\">\n      <label>Adjust radius of circle at (", ", ", "):</label>\n      <input type=\"range\" @input=", " .value=", " />\n    </p>\n  "])), x, y, adjustRadius, r);
  };

  function newCircle(e) {
    var svg = this.getBoundingClientRect();
    model.addCircle({
      x: e.x - svg.left,
      y: e.y - svg.top,
      r: 20
    });
  }

  return function () {
    return lit_html_1.html(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    <div style=\"content-align:center\">\n      <span\n        class=\"pure-button pure-button-primary\"\n        ?disabled=", "\n        @click=", "\n        >Undo</span\n      >\n      <span\n        class=\"pure-button pure-button-primary\"\n        ?disabled=", "\n        @click=", "\n        >Redo</span\n      >\n    </div>\n    <svg @click=", " style=\"border: 2px solid; width:100%; height:60ex\">\n      ", "\n    </svg>\n    ", "\n  "], ["\n    <div style=\"content-align:center\">\n      <span\n        class=\"pure-button pure-button-primary\"\n        ?disabled=", "\n        @click=", "\n        >Undo</span\n      >\n      <span\n        class=\"pure-button pure-button-primary\"\n        ?disabled=", "\n        @click=", "\n        >Redo</span\n      >\n    </div>\n    <svg @click=", " style=\"border: 2px solid; width:100%; height:60ex\">\n      ", "\n    </svg>\n    ", "\n  "])), !model.canUndo, model.undo, !model.canRedo, model.redo, newCircle, model.circles.map(function (c, index) {
      return lit_html_1.svg(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          <circle cx=", " cy=", " r=", " \n            style=\"fill:", ";stroke-width: 1;stroke: black;transition: fill 0.2s ease 0s;\"\n             @click=", ">\n          </circle>"], ["\n          <circle cx=", " cy=", " r=", " \n            style=\"fill:", ";stroke-width: 1;stroke: black;transition: fill 0.2s ease 0s;\"\n             @click=", ">\n          </circle>"])), c.x, c.y, c.r, c === model.updating ? 'grey' : 'transparent', function (e) {
        model.setCircleForUpdate(index);
        e.stopPropagation(); // lest we also create a new circle

        renderBody();
      });
    }), model.updating === undefined ? lit_html_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject([""], [""]))) : radiusControl(model.updating));
  };
}

function newCells(sheet) {
  var selected = undefined;
  var editableCell = document.createElement('td');
  editableCell.contentEditable = 'true';
  editableCell.addEventListener('keydown', keydown);
  var hookByKey = {
    Enter: function Enter(i, j) {
      return selected = undefined;
    },
    ArrowRight: function ArrowRight(i, j) {
      return j < 26 && (selected.j += 1);
    },
    ArrowLeft: function ArrowLeft(i, j) {
      return j > 0 && (selected.j -= 1);
    },
    ArrowUp: function ArrowUp(i, j) {
      return i > 0 && (selected.i -= 1);
    },
    ArrowDown: function ArrowDown(i, j) {
      return i < 99 && (selected.i += 1);
    }
  };

  function keydown(ev) {
    if (selected) {
      var hook = hookByKey[ev.key];

      if (hook) {
        var _a = selected,
            i = _a.i,
            j = _a.j;
        sheet.setCell(i, j, this.innerText);
        hook(i, j);
        renderBody();

        if (selected) {
          editableCell.innerText = sheet.cell(selected.i, selected.j);
          editableCell.focus();
        }
      }
    }
  }

  return function () {
    return lit_html_1.html(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    <style>\n      #sheet th {\n        min-width: 6ch;\n        border: 1px solid #cbcbcb;\n      }\n      #sheet td:first-child,\n      #sheet tr:first-child {\n        background-color: #f7f7f7;\n        user-select: none;\n        text-align: center;\n      }\n    </style>\n    <div style=\"height: 66ex;overflow:auto\">\n      <table id=\"sheet\" class=\"pure-table pure-table-bordered\">\n        <tr>\n          <th style=\"min-width:1ch\"></th>\n          ", "\n        </tr>\n        ", "\n      </table>\n    </div>\n    <p>\n      Click inside a cell to edit its content. Hit enter to apply. Click outside\n      the cell or hit escape to abort. Here are some example contents: '5.5',\n      'Some text', '=A1', '=sum(B2:C4)', '=div(C1, 5)'.\n    </p>\n  "], ["\n    <style>\n      #sheet th {\n        min-width: 6ch;\n        border: 1px solid #cbcbcb;\n      }\n      #sheet td:first-child,\n      #sheet tr:first-child {\n        background-color: #f7f7f7;\n        user-select: none;\n        text-align: center;\n      }\n    </style>\n    <div style=\"height: 66ex;overflow:auto\">\n      <table id=\"sheet\" class=\"pure-table pure-table-bordered\">\n        <tr>\n          <th style=\"min-width:1ch\"></th>\n          ", "\n        </tr>\n        ", "\n      </table>\n    </div>\n    <p>\n      Click inside a cell to edit its content. Hit enter to apply. Click outside\n      the cell or hit escape to abort. Here are some example contents: '5.5',\n      'Some text', '=A1', '=sum(B2:C4)', '=div(C1, 5)'.\n    </p>\n  "])), Array.from({
      length: 26
    }, function (_, i) {
      return lit_html_1.html(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                <th>", "</th>\n              "], ["\n                <th>", "</th>\n              "])), String.fromCharCode(65 + i));
    }), Array.from({
      length: 100
    }, function (_, i) {
      return lit_html_1.html(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n            <tr>\n              <td><b>", "</b></td>\n              ", "\n            </tr>\n          "], ["\n            <tr>\n              <td><b>", "</b></td>\n              ", "\n            </tr>\n          "])), i, Array.from({
        length: 26
      }, function (_, j) {
        return selected && selected.i === i && selected.j === j ? editableCell : lit_html_1.html(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n                      <td\n                        @click=", "\n                      >\n                        ", "\n                      </td>\n                    "], ["\n                      <td\n                        @click=", "\n                      >\n                        ", "\n                      </td>\n                    "])), function (e) {
          selected = {
            i: i,
            j: j
          };
          editableCell.innerText = sheet.cell(i, j);
          renderBody();
          editableCell.focus();
        }, sheet.value(i, j));
      }));
    }));
  };
}

var examples = {
  counter: {
    name: 'Counter',
    render: newCounter(model_1.PAGE_MODEL.counter)
  },
  converter: {
    name: 'Temperature Converter',
    render: newConverter(model_1.PAGE_MODEL.converter)
  },
  booker: {
    name: 'Flight Booker',
    render: newBooker(model_1.PAGE_MODEL.booker)
  },
  timer: {
    name: 'Timer',
    render: newTimer(model_1.PAGE_MODEL.timer)
  },
  crud: {
    name: 'CRUD',
    render: newCrud(model_1.PAGE_MODEL.crud)
  },
  drawer: {
    name: 'Circle Drawer',
    render: newCircles(model_1.PAGE_MODEL.circles)
  },
  cells: {
    name: 'Cells',
    render: newCells(model_1.PAGE_MODEL.cells)
  }
};

var renderBody = function renderBody() {
  return lit_html_1.render(lit_html_1.html(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      <div\n        class=\"pure-menu-scrollable pure-menu-horizontal\"\n        style=\"height:32px;background-color:blanchedalmond\"\n      >\n        <div class=\"pure-menu-heading\">Examples</div>\n        <ul class=\"pure-menu-list\">\n          ", "\n        </ul>\n      </div>\n      <p></p>\n      <div\n        style=\"margin-left:auto; margin-right:auto; max-width:48em; color:#777\"\n      >\n        ", "\n      </div>\n    "], ["\n      <div\n        class=\"pure-menu-scrollable pure-menu-horizontal\"\n        style=\"height:32px;background-color:blanchedalmond\"\n      >\n        <div class=\"pure-menu-heading\">Examples</div>\n        <ul class=\"pure-menu-list\">\n          ", "\n        </ul>\n      </div>\n      <p></p>\n      <div\n        style=\"margin-left:auto; margin-right:auto; max-width:48em; color:#777\"\n      >\n        ", "\n      </div>\n    "])), Object.entries(examples).map(function (_a) {
    var k = _a[0],
        name = _a[1].name;
    return lit_html_1.html(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n                <li class=\"pure-menu-item\">\n                  <a href=\"#", "\" class=\"pure-menu-link\">", "</a>\n                </li>\n              "], ["\n                <li class=\"pure-menu-item\">\n                  <a href=\"#", "\" class=\"pure-menu-link\">", "</a>\n                </li>\n              "])), k, name);
  }), Object.entries(examples).map(function (_a) {
    var k = _a[0],
        render = _a[1].render;
    return lit_html_1.html(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n              <div\n                style=\"", "\"\n              >\n                ", "\n              </div>\n            "], ["\n              <div\n                style=\"", "\"\n              >\n                ", "\n              </div>\n            "])), style_map_js_1.styleMap('#' + k === window.location.hash ? {} : {
      display: 'none'
    }), render());
  })), document.body);
};

if (!window.location.hash) {
  window.location.hash = 'counter';
}

renderBody();
window.addEventListener('change', renderBody);
window.addEventListener('click', renderBody);
window.addEventListener('hashchange', renderBody);
window.addEventListener('input', renderBody);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
},{"../node_modules/lit-html/lit-html":"node_modules/lit-html/lit-html.js","../node_modules/lit-html/directives/style-map.js":"node_modules/lit-html/directives/style-map.js","./model":"ts/model.ts"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50744" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","ts/pure-view.ts"], null)
//# sourceMappingURL=/pure-view.aed4fc19.js.map