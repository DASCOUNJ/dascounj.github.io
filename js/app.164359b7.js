(function (t) {
    function a(a) {
        for (var s, n, o = a[0], l = a[1], c = a[2], u = 0, d = []; u < o.length; u++) n = o[u], Object.prototype.hasOwnProperty.call(r, n) && r[n] && d.push(r[n][0]), r[n] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        f && f(a);
        while (d.length) d.shift()();
        return i.push.apply(i, c || []), e()
    }

    function e() {
        for (var t, a = 0; a < i.length; a++) {
            for (var e = i[a], s = !0, n = 1; n < e.length; n++) {
                var o = e[n];
                0 !== r[o] && (s = !1)
            }
            s && (i.splice(a--, 1), t = l(l.s = e[0]))
        }
        return t
    }
    var s = {},
        n = {
            app: 0
        },
        r = {
            app: 0
        },
        i = [];

    function o(t) {
        return l.p + "js/" + ({
            about: "about"
        } [t] || t) + "." + {
            about: "ebce5ce8"
        } [t] + ".js"
    }

    function l(a) {
        if (s[a]) return s[a].exports;
        var e = s[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(e.exports, e, e.exports, l), e.l = !0, e.exports
    }
    l.e = function (t) {
        var a = [],
            e = {
                about: 1
            };
        n[t] ? a.push(n[t]) : 0 !== n[t] && e[t] && a.push(n[t] = new Promise((function (a, e) {
            for (var s = "css/" + ({
                    about: "about"
                } [t] || t) + "." + {
                    about: "e49681b8"
                } [t] + ".css", r = l.p + s, i = document.getElementsByTagName("link"), o = 0; o < i.length; o++) {
                var c = i[o],
                    u = c.getAttribute("data-href") || c.getAttribute("href");
                if ("stylesheet" === c.rel && (u === s || u === r)) return a()
            }
            var d = document.getElementsByTagName("style");
            for (o = 0; o < d.length; o++) {
                c = d[o], u = c.getAttribute("data-href");
                if (u === s || u === r) return a()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = a, f.onerror = function (a) {
                var s = a && a.target && a.target.src || r,
                    i = new Error("Loading CSS chunk " + t + " failed.\n(" + s + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = s, delete n[t], f.parentNode.removeChild(f), e(i)
            }, f.href = r;
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(f)
        })).then((function () {
            n[t] = 0
        })));
        var s = r[t];
        if (0 !== s)
            if (s) a.push(s[2]);
            else {
                var i = new Promise((function (a, e) {
                    s = r[t] = [a, e]
                }));
                a.push(s[2] = i);
                var c, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, l.nc && u.setAttribute("nonce", l.nc), u.src = o(t);
                var d = new Error;
                c = function (a) {
                    u.onerror = u.onload = null, clearTimeout(f);
                    var e = r[t];
                    if (0 !== e) {
                        if (e) {
                            var s = a && ("load" === a.type ? "missing" : a.type),
                                n = a && a.target && a.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + s + ": " + n + ")", d.name = "ChunkLoadError", d.type = s, d.request = n, e[1](d)
                        }
                        r[t] = void 0
                    }
                };
                var f = setTimeout((function () {
                    c({
                        type: "timeout",
                        target: u
                    })
                }), 12e4);
                u.onerror = u.onload = c, document.head.appendChild(u)
            } return Promise.all(a)
    }, l.m = t, l.c = s, l.d = function (t, a, e) {
        l.o(t, a) || Object.defineProperty(t, a, {
            enumerable: !0,
            get: e
        })
    }, l.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function (t, a) {
        if (1 & a && (t = l(t)), 8 & a) return t;
        if (4 & a && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (l.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & a && "string" != typeof t)
            for (var s in t) l.d(e, s, function (a) {
                return t[a]
            }.bind(null, s));
        return e
    }, l.n = function (t) {
        var a = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return l.d(a, "a", a), a
    }, l.o = function (t, a) {
        return Object.prototype.hasOwnProperty.call(t, a)
    }, l.p = "/", l.oe = function (t) {
        throw console.error(t), t
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = c.push.bind(c);
    c.push = a, c = c.slice();
    for (var d = 0; d < c.length; d++) a(c[d]);
    var f = u;
    i.push([0, "chunk-vendors"]), e()
})({
    0: function (t, a, e) {
        t.exports = e("56d7")
    },
    "21bb": function (t, a, e) {
        "use strict";
        e("2dad")
    },
    "2dad": function (t, a, e) {},
    3605: function (t, a, e) {},
    "56d7": function (t, a, e) {
        "use strict";
        e.r(a);
        e("e260"), e("e6cf"), e("cca6"), e("a79d");
        var s = e("2b0e"),
            n = function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("nav", {
                    staticClass: "navbar navbar-expand-lg navbar-dark bg-dark"
                }, [e("div", {
                    staticClass: "container"
                }, [e("router-link", {
                    staticClass: "navbar-brand",
                    attrs: {
                        to: "/"
                    }
                }, [t._v("DASCO")]), t._m(0), e("div", {
                    staticClass: "collapse navbar-collapse flex-row-reverse",
                    attrs: {
                        id: "navbarSupportedContent"
                    }
                }, [e("ul", {
                    staticClass: "navbar-nav"
                }, [e("li", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    class: t.getClassNav("Home"),
                    attrs: {
                        to: "/"
                    }
                }, [e("span", {
                    staticClass: "fa fa-home fa-fw"
                }), t._v("Home")])], 1), e("li", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    class: t.getClassNav("About"),
                    attrs: {
                        to: "/about"
                    }
                }, [e("span", {
                    staticClass: "fa fa-info fa-fw"
                }), t._v("About")])], 1), t._m(1)])])], 1)]), e("router-view"), t._m(2)], 1)
            },
            r = [function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("button", {
                    staticClass: "navbar-toggler",
                    attrs: {
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                    }
                }, [e("span", {
                    staticClass: "navbar-toggler-icon"
                })])
            }, function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("li", {
                    staticClass: "nav-item"
                }, [e("a", {
                    staticClass: "nav-link",
                    attrs: {
                        href: "https://github.com/DASCOUNJ"
                    }
                }, [e("span", {
                    staticClass: "fa fa-github fa-fw"
                }), t._v("Github")])])
            }, function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "bg-dark text-light"
                }, [e("div", {
                    staticClass: "text-center p-3"
                }, [t._v(" © 2021, Dasco UNJ ")])])
            }],
            i = (e("b0c0"), {
                methods: {
                    getClassNav: function (t) {
                        return t === this.$router.currentRoute.name ? "nav-link active" : "nav-link"
                    }
                }
            }),
            o = i,
            l = (e("5c0b"), e("2877")),
            c = Object(l["a"])(o, n, r, !1, null, null, null),
            u = c.exports,
            d = (e("d3b7"), e("8c4f")),
            f = function () {
                var t = this,
                    a = t.$createElement,
                    s = t._self._c || a;
                return s("div", {
                    staticClass: "home"
                }, [s("div", {
                    staticClass: "wrapper-video"
                }, [s("video", {
                    attrs: {
                        src: e("b3ef"),
                        muted: "",
                        loop: "",
                        autoplay: ""
                    },
                    domProps: {
                        muted: !0
                    }
                }), s("div", {
                    staticClass: "overlay"
                }), s("img", {
                    staticClass: "logo",
                    attrs: {
                        alt: "logo",
                        src: e("6ea9")
                    }
                })]), t._m(0), s("div", {
                    staticClass: "wrapper-banner bg-light"
                }, [s("div", {
                    staticClass: "container"
                }, [s("div", {
                    staticClass: "row vertical"
                }, [s("div", {
                    staticClass: "col mx-auto d-block"
                }, [s("Contact")], 1)]), t._m(1)])])])
            },
            m = [function () {
                var t = this,
                    a = t.$createElement,
                    s = t._self._c || a;
                return s("div", {
                    staticClass: "wrapper-brief bg-dark"
                }, [s("div", {
                    staticClass: "container"
                }, [s("div", {
                    staticClass: "row vertical"
                }, [s("img", {
                    staticClass: "col-m mx-auto d-block",
                    attrs: {
                        src: e("907b"),
                        alt: "banner"
                    }
                }), s("div", {
                    staticClass: "col-lg text-light"
                }, [s("h2", [t._v("DASCO")]), s("p", {
                    staticStyle: {
                        "text-align": "justify"
                    }
                }, [t._v(" DASCO UNJ adalah kelompok studi data science di UNJ yang membantu kamu dalam mempersiapkan diri untuk mulai berkarir sebagai Data Scientist. DASCO menyediakan tempat untuk mahasiswa statistika Universitas Negeri Jakarta bisa belajar, berdiskusi, dan sharing - sharing tentang data science secara fun, aplikatif, dan praktis. ")])])])])])
            }, function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "row"
                }, [e("figure", {
                    staticClass: "col quote-wrapper text-center"
                }, [e("blockquote", {
                    staticClass: "blockquote-sm"
                }, [e("p", [t._v('"'), e("span", {
                    staticClass: "fw-bold"
                }, [t._v("#MulaiAjaDulu")]), t._v(', kalau kamu gak memulai maka kamu tidak akan berada disana."')])]), e("figcaption", {
                    staticClass: "blockquote-footer"
                }, [e("cite", {
                    attrs: {
                        title: "Source Title"
                    }
                }, [t._v("Nadiem Makariem")])])])])
            }],
            p = function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "contact-us container"
                }, [t._m(0), e("div", {
                    staticClass: "row content justify-content-center"
                }, [e("div", {
                    staticClass: "pemberitahuan",
                    staticStyle: {
                        display: "none"
                    }
                }, [e("div", {
                    staticClass: "text"
                }, ["" === t.alert ? e("div", {
                    staticClass: "spinner-border text-dark",
                    attrs: {
                        role: "status"
                    }
                }, [e("span", {
                    staticClass: "sr-only"
                }, [t._v("Loading...")])]) : e("div", {
                    class: "title " + ("success" == t.cond ? "text-success" : "text-danger")
                }, [e("span", {
                    class: "fa fa-" + ("success" == t.cond ? "check" : "close") + " fa-fw"
                }), t._v(" " + t._s(t.alert) + " ")]), e("p", {
                    staticClass: "info"
                }, [t._v(t._s(t.info))])])]), t._m(1), e("div", {
                    staticClass: "col-lg-6 form-wrapper"
                }, [e("form", {
                    staticClass: "contact-form form",
                    on: {
                        submit: function (a) {
                            return a.preventDefault(), t.sendEmail(a)
                        }
                    }
                }, [t._m(2), t._m(3), t._m(4), t._m(5)])])])])
            },
            v = [function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col"
                }, [e("h2", {
                    staticClass: "text-center"
                }, [t._v("Contact Us")])])])
            }, function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "col-sm-5 align-self-center"
                }, [e("div", {
                    staticClass: "container-fluid"
                }, [e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col social-media text-center"
                }, [e("i", {
                    staticClass: "fa fa-envelope fa-fw"
                }), e("p", {
                    staticClass: "text"
                }, [t._v("dascounj@gmail.com")])]), e("div", {
                    staticClass: "col social-media text-center"
                }, [e("i", {
                    staticClass: "fa fa-phone fa-fw"
                }), e("p", {
                    staticClass: "text"
                }, [t._v("+6283872123970 "), e("span", {
                    staticClass: "fw-bold"
                }, [t._v("(Kuncoro)")])])])])])])
            }, function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-label"
                }, [t._v("Nama")]), e("input", {
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "Masukkan Nama",
                        name: "user_name",
                        required: ""
                    }
                })])
            }, function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-label"
                }, [t._v("Email")]), e("input", {
                    staticClass: "form-control",
                    attrs: {
                        type: "email",
                        id: "exampleInputEmail1",
                        "aria-describedby": "emailHelp",
                        placeholder: "Masukkan email",
                        name: "user_email",
                        required: ""
                    }
                })])
            }, function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", {
                    staticClass: "form-group"
                }, [e("label", {
                    staticClass: "form-label"
                }, [t._v("Pesan")]), e("textarea", {
                    staticClass: "form-control",
                    attrs: {
                        placeholder: "Masukkan pesan anda",
                        name: "message",
                        required: ""
                    }
                })])
            }, function () {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("button", {
                    staticClass: "btn btn-dark",
                    attrs: {
                        type: "submit"
                    }
                }, [e("span", {
                    staticClass: "fa fa-paper-plane fa-fw"
                }), t._v(" Kirim")])
            }],
            b = e("0f91"),
            h = e.n(b),
            g = {
                name: "Contact",
                data: function () {
                    return {
                        cond: "success",
                        alert: "",
                        info: ""
                    }
                },
                methods: {
                    show_alert: function () {
                        var t = this,
                            a = document.querySelector(".pemberitahuan");
                        setTimeout((function () {
                            a.style.display = "none", t.alert = "", t.info = ""
                        }), 3e3)
                    },
                    sendEmail: function (t) {
                        var a = this,
                            e = document.querySelector(".pemberitahuan");
                        e.style.display = "block", h.a.sendForm("service_jtl7n6j", "template_wupyt4e", t.target, "user_wQPrq7qQmAjwrddaXRAFO").then((function () {
                            var t = a;
                            t.alert = "Berhasil", t.info = "Pesan anda berhasil terkirim"
                        }), (function (t) {
                            var e = a;
                            e.cond = "danger", e.alert = "Gagal", e.info = "Pesan anda gagal terkirim", console.log(t)
                        })).then((function () {
                            a.show_alert()
                        }))
                    }
                }
            },
            C = g,
            _ = (e("8307"), Object(l["a"])(C, p, v, !1, null, "001a42b8", null)),
            k = _.exports,
            y = {
                name: "Home",
                components: {
                    Contact: k
                },
                data: function () {
                    return {
                        baseURL: "https://dascounj.github.io"
                    }
                },
                created: function () {
                    document.title = "DASCO"
                }
            },
            w = y,
            x = (e("21bb"), Object(l["a"])(w, f, m, !1, null, null, null)),
            E = x.exports;
        s["a"].use(d["a"]);
        var j = [{
                path: "/",
                name: "Home",
                component: E
            }, {
                path: "/about",
                name: "About",
                component: function () {
                    return e.e("about").then(e.bind(null, "f820"))
                }
            }],
            S = new d["a"]({
                mode: "hash",
                base: "/",
                routes: j
            }),
            O = S;
        s["a"].config.productionTip = !1, new s["a"]({
            router: O,
            render: function (t) {
                return t(u)
            }
        }).$mount("#app")
    },
    "5c0b": function (t, a, e) {
        "use strict";
        e("9c0c")
    },
    "6ea9": function (t, a, e) {
        t.exports = e.p + "img/logo dasco.787dbfe7.png"
    },
    8307: function (t, a, e) {
        "use strict";
        e("3605")
    },
    "907b": function (t, a, e) {
        t.exports = e.p + "img/logo dasco.a3aa0263.jpg"
    },
    "9c0c": function (t, a, e) {},
    b3ef: function (t, a, e) {
        t.exports = e.p + "media/background.869ae952.mp4"
    }
});
//# sourceMappingURL=app.164359b7.js.map