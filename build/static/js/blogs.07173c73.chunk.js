(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
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
        r = a.n(n);
      t.a = function(e) {
        var t = e.children,
          a = e.className;
        return r.a.createElement("div", { className: a }, t);
      };
    },
    417: function(e, t, a) {
      "use strict";
      var n = a(89),
        r = a(32),
        i = a(33),
        c = a(35),
        o = a(34),
        l = a(36),
        s = a(1),
        u = a.n(s),
        m = a(105),
        d = a(427),
        p = a.n(d),
        g = a(415),
        f = g.a.default.siteURL,
        b = g.a.default.title,
        h = g.a.default.description,
        v = g.a.default.keywords,
        E = g.a.default.image,
        y = g.a.default.twitter,
        O = g.a.default.sep,
        N = g.a.default.updated,
        w = g.a.default.published,
        C = g.a.default.contentType,
        j = (function(e) {
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
                  var a = e.title,
                    n = e.description,
                    r = e.image,
                    i = e.contentType,
                    c = e.twitter,
                    o = e.noCrawl,
                    l = e.published,
                    s = e.updated,
                    u = e.category,
                    m = e.tags,
                    d = e.keywords,
                    p = a ? (a + O + b).substring(0, 60) : b,
                    g = n ? n.substring(0, 155) : h,
                    j = r ? "".concat(f).concat(r) : E,
                    k = [
                      { itemprop: "name", content: p },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: j },
                      { name: "description", content: g },
                      { name: "keywords", content: d || v },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: p },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: c || y },
                      { name: "twitter:image:src", content: j },
                      { property: "og:title", content: p },
                      { property: "og:type", content: i || C },
                      { property: "og:url", content: f + t },
                      { property: "og:image", content: j },
                      { property: "og:description", content: g },
                      { property: "og:site_name", content: b },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    o
                      ? k.push({ name: "robots", content: "noindex, nofollow" })
                      : k.push({ name: "robots", content: "index, follow" }),
                    l &&
                      k.push({
                        name: "article:published_time",
                        content: l || w
                      }),
                    s &&
                      k.push({
                        name: "article:modified_time",
                        content: s || N
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
                    r = e.className,
                    i = Object(n.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: a, className: r },
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
                          href: f + this.props.location.pathname
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
      t.a = Object(m.a)(j);
    },
    418: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n);
      t.a = function(e) {
        var t = e.autoComplete,
          a = e.children;
        return r.a.createElement("form", { autoComplete: t }, a);
      };
    },
    419: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n),
        i = (a(420), a(416));
      t.a = function(e) {
        var t = e.id,
          a = e.type,
          n = e.name,
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
            type: a,
            name: n,
            value: c,
            onChange: o,
            disabled: s,
            className: u
          })
        );
      };
    },
    420: function(e, t, a) {},
    421: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n);
      a(422);
      t.a = function(e) {
        var t = e.label,
          a = e.type,
          n = e.onClick,
          i = e.className,
          c = e.disabled,
          o = e.variations,
          l = "";
        return (
          i && (l = i),
          o && (l = "".concat(l, " ").concat(o)),
          r.a.createElement(
            "button",
            { type: a, onClick: n, className: l, disabled: c },
            t
          )
        );
      };
    },
    422: function(e, t, a) {},
    423: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n),
        i = a(410);
      a(424);
      t.a = function(e) {
        var t = e.label,
          a = e.to,
          n = e.className;
        return r.a.createElement(i.a, { to: a, className: n }, t);
      };
    },
    424: function(e, t, a) {},
    432: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n);
      a(433);
      t.a = function(e) {
        var t = e.text;
        return r.a.createElement("div", { className: "page-heading mb-2" }, t);
      };
    },
    433: function(e, t, a) {},
    434: function(e, t, a) {
      "use strict";
      a.d(t, "c", function() {
        return i;
      }),
        a.d(t, "b", function() {
          return c;
        }),
        a.d(t, "a", function() {
          return o;
        });
      var n = a(1),
        r = a.n(n),
        i = (a(435),
        function(e) {
          var t = e.children,
            a = e.className;
          return r.a.createElement(
            "div",
            { className: "row ".concat(a || "") },
            t
          );
        }),
        c = function(e) {
          var t = e.children;
          return r.a.createElement("div", { className: "container-fluid" }, t);
        },
        o = function(e) {
          var t = e.children,
            a = e.xs,
            n = e.sm,
            i = e.md,
            c = e.lg,
            o = e.className,
            l = "";
          return (
            a && (l = "col-xs-".concat(a)),
            n && (l = "".concat(l, " col-sm-").concat(n)),
            i && (l = "".concat(l, " col-md-").concat(i)),
            c && (l = "".concat(l, " col-lg-").concat(c)),
            o && (l = "".concat(l, " ").concat(o)),
            r.a.createElement("div", { className: l }, t)
          );
        };
    },
    435: function(e, t, a) {},
    449: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n),
        i = (a(450), a(416));
      t.a = function(e) {
        var t = e.id,
          a = e.type,
          n = e.name,
          c = e.value,
          o = e.onChange,
          l = e.label,
          s = e.disabled,
          u = e.className,
          m = e.options;
        return r.a.createElement(
          i.a,
          { className: "mb-3" },
          r.a.createElement("label", { htmlFor: t }, l),
          r.a.createElement(
            "select",
            {
              id: t,
              type: a,
              name: n,
              value: c,
              onChange: o,
              disabled: s,
              className: u
            },
            m &&
              m.map(function(e) {
                return r.a.createElement(
                  "option",
                  { key: e.id, value: e.id },
                  e.name
                );
              })
          )
        );
      };
    },
    450: function(e, t, a) {},
    451: function(e, t, a) {
      "use strict";
      var n = a(448),
        r = a(32),
        i = a(33),
        c = a(35),
        o = a(34),
        l = a(36),
        s = a(1),
        u = a.n(s),
        m = (a(452), a(416)),
        d = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
              l[s] = arguments[s];
            return (
              ((a = Object(c.a)(
                this,
                (e = Object(o.a)(t)).call.apply(e, [this].concat(l))
              )).clickHandler = function(e) {
                var t = a.props,
                  r = t.value,
                  i = t.name,
                  c = t.onChange,
                  o = t.uniqueKey;
                if (r && i) {
                  var l = Object(n.a)(r);
                  (l =
                    l.indexOf(e[o].toString()) > -1
                      ? l.filter(function(t) {
                          return t.toString() !== e[o].toString();
                        })
                      : [].concat(Object(n.a)(l), [e[o].toString()])),
                    c(
                      new CustomEvent("multiSelectOption", {
                        detail: { name: i, value: l },
                        bubbles: !0,
                        cancelable: !0
                      })
                    );
                }
              }),
              a
            );
          }
          return (
            Object(l.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.id,
                    n = t.value,
                    r = t.label,
                    i = t.options,
                    c = t.uniqueKey;
                  return u.a.createElement(
                    m.a,
                    { className: "mb-3 multi-select-tag" },
                    u.a.createElement("label", { htmlFor: a }, r),
                    u.a.createElement(
                      "div",
                      { className: "tags", id: a },
                      i &&
                        i.map(function(t) {
                          return u.a.createElement(
                            "span",
                            {
                              onClick: function() {
                                return e.clickHandler(t);
                              },
                              key: t[c],
                              className: "tag ".concat(
                                n.indexOf(t[c].toString()) > -1 ? "active" : ""
                              )
                            },
                            t.name
                          );
                        })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.a.Component);
      t.a = d;
    },
    452: function(e, t, a) {},
    499: function(e, t, a) {},
    512: function(e, t, a) {},
    625: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(5),
        r = a(29),
        i = a(448),
        c = a(53),
        o = a(32),
        l = a(33),
        s = a(35),
        u = a(34),
        m = a(36),
        d = a(1),
        p = a.n(d),
        g = a(75),
        f = a.n(g),
        b = a(493),
        h = a.n(b),
        v = a(494),
        E = a(417),
        y = (a(499), a(415)),
        O = a(418),
        N = a(419),
        w = a(423),
        C = a(23),
        j = a(432),
        k = a(107),
        T = a(434),
        B = a(449),
        S = a(451),
        F = a(500),
        D = (a(512), a(421)),
        _ = function(e) {
          var t = e.isOpen,
            a = e.negativeBtnLabel,
            n = void 0 === a ? "No" : a,
            r = e.positiveBtnLabel,
            i = void 0 === r ? "Yes" : r,
            c = e.title,
            o = void 0 === c ? "Confirmation" : c,
            l = e.message,
            s = e.onClose,
            u = e.item;
          return p.a.createElement(
            F.a,
            {
              open: t,
              showCloseIcon: !1,
              onClose: function() {
                return s(!1);
              }
            },
            p.a.createElement(
              "div",
              { className: "confirmation-modal" },
              p.a.createElement("div", { className: "modal-header" }, o),
              p.a.createElement("div", { className: "modal-body" }, l),
              p.a.createElement(
                "div",
                { className: "modal-footer" },
                p.a.createElement(D.a, {
                  variations: "size-xs",
                  onClick: function() {
                    return s(!0, u);
                  },
                  label: i
                }),
                p.a.createElement(D.a, {
                  variations: "size-xs",
                  onClick: function() {
                    return s(!1, u);
                  },
                  label: n
                })
              )
            )
          );
        },
        A = (function(e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).getDeleteConfirmation = function(e, t) {
                if (
                  (a.setState({
                    confirmationModal: {
                      isOpen: !1,
                      title: void 0,
                      message: void 0
                    }
                  }),
                  e)
                ) {
                  var n = Object(v.pathOr)(null, "_id", t);
                  a.props.deleteBlog(n);
                }
              }),
              (a.deleteBlog = function(e) {
                Object(v.pathOr)(null, "_id", e) &&
                  a.setState({
                    confirmationModal: {
                      isOpen: !0,
                      title: "Delete Blog",
                      message: 'Are you sure you want to delete "'.concat(
                        e.title,
                        '" blog?'
                      ),
                      item: e
                    }
                  });
              }),
              (a.fetchBlogs = function() {
                var e = a.props,
                  t = e.fetchBlogs,
                  n = e.updateFilters,
                  r = e.location,
                  i = e.filters,
                  c = e.history,
                  o = Object(C.e)(r, i);
                n(o),
                  c.replace({
                    path: r.pathname,
                    search: f.a.stringify(Object(C.a)(o))
                  }),
                  t(Object(C.a)(o));
              }),
              (a.renderBlogsTable = function() {
                var e = a.props,
                  t = e.data,
                  n = e.isFetching;
                if (n) {
                  return p.a.createElement(
                    p.a.Fragment,
                    null,
                    [
                      ["", "", "", "", "", ""],
                      ["", "", "", "", "", ""],
                      ["", "", "", "", "", ""],
                      ["", "", "", "", "", ""]
                    ].map(function(e, t) {
                      return p.a.createElement(
                        "div",
                        { key: t, className: "table-skeleton" },
                        e.map(function(e, t) {
                          return p.a.createElement("div", { key: t });
                        })
                      );
                    })
                  );
                }
                if (!n && t.length > 0)
                  return p.a.createElement(
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
                          a.TABLE_COLUMNS.map(function(e, t) {
                            return p.a.createElement("th", { key: t }, e.name);
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
                            a.TABLE_COLUMNS.map(function(t, a) {
                              return p.a.createElement(
                                "td",
                                { key: a },
                                t.getValue(e)
                              );
                            })
                          );
                        })
                      )
                    )
                  );
              }),
              (a.onChangeHandler = function(e) {
                e.preventDefault();
                var t,
                  r,
                  i = a.props,
                  o = i.updateFilters,
                  l = i.history,
                  s = i.filters,
                  u = i.location;
                "multiSelectOption" === e.type
                  ? ((t = e.detail.name), (r = e.detail.value))
                  : ((t = e.target.name), (r = e.target.value));
                var m = Object(c.a)({}, t, r),
                  d = Object(n.a)({}, s, m);
                o(d),
                  l.replace({
                    path: u.pathname,
                    search: f.a.stringify(Object(C.a)(d))
                  }),
                  a.filterDebounce();
              }),
              (a.renderFilterMessage = function() {
                var e,
                  t = a.props,
                  n = t.data;
                return (
                  (e = t.isFetching
                    ? "Loading... Please wait."
                    : n && n.length
                    ? "Showing ".concat(n.length, " result(s)")
                    : "Sorry, no data found."),
                  p.a.createElement(
                    T.c,
                    null,
                    p.a.createElement(
                      T.a,
                      null,
                      p.a.createElement("div", { className: "message" }, e)
                    )
                  )
                );
              }),
              (a.renderFilterView = function() {
                var e = a.props,
                  t = e.filters,
                  n = e.categories,
                  r = t.title,
                  i = t.isFeatured,
                  c = t.isTrending,
                  o = t.category;
                return p.a.createElement(
                  "div",
                  { className: "filter-view" },
                  p.a.createElement(
                    O.a,
                    { autoComplete: "off", onSubmit: a.onChangeHandler },
                    p.a.createElement(
                      T.b,
                      null,
                      p.a.createElement(
                        T.c,
                        null,
                        p.a.createElement(
                          T.a,
                          { xs: 12, sm: 6, lg: 6 },
                          p.a.createElement(N.a, {
                            id: "title",
                            name: "title",
                            value: r,
                            onChange: a.onChangeHandler,
                            label: "SEARCH BLOGS BY NAME/CATEGORY"
                          })
                        ),
                        p.a.createElement(
                          T.a,
                          { xs: 12, sm: 3, lg: 3 },
                          p.a.createElement(B.a, {
                            id: "isTrending",
                            name: "isTrending",
                            value: c,
                            onChange: a.onChangeHandler,
                            label: "TRENDING",
                            options: a.TRENDING_OPTIONS
                          })
                        ),
                        p.a.createElement(
                          T.a,
                          { xs: 12, sm: 3, lg: 3 },
                          p.a.createElement(B.a, {
                            id: "isFeatured",
                            name: "isFeatured",
                            value: i,
                            onChange: a.onChangeHandler,
                            label: "FEATURED",
                            options: a.FEATURED_OPTIONS
                          })
                        )
                      ),
                      p.a.createElement(
                        T.c,
                        null,
                        p.a.createElement(
                          T.a,
                          { xs: 12, lg: 12 },
                          p.a.createElement(S.a, {
                            id: "category",
                            uniqueKey: "_id",
                            name: "category",
                            value: o,
                            onChange: a.onChangeHandler,
                            label: "CATEGORY",
                            options: n.data
                          })
                        )
                      ),
                      a.renderFilterMessage()
                    )
                  )
                );
              }),
              (a.renderPageHeader = function() {
                return p.a.createElement(
                  "div",
                  { className: "page-header" },
                  p.a.createElement("h1", null, "Blogs"),
                  p.a.createElement(w.a, {
                    to: "/blog/add",
                    label: "Add New Blog"
                  })
                );
              }),
              (a.state = { confirmationModal: { isOpen: !1 } }),
              (a.TABLE_COLUMNS = [
                {
                  name: "Title",
                  key: "title",
                  getValue: function(e) {
                    return p.a.createElement(w.a, {
                      className: "d-block",
                      label: e.title,
                      to: "/blog/".concat(e._id)
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
                    return Object(C.b)(k.d, e.isTrending);
                  }
                },
                {
                  name: "Featured",
                  key: "isFeatured",
                  getValue: function(e) {
                    return Object(C.b)(k.a, e.isFeatured);
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
                    return Object(C.b)(k.c, e.publishedBy);
                  }
                },
                {
                  name: "Action",
                  key: "publishedBy",
                  getValue: function(e) {
                    return p.a.createElement(
                      p.a.Fragment,
                      null,
                      p.a.createElement(w.a, {
                        to: "/blog/".concat(e._id),
                        label: "Edit",
                        className: "edit"
                      }),
                      p.a.createElement(
                        "span",
                        {
                          className: "delete",
                          onClick: function() {
                            return a.deleteBlog(e);
                          }
                        },
                        "Delete"
                      )
                    );
                  }
                }
              ]),
              (a.PUBLISHED_BY_OPTIONS = [{ name: "All", id: "" }].concat(
                Object(i.a)(k.c)
              )),
              (a.FEATURED_OPTIONS = [{ name: "All", id: "" }].concat(
                Object(i.a)(k.a)
              )),
              (a.TRENDING_OPTIONS = [{ name: "All", id: "" }].concat(
                Object(i.a)(k.d)
              )),
              (a.filterDebounce = h.a.debounce(a.fetchBlogs, 600)),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.fetchBlogs();
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.confirmationModal;
                  return p.a.createElement(
                    E.a,
                    y.a.blogs,
                    p.a.createElement(
                      "div",
                      { className: "blogs-page" },
                      p.a.createElement(j.a, {
                        text: "Dashboard \u2022 Blogs"
                      }),
                      this.renderPageHeader(),
                      this.renderFilterView(),
                      this.renderBlogsTable(),
                      p.a.createElement(
                        _,
                        Object.assign({}, e, {
                          onClose: this.getDeleteConfirmation
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(p.a.Component),
        X = a(55);
      t.default = Object(r.connect)(
        function(e) {
          return Object(n.a)({}, e.blogs, e.app);
        },
        function(e) {
          return {
            fetchBlogs: function(t) {
              return e(Object(X.e)(t));
            },
            deleteBlog: function(t) {
              return e(Object(X.a)(t));
            },
            updateFilters: function(t) {
              return e(Object(X.i)(t));
            }
          };
        }
      )(A);
    }
  }
]);
//# sourceMappingURL=blogs.07173c73.chunk.js.map
