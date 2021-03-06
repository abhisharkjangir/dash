(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
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
        r = n(31),
        o = n(32),
        c = n(35),
        i = n(33),
        s = n(34),
        l = n(1),
        u = n.n(l),
        g = n(113),
        d = n(443),
        p = n.n(d),
        m = n(436),
        f = m.a.default.siteURL,
        b = m.a.default.title,
        h = m.a.default.description,
        y = m.a.default.keywords,
        w = m.a.default.image,
        v = m.a.default.twitter,
        O = m.a.default.sep,
        j = m.a.default.updated,
        C = m.a.default.published,
        E = m.a.default.contentType,
        k = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(c.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(o.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    r = e.image,
                    o = e.contentType,
                    c = e.twitter,
                    i = e.noCrawl,
                    s = e.published,
                    l = e.updated,
                    u = e.category,
                    g = e.tags,
                    d = e.keywords,
                    p = n ? (n + O + b).substring(0, 60) : b,
                    m = a ? a.substring(0, 155) : h,
                    k = r ? "".concat(f).concat(r) : w,
                    N = [
                      { itemprop: "name", content: p },
                      { itemprop: "description", content: m },
                      { itemprop: "image", content: k },
                      { name: "description", content: m },
                      { name: "keywords", content: d || y },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: v },
                      { name: "twitter:title", content: p },
                      { name: "twitter:description", content: m },
                      { name: "twitter:creator", content: c || v },
                      { name: "twitter:image:src", content: k },
                      { property: "og:title", content: p },
                      { property: "og:type", content: o || E },
                      { property: "og:url", content: f + t },
                      { property: "og:image", content: k },
                      { property: "og:description", content: m },
                      { property: "og:site_name", content: b },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    i
                      ? N.push({ name: "robots", content: "noindex, nofollow" })
                      : N.push({ name: "robots", content: "index, follow" }),
                    s &&
                      N.push({
                        name: "article:published_time",
                        content: s || C
                      }),
                    l &&
                      N.push({
                        name: "article:modified_time",
                        content: l || j
                      }),
                    u && N.push({ name: "article:section", content: u }),
                    g && N.push({ name: "article:tag", content: g }),
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
                    r = e.className,
                    o = Object(a.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: n, className: r },
                    u.a.createElement(p.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          o.schema || "WebPage"
                        )
                      },
                      title: o.title ? o.title + O + b : b,
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
      t.a = Object(g.a)(k);
    },
    439: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a),
        o = n(430);
      n(440);
      t.a = function(e) {
        var t = e.label,
          n = e.to,
          a = e.className;
        return r.a.createElement(o.a, { to: n, className: a }, t);
      };
    },
    440: function(e, t, n) {},
    447: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return i;
        });
      var a = n(21),
        r = n(12),
        o = function(e) {
          return e.get(r.e);
        },
        c = Object(a.createSelector)(o, function(e) {
          return e.get("data");
        }),
        i = Object(a.createSelector)(o, function(e) {
          return e.get("isFetching");
        });
    },
    451: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      n(452);
      t.a = function(e) {
        var t = e.text;
        return r.a.createElement("div", { className: "page-heading mb-2" }, t);
      };
    },
    452: function(e, t, n) {},
    655: function(e, t, n) {},
    726: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(21),
        r = n(29),
        o = n(454),
        c = n(50),
        i = n(31),
        s = n(32),
        l = n(35),
        u = n(33),
        g = n(34),
        d = n(1),
        p = n.n(d),
        m = n(430),
        f = n(462),
        b = (n(655), n(437)),
        h = n(436),
        y = n(451),
        w = n(439),
        v = n(656),
        O = (function(e) {
          function t(e) {
            var n;
            return (
              Object(i.a)(this, t),
              ((n = Object(l.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).selectCategory = function(e) {
                (0, n.props.selectCategory)(e._id);
              }),
              (n.isTagged = function(e) {
                var t = n.props.selectedCategory,
                  a = Object(f.pathOr)(void 0, "category", e);
                return (
                  !!t && (!(a && a.length < 1) && !!a.includes(t.toString()))
                );
              }),
              (n.mapWithCategory = function(e, t) {
                var a = n.props,
                  r = a.selectedCategory,
                  i = a.updateBlog,
                  s = Object(f.pathOr)([], "category", t),
                  l = Object(c.a)({}, t);
                (s = e
                  ? s.filter(function(e) {
                      return e !== r.toString();
                    })
                  : [].concat(Object(o.a)(s), [r.toString()])),
                  (l.category = s);
                var u = new FormData();
                v.Object.keys(l).map(function(e) {
                  return u.append(e, l[e]), e;
                }),
                  i(u, { blogData: l });
              }),
              (n.renderPageHeader = function() {
                return p.a.createElement(
                  "div",
                  { className: "page-header" },
                  p.a.createElement("h1", null, "Category - Blog Tagging"),
                  p.a.createElement(w.a, {
                    to: "/blogs/add",
                    className: "float-right",
                    label: "Add New Blog"
                  })
                );
              }),
              (n.renderPageBody = function() {
                return p.a.createElement(
                  "div",
                  { className: "page-body" },
                  n.renderCategories(),
                  n.renderBlogs()
                );
              }),
              (n.renderCategories = function() {
                var e = n.props,
                  t = e.categories,
                  a = e.selectedCategory;
                return p.a.createElement(
                  "ul",
                  { className: "category-list" },
                  p.a.createElement("p", null, "Categories"),
                  t &&
                    t.map(function(e, t) {
                      return p.a.createElement(
                        p.a.Fragment,
                        null,
                        p.a.createElement(
                          "li",
                          {
                            key: e._id,
                            className: a === e._id ? "active" : "",
                            onClick: function() {
                              return n.selectCategory(e);
                            }
                          },
                          t + 1,
                          ". ",
                          e.name,
                          a === e._id &&
                            p.a.createElement("span", {
                              className: "right-arrow"
                            })
                        )
                      );
                    })
                );
              }),
              (n.renderBlogs = function() {
                var e = n.props.blogs;
                return p.a.createElement(
                  "ul",
                  { className: "blogs-list" },
                  p.a.createElement("p", null, "Blogs"),
                  e &&
                    e.map(function(e, t) {
                      return n.renderBlogItem(e, t);
                    })
                );
              }),
              (n.renderBlogItem = function(e, t) {
                var a = n.isTagged(e);
                return p.a.createElement(
                  "li",
                  { key: e._id, className: a ? "active" : "" },
                  p.a.createElement(
                    "div",
                    {
                      className: "tag-status",
                      title: a ? "Tagged" : "Not Tagged",
                      onClick: function() {
                        return n.mapWithCategory(a, e);
                      }
                    },
                    a ? "\u2611" : "\u2610"
                  ),
                  p.a.createElement(
                    m.a,
                    { to: "/blog/".concat(e._id) },
                    t + 1,
                    ". ",
                    e.title
                  )
                );
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(g.a)(t, e),
            Object(s.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.fetchBlogs();
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  null === e.selectedCategory &&
                    e.categories.length > 0 &&
                    e.selectCategory(e.categories[0]._id);
                }
              },
              {
                key: "render",
                value: function() {
                  return p.a.createElement(
                    b.a,
                    h.a.tagging,
                    p.a.createElement(
                      "div",
                      { className: "tagging-page" },
                      p.a.createElement(y.a, {
                        text: "Dashboard \u2022 Category Tagging"
                      }),
                      this.renderPageHeader(),
                      this.renderPageBody()
                    )
                  );
                }
              }
            ]),
            t
          );
        })(p.a.PureComponent),
        j = n(447),
        C = n(63),
        E = n(17),
        k = function(e) {
          return e.get(E.f);
        },
        N = Object(a.createSelector)(k, function(e) {
          return e.get("data");
        }),
        X = Object(a.createSelector)(k, function(e) {
          return e.get("selectedCategory");
        }),
        B = Object(a.createStructuredSelector)({
          categories: j.a,
          blogs: N,
          selectedCategory: X
        });
      t.default = Object(r.connect)(B, function(e) {
        return {
          fetchBlogs: function(t) {
            return e(Object(C.a)(t));
          },
          selectCategory: function(t) {
            return e(Object(C.e)(t));
          },
          updateBlog: function(t, n) {
            return e(Object(C.f)(t, n));
          }
        };
      })(O);
    }
  }
]);
//# sourceMappingURL=tagging.4718b15c.chunk.js.map
