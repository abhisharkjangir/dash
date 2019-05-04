(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    107: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "c", function() {
          return a;
        }),
        n.d(t, "a", function() {
          return c;
        }),
        n.d(t, "d", function() {
          return o;
        });
      var r = [
          { id: "1", name: "Published" },
          { id: "0", name: "Unpublished" }
        ],
        a = [{ id: "0", name: "Admin" }, { id: "1", name: "Other" }],
        c = [{ id: "0", name: "No" }, { id: "1", name: "Yes" }],
        o = [{ id: "0", name: "No" }, { id: "1", name: "Yes" }];
      t.e = {
        APP_NAME: "Reactor",
        ENV_TYPES: { PROD: "prod", STAG: "stag", LOCAL: "local" }
      };
    },
    139: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var r = "https://s3.ap-south-1.amazonaws.com/imabhi.in/",
        a = ("".concat(r, "abhishar.png"),
        "".concat(r, "angular.svg"),
        "".concat(r, "bgimg1.png"),
        "".concat(r, "bgimg2.png"),
        "".concat(r, "css-3.svg"),
        "".concat(r, "daublelogo.png"),
        "".concat(r, "DOCUMENTED_CODE.png"),
        "".concat(r, "facebook.svg"),
        "".concat(r, "github-icon.svg"),
        "".concat(r, "html-5.svg"),
        "".concat(r, "instagram-icon.svg"),
        "".concat(r, "javascript.svg"),
        "https://s3.ap-south-1.amazonaws.com/meuzicassets/meuzic-horizontal-transparent.png");
      "".concat(r, "map.png"),
        "".concat(r, "medzinlogo.png"),
        "".concat(r, "mmlogo.png"),
        "".concat(r, "pitlogo.png"),
        "".concat(r, "pro-dauble.png"),
        "".concat(r, "pro-medzin.png"),
        "".concat(r, "pro-mm.png"),
        "".concat(r, "pro-pit.png"),
        "".concat(r, "pro-tt.png"),
        "".concat(r, "react.svg"),
        "".concat(r, "redux.svg"),
        "".concat(r, "RESPONSIVE_DESIGN.png"),
        "".concat(r, "sass.svg"),
        "".concat(r, "THIRD_PARTY%20INTEGRATI_N.png"),
        "".concat(r, "ttlogo.png"),
        "".concat(r, "twitter.svg"),
        "".concat(r, "UI_FRAMEWOKS.png");
    },
    15: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "g", function() {
          return a;
        }),
        n.d(t, "f", function() {
          return c;
        }),
        n.d(t, "i", function() {
          return o;
        }),
        n.d(t, "h", function() {
          return u;
        }),
        n.d(t, "j", function() {
          return i;
        }),
        n.d(t, "b", function() {
          return s;
        }),
        n.d(t, "e", function() {
          return l;
        }),
        n.d(t, "d", function() {
          return d;
        }),
        n.d(t, "c", function() {
          return f;
        });
      var r = "blogs",
        a = "".concat("BLOGS/", "FETCH_BLOGS"),
        c = "".concat("BLOGS/", "FETCHING_BLOGS"),
        o = "".concat("BLOGS/", "FETCH_BLOGS_SUCCESS"),
        u = "".concat("BLOGS/", "FETCH_BLOGS_ERROR"),
        i = "".concat("BLOGS/", "UPDATE_FILTERS"),
        s = "".concat("BLOGS/", "DELETE_BLOG"),
        l = "".concat("BLOGS/", "DELETING_BLOG"),
        d = "".concat("BLOGS/", "DELETE_BLOG_SUCCESS"),
        f = "".concat("BLOGS/", "DELETE_BLOG_ERROR");
    },
    188: function(e, t, n) {
      e.exports = n(409);
    },
    23: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return o;
      }),
        n.d(t, "f", function() {
          return u;
        }),
        n.d(t, "c", function() {
          return i;
        }),
        n.d(t, "b", function() {
          return s;
        }),
        n.d(t, "e", function() {
          return l;
        }),
        n.d(t, "a", function() {
          return d;
        });
      var r = n(5),
        a = n(75),
        c = n.n(a),
        o = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        u = function(e, t) {
          localStorage.setItem(e, JSON.stringify(t));
        },
        i = function(e) {
          var t = localStorage.getItem(e);
          if (t) return JSON.parse(t);
        },
        s = function(e, t) {
          var n = e.filter(function(e) {
            return e.id === t;
          })[0];
          return n ? n.name : "";
        },
        l = function(e, t) {
          var n = c.a.parse(e.search, { ignoreQueryPrefix: !0 });
          n &&
            n.category &&
            "string" === typeof n.category &&
            (n.category = [n.category]);
          var a = Object(r.a)({}, t, n);
          return (
            (a.limit = n.limit ? parseInt(n.limit) : t.limit),
            (a.offset = n.offset ? parseInt(n.offset) : t.offset),
            a
          );
        },
        d = function(e) {
          var t = {},
            n = Object.keys(e);
          return (
            n &&
              n.forEach(function(n) {
                var r = e[n];
                "" !== r && null !== r && 0 !== r.length && (t[n] = r);
              }),
            t
          );
        };
    },
    24: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return r;
      }),
        n.d(t, "f", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return o;
        }),
        n.d(t, "e", function() {
          return u;
        }),
        n.d(t, "c", function() {
          return i;
        });
      var r = "addBlog",
        a = "".concat("ADD_BLOG/", "UPDATE_FORM_DATA"),
        c = "".concat("ADD_BLOG/", "ADD_BLOG"),
        o = "".concat("ADD_BLOG/", "ADDING_BLOG"),
        u = "".concat("ADD_BLOG/", "ADD_BLOG_SUCCESS"),
        i = "".concat("ADD_BLOG/", "ADD_BLOG_ERROR");
    },
    30: function(e, t, n) {
      "use strict";
      n.d(t, "d", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "a", function() {
          return c;
        }),
        n.d(t, "e", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return u;
        });
      var r = "login",
        a = "".concat("LOGIN/", "LOGIN"),
        c = "".concat("LOGIN/", "LOGGING_IN"),
        o = "".concat("LOGIN/", "LOGIN_SUCCESS"),
        u = "".concat("LOGIN/", "LOGIN_ERROR");
    },
    31: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "c", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return c;
        }),
        n.d(t, "e", function() {
          return o;
        }),
        n.d(t, "d", function() {
          return u;
        });
      var r = "categories",
        a = "".concat("CATEGORIES/", "FETCH_CATEGORY"),
        c = "".concat("CATEGORIES/", "FETCHING_CATEGORY"),
        o = "".concat("CATEGORIES/", "FETCH_CATEGORY_SUCCESS"),
        u = "".concat("CATEGORIES/", "FETCH_CATEGORY_ERROR");
    },
    384: function(e, t, n) {},
    385: function(e, t, n) {},
    406: function(e, t, n) {},
    407: function(e, t, n) {},
    409: function(e, t, n) {
      "use strict";
      n.r(t);
      n(189);
      var r,
        a = n(1),
        c = n.n(a),
        o = n(74),
        u = n(29),
        i = n(42),
        s = n.n(i),
        l = n(182),
        d = n(84),
        f = n(47),
        p = n(22),
        b = n(186),
        g = n(53),
        O = "".concat("APP/", "SET_DATA"),
        m = "".concat("APP/", "FETCH_CATEGORIES"),
        h = "".concat("APP/", "FETCHING_CATEGORIES"),
        j = "".concat("APP/", "FETCH_CATEGORIES_SUCCESS"),
        v = "".concat("APP/", "FETCH_CATEGORIES_ERROR"),
        E = n(5),
        w = {
          isLoggedIn: !1,
          sidebar: !1,
          categories: { data: [], isFetching: !1, error: null }
        },
        y = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : w,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case O:
              return Object(E.a)({}, e, t.data);
            case h:
              return Object(E.a)({}, e, {
                categories: Object(E.a)({}, e.categories, { isFetching: !0 })
              });
            case j:
              return Object(E.a)({}, e, {
                categories: Object(E.a)({}, e.categories, {
                  isFetching: !1,
                  data: t.data
                })
              });
            case v:
              return Object(E.a)({}, e, {
                categories: Object(E.a)({}, e.categories, {
                  isFetching: !1,
                  data: [],
                  error: t.data
                })
              });
            default:
              return e;
          }
        },
        S = { home: "HomePage" },
        L = n(30),
        A = { isLoggingIn: !1 },
        x = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : A,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case L.a:
              return { isLoggingIn: t.value };
            case L.e:
            case L.c:
              return Object(E.a)({}, e, t.data, { isLoggingIn: !1 });
            default:
              return e;
          }
        },
        _ = n(15),
        T = {
          isFetching: !1,
          filters: {
            title: "",
            isTrending: "",
            isFeatured: "",
            offset: 0,
            limit: 10,
            category: []
          },
          data: [],
          error: !1,
          isDeleting: !1
        },
        D = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : T,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case _.f:
              return Object(E.a)({}, e, { isFetching: !0 });
            case _.e:
              return Object(E.a)({}, e, { isDeleting: !0 });
            case _.i:
              return Object(E.a)({}, e, { isFetching: !1, data: t.data });
            case _.d:
              var n = Object(E.a)({}, e).data.filter(function(e) {
                return e._id !== t.data;
              });
              return Object(E.a)({}, e, { isFetching: !1, data: n });
            case _.h:
            case _.c:
              return Object(E.a)({}, e, {
                isFetching: !1,
                isDeleting: !1,
                error: t.err
              });
            case _.j:
              return Object.assign({}, e, {
                filters: Object(E.a)({}, e.filters, t.filters)
              });
            default:
              return e;
          }
        },
        C = n(31),
        G = { isFetching: !1, data: [], error: !1 },
        R = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : G,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case C.b:
              return Object(E.a)({}, e, { isFetching: !0 });
            case C.e:
              return Object(E.a)({}, e, { isFetching: !1, data: t.data });
            case C.d:
              return Object(E.a)({}, e, {
                isFetching: !1,
                data: [],
                error: t.err
              });
            default:
              return e;
          }
        },
        k = n(24),
        I = {
          error: null,
          isAdding: !1,
          formData: {
            title: "",
            author: "",
            keywords: "",
            image: "",
            imageSrc: "",
            story: "",
            category: [],
            isPublished: 1,
            publishedBy: 0,
            isFeatured: 0,
            isTrending: 0,
            viewsCount: 0,
            sharedCount: 0,
            createdDate: new Date(),
            updatedDate: new Date(),
            publishedDate: new Date()
          }
        },
        N = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : I,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.type,
            r = t.data;
          switch (n) {
            case k.f:
              return Object.assign({}, e, {
                formData: Object(E.a)({}, e.formData, r)
              });
            case k.a:
              return Object(E.a)({}, e, { isAdding: !0 });
            case k.e:
              return Object(E.a)({}, e, {
                isAdding: !1,
                error: null,
                formData: I.formData
              });
            case k.c:
              return Object(E.a)({}, e, { isAdding: !1, error: r });
            default:
              return e;
          }
        },
        P = Object(f.c)(
          ((r = {}),
          Object(g.a)(r, "app", y),
          Object(g.a)(r, "home", function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : S,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              r = t.payload;
            switch (n) {
              case "HOME_SAVE_USERS":
                return Object.assign({}, e, { users: r });
              default:
                return e;
            }
          }),
          Object(g.a)(r, L.d, x),
          Object(g.a)(r, _.a, D),
          Object(g.a)(r, C.a, R),
          Object(g.a)(r, k.d, N),
          r)
        ),
        B = n(23),
        F = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function U(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var n = e.installing;
              null != n &&
                (n.onstatechange = function() {
                  "installed" === n.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }
      n(382), n(383), n(384);
      var H = n(411),
        Y = function(e) {
          return { type: O, data: e };
        },
        M = function() {
          return { type: m };
        },
        z = function() {
          return { type: h };
        },
        W = function(e) {
          return { type: j, data: e };
        },
        V = function(e) {
          return { type: v, data: e };
        },
        J = n(32),
        q = n(33),
        K = n(35),
        Q = n(34),
        $ = n(36),
        X = n(54),
        Z = n(410),
        ee = (n(385), n(139)),
        te = function(e) {
          var t = e.name,
            n = e.className;
          return c.a.createElement("i", {
            className: "icon-".concat(t, " ").concat(n || "")
          });
        },
        ne = n(184),
        re = n.n(ne),
        ae = n(75),
        ce = n.n(ae),
        oe = n(107),
        ue = { URL: "http://18.224.169.160:8080/", env: "Staging" },
        ie = {},
        se = {};
      switch ("prod") {
        case oe.e.ENV_TYPES.PROD:
          se = Object(E.a)(
            {},
            { URL: "http://18.224.169.160:8080/", env: "Production" },
            ie
          );
          break;
        case oe.e.ENV_TYPES.STAG:
          se = Object(E.a)({}, ue, ie);
          break;
        case oe.e.ENV_TYPES.LOCAL:
          se = Object(E.a)(
            {},
            { URL: "http://192.168.30.83:5000/", env: "Local" },
            ie
          );
          break;
        default:
          se = Object(E.a)({}, ue, ie);
      }
      var le = se,
        de = (function(e) {
          var t = {
              baseURL: e || le.BASE_URL,
              paramsSerializer: function(e) {
                return ce.a.stringify(e);
              }
            },
            n = re.a.create(t);
          return (
            n.interceptors.request.use(
              function(e) {
                return (
                  (e.headers.token = (function() {
                    var e = Object(B.c)("user");
                    return e && e.token ? e.token : null;
                  })()),
                  e
                );
              },
              function(e) {
                return Promise.reject(e);
              }
            ),
            n.interceptors.response.use(
              function(e) {
                return e.data.success, e;
              },
              function(e) {
                return Promise.reject(e);
              }
            ),
            n
          );
        })(le.URL),
        fe = {
          login: "signin",
          logout: "signout",
          blogs: "stories/filter",
          deleteBlog: "story/delete",
          addBlog: "story/add",
          categories: "categories",
          blogDetails: "story"
        },
        pe = function(e) {
          return e && fe[e] ? fe[e] : "";
        },
        be = function() {
          return de.get(pe("logout"));
        },
        ge = "Oops! Somthing went wrong.",
        Oe = (function(e) {
          function t() {
            var e, n;
            Object(J.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(K.a)(
                this,
                (e = Object(Q.a)(t)).call.apply(e, [this].concat(a))
              )).logout = function() {
                be()
                  .then(function(e) {
                    if (e.data.success) {
                      var t = n.props.setAppData;
                      Object(B.f)("isLoggedIn", !1),
                        Object(B.f)("user", null),
                        t({ isLoggedIn: !1 });
                    } else X.b.error(e.data.message);
                  })
                  .catch(function(e) {
                    X.b.error(ge);
                  });
              }),
              (n.renderLogo = function() {
                return c.a.createElement(
                  "div",
                  { className: "logo" },
                  c.a.createElement(
                    Z.a,
                    { to: "/" },
                    c.a.createElement("img", { src: ee.a, alt: "logo" })
                  )
                );
              }),
              (n.renderMenu = function() {
                return c.a.createElement(
                  "div",
                  { className: "menu" },
                  c.a.createElement(
                    "ul",
                    null,
                    c.a.createElement(
                      "li",
                      { onClick: n.logout },
                      c.a.createElement(te, { name: "logout" }),
                      " Logout"
                    )
                  )
                );
              }),
              (n.toggleSideBar = function() {
                var e = n.props;
                (0, e.setAppData)({ sidebar: !e.sidebar });
              }),
              (n.renderToggleBtn = function() {
                return n.props.sidebar
                  ? c.a.createElement(
                      "div",
                      { className: "toggle", onClick: n.toggleSideBar },
                      c.a.createElement(te, { name: "list" }),
                      "Hide"
                    )
                  : c.a.createElement(
                      "div",
                      { className: "toggle", onClick: n.toggleSideBar },
                      c.a.createElement(te, { name: "list" }),
                      "Show"
                    );
              }),
              n
            );
          }
          return (
            Object($.a)(t, e),
            Object(q.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "header",
                    { className: "header" },
                    this.renderLogo(),
                    this.renderToggleBtn(),
                    this.renderMenu()
                  );
                }
              }
            ]),
            t
          );
        })(c.a.PureComponent),
        me = Object(u.connect)(
          function(e) {
            return Object(E.a)({}, e.app);
          },
          function(e) {
            return {
              setAppData: function(t) {
                return e(Y(t));
              }
            };
          }
        )(Oe),
        he = (n(406),
        (function(e) {
          function t() {
            return (
              Object(J.a)(this, t),
              Object(K.a)(this, Object(Q.a)(t).apply(this, arguments))
            );
          }
          return (
            Object($.a)(t, e),
            Object(q.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = new Date().getFullYear(),
                    t = this.props.sidebar;
                  return c.a.createElement(
                    "footer",
                    { className: t ? "footer" : "footer-no-sidebar" },
                    "Meuzic Copyright \xa9 ",
                    e,
                    " ",
                    c.a.createElement(
                      "span",
                      { className: "float-right" },
                      "Made with ",
                      c.a.createElement(
                        "span",
                        { role: "img", "aria-label": "heart" },
                        "\ud83d\udc96"
                      ),
                      " by ",
                      c.a.createElement(
                        "a",
                        { href: "http://abhijangir.me" },
                        "Abhishar Jangir."
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component)),
        je = (n(407),
        (function(e) {
          function t() {
            var e, n;
            Object(J.a)(this, t);
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
              a[c] = arguments[c];
            return (
              ((n = Object(K.a)(
                this,
                (e = Object(Q.a)(t)).call.apply(e, [this].concat(a))
              )).isActive = function(e) {
                var t = n.props.location,
                  r = t ? t.pathname : "";
                return void 0 === e && "/" === r
                  ? "active"
                  : "/" !== r && r.includes(e)
                  ? "active"
                  : "";
              }),
              n
            );
          }
          return (
            Object($.a)(t, e),
            Object(q.a)(t, [
              {
                key: "render",
                value: function() {
                  return this.props.sidebar
                    ? c.a.createElement(
                        "div",
                        { className: "sidebar" },
                        c.a.createElement(
                          "ul",
                          null,
                          c.a.createElement(
                            "li",
                            null,
                            c.a.createElement(
                              Z.a,
                              { to: "/", className: this.isActive() },
                              "Dashboard"
                            )
                          ),
                          c.a.createElement(
                            "li",
                            null,
                            c.a.createElement(
                              Z.a,
                              {
                                to: "/blogs",
                                className: this.isActive("blog")
                              },
                              "Blogs"
                            )
                          ),
                          c.a.createElement(
                            "li",
                            null,
                            c.a.createElement(
                              Z.a,
                              {
                                to: "/categories",
                                className: this.isActive("categories")
                              },
                              "Categories"
                            )
                          )
                        )
                      )
                    : null;
                }
              }
            ]),
            t
          );
        })(c.a.PureComponent)),
        ve = Object(H.a)(je),
        Ee = Object(H.a)(
          Object(u.connect)(
            function(e) {
              return Object(E.a)({}, e.app);
            },
            function(e) {
              return {
                setAppData: function(t) {
                  return e(Y(t));
                }
              };
            }
          )(ve)
        ),
        we = n(414),
        ye = n(412),
        Se = n(89),
        Le = n(413),
        Ae = Object(u.connect)(function(e) {
          return { isLoggedIn: e.app.isLoggedIn };
        }, null)(function(e) {
          var t = e.component,
            n = Object(Se.a)(e, ["component"]);
          return c.a.createElement(
            ye.a,
            Object.assign({}, n, {
              render: function(e) {
                return n.isLoggedIn
                  ? c.a.createElement(t, e)
                  : c.a.createElement(Le.a, {
                      to: "/login?redirect=".concat(e.location.pathname)
                    });
              }
            })
          );
        }),
        xe = Object(u.connect)(function(e) {
          return { isLoggedIn: e.app.isLoggedIn };
        }, null)(function(e) {
          var t = e.component,
            n = Object(Se.a)(e, ["component"]),
            r = ce.a.parse(n.location.search);
          return c.a.createElement(
            ye.a,
            Object.assign({}, n, {
              render: function(e) {
                return n.isLoggedIn
                  ? c.a.createElement(Le.a, { to: r.redirect || "/" })
                  : c.a.createElement(t, e);
              }
            })
          );
        }),
        _e = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 621));
          },
          loading: function() {
            return null;
          }
        }),
        Te = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 622));
          },
          loading: function() {
            return null;
          }
        }),
        De = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 628));
          },
          loading: function() {
            return null;
          }
        }),
        Ce = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 623));
          },
          loading: function() {
            return null;
          }
        }),
        Ge = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, 627));
          },
          loading: function() {
            return null;
          }
        }),
        Re = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(13), n.e(2)]).then(
              n.bind(null, 625)
            );
          },
          loading: function() {
            return null;
          }
        }),
        ke = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 626));
          },
          loading: function() {
            return null;
          }
        }),
        Ie = s()({
          loader: function() {
            return Promise.all([n.e(0), n.e(12), n.e(1)]).then(
              n.bind(null, 624)
            );
          },
          loading: function() {
            return null;
          }
        }),
        Ne = function() {
          return c.a.createElement(
            we.a,
            null,
            c.a.createElement(Ae, { exact: !0, path: "/", component: _e }),
            c.a.createElement(Ae, { path: "/categories", component: ke }),
            c.a.createElement(Ae, { path: "/blogs", component: Re }),
            c.a.createElement(Ae, { path: "/blog/add", component: Ie }),
            c.a.createElement(xe, { path: "/signup", component: Te }),
            c.a.createElement(xe, { path: "/login", component: De }),
            c.a.createElement(xe, { path: "/forgotpassword", component: Ce }),
            c.a.createElement(ye.a, { component: Ge })
          );
        },
        Pe = n(105),
        Be = (function(e) {
          function t() {
            return (
              Object(J.a)(this, t),
              Object(K.a)(this, Object(Q.a)(t).apply(this, arguments))
            );
          }
          return (
            Object($.a)(t, e),
            Object(q.a)(t, [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.location.pathname !== e.location.pathname &&
                    window.scrollTo(0, 0);
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.children;
                }
              }
            ]),
            t
          );
        })(c.a.Component),
        Fe = Object(Pe.a)(Be),
        Ue = (function(e) {
          function t() {
            return (
              Object(J.a)(this, t),
              Object(K.a)(this, Object(Q.a)(t).apply(this, arguments))
            );
          }
          return (
            Object($.a)(t, e),
            Object(q.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  var e = this.props,
                    t = e.storage,
                    n = e.setAppData,
                    r = e.fetchCategories;
                  t.isLoggedIn && t.user
                    ? (n(Object(E.a)({ isLoggedIn: !0 }, t.user)), r())
                    : n({ isLoggedIn: !1 });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.isLoggedIn,
                    n = e.sidebar;
                  return t
                    ? c.a.createElement(
                        Fe,
                        null,
                        c.a.createElement(
                          "div",
                          { id: "app" },
                          c.a.createElement(X.a, null),
                          c.a.createElement(me, null),
                          c.a.createElement(
                            "div",
                            { id: "content", className: "content" },
                            c.a.createElement(Ee, null),
                            c.a.createElement(
                              "div",
                              { className: n ? "main" : "main-no-sidebar" },
                              c.a.createElement(Ne, null)
                            ),
                            c.a.createElement(he, { sidebar: n })
                          )
                        )
                      )
                    : c.a.createElement(
                        Fe,
                        null,
                        c.a.createElement(
                          "div",
                          { id: "app" },
                          c.a.createElement(X.a, null),
                          c.a.createElement(
                            "div",
                            { id: "content", className: "content" },
                            c.a.createElement(
                              "div",
                              { className: "main-guest-user" },
                              c.a.createElement(Ne, null)
                            )
                          )
                        )
                      );
                }
              }
            ]),
            t
          );
        })(a.Component),
        He = (function(e) {
          var t = {};
          if (void 0 !== typeof Storage && !B.d)
            for (var n = Object.keys(localStorage), r = 0; r < n.length; r++)
              t[n[r]] = Object(B.c)(n[r]);
          return (function(n) {
            function r() {
              return (
                Object(J.a)(this, r),
                Object(K.a)(this, Object(Q.a)(r).apply(this, arguments))
              );
            }
            return (
              Object($.a)(r, n),
              Object(q.a)(r, [
                {
                  key: "render",
                  value: function() {
                    return c.a.createElement(e, { storage: t });
                  }
                }
              ]),
              r
            );
          })(c.a.Component);
        })(
          Object(H.a)(
            Object(u.connect)(
              function(e) {
                return Object(E.a)({}, e.app);
              },
              function(e) {
                return {
                  setAppData: function(t) {
                    return e(Y(t));
                  },
                  fetchCategories: function() {
                    return e(M());
                  }
                };
              }
            )(Ue)
          )
        ),
        Ye = n(11),
        Me = n.n(Ye),
        ze = n(6),
        We = function(e) {
          var t = e.method,
            n = void 0 === t ? "GET" : t,
            r = e.url,
            a = e.data,
            c = e.appendUrl,
            o = void 0 === c ? "" : c;
          return (
            (r = pe(r) + o),
            new Promise(function(e, t) {
              de({ url: r, method: n, data: a })
                .then(function(t) {
                  e({ response: t });
                })
                .catch(function(e) {
                  t(e);
                });
            })
          );
        },
        Ve = Me.a.mark(qe),
        Je = Me.a.mark(Ke);
      function qe(e) {
        var t, n, r;
        return Me.a.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), Object(ze.c)(z());
                case 3:
                  return (
                    (e.next = 5),
                    Object(ze.b)(We, { method: "GET", url: "categories" })
                  );
                case 5:
                  if (((t = e.sent), !(n = t.response).data.success)) {
                    e.next = 14;
                    break;
                  }
                  return (r = n.data.data), (e.next = 11), Object(ze.c)(W(r));
                case 11:
                  return e.abrupt("return", e.sent);
                case 14:
                  return (e.next = 16), Object(ze.c)(V(n.data.message));
                case 16:
                  return e.abrupt("return", e.sent);
                case 17:
                  e.next = 24;
                  break;
                case 19:
                  return (
                    (e.prev = 19),
                    (e.t0 = e.catch(0)),
                    (e.next = 23),
                    Object(ze.c)(V(e.t0))
                  );
                case 23:
                  return e.abrupt("return", e.sent);
                case 24:
                case "end":
                  return e.stop();
              }
          },
          Ve,
          null,
          [[0, 19]]
        );
      }
      function Ke() {
        return Me.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(ze.e)(m, qe);
              case 2:
              case "end":
                return e.stop();
            }
        }, Je);
      }
      var Qe = Ke,
        $e = n(86),
        Xe = Me.a.mark(et),
        Ze = Me.a.mark(tt);
      function et(e) {
        var t, n, r;
        return Me.a.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0), (a.next = 3), Object(ze.c)(Object($e.a)(!0))
                  );
                case 3:
                  return (
                    (a.next = 5),
                    Object(ze.b)(We, {
                      method: "POST",
                      url: "login",
                      data: e.data
                    })
                  );
                case 5:
                  if (((t = a.sent), !(n = t.response).data.success)) {
                    a.next = 20;
                    break;
                  }
                  return (
                    (r = n.data.data),
                    Object(B.f)("isLoggedIn", !0),
                    Object(B.f)("user", r),
                    (a.next = 13),
                    Object(ze.c)(Y(Object(E.a)({}, r, { isLoggedIn: !0 })))
                  );
                case 13:
                  return (a.next = 15), Object(ze.c)(Object($e.d)(r));
                case 15:
                  return (a.next = 17), Object(ze.c)(M());
                case 17:
                  return a.abrupt("return", a.sent);
                case 20:
                  return (
                    X.b.error(n.data.message),
                    (a.next = 23),
                    Object(ze.c)(Object($e.c)(n.data.message))
                  );
                case 23:
                  return a.abrupt("return", a.sent);
                case 24:
                  a.next = 32;
                  break;
                case 26:
                  return (
                    (a.prev = 26),
                    (a.t0 = a.catch(0)),
                    X.b.error(ge),
                    (a.next = 31),
                    Object(ze.c)(Object($e.c)(a.t0))
                  );
                case 31:
                  return a.abrupt("return", a.sent);
                case 32:
                case "end":
                  return a.stop();
              }
          },
          Xe,
          null,
          [[0, 26]]
        );
      }
      function tt() {
        return Me.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(ze.e)(L.b, et);
              case 2:
              case "end":
                return e.stop();
            }
        }, Ze);
      }
      var nt = tt,
        rt = n(55),
        at = Me.a.mark(ut),
        ct = Me.a.mark(it),
        ot = Me.a.mark(st);
      function ut(e) {
        var t, n;
        return Me.a.wrap(
          function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0), (r.next = 3), Object(ze.c)(Object(rt.h)())
                  );
                case 3:
                  return (
                    (r.next = 5),
                    Object(ze.b)(We, {
                      method: "POST",
                      url: "blogs",
                      data: e.data
                    })
                  );
                case 5:
                  if (((t = r.sent), !(n = t.response).data.success)) {
                    r.next = 13;
                    break;
                  }
                  return (r.next = 10), Object(ze.c)(Object(rt.g)(n.data.data));
                case 10:
                  return r.abrupt("return", r.sent);
                case 13:
                  return (
                    (r.next = 15), Object(ze.c)(Object(rt.f)(n.data.message))
                  );
                case 15:
                  return r.abrupt("return", r.sent);
                case 16:
                  r.next = 23;
                  break;
                case 18:
                  return (
                    (r.prev = 18),
                    (r.t0 = r.catch(0)),
                    (r.next = 22),
                    Object(ze.c)(Object(rt.f)(r.t0))
                  );
                case 22:
                  return r.abrupt("return", r.sent);
                case 23:
                case "end":
                  return r.stop();
              }
          },
          at,
          null,
          [[0, 18]]
        );
      }
      function it(e) {
        var t, n;
        return Me.a.wrap(
          function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0), (r.next = 3), Object(ze.c)(Object(rt.d)())
                  );
                case 3:
                  return (
                    (r.next = 5),
                    Object(ze.b)(We, {
                      method: "DELETE",
                      url: "deleteBlog",
                      appendUrl: "/".concat(e.data)
                    })
                  );
                case 5:
                  if (((t = r.sent), !(n = t.response).data.success)) {
                    r.next = 13;
                    break;
                  }
                  return (r.next = 10), Object(ze.c)(Object(rt.c)(e.data));
                case 10:
                  return r.abrupt("return", r.sent);
                case 13:
                  return (
                    (r.next = 15), Object(ze.c)(Object(rt.b)(n.data.message))
                  );
                case 15:
                  return r.abrupt("return", r.sent);
                case 16:
                  r.next = 23;
                  break;
                case 18:
                  return (
                    (r.prev = 18),
                    (r.t0 = r.catch(0)),
                    (r.next = 22),
                    Object(ze.c)(Object(rt.b)(r.t0))
                  );
                case 22:
                  return r.abrupt("return", r.sent);
                case 23:
                case "end":
                  return r.stop();
              }
          },
          ct,
          null,
          [[0, 18]]
        );
      }
      function st() {
        return Me.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(ze.e)(_.g, ut);
              case 2:
                return (e.next = 4), Object(ze.d)(_.b, it);
              case 4:
              case "end":
                return e.stop();
            }
        }, ot);
      }
      var lt = st,
        dt = n(87),
        ft = Me.a.mark(bt),
        pt = Me.a.mark(gt);
      function bt(e) {
        var t, n;
        return Me.a.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0), (e.next = 3), Object(ze.c)(Object(dt.d)())
                  );
                case 3:
                  return (
                    (e.next = 5),
                    Object(ze.b)(We, { method: "GET", url: "categories" })
                  );
                case 5:
                  if (((t = e.sent), !(n = t.response).data.success)) {
                    e.next = 13;
                    break;
                  }
                  return (e.next = 10), Object(ze.c)(Object(dt.c)(n.data.data));
                case 10:
                  return e.abrupt("return", e.sent);
                case 13:
                  return (
                    (e.next = 15), Object(ze.c)(Object(dt.b)(n.data.message))
                  );
                case 15:
                  return e.abrupt("return", e.sent);
                case 16:
                  e.next = 23;
                  break;
                case 18:
                  return (
                    (e.prev = 18),
                    (e.t0 = e.catch(0)),
                    (e.next = 22),
                    Object(ze.c)(Object(dt.b)(e.t0))
                  );
                case 22:
                  return e.abrupt("return", e.sent);
                case 23:
                case "end":
                  return e.stop();
              }
          },
          ft,
          null,
          [[0, 18]]
        );
      }
      function gt() {
        return Me.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(ze.e)(C.c, bt);
              case 2:
              case "end":
                return e.stop();
            }
        }, pt);
      }
      var Ot = gt,
        mt = n(88),
        ht = Me.a.mark(vt),
        jt = Me.a.mark(Et);
      function vt(e) {
        var t, n;
        return Me.a.wrap(
          function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0), (r.next = 3), Object(ze.c)(Object(mt.d)())
                  );
                case 3:
                  return (
                    (r.next = 5),
                    Object(ze.b)(We, {
                      method: "POST",
                      url: "addBlog",
                      data: e.data
                    })
                  );
                case 5:
                  if (((t = r.sent), !(n = t.response).data.success)) {
                    r.next = 13;
                    break;
                  }
                  return (r.next = 10), Object(ze.c)(Object(mt.c)(n.data.data));
                case 10:
                  return r.abrupt("return", r.sent);
                case 13:
                  return (
                    (r.next = 15), Object(ze.c)(Object(mt.b)(n.data.message))
                  );
                case 15:
                  return r.abrupt("return", r.sent);
                case 16:
                  r.next = 23;
                  break;
                case 18:
                  return (
                    (r.prev = 18),
                    (r.t0 = r.catch(0)),
                    (r.next = 22),
                    Object(ze.c)(Object(mt.b)(r.t0))
                  );
                case 22:
                  return r.abrupt("return", r.sent);
                case 23:
                case "end":
                  return r.stop();
              }
          },
          ht,
          null,
          [[0, 18]]
        );
      }
      function Et() {
        return Me.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(ze.e)(k.b, vt);
              case 2:
              case "end":
                return e.stop();
            }
        }, jt);
      }
      var wt = Et,
        yt = Me.a.mark(St);
      function St() {
        return Me.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(ze.a)([Qe(), nt(), lt(), Ot(), wt()])
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, yt);
      }
      !(function(e) {
        if ("serviceWorker" in navigator) {
          if (
            new URL("", window.location.href).origin !== window.location.origin
          )
            return;
          window.addEventListener("load", function() {
            var t = "".concat("", "/service-worker.js");
            F
              ? ((function(e, t) {
                  fetch(e)
                    .then(function(n) {
                      var r = n.headers.get("content-type");
                      404 === n.status ||
                      (null != r && -1 === r.indexOf("javascript"))
                        ? navigator.serviceWorker.ready.then(function(e) {
                            e.unregister().then(function() {
                              window.location.reload();
                            });
                          })
                        : U(e, t);
                    })
                    .catch(function() {
                      console.log(
                        "No internet connection found. App is running in offline mode."
                      );
                    });
                })(t, e),
                navigator.serviceWorker.ready.then(function() {
                  console.log(
                    "This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA"
                  );
                }))
              : U(t, e);
          });
        }
      })();
      var Lt = (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = B.d ? Object(p.c)({ initialEntries: [e] }) : Object(p.a)(),
            n = Object(b.a)(),
            r = [Object(d.routerMiddleware)(t), n],
            a = f.d.apply(void 0, [f.a.apply(void 0, r)].concat([])),
            c = B.d ? {} : window.__PRELOADED_STATE__;
          B.d || delete window.__PRELOADED_STATE__;
          var o = Object(f.e)(Object(d.connectRouter)(t)(P), c, a);
          return (o.runSaga = n.run), { store: o, history: t };
        })(),
        At = Lt.store,
        xt = Lt.history;
      At.runSaga(St);
      var _t = c.a.createElement(
          u.Provider,
          { store: At },
          c.a.createElement(
            d.ConnectedRouter,
            { history: xt },
            c.a.createElement(
              l.Frontload,
              { noServerRender: !0 },
              c.a.createElement(He, null)
            )
          )
        ),
        Tt = document.querySelector("#root");
      !0 === Tt.hasChildNodes()
        ? s.a.preloadReady().then(function() {
            Object(o.hydrate)(_t, Tt);
          })
        : Object(o.render)(_t, Tt);
    },
    55: function(e, t, n) {
      "use strict";
      n.d(t, "e", function() {
        return a;
      }),
        n.d(t, "h", function() {
          return c;
        }),
        n.d(t, "g", function() {
          return o;
        }),
        n.d(t, "f", function() {
          return u;
        }),
        n.d(t, "i", function() {
          return i;
        }),
        n.d(t, "a", function() {
          return s;
        }),
        n.d(t, "d", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return d;
        }),
        n.d(t, "c", function() {
          return f;
        });
      var r = n(15),
        a = function(e) {
          return { type: r.g, data: e };
        },
        c = function() {
          return { type: r.f };
        },
        o = function(e) {
          return { type: r.i, data: e };
        },
        u = function(e) {
          return { type: r.h, err: e };
        },
        i = function(e) {
          return { type: r.j, filters: e };
        },
        s = function(e) {
          return { type: r.b, data: e };
        },
        l = function() {
          return { type: r.e };
        },
        d = function(e) {
          return { type: r.c, data: e };
        },
        f = function(e) {
          return { type: r.d, data: e };
        };
    },
    86: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return c;
        }),
        n.d(t, "d", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return u;
        });
      var r = n(30),
        a = function(e) {
          return { type: r.b, data: e };
        },
        c = function(e) {
          return { type: r.a, value: e };
        },
        o = function(e) {
          return { type: r.e, data: e };
        },
        u = function(e) {
          return { type: r.c, data: e };
        };
    },
    87: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "d", function() {
          return c;
        }),
        n.d(t, "c", function() {
          return o;
        }),
        n.d(t, "b", function() {
          return u;
        });
      var r = n(31),
        a = function(e) {
          return { type: r.c, data: e };
        },
        c = function() {
          return { type: r.b };
        },
        o = function(e) {
          return { type: r.e, data: e };
        },
        u = function(e) {
          return { type: r.d, data: e };
        };
    },
    88: function(e, t, n) {
      "use strict";
      n.d(t, "e", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return c;
        }),
        n.d(t, "d", function() {
          return o;
        }),
        n.d(t, "c", function() {
          return u;
        }),
        n.d(t, "b", function() {
          return i;
        });
      var r = n(24),
        a = function(e) {
          return { type: r.f, data: e };
        },
        c = function(e) {
          return { type: r.b, data: e };
        },
        o = function() {
          return { type: r.a };
        },
        u = function(e) {
          return { type: r.e, data: e };
        },
        i = function(e) {
          return { type: r.c, data: e };
        };
    }
  },
  [[188, 9, 11]]
]);
//# sourceMappingURL=main.24336264.chunk.js.map
