(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
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
        i = n(35),
        c = n(33),
        l = n(34),
        u = n(1),
        s = n.n(u),
        d = n(113),
        p = n(443),
        m = n.n(p),
        g = n(436),
        f = g.a.default.siteURL,
        b = g.a.default.title,
        h = g.a.default.description,
        y = g.a.default.keywords,
        w = g.a.default.image,
        v = g.a.default.twitter,
        C = g.a.default.sep,
        k = g.a.default.updated,
        E = g.a.default.published,
        O = g.a.default.contentType,
        j = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(i.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(t, e),
            Object(o.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    r = e.image,
                    o = e.contentType,
                    i = e.twitter,
                    c = e.noCrawl,
                    l = e.published,
                    u = e.updated,
                    s = e.category,
                    d = e.tags,
                    p = e.keywords,
                    m = n ? (n + C + b).substring(0, 60) : b,
                    g = a ? a.substring(0, 155) : h,
                    j = r ? "".concat(f).concat(r) : w,
                    N = [
                      { itemprop: "name", content: m },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: j },
                      { name: "description", content: g },
                      { name: "keywords", content: p || y },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: v },
                      { name: "twitter:title", content: m },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: i || v },
                      { name: "twitter:image:src", content: j },
                      { property: "og:title", content: m },
                      { property: "og:type", content: o || O },
                      { property: "og:url", content: f + t },
                      { property: "og:image", content: j },
                      { property: "og:description", content: g },
                      { property: "og:site_name", content: b },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c
                      ? N.push({ name: "robots", content: "noindex, nofollow" })
                      : N.push({ name: "robots", content: "index, follow" }),
                    l &&
                      N.push({
                        name: "article:published_time",
                        content: l || E
                      }),
                    u &&
                      N.push({
                        name: "article:modified_time",
                        content: u || k
                      }),
                    s && N.push({ name: "article:section", content: s }),
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
                    r = e.className,
                    o = Object(a.a)(e, ["children", "id", "className"]);
                  return s.a.createElement(
                    "div",
                    { id: n, className: r },
                    s.a.createElement(m.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          o.schema || "WebPage"
                        )
                      },
                      title: o.title ? o.title + C + b : b,
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
        })(u.Component);
      t.a = Object(d.a)(j);
    },
    441: function(e, t, n) {
      "use strict";
      var a = n(1),
        r = n.n(a);
      n(442);
      t.a = function(e) {
        var t = e.label,
          n = e.type,
          a = e.onClick,
          o = e.className,
          i = e.disabled,
          c = e.variations,
          l = "";
        return (
          o && (l = o),
          c && (l = "".concat(l, " ").concat(c)),
          r.a.createElement(
            "button",
            { type: n, onClick: a, className: l, disabled: i },
            t
          )
        );
      };
    },
    442: function(e, t, n) {},
    447: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      }),
        n.d(t, "b", function() {
          return c;
        });
      var a = n(21),
        r = n(12),
        o = function(e) {
          return e.get(r.e);
        },
        i = Object(a.createSelector)(o, function(e) {
          return e.get("data");
        }),
        c = Object(a.createSelector)(o, function(e) {
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
    547: function(e, t, n) {},
    729: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(21),
        r = n(29),
        o = n(31),
        i = n(32),
        c = n(35),
        l = n(33),
        u = n(34),
        s = n(1),
        d = n.n(s),
        p = n(437),
        m = (n(547), n(436)),
        g = n(451),
        f = n(441),
        b = n(36),
        h = (function(e) {
          function t(e) {
            var n;
            return (
              Object(o.a)(this, t),
              ((n = Object(c.a)(
                this,
                Object(l.a)(t).call(this, e)
              )).deleteCategory = function(e) {
                confirm(
                  'Are you sure you want to delete "'.concat(e.name, '" blog?')
                ) && n.props.deleteCategory(e._id);
              }),
              (n.editCategory = function(e) {}),
              (n.addCategory = function() {
                var e = prompt("Enter Category Name *");
                e && e.length > 0
                  ? n.props.addCategory({ name: e })
                  : b.b.error("Please enter a valid category name.");
              }),
              (n.renderCategoriesTable = function() {
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
              (n.renderPageHeader = function() {
                return d.a.createElement(
                  "div",
                  { className: "page-header" },
                  d.a.createElement("h1", null, "Categories"),
                  d.a.createElement(f.a, {
                    onClick: n.addCategory,
                    label: "Add New Category"
                  })
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
                  name: "",
                  key: "publishedBy",
                  getValue: function(e) {
                    return d.a.createElement(
                      "span",
                      {
                        className: "delete",
                        onClick: function() {
                          return n.deleteCategory(e);
                        }
                      },
                      "Delete"
                    );
                  }
                }
              ]),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
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
                    p.a,
                    m.a.blogs,
                    d.a.createElement(
                      "div",
                      { className: "categories-page" },
                      d.a.createElement(g.a, {
                        text: "Dashboard \u2022 Categories"
                      }),
                      this.renderPageHeader(),
                      this.renderCategoriesTable()
                    )
                  );
                }
              }
            ]),
            t
          );
        })(d.a.Component),
        y = n(27),
        w = n(447),
        v = Object(a.createStructuredSelector)({ data: w.a, isFetching: w.b });
      t.default = Object(r.connect)(v, function(e) {
        return {
          fetchCategory: function(t) {
            return e(Object(y.i)(t));
          },
          addCategory: function(t) {
            return e(Object(y.a)(t));
          },
          deleteCategory: function(t) {
            return e(Object(y.e)(t));
          }
        };
      })(h);
    }
  }
]);
//# sourceMappingURL=categories.bd3e4f75.chunk.js.map
