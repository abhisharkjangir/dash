(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    405: function(e, t, n) {
      "use strict";
      var a = n(99);
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
    406: function(e, t, n) {
      "use strict";
      var a = n(81),
        r = n(22),
        i = n(23),
        c = n(25),
        o = n(24),
        l = n(26),
        s = n(1),
        u = n.n(s),
        m = n(97),
        d = n(417),
        p = n.n(d),
        f = n(405),
        g = f.a.default.siteURL,
        b = f.a.default.title,
        h = f.a.default.description,
        E = f.a.default.keywords,
        y = f.a.default.image,
        v = f.a.default.twitter,
        O = f.a.default.sep,
        N = f.a.default.updated,
        w = f.a.default.published,
        k = f.a.default.contentType,
        T = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(c.a)(this, Object(o.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(t, e),
            Object(i.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    r = e.image,
                    i = e.contentType,
                    c = e.twitter,
                    o = e.noCrawl,
                    l = e.published,
                    s = e.updated,
                    u = e.category,
                    m = e.tags,
                    d = e.keywords,
                    p = n ? (n + O + b).substring(0, 60) : b,
                    f = a ? a.substring(0, 155) : h,
                    T = r ? "".concat(g).concat(r) : y,
                    j = [
                      { itemprop: "name", content: p },
                      { itemprop: "description", content: f },
                      { itemprop: "image", content: T },
                      { name: "description", content: f },
                      { name: "keywords", content: d || E },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: v },
                      { name: "twitter:title", content: p },
                      { name: "twitter:description", content: f },
                      { name: "twitter:creator", content: c || v },
                      { name: "twitter:image:src", content: T },
                      { property: "og:title", content: p },
                      { property: "og:type", content: i || k },
                      { property: "og:url", content: g + t },
                      { property: "og:image", content: T },
                      { property: "og:description", content: f },
                      { property: "og:site_name", content: b },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    o
                      ? j.push({ name: "robots", content: "noindex, nofollow" })
                      : j.push({ name: "robots", content: "index, follow" }),
                    l &&
                      j.push({
                        name: "article:published_time",
                        content: l || w
                      }),
                    s &&
                      j.push({
                        name: "article:modified_time",
                        content: s || N
                      }),
                    u && j.push({ name: "article:section", content: u }),
                    m && j.push({ name: "article:tag", content: m }),
                    j
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
                    i = Object(a.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: n, className: r },
                    u.a.createElement(p.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          i.schema || "WebPage"
                        )
                      },
                      title: i.title ? i.title + O + b : b,
                      link: [
                        {
                          rel: "canonical",
                          href: g + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(i, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.a = Object(m.a)(T);
    },
    407: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      t.a = function(e) {
        var t = e.children,
          n = e.className;
        return r.a.createElement("div", { className: n }, t);
      };
    },
    408: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a),
        i = n(400);
      n(409);
      t.a = function(e) {
        var t = e.label,
          n = e.to,
          a = e.className;
        return r.a.createElement(i.a, { to: n, className: a }, t);
      };
    },
    409: function(e, t, n) {},
    410: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      t.a = function(e) {
        var t = e.autoComplete,
          n = e.children;
        return r.a.createElement("form", { autoComplete: t }, n);
      };
    },
    411: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a),
        i = (n(412), n(407));
      t.a = function(e) {
        var t = e.id,
          n = e.type,
          a = e.name,
          c = e.value,
          o = e.onChange,
          l = e.label,
          s = e.disabled,
          u = e.className;
        return r.a.createElement(
          i.a,
          { className: "mb-3" },
          r.a.createElement("label", { htmlFor: t }, l),
          r.a.createElement("input", {
            id: t,
            type: n,
            name: a,
            value: c,
            onChange: o,
            disabled: s,
            className: u
          })
        );
      };
    },
    412: function(e, t, n) {},
    413: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      n(414);
      t.a = function(e) {
        var t = e.label,
          n = e.type,
          a = e.onClick,
          i = e.className,
          c = e.disabled;
        return r.a.createElement(
          "button",
          { type: n, onClick: a, className: i, disabled: c },
          t
        );
      };
    },
    414: function(e, t, n) {},
    415: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      n(416);
      t.a = function(e) {
        var t = e.text,
          n = e.className;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            { className: "separator ".concat(n || "") },
            r.a.createElement("span", null, t)
          )
        );
      };
    },
    416: function(e, t, n) {},
    433: function(e, t, n) {},
    434: function(e, t, n) {},
    435: function(e, t, n) {},
    436: function(e, t, n) {},
    442: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(7),
        r = n(21),
        i = n(437),
        c = n(55),
        o = n(22),
        l = n(23),
        s = n(25),
        u = n(24),
        m = n(26),
        d = n(1),
        p = n.n(d),
        f = n(69),
        g = n(68),
        b = n.n(g),
        h = n(431),
        E = n.n(h),
        y = n(406),
        v = (n(433), n(405)),
        O = n(410),
        N = n(411),
        w = (n(413), n(408)),
        k = (n(415), n(133)),
        T = n(132),
        j = function(e) {
          return k.a.post(Object(T.a)("blogs"), e);
        },
        C = n(54),
        B = (n(434),
        function(e) {
          var t = e.text;
          return p.a.createElement(
            "div",
            { className: "page-heading mb-2" },
            t
          );
        }),
        F = n(78),
        D = n(57),
        S = n(101),
        X = (n(435), n(407)),
        _ = (n(436),
        function(e) {
          var t = e.id,
            n = e.type,
            a = e.name,
            r = e.value,
            i = e.onChange,
            c = e.label,
            o = e.disabled,
            l = e.className,
            s = e.options;
          return p.a.createElement(
            X.a,
            { className: "mb-3" },
            p.a.createElement("label", { htmlFor: t }, c),
            p.a.createElement(
              "select",
              {
                id: t,
                type: n,
                name: a,
                value: r,
                onChange: i,
                disabled: o,
                className: l
              },
              s &&
                s.map(function(e) {
                  return p.a.createElement(
                    "option",
                    { key: e.id, value: e.id },
                    e.name
                  );
                })
            )
          );
        }),
        A = (function(e) {
          function t(e) {
            var n;
            return (
              Object(o.a)(this, t),
              ((n = Object(s.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).fetchBlogs = function() {
                var e = n.props,
                  t = (e.data, e.fetchBlogs),
                  a = e.fetchBlogsSuccess,
                  r = e.fetchBlogsError,
                  i = e.updateFilters,
                  c = e.location,
                  o = e.filters,
                  l = e.history,
                  s = Object(C.d)(c, o);
                i(s),
                  l.replace({
                    path: c.pathname,
                    search: b.a.stringify(Object(C.a)(s))
                  }),
                  t(),
                  j(Object(C.a)(s))
                    .then(function(e) {
                      e.data.success
                        ? a(e.data.data)
                        : (r(e.data.message), f.b.error(e.data.message));
                    })
                    .catch(function(e) {
                      r(e);
                    });
              }),
              (n.renderBlogsTable = function() {
                var e = n.props,
                  t = e.data,
                  a = e.isFetching;
                if (a) {
                  var r = ["", "", "", "", "", ""];
                  return p.a.createElement(
                    p.a.Fragment,
                    null,
                    r.map(function(e, t) {
                      return p.a.createElement(
                        "div",
                        { key: t, className: "table-skeleton" },
                        r.map(function(e, t) {
                          return p.a.createElement("div", null);
                        })
                      );
                    })
                  );
                }
                return a || 0 !== t.length
                  ? !a && t.length > 0
                    ? p.a.createElement(
                        "div",
                        { className: "table-responsive" },
                        p.a.createElement(
                          "table",
                          { className: "table" },
                          p.a.createElement(
                            "thead",
                            null,
                            p.a.createElement(
                              "tr",
                              null,
                              n.TABLE_COLUMNS.map(function(e, t) {
                                return p.a.createElement(
                                  "th",
                                  { key: t },
                                  e.name
                                );
                              })
                            )
                          ),
                          p.a.createElement(
                            "tbody",
                            null,
                            t.map(function(e) {
                              return p.a.createElement(
                                "tr",
                                { key: e._id },
                                n.TABLE_COLUMNS.map(function(t, n) {
                                  return p.a.createElement(
                                    "td",
                                    { key: n },
                                    t.getValue(e)
                                  );
                                })
                              );
                            })
                          )
                        )
                      )
                    : void 0
                  : p.a.createElement("div", null, "No Data Found");
              }),
              (n.onChangeHandler = function(e) {
                e.preventDefault();
                var t = n.props,
                  r = t.updateFilters,
                  i = t.history,
                  o = t.filters,
                  l = t.location,
                  s = e.target.name,
                  u = e.target.value,
                  m = Object(c.a)({}, s, u),
                  d = Object(a.a)({}, o, m);
                r(d),
                  i.replace({
                    path: l.pathname,
                    search: b.a.stringify(Object(C.a)(d))
                  }),
                  n.filterDebounce();
              }),
              (n.renderFilterView = function() {
                var e = n.props.filters,
                  t = e.title,
                  a = (e.limit, e.offset, e.category, e.isFeatured),
                  r = e.isTrending;
                e.publishedBy;
                return p.a.createElement(
                  "div",
                  { className: "filter-view" },
                  p.a.createElement(
                    O.a,
                    { autoComplete: "off", onSubmit: n.onChangeHandler },
                    p.a.createElement(
                      S.b,
                      null,
                      p.a.createElement(
                        S.c,
                        null,
                        p.a.createElement(
                          S.a,
                          { xs: 12, lg: 6 },
                          p.a.createElement(N.a, {
                            id: "title",
                            name: "title",
                            value: t,
                            onChange: n.onChangeHandler,
                            label: "SEARCH BLOGS BY NAME/CATEGORY"
                          })
                        ),
                        p.a.createElement(
                          S.a,
                          { xs: 12, lg: 2 },
                          p.a.createElement(_, {
                            id: "isTrending",
                            name: "isTrending",
                            value: r,
                            onChange: n.onChangeHandler,
                            label: "TRENDING",
                            options: n.TRENDING_OPTIONS
                          })
                        ),
                        p.a.createElement(
                          S.a,
                          { xs: 12, lg: 2 },
                          p.a.createElement(_, {
                            id: "isFeatured",
                            name: "isFeatured",
                            value: a,
                            onChange: n.onChangeHandler,
                            label: "FEATURED",
                            options: n.FEATURED_OPTIONS
                          })
                        )
                      )
                    )
                  )
                );
              }),
              (n.TABLE_COLUMNS = [
                {
                  name: "Title",
                  key: "title",
                  getValue: function(e) {
                    return p.a.createElement(w.a, {
                      className: "d-block",
                      label: e.title,
                      to: "/story/".concat(e._id)
                    });
                  }
                },
                {
                  name: "Author",
                  key: "author",
                  getValue: function(e) {
                    return e.author;
                  }
                },
                {
                  name: "Trending",
                  key: "isTrending",
                  getValue: function(e) {
                    return Object(C.b)(F.c, e.isTrending);
                  }
                },
                {
                  name: "Featured",
                  key: "isFeatured",
                  getValue: function(e) {
                    return Object(C.b)(F.a, e.isFeatured);
                  }
                },
                {
                  name: "Views",
                  key: "viewsCount",
                  getValue: function(e) {
                    return e.viewsCount;
                  }
                },
                {
                  name: "Published By",
                  key: "publishedBy",
                  getValue: function(e) {
                    return Object(C.b)(F.b, e.publishedBy);
                  }
                },
                {
                  name: "",
                  key: "publishedBy",
                  getValue: function(e) {
                    return p.a.createElement(
                      "div",
                      null,
                      p.a.createElement(D.a, {
                        name: "close",
                        className: "d-inline-block fs-14"
                      })
                    );
                  }
                }
              ]),
              (n.PUBLISHED_BY_OPTIONS = [{ name: "All", id: "" }].concat(
                Object(i.a)(F.b)
              )),
              (n.FEATURED_OPTIONS = [{ name: "All", id: "" }].concat(
                Object(i.a)(F.a)
              )),
              (n.TRENDING_OPTIONS = [{ name: "All", id: "" }].concat(
                Object(i.a)(F.c)
              )),
              (n.filterDebounce = E.a.debounce(n.fetchBlogs, 600)),
              n
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  this.fetchBlogs();
                }
              },
              {
                key: "render",
                value: function() {
                  return p.a.createElement(
                    y.a,
                    v.a.blogs,
                    p.a.createElement(
                      "div",
                      { className: "blogs-page" },
                      p.a.createElement(B, { text: "Dashboard \u2022 Blogs" }),
                      this.renderFilterView(),
                      this.renderBlogsTable()
                    )
                  );
                }
              }
            ]),
            t
          );
        })(p.a.Component),
        L = n(56);
      t.default = Object(r.connect)(
        function(e) {
          return Object(a.a)({}, e.blogs);
        },
        function(e) {
          return {
            fetchBlogs: function() {
              return e({ type: L.b });
            },
            fetchBlogsSuccess: function(t) {
              return e(
                (function(e) {
                  return { type: L.d, data: e };
                })(t)
              );
            },
            fetchBlogsError: function() {
              return e({ type: L.c, err: t });
              var t;
            },
            updateFilters: function(t) {
              return e(
                (function(e) {
                  return { type: L.e, filters: e };
                })(t)
              );
            }
          };
        }
      )(A);
    }
  }
]);
//# sourceMappingURL=blogs.176b9f6b.chunk.js.map
