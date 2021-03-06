(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    436: function(t, e, n) {
      "use strict";
      var a = n(148);
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
    437: function(t, e, n) {
      "use strict";
      var a = n(96),
        o = n(31),
        i = n(32),
        r = n(35),
        c = n(33),
        s = n(34),
        l = n(1),
        p = n.n(l),
        d = n(113),
        u = n(443),
        m = n.n(u),
        g = n(436),
        f = g.a.default.siteURL,
        h = g.a.default.title,
        w = g.a.default.description,
        b = g.a.default.keywords,
        y = g.a.default.image,
        O = g.a.default.twitter,
        X = g.a.default.sep,
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
                    m = n ? (n + X + h).substring(0, 60) : h,
                    g = a ? a.substring(0, 155) : w,
                    j = o ? "".concat(f).concat(o) : y,
                    N = [
                      { itemprop: "name", content: m },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: j },
                      { name: "description", content: g },
                      { name: "keywords", content: u || b },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: O },
                      { name: "twitter:title", content: m },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: r || O },
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
                      title: i.title ? i.title + X + h : h,
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
    439: function(t, e, n) {
      "use strict";
      var a = n(1),
        o = n.n(a),
        i = n(430);
      n(440);
      e.a = function(t) {
        var e = t.label,
          n = t.to,
          a = t.className;
        return o.a.createElement(i.a, { to: n, className: a }, e);
      };
    },
    440: function(t, e, n) {},
    527: function(t, e, n) {},
    728: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n(29),
        o = n(1),
        i = n.n(o),
        r = n(437),
        c = (n(527), n(436)),
        s = n(439),
        l = n(148),
        p = n(21),
        d = n(51),
        u = Object(p.createStructuredSelector)({ isLoggedIn: Object(d.a)() });
      e.default = Object(a.connect)(u, null)(function(t) {
        var e = t.isLoggedIn;
        return i.a.createElement(
          r.a,
          Object.assign({}, c.a.notfound, { noCrawl: !0 }),
          i.a.createElement(
            "div",
            { className: e ? "notfound-page logged-in" : "notfound-page" },
            i.a.createElement(
              "div",
              { className: "logo" },
              i.a.createElement("img", { src: l.a, alt: "logo" })
            ),
            i.a.createElement(
              "div",
              { className: "box" },
              i.a.createElement("h2", null, "404"),
              i.a.createElement(
                "p",
                null,
                "This is not the web page you are looking for."
              )
            ),
            i.a.createElement(s.a, {
              to: e ? "/" : "/login",
              label: e ? "GO BACK TO HOME" : "GO BACK TO LOGIN"
            })
          )
        );
      });
    }
  }
]);
//# sourceMappingURL=notfound.b054f12b.chunk.js.map
