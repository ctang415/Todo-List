(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(81),a=n.n(i),s=n(645),o=n.n(s),r=n(667),d=n.n(r),l=new URL(n(239),n.b),c=o()(a());c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);"]);var p=d()(l);c.push([e.id,"html {\n    background: url("+p+");\n    background-size: cover;\n}\n\n\n\n.flex {\n    display: flex;\n    font-family: 'Bebas Neue';\n    font-size: 5.5vw;\n    color: teal;\n    letter-spacing: 0.4em;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid {\n    margin-left: 10vw;\n    margin-right: 10vw;\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n    background-color: white;\n    border-radius: 10px;\n    padding: 1rem;\n    \n}\n.top {\n    display: flex;\n    justify-content: space-evenly;\n    grid-row:1;\n    border-bottom: solid grey;\n}\n\nli {\n    font-family: 'Bebas Neue';\n    font-size: 1.5vw;\n    list-style-type: none;\n}\n\n\n.bottom {\n    padding: 7px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 1;\n    border-right: solid grey;\n    padding-right: 1.5vw;\n    overflow:auto;\n    height: clamp(510px, 37vw, 40vw);\n    gap: 10px;\n}\n\n.rightSide {\n    display: flex;\n    flex-direction: column;\n    overflow:auto;\n    height: clamp(510px, 37vw, 40vw);\n}\n\n.projectplus {\n    display: flex;\n    flex-direction: row;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 2vw;\n    grid-column: 1;\n    color: teal;\n    padding-left: 1vw;\n    cursor: pointer;\n}\n\n\n.modal {\n    display: none; \n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4); \n}\n\n.modal-content {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 1rem;\n    border: 1px solid #888;\n    width: 25vw;\n    height: 11.5vw;\n    font-size: 2.5vw;\n  }\n\n  .modalTask {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 40%;\n    height: 45%;\n    font-size: 2.5vw;\n\n  }\n\n  .buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 1vw;\n    gap: 0.7vw;\n  }\n \n  .close {\n    color: black;\n    font-weight: lighter;\n    float: right;\n    cursor: pointer;\n  }\n\n  .add {\n    border-radius: 7px;\n    padding: 1vw;\n    width: 5rem;\n  }\n\n.inputTitle {\n    padding: 1rem;\n    width: 80%;\n}\n\n\n.projectDiv {\n    font-size: 1.8vw;\n    background-color: rgb(245, 238, 228);\n    padding: 1rem;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.projectDivArea {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow:hidden;\n    cursor: pointer;\n}\n\n.stretch {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 17vw;\n}\n\n.stretchTask {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.image {\n    height: 1.5vw;\n}\n\n.imageOther {\n    height:1.7vw;\n}\n\n.icons {\n    display: flex;\n    align-self: center;\n    cursor:pointer;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    font-family: 'Bebas Neue';\n    font-size: 3.1vw;\n    align-items: center;\n}\n\n.addTask {\n    border-radius: 10px;\n    border-color: silver;\n    border-style: solid;\n    background-color: white;\n    font-family: 'Bebas Neue';\n    cursor: pointer;\n    font-size: 1vw;\n    padding: 1.2vw;\n}\n\n#form {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 8px;\n    font-size: 1.5vw;\n    padding-left: 15px;\n}\n\n.taskInputs {\n    width: 100%;\n    height: 1.8vw;\n}\n\n.taskLabels {\n    font-size: 2vw;\n}\n\n#submitButton, #submitButtonTwo {\n    border-radius: 7px;\n    padding: 0.5rem;\n    width: 6rem;\n    margin-top: 1vw;\n}\n\n\n.taskBoxesGrid {\n    display: grid;\n    grid-template-columns: 5% 90% 5%;\n    grid-template-rows: minmax(1fr 1fr);\n    margin-left: 10px;\n    background-color:rgb(228, 241, 245); \n    font-size: 2.0vw;\n    padding: 15px;\n    border-radius: 5px;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    row-gap: 15px;\n}\n\n.myExpand {\n    height: 2.8vw;\n}\n.myEdit {\n    height: 2.6vw;\n}\n.myTrash {\n    height: 2.9vw;\n}\n\n\n.taskBoxDescription {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxPriority {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxExpand {\n    border-top: solid black;\n    grid-row: 2;\n    grid-column: 2;\n    font-family: \"Bebas Neue\";\n    overflow:scroll;\n    display: flex;\n    height: 7vw;\n    padding-top: 5px;\n}\n\n.taskArea {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Bebas Neue';\n}\n\n.taskIcons {\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n    justify-content: flex-end;\n    gap: 3px;\n    margin-right: 5px;\n}\n\n.cursor {\n    cursor: pointer;\n}\n\ninput[type=checkbox] {\n    transform: scale(1.2);\n}\n\ninput[type='radio'] { \n    transform: scale(1.2); \n}\n\n@media only screen and (min-device-width:320px) and (max-device-width: 480px) {\n    .grid {\n        margin-left: 5vw;\n        margin-right: 5vw;\n        display: grid;\n        grid-template-rows: 1fr 20fr;\n        background-color: white;\n        border-radius: 5px;\n        padding: 3px;\n    }\n\n\n    li {\n        font-family: 'Bebas Neue';\n        font-size: 4vw;\n        list-style-type: none;\n    }\n\n    .projectplus {\n        display: flex;\n        flex-direction: row;\n        font-family: Arial, Helvetica, sans-serif;\n        font-weight: bolder;\n        font-size: 4vw;\n        grid-column: 1;\n        color: teal;\n        padding-left: 1vw;\n        cursor: pointer;\n    }\n\n    .project {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        font-family: 'Bebas Neue';\n        font-size: 4vw;\n        grid-column: 1;\n        border-right: solid grey;\n        padding-right: 1.5vw;\n        overflow:auto;\n        height: clamp(480px, 37vw, 40vw);\n    }\n\n    .projectDiv {\n        font-size: 1.8vw;\n        background-color: rgb(245, 238, 228);\n        padding: 1px;\n        border-radius: 5px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    .modal-content {\n        text-align: center;\n        background-color: #fefefe;\n        margin: 35% auto;\n        padding: 20px;\n        border: 1px solid #888;\n        width: 130px;\n        height: 100px;\n        font-size: 3.5vw;\n      }\n\n    .inputTitle {\n        padding: 6px;\n    }\n    \n    \n    .projectDiv {\n        font-size: 2.5vw;\n        background-color: rgb(245, 238, 228);\n        padding: 6px;\n        border-radius: 5px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    #submitButton, #submitButtonTwo {\n        border-radius: 7px;\n        padding: 0.5rem;\n        width: 6rem;\n    }\n\n    .image {\n    height: 2.5vw;\n    }\n\n    .imageOther {\n    height:2.7vw;\n    }\n\n    .stretch {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        width: 17vw;\n    }\n\n\n.taskBoxesGrid {\n    display: grid;\n    grid-template-columns: 5% 90% 5%;\n    grid-template-rows: minmax(1fr 1fr);\n    margin-left: 10px;\n    background-color:rgb(228, 241, 245); \n    font-size: 3.5vw;\n    padding: 6px;\n    border-radius: 5px;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    row-gap: 15px;\n}\n.modalTask {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 20% auto;\n    padding: 15px;\n    border: 1px solid #888;\n    width: 65%;\n    height: 35%;\n\n  }\n\n  .taskIcons {\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n    justify-content: flex-end;\n    gap: 6px;\n    margin-right: 10px;\n}\n.taskBoxDescription {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 2.3vw;\n}\n\n.taskBoxPriority {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 2.3vw;\n}\n\n.taskInputs {\n    width: 100%;\n    height: 2.5vw;\n}\n\n.taskLabels {\n    font-size: 3.0vw;\n}\ninput[type='radio'] { \n    transform: scale(0.8); \n}\n\ninput[type=checkbox] {\n    transform: scale(0.7);\n}\n\n.add {\n    margin-top: 15px;\n    border-radius: 7px;\n    padding: 0.8vw;\n    width: 4rem;\n  }\n\n  .addTask {\n    border-radius: 5px;\n    border-color: silver;\n    border-style: solid;\n    background-color: white;\n    font-family: 'Bebas Neue';\n    cursor: pointer;\n    font-size: 2.7vw;\n    padding: 6px;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    font-family: 'Bebas Neue';\n    font-size: 5vw;\n    align-items: center;\n}\n}",""]);const u=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(o[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);i&&o[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},o=[],r=0;r<e.length;r++){var d=e[r],l=i.base?d[0]+i.base:d[0],c=s[l]||0,p="".concat(l," ").concat(c);s[l]=c+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var y=a(m,i);i.byIndex=r,t.splice(r,0,{identifier:p,updater:y,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=i(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var r=n(s[o]);t[r].references--}for(var d=i(e,a),l=0;l<s.length;l++){var c=n(s[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=d}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},239:(e,t,n)=>{e.exports=n.p+"c9ad707e7686c505849b.png"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),a=n.n(i),s=n(569),o=n.n(s),r=n(565),d=n.n(r),l=n(216),c=n.n(l),p=n(589),u=n.n(p),m=n(426),y={};function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function f(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===h(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function v(e,t){for(var n=e<0?"-":"",i=Math.abs(e).toString();i.length<t;)i="0"+i;return n+i}y.styleTagTransform=u(),y.setAttributes=d(),y.insert=o().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=c(),t()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;const x={y:function(e,t){var n=e.getUTCFullYear(),i=n>0?n:1-n;return v("yy"===t?i%100:i,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):v(n+1,2)},d:function(e,t){return v(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return v(e.getUTCHours()%12||12,t.length)},H:function(e,t){return v(e.getUTCHours(),t.length)},m:function(e,t){return v(e.getUTCMinutes(),t.length)},s:function(e,t){return v(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,i=e.getUTCMilliseconds();return v(Math.floor(i*Math.pow(10,n-3)),t.length)}};function k(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(e){return g(1,arguments),e instanceof Date||"object"===b(e)&&"[object Date]"===Object.prototype.toString.call(e)}function C(e){if(g(1,arguments),!w(e)&&"number"!=typeof e)return!1;var t=f(e);return!isNaN(Number(t))}function E(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function I(e,t){g(2,arguments);var n=f(e).getTime(),i=E(t);return new Date(n+i)}function L(e,t){g(2,arguments);var n=E(t);return I(e,-n)}var T=/(\w)\1*|''|'(''|[^'])+('|$)|./g,B=/^'([^]*?)'?$/,S=/''/g,j=/[a-zA-Z]/;function P(e,t){g(2,arguments);var n=f(e);if(!C(n))throw new RangeError("Invalid time value");var i=k(n),a=L(n,i),s=t.match(T);if(!s)return"";var o=s.map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return A(e);var n=x[t];if(n)return n(a,e);if(t.match(j))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return o}function A(e){var t=e.match(B);return t?t[1].replace(S,"'"):e}const N=n.p+"1c453583325d6688a794.png",D=n.p+"847d193a8b15949c2a80.png",M=n.p+"e0ab1035c5f2e8f9155d.png";class z{constructor(e){this.title=e,this.tasks=[],this.id="id"+Math.random().toString(16).slice(2)}addTask(e){return this.tasks.push(e)}removeTask(e){return this.tasks.splice(e,1)}removeAllTasks(){return this.tasks.splice(0,this.tasks.length)}getId(){return this.id}changeProjectTitle(e){return this.title=e}}class O{constructor(e,t,n,i,a){this.title=e,this.description=t,this.priority=n,this.dueDate=i,this.status=a,this.id="id"+Math.random().toString(16).slice(2)}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changeDueDate(e){return this.dueDate=e}changePriority(e){return this.priority=e}getTodoId(){return this.id}toggleCheck(e){return this.status}}document.getElementById("container").appendChild(function(){let e,t,n,i,a,s=[];const o=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),c=document.createElement("li"),p=document.createElement("li"),u=document.createElement("li"),m=document.createElement("li"),y=document.createElement("div"),g=document.createElement("div"),h=document.createElement("div"),f=document.createElement("div"),v=document.createElement("div"),x=document.createElement("div"),k=document.createElement("div"),b=document.createElement("button"),w=document.createElement("div"),C=document.createElement("div"),E=document.createElement("div"),I=document.createElement("div"),L=document.createElement("div"),T=document.createElement("input"),B=document.createElement("div"),S=document.createElement("span"),j=document.createElement("button"),A=document.createElement("div"),U=document.getElementById("form"),J=document.getElementById("labelTitle"),q=document.getElementById("title"),H=document.getElementById("labelNotes"),F=document.getElementById("description"),R=document.getElementById("labelPriority"),Z=document.getElementById("lowLabel"),$=document.getElementById("low"),G=document.getElementById("mediumLabel"),Y=document.getElementById("medium"),_=document.getElementById("highLabel"),W=document.getElementById("high"),Q=document.getElementById("labelDate"),X=document.getElementById("date"),K=document.getElementById("submitButton"),V=document.createElement("div"),ee=document.getElementById("submitButtonTwo"),te=document.createElement("input"),ne=document.createElement("div");let ie=P(new Date,"yyyy-MM-dd"),ae=function(){let e=new Date;return e.setDate(e.getDate()+7),P(e,"yyyy-MM-dd")}(),se=ie;T.id="inputid",T.maxLength=35,X.value=ie,r.classList.add("flex"),d.classList.add("grid"),l.classList.add("top"),w.classList.add("bottom"),x.classList.add("projectplus"),h.classList.add("project"),f.classList.add("rightSide"),C.classList.add("modal"),E.classList.add("modal-content"),B.classList.add("buttons"),S.classList.add("close"),j.classList.add("add"),T.classList.add("inputTitle"),g.classList.add("stretch"),b.classList.add("addTask"),I.classList.add("modal"),L.classList.add("modalTask"),q.classList.add("taskInputs"),J.classList.add("taskLabels"),H.classList.add("taskLabels"),R.classList.add("taskLabels"),Q.classList.add("taskLabels"),F.classList.add("taskInputs"),y.setAttribute("style","display: flex"),V.classList.add("stretchTask"),ne.classList.add("buttons"),te.classList.add("inputTitle");const oe=C.cloneNode(!0),re=E.cloneNode(!0),de=j.cloneNode(!0);function le(){const i=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),r=new Image,d=new Image;a.classList.add("projectDivArea"),a.setAttribute("id",e),k.classList.add("header"),r.classList.add("imageOther"),d.classList.add("image"),i.classList.add("projectDiv"),o.classList.add("icons"),r.src=M,d.src=D,d.setAttribute("id",e),a.addEventListener("click",(function(){let e=s.findIndex((e=>e.id===a.id));k.textContent=s[e].title,k.appendChild(b),t=e;let n=V.querySelectorAll('[data-id="myTaskBox"]');for(let e=0;e<n.length;e++)n[e].style.display="none";for(let t=0;t<s[e].tasks.length;t++)document.getElementById(s[e].tasks[t].getTodoId()).style.display="grid"})),d.addEventListener("click",(function(){n=this.id,oe.style.display="block",re.style.display="block";let e=s.findIndex((e=>e.id===a.id));te.value=s[e].title,te.maxLength=35})),r.addEventListener("click",(function(){let e=s.findIndex((e=>e.id===a.id));1!==s.length&&s[t]!==s[e]||(k.textContent="");for(let t=0;t<s[e].tasks.length;t++){let n=document.getElementById(s[e].tasks[t].getTodoId());V.removeChild(n)}s[e].removeAllTasks(),g.removeChild(i),s.splice(e,1),localStorage.setItem("projects",JSON.stringify(s))}));let l=s.findIndex((e=>e.id===a.id));a.textContent=s[l].title,o.appendChild(d),o.appendChild(r),i.appendChild(a),i.appendChild(o),g.appendChild(i)}re.textContent=["Edit Project"],de.textContent=["Submit"],r.textContent=["Taskit"],c.textContent=["All"],c.setAttribute("style","cursor: pointer"),p.textContent=["Today"],p.setAttribute("style","cursor: pointer"),u.textContent=["Week"],u.setAttribute("style","cursor: pointer"),m.textContent=["Important"],m.setAttribute("style","cursor: pointer"),v.textContent=["Projects"],x.textContent=["+"],E.textContent=["Add New Project"],j.textContent=["Submit"],S.textContent=["X"],b.textContent=["add task"],c.addEventListener("click",(function(){k.textContent="All Tasks",k.classList.add("header");let e=V.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<s.length;e++)for(let t=0;t<s[e].tasks.length;t++)document.getElementById(s[e].tasks[t].getTodoId()).style.display="grid"})),p.addEventListener("click",(function(){k.textContent="Today's Tasks",k.classList.add("header");let e=V.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<s.length;e++)for(let t=0;t<s[e].tasks.length;t++)s[e].tasks[t].dueDate===se&&(document.getElementById(s[e].tasks[t].getTodoId()).style.display="grid")})),u.addEventListener("click",(function(){k.textContent="Tasks Due in a Week",k.classList.add("header");let e=V.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<s.length;e++)for(let t=0;t<s[e].tasks.length;t++)ae.split("-")[2]-s[e].tasks[t].dueDate.split("-")[2]<=7&&ae.split("-")[2]-s[e].tasks[t].dueDate.split("-")[2]>=0&&(document.getElementById(s[e].tasks[t].getTodoId()).style.display="grid")})),m.addEventListener("click",(function(){k.textContent="Important Tasks",k.classList.add("header");let e=V.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<s.length;e++)for(let t=0;t<s[e].tasks.length;t++)"High"===s[e].tasks[t].priority&&(document.getElementById(s[e].tasks[t].getTodoId()).style.display="grid")})),x.addEventListener("click",(function(){C.style.display="block",E.style.display="block"})),S.addEventListener("click",(function(){C.style.display="none",E.style.display="none",inputid.value=""})),j.addEventListener("click",(function(){""===inputid.value?(inputid.value="untitled",ue(),le(),C.style.display="none",E.style.display="none",inputid.value=""):""!=inputid.value&&(ue(),le(),C.style.display="none",E.style.display="none",inputid.value="")})),de.addEventListener("click",(function(){let e=s.findIndex((e=>e.id===n));s[e].changeProjectTitle(te.value),localStorage.setItem("projects",JSON.stringify(s));let i=n;document.getElementById(i).textContent=s[e].title,s[e]===s[t]&&(k.textContent=s[e].title),oe.style.display="none",re.style.display="none"})),b.addEventListener("click",(function(){q.value="",F.value="",X.value=ie,ee.style.display="none",I.style.display="block",L.style.display="block",document.getElementById("low").checked=!0}));const ce=S.cloneNode(!0),pe=S.cloneNode(!0);function ue(){let t=new z(inputid.value);s.push(t),e=t.getId(),localStorage.setItem("projects",JSON.stringify(s)),console.log(s)}pe.addEventListener("click",(function(){oe.style.display="none",re.style.display="none"})),ce.addEventListener("click",(function(){(K.style.display="none")&&(K.style.display="block"),q.value="",F.value="",I.style.display="none",L.style.display="none"})),K.addEventListener("click",(function(e){const n=document.querySelector('input[name="priority"]:checked');let o=new O(q.value,F.value,n.value,X.value);i=o.getTodoId(),s[t].addTask(o),localStorage.setItem("projects",JSON.stringify(s)),function(){const e=document.createElement("div"),n=document.createElement("div"),o=document.createElement("span"),r=document.createElement("span"),d=document.createElement("input"),l=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div");d.setAttribute("type","checkbox"),d.classList.add("checkBox"),e.classList.add("taskBoxesGrid"),n.classList.add("taskArea");const u=document.createElement("div"),m=new Image,y=new Image,g=new Image;u.classList.add("taskIcons"),g.src=N,y.src=D,m.src=M,g.classList.add("myExpand"),y.classList.add("myEdit"),m.classList.add("myTrash"),g.classList.add("cursor"),y.classList.add("cursor"),m.classList.add("cursor"),e.setAttribute("id",i),o.setAttribute("data-id","title"),r.setAttribute("data-id","date"),l.classList.add("taskBoxExpand"),c.classList.add("taskBoxDescription"),c.setAttribute("data-id","description"),p.setAttribute("data-id","priority"),p.classList.add("taskBoxPriority"),e.setAttribute("data-id","myTaskBox"),e.addEventListener("click",(function(){a=this.id})),g.addEventListener("click",(function(){"none"===l.style.display?l.style.display="block":l.style.display="none"})),m.addEventListener("click",(function(){let n=s[t].tasks.findIndex((t=>t.id===e.id));s[t].removeTask(n),localStorage.setItem("projects",JSON.stringify(s)),V.removeChild(e)})),y.addEventListener("click",(function(){"Medium"===s[t].tasks[h].priority?document.getElementById("medium").checked=!0:"High"===s[t].tasks[h].priority?document.getElementById("high").checked=!0:"Low"===s[t].tasks[h].priority&&(document.getElementById("low").checked=!0),q.value=s[t].tasks[h].title,F.value=s[t].tasks[h].description,X.value=s[t].tasks[h].dueDate,I.style.display="block",L.style.display="block",K.style.display="none",ee.style.display="block"}));let h=s[t].tasks.findIndex((t=>t.id===e.id));o.textContent=s[t].tasks[h].title,r.textContent=s[t].tasks[h].dueDate,c.textContent=s[t].tasks[h].description,p.textContent="Priority: "+s[t].tasks[h].priority,e.appendChild(d),n.appendChild(o),n.appendChild(r),e.appendChild(n),e.appendChild(u),u.appendChild(g),u.appendChild(y),u.appendChild(m),l.appendChild(c),l.appendChild(p),e.appendChild(l),V.appendChild(e),l.style.display="none",s[t].tasks[h].status="unchecked",d.addEventListener("change",(function(){this.checked?(s[t].tasks[h].status="checked",o.style.setProperty("text-decoration","line-through"),r.style.setProperty("text-decoration","line-through"),c.style.setProperty("text-decoration","line-through"),p.style.setProperty("text-decoration","line-through"),localStorage.setItem("projects",JSON.stringify(s))):(s[t].tasks[h].status="unchecked",o.style.setProperty("text-decoration","none"),r.style.setProperty("text-decoration","none"),c.style.setProperty("text-decoration","none"),p.style.setProperty("text-decoration","none"),localStorage.setItem("projects",JSON.stringify(s)))}))}(),U.reset(),e.preventDefault(),I.style.display="none",L.style.display="none",X.value=ie})),ee.addEventListener("click",(function(e){const n=document.querySelector('input[name="priority"]:checked');let i=s[t].tasks.findIndex((e=>e.id===a));s[t].tasks[i].changeTitle(q.value),s[t].tasks[i].changeDescription(F.value),s[t].tasks[i].changeDueDate(X.value),s[t].tasks[i].changePriority(n.value),localStorage.setItem("projects",JSON.stringify(s));let o=document.getElementById(a).querySelector('[data-id="title"]'),r=document.getElementById(a).querySelector('[data-id="date"]'),d=document.getElementById(a).querySelector('[data-id="description"]'),l=document.getElementById(a).querySelector('[data-id="priority"]');o.textContent=s[t].tasks[i].title,r.textContent=s[t].tasks[i].dueDate,d.textContent=s[t].tasks[i].description,l.textContent="Priority: "+s[t].tasks[i].priority,e.preventDefault(),I.style.display="none",L.style.display="none",K.style.display="block",ee.style.display="none"})),localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([]));const me=JSON.parse(localStorage.getItem("projects")||"[]");let ye=JSON.parse(localStorage.getItem("projects",me[0]));return function(){for(let t=0;t<ye.length;t++){let n=new z(ye[t].title);e=n.getId(),s.push(n),le();for(let e=0;e<ye[t].tasks.length;e++){let n=new O(ye[t].tasks[e].title,ye[t].tasks[e].description,ye[t].tasks[e].priority,ye[t].tasks[e].dueDate,ye[t].tasks[e].status);i=n.getTodoId(),s[t].addTask(n);const o=document.createElement("div"),r=document.createElement("div"),d=document.createElement("span"),l=document.createElement("span"),c=document.createElement("input"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div");c.type="checkbox",o.classList.add("taskBoxesGrid"),r.classList.add("taskArea");const y=document.createElement("div"),g=new Image,h=new Image,f=new Image;y.classList.add("taskIcons"),f.src=N,h.src=D,g.src=M,f.setAttribute("style","height: 2.8vw"),h.setAttribute("style","height: 2.6vw"),g.setAttribute("style","height: 2.9vw"),f.classList.add("cursor"),h.classList.add("cursor"),g.classList.add("cursor"),o.setAttribute("id",i),d.setAttribute("data-id","title"),l.setAttribute("data-id","date"),p.classList.add("taskBoxExpand"),u.classList.add("taskBoxDescription"),u.setAttribute("data-id","description"),m.setAttribute("data-id","priority"),m.classList.add("taskBoxPriority"),o.setAttribute("data-id","myTaskBox"),o.addEventListener("click",(function(){a=this.id})),f.addEventListener("click",(function(){"none"===p.style.display?p.style.display="block":p.style.display="none"})),g.addEventListener("click",(function(){let e=s[t].tasks.findIndex((e=>e.id===o.id));s[t].removeTask(e),localStorage.setItem("projects",JSON.stringify(s)),V.removeChild(o)})),h.addEventListener("click",(function(){"Medium"===s[t].tasks[e].priority?document.getElementById("medium").checked=!0:"High"===s[t].tasks[e].priority?document.getElementById("high").checked=!0:"Low"===s[t].tasks[e].priority&&(document.getElementById("low").checked=!0),q.value=s[t].tasks[e].title,F.value=s[t].tasks[e].description,X.value=s[t].tasks[e].dueDate,I.style.display="block",L.style.display="block",K.style.display="none",ee.style.display="block"})),c.addEventListener("change",(function(){this.checked?(s[t].tasks[e].status="checked",d.style.setProperty("text-decoration","line-through"),l.style.setProperty("text-decoration","line-through"),u.style.setProperty("text-decoration","line-through"),m.style.setProperty("text-decoration","line-through"),localStorage.setItem("projects",JSON.stringify(s))):(s[t].tasks[e].status="unchecked",d.style.setProperty("text-decoration","none"),l.style.setProperty("text-decoration","none"),u.style.setProperty("text-decoration","none"),m.style.setProperty("text-decoration","none"),localStorage.setItem("projects",JSON.stringify(s)))})),d.textContent=s[t].tasks[e].title,l.textContent=s[t].tasks[e].dueDate,u.textContent=s[t].tasks[e].description,m.textContent="Priority: "+s[t].tasks[e].priority,o.appendChild(c),r.appendChild(d),r.appendChild(l),o.appendChild(r),o.appendChild(y),y.appendChild(f),y.appendChild(h),y.appendChild(g),p.appendChild(u),p.appendChild(m),o.appendChild(p),V.appendChild(o),o.style.display="none",p.style.display="none","checked"===s[t].tasks[e].status?(c.setAttribute("checked",!0),d.style.setProperty("text-decoration","line-through"),l.style.setProperty("text-decoration","line-through"),u.style.setProperty("text-decoration","line-through"),m.style.setProperty("text-decoration","line-through")):"unchecked"===s[t].tasks[e].status&&(c.removeAttribute("checked"),d.style.setProperty("text-decoration","none"),l.style.setProperty("text-decoration","none"),u.style.setProperty("text-decoration","none"),m.style.setProperty("text-decoration","none")),"Medium"===s[t].tasks[e].priority?document.getElementById("medium").checked=!0:"High"===s[t].tasks[e].priority?document.getElementById("high").checked=!0:document.getElementById("low").checked=!0}}}(),console.log(s),l.appendChild(c),l.appendChild(p),l.appendChild(u),l.appendChild(m),d.appendChild(l),d.appendChild(w),w.appendChild(h),h.appendChild(y),h.appendChild(g),y.appendChild(v),y.appendChild(x),f.appendChild(k),oe.appendChild(re),v.appendChild(oe),re.appendChild(pe),ne.appendChild(te),ne.appendChild(de),re.appendChild(ne),v.appendChild(C),C.appendChild(E),w.appendChild(f),B.appendChild(T),B.appendChild(j),E.appendChild(S),E.appendChild(B),I.appendChild(L),f.appendChild(I),U.appendChild(J),U.appendChild(q),U.appendChild(H),U.appendChild(F),R.appendChild($),R.appendChild(Z),R.appendChild(Y),R.appendChild(G),R.appendChild(W),R.appendChild(_),U.appendChild(R),U.appendChild(Q),U.appendChild(K),U.appendChild(ee),Q.appendChild(X),A.appendChild(ce),A.appendChild(U),L.appendChild(A),f.appendChild(V),o.appendChild(r),o.appendChild(d),o}())})()})();