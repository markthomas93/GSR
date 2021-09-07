(()=>{var e={610:function(e,r,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)},s=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(s,i){function o(e){try{g(n.next(e))}catch(e){i(e)}}function a(e){try{g(n.throw(e))}catch(e){i(e)}}function g(e){var r;e.done?s(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,a)}g((n=n.apply(e,r||[])).next())}))},i=this&&this.__generator||function(e,r){var t,n,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=r.call(e,o)}catch(e){i=[6,e],n=0}finally{t=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(r,"__esModule",{value:!0}),r.ConfigProvider=r.DEFAULT_CONFIG=void 0;var o=t(416),a=t(187);r.DEFAULT_CONFIG={gitpodURL:"https://gitpod.io",openAsPopup:!1};var g=function(){function e(){var t=this;this.config=r.DEFAULT_CONFIG,this.emitter=new a.EventEmitter,this.configChangeListener=function(r){r[e.LOCAL_STORAGE_KEY]&&(t.config=r[e.LOCAL_STORAGE_KEY],t.emitter.emit(e.EVENT_CONFIG_UPDATED))}}return e.create=function(){return s(this,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return[4,(r=new e).init()];case 1:return t.sent(),[2,r]}}))}))},e.prototype.init=function(){return s(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return o.browser.storage.onChanged.addListener(this.configChangeListener),[4,this.readConfig()];case 1:return e=t.sent(),this.config=n(n({},r.DEFAULT_CONFIG),e),[2]}}))}))},e.prototype.setConfig=function(t){return s(this,void 0,void 0,(function(){var s,a,g;return i(this,(function(i){switch(i.label){case 0:return[4,this.readConfig()];case 1:return s=i.sent(),a=n(n(n({},r.DEFAULT_CONFIG),s),t),(g={})[e.LOCAL_STORAGE_KEY]=a,[4,o.browser.storage.local.set(g)];case 2:return i.sent(),[2]}}))}))},e.prototype.getConfig=function(){return this.config},e.prototype.on=function(r){this.emitter.on(e.EVENT_CONFIG_UPDATED,r)},e.prototype.dispose=function(){o.browser.storage.onChanged.removeListener(this.configChangeListener),this.emitter.removeAllListeners()},e.prototype.readConfig=function(){return s(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return[4,o.browser.storage.local.get(e.LOCAL_STORAGE_KEY)];case 1:return[2,r.sent().config||{}]}}))}))},e.LOCAL_STORAGE_KEY="config",e.EVENT_CONFIG_UPDATED="config-updated",e}();r.ConfigProvider=g},113:function(e,r,t){"use strict";var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(s,i){function o(e){try{g(n.next(e))}catch(e){i(e)}}function a(e){try{g(n.throw(e))}catch(e){i(e)}}function g(e){var r;e.done?s(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,a)}g((n=n.apply(e,r||[])).next())}))},s=this&&this.__generator||function(e,r){var t,n,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=r.call(e,o)}catch(e){i=[6,e],n=0}finally{t=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(r,"__esModule",{value:!0});var i=t(610),o=document.getElementById("gitpod-url-input"),a=document.getElementById("gitpod-open-as-popup"),g=document.getElementById("message");n(void 0,void 0,void 0,(function(){var e,r,t,n;return s(this,(function(s){switch(s.label){case 0:return[4,i.ConfigProvider.create()];case 1:return e=s.sent(),r=e.getConfig(),o.value=r.gitpodURL,a.checked=r.openAsPopup,t=void 0,n=function(){e.setConfig({gitpodURL:o.value||void 0,openAsPopup:a.checked}),t&&(window.clearTimeout(t),t=void 0),g.innerText="Saved.",t=window.setTimeout((function(){g.innerText="",t=void 0}),3e3)},o.addEventListener("keyup",(function(e){e.isComposing||229===e.keyCode||n()})),a.addEventListener("change",n),[2]}}))})).catch((function(e){return console.error(e)}))},187:e=>{"use strict";var r,t="object"==typeof Reflect?Reflect:null,n=t&&"function"==typeof t.apply?t.apply:function(e,r,t){return Function.prototype.apply.call(e,r,t)};r=t&&"function"==typeof t.ownKeys?t.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,r){return new Promise((function(t,n){function s(){void 0!==i&&e.removeListener("error",i),t([].slice.call(arguments))}var i;"error"!==r&&(i=function(t){e.removeListener(r,s),n(t)},e.once("error",i)),e.once(r,s)}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function g(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function m(e,r,t,n){var s,i,o,m;if(a(t),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",r,t.listener?t.listener:t),i=e._events),o=i[r]),void 0===o)o=i[r]=t,++e._eventsCount;else if("function"==typeof o?o=i[r]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),(s=g(e))>0&&o.length>s&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(r)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=r,l.count=o.length,m=l,console&&console.warn&&console.warn(m)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function c(e,r,t){var n={fired:!1,wrapFn:void 0,target:e,type:r,listener:t},s=l.bind(n);return s.listener=t,n.wrapFn=s,s}function A(e,r,t){var n=e._events;if(void 0===n)return[];var s=n[r];return void 0===s?[]:"function"==typeof s?t?[s.listener||s]:[s]:t?function(e){for(var r=new Array(e.length),t=0;t<r.length;++t)r[t]=e[t].listener||e[t];return r}(s):f(s,s.length)}function u(e){var r=this._events;if(void 0!==r){var t=r[e];if("function"==typeof t)return 1;if(void 0!==t)return t.length}return 0}function f(e,r){for(var t=new Array(r),n=0;n<r;++n)t[n]=e[n];return t}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return g(this)},i.prototype.emit=function(e){for(var r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);var s="error"===e,i=this._events;if(void 0!==i)s=s&&void 0===i.error;else if(!s)return!1;if(s){var o;if(r.length>0&&(o=r[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var g=i[e];if(void 0===g)return!1;if("function"==typeof g)n(g,this,r);else{var m=g.length,l=f(g,m);for(t=0;t<m;++t)n(l[t],this,r)}return!0},i.prototype.addListener=function(e,r){return m(this,e,r,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,r){return m(this,e,r,!0)},i.prototype.once=function(e,r){return a(r),this.on(e,c(this,e,r)),this},i.prototype.prependOnceListener=function(e,r){return a(r),this.prependListener(e,c(this,e,r)),this},i.prototype.removeListener=function(e,r){var t,n,s,i,o;if(a(r),void 0===(n=this._events))return this;if(void 0===(t=n[e]))return this;if(t===r||t.listener===r)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,t.listener||r));else if("function"!=typeof t){for(s=-1,i=t.length-1;i>=0;i--)if(t[i]===r||t[i].listener===r){o=t[i].listener,s=i;break}if(s<0)return this;0===s?t.shift():function(e,r){for(;r+1<e.length;r++)e[r]=e[r+1];e.pop()}(t,s),1===t.length&&(n[e]=t[0]),void 0!==n.removeListener&&this.emit("removeListener",e,o||r)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var r,t,n;if(void 0===(t=this._events))return this;if(void 0===t.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==t[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete t[e]),this;if(0===arguments.length){var s,i=Object.keys(t);for(n=0;n<i.length;++n)"removeListener"!==(s=i[n])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(r=t[e]))this.removeListener(e,r);else if(void 0!==r)for(n=r.length-1;n>=0;n--)this.removeListener(e,r[n]);return this},i.prototype.listeners=function(e){return A(this,e,!0)},i.prototype.rawListeners=function(e){return A(this,e,!1)},i.listenerCount=function(e,r){return"function"==typeof e.listenerCount?e.listenerCount(r):u.call(e,r)},i.prototype.listenerCount=u,i.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},416:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.browser=t(150)},150:function(e,r){var t,n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,void 0===(n="function"==typeof(t=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const i=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(e.runtime.lastError):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},o=e=>1==e?"argument":"arguments",a=(e,r,t)=>new Proxy(r,{apply:(r,n,s)=>t.call(n,e,...s)});let g=Function.call.bind(Object.prototype.hasOwnProperty);const m=(e,r={},t={})=>{let n=Object.create(null),s={has:(r,t)=>t in e||t in n,get(s,l,c){if(l in n)return n[l];if(!(l in e))return;let A=e[l];if("function"==typeof A)if("function"==typeof r[l])A=a(e,e[l],r[l]);else if(g(t,l)){let r=((e,r)=>function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((s,o)=>{if(r.fallbackToNoCallback)try{t[e](...n,i({resolve:s,reject:o},r))}catch(i){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,s()}else r.noCallback?(t[e](...n),s()):t[e](...n,i({resolve:s,reject:o},r))}))})(l,t[l]);A=a(e,e[l],r)}else A=A.bind(e);else if("object"==typeof A&&null!==A&&(g(r,l)||g(t,l)))A=m(A,r[l],t[l]);else{if(!g(t,"*"))return Object.defineProperty(n,l,{configurable:!0,enumerable:!0,get:()=>e[l],set(r){e[l]=r}}),A;A=m(A,r[l],t["*"])}return n[l]=A,A},set:(r,t,s,i)=>(t in n?n[t]=s:e[t]=s,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},l=Object.create(e);return new Proxy(l,s)},l=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}});let c=!1;const A=new s((e=>"function"!=typeof e?e:function(r,n,s){let i,o,a=!1,g=new Promise((e=>{i=function(r){c||(console.warn(t,(new Error).stack),c=!0),a=!0,e(r)}}));try{o=e(r,n,i)}catch(e){o=Promise.reject(e)}const m=!0!==o&&((l=o)&&"object"==typeof l&&"function"==typeof l.then);var l;if(!0!==o&&!m&&!a)return!1;return(m?o:g).then((e=>{s(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),u=({reject:t,resolve:n},s)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(e.runtime.lastError):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},f=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const s=u.bind(null,{resolve:e,reject:r});n.push(s),t.sendMessage(...n)}))},p={runtime:{onMessage:l(A),onMessageExternal:l(A),sendMessage:f.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:f.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},h={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":h},services:{"*":h},websites:{"*":h}},m(e,p,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=n(chrome)}else e.exports=browser})?t.apply(r,[e]):t)||(e.exports=n)}},r={};!function t(n){if(r[n])return r[n].exports;var s=r[n]={exports:{}};return e[n].call(s.exports,s,s.exports,t),s.exports}(113)})();