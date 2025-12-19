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
})({"a0bFW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a99d3e93a8f595c9";
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

},{}],"4aEUC":[function(require,module,exports) {
var _common = require("../js/common");
var _createMarkup = require("../js/helpers/create-markup");
var _createQuestionId = require("../js/helpers/create-question-id");
var _getCurrentDate = require("../js/helpers/get-current-date");
var _getSTEN = require("../js/helpers/get-STEN");
var _questionsTask15 = require("./questions-task-15");
const firstResultMarkup = (value, caseCounter)=>{
    if (value) return `<p class="result">Результат №1 = ${caseCounter}</p>`;
    else return `<p><b class="result">Результат №1 = ${caseCounter}</b></p>`;
};
const secondResultMarkup = (value, caseCounter)=>{
    if (value < 8) return `<p class="result">Результат №2 = ${caseCounter}: ${value}</p>`;
    else return `<p><b class="result">Результат №2 = ${caseCounter}: ${value}</b></p>`;
};
(0, _createQuestionId.createQuestionId)((0, _questionsTask15.testItems));
const markup = (0, _createMarkup.createMarkup)((0, _questionsTask15.testItems));
let firstCaseCounter = 0;
let secondCaseCounter = 0;
let thirdCaseCounter = 0;
let fourthCaseCounter = 0;
let fifthCaseCounter = 0;
let sixthCaseCounter = 0;
let seventCaseCounter = 0;
let numQuestion = 1;
let userName = null;
const firstCaseNo = [
    1,
    4,
    6,
    24,
    25,
    27,
    47,
    49,
    50,
    70,
    72,
    93,
    112,
    114,
    137
];
const secondCaseYes = [
    3,
    5,
    23,
    26,
    48,
    68,
    89,
    90,
    91,
    94,
    111,
    113,
    115,
    134,
    135,
    136,
    138,
    155,
    157,
    158,
    159,
    160,
    177,
    178,
    181,
    199,
    200,
    202,
    203,
    204,
    221,
    222,
    223,
    225,
    226,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    265,
    266,
    267,
    268,
    269,
    270,
    271
];
const secondCaseNo = [
    2,
    28,
    45,
    46,
    67,
    69,
    71,
    92,
    116,
    133,
    156,
    179,
    180,
    182,
    201,
    224
];
const thirdCaseYes = [
    7,
    8,
    9,
    10,
    29,
    31,
    32,
    51,
    52,
    53,
    54,
    73,
    74,
    75,
    76,
    95,
    96,
    97,
    98,
    117,
    118,
    119,
    120,
    140,
    141,
    142,
    161,
    162,
    163,
    164,
    183,
    184,
    185,
    205,
    206,
    207,
    227,
    229,
    250,
    251,
    272,
    273
];
const thirdCaseNo = [
    30,
    139,
    228
];
const fourthCaseYes = [
    11,
    12,
    13,
    33,
    34,
    55,
    56,
    57,
    77,
    78,
    79,
    99,
    100,
    101,
    121,
    122,
    123,
    143,
    144,
    145,
    165,
    166,
    167,
    186,
    187,
    188,
    189,
    208,
    209,
    210,
    211,
    231,
    232,
    233,
    252,
    253,
    254,
    255,
    274,
    275,
    276
];
const fourthCaseNo = [
    35,
    230
];
const fifthCaseYes = [
    14,
    15,
    17,
    36,
    37,
    38,
    39,
    58,
    59,
    60,
    61,
    80,
    81,
    82,
    83,
    102,
    103,
    105,
    124,
    125,
    126,
    127,
    146,
    147,
    148,
    168,
    169,
    170,
    171,
    190,
    192,
    212,
    234,
    235,
    256,
    257,
    258
];
const fifthCaseNo = [
    16,
    104,
    149,
    191,
    213,
    214,
    236
];
const sixthCaseYes = [
    18,
    19,
    20,
    40,
    63,
    85,
    86,
    107,
    128,
    129,
    151,
    172,
    193,
    215,
    237,
    238
];
const sixthCaseNo = [
    41,
    42,
    62,
    64,
    84,
    106,
    150,
    173,
    194,
    195,
    216,
    217,
    239,
    259,
    260,
    261
];
const seventhCaseYes = [
    21,
    22,
    43,
    44,
    65,
    66,
    87,
    88,
    108,
    109,
    130,
    131,
    132,
    152,
    153,
    154,
    174,
    175,
    196,
    197,
    198,
    218,
    219,
    220,
    240,
    241,
    242,
    262,
    263,
    264
];
alert("Інструкція:„Вам буде запропоновано відповісти на ряд питань, що стосуються деяких особливостей Вашого самопочуття, поведінки, характеру. Будьте відверті, довго не роздумуйте над змістом питань, давайте відповідь, яка першим прийде Вам у голову. Пам'ятайте, що немає правильних або неправильних відповідей. Варіанти відповідей “так” або “ні”. Відповідати потрібно на всі питання підряд, нічого не пропускаючи.”");
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
        if (secondCaseYes.includes(numQuestion)) secondCaseCounter += 1;
        if (thirdCaseYes.includes(numQuestion)) thirdCaseCounter += 1;
        if (fourthCaseYes.includes(numQuestion)) fourthCaseCounter += 1;
        if (fifthCaseYes.includes(numQuestion)) fifthCaseCounter += 1;
        if (sixthCaseYes.includes(numQuestion)) sixthCaseCounter += 1;
        if (seventhCaseYes.includes(numQuestion)) seventCaseCounter += 1;
    }
    if (evt.target.dataset.answer === "no") {
        if (firstCaseNo.includes(numQuestion)) firstCaseCounter += 1;
        if (secondCaseNo.includes(numQuestion)) secondCaseCounter += 1;
        if (thirdCaseNo.includes(numQuestion)) thirdCaseCounter += 1;
        if (fourthCaseNo.includes(numQuestion)) fourthCaseCounter += 1;
        if (fifthCaseNo.includes(numQuestion)) fifthCaseCounter += 1;
        if (sixthCaseNo.includes(numQuestion)) sixthCaseCounter += 1;
    }
    if (numQuestion < markup.length) {
        (0, _common.testsEl).innerHTML = markup[numQuestion];
        numQuestion += 1;
    } else {
        const date = (0, _getCurrentDate.getCurrentDate)();
        const STEN_D = (0, _getSTEN.getSTEN_D)(firstCaseCounter);
        const STEN_NPN = (0, _getSTEN.getSTEN_NPN)(secondCaseCounter);
        const userNameMarkup = `<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${userName}</p>`;
        const result = `${userNameMarkup}
      ${firstResultMarkup(STEN_D, firstCaseCounter)}
      ${secondResultMarkup(STEN_NPN, secondCaseCounter)}
    <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
    <p class="result"> Результат №4 = ${fourthCaseCounter} </p>
    <p class="result"> Результат №5 = ${fifthCaseCounter} </p>
    <p class="result"> Результат №6 = ${sixthCaseCounter} </p>
    <p class="result"> Результат №7 = ${seventCaseCounter} </p>
    <div class="date">
        <span class="time">${date.currentHours}:${date.currentMinutes}</span>
         <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
    </div>`;
        (0, _common.mainContainer).innerHTML = result;
    }
};
(0, _common.formEl).addEventListener("input", handleInput);
(0, _common.formEl).addEventListener("submit", handleSubmit);
(0, _common.btnEl).addEventListener("click", clickItem);

},{"../js/common":"2ASYY","../js/helpers/create-markup":"eLGg5","../js/helpers/create-question-id":"ipKyU","../js/helpers/get-current-date":"gTe1R","../js/helpers/get-STEN":"jGTgm","./questions-task-15":"278q8"}],"2ASYY":[function(require,module,exports) {
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

},{}],"eLGg5":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGTgm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSTEN_D", ()=>getSTEN_D);
parcelHelpers.export(exports, "getSTEN_NPN", ()=>getSTEN_NPN);
function getSTEN_D(num) {
    if (num >= 8) return false;
    else return true;
}
function getSTEN_NPN(num) {
    if (num >= 13) return 10;
    else if (num === 12) return 9;
    else if (num === 11 || num === 10) return 8;
    else if (num === 9 || num === 8) return 7;
    else if (num === 7) return 6;
    else if (num === 6 || num === 5) return 5;
    else if (num === 4 || num === 3) return 4;
    else if (num === 2) return 3;
    else if (num === 1) return 2;
    else return 1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"278q8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testItems", ()=>testItems);
