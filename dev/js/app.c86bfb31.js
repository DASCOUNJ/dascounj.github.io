(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ebce5ce8"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"e49681b8"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],p.parentNode.removeChild(p),a(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dev/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("DASCO")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse flex-row-reverse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{class:t.getClassNav("Home"),attrs:{to:"/"}},[a("span",{staticClass:"fa fa-home fa-fw"}),t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{class:t.getClassNav("About"),attrs:{to:"/about"}},[a("span",{staticClass:"fa fa-info fa-fw"}),t._v("About")])],1)])])],1)]),a("router-view"),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark text-light"},[a("div",{staticClass:"text-center p-3"},[t._v(" © 2021, Dasco UNJ ")])])}],s=(a("b0c0"),{methods:{getClassNav:function(t){return t===this.$router.currentRoute.name?"nav-link active":"nav-link"}}}),i=s,c=(a("5c0b"),a("2877")),l=Object(c["a"])(i,r,o,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"wrapper-video"},[n("video",{attrs:{src:a("b3ef"),muted:"",loop:"",autoplay:""},domProps:{muted:!0}}),n("div",{staticClass:"overlay"}),n("img",{staticClass:"logo",attrs:{alt:"logo",src:a("6ea9")}})]),n("div",{staticClass:"wrapper-banner bg-dark"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row vertical"},[n("div",{staticClass:"col-lg text-light"},[n("h2",[t._v("Open Recruitment")]),n("p",{staticStyle:{"text-align":"justify"}},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et veritatis molestiae eius ipsum. Corrupti non veniam, reiciendis velit blanditiis, harum minima dicta nemo, tempora eaque eius error est eveniet.")]),n("a",{staticClass:"btn btn-light",attrs:{href:t.baseURL+"/pendaftaran"}},[t._v("Join Dasco")])]),n("img",{staticClass:"col mx-auto d-block",attrs:{src:a("9100"),alt:"banner"}})])])]),n("div",{staticClass:"last-content bg-light"})])},f=[],v={name:"Home",components:{},data:function(){return{baseURL:"https://dascounj.github.io"}},created:function(){document.title="DASCO"}},b=v,m=(a("21bb"),Object(c["a"])(b,p,f,!1,null,null,null)),g=m.exports;n["a"].use(d["a"]);var h=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],C=new d["a"]({mode:"hash",base:"/dev/",routes:h}),y=C;n["a"].config.productionTip=!1,new n["a"]({router:y,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6ea9":function(t,e,a){t.exports=a.p+"img/logo dasco.787dbfe7.png"},9100:function(t,e,a){t.exports=a.p+"img/Banner.a612908e.jpeg"},"9c0c":function(t,e,a){},b3ef:function(t,e,a){t.exports=a.p+"media/background.869ae952.mp4"}});
//# sourceMappingURL=app.c86bfb31.js.map