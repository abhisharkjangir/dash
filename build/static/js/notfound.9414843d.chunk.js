(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    415: function(t, e, n) {
      "use strict";
      var a = n(139);
      e.a = {
        default: {
          title: "Meuzic",
          description: "www.meuzic.com",
          image: a.a,
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
    417: function(t, e, n) {
      "use strict";
      var a = n(89),
        o = n(32),
        i = n(33),
        r = n(35),
        c = n(34),
        s = n(36),
        l = n(1),
        p = n.n(l),
        d = n(105),
        u = n(427),
        m = n.n(u),
        g = n(415),
        f = g.a.default.siteURL,
        h = g.a.default.title,
        w = g.a.default.description,
        b = g.a.default.keywords,
        y = g.a.default.image,
        X = g.a.default.twitter,
        O = g.a.default.sep,
        v = g.a.default.updated,
        k = g.a.default.published,
        E = g.a.default.contentType,
        j = (function(t) {
          function e() {
            return (
              Object(o.a)(this, e),
              Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(e, t),
            Object(i.a)(e, [
              {
                key: "getMetaTags",
                value: function(t, e) {
                  var n = t.title,
                    a = t.description,
                    o = t.image,
                    i = t.contentType,
                    r = t.twitter,
                    c = t.noCrawl,
                    s = t.published,
                    l = t.updated,
                    p = t.category,
                    d = t.tags,
                    u = t.keywords,
                    m = n ? (n + O + h).substring(0, 60) : h,
                    g = a ? a.substring(0, 155) : w,
                    j = o ? "".concat(f).concat(o) : y,
                    N = [
                      { itemprop: "name", content: m },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: j },
                      { name: "description", content: g },
                      { name: "keywords", content: u || b },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: X },
                      { name: "twitter:title", content: m },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: r || X },
                      { name: "twitter:image:src", content: j },
                      { property: "og:title", content: m },
                      { property: "og:type", content: i || E },
                      { property: "og:url", content: f + e },
                      { property: "og:image", content: j },
                      { property: "og:description", content: g },
                      { property: "og:site_name", content: h },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c
                      ? N.push({ name: "robots", content: "noindex, nofollow" })
                      : N.push({ name: "robots", content: "index, follow" }),
                    s &&
                      N.push({
                        name: "article:published_time",
                        content: s || k
                      }),
                    l &&
                      N.push({
                        name: "article:modified_time",
                        content: l || v
                      }),
                    p && N.push({ name: "article:section", content: p }),
                    d && N.push({ name: "article:tag", content: d }),
                    N
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var t = this.props,
                    e = t.children,
                    n = t.id,
                    o = t.className,
                    i = Object(a.a)(t, ["children", "id", "className"]);
                  return p.a.createElement(
                    "div",
                    { id: n, className: o },
                    p.a.createElement(m.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          i.schema || "WebPage"
                        )
                      },
                      title: i.title ? i.title + O + h : h,
                      link: [
                        {
                          rel: "canonical",
                          href: f + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(i, this.props.location.pathname)
                    }),
                    e
                  );
                }
              }
            ]),
            e
          );
        })(l.Component);
      e.a = Object(d.a)(j);
    },
    423: function(t, e, n) {
      "use strict";
      var a = n(1),
        o = n.n(a),
        i = n(410);
      n(424);
      e.a = function(t) {
        var e = t.label,
          n = t.to,
          a = t.className;
        return o.a.createElement(i.a, { to: n, className: a }, e);
      };
    },
    424: function(t, e, n) {},
    492: function(t, e, n) {},
    627: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n(5),
        o = n(29),
        i = n(1),
        r = n.n(i),
        c = n(417),
        s = (n(492), n(415)),
        l = n(423),
        p = n(139);
      e.default = Object(o.connect)(function(t) {
        return Object(a.a)({}, t.app);
      }, null)(function(t) {
        var e = t.isLoggedIn;
        return r.a.createElement(
          c.a,
          Object.assign({}, s.a.notfound, { noCrawl: !0 }),
          r.a.createElement(
            "div",
            { className: e ? "notfound-page logged-in" : "notfound-page" },
            r.a.createElement(
              "div",
              { className: "logo" },
              r.a.createElement("img", { src: p.a, alt: "logo" })
            ),
            r.a.createElement(
              "div",
              { className: "box" },
              r.a.createElement("h2", null, "404"),
              r.a.createElement(
                "p",
                null,
                "This is not the web page you are looking for."
              )
            ),
            r.a.createElement(l.a, {
              to: e ? "/" : "/login",
              label: e ? "GO BACK TO HOME" : "GO BACK TO LOGIN"
            })
          )
        );
      });
    }
  }
]);
//# sourceMappingURL=notfound.9414843d.chunk.js.map
