(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    436: function(e, t, n) {
      "use strict";
      var a = n(148);
      t.a = {
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
    437: function(e, t, n) {
      "use strict";
      var a = n(96),
        c = n(31),
        r = n(32),
        o = n(35),
        i = n(33),
        l = n(34),
        s = n(1),
        u = n.n(s),
        d = n(113),
        m = n(443),
        p = n.n(m),
        g = n(436),
        b = g.a.default.siteURL,
        f = g.a.default.title,
        h = g.a.default.description,
        E = g.a.default.keywords,
        v = g.a.default.image,
        w = g.a.default.twitter,
        y = g.a.default.sep,
        k = g.a.default.updated,
        O = g.a.default.published,
        j = g.a.default.contentType,
        B = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(t, e),
            Object(r.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    c = e.image,
                    r = e.contentType,
                    o = e.twitter,
                    i = e.noCrawl,
                    l = e.published,
                    s = e.updated,
                    u = e.category,
                    d = e.tags,
                    m = e.keywords,
                    p = n ? (n + y + f).substring(0, 60) : f,
                    g = a ? a.substring(0, 155) : h,
                    B = c ? "".concat(b).concat(c) : v,
                    N = [
                      { itemprop: "name", content: p },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: B },
                      { name: "description", content: g },
                      { name: "keywords", content: m || E },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: w },
                      { name: "twitter:title", content: p },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: o || w },
                      { name: "twitter:image:src", content: B },
                      { property: "og:title", content: p },
                      { property: "og:type", content: r || j },
                      { property: "og:url", content: b + t },
                      { property: "og:image", content: B },
                      { property: "og:description", content: g },
                      { property: "og:site_name", content: f },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    i
                      ? N.push({ name: "robots", content: "noindex, nofollow" })
                      : N.push({ name: "robots", content: "index, follow" }),
                    l &&
                      N.push({
                        name: "article:published_time",
                        content: l || O
                      }),
                    s &&
                      N.push({
                        name: "article:modified_time",
                        content: s || k
                      }),
                    u && N.push({ name: "article:section", content: u }),
                    d && N.push({ name: "article:tag", content: d }),
                    N
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.id,
                    c = e.className,
                    r = Object(a.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: n, className: c },
                    u.a.createElement(p.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          r.schema || "WebPage"
                        )
                      },
                      title: r.title ? r.title + y + f : f,
                      link: [
                        {
                          rel: "canonical",
                          href: b + this.props.location.pathname
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
        })(s.Component);
      t.a = Object(d.a)(B);
    },
    439: function(e, t, n) {
      "use strict";
      var a = n(1),
        c = n.n(a),
        r = n(430);
      n(440);
      t.a = function(e) {
        var t = e.label,
          n = e.to,
          a = e.className;
        return c.a.createElement(r.a, { to: n, className: a }, t);
      };
    },
    440: function(e, t, n) {},
    447: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return i;
        });
      var a = n(21),
        c = n(12),
        r = function(e) {
          return e.get(c.e);
        },
        o = Object(a.createSelector)(r, function(e) {
          return e.get("data");
        }),
        i = Object(a.createSelector)(r, function(e) {
          return e.get("isFetching");
        });
    },
    457: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return o;
        }),
        n.d(t, "a", function() {
          return i;
        });
      var a = n(1),
        c = n.n(a),
        r = (n(458),
        function(e) {
          var t = e.children,
            n = e.className;
          return c.a.createElement(
            "div",
            { className: "row ".concat(n || "") },
            t
          );
        }),
        o = function(e) {
          var t = e.children;
          return c.a.createElement("div", { className: "container-fluid" }, t);
        },
        i = function(e) {
          var t = e.children,
            n = e.xs,
            a = e.sm,
            r = e.md,
            o = e.lg,
            i = e.className,
            l = "";
          return (
            n && (l = "col-xs-".concat(n)),
            a && (l = "".concat(l, " col-sm-").concat(a)),
            r && (l = "".concat(l, " col-md-").concat(r)),
            o && (l = "".concat(l, " col-lg-").concat(o)),
            i && (l = "".concat(l, " ").concat(i)),
            c.a.createElement("div", { className: l }, t)
          );
        };
    },
    458: function(e, t, n) {},
    719: function(e, t, n) {},
    727: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(29),
        c = n(31),
        r = n(35),
        o = n(33),
        i = n(32),
        l = n(34),
        s = n(1),
        u = n.n(s),
        d = (n(719), n(462)),
        m = n(437),
        p = n(436),
        g = n(457),
        b = n(25),
        f = n(110),
        h = n(439),
        E = (function(e) {
          function t(e) {
            var n;
            return (
              Object(c.a)(this, t),
              ((n = Object(r.a)(
                this,
                Object(o.a)(t).call(this, e)
              )).renderPageHeader = function() {
                var e = Object(d.pathOr)(null, "data._id", n.props);
                return u.a.createElement(
                  "div",
                  { className: "page-header" },
                  u.a.createElement("h1", null, "Blog Detail"),
                  e &&
                    u.a.createElement(h.a, {
                      to: "/blog/edit/".concat(e),
                      label: "Edit",
                      className: "float-right"
                    })
                );
              }),
              (n.contentBlock = function(e, t, n) {
                return u.a.createElement(
                  "div",
                  { className: "content-block" },
                  u.a.createElement("div", { className: "heading" }, e),
                  u.a.createElement(
                    "div",
                    { className: "content ".concat(n || "") },
                    t
                  )
                );
              }),
              (n.renderCategories = function(e) {
                var t = n.props.categories,
                  a = [];
                return (
                  e &&
                    e.map(function(e) {
                      var n = t.filter(function(t) {
                        return t._id === parseInt(e);
                      });
                      return n.length > 0 && a.push(n[0].name), e;
                    }),
                  u.a.createElement("span", null, a.toString())
                );
              }),
              (n.renderPageBody = function() {
                var e = n.props.data,
                  t = e.title,
                  a = e.author,
                  c = e.keywords,
                  r = e.imageSrc,
                  o = e.story,
                  i = e.category,
                  l = e.isPublished,
                  s = e.publishedBy,
                  d = e.isFeatured,
                  m = e.isTrending,
                  p = e.viewsCount,
                  h = e.sharedCount,
                  E = e.createdDate,
                  v = e.updatedDate,
                  w = e.publishedDate;
                return u.a.createElement(
                  "div",
                  { className: "page-body" },
                  u.a.createElement(
                    g.c,
                    null,
                    u.a.createElement(
                      g.a,
                      { lg: "8" },
                      n.contentBlock("title", t)
                    ),
                    u.a.createElement(
                      g.a,
                      { lg: "4" },
                      n.contentBlock("author", a)
                    )
                  ),
                  u.a.createElement(
                    g.c,
                    null,
                    u.a.createElement(
                      g.a,
                      { lg: "6" },
                      u.a.createElement(
                        g.c,
                        null,
                        u.a.createElement(
                          g.a,
                          { lg: "6" },
                          n.contentBlock("publish Status", Object(b.b)(f.b, l))
                        ),
                        u.a.createElement(
                          g.a,
                          { lg: "6" },
                          n.contentBlock("Published By", Object(b.b)(f.c, s))
                        ),
                        u.a.createElement(
                          g.a,
                          { lg: "6" },
                          n.contentBlock("Published Date ", Object(b.c)(w))
                        ),
                        u.a.createElement(
                          g.a,
                          { lg: "6" },
                          n.contentBlock("Updated Date", Object(b.c)(v))
                        ),
                        u.a.createElement(
                          g.a,
                          { lg: "6" },
                          n.contentBlock("Created Date  ", Object(b.c)(E))
                        ),
                        u.a.createElement(g.a, { lg: "6" }),
                        u.a.createElement(
                          g.a,
                          { lg: "4" },
                          n.contentBlock("Shared Count ", h)
                        ),
                        u.a.createElement(
                          g.a,
                          { lg: "4" },
                          n.contentBlock("Views Count ", p)
                        ),
                        u.a.createElement(g.a, { lg: "4" }),
                        u.a.createElement(
                          g.a,
                          { lg: "4" },
                          n.contentBlock("Trending", Object(b.b)(f.d, m))
                        ),
                        u.a.createElement(
                          g.a,
                          { lg: "4" },
                          n.contentBlock("Featured", Object(b.b)(f.a, d))
                        )
                      )
                    ),
                    u.a.createElement(
                      g.a,
                      { lg: "6" },
                      u.a.createElement(
                        g.c,
                        null,
                        u.a.createElement(
                          g.a,
                          { lg: "12" },
                          n.contentBlock(
                            "IMAGE",
                            u.a.createElement("img", { src: r, alt: t })
                          )
                        )
                      )
                    )
                  ),
                  u.a.createElement(
                    g.c,
                    null,
                    u.a.createElement(
                      g.a,
                      { lg: "12" },
                      n.contentBlock("Keywords ", c)
                    ),
                    u.a.createElement(
                      g.a,
                      { lg: "12" },
                      n.contentBlock("Category", n.renderCategories(i))
                    ),
                    u.a.createElement(
                      g.a,
                      { lg: "12" },
                      n.contentBlock(
                        "Blog",
                        u.a.createElement("div", {
                          className: "blog-content",
                          dangerouslySetInnerHTML: { __html: o }
                        }),
                        "bg-white"
                      )
                    )
                  )
                );
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(l.a)(t, e),
            Object(i.a)(t, null, [
              {
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                  var n = e.match,
                    a = Object(d.pathOr)(null, "params.blogId", n);
                  return a ? { blogId: a } : null;
                }
              }
            ]),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props,
                    t = e.isFetching,
                    n = e.fetchBlog,
                    a = this.state.blogId;
                  t || n(a);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.reset();
                }
              },
              {
                key: "render",
                value: function() {
                  return u.a.createElement(
                    m.a,
                    p.a.blog,
                    u.a.createElement(
                      "div",
                      { className: "blog-page" },
                      this.renderPageHeader(),
                      this.renderPageBody()
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.a.PureComponent),
        v = n(21),
        w = n(117),
        y = n(42),
        k = function(e) {
          return e.get(y.a);
        },
        O = Object(v.createSelector)(k, function(e) {
          return e.get("data").toJS();
        }),
        j = Object(v.createSelector)(k, function(e) {
          return e.get("isFetching");
        }),
        B = n(447),
        N = Object(v.createStructuredSelector)({
          data: O,
          isFetching: j,
          categories: B.a
        });
      t.default = Object(a.connect)(N, function(e) {
        return {
          fetchBlog: function(t) {
            return e(Object(w.a)(t));
          },
          reset: function() {
            return e(Object(w.d)());
          }
        };
      })(E);
    }
  }
]);
//# sourceMappingURL=blog.23259007.chunk.js.map
