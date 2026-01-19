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
})({"gEG5q":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8ee65af1fd72251d";
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

},{}],"7Urjo":[function(require,module,exports) {
var _common = require("../js/common");
var _convertToTScores = require("../js/helpers/convert-to-T-scores");
var _createMarkup = require("../js/helpers/create-markup");
var _createQuestionId = require("../js/helpers/create-question-id");
var _getCurrentDate = require("../js/helpers/get-current-date");
var _questionsTask16 = require("./questions-task-16");
const resultMarkup = (value)=>{
    if (value >= 40 && value <= 70) return `<span class="result"> ${value}</span>`;
    else return `<b class="result"> ${value}</b>`;
};
(0, _createQuestionId.createQuestionId)((0, _questionsTask16.testItems));
const markup = (0, _createMarkup.createMarkup)((0, _questionsTask16.testItems));
let arr = [];
let L = 0;
let F = 0;
let K = 0;
let Hs = 0;
let D = 0;
let Hy = 0;
let Pd = 0;
let Pa = 0;
let Pt = 0;
let Se = 0;
let Ma = 0;
let numQuestion = 1;
let userName = null;
const LCaseNo = [
    5,
    11,
    24,
    47,
    53
];
const FCaseYes = [
    9,
    12,
    15,
    19,
    30,
    38,
    48,
    49,
    58,
    59,
    64,
    71
];
const FCaseNo = [
    22,
    24,
    61
];
const KCaseNo = [
    11,
    23,
    31,
    33,
    34,
    36,
    40,
    41,
    43,
    51,
    56,
    61,
    65,
    67,
    69,
    70
];
const HsCaseYes = [
    9,
    18,
    26,
    32,
    44,
    46,
    55,
    62,
    63
];
const HsCaseNo = [
    1,
    2,
    6,
    37,
    45
];
const DCaseYes = [
    9,
    13,
    17,
    18,
    22,
    25,
    36,
    44
];
const DCaseNo = [
    1,
    3,
    6,
    11,
    28,
    37,
    40,
    42,
    60,
    65,
    71
];
const HyCaseYes = [
    9,
    13,
    18,
    26,
    44,
    46,
    55,
    57,
    62
];
const HyCaseNo = [
    1,
    2,
    3,
    11,
    23,
    28,
    29,
    31,
    33,
    35,
    37,
    40,
    41,
    43,
    45,
    50,
    56
];
const PdCaseYes = [
    7,
    10,
    13,
    14,
    15,
    16,
    22,
    27,
    52,
    58,
    71
];
const PdCaseNo = [
    3,
    28,
    34,
    35,
    41,
    43,
    50,
    65
];
const PaCaseYes = [
    5,
    8,
    10,
    15,
    30,
    39,
    63,
    64,
    66,
    68
];
const PaCaseNo = [
    28,
    29,
    31,
    67
];
const PtCaseYes = [
    5,
    8,
    13,
    17,
    22,
    25,
    27,
    36,
    44,
    51,
    57,
    66,
    68
];
const PtCaseNo = [
    2,
    3,
    42
];
const SeCaseYes = [
    5,
    7,
    8,
    10,
    13,
    14,
    15,
    16,
    17,
    26,
    30,
    38,
    39,
    46,
    57,
    63,
    64,
    66
];
const SeCaseNo = [
    3,
    42
];
const MaCaseYes = [
    4,
    7,
    8,
    21,
    29,
    34,
    38,
    39,
    54,
    57,
    60
];
const MaCaseNo = [
    43
];
alert("Інструкція:„Нижче слідують твердження, що стосуються стану Вашого здоров'я і Вашого характеру. Прочитайте кожне твердження і вирішіть, вірно воно чи невірно по відношенню до Вас. Не витрачайте часу на роздумування. Найбільш природно те рішення, яке першим приходить в голову. Варіанти відповідей “так” або “ні”. Відповідати потрібно на всі питання підряд, нічого не пропускаючи.”");
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
        (0, _common.testsEl).innerHTML = markup[numQuestion - 1];
        (0, _common.btnEl).style.display = "flex";
    }
};
const clickItem = (evt)=>{
    const { target } = evt;
    if (!target.classList.contains("answer-btn")) return;
    if (evt.target.dataset.answer === "yes") {
        if (FCaseYes.includes(numQuestion)) F += 1;
        if (HsCaseYes.includes(numQuestion)) Hs += 1;
        if (DCaseYes.includes(numQuestion)) D += 1;
        if (HyCaseYes.includes(numQuestion)) Hy += 1;
        if (PdCaseYes.includes(numQuestion)) Pd += 1;
        if (PaCaseYes.includes(numQuestion)) Pa += 1;
        if (PtCaseYes.includes(numQuestion)) Pt += 1;
        if (SeCaseYes.includes(numQuestion)) Se += 1;
        if (MaCaseYes.includes(numQuestion)) Ma += 1;
        arr.push("так");
    }
    if (evt.target.dataset.answer === "no") {
        if (LCaseNo.includes(numQuestion)) L += 1;
        if (FCaseNo.includes(numQuestion)) F += 1;
        if (KCaseNo.includes(numQuestion)) K += 1;
        if (HsCaseNo.includes(numQuestion)) Hs += 1;
        if (DCaseNo.includes(numQuestion)) D += 1;
        if (HyCaseNo.includes(numQuestion)) Hy += 1;
        if (PdCaseNo.includes(numQuestion)) Pd += 1;
        if (PaCaseNo.includes(numQuestion)) Pa += 1;
        if (PtCaseNo.includes(numQuestion)) Pt += 1;
        if (SeCaseNo.includes(numQuestion)) Se += 1;
        if (MaCaseNo.includes(numQuestion)) Ma += 1;
        arr.push("ні");
    }
    if (numQuestion < markup.length) {
        (0, _common.testsEl).innerHTML = markup[numQuestion];
        numQuestion += 1;
    } else {
        const date = (0, _getCurrentDate.getCurrentDate)();
        Hs = Hs + Math.round(0.5 * K);
        Pd = Pd + Math.round(0.4 * K);
        Pt = Pt + K;
        Se = Se + K;
        Ma = Ma + Math.round(0.2 * K);
        for(i = 0; i < arr.length; i++);
        const T_L = (0, _convertToTScores.convertLToTScores)(L);
        const T_F = (0, _convertToTScores.convertFToTScores)(F);
        const T_K = (0, _convertToTScores.convertKToTScores)(K);
        const T_Hs = (0, _convertToTScores.convertHsToTScores)(Hs);
        const T_D = (0, _convertToTScores.convertDToTScores)(D);
        const T_Hy = (0, _convertToTScores.convertHyToTScores)(Hy);
        const T_Pd = (0, _convertToTScores.convertPdToTScores)(Pd);
        const T_Pa = (0, _convertToTScores.convertPaToTScores)(Pa);
        const T_Pt = (0, _convertToTScores.convertPtToTScores)(Pt);
        const T_Se = (0, _convertToTScores.convertSeToTScores)(Se);
        const T_Ma = (0, _convertToTScores.convertMaToTScores)(Ma);
        const result = `<p class="user">${userName}</p>
  <p class="result"> Результат №1 = ${resultMarkup(T_L)}</p>
  <p class="result"> Результат №2 = ${resultMarkup(T_F)}</p>
  <p class="result"> Результат №3 = ${resultMarkup(T_K)}</p>
  <p class="result"> Результат №4 = ${resultMarkup(T_Hs)}</p>
  <p class="result"> Результат №5 = ${resultMarkup(T_D)}</p>
  <p class="result"> Результат №6 = ${resultMarkup(T_Hy)}</p>
  <p class="result"> Результат №7 = ${resultMarkup(T_Pd)}</p>
  <p class="result"> Результат №8 = ${resultMarkup(T_Pa)}</p>
  <p class="result"> Результат №9 = ${resultMarkup(T_Pt)}</p>
  <p class="result"> Результат №10 =${resultMarkup(T_Se)}</p>
  <p class="result"> Результат №11 =${resultMarkup(T_Ma)}</p>
  <div class="date">
      <span class="time">${date.currentHours}:${date.currentMinutes}</span>
      <span class="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
  </div>`;
        (0, _common.mainContainer).innerHTML = result;
        (0, _common.mainContainer).insertAdjacentHTML(`beforeend`, `<div class="answer"></div>`);
        const answerEl = document.querySelector(".answer");
        for(let i1 = 0; i1 < arr.length; i1++)answerEl.insertAdjacentHTML(`beforeend`, `<p class="result">${i1 + 1}.${arr[i1]}</p>`);
    }
};
(0, _common.formEl).addEventListener("input", handleInput);
(0, _common.formEl).addEventListener("submit", handleSubmit);
(0, _common.btnEl).addEventListener("click", clickItem);

},{"../js/common":"2ASYY","../js/helpers/convert-to-T-scores":"fGwIY","../js/helpers/create-markup":"eLGg5","../js/helpers/create-question-id":"ipKyU","../js/helpers/get-current-date":"gTe1R","./questions-task-16":"4XbKz"}],"2ASYY":[function(require,module,exports) {
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

},{}],"fGwIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertLToTScores", ()=>convertLToTScores);
parcelHelpers.export(exports, "convertFToTScores", ()=>convertFToTScores);
parcelHelpers.export(exports, "convertKToTScores", ()=>convertKToTScores);
parcelHelpers.export(exports, "convertHsToTScores", ()=>convertHsToTScores);
parcelHelpers.export(exports, "convertDToTScores", ()=>convertDToTScores);
parcelHelpers.export(exports, "convertHyToTScores", ()=>convertHyToTScores);
parcelHelpers.export(exports, "convertPdToTScores", ()=>convertPdToTScores);
parcelHelpers.export(exports, "convertPaToTScores", ()=>convertPaToTScores);
parcelHelpers.export(exports, "convertPtToTScores", ()=>convertPtToTScores);
parcelHelpers.export(exports, "convertSeToTScores", ()=>convertSeToTScores);
parcelHelpers.export(exports, "convertMaToTScores", ()=>convertMaToTScores);
function convertLToTScores(params) {
    let scale = 0;
    switch(params){
        case 0:
            scale = 38;
            break;
        case 1:
            scale = 46;
            break;
        case 2:
            scale = 55;
            break;
        case 3:
            scale = 62;
            break;
        case 4:
            scale = 70;
            break;
        case 5:
            scale = 79;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertFToTScores(params) {
    let scale = 0;
    switch(params){
        case 0:
            scale = 35;
            break;
        case 1:
            scale = 40;
            break;
        case 2:
            scale = 46;
            break;
        case 3:
            scale = 50;
            break;
        case 4:
            scale = 55;
            break;
        case 5:
            scale = 60;
            break;
        case 6:
            scale = 65;
            break;
        case 7:
            scale = 70;
            break;
        case 8:
            scale = 75;
            break;
        case 9:
            scale = 80;
            break;
        case 10:
            scale = 85;
            break;
        case 11:
            scale = 90;
            break;
        case 12:
            scale = 95;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertKToTScores(params) {
    let scale = 0;
    switch(params){
        case 0:
            scale = 28;
            break;
        case 1:
            scale = 31;
            break;
        case 2:
            scale = 34;
            break;
        case 3:
            scale = 37;
            break;
        case 4:
            scale = 40;
            break;
        case 5:
            scale = 42;
            break;
        case 6:
            scale = 45;
            break;
        case 7:
            scale = 48;
            break;
        case 8:
            scale = 51;
            break;
        case 9:
            scale = 54;
            break;
        case 10:
            scale = 56;
            break;
        case 11:
            scale = 59;
            break;
        case 12:
            scale = 62;
            break;
        case 13:
            scale = 65;
            break;
        case 14:
            scale = 67;
            break;
        case 15:
            scale = 70;
            break;
        case 16:
            scale = 73;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertHsToTScores(params) {
    let scale = 0;
    switch(params){
        case 0:
            scale = 26;
            break;
        case 1:
            scale = 28;
            break;
        case 2:
            scale = 32;
            break;
        case 3:
            scale = 35;
            break;
        case 4:
            scale = 38;
            break;
        case 5:
            scale = 42;
            break;
        case 6:
            scale = 45;
            break;
        case 7:
            scale = 48;
            break;
        case 8:
            scale = 52;
            break;
        case 9:
            scale = 55;
            break;
        case 10:
            scale = 58;
            break;
        case 11:
            scale = 61;
            break;
        case 12:
            scale = 65;
            break;
        case 13:
            scale = 68;
            break;
        case 14:
            scale = 71;
            break;
        case 15:
            scale = 75;
            break;
        case 16:
            scale = 78;
            break;
        case 17:
            scale = 81;
            break;
        case 18:
            scale = 84;
            break;
        case 19:
            scale = 87;
            break;
        case 20:
            scale = 91;
            break;
        case 21:
            scale = 94;
            break;
        case 22:
            scale = 97;
            break;
        case 23:
            scale = 101;
            break;
        case 24:
            scale = 104;
            break;
        case 25:
            scale = 107;
            break;
        case 26:
            scale = 110;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertDToTScores(params) {
    let scale = 0;
    switch(params){
        case 0:
            scale = 24;
            break;
        case 1:
            scale = 28;
            break;
        case 2:
            scale = 31;
            break;
        case 3:
            scale = 35;
            break;
        case 4:
            scale = 39;
            break;
        case 5:
            scale = 42;
            break;
        case 6:
            scale = 46;
            break;
        case 7:
            scale = 50;
            break;
        case 8:
            scale = 54;
            break;
        case 9:
            scale = 57;
            break;
        case 10:
            scale = 61;
            break;
        case 11:
            scale = 65;
            break;
        case 12:
            scale = 70;
            break;
        case 13:
            scale = 72;
            break;
        case 14:
            scale = 76;
            break;
        case 15:
            scale = 80;
            break;
        case 16:
            scale = 84;
            break;
        case 17:
            scale = 87;
            break;
        case 18:
            scale = 91;
            break;
        case 19:
            scale = 95;
            break;
        case 20:
            scale = 100;
            break;
        case 21:
            scale = 103;
            break;
        case 22:
            scale = 107;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertHyToTScores(params) {
    let scale = 0;
    switch(params){
        case 2:
            scale = 21;
            break;
        case 3:
            scale = 25;
            break;
        case 4:
            scale = 28;
            break;
        case 5:
            scale = 32;
            break;
        case 6:
            scale = 36;
            break;
        case 7:
            scale = 40;
            break;
        case 8:
            scale = 44;
            break;
        case 9:
            scale = 47;
            break;
        case 10:
            scale = 51;
            break;
        case 11:
            scale = 55;
            break;
        case 12:
            scale = 59;
            break;
        case 13:
            scale = 62;
            break;
        case 14:
            scale = 66;
            break;
        case 15:
            scale = 70;
            break;
        case 16:
            scale = 74;
            break;
        case 17:
            scale = 77;
            break;
        case 18:
            scale = 81;
            break;
        case 19:
            scale = 84;
            break;
        case 20:
            scale = 88;
            break;
        case 21:
            scale = 92;
            break;
        case 22:
            scale = 96;
            break;
        case 23:
            scale = 100;
            break;
        case 24:
            scale = 103;
            break;
        case 25:
            scale = 107;
            break;
        case 26:
            scale = 111;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertPdToTScores(params) {
    let scale = 0;
    switch(params){
        case 5:
            scale = 20;
            break;
        case 6:
            scale = 26;
            break;
        case 7:
            scale = 35;
            break;
        case 8:
            scale = 40;
            break;
        case 9:
            scale = 44;
            break;
        case 10:
            scale = 49;
            break;
        case 11:
            scale = 53;
            break;
        case 12:
            scale = 58;
            break;
        case 13:
            scale = 63;
            break;
        case 14:
            scale = 68;
            break;
        case 15:
            scale = 72;
            break;
        case 16:
            scale = 77;
            break;
        case 17:
            scale = 82;
            break;
        case 18:
            scale = 86;
            break;
        case 19:
            scale = 92;
            break;
        case 20:
            scale = 96;
            break;
        case 21:
            scale = 101;
            break;
        case 22:
            scale = 106;
            break;
        case 23:
            scale = 111;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertPaToTScores(params) {
    let scale = 0;
    switch(params){
        case 0:
            scale = 26;
            break;
        case 1:
            scale = 32;
            break;
        case 2:
            scale = 38;
            break;
        case 3:
            scale = 43;
            break;
        case 4:
            scale = 50;
            break;
        case 5:
            scale = 55;
            break;
        case 6:
            scale = 61;
            break;
        case 7:
            scale = 66;
            break;
        case 8:
            scale = 72;
            break;
        case 9:
            scale = 78;
            break;
        case 10:
            scale = 84;
            break;
        case 11:
            scale = 89;
            break;
        case 12:
            scale = 95;
            break;
        case 13:
            scale = 101;
            break;
        case 14:
            scale = 107;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertPtToTScores(params) {
    let scale = 0;
    switch(params){
        case 7:
            scale = 22;
            break;
        case 8:
            scale = 26;
            break;
        case 9:
            scale = 31;
            break;
        case 10:
            scale = 35;
            break;
        case 11:
            scale = 39;
            break;
        case 12:
            scale = 43;
            break;
        case 13:
            scale = 47;
            break;
        case 14:
            scale = 51;
            break;
        case 15:
            scale = 56;
            break;
        case 16:
            scale = 60;
            break;
        case 17:
            scale = 64;
            break;
        case 18:
            scale = 69;
            break;
        case 19:
            scale = 73;
            break;
        case 20:
            scale = 77;
            break;
        case 21:
            scale = 81;
            break;
        case 22:
            scale = 85;
            break;
        case 23:
            scale = 90;
            break;
        case 24:
            scale = 94;
            break;
        case 25:
            scale = 98;
            break;
        case 26:
            scale = 102;
            break;
        case 27:
            scale = 107;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertSeToTScores(params) {
    let scale = 0;
    switch(params){
        case 6:
            scale = 24;
            break;
        case 7:
            scale = 27;
            break;
        case 8:
            scale = 31;
            break;
        case 9:
            scale = 35;
            break;
        case 10:
            scale = 38;
            break;
        case 11:
            scale = 42;
            break;
        case 12:
            scale = 46;
            break;
        case 13:
            scale = 49;
            break;
        case 14:
            scale = 52;
            break;
        case 15:
            scale = 56;
            break;
        case 16:
            scale = 60;
            break;
        case 17:
            scale = 63;
            break;
        case 18:
            scale = 67;
            break;
        case 19:
            scale = 70;
            break;
        case 20:
            scale = 74;
            break;
        case 21:
            scale = 77;
            break;
        case 22:
            scale = 81;
            break;
        case 23:
            scale = 84;
            break;
        case 24:
            scale = 88;
            break;
        case 25:
            scale = 91;
            break;
        case 26:
            scale = 95;
            break;
        case 27:
            scale = 98;
            break;
        case 28:
            scale = 102;
            break;
        case 29:
            scale = 105;
            break;
        case 30:
            scale = 109;
            break;
        default:
            scale = null;
    }
    return scale;
}
function convertMaToTScores(params) {
    let scale = 0;
    switch(params){
        case 2:
            scale = 24;
            break;
        case 3:
            scale = 30;
            break;
        case 4:
            scale = 35;
            break;
        case 5:
            scale = 40;
            break;
        case 6:
            scale = 46;
            break;
        case 7:
            scale = 51;
            break;
        case 8:
            scale = 57;
            break;
        case 9:
            scale = 62;
            break;
        case 10:
            scale = 68;
            break;
        case 11:
            scale = 74;
            break;
        case 12:
            scale = 79;
            break;
        case 13:
            scale = 85;
            break;
        case 14:
            scale = 90;
            break;
        case 15:
            scale = 96;
            break;
        case 16:
            scale = 101;
            break;
        case 17:
            scale = 107;
            break;
        default:
            scale = null;
    }
    return scale;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLGg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMarkup", ()=>createMarkup);
function createMarkup(arr) {
    const markup = arr.map(({ id, question })=>`<li class="test-item">
    <p class="test-item-text"> ${id}. ${question} </p>
  </li>`);
    return markup;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipKyU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createQuestionId", ()=>createQuestionId);
function createQuestionId(arr) {
    for(let i = 1; i <= arr.length; i += 1)arr[i - 1].id = i;
}

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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4XbKz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testItems", ()=>testItems);
const testItems = [
    {
        question: "У Вас хороший апетит?"
    },
    {
        question: " Вранці Ви зазвичай відчуваєте, що виспалися і відпочили."
    },
    {
        question: "У вашому повсякденному житті маса цікавого."
    },
    {
        question: "Ви працюєте з великою напругою."
    },
    {
        question: "Часом Вас приходять в голову такі нехороші думки, що про них краще не розповідати."
    },
    {
        question: "У Вас дуже рідко буває запор."
    },
    {
        question: "Іноді Вам дуже хотілося назавжди піти з дому."
    },
    {
        question: "Часом у Вас бувають напади нестримного сміху або плачу."
    },
    {
        question: "Часом Вас турбує нудота і позиви на блювоту."
    },
    {
        question: "У вас таке враження, що Вас ніхто не розуміє."
    },
    {
        question: "Іноді Вам хочеться вилаятися."
    },
    {
        question: "Щотижня Вам сняться кошмари."
    },
    {
        question: "Вам важче зосередитися, ніж більшості людей."
    },
    {
        question: "З Вами відбувалися (або відбуваються) дивні речі."
    },
    {
        question: "Ви досягли б в житті набагато більшого, якби люди не були налаштовані проти Вас."
    },
    {
        question: "У дитинстві Ви один час скоювали крадіжки."
    },
    {
        question: "Бувало, що по кілька днів, тижнів або цілих місяців Ви нічим не могли зайнятися, тому що важко було змусити себе включитися в роботу."
    },
    {
        question: "У Вас переривчастий і неспокійний сон."
    },
    {
        question: "Коли Ви знаходитесь серед людей, Вам чуються дивні речі."
    },
    {
        question: "Більшість знаючих Вас людей не вважають Вас неприємною людиною."
    },
    {
        question: "Вам часто доводилося підкорятися кому-небудь, хто знав менше Вашого."
    },
    {
        question: "Більшість людей задоволені своїм життям більш, ніж Ви."
    },
    {
        question: "Дуже багато перебільшують свої нещастя, щоб домогтися співчуття і допомоги."
    },
    {
        question: "Іноді ви гнівайтесь."
    },
    {
        question: "Вам безумовно не вистачає впевненості в собі."
    },
    {
        question: "У вас часто бувають посмикування в м'язах."
    },
    {
        question: "У Вас часто буває почуття, ніби Ви зробили щось неправильне або негарне."
    },
    {
        question: "Зазвичай Ви задоволені своєю долею."
    },
    {
        question: "Деякі так люблять командувати, що Вам хочеться все зробити наперекір, хоча Ви знаєте, що вони праві"
    },
    {
        question: "Ви вважаєте, що проти Вас щось замишляють."
    },
    {
        question: "Більшість людей здатне домагатися вигоди не зовсім чесним шляхом."
    },
    {
        question: "Вас часто турбує шлунок."
    },
    {
        question: "Часто ви не можете зрозуміти, чому напередодні Ви були в поганому настрої і роздратовані."
    },
    {
        question: "Часом Ваші думки текли так швидко, що Ви не встигали їх висловлювати."
    },
    {
        question: "Ви вважаєте, що Ваше сімейне життя не гірше, ніж у більшості Ваших знайомих."
    },
    {
        question: "Часом Ви впевнені у власній непотрібності."
    },
    {
        question: "В останні роки Ваше самопочуття було в основному хорошим."
    },
    {
        question: "У Вас бували періоди, під час яких Ви щось робили і потім не могли пригадати, що саме."
    },
    {
        question: "Ви вважаєте, що Вас часто незаслужено карали."
    },
    {
        question: "Ви ніколи не відчували себе краще, ніж тепер."
    },
    {
        question: "Вам байдуже, що думають про Вас інші."
    },
    {
        question: "З пам'яттю у Вас все благополучно."
    },
    {
        question: "Вам важко підтримувати розмову з людиною, з якою Ви тільки що познайомилися."
    },
    {
        question: "Велику частину часу Ви відчуваєте загальну слабкість."
    },
    {
        question: "У Вас рідко болить голова."
    },
    {
        question: "Іноді Вам бувало важко зберегти рівновагу при ходьбі."
    },
    {
        question: "Не всі Ваші знайомі Вам подобаються."
    },
    {
        question: "Є люди, які намагаються вкрасти Ваші ідеї та думки."
    },
    {
        question: "Ви вважаєте, що робили вчинки, які не можна пробачити."
    },
    {
        question: "Ви вважаєте, що Ви занадто сором'язливі."
    },
    {
        question: "Ви майже завжди про що-небудь тривожитеся."
    },
    {
        question: "Ваші батьки часто не схвалювали Ваших знайомств."
    },
    {
        question: "Іноді Ви трохи брешете."
    },
    {
        question: "Часом Ви відчуваєте, що Вам незвичайно легко приймати рішення."
    },
    {
        question: "У Вас буває сильне серцебиття і Ви часто задихаєтеся."
    },
    {
        question: "Ви запальні, але відхідливі."
    },
    {
        question: "У Вас бувають періоди такого занепокоєння, що важко всидіти на місці."
    },
    {
        question: "Ваші батьки та інші члени сім'ї часто чіпляються до Вас."
    },
    {
        question: "Ваша доля нікого особливо не цікавить."
    },
    {
        question: "Ви не засуджуєте людини, якій не проти скористатися в своїх інтересах помилками іншого."
    },
    {
        question: "Іноді Ви сповнені енергії."
    },
    {
        question: "За останній час у Вас погіршився зір."
    },
    {
        question: "Часто у Вас дзвенить або шумить у вухах."
    },
    {
        question: "У Вашому житті були випадки (можливо, тільки один), коли Ви відчували, що на Вас діє гіпноз."
    },
    {
        question: "У Вас бувають періоди, коли Ви незвично веселі без особливої причини."
    },
    {
        question: "Навіть перебуваючи в суспільстві, Ви зазвичай відчуваєте себе самотньо."
    },
    {
        question: "Ви вважаєте, що майже кожен може збрехати, щоб уникнути неприємностей."
    },
    {
        question: "Ви відчуваєте гостріше, ніж більшість інших людей."
    },
    {
        question: "Часом Ваша голова працює як би повільніше, ніж зазвичай."
    },
    {
        question: "Ви часто розчаровуєтеся в людях."
    },
    {
        question: "Ви зловживаєте спиртними напоями."
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gEG5q","7Urjo"], "7Urjo", "parcelRequiree8da")

//# sourceMappingURL=task-16.fd72251d.js.map
