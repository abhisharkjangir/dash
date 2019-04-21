(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    405: function(e, t, a) {
      "use strict";
      var n = a(99);
      t.a = {
        default: {
          title: "Meuzic",
          description: "www.meuzic.com",
          image: n.a,
          twitter: "",
          sep: " | ",
          siteURL: "",
          keywords: "",
          facebookAppId: "XXXXXXXXX",
          updated: new Date().toDateString(),
          published: new Date().toDateString(),
          contentType: "website"
        },
        home: { id: "home", title: "Dashboard", description: "Dashboard" },
        login: { id: "login", title: "Login", description: "Login to Meuzic" },
        signup: {
          id: "signup",
          title: "Signup",
          description: "Signup on Meuzic"
        },
        forgetpassword: {
          id: "forgotpassword",
          title: "Forget Password",
          description: "Forget Password"
        },
        notfound: {
          id: "notfound",
          title: "Oops! 404",
          description: "This is not the web page you are looking for."
        }
      };
    },
    406: function(e, t, a) {
      "use strict";
      var n = a(81),
        o = a(22),
        r = a(23),
        i = a(25),
        c = a(24),
        s = a(26),
        l = a(1),
        u = a.n(l),
        p = a(97),
        m = a(417),
        d = a.n(m),
        g = a(405),
        f = g.a.default.siteURL,
        b = g.a.default.title,
        h = g.a.default.description,
        w = g.a.default.keywords,
        v = g.a.default.image,
        y = g.a.default.twitter,
        E = g.a.default.sep,
        N = g.a.default.updated,
        O = g.a.default.published,
        j = g.a.default.contentType,
        X = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(i.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var a = e.title,
                    n = e.description,
                    o = e.image,
                    r = e.contentType,
                    i = e.twitter,
                    c = e.noCrawl,
                    s = e.published,
                    l = e.updated,
                    u = e.category,
                    p = e.tags,
                    m = e.keywords,
                    d = a ? (a + E + b).substring(0, 60) : b,
                    g = n ? n.substring(0, 155) : h,
                    X = o ? "".concat(f).concat(o) : v,
                    k = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: X },
                      { name: "description", content: g },
                      { name: "keywords", content: m || w },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: d },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: i || y },
                      { name: "twitter:image:src", content: X },
                      { property: "og:title", content: d },
                      { property: "og:type", content: r || j },
                      { property: "og:url", content: f + t },
                      { property: "og:image", content: X },
                      { property: "og:description", content: g },
                      { property: "og:site_name", content: b },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c
                      ? k.push({ name: "robots", content: "noindex, nofollow" })
                      : k.push({ name: "robots", content: "index, follow" }),
                    s &&
                      k.push({
                        name: "article:published_time",
                        content: s || O
                      }),
                    l &&
                      k.push({
                        name: "article:modified_time",
                        content: l || N
                      }),
                    u && k.push({ name: "article:section", content: u }),
                    p && k.push({ name: "article:tag", content: p }),
                    k
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    a = e.id,
                    o = e.className,
                    r = Object(n.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: a, className: o },
                    u.a.createElement(d.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          r.schema || "WebPage"
                        )
                      },
                      title: r.title ? r.title + E + b : b,
                      link: [
                        {
                          rel: "canonical",
                          href: f + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(r, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(l.Component);
      t.a = Object(p.a)(X);
    },
    407: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      t.a = function(e) {
        var t = e.children,
          a = e.className;
        return o.a.createElement("div", { className: a }, t);
      };
    },
    408: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n),
        r = a(400);
      a(409);
      t.a = function(e) {
        var t = e.label,
          a = e.to,
          n = e.className;
        return o.a.createElement(r.a, { to: a, className: n }, t);
      };
    },
    409: function(e, t, a) {},
    410: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      t.a = function(e) {
        var t = e.autoComplete,
          a = e.children;
        return o.a.createElement("form", { autoComplete: t }, a);
      };
    },
    411: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n),
        r = (a(412), a(407));
      t.a = function(e) {
        var t = e.id,
          a = e.type,
          n = e.name,
          i = e.value,
          c = e.onChange,
          s = e.label,
          l = e.disabled,
          u = e.className;
        return o.a.createElement(
          r.a,
          { className: "mb-3" },
          o.a.createElement("label", { htmlFor: t }, s),
          o.a.createElement("input", {
            id: t,
            type: a,
            name: n,
            value: i,
            onChange: c,
            disabled: l,
            className: u
          })
        );
      };
    },
    412: function(e, t, a) {},
    413: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      a(414);
      t.a = function(e) {
        var t = e.label,
          a = e.type,
          n = e.onClick,
          r = e.className,
          i = e.disabled;
        return o.a.createElement(
          "button",
          { type: a, onClick: n, className: r, disabled: i },
          t
        );
      };
    },
    414: function(e, t, a) {},
    415: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      a(416);
      t.a = function(e) {
        var t = e.text,
          a = e.className;
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: "separator ".concat(a || "") },
            o.a.createElement("span", null, t)
          )
        );
      };
    },
    416: function(e, t, a) {},
    428: function(e, t, a) {},
    443: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(7),
        o = a(21),
        r = a(55),
        i = a(22),
        c = a(23),
        s = a(25),
        l = a(24),
        u = a(26),
        p = a(1),
        m = a.n(p),
        d = a(69),
        g = a(406),
        f = (a(428), a(405)),
        b = a(99),
        h = a(410),
        w = a(411),
        v = a(413),
        y = a(408),
        E = a(415),
        N = a(133),
        O = a(132),
        j = function(e) {
          return N.a.post(Object(O.a)("login"), e);
        },
        X = a(54),
        k = (function(e) {
          function t(e) {
            var a;
            return (
              Object(i.a)(this, t),
              ((a = Object(s.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).updateForm = function(e) {
                var t = e.target.name,
                  n = e.target.value;
                a.setState(Object(r.a)({}, t, n));
              }),
              (a.login = function(e) {
                e.preventDefault();
                var t = a.state,
                  o = t.username,
                  r = t.password,
                  i = a.props,
                  c = i.setLoginData,
                  s = i.setLoggingIn,
                  l = i.setAppData;
                o && r
                  ? (s(!0),
                    j({ email: o, password: r })
                      .then(function(e) {
                        if (e.data.success) {
                          var t = e.data.data;
                          c(t),
                            l(Object(n.a)({}, t, { isLoggedIn: !0 })),
                            Object(X.e)("isLoggedIn", !0),
                            Object(X.e)("user", t);
                        } else d.b.error(e.data.message), s(!1);
                      })
                      .catch(function(e) {
                        console.log(e), s(!1);
                      }))
                  : d.b.error("All fields are required.");
              }),
              (a.state = { username: "", password: "" }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.username,
                    a = e.password,
                    n = this.props.isLoggingIn;
                  return m.a.createElement(
                    g.a,
                    f.a.login,
                    m.a.createElement(
                      "div",
                      { className: "login-page" },
                      m.a.createElement(
                        "div",
                        { className: "logo" },
                        m.a.createElement("img", { src: b.a, alt: "logo" })
                      ),
                      m.a.createElement(
                        "div",
                        { className: "login-form-box" },
                        m.a.createElement(
                          h.a,
                          { autoComplete: "off", onSubmit: this.login },
                          m.a.createElement(w.a, {
                            id: "username",
                            type: "text",
                            name: "username",
                            value: t,
                            onChange: this.updateForm,
                            label: "USERNAME"
                          }),
                          m.a.createElement(w.a, {
                            id: "password",
                            type: "password",
                            name: "password",
                            value: a,
                            onChange: this.updateForm,
                            label: "PASSWORD"
                          }),
                          m.a.createElement(y.a, {
                            to: "/forgotpassword",
                            label: "Forgot Password?",
                            className: "d-block text-center"
                          }),
                          m.a.createElement(v.a, {
                            label: "LOGIN",
                            onClick: this.login,
                            className: "mt-3",
                            disabled: n
                          })
                        ),
                        m.a.createElement(E.a, {
                          text: "Don't have an account?"
                        }),
                        m.a.createElement(y.a, {
                          to: "/signup",
                          label: "Create an Account",
                          className: "d-block text-center fs-14"
                        })
                      ),
                      m.a.createElement(
                        "div",
                        { className: "login-footer" },
                        "Made with ",
                        m.a.createElement(
                          "span",
                          { role: "img", "aria-label": "heart" },
                          "\ud83d\udc96"
                        ),
                        " by ",
                        m.a.createElement(
                          "a",
                          { href: "http://abhijangir.me" },
                          "Abhishar Jangir."
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(m.a.Component),
        C = a(77),
        D = a(67);
      t.default = Object(o.connect)(
        function(e) {
          return Object(n.a)({}, e.login);
        },
        function(e) {
          return {
            setLoggingIn: function() {
              return e({ type: C.c, value: t });
              var t;
            },
            setLoginData: function(t) {
              return e(
                (function(e) {
                  return { type: C.b, data: e };
                })(t)
              );
            },
            setAppData: function(t) {
              return e(Object(D.a)(t));
            }
          };
        }
      )(k);
    }
  }
]);
//# sourceMappingURL=login.5dba2821.chunk.js.map
