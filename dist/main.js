(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(81),d=t.n(i),a=t(645),o=t.n(a),r=t(667),l=t.n(r),s=new URL(t(239),t.b),c=o()(d());c.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap);"]);var p=l()(s);c.push([e.id,"html {\n    background: url("+p+");\n    background-size: cover;\n}\n\n.flex {\n    display: flex;\n    font-family: 'Bebas Neue';\n    font-size: 6vw;\n    color: teal;\n    letter-spacing: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid {\n    margin-left: 100px;\n    margin-right: 100px;\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n    background-color: white;\n    border-radius: 20px;\n    padding: 8px;\n    \n}\n.top {\n    display: flex;\n    justify-content: space-evenly;\n    grid-row:1;\n    border-bottom: solid grey;\n}\n\nli {\n    font-family: 'Bebas Neue';\n    font-size: 1.5vw;\n    list-style-type: none;\n}\n\n\n.bottom {\n    padding: 7px;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 1;\n    border-right: solid grey;\n    overflow:auto;\n    height: 540px;\n}\n\n\n.projectplus {\n    display: flex;\n    flex-direction: row;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bolder;\n    font-size: 2vw;\n    grid-column: 1;\n    color: teal;\n    padding-left: 7px;\n    cursor: pointer;\n}\n\n\n.tasks {\n    font-family: 'Bebas Neue';\n    font-size: 2vw;\n    grid-column: 2;\n    text-align: center;\n}\n\n.modal {\n    display: none; \n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4); \n}\n\n.modal-content {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 28%;\n    height: 25%;\n    font-size: 2.5vw;\n  }\n\n  .modalTask {\n    text-align: center;\n    background-color: #fefefe;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 40%;\n    height: 40%;\n    font-size: 2.5vw;\n\n  }\n\n  .buttons {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    gap: 21px;\n  }\n \n  .close {\n    color: black;\n    font-weight: lighter;\n    float: right;\n    cursor: pointer;\n  }\n\n  .add {\n    border-radius: 7px;\n    padding: 10px;\n    width: 100px;\n  }\n\n.inputTitle {\n    padding: 15px;\n    width: 200px;\n}\n\n\n.projectDiv {\n    font-size: 1.5vw;\n    background-color: rgb(245, 238, 228);\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.projectDivArea {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow:hidden;\n    cursor: pointer;\n\n}\n\n.stretch {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 90%;\n}\n\n.image {\n    height: 1.5vw;\n}\n\n.imageOther {\n    height:1.7vw;\n}\n\n.icons {\n    cursor:pointer;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px;\n    font-family: 'Bebas Neue';\n    font-size: 3vw;\n}\n\n.addTask {\n    border-radius: 10px;\n    border-color: silver;\n    border-style: solid;\n    background-color: white;\n    width: 10%;\n    font-family: 'Bebas Neue';\n    cursor: pointer;\n    font-size: 1vw;\n}\n\n#form {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    gap: 8px;\n    font-size: 1.5vw;\n    padding-left: 15px;\n}\n\n.taskInputs {\n    width: 100%;\n    height: 1.8vw;\n}\n\n#submitButton {\n    border-radius: 7px;\n    padding: 10px;\n    width: 100px;\n    margin-top: 10px;\n}\n\n\n",""]);const u=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,d,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(o[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),d&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=d):c[4]="".concat(d)),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},o=[],r=0;r<e.length;r++){var l=e[r],s=i.base?l[0]+i.base:l[0],c=a[s]||0,p="".concat(s," ").concat(c);a[s]=c+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=d(m,i);i.byIndex=r,n.splice(r,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function d(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,d){var a=i(e=e||[],d=d||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var r=t(a[o]);n[r].references--}for(var l=i(e,d),s=0;s<a.length;s++){var c=t(a[s]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var d=void 0!==t.layer;d&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,d&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},239:(e,n,t)=>{e.exports=t.p+"c9ad707e7686c505849b.png"}},n={};function t(i){var d=n[i];if(void 0!==d)return d.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),d=t.n(i),a=t(569),o=t.n(a),r=t(565),l=t.n(r),s=t(216),c=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=c(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,t.p,t.p;const f=t.p+"e0ab1035c5f2e8f9155d.png";t.p,document.getElementById("container").appendChild(function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),d=document.createElement("li"),a=document.createElement("li"),o=document.createElement("li"),r=document.createElement("li"),l=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),h=document.createElement("div"),y=document.createElement("button"),C=document.createElement("div"),w=document.createElement("div"),E=document.createElement("div"),L=document.createElement("div"),k=document.createElement("div"),I=document.createElement("div"),B=document.createElement("input"),T=document.createElement("div"),j=document.createElement("span"),D=document.createElement("button"),S=document.createElement("div"),N=document.getElementById("form"),A=document.getElementById("labelTitle"),z=document.getElementById("title"),M=document.getElementById("labelNotes"),P=document.getElementById("description"),O=document.getElementById("labelPriority"),Z=document.getElementById("lowLabel"),H=document.getElementById("low"),R=document.getElementById("mediumLabel"),U=document.getElementById("medium"),$=document.getElementById("highLabel"),_=document.getElementById("high"),F=document.getElementById("labelDate"),q=document.getElementById("date"),J=document.getElementById("submitButton");function Q(){const e=document.createElement("div"),n=document.createElement("div");n.classList.add("projectDivArea"),n.setAttribute("id",g),console.log(n.id),n.addEventListener("click",(function(){h.textContent=e.textContent,h.classList.add("header"),h.appendChild(y)}));const t=document.createElement("div"),i=new Image;i.classList.add("imageOther"),i.src=f,i.addEventListener("click",(function(){let t=v.findIndex((e=>e.id===n.id));v.splice(t,1),s.removeChild(e),h.textContent=" "}));let d=v.findIndex((e=>e.id===n.id));console.log(d),n.textContent=v[d].title,e.classList.add("projectDiv"),t.classList.add("icons"),t.appendChild(i),e.appendChild(n),e.appendChild(t),s.appendChild(e),console.log(v)}B.id="inputid",B.maxLength=35,q.value=(new Date).toLocaleDateString("en-CA"),n.classList.add("flex"),t.classList.add("grid"),i.classList.add("top"),w.classList.add("bottom"),m.classList.add("projectplus"),c.classList.add("project"),C.classList.add("tasks"),E.classList.add("modal"),L.classList.add("modal-content"),T.classList.add("buttons"),j.classList.add("close"),D.classList.add("add"),B.classList.add("inputTitle"),s.classList.add("stretch"),y.classList.add("addTask"),k.classList.add("modal"),I.classList.add("modalTask"),N.classList.add("taskDiv"),z.classList.add("taskInputs"),P.classList.add("taskInputs"),l.setAttribute("style","display: flex"),n.textContent=["Taskit"],d.textContent=["Home"],a.textContent=["Today"],o.textContent=["This Week"],r.textContent=["Important"],u.textContent=["Projects"],m.textContent=["+"],L.textContent=["Add New Project"],D.textContent=["Submit"],j.textContent=["X"],y.textContent=["add task"],m.addEventListener("click",(function(){E.style.display="block",L.style.display="block"})),j.addEventListener("click",(function(){E.style.display="none",L.style.display="none",inputid.value=""})),D.addEventListener("click",(function(){""===inputid.value?(inputid.value="untitled",b(),Q(),E.style.display="none",L.style.display="none",inputid.value=""):""!=inputid.value&&(console.log(v),b(),Q(),E.style.display="none",L.style.display="none",inputid.value="")})),y.addEventListener("click",(function(){k.style.display="block",I.style.display="block"}));let W=j.cloneNode(!0);return W.addEventListener("click",(function(){k.style.display="none",I.style.display="none"})),J.addEventListener("click",(function(e){const n=document.querySelector('input[name="priority"]:checked');let t=new x(z.value,P.value,n.value,q.value);console.log(e),console.log(t),N.reset(),e.preventDefault(),k.style.display="none",I.style.display="none",q.value=(new Date).toLocaleDateString("en-CA")})),i.appendChild(d),i.appendChild(a),i.appendChild(o),i.appendChild(r),t.appendChild(i),t.appendChild(w),w.appendChild(c),c.appendChild(l),c.appendChild(s),l.appendChild(u),l.appendChild(m),p.appendChild(h),u.appendChild(E),E.appendChild(L),w.appendChild(p),p.appendChild(C),T.appendChild(B),T.appendChild(D),L.appendChild(j),L.appendChild(T),k.appendChild(I),p.appendChild(k),N.appendChild(A),N.appendChild(z),N.appendChild(M),N.appendChild(P),O.appendChild(H),O.appendChild(Z),O.appendChild(U),O.appendChild(R),O.appendChild(_),O.appendChild($),N.appendChild(O),N.appendChild(F),N.appendChild(J),F.appendChild(q),S.appendChild(W),S.appendChild(N),I.appendChild(S),e.appendChild(n),e.appendChild(t),e}());let g,v=[];class y{constructor(e){this.title=e,this.tasks=[],this.id="id"+Math.random().toString(16).slice(2)}addTask(e){return this.tasks.push(e)}removeTask(){return this.tasks.pop()}getId(){return this.id}}class x{constructor(e,n,t,i){this.title=e,this.description=n,this.dueDate=i,this.priority=t,this.id="id"+Math.random().toString(16).slice(2)}changeTitle(e){return this.title=e}changeDescription(e){return this.description=e}changeDueDate(e){return this.dueDate=e}changePriority(e){return this.priority=e}}function b(){let e=new y(inputid.value);v.push(e),g=e.getId(),console.log(g)}})()})();