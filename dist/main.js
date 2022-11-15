(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(81),a=n.n(i),o=n(645),s=n.n(o),d=n(667),r=n.n(d),l=new URL(n(239),n.b),c=s()(a());c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);"]);var p=r()(l);c.push([e.id,"html {\n    background: url("+p+");\n    background-size: cover;\n}\n\n.flex {\n    display: flex;\n    font-family: 'Bebas Neue';\n    font-size: 5.5vw;\n    color: teal;\n    letter-spacing: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid {\n    margin-left: 100px;\n    margin-right: 100px;\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n    background-color: white;\n    border-radius: 20px;\n    padding: 8px;\n    \n}\n.top {\n    display: flex;\n    justify-content: space-evenly;\n    grid-row:1;\n    border-bottom: solid grey;\n}\n\nli {\n    font-family: 'Bebas Neue';\n    font-size: 1.5vw;\n    list-style-type: none;\n}\n\n\n.bottom {\n    padding: 7px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 1;\n    border-right: solid grey;\n    overflow:auto;\n    height: 540px;\n}\n\n.rightSide {\n    display: flex;\n    flex-direction: column;\n    overflow:auto;\n    height: 540px;\n}\n\n.projectplus {\n    display: flex;\n    flex-direction: row;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 2vw;\n    grid-column: 1;\n    color: teal;\n    padding-left: 7px;\n    cursor: pointer;\n}\n\n\n.tasks {\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 2;\n    text-align: center;\n}\n\n\n\n.modal {\n    display: none; \n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4); \n}\n\n.modal-content {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 28%;\n    height: 25%;\n    font-size: 2.5vw;\n  }\n\n  .modalTask {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 40%;\n    height: 45%;\n    font-size: 2.5vw;\n\n  }\n\n  .buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    gap: 21px;\n  }\n \n  .close {\n    color: black;\n    font-weight: lighter;\n    float: right;\n    cursor: pointer;\n  }\n\n  .add {\n    border-radius: 7px;\n    padding: 10px;\n    width: 100px;\n  }\n\n.inputTitle {\n    padding: 15px;\n    width: 200px;\n}\n\n\n.projectDiv {\n    font-size: 1.5vw;\n    background-color: rgb(245, 238, 228);\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.projectDivArea {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow:hidden;\n    cursor: pointer;\n}\n\n.stretch {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 90%;\n}\n\n.stretchTask {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.image {\n    height: 1.5vw;\n}\n\n.imageOther {\n    height:1.7vw;\n}\n\n.icons {\n    display: flex;\n    align-self: center;\n    cursor:pointer;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    font-family: 'Bebas Neue';\n    font-size: 3vw;\n}\n\n.addTask {\n    border-radius: 10px;\n    border-color: silver;\n    border-style: solid;\n    background-color: white;\n    width: 10%;\n    font-family: 'Bebas Neue';\n    cursor: pointer;\n    font-size: 1vw;\n}\n\n#form {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 8px;\n    font-size: 1.5vw;\n    padding-left: 15px;\n}\n\n.taskInputs {\n    width: 100%;\n    height: 1.8vw;\n}\n\n.taskLabels {\n    font-size: 2vw;\n}\n\n#submitButton, #submitButtonTwo {\n    border-radius: 7px;\n    padding: 10px;\n    width: 100px;\n    margin-top: 10px;\n}\n\n\n.taskBoxesGrid {\n    display: grid;\n    grid-template-columns: 5% 90% 5%;\n    grid-template-rows: minmax(1fr 1fr);\n    margin-left: 10px;\n    background-color:rgb(228, 241, 245); \n    font-size: 2.0vw;\n    padding: 15px;\n    border-radius: 5px;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    row-gap: 15px;\n}\n\n\n.taskBoxDescription {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxPriority {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxExpand {\n    border-top: solid black;\n    grid-row: 2;\n    grid-column: 2;\n    font-family: \"Bebas Neue\";\n    overflow:scroll;\n    display: flex;\n    height: 80px;\n    padding-top: 5px;\n}\n\n.taskArea {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Bebas Neue';\n}\n\n.taskIcons {\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n    justify-content: flex-end;\n    gap: 3px;\n    margin-right: 5px;\n}\n\n.cursor {\n    cursor: pointer;\n}\n\n.checkBox {\n    height: 1.5vw;\n}\n\ninput[type='radio'] { \n    transform: scale(1.2); \n}",""]);const u=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var d=0;d<this.length;d++){var r=this[d][0];null!=r&&(s[r]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);i&&s[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},s=[],d=0;d<e.length;d++){var r=e[d],l=i.base?r[0]+i.base:r[0],c=o[l]||0,p="".concat(l," ").concat(c);o[l]=c+1;var u=n(p),m={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var y=a(m,i);i.byIndex=d,t.splice(d,0,{identifier:p,updater:y,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=i(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var d=n(o[s]);t[d].references--}for(var r=i(e,a),l=0;l<o.length;l++){var c=n(o[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=r}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},239:(e,t,n)=>{e.exports=n.p+"c9ad707e7686c505849b.png"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),a=n.n(i),o=n(569),s=n.n(o),d=n(565),r=n.n(d),l=n(216),c=n.n(l),p=n(589),u=n.n(p),m=n(426),y={};function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===h(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function v(e,t){for(var n=e<0?"-":"",i=Math.abs(e).toString();i.length<t;)i="0"+i;return n+i}y.styleTagTransform=u(),y.setAttributes=r(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=c(),t()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;const x={y:function(e,t){var n=e.getUTCFullYear(),i=n>0?n:1-n;return v("yy"===t?i%100:i,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):v(n+1,2)},d:function(e,t){return v(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return v(e.getUTCHours()%12||12,t.length)},H:function(e,t){return v(e.getUTCHours(),t.length)},m:function(e,t){return v(e.getUTCMinutes(),t.length)},s:function(e,t){return v(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,i=e.getUTCMilliseconds();return v(Math.floor(i*Math.pow(10,n-3)),t.length)}};function b(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function C(e){return f(1,arguments),e instanceof Date||"object"===k(e)&&"[object Date]"===Object.prototype.toString.call(e)}function E(e){if(f(1,arguments),!C(e)&&"number"!=typeof e)return!1;var t=g(e);return!isNaN(Number(t))}function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function L(e,t){f(2,arguments);var n=g(e).getTime(),i=w(t);return new Date(n+i)}function I(e,t){f(2,arguments);var n=w(t);return L(e,-n)}var T=/(\w)\1*|''|'(''|[^'])+('|$)|./g,S=/^'([^]*?)'?$/,B=/''/g,j=/[a-zA-Z]/;function D(e,t){f(2,arguments);var n=g(e);if(!E(n))throw new RangeError("Invalid time value");var i=b(n),a=I(n,i),o=t.match(T);if(!o)return"";var s=o.map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return A(e);var n=x[t];if(n)return n(a,e);if(t.match(j))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return s}function A(e){var t=e.match(S);return t?t[1].replace(B,"'"):e}const N=n.p+"1c453583325d6688a794.png",P=n.p+"847d193a8b15949c2a80.png",M=n.p+"e0ab1035c5f2e8f9155d.png";let z,U=[];document.getElementById("container").appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),a=document.createElement("li"),o=document.createElement("li"),s=document.createElement("li"),d=document.createElement("li"),r=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),y=document.createElement("div"),f=document.createElement("button"),h=document.createElement("div"),g=document.createElement("div"),v=document.createElement("div"),x=document.createElement("div"),b=document.createElement("div"),k=document.createElement("div"),C=document.createElement("input"),E=document.createElement("div"),w=document.createElement("span"),L=document.createElement("button"),I=document.createElement("div"),T=document.getElementById("form"),S=document.getElementById("labelTitle"),B=document.getElementById("title"),j=document.getElementById("labelNotes"),A=document.getElementById("description"),q=document.getElementById("labelPriority"),F=document.getElementById("lowLabel"),R=document.getElementById("low"),Z=document.getElementById("mediumLabel"),$=document.getElementById("medium"),J=document.getElementById("highLabel"),Y=document.getElementById("high"),_=document.getElementById("labelDate"),G=document.getElementById("date"),W=document.getElementById("submitButton"),Q=document.createElement("div"),X=document.getElementById("submitButtonTwo"),K=document.createElement("input"),V=document.createElement("div");let ee,te,ne,ie=D(new Date,"yyyy-MM-dd"),ae=function(){let e=new Date;return e.setDate(e.getDate()+7),D(e,"yyyy-MM-dd")}();C.id="inputid",C.maxLength=35,G.value=ie;let oe=ie;t.classList.add("flex"),n.classList.add("grid"),i.classList.add("top"),g.classList.add("bottom"),m.classList.add("projectplus"),c.classList.add("project"),p.classList.add("rightSide"),h.classList.add("tasks"),v.classList.add("modal"),x.classList.add("modal-content"),E.classList.add("buttons"),w.classList.add("close"),L.classList.add("add"),C.classList.add("inputTitle"),l.classList.add("stretch"),f.classList.add("addTask"),b.classList.add("modal"),k.classList.add("modalTask"),B.classList.add("taskInputs"),S.classList.add("taskLabels"),j.classList.add("taskLabels"),q.classList.add("taskLabels"),_.classList.add("taskLabels"),A.classList.add("taskInputs"),r.setAttribute("style","display: flex"),Q.classList.add("stretchTask"),V.classList.add("buttons"),K.classList.add("inputTitle");const se=v.cloneNode(!0),de=x.cloneNode(!0),re=L.cloneNode(!0);function le(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("projectDivArea"),t.setAttribute("id",z),y.classList.add("header"),t.addEventListener("click",(function(){let e=U.findIndex((e=>e.id===t.id));y.textContent=U[e].title,y.appendChild(f),ee=e;let n=Q.querySelectorAll('[data-id="myTaskBox"]');for(let e=0;e<n.length;e++)n[e].style.display="none";for(let t=0;t<U[e].tasks.length;t++)document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid"}));const n=document.createElement("div"),i=new Image,a=new Image;i.classList.add("imageOther"),a.classList.add("image"),i.src=M,a.src=P,a.setAttribute("id",z),te=U.findIndex((e=>e.id===t.id)),a.addEventListener("click",(function(){ne=this.id,se.style.display="block",de.style.display="block";let e=U.findIndex((e=>e.id===t.id));K.value=U[e].title,K.maxLength=35})),i.addEventListener("click",(function(){let n=U.findIndex((e=>e.id===t.id));y.textContent="";for(let e=0;e<U[n].tasks.length;e++){let t=document.getElementById(U[n].tasks[e].getTodoId());Q.removeChild(t)}U[n].removeAllTasks(),l.removeChild(e),U.splice(n,1)}));let o=U.findIndex((e=>e.id===t.id));t.textContent=U[o].title,e.classList.add("projectDiv"),n.classList.add("icons"),n.appendChild(a),n.appendChild(i),e.appendChild(t),e.appendChild(n),l.appendChild(e),console.log(U)}de.textContent=["Edit Project"],re.textContent=["Submit"],t.textContent=["Taskit"],a.textContent=["All"],a.setAttribute("style","cursor: pointer"),o.textContent=["Today"],o.setAttribute("style","cursor: pointer"),s.textContent=["Week"],s.setAttribute("style","cursor: pointer"),d.textContent=["Important"],d.setAttribute("style","cursor: pointer"),u.textContent=["Projects"],m.textContent=["+"],x.textContent=["Add New Project"],L.textContent=["Submit"],w.textContent=["X"],f.textContent=["add task"],a.addEventListener("click",(function(){y.textContent="All Tasks",y.classList.add("header");let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<U.length;e++)for(let t=0;t<U[e].tasks.length;t++)document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid"})),o.addEventListener("click",(function(){y.textContent="Today's Tasks",y.classList.add("header");let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<U.length;e++)for(let t=0;t<U[e].tasks.length;t++)U[e].tasks[t].dueDate===oe&&(document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid")})),s.addEventListener("click",(function(){y.textContent="Tasks Due in a Week",y.classList.add("header");let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<U.length;e++)for(let t=0;t<U[e].tasks.length;t++)ae.split("-")[2]-U[e].tasks[t].dueDate.split("-")[2]<=7&&ae.split("-")[2]-U[e].tasks[t].dueDate.split("-")[2]>=0&&(document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid")})),d.addEventListener("click",(function(){y.textContent="Important Tasks",y.classList.add("header");let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<U.length;e++)for(let t=0;t<U[e].tasks.length;t++)"High"===U[e].tasks[t].priority&&(document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid")})),m.addEventListener("click",(function(){v.style.display="block",x.style.display="block"})),w.addEventListener("click",(function(){v.style.display="none",x.style.display="none",inputid.value=""})),L.addEventListener("click",(function(){""===inputid.value?(inputid.value="untitled",H(),le(),v.style.display="none",x.style.display="none",inputid.value=""):""!=inputid.value&&(console.log(U),H(),le(),v.style.display="none",x.style.display="none",inputid.value="")})),re.addEventListener("click",(function(){U[te].changeProjectTitle(K.value),y.textContent=U[te].title,y.classList.add("header"),y.appendChild(f);let e=ne;document.getElementById(e).textContent=U[te].title,se.style.display="none",de.style.display="none"})),f.addEventListener("click",(function(){B.value="",A.value="",G.value=ie,X.style.display="none",b.style.display="block",k.style.display="block"}));let ce,pe,ue=w.cloneNode(!0),me=w.cloneNode(!0);return me.addEventListener("click",(function(){se.style.display="none",de.style.display="none"})),ue.addEventListener("click",(function(){(W.style.display="none")&&(W.style.display="block"),B.value="",A.value="",b.style.display="none",k.style.display="none"})),W.addEventListener("click",(function(e){const t=document.querySelector('input[name="priority"]:checked');let n=new O(B.value,A.value,t.value,G.value);ce=n.getTodoId(),U[ee].addTask(n),function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("span"),i=document.createElement("span"),a=document.createElement("input"),o=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div");a.setAttribute("type","checkbox"),a.classList.add("checkBox"),e.classList.add("taskBoxesGrid"),t.classList.add("taskArea");const r=document.createElement("div"),l=new Image,c=new Image,p=new Image;r.classList.add("taskIcons"),p.src=N,c.src=P,l.src=M,p.setAttribute("style","height: 2.8vw"),c.setAttribute("style","height: 2.6vw"),l.setAttribute("style","height: 2.9vw"),p.classList.add("cursor"),c.classList.add("cursor"),l.classList.add("cursor"),e.setAttribute("id",ce),n.setAttribute("data-id","title"),i.setAttribute("data-id","date"),o.classList.add("taskBoxExpand"),s.classList.add("taskBoxDescription"),s.setAttribute("data-id","description"),d.setAttribute("data-id","priority"),d.classList.add("taskBoxPriority"),e.setAttribute("data-id","myTaskBox"),e.addEventListener("click",(function(){pe=this.id})),p.addEventListener("click",(function(){"none"===o.style.display?o.style.display="block":o.style.display="none"})),l.addEventListener("click",(function(){let t=U[ee].tasks.findIndex((t=>t.id===e.id));U[ee].removeTask(t),Q.removeChild(e),console.log(U)})),c.addEventListener("click",(function(){const e=document.querySelector('input[name="priority"]:checked');B.value=U[ee].tasks[u].title,A.value=U[ee].tasks[u].description,e.value=U[ee].tasks[u].priority,G.value=U[ee].tasks[u].dueDate,b.style.display="block",k.style.display="block",W.style.display="none",X.style.display="block"}));let u=U[ee].tasks.findIndex((t=>t.id===e.id));n.textContent=U[ee].tasks[u].title,i.textContent=U[ee].tasks[u].dueDate,s.textContent=U[ee].tasks[u].description,d.textContent="Priority: "+U[ee].tasks[u].priority,e.appendChild(a),t.appendChild(n),t.appendChild(i),e.appendChild(t),e.appendChild(r),r.appendChild(p),r.appendChild(c),r.appendChild(l),o.appendChild(s),o.appendChild(d),e.appendChild(o),Q.appendChild(e),o.style.display="none",a.addEventListener("change",(function(){this.checked?(n.style.setProperty("text-decoration","line-through"),i.style.setProperty("text-decoration","line-through"),s.style.setProperty("text-decoration","line-through"),d.style.setProperty("text-decoration","line-through")):(n.style.setProperty("text-decoration","none"),i.style.setProperty("text-decoration","none"),s.style.setProperty("text-decoration","none"),d.style.setProperty("text-decoration","none"))}))}(),T.reset(),e.preventDefault(),b.style.display="none",k.style.display="none",G.value=ie})),X.addEventListener("click",(function(e){const t=document.querySelector('input[name="priority"]:checked');let n=U[ee].tasks.findIndex((e=>e.id===pe));U[ee].tasks[n].changeTitle(B.value),U[ee].tasks[n].changeDescription(A.value),U[ee].tasks[n].changeDueDate(G.value),U[ee].tasks[n].changePriority(t.value);let i=document.getElementById(pe).querySelector('[data-id="title"]'),a=document.getElementById(pe).querySelector('[data-id="date"]'),o=document.getElementById(pe).querySelector('[data-id="description"]'),s=document.getElementById(pe).querySelector('[data-id="priority"]');i.textContent=U[ee].tasks[n].title,a.textContent=U[ee].tasks[n].dueDate,o.textContent=U[ee].tasks[n].description,s.textContent="Priority: "+U[ee].tasks[n].priority,e.preventDefault(),b.style.display="none",k.style.display="none",W.style.display="block",X.style.display="none"})),i.appendChild(a),i.appendChild(o),i.appendChild(s),i.appendChild(d),n.appendChild(i),n.appendChild(g),g.appendChild(c),c.appendChild(r),c.appendChild(l),r.appendChild(u),r.appendChild(m),p.appendChild(y),se.appendChild(de),u.appendChild(se),de.appendChild(me),V.appendChild(K),V.appendChild(re),de.appendChild(V),u.appendChild(v),v.appendChild(x),g.appendChild(p),p.appendChild(h),E.appendChild(C),E.appendChild(L),x.appendChild(w),x.appendChild(E),b.appendChild(k),p.appendChild(b),T.appendChild(S),T.appendChild(B),T.appendChild(j),T.appendChild(A),q.appendChild(R),q.appendChild(F),q.appendChild($),q.appendChild(Z),q.appendChild(Y),q.appendChild(J),T.appendChild(q),T.appendChild(_),T.appendChild(W),T.appendChild(X),_.appendChild(G),I.appendChild(ue),I.appendChild(T),k.appendChild(I),p.appendChild(Q),e.appendChild(t),e.appendChild(n),console.log(U),e}());class q{constructor(e){this.title=e,this.tasks=[],this.id="id"+Math.random().toString(16).slice(2)}addTask(e){return this.tasks.push(e)}removeTask(e){return this.tasks.splice(e,1)}removeAllTasks(){return this.tasks.splice(0,this.tasks.length)}getId(){return this.id}changeProjectTitle(e){return this.title=e}}class O{constructor(e,t,n,i){this.title=e,this.description=t,this.priority=n,this.dueDate=i,this.id="id"+Math.random().toString(16).slice(2)}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changeDueDate(e){return this.dueDate=e}changePriority(e){return this.priority=e}getTodoId(){return this.id}}function H(){let e=new q(inputid.value);U.push(e),z=e.getId(),F.push(e),localStorage.setItem("projects",JSON.stringify(F))}localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([]));let F=JSON.parse(localStorage.getItem("projects")||"[]");JSON.parse(localStorage.getItem("projects",F[0])).forEach((e=>U.push(e))),localStorage.clear()})()})();