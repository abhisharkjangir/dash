(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    405: function(t, e, n) {
      "use strict";
      var a = n(99);
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
    406: function(t, e, n) {
      "use strict";
      var a = n(81),
        o = n(22),
        i = n(23),
        r = n(25),
        c = n(24),
        s = n(26),
        l = n(1),
        p = n.n(l),
        d = n(97),
        u = n(417),
        m = n.n(u),
        g = n(405),
        f = g.a.default.siteURL,
        h = g.a.default.title,
        w = g.a.default.description,
        b = g.a.default.keywords,
        y = g.a.default.image,
        X = g.a.default.twitter,
        v = g.a.default.sep,
        k = g.a.default.updated,
        E = g.a.default.published,
        O = g.a.default.contentType,
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
                    m = n ? (n + v + h).substring(0, 60) : h,
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
                      { property: "og:type", content: i || O },
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
                        content: s || E
                      }),
                    l &&
                      N.push({
                        name: "article:modified_time",
                        content: l || k
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
                      title: i.title ? i.title + v + h : h,
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
    408: function(t, e, n) {
      "use strict";
      var a = n(1),
        o = n.n(a),
        i = n(400);
      n(409);
      e.a = function(t) {
        var e = t.label,
          n = t.to,
          a = t.className;
        return o.a.createElement(i.a, { to: n, className: a }, e);
      };
    },
    409: function(t, e, n) {},
    430: function(t, e, n) {},
    441: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n(1),
        o = n.n(a),
        i = n(406),
        r = (n(430), n(405)),
        c = n(408),
        s = n(99);
      e.default = function() {
        return o.a.createElement(
          i.a,
          Object.assign({}, r.a.notfound, { noCrawl: !0 }),
          o.a.createElement(
            "div",
            { className: "notfound-page" },
            o.a.createElement(
              "div",
              { className: "logo" },
              o.a.createElement("img", { src: s.a, alt: "logo" })
            ),
            o.a.createElement(
              "div",
              { className: "box" },
              o.a.createElement("h2", null, "404"),
              o.a.createElement(
                "p",
                null,
                "This is not the web page you are looking for."
              )
            ),
            o.a.createElement(c.a, { to: "/", label: "GO BACK TO HOME" })
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=notfound.f42438ba.chunk.js.map
