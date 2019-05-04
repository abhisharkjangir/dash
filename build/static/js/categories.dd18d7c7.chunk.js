(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    415: function(e, t, n) {
      "use strict";
      var a = n(139);
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
    416: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      t.a = function(e) {
        var t = e.children,
          n = e.className;
        return r.a.createElement("div", { className: n }, t);
      };
    },
    417: function(e, t, n) {
      "use strict";
      var a = n(89),
        r = n(32),
        c = n(33),
        i = n(35),
        o = n(34),
        l = n(36),
        s = n(1),
        u = n.n(s),
        m = n(105),
        d = n(427),
        p = n.n(d),
        f = n(415),
        g = f.a.default.siteURL,
        h = f.a.default.title,
        b = f.a.default.description,
        v = f.a.default.keywords,
        E = f.a.default.image,
        y = f.a.default.twitter,
        w = f.a.default.sep,
        N = f.a.default.updated,
        k = f.a.default.published,
        C = f.a.default.contentType,
        O = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(i.a)(this, Object(o.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(t, e),
            Object(c.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    r = e.image,
                    c = e.contentType,
                    i = e.twitter,
                    o = e.noCrawl,
                    l = e.published,
                    s = e.updated,
                    u = e.category,
                    m = e.tags,
                    d = e.keywords,
                    p = n ? (n + w + h).substring(0, 60) : h,
                    f = a ? a.substring(0, 155) : b,
                    O = r ? "".concat(g).concat(r) : E,
                    j = [
                      { itemprop: "name", content: p },
                      { itemprop: "description", content: f },
                      { itemprop: "image", content: O },
                      { name: "description", content: f },
                      { name: "keywords", content: d || v },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: p },
                      { name: "twitter:description", content: f },
                      { name: "twitter:creator", content: i || y },
                      { name: "twitter:image:src", content: O },
                      { property: "og:title", content: p },
                      { property: "og:type", content: c || C },
                      { property: "og:url", content: g + t },
                      { property: "og:image", content: O },
                      { property: "og:description", content: f },
                      { property: "og:site_name", content: h },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    o
                      ? j.push({ name: "robots", content: "noindex, nofollow" })
                      : j.push({ name: "robots", content: "index, follow" }),
                    l &&
                      j.push({
                        name: "article:published_time",
                        content: l || k
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
                    c = Object(a.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: n, className: r },
                    u.a.createElement(p.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          c.schema || "WebPage"
                        )
                      },
                      title: c.title ? c.title + w + h : h,
                      link: [
                        {
                          rel: "canonical",
                          href: g + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(c, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.a = Object(m.a)(O);
    },
    418: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      t.a = function(e) {
        var t = e.autoComplete,
          n = e.children;
        return r.a.createElement("form", { autoComplete: t }, n);
      };
    },
    419: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a),
        c = (n(420), n(416));
      t.a = function(e) {
        var t = e.id,
          n = e.type,
          a = e.name,
          i = e.value,
          o = e.onChange,
          l = e.label,
          s = e.disabled,
          u = e.className;
        return r.a.createElement(
          c.a,
          { className: "mb-3" },
          r.a.createElement("label", { htmlFor: t }, l),
          r.a.createElement("input", {
            id: t,
            type: n,
            name: a,
            value: i,
            onChange: o,
            disabled: s,
            className: u
          })
        );
      };
    },
    420: function(e, t, n) {},
    421: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      n(422);
      t.a = function(e) {
        var t = e.label,
          n = e.type,
          a = e.onClick,
          c = e.className,
          i = e.disabled,
          o = e.variations,
          l = "";
        return (
          c && (l = c),
          o && (l = "".concat(l, " ").concat(o)),
          r.a.createElement(
            "button",
            { type: n, onClick: a, className: l, disabled: i },
            t
          )
        );
      };
    },
    422: function(e, t, n) {},
    432: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      n(433);
      t.a = function(e) {
        var t = e.text;
        return r.a.createElement("div", { className: "page-heading mb-2" }, t);
      };
    },
    433: function(e, t, n) {},
    434: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "a", function() {
          return o;
        });
      var a = n(1),
        r = n.n(a),
        c = (n(435),
        function(e) {
          var t = e.children,
            n = e.className;
          return r.a.createElement(
            "div",
            { className: "row ".concat(n || "") },
            t
          );
        }),
        i = function(e) {
          var t = e.children;
          return r.a.createElement("div", { className: "container-fluid" }, t);
        },
        o = function(e) {
          var t = e.children,
            n = e.xs,
            a = e.sm,
            c = e.md,
            i = e.lg,
            o = e.className,
            l = "";
          return (
            n && (l = "col-xs-".concat(n)),
            a && (l = "".concat(l, " col-sm-").concat(a)),
            c && (l = "".concat(l, " col-md-").concat(c)),
            i && (l = "".concat(l, " col-lg-").concat(i)),
            o && (l = "".concat(l, " ").concat(o)),
            r.a.createElement("div", { className: l }, t)
          );
        };
    },
    435: function(e, t, n) {},
    513: function(e, t, n) {},
    626: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(5),
        r = n(29),
        c = n(53),
        i = n(32),
        o = n(33),
        l = n(35),
        s = n(34),
        u = n(36),
        m = n(1),
        d = n.n(m),
        p = n(75),
        f = n.n(p),
        g = n(417),
        h = (n(513), n(415)),
        b = n(418),
        v = n(419),
        E = n(23),
        y = n(432),
        w = n(434),
        N = n(421),
        k = (function(e) {
          function t(e) {
            var n;
            return (
              Object(i.a)(this, t),
              ((n = Object(l.a)(
                this,
                Object(s.a)(t).call(this, e)
              )).renderBlogsTable = function() {
                var e = n.props,
                  t = e.data,
                  a = e.isFetching;
                if (a) {
                  return d.a.createElement(
                    d.a.Fragment,
                    null,
                    [
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""],
                      ["", "", "", "", ""]
                    ].map(function(e, t) {
                      return d.a.createElement(
                        "div",
                        { key: t, className: "table-skeleton" },
                        e.map(function(e, t) {
                          return d.a.createElement("div", { key: t });
                        })
                      );
                    })
                  );
                }
                if (!a && t.length > 0)
                  return d.a.createElement(
                    "div",
                    { className: "table-responsive" },
                    d.a.createElement(
                      "table",
                      { className: "table" },
                      d.a.createElement(
                        "thead",
                        null,
                        d.a.createElement(
                          "tr",
                          null,
                          n.TABLE_COLUMNS.map(function(e, t) {
                            return d.a.createElement("th", { key: t }, e.name);
                          })
                        )
                      ),
                      d.a.createElement(
                        "tbody",
                        null,
                        t.map(function(e, t) {
                          return d.a.createElement(
                            "tr",
                            { key: e._id },
                            n.TABLE_COLUMNS.map(function(n, a) {
                              return d.a.createElement(
                                "td",
                                { key: a },
                                n.getValue(e, t)
                              );
                            })
                          );
                        })
                      )
                    )
                  );
              }),
              (n.onChangeHandler = function(e) {
                e.preventDefault();
                var t,
                  r,
                  i = n.props,
                  o = i.updateFilters,
                  l = i.history,
                  s = i.filters,
                  u = i.location;
                "multiSelectOption" === e.type
                  ? ((t = e.detail.name), (r = e.detail.value))
                  : ((t = e.target.name), (r = e.target.value));
                var m = Object(c.a)({}, t, r),
                  d = Object(a.a)({}, s, m);
                o(d),
                  l.replace({
                    path: u.pathname,
                    search: f.a.stringify(Object(E.a)(d))
                  }),
                  n.filterDebounce();
              }),
              (n.renderFilterMessage = function() {
                var e,
                  t = n.props,
                  a = t.data;
                return (
                  (e = t.isFetching
                    ? "Loading... Please wait."
                    : a && a.length
                    ? "Showing ".concat(a.length, " result(s)")
                    : "Sorry, no data found."),
                  d.a.createElement(
                    w.c,
                    null,
                    d.a.createElement(
                      w.a,
                      null,
                      d.a.createElement("div", { className: "message" }, e)
                    )
                  )
                );
              }),
              (n.renderFilterView = function() {
                var e = n.props.filters.title;
                return d.a.createElement(
                  "div",
                  { className: "filter-view" },
                  d.a.createElement(
                    b.a,
                    { autoComplete: "off", onSubmit: n.onChangeHandler },
                    d.a.createElement(
                      w.b,
                      null,
                      d.a.createElement(
                        w.c,
                        null,
                        d.a.createElement(
                          w.a,
                          { xs: 12, sm: 6, lg: 6 },
                          d.a.createElement(v.a, {
                            id: "title",
                            name: "title",
                            value: e,
                            onChange: n.onChangeHandler,
                            label: "SEARCH BLOGS BY NAME/CATEGORY"
                          })
                        )
                      ),
                      n.renderFilterMessage()
                    )
                  )
                );
              }),
              (n.renderPageHeader = function() {
                return d.a.createElement(
                  "div",
                  { className: "page-header" },
                  d.a.createElement("h1", null, "Categories"),
                  d.a.createElement(N.a, { label: "Add New Category" })
                );
              }),
              (n.TABLE_COLUMNS = [
                {
                  name: "S No",
                  key: "_id",
                  getValue: function(e, t) {
                    return t + 1;
                  }
                },
                {
                  name: "Cat ID",
                  key: "_id",
                  getValue: function(e) {
                    return e._id;
                  }
                },
                {
                  name: "Name",
                  key: "name",
                  getValue: function(e) {
                    return e.name;
                  }
                },
                {
                  name: "Action",
                  key: "publishedBy",
                  getValue: function(e) {
                    return d.a.createElement(
                      d.a.Fragment,
                      null,
                      d.a.createElement(
                        "span",
                        {
                          className: "edit",
                          onClick: function() {
                            return n.deleteBlog(e);
                          }
                        },
                        "Edit"
                      ),
                      d.a.createElement(
                        "span",
                        {
                          className: "delete",
                          onClick: function() {
                            return n.deleteBlog(e);
                          }
                        },
                        "Delete"
                      )
                    );
                  }
                }
              ]),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  this.props.fetchCategory();
                }
              },
              {
                key: "render",
                value: function() {
                  return d.a.createElement(
                    g.a,
                    h.a.blogs,
                    d.a.createElement(
                      "div",
                      { className: "categories-page" },
                      d.a.createElement(y.a, {
                        text: "Dashboard \u2022 Categories"
                      }),
                      this.renderPageHeader(),
                      this.renderBlogsTable()
                    )
                  );
                }
              }
            ]),
            t
          );
        })(d.a.Component),
        C = n(87);
      t.default = Object(r.connect)(
        function(e) {
          return Object(a.a)({}, e.categories);
        },
        function(e) {
          return {
            fetchCategory: function(t) {
              return e(Object(C.a)(t));
            }
          };
        }
      )(k);
    }
  }
]);
//# sourceMappingURL=categories.dd18d7c7.chunk.js.map
