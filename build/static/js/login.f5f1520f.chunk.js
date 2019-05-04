(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    415: function(e, t, a) {
      "use strict";
      var n = a(139);
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
    416: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      t.a = function(e) {
        var t = e.children,
          a = e.className;
        return o.a.createElement("div", { className: a }, t);
      };
    },
    417: function(e, t, a) {
      "use strict";
      var n = a(89),
        o = a(32),
        r = a(33),
        i = a(35),
        c = a(34),
        s = a(36),
        l = a(1),
        u = a.n(l),
        m = a(105),
        p = a(427),
        d = a.n(p),
        g = a(415),
        f = g.a.default.siteURL,
        b = g.a.default.title,
        h = g.a.default.description,
        w = g.a.default.keywords,
        v = g.a.default.image,
        y = g.a.default.twitter,
        E = g.a.default.sep,
        N = g.a.default.updated,
        O = g.a.default.published,
        X = g.a.default.contentType,
        j = (function(e) {
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
                    j = o ? "".concat(f).concat(o) : v,
                    k = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: j },
                      { name: "description", content: g },
                      { name: "keywords", content: p || w },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: d },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: i || y },
                      { name: "twitter:image:src", content: j },
                      { property: "og:title", content: d },
                      { property: "og:type", content: r || X },
                      { property: "og:url", content: f + t },
                      { property: "og:image", content: j },
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
      t.a = Object(m.a)(j);
    },
    418: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      t.a = function(e) {
        var t = e.autoComplete,
          a = e.children;
        return o.a.createElement("form", { autoComplete: t }, a);
      };
    },
    419: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n),
        r = (a(420), a(416));
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
    420: function(e, t, a) {},
    421: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      a(422);
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
    422: function(e, t, a) {},
    423: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n),
        r = a(410);
      a(424);
      t.a = function(e) {
        var t = e.label,
          a = e.to,
          n = e.className;
        return o.a.createElement(r.a, { to: a, className: n }, t);
      };
    },
    424: function(e, t, a) {},
    429: function(e, t, a) {
      "use strict";
      var n = a(1),
        o = a.n(n);
      a(430);
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
    430: function(e, t, a) {},
    490: function(e, t, a) {},
    628: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(5),
        o = a(29),
        r = a(53),
        i = a(32),
        c = a(33),
        s = a(35),
        l = a(34),
        u = a(36),
        m = a(1),
        p = a.n(m),
        d = a(54),
        g = a(417),
        f = (a(490), a(415)),
        b = a(139),
        h = a(418),
        w = a(419),
        v = a(421),
        y = a(423),
        E = a(429),
        N = (function(e) {
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
                  n = t.username,
                  o = t.password,
                  r = a.props.login;
                n && o
                  ? r({ email: n, password: o })
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
                  return p.a.createElement(
                    g.a,
                    f.a.login,
                    p.a.createElement(
                      "div",
                      { className: "login-page" },
                      p.a.createElement(
                        "div",
                        { className: "logo" },
                        p.a.createElement("img", { src: b.a, alt: "logo" })
                      ),
                      p.a.createElement(
                        "div",
                        { className: "login-form-box" },
                        p.a.createElement(
                          h.a,
                          { autoComplete: "off", onSubmit: this.login },
                          p.a.createElement(w.a, {
                            id: "username",
                            type: "text",
                            name: "username",
                            value: t,
                            onChange: this.updateForm,
                            label: "USERNAME"
                          }),
                          p.a.createElement(w.a, {
                            id: "password",
                            type: "password",
                            name: "password",
                            value: a,
                            onChange: this.updateForm,
                            label: "PASSWORD"
                          }),
                          p.a.createElement(y.a, {
                            to: "/forgotpassword",
                            label: "Forgot Password?",
                            className: "d-block text-center"
                          }),
                          p.a.createElement(v.a, {
                            label: "LOGIN",
                            onClick: this.login,
                            className: "mt-3",
                            disabled: n
                          })
                        ),
                        p.a.createElement(E.a, {
                          text: "Don't have an account?"
                        }),
                        p.a.createElement(y.a, {
                          to: "/signup",
                          label: "Create an Account",
                          className: "d-block text-center fs-14"
                        })
                      ),
                      p.a.createElement(
                        "div",
                        { className: "login-footer" },
                        "Made with",
                        " ",
                        p.a.createElement(
                          "span",
                          { role: "img", "aria-label": "heart" },
                          "\ud83d\udc96"
                        ),
                        " ",
                        "by ",
                        p.a.createElement(
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
        })(p.a.Component),
        O = a(86);
      t.default = Object(o.connect)(
        function(e) {
          return Object(n.a)({}, e.login);
        },
        function(e) {
          return {
            login: function(t) {
              return e(Object(O.b)(t));
            }
          };
        }
      )(N);
    }
  }
]);
//# sourceMappingURL=login.f5f1520f.chunk.js.map
