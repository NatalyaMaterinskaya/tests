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
})({"S0Qsp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3284e4943e215b3d";
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

},{}],"9rgTG":[function(require,module,exports) {
//questions for first test
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//questions for sixth test
parcelHelpers.export(exports, "firstTestItems", ()=>firstTestItems);
parcelHelpers.export(exports, "secondTestItems", ()=>secondTestItems);
parcelHelpers.export(exports, "thirdTestItems", ()=>thirdTestItems);
parcelHelpers.export(exports, "markupForSevenBlock", ()=>markupForSevenBlock);
parcelHelpers.export(exports, "fourthTestItems", ()=>fourthTestItems);
parcelHelpers.export(exports, "fifthTestItemsLeftCharacteristics", ()=>fifthTestItemsLeftCharacteristics);
parcelHelpers.export(exports, "fifthTestItemsRightCharacteristics", ()=>fifthTestItemsRightCharacteristics);
parcelHelpers.export(exports, "sixthTestItemsRightCharacteristics", ()=>sixthTestItemsRightCharacteristics);
const firstTestItems = [
    {
        question: "Зазвичай вранці я прокидаюся свіжим і відпочилим."
    },
    {
        question: "Запори у мене бувають дуже рідко."
    },
    {
        question: "Часом у мене бувають приступи сміху або плачу, з якими я ніяк не можу впоратися."
    },
    {
        question: "Мені здається, що мене ніхто не розуміє."
    },
    {
        question: "Буває, у мене з’являється бажання ламати або крушити все навколо."
    },
    {
        question: "Бувало, що я цілими днями або навіть тижнями нічого не міг робити, тому що ніяк не міг примусити себе взятися до роботи."
    },
    {
        question: "Голова у мене болить часто."
    },
    {
        question: "Було б добре, якби майже всі закони відмінили."
    },
    {
        question: "Стан мого здоров'я майже такий же, як у більшості моїх знайомих (не гірше)."
    },
    {
        question: "Зустрічаючи на вулиці своїх знайомих або шкільних друзів, з якими я давно не бачився, я вважаю за краще проходити мимо, якщо вони зі мною не заговорюють першими."
    },
    {
        question: "Я людина товариська."
    },
    {
        question: "Значну частину часу настрій у мене пригнічений."
    },
    {
        question: "Тепер мені важко сподіватися на те, що я чого-небудь доб'юся у житті."
    },
    {
        question: "У мене мало впевненості в собі."
    },
    {
        question: "Я вважаю, що більшість людей здатна збрехати, щоб просунутися по службі."
    },
    {
        question: "Я сварюся з членами моєї родини дуже рідко."
    },
    {
        question: "Іноді я маю сильне бажання порушити правила пристойності або нашкодити."
    },
    {
        question: "Я досить байдужий до того, що зі мною буде."
    },
    {
        question: "Деякі люди до того полюбляють командувати, що мене так і тягне робити все наперекір, навіть якщо я знаю, що вони мають рацію."
    },
    {
        question: "Я часто вважаю себе зобов'язаним відстоювати те, що вважаю справедливим."
    },
    {
        question: "Моя мова зараз така ж, як завжди (ні швидше і ні повільніше, немає ні хрипоти, ні невиразності)."
    },
    {
        question: "Мене дуже зачіпає, коли мене критикують або лають."
    },
    {
        question: "Іноді у мене буває таке відчуття, що я просто повинен нанести ушкодження собі або кому-небудь іншому."
    },
    {
        question: "Іноді мене так і підмиває з ким-небудь затіяти бійку."
    },
    {
        question: "Останні декілька років я відчуваю себе добре."
    },
    {
        question: "Зараз моя вага постійна (я не худну і не повнію)."
    },
    {
        question: "Я легко можу заплакати."
    },
    {
        question: "Я був би досить спокійний, якби у кого-небудь з моєї сім'ї були неприємності через порушення закону."
    },
    {
        question: "З моїм розумом твориться щось недобре."
    },
    {
        question: "Приступи запаморочення у мене бувають дуже рідко (або майже не бувають)."
    },
    {
        question: "Коли я намагаюся щось зробити, то часто помічаю, що у мене тремтять руки."
    },
    {
        question: "Велику частину часу я відчуваю загальну слабкість."
    },
    {
        question: "Іноді, коли я збентежений, я сильно потію, і мене це дратує."
    },
    {
        question: "Думаю, що я людина приречена."
    },
    {
        question: "Бували випадки, коли мені було важко утриматися від того, щоб що-небудь не поцупити у кого-небудь або де-небудь, наприклад, в магазині."
    },
    {
        question: "Я зловживав спиртними напоями."
    },
    {
        question: "Я часто турбуюся про що-небудь."
    },
    {
        question: "Я рідко задихаюся, і у мене не буває сильного серцебиття."
    },
    {
        question: "Мої батьки і інші члени моєї сім'ї прискіпуються до мене більше, ніж треба."
    },
    {
        question: "Хтось управляє моїми думками."
    },
    {
        question: "У школі я засвоював матеріал повільніше, ніж інші."
    },
    {
        question: "Я цілком упевнений в собі."
    },
    {
        question: "Коли я знаходжуся в компанії, мені важко знайти відповідну тему для розмови."
    },
    {
        question: "Мені легко примусити інших людей боятися мене, і іноді я це роблю заради забави."
    },
    {
        question: "Безглуздо засуджувати людину, що обдурила того, хто сам дозволяє себе обдурювати."
    },
    {
        question: "Щасливіше всього я буваю, коли знаходжуся на самоті."
    },
    {
        question: "Іноді без жодної причини у мене раптом наступають періоди надзвичайної веселості."
    },
    {
        question: "Життя для мене майже завжди пов'язано з напругою."
    },
    {
        question: "В школі мені було дуже важко виступати перед класом."
    },
    {
        question: "Мені здається, що я знаходжу друзів з такою ж легкістю, як і інші."
    },
    {
        question: "Мені неприємно, коли навкруги мене є люди."
    },
    {
        question: "Мене легко заставити зніяковіти."
    },
    {
        question: "Мені важко приступити до виконання нового завдання або почати нову справу."
    },
    {
        question: "Якби люди не були налаштовані проти мене, я досяг би набагато більшого."
    },
    {
        question: "Мені здається, що мене ніхто не розуміє."
    },
    {
        question: "Я легко втрачаю терпіння у спілкуванні з людьми."
    },
    {
        question: "Часто мені хочеться померти."
    },
    {
        question: "Бувало, що я кидав почату справу, оскільки боявся, що я не справлюся з нею."
    },
    {
        question: "Майже щодня трапляється що-небудь, що лякає мене."
    },
    {
        question: "Навіть серед людей я зазвичай відчуваю себе самотнім."
    },
    {
        question: "Часто, навіть тоді, коли для мене все складається добре, я відчуваю, що мені все байдуже."
    },
    {
        question: "Зазвичай я спокійний, і мене нелегко вивести з душевної рівноваги."
    },
    {
        question: "Часом мені здається, що я ні на що не здатний."
    },
    {
        question: "Мене дуже турбують всілякі нещастя."
    },
    {
        question: "Я думаю, що можна, не порушуючи закон, спробувати знайти в ньому лазівку."
    },
    {
        question: "Є люди, які мені настільки неприємні, що я в глибині душі радію, коли вони одержують прочухан за що-небудь."
    },
    {
        question: "Я охоче знайомлюся з новими людьми."
    },
    {
        question: "Я вважаю за краще діяти згідно власним планам, а не слідувати вказівкам інших."
    },
    {
        question: "Люблю, щоб оточуючі знали мою точку зору."
    },
    {
        question: "Я людина нервова і легко збудлива."
    },
    {
        question: "Все у мене виходить погано, не так як треба."
    },
    {
        question: "Майбутнє здається мені безнадійним."
    },
    {
        question: "Люди досить легко можуть змінити мою думку, навіть якщо до цього воно здавалася мені остаточною."
    },
    {
        question: "Значну частину часу я відчуваю себе втомленим."
    },
    {
        question: "Я прагну ухилятися від конфліктів і скрутних положень."
    },
    {
        question: "Пригодницькі оповідання мені подобаються більше, аніж про любов."
    },
    {
        question: "Безглуздо засуджувати людей, які прагнуть отримати від життя все, що зможуть."
    }
];
//questions for first test
//questions for second test
const secondTestItems = [
    {
        question: "Буває, що я серджуся"
    },
    {
        question: "Зазвичай вранці я прокидаюся свіжим і відпочилим"
    },
    {
        question: "Зараз я приблизно так само працездатний, як і завжди"
    },
    {
        question: "Доля безумовно несправедлива до мене"
    },
    {
        question: "Запори у мене бувають дуже рідко"
    },
    {
        question: "Часом мені дуже хотілося покинути свій дім"
    },
    {
        question: "Часом у мене бувають напади сміху або плачу, з якими я ніяк не можу справитися"
    },
    {
        question: "Мені здається, що мене ніхто не розуміє"
    },
    {
        question: "Вважаю, що якщо хтось заподіяв мені зло, я повинен йому відповісти тим же"
    },
    {
        question: "Іноді мені в голову приходять такі нехороші думки, що краще про них нікому не розказувати"
    },
    {
        question: "Мені важко зосередитися на якому-небудь завданні або роботі"
    },
    {
        question: "У мене бувають дуже дивні і незвичайні переживання"
    },
    {
        question: "У мене були відсутні неприємності через мою поведінку"
    },
    {
        question: "В дитинстві я у свій час скоював дрібні крадіжки"
    },
    {
        question: "Буває, у мене з’являється бажання ламати або крушити все навколо"
    },
    {
        question: "Бувало, що я цілими днями або навіть тижнями нічого не міг робити, тому що ніяк не міг примусити себе взятися до роботи"
    },
    {
        question: "Сон у мене переривистий і неспокійний"
    },
    {
        question: "Моя сім'я відноситися з несхваленням до тієї роботи, яку я обрав"
    },
    {
        question: "Бували випадки, що я не виконував своїх обіцянок"
    },
    {
        question: "Голова у мене болить часто"
    },
    {
        question: "Раз на тиждень або частіше я без жодної видимої причини раптово відчуваю жар у всьому тілі"
    },
    {
        question: "Було б добре, якби майже всі закони відмінили"
    },
    {
        question: "Стан мого здоров’я майже такий же, як у більшості моїх знайомих (не гірше)"
    },
    {
        question: "Зустрічаючи на вулиці своїх знайомих або шкільних друзів, з якими я давно не бачився, я вважаю за краще проходити мимо, якщо вони зі мною не заговорюють першими"
    },
    {
        question: "Більшості людей, які мене знають, я подобаюся"
    },
    {
        question: "Я людина товариська"
    },
    {
        question: "Іноді я так наполягаю на своєму, що люди втрачають терпіння"
    },
    {
        question: "Значну частину часу настрій у мене пригнічений"
    },
    {
        question: "Тепер мені важко сподіватися на те, що я чого-небудь досягну у житті"
    },
    {
        question: "У мене мало впевненості в собі"
    },
    {
        question: "Іноді я кажу неправду"
    },
    {
        question: "Зазвичай я вважаю, що життя – гарна річ"
    },
    {
        question: "Я вважаю, що більшість людей здатна збрехати, щоб просунутися по службі"
    },
    {
        question: "Я охоче беру участь у зібраннях, зборах і інших суспільних заходах"
    },
    {
        question: "Я сварюся з членами моєї сім’ї дуже рідко"
    },
    {
        question: "Іноді у мене виникає сильне бажання порушити правила пристойності або кому-небудь нашкодити"
    },
    {
        question: "Найважча боротьба для мене - це боротьба з самим собою"
    },
    {
        question: "М’язові судоми або сіпання у мене бувають украй рідко (або майже не бувають)"
    },
    {
        question: "Я досить байдужий до того, що зі мною буде"
    },
    {
        question: "Іноді, коли я себе недобре відчуваю я буваю дратівливим"
    },
    {
        question: "Значну частину часу у мене таке відчуття, що я зробив щось не те або навіть щось погане"
    },
    {
        question: "Деякі люди до того полюбляють командувати, що мені так і кортить робити все наперекір, навіть якщо я знаю, що вони мають рацію"
    },
    {
        question: "Я часто вважаю себе зобов'язаним відстоювати те, що вважаю справедливим"
    },
    {
        question: "Моя мова зараз така ж як завжди (ні швидше і ні повільніше, немає ні хрипоти, ні невиразності)"
    },
    {
        question: "Я вважаю, що моє сімейне життя таке ж добре, як у більшості моїх знайомих"
    },
    {
        question: "Мене вкрай зачіпає, коли мене критикують або лають"
    },
    {
        question: "Іноді у мене буває таке відчуття, що я просто повинен нанести ушкодження собі або кому-небудь іншому"
    },
    {
        question: "Моя поведінка значною мірою визначається звичаями тих, хто мене оточує"
    },
    {
        question: "В дитинстві у мене була така компанія, де всі прагнули стояти один за одного"
    },
    {
        question: "Іноді мені так і кортить з ким-небудь затіяти бійку"
    },
    {
        question: "Бувало, що я казав про речі, в яких не розбираюся"
    },
    {
        question: "Зазвичай я засинаю спокійно і мене не турбують ніякі думки"
    },
    {
        question: "Останні декілька років я відчуваю себе добре"
    },
    {
        question: "У мене ніколи не було ні припадків, ні судом"
    },
    {
        question: "Зараз моя вага постійна (я не худну і не повнішаю)"
    },
    {
        question: "Я вважаю, що мене часто карали нізащо"
    },
    {
        question: "Я легко плачу"
    },
    {
        question: "Я мало втомлююся"
    },
    {
        question: "Я був би досить спокійний, якби у кого-небудь з моєї сім'ї були неприємності через порушення закону"
    },
    {
        question: "З моїм розумом творитися щось недобре"
    },
    {
        question: "Щоб приховати свою сором'язливість мені доводиться докладати великі зусилля."
    },
    {
        question: "Напади запаморочення у мене бувають дуже рідко (або майже не бувають)"
    },
    {
        question: "Мене турбують сексуальні (статеві) питання"
    },
    {
        question: "Мені важко підтримувати розмову з людьми, з якими я тільки що познайомився"
    },
    {
        question: "Коли я намагаюся щось зробити, то часто помічаю, що у мене тремтять руки"
    },
    {
        question: "Руки у мене такі ж спритні і моторні, як і раніше"
    },
    {
        question: "Велику частину часу я відчуваю загальну слабкість"
    },
    {
        question: "Іноді, коли я збентежений я сильно вкриваюся потом і мене це дратує"
    },
    {
        question: "Буває, що я відкладаю на завтра те, що повинен зробити сьогодні"
    },
    {
        question: "Думаю, що я людина приречена"
    },
    {
        question: "Бували випадки, що мені було важке утриматися від того, щоб що-небудь не поцупити в кого-небудь або де-небудь, наприклад у магазині"
    },
    {
        question: "Я зловживав спиртними напоями"
    },
    {
        question: "Я часто про що-небудь турбуюся"
    },
    {
        question: "Мені б хотілося бути членом декількох кружків або зборів"
    },
    {
        question: "Я рідко задихаюся, і у мене не буває сильного серцебиття"
    },
    {
        question: "Все своє життя я суворо дотримуюсь принципів, заснованих на почутті обов’язку"
    },
    {
        question: "Траплялося, що я перешкоджав або поступав наперекір людям просто із принципу, а не тому, що справа була дійсно важливою"
    },
    {
        question: "Якщо мені не загрожує штраф і машин поблизу немає, я можу перейти вулицю там, де бажаю, а не там де потрібно"
    },
    {
        question: "Я завжди був незалежним і вільним від контролю з боку сім'ї"
    },
    {
        question: "У мене бували періоди такої сильної стурбованості, що я навіть не міг всидіти на місці"
    },
    {
        question: "Часто мої вчинки тлумачилися не вірно"
    },
    {
        question: "Мої батьки і (або) інші члени моєї сім’ї прискіпуються до мене більше, ніж треба"
    },
    {
        question: "Хтось керує моїми думками"
    },
    {
        question: "Люди байдужі до того, що з тобою трапиться"
    },
    {
        question: "Мені подобається бути в компанії, де всі жартують один над одним"
    },
    {
        question: "В школі я засвоював матеріал повільніше, аніж інші"
    },
    {
        question: "Я цілком впевнений у собі"
    },
    {
        question: "Нікому не довіряти – найбезпечніше"
    },
    {
        question: "Раз на тиждень або частіше я буваю дуже збудженим і схвильованим"
    },
    {
        question: "Коли я знаходжуся в компанії, мені важко знайти відповідну тему для розмови"
    },
    {
        question: "Мені легко примусити інших людей боятися мене, і іноді я це роблю ради забави"
    },
    {
        question: "У грі я вважаю за краще вигравати"
    },
    {
        question: "Безглуздо засуджувати людину, яка обдурила того, хто сам дозволяє себе обдурювати"
    },
    {
        question: "Хтось намагається впливати на мої думки"
    },
    {
        question: "Я щодня випиваю багато води"
    },
    {
        question: "Щасливіше всього я буваю наодинці"
    },
    {
        question: "Я обурююся кожного разу, коли дізнаюся, що злочинець з якої-небудь  причини залишився безкарним"
    },
    {
        question: "У моєму житті був один або декілька випадків, коли я відчував, що хтось за допомогою гіпнозу примушує мене скоювати ті або інші вчинки"
    },
    {
        question: "Я дуже рідко заговорюю з людьми першим"
    },
    {
        question: "У мене ніколи не було зіткнень із законом"
    },
    {
        question: "Мені приємно мати серед своїх знайомих значних людей, це як би додає мені вагу у власних очах"
    },
    {
        question: "Іноді без жодної причини у мене раптом наступають періоди незвичайної веселості"
    },
    {
        question: "Життя для мене майже завжди пов'язано з напругою"
    },
    {
        question: "У школі мені було дуже важко виступати перед класом"
    },
    {
        question: "Люди проявляють по відношенні до мене стільки співчуття і симпатії, наскільки я заслуговую"
    },
    {
        question: "Я відмовляюся грати в деякі ігри, тому що це у мене погано виходить"
    },
    {
        question: "Мені здається, що я знаходжу друзів з такою ж легкістю, як і інші"
    },
    {
        question: "Мені неприємно, коли навколо мене є люди"
    },
    {
        question: "Як правило, мені не везе"
    },
    {
        question: "Мене легко збити з пантелику"
    },
    {
        question: "Деякі з членів моєї сім'ї скоювали вчинки, які мене лякали"
    },
    {
        question: "Іноді у мене бувають напади сміху або плачу, з якими я ніяк не можу справитися"
    },
    {
        question: "Мені важко приступити до виконання нового завдання або розпочати нову справу"
    },
    {
        question: "Якби люди не були налаштовані проти мене, я досягнув би у житті набагато більшого"
    },
    {
        question: "Мені здається, що мене ніхто не розуміє"
    },
    {
        question: "Серед моїх знайомих є люди, які мені не подобаються"
    },
    {
        question: "Я легко втрачаю терпіння з людьми"
    },
    {
        question: "Часто у новій обстановці я переживаю почуття тривоги"
    },
    {
        question: "Часто мені хочеться померти"
    },
    {
        question: "Іноді я такий збуджений, що мені важко заснути"
    },
    {
        question: "Часто я переходжу на іншу сторону вулиці, щоб уникнути зустрічі з тим, кого я побачив"
    },
    {
        question: "Бувало, що я кидав почату справу, оскільки боявся, що я не справлюся з нею"
    },
    {
        question: "Майже щодня трапляється що-небудь, що лякає мене"
    },
    {
        question: "Навіть серед людей я зазвичай відчуваю себе самотнім"
    },
    {
        question: "Я переконаний, що існує лише одне єдине правильне розуміння значення життя"
    },
    {
        question: "В гостях я частіше сиджу де-небудь осторонь або розмовляю з ким-небудь одним, ніж беру участь у загальних розвагах"
    },
    {
        question: "Мені часто кажуть, що я запальний"
    },
    {
        question: "Буває, що я з ким-небудь пліткую"
    },
    {
        question: "Часто мені неприємно, коли я намагаюся застерегти кого-небудь від помилок, а мене розуміють неправильно"
    },
    {
        question: "Я часто звертаюся до людей за порадою"
    },
    {
        question: "Часто, навіть тоді, коли усе для мене складається добре, я відчуваю що мені усе байдуже"
    },
    {
        question: "Мене досить важко вивести з себе"
    },
    {
        question: "Коли я намагаюся вказати людям на їх помилки або допомогти вони часто розуміють мене неправильно"
    },
    {
        question: "Зазвичай я спокійний, і мене нелегко вивести з душевної рівноваги"
    },
    {
        question: "Я заслуговую суворого покарання за свою провину"
    },
    {
        question: "Мені притаманно так сильно переживати свої розчарування, що я не можу примусити себе не думати про них"
    },
    {
        question: "Часом мені здається, що я ні на що не здатний"
    },
    {
        question: "Бувало, що під час обговорення деяких питань я, особливо не замислюючись, погоджувався з думкою інших"
    },
    {
        question: "Мене дуже турбують різного роду нещастя"
    },
    {
        question: "Мої переконання і погляди непохитні"
    },
    {
        question: "Я вважаю, що можна не порушуючи закон спробувати знайти в ньому лазівку"
    },
    {
        question: "Є люди, які мені настільки неприємні, що я в глибині душі радію, коли вони одержують прочухан за що-небудь"
    },
    {
        question: "У мене бували періоди, коли через хвилювання я втрачав сон"
    },
    {
        question: "Я відвідую різні суспільні заходи, тому що це дозволяє бувати мені серед людей"
    },
    {
        question: "Можна пробачити людям порушення тих правил, які вони вважають нерозсудливими"
    },
    {
        question: "У мене є погані звички, які є настільки сильними, що боротися з ними просто марно"
    },
    {
        question: "Я охоче знайомлюся з новими людьми"
    },
    {
        question: "Буває, що непристойний жарт у мене викликає сміх"
    },
    {
        question: "Якщо справа йде у мене погано, то мені відразу хочеться все кинути"
    },
    {
        question: "Я вважаю за краще діяти відповідно до  власних планів, а не слідувати вказівкам інших"
    },
    {
        question: "Мені подобається, коли оточуючі знають мою точку зору."
    },
    {
        question: "Якщо я поганої думки про людину або навіть зневажаю його, я мало прагну приховати це від нього"
    },
    {
        question: "Я людина нервова і легко збудлива"
    },
    {
        question: "Все у мене виходить погано, не так як треба"
    },
    {
        question: "Майбутнє здається мені безнадійним"
    },
    {
        question: "Люди досить легко можуть змінити мою думку, навіть якщо до цього вона здавалася мені остаточною"
    },
    {
        question: "Кілька разів на тиждень у мене буває таке відчуття, що повинно трапитися щось жахливе"
    },
    {
        question: "Значну частину часу я відчуваю себе втомленим"
    },
    {
        question: "Я люблю бувати на вечорах і просто в компаніях"
    },
    {
        question: "Я прагну відхилитися від конфліктів і скрутних положень"
    },
    {
        question: "Мене дуже дратує те, що я забуваю, куди кладу речі"
    },
    {
        question: "Пригодницькі розповіді мені подобаються більше, ніж розповіді про любов"
    },
    {
        question: "Якщо я схочу зробити щось, але оточуючі вважають, що цього робити не варто, я можу легко відмовитися від своїх намірів"
    },
    {
        question: "Безглуздо засуджувати людей, які прагнуть урвати від життя все, що можуть"
    },
    {
        question: "Мені байдуже, що про мене думають інші"
    },
    {
        question: "Я абсолютно не пристосований до військової служби і це мене дуже лякає"
    },
    {
        question: "Я переконаний, що чоловіки повинні служити у Збройних Силах тільки за власним бажанням"
    },
    {
        question: "Останнім часом у мене все частіше і частіше трапляються „промахи” і невдачі по службі."
    },
    {
        question: "Найбільші труднощі для мене під час служби – це необхідність підкорятися командирам і начальникам"
    },
    {
        question: "Тим правилами, які, на мій погляд, несправедливі, я завжди прагну протидіяти"
    },
    {
        question: "Мені хотілося б випробувати себе серйозною і небезпечною справою"
    },
    {
        question: "Мене довго не залишає відчуття образи, заподіяне товаришами"
    },
    {
        question: "Жити за військовим розпорядком для мене просто нестерпно"
    },
    {
        question: "Я сумніваюся, чи зможу я зі своїм здоров'ям витримати всі навантаження військової служби"
    },
    {
        question: "Я заздрю тим, хто зміг ухилитися від військової служби"
    },
    {
        question: "Я відчуваю все більше і більше розчарувань по відношенню до моєї військової спеціальності"
    },
    {
        question: "Я часто розгублююся у складних і небезпечних ситуаціях"
    },
    {
        question: "Мені хотілося б служити у ПДВ або частинах спецназу"
    },
    {
        question: "Із службою у мене ніщо не виходить (не „клеїться”). Часто думаю: „не моя це справа”"
    },
    {
        question: "Коли мною хтось командує, це викликає у мене відчуття протесту"
    },
    {
        question: "Мені завжди було важко пристосовуватися до нового колективу"
    },
    {
        question: "Під час подальшої служби я був би не проти послужити там, де небезпечно і де ведуться бойові дії "
    },
    {
        question: "Присяга на вірність Вітчизні у сучасних умовах втратила свою актуальність"
    },
    {
        question: "Мені завжди було нелегко пристосовуватися до нових умов життя"
    },
    {
        question: "У складних ситуаціях я не можу швидко приймати правильні рішення"
    },
    {
        question: "Я упевнений, що в майбутньому не стану укладати або продовжувати контракт на продовження військової служби"
    },
    {
        question: "У мене бувають періоди похмурої дратівливості, під час яких я „зриваю зло” на оточуючих"
    },
    {
        question: "Я насилу витримую фізичні навантаження, пов’язані з моєю професійною діяльністю"
    },
    {
        question: "Я достатньо спокійно відношуся до необхідності брати участь в тривалих і небезпечних відрядженнях"
    },
    {
        question: "Навряд чи я схочу присвятити все своє життя військовій професії (залишитися на службу за контрактом, поступити у військове училище)"
    },
    {
        question: "„За компанію” з товаришами я можу прийняти неабияку кількість алкоголю (перевищити свою звичайну „норму”)"
    },
    {
        question: "У компаніях, де я часто буваю, друзі іноді палять „травичку”. Я їх за це не засуджую"
    },
    {
        question: "Останнім часом, щоб не „зірватися”, я був вимушений приймати заспокійливі ліки"
    },
    {
        question: "Мої батьки (родичі) часто виказували побоювання у зв'язку з моїми випивками"
    },
    {
        question: "Немає нічого поганого, коли люди намагаються випробувати на собі незвичайні стани, приймаючи деякі речовини"
    },
    {
        question: "У стані агресії я здатний багато на що"
    },
    {
        question: "Я крутий і жорстокий з оточуючими"
    },
    {
        question: "Якщо хтось заподіяв мені зло, я вважаю зобов'язаним відплатити йому тим же („око за око, зуб за зуб”)"
    },
    {
        question: "Можна погодитися з тим, що я не дуже-то схильний виконувати багато наказів, вважаючи їх безрозсудними"
    },
    {
        question: "Я думаю, що будь-яке положення законів і військових статутів можна тлумачити двояко "
    }
];
//questions for second test
//questions for third test
const thirdTestItems = [
    {
        id: 1,
        num: 1,
        question: "Рівень задоволеності цінностями (віра, любов, повага, довіра тощо) та їх вплив на цілі життєдіяльності, служби та засоби їх досягнення."
    },
    {
        id: 1,
        num: 2,
        question: "Дотримання моральних принципів і норм в умовах службової, навчальної (навчально-бойової), бойової діяльності."
    },
    {
        id: 1,
        num: 3,
        question: "Сформованість моральних якостей і національних переконань (гідність, патріотизм, відданість, доброта, обов’язковість тощо)."
    },
    {
        id: 1,
        num: 4,
        question: "Ступінь згуртованості, сумісності і злагодженості вашого підрозділу."
    },
    {
        id: 1,
        num: 5,
        question: "Задоволеність наявністю традицій, побратимства між різними категоріями військовослужбовців."
    },
    {
        id: 2,
        num: 1,
        question: "Ступінь прояву позитивних емоцій (інтерес, радість, довіра, любов, віра, ентузіазм тощо)."
    },
    {
        id: 2,
        num: 2,
        question: "Ступінь прояву нейтральних емоцій (байдужість, провина, сором, тривожність тощо)."
    },
    {
        id: 2,
        num: 3,
        question: "Ступінь прояву негативних емоцій (горе, зневага, злість, печаль, страх, паніка тощо)."
    },
    {
        id: 2,
        num: 4,
        question: "Ступінь відповідальності за прийняті рішення та результат своєї діяльності."
    },
    {
        id: 2,
        num: 5,
        question: "Сформованість вольових якостей (витримка, наполегливість, рішучість тощо)."
    },
    {
        id: 2,
        num: 6,
        question: "Рівень психологічної стійкості до впливу негативних чинників бойової (екстремальної) обстановки."
    },
    {
        id: 2,
        num: 7,
        question: "Оцінка свого вміння управляти діями, із яких складається виконання ваших професійних функцій та обов’язків."
    },
    {
        id: 3,
        num: 1,
        question: "Розуміння сенсу і мети службової (навчальної, навчально-бойової), бойової діяльності."
    },
    {
        id: 3,
        num: 2,
        question: "Рівень справедливості рішень безпосереднього командира."
    },
    {
        id: 3,
        num: 3,
        question: "Задоволеність станом військової дисципліни і правопорядку."
    },
    {
        id: 3,
        num: 4,
        question: "Рівень згуртованості, сумісності і злагодженості особового складу твого підрозділу."
    },
    {
        id: 3,
        num: 5,
        question: "Наявність традицій, рівень братерства між військовослужбовцями."
    },
    {
        id: 4,
        num: 1,
        question: "Самопочуття (комфортність) перебування у військовій частині (підрозділі)."
    },
    {
        id: 4,
        num: 2,
        question: "Власне фізичне самопочуття за останній місяць."
    },
    {
        id: 4,
        num: 3,
        question: "Власне психологічне самопочуття за останній місяць."
    },
    {
        id: 4,
        num: 4,
        question: "Задоволеність рівнем організації бойової підготовки у військовій частині (підрозділі)."
    },
    {
        id: 4,
        num: 5,
        question: "Задоволеність рівнем організації психологічної підготовки у військовій частині (підрозділі)."
    },
    {
        id: 4,
        num: 6,
        question: "Задоволеність рівнем організації національно-патріотичної підготовки у військовій частині (підрозділі)."
    },
    {
        id: 4,
        num: 7,
        question: "Здатність і можливість керувати своїми діями та станом у ситуаціях, а також здійснювати вплив на своїх співслужбовців (підлеглих)."
    },
    {
        id: 4,
        num: 8,
        question: "Рівень адекватного реагування тобою на обстановку, що різко змінюється."
    },
    {
        id: 5,
        num: 1,
        question: "Рівень твоїх знань і уявлень про особливості службової (навчальної, навчально-бойової), бойової діяльності та вимог до неї."
    },
    {
        id: 5,
        num: 2,
        question: "Рівень твоїх фахових знань, навичок та вмінь, необхідних для вирішення службових (навчальних, навчально-бойових), бойових проблем у межах визначених цілей і завдань."
    },
    {
        id: 5,
        num: 3,
        question: "Рівень твоєї фахової підготовленості виконувати службові (функціональні) обов’язки в бойових (екстремальних) умовах в межах військово-облікової спеціальності."
    },
    {
        id: 5,
        num: 4,
        question: "Оцінка рівня передачі бойового досвіду військовослужбовцями твого підрозділу."
    },
    {
        id: 6,
        num: 1,
        question: "Задоволеність укомплектованістю особовим складом."
    },
    {
        id: 6,
        num: 2,
        question: "Задоволеність станом озброєння і бойової техніки."
    },
    {
        id: 6,
        num: 3,
        question: "Рівень впливу тривалості виконання службових (навчальних, навчально-бойових) завдань і ведення бойових дій на психологічний стан військовослужбовців."
    },
    {
        id: 6,
        num: 4,
        question: "Рівень впливу випадків загибелі (поранення) військовослужбовців (бойових втрат), аварій, катастроф на твою подальшу повсякденну життєдіяльність."
    },
    {
        id: 6,
        num: 5,
        question: "Рівень забезпечення речовим майном (своєчасність видачі, наявність необхідних речей)."
    },
    {
        id: 6,
        num: 6,
        question: "Задоволеність харчуванням (кількість та якість їжі)."
    },
    {
        id: 6,
        num: 7,
        question: "Рівень медичного забезпечення виконання завдання за призначенням."
    },
    {
        id: 6,
        num: 8,
        question: "Задоволеність грошовим забезпеченням (своєчасністю виплат)."
    },
    {
        id: 6,
        num: 9,
        question: "Задоволеність побутовими умовами проживання. "
    },
    {
        id: 6,
        num: 10,
        question: "Задоволеність наданням відпусток, відпочинку і дозвілля."
    },
    {
        id: 6,
        num: 11,
        question: "Рівень авторитету, лідерства і професійної компетентності безпосереднього командира (начальника)."
    },
    {
        id: 6,
        num: 12,
        question: "Здатність командування (командирів, начальників) до негайного реагування на обстановку, що різко змінюється та ухвалення оптимальних рішень."
    },
    {
        id: 6,
        num: 13,
        question: "Підготовленість підрозділу до виконання завдань за призначенням."
    },
    {
        id: 6,
        num: 14,
        question: "Рівень впливу погодно-кліматичних умов на виконання завдань за призначенням."
    },
    {
        id: 6,
        num: 15,
        question: "Рівень психологічної готовності твоїх співслужбовців (підлеглих) до виконання службового (навчального, навчально-бойового), бойового завдання."
    },
    {
        id: 6,
        num: 16,
        question: "Рівень стійкості військовослужбовців до негативного інформаційно-психологічного впливу."
    },
    {
        id: 6,
        num: 17,
        question: "Своєчасність та актуальність інформації, яку надають командири (начальники)."
    },
    {
        id: 6,
        num: 18,
        question: "Задоволеність військовослужбовців рівнем соціального захисту."
    },
    {
        id: 6,
        num: 19,
        question: "Задоволеність прийнятими військово-політичними рішеннями керівництва держави щодо національної безпеки."
    }
];
let markupForSevenBlock = [
    `<form class ="form-question">
  <p>Познач, чим обумовлена твоя готовність захищати Україну (обери ДВА найбільш значущі для тебе твердження):</p>
  <div>
   <label>
    <input class ="answer-box" type="checkbox" name="reason"  data-id=1 value="Я – патріот"  />
      1. Я – патріот.
   </label>
  </div>
  <div>
   <label>
    <input class ="answer-box" type="checkbox" name="reason" data-id=2 value="Захищати незалежність, територіальну цілісність і суверенітет України – це мій громадянський обов’язок." />
      2. Захищати незалежність, територіальну цілісність і суверенітет України – це мій громадянський обов’язок.
   </label>
  </div>
  <div>
   <label>
    <input class ="answer-box" type="checkbox" name="reason" data-id=3 value="Захищаю Український народ, свою національну культуру, мову, історію, традиції." />
      3. Захищаю Український народ, свою національну культуру, мову, історію, традиції. 
   </label>
  </div>
  <div>
   <label>
    <input class ="answer-box" type="checkbox" name="reason" data-id=4 value="Захищаю свій дім, рідних та близьких." />
      4. Захищаю свій дім, рідних та близьких.
   </label>
  </div>
  <div>
   <label>
    <input class ="answer-box" type="checkbox" name="reason" data-id=5 value="Прагну помститися за своїх побратимів, рідних та близьких." />
      5. Прагну помститися за своїх побратимів, рідних та близьких.
   </label>
  </div>
  <div>
   <label>
    <input class ="answer-box" type="checkbox" name="reason" data-id=6 value="Високий рівень грошового забезпечення." />
      6. Високий рівень грошового забезпечення. 
   </label>
  </div> 
    <label>
    <input class ="answer-box" type="text" name="other" placeholder='Інше'/>
  </label>
  <button class ="answer-btn" type="submit">Підтвердити</button>
</form>`
];
//questions for third test
//questions for fourth test
const fourthTestItems = [
    {
        question: "Чи схильні Ви шукати шляхи до примирення після чергового службового конфлікту?",
        firstAnswer: "Завжди.",
        secondAnswer: "Іноді.",
        thirdAnswer: "Ніколи."
    },
    {
        question: "Як Ви поводитесь в критичній ситуації?",
        firstAnswer: "Зберігаєте повний спокій.",
        secondAnswer: "Внутрішньо закипаєте.",
        thirdAnswer: "Втрачаєте самовладання."
    },
    {
        question: "Яким вважають Вас колеги?",
        firstAnswer: "Доброзичливим.",
        secondAnswer: "Спокійним та незаздрісним.",
        thirdAnswer: " Самовпевненим та заздрісним."
    },
    {
        question: "Як Ви відреагуєте, якщо вам запропонують відповідальну посаду?",
        firstAnswer: "Відмовтеся від неї заради власного спокою.",
        secondAnswer: "Погодьтеся з деякими побоюваннями.",
        thirdAnswer: "Погодьтеся без вагань."
    },
    {
        question: "Як Ви будете себе вести, якщо хто-небудь з колег без дозволу візьме з Вашого столу папір?",
        firstAnswer: "Запитайте, чи не потрібно йому ще щось.",
        secondAnswer: "Змусите повернути.",
        thirdAnswer: "Посваритесь."
    },
    {
        question: "Якими словами Ви зустрінете чоловіка (дружину), якщо він (вона) повернувся(лась) з роботи пізніше за звичайне?",
        firstAnswer: "\xabЯ вже почав(ла) хвилюватися\xbb?",
        secondAnswer: "\xabЩо це тебе так затримало?\xbb",
        thirdAnswer: "\xabДе ти пропадаєш допізна\xbb."
    },
    {
        question: "Як Ви поводитеся за кермом автомобіля?",
        firstAnswer: "Вам все одно, скільки машин вас випередило",
        secondAnswer: "Намагаєтесь обігнати машину, яка попереду вас.",
        thirdAnswer: "Промчите з такою швидкістю, щоб ніхто не наздогнав вас."
    },
    {
        question: "Якими Ви вважаєте свої погляди на життя?",
        firstAnswer: "Легковажними.",
        secondAnswer: "Збалансованими.",
        thirdAnswer: "Вкрай жорсткими."
    },
    {
        question: "Що Ви робите, якщо не все вдається?",
        firstAnswer: "Змиритеся.",
        secondAnswer: "Надалі будете обережнішим.",
        thirdAnswer: "Спробуєте звалити вину на іншого."
    },
    {
        question: "Як Ви відреагуєте на статтю про випадки розбещеності серед сучасної молоді?",
        firstAnswer: "\xabТреба створити їм можливість організовано та культурно відпочивати\xbb.",
        secondAnswer: "\xabПора б уже заборонити їм такі розваги\xbb.",
        thirdAnswer: "\xabІ чого ми стільки з ними возимося\xbb?"
    },
    {
        question: "Що Ви відчуваєте, якщо місце, яке Ви хотіли зайняти, дісталося іншому?",
        firstAnswer: "\xabМожливо, мені це вдасться наступного разу?\xbb",
        secondAnswer: "\xabІ навіщо я тільки витрачав на це нерви?\xbb.",
        thirdAnswer: "\xabВидно, його фізіономія шефу приємніша\xbb."
    },
    {
        question: "Як Ви дивитеся страшний фільм?",
        firstAnswer: "Боїтеся.",
        secondAnswer: "Нудьгуєте.",
        thirdAnswer: "Одержуєте задоволення."
    },
    {
        question: "Якщо через дорожню пробку Ви спізнюєтеся на важливу нараду?",
        firstAnswer: "Засмутитесь.",
        secondAnswer: "Будете нервувати під час засідання.",
        thirdAnswer: "Спробуєте викликати поблажливість партнерів."
    },
    {
        question: "Як Ви ставитесь до своїх спортивних успіхів?",
        firstAnswer: "Цінуйте задоволення від почуття сили та спритності.",
        secondAnswer: "Обов'язково намагаєтесь виграти.",
        thirdAnswer: "Дуже гніваєтесь, якщо не везе."
    },
    {
        question: "Як Ви поступите, якщо Вас погано обслужили в ресторані?",
        firstAnswer: "Стерпите, уникаючи скандалу.",
        secondAnswer: "Викличете метрдотеля і зробите йому зауваження.",
        thirdAnswer: "Звернетесь зі скаргою до директора ресторану."
    },
    {
        question: "Як Ви поведетеся, якщо Вашу дитину образили в школі?",
        firstAnswer: "Поговорю з вчителем.",
        secondAnswer: "Влаштуєте скандал з батьками \xabмалолітнього злочинця\xbb.",
        thirdAnswer: "Порадите дитині дати здачу."
    },
    {
        question: "Як Ви вважаєте, яка Ви людина?",
        firstAnswer: "Середня.",
        secondAnswer: "Самовпевнена.",
        thirdAnswer: "Пробивна."
    },
    {
        question: "Що Ви скажете підлеглому, з яким зіткнулися у дверях установи, якщо він почав би вибачатися перед вами?",
        firstAnswer: "\xabВибачте, це моя провина\xbb.",
        secondAnswer: "\xabНічого страшного, дурниці\xbb.",
        thirdAnswer: "\xabУважніше треба бути\xbb!"
    },
    {
        question: " Як Ви відреагуєте на статтю в газеті про випадки хуліганства серед молоді?",
        firstAnswer: "Не можна все валити на молодь, винні й вихователі!",
        secondAnswer: "Коли ж, нарешті, буде вжито заходів?",
        thirdAnswer: "Треба запровадити тілесні покарання."
    },
    {
        question: "Уявіть, що Ви заново народитесь, але вже твариною. Якій тварині ви віддасте перевагу?",
        firstAnswer: "Домашній кішці.",
        secondAnswer: "Ведмедю.",
        thirdAnswer: "Тигру чи леопарду."
    }
];
//questions for fourth test
//questions for fifth test
const fifthTestItemsLeftCharacteristics = [
    {
        question: "Самопочуття добре "
    },
    {
        question: "Відчуваю себе сильним"
    },
    {
        question: "Пасивний"
    },
    {
        question: "Малорухливий"
    },
    {
        question: "Веселий"
    },
    {
        question: "Гарний настрій "
    },
    {
        question: "Працездатний"
    },
    {
        question: "Повний сил "
    },
    {
        question: "Повільний"
    },
    {
        question: "Бездіяльний"
    },
    {
        question: "Щасливий"
    },
    {
        question: "Життєрадісний"
    },
    {
        question: "Напружений"
    },
    {
        question: "Здоровий"
    },
    {
        question: "Безучасний"
    },
    {
        question: "Байдужий"
    },
    {
        question: "Захоплений"
    },
    {
        question: "Радісний"
    },
    {
        question: "Відпочилий"
    },
    {
        question: "Енергійний"
    },
    {
        question: "Сонливий"
    },
    {
        question: "Бажання відпочити"
    },
    {
        question: "Спокійний"
    },
    {
        question: "Оптимістичний"
    },
    {
        question: "Витривалий"
    },
    {
        question: "Бадьорий"
    },
    {
        question: "Міркувати важко"
    },
    {
        question: "Розсіяний"
    },
    {
        question: "Повний надій "
    },
    {
        question: " Задоволений"
    }
];
const fifthTestItemsRightCharacteristics = [
    {
        question: "Самопочуття погане",
        state: false
    },
    {
        question: "Відчуваю себе слабким",
        state: false
    },
    {
        question: "Активний",
        state: true
    },
    {
        question: "Рухливий",
        state: true
    },
    {
        question: "Сумний",
        state: false
    },
    {
        question: "Поганий настрій",
        state: false
    },
    {
        question: "Розбитий",
        state: false
    },
    {
        question: "Знесилений",
        state: false
    },
    {
        question: "Швидкий",
        state: true
    },
    {
        question: "Діяльний",
        state: true
    },
    {
        question: "Нещасний",
        state: false
    },
    {
        question: "Похмурий",
        state: false
    },
    {
        question: "Розслаблений",
        state: true
    },
    {
        question: "Хворий",
        state: false
    },
    {
        question: "Захоплений",
        state: true
    },
    {
        question: "Схвильований",
        state: false
    },
    {
        question: "Похмурий",
        state: false
    },
    {
        question: "Засмучений",
        state: false
    },
    {
        question: "Втомлений",
        state: false
    },
    {
        question: "Виснажений",
        state: false
    },
    {
        question: "Збуджений",
        state: true
    },
    {
        question: "Бажання працювати",
        state: true
    },
    {
        question: "Стурбований",
        state: false
    },
    {
        question: "Песимістичний",
        state: false
    },
    {
        question: "Стомлений",
        state: false
    },
    {
        question: "Млявий",
        state: false
    },
    {
        question: "Міркувати легко",
        state: true
    },
    {
        question: "Уважний",
        state: true
    },
    {
        question: "Розчарований",
        state: false
    },
    {
        question: "Незадоволений",
        state: false
    }
];
//questions for fifth test
//questions for sixth test
const sixthTestItemsRightCharacteristics = [
    {
        id: 1,
        question: "Я відчуваю пригніченість, сум",
        state: true
    },
    {
        id: 2,
        question: "Вранці я почуваюся найкраще ",
        state: false
    },
    {
        id: 3,
        question: "У мене бувають періоди, коли я плачу або на очі навертаються сльози",
        state: true
    },
    {
        id: 4,
        question: "У мене поганий нічний сон",
        state: true
    },
    {
        id: 5,
        question: "Апетит у мене не гірше, ніж зазвичай",
        state: false
    },
    {
        id: 6,
        question: "Мені приємно дивитись на привабливих жінок/чоловіків, спілкуватися з ними, бути поруч",
        state: false
    },
    {
        id: 7,
        question: "Я помічаю, що втрачаю вагу",
        state: true
    },
    {
        id: 8,
        question: "Мене турбують закрепи",
        state: true
    },
    {
        id: 9,
        question: "Серце б’ється швидше, ніж зазвичай",
        state: true
    },
    {
        id: 10,
        question: "Я втомлююся без будь-яких причин",
        state: true
    },
    {
        id: 11,
        question: "Я мислю так само ясно, як завжди",
        state: false
    },
    {
        id: 12,
        question: "Мені легко виконувати те, що я вмію",
        state: false
    },
    {
        id: 13,
        question: "Відчуваю неспокій і не можу всидіти на місці",
        state: true
    },
    {
        id: 14,
        question: "У мене є надії на майбутнє",
        state: false
    },
    {
        id: 15,
        question: "Я більш дратівливий, ніж раніше",
        state: true
    },
    {
        id: 16,
        question: "Мені легко приймати рішення",
        state: false
    },
    {
        id: 17,
        question: "Я відчуваю, що корисний і потрібний людям ",
        state: false
    },
    {
        id: 18,
        question: "Я живу досить повним життям",
        state: false
    },
    {
        id: 19,
        question: "Я відчуваю, що іншим людям стане краще, якщо я помру",
        state: true
    },
    {
        id: 20,
        question: "Я і досі радію від того, від чого радів завжди ",
        state: false
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["S0Qsp"], null, "parcelRequiree8da")

//# sourceMappingURL=task-06.3e215b3d.js.map
