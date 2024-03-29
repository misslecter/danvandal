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
})({"7ZoMj":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
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
        console.log("[parcel] \u2728 Error resolved");
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
function hmrApply(bundle, asset) {
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
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var _jumbotron = require("./modules/jumbotron");
var _about = require("./modules/about");
var _connect = require("./modules/connect");
var _portfolio = require("./modules/portfolio");
var _portfolioAnimations = require("./modules/portfolio-animations");
let previousY = window.scrollY;
window.addEventListener("scroll", ()=>{
    (0, _jumbotron.handleJumbotronAnimations)();
    (0, _about.handleAboutAnimation)();
    (0, _connect.handleConnectAnimations)();
    (0, _portfolioAnimations.handlePortfolioAnimations)(window.scrollY > previousY);
    previousY = window.scrollY;
});

},{"./modules/jumbotron":"cTFGU","./modules/about":"bFeHj","./modules/connect":"lPswq","./modules/portfolio":"3xNC0","./modules/portfolio-animations":"jCQ6f"}],"cTFGU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleJumbotronAnimations", ()=>handleJumbotronAnimations);
const viewportHeight = window.innerHeight;
// Centaur
const centaur = document.querySelector('[data-js-selector="centaur"]');
const centaurTargetXPosition = -(window.innerWidth / 2);
const centaurTargetYPosition = viewportHeight * 0.2;
const centaurTargetScale = 0.5;
// Heading
const heading = document.querySelector('[data-js-selector="heading"]');
const headingTargetXPosition = window.innerWidth / 2;
const headingTargetYPosition = -heading.getBoundingClientRect().height;
// Subheading
const subheading = document.querySelector('[data-js-selector="subheading"]');
const subheadingTargetXPosition = window.innerWidth / 2;
const subheadingTargetYPosition = viewportHeight * 0.3;
// Logo
const logo = document.querySelector('[data-js-selector="logo"]');
const logoRect = logo.getBoundingClientRect();
const logoTargetXPosition = 0;
const logoTargetYPosition = 0;
const logoTargetScale = 1;
const logoDefaultXpx = window.innerWidth / 2 + 60;
const logoDefaultYpx = viewportHeight / 2 - 64;
const logoDefaultScale = 2.2;
logo.style.transform = `translateX(${logoDefaultXpx}px) translateY(${logoDefaultYpx}px) scale(${logoDefaultScale})`;
// Line
const line = document.querySelector('[data-js-selector="line"]');
const lineRect = line.getBoundingClientRect();
const lineDefaultXpx = logoRect.x + logoRect.width - lineRect.x;
const lineTargetXPosition = window.innerWidth;
line.style.transform = `translateX(${lineDefaultXpx}px)`;
// Button hire
const buttonHire = document.querySelector('[data-js-selector="button-hire"]');
const buttonHireXpx = lineDefaultXpx + window.innerWidth / 2;
const buttonHireWidth = window.innerWidth - buttonHireXpx;
buttonHire.style.width = `${buttonHireWidth}px`;
buttonHire.style.left = `${buttonHireXpx}px`;
// Apply default rotations
const defaultRotation = `rotate(-11deg)`;
const handleJumbotronAnimations = ()=>{
    const percentageY = Math.min(window.scrollY * 100 / viewportHeight, 100);
    // Centaur
    const centaurCurrentXpx = centaurTargetXPosition * percentageY / 100;
    const centaurCurrentYpx = centaurTargetYPosition * percentageY / 100;
    const centaurCurrentScale = 1 - centaurTargetScale * percentageY / 100;
    centaur.style.transform = `translateX(${centaurCurrentXpx}px) translateY(${centaurCurrentYpx}px) scale(${centaurCurrentScale})`;
    // Heading
    const headingCurrentXpx = headingTargetXPosition * percentageY / 100;
    const headingCurrentYpx = headingTargetYPosition * percentageY / 100;
    heading.style.transform = `${defaultRotation} translateX(${headingCurrentXpx}px) translateY(${headingCurrentYpx}px)`;
    // Subheading
    const subheadingCurrentXpx = subheadingTargetXPosition * percentageY / 100;
    const subheadingCurrentYpx = subheadingTargetYPosition * percentageY / 100;
    subheading.style.transform = `${defaultRotation} translateX(${subheadingCurrentXpx}px) translateY(${subheadingCurrentYpx}px)`;
    // Logo
    const logoCurrentXpx = logoDefaultXpx - percentageY * (logoDefaultXpx - logoTargetXPosition) / 100;
    const logoCurrentYpx = logoDefaultYpx - percentageY * (logoDefaultYpx - logoTargetYPosition) / 100;
    const logoCurrentScale = logoDefaultScale - percentageY * (logoDefaultScale - logoTargetScale) / 100;
    logo.style.transform = `translateX(${logoCurrentXpx}px) translateY(${logoCurrentYpx}px) scale(${logoCurrentScale})`;
    // Line
    const lineCurrentXpx = lineTargetXPosition * percentageY / 100;
    line.style.transform = `translateX(${lineDefaultXpx + lineCurrentXpx}px)`;
};

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

},{}],"bFeHj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleAboutAnimation", ()=>handleAboutAnimation);
const about = document.querySelector('[data-js-selector="about"]');
const aboutRect = about.getBoundingClientRect();
const handleAboutAnimation = ()=>{
    about.classList.toggle("squash", window.scrollY > aboutRect.y);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPswq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleConnectAnimations", ()=>handleConnectAnimations);
const viewportHeight = window.innerHeight;
const connect = document.querySelector('[data-js-selector="connect"]');
// Ruka
const hand = document.querySelector('[data-js-selector="ruka"]');
const handDefaultXPosition = hand.getBoundingClientRect().x;
// Kopytko
const hoof = document.querySelector('[data-js-selector="kopytko"]');
const hoofDefaultXPosition = hand.getBoundingClientRect().x;
// Hvezdicka
const star = document.querySelector('[data-js-selector="star"]');
const handleConnectAnimations = ()=>{
    const sectionBottom = connect.getBoundingClientRect().bottom - viewportHeight;
    const percentageY = 100 - Math.min(Math.max(sectionBottom * 100 / connect.getBoundingClientRect().height, 0), 100);
    const touched = percentageY === 100;
    // Ruka
    const handCurrentXpx = handDefaultXPosition - handDefaultXPosition * percentageY / 100;
    hand.style.transform = `translateX(${handCurrentXpx}px)`;
    // Kopytko
    const hoofCurrentXpx = Math.abs(hoofDefaultXPosition * percentageY / 100);
    hoof.style.transform = `translateX(${Math.abs(hoofDefaultXPosition) - hoofCurrentXpx}px)`;
    // Hvezdicka
    if (star) star.style.display = touched ? "block" : "none";
    [
        hand,
        hoof
    ].forEach((part)=>part.style.position = touched ? "absolute" : "fixed");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xNC0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _portfolioJson = require("../../portfolio.json");
var _portfolioJsonDefault = parcelHelpers.interopDefault(_portfolioJson);
const portfolioContainer = document.querySelector('[data-js-selector="portfolio"]');
const generateAsideIcon = (index, projectId, icon)=>{
    const iconTemplate = document.createElement("div");
    iconTemplate.classList.add("aside");
    iconTemplate.classList.add(projectId);
    // Render image
    iconTemplate.insertAdjacentHTML("beforeend", `<img src="aside/${icon}"/>`);
    if (index % 2 === 0) // left placement
    iconTemplate.classList.add("aside--left");
    else // right placement
    iconTemplate.classList.add("aside--right");
    return iconTemplate;
};
for (const [i, project] of (0, _portfolioJsonDefault.default).entries()){
    const projectTemplate = document.createElement("div");
    projectTemplate.innerHTML = `<h1>${project.title}</h1>`;
    if (project.examples) {
        const examplesContainer = document.createElement("div");
        examplesContainer.classList.add("portfolio__examples");
        examplesContainer.classList.add("container");
        examplesContainer.classList.add("container--thin");
        const examplesContent = document.createElement("div");
        examplesContent.classList.add("portfolio__examples__content");
        // Row with examples and side icon
        const row = document.createElement("div");
        row.classList.add("row");
        for (const example of project.examples){
            const exampleTemplate = `
            <div class="col">
                <video autoplay muted loop>
                    <source type="video/mp4;" src="videos/${example.video}"/>
                </video>
            </div>`;
            row.insertAdjacentHTML("beforeend", exampleTemplate);
        }
        examplesContent.insertAdjacentElement("beforeend", row);
        // Add icon next to examples
        if (project.aside) examplesContent.insertAdjacentElement("beforeend", generateAsideIcon(i + 1, project.id, project.aside));
        // Row with descriptions
        const descriptionRow = document.createElement("div");
        descriptionRow.classList.add("row");
        for (const example1 of project.examples){
            const exampleDescription = `
            <div class="col">
                <p>${example1.description}</p>
            </div>`;
            descriptionRow.insertAdjacentHTML("beforeend", exampleDescription);
        }
        // Add two rows
        examplesContainer.insertAdjacentElement("beforeend", examplesContent);
        examplesContainer.insertAdjacentElement("beforeend", descriptionRow);
        projectTemplate.insertAdjacentElement("beforeend", examplesContainer);
    }
    portfolioContainer.insertAdjacentElement("beforeend", projectTemplate);
}

},{"../../portfolio.json":"1AH4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AH4p":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"ben-jerry","title":"Kravinky pro<br>Ben & Jerry\'s","aside":"benandjerrys.svg","examples":[{"video":"b-and-j-kolbenova.mp4","description":"P\u0159ekopl\xe1 kravi\u010Dka v metru."},{"video":"b-and-j-ben.mp4","description":"(Brouk\xe1n\xed melodie z Requiem za sen)."},{"video":"b-and-j-requiem.mp4","description":"Kreativita na hran\u011B brand manu\xe1lu."}]},{"id":"skoda","title":"\u0160koda auto","aside":"skoda.svg","examples":[{"video":"skoda-kdo-driv-mrkne.mp4","description":"Maskov\xe1n\xed\u010Dko."},{"video":"skoda-enyaq-orange.mp4","description":"Kinetick\xe1 typografie."},{"video":"skoda-enyaq-blue.mp4","description":"R\xe1me\u010Dek pro UI IG, safe z\xf3ny."}]},{"id":"rb","title":"Raiffeisenbank","aside":"raiffesenbank.svg","examples":[{"video":"rb-domek.mp4","description":"Maskov\xe1n\xed a skl\xe1d\xe1n\xed."},{"video":"rb-auto.mp4","description":"Liquify na text."},{"video":"rb-kytara.mp4","description":"Wave warp na struny."}]},{"id":"tesla","title":"Tesla","aside":"tesla.svg","examples":[{"video":"tesla-cisticka.mp4","description":"Particles a odmaskov\xe1n\xed textu."},{"video":"tesla-zapadne.mp4","description":"Vizualizoval jsem slogany."},{"video":"tesla-pitko.mp4","description":"Napl\u0148ovalo m\u011B o\u017Eivov\xe1n\xed \u0161ablony animace."}]},{"id":"jobs","title":"Prace.cz<br>+ Jobs.cz","aside":"praceajobs.svg","examples":[{"video":"prace-cz.mp4","description":"Lov pr\xe1ce je jeden z m\xe1la lov\u016F, kter\xfd toleruju."},{"video":"jobs-cz.mp4","description":"Simulace rozhran\xed chatu."}]},{"id":"clips","title":"Hudebn\xed videoklipy","examples":[{"video":"clip-pain.mp4","description":"Edit videa pro Paina v\u010Detn\u011B rozhejbanejch tag\u016F a plynul\xfdch st\u0159ih\u016F."},{"video":"clip-niki.mp4","description":"Jeden ze dvou klip\u016F pro Dvojlitrboyzz."},{"video":"clip-young-havel.mp4","description":"Komplet klip v\u010Detn\u011B kost\xfdmu."}]}]');

},{}],"jCQ6f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handlePortfolioAnimations", ()=>handlePortfolioAnimations);
var _portfolioJson = require("../../portfolio.json");
var _portfolioJsonDefault = parcelHelpers.interopDefault(_portfolioJson);
const iconsClassNames = (0, _portfolioJsonDefault.default).map((project)=>project.id);
let previousY = window.scrollY;
const handlePortfolioAnimations = (isScrollingDown)=>{
    // const isScrollingDown = window.scrollY > previousY;
    // console.log(isScrollingDown)
    for (const iconClassName of iconsClassNames){
        const element = document.querySelector(`.${iconClassName}`);
        if (!element) return;
        switch(iconClassName){
            case "ben-jerry":
                animateElement(element, "bounce", "right");
                break;
            case "skoda":
                break;
        }
    }
};
const animateElement = (element, firstAnimation, hideDirection)=>{
    const { y , height  } = element.getBoundingClientRect();
    const elementCenter = y + height / 2; // center of element is decreasing when scrolling down
    const screenCenter = window.innerHeight / 2;
    const elementParent = element.parentElement;
    const shouldHide = elementCenter <= screenCenter;
    let interval;
    if (shouldHide) {
        if (!element.classList.contains(`animation--${firstAnimation}`) && !element.classList.contains("animation--slide-x")) {
            const behindRightScreenEdge = window.innerWidth - elementParent.getBoundingClientRect().right;
            element.style.setProperty("--translate-x", `${behindRightScreenEdge}px`);
            // First animation
            const bounceDuration = 1000;
            element.classList.add(`animation--${firstAnimation}`);
            // Slide right
            interval = setTimeout(()=>{
                element.classList.add("animation--slide-x");
            }, bounceDuration + 100);
        }
    } else {
        if (interval) clearTimeout(interval);
        element.classList.remove(`animation--${firstAnimation}`);
        element.classList.remove("animation--slide-x");
    }
};

},{"../../portfolio.json":"1AH4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequire245d")

//# sourceMappingURL=index.59a40e7a.js.map
