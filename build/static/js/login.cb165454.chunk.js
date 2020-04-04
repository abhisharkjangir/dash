(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    436: function(e, t, a) {
      "use strict";
      var n = a(148);
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
    437: function(e, t, a) {
      "use strict";
      var n = a(96),
        o = a(31),
        r = a(32),
        i = a(35),
        c = a(33),
        s = a(34),
        l = a(1),
        u = a.n(l),
        m = a(113),
        p = a(443),
        d = a.n(p),
        g = a(436),
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
                    m = e.tags,
                    p = e.keywords,
                    d = a ? (a + E + b).substring(0, 60) : b,
                    g = n ? n.substring(0, 155) : h,
                    X = o ? "".concat(f).concat(o) : v,
                    k = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: X },
                      { name: "description", content: g },
                      { name: "keywords", content: p || w },
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
                    m && k.push({ name: "article:tag", content: m }),
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
      t.a = Object(m.a)(X);
    },
    438: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      t.a = function(e) {
        var t = e.children,
          a = e.className;
        return o.a.createElement("div", { className: a }, t);
      };
    },
    439: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n),
        r = a(430);
      a(440);
      t.a = function(e) {
        var t = e.label,
          a = e.to,
          n = e.className;
        return o.a.createElement(r.a, { to: a, className: n }, t);
      };
    },
    440: function(e, t, a) {},
    441: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      a(442);
      t.a = function(e) {
        var t = e.label,
          a = e.type,
          n = e.onClick,
          r = e.className,
          i = e.disabled,
          c = e.variations,
          s = "";
        return (
          r && (s = r),
          c && (s = "".concat(s, " ").concat(c)),
          o.a.createElement(
            "button",
            { type: a, onClick: n, className: s, disabled: i },
            t
          )
        );
      };
    },
    442: function(e, t, a) {},
    444: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      t.a = function(e) {
        var t = e.autoComplete,
          a = e.children;
        return o.a.createElement("form", { autoComplete: t }, a);
      };
    },
    445: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n),
        r = (a(446), a(438));
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
    446: function(e, t, a) {},
    455: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      a(456);
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
    456: function(e, t, a) {},
    525: function(e, t, a) {},
    725: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(29),
        o = a(48),
        r = a(31),
        i = a(32),
        c = a(35),
        s = a(33),
        l = a(34),
        u = a(1),
        m = a.n(u),
        p = a(36),
        d = a(437),
        g = (a(525), a(436)),
        f = a(148),
        b = a(444),
        h = a(445),
        w = a(441),
        v = a(439),
        y = a(455),
        E = (function(e) {
          function t(e) {
            var a;
            return (
              Object(r.a)(this, t),
              ((a = Object(c.a)(
                this,
                Object(s.a)(t).call(this, e)
              )).updateForm = function(e) {
                var t = e.target.name,
                  n = e.target.value;
                a.setState(Object(o.a)({}, t, n));
              }),
              (a.login = function(e) {
                e.preventDefault();
                var t = a.state,
                  n = t.username,
                  o = t.password,
                  r = a.props.login;
                n && o
                  ? r({ email: n, password: o })
                  : p.b.error("All fields are required.");
              }),
              (a.state = { username: "", password: "" }),
              a
            );
          }
          return (
            Object(l.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.username,
                    a = e.password,
                    n = this.props.isLoggingIn;
                  return m.a.createElement(
                    d.a,
                    g.a.login,
                    m.a.createElement(
                      "div",
                      { className: "login-page" },
                      m.a.createElement(
                        "div",
                        { className: "logo" },
                        m.a.createElement("img", { src: f.a, alt: "logo" })
                      ),
                      m.a.createElement(
                        "div",
                        { className: "login-form-box" },
                        m.a.createElement(
                          b.a,
                          { autoComplete: "on", onSubmit: this.login },
                          m.a.createElement(h.a, {
                            id: "username",
                            type: "text",
                            name: "username",
                            value: t,
                            onChange: this.updateForm,
                            label: "USERNAME"
                          }),
                          m.a.createElement(h.a, {
                            id: "password",
                            type: "password",
                            name: "password",
                            value: a,
                            onChange: this.updateForm,
                            label: "PASSWORD"
                          }),
                          m.a.createElement(v.a, {
                            to: "/forgotpassword",
                            label: "Forgot Password?",
                            className: "d-block text-center"
                          }),
                          m.a.createElement(w.a, {
                            label: "LOGIN",
                            onClick: this.login,
                            className: "mt-3",
                            disabled: n
                          })
                        ),
                        m.a.createElement(y.a, {
                          text: "Don't have an account?"
                        }),
                        m.a.createElement(v.a, {
                          to: "/signup",
                          label: "Create an Account",
                          className: "d-block text-center fs-14"
                        })
                      ),
                      m.a.createElement(
                        "div",
                        { className: "login-footer" },
                        "Made with",
                        " ",
                        m.a.createElement(
                          "span",
                          { role: "img", "aria-label": "heart" },
                          "\ud83d\udc96"
                        ),
                        " ",
                        "by ",
                        m.a.createElement(
                          "a",
                          { href: "http://abhisharjangir.com" },
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
        N = a(95),
        O = a(21),
        j = a(41),
        X = Object(O.createSelector)(
          function(e) {
            return e.get(j.d);
          },
          function(e) {
            return e.get("isLoggingIn");
          }
        ),
        k = Object(O.createStructuredSelector)({ isLoggingIn: X });
      t.default = Object(n.connect)(k, function(e) {
        return {
          login: function(t) {
            return e(Object(N.b)(t));
          }
        };
      })(E);
    }
  }
]);
//# sourceMappingURL=login.cb165454.chunk.js.map
