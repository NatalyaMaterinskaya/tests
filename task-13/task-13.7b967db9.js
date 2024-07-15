// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kSkU9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "25d5b21e7b967db9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"i5J8U":[function(require,module,exports) {
var _questionsTask13 = require("./questions-task-13");
var _createButtonMarkupTask13 = require("./create-button-markup-task-13");
var _common = require("../js/common");
var _getCurrentDate = require("../js/helpers/get-current-date");
const btnMarkup = (0, _createButtonMarkupTask13.createButtonMarkup)((0, _questionsTask13.testItems));
let markCounter = null;
let numQuestion = 1;
let userName = null;
alert("Інструкція: Цей опитувальник складається з 21 пункту, кожен з яких містить кілька варіантів тверджень. Будь ласка, уважно прочитайте всі варіанти відповідей до кожного пункту і виберіть один з них, який найкраще описує Ваше самопочуття протягом останніх двох тижнів, включаючи сьогоднішній день.");
const handleInput = (event)=>{
    userName = event.target.value;
};
const handleSubmit = (event)=>{
    event.preventDefault();
    const { elements: { name } } = event.currentTarget;
    if (name.value.trim() === "") alert("Введіть прізвище, ім'я, по батькові, будь ласка.");
    else {
        event.currentTarget.reset();
        (0, _common.formEl).style.display = "none";
        (0, _common.btnEl).style.display = "flex";
        (0, _common.btnEl).innerHTML = btnMarkup[numQuestion - 1];
    }
};
const clickItem = (evt)=>{
    const { target } = evt;
    if (!target.classList.contains("answer-btn")) return;
    markCounter += Number(target.dataset.mark);
    if (numQuestion < btnMarkup.length) {
        (0, _common.btnEl).innerHTML = btnMarkup[numQuestion];
        numQuestion += 1;
    } else {
        const date = (0, _getCurrentDate.getCurrentDate)();
        const result = `<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${userName}</p>
    <b class="result"> Результат = ${markCounter}</b>`;
        (0, _common.mainContainer).innerHTML = result;
        const dateEl = `<div class="date">
        <span class="time">${date.currentHours}:${date.currentMinutes}</span>
         <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
    </div>`;
        (0, _common.mainContainer).insertAdjacentHTML("beforeend", dateEl);
    }
};
(0, _common.formEl).addEventListener("input", handleInput);
(0, _common.formEl).addEventListener("submit", handleSubmit);
(0, _common.btnEl).addEventListener("click", clickItem);

},{"./questions-task-13":"klt3d","./create-button-markup-task-13":"2MIOI","../js/common":"2ASYY","../js/helpers/get-current-date":"gTe1R"}],"klt3d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testItems", ()=>testItems);
const testItems = [
    {
        id: 1,
        answers: [
            {
                answer: "Мені не сумно",
                mark: 0
            },
            {
                answer: "Значну частину часу мені сумно",
                mark: 1
            },
            {
                answer: "Я увесь час почуваюсь сумним, пригніченим",
                mark: 2
            },
            {
                answer: "Я відчуваю нестерпний сум та тугу",
                mark: 3
            }
        ]
    },
    {
        id: 2,
        answers: [
            {
                answer: "Я не вважаю, що заслуговую покарання",
                mark: 0
            },
            {
                answer: "Я допускаю, що заслуговую покарання",
                mark: 1
            },
            {
                answer: "Я вважаю, що маю бути покараний",
                mark: 2
            },
            {
                answer: "Я відчуваю, що доля карає мене",
                mark: 3
            }
        ]
    },
    {
        id: 3,
        answers: [
            {
                answer: "Я спокійно думаю про майбутнє",
                mark: 0
            },
            {
                answer: "Думки про майбутнє викликають в мене занепокоєння більше, ніж раніше",
                mark: 1
            },
            {
                answer: "Мені нема чого чекати від майбутнього і на що надіятися",
                mark: 2
            },
            {
                answer: "Я відчуваю, що в моєму майбутньому нема нічого доброго і я нічого не можу змінити",
                mark: 3
            }
        ]
    },
    {
        id: 4,
        answers: [
            {
                answer: "Я не відчуваю себе невдахою",
                mark: 0
            },
            {
                answer: "В минулому я мав би менше зазнавати невдач",
                mark: 1
            },
            {
                answer: "Моє життя – це суцільна низка невдач та помилок.",
                mark: 2
            },
            {
                answer: "Я абсолютний невдаха в усьому (навчанні, праці, сімейному житті і т.д.)",
                mark: 3
            }
        ]
    },
    {
        id: 5,
        answers: [
            {
                answer: "Я в основному задоволений тим, ким я є.",
                mark: 0
            },
            {
                answer: "Я втратив впевненість у собі",
                mark: 1
            },
            {
                answer: "Я розчарований в собі",
                mark: 2
            },
            {
                answer: "Я не люблю себе",
                mark: 3
            }
        ]
    },
    {
        id: 6,
        answers: [
            {
                answer: "Я отримую задоволення від улюблених занять і речей",
                mark: 0
            },
            {
                answer: "Я не отримую такого задоволення, як раніше від улюблених занять та речей",
                mark: 1
            },
            {
                answer: "Я отримую дуже мало задоволення від того, що зазвичай мене тішило",
                mark: 2
            },
            {
                answer: "Я не можу отримати задоволення від того, що зазвичай мене тішило",
                mark: 3
            }
        ]
    },
    {
        id: 7,
        answers: [
            {
                answer: "Я критикую і звинувачую себе не більше, ніж зазвичай",
                mark: 0
            },
            {
                answer: "Я більш критичний до себе, ніж зазвичай",
                mark: 1
            },
            {
                answer: "Я критикую себе за всі свої помилки",
                mark: 2
            },
            {
                answer: "Я звинувачую себе у всьому поганому, що відбувається",
                mark: 3
            }
        ]
    },
    {
        id: 8,
        answers: [
            {
                answer: "Я не відчуваю відчуття провини",
                mark: 0
            },
            {
                answer: "Я відчуваю почуття провини за багато речей, зроблених мною",
                mark: 1
            },
            {
                answer: "Я дуже часто відчуваю себе поганою людиною і мене мучить відчуття провини",
                mark: 2
            },
            {
                answer: "Мене мучить постійне відчуття провини",
                mark: 3
            }
        ]
    },
    {
        id: 9,
        answers: [
            {
                answer: "У мене не виникає думок про самогубство",
                mark: 0
            },
            {
                answer: "У мене бувають думки про самогубство, але я знаю, що не зроблю цього",
                mark: 1
            },
            {
                answer: "Я хочу вмерти і планую самогубство",
                mark: 2
            },
            {
                answer: "Якщо б була нагода, я б зробив самогубство",
                mark: 3
            }
        ]
    },
    {
        id: 10,
        answers: [
            {
                answer: "Я не більш неспокійний або збуджений, ніж зазвичай",
                mark: 0
            },
            {
                answer: "Я відчуваю більше занепокоєння і збудження, ніж зазвичай",
                mark: 1
            },
            {
                answer: "Я відчуваю таке занепокоєння і збудження, що мені важко сидіти спокійно",
                mark: 2
            },
            {
                answer: "Я відчуваю таке занепокоєння і збудження, що змушений весь час рухатися або щось робити",
                mark: 3
            }
        ]
    },
    {
        id: 11,
        answers: [
            {
                answer: "Я не плачу більш часто, ніж звичайно",
                mark: 0
            },
            {
                answer: "Я плачу частіше, ніж звичайно",
                mark: 1
            },
            {
                answer: "Я пл\xe1чу кожен день по кожному незначному приводу",
                mark: 2
            },
            {
                answer: "Я хочу плакати, але не можу",
                mark: 3
            }
        ]
    },
    {
        id: 12,
        answers: [
            {
                answer: "Я не втратив цікавості до інших людей і занять",
                mark: 0
            },
            {
                answer: "Люди і речі цікавлять мене менше, ніж раніше.",
                mark: 1
            },
            {
                answer: "Я значною мірою втратив цікавість до інших людей і занять",
                mark: 2
            },
            {
                answer: "Мене важко чимось зацікавити",
                mark: 3
            }
        ]
    },
    {
        id: 13,
        answers: [
            {
                answer: "Я не дратуюсь частіше, ніж звичайно",
                mark: 0
            },
            {
                answer: "Я дратуюся легше, ніж звичайно",
                mark: 1
            },
            {
                answer: "Я дратуюся значно легше, ніж звичайно",
                mark: 2
            },
            {
                answer: "Я постійно відчуваю роздратування",
                mark: 3
            }
        ]
    },
    {
        id: 14,
        answers: [
            {
                answer: "Мені не є важче, ніж звичайно приймати рішення",
                mark: 0
            },
            {
                answer: "Тепер частіше, ніж раніше я зволікаю з прийняттям рішень",
                mark: 1
            },
            {
                answer: "Мені дуже важко прийняти будь-яке рішення",
                mark: 2
            },
            {
                answer: "Я не в стані приймати жодних рішень",
                mark: 3
            }
        ]
    },
    {
        id: 15,
        answers: [
            {
                answer: " У мене хороший апетит",
                mark: 0
            },
            {
                answer: "Мій апетит гірший, ніж раніше",
                mark: 1
            },
            {
                answer: "Мій апетит набагато гірший, ніж раніше",
                mark: 2
            },
            {
                answer: "У мене взагалі немає апетиту",
                mark: 3
            }
        ]
    },
    {
        id: 16,
        answers: [
            {
                answer: "Я не відчуваю себе нікчемним",
                mark: 0
            },
            {
                answer: "Я не відчуваю себе таким же цінним і корисним, як завжди",
                mark: 1
            },
            {
                answer: "Я відчуваю себе менш цінним, ніж інші",
                mark: 2
            },
            {
                answer: "Я відчуваю себе повністю нікчемним",
                mark: 3
            }
        ]
    },
    {
        id: 17,
        answers: [
            {
                answer: "Я так само добре можу зосередитися, як завжди",
                mark: 0
            },
            {
                answer: "Я не можу так само добре зосередитися, як завжди",
                mark: 1
            },
            {
                answer: "Мені важко довго утримувати увагу на чому-небудь",
                mark: 2
            },
            {
                answer: "Я не можу зосередитися ні на чому",
                mark: 3
            }
        ]
    },
    {
        id: 18,
        answers: [
            {
                answer: "Я так само енергійний, як зазвичай",
                mark: 0
            },
            {
                answer: "У мене менше енергії, ніж зазвичай",
                mark: 1
            },
            {
                answer: "У мене недостатньо енергії, щоб зробити багато чого з того, що потрібно",
                mark: 2
            },
            {
                answer: "У мене немає сил ні на що",
                mark: 3
            }
        ]
    },
    {
        id: 19,
        answers: [
            {
                answer: "Я втомлююся не більш, ніж зазвичай",
                mark: 0
            },
            {
                answer: "Я втомлююся значно легше, ніж раніше",
                mark: 1
            },
            {
                answer: "Через втому я не можу виконувати багато звичних для мене справ",
                mark: 2
            },
            {
                answer: "Через втому я не можу виконувати більшість звичних для мене справ",
                mark: 3
            }
        ]
    },
    {
        id: 20,
        answers: [
            {
                answer: "Я сплю так само добре, як раніше",
                mark: 0
            },
            {
                answer: "Я почав гірше спати і прокидаюся втомленим",
                mark: 1
            },
            {
                answer: "Я рано прокидаюся і відчуваю, що не виспався",
                mark: 2
            },
            {
                answer: "Я прокидаюся кілька разів за ніч і більше не можу заснути",
                mark: 3
            }
        ]
    },
    {
        id: 21,
        answers: [
            {
                answer: "Мій інтерес до статевого життя за останній час не зменшився",
                mark: 0
            },
            {
                answer: "Статеве життя мене цікавить зараз менше, ніж звичайно",
                mark: 1
            },
            {
                answer: "Мій інтерес до статевого життя значно зменшився",
                mark: 2
            },
            {
                answer: "Я повністю втратив інтерес до статевого життя",
                mark: 3
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2MIOI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createButtonMarkup", ()=>createButtonMarkup);
function createButtonMarkup(arr) {
    const markup = arr.map(({ answers })=>{
        let arrOfAnswer = [];
        answers.forEach((element)=>{
            arrOfAnswer.push(element);
        });
        let markupOfAnswer = [];
        for(let i = 0; i < arrOfAnswer.length; i += 1)markupOfAnswer.push(`<li class="btn-item">
        <button class="answer-btn" data-mark="${arrOfAnswer[i].mark}" type="button">${i + 1}. ${arrOfAnswer[i].answer}</button>
        </li>`);
        return markupOfAnswer.join("");
    });
    return markup;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ASYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formEl", ()=>formEl);
parcelHelpers.export(exports, "mainContainer", ()=>mainContainer);
parcelHelpers.export(exports, "testsEl", ()=>testsEl);
parcelHelpers.export(exports, "btnEl", ()=>btnEl);
const formEl = document.querySelector(".feedback-form");
const mainContainer = document.querySelector(".container");
const testsEl = document.querySelector(".tests");
const btnEl = document.querySelector(".answer-container");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gTe1R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCurrentDate", ()=>getCurrentDate);
function getCurrentDate() {
    const monthArr = [
        "січня",
        "лютого",
        "березня",
        "квітня",
        "травня",
        "червня",
        "липня",
        "серпня",
        "вересня",
        "жовтня",
        "листопада",
        "грудня"
    ];
    const currentDate = new Date();
    const currentMonth = monthArr.find((_, index)=>index === currentDate.getMonth());
    const date = {
        currentHours: currentDate.getHours().toString().padStart(2, "0"),
        currentMinutes: currentDate.getMinutes().toString().padStart(2, "0"),
        currentDays: currentDate.getDate().toString().padStart(2, "0"),
        currentMonth: currentMonth,
        currentYear: currentDate.getFullYear()
    };
    return date;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kSkU9","i5J8U"], "i5J8U", "parcelRequiree8da")

//# sourceMappingURL=task-13.7b967db9.js.map
