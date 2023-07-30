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
})({"4xbci":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "785874e85171e233";
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

},{}],"fGotZ":[function(require,module,exports) {
//questions
const testItems = [
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
//questions
for(let i = 1; i <= testItems.length; i += 1)testItems[i - 1].id = i;
const formEl = document.querySelector(".feedback-form");
const mainContainer = document.querySelector(".container");
const testsEl = document.querySelector(".tests");
const btnEl = document.querySelector(".answer-container");
const markup = testItems.map(({ id, question })=>`<li class="test-item">
    <p class="test-item-text"> ${id}. ${question} </p>
  </li>`);
const monthArr = [
    "січня",
    "лтого",
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
    10,
    19,
    31,
    51,
    69,
    78,
    92,
    101,
    116,
    128,
    138,
    148
];
const secondCaseYes = [
    4,
    6,
    7,
    8,
    11,
    12,
    15,
    16,
    17,
    18,
    20,
    21,
    28,
    29,
    30,
    36,
    37,
    39,
    40,
    41,
    47,
    57,
    60,
    63,
    65,
    67,
    68,
    70,
    73,
    80,
    82,
    83,
    84,
    86,
    89,
    94,
    95,
    96,
    98,
    102,
    103,
    108,
    109,
    110,
    111,
    112,
    113,
    115,
    117,
    118,
    119,
    120,
    122,
    123,
    124,
    125,
    127,
    129,
    131,
    135,
    136,
    137,
    139,
    143,
    146,
    149,
    153,
    154,
    155,
    156,
    157,
    158,
    161,
    162
];
const secondCaseNo = [
    2,
    3,
    5,
    23,
    25,
    32,
    38,
    44,
    45,
    52,
    53,
    54,
    55,
    58,
    62,
    66,
    75,
    87,
    105,
    132,
    134,
    140
];
const thirdCaseYes = [
    9,
    24,
    27,
    43,
    46,
    61,
    64,
    81,
    88,
    90,
    99,
    104,
    106,
    114,
    121,
    126,
    133,
    142,
    151,
    152
];
const thirdCaseNo = [
    26,
    34,
    35,
    48,
    49,
    74,
    85,
    107,
    130,
    144,
    147,
    159
];
const fourthCaseYes = [
    14,
    22,
    33,
    42,
    50,
    56,
    59,
    71,
    72,
    77,
    79,
    91,
    93,
    141,
    145,
    150,
    164,
    165
];
const fourthCaseNo = [
    13,
    76,
    97,
    100,
    160,
    163
];
const fifthCaseYes = [
    166,
    167,
    168,
    169,
    170,
    172,
    173,
    174,
    175,
    176,
    177,
    179,
    180,
    181,
    183,
    184,
    185,
    186,
    187,
    188,
    190
];
const fifthCaseNo = [
    171,
    178,
    182,
    189
];
const sixthCaseYes = [
    6,
    9,
    14,
    15,
    22,
    36,
    39,
    42,
    47,
    50,
    56,
    59,
    71,
    72,
    91,
    93,
    117,
    127,
    141,
    145,
    151,
    152,
    164,
    191,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200
];
const sixthCaseNo = [
    13,
    100,
    163
];
const seventhCaseYes = [
    4,
    8,
    10,
    28,
    29,
    39,
    41,
    47,
    70,
    84,
    115,
    119,
    124,
    136,
    137,
    149,
    154,
    155
];
const seventhCaseNo = [
    32,
    105
];
alert("Інструкція:  „Зараз досліджуватимуться деякі Ваші особистісні особливості. Опитувальник містить 200 тверджень (питань) про життя, роботу, відносини у сім'ї, інтереси і схильності. Ваше завдання полягає у тому, щоб визначити своє відношення до кожного ствердження, тобто погодитися або не погодитися з ним. Якщо Ви погоджуєтеся з ствердженням, то під відповідним питанням натискаєте кнопку „Так”. Якщо Ви не згодні – натискаєте „Ні”. Правильних або неправильних відповідей тут бути не може, тому довго не замислюйтеся над питанням – давайте відповідь, виходячи з того, що більше відповідає Вашому характеру або уявленню про самого себе”.");
const handleInput = (event)=>{
    userName = event.target.value;
};
const handleSubmit = (event)=>{
    event.preventDefault();
    const { elements: { name } } = event.currentTarget;
    console.log(name);
    if (name.value.trim() === "") alert("Введіть прізвище, ім'я, по батькові, будь ласка.");
    else {
        console.log(userName);
        event.currentTarget.reset();
        formEl.style.display = "none";
        testsEl.innerHTML = markup[numQuestion - 1];
        btnEl.style.display = "flex";
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
        if (seventhCaseNo.includes(numQuestion)) seventCaseCounter += 1;
    }
    if (numQuestion < markup.length) {
        testsEl.innerHTML = markup[numQuestion];
        numQuestion += 1;
    } else {
        const OAP = secondCaseCounter + thirdCaseCounter + fourthCaseCounter;
        const currentDate = new Date();
        const currentHours = currentDate.getHours().toString().padStart(2, "0");
        const currentMinutes = currentDate.getMinutes().toString().padStart(2, "0");
        const currentDays = currentDate.getDate().toString().padStart(2, "0");
        const currentMonth = monthArr.find((_, index)=>index === currentDate.getMonth());
        const currentYear = currentDate.getFullYear();
        const result = `<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${userName}</p>
    <b class="result"> Результат №1 = ${firstCaseCounter} </b>
    <p class="result"> Результат №2 = ${secondCaseCounter} </p>
    <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
    <p class="result"> Результат №4 = ${fourthCaseCounter} </p>
    <p class="result"> Результат №5 = ${fifthCaseCounter} </p>
    <p class="result"> Результат №6 = ${sixthCaseCounter} </p>
    <p class="result"> Результат №7 = ${seventCaseCounter} </p>
    <b class="result"> Основний результат = ${OAP}</b>
    <div class="date">
        <span class="time">${currentHours}:${currentMinutes}</span>
         <spanclass="time">${currentDays} ${currentMonth} ${currentYear} року</span>
    </div>`;
        mainContainer.innerHTML = result;
    }
};
formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
btnEl.addEventListener("click", clickItem);

},{}]},["4xbci","fGotZ"], "fGotZ", "parcelRequiree8da")

//# sourceMappingURL=task-02.5171e233.js.map
