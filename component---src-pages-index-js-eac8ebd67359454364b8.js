"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{8016:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var n=t(7294),l=t(3751),r=t(7198),c=t.p+"static/background-5e50911bad16f8989a9680e984cb760e.mp4",s=t.p+"static/logo dasco-cb52a687c929c5ad373c7281c6cac5f4.png",m=t.p+"static/logo dasco-f73610c5c2ab982566f3846f6e5eb056.jpg",i={_origin:"https://api.emailjs.com"},o=function(e,a,t){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!a)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var d=function e(a){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=a.status,this.text=a.responseText},u=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,l){var r=new XMLHttpRequest;r.addEventListener("load",(function(e){var a=e.target,t=new d(a);200===t.status||"OK"===t.text?n(t):l(t)})),r.addEventListener("error",(function(e){var a=e.target;l(new d(a))})),r.open("POST",i._origin+e,!0),Object.keys(t).forEach((function(e){r.setRequestHeader(e,t[e])})),r.send(a)}))},p=function(e,a,t,n){var l=n||i._userID,r=function(e){var a;if(!(a="string"==typeof e?document.querySelector(e):e)||"FORM"!==a.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return a}(t);o(l,e,a);var c=new FormData(r);return c.append("lib_version","3.2.0"),c.append("service_id",e),c.append("template_id",a),c.append("user_id",l),u("/api/v1.0/email/send-form",c)},f="contact-module--row--1dJH6",E="contact-module--socialMedia--2LjDg",N="contact-module--formGroup--332ka",v=function(){var e=(0,n.useState)(""),a=e[0],t=e[1],l=(0,n.useState)("success"),r=l[0],c=l[1],s=(0,n.useState)(""),m=s[0],i=s[1],o=(0,n.useRef)(null);return n.createElement("div",{className:"container contact-module--container--cKQWz"},n.createElement("div",{className:"row "+f},n.createElement("div",{className:"col"},n.createElement("h2",{className:"text-center"},"Contact Us"))),n.createElement("div",{className:"row "+f+" content contact-module--content--VI3Cq justify-content-center"},n.createElement("div",{className:"contact-module--pemberitahuan--2u6Xq",style:{display:"none"},ref:o},n.createElement("div",{className:"text contact-module--text--2l5RC"},""===a?n.createElement("span",{style:{display:"flex",alignItems:"center"}},n.createElement("div",{className:"spinner-border text-dark",role:"status",style:{margin:"0 10px"}}),"Loading..."):n.createElement("div",{className:"contact-module--title--2Yro4 "+("success"===r?"text-success":"text-danger")},n.createElement("span",{className:"fa fa-"+("success"===r?"check":"close")+" fa-fw"}),a),n.createElement("p",{className:"contact-module--info--E7pgk"},m))),n.createElement("div",{className:"col-sm-5 align-self-center"},n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"row "+f},n.createElement("div",{className:"col "+E+" text-center"},n.createElement("i",{className:"fa fa-envelope fa-fw"}),n.createElement("p",{className:"text"},"dascounj@gmail.com")),n.createElement("div",{className:"col "+E+" text-center"},n.createElement("i",{className:"fa fa-phone fa-fw"}),n.createElement("p",{className:"text"},"+6283872123970 ",n.createElement("span",{className:"fw-bold"},"(Kuncoro)")))))),n.createElement("div",{className:"col-lg-6 form-wrapper"},n.createElement("form",{className:"contact-form contact-module--form--ddlf1",onSubmit:function(e){e.preventDefault(),o.current.style.display="block",p("service_bik7vme","template_wupyt4e",e.target,"user_wQPrq7qQmAjwrddaXRAFO").then((function(e){t("Berhasil"),i("Pesan anda berhasil terkirim")}),(function(e){c("danger"),t("Gagal"),i("Pesan anda gagal terkirim")})).then((function(){setTimeout((function(){o.current.style.display="none",t(""),i("")}),3e3)}))}},n.createElement("div",{className:N},n.createElement("label",{className:"form-label",htmlFor:"user_name"},"Nama"),n.createElement("input",{id:"user_name",type:"text",className:"form-control",placeholder:"Masukkan Nama",name:"user_name",required:!0})),n.createElement("div",{className:N},n.createElement("label",{className:"form-label",htmlFor:"exampleInputEmail1"},"Email"),n.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Masukkan email",name:"user_email",required:!0})),n.createElement("div",{className:N},n.createElement("label",{className:"form-label",htmlFor:"pesan"},"Pesan"),n.createElement("textarea",{id:"pesan",className:"form-control",placeholder:"Masukkan pesan anda",name:"message",required:!0})),n.createElement("button",{className:"btn btn-dark",type:"submit"},n.createElement("span",{className:"fa fa-paper-plane fa-fw"})," Kirim")))))},b=function(e){var a=e.location;return n.createElement(r.Z,{location:a},n.createElement(l.Z,{title:"Home"}),n.createElement("div",{className:"home"},n.createElement("div",{className:"wrapper-video"},n.createElement("video",{src:c,autoPlay:!0,muted:!0,loop:!0}),n.createElement("div",{className:"overlay"}),n.createElement("img",{className:"logo",alt:"logo",src:s})),n.createElement("div",{className:"wrapper-brief bg-dark"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row vertical"},n.createElement("img",{src:m,className:"col-m mx-auto d-block",alt:"banner"}),n.createElement("div",{className:"col-lg text-light"},n.createElement("h2",null,"DASCO"),n.createElement("p",{style:{textAlignlign:"justify"}},"DASCO UNJ adalah kelompok studi data science di UNJ yang membantu kamu dalam mempersiapkan diri untuk mulai berkarir sebagai Data Scientist. DASCO menyediakan tempat untuk mahasiswa statistika Universitas Negeri Jakarta bisa belajar, berdiskusi, dan sharing - sharing tentang data science secara fun, aplikatif, dan praktis."))))),n.createElement("div",{className:"wrapper-banner bg-light"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row vertical"},n.createElement("div",{className:"col mx-auto d-block"},n.createElement(v,null))),n.createElement("div",{className:"row"},n.createElement("figure",{className:"col quote-wrapper text-center"},n.createElement("blockquote",{className:"blockquote-sm"},n.createElement("p",null,'"',n.createElement("span",{className:"fw-bold"},"#MulaiAjaDulu"),', kalau kamu gak memulai maka kamu tidak akan berada disana."')),n.createElement("figcaption",{className:"blockquote-footer"},n.createElement("cite",{title:"Source Title"},"Nadiem Makariem"))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-eac8ebd67359454364b8.js.map