const testItems = [
    {
        question: " Іноді мені в голову приходять такі нехороші думки, що краще про них нікому не розповідати."
    },
    {
        question: "Запори в мене бувають рідко."
    },
    {
        question: "Часом у мене бувають напади сміху і плачу, з якими я ніяк не можу впоратися"
    },
    {
        question: "Часом мені так і хочеться вилаятися."
    },
    {
        question: "У мене часто болить голова."
    },
    {
        question: "Іноді я говорю неправду."
    },
    {
        question: "Мій настрій залежить від суспільства, в якому я перебуваю."
    },
    {
        question: "Сон у мене, зазвичай, багатий яскравими сновидіннями."
    },
    {
        question: "Люблю костюми яскраві і помітні."
    },
    {
        question: "Мій апетит залежить від настрою: то їм із задоволенням, то знехотя, через силу."
    },
    {
        question: "Часто яка-небудь нав'язлива думка не дає мені заснути."
    },
    {
        question: "Я сильно гублюся, опинившись несподівано в центрі уваги."
    },
    {
        question: "Критика в тому вигляді, в якому її здійснюють багато людей, швидше вибиває мене з колії, ніж допомагає."
    },
    {
        question: "Я часто роблю за настроєм, а не за переконанням."
    },
    {
        question: "Часто в суперечці я йду від суті питання і переходжу на особистості."
    },
    {
        question: "Я не піду на ризик, якщо є тільки мала надія на успіх."
    },
    {
        question: "Якщо зі мною чинять несправедливо, то я відчуваю, що повинен відплатити, хоча б з принципу."
    },
    {
        question: "Доля виразно несправедлива до мене."
    },
    {
        question: "Мені здається, що мене ніхто не розуміє."
    },
    {
        question: "Часом в мене вселяється злий дух."
    },
    {
        question: "Зовнішній вигляд мене дуже мало цікавить."
    },
    {
        question: "Іноді я відчуваю, що моя душа покидає тіло і літає десь у космосі."
    },
    {
        question: "Раз на тиждень або частіше я без жодної видимої причини раптово відчуваю жар у всьому тілі."
    },
    {
        question: "Буває, що я пропускаю передовиці в газетах."
    },
    {
        question: "Буває, що я серджуся."
    },
    {
        question: "Тепер мені важко сподіватися на те, що я чогось досягну в житті."
    },
    {
        question: "Буває, що я відкладаю на завтра те, що можна зробити сьогодні."
    },
    {
        question: "Я охоче беру участь у всіх зборах та інших громадських заходах."
    },
    {
        question: "Вважаю, що одягненим треба бути завжди привабливо, тому що “Зустрічають по одягу”."
    },
    {
        question: "Я вважаю, що не слід виділятися серед оточуючих чому б то не було."
    },
    {
        question: "У незвичайною і привертаючому увагу одязі я почуваюся чудово."
    },
    {
        question: "Намагаюся жити так, щоб оточуючі могли сказати про мене: “Ось це людина”"
    },
    {
        question: "Часто мені важко втриматися від жалю до самого себе."
    },
    {
        question: "Якщо моє вдале зауваження залишилося непоміченим, я більше не повторюю його."
    },
    {
        question: "Якщо я зробив якийсь промах в суспільстві, то про це забуваю досить швидко"
    },
    {
        question: "Часом мене так і підмиває вступити з ким-небудь в суперечку."
    },
    {
        question: "Часом я так наполягаю на своєму, що оточуючі втрачають зі мною терпіння"
    },
    {
        question: "Я не можу до кінця вислухати людину, якщо він, на мою думку, говорить дурні речі."
    },
    {
        question: "Іноді мені хочеться зробити що-небудь небезпечне або приголомшуюче."
    },
    {
        question: "Якби люди не були налаштовані проти мене, я досяг би в житті набагато більшого."
    },
    {
        question: "Я вважаю, що більшість людей здатні збрехати, щоб просунутися по службі."
    },
    {
        question: "Велику частину часу (життя) я цілком задоволений життям."
    },
    {
        question: "Я вірю, що деякі люди одним дотиком можуть зцілити хворобу."
    },
    {
        question: "Я знаю людей, які намагаються привласнити мої думки."
    },
    {
        question: "Найважча боротьба для мене ̶ боротьба із самим собою."
    },
    {
        question: "М'язові судоми і посмикування в мене бувають дуже рідко."
    },
    {
        question: " Іноді, коли я погано себе почуваю, я буваю дратівливим."
    },
    {
        question: "Я досить байдужий до того, що зі мною буде."
    },
    {
        question: "В гостях за столом я тримаюся краще, ніж удома."
    },
    {
        question: "Якщо мені не загрожує штраф і машин поблизу немає, я можу перейти вулицю там, де мені хочеться, а не там де належить."
    },
    {
        question: "Найбільше з боку оточуючих я ціную увагу до мене."
    },
    {
        question: "Я люблю одяг модний і незвичайний, яка мимоволі привертає погляди."
    },
    {
        question: "Буває, що абсолютно незнайома людина мені моментально вселяє довіру і симпатію."
    },
    {
        question: "Пригоди і ризик мене приваблюють, коли в них мені дістається перша роль."
    },
    {
        question: "Часто я схильний подумки повертатися до своїх дріб'язковим неприємностей, і мені важко викинути їх з голови."
    },
    {
        question: "Я часто відчуваю себе самотнім і нікому непотрібним."
    },
    {
        question: "Я відчуваю, що мої друзі та близькі не так сильно потребують в мені, як я в них."
    },
    {
        question: "Іноді я можу не втриматися і нагрубити, навіть якщо це зашкодить моїм інтересам."
    },
    {
        question: "Досить часто я дію під впливом хвилинного настрою."
    },
    {
        question: "Коли на мене кричать, я відповідаю тим же."
    },
    {
        question: "Часто я готовий на все, щоб перемогти в суперечці."
    },
    {
        question: "Деякі люди до того люблять командувати, що мене так і тягне робити все наперекір, навіть якщо я знаю, що вони не праві."
    },
    {
        question: "Дехто радий би мені нашкодити."
    },
    {
        question: "Я ніколи не робив у житті нічого ризикованого тільки заради гострих відчуттів."
    },
    {
        question: "Я вважаю, що релігія має таке ж право на існування, як і різні науки."
    },
    {
        question: "Нерідко я відчуваю своєрідне відчуття, ніби “Я” ̶ це не “Я”"
    },
    {
        question: "Я вважаю, що моє сімейне життя таке ж гарне, як і у більшості моїх знайомих."
    },
    {
        question: "Іноді у мене буває таке відчуття, що я просто повинен нанести ушкодження самому собі або кому-небудь іншому."
    },
    {
        question: "У дитинстві у мене була така компанія, де всі намагалися завжди і в усьому стояти один за одного."
    },
    {
        question: "У грі я волію вигравати."
    },
    {
        question: "Зараз моя вага постійна (я не повнію і не худну)."
    },
    {
        question: "Мені приємно мати серед своїх знайомих значних людей, це як би надає вагу у власних очах."
    },
    {
        question: "Я завжди прагну бути серед людей, щоб “показати” себе."
    },
    {
        question: "Я люблю опікати когось, хто мені подобається."
    },
    {
        question: "Я люблю бути першим, щоб з мене брали приклад, за мною б слідували інші."
    },
    {
        question: "Іноді я відчуваю комок у горлі або інші незвичайні відчуття."
    },
    {
        question: "Встаючи вранці, я часто відчуваю себе втомленим і розбитим."
    },
    {
        question: "Зміни погоди впливають на мою працездатність і настрій."
    },
    {
        question: "У відносинах з людьми я часто відчуваю труднощі через почуття сором'язливості, реальних причин для цього немає."
    },
    {
        question: "Часто я не поступаюся людям не тому, що справа є дійсно важливою, а просто через принцип."
    },
    {
        question: "У мене часто поганий, злісний настрій."
    },
    {
        question: "Я, напевно, людина дратівлива і запальна."
    },
    {
        question: "Часто я “завожусь з півоберта”."
    },
    {
        question: "Більшість людей чесні лише тому, що бояться, що на обмані вони попадуться."
    },
    {
        question: "По-моєму, проти мене щось замишляють."
    },
    {
        question: "Я знаю, що за мною стежать."
    },
    {
        question: "У мене бувають напади поганого самопочуття, дратівливості і туги."
    },
    {
        question: "Часом я відчуваю дивні запахи."
    },
    {
        question: "Я був би досить спокійний, якби у кого-небудь з моєї сім'ї були неприємності через порушення закону."
    },
    {
        question: "Буває, що з моїм розумом діється щось недобре."
    },
    {
        question: "Коли я намагаюся щось сказати, то часто помічаю, що в мене тремтять руки."
    },
    {
        question: "Руки в мене такі ж спритні і моторні, як і колись."
    },
    {
        question: "Серед моїх знайомих є люди, які мені не подобаються."
    },
    {
        question: "Думаю, що я людина приречена."
    },
    {
        question: "Я охоче слухаю ті наставляння, які мені приємні і лестять."
    },
    {
        question: "Я люблю, коли оточуючі приділяють мені багато уваги."
    },
    {
        question: "Страшенно не люблю всякі правила і обмеження, які мене стискують."
    },
    {
        question: "Я довго не роздумую у важких ситуаціях, рішення виникає у мене відразу, моментально."
    },
    {
        question: "У компанії я відчуваю себе ніяково і через це справляю враження гірше, ніж міг би."
    },
    {
        question: "Мені буває важко заснути через занепокоєння з приводу невдачі."
    },
    {
        question: "Іноді я помічаю, що зовсім дріб'язкові думки і спогади цілком захоплюють мене."
    },
    {
        question: "Я проти того, щоб наді мною жартували."
    },
    {
        question: "Мене сильно дратують люди, які лізуть без черги, і я їм це завжди висловлюю або не пускаю."
    },
    {
        question: "Мене важко розсердити."
    },
    {
        question: "Я досить часто здійснюю вчинки (частіше ніж інші), про які потім доводиться шкодувати."
    },
    {
        question: "Я думаю, що більшість людей готові піти на нечесний вчинок заради вигоди."
    },
    {
        question: "Я знаю хто винен в більшості моїх неприємностей."
    },
    {
        question: "Я важко доступна для контакту людина."
    },
    {
        question: "Я ніколи не потребую співчуття оточуючих."
    },
    {
        question: "Мої рідні не розуміють мене і здаються мені чужими."
    },
    {
        question: "Були випадки, коли мені було важко втриматися від того, щоб не поцупити у кого небудь або де-небудь, наприклад, у магазині."
    },
    {
        question: "Буває, що я з ким-небудь трохи пліткую."
    },
    {
        question: "Часто я бачу сни, про які краще нікому не розповідати."
    },
    {
        question: "Бувало, що при обговоренні деяких питань я, особливо не замислюючись, погоджувався з думкою інших."
    },
    {
        question: "У школі я засвоював матеріал повільніше, ніж інші."
    },
    {
        question: "Моя зовнішність мене в загальному влаштовує."
    },
    {
        question: "Я дуже люблю читати про злочини та таємничі пригоди."
    },
    {
        question: "Мені подобається брати участь у конкурсах художньої самодіяльності."
    },
    {
        question: "Вважаю, що дуже важливо, щоб результат моєї роботи став відомий оточуючим"
    },
    {
        question: "Я вважаю, що більшість людей здатні збрехати, якщо це в їх інтересах."
    },
    {
        question: "Мені буває важко викласти свої думки словами, тому я рідко включаюся в бесіду."
    },
    {
        question: "Буває, що мене турбує почуття провини або докори сумління через яку-небудь дрібницю."
    },
    {
        question: "У розмові з представницями протилежної статі я часто уникаю делікатних тем, які можуть викликати збентеження."
    },
    {
        question: "Я сильно дратуюся, якщо мене кваплять або підганяють."
    },
    {
        question: "Іноді дрібниця, сказаний на мою адресу, здатна викликати у мене бурхливу реакцію."
    },
    {
        question: "Якщо я вважаю, що чиню правильно, то думка інших людей мене мало цікавить"
    },
    {
        question: "Терпіти не можу, якщо мене перебивають в той час, коли я зайнятий."
    },
    {
        question: "Я вважаю, що часто мене карали незаслужено."
    },
    {
        question: "Я легко плачу."
    },
    {
        question: "Я віддаю перевагу темним і сірим тонам."
    },
    {
        question: "Я живу своїми внутрішніми думками і мене не цікавить дійсність."
    },
    {
        question: "Я не відчуваю (не сприймаю) заперечень і критики, а завжди думаю і роблю по-своєму."
    },
    {
        question: "Я цілком упевнений у собі."
    },
    {
        question: "Раз на тиждень або частіше я буваю дуже збудженим і схвильованим."
    },
    {
        question: "Іноді я відчуваю, що хтось керує моїми думками."
    },
    {
        question: "Я щодня випиваю незвично багато води."
    },
    {
        question: " Буває, що непристойний жарт викликає у мене сміх."
    },
    {
        question: "Щасливіше всього я буваю, коли знаходжусь на самоті."
    },
    {
        question: "У компанії я не привертаю до себе уваги."
    },
    {
        question: "У компанії мій настрій куди краще, ніж удома"
    },
    {
        question: "Я здатний зробити щось видатне"
    },
    {
        question: "Мені подобається виступати перед ким-небудь."
    },
    {
        question: "Думаю, що я більш чутливий до естетичних сторін життя, ніж більшість людей."
    },
    {
        question: "Я часто відчуваю себе менш пристосованим до життя і її вимогам, ніж інші."
    },
    {
        question: "Я набагато більше зацікавлений у пошуках духовних і художніх цінностей, ніж ділових і матеріальних."
    },
    {
        question: "У більшості випадків я дотримуюся формули: “Ризик ̶ благородна справа”"
    },
    {
        question: "Мені дуже важко, майже не можливо змовчати за образу."
    },
    {
        question: "Мені часто що-небудь так набридає, що я відчуваю себе “ситим по горло”."
    },
    {
        question: "У мене ніколи не було неприємностей через грубі порушення дисципліни, конфліктів з товаришами тощо"
    },
    {
        question: "У мене рідко дзвенить або гуде у вухах."
    },
    {
        question: "Упевнений, що за моєю спиною про мене говорять"
    },
    {
        question: "Мої ідеї і думки виглядають, як ті, що випереджають час."
    },
    {
        question: "Мене дратує, коли мене відволікають від важливої роботи, наприклад, просять поради."
    },
    {
        question: "Мені здається, що мене ніхто не розуміє."
    },
    {
        question: "Хтось намагається впливати на мої думки."
    },
    {
        question: "Я любив казки Андерсена."
    },
    {
        question: "Навіть серед людей я, зазвичай, відчуваю себе самотнім."
    },
    {
        question: "Мене легко привести в замішання."
    },
    {
        question: "Я легко втрачаю терпіння з людьми."
    },
    {
        question: "Мені часто хочеться померти."
    },
    {
        question: "Я б погодився виступити в ролі конферансьє на концерті у якої-небудь знаменитості."
    },
    {
        question: "Мене завжди дратують люди, які прагнуть бути першими в компанії."
    },
    {
        question: "У мене псується настрій, я відчуваю себе погано, якщо оточуючі не проявляють до мене належної уваги"
    },
    {
        question: "Мені подобається цитувати незвичайні або шокуючі вислови мудреців або великих людей."
    },
    {
        question: "Іноді я не наважуюся здійснити свої власні ідеї через острах, що вони можуть виявитися нереальними."
    },
    {
        question: "Я сильно ніяковію, якщо говорять про мій характер."
    },
    {
        question: "Мене бентежать непристойні анекдоти й історії."
    },
    {
        question: "Я не вважаю за потрібне приховувати своє презирство чи негативну думку про когось або про щось."
    },
    {
        question: "Мені часто кажуть, що я запальний."
    },
    {
        question: "Я не дуже лажу з людьми."
    },
    {
        question: "У сучасному житті занадто багато дратівливих перешкод, обмежень."
    },
    {
        question: "У моєму житті був один чи кілька випадків, коли я відчував, що хтось за допомогою гіпнозу змушує мене робити ті чи інші вчинки."
    },
    {
        question: "У мене ніколи не було зіткнень з законом."
    },
    {
        question: "Я вважаю, що пророцтва й осяяння мають великий сенс."
    },
    {
        question: "Я б вважав за краще більшу частину часу сидіти, нічого не робити, мріяти (“філософствувати”)."
    },
    {
        question: "Часом я шкодую, що живу на цьому світі."
    },
    {
        question: "Бувало, що я кидав розпочату справу, тому що боявся, що не впораюся з нею."
    },
    {
        question: "Майже щодня трапляється що-небудь, що лякає мене."
    },
    {
        question: "До питань релігії я ставлюся байдуже, вони мене не займають."
    },
    {
        question: "Напади поганого настрою бувають у мене рідко."
    },
    {
        question: "Я заслуговую суворого покарання за свої вчинки."
    },
    {
        question: "Мої переконання і погляди непохитні."
    },
    {
        question: "Дуже рідко критика і заперечення на мою адресу бувають справедливими."
    },
    {
        question: "У компаніях я завжди являюсь центром уваги."
    },
    {
        question: "Я належу до таких людей, які вміють захоплюватися і схилятися перед будь-ким або чим-небудь."
    },
    {
        question: "Думаю, що класичні музичні твори, живопис чинять на мене більше враження, ніж на інших."
    },
    {
        question: "У мене нерідко буває стан, коли я ось-ось можу заплакати."
    },
    {
        question: "Йдучи з дому, я часто турбуюся про те, чи закриті двері, вимкнений газ тощо."
    },
    {
        question: "Мене ніколи не турбує небезпека заразитися якою-небудь хворобою через дверні ручки."
    },
    {
        question: "Досить часто я відчуваю, що в мене все “кипить” всередині."
    },
    {
        question: "Люди мене вважають спокійною і врівноваженою людиною."
    },
    {
        question: "Іноді я відчуваю таку лють, що хочеться зламати двері або розбити вікно."
    },
    {
        question: "Мені здається, що я все відчуваю більш гостро, ніж інші."
    },
    {
        question: "Людина, яка залишає без нагляду цінне майно, винна, приблизно, так само, як і той, хто це майно краде."
    },
    {
        question: "Думаю, що кожен може збрехати, щоб уникнути неприємностей."
    },
    {
        question: "Я досить спокійно переношу вид тварин, що страждають."
    },
    {
        question: "У мене бувають дуже незвичайні і своєрідні внутрішні переживання."
    },
    {
        question: "Все на землі підпорядковується якійсь владній “магічній” силі."
    },
    {
        question: "У мене бували періоди, коли через хвилювання я втрачав сон."
    },
    {
        question: "Я людина нервова і легко збудлива."
    },
    {
        question: "Мені здається, що нюх у мене такий же як у інших (не гірше)."
    },
    {
        question: "Все у мене виходить погано, не так як треба."
    },
    {
        question: "Я майже завжди відчуваю сухість у роті."
    },
    {
        question: "Велику частину часу я відчуваю себе втомленим."
    },
    {
        question: "У компанії я люблю розповідати різні історії з тим, щоб заволодіти загальною увагою."
    },
    {
        question: "Мені подобається заводити знайомства з впливовими і авторитетними людьми."
    },
    {
        question: "Для мене властива деяка примхливість."
    },
    {
        question: "Я ніяковію вступити в суперечку навіть з добре відомого мені питання."
    },
    {
        question: "Я надмірно чутливий і легко ранимий."
    },
    {
        question: "Мені, безумовно, не вистачає впевненості в собі."
    },
    {
        question: "Я готовий відмовитися від своїх намірів, якщо оточуючі вважають, що я не правий або цього робити не варто."
    },
    {
        question: "Я віддаю перевагу діяти імпульсивно, під впливом моменту, навіть якщо це призводить до труднощів."
    },
    {
        question: "Зазвичай, я спокійно переношу самовдоволених людей, навіть якщо вони багато вихваляються."
    },
    {
        question: "Я завжди в змозі гостро контролювати прояв своїх почуттів."
    },
    {
        question: "Я вразливіший за більшість людей."
    },
    {
        question: "Більшість людей в глибині душі не люблять обтяжувати себе заради того, щоб допомогти іншим."
    },
    {
        question: "Моя мати та батько часто змушували мене коритися навіть тоді, коли я вважав це нерозумним."
    },
    {
        question: "Мені в голову приходять часто дивні і незвичайні думки."
    },
    {
        question: "Часто якісь дрібниці дозволяють мені прийти до приголомшливих висновків."
    },
    {
        question: "Мені подобається шукати незвичайні або парадоксальні прийоми вирішення різних завдань і питань."
    },
    {
        question: " Іноді я відчуваю, що близький до нервового зриву."
    },
    {
        question: "Мене дуже дратує, що я забуваю, куди кладу речі."
    },
    {
        question: "Я дуже уважно ставлюся до того як я одягаюся."
    },
    {
        question: "Пригодницькі розповіді мені подобаються більше, ніж розповіді про кохання."
    },
    {
        question: "Мені дуже важко пристосуватися до нових умов життя, роботи. Перехід до будь-яких умов життя, роботи, навчання здається нестерпно важким."
    },
    {
        question: "Мені здається, що по відношенню до мене особливо часто чинять несправедливо."
    },
    {
        question: "Мені подобається, коли всі визнають мене главою або призвідником (людина, яка займається організацією чого-небудь)."
    },
    {
        question: "Я намагаюся уникати незвичайних висловлювань і вчинків, які бентежать оточуючих."
    },
    {
        question: "Мені приносить велике задоволення робити ризиковані вчинки заради забави"
    },
    {
        question: "Я цілком можу обійти закон, якщо по суті не порушую його."
    },
    {
        question: "Я часто пропускаю можливість через свою внутрішню нерішучість."
    },
    {
        question: "Мені важко підтримувати розмову з людьми, з якими я тільки що познайомився."
    },
    {
        question: "Мені часто доводиться приховувати свою сором'язливість ціною великих зусиль."
    },
    {
        question: "Приймаючи рішення, я більше керуюся серцем, ніж розумом."
    },
    {
        question: "Рідко, що можна здійснити поступовими, помірними методами, частіше необхідно застосувати силу."
    },
    {
        question: "Я висловлюю свої думки так, як вони приходять мені в голову, а не намагаюся їх спочатку краще сформулювати."
    },
    {
        question: "Безумовно, на мою долю випало більше турбот і занепокоєння, ніж належить."
    },
    {
        question: "Іноді мій слух настільки загострюється, що це навіть мені заважає."
    },
    {
        question: "У мене відсутні вороги, які по-справжньому хотіли б заподіяти мені якесь зло."
    },
    {
        question: "Мене не хвилює, якщо оточуючі вважають мої вчинки незвичайними."
    },
    {
        question: "Я не можу зрозуміти людей, які плачуть в кіно."
    },
    {
        question: "Вважаю, що я відрізняюся від більшості людей своєю незвичайною поведінкою."
    },
    {
        question: "Я часто відчуваю себе несправедливо скривдженим."
    },
    {
        question: "Моя думка часто не збігається з думкою оточуючих."
    },
    {
        question: "Я часто відчуваю почуття втоми від життя і мені не хочеться жити."
    },
    {
        question: "На мене звертають увагу частіше, ніж на інших."
    },
    {
        question: "У мене бувають головні болі і запаморочення через переживання."
    },
    {
        question: "Часто у мене бувають періоди, коли мені нікого не хочеться бачити.Нікого!"
    },
    {
        question: "Мені важко прокинутися в призначену годину."
    },
    {
        question: "Мені приємно мати серед своїх знайомих поважних людей, це піднімає мій авторитет."
    },
    {
        question: "Мені подобається їжа, приготована з екзотичних продуктів."
    },
    {
        question: "Я гостро і тривало переживаю невдачі."
    },
    {
        question: "Люди легко можуть змінити мою думку, яка перед цим здавалася мені остаточною."
    },
    {
        question: "Я можу йти попереду інших в уявних міркуваннях, але не в діях."
    },
    {
        question: "Часом я впевнений у своїй непотрібності."
    },
    {
        question: "Деякі історії (анекдоти) настільки цікаві, що мені буває не просто смішно, а настає “дикий сміх і захоплення”."
    },
    {
        question: "Вважаю, що сильній людині можна багато пробачити."
    },
    {
        question: "Я вважаю, що для цікавої і привабливої справи всякі правила і обмеження можна обійти."
    },
    {
        question: "Зазвичай, мене насторожують люди, які ведуть себе дещо привітніше, ніж я очікував."
    },
    {
        question: "Про мене кажуть вульгарні і образливі речі."
    },
    {
        question: "Коли я перебуваю в приміщенні, я відчуваю себе якось тривожно і неспокійно."
    },
    {
        question: "Я людина особлива і незрозуміла для інших (не такий як усі)."
    },
    {
        question: "Часом мені дуже хотілося покинути дім."
    },
    {
        question: "Життя для мене, майже завжди, пов'язане з напругою."
    },
    {
        question: "Якщо в моїх невдачах хтось винен, я не залишу його безкарним."
    },
    {
        question: "У дитинстві я був примхливим і дратівливим."
    },
    {
        question: "Мені відомі випадки, коли мої родичі лікувалися у невропатолога або психіатра."
    },
    {
        question: "Іноді я приймаю валеріану, еленіум, кодеїн або інші заспокійливі засоби."
    },
    {
        question: "Чи є у Вас судимі родичі?"
    },
    {
        question: "Чи мали Ви приводи в поліцію?"
    },
    {
        question: "Залишалися Ви в школі на другий рік?"
    },
    {
        question: "У мене є такі якості, за якими я виразно перевершую інших людей."
    },
    {
        question: "Я серйозно цікавлюся гімнастикою йогів."
    },
    {
        question: "Я схильний приймати все занадто близько до серця."
    },
    {
        question: "Я занадто недовірливий, без кінця тривожуся і турбуюся про все."
    },
    {
        question: "Якщо у мене взяли в борг, я соромлюся про це нагадати."
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["a0bFW","4aEUC"], "4aEUC", "parcelRequiree8da")

//# sourceMappingURL=task-15.a8f595c9.js.map
