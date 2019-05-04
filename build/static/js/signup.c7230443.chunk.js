(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
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
        i = a.n(n);
      t.a = function(e) {
        var t = e.children,
          a = e.className;
        return i.a.createElement("div", { className: a }, t);
      };
    },
    417: function(e, t, a) {
      "use strict";
      var n = a(89),
        i = a(32),
        o = a(33),
        r = a(35),
        c = a(34),
        s = a(36),
        l = a(1),
        m = a.n(l),
        u = a(105),
        p = a(427),
        d = a.n(p),
        g = a(415),
        f = g.a.default.siteURL,
        b = g.a.default.title,
        h = g.a.default.description,
        w = g.a.default.keywords,
        v = g.a.default.image,
        E = g.a.default.twitter,
        y = g.a.default.sep,
        N = g.a.default.updated,
        X = g.a.default.published,
        k = g.a.default.contentType,
        C = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(r.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(o.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var a = e.title,
                    n = e.description,
                    i = e.image,
                    o = e.contentType,
                    r = e.twitter,
                    c = e.noCrawl,
                    s = e.published,
                    l = e.updated,
                    m = e.category,
                    u = e.tags,
                    p = e.keywords,
                    d = a ? (a + y + b).substring(0, 60) : b,
                    g = n ? n.substring(0, 155) : h,
                    C = i ? "".concat(f).concat(i) : v,
                    O = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: C },
                      { name: "description", content: g },
                      { name: "keywords", content: p || w },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: E },
                      { name: "twitter:title", content: d },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: r || E },
                      { name: "twitter:image:src", content: C },
                      { property: "og:title", content: d },
                      { property: "og:type", content: o || k },
                      { property: "og:url", content: f + t },
                      { property: "og:image", content: C },
                      { property: "og:description", content: g },
                      { property: "og:site_name", content: b },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c
                      ? O.push({ name: "robots", content: "noindex, nofollow" })
                      : O.push({ name: "robots", content: "index, follow" }),
                    s &&
                      O.push({
                        name: "article:published_time",
                        content: s || X
                      }),
                    l &&
                      O.push({
                        name: "article:modified_time",
                        content: l || N
                      }),
                    m && O.push({ name: "article:section", content: m }),
                    u && O.push({ name: "article:tag", content: u }),
                    O
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    a = e.id,
                    i = e.className,
                    o = Object(n.a)(e, ["children", "id", "className"]);
                  return m.a.createElement(
                    "div",
                    { id: a, className: i },
                    m.a.createElement(d.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          o.schema || "WebPage"
                        )
                      },
                      title: o.title ? o.title + y + b : b,
                      link: [
                        {
                          rel: "canonical",
                          href: f + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(o, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(l.Component);
      t.a = Object(u.a)(C);
    },
    418: function(e, t, a) {
      "use strict";
      var n = a(1),
        i = a.n(n);
      t.a = function(e) {
        var t = e.autoComplete,
          a = e.children;
        return i.a.createElement("form", { autoComplete: t }, a);
      };
    },
    419: function(e, t, a) {
      "use strict";
      var n = a(1),
        i = a.n(n),
        o = (a(420), a(416));
      t.a = function(e) {
        var t = e.id,
          a = e.type,
          n = e.name,
          r = e.value,
          c = e.onChange,
          s = e.label,
          l = e.disabled,
          m = e.className;
        return i.a.createElement(
          o.a,
          { className: "mb-3" },
          i.a.createElement("label", { htmlFor: t }, s),
          i.a.createElement("input", {
            id: t,
            type: a,
            name: n,
            value: r,
            onChange: c,
            disabled: l,
            className: m
          })
        );
      };
    },
    420: function(e, t, a) {},
    421: function(e, t, a) {
      "use strict";
      var n = a(1),
        i = a.n(n);
      a(422);
      t.a = function(e) {
        var t = e.label,
          a = e.type,
          n = e.onClick,
          o = e.className,
          r = e.disabled,
          c = e.variations,
          s = "";
        return (
          o && (s = o),
          c && (s = "".concat(s, " ").concat(c)),
          i.a.createElement(
            "button",
            { type: a, onClick: n, className: s, disabled: r },
            t
          )
        );
      };
    },
    422: function(e, t, a) {},
    423: function(e, t, a) {
      "use strict";
      var n = a(1),
        i = a.n(n),
        o = a(410);
      a(424);
      t.a = function(e) {
        var t = e.label,
          a = e.to,
          n = e.className;
        return i.a.createElement(o.a, { to: a, className: n }, t);
      };
    },
    424: function(e, t, a) {},
    429: function(e, t, a) {
      "use strict";
      var n = a(1),
        i = a.n(n);
      a(430);
      t.a = function(e) {
        var t = e.text,
          a = e.className;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            { className: "separator ".concat(a || "") },
            i.a.createElement("span", null, t)
          )
        );
      };
    },
    430: function(e, t, a) {},
    489: function(e, t, a) {},
    622: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        i = a.n(n),
        o = a(417),
        r = (a(489), a(415)),
        c = a(139),
        s = a(418),
        l = a(419),
        m = a(421),
        u = a(423),
        p = a(429);
      t.default = function() {
        return i.a.createElement(
          o.a,
          r.a.signup,
          i.a.createElement(
            "div",
            { className: "signup-page" },
            i.a.createElement(
              "div",
              { className: "logo" },
              i.a.createElement("img", { src: c.a, alt: "logo" })
            ),
            i.a.createElement(
              "div",
              { className: "signup-form-box" },
              i.a.createElement(
                s.a,
                { autoComplete: "off" },
                i.a.createElement(l.a, {
                  id: "name",
                  type: "text",
                  name: "name",
                  value: "",
                  label: "NAME"
                }),
                i.a.createElement(l.a, {
                  id: "username",
                  type: "text",
                  name: "username",
                  value: "",
                  label: "USERNAME"
                }),
                i.a.createElement(l.a, {
                  id: "email",
                  type: "email",
                  name: "email",
                  value: "",
                  label: "EMAIL"
                }),
                i.a.createElement(l.a, {
                  id: "password",
                  type: "password",
                  name: "password",
                  value: "",
                  label: "PASSWORD"
                }),
                i.a.createElement(l.a, {
                  id: "confirmPassword",
                  type: "password",
                  name: "confirmPassword",
                  value: "",
                  label: "CONFIRM PASSWORD"
                }),
                i.a.createElement(m.a, {
                  label: "CREATE ACCOUNT",
                  className: ""
                })
              ),
              i.a.createElement(p.a, { text: "Already have an account?" }),
              i.a.createElement(u.a, {
                to: "/login",
                label: "Login Here",
                className: "text-center mt-3 d-block fs-14"
              })
            ),
            i.a.createElement(
              "div",
              { className: "signup-footer" },
              "Made with ",
              i.a.createElement(
                "span",
                { role: "img", "aria-label": "heart" },
                "\ud83d\udc96"
              ),
              " by ",
              i.a.createElement(
                "a",
                { href: "http://abhijangir.me" },
                "Abhishar Jangir."
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=signup.c7230443.chunk.js.map
