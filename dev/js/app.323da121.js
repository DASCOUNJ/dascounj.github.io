(function(t){function e(e){for(var n,r,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},r={app:0},o={app:0},s=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5c9effd3"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"677ddf6e"}[t]+".css",o=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===n||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],d.parentNode.removeChild(d),a(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/dev/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("DASCO")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse flex-row-reverse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{class:t.getClassNav("Home"),attrs:{to:"/"}},[a("span",{staticClass:"fa fa-home fa-fw"}),t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{class:t.getClassNav("About"),attrs:{to:"/about"}},[a("span",{staticClass:"fa fa-info fa-fw"}),t._v("About")])],1)])])],1)]),a("router-view"),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark text-light"},[a("div",{staticClass:"text-center p-3"},[t._v(" © 2021, Dasco UNJ ")])])}],s=(a("b0c0"),{methods:{getClassNav:function(t){return t===this.$router.currentRoute.name?"nav-link active":"nav-link"}}}),i=s,u=(a("5c0b"),a("2877")),c=Object(u["a"])(i,r,o,!1,null,null,null),l=c.exports,f=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"wrapper"},[n("video",{attrs:{src:a("b3ef"),muted:"",loop:"",autoplay:""},domProps:{muted:!0}}),n("div",{staticClass:"overlay"}),n("img",{staticClass:"logo",attrs:{alt:"logo",src:a("6ea9")}})])])},p=[],v={name:"Home",components:{},created:function(){document.title="DASCO"}},b=v,m=(a("990e"),Object(u["a"])(b,d,p,!1,null,"1cb7f4ff",null)),g=m.exports;n["a"].use(f["a"]);var h=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],C=new f["a"]({mode:"hash",base:"/dev/",routes:h}),y=C;n["a"].config.productionTip=!1,new n["a"]({router:y,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6ea9":function(t,e,a){t.exports=a.p+"img/logo dasco.787dbfe7.png"},"8d72":function(t,e,a){},"990e":function(t,e,a){"use strict";a("8d72")},"9c0c":function(t,e,a){},b3ef:function(t,e,a){t.exports=a.p+"media/background.869ae952.mp4"}});
//# sourceMappingURL=app.323da121.js.map