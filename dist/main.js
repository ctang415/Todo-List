(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(81),s=n.n(i),a=n(645),o=n.n(a),d=n(667),r=n.n(d),l=new URL(n(239),n.b),c=o()(s());c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);"]);var p=r()(l);c.push([e.id,"html {\n    background: url("+p+");\n    background-size: cover;\n}\n\n.flex {\n    display: flex;\n    font-family: 'Bebas Neue';\n    font-size: 5.5vw;\n    color: teal;\n    letter-spacing: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid {\n    margin-left: 100px;\n    margin-right: 100px;\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n    background-color: white;\n    border-radius: 20px;\n    padding: 8px;\n    \n}\n.top {\n    display: flex;\n    justify-content: space-evenly;\n    grid-row:1;\n    border-bottom: solid grey;\n}\n\nli {\n    font-family: 'Bebas Neue';\n    font-size: 1.5vw;\n    list-style-type: none;\n}\n\n\n.bottom {\n    padding: 7px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 1;\n    border-right: solid grey;\n    overflow:auto;\n    height: 540px;\n}\n\n.rightSide {\n    display: flex;\n    flex-direction: column;\n    overflow:auto;\n    height: 540px;\n}\n\n.projectplus {\n    display: flex;\n    flex-direction: row;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 2vw;\n    grid-column: 1;\n    color: teal;\n    padding-left: 7px;\n    cursor: pointer;\n}\n\n\n.tasks {\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 2;\n    text-align: center;\n}\n\n\n\n.modal {\n    display: none; \n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4); \n}\n\n.modal-content {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 28%;\n    height: 25%;\n    font-size: 2.5vw;\n  }\n\n  .modalTask {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 40%;\n    height: 45%;\n    font-size: 2.5vw;\n\n  }\n\n  .buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    gap: 21px;\n  }\n \n  .close {\n    color: black;\n    font-weight: lighter;\n    float: right;\n    cursor: pointer;\n  }\n\n  .add {\n    border-radius: 7px;\n    padding: 10px;\n    width: 100px;\n  }\n\n.inputTitle {\n    padding: 15px;\n    width: 200px;\n}\n\n\n.projectDiv {\n    font-size: 1.5vw;\n    background-color: rgb(245, 238, 228);\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.projectDivArea {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow:hidden;\n    cursor: pointer;\n}\n\n.stretch {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 90%;\n}\n\n.stretchTask {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.image {\n    height: 1.5vw;\n}\n\n.imageOther {\n    height:1.7vw;\n}\n\n.icons {\n    display: flex;\n    align-self: center;\n    cursor:pointer;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    font-family: 'Bebas Neue';\n    font-size: 3vw;\n}\n\n.addTask {\n    border-radius: 10px;\n    border-color: silver;\n    border-style: solid;\n    background-color: white;\n    width: 10%;\n    font-family: 'Bebas Neue';\n    cursor: pointer;\n    font-size: 1vw;\n}\n\n#form {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 8px;\n    font-size: 1.5vw;\n    padding-left: 15px;\n}\n\n.taskInputs {\n    width: 100%;\n    height: 1.8vw;\n}\n\n.taskLabels {\n    font-size: 2vw;\n}\n\n#submitButton, #submitButtonTwo {\n    border-radius: 7px;\n    padding: 10px;\n    width: 100px;\n    margin-top: 10px;\n}\n\n\n.taskBoxesGrid {\n    display: grid;\n    grid-template-columns: 5% 90% 5%;\n    grid-template-rows: minmax(1fr 1fr);\n    margin-left: 10px;\n    background-color:rgb(228, 241, 245); \n    font-size: 2.0vw;\n    padding: 15px;\n    border-radius: 5px;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    row-gap: 15px;\n}\n\n\n.taskBoxDescription {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxPriority {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxExpand {\n    border-top: solid black;\n    grid-row: 2;\n    grid-column: 2;\n    font-family: \"Bebas Neue\";\n    overflow:scroll;\n    display: flex;\n    height: 80px;\n    padding-top: 5px;\n}\n\n.taskArea {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Bebas Neue';\n}\n\n.taskIcons {\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n    justify-content: flex-end;\n    gap: 3px;\n    margin-right: 5px;\n}\n\n.cursor {\n    cursor: pointer;\n}\n\n.checkBox {\n    height: 1.5vw;\n}\n\ninput[type='radio'] { \n    transform: scale(1.2); \n}",""]);const u=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var d=0;d<this.length;d++){var r=this[d][0];null!=r&&(o[r]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);i&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},o=[],d=0;d<e.length;d++){var r=e[d],l=i.base?r[0]+i.base:r[0],c=a[l]||0,p="".concat(l," ").concat(c);a[l]=c+1;var u=n(p),y={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(y);else{var m=s(y,i);i.byIndex=d,t.splice(d,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var a=i(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var d=n(a[o]);t[d].references--}for(var r=i(e,s),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=r}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},239:(e,t,n)=>{e.exports=n.p+"c9ad707e7686c505849b.png"}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),s=n.n(i),a=n(569),o=n.n(a),d=n(565),r=n.n(d),l=n(216),c=n.n(l),p=n(589),u=n.n(p),y=n(426),m={};function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===g(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function v(e,t){for(var n=e<0?"-":"",i=Math.abs(e).toString();i.length<t;)i="0"+i;return n+i}m.styleTagTransform=u(),m.setAttributes=r(),m.insert=o().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=c(),t()(y.Z,m),y.Z&&y.Z.locals&&y.Z.locals;const k={y:function(e,t){var n=e.getUTCFullYear(),i=n>0?n:1-n;return v("yy"===t?i%100:i,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):v(n+1,2)},d:function(e,t){return v(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return v(e.getUTCHours()%12||12,t.length)},H:function(e,t){return v(e.getUTCHours(),t.length)},m:function(e,t){return v(e.getUTCMinutes(),t.length)},s:function(e,t){return v(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,i=e.getUTCMilliseconds();return v(Math.floor(i*Math.pow(10,n-3)),t.length)}};function x(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function C(e){return h(1,arguments),e instanceof Date||"object"===b(e)&&"[object Date]"===Object.prototype.toString.call(e)}function E(e){if(h(1,arguments),!C(e)&&"number"!=typeof e)return!1;var t=f(e);return!isNaN(Number(t))}function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function I(e,t){h(2,arguments);var n=f(e).getTime(),i=w(t);return new Date(n+i)}function L(e,t){h(2,arguments);var n=w(t);return I(e,-n)}var S=/(\w)\1*|''|'(''|[^'])+('|$)|./g,T=/^'([^]*?)'?$/,B=/''/g,j=/[a-zA-Z]/;function A(e,t){h(2,arguments);var n=f(e);if(!E(n))throw new RangeError("Invalid time value");var i=x(n),s=L(n,i),a=t.match(S);if(!a)return"";var o=a.map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return P(e);var n=k[t];if(n)return n(s,e);if(t.match(j))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return o}function P(e){var t=e.match(T);return t?t[1].replace(B,"'"):e}const N=n.p+"1c453583325d6688a794.png",D=n.p+"847d193a8b15949c2a80.png",M=n.p+"e0ab1035c5f2e8f9155d.png";class O{constructor(e){this.title=e,this.tasks=[],this.id="id"+Math.random().toString(16).slice(2)}addTask(e){return this.tasks.push(e)}removeTask(e){return this.tasks.splice(e,1)}removeAllTasks(){return this.tasks.splice(0,this.tasks.length)}getId(){return this.id}changeProjectTitle(e){return this.title=e}}class z{constructor(e,t,n,i,s){this.title=e,this.description=t,this.priority=n,this.dueDate=i,this.status=s,this.id="id"+Math.random().toString(16).slice(2)}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changeDueDate(e){return this.dueDate=e}changePriority(e){return this.priority=e}getTodoId(){return this.id}toggleCheck(e){return this.status}}document.getElementById("container").appendChild(function(){let e,t=[];const n=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),o=document.createElement("li"),d=document.createElement("li"),r=document.createElement("li"),l=document.createElement("li"),c=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),y=document.createElement("div"),m=document.createElement("div"),h=document.createElement("div"),g=document.createElement("div"),f=document.createElement("button"),v=document.createElement("div"),k=document.createElement("div"),x=document.createElement("div"),b=document.createElement("div"),C=document.createElement("div"),E=document.createElement("div"),w=document.createElement("input"),I=document.createElement("div"),L=document.createElement("span"),S=document.createElement("button"),T=document.createElement("div"),B=document.getElementById("form"),j=document.getElementById("labelTitle"),P=document.getElementById("title"),U=document.getElementById("labelNotes"),J=document.getElementById("description"),q=document.getElementById("labelPriority"),H=document.getElementById("lowLabel"),F=document.getElementById("low"),R=document.getElementById("mediumLabel"),Z=document.getElementById("medium"),$=document.getElementById("highLabel"),G=document.getElementById("high"),Y=document.getElementById("labelDate"),_=document.getElementById("date"),W=document.getElementById("submitButton"),Q=document.createElement("div"),X=document.getElementById("submitButtonTwo"),K=document.createElement("input"),V=document.createElement("div");let ee,te,ne=A(new Date,"yyyy-MM-dd"),ie=function(){let e=new Date;return e.setDate(e.getDate()+7),A(e,"yyyy-MM-dd")}();w.id="inputid",w.maxLength=35,_.value=ne;let se=ne;i.classList.add("flex"),s.classList.add("grid"),a.classList.add("top"),k.classList.add("bottom"),h.classList.add("projectplus"),u.classList.add("project"),y.classList.add("rightSide"),v.classList.add("tasks"),x.classList.add("modal"),b.classList.add("modal-content"),I.classList.add("buttons"),L.classList.add("close"),S.classList.add("add"),w.classList.add("inputTitle"),p.classList.add("stretch"),f.classList.add("addTask"),C.classList.add("modal"),E.classList.add("modalTask"),P.classList.add("taskInputs"),j.classList.add("taskLabels"),U.classList.add("taskLabels"),q.classList.add("taskLabels"),Y.classList.add("taskLabels"),J.classList.add("taskInputs"),c.setAttribute("style","display: flex"),Q.classList.add("stretchTask"),V.classList.add("buttons"),K.classList.add("inputTitle");const ae=x.cloneNode(!0),oe=b.cloneNode(!0),de=S.cloneNode(!0);function re(){const n=document.createElement("div"),i=document.createElement("div");i.classList.add("projectDivArea"),i.setAttribute("id",e),g.classList.add("header"),i.addEventListener("click",(function(){let e=t.findIndex((e=>e.id===i.id));g.textContent=t[e].title,g.appendChild(f),ee=e;let n=Q.querySelectorAll('[data-id="myTaskBox"]');for(let e=0;e<n.length;e++)n[e].style.display="none";for(let n=0;n<t[e].tasks.length;n++)document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid"}));const s=document.createElement("div"),a=new Image,o=new Image;a.classList.add("imageOther"),o.classList.add("image"),a.src=M,o.src=D,o.setAttribute("id",e),o.addEventListener("click",(function(){te=this.id,ae.style.display="block",oe.style.display="block";let e=t.findIndex((e=>e.id===i.id));K.value=t[e].title,K.maxLength=35})),a.addEventListener("click",(function(){let e=t.findIndex((e=>e.id===i.id));1!==t.length&&t[ee]!==t[e]||(g.textContent="");for(let n=0;n<t[e].tasks.length;n++){let i=document.getElementById(t[e].tasks[n].getTodoId());Q.removeChild(i)}t[e].removeAllTasks(),p.removeChild(n),t.splice(e,1),localStorage.setItem("projects",JSON.stringify(t))}));let d=t.findIndex((e=>e.id===i.id));i.textContent=t[d].title,n.classList.add("projectDiv"),s.classList.add("icons"),s.appendChild(o),s.appendChild(a),n.appendChild(i),n.appendChild(s),p.appendChild(n)}oe.textContent=["Edit Project"],de.textContent=["Submit"],i.textContent=["Taskit"],o.textContent=["All"],o.setAttribute("style","cursor: pointer"),d.textContent=["Today"],d.setAttribute("style","cursor: pointer"),r.textContent=["Week"],r.setAttribute("style","cursor: pointer"),l.textContent=["Important"],l.setAttribute("style","cursor: pointer"),m.textContent=["Projects"],h.textContent=["+"],b.textContent=["Add New Project"],S.textContent=["Submit"],L.textContent=["X"],f.textContent=["add task"],o.addEventListener("click",(function(){g.textContent="All Tasks",g.classList.add("header");let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)for(let n=0;n<t[e].tasks.length;n++)document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid"})),d.addEventListener("click",(function(){g.textContent="Today's Tasks",g.classList.add("header");let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)for(let n=0;n<t[e].tasks.length;n++)t[e].tasks[n].dueDate===se&&(document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid")})),r.addEventListener("click",(function(){g.textContent="Tasks Due in a Week",g.classList.add("header");let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)for(let n=0;n<t[e].tasks.length;n++)ie.split("-")[2]-t[e].tasks[n].dueDate.split("-")[2]<=7&&ie.split("-")[2]-t[e].tasks[n].dueDate.split("-")[2]>=0&&(document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid")})),l.addEventListener("click",(function(){g.textContent="Important Tasks",g.classList.add("header");let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<t.length;e++)for(let n=0;n<t[e].tasks.length;n++)"High"===t[e].tasks[n].priority&&(document.getElementById(t[e].tasks[n].getTodoId()).style.display="grid")})),h.addEventListener("click",(function(){x.style.display="block",b.style.display="block"})),L.addEventListener("click",(function(){x.style.display="none",b.style.display="none",inputid.value=""})),S.addEventListener("click",(function(){""===inputid.value?(inputid.value="untitled",ye(),re(),x.style.display="none",b.style.display="none",inputid.value=""):""!=inputid.value&&(ye(),re(),x.style.display="none",b.style.display="none",inputid.value="")})),de.addEventListener("click",(function(){let e=t.findIndex((e=>e.id===te));t[e].changeProjectTitle(K.value),localStorage.setItem("projects",JSON.stringify(t));let n=te;document.getElementById(n).textContent=t[e].title,t[e]===t[ee]&&(g.textContent=t[e].title),ae.style.display="none",oe.style.display="none"})),f.addEventListener("click",(function(){P.value="",J.value="",_.value=ne,X.style.display="none",C.style.display="block",E.style.display="block",document.getElementById("low").checked=!0}));let le,ce,pe=L.cloneNode(!0),ue=L.cloneNode(!0);function ye(){let n=new O(inputid.value);t.push(n),e=n.getId(),me.push(n),localStorage.setItem("projects",JSON.stringify(me)),console.log(t)}ue.addEventListener("click",(function(){ae.style.display="none",oe.style.display="none"})),pe.addEventListener("click",(function(){(W.style.display="none")&&(W.style.display="block"),P.value="",J.value="",C.style.display="none",E.style.display="none"})),W.addEventListener("click",(function(e){const n=document.querySelector('input[name="priority"]:checked');let i=new z(P.value,J.value,n.value,_.value);le=i.getTodoId(),t[ee].addTask(i),localStorage.setItem("projects",JSON.stringify(t)),function(){const e=document.createElement("div"),n=document.createElement("div"),i=document.createElement("span"),s=document.createElement("span"),a=document.createElement("input"),o=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div");a.setAttribute("type","checkbox"),a.classList.add("checkBox"),e.classList.add("taskBoxesGrid"),n.classList.add("taskArea");const l=document.createElement("div"),c=new Image,p=new Image,u=new Image;l.classList.add("taskIcons"),u.src=N,p.src=D,c.src=M,u.setAttribute("style","height: 2.8vw"),p.setAttribute("style","height: 2.6vw"),c.setAttribute("style","height: 2.9vw"),u.classList.add("cursor"),p.classList.add("cursor"),c.classList.add("cursor"),e.setAttribute("id",le),i.setAttribute("data-id","title"),s.setAttribute("data-id","date"),o.classList.add("taskBoxExpand"),d.classList.add("taskBoxDescription"),d.setAttribute("data-id","description"),r.setAttribute("data-id","priority"),r.classList.add("taskBoxPriority"),e.setAttribute("data-id","myTaskBox"),e.addEventListener("click",(function(){ce=this.id})),u.addEventListener("click",(function(){"none"===o.style.display?o.style.display="block":o.style.display="none"})),c.addEventListener("click",(function(){let n=t[ee].tasks.findIndex((t=>t.id===e.id));t[ee].removeTask(n),localStorage.setItem("projects",JSON.stringify(t)),Q.removeChild(e)})),p.addEventListener("click",(function(){"Medium"===t[ee].tasks[y].priority?document.getElementById("medium").checked=!0:"High"===t[ee].tasks[y].priority?document.getElementById("high").checked=!0:"Low"===t[ee].tasks[y].priority&&(document.getElementById("low").checked=!0),P.value=t[ee].tasks[y].title,J.value=t[ee].tasks[y].description,_.value=t[ee].tasks[y].dueDate,C.style.display="block",E.style.display="block",W.style.display="none",X.style.display="block"}));let y=t[ee].tasks.findIndex((t=>t.id===e.id));i.textContent=t[ee].tasks[y].title,s.textContent=t[ee].tasks[y].dueDate,d.textContent=t[ee].tasks[y].description,r.textContent="Priority: "+t[ee].tasks[y].priority,e.appendChild(a),n.appendChild(i),n.appendChild(s),e.appendChild(n),e.appendChild(l),l.appendChild(u),l.appendChild(p),l.appendChild(c),o.appendChild(d),o.appendChild(r),e.appendChild(o),Q.appendChild(e),o.style.display="none",t[ee].tasks[y].status="unchecked",a.addEventListener("change",(function(){this.checked?(t[ee].tasks[y].status="checked",i.style.setProperty("text-decoration","line-through"),s.style.setProperty("text-decoration","line-through"),d.style.setProperty("text-decoration","line-through"),r.style.setProperty("text-decoration","line-through"),localStorage.setItem("projects",JSON.stringify(t))):(t[ee].tasks[y].status="unchecked",i.style.setProperty("text-decoration","none"),s.style.setProperty("text-decoration","none"),d.style.setProperty("text-decoration","none"),r.style.setProperty("text-decoration","none"),localStorage.setItem("projects",JSON.stringify(t)))}))}(),B.reset(),e.preventDefault(),C.style.display="none",E.style.display="none",_.value=ne})),X.addEventListener("click",(function(e){const n=document.querySelector('input[name="priority"]:checked');let i=t[ee].tasks.findIndex((e=>e.id===ce));t[ee].tasks[i].changeTitle(P.value),t[ee].tasks[i].changeDescription(J.value),t[ee].tasks[i].changeDueDate(_.value),t[ee].tasks[i].changePriority(n.value),localStorage.setItem("projects",JSON.stringify(t));let s=document.getElementById(ce).querySelector('[data-id="title"]'),a=document.getElementById(ce).querySelector('[data-id="date"]'),o=document.getElementById(ce).querySelector('[data-id="description"]'),d=document.getElementById(ce).querySelector('[data-id="priority"]');s.textContent=t[ee].tasks[i].title,a.textContent=t[ee].tasks[i].dueDate,o.textContent=t[ee].tasks[i].description,d.textContent="Priority: "+t[ee].tasks[i].priority,e.preventDefault(),C.style.display="none",E.style.display="none",W.style.display="block",X.style.display="none"})),localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([]));let me=JSON.parse(localStorage.getItem("projects")||"[]"),he=JSON.parse(localStorage.getItem("projects",me[0]));return function(){for(let n=0;n<he.length;n++){let i=new O(he[n].title);e=i.getId(),t.push(i),re();for(let e=0;e<he[n].tasks.length;e++){let i=new z(he[n].tasks[e].title,he[n].tasks[e].description,he[n].tasks[e].priority,he[n].tasks[e].dueDate,he[n].tasks[e].status);le=i.getTodoId(),t[n].addTask(i);const s=document.createElement("div"),a=document.createElement("div"),o=document.createElement("span"),d=document.createElement("span"),r=document.createElement("input"),l=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div");r.type="checkbox",r.classList.add("checkBox"),s.classList.add("taskBoxesGrid"),a.classList.add("taskArea");const u=document.createElement("div"),y=new Image,m=new Image,h=new Image;u.classList.add("taskIcons"),h.src=N,m.src=D,y.src=M,h.setAttribute("style","height: 2.8vw"),m.setAttribute("style","height: 2.6vw"),y.setAttribute("style","height: 2.9vw"),h.classList.add("cursor"),m.classList.add("cursor"),y.classList.add("cursor"),s.setAttribute("id",le),o.setAttribute("data-id","title"),d.setAttribute("data-id","date"),l.classList.add("taskBoxExpand"),c.classList.add("taskBoxDescription"),c.setAttribute("data-id","description"),p.setAttribute("data-id","priority"),p.classList.add("taskBoxPriority"),s.setAttribute("data-id","myTaskBox"),s.addEventListener("click",(function(){ce=this.id})),h.addEventListener("click",(function(){"none"===l.style.display?l.style.display="block":l.style.display="none"})),y.addEventListener("click",(function(){let e=t[n].tasks.findIndex((e=>e.id===s.id));t[n].removeTask(e),Q.removeChild(s),localStorage.setItem("projects",JSON.stringify(t))})),m.addEventListener("click",(function(){"Medium"===t[n].tasks[e].priority?document.getElementById("medium").checked=!0:"High"===t[n].tasks[e].priority?document.getElementById("high").checked=!0:"Low"===t[n].tasks[e].priority&&(document.getElementById("low").checked=!0),P.value=t[n].tasks[e].title,J.value=t[n].tasks[e].description,_.value=t[n].tasks[e].dueDate,C.style.display="block",E.style.display="block",W.style.display="none",X.style.display="block"})),r.addEventListener("change",(function(){this.checked?(t[n].tasks[e].status="checked",o.style.setProperty("text-decoration","line-through"),d.style.setProperty("text-decoration","line-through"),c.style.setProperty("text-decoration","line-through"),p.style.setProperty("text-decoration","line-through"),localStorage.setItem("projects",JSON.stringify(t))):(t[n].tasks[e].status="unchecked",o.style.setProperty("text-decoration","none"),d.style.setProperty("text-decoration","none"),c.style.setProperty("text-decoration","none"),p.style.setProperty("text-decoration","none"),localStorage.setItem("projects",JSON.stringify(t)))})),o.textContent=t[n].tasks[e].title,d.textContent=t[n].tasks[e].dueDate,c.textContent=t[n].tasks[e].description,p.textContent="Priority: "+t[n].tasks[e].priority,s.appendChild(r),a.appendChild(o),a.appendChild(d),s.appendChild(a),s.appendChild(u),u.appendChild(h),u.appendChild(m),u.appendChild(y),l.appendChild(c),l.appendChild(p),s.appendChild(l),Q.appendChild(s),s.style.display="none",l.style.display="none","checked"===t[n].tasks[e].status?(r.setAttribute("checked",!0),o.style.setProperty("text-decoration","line-through"),d.style.setProperty("text-decoration","line-through"),c.style.setProperty("text-decoration","line-through"),p.style.setProperty("text-decoration","line-through")):"unchecked"===t[n].tasks[e].status&&(r.removeAttribute("checked"),o.style.setProperty("text-decoration","none"),d.style.setProperty("text-decoration","none"),c.style.setProperty("text-decoration","none"),p.style.setProperty("text-decoration","none")),"Medium"===t[n].tasks[e].priority?document.getElementById("medium").checked=!0:"High"===t[n].tasks[e].priority?document.getElementById("high").checked=!0:document.getElementById("low").checked=!0}}}(),console.log(t),a.appendChild(o),a.appendChild(d),a.appendChild(r),a.appendChild(l),s.appendChild(a),s.appendChild(k),k.appendChild(u),u.appendChild(c),u.appendChild(p),c.appendChild(m),c.appendChild(h),y.appendChild(g),ae.appendChild(oe),m.appendChild(ae),oe.appendChild(ue),V.appendChild(K),V.appendChild(de),oe.appendChild(V),m.appendChild(x),x.appendChild(b),k.appendChild(y),y.appendChild(v),I.appendChild(w),I.appendChild(S),b.appendChild(L),b.appendChild(I),C.appendChild(E),y.appendChild(C),B.appendChild(j),B.appendChild(P),B.appendChild(U),B.appendChild(J),q.appendChild(F),q.appendChild(H),q.appendChild(Z),q.appendChild(R),q.appendChild(G),q.appendChild($),B.appendChild(q),B.appendChild(Y),B.appendChild(W),B.appendChild(X),Y.appendChild(_),T.appendChild(pe),T.appendChild(B),E.appendChild(T),y.appendChild(Q),n.appendChild(i),n.appendChild(s),n}())})()})();