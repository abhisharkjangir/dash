(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    436: function(e, t, a) {
      "use strict";
      var n = a(148);
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
    437: function(e, t, a) {
      "use strict";
      var n = a(96),
        r = a(31),
        l = a(32),
        i = a(35),
        c = a(33),
        o = a(34),
        s = a(1),
        u = a.n(s),
        d = a(113),
        m = a(443),
        g = a.n(m),
        p = a(436),
        b = p.a.default.siteURL,
        h = p.a.default.title,
        f = p.a.default.description,
        v = p.a.default.keywords,
        E = p.a.default.image,
        y = p.a.default.twitter,
        C = p.a.default.sep,
        O = p.a.default.updated,
        w = p.a.default.published,
        j = p.a.default.contentType,
        k = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(i.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(l.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var a = e.title,
                    n = e.description,
                    r = e.image,
                    l = e.contentType,
                    i = e.twitter,
                    c = e.noCrawl,
                    o = e.published,
                    s = e.updated,
                    u = e.category,
                    d = e.tags,
                    m = e.keywords,
                    g = a ? (a + C + h).substring(0, 60) : h,
                    p = n ? n.substring(0, 155) : f,
                    k = r ? "".concat(b).concat(r) : E,
                    N = [
                      { itemprop: "name", content: g },
                      { itemprop: "description", content: p },
                      { itemprop: "image", content: k },
                      { name: "description", content: p },
                      { name: "keywords", content: m || v },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: g },
                      { name: "twitter:description", content: p },
                      { name: "twitter:creator", content: i || y },
                      { name: "twitter:image:src", content: k },
                      { property: "og:title", content: g },
                      { property: "og:type", content: l || j },
                      { property: "og:url", content: b + t },
                      { property: "og:image", content: k },
                      { property: "og:description", content: p },
                      { property: "og:site_name", content: h },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c
                      ? N.push({ name: "robots", content: "noindex, nofollow" })
                      : N.push({ name: "robots", content: "index, follow" }),
                    o &&
                      N.push({
                        name: "article:published_time",
                        content: o || w
                      }),
                    s &&
                      N.push({
                        name: "article:modified_time",
                        content: s || O
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
                    a = e.id,
                    r = e.className,
                    l = Object(n.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: a, className: r },
                    u.a.createElement(g.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          l.schema || "WebPage"
                        )
                      },
                      title: l.title ? l.title + C + h : h,
                      link: [
                        {
                          rel: "canonical",
                          href: b + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(l, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.a = Object(d.a)(k);
    },
    438: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n);
      t.a = function(e) {
        var t = e.children,
          a = e.className;
        return r.a.createElement("div", { className: a }, t);
      };
    },
    441: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n);
      a(442);
      t.a = function(e) {
        var t = e.label,
          a = e.type,
          n = e.onClick,
          l = e.className,
          i = e.disabled,
          c = e.variations,
          o = "";
        return (
          l && (o = l),
          c && (o = "".concat(o, " ").concat(c)),
          r.a.createElement(
            "button",
            { type: a, onClick: n, className: o, disabled: i },
            t
          )
        );
      };
    },
    442: function(e, t, a) {},
    444: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n);
      t.a = function(e) {
        var t = e.autoComplete,
          a = e.children;
        return r.a.createElement("form", { autoComplete: t }, a);
      };
    },
    445: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n),
        l = (a(446), a(438));
      t.a = function(e) {
        var t = e.id,
          a = e.type,
          n = e.name,
          i = e.value,
          c = e.onChange,
          o = e.label,
          s = e.disabled,
          u = e.className;
        return r.a.createElement(
          l.a,
          { className: "mb-3" },
          r.a.createElement("label", { htmlFor: t }, o),
          r.a.createElement("input", {
            id: t,
            type: a,
            name: n,
            value: i,
            onChange: c,
            disabled: s,
            className: u
          })
        );
      };
    },
    446: function(e, t, a) {},
    447: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return i;
      }),
        a.d(t, "b", function() {
          return c;
        });
      var n = a(21),
        r = a(12),
        l = function(e) {
          return e.get(r.e);
        },
        i = Object(n.createSelector)(l, function(e) {
          return e.get("data");
        }),
        c = Object(n.createSelector)(l, function(e) {
          return e.get("isFetching");
        });
    },
    451: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n);
      a(452);
      t.a = function(e) {
        var t = e.text;
        return r.a.createElement("div", { className: "page-heading mb-2" }, t);
      };
    },
    452: function(e, t, a) {},
    457: function(e, t, a) {
      "use strict";
      a.d(t, "c", function() {
        return l;
      }),
        a.d(t, "b", function() {
          return i;
        }),
        a.d(t, "a", function() {
          return c;
        });
      var n = a(1),
        r = a.n(n),
        l = (a(458),
        function(e) {
          var t = e.children,
            a = e.className;
          return r.a.createElement(
            "div",
            { className: "row ".concat(a || "") },
            t
          );
        }),
        i = function(e) {
          var t = e.children;
          return r.a.createElement("div", { className: "container-fluid" }, t);
        },
        c = function(e) {
          var t = e.children,
            a = e.xs,
            n = e.sm,
            l = e.md,
            i = e.lg,
            c = e.className,
            o = "";
          return (
            a && (o = "col-xs-".concat(a)),
            n && (o = "".concat(o, " col-sm-").concat(n)),
            l && (o = "".concat(o, " col-md-").concat(l)),
            i && (o = "".concat(o, " col-lg-").concat(i)),
            c && (o = "".concat(o, " ").concat(c)),
            r.a.createElement("div", { className: o }, t)
          );
        };
    },
    458: function(e, t, a) {},
    475: function(e, t, a) {
      "use strict";
      var n = a(1),
        r = a.n(n),
        l = (a(476), a(438));
      t.a = function(e) {
        var t = e.id,
          a = e.type,
          n = e.name,
          i = e.value,
          c = e.onChange,
          o = e.label,
          s = e.disabled,
          u = e.className,
          d = e.options;
        return r.a.createElement(
          l.a,
          { className: "mb-3" },
          r.a.createElement("label", { htmlFor: t }, o),
          r.a.createElement(
            "select",
            {
              id: t,
              type: a,
              name: n,
              value: i,
              onChange: c,
              disabled: s,
              className: u
            },
            d &&
              d.map(function(e) {
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
    476: function(e, t, a) {},
    477: function(e, t, a) {
      "use strict";
      var n = a(454),
        r = a(31),
        l = a(32),
        i = a(35),
        c = a(33),
        o = a(34),
        s = a(1),
        u = a.n(s),
        d = (a(478), a(438)),
        m = a(115),
        g = (function(e) {
          function t() {
            var e, a;
            Object(r.a)(this, t);
            for (var l = arguments.length, o = new Array(l), s = 0; s < l; s++)
              o[s] = arguments[s];
            return (
              ((a = Object(i.a)(
                this,
                (e = Object(c.a)(t)).call.apply(e, [this].concat(o))
              )).clickHandler = function(e) {
                var t = a.props,
                  r = t.value,
                  l = t.name,
                  i = t.onChange,
                  c = t.uniqueKey;
                if (r && l) {
                  var o = Object(n.a)(r);
                  (o =
                    e[c] && o.indexOf(e[c].toString()) > -1
                      ? o.filter(function(t) {
                          return t.toString() !== e[c].toString();
                        })
                      : [].concat(Object(n.a)(o), [e[c].toString()])),
                    i(
                      new CustomEvent("multiSelectOption", {
                        detail: { name: l, value: o },
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
            Object(o.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.id,
                    n = t.value,
                    r = t.label,
                    l = t.options,
                    i = t.uniqueKey,
                    c = t.addNewItem;
                  return u.a.createElement(
                    d.a,
                    { className: "mb-3 multi-select-tag" },
                    u.a.createElement("label", { htmlFor: a }, r),
                    u.a.createElement(
                      "div",
                      { className: "tags", id: a },
                      l &&
                        l.map(function(t) {
                          return u.a.createElement(
                            "span",
                            {
                              onClick: function() {
                                return e.clickHandler(t);
                              },
                              key: t[i],
                              className: "tag ".concat(
                                t[i] && n.indexOf(t[i].toString()) > -1
                                  ? "active"
                                  : ""
                              )
                            },
                            t.name
                          );
                        }),
                      c &&
                        u.a.createElement(
                          "span",
                          { onClick: c, className: "tag active" },
                          u.a.createElement(m.a, { name: "plus" })
                        )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.a.Component);
      t.a = g;
    },
    478: function(e, t, a) {},
    548: function(e, t, a) {},
    549: function(e, t, a) {},
    654: function(e, t, a) {},
    723: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(29),
        r = a(21),
        l = a(48),
        i = a(31),
        c = a(35),
        o = a(33),
        s = a(32),
        u = a(34),
        d = a(1),
        m = a.n(d),
        g = (a(548), a(462)),
        p = a(437),
        b = a(436),
        h = a(451),
        f = a(457),
        v = a(445),
        E = a(477),
        y = a(475),
        C = (a(549), a(438)),
        O = a(25),
        w = {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, !1] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" }
            ],
            ["link", "image"],
            ["clean"]
          ]
        },
        j = [
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "clean"
        ],
        k = (function(e) {
          function t(e) {
            var n;
            return (
              Object(i.a)(this, t),
              ((n = Object(c.a)(
                this,
                Object(o.a)(t).call(this, e)
              )).changeHandler = function(e) {
                var t = n.props,
                  a = t.name;
                (0, t.onChange)(
                  new CustomEvent("QuillEditorChange", {
                    detail: { name: a, value: e },
                    bubbles: !0,
                    cancelable: !0
                  })
                );
              }),
              O.e || (n.ReactQuill = a(550)),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(s.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.id,
                    a = e.value,
                    n = e.label,
                    r = this.ReactQuill;
                  return !O.e && r
                    ? m.a.createElement(
                        C.a,
                        { className: "mb-3" },
                        m.a.createElement("label", { htmlFor: t }, n),
                        m.a.createElement(r, {
                          theme: "snow",
                          value: a,
                          onChange: this.changeHandler,
                          modules: w,
                          formats: j
                        })
                      )
                    : null;
                }
              }
            ]),
            t
          );
        })(m.a.PureComponent),
        N = a(183),
        S = (a(654),
        (function(e) {
          function t() {
            var e;
            return (
              Object(i.a)(this, t),
              ((e = Object(c.a)(
                this,
                Object(o.a)(t).call(this)
              )).renderImage = function(t) {
                var a = Object(N.a)(e);
                if (t && "" !== t && null !== t) {
                  var n = new FileReader();
                  (n.onload = function(e) {
                    a.setState({ imageUrl: e.target.result, file: t });
                  }),
                    n.readAsDataURL(t);
                }
              }),
              (e.imageChangeHandler = function(t) {
                var a = t.target.files[0],
                  n = e.props.onChange;
                e.renderImage(a), n(t);
              }),
              (e.state = { imageUrl: "" }),
              e
            );
          }
          return (
            Object(u.a)(t, e),
            Object(s.a)(t, null, [
              {
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                  var a = e.uploadedImage;
                  return "" === t.imageUrl && a && a.length > 0
                    ? { imageUrl: a }
                    : null;
                }
              }
            ]),
            Object(s.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e, t) {
                  e !== t &&
                    "" === t.selectedImage &&
                    this.setState({ imageUrl: "" });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.id,
                    a = e.name,
                    n = e.label,
                    r = e.disabled,
                    l = e.selectedImage,
                    i = e.accept,
                    c = this.state.imageUrl;
                  return m.a.createElement(
                    C.a,
                    { className: "mb-3" },
                    m.a.createElement(
                      "div",
                      { className: "file-browser" },
                      m.a.createElement("p", null, n),
                      m.a.createElement(
                        "div",
                        { className: "custom-file" },
                        m.a.createElement("input", {
                          type: "file",
                          className: "custom-file-input",
                          id: t,
                          name: a,
                          onChange: this.imageChangeHandler,
                          disabled: r,
                          accept: i
                        }),
                        m.a.createElement(
                          "label",
                          { className: "custom-file-label", htmlFor: t },
                          "" !== c
                            ? m.a.createElement("img", { src: c, alt: "" })
                            : null,
                          m.a.createElement(
                            "span",
                            null,
                            l && "" !== l ? l.name : "Plese choose ".concat(n)
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(m.a.PureComponent)),
        F = a(444),
        D = a(441),
        H = a(110),
        x = a(36),
        B = (function(e) {
          function t(e) {
            var a;
            return (
              Object(i.a)(this, t),
              ((a = Object(c.a)(
                this,
                Object(o.a)(t).call(this, e)
              )).onChangeHandler = function(e) {
                var t,
                  n,
                  r = a.props.updateFormData;
                "multiSelectOption" === e.type || "QuillEditorChange" === e.type
                  ? ((t = e.detail.name), (n = e.detail.value))
                  : e.target.files
                  ? ((n = e.target.files[0]), (t = e.target.name))
                  : ((n = e.target.value), (t = e.target.name)),
                  r(Object(l.a)({}, t, n));
              }),
              (a.addCategory = function() {
                var e = prompt("Enter Category Name *");
                e && e.length > 0
                  ? a.props.addCategory({ name: e })
                  : x.b.error("Please enter a valid category name.");
              }),
              (a.renderPageHeader = function() {
                return m.a.createElement(
                  "div",
                  { className: "page-header" },
                  m.a.createElement("h1", null, "Add New Blog")
                );
              }),
              (a.renderBlogForm = function() {
                var e = a.props,
                  t = e.categories,
                  n = e.isAdding,
                  r = e.formData,
                  l = r.title,
                  i = r.author,
                  c = r.keywords,
                  o = r.image,
                  s = r.category,
                  u = r.isPublished,
                  d = r.isFeatured,
                  g = r.story,
                  p = r.publishedBy,
                  b = r.isTrending,
                  h = r.imageSrc;
                return m.a.createElement(
                  "div",
                  { className: "blog-form" },
                  m.a.createElement(
                    F.a,
                    { onSubmit: a.addBlog },
                    m.a.createElement(
                      f.c,
                      null,
                      m.a.createElement(
                        f.a,
                        { xs: 12, sm: 3, lg: 3 },
                        m.a.createElement(v.a, {
                          id: "title",
                          value: l,
                          onChange: a.onChangeHandler,
                          name: "title",
                          label: "Title"
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, sm: 3, lg: 3 },
                        m.a.createElement(v.a, {
                          id: "author",
                          value: i,
                          onChange: a.onChangeHandler,
                          name: "author",
                          label: "author"
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, sm: 6, lg: 6 },
                        m.a.createElement(v.a, {
                          id: "keywords",
                          value: c,
                          onChange: a.onChangeHandler,
                          name: "keywords",
                          label: "keywords"
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, sm: 6, lg: 6 },
                        m.a.createElement(S, {
                          id: "image",
                          label: "Image",
                          uploadedImage: h,
                          selectedImage: o,
                          name: "image",
                          accept: "image/*",
                          onChange: a.onChangeHandler
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, sm: 6, lg: 6 },
                        m.a.createElement(E.a, {
                          label: "CATEGORY",
                          uniqueKey: "_id",
                          value: s,
                          name: "category",
                          onChange: a.onChangeHandler,
                          options: t,
                          addNewItem: a.addCategory
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, lg: 12 },
                        m.a.createElement(k, {
                          value: g,
                          name: "story",
                          label: "Content",
                          onChange: a.onChangeHandler
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, lg: 3 },
                        m.a.createElement(y.a, {
                          id: "isPublished",
                          name: "isPublished",
                          value: u,
                          onChange: a.onChangeHandler,
                          label: "Publish Status",
                          options: H.b
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, lg: 3 },
                        m.a.createElement(y.a, {
                          id: "publishedBy",
                          name: "publishedBy",
                          value: p,
                          onChange: a.onChangeHandler,
                          label: "Publish By",
                          options: H.c
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, lg: 3 },
                        m.a.createElement(y.a, {
                          id: "isFeatured",
                          name: "isFeatured",
                          value: d,
                          onChange: a.onChangeHandler,
                          label: "Featured",
                          options: H.a
                        })
                      ),
                      m.a.createElement(
                        f.a,
                        { xs: 12, lg: 3 },
                        m.a.createElement(y.a, {
                          id: "isTrending",
                          value: b,
                          name: "isTrending",
                          onChange: a.onChangeHandler,
                          label: "Trending",
                          options: H.d
                        })
                      )
                    ),
                    m.a.createElement(
                      f.c,
                      null,
                      m.a.createElement(f.a, { lg: 4 }),
                      m.a.createElement(
                        f.a,
                        { lg: 4 },
                        m.a.createElement(D.a, {
                          label: "SAVE BLOG",
                          onClick: a.addBlog,
                          disabled: n
                        })
                      ),
                      m.a.createElement(f.a, { lg: 4 })
                    )
                  )
                );
              }),
              (a.addBlog = function(e) {
                e.preventDefault();
                var t = a.props,
                  n = t.addBlog,
                  r = t.formData,
                  l = t.history,
                  i = a.state.isEdit,
                  c = r,
                  o = !1;
                if (
                  (Object.keys(c).forEach(function(e) {
                    ("" === c[e] || (c[e] && 0 === c[e].length)) &&
                      "imageSrc" !== e &&
                      (o ||
                        x.b.error(
                          "".concat(e.toLocaleUpperCase(), " is invalid!")
                        ),
                      (o = !0));
                  }),
                  !o)
                ) {
                  var s = new FormData();
                  Object.keys(c).forEach(function(e) {
                    s.append(e, c[e]);
                  }),
                    n(s, { history: l, isEdit: i });
                }
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(s.a)(t, null, [
              {
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                  var a = e.match,
                    n = Object(g.pathOr)(null, "params.blogId", a);
                  return n ? { isEdit: !0, blogId: n } : null;
                }
              }
            ]),
            Object(s.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.state,
                    t = e.isEdit,
                    a = e.blogId;
                  t && a && this.props.fetchBlog(a);
                }
              },
              {
                key: "render",
                value: function() {
                  return m.a.createElement(
                    p.a,
                    b.a.addBlog,
                    m.a.createElement(
                      "div",
                      { className: "add-blog-page" },
                      m.a.createElement(h.a, {
                        text: "Dashboard \u2022 Blogs \u2022 Save Blog"
                      }),
                      this.renderPageHeader(),
                      this.renderBlogForm()
                    )
                  );
                }
              }
            ]),
            t
          );
        })(m.a.PureComponent),
        P = a(62),
        X = a(13),
        I = function(e) {
          return e.get(X.d);
        },
        T = Object(r.createSelector)(I, function(e) {
          return e.get("formData").toJS();
        }),
        A = Object(r.createSelector)(I, function(e) {
          return e.get("isAdding");
        }),
        U = a(447),
        R = a(27),
        L = Object(r.createStructuredSelector)({
          formData: T,
          categories: U.a,
          isAdding: A
        });
      t.default = Object(n.connect)(L, function(e) {
        return {
          addBlog: function(t, a) {
            return e(Object(P.a)(t, a));
          },
          updateFormData: function(t) {
            return e(Object(P.i)(t));
          },
          fetchBlog: function(t) {
            return e(Object(P.e)(t));
          },
          addCategory: function(t) {
            return e(Object(R.a)(t));
          }
        };
      })(B);
    }
  }
]);
//# sourceMappingURL=addblog.b49f1dba.chunk.js.map
