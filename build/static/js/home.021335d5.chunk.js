(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    405: function(t, e, n) {
      "use strict";
      var i = n(99);
      e.a = {
        default: {
          title: "Meuzic",
          description: "www.meuzic.com",
          image: i.a,
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
    406: function(t, e, n) {
      "use strict";
      var i = n(81),
        o = n(22),
        a = n(23),
        r = n(25),
        c = n(24),
        s = n(26),
        p = n(1),
        d = n.n(p),
        u = n(97),
        l = n(417),
        m = n.n(l),
        g = n(405),
        h = g.a.default.siteURL,
        f = g.a.default.title,
        w = g.a.default.description,
        b = g.a.default.keywords,
        y = g.a.default.image,
        X = g.a.default.twitter,
        O = g.a.default.sep,
        j = g.a.default.updated,
        k = g.a.default.published,
        v = g.a.default.contentType,
        D = (function(t) {
          function e() {
            return (
              Object(o.a)(this, e),
              Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(e, t),
            Object(a.a)(e, [
              {
                key: "getMetaTags",
                value: function(t, e) {
                  var n = t.title,
                    i = t.description,
                    o = t.image,
                    a = t.contentType,
                    r = t.twitter,
                    c = t.noCrawl,
                    s = t.published,
                    p = t.updated,
                    d = t.category,
                    u = t.tags,
                    l = t.keywords,
                    m = n ? (n + O + f).substring(0, 60) : f,
                    g = i ? i.substring(0, 155) : w,
                    D = o ? "".concat(h).concat(o) : y,
                    T = [
                      { itemprop: "name", content: m },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: D },
                      { name: "description", content: g },
                      { name: "keywords", content: l || b },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: X },
                      { name: "twitter:title", content: m },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: r || X },
                      { name: "twitter:image:src", content: D },
                      { property: "og:title", content: m },
                      { property: "og:type", content: a || v },
                      { property: "og:url", content: h + e },
                      { property: "og:image", content: D },
                      { property: "og:description", content: g },
                      { property: "og:site_name", content: f },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c
                      ? T.push({ name: "robots", content: "noindex, nofollow" })
                      : T.push({ name: "robots", content: "index, follow" }),
                    s &&
                      T.push({
                        name: "article:published_time",
                        content: s || k
                      }),
                    p &&
                      T.push({
                        name: "article:modified_time",
                        content: p || j
                      }),
                    d && T.push({ name: "article:section", content: d }),
                    u && T.push({ name: "article:tag", content: u }),
                    T
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
                    a = Object(i.a)(t, ["children", "id", "className"]);
                  return d.a.createElement(
                    "div",
                    { id: n, className: o },
                    d.a.createElement(m.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          a.schema || "WebPage"
                        )
                      },
                      title: a.title ? a.title + O + f : f,
                      link: [
                        {
                          rel: "canonical",
                          href: h + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(a, this.props.location.pathname)
                    }),
                    e
                  );
                }
              }
            ]),
            e
          );
        })(p.Component);
      e.a = Object(u.a)(D);
    },
    419: function(t, e, n) {},
    438: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n(22),
        o = n(23),
        a = n(25),
        r = n(24),
        c = n(26),
        s = n(1),
        p = n.n(s),
        d = (n(419), n(406)),
        u = n(405),
        l = (function(t) {
          function e(t) {
            var n;
            return (
              Object(i.a)(this, e),
              ((n = Object(a.a)(
                this,
                Object(r.a)(e).call(this, t)
              )).state = {}),
              n
            );
          }
          return (
            Object(c.a)(e, t),
            Object(o.a)(e, [
              {
                key: "render",
                value: function() {
                  return p.a.createElement(d.a, u.a.home, "hi");
                }
              }
            ]),
            e
          );
        })(p.a.PureComponent);
      e.default = l;
    }
  }
]);
//# sourceMappingURL=home.021335d5.chunk.js.map
