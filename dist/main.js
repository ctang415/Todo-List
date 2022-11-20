(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(81),a=n.n(i),s=n(645),o=n.n(s),r=n(667),d=n.n(r),l=new URL(n(239),n.b),c=o()(a());c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);"]);var p=d()(l);c.push([e.id,"html {\n    background: url("+p+");\n    background-size: cover;\n}\n\n\n\n.flex {\n    display: flex;\n    font-family: 'Bebas Neue';\n    font-size: 5.5vw;\n    color: teal;\n    letter-spacing: 0.4em;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid {\n    margin-left: 10vw;\n    margin-right: 10vw;\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n    background-color: white;\n    border-radius: 10px;\n    padding: 1rem;\n    \n}\n.top {\n    display: flex;\n    justify-content: space-evenly;\n    grid-row:1;\n    border-bottom: solid grey;\n}\n\nli {\n    font-family: 'Bebas Neue';\n    font-size: 1.5vw;\n    list-style-type: none;\n}\n\n\n.bottom {\n    padding: 7px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 1;\n    border-right: solid grey;\n    padding-right: 1.5vw;\n    overflow:auto;\n    height: clamp(480px, 37vw, 40vw);\n}\n\n.rightSide {\n    display: flex;\n    flex-direction: column;\n    overflow:auto;\n    height: clamp(480px, 37vw, 40vw);\n}\n\n.projectplus {\n    display: flex;\n    flex-direction: row;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 2vw;\n    grid-column: 1;\n    color: teal;\n    padding-left: 1vw;\n    cursor: pointer;\n}\n\n\n.modal {\n    display: none; \n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4); \n}\n\n.modal-content {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 1rem;\n    border: 1px solid #888;\n    width: 25vw;\n    height: 11.5vw;\n    font-size: 2.5vw;\n  }\n\n  .modalTask {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 40%;\n    height: 45%;\n    font-size: 2.5vw;\n\n  }\n\n  .buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 1vw;\n    gap: 0.7vw;\n  }\n \n  .close {\n    color: black;\n    font-weight: lighter;\n    float: right;\n    cursor: pointer;\n  }\n\n  .add {\n    border-radius: 7px;\n    padding: 1vw;\n    width: 5rem;\n  }\n\n.inputTitle {\n    padding: 1rem;\n    width: 80%;\n}\n\n\n.projectDiv {\n    font-size: 1.8vw;\n    background-color: rgb(245, 238, 228);\n    padding: 1rem;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.projectDivArea {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow:hidden;\n    cursor: pointer;\n}\n\n.stretch {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 17vw;\n}\n\n.stretchTask {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.image {\n    height: 1.5vw;\n}\n\n.imageOther {\n    height:1.7vw;\n}\n\n.icons {\n    display: flex;\n    align-self: center;\n    cursor:pointer;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    font-family: 'Bebas Neue';\n    font-size: 3vw;\n}\n\n.addTask {\n    border-radius: 10px;\n    border-color: silver;\n    border-style: solid;\n    background-color: white;\n    font-family: 'Bebas Neue';\n    cursor: pointer;\n    font-size: 1vw;\n    padding: 1.2vw;\n}\n\n#form {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 8px;\n    font-size: 1.5vw;\n    padding-left: 15px;\n}\n\n.taskInputs {\n    width: 100%;\n    height: 1.8vw;\n}\n\n.taskLabels {\n    font-size: 2vw;\n}\n\n#submitButton, #submitButtonTwo {\n    border-radius: 7px;\n    padding: 0.5rem;\n    width: 6rem;\n    margin-top: 1vw;\n}\n\n\n.taskBoxesGrid {\n    display: grid;\n    grid-template-columns: 5% 90% 5%;\n    grid-template-rows: minmax(1fr 1fr);\n    margin-left: 10px;\n    background-color:rgb(228, 241, 245); \n    font-size: 2.0vw;\n    padding: 15px;\n    border-radius: 5px;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    row-gap: 15px;\n}\n\n.myExpand {\n    height: 2.8vw;\n}\n.myEdit {\n    height: 2.6vw;\n}\n.myTrash {\n    height: 2.9vw;\n}\n\n\n.taskBoxDescription {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxPriority {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxExpand {\n    border-top: solid black;\n    grid-row: 2;\n    grid-column: 2;\n    font-family: \"Bebas Neue\";\n    overflow:scroll;\n    display: flex;\n    height: 7vw;\n    padding-top: 5px;\n}\n\n.taskArea {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Bebas Neue';\n}\n\n.taskIcons {\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n    justify-content: flex-end;\n    gap: 3px;\n    margin-right: 5px;\n}\n\n.cursor {\n    cursor: pointer;\n}\n\n.checkBox {\n    height: 1.5vw;\n}\n\ninput[type='radio'] { \n    transform: scale(1.2); \n}\n\n@media only screen and (min-device-width:320px) and (max-device-width: 480px) {\n    .grid {\n        margin-left: 5vw;\n        margin-right: 5vw;\n        display: grid;\n        grid-template-rows: 1fr 20fr;\n        background-color: white;\n        border-radius: 5px;\n        padding: 3px;\n    }\n\n    li {\n        font-family: 'Bebas Neue';\n        font-size: 4vw;\n        list-style-type: none;\n    }\n\n    .projectplus {\n        display: flex;\n        flex-direction: row;\n        font-family: Arial, Helvetica, sans-serif;\n        font-weight: bolder;\n        font-size: 3vw;\n        grid-column: 1;\n        color: teal;\n        padding-left: 1vw;\n        cursor: pointer;\n    }\n\n    .project {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        font-family: 'Bebas Neue';\n        font-size: 3vw;\n        grid-column: 1;\n        border-right: solid grey;\n        padding-right: 1.5vw;\n        overflow:auto;\n        height: clamp(480px, 37vw, 40vw);\n    }\n\n    .projectDiv {\n        font-size: 1.8vw;\n        background-color: rgb(245, 238, 228);\n        padding: 1px;\n        border-radius: 5px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    .modal-content {\n        text-align: center;\n        background-color: #fefefe;\n        margin: 35% auto;\n        padding: 20px;\n        border: 1px solid #888;\n        width: 130px;\n        height: 100px;\n        font-size: 3.5vw;\n      }\n\n    .inputTitle {\n        padding: 6px;\n    }\n    \n    \n    .projectDiv {\n        font-size: 2.5vw;\n        background-color: rgb(245, 238, 228);\n        padding: 6px;\n        border-radius: 5px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    #submitButton, #submitButtonTwo {\n        border-radius: 7px;\n        padding: 0.5rem;\n        width: 6rem;\n    }\n\n    .image {\n    height: 2.5vw;\n    }\n\n    .imageOther {\n    height:2.7vw;\n    }\n\n    .stretch {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        width: 17vw;\n    }\n\n\n.taskBoxesGrid {\n    display: grid;\n    grid-template-columns: 5% 90% 5%;\n    grid-template-rows: minmax(1fr 1fr);\n    margin-left: 10px;\n    background-color:rgb(228, 241, 245); \n    font-size: 3.5vw;\n    padding: 6px;\n    border-radius: 5px;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    row-gap: 15px;\n}\n.modalTask {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 20% auto;\n    padding: 15px;\n    border: 1px solid #888;\n    width: 60%;\n    height: 30%;\n\n  }\n\n  .taskIcons {\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n    justify-content: flex-end;\n    gap: 6px;\n    margin-right: 10px;\n}\n.taskBoxDescription {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 2.3vw;\n}\n\n.taskBoxPriority {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 2.3vw;\n}\n\n.taskInputs {\n    width: 100%;\n    height: 2.5vw;\n}\n\n.taskLabels {\n    font-size: 3.0vw;\n}\ninput[type='radio'] { \n    transform: scale(0.8); \n}\n\n.add {\n    margin-top: 15px;\n    border-radius: 7px;\n    padding: 0.8vw;\n    width: 4rem;\n  }\n\n  .addTask {\n    border-radius: 5px;\n    border-color: silver;\n    border-style: solid;\n    background-color: white;\n    font-family: 'Bebas Neue';\n    cursor: pointer;\n    font-size: 1vw;\n    padding: 4px;\n}\n}",""]);const u=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(o[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);i&&o[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},o=[],r=0;r<e.length;r++){var d=e[r],l=i.base?d[0]+i.base:d[0],c=s[l]||0,p="".concat(l," ").concat(c);s[l]=c+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var y=a(m,i);i.byIndex=r,t.splice(r,0,{identifier:p,updater:y,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=i(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var r=n(s[o]);t[r].references--}for(var d=i(e,a),l=0;l<s.length;l++){var c=n(s[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=d}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},239:(e,t,n)=>{e.exports=n.p+"c9ad707e7686c505849b.png"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),a=n.n(i),s=n(569),o=n.n(s),r=n(565),d=n.n(r),l=n(216),c=n.n(l),p=n(589),u=n.n(p),m=n(426),y={};function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function f(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===h(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function v(e,t){for(var n=e<0?"-":"",i=Math.abs(e).toString();i.length<t;)i="0"+i;return n+i}y.styleTagTransform=u(),y.setAttributes=d(),y.insert=o().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=c(),t()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;const x={y:function(e,t){var n=e.getUTCFullYear(),i=n>0?n:1-n;return v("yy"===t?i%100:i,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):v(n+1,2)},d:function(e,t){return v(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return v(e.getUTCHours()%12||12,t.length)},H:function(e,t){return v(e.getUTCHours(),t.length)},m:function(e,t){return v(e.getUTCMinutes(),t.length)},s:function(e,t){return v(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,i=e.getUTCMilliseconds();return v(Math.floor(i*Math.pow(10,n-3)),t.length)}};function k(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(e){return g(1,arguments),e instanceof Date||"object"===b(e)&&"[object Date]"===Object.prototype.toString.call(e)}function C(e){if(g(1,arguments),!w(e)&&"number"!=typeof e)return!1;var t=f(e);return!isNaN(Number(t))}function E(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function L(e,t){g(2,arguments);var n=f(e).getTime(),i=E(t);return new Date(n+i)}function I(e,t){g(2,arguments);var n=E(t);return L(e,-n)}var B=/(\w)\1*|''|'(''|[^'])+('|$)|./g,T=/^'([^]*?)'?$/,S=/''/g,j=/[a-zA-Z]/;function P(e,t){g(2,arguments);var n=f(e);if(!C(n))throw new RangeError("Invalid time value");var i=k(n),a=I(n,i),s=t.match(B);if(!s)return"";var o=s.map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return A(e);var n=x[t];if(n)return n(a,e);if(t.match(j))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return o}function A(e){var t=e.match(T);return t?t[1].replace(S,"'"):e}const D=n.p+"1c453583325d6688a794.png",N=n.p+"847d193a8b15949c2a80.png",M=n.p+"e0ab1035c5f2e8f9155d.png";class z{constructor(e){this.title=e,this.tasks=[],this.id="id"+Math.random().toString(16).slice(2)}addTask(e){return this.tasks.push(e)}removeTask(e){return this.tasks.splice(e,1)}removeAllTasks(){return this.tasks.splice(0,this.tasks.length)}getId(){return this.id}changeProjectTitle(e){return this.title=e}}class O{constructor(e,t,n,i,a){this.title=e,this.description=t,this.priority=n,this.dueDate=i,this.status=a,this.id="id"+Math.random().toString(16).slice(2)}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changeDueDate(e){return this.dueDate=e}changePriority(e){return this.priority=e}getTodoId(){return this.id}toggleCheck(e){return this.status}}document.getElementById("container").appendChild(function(){let e,t=[];const n=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),o=document.createElement("li"),r=document.createElement("li"),d=document.createElement("li"),l=document.createElement("li"),c=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),y=document.createElement("div"),g=document.createElement("div"),h=document.createElement("div"),f=document.createElement("button"),v=document.createElement("div"),x=document.createElement("div"),k=document.createElement("div"),b=document.createElement("div"),w=document.createElement("div"),C=document.createElement("input"),E=document.createElement("div"),L=document.createElement("span"),I=document.createElement("button"),B=document.createElement("div"),T=document.getElementById("form"),S=document.getElementById("labelTitle"),j=document.getElementById("title"),A=document.getElementById("labelNotes"),U=document.getElementById("description"),J=document.getElementById("labelPriority"),q=document.getElementById("lowLabel"),H=document.getElementById("low"),F=document.getElementById("mediumLabel"),R=document.getElementById("medium"),Z=document.getElementById("highLabel"),$=document.getElementById("high"),G=document.getElementById("labelDate"),Y=document.getElementById("date"),_=document.getElementById("submitButton"),W=document.createElement("div"),Q=document.getElementById("submitButtonTwo"),X=document.createElement("input"),K=document.createElement("div");let V,ee,te=P(new Date,"yyyy-MM-dd"),ne=function(){let e=new Date;return e.setDate(e.getDate()+7),P(e,"yyyy-MM-dd")}();C.id="inputid",C.maxLength=35,Y.value=te;let ie=te;i.classList.add("flex"),a.classList.add("grid"),s.classList.add("top"),v.classList.add("bottom"),g.classList.add("projectplus"),u.classList.add("project"),m.classList.add("rightSide"),x.classList.add("modal"),k.classList.add("modal-content"),E.classList.add("buttons"),L.classList.add("close"),I.classList.add("add"),C.classList.add("inputTitle"),p.classList.add("stretch"),f.classList.add("addTask"),b.classList.add("modal"),w.classList.add("modalTask"),j.classList.add("taskInputs"),S.classList.add("taskLabels"),A.classList.add("taskLabels"),J.classList.add("taskLabels"),G.classList.add("taskLabels"),U.classList.add("taskInputs"),c.setAttribute("style","display: flex"),W.classList.add("stretchTask"),K.classList.add("buttons"),X.classList.add("inputTitle");const ae=x.cloneNode(!0),se=k.cloneNode(!0),oe=I.cloneNode(!0);function re(){const n=document.createElement("div"),i=document.createElement("div");i.classList.add("projectDivArea"),i.setAttribute("id",e),h.classList.add("header"),i.addEventListener("click",(function(){let e=t.findIndex((e=>e.id===i.id));h.textContent=t[e].title,h.appendChild(f),V=e;let n=W.querySelectorAll('[data-id="myTaskBox"]');for(let e=0;e<n.length;e++)n[e].style.display="none";for(let n=0;n<t[e].tasks.length;n++)document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid"}));const a=document.createElement("div"),s=new Image,o=new Image;s.classList.add("imageOther"),o.classList.add("image"),s.src=M,o.src=N,o.setAttribute("id",e),o.addEventListener("click",(function(){ee=this.id,ae.style.display="block",se.style.display="block";let e=t.findIndex((e=>e.id===i.id));X.value=t[e].title,X.maxLength=35})),s.addEventListener("click",(function(){let e=t.findIndex((e=>e.id===i.id));1!==t.length&&t[V]!==t[e]||(h.textContent="");for(let n=0;n<t[e].tasks.length;n++){let i=document.getElementById(t[e].tasks[n].getTodoId());W.removeChild(i)}t[e].removeAllTasks(),p.removeChild(n),t.splice(e,1),localStorage.setItem("projects",JSON.stringify(t))}));let r=t.findIndex((e=>e.id===i.id));i.textContent=t[r].title,n.classList.add("projectDiv"),a.classList.add("icons"),a.appendChild(o),a.appendChild(s),n.appendChild(i),n.appendChild(a),p.appendChild(n)}se.textContent=["Edit Project"],oe.textContent=["Submit"],i.textContent=["Taskit"],o.textContent=["All"],o.setAttribute("style","cursor: pointer"),r.textContent=["Today"],r.setAttribute("style","cursor: pointer"),d.textContent=["Week"],d.setAttribute("style","cursor: pointer"),l.textContent=["Important"],l.setAttribute("style","cursor: pointer"),y.textContent=["Projects"],g.textContent=["+"],k.textContent=["Add New Project"],I.textContent=["Submit"],L.textContent=["X"],f.textContent=["add task"],o.addEventListener("click",(function(){h.textContent="All Tasks",h.classList.add("header");let e=W.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)for(let n=0;n<t[e].tasks.length;n++)document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid"})),r.addEventListener("click",(function(){h.textContent="Today's Tasks",h.classList.add("header");let e=W.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)for(let n=0;n<t[e].tasks.length;n++)t[e].tasks[n].dueDate===ie&&(document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid")})),d.addEventListener("click",(function(){h.textContent="Tasks Due in a Week",h.classList.add("header");let e=W.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)for(let n=0;n<t[e].tasks.length;n++)ne.split("-")[2]-t[e].tasks[n].dueDate.split("-")[2]<=7&&ne.split("-")[2]-t[e].tasks[n].dueDate.split("-")[2]>=0&&(document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid")})),l.addEventListener("click",(function(){h.textContent="Important Tasks",h.classList.add("header");let e=W.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)for(let n=0;n<t[e].tasks.length;n++)"High"===t[e].tasks[n].priority&&(document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid")})),g.addEventListener("click",(function(){x.style.display="block",k.style.display="block"})),L.addEventListener("click",(function(){x.style.display="none",k.style.display="none",inputid.value=""})),I.addEventListener("click",(function(){""===inputid.value?(inputid.value="untitled",ue(),re(),x.style.display="none",k.style.display="none",inputid.value=""):""!=inputid.value&&(ue(),re(),x.style.display="none",k.style.display="none",inputid.value="")})),oe.addEventListener("click",(function(){let e=t.findIndex((e=>e.id===ee));t[e].changeProjectTitle(X.value),localStorage.setItem("projects",JSON.stringify(t));let n=ee;document.getElementById(n).textContent=t[e].title,t[e]===t[V]&&(h.textContent=t[e].title),ae.style.display="none",se.style.display="none"})),f.addEventListener("click",(function(){j.value="",U.value="",Y.value=te,Q.style.display="none",b.style.display="block",w.style.display="block",document.getElementById("low").checked=!0}));let de,le,ce=L.cloneNode(!0),pe=L.cloneNode(!0);function ue(){let n=new z(inputid.value);t.push(n),e=n.getId(),localStorage.setItem("projects",JSON.stringify(t)),console.log(t)}pe.addEventListener("click",(function(){ae.style.display="none",se.style.display="none"})),ce.addEventListener("click",(function(){(_.style.display="none")&&(_.style.display="block"),j.value="",U.value="",b.style.display="none",w.style.display="none"})),_.addEventListener("click",(function(e){const n=document.querySelector('input[name="priority"]:checked');let i=new O(j.value,U.value,n.value,Y.value);de=i.getTodoId(),t[V].addTask(i),localStorage.setItem("projects",JSON.stringify(t)),function(){const e=document.createElement("div"),n=document.createElement("div"),i=document.createElement("span"),a=document.createElement("span"),s=document.createElement("input"),o=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div");s.setAttribute("type","checkbox"),s.classList.add("checkBox"),e.classList.add("taskBoxesGrid"),n.classList.add("taskArea");const l=document.createElement("div"),c=new Image,p=new Image,u=new Image;l.classList.add("taskIcons"),u.src=D,p.src=N,c.src=M,u.classList.add("myExpand"),p.classList.add("myEdit"),c.classList.add("myTrash"),u.classList.add("cursor"),p.classList.add("cursor"),c.classList.add("cursor"),e.setAttribute("id",de),i.setAttribute("data-id","title"),a.setAttribute("data-id","date"),o.classList.add("taskBoxExpand"),r.classList.add("taskBoxDescription"),r.setAttribute("data-id","description"),d.setAttribute("data-id","priority"),d.classList.add("taskBoxPriority"),e.setAttribute("data-id","myTaskBox"),e.addEventListener("click",(function(){le=this.id})),u.addEventListener("click",(function(){"none"===o.style.display?o.style.display="block":o.style.display="none"})),c.addEventListener("click",(function(){let n=t[V].tasks.findIndex((t=>t.id===e.id));t[V].removeTask(n),localStorage.setItem("projects",JSON.stringify(t)),W.removeChild(e)})),p.addEventListener("click",(function(){"Medium"===t[V].tasks[m].priority?document.getElementById("medium").checked=!0:"High"===t[V].tasks[m].priority?document.getElementById("high").checked=!0:"Low"===t[V].tasks[m].priority&&(document.getElementById("low").checked=!0),j.value=t[V].tasks[m].title,U.value=t[V].tasks[m].description,Y.value=t[V].tasks[m].dueDate,b.style.display="block",w.style.display="block",_.style.display="none",Q.style.display="block"}));let m=t[V].tasks.findIndex((t=>t.id===e.id));i.textContent=t[V].tasks[m].title,a.textContent=t[V].tasks[m].dueDate,r.textContent=t[V].tasks[m].description,d.textContent="Priority: "+t[V].tasks[m].priority,e.appendChild(s),n.appendChild(i),n.appendChild(a),e.appendChild(n),e.appendChild(l),l.appendChild(u),l.appendChild(p),l.appendChild(c),o.appendChild(r),o.appendChild(d),e.appendChild(o),W.appendChild(e),o.style.display="none",t[V].tasks[m].status="unchecked",s.addEventListener("change",(function(){this.checked?(t[V].tasks[m].status="checked",i.style.setProperty("text-decoration","line-through"),a.style.setProperty("text-decoration","line-through"),r.style.setProperty("text-decoration","line-through"),d.style.setProperty("text-decoration","line-through"),localStorage.setItem("projects",JSON.stringify(t))):(t[V].tasks[m].status="unchecked",i.style.setProperty("text-decoration","none"),a.style.setProperty("text-decoration","none"),r.style.setProperty("text-decoration","none"),d.style.setProperty("text-decoration","none"),localStorage.setItem("projects",JSON.stringify(t)))}))}(),T.reset(),e.preventDefault(),b.style.display="none",w.style.display="none",Y.value=te})),Q.addEventListener("click",(function(e){const n=document.querySelector('input[name="priority"]:checked');let i=t[V].tasks.findIndex((e=>e.id===le));t[V].tasks[i].changeTitle(j.value),t[V].tasks[i].changeDescription(U.value),t[V].tasks[i].changeDueDate(Y.value),t[V].tasks[i].changePriority(n.value),localStorage.setItem("projects",JSON.stringify(t));let a=document.getElementById(le).querySelector('[data-id="title"]'),s=document.getElementById(le).querySelector('[data-id="date"]'),o=document.getElementById(le).querySelector('[data-id="description"]'),r=document.getElementById(le).querySelector('[data-id="priority"]');a.textContent=t[V].tasks[i].title,s.textContent=t[V].tasks[i].dueDate,o.textContent=t[V].tasks[i].description,r.textContent="Priority: "+t[V].tasks[i].priority,e.preventDefault(),b.style.display="none",w.style.display="none",_.style.display="block",Q.style.display="none"})),localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([]));let me=JSON.parse(localStorage.getItem("projects")||"[]"),ye=JSON.parse(localStorage.getItem("projects",me[0]));return function(){for(let n=0;n<ye.length;n++){let i=new z(ye[n].title);e=i.getId(),t.push(i),re();for(let e=0;e<ye[n].tasks.length;e++){let i=new O(ye[n].tasks[e].title,ye[n].tasks[e].description,ye[n].tasks[e].priority,ye[n].tasks[e].dueDate,ye[n].tasks[e].status);de=i.getTodoId(),t[n].addTask(i);const a=document.createElement("div"),s=document.createElement("div"),o=document.createElement("span"),r=document.createElement("span"),d=document.createElement("input"),l=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div");d.type="checkbox",d.classList.add("checkBox"),a.classList.add("taskBoxesGrid"),s.classList.add("taskArea");const u=document.createElement("div"),m=new Image,y=new Image,g=new Image;u.classList.add("taskIcons"),g.src=D,y.src=N,m.src=M,g.setAttribute("style","height: 2.8vw"),y.setAttribute("style","height: 2.6vw"),m.setAttribute("style","height: 2.9vw"),g.classList.add("cursor"),y.classList.add("cursor"),m.classList.add("cursor"),a.setAttribute("id",de),o.setAttribute("data-id","title"),r.setAttribute("data-id","date"),l.classList.add("taskBoxExpand"),c.classList.add("taskBoxDescription"),c.setAttribute("data-id","description"),p.setAttribute("data-id","priority"),p.classList.add("taskBoxPriority"),a.setAttribute("data-id","myTaskBox"),a.addEventListener("click",(function(){le=this.id})),g.addEventListener("click",(function(){"none"===l.style.display?l.style.display="block":l.style.display="none"})),m.addEventListener("click",(function(){let e=t[n].tasks.findIndex((e=>e.id===a.id));t[n].removeTask(e),localStorage.setItem("projects",JSON.stringify(t)),W.removeChild(a)})),y.addEventListener("click",(function(){"Medium"===t[n].tasks[e].priority?document.getElementById("medium").checked=!0:"High"===t[n].tasks[e].priority?document.getElementById("high").checked=!0:"Low"===t[n].tasks[e].priority&&(document.getElementById("low").checked=!0),j.value=t[n].tasks[e].title,U.value=t[n].tasks[e].description,Y.value=t[n].tasks[e].dueDate,b.style.display="block",w.style.display="block",_.style.display="none",Q.style.display="block"})),d.addEventListener("change",(function(){this.checked?(t[n].tasks[e].status="checked",o.style.setProperty("text-decoration","line-through"),r.style.setProperty("text-decoration","line-through"),c.style.setProperty("text-decoration","line-through"),p.style.setProperty("text-decoration","line-through"),localStorage.setItem("projects",JSON.stringify(t))):(t[n].tasks[e].status="unchecked",o.style.setProperty("text-decoration","none"),r.style.setProperty("text-decoration","none"),c.style.setProperty("text-decoration","none"),p.style.setProperty("text-decoration","none"),localStorage.setItem("projects",JSON.stringify(t)))})),o.textContent=t[n].tasks[e].title,r.textContent=t[n].tasks[e].dueDate,c.textContent=t[n].tasks[e].description,p.textContent="Priority: "+t[n].tasks[e].priority,a.appendChild(d),s.appendChild(o),s.appendChild(r),a.appendChild(s),a.appendChild(u),u.appendChild(g),u.appendChild(y),u.appendChild(m),l.appendChild(c),l.appendChild(p),a.appendChild(l),W.appendChild(a),a.style.display="none",l.style.display="none","checked"===t[n].tasks[e].status?(d.setAttribute("checked",!0),o.style.setProperty("text-decoration","line-through"),r.style.setProperty("text-decoration","line-through"),c.style.setProperty("text-decoration","line-through"),p.style.setProperty("text-decoration","line-through")):"unchecked"===t[n].tasks[e].status&&(d.removeAttribute("checked"),o.style.setProperty("text-decoration","none"),r.style.setProperty("text-decoration","none"),c.style.setProperty("text-decoration","none"),p.style.setProperty("text-decoration","none")),"Medium"===t[n].tasks[e].priority?document.getElementById("medium").checked=!0:"High"===t[n].tasks[e].priority?document.getElementById("high").checked=!0:document.getElementById("low").checked=!0}}}(),console.log(t),s.appendChild(o),s.appendChild(r),s.appendChild(d),s.appendChild(l),a.appendChild(s),a.appendChild(v),v.appendChild(u),u.appendChild(c),u.appendChild(p),c.appendChild(y),c.appendChild(g),m.appendChild(h),ae.appendChild(se),y.appendChild(ae),se.appendChild(pe),K.appendChild(X),K.appendChild(oe),se.appendChild(K),y.appendChild(x),x.appendChild(k),v.appendChild(m),E.appendChild(C),E.appendChild(I),k.appendChild(L),k.appendChild(E),b.appendChild(w),m.appendChild(b),T.appendChild(S),T.appendChild(j),T.appendChild(A),T.appendChild(U),J.appendChild(H),J.appendChild(q),J.appendChild(R),J.appendChild(F),J.appendChild($),J.appendChild(Z),T.appendChild(J),T.appendChild(G),T.appendChild(_),T.appendChild(Q),G.appendChild(Y),B.appendChild(ce),B.appendChild(T),w.appendChild(B),m.appendChild(W),n.appendChild(i),n.appendChild(a),n}())})()})();