(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(81),o=n.n(i),a=n(645),s=n.n(a),d=n(667),l=n.n(d),r=new URL(n(239),n.b),c=s()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);"]);var p=l()(r);c.push([e.id,"html {\n    background: url("+p+");\n    background-size: cover;\n}\n\n.flex {\n    display: flex;\n    font-family: 'Bebas Neue';\n    font-size: 6vw;\n    color: teal;\n    letter-spacing: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid {\n    margin-left: 100px;\n    margin-right: 100px;\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n    background-color: white;\n    border-radius: 20px;\n    padding: 8px;\n    \n}\n.top {\n    display: flex;\n    justify-content: space-evenly;\n    grid-row:1;\n    border-bottom: solid grey;\n}\n\nli {\n    font-family: 'Bebas Neue';\n    font-size: 1.5vw;\n    list-style-type: none;\n}\n\n\n.bottom {\n    padding: 7px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 1;\n    border-right: solid grey;\n    overflow:auto;\n    height: 540px;\n}\n\n.rightSide {\n    display: flex;\n    flex-direction: column;\n    overflow:auto;\n    height: 540px;\n}\n\n.projectplus {\n    display: flex;\n    flex-direction: row;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 2vw;\n    grid-column: 1;\n    color: teal;\n    padding-left: 7px;\n    cursor: pointer;\n}\n\n\n.tasks {\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 2;\n    text-align: center;\n}\n\n\n\n.modal {\n    display: none; \n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4); \n}\n\n.modal-content {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 28%;\n    height: 25%;\n    font-size: 2.5vw;\n  }\n\n  .modalTask {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 40%;\n    height: 45%;\n    font-size: 2.5vw;\n\n  }\n\n  .buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    gap: 21px;\n  }\n \n  .close {\n    color: black;\n    font-weight: lighter;\n    float: right;\n    cursor: pointer;\n  }\n\n  .add {\n    border-radius: 7px;\n    padding: 10px;\n    width: 100px;\n  }\n\n.inputTitle {\n    padding: 15px;\n    width: 200px;\n}\n\n\n.projectDiv {\n    font-size: 1.5vw;\n    background-color: rgb(245, 238, 228);\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.projectDivArea {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow:hidden;\n    cursor: pointer;\n}\n\n.stretch {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 90%;\n}\n\n.stretchTask {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.image {\n    height: 1.5vw;\n}\n\n.imageOther {\n    height:1.7vw;\n}\n\n.icons {\n    display: flex;\n    align-self: center;\n    cursor:pointer;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    font-family: 'Bebas Neue';\n    font-size: 3vw;\n}\n\n.addTask {\n    border-radius: 10px;\n    border-color: silver;\n    border-style: solid;\n    background-color: white;\n    width: 10%;\n    font-family: 'Bebas Neue';\n    cursor: pointer;\n    font-size: 1vw;\n}\n\n#form {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 8px;\n    font-size: 1.5vw;\n    padding-left: 15px;\n}\n\n.taskInputs {\n    width: 100%;\n    height: 1.8vw;\n}\n\n.taskLabels {\n    font-size: 2vw;\n}\n\n#submitButton, #submitButtonTwo {\n    border-radius: 7px;\n    padding: 10px;\n    width: 100px;\n    margin-top: 10px;\n}\n\n\n.taskBoxesGrid {\n    display: grid;\n    grid-template-columns: 5% 90% 5%;\n    grid-template-rows: minmax(1fr 1fr);\n    margin-left: 10px;\n    background-color:rgb(228, 241, 245); \n    font-size: 2.0vw;\n    padding: 15px;\n    border-radius: 5px;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n    row-gap: 15px;\n}\n\n\n.taskBoxDescription {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxPriority {\n    display: flex;\n    font-family: 'Poppins';\n    font-size: 1.7vw;\n}\n\n.taskBoxExpand {\n    border-top: solid black;\n    grid-row: 2;\n    grid-column: 2;\n    font-family: \"Bebas Neue\";\n    overflow:scroll;\n    display: flex;\n    height: 80px;\n    padding-top: 5px;\n}\n\n.taskArea {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Bebas Neue';\n}\n\n.taskIcons {\n    display:flex;\n    flex-direction: row;\n    align-self: center;\n    justify-content: flex-end;\n    gap: 3px;\n    margin-right: 5px;\n}\n\n.cursor {\n    cursor: pointer;\n}\n\n.checkBox {\n    height: 1.5vw;\n}",""]);const u=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(s[l]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);i&&s[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},s=[],d=0;d<e.length;d++){var l=e[d],r=i.base?l[0]+i.base:l[0],c=a[r]||0,p="".concat(r," ").concat(c);a[r]=c+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var y=o(m,i);i.byIndex=d,t.splice(d,0,{identifier:p,updater:y,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=i(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var d=n(a[s]);t[d].references--}for(var l=i(e,o),r=0;r<a.length;r++){var c=n(a[r]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},239:(e,t,n)=>{e.exports=n.p+"c9ad707e7686c505849b.png"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),o=n.n(i),a=n(569),s=n.n(a),d=n(565),l=n.n(d),r=n(216),c=n.n(r),p=n(589),u=n.n(p),m=n(426),y={};function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function h(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===g(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function v(e,t){for(var n=e<0?"-":"",i=Math.abs(e).toString();i.length<t;)i="0"+i;return n+i}y.styleTagTransform=u(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=c(),t()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;const x={y:function(e,t){var n=e.getUTCFullYear(),i=n>0?n:1-n;return v("yy"===t?i%100:i,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):v(n+1,2)},d:function(e,t){return v(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return v(e.getUTCHours()%12||12,t.length)},H:function(e,t){return v(e.getUTCHours(),t.length)},m:function(e,t){return v(e.getUTCMinutes(),t.length)},s:function(e,t){return v(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,i=e.getUTCMilliseconds();return v(Math.floor(i*Math.pow(10,n-3)),t.length)}};function b(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function C(e){return f(1,arguments),e instanceof Date||"object"===k(e)&&"[object Date]"===Object.prototype.toString.call(e)}function w(e){if(f(1,arguments),!C(e)&&"number"!=typeof e)return!1;var t=h(e);return!isNaN(Number(t))}function E(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function L(e,t){f(2,arguments);var n=h(e).getTime(),i=E(t);return new Date(n+i)}function T(e,t){f(2,arguments);var n=E(t);return L(e,-n)}var I=/(\w)\1*|''|'(''|[^'])+('|$)|./g,B=/^'([^]*?)'?$/,S=/''/g,D=/[a-zA-Z]/;function A(e,t){f(2,arguments);var n=h(e);if(!w(n))throw new RangeError("Invalid time value");var i=b(n),o=T(n,i),a=t.match(I);if(!a)return"";var s=a.map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return j(e);var n=x[t];if(n)return n(o,e);if(t.match(D))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return s}function j(e){var t=e.match(B);return t?t[1].replace(S,"'"):e}const N=n.p+"1c453583325d6688a794.png",P=n.p+"847d193a8b15949c2a80.png",M=n.p+"e0ab1035c5f2e8f9155d.png";document.getElementById("container").appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("li"),a=document.createElement("li"),s=document.createElement("li"),d=document.createElement("li"),l=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),y=document.createElement("div"),f=document.createElement("button"),g=document.createElement("div"),h=document.createElement("div"),v=document.createElement("div"),x=document.createElement("div"),b=document.createElement("div"),k=document.createElement("div"),C=document.createElement("input"),w=document.createElement("div"),E=document.createElement("span"),L=document.createElement("button"),T=document.createElement("div"),I=document.getElementById("form"),B=document.getElementById("labelTitle"),S=document.getElementById("title"),D=document.getElementById("labelNotes"),j=document.getElementById("description"),q=document.getElementById("labelPriority"),F=document.getElementById("lowLabel"),R=document.getElementById("low"),Z=document.getElementById("mediumLabel"),$=document.getElementById("medium"),Y=document.getElementById("highLabel"),_=document.getElementById("high"),G=document.getElementById("labelDate"),W=document.getElementById("date"),J=document.getElementById("submitButton"),Q=document.createElement("div");Q.classList.add("stretchTask");const X=document.getElementById("submitButtonTwo");let K,V,ee,te=A(new Date,"yyyy-MM-dd"),ne=function(){let e=new Date;return e.setDate(e.getDate()+7),A(e,"yyyy-MM-dd")}();C.id="inputid",C.maxLength=35,W.value=te;let ie=te;t.classList.add("flex"),n.classList.add("grid"),i.classList.add("top"),h.classList.add("bottom"),m.classList.add("projectplus"),c.classList.add("project"),p.classList.add("rightSide"),g.classList.add("tasks"),v.classList.add("modal"),x.classList.add("modal-content"),w.classList.add("buttons"),E.classList.add("close"),L.classList.add("add"),C.classList.add("inputTitle"),r.classList.add("stretch"),f.classList.add("addTask"),b.classList.add("modal"),k.classList.add("modalTask"),S.classList.add("taskInputs"),B.classList.add("taskLabels"),D.classList.add("taskLabels"),q.classList.add("taskLabels"),G.classList.add("taskLabels"),j.classList.add("taskInputs"),l.setAttribute("style","display: flex");const oe=v.cloneNode(!0),ae=x.cloneNode(!0),se=L.cloneNode(!0),de=document.createElement("input"),le=document.createElement("div");function re(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("projectDivArea"),t.setAttribute("id",z),y.classList.add("header"),t.addEventListener("click",(function(){let e=U.findIndex((e=>e.id===t.id));y.textContent=U[e].title,y.appendChild(f),K=e;let n=Q.querySelectorAll('[data-id="myTaskBox"]');for(let e=0;e<n.length;e++)n[e].style.display="none";for(let t=0;t<U[e].tasks.length;t++)document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid"}));const n=document.createElement("div"),i=new Image,o=new Image;i.classList.add("imageOther"),o.classList.add("image"),i.src=M,o.src=P,o.setAttribute("id",z),V=U.findIndex((e=>e.id===t.id)),o.addEventListener("click",(function(){ee=this.id,console.log(ee),oe.style.display="block",ae.style.display="block";let e=U.findIndex((e=>e.id===t.id));de.value=U[e].title,console.log(U[e].title)})),i.addEventListener("click",(function(){let n=U.findIndex((e=>e.id===t.id));y.textContent="";for(let e=0;e<U[n].tasks.length;e++){let t=document.getElementById(U[n].tasks[e].getTodoId());Q.removeChild(t)}U[n].removeAllTasks(),r.removeChild(e),U.splice(n,1)}));let a=U.findIndex((e=>e.id===t.id));t.textContent=U[a].title,e.classList.add("projectDiv"),n.classList.add("icons"),n.appendChild(o),n.appendChild(i),e.appendChild(t),e.appendChild(n),r.appendChild(e),console.log(U)}le.classList.add("buttons"),de.classList.add("inputTitle"),ae.textContent=["Edit Project"],se.textContent=["Submit"],t.textContent=["Taskit"],o.textContent=["All"],o.setAttribute("style","cursor: pointer"),a.textContent=["Today"],a.setAttribute("style","cursor: pointer"),s.textContent=["This Week"],s.setAttribute("style","cursor: pointer"),d.textContent=["Important"],d.setAttribute("style","cursor: pointer"),u.textContent=["Projects"],m.textContent=["+"],x.textContent=["Add New Project"],L.textContent=["Submit"],E.textContent=["X"],f.textContent=["add task"],o.addEventListener("click",(function(){y.textContent="All Tasks";let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<U.length;e++)for(let t=0;t<U[e].tasks.length;t++)document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid"})),s.addEventListener("click",(function(){y.textContent="This Week's Tasks";let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<U.length;e++)for(let t=0;t<U[e].tasks.length;t++)(U[e].tasks[t].dueDate===ie||ne.split("-")[2]-U[e].tasks[t].dueDate.split("-")[2]<7&&ne.split("-")[2]-U[e].tasks[t].dueDate.split("-")[2]>=0)&&(document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid")})),d.addEventListener("click",(function(){y.textContent="Important Tasks";let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<U.length;e++)for(let t=0;t<U[e].tasks.length;t++)"High"===U[e].tasks[t].priority&&(document.getElementById(U[e].tasks[t].getTodoId()).style.display="grid")})),m.addEventListener("click",(function(){v.style.display="block",x.style.display="block"})),E.addEventListener("click",(function(){v.style.display="none",x.style.display="none",inputid.value=""})),L.addEventListener("click",(function(){""===inputid.value?(inputid.value="untitled",O(),re(),v.style.display="none",x.style.display="none",inputid.value=""):""!=inputid.value&&(console.log(U),O(),re(),v.style.display="none",x.style.display="none",inputid.value="")})),se.addEventListener("click",(function(){console.log(U[V]),U[V].changeProjectTitle(de.value),y.textContent=U[V].title,y.classList.add("header"),y.appendChild(f);let e=ee;document.getElementById(e).textContent=U[V].title,oe.style.display="none",ae.style.display="none"})),f.addEventListener("click",(function(){S.value="",j.value="",W.value=te,X.style.display="none",b.style.display="block",k.style.display="block"}));let ce,pe,ue=E.cloneNode(!0),me=E.cloneNode(!0);return me.addEventListener("click",(function(){oe.style.display="none",ae.style.display="none"})),ue.addEventListener("click",(function(){(J.style.display="none")&&(J.style.display="block"),S.value="",j.value="",b.style.display="none",k.style.display="none"})),J.addEventListener("click",(function(e){const t=document.querySelector('input[name="priority"]:checked');let n=new H(S.value,j.value,t.value,W.value);console.log(n.getTodoId()),ce=n.getTodoId(),U[K].addTask(n),console.log(ce),console.log(U[K].getList()),console.log(U),function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("span"),i=document.createElement("span"),o=document.createElement("input"),a=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div");o.setAttribute("type","checkbox"),o.classList.add("checkBox"),e.classList.add("taskBoxesGrid"),t.classList.add("taskArea");const l=document.createElement("div"),r=new Image,c=new Image,p=new Image;l.classList.add("taskIcons"),p.src=N,c.src=P,r.src=M,p.setAttribute("style","height: 2.8vw"),c.setAttribute("style","height: 2.6vw"),r.setAttribute("style","height: 2.9vw"),p.classList.add("cursor"),c.classList.add("cursor"),r.classList.add("cursor"),e.setAttribute("id",ce),n.setAttribute("data-id","title"),i.setAttribute("data-id","date"),a.classList.add("taskBoxExpand"),s.classList.add("taskBoxDescription"),s.setAttribute("data-id","description"),d.setAttribute("data-id","priority"),d.classList.add("taskBoxPriority"),e.setAttribute("data-id","myTaskBox"),e.addEventListener("click",(function(){pe=this.id,console.log(pe)})),p.addEventListener("click",(function(){"none"===a.style.display?a.style.display="block":a.style.display="none"})),r.addEventListener("click",(function(){let t=U[K].tasks.findIndex((t=>t.id===e.id));console.log(e.id),console.log(K),console.log(t),U[K].removeTask(t),Q.removeChild(e),console.log(U)})),c.addEventListener("click",(function(){const e=document.querySelector('input[name="priority"]:checked');S.value=U[K].tasks[u].title,j.value=U[K].tasks[u].description,e.value=U[K].tasks[u].priority,W.value=U[K].tasks[u].dueDate,b.style.display="block",k.style.display="block",J.style.display="none",X.style.display="block"}));let u=U[K].tasks.findIndex((t=>t.id===e.id));console.log(u),n.textContent=U[K].tasks[u].title,i.textContent=U[K].tasks[u].dueDate,s.textContent=U[K].tasks[u].description,d.textContent="Priority: "+U[K].tasks[u].priority,console.log(U[K]),console.log(U[K].tasks[u].title),console.log(U[K].tasks[u].description),console.log(U[K].tasks[u].dueDate),console.log(U[K].tasks[u].priority),e.appendChild(o),t.appendChild(n),t.appendChild(i),e.appendChild(t),e.appendChild(l),l.appendChild(p),l.appendChild(c),l.appendChild(r),a.appendChild(s),a.appendChild(d),e.appendChild(a),Q.appendChild(e),a.style.display="none",o.addEventListener("change",(function(){this.checked?(n.style.setProperty("text-decoration","line-through"),i.style.setProperty("text-decoration","line-through"),s.style.setProperty("text-decoration","line-through"),d.style.setProperty("text-decoration","line-through")):(n.style.setProperty("text-decoration","none"),i.style.setProperty("text-decoration","none"),s.style.setProperty("text-decoration","none"),d.style.setProperty("text-decoration","none"))}))}(),I.reset(),e.preventDefault(),b.style.display="none",k.style.display="none",W.value=te})),a.addEventListener("click",(function(){y.textContent="Today's Tasks";let e=Q.querySelectorAll('[data-id="myTaskBox"]');for(let t=0;t<e.length;t++)e[t].style.display="none";for(let e=0;e<U.length;e++)for(let t=0;t<U[e].tasks.length;t++)if(U[e].tasks[t].dueDate===ie){let n=document.getElementById(U[e].tasks[t].getTodoId());console.log(n),n.style.display="grid"}})),X.addEventListener("click",(function(e){const t=document.querySelector('input[name="priority"]:checked');let n=U[K].tasks.findIndex((e=>e.id===pe));U[K].tasks[n].changeTitle(S.value),U[K].tasks[n].changeDescription(j.value),U[K].tasks[n].changeDueDate(W.value),U[K].tasks[n].changePriority(t.value);let i=document.getElementById(pe).querySelector('[data-id="title"]'),o=document.getElementById(pe).querySelector('[data-id="date"]'),a=document.getElementById(pe).querySelector('[data-id="description"]'),s=document.getElementById(pe).querySelector('[data-id="priority"]');i.textContent=U[K].tasks[n].title,o.textContent=U[K].tasks[n].dueDate,a.textContent=U[K].tasks[n].description,s.textContent="Priority: "+U[K].tasks[n].priority,e.preventDefault(),b.style.display="none",k.style.display="none",J.style.display="block",X.style.display="none"})),i.appendChild(o),i.appendChild(a),i.appendChild(s),i.appendChild(d),n.appendChild(i),n.appendChild(h),h.appendChild(c),c.appendChild(l),c.appendChild(r),l.appendChild(u),l.appendChild(m),p.appendChild(y),oe.appendChild(ae),u.appendChild(oe),ae.appendChild(me),le.appendChild(de),le.appendChild(se),ae.appendChild(le),u.appendChild(v),v.appendChild(x),h.appendChild(p),p.appendChild(g),w.appendChild(C),w.appendChild(L),x.appendChild(E),x.appendChild(w),b.appendChild(k),p.appendChild(b),I.appendChild(B),I.appendChild(S),I.appendChild(D),I.appendChild(j),q.appendChild(R),q.appendChild(F),q.appendChild($),q.appendChild(Z),q.appendChild(_),q.appendChild(Y),I.appendChild(q),I.appendChild(G),I.appendChild(J),I.appendChild(X),G.appendChild(W),T.appendChild(ue),T.appendChild(I),k.appendChild(T),p.appendChild(Q),e.appendChild(t),e.appendChild(n),e}());let z,U=[];class q{constructor(e){this.title=e,this.tasks=[],this.id="id"+Math.random().toString(16).slice(2)}addTask(e){return this.tasks.push(e)}removeTask(e){return this.tasks.splice(e,1)}removeAllTasks(){return this.tasks.splice(0,this.tasks.length)}getList(){return this.tasks}getId(){return this.id}changeProjectTitle(e){return this.title=e}}class H{constructor(e,t,n,i){this.title=e,this.description=t,this.priority=n,this.dueDate=i,this.id="id"+Math.random().toString(16).slice(2)}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changeDueDate(e){return this.dueDate=e}changePriority(e){return this.priority=e}getTodoId(){return this.id}}function O(){let e=new q(inputid.value);U.push(e),z=e.getId(),console.log(z)}})()})();