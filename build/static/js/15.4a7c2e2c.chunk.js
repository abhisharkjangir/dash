(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  Array(448).concat([
    function(t, e, n) {
      var r = n(495),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      t.exports = i;
    },
    function(t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    ,
    ,
    ,
    function(t, e, n) {
      var r = n(572),
        o = n(577);
      t.exports = function(t, e) {
        var n = o(t, e);
        return r(n) ? n : void 0;
      };
    },
    function(t, e, n) {
      "use strict";
      function r(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      n.d(e, "a", function() {
        return r;
      });
    },
    ,
    ,
    ,
    ,
    function(t, e, n) {
      var r = n(465),
        o = n(573),
        i = n(574),
        a = "[object Null]",
        l = "[object Undefined]",
        s = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        return null == t
          ? void 0 === t
            ? l
            : a
          : s && s in Object(t)
          ? o(t)
          : i(t);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return null != t && "object" == typeof t;
      };
    },
    ,
    function(t, e, n) {
      var r = n(562),
        o = n(563),
        i = n(564),
        a = n(565),
        l = n(566);
      function s(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = a),
        (s.prototype.set = l),
        (t.exports = s);
    },
    function(t, e, n) {
      var r = n(480);
      t.exports = function(t, e) {
        for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
        return -1;
      };
    },
    function(t, e, n) {
      var r = n(448).Symbol;
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(453)(Object, "create");
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(586);
      t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
      };
    },
    function(t, e, n) {
      var r = n(606),
        o = n(613),
        i = n(469);
      t.exports = function(t) {
        return i(t) ? r(t) : o(t);
      };
    },
    function(t, e, n) {
      var r = n(494),
        o = n(485);
      t.exports = function(t) {
        return null != t && o(t.length) && !r(t);
      };
    },
    function(t, e, n) {
      var r = n(459),
        o = n(461),
        i = "[object Symbol]";
      t.exports = function(t) {
        return "symbol" == typeof t || (o(t) && r(t) == i);
      };
    },
    function(t, e, n) {
      var r = n(470),
        o = 1 / 0;
      t.exports = function(t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -o ? "-0" : e;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      var r = n(560),
        o = n(623),
        i = n(634),
        a = n(449),
        l = n(635);
      t.exports = function(t) {
        return "function" == typeof t
          ? t
          : null == t
          ? i
          : "object" == typeof t
          ? a(t)
            ? o(t[0], t[1])
            : r(t)
          : l(t);
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return t === e || (t !== t && e !== e);
      };
    },
    function(t, e, n) {
      var r = n(453)(n(448), "Map");
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(578),
        o = n(585),
        i = n(587),
        a = n(588),
        l = n(589);
      function s(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = a),
        (s.prototype.set = l),
        (t.exports = s);
    },
    function(t, e, n) {
      var r = n(590),
        o = n(461);
      t.exports = function t(e, n, i, a, l) {
        return (
          e === n ||
          (null == e || null == n || (!o(e) && !o(n))
            ? e !== e && n !== n
            : r(e, n, i, a, t, l))
        );
      };
    },
    function(t, e) {
      var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, e) {
        var o = typeof t;
        return (
          !!(e = null == e ? n : e) &&
          ("number" == o || ("symbol" != o && r.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      };
    },
    function(t, e) {
      var n = 9007199254740991;
      t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
      };
    },
    function(t, e, n) {
      var r = n(449),
        o = n(470),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != t &&
            !o(t)
          ) ||
          a.test(t) ||
          !i.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    ,
    ,
    function(t, e, n) {
      (function(e) {
        var n;
        "undefined" !== typeof self && self,
          (n = function() {
            return (function(t) {
              var e = {};
              function n(r) {
                if (e[r]) return e[r].exports;
                var o = (e[r] = { i: r, l: !1, exports: {} });
                return (
                  t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
                );
              }
              return (
                (n.m = t),
                (n.c = e),
                (n.d = function(t, e, r) {
                  n.o(t, e) ||
                    Object.defineProperty(t, e, {
                      configurable: !1,
                      enumerable: !0,
                      get: r
                    });
                }),
                (n.n = function(t) {
                  var e =
                    t && t.__esModule
                      ? function() {
                          return t.default;
                        }
                      : function() {
                          return t;
                        };
                  return n.d(e, "a", e), e;
                }),
                (n.o = function(t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (n.p = ""),
                n((n.s = 109))
              );
            })([
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = n(17),
                  o = n(18),
                  i = n(19),
                  a = n(45),
                  l = n(46),
                  s = n(47),
                  u = n(48),
                  c = n(49),
                  f = n(12),
                  p = n(32),
                  h = n(33),
                  d = n(31),
                  y = n(1),
                  v = {
                    Scope: y.Scope,
                    create: y.create,
                    find: y.find,
                    query: y.query,
                    register: y.register,
                    Container: r.default,
                    Format: o.default,
                    Leaf: i.default,
                    Embed: u.default,
                    Scroll: a.default,
                    Block: s.default,
                    Inline: l.default,
                    Text: c.default,
                    Attributor: {
                      Attribute: f.default,
                      Class: p.default,
                      Style: h.default,
                      Store: d.default
                    }
                  };
                e.default = v;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = (function(t) {
                  function e(e) {
                    var n = this;
                    return (
                      (e = "[Parchment] " + e),
                      ((n = t.call(this, e) || this).message = e),
                      (n.name = n.constructor.name),
                      n
                    );
                  }
                  return r(e, t), e;
                })(Error);
                e.ParchmentError = o;
                var i,
                  a = {},
                  l = {},
                  s = {},
                  u = {};
                function c(t, e) {
                  var n;
                  if ((void 0 === e && (e = i.ANY), "string" === typeof t))
                    n = u[t] || a[t];
                  else if (t instanceof Text || t.nodeType === Node.TEXT_NODE)
                    n = u.text;
                  else if ("number" === typeof t)
                    t & i.LEVEL & i.BLOCK
                      ? (n = u.block)
                      : t & i.LEVEL & i.INLINE && (n = u.inline);
                  else if (t instanceof HTMLElement) {
                    var r = (t.getAttribute("class") || "").split(/\s+/);
                    for (var o in r) if ((n = l[r[o]])) break;
                    n = n || s[t.tagName];
                  }
                  return null == n
                    ? null
                    : e & i.LEVEL & n.scope && e & i.TYPE & n.scope
                    ? n
                    : null;
                }
                (e.DATA_KEY = "__blot"),
                  (function(t) {
                    (t[(t.TYPE = 3)] = "TYPE"),
                      (t[(t.LEVEL = 12)] = "LEVEL"),
                      (t[(t.ATTRIBUTE = 13)] = "ATTRIBUTE"),
                      (t[(t.BLOT = 14)] = "BLOT"),
                      (t[(t.INLINE = 7)] = "INLINE"),
                      (t[(t.BLOCK = 11)] = "BLOCK"),
                      (t[(t.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
                      (t[(t.INLINE_BLOT = 6)] = "INLINE_BLOT"),
                      (t[(t.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
                      (t[(t.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
                      (t[(t.ANY = 15)] = "ANY");
                  })((i = e.Scope || (e.Scope = {}))),
                  (e.create = function(t, e) {
                    var n = c(t);
                    if (null == n)
                      throw new o("Unable to create " + t + " blot");
                    var r = n,
                      i =
                        t instanceof Node || t.nodeType === Node.TEXT_NODE
                          ? t
                          : r.create(e);
                    return new r(i, e);
                  }),
                  (e.find = function t(n, r) {
                    return (
                      void 0 === r && (r = !1),
                      null == n
                        ? null
                        : null != n[e.DATA_KEY]
                        ? n[e.DATA_KEY].blot
                        : r
                        ? t(n.parentNode, r)
                        : null
                    );
                  }),
                  (e.query = c),
                  (e.register = function t() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    if (e.length > 1)
                      return e.map(function(e) {
                        return t(e);
                      });
                    var r = e[0];
                    if (
                      "string" !== typeof r.blotName &&
                      "string" !== typeof r.attrName
                    )
                      throw new o("Invalid definition");
                    if ("abstract" === r.blotName)
                      throw new o("Cannot register abstract class");
                    (u[r.blotName || r.attrName] = r),
                      "string" === typeof r.keyName
                        ? (a[r.keyName] = r)
                        : (null != r.className && (l[r.className] = r),
                          null != r.tagName &&
                            (Array.isArray(r.tagName)
                              ? (r.tagName = r.tagName.map(function(t) {
                                  return t.toUpperCase();
                                }))
                              : (r.tagName = r.tagName.toUpperCase()),
                            (Array.isArray(r.tagName)
                              ? r.tagName
                              : [r.tagName]
                            ).forEach(function(t) {
                              (null != s[t] && null != r.className) ||
                                (s[t] = r);
                            })));
                    return r;
                  });
              },
              function(t, e, n) {
                var r = n(51),
                  o = n(11),
                  i = n(3),
                  a = n(20),
                  l = String.fromCharCode(0),
                  s = function(t) {
                    Array.isArray(t)
                      ? (this.ops = t)
                      : null != t && Array.isArray(t.ops)
                      ? (this.ops = t.ops)
                      : (this.ops = []);
                  };
                (s.prototype.insert = function(t, e) {
                  var n = {};
                  return 0 === t.length
                    ? this
                    : ((n.insert = t),
                      null != e &&
                        "object" === typeof e &&
                        Object.keys(e).length > 0 &&
                        (n.attributes = e),
                      this.push(n));
                }),
                  (s.prototype.delete = function(t) {
                    return t <= 0 ? this : this.push({ delete: t });
                  }),
                  (s.prototype.retain = function(t, e) {
                    if (t <= 0) return this;
                    var n = { retain: t };
                    return (
                      null != e &&
                        "object" === typeof e &&
                        Object.keys(e).length > 0 &&
                        (n.attributes = e),
                      this.push(n)
                    );
                  }),
                  (s.prototype.push = function(t) {
                    var e = this.ops.length,
                      n = this.ops[e - 1];
                    if (((t = i(!0, {}, t)), "object" === typeof n)) {
                      if (
                        "number" === typeof t.delete &&
                        "number" === typeof n.delete
                      )
                        return (
                          (this.ops[e - 1] = { delete: n.delete + t.delete }),
                          this
                        );
                      if (
                        "number" === typeof n.delete &&
                        null != t.insert &&
                        ((e -= 1), "object" !== typeof (n = this.ops[e - 1]))
                      )
                        return this.ops.unshift(t), this;
                      if (o(t.attributes, n.attributes)) {
                        if (
                          "string" === typeof t.insert &&
                          "string" === typeof n.insert
                        )
                          return (
                            (this.ops[e - 1] = { insert: n.insert + t.insert }),
                            "object" === typeof t.attributes &&
                              (this.ops[e - 1].attributes = t.attributes),
                            this
                          );
                        if (
                          "number" === typeof t.retain &&
                          "number" === typeof n.retain
                        )
                          return (
                            (this.ops[e - 1] = { retain: n.retain + t.retain }),
                            "object" === typeof t.attributes &&
                              (this.ops[e - 1].attributes = t.attributes),
                            this
                          );
                      }
                    }
                    return (
                      e === this.ops.length
                        ? this.ops.push(t)
                        : this.ops.splice(e, 0, t),
                      this
                    );
                  }),
                  (s.prototype.chop = function() {
                    var t = this.ops[this.ops.length - 1];
                    return (
                      t && t.retain && !t.attributes && this.ops.pop(), this
                    );
                  }),
                  (s.prototype.filter = function(t) {
                    return this.ops.filter(t);
                  }),
                  (s.prototype.forEach = function(t) {
                    this.ops.forEach(t);
                  }),
                  (s.prototype.map = function(t) {
                    return this.ops.map(t);
                  }),
                  (s.prototype.partition = function(t) {
                    var e = [],
                      n = [];
                    return (
                      this.forEach(function(r) {
                        (t(r) ? e : n).push(r);
                      }),
                      [e, n]
                    );
                  }),
                  (s.prototype.reduce = function(t, e) {
                    return this.ops.reduce(t, e);
                  }),
                  (s.prototype.changeLength = function() {
                    return this.reduce(function(t, e) {
                      return e.insert
                        ? t + a.length(e)
                        : e.delete
                        ? t - e.delete
                        : t;
                    }, 0);
                  }),
                  (s.prototype.length = function() {
                    return this.reduce(function(t, e) {
                      return t + a.length(e);
                    }, 0);
                  }),
                  (s.prototype.slice = function(t, e) {
                    (t = t || 0), "number" !== typeof e && (e = 1 / 0);
                    for (
                      var n = [], r = a.iterator(this.ops), o = 0;
                      o < e && r.hasNext();

                    ) {
                      var i;
                      o < t
                        ? (i = r.next(t - o))
                        : ((i = r.next(e - o)), n.push(i)),
                        (o += a.length(i));
                    }
                    return new s(n);
                  }),
                  (s.prototype.compose = function(t) {
                    for (
                      var e = a.iterator(this.ops),
                        n = a.iterator(t.ops),
                        r = new s();
                      e.hasNext() || n.hasNext();

                    )
                      if ("insert" === n.peekType()) r.push(n.next());
                      else if ("delete" === e.peekType()) r.push(e.next());
                      else {
                        var o = Math.min(e.peekLength(), n.peekLength()),
                          i = e.next(o),
                          l = n.next(o);
                        if ("number" === typeof l.retain) {
                          var u = {};
                          "number" === typeof i.retain
                            ? (u.retain = o)
                            : (u.insert = i.insert);
                          var c = a.attributes.compose(
                            i.attributes,
                            l.attributes,
                            "number" === typeof i.retain
                          );
                          c && (u.attributes = c), r.push(u);
                        } else
                          "number" === typeof l.delete &&
                            "number" === typeof i.retain &&
                            r.push(l);
                      }
                    return r.chop();
                  }),
                  (s.prototype.concat = function(t) {
                    var e = new s(this.ops.slice());
                    return (
                      t.ops.length > 0 &&
                        (e.push(t.ops[0]),
                        (e.ops = e.ops.concat(t.ops.slice(1)))),
                      e
                    );
                  }),
                  (s.prototype.diff = function(t, e) {
                    if (this.ops === t.ops) return new s();
                    var n = [this, t].map(function(e) {
                        return e
                          .map(function(n) {
                            if (null != n.insert)
                              return "string" === typeof n.insert
                                ? n.insert
                                : l;
                            throw new Error(
                              "diff() called " +
                                (e === t ? "on" : "with") +
                                " non-document"
                            );
                          })
                          .join("");
                      }),
                      i = new s(),
                      u = r(n[0], n[1], e),
                      c = a.iterator(this.ops),
                      f = a.iterator(t.ops);
                    return (
                      u.forEach(function(t) {
                        for (var e = t[1].length; e > 0; ) {
                          var n = 0;
                          switch (t[0]) {
                            case r.INSERT:
                              (n = Math.min(f.peekLength(), e)),
                                i.push(f.next(n));
                              break;
                            case r.DELETE:
                              (n = Math.min(e, c.peekLength())),
                                c.next(n),
                                i.delete(n);
                              break;
                            case r.EQUAL:
                              n = Math.min(c.peekLength(), f.peekLength(), e);
                              var l = c.next(n),
                                s = f.next(n);
                              o(l.insert, s.insert)
                                ? i.retain(
                                    n,
                                    a.attributes.diff(
                                      l.attributes,
                                      s.attributes
                                    )
                                  )
                                : i.push(s).delete(n);
                          }
                          e -= n;
                        }
                      }),
                      i.chop()
                    );
                  }),
                  (s.prototype.eachLine = function(t, e) {
                    e = e || "\n";
                    for (
                      var n = a.iterator(this.ops), r = new s(), o = 0;
                      n.hasNext();

                    ) {
                      if ("insert" !== n.peekType()) return;
                      var i = n.peek(),
                        l = a.length(i) - n.peekLength(),
                        u =
                          "string" === typeof i.insert
                            ? i.insert.indexOf(e, l) - l
                            : -1;
                      if (u < 0) r.push(n.next());
                      else if (u > 0) r.push(n.next(u));
                      else {
                        if (!1 === t(r, n.next(1).attributes || {}, o)) return;
                        (o += 1), (r = new s());
                      }
                    }
                    r.length() > 0 && t(r, {}, o);
                  }),
                  (s.prototype.transform = function(t, e) {
                    if (((e = !!e), "number" === typeof t))
                      return this.transformPosition(t, e);
                    for (
                      var n = a.iterator(this.ops),
                        r = a.iterator(t.ops),
                        o = new s();
                      n.hasNext() || r.hasNext();

                    )
                      if (
                        "insert" !== n.peekType() ||
                        (!e && "insert" === r.peekType())
                      )
                        if ("insert" === r.peekType()) o.push(r.next());
                        else {
                          var i = Math.min(n.peekLength(), r.peekLength()),
                            l = n.next(i),
                            u = r.next(i);
                          if (l.delete) continue;
                          u.delete
                            ? o.push(u)
                            : o.retain(
                                i,
                                a.attributes.transform(
                                  l.attributes,
                                  u.attributes,
                                  e
                                )
                              );
                        }
                      else o.retain(a.length(n.next()));
                    return o.chop();
                  }),
                  (s.prototype.transformPosition = function(t, e) {
                    e = !!e;
                    for (
                      var n = a.iterator(this.ops), r = 0;
                      n.hasNext() && r <= t;

                    ) {
                      var o = n.peekLength(),
                        i = n.peekType();
                      n.next(),
                        "delete" !== i
                          ? ("insert" === i && (r < t || !e) && (t += o),
                            (r += o))
                          : (t -= Math.min(o, t - r));
                    }
                    return t;
                  }),
                  (t.exports = s);
              },
              function(t, e) {
                "use strict";
                var n = Object.prototype.hasOwnProperty,
                  r = Object.prototype.toString,
                  o = function(t) {
                    return "function" === typeof Array.isArray
                      ? Array.isArray(t)
                      : "[object Array]" === r.call(t);
                  },
                  i = function(t) {
                    if (!t || "[object Object]" !== r.call(t)) return !1;
                    var e,
                      o = n.call(t, "constructor"),
                      i =
                        t.constructor &&
                        t.constructor.prototype &&
                        n.call(t.constructor.prototype, "isPrototypeOf");
                    if (t.constructor && !o && !i) return !1;
                    for (e in t);
                    return "undefined" === typeof e || n.call(t, e);
                  };
                t.exports = function t() {
                  var e,
                    n,
                    r,
                    a,
                    l,
                    s,
                    u = arguments[0],
                    c = 1,
                    f = arguments.length,
                    p = !1;
                  for (
                    "boolean" === typeof u &&
                      ((p = u), (u = arguments[1] || {}), (c = 2)),
                      (null == u ||
                        ("object" !== typeof u && "function" !== typeof u)) &&
                        (u = {});
                    c < f;
                    ++c
                  )
                    if (null != (e = arguments[c]))
                      for (n in e)
                        (r = u[n]),
                          u !== (a = e[n]) &&
                            (p && a && (i(a) || (l = o(a)))
                              ? (l
                                  ? ((l = !1), (s = r && o(r) ? r : []))
                                  : (s = r && i(r) ? r : {}),
                                (u[n] = t(p, s, a)))
                              : "undefined" !== typeof a && (u[n] = a));
                  return u;
                };
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.BlockEmbed = e.bubbleFormats = void 0);
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = f(n(3)),
                  a = f(n(2)),
                  l = f(n(0)),
                  s = f(n(16)),
                  u = f(n(6)),
                  c = f(n(7));
                function f(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function p(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function h(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                function d(t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var y = (function(t) {
                  function e() {
                    return (
                      p(this, e),
                      h(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    d(e, l.default.Embed),
                    r(e, [
                      {
                        key: "attach",
                        value: function() {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "attach",
                            this
                          ).call(this),
                            (this.attributes = new l.default.Attributor.Store(
                              this.domNode
                            ));
                        }
                      },
                      {
                        key: "delta",
                        value: function() {
                          return new a.default().insert(
                            this.value(),
                            (0, i.default)(
                              this.formats(),
                              this.attributes.values()
                            )
                          );
                        }
                      },
                      {
                        key: "format",
                        value: function(t, e) {
                          var n = l.default.query(
                            t,
                            l.default.Scope.BLOCK_ATTRIBUTE
                          );
                          null != n && this.attributes.attribute(n, e);
                        }
                      },
                      {
                        key: "formatAt",
                        value: function(t, e, n, r) {
                          this.format(n, r);
                        }
                      },
                      {
                        key: "insertAt",
                        value: function(t, n, r) {
                          if ("string" === typeof n && n.endsWith("\n")) {
                            var i = l.default.create(v.blotName);
                            this.parent.insertBefore(
                              i,
                              0 === t ? this : this.next
                            ),
                              i.insertAt(0, n.slice(0, -1));
                          } else
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "insertAt",
                              this
                            ).call(this, t, n, r);
                        }
                      }
                    ]),
                    e
                  );
                })();
                y.scope = l.default.Scope.BLOCK_BLOT;
                var v = (function(t) {
                  function e(t) {
                    p(this, e);
                    var n = h(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (n.cache = {}), n;
                  }
                  return (
                    d(e, l.default.Block),
                    r(e, [
                      {
                        key: "delta",
                        value: function() {
                          return (
                            null == this.cache.delta &&
                              (this.cache.delta = this.descendants(
                                l.default.Leaf
                              )
                                .reduce(function(t, e) {
                                  return 0 === e.length()
                                    ? t
                                    : t.insert(e.value(), b(e));
                                }, new a.default())
                                .insert("\n", b(this))),
                            this.cache.delta
                          );
                        }
                      },
                      {
                        key: "deleteAt",
                        value: function(t, n) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "deleteAt",
                            this
                          ).call(this, t, n),
                            (this.cache = {});
                        }
                      },
                      {
                        key: "formatAt",
                        value: function(t, n, r, i) {
                          n <= 0 ||
                            (l.default.query(r, l.default.Scope.BLOCK)
                              ? t + n === this.length() && this.format(r, i)
                              : o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "formatAt",
                                  this
                                ).call(
                                  this,
                                  t,
                                  Math.min(n, this.length() - t - 1),
                                  r,
                                  i
                                ),
                            (this.cache = {}));
                        }
                      },
                      {
                        key: "insertAt",
                        value: function(t, n, r) {
                          if (null != r)
                            return o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "insertAt",
                              this
                            ).call(this, t, n, r);
                          if (0 !== n.length) {
                            var i = n.split("\n"),
                              a = i.shift();
                            a.length > 0 &&
                              (t < this.length() - 1 ||
                              null == this.children.tail
                                ? o(
                                    e.prototype.__proto__ ||
                                      Object.getPrototypeOf(e.prototype),
                                    "insertAt",
                                    this
                                  ).call(
                                    this,
                                    Math.min(t, this.length() - 1),
                                    a
                                  )
                                : this.children.tail.insertAt(
                                    this.children.tail.length(),
                                    a
                                  ),
                              (this.cache = {}));
                            var l = this;
                            i.reduce(function(t, e) {
                              return (
                                (l = l.split(t, !0)).insertAt(0, e), e.length
                              );
                            }, t + a.length);
                          }
                        }
                      },
                      {
                        key: "insertBefore",
                        value: function(t, n) {
                          var r = this.children.head;
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "insertBefore",
                            this
                          ).call(this, t, n),
                            r instanceof s.default && r.remove(),
                            (this.cache = {});
                        }
                      },
                      {
                        key: "length",
                        value: function() {
                          return (
                            null == this.cache.length &&
                              (this.cache.length =
                                o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "length",
                                  this
                                ).call(this) + 1),
                            this.cache.length
                          );
                        }
                      },
                      {
                        key: "moveChildren",
                        value: function(t, n) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "moveChildren",
                            this
                          ).call(this, t, n),
                            (this.cache = {});
                        }
                      },
                      {
                        key: "optimize",
                        value: function(t) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "optimize",
                            this
                          ).call(this, t),
                            (this.cache = {});
                        }
                      },
                      {
                        key: "path",
                        value: function(t) {
                          return o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "path",
                            this
                          ).call(this, t, !0);
                        }
                      },
                      {
                        key: "removeChild",
                        value: function(t) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "removeChild",
                            this
                          ).call(this, t),
                            (this.cache = {});
                        }
                      },
                      {
                        key: "split",
                        value: function(t) {
                          var n =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                          if (n && (0 === t || t >= this.length() - 1)) {
                            var r = this.clone();
                            return 0 === t
                              ? (this.parent.insertBefore(r, this), this)
                              : (this.parent.insertBefore(r, this.next), r);
                          }
                          var i = o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "split",
                            this
                          ).call(this, t, n);
                          return (this.cache = {}), i;
                        }
                      }
                    ]),
                    e
                  );
                })();
                function b(t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return null == t
                    ? e
                    : ("function" === typeof t.formats &&
                        (e = (0, i.default)(e, t.formats())),
                      null == t.parent ||
                      "scroll" == t.parent.blotName ||
                      t.parent.statics.scope !== t.statics.scope
                        ? e
                        : b(t.parent, e));
                }
                (v.blotName = "block"),
                  (v.tagName = "P"),
                  (v.defaultChild = "break"),
                  (v.allowedChildren = [u.default, l.default.Embed, c.default]),
                  (e.bubbleFormats = b),
                  (e.BlockEmbed = y),
                  (e.default = v);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.overload = e.expandConfig = void 0);
                var r =
                    "function" === typeof Symbol &&
                    "symbol" === typeof Symbol.iterator
                      ? function(t) {
                          return typeof t;
                        }
                      : function(t) {
                          return t &&
                            "function" === typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  i = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })();
                n(50);
                var a = v(n(2)),
                  l = v(n(14)),
                  s = v(n(8)),
                  u = v(n(9)),
                  c = v(n(0)),
                  f = n(15),
                  p = v(f),
                  h = v(n(3)),
                  d = v(n(10)),
                  y = v(n(34));
                function v(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function b(t, e, n) {
                  return (
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (t[e] = n),
                    t
                  );
                }
                var g = (0, d.default)("quill"),
                  m = (function() {
                    function t(e) {
                      var n = this,
                        r =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                      if (
                        ((function(t, e) {
                          if (!(t instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, t),
                        (this.options = _(e, r)),
                        (this.container = this.options.container),
                        null == this.container)
                      )
                        return g.error("Invalid Quill container", e);
                      this.options.debug && t.debug(this.options.debug);
                      var o = this.container.innerHTML.trim();
                      this.container.classList.add("ql-container"),
                        (this.container.innerHTML = ""),
                        (this.container.__quill = this),
                        (this.root = this.addContainer("ql-editor")),
                        this.root.classList.add("ql-blank"),
                        this.root.setAttribute("data-gramm", !1),
                        (this.scrollingContainer =
                          this.options.scrollingContainer || this.root),
                        (this.emitter = new s.default()),
                        (this.scroll = c.default.create(this.root, {
                          emitter: this.emitter,
                          whitelist: this.options.formats
                        })),
                        (this.editor = new l.default(this.scroll)),
                        (this.selection = new p.default(
                          this.scroll,
                          this.emitter
                        )),
                        (this.theme = new this.options.theme(
                          this,
                          this.options
                        )),
                        (this.keyboard = this.theme.addModule("keyboard")),
                        (this.clipboard = this.theme.addModule("clipboard")),
                        (this.history = this.theme.addModule("history")),
                        this.theme.init(),
                        this.emitter.on(
                          s.default.events.EDITOR_CHANGE,
                          function(t) {
                            t === s.default.events.TEXT_CHANGE &&
                              n.root.classList.toggle(
                                "ql-blank",
                                n.editor.isBlank()
                              );
                          }
                        ),
                        this.emitter.on(
                          s.default.events.SCROLL_UPDATE,
                          function(t, e) {
                            var r = n.selection.lastRange,
                              o = r && 0 === r.length ? r.index : void 0;
                            w.call(
                              n,
                              function() {
                                return n.editor.update(null, e, o);
                              },
                              t
                            );
                          }
                        );
                      var i = this.clipboard.convert(
                        "<div class='ql-editor' style=\"white-space: normal;\">" +
                          o +
                          "<p><br></p></div>"
                      );
                      this.setContents(i),
                        this.history.clear(),
                        this.options.placeholder &&
                          this.root.setAttribute(
                            "data-placeholder",
                            this.options.placeholder
                          ),
                        this.options.readOnly && this.disable();
                    }
                    return (
                      i(t, null, [
                        {
                          key: "debug",
                          value: function(t) {
                            !0 === t && (t = "log"), d.default.level(t);
                          }
                        },
                        {
                          key: "find",
                          value: function(t) {
                            return t.__quill || c.default.find(t);
                          }
                        },
                        {
                          key: "import",
                          value: function(t) {
                            return (
                              null == this.imports[t] &&
                                g.error(
                                  "Cannot import " +
                                    t +
                                    ". Are you sure it was registered?"
                                ),
                              this.imports[t]
                            );
                          }
                        },
                        {
                          key: "register",
                          value: function(t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                            if ("string" !== typeof t) {
                              var o = t.attrName || t.blotName;
                              "string" === typeof o
                                ? this.register("formats/" + o, t, e)
                                : Object.keys(t).forEach(function(r) {
                                    n.register(r, t[r], e);
                                  });
                            } else
                              null == this.imports[t] ||
                                r ||
                                g.warn("Overwriting " + t + " with", e),
                                (this.imports[t] = e),
                                (t.startsWith("blots/") ||
                                  t.startsWith("formats/")) &&
                                "abstract" !== e.blotName
                                  ? c.default.register(e)
                                  : t.startsWith("modules") &&
                                    "function" === typeof e.register &&
                                    e.register();
                          }
                        }
                      ]),
                      i(t, [
                        {
                          key: "addContainer",
                          value: function(t) {
                            var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                            if ("string" === typeof t) {
                              var n = t;
                              (t = document.createElement("div")).classList.add(
                                n
                              );
                            }
                            return this.container.insertBefore(t, e), t;
                          }
                        },
                        {
                          key: "blur",
                          value: function() {
                            this.selection.setRange(null);
                          }
                        },
                        {
                          key: "deleteText",
                          value: function(t, e, n) {
                            var r = this,
                              i = x(t, e, n),
                              a = o(i, 4);
                            return (
                              (t = a[0]),
                              (e = a[1]),
                              (n = a[3]),
                              w.call(
                                this,
                                function() {
                                  return r.editor.deleteText(t, e);
                                },
                                n,
                                t,
                                -1 * e
                              )
                            );
                          }
                        },
                        {
                          key: "disable",
                          value: function() {
                            this.enable(!1);
                          }
                        },
                        {
                          key: "enable",
                          value: function() {
                            var t =
                              !(
                                arguments.length > 0 && void 0 !== arguments[0]
                              ) || arguments[0];
                            this.scroll.enable(t),
                              this.container.classList.toggle(
                                "ql-disabled",
                                !t
                              );
                          }
                        },
                        {
                          key: "focus",
                          value: function() {
                            var t = this.scrollingContainer.scrollTop;
                            this.selection.focus(),
                              (this.scrollingContainer.scrollTop = t),
                              this.scrollIntoView();
                          }
                        },
                        {
                          key: "format",
                          value: function(t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : s.default.sources.API;
                            return w.call(
                              this,
                              function() {
                                var r = n.getSelection(!0),
                                  o = new a.default();
                                if (null == r) return o;
                                if (c.default.query(t, c.default.Scope.BLOCK))
                                  o = n.editor.formatLine(
                                    r.index,
                                    r.length,
                                    b({}, t, e)
                                  );
                                else {
                                  if (0 === r.length)
                                    return n.selection.format(t, e), o;
                                  o = n.editor.formatText(
                                    r.index,
                                    r.length,
                                    b({}, t, e)
                                  );
                                }
                                return (
                                  n.setSelection(r, s.default.sources.SILENT), o
                                );
                              },
                              r
                            );
                          }
                        },
                        {
                          key: "formatLine",
                          value: function(t, e, n, r, i) {
                            var a,
                              l = this,
                              s = x(t, e, n, r, i),
                              u = o(s, 4);
                            return (
                              (t = u[0]),
                              (e = u[1]),
                              (a = u[2]),
                              (i = u[3]),
                              w.call(
                                this,
                                function() {
                                  return l.editor.formatLine(t, e, a);
                                },
                                i,
                                t,
                                0
                              )
                            );
                          }
                        },
                        {
                          key: "formatText",
                          value: function(t, e, n, r, i) {
                            var a,
                              l = this,
                              s = x(t, e, n, r, i),
                              u = o(s, 4);
                            return (
                              (t = u[0]),
                              (e = u[1]),
                              (a = u[2]),
                              (i = u[3]),
                              w.call(
                                this,
                                function() {
                                  return l.editor.formatText(t, e, a);
                                },
                                i,
                                t,
                                0
                              )
                            );
                          }
                        },
                        {
                          key: "getBounds",
                          value: function(t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              n = void 0;
                            n =
                              "number" === typeof t
                                ? this.selection.getBounds(t, e)
                                : this.selection.getBounds(t.index, t.length);
                            var r = this.container.getBoundingClientRect();
                            return {
                              bottom: n.bottom - r.top,
                              height: n.height,
                              left: n.left - r.left,
                              right: n.right - r.left,
                              top: n.top - r.top,
                              width: n.width
                            };
                          }
                        },
                        {
                          key: "getContents",
                          value: function() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0,
                              e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : this.getLength() - t,
                              n = x(t, e),
                              r = o(n, 2);
                            return (
                              (t = r[0]),
                              (e = r[1]),
                              this.editor.getContents(t, e)
                            );
                          }
                        },
                        {
                          key: "getFormat",
                          value: function() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : this.getSelection(!0),
                              e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0;
                            return "number" === typeof t
                              ? this.editor.getFormat(t, e)
                              : this.editor.getFormat(t.index, t.length);
                          }
                        },
                        {
                          key: "getIndex",
                          value: function(t) {
                            return t.offset(this.scroll);
                          }
                        },
                        {
                          key: "getLength",
                          value: function() {
                            return this.scroll.length();
                          }
                        },
                        {
                          key: "getLeaf",
                          value: function(t) {
                            return this.scroll.leaf(t);
                          }
                        },
                        {
                          key: "getLine",
                          value: function(t) {
                            return this.scroll.line(t);
                          }
                        },
                        {
                          key: "getLines",
                          value: function() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0,
                              e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : Number.MAX_VALUE;
                            return "number" !== typeof t
                              ? this.scroll.lines(t.index, t.length)
                              : this.scroll.lines(t, e);
                          }
                        },
                        {
                          key: "getModule",
                          value: function(t) {
                            return this.theme.modules[t];
                          }
                        },
                        {
                          key: "getSelection",
                          value: function() {
                            return (
                              arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0] &&
                                this.focus(),
                              this.update(),
                              this.selection.getRange()[0]
                            );
                          }
                        },
                        {
                          key: "getText",
                          value: function() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0,
                              e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : this.getLength() - t,
                              n = x(t, e),
                              r = o(n, 2);
                            return (
                              (t = r[0]), (e = r[1]), this.editor.getText(t, e)
                            );
                          }
                        },
                        {
                          key: "hasFocus",
                          value: function() {
                            return this.selection.hasFocus();
                          }
                        },
                        {
                          key: "insertEmbed",
                          value: function(e, n, r) {
                            var o = this,
                              i =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : t.sources.API;
                            return w.call(
                              this,
                              function() {
                                return o.editor.insertEmbed(e, n, r);
                              },
                              i,
                              e
                            );
                          }
                        },
                        {
                          key: "insertText",
                          value: function(t, e, n, r, i) {
                            var a,
                              l = this,
                              s = x(t, 0, n, r, i),
                              u = o(s, 4);
                            return (
                              (t = u[0]),
                              (a = u[2]),
                              (i = u[3]),
                              w.call(
                                this,
                                function() {
                                  return l.editor.insertText(t, e, a);
                                },
                                i,
                                t,
                                e.length
                              )
                            );
                          }
                        },
                        {
                          key: "isEnabled",
                          value: function() {
                            return !this.container.classList.contains(
                              "ql-disabled"
                            );
                          }
                        },
                        {
                          key: "off",
                          value: function() {
                            return this.emitter.off.apply(
                              this.emitter,
                              arguments
                            );
                          }
                        },
                        {
                          key: "on",
                          value: function() {
                            return this.emitter.on.apply(
                              this.emitter,
                              arguments
                            );
                          }
                        },
                        {
                          key: "once",
                          value: function() {
                            return this.emitter.once.apply(
                              this.emitter,
                              arguments
                            );
                          }
                        },
                        {
                          key: "pasteHTML",
                          value: function(t, e, n) {
                            this.clipboard.dangerouslyPasteHTML(t, e, n);
                          }
                        },
                        {
                          key: "removeFormat",
                          value: function(t, e, n) {
                            var r = this,
                              i = x(t, e, n),
                              a = o(i, 4);
                            return (
                              (t = a[0]),
                              (e = a[1]),
                              (n = a[3]),
                              w.call(
                                this,
                                function() {
                                  return r.editor.removeFormat(t, e);
                                },
                                n,
                                t
                              )
                            );
                          }
                        },
                        {
                          key: "scrollIntoView",
                          value: function() {
                            this.selection.scrollIntoView(
                              this.scrollingContainer
                            );
                          }
                        },
                        {
                          key: "setContents",
                          value: function(t) {
                            var e = this,
                              n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : s.default.sources.API;
                            return w.call(
                              this,
                              function() {
                                t = new a.default(t);
                                var n = e.getLength(),
                                  r = e.editor.deleteText(0, n),
                                  o = e.editor.applyDelta(t),
                                  i = o.ops[o.ops.length - 1];
                                return (
                                  null != i &&
                                    "string" === typeof i.insert &&
                                    "\n" === i.insert[i.insert.length - 1] &&
                                    (e.editor.deleteText(e.getLength() - 1, 1),
                                    o.delete(1)),
                                  r.compose(o)
                                );
                              },
                              n
                            );
                          }
                        },
                        {
                          key: "setSelection",
                          value: function(e, n, r) {
                            if (null == e)
                              this.selection.setRange(null, n || t.sources.API);
                            else {
                              var i = x(e, n, r),
                                a = o(i, 4);
                              (e = a[0]),
                                (n = a[1]),
                                (r = a[3]),
                                this.selection.setRange(new f.Range(e, n), r),
                                r !== s.default.sources.SILENT &&
                                  this.selection.scrollIntoView(
                                    this.scrollingContainer
                                  );
                            }
                          }
                        },
                        {
                          key: "setText",
                          value: function(t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : s.default.sources.API,
                              n = new a.default().insert(t);
                            return this.setContents(n, e);
                          }
                        },
                        {
                          key: "update",
                          value: function() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : s.default.sources.USER,
                              e = this.scroll.update(t);
                            return this.selection.update(t), e;
                          }
                        },
                        {
                          key: "updateContents",
                          value: function(t) {
                            var e = this,
                              n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : s.default.sources.API;
                            return w.call(
                              this,
                              function() {
                                return (
                                  (t = new a.default(t)),
                                  e.editor.applyDelta(t, n)
                                );
                              },
                              n,
                              !0
                            );
                          }
                        }
                      ]),
                      t
                    );
                  })();
                function _(t, e) {
                  if (
                    (e = (0, h.default)(
                      !0,
                      {
                        container: t,
                        modules: { clipboard: !0, keyboard: !0, history: !0 }
                      },
                      e
                    )).theme &&
                    e.theme !== m.DEFAULTS.theme
                  ) {
                    if (
                      ((e.theme = m.import("themes/" + e.theme)),
                      null == e.theme)
                    )
                      throw new Error(
                        "Invalid theme " + e.theme + ". Did you register it?"
                      );
                  } else e.theme = y.default;
                  var n = (0, h.default)(!0, {}, e.theme.DEFAULTS);
                  [n, e].forEach(function(t) {
                    (t.modules = t.modules || {}),
                      Object.keys(t.modules).forEach(function(e) {
                        !0 === t.modules[e] && (t.modules[e] = {});
                      });
                  });
                  var r = Object.keys(n.modules)
                    .concat(Object.keys(e.modules))
                    .reduce(function(t, e) {
                      var n = m.import("modules/" + e);
                      return (
                        null == n
                          ? g.error(
                              "Cannot load " +
                                e +
                                " module. Are you sure you registered it?"
                            )
                          : (t[e] = n.DEFAULTS || {}),
                        t
                      );
                    }, {});
                  return (
                    null != e.modules &&
                      e.modules.toolbar &&
                      e.modules.toolbar.constructor !== Object &&
                      (e.modules.toolbar = { container: e.modules.toolbar }),
                    (e = (0, h.default)(
                      !0,
                      {},
                      m.DEFAULTS,
                      { modules: r },
                      n,
                      e
                    )),
                    ["bounds", "container", "scrollingContainer"].forEach(
                      function(t) {
                        "string" === typeof e[t] &&
                          (e[t] = document.querySelector(e[t]));
                      }
                    ),
                    (e.modules = Object.keys(e.modules).reduce(function(t, n) {
                      return e.modules[n] && (t[n] = e.modules[n]), t;
                    }, {})),
                    e
                  );
                }
                function w(t, e, n, r) {
                  if (
                    this.options.strict &&
                    !this.isEnabled() &&
                    e === s.default.sources.USER
                  )
                    return new a.default();
                  var o = null == n ? null : this.getSelection(),
                    i = this.editor.delta,
                    l = t();
                  if (
                    (null != o &&
                      (!0 === n && (n = o.index),
                      null == r
                        ? (o = O(o, l, e))
                        : 0 !== r && (o = O(o, n, r, e)),
                      this.setSelection(o, s.default.sources.SILENT)),
                    l.length() > 0)
                  ) {
                    var u,
                      c,
                      f = [s.default.events.TEXT_CHANGE, l, i, e];
                    if (
                      ((u = this.emitter).emit.apply(
                        u,
                        [s.default.events.EDITOR_CHANGE].concat(f)
                      ),
                      e !== s.default.sources.SILENT)
                    )
                      (c = this.emitter).emit.apply(c, f);
                  }
                  return l;
                }
                function x(t, e, n, o, i) {
                  var a = {};
                  return (
                    "number" === typeof t.index && "number" === typeof t.length
                      ? "number" !== typeof e
                        ? ((i = o),
                          (o = n),
                          (n = e),
                          (e = t.length),
                          (t = t.index))
                        : ((e = t.length), (t = t.index))
                      : "number" !== typeof e &&
                        ((i = o), (o = n), (n = e), (e = 0)),
                    "object" === ("undefined" === typeof n ? "undefined" : r(n))
                      ? ((a = n), (i = o))
                      : "string" === typeof n &&
                        (null != o ? (a[n] = o) : (i = n)),
                    [t, e, a, (i = i || s.default.sources.API)]
                  );
                }
                function O(t, e, n, r) {
                  if (null == t) return null;
                  var i = void 0,
                    l = void 0;
                  if (e instanceof a.default) {
                    var u = [t.index, t.index + t.length].map(function(t) {
                        return e.transformPosition(
                          t,
                          r !== s.default.sources.USER
                        );
                      }),
                      c = o(u, 2);
                    (i = c[0]), (l = c[1]);
                  } else {
                    var p = [t.index, t.index + t.length].map(function(t) {
                        return t < e ||
                          (t === e && r === s.default.sources.USER)
                          ? t
                          : n >= 0
                          ? t + n
                          : Math.max(e, t + n);
                      }),
                      h = o(p, 2);
                    (i = h[0]), (l = h[1]);
                  }
                  return new f.Range(i, l - i);
                }
                (m.DEFAULTS = {
                  bounds: null,
                  formats: null,
                  modules: {},
                  placeholder: "",
                  readOnly: !1,
                  scrollingContainer: null,
                  strict: !0,
                  theme: "default"
                }),
                  (m.events = s.default.events),
                  (m.sources = s.default.sources),
                  (m.version = "1.3.6"),
                  (m.imports = {
                    delta: a.default,
                    parchment: c.default,
                    "core/module": u.default,
                    "core/theme": y.default
                  }),
                  (e.expandConfig = _),
                  (e.overload = x),
                  (e.default = m);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = l(n(7)),
                  a = l(n(0));
                function l(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var s = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, a.default.Inline),
                    r(
                      e,
                      [
                        {
                          key: "formatAt",
                          value: function(t, n, r, i) {
                            if (
                              e.compare(this.statics.blotName, r) < 0 &&
                              a.default.query(r, a.default.Scope.BLOT)
                            ) {
                              var l = this.isolate(t, n);
                              i && l.wrap(r, i);
                            } else
                              o(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "formatAt",
                                this
                              ).call(this, t, n, r, i);
                          }
                        },
                        {
                          key: "optimize",
                          value: function(t) {
                            if (
                              (o(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "optimize",
                                this
                              ).call(this, t),
                              this.parent instanceof e &&
                                e.compare(
                                  this.statics.blotName,
                                  this.parent.statics.blotName
                                ) > 0)
                            ) {
                              var n = this.parent.isolate(
                                this.offset(),
                                this.length()
                              );
                              this.moveChildren(n), n.wrap(this);
                            }
                          }
                        }
                      ],
                      [
                        {
                          key: "compare",
                          value: function(t, n) {
                            var r = e.order.indexOf(t),
                              o = e.order.indexOf(n);
                            return r >= 0 || o >= 0
                              ? r - o
                              : t === n
                              ? 0
                              : t < n
                              ? -1
                              : 1;
                          }
                        }
                      ]
                    ),
                    e
                  );
                })();
                (s.allowedChildren = [s, a.default.Embed, i.default]),
                  (s.order = [
                    "cursor",
                    "inline",
                    "underline",
                    "strike",
                    "italic",
                    "bold",
                    "script",
                    "link",
                    "code"
                  ]),
                  (e.default = s);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r };
                var a = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, i.default.Text),
                    e
                  );
                })();
                e.default = a;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = i(n(54));
                function i(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var a = (0, i(n(10)).default)("quill:events");
                ["selectionchange", "mousedown", "mouseup", "click"].forEach(
                  function(t) {
                    document.addEventListener(t, function() {
                      for (
                        var t = arguments.length, e = Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      [].slice
                        .call(document.querySelectorAll(".ql-container"))
                        .forEach(function(t) {
                          var n;
                          t.__quill &&
                            t.__quill.emitter &&
                            (n = t.__quill.emitter).handleDOM.apply(n, e);
                        });
                    });
                  }
                );
                var l = (function(t) {
                  function e() {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var t = (function(t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" !== typeof e && "function" !== typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                    );
                    return (t.listeners = {}), t.on("error", a.error), t;
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, o.default),
                    r(e, [
                      {
                        key: "emit",
                        value: function() {
                          a.log.apply(a, arguments),
                            (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "emit",
                              this
                            ).apply(this, arguments);
                        }
                      },
                      {
                        key: "handleDOM",
                        value: function(t) {
                          for (
                            var e = arguments.length,
                              n = Array(e > 1 ? e - 1 : 0),
                              r = 1;
                            r < e;
                            r++
                          )
                            n[r - 1] = arguments[r];
                          (this.listeners[t.type] || []).forEach(function(e) {
                            var r = e.node,
                              o = e.handler;
                            (t.target === r || r.contains(t.target)) &&
                              o.apply(void 0, [t].concat(n));
                          });
                        }
                      },
                      {
                        key: "listenDOM",
                        value: function(t, e, n) {
                          this.listeners[t] || (this.listeners[t] = []),
                            this.listeners[t].push({ node: e, handler: n });
                        }
                      }
                    ]),
                    e
                  );
                })();
                (l.events = {
                  EDITOR_CHANGE: "editor-change",
                  SCROLL_BEFORE_UPDATE: "scroll-before-update",
                  SCROLL_OPTIMIZE: "scroll-optimize",
                  SCROLL_UPDATE: "scroll-update",
                  SELECTION_CHANGE: "selection-change",
                  TEXT_CHANGE: "text-change"
                }),
                  (l.sources = { API: "api", SILENT: "silent", USER: "user" }),
                  (e.default = l);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = function t(e) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  !(function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                    (this.quill = e),
                    (this.options = n);
                };
                (r.DEFAULTS = {}), (e.default = r);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = ["error", "warn", "log", "info"],
                  o = "warn";
                function i(t) {
                  if (r.indexOf(t) <= r.indexOf(o)) {
                    for (
                      var e,
                        n = arguments.length,
                        i = Array(n > 1 ? n - 1 : 0),
                        a = 1;
                      a < n;
                      a++
                    )
                      i[a - 1] = arguments[a];
                    (e = console)[t].apply(e, i);
                  }
                }
                function a(t) {
                  return r.reduce(function(e, n) {
                    return (e[n] = i.bind(console, n, t)), e;
                  }, {});
                }
                (i.level = a.level = function(t) {
                  o = t;
                }),
                  (e.default = a);
              },
              function(t, e, n) {
                var r = Array.prototype.slice,
                  o = n(52),
                  i = n(53),
                  a = (t.exports = function(t, e, n) {
                    return (
                      n || (n = {}),
                      t === e ||
                        (t instanceof Date && e instanceof Date
                          ? t.getTime() === e.getTime()
                          : !t ||
                            !e ||
                            ("object" != typeof t && "object" != typeof e)
                          ? n.strict
                            ? t === e
                            : t == e
                          : (function(t, e, n) {
                              var u, c;
                              if (l(t) || l(e)) return !1;
                              if (t.prototype !== e.prototype) return !1;
                              if (i(t))
                                return (
                                  !!i(e) &&
                                  ((t = r.call(t)), (e = r.call(e)), a(t, e, n))
                                );
                              if (s(t)) {
                                if (!s(e)) return !1;
                                if (t.length !== e.length) return !1;
                                for (u = 0; u < t.length; u++)
                                  if (t[u] !== e[u]) return !1;
                                return !0;
                              }
                              try {
                                var f = o(t),
                                  p = o(e);
                              } catch (h) {
                                return !1;
                              }
                              if (f.length != p.length) return !1;
                              for (
                                f.sort(), p.sort(), u = f.length - 1;
                                u >= 0;
                                u--
                              )
                                if (f[u] != p[u]) return !1;
                              for (u = f.length - 1; u >= 0; u--)
                                if (((c = f[u]), !a(t[c], e[c], n))) return !1;
                              return typeof t === typeof e;
                            })(t, e, n))
                    );
                  });
                function l(t) {
                  return null === t || void 0 === t;
                }
                function s(t) {
                  return (
                    !(
                      !t ||
                      "object" !== typeof t ||
                      "number" !== typeof t.length
                    ) &&
                    ("function" === typeof t.copy &&
                      "function" === typeof t.slice &&
                      !(t.length > 0 && "number" !== typeof t[0]))
                  );
                }
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = n(1),
                  o = (function() {
                    function t(t, e, n) {
                      void 0 === n && (n = {}),
                        (this.attrName = t),
                        (this.keyName = e);
                      var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
                      null != n.scope
                        ? (this.scope = (n.scope & r.Scope.LEVEL) | o)
                        : (this.scope = r.Scope.ATTRIBUTE),
                        null != n.whitelist && (this.whitelist = n.whitelist);
                    }
                    return (
                      (t.keys = function(t) {
                        return [].map.call(t.attributes, function(t) {
                          return t.name;
                        });
                      }),
                      (t.prototype.add = function(t, e) {
                        return (
                          !!this.canAdd(t, e) &&
                          (t.setAttribute(this.keyName, e), !0)
                        );
                      }),
                      (t.prototype.canAdd = function(t, e) {
                        return (
                          null !=
                            r.query(
                              t,
                              r.Scope.BLOT & (this.scope | r.Scope.TYPE)
                            ) &&
                          (null == this.whitelist ||
                            ("string" === typeof e
                              ? this.whitelist.indexOf(e.replace(/["']/g, "")) >
                                -1
                              : this.whitelist.indexOf(e) > -1))
                        );
                      }),
                      (t.prototype.remove = function(t) {
                        t.removeAttribute(this.keyName);
                      }),
                      (t.prototype.value = function(t) {
                        var e = t.getAttribute(this.keyName);
                        return this.canAdd(t, e) && e ? e : "";
                      }),
                      t
                    );
                  })();
                e.default = o;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.Code = void 0);
                var r = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = f(n(2)),
                  l = f(n(0)),
                  s = f(n(4)),
                  u = f(n(6)),
                  c = f(n(7));
                function f(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function p(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function h(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                function d(t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var y = (function(t) {
                  function e() {
                    return (
                      p(this, e),
                      h(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return d(e, u.default), e;
                })();
                (y.blotName = "code"), (y.tagName = "CODE");
                var v = (function(t) {
                  function e() {
                    return (
                      p(this, e),
                      h(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    d(e, s.default),
                    o(
                      e,
                      [
                        {
                          key: "delta",
                          value: function() {
                            var t = this,
                              e = this.domNode.textContent;
                            return (
                              e.endsWith("\n") && (e = e.slice(0, -1)),
                              e.split("\n").reduce(function(e, n) {
                                return e.insert(n).insert("\n", t.formats());
                              }, new a.default())
                            );
                          }
                        },
                        {
                          key: "format",
                          value: function(t, n) {
                            if (t !== this.statics.blotName || !n) {
                              var o = this.descendant(
                                  c.default,
                                  this.length() - 1
                                ),
                                a = r(o, 1)[0];
                              null != a && a.deleteAt(a.length() - 1, 1),
                                i(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "format",
                                  this
                                ).call(this, t, n);
                            }
                          }
                        },
                        {
                          key: "formatAt",
                          value: function(t, n, r, o) {
                            if (
                              0 !== n &&
                              null !=
                                l.default.query(r, l.default.Scope.BLOCK) &&
                              (r !== this.statics.blotName ||
                                o !== this.statics.formats(this.domNode))
                            ) {
                              var i = this.newlineIndex(t);
                              if (!(i < 0 || i >= t + n)) {
                                var a = this.newlineIndex(t, !0) + 1,
                                  s = i - a + 1,
                                  u = this.isolate(a, s),
                                  c = u.next;
                                u.format(r, o),
                                  c instanceof e &&
                                    c.formatAt(0, t - a + n - s, r, o);
                              }
                            }
                          }
                        },
                        {
                          key: "insertAt",
                          value: function(t, e, n) {
                            if (null == n) {
                              var o = this.descendant(c.default, t),
                                i = r(o, 2),
                                a = i[0],
                                l = i[1];
                              a.insertAt(l, e);
                            }
                          }
                        },
                        {
                          key: "length",
                          value: function() {
                            var t = this.domNode.textContent.length;
                            return this.domNode.textContent.endsWith("\n")
                              ? t
                              : t + 1;
                          }
                        },
                        {
                          key: "newlineIndex",
                          value: function(t) {
                            if (
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1]
                            )
                              return this.domNode.textContent
                                .slice(0, t)
                                .lastIndexOf("\n");
                            var e = this.domNode.textContent
                              .slice(t)
                              .indexOf("\n");
                            return e > -1 ? t + e : -1;
                          }
                        },
                        {
                          key: "optimize",
                          value: function(t) {
                            this.domNode.textContent.endsWith("\n") ||
                              this.appendChild(l.default.create("text", "\n")),
                              i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "optimize",
                                this
                              ).call(this, t);
                            var n = this.next;
                            null != n &&
                              n.prev === this &&
                              n.statics.blotName === this.statics.blotName &&
                              this.statics.formats(this.domNode) ===
                                n.statics.formats(n.domNode) &&
                              (n.optimize(t), n.moveChildren(this), n.remove());
                          }
                        },
                        {
                          key: "replace",
                          value: function(t) {
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "replace",
                              this
                            ).call(this, t),
                              [].slice
                                .call(this.domNode.querySelectorAll("*"))
                                .forEach(function(t) {
                                  var e = l.default.find(t);
                                  null == e
                                    ? t.parentNode.removeChild(t)
                                    : e instanceof l.default.Embed
                                    ? e.remove()
                                    : e.unwrap();
                                });
                          }
                        }
                      ],
                      [
                        {
                          key: "create",
                          value: function(t) {
                            var n = i(
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this, t);
                            return n.setAttribute("spellcheck", !1), n;
                          }
                        },
                        {
                          key: "formats",
                          value: function() {
                            return !0;
                          }
                        }
                      ]
                    ),
                    e
                  );
                })();
                (v.blotName = "code-block"),
                  (v.tagName = "PRE"),
                  (v.TAB = "  "),
                  (e.Code = y),
                  (e.default = v);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r =
                    "function" === typeof Symbol &&
                    "symbol" === typeof Symbol.iterator
                      ? function(t) {
                          return typeof t;
                        }
                      : function(t) {
                          return t &&
                            "function" === typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  i = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = b(n(2)),
                  l = b(n(20)),
                  s = b(n(0)),
                  u = b(n(13)),
                  c = b(n(24)),
                  f = n(4),
                  p = b(f),
                  h = b(n(16)),
                  d = b(n(21)),
                  y = b(n(11)),
                  v = b(n(3));
                function b(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var g = /^[ -~]*$/,
                  m = (function() {
                    function t(e) {
                      !(function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                        (this.scroll = e),
                        (this.delta = this.getDelta());
                    }
                    return (
                      i(t, [
                        {
                          key: "applyDelta",
                          value: function(t) {
                            var e = this,
                              n = !1;
                            this.scroll.update();
                            var i = this.scroll.length();
                            return (
                              this.scroll.batchStart(),
                              (t = (function(t) {
                                return t.reduce(function(t, e) {
                                  if (1 === e.insert) {
                                    var n = (0, d.default)(e.attributes);
                                    return (
                                      delete n.image,
                                      t.insert({ image: e.attributes.image }, n)
                                    );
                                  }
                                  if (
                                    (null == e.attributes ||
                                      (!0 !== e.attributes.list &&
                                        !0 !== e.attributes.bullet) ||
                                      ((e = (0, d.default)(e)).attributes.list
                                        ? (e.attributes.list = "ordered")
                                        : ((e.attributes.list = "bullet"),
                                          delete e.attributes.bullet)),
                                    "string" === typeof e.insert)
                                  ) {
                                    var r = e.insert
                                      .replace(/\r\n/g, "\n")
                                      .replace(/\r/g, "\n");
                                    return t.insert(r, e.attributes);
                                  }
                                  return t.push(e);
                                }, new a.default());
                              })(t)).reduce(function(t, a) {
                                var u =
                                    a.retain ||
                                    a.delete ||
                                    a.insert.length ||
                                    1,
                                  c = a.attributes || {};
                                if (null != a.insert) {
                                  if ("string" === typeof a.insert) {
                                    var h = a.insert;
                                    h.endsWith("\n") &&
                                      n &&
                                      ((n = !1), (h = h.slice(0, -1))),
                                      t >= i && !h.endsWith("\n") && (n = !0),
                                      e.scroll.insertAt(t, h);
                                    var d = e.scroll.line(t),
                                      y = o(d, 2),
                                      b = y[0],
                                      g = y[1],
                                      m = (0, v.default)(
                                        {},
                                        (0, f.bubbleFormats)(b)
                                      );
                                    if (b instanceof p.default) {
                                      var _ = b.descendant(s.default.Leaf, g),
                                        w = o(_, 1)[0];
                                      m = (0, v.default)(
                                        m,
                                        (0, f.bubbleFormats)(w)
                                      );
                                    }
                                    c = l.default.attributes.diff(m, c) || {};
                                  } else if ("object" === r(a.insert)) {
                                    var x = Object.keys(a.insert)[0];
                                    if (null == x) return t;
                                    e.scroll.insertAt(t, x, a.insert[x]);
                                  }
                                  i += u;
                                }
                                return (
                                  Object.keys(c).forEach(function(n) {
                                    e.scroll.formatAt(t, u, n, c[n]);
                                  }),
                                  t + u
                                );
                              }, 0),
                              t.reduce(function(t, n) {
                                return "number" === typeof n.delete
                                  ? (e.scroll.deleteAt(t, n.delete), t)
                                  : t + (n.retain || n.insert.length || 1);
                              }, 0),
                              this.scroll.batchEnd(),
                              this.update(t)
                            );
                          }
                        },
                        {
                          key: "deleteText",
                          value: function(t, e) {
                            return (
                              this.scroll.deleteAt(t, e),
                              this.update(new a.default().retain(t).delete(e))
                            );
                          }
                        },
                        {
                          key: "formatLine",
                          value: function(t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {};
                            return (
                              this.scroll.update(),
                              Object.keys(r).forEach(function(o) {
                                if (
                                  null == n.scroll.whitelist ||
                                  n.scroll.whitelist[o]
                                ) {
                                  var i = n.scroll.lines(t, Math.max(e, 1)),
                                    a = e;
                                  i.forEach(function(e) {
                                    var i = e.length();
                                    if (e instanceof u.default) {
                                      var l = t - e.offset(n.scroll),
                                        s = e.newlineIndex(l + a) - l + 1;
                                      e.formatAt(l, s, o, r[o]);
                                    } else e.format(o, r[o]);
                                    a -= i;
                                  });
                                }
                              }),
                              this.scroll.optimize(),
                              this.update(
                                new a.default()
                                  .retain(t)
                                  .retain(e, (0, d.default)(r))
                              )
                            );
                          }
                        },
                        {
                          key: "formatText",
                          value: function(t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {};
                            return (
                              Object.keys(r).forEach(function(o) {
                                n.scroll.formatAt(t, e, o, r[o]);
                              }),
                              this.update(
                                new a.default()
                                  .retain(t)
                                  .retain(e, (0, d.default)(r))
                              )
                            );
                          }
                        },
                        {
                          key: "getContents",
                          value: function(t, e) {
                            return this.delta.slice(t, t + e);
                          }
                        },
                        {
                          key: "getDelta",
                          value: function() {
                            return this.scroll.lines().reduce(function(t, e) {
                              return t.concat(e.delta());
                            }, new a.default());
                          }
                        },
                        {
                          key: "getFormat",
                          value: function(t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              n = [],
                              r = [];
                            0 === e
                              ? this.scroll.path(t).forEach(function(t) {
                                  var e = o(t, 1)[0];
                                  e instanceof p.default
                                    ? n.push(e)
                                    : e instanceof s.default.Leaf && r.push(e);
                                })
                              : ((n = this.scroll.lines(t, e)),
                                (r = this.scroll.descendants(
                                  s.default.Leaf,
                                  t,
                                  e
                                )));
                            var i = [n, r].map(function(t) {
                              if (0 === t.length) return {};
                              for (
                                var e = (0, f.bubbleFormats)(t.shift());
                                Object.keys(e).length > 0;

                              ) {
                                var n = t.shift();
                                if (null == n) return e;
                                e = _((0, f.bubbleFormats)(n), e);
                              }
                              return e;
                            });
                            return v.default.apply(v.default, i);
                          }
                        },
                        {
                          key: "getText",
                          value: function(t, e) {
                            return this.getContents(t, e)
                              .filter(function(t) {
                                return "string" === typeof t.insert;
                              })
                              .map(function(t) {
                                return t.insert;
                              })
                              .join("");
                          }
                        },
                        {
                          key: "insertEmbed",
                          value: function(t, e, n) {
                            return (
                              this.scroll.insertAt(t, e, n),
                              this.update(
                                new a.default().retain(t).insert(
                                  (function(t, e, n) {
                                    return (
                                      e in t
                                        ? Object.defineProperty(t, e, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                          })
                                        : (t[e] = n),
                                      t
                                    );
                                  })({}, e, n)
                                )
                              )
                            );
                          }
                        },
                        {
                          key: "insertText",
                          value: function(t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {};
                            return (
                              (e = e
                                .replace(/\r\n/g, "\n")
                                .replace(/\r/g, "\n")),
                              this.scroll.insertAt(t, e),
                              Object.keys(r).forEach(function(o) {
                                n.scroll.formatAt(t, e.length, o, r[o]);
                              }),
                              this.update(
                                new a.default()
                                  .retain(t)
                                  .insert(e, (0, d.default)(r))
                              )
                            );
                          }
                        },
                        {
                          key: "isBlank",
                          value: function() {
                            if (0 == this.scroll.children.length) return !0;
                            if (this.scroll.children.length > 1) return !1;
                            var t = this.scroll.children.head;
                            return (
                              t.statics.blotName === p.default.blotName &&
                              (!(t.children.length > 1) &&
                                t.children.head instanceof h.default)
                            );
                          }
                        },
                        {
                          key: "removeFormat",
                          value: function(t, e) {
                            var n = this.getText(t, e),
                              r = this.scroll.line(t + e),
                              i = o(r, 2),
                              l = i[0],
                              s = i[1],
                              c = 0,
                              f = new a.default();
                            null != l &&
                              ((c =
                                l instanceof u.default
                                  ? l.newlineIndex(s) - s + 1
                                  : l.length() - s),
                              (f = l
                                .delta()
                                .slice(s, s + c - 1)
                                .insert("\n")));
                            var p = this.getContents(t, e + c).diff(
                                new a.default().insert(n).concat(f)
                              ),
                              h = new a.default().retain(t).concat(p);
                            return this.applyDelta(h);
                          }
                        },
                        {
                          key: "update",
                          value: function(t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : [],
                              n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : void 0,
                              r = this.delta;
                            if (
                              1 === e.length &&
                              "characterData" === e[0].type &&
                              e[0].target.data.match(g) &&
                              s.default.find(e[0].target)
                            ) {
                              var o = s.default.find(e[0].target),
                                i = (0, f.bubbleFormats)(o),
                                l = o.offset(this.scroll),
                                u = e[0].oldValue.replace(
                                  c.default.CONTENTS,
                                  ""
                                ),
                                p = new a.default().insert(u),
                                h = new a.default().insert(o.value());
                              (t = new a.default()
                                .retain(l)
                                .concat(p.diff(h, n))
                                .reduce(function(t, e) {
                                  return e.insert
                                    ? t.insert(e.insert, i)
                                    : t.push(e);
                                }, new a.default())),
                                (this.delta = r.compose(t));
                            } else
                              (this.delta = this.getDelta()),
                                (t &&
                                  (0, y.default)(r.compose(t), this.delta)) ||
                                  (t = r.diff(this.delta, n));
                            return t;
                          }
                        }
                      ]),
                      t
                    );
                  })();
                function _(t, e) {
                  return Object.keys(e).reduce(function(n, r) {
                    return null == t[r]
                      ? n
                      : (e[r] === t[r]
                          ? (n[r] = e[r])
                          : Array.isArray(e[r])
                          ? e[r].indexOf(t[r]) < 0 &&
                            (n[r] = e[r].concat([t[r]]))
                          : (n[r] = [e[r], t[r]]),
                        n);
                  }, {});
                }
                e.default = m;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.Range = void 0);
                var r = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = u(n(0)),
                  a = u(n(21)),
                  l = u(n(11)),
                  s = u(n(8));
                function u(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function c(t) {
                  if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++)
                      n[e] = t[e];
                    return n;
                  }
                  return Array.from(t);
                }
                function f(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                var p = (0, u(n(10)).default)("quill:selection"),
                  h = function t(e) {
                    var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                    f(this, t), (this.index = e), (this.length = n);
                  },
                  d = (function() {
                    function t(e, n) {
                      var r = this;
                      f(this, t),
                        (this.emitter = n),
                        (this.scroll = e),
                        (this.composing = !1),
                        (this.mouseDown = !1),
                        (this.root = this.scroll.domNode),
                        (this.cursor = i.default.create("cursor", this)),
                        (this.lastRange = this.savedRange = new h(0, 0)),
                        this.handleComposition(),
                        this.handleDragging(),
                        this.emitter.listenDOM(
                          "selectionchange",
                          document,
                          function() {
                            r.mouseDown ||
                              setTimeout(
                                r.update.bind(r, s.default.sources.USER),
                                1
                              );
                          }
                        ),
                        this.emitter.on(
                          s.default.events.EDITOR_CHANGE,
                          function(t, e) {
                            t === s.default.events.TEXT_CHANGE &&
                              e.length() > 0 &&
                              r.update(s.default.sources.SILENT);
                          }
                        ),
                        this.emitter.on(
                          s.default.events.SCROLL_BEFORE_UPDATE,
                          function() {
                            if (r.hasFocus()) {
                              var t = r.getNativeRange();
                              null != t &&
                                t.start.node !== r.cursor.textNode &&
                                r.emitter.once(
                                  s.default.events.SCROLL_UPDATE,
                                  function() {
                                    try {
                                      r.setNativeRange(
                                        t.start.node,
                                        t.start.offset,
                                        t.end.node,
                                        t.end.offset
                                      );
                                    } catch (e) {}
                                  }
                                );
                            }
                          }
                        ),
                        this.emitter.on(
                          s.default.events.SCROLL_OPTIMIZE,
                          function(t, e) {
                            if (e.range) {
                              var n = e.range,
                                o = n.startNode,
                                i = n.startOffset,
                                a = n.endNode,
                                l = n.endOffset;
                              r.setNativeRange(o, i, a, l);
                            }
                          }
                        ),
                        this.update(s.default.sources.SILENT);
                    }
                    return (
                      o(t, [
                        {
                          key: "handleComposition",
                          value: function() {
                            var t = this;
                            this.root.addEventListener(
                              "compositionstart",
                              function() {
                                t.composing = !0;
                              }
                            ),
                              this.root.addEventListener(
                                "compositionend",
                                function() {
                                  if (((t.composing = !1), t.cursor.parent)) {
                                    var e = t.cursor.restore();
                                    if (!e) return;
                                    setTimeout(function() {
                                      t.setNativeRange(
                                        e.startNode,
                                        e.startOffset,
                                        e.endNode,
                                        e.endOffset
                                      );
                                    }, 1);
                                  }
                                }
                              );
                          }
                        },
                        {
                          key: "handleDragging",
                          value: function() {
                            var t = this;
                            this.emitter.listenDOM(
                              "mousedown",
                              document.body,
                              function() {
                                t.mouseDown = !0;
                              }
                            ),
                              this.emitter.listenDOM(
                                "mouseup",
                                document.body,
                                function() {
                                  (t.mouseDown = !1),
                                    t.update(s.default.sources.USER);
                                }
                              );
                          }
                        },
                        {
                          key: "focus",
                          value: function() {
                            this.hasFocus() ||
                              (this.root.focus(),
                              this.setRange(this.savedRange));
                          }
                        },
                        {
                          key: "format",
                          value: function(t, e) {
                            if (
                              null == this.scroll.whitelist ||
                              this.scroll.whitelist[t]
                            ) {
                              this.scroll.update();
                              var n = this.getNativeRange();
                              if (
                                null != n &&
                                n.native.collapsed &&
                                !i.default.query(t, i.default.Scope.BLOCK)
                              ) {
                                if (n.start.node !== this.cursor.textNode) {
                                  var r = i.default.find(n.start.node, !1);
                                  if (null == r) return;
                                  if (r instanceof i.default.Leaf) {
                                    var o = r.split(n.start.offset);
                                    r.parent.insertBefore(this.cursor, o);
                                  } else
                                    r.insertBefore(this.cursor, n.start.node);
                                  this.cursor.attach();
                                }
                                this.cursor.format(t, e),
                                  this.scroll.optimize(),
                                  this.setNativeRange(
                                    this.cursor.textNode,
                                    this.cursor.textNode.data.length
                                  ),
                                  this.update();
                              }
                            }
                          }
                        },
                        {
                          key: "getBounds",
                          value: function(t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              n = this.scroll.length();
                            (t = Math.min(t, n - 1)),
                              (e = Math.min(t + e, n - 1) - t);
                            var o = void 0,
                              i = this.scroll.leaf(t),
                              a = r(i, 2),
                              l = a[0],
                              s = a[1];
                            if (null == l) return null;
                            var u = l.position(s, !0),
                              c = r(u, 2);
                            (o = c[0]), (s = c[1]);
                            var f = document.createRange();
                            if (e > 0) {
                              f.setStart(o, s);
                              var p = this.scroll.leaf(t + e),
                                h = r(p, 2);
                              if (((l = h[0]), (s = h[1]), null == l))
                                return null;
                              var d = l.position(s, !0),
                                y = r(d, 2);
                              return (
                                (o = y[0]),
                                (s = y[1]),
                                f.setEnd(o, s),
                                f.getBoundingClientRect()
                              );
                            }
                            var v = "left",
                              b = void 0;
                            return (
                              o instanceof Text
                                ? (s < o.data.length
                                    ? (f.setStart(o, s), f.setEnd(o, s + 1))
                                    : (f.setStart(o, s - 1),
                                      f.setEnd(o, s),
                                      (v = "right")),
                                  (b = f.getBoundingClientRect()))
                                : ((b = l.domNode.getBoundingClientRect()),
                                  s > 0 && (v = "right")),
                              {
                                bottom: b.top + b.height,
                                height: b.height,
                                left: b[v],
                                right: b[v],
                                top: b.top,
                                width: 0
                              }
                            );
                          }
                        },
                        {
                          key: "getNativeRange",
                          value: function() {
                            var t = document.getSelection();
                            if (null == t || t.rangeCount <= 0) return null;
                            var e = t.getRangeAt(0);
                            if (null == e) return null;
                            var n = this.normalizeNative(e);
                            return p.info("getNativeRange", n), n;
                          }
                        },
                        {
                          key: "getRange",
                          value: function() {
                            var t = this.getNativeRange();
                            return null == t
                              ? [null, null]
                              : [this.normalizedToRange(t), t];
                          }
                        },
                        {
                          key: "hasFocus",
                          value: function() {
                            return document.activeElement === this.root;
                          }
                        },
                        {
                          key: "normalizedToRange",
                          value: function(t) {
                            var e = this,
                              n = [[t.start.node, t.start.offset]];
                            t.native.collapsed ||
                              n.push([t.end.node, t.end.offset]);
                            var o = n.map(function(t) {
                                var n = r(t, 2),
                                  o = n[0],
                                  a = n[1],
                                  l = i.default.find(o, !0),
                                  s = l.offset(e.scroll);
                                return 0 === a
                                  ? s
                                  : l instanceof i.default.Container
                                  ? s + l.length()
                                  : s + l.index(o, a);
                              }),
                              a = Math.min(
                                Math.max.apply(Math, c(o)),
                                this.scroll.length() - 1
                              ),
                              l = Math.min.apply(Math, [a].concat(c(o)));
                            return new h(l, a - l);
                          }
                        },
                        {
                          key: "normalizeNative",
                          value: function(t) {
                            if (
                              !y(this.root, t.startContainer) ||
                              (!t.collapsed && !y(this.root, t.endContainer))
                            )
                              return null;
                            var e = {
                              start: {
                                node: t.startContainer,
                                offset: t.startOffset
                              },
                              end: {
                                node: t.endContainer,
                                offset: t.endOffset
                              },
                              native: t
                            };
                            return (
                              [e.start, e.end].forEach(function(t) {
                                for (
                                  var e = t.node, n = t.offset;
                                  !(e instanceof Text) &&
                                  e.childNodes.length > 0;

                                )
                                  if (e.childNodes.length > n)
                                    (e = e.childNodes[n]), (n = 0);
                                  else {
                                    if (e.childNodes.length !== n) break;
                                    n =
                                      (e = e.lastChild) instanceof Text
                                        ? e.data.length
                                        : e.childNodes.length + 1;
                                  }
                                (t.node = e), (t.offset = n);
                              }),
                              e
                            );
                          }
                        },
                        {
                          key: "rangeToNative",
                          value: function(t) {
                            var e = this,
                              n = t.collapsed
                                ? [t.index]
                                : [t.index, t.index + t.length],
                              o = [],
                              i = this.scroll.length();
                            return (
                              n.forEach(function(t, n) {
                                t = Math.min(i - 1, t);
                                var a,
                                  l = e.scroll.leaf(t),
                                  s = r(l, 2),
                                  u = s[0],
                                  c = s[1],
                                  f = u.position(c, 0 !== n),
                                  p = r(f, 2);
                                (a = p[0]), (c = p[1]), o.push(a, c);
                              }),
                              o.length < 2 && (o = o.concat(o)),
                              o
                            );
                          }
                        },
                        {
                          key: "scrollIntoView",
                          value: function(t) {
                            var e = this.lastRange;
                            if (null != e) {
                              var n = this.getBounds(e.index, e.length);
                              if (null != n) {
                                var o = this.scroll.length() - 1,
                                  i = this.scroll.line(Math.min(e.index, o)),
                                  a = r(i, 1)[0],
                                  l = a;
                                if (e.length > 0) {
                                  var s = this.scroll.line(
                                    Math.min(e.index + e.length, o)
                                  );
                                  l = r(s, 1)[0];
                                }
                                if (null != a && null != l) {
                                  var u = t.getBoundingClientRect();
                                  n.top < u.top
                                    ? (t.scrollTop -= u.top - n.top)
                                    : n.bottom > u.bottom &&
                                      (t.scrollTop += n.bottom - u.bottom);
                                }
                              }
                            }
                          }
                        },
                        {
                          key: "setNativeRange",
                          value: function(t, e) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : t,
                              r =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : e,
                              o =
                                arguments.length > 4 &&
                                void 0 !== arguments[4] &&
                                arguments[4];
                            if (
                              (p.info("setNativeRange", t, e, n, r),
                              null == t ||
                                (null != this.root.parentNode &&
                                  null != t.parentNode &&
                                  null != n.parentNode))
                            ) {
                              var i = document.getSelection();
                              if (null != i)
                                if (null != t) {
                                  this.hasFocus() || this.root.focus();
                                  var a = (this.getNativeRange() || {}).native;
                                  if (
                                    null == a ||
                                    o ||
                                    t !== a.startContainer ||
                                    e !== a.startOffset ||
                                    n !== a.endContainer ||
                                    r !== a.endOffset
                                  ) {
                                    "BR" == t.tagName &&
                                      ((e = [].indexOf.call(
                                        t.parentNode.childNodes,
                                        t
                                      )),
                                      (t = t.parentNode)),
                                      "BR" == n.tagName &&
                                        ((r = [].indexOf.call(
                                          n.parentNode.childNodes,
                                          n
                                        )),
                                        (n = n.parentNode));
                                    var l = document.createRange();
                                    l.setStart(t, e),
                                      l.setEnd(n, r),
                                      i.removeAllRanges(),
                                      i.addRange(l);
                                  }
                                } else
                                  i.removeAllRanges(),
                                    this.root.blur(),
                                    document.body.focus();
                            }
                          }
                        },
                        {
                          key: "setRange",
                          value: function(t) {
                            var e =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1],
                              n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : s.default.sources.API;
                            if (
                              ("string" === typeof e && ((n = e), (e = !1)),
                              p.info("setRange", t),
                              null != t)
                            ) {
                              var r = this.rangeToNative(t);
                              this.setNativeRange.apply(this, c(r).concat([e]));
                            } else this.setNativeRange(null);
                            this.update(n);
                          }
                        },
                        {
                          key: "update",
                          value: function() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : s.default.sources.USER,
                              e = this.lastRange,
                              n = this.getRange(),
                              o = r(n, 2),
                              i = o[0],
                              u = o[1];
                            if (
                              ((this.lastRange = i),
                              null != this.lastRange &&
                                (this.savedRange = this.lastRange),
                              !(0, l.default)(e, this.lastRange))
                            ) {
                              var c;
                              !this.composing &&
                                null != u &&
                                u.native.collapsed &&
                                u.start.node !== this.cursor.textNode &&
                                this.cursor.restore();
                              var f,
                                p = [
                                  s.default.events.SELECTION_CHANGE,
                                  (0, a.default)(this.lastRange),
                                  (0, a.default)(e),
                                  t
                                ];
                              if (
                                ((c = this.emitter).emit.apply(
                                  c,
                                  [s.default.events.EDITOR_CHANGE].concat(p)
                                ),
                                t !== s.default.sources.SILENT)
                              )
                                (f = this.emitter).emit.apply(f, p);
                            }
                          }
                        }
                      ]),
                      t
                    );
                  })();
                function y(t, e) {
                  try {
                    e.parentNode;
                  } catch (n) {
                    return !1;
                  }
                  return e instanceof Text && (e = e.parentNode), t.contains(e);
                }
                (e.Range = h), (e.default = d);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(0),
                  a = (r = i) && r.__esModule ? r : { default: r };
                var l = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, a.default.Embed),
                    o(
                      e,
                      [
                        {
                          key: "insertInto",
                          value: function(t, n) {
                            0 === t.children.length
                              ? (function t(e, n, r) {
                                  null === e && (e = Function.prototype);
                                  var o = Object.getOwnPropertyDescriptor(e, n);
                                  if (void 0 === o) {
                                    var i = Object.getPrototypeOf(e);
                                    return null === i ? void 0 : t(i, n, r);
                                  }
                                  if ("value" in o) return o.value;
                                  var a = o.get;
                                  return void 0 !== a ? a.call(r) : void 0;
                                })(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "insertInto",
                                  this
                                ).call(this, t, n)
                              : this.remove();
                          }
                        },
                        {
                          key: "length",
                          value: function() {
                            return 0;
                          }
                        },
                        {
                          key: "value",
                          value: function() {
                            return "";
                          }
                        }
                      ],
                      [{ key: "value", value: function() {} }]
                    ),
                    e
                  );
                })();
                (l.blotName = "break"), (l.tagName = "BR"), (e.default = l);
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(44),
                  i = n(30),
                  a = n(1),
                  l = (function(t) {
                    function e(e) {
                      var n = t.call(this, e) || this;
                      return n.build(), n;
                    }
                    return (
                      r(e, t),
                      (e.prototype.appendChild = function(t) {
                        this.insertBefore(t);
                      }),
                      (e.prototype.attach = function() {
                        t.prototype.attach.call(this),
                          this.children.forEach(function(t) {
                            t.attach();
                          });
                      }),
                      (e.prototype.build = function() {
                        var t = this;
                        (this.children = new o.default()),
                          [].slice
                            .call(this.domNode.childNodes)
                            .reverse()
                            .forEach(function(e) {
                              try {
                                var n = s(e);
                                t.insertBefore(n, t.children.head || void 0);
                              } catch (r) {
                                if (r instanceof a.ParchmentError) return;
                                throw r;
                              }
                            });
                      }),
                      (e.prototype.deleteAt = function(t, e) {
                        if (0 === t && e === this.length())
                          return this.remove();
                        this.children.forEachAt(t, e, function(t, e, n) {
                          t.deleteAt(e, n);
                        });
                      }),
                      (e.prototype.descendant = function(t, n) {
                        var r = this.children.find(n),
                          o = r[0],
                          i = r[1];
                        return (null == t.blotName && t(o)) ||
                          (null != t.blotName && o instanceof t)
                          ? [o, i]
                          : o instanceof e
                          ? o.descendant(t, i)
                          : [null, -1];
                      }),
                      (e.prototype.descendants = function(t, n, r) {
                        void 0 === n && (n = 0),
                          void 0 === r && (r = Number.MAX_VALUE);
                        var o = [],
                          i = r;
                        return (
                          this.children.forEachAt(n, r, function(n, r, a) {
                            ((null == t.blotName && t(n)) ||
                              (null != t.blotName && n instanceof t)) &&
                              o.push(n),
                              n instanceof e &&
                                (o = o.concat(n.descendants(t, r, i))),
                              (i -= a);
                          }),
                          o
                        );
                      }),
                      (e.prototype.detach = function() {
                        this.children.forEach(function(t) {
                          t.detach();
                        }),
                          t.prototype.detach.call(this);
                      }),
                      (e.prototype.formatAt = function(t, e, n, r) {
                        this.children.forEachAt(t, e, function(t, e, o) {
                          t.formatAt(e, o, n, r);
                        });
                      }),
                      (e.prototype.insertAt = function(t, e, n) {
                        var r = this.children.find(t),
                          o = r[0],
                          i = r[1];
                        if (o) o.insertAt(i, e, n);
                        else {
                          var l =
                            null == n ? a.create("text", e) : a.create(e, n);
                          this.appendChild(l);
                        }
                      }),
                      (e.prototype.insertBefore = function(t, e) {
                        if (
                          null != this.statics.allowedChildren &&
                          !this.statics.allowedChildren.some(function(e) {
                            return t instanceof e;
                          })
                        )
                          throw new a.ParchmentError(
                            "Cannot insert " +
                              t.statics.blotName +
                              " into " +
                              this.statics.blotName
                          );
                        t.insertInto(this, e);
                      }),
                      (e.prototype.length = function() {
                        return this.children.reduce(function(t, e) {
                          return t + e.length();
                        }, 0);
                      }),
                      (e.prototype.moveChildren = function(t, e) {
                        this.children.forEach(function(n) {
                          t.insertBefore(n, e);
                        });
                      }),
                      (e.prototype.optimize = function(e) {
                        if (
                          (t.prototype.optimize.call(this, e),
                          0 === this.children.length)
                        )
                          if (null != this.statics.defaultChild) {
                            var n = a.create(this.statics.defaultChild);
                            this.appendChild(n), n.optimize(e);
                          } else this.remove();
                      }),
                      (e.prototype.path = function(t, n) {
                        void 0 === n && (n = !1);
                        var r = this.children.find(t, n),
                          o = r[0],
                          i = r[1],
                          a = [[this, t]];
                        return o instanceof e
                          ? a.concat(o.path(i, n))
                          : (null != o && a.push([o, i]), a);
                      }),
                      (e.prototype.removeChild = function(t) {
                        this.children.remove(t);
                      }),
                      (e.prototype.replace = function(n) {
                        n instanceof e && n.moveChildren(this),
                          t.prototype.replace.call(this, n);
                      }),
                      (e.prototype.split = function(t, e) {
                        if ((void 0 === e && (e = !1), !e)) {
                          if (0 === t) return this;
                          if (t === this.length()) return this.next;
                        }
                        var n = this.clone();
                        return (
                          this.parent.insertBefore(n, this.next),
                          this.children.forEachAt(t, this.length(), function(
                            t,
                            r,
                            o
                          ) {
                            (t = t.split(r, e)), n.appendChild(t);
                          }),
                          n
                        );
                      }),
                      (e.prototype.unwrap = function() {
                        this.moveChildren(this.parent, this.next),
                          this.remove();
                      }),
                      (e.prototype.update = function(t, e) {
                        var n = this,
                          r = [],
                          o = [];
                        t.forEach(function(t) {
                          t.target === n.domNode &&
                            "childList" === t.type &&
                            (r.push.apply(r, t.addedNodes),
                            o.push.apply(o, t.removedNodes));
                        }),
                          o.forEach(function(t) {
                            if (
                              !(
                                null != t.parentNode &&
                                "IFRAME" !== t.tagName &&
                                document.body.compareDocumentPosition(t) &
                                  Node.DOCUMENT_POSITION_CONTAINED_BY
                              )
                            ) {
                              var e = a.find(t);
                              null != e &&
                                ((null != e.domNode.parentNode &&
                                  e.domNode.parentNode !== n.domNode) ||
                                  e.detach());
                            }
                          }),
                          r
                            .filter(function(t) {
                              return t.parentNode == n.domNode;
                            })
                            .sort(function(t, e) {
                              return t === e
                                ? 0
                                : t.compareDocumentPosition(e) &
                                  Node.DOCUMENT_POSITION_FOLLOWING
                                ? 1
                                : -1;
                            })
                            .forEach(function(t) {
                              var e = null;
                              null != t.nextSibling &&
                                (e = a.find(t.nextSibling));
                              var r = s(t);
                              (r.next == e && null != r.next) ||
                                (null != r.parent && r.parent.removeChild(n),
                                n.insertBefore(r, e || void 0));
                            });
                      }),
                      e
                    );
                  })(i.default);
                function s(t) {
                  var e = a.find(t);
                  if (null == e)
                    try {
                      e = a.create(t);
                    } catch (n) {
                      (e = a.create(a.Scope.INLINE)),
                        [].slice.call(t.childNodes).forEach(function(t) {
                          e.domNode.appendChild(t);
                        }),
                        t.parentNode && t.parentNode.replaceChild(e.domNode, t),
                        e.attach();
                    }
                  return e;
                }
                e.default = l;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(12),
                  i = n(31),
                  a = n(17),
                  l = n(1),
                  s = (function(t) {
                    function e(e) {
                      var n = t.call(this, e) || this;
                      return (n.attributes = new i.default(n.domNode)), n;
                    }
                    return (
                      r(e, t),
                      (e.formats = function(t) {
                        return (
                          "string" === typeof this.tagName ||
                          (Array.isArray(this.tagName)
                            ? t.tagName.toLowerCase()
                            : void 0)
                        );
                      }),
                      (e.prototype.format = function(t, e) {
                        var n = l.query(t);
                        n instanceof o.default
                          ? this.attributes.attribute(n, e)
                          : e &&
                            (null == n ||
                              (t === this.statics.blotName &&
                                this.formats()[t] === e) ||
                              this.replaceWith(t, e));
                      }),
                      (e.prototype.formats = function() {
                        var t = this.attributes.values(),
                          e = this.statics.formats(this.domNode);
                        return null != e && (t[this.statics.blotName] = e), t;
                      }),
                      (e.prototype.replaceWith = function(e, n) {
                        var r = t.prototype.replaceWith.call(this, e, n);
                        return this.attributes.copy(r), r;
                      }),
                      (e.prototype.update = function(e, n) {
                        var r = this;
                        t.prototype.update.call(this, e, n),
                          e.some(function(t) {
                            return (
                              t.target === r.domNode && "attributes" === t.type
                            );
                          }) && this.attributes.build();
                      }),
                      (e.prototype.wrap = function(n, r) {
                        var o = t.prototype.wrap.call(this, n, r);
                        return (
                          o instanceof e &&
                            o.statics.scope === this.statics.scope &&
                            this.attributes.move(o),
                          o
                        );
                      }),
                      e
                    );
                  })(a.default);
                e.default = s;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(30),
                  i = n(1),
                  a = (function(t) {
                    function e() {
                      return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                      r(e, t),
                      (e.value = function(t) {
                        return !0;
                      }),
                      (e.prototype.index = function(t, e) {
                        return this.domNode === t ||
                          this.domNode.compareDocumentPosition(t) &
                            Node.DOCUMENT_POSITION_CONTAINED_BY
                          ? Math.min(e, 1)
                          : -1;
                      }),
                      (e.prototype.position = function(t, e) {
                        var n = [].indexOf.call(
                          this.parent.domNode.childNodes,
                          this.domNode
                        );
                        return t > 0 && (n += 1), [this.parent.domNode, n];
                      }),
                      (e.prototype.value = function() {
                        return (
                          ((t = {})[this.statics.blotName] =
                            this.statics.value(this.domNode) || !0),
                          t
                        );
                        var t;
                      }),
                      (e.scope = i.Scope.INLINE_BLOT),
                      e
                    );
                  })(o.default);
                e.default = a;
              },
              function(t, e, n) {
                var r = n(11),
                  o = n(3),
                  i = {
                    attributes: {
                      compose: function(t, e, n) {
                        "object" !== typeof t && (t = {}),
                          "object" !== typeof e && (e = {});
                        var r = o(!0, {}, e);
                        for (var i in (n ||
                          (r = Object.keys(r).reduce(function(t, e) {
                            return null != r[e] && (t[e] = r[e]), t;
                          }, {})),
                        t))
                          void 0 !== t[i] && void 0 === e[i] && (r[i] = t[i]);
                        return Object.keys(r).length > 0 ? r : void 0;
                      },
                      diff: function(t, e) {
                        "object" !== typeof t && (t = {}),
                          "object" !== typeof e && (e = {});
                        var n = Object.keys(t)
                          .concat(Object.keys(e))
                          .reduce(function(n, o) {
                            return (
                              r(t[o], e[o]) ||
                                (n[o] = void 0 === e[o] ? null : e[o]),
                              n
                            );
                          }, {});
                        return Object.keys(n).length > 0 ? n : void 0;
                      },
                      transform: function(t, e, n) {
                        if ("object" !== typeof t) return e;
                        if ("object" === typeof e) {
                          if (!n) return e;
                          var r = Object.keys(e).reduce(function(n, r) {
                            return void 0 === t[r] && (n[r] = e[r]), n;
                          }, {});
                          return Object.keys(r).length > 0 ? r : void 0;
                        }
                      }
                    },
                    iterator: function(t) {
                      return new a(t);
                    },
                    length: function(t) {
                      return "number" === typeof t.delete
                        ? t.delete
                        : "number" === typeof t.retain
                        ? t.retain
                        : "string" === typeof t.insert
                        ? t.insert.length
                        : 1;
                    }
                  };
                function a(t) {
                  (this.ops = t), (this.index = 0), (this.offset = 0);
                }
                (a.prototype.hasNext = function() {
                  return this.peekLength() < 1 / 0;
                }),
                  (a.prototype.next = function(t) {
                    t || (t = 1 / 0);
                    var e = this.ops[this.index];
                    if (e) {
                      var n = this.offset,
                        r = i.length(e);
                      if (
                        (t >= r - n
                          ? ((t = r - n), (this.index += 1), (this.offset = 0))
                          : (this.offset += t),
                        "number" === typeof e.delete)
                      )
                        return { delete: t };
                      var o = {};
                      return (
                        e.attributes && (o.attributes = e.attributes),
                        "number" === typeof e.retain
                          ? (o.retain = t)
                          : "string" === typeof e.insert
                          ? (o.insert = e.insert.substr(n, t))
                          : (o.insert = e.insert),
                        o
                      );
                    }
                    return { retain: 1 / 0 };
                  }),
                  (a.prototype.peek = function() {
                    return this.ops[this.index];
                  }),
                  (a.prototype.peekLength = function() {
                    return this.ops[this.index]
                      ? i.length(this.ops[this.index]) - this.offset
                      : 1 / 0;
                  }),
                  (a.prototype.peekType = function() {
                    return this.ops[this.index]
                      ? "number" === typeof this.ops[this.index].delete
                        ? "delete"
                        : "number" === typeof this.ops[this.index].retain
                        ? "retain"
                        : "insert"
                      : "retain";
                  }),
                  (t.exports = i);
              },
              function(t, n) {
                var r = (function() {
                  "use strict";
                  function t(t, e) {
                    return null != e && t instanceof e;
                  }
                  var n, r, o;
                  try {
                    n = Map;
                  } catch (s) {
                    n = function() {};
                  }
                  try {
                    r = Set;
                  } catch (s) {
                    r = function() {};
                  }
                  try {
                    o = Promise;
                  } catch (s) {
                    o = function() {};
                  }
                  function i(a, s, u, c, f) {
                    "object" === typeof s &&
                      ((u = s.depth),
                      (c = s.prototype),
                      (f = s.includeNonEnumerable),
                      (s = s.circular));
                    var p = [],
                      h = [],
                      d = "undefined" != typeof e;
                    return (
                      "undefined" == typeof s && (s = !0),
                      "undefined" == typeof u && (u = 1 / 0),
                      (function a(u, y) {
                        if (null === u) return null;
                        if (0 === y) return u;
                        var v, b;
                        if ("object" != typeof u) return u;
                        if (t(u, n)) v = new n();
                        else if (t(u, r)) v = new r();
                        else if (t(u, o))
                          v = new o(function(t, e) {
                            u.then(
                              function(e) {
                                t(a(e, y - 1));
                              },
                              function(t) {
                                e(a(t, y - 1));
                              }
                            );
                          });
                        else if (i.__isArray(u)) v = [];
                        else if (i.__isRegExp(u))
                          (v = new RegExp(u.source, l(u))),
                            u.lastIndex && (v.lastIndex = u.lastIndex);
                        else if (i.__isDate(u)) v = new Date(u.getTime());
                        else {
                          if (d && e.isBuffer(u))
                            return (v = new e(u.length)), u.copy(v), v;
                          t(u, Error)
                            ? (v = Object.create(u))
                            : "undefined" == typeof c
                            ? ((b = Object.getPrototypeOf(u)),
                              (v = Object.create(b)))
                            : ((v = Object.create(c)), (b = c));
                        }
                        if (s) {
                          var g = p.indexOf(u);
                          if (-1 != g) return h[g];
                          p.push(u), h.push(v);
                        }
                        for (var m in (t(u, n) &&
                          u.forEach(function(t, e) {
                            var n = a(e, y - 1),
                              r = a(t, y - 1);
                            v.set(n, r);
                          }),
                        t(u, r) &&
                          u.forEach(function(t) {
                            var e = a(t, y - 1);
                            v.add(e);
                          }),
                        u)) {
                          var _;
                          b && (_ = Object.getOwnPropertyDescriptor(b, m)),
                            (_ && null == _.set) || (v[m] = a(u[m], y - 1));
                        }
                        if (Object.getOwnPropertySymbols) {
                          var w = Object.getOwnPropertySymbols(u);
                          for (m = 0; m < w.length; m++) {
                            var x = w[m];
                            (!(E = Object.getOwnPropertyDescriptor(u, x)) ||
                              E.enumerable ||
                              f) &&
                              ((v[x] = a(u[x], y - 1)),
                              E.enumerable ||
                                Object.defineProperty(v, x, {
                                  enumerable: !1
                                }));
                          }
                        }
                        if (f) {
                          var O = Object.getOwnPropertyNames(u);
                          for (m = 0; m < O.length; m++) {
                            var E,
                              k = O[m];
                            ((E = Object.getOwnPropertyDescriptor(u, k)) &&
                              E.enumerable) ||
                              ((v[k] = a(u[k], y - 1)),
                              Object.defineProperty(v, k, { enumerable: !1 }));
                          }
                        }
                        return v;
                      })(a, u)
                    );
                  }
                  function a(t) {
                    return Object.prototype.toString.call(t);
                  }
                  function l(t) {
                    var e = "";
                    return (
                      t.global && (e += "g"),
                      t.ignoreCase && (e += "i"),
                      t.multiline && (e += "m"),
                      e
                    );
                  }
                  return (
                    (i.clonePrototype = function(t) {
                      if (null === t) return null;
                      var e = function() {};
                      return (e.prototype = t), new e();
                    }),
                    (i.__objToStr = a),
                    (i.__isDate = function(t) {
                      return "object" === typeof t && "[object Date]" === a(t);
                    }),
                    (i.__isArray = function(t) {
                      return "object" === typeof t && "[object Array]" === a(t);
                    }),
                    (i.__isRegExp = function(t) {
                      return (
                        "object" === typeof t && "[object RegExp]" === a(t)
                      );
                    }),
                    (i.__getRegExpFlags = l),
                    i
                  );
                })();
                "object" === typeof t && t.exports && (t.exports = r);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = h(n(0)),
                  l = h(n(8)),
                  s = n(4),
                  u = h(s),
                  c = h(n(16)),
                  f = h(n(13)),
                  p = h(n(25));
                function h(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function d(t) {
                  return t instanceof u.default || t instanceof s.BlockEmbed;
                }
                var y = (function(t) {
                  function e(t, n) {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r = (function(t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" !== typeof e && "function" !== typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (
                      (r.emitter = n.emitter),
                      Array.isArray(n.whitelist) &&
                        (r.whitelist = n.whitelist.reduce(function(t, e) {
                          return (t[e] = !0), t;
                        }, {})),
                      r.domNode.addEventListener(
                        "DOMNodeInserted",
                        function() {}
                      ),
                      r.optimize(),
                      r.enable(),
                      r
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, a.default.Scroll),
                    o(e, [
                      {
                        key: "batchStart",
                        value: function() {
                          this.batch = !0;
                        }
                      },
                      {
                        key: "batchEnd",
                        value: function() {
                          (this.batch = !1), this.optimize();
                        }
                      },
                      {
                        key: "deleteAt",
                        value: function(t, n) {
                          var o = this.line(t),
                            a = r(o, 2),
                            l = a[0],
                            u = a[1],
                            p = this.line(t + n),
                            h = r(p, 1)[0];
                          if (
                            (i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "deleteAt",
                              this
                            ).call(this, t, n),
                            null != h && l !== h && u > 0)
                          ) {
                            if (
                              l instanceof s.BlockEmbed ||
                              h instanceof s.BlockEmbed
                            )
                              return void this.optimize();
                            if (l instanceof f.default) {
                              var d = l.newlineIndex(l.length(), !0);
                              if (d > -1 && (l = l.split(d + 1)) === h)
                                return void this.optimize();
                            } else if (h instanceof f.default) {
                              var y = h.newlineIndex(0);
                              y > -1 && h.split(y + 1);
                            }
                            var v =
                              h.children.head instanceof c.default
                                ? null
                                : h.children.head;
                            l.moveChildren(h, v), l.remove();
                          }
                          this.optimize();
                        }
                      },
                      {
                        key: "enable",
                        value: function() {
                          var t =
                            !(
                              arguments.length > 0 && void 0 !== arguments[0]
                            ) || arguments[0];
                          this.domNode.setAttribute("contenteditable", t);
                        }
                      },
                      {
                        key: "formatAt",
                        value: function(t, n, r, o) {
                          (null == this.whitelist || this.whitelist[r]) &&
                            (i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "formatAt",
                              this
                            ).call(this, t, n, r, o),
                            this.optimize());
                        }
                      },
                      {
                        key: "insertAt",
                        value: function(t, n, r) {
                          if (
                            null == r ||
                            null == this.whitelist ||
                            this.whitelist[n]
                          ) {
                            if (t >= this.length())
                              if (
                                null == r ||
                                null ==
                                  a.default.query(n, a.default.Scope.BLOCK)
                              ) {
                                var o = a.default.create(
                                  this.statics.defaultChild
                                );
                                this.appendChild(o),
                                  null == r &&
                                    n.endsWith("\n") &&
                                    (n = n.slice(0, -1)),
                                  o.insertAt(0, n, r);
                              } else {
                                var l = a.default.create(n, r);
                                this.appendChild(l);
                              }
                            else
                              i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "insertAt",
                                this
                              ).call(this, t, n, r);
                            this.optimize();
                          }
                        }
                      },
                      {
                        key: "insertBefore",
                        value: function(t, n) {
                          if (t.statics.scope === a.default.Scope.INLINE_BLOT) {
                            var r = a.default.create(this.statics.defaultChild);
                            r.appendChild(t), (t = r);
                          }
                          i(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "insertBefore",
                            this
                          ).call(this, t, n);
                        }
                      },
                      {
                        key: "leaf",
                        value: function(t) {
                          return this.path(t).pop() || [null, -1];
                        }
                      },
                      {
                        key: "line",
                        value: function(t) {
                          return t === this.length()
                            ? this.line(t - 1)
                            : this.descendant(d, t);
                        }
                      },
                      {
                        key: "lines",
                        value: function() {
                          return (function t(e, n, r) {
                            var o = [],
                              i = r;
                            return (
                              e.children.forEachAt(n, r, function(e, n, r) {
                                d(e)
                                  ? o.push(e)
                                  : e instanceof a.default.Container &&
                                    (o = o.concat(t(e, n, i))),
                                  (i -= r);
                              }),
                              o
                            );
                          })(
                            this,
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : Number.MAX_VALUE
                          );
                        }
                      },
                      {
                        key: "optimize",
                        value: function() {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                          !0 !== this.batch &&
                            (i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "optimize",
                              this
                            ).call(this, t, n),
                            t.length > 0 &&
                              this.emitter.emit(
                                l.default.events.SCROLL_OPTIMIZE,
                                t,
                                n
                              ));
                        }
                      },
                      {
                        key: "path",
                        value: function(t) {
                          return i(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "path",
                            this
                          )
                            .call(this, t)
                            .slice(1);
                        }
                      },
                      {
                        key: "update",
                        value: function(t) {
                          if (!0 !== this.batch) {
                            var n = l.default.sources.USER;
                            "string" === typeof t && (n = t),
                              Array.isArray(t) ||
                                (t = this.observer.takeRecords()),
                              t.length > 0 &&
                                this.emitter.emit(
                                  l.default.events.SCROLL_BEFORE_UPDATE,
                                  n,
                                  t
                                ),
                              i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "update",
                                this
                              ).call(this, t.concat([])),
                              t.length > 0 &&
                                this.emitter.emit(
                                  l.default.events.SCROLL_UPDATE,
                                  n,
                                  t
                                );
                          }
                        }
                      }
                    ]),
                    e
                  );
                })();
                (y.blotName = "scroll"),
                  (y.className = "ql-editor"),
                  (y.tagName = "DIV"),
                  (y.defaultChild = "block"),
                  (y.allowedChildren = [u.default, s.BlockEmbed, p.default]),
                  (e.default = y);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.SHORTKEY = e.default = void 0);
                var r =
                    "function" === typeof Symbol &&
                    "symbol" === typeof Symbol.iterator
                      ? function(t) {
                          return typeof t;
                        }
                      : function(t) {
                          return t &&
                            "function" === typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  i = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = y(n(21)),
                  l = y(n(11)),
                  s = y(n(3)),
                  u = y(n(2)),
                  c = y(n(20)),
                  f = y(n(0)),
                  p = y(n(5)),
                  h = y(n(10)),
                  d = y(n(9));
                function y(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function v(t, e, n) {
                  return (
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (t[e] = n),
                    t
                  );
                }
                var b = (0, h.default)("quill:keyboard"),
                  g = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
                  m = (function(t) {
                    function e(t, n) {
                      !(function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var r = (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return (
                        (r.bindings = {}),
                        Object.keys(r.options.bindings).forEach(function(e) {
                          ("list autofill" !== e ||
                            null == t.scroll.whitelist ||
                            t.scroll.whitelist.list) &&
                            r.options.bindings[e] &&
                            r.addBinding(r.options.bindings[e]);
                        }),
                        r.addBinding({ key: e.keys.ENTER, shiftKey: null }, E),
                        r.addBinding(
                          {
                            key: e.keys.ENTER,
                            metaKey: null,
                            ctrlKey: null,
                            altKey: null
                          },
                          function() {}
                        ),
                        /Firefox/i.test(navigator.userAgent)
                          ? (r.addBinding(
                              { key: e.keys.BACKSPACE },
                              { collapsed: !0 },
                              w
                            ),
                            r.addBinding(
                              { key: e.keys.DELETE },
                              { collapsed: !0 },
                              x
                            ))
                          : (r.addBinding(
                              { key: e.keys.BACKSPACE },
                              { collapsed: !0, prefix: /^.?$/ },
                              w
                            ),
                            r.addBinding(
                              { key: e.keys.DELETE },
                              { collapsed: !0, suffix: /^.?$/ },
                              x
                            )),
                        r.addBinding(
                          { key: e.keys.BACKSPACE },
                          { collapsed: !1 },
                          O
                        ),
                        r.addBinding(
                          { key: e.keys.DELETE },
                          { collapsed: !1 },
                          O
                        ),
                        r.addBinding(
                          {
                            key: e.keys.BACKSPACE,
                            altKey: null,
                            ctrlKey: null,
                            metaKey: null,
                            shiftKey: null
                          },
                          { collapsed: !0, offset: 0 },
                          w
                        ),
                        r.listen(),
                        r
                      );
                    }
                    return (
                      (function(t, e) {
                        if ("function" !== typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, d.default),
                      i(e, null, [
                        {
                          key: "match",
                          value: function(t, e) {
                            return (
                              (e = N(e)),
                              ![
                                "altKey",
                                "ctrlKey",
                                "metaKey",
                                "shiftKey"
                              ].some(function(n) {
                                return !!e[n] !== t[n] && null !== e[n];
                              }) && e.key === (t.which || t.keyCode)
                            );
                          }
                        }
                      ]),
                      i(e, [
                        {
                          key: "addBinding",
                          value: function(t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {},
                              n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {},
                              r = N(t);
                            if (null == r || null == r.key)
                              return b.warn(
                                "Attempted to add invalid keyboard binding",
                                r
                              );
                            "function" === typeof e && (e = { handler: e }),
                              "function" === typeof n && (n = { handler: n }),
                              (r = (0, s.default)(r, e, n)),
                              (this.bindings[r.key] =
                                this.bindings[r.key] || []),
                              this.bindings[r.key].push(r);
                          }
                        },
                        {
                          key: "listen",
                          value: function() {
                            var t = this;
                            this.quill.root.addEventListener(
                              "keydown",
                              function(n) {
                                if (!n.defaultPrevented) {
                                  var i = n.which || n.keyCode,
                                    a = (t.bindings[i] || []).filter(function(
                                      t
                                    ) {
                                      return e.match(n, t);
                                    });
                                  if (0 !== a.length) {
                                    var s = t.quill.getSelection();
                                    if (null != s && t.quill.hasFocus()) {
                                      var u = t.quill.getLine(s.index),
                                        c = o(u, 2),
                                        p = c[0],
                                        h = c[1],
                                        d = t.quill.getLeaf(s.index),
                                        y = o(d, 2),
                                        v = y[0],
                                        b = y[1],
                                        g =
                                          0 === s.length
                                            ? [v, b]
                                            : t.quill.getLeaf(
                                                s.index + s.length
                                              ),
                                        m = o(g, 2),
                                        _ = m[0],
                                        w = m[1],
                                        x =
                                          v instanceof f.default.Text
                                            ? v.value().slice(0, b)
                                            : "",
                                        O =
                                          _ instanceof f.default.Text
                                            ? _.value().slice(w)
                                            : "",
                                        E = {
                                          collapsed: 0 === s.length,
                                          empty:
                                            0 === s.length && p.length() <= 1,
                                          format: t.quill.getFormat(s),
                                          offset: h,
                                          prefix: x,
                                          suffix: O
                                        };
                                      a.some(function(e) {
                                        if (
                                          null != e.collapsed &&
                                          e.collapsed !== E.collapsed
                                        )
                                          return !1;
                                        if (
                                          null != e.empty &&
                                          e.empty !== E.empty
                                        )
                                          return !1;
                                        if (
                                          null != e.offset &&
                                          e.offset !== E.offset
                                        )
                                          return !1;
                                        if (Array.isArray(e.format)) {
                                          if (
                                            e.format.every(function(t) {
                                              return null == E.format[t];
                                            })
                                          )
                                            return !1;
                                        } else if (
                                          "object" === r(e.format) &&
                                          !Object.keys(e.format).every(function(
                                            t
                                          ) {
                                            return !0 === e.format[t]
                                              ? null != E.format[t]
                                              : !1 === e.format[t]
                                              ? null == E.format[t]
                                              : (0, l.default)(
                                                  e.format[t],
                                                  E.format[t]
                                                );
                                          })
                                        )
                                          return !1;
                                        return (
                                          !(
                                            null != e.prefix &&
                                            !e.prefix.test(E.prefix)
                                          ) &&
                                          (!(
                                            null != e.suffix &&
                                            !e.suffix.test(E.suffix)
                                          ) &&
                                            !0 !== e.handler.call(t, s, E))
                                        );
                                      }) && n.preventDefault();
                                    }
                                  }
                                }
                              }
                            );
                          }
                        }
                      ]),
                      e
                    );
                  })();
                function _(t, e) {
                  var n,
                    r = t === m.keys.LEFT ? "prefix" : "suffix";
                  return (
                    v((n = { key: t, shiftKey: e, altKey: null }), r, /^$/),
                    v(n, "handler", function(n) {
                      var r = n.index;
                      t === m.keys.RIGHT && (r += n.length + 1);
                      var i = this.quill.getLeaf(r);
                      return (
                        !(o(i, 1)[0] instanceof f.default.Embed) ||
                        (t === m.keys.LEFT
                          ? e
                            ? this.quill.setSelection(
                                n.index - 1,
                                n.length + 1,
                                p.default.sources.USER
                              )
                            : this.quill.setSelection(
                                n.index - 1,
                                p.default.sources.USER
                              )
                          : e
                          ? this.quill.setSelection(
                              n.index,
                              n.length + 1,
                              p.default.sources.USER
                            )
                          : this.quill.setSelection(
                              n.index + n.length + 1,
                              p.default.sources.USER
                            ),
                        !1)
                      );
                    }),
                    n
                  );
                }
                function w(t, e) {
                  if (!(0 === t.index || this.quill.getLength() <= 1)) {
                    var n = this.quill.getLine(t.index),
                      r = o(n, 1)[0],
                      i = {};
                    if (0 === e.offset) {
                      var a = this.quill.getLine(t.index - 1),
                        l = o(a, 1)[0];
                      if (null != l && l.length() > 1) {
                        var s = r.formats(),
                          u = this.quill.getFormat(t.index - 1, 1);
                        i = c.default.attributes.diff(s, u) || {};
                      }
                    }
                    var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)
                      ? 2
                      : 1;
                    this.quill.deleteText(
                      t.index - f,
                      f,
                      p.default.sources.USER
                    ),
                      Object.keys(i).length > 0 &&
                        this.quill.formatLine(
                          t.index - f,
                          f,
                          i,
                          p.default.sources.USER
                        ),
                      this.quill.focus();
                  }
                }
                function x(t, e) {
                  var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)
                    ? 2
                    : 1;
                  if (!(t.index >= this.quill.getLength() - n)) {
                    var r = {},
                      i = 0,
                      a = this.quill.getLine(t.index),
                      l = o(a, 1)[0];
                    if (e.offset >= l.length() - 1) {
                      var s = this.quill.getLine(t.index + 1),
                        u = o(s, 1)[0];
                      if (u) {
                        var f = l.formats(),
                          h = this.quill.getFormat(t.index, 1);
                        (r = c.default.attributes.diff(f, h) || {}),
                          (i = u.length());
                      }
                    }
                    this.quill.deleteText(t.index, n, p.default.sources.USER),
                      Object.keys(r).length > 0 &&
                        this.quill.formatLine(
                          t.index + i - 1,
                          n,
                          r,
                          p.default.sources.USER
                        );
                  }
                }
                function O(t) {
                  var e = this.quill.getLines(t),
                    n = {};
                  if (e.length > 1) {
                    var r = e[0].formats(),
                      o = e[e.length - 1].formats();
                    n = c.default.attributes.diff(o, r) || {};
                  }
                  this.quill.deleteText(t, p.default.sources.USER),
                    Object.keys(n).length > 0 &&
                      this.quill.formatLine(
                        t.index,
                        1,
                        n,
                        p.default.sources.USER
                      ),
                    this.quill.setSelection(t.index, p.default.sources.SILENT),
                    this.quill.focus();
                }
                function E(t, e) {
                  var n = this;
                  t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
                  var r = Object.keys(e.format).reduce(function(t, n) {
                    return (
                      f.default.query(n, f.default.Scope.BLOCK) &&
                        !Array.isArray(e.format[n]) &&
                        (t[n] = e.format[n]),
                      t
                    );
                  }, {});
                  this.quill.insertText(
                    t.index,
                    "\n",
                    r,
                    p.default.sources.USER
                  ),
                    this.quill.setSelection(
                      t.index + 1,
                      p.default.sources.SILENT
                    ),
                    this.quill.focus(),
                    Object.keys(e.format).forEach(function(t) {
                      null == r[t] &&
                        (Array.isArray(e.format[t]) ||
                          ("link" !== t &&
                            n.quill.format(
                              t,
                              e.format[t],
                              p.default.sources.USER
                            )));
                    });
                }
                function k(t) {
                  return {
                    key: m.keys.TAB,
                    shiftKey: !t,
                    format: { "code-block": !0 },
                    handler: function(e) {
                      var n = f.default.query("code-block"),
                        r = e.index,
                        i = e.length,
                        a = this.quill.scroll.descendant(n, r),
                        l = o(a, 2),
                        s = l[0],
                        u = l[1];
                      if (null != s) {
                        var c = this.quill.getIndex(s),
                          h = s.newlineIndex(u, !0) + 1,
                          d = s.newlineIndex(c + u + i),
                          y = s.domNode.textContent.slice(h, d).split("\n");
                        (u = 0),
                          y.forEach(function(e, o) {
                            t
                              ? (s.insertAt(h + u, n.TAB),
                                (u += n.TAB.length),
                                0 === o
                                  ? (r += n.TAB.length)
                                  : (i += n.TAB.length))
                              : e.startsWith(n.TAB) &&
                                (s.deleteAt(h + u, n.TAB.length),
                                (u -= n.TAB.length),
                                0 === o
                                  ? (r -= n.TAB.length)
                                  : (i -= n.TAB.length)),
                              (u += e.length + 1);
                          }),
                          this.quill.update(p.default.sources.USER),
                          this.quill.setSelection(
                            r,
                            i,
                            p.default.sources.SILENT
                          );
                      }
                    }
                  };
                }
                function A(t) {
                  return {
                    key: t[0].toUpperCase(),
                    shortKey: !0,
                    handler: function(e, n) {
                      this.quill.format(
                        t,
                        !n.format[t],
                        p.default.sources.USER
                      );
                    }
                  };
                }
                function N(t) {
                  if ("string" === typeof t || "number" === typeof t)
                    return N({ key: t });
                  if (
                    ("object" ===
                      ("undefined" === typeof t ? "undefined" : r(t)) &&
                      (t = (0, a.default)(t, !1)),
                    "string" === typeof t.key)
                  )
                    if (null != m.keys[t.key.toUpperCase()])
                      t.key = m.keys[t.key.toUpperCase()];
                    else {
                      if (1 !== t.key.length) return null;
                      t.key = t.key.toUpperCase().charCodeAt(0);
                    }
                  return (
                    t.shortKey && ((t[g] = t.shortKey), delete t.shortKey), t
                  );
                }
                (m.keys = {
                  BACKSPACE: 8,
                  TAB: 9,
                  ENTER: 13,
                  ESCAPE: 27,
                  LEFT: 37,
                  UP: 38,
                  RIGHT: 39,
                  DOWN: 40,
                  DELETE: 46
                }),
                  (m.DEFAULTS = {
                    bindings: {
                      bold: A("bold"),
                      italic: A("italic"),
                      underline: A("underline"),
                      indent: {
                        key: m.keys.TAB,
                        format: ["blockquote", "indent", "list"],
                        handler: function(t, e) {
                          if (e.collapsed && 0 !== e.offset) return !0;
                          this.quill.format(
                            "indent",
                            "+1",
                            p.default.sources.USER
                          );
                        }
                      },
                      outdent: {
                        key: m.keys.TAB,
                        shiftKey: !0,
                        format: ["blockquote", "indent", "list"],
                        handler: function(t, e) {
                          if (e.collapsed && 0 !== e.offset) return !0;
                          this.quill.format(
                            "indent",
                            "-1",
                            p.default.sources.USER
                          );
                        }
                      },
                      "outdent backspace": {
                        key: m.keys.BACKSPACE,
                        collapsed: !0,
                        shiftKey: null,
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null,
                        format: ["indent", "list"],
                        offset: 0,
                        handler: function(t, e) {
                          null != e.format.indent
                            ? this.quill.format(
                                "indent",
                                "-1",
                                p.default.sources.USER
                              )
                            : null != e.format.list &&
                              this.quill.format(
                                "list",
                                !1,
                                p.default.sources.USER
                              );
                        }
                      },
                      "indent code-block": k(!0),
                      "outdent code-block": k(!1),
                      "remove tab": {
                        key: m.keys.TAB,
                        shiftKey: !0,
                        collapsed: !0,
                        prefix: /\t$/,
                        handler: function(t) {
                          this.quill.deleteText(
                            t.index - 1,
                            1,
                            p.default.sources.USER
                          );
                        }
                      },
                      tab: {
                        key: m.keys.TAB,
                        handler: function(t) {
                          this.quill.history.cutoff();
                          var e = new u.default()
                            .retain(t.index)
                            .delete(t.length)
                            .insert("\t");
                          this.quill.updateContents(e, p.default.sources.USER),
                            this.quill.history.cutoff(),
                            this.quill.setSelection(
                              t.index + 1,
                              p.default.sources.SILENT
                            );
                        }
                      },
                      "list empty enter": {
                        key: m.keys.ENTER,
                        collapsed: !0,
                        format: ["list"],
                        empty: !0,
                        handler: function(t, e) {
                          this.quill.format("list", !1, p.default.sources.USER),
                            e.format.indent &&
                              this.quill.format(
                                "indent",
                                !1,
                                p.default.sources.USER
                              );
                        }
                      },
                      "checklist enter": {
                        key: m.keys.ENTER,
                        collapsed: !0,
                        format: { list: "checked" },
                        handler: function(t) {
                          var e = this.quill.getLine(t.index),
                            n = o(e, 2),
                            r = n[0],
                            i = n[1],
                            a = (0, s.default)({}, r.formats(), {
                              list: "checked"
                            }),
                            l = new u.default()
                              .retain(t.index)
                              .insert("\n", a)
                              .retain(r.length() - i - 1)
                              .retain(1, { list: "unchecked" });
                          this.quill.updateContents(l, p.default.sources.USER),
                            this.quill.setSelection(
                              t.index + 1,
                              p.default.sources.SILENT
                            ),
                            this.quill.scrollIntoView();
                        }
                      },
                      "header enter": {
                        key: m.keys.ENTER,
                        collapsed: !0,
                        format: ["header"],
                        suffix: /^$/,
                        handler: function(t, e) {
                          var n = this.quill.getLine(t.index),
                            r = o(n, 2),
                            i = r[0],
                            a = r[1],
                            l = new u.default()
                              .retain(t.index)
                              .insert("\n", e.format)
                              .retain(i.length() - a - 1)
                              .retain(1, { header: null });
                          this.quill.updateContents(l, p.default.sources.USER),
                            this.quill.setSelection(
                              t.index + 1,
                              p.default.sources.SILENT
                            ),
                            this.quill.scrollIntoView();
                        }
                      },
                      "list autofill": {
                        key: " ",
                        collapsed: !0,
                        format: { list: !1 },
                        prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                        handler: function(t, e) {
                          var n = e.prefix.length,
                            r = this.quill.getLine(t.index),
                            i = o(r, 2),
                            a = i[0],
                            l = i[1];
                          if (l > n) return !0;
                          var s = void 0;
                          switch (e.prefix.trim()) {
                            case "[]":
                            case "[ ]":
                              s = "unchecked";
                              break;
                            case "[x]":
                              s = "checked";
                              break;
                            case "-":
                            case "*":
                              s = "bullet";
                              break;
                            default:
                              s = "ordered";
                          }
                          this.quill.insertText(
                            t.index,
                            " ",
                            p.default.sources.USER
                          ),
                            this.quill.history.cutoff();
                          var c = new u.default()
                            .retain(t.index - l)
                            .delete(n + 1)
                            .retain(a.length() - 2 - l)
                            .retain(1, { list: s });
                          this.quill.updateContents(c, p.default.sources.USER),
                            this.quill.history.cutoff(),
                            this.quill.setSelection(
                              t.index - n,
                              p.default.sources.SILENT
                            );
                        }
                      },
                      "code exit": {
                        key: m.keys.ENTER,
                        collapsed: !0,
                        format: ["code-block"],
                        prefix: /\n\n$/,
                        suffix: /^\s+$/,
                        handler: function(t) {
                          var e = this.quill.getLine(t.index),
                            n = o(e, 2),
                            r = n[0],
                            i = n[1],
                            a = new u.default()
                              .retain(t.index + r.length() - i - 2)
                              .retain(1, { "code-block": null })
                              .delete(1);
                          this.quill.updateContents(a, p.default.sources.USER);
                        }
                      },
                      "embed left": _(m.keys.LEFT, !1),
                      "embed left shift": _(m.keys.LEFT, !0),
                      "embed right": _(m.keys.RIGHT, !1),
                      "embed right shift": _(m.keys.RIGHT, !0)
                    }
                  }),
                  (e.default = m),
                  (e.SHORTKEY = g);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = s(n(0)),
                  l = s(n(7));
                function s(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var u = (function(t) {
                  function e(t, n) {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r = (function(t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" !== typeof e && "function" !== typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (
                      (r.selection = n),
                      (r.textNode = document.createTextNode(e.CONTENTS)),
                      r.domNode.appendChild(r.textNode),
                      (r._length = 0),
                      r
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, a.default.Embed),
                    i(e, null, [{ key: "value", value: function() {} }]),
                    i(e, [
                      {
                        key: "detach",
                        value: function() {
                          null != this.parent && this.parent.removeChild(this);
                        }
                      },
                      {
                        key: "format",
                        value: function(t, n) {
                          if (0 !== this._length)
                            return o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "format",
                              this
                            ).call(this, t, n);
                          for (
                            var r = this, i = 0;
                            null != r &&
                            r.statics.scope !== a.default.Scope.BLOCK_BLOT;

                          )
                            (i += r.offset(r.parent)), (r = r.parent);
                          null != r &&
                            ((this._length = e.CONTENTS.length),
                            r.optimize(),
                            r.formatAt(i, e.CONTENTS.length, t, n),
                            (this._length = 0));
                        }
                      },
                      {
                        key: "index",
                        value: function(t, n) {
                          return t === this.textNode
                            ? 0
                            : o(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "index",
                                this
                              ).call(this, t, n);
                        }
                      },
                      {
                        key: "length",
                        value: function() {
                          return this._length;
                        }
                      },
                      {
                        key: "position",
                        value: function() {
                          return [this.textNode, this.textNode.data.length];
                        }
                      },
                      {
                        key: "remove",
                        value: function() {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "remove",
                            this
                          ).call(this),
                            (this.parent = null);
                        }
                      },
                      {
                        key: "restore",
                        value: function() {
                          if (
                            !this.selection.composing &&
                            null != this.parent
                          ) {
                            var t = this.textNode,
                              n = this.selection.getNativeRange(),
                              o = void 0,
                              i = void 0,
                              s = void 0;
                            if (
                              null != n &&
                              n.start.node === t &&
                              n.end.node === t
                            ) {
                              var u = [t, n.start.offset, n.end.offset];
                              (o = u[0]), (i = u[1]), (s = u[2]);
                            }
                            for (
                              ;
                              null != this.domNode.lastChild &&
                              this.domNode.lastChild !== this.textNode;

                            )
                              this.domNode.parentNode.insertBefore(
                                this.domNode.lastChild,
                                this.domNode
                              );
                            if (this.textNode.data !== e.CONTENTS) {
                              var c = this.textNode.data
                                .split(e.CONTENTS)
                                .join("");
                              this.next instanceof l.default
                                ? ((o = this.next.domNode),
                                  this.next.insertAt(0, c),
                                  (this.textNode.data = e.CONTENTS))
                                : ((this.textNode.data = c),
                                  this.parent.insertBefore(
                                    a.default.create(this.textNode),
                                    this
                                  ),
                                  (this.textNode = document.createTextNode(
                                    e.CONTENTS
                                  )),
                                  this.domNode.appendChild(this.textNode));
                            }
                            if ((this.remove(), null != i)) {
                              var f = [i, s].map(function(t) {
                                  return Math.max(
                                    0,
                                    Math.min(o.data.length, t - 1)
                                  );
                                }),
                                p = r(f, 2);
                              return (
                                (i = p[0]),
                                (s = p[1]),
                                {
                                  startNode: o,
                                  startOffset: i,
                                  endNode: o,
                                  endOffset: s
                                }
                              );
                            }
                          }
                        }
                      },
                      {
                        key: "update",
                        value: function(t, e) {
                          var n = this;
                          if (
                            t.some(function(t) {
                              return (
                                "characterData" === t.type &&
                                t.target === n.textNode
                              );
                            })
                          ) {
                            var r = this.restore();
                            r && (e.range = r);
                          }
                        }
                      },
                      {
                        key: "value",
                        value: function() {
                          return "";
                        }
                      }
                    ]),
                    e
                  );
                })();
                (u.blotName = "cursor"),
                  (u.className = "ql-cursor"),
                  (u.tagName = "span"),
                  (u.CONTENTS = "\ufeff"),
                  (e.default = u);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = a(n(0)),
                  o = n(4),
                  i = a(o);
                function a(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var l = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, r.default.Container),
                    e
                  );
                })();
                (l.allowedChildren = [i.default, o.BlockEmbed, l]),
                  (e.default = l);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0);
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(0),
                  a = (r = i) && r.__esModule ? r : { default: r };
                var l = (function(t) {
                    function e() {
                      return (
                        (function(t, e) {
                          if (!(t instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, e),
                        (function(t, e) {
                          if (!t)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return !e ||
                            ("object" !== typeof e && "function" !== typeof e)
                            ? t
                            : e;
                        })(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).apply(
                            this,
                            arguments
                          )
                        )
                      );
                    }
                    return (
                      (function(t, e) {
                        if ("function" !== typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, a.default.Attributor.Style),
                      o(e, [
                        {
                          key: "value",
                          value: function(t) {
                            var n = (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "value",
                              this
                            ).call(this, t);
                            return n.startsWith("rgb(")
                              ? ((n = n
                                  .replace(/^[^\d]+/, "")
                                  .replace(/[^\d]+$/, "")),
                                "#" +
                                  n
                                    .split(",")
                                    .map(function(t) {
                                      return (
                                        "00" + parseInt(t).toString(16)
                                      ).slice(-2);
                                    })
                                    .join(""))
                              : n;
                          }
                        }
                      ]),
                      e
                    );
                  })(),
                  s = new a.default.Attributor.Class("color", "ql-color", {
                    scope: a.default.Scope.INLINE
                  }),
                  u = new l("color", "color", {
                    scope: a.default.Scope.INLINE
                  });
                (e.ColorAttributor = l), (e.ColorClass = s), (e.ColorStyle = u);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.sanitize = e.default = void 0);
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(6),
                  l = (r = a) && r.__esModule ? r : { default: r };
                var s = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, l.default),
                    o(
                      e,
                      [
                        {
                          key: "format",
                          value: function(t, n) {
                            if (t !== this.statics.blotName || !n)
                              return i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "format",
                                this
                              ).call(this, t, n);
                            (n = this.constructor.sanitize(n)),
                              this.domNode.setAttribute("href", n);
                          }
                        }
                      ],
                      [
                        {
                          key: "create",
                          value: function(t) {
                            var n = i(
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this, t);
                            return (
                              (t = this.sanitize(t)),
                              n.setAttribute("href", t),
                              n.setAttribute("target", "_blank"),
                              n
                            );
                          }
                        },
                        {
                          key: "formats",
                          value: function(t) {
                            return t.getAttribute("href");
                          }
                        },
                        {
                          key: "sanitize",
                          value: function(t) {
                            return u(t, this.PROTOCOL_WHITELIST)
                              ? t
                              : this.SANITIZED_URL;
                          }
                        }
                      ]
                    ),
                    e
                  );
                })();
                function u(t, e) {
                  var n = document.createElement("a");
                  n.href = t;
                  var r = n.href.slice(0, n.href.indexOf(":"));
                  return e.indexOf(r) > -1;
                }
                (s.blotName = "link"),
                  (s.tagName = "A"),
                  (s.SANITIZED_URL = "about:blank"),
                  (s.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"]),
                  (e.default = s),
                  (e.sanitize = u);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r =
                    "function" === typeof Symbol &&
                    "symbol" === typeof Symbol.iterator
                      ? function(t) {
                          return typeof t;
                        }
                      : function(t) {
                          return t &&
                            "function" === typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = l(n(23)),
                  a = l(n(107));
                function l(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var s = 0;
                function u(t, e) {
                  t.setAttribute(e, !("true" === t.getAttribute(e)));
                }
                var c = (function() {
                  function t(e) {
                    var n = this;
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this.select = e),
                      (this.container = document.createElement("span")),
                      this.buildPicker(),
                      (this.select.style.display = "none"),
                      this.select.parentNode.insertBefore(
                        this.container,
                        this.select
                      ),
                      this.label.addEventListener("mousedown", function() {
                        n.togglePicker();
                      }),
                      this.label.addEventListener("keydown", function(t) {
                        switch (t.keyCode) {
                          case i.default.keys.ENTER:
                            n.togglePicker();
                            break;
                          case i.default.keys.ESCAPE:
                            n.escape(), t.preventDefault();
                        }
                      }),
                      this.select.addEventListener(
                        "change",
                        this.update.bind(this)
                      );
                  }
                  return (
                    o(t, [
                      {
                        key: "togglePicker",
                        value: function() {
                          this.container.classList.toggle("ql-expanded"),
                            u(this.label, "aria-expanded"),
                            u(this.options, "aria-hidden");
                        }
                      },
                      {
                        key: "buildItem",
                        value: function(t) {
                          var e = this,
                            n = document.createElement("span");
                          return (
                            (n.tabIndex = "0"),
                            n.setAttribute("role", "button"),
                            n.classList.add("ql-picker-item"),
                            t.hasAttribute("value") &&
                              n.setAttribute(
                                "data-value",
                                t.getAttribute("value")
                              ),
                            t.textContent &&
                              n.setAttribute("data-label", t.textContent),
                            n.addEventListener("click", function() {
                              e.selectItem(n, !0);
                            }),
                            n.addEventListener("keydown", function(t) {
                              switch (t.keyCode) {
                                case i.default.keys.ENTER:
                                  e.selectItem(n, !0), t.preventDefault();
                                  break;
                                case i.default.keys.ESCAPE:
                                  e.escape(), t.preventDefault();
                              }
                            }),
                            n
                          );
                        }
                      },
                      {
                        key: "buildLabel",
                        value: function() {
                          var t = document.createElement("span");
                          return (
                            t.classList.add("ql-picker-label"),
                            (t.innerHTML = a.default),
                            (t.tabIndex = "0"),
                            t.setAttribute("role", "button"),
                            t.setAttribute("aria-expanded", "false"),
                            this.container.appendChild(t),
                            t
                          );
                        }
                      },
                      {
                        key: "buildOptions",
                        value: function() {
                          var t = this,
                            e = document.createElement("span");
                          e.classList.add("ql-picker-options"),
                            e.setAttribute("aria-hidden", "true"),
                            (e.tabIndex = "-1"),
                            (e.id = "ql-picker-options-" + s),
                            (s += 1),
                            this.label.setAttribute("aria-controls", e.id),
                            (this.options = e),
                            [].slice
                              .call(this.select.options)
                              .forEach(function(n) {
                                var r = t.buildItem(n);
                                e.appendChild(r),
                                  !0 === n.selected && t.selectItem(r);
                              }),
                            this.container.appendChild(e);
                        }
                      },
                      {
                        key: "buildPicker",
                        value: function() {
                          var t = this;
                          [].slice
                            .call(this.select.attributes)
                            .forEach(function(e) {
                              t.container.setAttribute(e.name, e.value);
                            }),
                            this.container.classList.add("ql-picker"),
                            (this.label = this.buildLabel()),
                            this.buildOptions();
                        }
                      },
                      {
                        key: "escape",
                        value: function() {
                          var t = this;
                          this.close(),
                            setTimeout(function() {
                              return t.label.focus();
                            }, 1);
                        }
                      },
                      {
                        key: "close",
                        value: function() {
                          this.container.classList.remove("ql-expanded"),
                            this.label.setAttribute("aria-expanded", "false"),
                            this.options.setAttribute("aria-hidden", "true");
                        }
                      },
                      {
                        key: "selectItem",
                        value: function(t) {
                          var e =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            n = this.container.querySelector(".ql-selected");
                          if (
                            t !== n &&
                            (null != n && n.classList.remove("ql-selected"),
                            null != t &&
                              (t.classList.add("ql-selected"),
                              (this.select.selectedIndex = [].indexOf.call(
                                t.parentNode.children,
                                t
                              )),
                              t.hasAttribute("data-value")
                                ? this.label.setAttribute(
                                    "data-value",
                                    t.getAttribute("data-value")
                                  )
                                : this.label.removeAttribute("data-value"),
                              t.hasAttribute("data-label")
                                ? this.label.setAttribute(
                                    "data-label",
                                    t.getAttribute("data-label")
                                  )
                                : this.label.removeAttribute("data-label"),
                              e))
                          ) {
                            if ("function" === typeof Event)
                              this.select.dispatchEvent(new Event("change"));
                            else if (
                              "object" ===
                              ("undefined" === typeof Event
                                ? "undefined"
                                : r(Event))
                            ) {
                              var o = document.createEvent("Event");
                              o.initEvent("change", !0, !0),
                                this.select.dispatchEvent(o);
                            }
                            this.close();
                          }
                        }
                      },
                      {
                        key: "update",
                        value: function() {
                          var t = void 0;
                          if (this.select.selectedIndex > -1) {
                            var e = this.container.querySelector(
                              ".ql-picker-options"
                            ).children[this.select.selectedIndex];
                            (t = this.select.options[
                              this.select.selectedIndex
                            ]),
                              this.selectItem(e);
                          } else this.selectItem(null);
                          var n =
                            null != t &&
                            t !== this.select.querySelector("option[selected]");
                          this.label.classList.toggle("ql-active", n);
                        }
                      }
                    ]),
                    t
                  );
                })();
                e.default = c;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = b(n(0)),
                  o = b(n(5)),
                  i = n(4),
                  a = b(i),
                  l = b(n(16)),
                  s = b(n(25)),
                  u = b(n(24)),
                  c = b(n(35)),
                  f = b(n(6)),
                  p = b(n(22)),
                  h = b(n(7)),
                  d = b(n(55)),
                  y = b(n(42)),
                  v = b(n(23));
                function b(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                o.default.register({
                  "blots/block": a.default,
                  "blots/block/embed": i.BlockEmbed,
                  "blots/break": l.default,
                  "blots/container": s.default,
                  "blots/cursor": u.default,
                  "blots/embed": c.default,
                  "blots/inline": f.default,
                  "blots/scroll": p.default,
                  "blots/text": h.default,
                  "modules/clipboard": d.default,
                  "modules/history": y.default,
                  "modules/keyboard": v.default
                }),
                  r.default.register(
                    a.default,
                    l.default,
                    u.default,
                    f.default,
                    p.default,
                    h.default
                  ),
                  (e.default = o.default);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = n(1),
                  o = (function() {
                    function t(t) {
                      (this.domNode = t),
                        (this.domNode[r.DATA_KEY] = { blot: this });
                    }
                    return (
                      Object.defineProperty(t.prototype, "statics", {
                        get: function() {
                          return this.constructor;
                        },
                        enumerable: !0,
                        configurable: !0
                      }),
                      (t.create = function(t) {
                        if (null == this.tagName)
                          throw new r.ParchmentError(
                            "Blot definition missing tagName"
                          );
                        var e;
                        return (
                          Array.isArray(this.tagName)
                            ? ("string" === typeof t &&
                                ((t = t.toUpperCase()),
                                parseInt(t).toString() === t &&
                                  (t = parseInt(t))),
                              (e =
                                "number" === typeof t
                                  ? document.createElement(this.tagName[t - 1])
                                  : this.tagName.indexOf(t) > -1
                                  ? document.createElement(t)
                                  : document.createElement(this.tagName[0])))
                            : (e = document.createElement(this.tagName)),
                          this.className && e.classList.add(this.className),
                          e
                        );
                      }),
                      (t.prototype.attach = function() {
                        null != this.parent &&
                          (this.scroll = this.parent.scroll);
                      }),
                      (t.prototype.clone = function() {
                        var t = this.domNode.cloneNode(!1);
                        return r.create(t);
                      }),
                      (t.prototype.detach = function() {
                        null != this.parent && this.parent.removeChild(this),
                          delete this.domNode[r.DATA_KEY];
                      }),
                      (t.prototype.deleteAt = function(t, e) {
                        this.isolate(t, e).remove();
                      }),
                      (t.prototype.formatAt = function(t, e, n, o) {
                        var i = this.isolate(t, e);
                        if (null != r.query(n, r.Scope.BLOT) && o) i.wrap(n, o);
                        else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
                          var a = r.create(this.statics.scope);
                          i.wrap(a), a.format(n, o);
                        }
                      }),
                      (t.prototype.insertAt = function(t, e, n) {
                        var o =
                            null == n ? r.create("text", e) : r.create(e, n),
                          i = this.split(t);
                        this.parent.insertBefore(o, i);
                      }),
                      (t.prototype.insertInto = function(t, e) {
                        void 0 === e && (e = null),
                          null != this.parent &&
                            this.parent.children.remove(this);
                        var n = null;
                        t.children.insertBefore(this, e),
                          null != e && (n = e.domNode),
                          (this.domNode.parentNode == t.domNode &&
                            this.domNode.nextSibling == n) ||
                            t.domNode.insertBefore(this.domNode, n),
                          (this.parent = t),
                          this.attach();
                      }),
                      (t.prototype.isolate = function(t, e) {
                        var n = this.split(t);
                        return n.split(e), n;
                      }),
                      (t.prototype.length = function() {
                        return 1;
                      }),
                      (t.prototype.offset = function(t) {
                        return (
                          void 0 === t && (t = this.parent),
                          null == this.parent || this == t
                            ? 0
                            : this.parent.children.offset(this) +
                              this.parent.offset(t)
                        );
                      }),
                      (t.prototype.optimize = function(t) {
                        null != this.domNode[r.DATA_KEY] &&
                          delete this.domNode[r.DATA_KEY].mutations;
                      }),
                      (t.prototype.remove = function() {
                        null != this.domNode.parentNode &&
                          this.domNode.parentNode.removeChild(this.domNode),
                          this.detach();
                      }),
                      (t.prototype.replace = function(t) {
                        null != t.parent &&
                          (t.parent.insertBefore(this, t.next), t.remove());
                      }),
                      (t.prototype.replaceWith = function(t, e) {
                        var n = "string" === typeof t ? r.create(t, e) : t;
                        return n.replace(this), n;
                      }),
                      (t.prototype.split = function(t, e) {
                        return 0 === t ? this : this.next;
                      }),
                      (t.prototype.update = function(t, e) {}),
                      (t.prototype.wrap = function(t, e) {
                        var n = "string" === typeof t ? r.create(t, e) : t;
                        return (
                          null != this.parent &&
                            this.parent.insertBefore(n, this.next),
                          n.appendChild(this),
                          n
                        );
                      }),
                      (t.blotName = "abstract"),
                      t
                    );
                  })();
                e.default = o;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = n(12),
                  o = n(32),
                  i = n(33),
                  a = n(1),
                  l = (function() {
                    function t(t) {
                      (this.attributes = {}), (this.domNode = t), this.build();
                    }
                    return (
                      (t.prototype.attribute = function(t, e) {
                        e
                          ? t.add(this.domNode, e) &&
                            (null != t.value(this.domNode)
                              ? (this.attributes[t.attrName] = t)
                              : delete this.attributes[t.attrName])
                          : (t.remove(this.domNode),
                            delete this.attributes[t.attrName]);
                      }),
                      (t.prototype.build = function() {
                        var t = this;
                        this.attributes = {};
                        var e = r.default.keys(this.domNode),
                          n = o.default.keys(this.domNode),
                          l = i.default.keys(this.domNode);
                        e.concat(n)
                          .concat(l)
                          .forEach(function(e) {
                            var n = a.query(e, a.Scope.ATTRIBUTE);
                            n instanceof r.default &&
                              (t.attributes[n.attrName] = n);
                          });
                      }),
                      (t.prototype.copy = function(t) {
                        var e = this;
                        Object.keys(this.attributes).forEach(function(n) {
                          var r = e.attributes[n].value(e.domNode);
                          t.format(n, r);
                        });
                      }),
                      (t.prototype.move = function(t) {
                        var e = this;
                        this.copy(t),
                          Object.keys(this.attributes).forEach(function(t) {
                            e.attributes[t].remove(e.domNode);
                          }),
                          (this.attributes = {});
                      }),
                      (t.prototype.values = function() {
                        var t = this;
                        return Object.keys(this.attributes).reduce(function(
                          e,
                          n
                        ) {
                          return (e[n] = t.attributes[n].value(t.domNode)), e;
                        },
                        {});
                      }),
                      t
                    );
                  })();
                e.default = l;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                function o(t, e) {
                  return (t.getAttribute("class") || "")
                    .split(/\s+/)
                    .filter(function(t) {
                      return 0 === t.indexOf(e + "-");
                    });
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = (function(t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    r(e, t),
                    (e.keys = function(t) {
                      return (t.getAttribute("class") || "")
                        .split(/\s+/)
                        .map(function(t) {
                          return t
                            .split("-")
                            .slice(0, -1)
                            .join("-");
                        });
                    }),
                    (e.prototype.add = function(t, e) {
                      return (
                        !!this.canAdd(t, e) &&
                        (this.remove(t),
                        t.classList.add(this.keyName + "-" + e),
                        !0)
                      );
                    }),
                    (e.prototype.remove = function(t) {
                      o(t, this.keyName).forEach(function(e) {
                        t.classList.remove(e);
                      }),
                        0 === t.classList.length && t.removeAttribute("class");
                    }),
                    (e.prototype.value = function(t) {
                      var e = (o(t, this.keyName)[0] || "").slice(
                        this.keyName.length + 1
                      );
                      return this.canAdd(t, e) ? e : "";
                    }),
                    e
                  );
                })(n(12).default);
                e.default = i;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                function o(t) {
                  var e = t.split("-"),
                    n = e
                      .slice(1)
                      .map(function(t) {
                        return t[0].toUpperCase() + t.slice(1);
                      })
                      .join("");
                  return e[0] + n;
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = (function(t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    r(e, t),
                    (e.keys = function(t) {
                      return (t.getAttribute("style") || "")
                        .split(";")
                        .map(function(t) {
                          return t.split(":")[0].trim();
                        });
                    }),
                    (e.prototype.add = function(t, e) {
                      return (
                        !!this.canAdd(t, e) &&
                        ((t.style[o(this.keyName)] = e), !0)
                      );
                    }),
                    (e.prototype.remove = function(t) {
                      (t.style[o(this.keyName)] = ""),
                        t.getAttribute("style") || t.removeAttribute("style");
                    }),
                    (e.prototype.value = function(t) {
                      var e = t.style[o(this.keyName)];
                      return this.canAdd(t, e) ? e : "";
                    }),
                    e
                  );
                })(n(12).default);
                e.default = i;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r);
                    }
                  }
                  return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e;
                  };
                })();
                var o = (function() {
                  function t(e, n) {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this.quill = e),
                      (this.options = n),
                      (this.modules = {});
                  }
                  return (
                    r(t, [
                      {
                        key: "init",
                        value: function() {
                          var t = this;
                          Object.keys(this.options.modules).forEach(function(
                            e
                          ) {
                            null == t.modules[e] && t.addModule(e);
                          });
                        }
                      },
                      {
                        key: "addModule",
                        value: function(t) {
                          var e = this.quill.constructor.import("modules/" + t);
                          return (
                            (this.modules[t] = new e(
                              this.quill,
                              this.options.modules[t] || {}
                            )),
                            this.modules[t]
                          );
                        }
                      }
                    ]),
                    t
                  );
                })();
                (o.DEFAULTS = { modules: {} }),
                  (o.themes = { default: o }),
                  (e.default = o);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = a(n(0)),
                  i = a(n(7));
                function a(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var l = "\ufeff",
                  s = (function(t) {
                    function e(t) {
                      !(function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var n = (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                      );
                      return (
                        (n.contentNode = document.createElement("span")),
                        n.contentNode.setAttribute("contenteditable", !1),
                        [].slice
                          .call(n.domNode.childNodes)
                          .forEach(function(t) {
                            n.contentNode.appendChild(t);
                          }),
                        (n.leftGuard = document.createTextNode(l)),
                        (n.rightGuard = document.createTextNode(l)),
                        n.domNode.appendChild(n.leftGuard),
                        n.domNode.appendChild(n.contentNode),
                        n.domNode.appendChild(n.rightGuard),
                        n
                      );
                    }
                    return (
                      (function(t, e) {
                        if ("function" !== typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, o.default.Embed),
                      r(e, [
                        {
                          key: "index",
                          value: function(t, n) {
                            return t === this.leftGuard
                              ? 0
                              : t === this.rightGuard
                              ? 1
                              : (function t(e, n, r) {
                                  null === e && (e = Function.prototype);
                                  var o = Object.getOwnPropertyDescriptor(e, n);
                                  if (void 0 === o) {
                                    var i = Object.getPrototypeOf(e);
                                    return null === i ? void 0 : t(i, n, r);
                                  }
                                  if ("value" in o) return o.value;
                                  var a = o.get;
                                  return void 0 !== a ? a.call(r) : void 0;
                                })(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "index",
                                  this
                                ).call(this, t, n);
                          }
                        },
                        {
                          key: "restore",
                          value: function(t) {
                            var e = void 0,
                              n = void 0,
                              r = t.data.split(l).join("");
                            if (t === this.leftGuard)
                              if (this.prev instanceof i.default) {
                                var a = this.prev.length();
                                this.prev.insertAt(a, r),
                                  (e = {
                                    startNode: this.prev.domNode,
                                    startOffset: a + r.length
                                  });
                              } else
                                (n = document.createTextNode(r)),
                                  this.parent.insertBefore(
                                    o.default.create(n),
                                    this
                                  ),
                                  (e = { startNode: n, startOffset: r.length });
                            else
                              t === this.rightGuard &&
                                (this.next instanceof i.default
                                  ? (this.next.insertAt(0, r),
                                    (e = {
                                      startNode: this.next.domNode,
                                      startOffset: r.length
                                    }))
                                  : ((n = document.createTextNode(r)),
                                    this.parent.insertBefore(
                                      o.default.create(n),
                                      this.next
                                    ),
                                    (e = {
                                      startNode: n,
                                      startOffset: r.length
                                    })));
                            return (t.data = l), e;
                          }
                        },
                        {
                          key: "update",
                          value: function(t, e) {
                            var n = this;
                            t.forEach(function(t) {
                              if (
                                "characterData" === t.type &&
                                (t.target === n.leftGuard ||
                                  t.target === n.rightGuard)
                              ) {
                                var r = n.restore(t.target);
                                r && (e.range = r);
                              }
                            });
                          }
                        }
                      ]),
                      e
                    );
                  })();
                e.default = s;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0);
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r };
                var a = {
                    scope: i.default.Scope.BLOCK,
                    whitelist: ["right", "center", "justify"]
                  },
                  l = new i.default.Attributor.Attribute("align", "align", a),
                  s = new i.default.Attributor.Class("align", "ql-align", a),
                  u = new i.default.Attributor.Style("align", "text-align", a);
                (e.AlignAttribute = l), (e.AlignClass = s), (e.AlignStyle = u);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.BackgroundStyle = e.BackgroundClass = void 0);
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r },
                  a = n(26);
                var l = new i.default.Attributor.Class("background", "ql-bg", {
                    scope: i.default.Scope.INLINE
                  }),
                  s = new a.ColorAttributor("background", "background-color", {
                    scope: i.default.Scope.INLINE
                  });
                (e.BackgroundClass = l), (e.BackgroundStyle = s);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0);
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r };
                var a = { scope: i.default.Scope.BLOCK, whitelist: ["rtl"] },
                  l = new i.default.Attributor.Attribute("direction", "dir", a),
                  s = new i.default.Attributor.Class(
                    "direction",
                    "ql-direction",
                    a
                  ),
                  u = new i.default.Attributor.Style(
                    "direction",
                    "direction",
                    a
                  );
                (e.DirectionAttribute = l),
                  (e.DirectionClass = s),
                  (e.DirectionStyle = u);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.FontClass = e.FontStyle = void 0);
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(0),
                  a = (r = i) && r.__esModule ? r : { default: r };
                var l = {
                    scope: a.default.Scope.INLINE,
                    whitelist: ["serif", "monospace"]
                  },
                  s = new a.default.Attributor.Class("font", "ql-font", l),
                  u = new ((function(t) {
                    function e() {
                      return (
                        (function(t, e) {
                          if (!(t instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, e),
                        (function(t, e) {
                          if (!t)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return !e ||
                            ("object" !== typeof e && "function" !== typeof e)
                            ? t
                            : e;
                        })(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).apply(
                            this,
                            arguments
                          )
                        )
                      );
                    }
                    return (
                      (function(t, e) {
                        if ("function" !== typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, a.default.Attributor.Style),
                      o(e, [
                        {
                          key: "value",
                          value: function(t) {
                            return (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "value",
                              this
                            )
                              .call(this, t)
                              .replace(/["']/g, "");
                          }
                        }
                      ]),
                      e
                    );
                  })())("font", "font-family", l);
                (e.FontStyle = u), (e.FontClass = s);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.SizeStyle = e.SizeClass = void 0);
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r };
                var a = new i.default.Attributor.Class("size", "ql-size", {
                    scope: i.default.Scope.INLINE,
                    whitelist: ["small", "large", "huge"]
                  }),
                  l = new i.default.Attributor.Style("size", "font-size", {
                    scope: i.default.Scope.INLINE,
                    whitelist: ["10px", "18px", "32px"]
                  });
                (e.SizeClass = a), (e.SizeStyle = l);
              },
              function(t, e, n) {
                "use strict";
                t.exports = {
                  align: {
                    "": n(76),
                    center: n(77),
                    right: n(78),
                    justify: n(79)
                  },
                  background: n(80),
                  blockquote: n(81),
                  bold: n(82),
                  clean: n(83),
                  code: n(58),
                  "code-block": n(58),
                  color: n(84),
                  direction: { "": n(85), rtl: n(86) },
                  float: {
                    center: n(87),
                    full: n(88),
                    left: n(89),
                    right: n(90)
                  },
                  formula: n(91),
                  header: { 1: n(92), 2: n(93) },
                  italic: n(94),
                  image: n(95),
                  indent: { "+1": n(96), "-1": n(97) },
                  link: n(98),
                  list: { ordered: n(99), bullet: n(100), check: n(101) },
                  script: { sub: n(102), super: n(103) },
                  strike: n(104),
                  underline: n(105),
                  video: n(106)
                };
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.getLastChangeIndex = e.default = void 0);
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = l(n(0)),
                  i = l(n(5)),
                  a = l(n(9));
                function l(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var s = (function(t) {
                  function e(t, n) {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r = (function(t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" !== typeof e && "function" !== typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      (r.lastRecorded = 0),
                      (r.ignoreChange = !1),
                      r.clear(),
                      r.quill.on(i.default.events.EDITOR_CHANGE, function(
                        t,
                        e,
                        n,
                        o
                      ) {
                        t !== i.default.events.TEXT_CHANGE ||
                          r.ignoreChange ||
                          (r.options.userOnly && o !== i.default.sources.USER
                            ? r.transform(e)
                            : r.record(e, n));
                      }),
                      r.quill.keyboard.addBinding(
                        { key: "Z", shortKey: !0 },
                        r.undo.bind(r)
                      ),
                      r.quill.keyboard.addBinding(
                        { key: "Z", shortKey: !0, shiftKey: !0 },
                        r.redo.bind(r)
                      ),
                      /Win/i.test(navigator.platform) &&
                        r.quill.keyboard.addBinding(
                          { key: "Y", shortKey: !0 },
                          r.redo.bind(r)
                        ),
                      r
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, a.default),
                    r(e, [
                      {
                        key: "change",
                        value: function(t, e) {
                          if (0 !== this.stack[t].length) {
                            var n = this.stack[t].pop();
                            this.stack[e].push(n),
                              (this.lastRecorded = 0),
                              (this.ignoreChange = !0),
                              this.quill.updateContents(
                                n[t],
                                i.default.sources.USER
                              ),
                              (this.ignoreChange = !1);
                            var r = u(n[t]);
                            this.quill.setSelection(r);
                          }
                        }
                      },
                      {
                        key: "clear",
                        value: function() {
                          this.stack = { undo: [], redo: [] };
                        }
                      },
                      {
                        key: "cutoff",
                        value: function() {
                          this.lastRecorded = 0;
                        }
                      },
                      {
                        key: "record",
                        value: function(t, e) {
                          if (0 !== t.ops.length) {
                            this.stack.redo = [];
                            var n = this.quill.getContents().diff(e),
                              r = Date.now();
                            if (
                              this.lastRecorded + this.options.delay > r &&
                              this.stack.undo.length > 0
                            ) {
                              var o = this.stack.undo.pop();
                              (n = n.compose(o.undo)), (t = o.redo.compose(t));
                            } else this.lastRecorded = r;
                            this.stack.undo.push({ redo: t, undo: n }),
                              this.stack.undo.length > this.options.maxStack &&
                                this.stack.undo.shift();
                          }
                        }
                      },
                      {
                        key: "redo",
                        value: function() {
                          this.change("redo", "undo");
                        }
                      },
                      {
                        key: "transform",
                        value: function(t) {
                          this.stack.undo.forEach(function(e) {
                            (e.undo = t.transform(e.undo, !0)),
                              (e.redo = t.transform(e.redo, !0));
                          }),
                            this.stack.redo.forEach(function(e) {
                              (e.undo = t.transform(e.undo, !0)),
                                (e.redo = t.transform(e.redo, !0));
                            });
                        }
                      },
                      {
                        key: "undo",
                        value: function() {
                          this.change("undo", "redo");
                        }
                      }
                    ]),
                    e
                  );
                })();
                function u(t) {
                  var e = t.reduce(function(t, e) {
                      return (t += e.delete || 0);
                    }, 0),
                    n = t.length() - e;
                  return (
                    (function(t) {
                      var e = t.ops[t.ops.length - 1];
                      return (
                        null != e &&
                        (null != e.insert
                          ? "string" === typeof e.insert &&
                            e.insert.endsWith("\n")
                          : null != e.attributes &&
                            Object.keys(e.attributes).some(function(t) {
                              return (
                                null !=
                                o.default.query(t, o.default.Scope.BLOCK)
                              );
                            }))
                      );
                    })(t) && (n -= 1),
                    n
                  );
                }
                (s.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 }),
                  (e.default = s),
                  (e.getLastChangeIndex = u);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.BaseTooltip = void 0);
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = h(n(3)),
                  i = h(n(2)),
                  a = h(n(8)),
                  l = h(n(23)),
                  s = h(n(34)),
                  u = h(n(59)),
                  c = h(n(60)),
                  f = h(n(28)),
                  p = h(n(61));
                function h(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function d(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function y(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                function v(t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var b = [!1, "center", "right", "justify"],
                  g = [
                    "#000000",
                    "#e60000",
                    "#ff9900",
                    "#ffff00",
                    "#008a00",
                    "#0066cc",
                    "#9933ff",
                    "#ffffff",
                    "#facccc",
                    "#ffebcc",
                    "#ffffcc",
                    "#cce8cc",
                    "#cce0f5",
                    "#ebd6ff",
                    "#bbbbbb",
                    "#f06666",
                    "#ffc266",
                    "#ffff66",
                    "#66b966",
                    "#66a3e0",
                    "#c285ff",
                    "#888888",
                    "#a10000",
                    "#b26b00",
                    "#b2b200",
                    "#006100",
                    "#0047b2",
                    "#6b24b2",
                    "#444444",
                    "#5c0000",
                    "#663d00",
                    "#666600",
                    "#003700",
                    "#002966",
                    "#3d1466"
                  ],
                  m = [!1, "serif", "monospace"],
                  _ = ["1", "2", "3", !1],
                  w = ["small", !1, "large", "huge"],
                  x = (function(t) {
                    function e(t, n) {
                      d(this, e);
                      var r = y(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return (
                        t.emitter.listenDOM("click", document.body, function e(
                          n
                        ) {
                          if (!document.body.contains(t.root))
                            return document.body.removeEventListener(
                              "click",
                              e
                            );
                          null == r.tooltip ||
                            r.tooltip.root.contains(n.target) ||
                            document.activeElement === r.tooltip.textbox ||
                            r.quill.hasFocus() ||
                            r.tooltip.hide(),
                            null != r.pickers &&
                              r.pickers.forEach(function(t) {
                                t.container.contains(n.target) || t.close();
                              });
                        }),
                        r
                      );
                    }
                    return (
                      v(e, s.default),
                      r(e, [
                        {
                          key: "addModule",
                          value: function(t) {
                            var n = (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "addModule",
                              this
                            ).call(this, t);
                            return "toolbar" === t && this.extendToolbar(n), n;
                          }
                        },
                        {
                          key: "buildButtons",
                          value: function(t, e) {
                            t.forEach(function(t) {
                              (t.getAttribute("class") || "")
                                .split(/\s+/)
                                .forEach(function(n) {
                                  if (
                                    n.startsWith("ql-") &&
                                    ((n = n.slice("ql-".length)), null != e[n])
                                  )
                                    if ("direction" === n)
                                      t.innerHTML = e[n][""] + e[n].rtl;
                                    else if ("string" === typeof e[n])
                                      t.innerHTML = e[n];
                                    else {
                                      var r = t.value || "";
                                      null != r &&
                                        e[n][r] &&
                                        (t.innerHTML = e[n][r]);
                                    }
                                });
                            });
                          }
                        },
                        {
                          key: "buildPickers",
                          value: function(t, e) {
                            var n = this;
                            this.pickers = t.map(function(t) {
                              if (t.classList.contains("ql-align"))
                                return (
                                  null == t.querySelector("option") && E(t, b),
                                  new c.default(t, e.align)
                                );
                              if (
                                t.classList.contains("ql-background") ||
                                t.classList.contains("ql-color")
                              ) {
                                var n = t.classList.contains("ql-background")
                                  ? "background"
                                  : "color";
                                return (
                                  null == t.querySelector("option") &&
                                    E(
                                      t,
                                      g,
                                      "background" === n ? "#ffffff" : "#000000"
                                    ),
                                  new u.default(t, e[n])
                                );
                              }
                              return (
                                null == t.querySelector("option") &&
                                  (t.classList.contains("ql-font")
                                    ? E(t, m)
                                    : t.classList.contains("ql-header")
                                    ? E(t, _)
                                    : t.classList.contains("ql-size") &&
                                      E(t, w)),
                                new f.default(t)
                              );
                            });
                            this.quill.on(
                              a.default.events.EDITOR_CHANGE,
                              function() {
                                n.pickers.forEach(function(t) {
                                  t.update();
                                });
                              }
                            );
                          }
                        }
                      ]),
                      e
                    );
                  })();
                x.DEFAULTS = (0, o.default)(!0, {}, s.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        formula: function() {
                          this.quill.theme.tooltip.edit("formula");
                        },
                        image: function() {
                          var t = this,
                            e = this.container.querySelector(
                              "input.ql-image[type=file]"
                            );
                          null == e &&
                            ((e = document.createElement("input")).setAttribute(
                              "type",
                              "file"
                            ),
                            e.setAttribute(
                              "accept",
                              "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
                            ),
                            e.classList.add("ql-image"),
                            e.addEventListener("change", function() {
                              if (null != e.files && null != e.files[0]) {
                                var n = new FileReader();
                                (n.onload = function(n) {
                                  var r = t.quill.getSelection(!0);
                                  t.quill.updateContents(
                                    new i.default()
                                      .retain(r.index)
                                      .delete(r.length)
                                      .insert({ image: n.target.result }),
                                    a.default.sources.USER
                                  ),
                                    t.quill.setSelection(
                                      r.index + 1,
                                      a.default.sources.SILENT
                                    ),
                                    (e.value = "");
                                }),
                                  n.readAsDataURL(e.files[0]);
                              }
                            }),
                            this.container.appendChild(e)),
                            e.click();
                        },
                        video: function() {
                          this.quill.theme.tooltip.edit("video");
                        }
                      }
                    }
                  }
                });
                var O = (function(t) {
                  function e(t, n) {
                    d(this, e);
                    var r = y(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      (r.textbox = r.root.querySelector('input[type="text"]')),
                      r.listen(),
                      r
                    );
                  }
                  return (
                    v(e, p.default),
                    r(e, [
                      {
                        key: "listen",
                        value: function() {
                          var t = this;
                          this.textbox.addEventListener("keydown", function(e) {
                            l.default.match(e, "enter")
                              ? (t.save(), e.preventDefault())
                              : l.default.match(e, "escape") &&
                                (t.cancel(), e.preventDefault());
                          });
                        }
                      },
                      {
                        key: "cancel",
                        value: function() {
                          this.hide();
                        }
                      },
                      {
                        key: "edit",
                        value: function() {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "link",
                            e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                          this.root.classList.remove("ql-hidden"),
                            this.root.classList.add("ql-editing"),
                            null != e
                              ? (this.textbox.value = e)
                              : t !== this.root.getAttribute("data-mode") &&
                                (this.textbox.value = ""),
                            this.position(
                              this.quill.getBounds(
                                this.quill.selection.savedRange
                              )
                            ),
                            this.textbox.select(),
                            this.textbox.setAttribute(
                              "placeholder",
                              this.textbox.getAttribute("data-" + t) || ""
                            ),
                            this.root.setAttribute("data-mode", t);
                        }
                      },
                      {
                        key: "restoreFocus",
                        value: function() {
                          var t = this.quill.scrollingContainer.scrollTop;
                          this.quill.focus(),
                            (this.quill.scrollingContainer.scrollTop = t);
                        }
                      },
                      {
                        key: "save",
                        value: function() {
                          var t = this.textbox.value;
                          switch (this.root.getAttribute("data-mode")) {
                            case "link":
                              var e = this.quill.root.scrollTop;
                              this.linkRange
                                ? (this.quill.formatText(
                                    this.linkRange,
                                    "link",
                                    t,
                                    a.default.sources.USER
                                  ),
                                  delete this.linkRange)
                                : (this.restoreFocus(),
                                  this.quill.format(
                                    "link",
                                    t,
                                    a.default.sources.USER
                                  )),
                                (this.quill.root.scrollTop = e);
                              break;
                            case "video":
                              t = (function(t) {
                                var e =
                                  t.match(
                                    /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
                                  ) ||
                                  t.match(
                                    /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
                                  );
                                if (e)
                                  return (
                                    (e[1] || "https") +
                                    "://www.youtube.com/embed/" +
                                    e[2] +
                                    "?showinfo=0"
                                  );
                                if (
                                  (e = t.match(
                                    /^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/
                                  ))
                                )
                                  return (
                                    (e[1] || "https") +
                                    "://player.vimeo.com/video/" +
                                    e[2] +
                                    "/"
                                  );
                                return t;
                              })(t);
                            case "formula":
                              if (!t) break;
                              var n = this.quill.getSelection(!0);
                              if (null != n) {
                                var r = n.index + n.length;
                                this.quill.insertEmbed(
                                  r,
                                  this.root.getAttribute("data-mode"),
                                  t,
                                  a.default.sources.USER
                                ),
                                  "formula" ===
                                    this.root.getAttribute("data-mode") &&
                                    this.quill.insertText(
                                      r + 1,
                                      " ",
                                      a.default.sources.USER
                                    ),
                                  this.quill.setSelection(
                                    r + 2,
                                    a.default.sources.USER
                                  );
                              }
                          }
                          (this.textbox.value = ""), this.hide();
                        }
                      }
                    ]),
                    e
                  );
                })();
                function E(t, e) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  e.forEach(function(e) {
                    var r = document.createElement("option");
                    e === n
                      ? r.setAttribute("selected", "selected")
                      : r.setAttribute("value", e),
                      t.appendChild(r);
                  });
                }
                (e.BaseTooltip = O), (e.default = x);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                  function t() {
                    (this.head = this.tail = null), (this.length = 0);
                  }
                  return (
                    (t.prototype.append = function() {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      this.insertBefore(t[0], null),
                        t.length > 1 && this.append.apply(this, t.slice(1));
                    }),
                    (t.prototype.contains = function(t) {
                      for (var e, n = this.iterator(); (e = n()); )
                        if (e === t) return !0;
                      return !1;
                    }),
                    (t.prototype.insertBefore = function(t, e) {
                      t &&
                        ((t.next = e),
                        null != e
                          ? ((t.prev = e.prev),
                            null != e.prev && (e.prev.next = t),
                            (e.prev = t),
                            e === this.head && (this.head = t))
                          : null != this.tail
                          ? ((this.tail.next = t),
                            (t.prev = this.tail),
                            (this.tail = t))
                          : ((t.prev = null), (this.head = this.tail = t)),
                        (this.length += 1));
                    }),
                    (t.prototype.offset = function(t) {
                      for (var e = 0, n = this.head; null != n; ) {
                        if (n === t) return e;
                        (e += n.length()), (n = n.next);
                      }
                      return -1;
                    }),
                    (t.prototype.remove = function(t) {
                      this.contains(t) &&
                        (null != t.prev && (t.prev.next = t.next),
                        null != t.next && (t.next.prev = t.prev),
                        t === this.head && (this.head = t.next),
                        t === this.tail && (this.tail = t.prev),
                        (this.length -= 1));
                    }),
                    (t.prototype.iterator = function(t) {
                      return (
                        void 0 === t && (t = this.head),
                        function() {
                          var e = t;
                          return null != t && (t = t.next), e;
                        }
                      );
                    }),
                    (t.prototype.find = function(t, e) {
                      void 0 === e && (e = !1);
                      for (var n, r = this.iterator(); (n = r()); ) {
                        var o = n.length();
                        if (
                          t < o ||
                          (e &&
                            t === o &&
                            (null == n.next || 0 !== n.next.length()))
                        )
                          return [n, t];
                        t -= o;
                      }
                      return [null, 0];
                    }),
                    (t.prototype.forEach = function(t) {
                      for (var e, n = this.iterator(); (e = n()); ) t(e);
                    }),
                    (t.prototype.forEachAt = function(t, e, n) {
                      if (!(e <= 0))
                        for (
                          var r,
                            o = this.find(t),
                            i = o[0],
                            a = t - o[1],
                            l = this.iterator(i);
                          (r = l()) && a < t + e;

                        ) {
                          var s = r.length();
                          t > a
                            ? n(r, t - a, Math.min(e, a + s - t))
                            : n(r, 0, Math.min(s, t + e - a)),
                            (a += s);
                        }
                    }),
                    (t.prototype.map = function(t) {
                      return this.reduce(function(e, n) {
                        return e.push(t(n)), e;
                      }, []);
                    }),
                    (t.prototype.reduce = function(t, e) {
                      for (var n, r = this.iterator(); (n = r()); ) e = t(e, n);
                      return e;
                    }),
                    t
                  );
                })();
                e.default = r;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(17),
                  i = n(1),
                  a = {
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                  },
                  l = (function(t) {
                    function e(e) {
                      var n = t.call(this, e) || this;
                      return (
                        (n.scroll = n),
                        (n.observer = new MutationObserver(function(t) {
                          n.update(t);
                        })),
                        n.observer.observe(n.domNode, a),
                        n.attach(),
                        n
                      );
                    }
                    return (
                      r(e, t),
                      (e.prototype.detach = function() {
                        t.prototype.detach.call(this),
                          this.observer.disconnect();
                      }),
                      (e.prototype.deleteAt = function(e, n) {
                        this.update(),
                          0 === e && n === this.length()
                            ? this.children.forEach(function(t) {
                                t.remove();
                              })
                            : t.prototype.deleteAt.call(this, e, n);
                      }),
                      (e.prototype.formatAt = function(e, n, r, o) {
                        this.update(),
                          t.prototype.formatAt.call(this, e, n, r, o);
                      }),
                      (e.prototype.insertAt = function(e, n, r) {
                        this.update(), t.prototype.insertAt.call(this, e, n, r);
                      }),
                      (e.prototype.optimize = function(e, n) {
                        var r = this;
                        void 0 === e && (e = []),
                          void 0 === n && (n = {}),
                          t.prototype.optimize.call(this, n);
                        for (
                          var a = [].slice.call(this.observer.takeRecords());
                          a.length > 0;

                        )
                          e.push(a.pop());
                        for (
                          var l = function t(e, n) {
                              void 0 === n && (n = !0),
                                null != e &&
                                  e !== r &&
                                  null != e.domNode.parentNode &&
                                  (null == e.domNode[i.DATA_KEY].mutations &&
                                    (e.domNode[i.DATA_KEY].mutations = []),
                                  n && t(e.parent));
                            },
                            s = function t(e) {
                              null != e.domNode[i.DATA_KEY] &&
                                null != e.domNode[i.DATA_KEY].mutations &&
                                (e instanceof o.default &&
                                  e.children.forEach(t),
                                e.optimize(n));
                            },
                            u = e,
                            c = 0;
                          u.length > 0;
                          c += 1
                        ) {
                          if (c >= 100)
                            throw new Error(
                              "[Parchment] Maximum optimize iterations reached"
                            );
                          for (
                            u.forEach(function(t) {
                              var e = i.find(t.target, !0);
                              null != e &&
                                (e.domNode === t.target &&
                                  ("childList" === t.type
                                    ? (l(i.find(t.previousSibling, !1)),
                                      [].forEach.call(t.addedNodes, function(
                                        t
                                      ) {
                                        var e = i.find(t, !1);
                                        l(e, !1),
                                          e instanceof o.default &&
                                            e.children.forEach(function(t) {
                                              l(t, !1);
                                            });
                                      }))
                                    : "attributes" === t.type && l(e.prev)),
                                l(e));
                            }),
                              this.children.forEach(s),
                              a = (u = [].slice.call(
                                this.observer.takeRecords()
                              )).slice();
                            a.length > 0;

                          )
                            e.push(a.pop());
                        }
                      }),
                      (e.prototype.update = function(e, n) {
                        var r = this;
                        void 0 === n && (n = {}),
                          (e = e || this.observer.takeRecords())
                            .map(function(t) {
                              var e = i.find(t.target, !0);
                              return null == e
                                ? null
                                : null == e.domNode[i.DATA_KEY].mutations
                                ? ((e.domNode[i.DATA_KEY].mutations = [t]), e)
                                : (e.domNode[i.DATA_KEY].mutations.push(t),
                                  null);
                            })
                            .forEach(function(t) {
                              null != t &&
                                t !== r &&
                                null != t.domNode[i.DATA_KEY] &&
                                t.update(
                                  t.domNode[i.DATA_KEY].mutations || [],
                                  n
                                );
                            }),
                          null != this.domNode[i.DATA_KEY].mutations &&
                            t.prototype.update.call(
                              this,
                              this.domNode[i.DATA_KEY].mutations,
                              n
                            ),
                          this.optimize(e, n);
                      }),
                      (e.blotName = "scroll"),
                      (e.defaultChild = "block"),
                      (e.scope = i.Scope.BLOCK_BLOT),
                      (e.tagName = "DIV"),
                      e
                    );
                  })(o.default);
                e.default = l;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(18),
                  i = n(1);
                var a = (function(t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    r(e, t),
                    (e.formats = function(n) {
                      if (n.tagName !== e.tagName)
                        return t.formats.call(this, n);
                    }),
                    (e.prototype.format = function(n, r) {
                      var i = this;
                      n !== this.statics.blotName || r
                        ? t.prototype.format.call(this, n, r)
                        : (this.children.forEach(function(t) {
                            t instanceof o.default ||
                              (t = t.wrap(e.blotName, !0)),
                              i.attributes.copy(t);
                          }),
                          this.unwrap());
                    }),
                    (e.prototype.formatAt = function(e, n, r, o) {
                      null != this.formats()[r] || i.query(r, i.Scope.ATTRIBUTE)
                        ? this.isolate(e, n).format(r, o)
                        : t.prototype.formatAt.call(this, e, n, r, o);
                    }),
                    (e.prototype.optimize = function(n) {
                      t.prototype.optimize.call(this, n);
                      var r = this.formats();
                      if (0 === Object.keys(r).length) return this.unwrap();
                      var o = this.next;
                      o instanceof e &&
                        o.prev === this &&
                        (function(t, e) {
                          if (Object.keys(t).length !== Object.keys(e).length)
                            return !1;
                          for (var n in t) if (t[n] !== e[n]) return !1;
                          return !0;
                        })(r, o.formats()) &&
                        (o.moveChildren(this), o.remove());
                    }),
                    (e.blotName = "inline"),
                    (e.scope = i.Scope.INLINE_BLOT),
                    (e.tagName = "SPAN"),
                    e
                  );
                })(o.default);
                e.default = a;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(18),
                  i = n(1),
                  a = (function(t) {
                    function e() {
                      return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                      r(e, t),
                      (e.formats = function(n) {
                        var r = i.query(e.blotName).tagName;
                        if (n.tagName !== r) return t.formats.call(this, n);
                      }),
                      (e.prototype.format = function(n, r) {
                        null != i.query(n, i.Scope.BLOCK) &&
                          (n !== this.statics.blotName || r
                            ? t.prototype.format.call(this, n, r)
                            : this.replaceWith(e.blotName));
                      }),
                      (e.prototype.formatAt = function(e, n, r, o) {
                        null != i.query(r, i.Scope.BLOCK)
                          ? this.format(r, o)
                          : t.prototype.formatAt.call(this, e, n, r, o);
                      }),
                      (e.prototype.insertAt = function(e, n, r) {
                        if (null == r || null != i.query(n, i.Scope.INLINE))
                          t.prototype.insertAt.call(this, e, n, r);
                        else {
                          var o = this.split(e),
                            a = i.create(n, r);
                          o.parent.insertBefore(a, o);
                        }
                      }),
                      (e.prototype.update = function(e, n) {
                        navigator.userAgent.match(/Trident/)
                          ? this.build()
                          : t.prototype.update.call(this, e, n);
                      }),
                      (e.blotName = "block"),
                      (e.scope = i.Scope.BLOCK_BLOT),
                      (e.tagName = "P"),
                      e
                    );
                  })(o.default);
                e.default = a;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = (function(t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    r(e, t),
                    (e.formats = function(t) {}),
                    (e.prototype.format = function(e, n) {
                      t.prototype.formatAt.call(this, 0, this.length(), e, n);
                    }),
                    (e.prototype.formatAt = function(e, n, r, o) {
                      0 === e && n === this.length()
                        ? this.format(r, o)
                        : t.prototype.formatAt.call(this, e, n, r, o);
                    }),
                    (e.prototype.formats = function() {
                      return this.statics.formats(this.domNode);
                    }),
                    e
                  );
                })(n(19).default);
                e.default = o;
              },
              function(t, e, n) {
                "use strict";
                var r =
                  (this && this.__extends) ||
                  (function() {
                    var t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function(t, e) {
                          t.__proto__ = e;
                        }) ||
                      function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      };
                    return function(e, n) {
                      function r() {
                        this.constructor = e;
                      }
                      t(e, n),
                        (e.prototype =
                          null === n
                            ? Object.create(n)
                            : ((r.prototype = n.prototype), new r()));
                    };
                  })();
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(19),
                  i = n(1),
                  a = (function(t) {
                    function e(e) {
                      var n = t.call(this, e) || this;
                      return (n.text = n.statics.value(n.domNode)), n;
                    }
                    return (
                      r(e, t),
                      (e.create = function(t) {
                        return document.createTextNode(t);
                      }),
                      (e.value = function(t) {
                        var e = t.data;
                        return e.normalize && (e = e.normalize()), e;
                      }),
                      (e.prototype.deleteAt = function(t, e) {
                        this.domNode.data = this.text =
                          this.text.slice(0, t) + this.text.slice(t + e);
                      }),
                      (e.prototype.index = function(t, e) {
                        return this.domNode === t ? e : -1;
                      }),
                      (e.prototype.insertAt = function(e, n, r) {
                        null == r
                          ? ((this.text =
                              this.text.slice(0, e) + n + this.text.slice(e)),
                            (this.domNode.data = this.text))
                          : t.prototype.insertAt.call(this, e, n, r);
                      }),
                      (e.prototype.length = function() {
                        return this.text.length;
                      }),
                      (e.prototype.optimize = function(n) {
                        t.prototype.optimize.call(this, n),
                          (this.text = this.statics.value(this.domNode)),
                          0 === this.text.length
                            ? this.remove()
                            : this.next instanceof e &&
                              this.next.prev === this &&
                              (this.insertAt(this.length(), this.next.value()),
                              this.next.remove());
                      }),
                      (e.prototype.position = function(t, e) {
                        return void 0 === e && (e = !1), [this.domNode, t];
                      }),
                      (e.prototype.split = function(t, e) {
                        if ((void 0 === e && (e = !1), !e)) {
                          if (0 === t) return this;
                          if (t === this.length()) return this.next;
                        }
                        var n = i.create(this.domNode.splitText(t));
                        return (
                          this.parent.insertBefore(n, this.next),
                          (this.text = this.statics.value(this.domNode)),
                          n
                        );
                      }),
                      (e.prototype.update = function(t, e) {
                        var n = this;
                        t.some(function(t) {
                          return (
                            "characterData" === t.type && t.target === n.domNode
                          );
                        }) && (this.text = this.statics.value(this.domNode));
                      }),
                      (e.prototype.value = function() {
                        return this.text;
                      }),
                      (e.blotName = "text"),
                      (e.scope = i.Scope.INLINE_BLOT),
                      e
                    );
                  })(o.default);
                e.default = a;
              },
              function(t, e, n) {
                "use strict";
                var r = document.createElement("div");
                if (
                  (r.classList.toggle("test-class", !1),
                  r.classList.contains("test-class"))
                ) {
                  var o = DOMTokenList.prototype.toggle;
                  DOMTokenList.prototype.toggle = function(t, e) {
                    return arguments.length > 1 && !this.contains(t) === !e
                      ? e
                      : o.call(this, t);
                  };
                }
                String.prototype.startsWith ||
                  (String.prototype.startsWith = function(t, e) {
                    return (e = e || 0), this.substr(e, t.length) === t;
                  }),
                  String.prototype.endsWith ||
                    (String.prototype.endsWith = function(t, e) {
                      var n = this.toString();
                      ("number" !== typeof e ||
                        !isFinite(e) ||
                        Math.floor(e) !== e ||
                        e > n.length) &&
                        (e = n.length),
                        (e -= t.length);
                      var r = n.indexOf(t, e);
                      return -1 !== r && r === e;
                    }),
                  Array.prototype.find ||
                    Object.defineProperty(Array.prototype, "find", {
                      value: function(t) {
                        if (null === this)
                          throw new TypeError(
                            "Array.prototype.find called on null or undefined"
                          );
                        if ("function" !== typeof t)
                          throw new TypeError("predicate must be a function");
                        for (
                          var e,
                            n = Object(this),
                            r = n.length >>> 0,
                            o = arguments[1],
                            i = 0;
                          i < r;
                          i++
                        )
                          if (((e = n[i]), t.call(o, e, i, n))) return e;
                      }
                    }),
                  document.addEventListener("DOMContentLoaded", function() {
                    document.execCommand("enableObjectResizing", !1, !1),
                      document.execCommand("autoUrlDetect", !1, !1);
                  });
              },
              function(t, e) {
                var n = -1,
                  r = 1,
                  o = 0;
                function i(t, e, u) {
                  if (t == e) return t ? [[o, t]] : [];
                  (u < 0 || t.length < u) && (u = null);
                  var f = l(t, e),
                    p = t.substring(0, f);
                  f = s((t = t.substring(f)), (e = e.substring(f)));
                  var h = t.substring(t.length - f),
                    d = (function(t, e) {
                      var u;
                      if (!t) return [[r, e]];
                      if (!e) return [[n, t]];
                      var c = t.length > e.length ? t : e,
                        f = t.length > e.length ? e : t,
                        p = c.indexOf(f);
                      if (-1 != p)
                        return (
                          (u = [
                            [r, c.substring(0, p)],
                            [o, f],
                            [r, c.substring(p + f.length)]
                          ]),
                          t.length > e.length && (u[0][0] = u[2][0] = n),
                          u
                        );
                      if (1 == f.length) return [[n, t], [r, e]];
                      var h = (function(t, e) {
                        var n = t.length > e.length ? t : e,
                          r = t.length > e.length ? e : t;
                        if (n.length < 4 || 2 * r.length < n.length)
                          return null;
                        function o(t, e, n) {
                          for (
                            var r,
                              o,
                              i,
                              a,
                              u = t.substring(n, n + Math.floor(t.length / 4)),
                              c = -1,
                              f = "";
                            -1 != (c = e.indexOf(u, c + 1));

                          ) {
                            var p = l(t.substring(n), e.substring(c)),
                              h = s(t.substring(0, n), e.substring(0, c));
                            f.length < h + p &&
                              ((f =
                                e.substring(c - h, c) + e.substring(c, c + p)),
                              (r = t.substring(0, n - h)),
                              (o = t.substring(n + p)),
                              (i = e.substring(0, c - h)),
                              (a = e.substring(c + p)));
                          }
                          return 2 * f.length >= t.length
                            ? [r, o, i, a, f]
                            : null;
                        }
                        var i,
                          a,
                          u,
                          c,
                          f,
                          p = o(n, r, Math.ceil(n.length / 4)),
                          h = o(n, r, Math.ceil(n.length / 2));
                        if (!p && !h) return null;
                        i = h ? (p && p[4].length > h[4].length ? p : h) : p;
                        t.length > e.length
                          ? ((a = i[0]), (u = i[1]), (c = i[2]), (f = i[3]))
                          : ((c = i[0]), (f = i[1]), (a = i[2]), (u = i[3]));
                        var d = i[4];
                        return [a, u, c, f, d];
                      })(t, e);
                      if (h) {
                        var d = h[0],
                          y = h[1],
                          v = h[2],
                          b = h[3],
                          g = h[4],
                          m = i(d, v),
                          _ = i(y, b);
                        return m.concat([[o, g]], _);
                      }
                      return (function(t, e) {
                        for (
                          var o = t.length,
                            i = e.length,
                            l = Math.ceil((o + i) / 2),
                            s = l,
                            u = 2 * l,
                            c = new Array(u),
                            f = new Array(u),
                            p = 0;
                          p < u;
                          p++
                        )
                          (c[p] = -1), (f[p] = -1);
                        (c[s + 1] = 0), (f[s + 1] = 0);
                        for (
                          var h = o - i,
                            d = h % 2 != 0,
                            y = 0,
                            v = 0,
                            b = 0,
                            g = 0,
                            m = 0;
                          m < l;
                          m++
                        ) {
                          for (var _ = -m + y; _ <= m - v; _ += 2) {
                            for (
                              var w = s + _,
                                x =
                                  (N =
                                    _ == -m || (_ != m && c[w - 1] < c[w + 1])
                                      ? c[w + 1]
                                      : c[w - 1] + 1) - _;
                              N < o && x < i && t.charAt(N) == e.charAt(x);

                            )
                              N++, x++;
                            if (((c[w] = N), N > o)) v += 2;
                            else if (x > i) y += 2;
                            else if (d) {
                              var O = s + h - _;
                              if (O >= 0 && O < u && -1 != f[O]) {
                                var E = o - f[O];
                                if (N >= E) return a(t, e, N, x);
                              }
                            }
                          }
                          for (var k = -m + b; k <= m - g; k += 2) {
                            for (
                              var O = s + k,
                                A =
                                  (E =
                                    k == -m || (k != m && f[O - 1] < f[O + 1])
                                      ? f[O + 1]
                                      : f[O - 1] + 1) - k;
                              E < o &&
                              A < i &&
                              t.charAt(o - E - 1) == e.charAt(i - A - 1);

                            )
                              E++, A++;
                            if (((f[O] = E), E > o)) g += 2;
                            else if (A > i) b += 2;
                            else if (!d) {
                              var w = s + h - k;
                              if (w >= 0 && w < u && -1 != c[w]) {
                                var N = c[w],
                                  x = s + N - w;
                                if (N >= (E = o - E)) return a(t, e, N, x);
                              }
                            }
                          }
                        }
                        return [[n, t], [r, e]];
                      })(t, e);
                    })(
                      (t = t.substring(0, t.length - f)),
                      (e = e.substring(0, e.length - f))
                    );
                  return (
                    p && d.unshift([o, p]),
                    h && d.push([o, h]),
                    (function t(e) {
                      e.push([o, ""]);
                      var i = 0;
                      var a = 0;
                      var u = 0;
                      var c = "";
                      var f = "";
                      var p;
                      for (; i < e.length; )
                        switch (e[i][0]) {
                          case r:
                            u++, (f += e[i][1]), i++;
                            break;
                          case n:
                            a++, (c += e[i][1]), i++;
                            break;
                          case o:
                            a + u > 1
                              ? (0 !== a &&
                                  0 !== u &&
                                  (0 !== (p = l(f, c)) &&
                                    (i - a - u > 0 && e[i - a - u - 1][0] == o
                                      ? (e[i - a - u - 1][1] += f.substring(
                                          0,
                                          p
                                        ))
                                      : (e.splice(0, 0, [o, f.substring(0, p)]),
                                        i++),
                                    (f = f.substring(p)),
                                    (c = c.substring(p))),
                                  0 !== (p = s(f, c)) &&
                                    ((e[i][1] =
                                      f.substring(f.length - p) + e[i][1]),
                                    (f = f.substring(0, f.length - p)),
                                    (c = c.substring(0, c.length - p)))),
                                0 === a
                                  ? e.splice(i - u, a + u, [r, f])
                                  : 0 === u
                                  ? e.splice(i - a, a + u, [n, c])
                                  : e.splice(i - a - u, a + u, [n, c], [r, f]),
                                (i = i - a - u + (a ? 1 : 0) + (u ? 1 : 0) + 1))
                              : 0 !== i && e[i - 1][0] == o
                              ? ((e[i - 1][1] += e[i][1]), e.splice(i, 1))
                              : i++,
                              (u = 0),
                              (a = 0),
                              (c = ""),
                              (f = "");
                        }
                      "" === e[e.length - 1][1] && e.pop();
                      var h = !1;
                      i = 1;
                      for (; i < e.length - 1; )
                        e[i - 1][0] == o &&
                          e[i + 1][0] == o &&
                          (e[i][1].substring(
                            e[i][1].length - e[i - 1][1].length
                          ) == e[i - 1][1]
                            ? ((e[i][1] =
                                e[i - 1][1] +
                                e[i][1].substring(
                                  0,
                                  e[i][1].length - e[i - 1][1].length
                                )),
                              (e[i + 1][1] = e[i - 1][1] + e[i + 1][1]),
                              e.splice(i - 1, 1),
                              (h = !0))
                            : e[i][1].substring(0, e[i + 1][1].length) ==
                                e[i + 1][1] &&
                              ((e[i - 1][1] += e[i + 1][1]),
                              (e[i][1] =
                                e[i][1].substring(e[i + 1][1].length) +
                                e[i + 1][1]),
                              e.splice(i + 1, 1),
                              (h = !0))),
                          i++;
                      h && t(e);
                    })(d),
                    null != u &&
                      (d = (function(t, e) {
                        var r = (function(t, e) {
                            if (0 === e) return [o, t];
                            for (var r = 0, i = 0; i < t.length; i++) {
                              var a = t[i];
                              if (a[0] === n || a[0] === o) {
                                var l = r + a[1].length;
                                if (e === l) return [i + 1, t];
                                if (e < l) {
                                  t = t.slice();
                                  var s = e - r,
                                    u = [a[0], a[1].slice(0, s)],
                                    c = [a[0], a[1].slice(s)];
                                  return t.splice(i, 1, u, c), [i + 1, t];
                                }
                                r = l;
                              }
                            }
                            throw new Error("cursor_pos is out of bounds!");
                          })(t, e),
                          i = r[1],
                          a = r[0],
                          l = i[a],
                          s = i[a + 1];
                        if (null == l) return t;
                        if (l[0] !== o) return t;
                        if (null != s && l[1] + s[1] === s[1] + l[1])
                          return i.splice(a, 2, s, l), c(i, a, 2);
                        if (null != s && 0 === s[1].indexOf(l[1])) {
                          i.splice(a, 2, [s[0], l[1]], [0, l[1]]);
                          var u = s[1].slice(l[1].length);
                          return (
                            u.length > 0 && i.splice(a + 2, 0, [s[0], u]),
                            c(i, a, 3)
                          );
                        }
                        return t;
                      })(d, u)),
                    (d = (function(t) {
                      for (
                        var e = !1,
                          i = function(t) {
                            return (
                              t.charCodeAt(0) >= 56320 &&
                              t.charCodeAt(0) <= 57343
                            );
                          },
                          a = function(t) {
                            return (
                              t.charCodeAt(t.length - 1) >= 55296 &&
                              t.charCodeAt(t.length - 1) <= 56319
                            );
                          },
                          l = 2;
                        l < t.length;
                        l += 1
                      )
                        t[l - 2][0] === o &&
                          a(t[l - 2][1]) &&
                          t[l - 1][0] === n &&
                          i(t[l - 1][1]) &&
                          t[l][0] === r &&
                          i(t[l][1]) &&
                          ((e = !0),
                          (t[l - 1][1] = t[l - 2][1].slice(-1) + t[l - 1][1]),
                          (t[l][1] = t[l - 2][1].slice(-1) + t[l][1]),
                          (t[l - 2][1] = t[l - 2][1].slice(0, -1)));
                      if (!e) return t;
                      for (var s = [], l = 0; l < t.length; l += 1)
                        t[l][1].length > 0 && s.push(t[l]);
                      return s;
                    })(d))
                  );
                }
                function a(t, e, n, r) {
                  var o = t.substring(0, n),
                    a = e.substring(0, r),
                    l = t.substring(n),
                    s = e.substring(r),
                    u = i(o, a),
                    c = i(l, s);
                  return u.concat(c);
                }
                function l(t, e) {
                  if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                  for (
                    var n = 0, r = Math.min(t.length, e.length), o = r, i = 0;
                    n < o;

                  )
                    t.substring(i, o) == e.substring(i, o)
                      ? (i = n = o)
                      : (r = o),
                      (o = Math.floor((r - n) / 2 + n));
                  return o;
                }
                function s(t, e) {
                  if (
                    !t ||
                    !e ||
                    t.charAt(t.length - 1) != e.charAt(e.length - 1)
                  )
                    return 0;
                  for (
                    var n = 0, r = Math.min(t.length, e.length), o = r, i = 0;
                    n < o;

                  )
                    t.substring(t.length - o, t.length - i) ==
                    e.substring(e.length - o, e.length - i)
                      ? (i = n = o)
                      : (r = o),
                      (o = Math.floor((r - n) / 2 + n));
                  return o;
                }
                var u = i;
                function c(t, e, n) {
                  for (var r = e + n - 1; r >= 0 && r >= e - 1; r--)
                    if (r + 1 < t.length) {
                      var o = t[r],
                        i = t[r + 1];
                      o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]]);
                    }
                  return t;
                }
                (u.INSERT = r), (u.DELETE = n), (u.EQUAL = o), (t.exports = u);
              },
              function(t, e) {
                function n(t) {
                  var e = [];
                  for (var n in t) e.push(n);
                  return e;
                }
                (t.exports =
                  "function" === typeof Object.keys ? Object.keys : n).shim = n;
              },
              function(t, e) {
                var n =
                  "[object Arguments]" ==
                  (function() {
                    return Object.prototype.toString.call(arguments);
                  })();
                function r(t) {
                  return (
                    "[object Arguments]" == Object.prototype.toString.call(t)
                  );
                }
                function o(t) {
                  return (
                    (t &&
                      "object" == typeof t &&
                      "number" == typeof t.length &&
                      Object.prototype.hasOwnProperty.call(t, "callee") &&
                      !Object.prototype.propertyIsEnumerable.call(
                        t,
                        "callee"
                      )) ||
                    !1
                  );
                }
                ((e = t.exports = n ? r : o).supported = r),
                  (e.unsupported = o);
              },
              function(t, e) {
                "use strict";
                var n = Object.prototype.hasOwnProperty,
                  r = "~";
                function o() {}
                function i(t, e, n) {
                  (this.fn = t), (this.context = e), (this.once = n || !1);
                }
                function a() {
                  (this._events = new o()), (this._eventsCount = 0);
                }
                Object.create &&
                  ((o.prototype = Object.create(null)),
                  new o().__proto__ || (r = !1)),
                  (a.prototype.eventNames = function() {
                    var t,
                      e,
                      o = [];
                    if (0 === this._eventsCount) return o;
                    for (e in (t = this._events))
                      n.call(t, e) && o.push(r ? e.slice(1) : e);
                    return Object.getOwnPropertySymbols
                      ? o.concat(Object.getOwnPropertySymbols(t))
                      : o;
                  }),
                  (a.prototype.listeners = function(t, e) {
                    var n = r ? r + t : t,
                      o = this._events[n];
                    if (e) return !!o;
                    if (!o) return [];
                    if (o.fn) return [o.fn];
                    for (var i = 0, a = o.length, l = new Array(a); i < a; i++)
                      l[i] = o[i].fn;
                    return l;
                  }),
                  (a.prototype.emit = function(t, e, n, o, i, a) {
                    var l = r ? r + t : t;
                    if (!this._events[l]) return !1;
                    var s,
                      u,
                      c = this._events[l],
                      f = arguments.length;
                    if (c.fn) {
                      switch (
                        (c.once && this.removeListener(t, c.fn, void 0, !0), f)
                      ) {
                        case 1:
                          return c.fn.call(c.context), !0;
                        case 2:
                          return c.fn.call(c.context, e), !0;
                        case 3:
                          return c.fn.call(c.context, e, n), !0;
                        case 4:
                          return c.fn.call(c.context, e, n, o), !0;
                        case 5:
                          return c.fn.call(c.context, e, n, o, i), !0;
                        case 6:
                          return c.fn.call(c.context, e, n, o, i, a), !0;
                      }
                      for (u = 1, s = new Array(f - 1); u < f; u++)
                        s[u - 1] = arguments[u];
                      c.fn.apply(c.context, s);
                    } else {
                      var p,
                        h = c.length;
                      for (u = 0; u < h; u++)
                        switch (
                          (c[u].once &&
                            this.removeListener(t, c[u].fn, void 0, !0),
                          f)
                        ) {
                          case 1:
                            c[u].fn.call(c[u].context);
                            break;
                          case 2:
                            c[u].fn.call(c[u].context, e);
                            break;
                          case 3:
                            c[u].fn.call(c[u].context, e, n);
                            break;
                          case 4:
                            c[u].fn.call(c[u].context, e, n, o);
                            break;
                          default:
                            if (!s)
                              for (p = 1, s = new Array(f - 1); p < f; p++)
                                s[p - 1] = arguments[p];
                            c[u].fn.apply(c[u].context, s);
                        }
                    }
                    return !0;
                  }),
                  (a.prototype.on = function(t, e, n) {
                    var o = new i(e, n || this),
                      a = r ? r + t : t;
                    return (
                      this._events[a]
                        ? this._events[a].fn
                          ? (this._events[a] = [this._events[a], o])
                          : this._events[a].push(o)
                        : ((this._events[a] = o), this._eventsCount++),
                      this
                    );
                  }),
                  (a.prototype.once = function(t, e, n) {
                    var o = new i(e, n || this, !0),
                      a = r ? r + t : t;
                    return (
                      this._events[a]
                        ? this._events[a].fn
                          ? (this._events[a] = [this._events[a], o])
                          : this._events[a].push(o)
                        : ((this._events[a] = o), this._eventsCount++),
                      this
                    );
                  }),
                  (a.prototype.removeListener = function(t, e, n, i) {
                    var a = r ? r + t : t;
                    if (!this._events[a]) return this;
                    if (!e)
                      return (
                        0 === --this._eventsCount
                          ? (this._events = new o())
                          : delete this._events[a],
                        this
                      );
                    var l = this._events[a];
                    if (l.fn)
                      l.fn !== e ||
                        (i && !l.once) ||
                        (n && l.context !== n) ||
                        (0 === --this._eventsCount
                          ? (this._events = new o())
                          : delete this._events[a]);
                    else {
                      for (var s = 0, u = [], c = l.length; s < c; s++)
                        (l[s].fn !== e ||
                          (i && !l[s].once) ||
                          (n && l[s].context !== n)) &&
                          u.push(l[s]);
                      u.length
                        ? (this._events[a] = 1 === u.length ? u[0] : u)
                        : 0 === --this._eventsCount
                        ? (this._events = new o())
                        : delete this._events[a];
                    }
                    return this;
                  }),
                  (a.prototype.removeAllListeners = function(t) {
                    var e;
                    return (
                      t
                        ? ((e = r ? r + t : t),
                          this._events[e] &&
                            (0 === --this._eventsCount
                              ? (this._events = new o())
                              : delete this._events[e]))
                        : ((this._events = new o()), (this._eventsCount = 0)),
                      this
                    );
                  }),
                  (a.prototype.off = a.prototype.removeListener),
                  (a.prototype.addListener = a.prototype.on),
                  (a.prototype.setMaxListeners = function() {
                    return this;
                  }),
                  (a.prefixed = r),
                  (a.EventEmitter = a),
                  "undefined" !== typeof t && (t.exports = a);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0);
                var r =
                    "function" === typeof Symbol &&
                    "symbol" === typeof Symbol.iterator
                      ? function(t) {
                          return typeof t;
                        }
                      : function(t) {
                          return t &&
                            "function" === typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  i = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = m(n(3)),
                  l = m(n(2)),
                  s = m(n(0)),
                  u = m(n(5)),
                  c = m(n(10)),
                  f = m(n(9)),
                  p = n(36),
                  h = n(37),
                  d = m(n(13)),
                  y = n(26),
                  v = n(38),
                  b = n(39),
                  g = n(40);
                function m(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function _(t, e, n) {
                  return (
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (t[e] = n),
                    t
                  );
                }
                var w = (0, c.default)("quill:clipboard"),
                  x = "__ql-matcher",
                  O = [
                    [Node.TEXT_NODE, R],
                    [Node.TEXT_NODE, L],
                    [
                      "br",
                      function(t, e) {
                        S(e, "\n") || e.insert("\n");
                        return e;
                      }
                    ],
                    [Node.ELEMENT_NODE, L],
                    [Node.ELEMENT_NODE, q],
                    [Node.ELEMENT_NODE, M],
                    [Node.ELEMENT_NODE, C],
                    [
                      Node.ELEMENT_NODE,
                      function(t, e) {
                        var n = {},
                          r = t.style || {};
                        r.fontStyle &&
                          "italic" === j(t).fontStyle &&
                          (n.italic = !0);
                        r.fontWeight &&
                          (j(t).fontWeight.startsWith("bold") ||
                            parseInt(j(t).fontWeight) >= 700) &&
                          (n.bold = !0);
                        Object.keys(n).length > 0 && (e = N(e, n));
                        parseFloat(r.textIndent || 0) > 0 &&
                          (e = new l.default().insert("\t").concat(e));
                        return e;
                      }
                    ],
                    [
                      "li",
                      function(t, e) {
                        var n = s.default.query(t);
                        if (
                          null == n ||
                          "list-item" !== n.blotName ||
                          !S(e, "\n")
                        )
                          return e;
                        var r = -1,
                          o = t.parentNode;
                        for (; !o.classList.contains("ql-clipboard"); )
                          "list" === (s.default.query(o) || {}).blotName &&
                            (r += 1),
                            (o = o.parentNode);
                        return r <= 0
                          ? e
                          : e.compose(
                              new l.default()
                                .retain(e.length() - 1)
                                .retain(1, { indent: r })
                            );
                      }
                    ],
                    ["b", P.bind(P, "bold")],
                    ["i", P.bind(P, "italic")],
                    [
                      "style",
                      function() {
                        return new l.default();
                      }
                    ]
                  ],
                  E = [p.AlignAttribute, v.DirectionAttribute].reduce(function(
                    t,
                    e
                  ) {
                    return (t[e.keyName] = e), t;
                  },
                  {}),
                  k = [
                    p.AlignStyle,
                    h.BackgroundStyle,
                    y.ColorStyle,
                    v.DirectionStyle,
                    b.FontStyle,
                    g.SizeStyle
                  ].reduce(function(t, e) {
                    return (t[e.keyName] = e), t;
                  }, {}),
                  A = (function(t) {
                    function e(t, n) {
                      !(function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var r = (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return (
                        r.quill.root.addEventListener(
                          "paste",
                          r.onPaste.bind(r)
                        ),
                        (r.container = r.quill.addContainer("ql-clipboard")),
                        r.container.setAttribute("contenteditable", !0),
                        r.container.setAttribute("tabindex", -1),
                        (r.matchers = []),
                        O.concat(r.options.matchers).forEach(function(t) {
                          var e = o(t, 2),
                            i = e[0],
                            a = e[1];
                          (n.matchVisual || a !== M) && r.addMatcher(i, a);
                        }),
                        r
                      );
                    }
                    return (
                      (function(t, e) {
                        if ("function" !== typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, f.default),
                      i(e, [
                        {
                          key: "addMatcher",
                          value: function(t, e) {
                            this.matchers.push([t, e]);
                          }
                        },
                        {
                          key: "convert",
                          value: function(t) {
                            if ("string" === typeof t)
                              return (
                                (this.container.innerHTML = t.replace(
                                  /\>\r?\n +\</g,
                                  "><"
                                )),
                                this.convert()
                              );
                            var e = this.quill.getFormat(
                              this.quill.selection.savedRange.index
                            );
                            if (e[d.default.blotName]) {
                              var n = this.container.innerText;
                              return (
                                (this.container.innerHTML = ""),
                                new l.default().insert(
                                  n,
                                  _(
                                    {},
                                    d.default.blotName,
                                    e[d.default.blotName]
                                  )
                                )
                              );
                            }
                            var r = this.prepareMatching(),
                              i = o(r, 2),
                              a = i[0],
                              s = i[1],
                              u = (function t(e, n, r) {
                                return e.nodeType === e.TEXT_NODE
                                  ? r.reduce(function(t, n) {
                                      return n(e, t);
                                    }, new l.default())
                                  : e.nodeType === e.ELEMENT_NODE
                                  ? [].reduce.call(
                                      e.childNodes || [],
                                      function(o, i) {
                                        var a = t(i, n, r);
                                        return (
                                          i.nodeType === e.ELEMENT_NODE &&
                                            ((a = n.reduce(function(t, e) {
                                              return e(i, t);
                                            }, a)),
                                            (a = (i[x] || []).reduce(function(
                                              t,
                                              e
                                            ) {
                                              return e(i, t);
                                            },
                                            a))),
                                          o.concat(a)
                                        );
                                      },
                                      new l.default()
                                    )
                                  : new l.default();
                              })(this.container, a, s);
                            return (
                              S(u, "\n") &&
                                null == u.ops[u.ops.length - 1].attributes &&
                                (u = u.compose(
                                  new l.default()
                                    .retain(u.length() - 1)
                                    .delete(1)
                                )),
                              w.log("convert", this.container.innerHTML, u),
                              (this.container.innerHTML = ""),
                              u
                            );
                          }
                        },
                        {
                          key: "dangerouslyPasteHTML",
                          value: function(t, e) {
                            var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : u.default.sources.API;
                            if ("string" === typeof t)
                              this.quill.setContents(this.convert(t), e),
                                this.quill.setSelection(
                                  0,
                                  u.default.sources.SILENT
                                );
                            else {
                              var r = this.convert(e);
                              this.quill.updateContents(
                                new l.default().retain(t).concat(r),
                                n
                              ),
                                this.quill.setSelection(
                                  t + r.length(),
                                  u.default.sources.SILENT
                                );
                            }
                          }
                        },
                        {
                          key: "onPaste",
                          value: function(t) {
                            var e = this;
                            if (!t.defaultPrevented && this.quill.isEnabled()) {
                              var n = this.quill.getSelection(),
                                r = new l.default().retain(n.index),
                                o = this.quill.scrollingContainer.scrollTop;
                              this.container.focus(),
                                this.quill.selection.update(
                                  u.default.sources.SILENT
                                ),
                                setTimeout(function() {
                                  (r = r.concat(e.convert()).delete(n.length)),
                                    e.quill.updateContents(
                                      r,
                                      u.default.sources.USER
                                    ),
                                    e.quill.setSelection(
                                      r.length() - n.length,
                                      u.default.sources.SILENT
                                    ),
                                    (e.quill.scrollingContainer.scrollTop = o),
                                    e.quill.focus();
                                }, 1);
                            }
                          }
                        },
                        {
                          key: "prepareMatching",
                          value: function() {
                            var t = this,
                              e = [],
                              n = [];
                            return (
                              this.matchers.forEach(function(r) {
                                var i = o(r, 2),
                                  a = i[0],
                                  l = i[1];
                                switch (a) {
                                  case Node.TEXT_NODE:
                                    n.push(l);
                                    break;
                                  case Node.ELEMENT_NODE:
                                    e.push(l);
                                    break;
                                  default:
                                    [].forEach.call(
                                      t.container.querySelectorAll(a),
                                      function(t) {
                                        (t[x] = t[x] || []), t[x].push(l);
                                      }
                                    );
                                }
                              }),
                              [e, n]
                            );
                          }
                        }
                      ]),
                      e
                    );
                  })();
                function N(t, e, n) {
                  return "object" ===
                    ("undefined" === typeof e ? "undefined" : r(e))
                    ? Object.keys(e).reduce(function(t, n) {
                        return N(t, n, e[n]);
                      }, t)
                    : t.reduce(function(t, r) {
                        return r.attributes && r.attributes[e]
                          ? t.push(r)
                          : t.insert(
                              r.insert,
                              (0, a.default)({}, _({}, e, n), r.attributes)
                            );
                      }, new l.default());
                }
                function j(t) {
                  if (t.nodeType !== Node.ELEMENT_NODE) return {};
                  return (
                    t["__ql-computed-style"] ||
                    (t["__ql-computed-style"] = window.getComputedStyle(t))
                  );
                }
                function S(t, e) {
                  for (
                    var n = "", r = t.ops.length - 1;
                    r >= 0 && n.length < e.length;
                    --r
                  ) {
                    var o = t.ops[r];
                    if ("string" !== typeof o.insert) break;
                    n = o.insert + n;
                  }
                  return n.slice(-1 * e.length) === e;
                }
                function T(t) {
                  if (0 === t.childNodes.length) return !1;
                  var e = j(t);
                  return ["block", "list-item"].indexOf(e.display) > -1;
                }
                function P(t, e, n) {
                  return N(n, t, !0);
                }
                function C(t, e) {
                  var n = s.default.Attributor.Attribute.keys(t),
                    r = s.default.Attributor.Class.keys(t),
                    o = s.default.Attributor.Style.keys(t),
                    i = {};
                  return (
                    n
                      .concat(r)
                      .concat(o)
                      .forEach(function(e) {
                        var n = s.default.query(e, s.default.Scope.ATTRIBUTE);
                        (null != n &&
                          ((i[n.attrName] = n.value(t)), i[n.attrName])) ||
                          (null == (n = E[e]) ||
                            (n.attrName !== e && n.keyName !== e) ||
                            (i[n.attrName] = n.value(t) || void 0),
                          null == (n = k[e]) ||
                            (n.attrName !== e && n.keyName !== e) ||
                            ((n = k[e]),
                            (i[n.attrName] = n.value(t) || void 0)));
                      }),
                    Object.keys(i).length > 0 && (e = N(e, i)),
                    e
                  );
                }
                function q(t, e) {
                  var n = s.default.query(t);
                  if (null == n) return e;
                  if (n.prototype instanceof s.default.Embed) {
                    var r = {},
                      o = n.value(t);
                    null != o &&
                      ((r[n.blotName] = o),
                      (e = new l.default().insert(r, n.formats(t))));
                  } else
                    "function" === typeof n.formats &&
                      (e = N(e, n.blotName, n.formats(t)));
                  return e;
                }
                function L(t, e) {
                  return (
                    S(e, "\n") ||
                      ((T(t) ||
                        (e.length() > 0 &&
                          t.nextSibling &&
                          T(t.nextSibling))) &&
                        e.insert("\n")),
                    e
                  );
                }
                function M(t, e) {
                  if (T(t) && null != t.nextElementSibling && !S(e, "\n\n")) {
                    var n =
                      t.offsetHeight +
                      parseFloat(j(t).marginTop) +
                      parseFloat(j(t).marginBottom);
                    t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n &&
                      e.insert("\n");
                  }
                  return e;
                }
                function R(t, e) {
                  var n = t.data;
                  if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
                  if (
                    0 === n.trim().length &&
                    t.parentNode.classList.contains("ql-clipboard")
                  )
                    return e;
                  if (!j(t.parentNode).whiteSpace.startsWith("pre")) {
                    var r = function(t, e) {
                      return (e = e.replace(/[^\u00a0]/g, "")).length < 1 && t
                        ? " "
                        : e;
                    };
                    (n = (n = n
                      .replace(/\r\n/g, " ")
                      .replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0))),
                      ((null == t.previousSibling && T(t.parentNode)) ||
                        (null != t.previousSibling && T(t.previousSibling))) &&
                        (n = n.replace(/^\s+/, r.bind(r, !1))),
                      ((null == t.nextSibling && T(t.parentNode)) ||
                        (null != t.nextSibling && T(t.nextSibling))) &&
                        (n = n.replace(/\s+$/, r.bind(r, !1)));
                  }
                  return e.insert(n);
                }
                (A.DEFAULTS = { matchers: [], matchVisual: !0 }),
                  (e.default = A),
                  (e.matchAttributor = C),
                  (e.matchBlot = q),
                  (e.matchNewline = L),
                  (e.matchSpacing = M),
                  (e.matchText = R);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(6),
                  l = (r = a) && r.__esModule ? r : { default: r };
                var s = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, l.default),
                    o(
                      e,
                      [
                        {
                          key: "optimize",
                          value: function(t) {
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "optimize",
                              this
                            ).call(this, t),
                              this.domNode.tagName !==
                                this.statics.tagName[0] &&
                                this.replaceWith(this.statics.blotName);
                          }
                        }
                      ],
                      [
                        {
                          key: "create",
                          value: function() {
                            return i(
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this);
                          }
                        },
                        {
                          key: "formats",
                          value: function() {
                            return !0;
                          }
                        }
                      ]
                    ),
                    e
                  );
                })();
                (s.blotName = "bold"),
                  (s.tagName = ["STRONG", "B"]),
                  (e.default = s);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.addControls = e.default = void 0);
                var r = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = c(n(2)),
                  a = c(n(0)),
                  l = c(n(5)),
                  s = c(n(10)),
                  u = c(n(9));
                function c(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function f(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                var p = (0, s.default)("quill:toolbar"),
                  h = (function(t) {
                    function e(t, n) {
                      !(function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var o,
                        i = f(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).call(
                            this,
                            t,
                            n
                          )
                        );
                      if (Array.isArray(i.options.container)) {
                        var a = document.createElement("div");
                        y(a, i.options.container),
                          t.container.parentNode.insertBefore(a, t.container),
                          (i.container = a);
                      } else
                        "string" === typeof i.options.container
                          ? (i.container = document.querySelector(
                              i.options.container
                            ))
                          : (i.container = i.options.container);
                      return i.container instanceof HTMLElement
                        ? (i.container.classList.add("ql-toolbar"),
                          (i.controls = []),
                          (i.handlers = {}),
                          Object.keys(i.options.handlers).forEach(function(t) {
                            i.addHandler(t, i.options.handlers[t]);
                          }),
                          [].forEach.call(
                            i.container.querySelectorAll("button, select"),
                            function(t) {
                              i.attach(t);
                            }
                          ),
                          i.quill.on(l.default.events.EDITOR_CHANGE, function(
                            t,
                            e
                          ) {
                            t === l.default.events.SELECTION_CHANGE &&
                              i.update(e);
                          }),
                          i.quill.on(
                            l.default.events.SCROLL_OPTIMIZE,
                            function() {
                              var t = i.quill.selection.getRange(),
                                e = r(t, 1)[0];
                              i.update(e);
                            }
                          ),
                          i)
                        : ((o = p.error(
                            "Container required for toolbar",
                            i.options
                          )),
                          f(i, o));
                    }
                    return (
                      (function(t, e) {
                        if ("function" !== typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, u.default),
                      o(e, [
                        {
                          key: "addHandler",
                          value: function(t, e) {
                            this.handlers[t] = e;
                          }
                        },
                        {
                          key: "attach",
                          value: function(t) {
                            var e = this,
                              n = [].find.call(t.classList, function(t) {
                                return 0 === t.indexOf("ql-");
                              });
                            if (n) {
                              if (
                                ((n = n.slice("ql-".length)),
                                "BUTTON" === t.tagName &&
                                  t.setAttribute("type", "button"),
                                null == this.handlers[n])
                              ) {
                                if (
                                  null != this.quill.scroll.whitelist &&
                                  null == this.quill.scroll.whitelist[n]
                                )
                                  return void p.warn(
                                    "ignoring attaching to disabled format",
                                    n,
                                    t
                                  );
                                if (null == a.default.query(n))
                                  return void p.warn(
                                    "ignoring attaching to nonexistent format",
                                    n,
                                    t
                                  );
                              }
                              var o =
                                "SELECT" === t.tagName ? "change" : "click";
                              t.addEventListener(o, function(o) {
                                var s = void 0;
                                if ("SELECT" === t.tagName) {
                                  if (t.selectedIndex < 0) return;
                                  var u = t.options[t.selectedIndex];
                                  s =
                                    !u.hasAttribute("selected") &&
                                    (u.value || !1);
                                } else (s = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value"))), o.preventDefault();
                                e.quill.focus();
                                var c = e.quill.selection.getRange(),
                                  f = r(c, 1)[0];
                                if (null != e.handlers[n])
                                  e.handlers[n].call(e, s);
                                else if (
                                  a.default.query(n).prototype instanceof
                                  a.default.Embed
                                ) {
                                  if (!(s = prompt("Enter " + n))) return;
                                  e.quill.updateContents(
                                    new i.default()
                                      .retain(f.index)
                                      .delete(f.length)
                                      .insert(
                                        (function(t, e, n) {
                                          return (
                                            e in t
                                              ? Object.defineProperty(t, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                                })
                                              : (t[e] = n),
                                            t
                                          );
                                        })({}, n, s)
                                      ),
                                    l.default.sources.USER
                                  );
                                } else
                                  e.quill.format(n, s, l.default.sources.USER);
                                e.update(f);
                              }),
                                this.controls.push([n, t]);
                            }
                          }
                        },
                        {
                          key: "update",
                          value: function(t) {
                            var e = null == t ? {} : this.quill.getFormat(t);
                            this.controls.forEach(function(n) {
                              var o = r(n, 2),
                                i = o[0],
                                a = o[1];
                              if ("SELECT" === a.tagName) {
                                var l = void 0;
                                if (null == t) l = null;
                                else if (null == e[i])
                                  l = a.querySelector("option[selected]");
                                else if (!Array.isArray(e[i])) {
                                  var s = e[i];
                                  "string" === typeof s &&
                                    (s = s.replace(/\"/g, '\\"')),
                                    (l = a.querySelector(
                                      'option[value="' + s + '"]'
                                    ));
                                }
                                null == l
                                  ? ((a.value = ""), (a.selectedIndex = -1))
                                  : (l.selected = !0);
                              } else if (null == t)
                                a.classList.remove("ql-active");
                              else if (a.hasAttribute("value")) {
                                var u =
                                  e[i] === a.getAttribute("value") ||
                                  (null != e[i] &&
                                    e[i].toString() ===
                                      a.getAttribute("value")) ||
                                  (null == e[i] && !a.getAttribute("value"));
                                a.classList.toggle("ql-active", u);
                              } else
                                a.classList.toggle("ql-active", null != e[i]);
                            });
                          }
                        }
                      ]),
                      e
                    );
                  })();
                function d(t, e, n) {
                  var r = document.createElement("button");
                  r.setAttribute("type", "button"),
                    r.classList.add("ql-" + e),
                    null != n && (r.value = n),
                    t.appendChild(r);
                }
                function y(t, e) {
                  Array.isArray(e[0]) || (e = [e]),
                    e.forEach(function(e) {
                      var n = document.createElement("span");
                      n.classList.add("ql-formats"),
                        e.forEach(function(t) {
                          if ("string" === typeof t) d(n, t);
                          else {
                            var e = Object.keys(t)[0],
                              r = t[e];
                            Array.isArray(r)
                              ? (function(t, e, n) {
                                  var r = document.createElement("select");
                                  r.classList.add("ql-" + e),
                                    n.forEach(function(t) {
                                      var e = document.createElement("option");
                                      !1 !== t
                                        ? e.setAttribute("value", t)
                                        : e.setAttribute(
                                            "selected",
                                            "selected"
                                          ),
                                        r.appendChild(e);
                                    }),
                                    t.appendChild(r);
                                })(n, e, r)
                              : d(n, e, r);
                          }
                        }),
                        t.appendChild(n);
                    });
                }
                (h.DEFAULTS = {}),
                  (h.DEFAULTS = {
                    container: null,
                    handlers: {
                      clean: function() {
                        var t = this,
                          e = this.quill.getSelection();
                        if (null != e)
                          if (0 == e.length) {
                            var n = this.quill.getFormat();
                            Object.keys(n).forEach(function(e) {
                              null !=
                                a.default.query(e, a.default.Scope.INLINE) &&
                                t.quill.format(e, !1);
                            });
                          } else
                            this.quill.removeFormat(e, l.default.sources.USER);
                      },
                      direction: function(t) {
                        var e = this.quill.getFormat().align;
                        "rtl" === t && null == e
                          ? this.quill.format(
                              "align",
                              "right",
                              l.default.sources.USER
                            )
                          : t ||
                            "right" !== e ||
                            this.quill.format(
                              "align",
                              !1,
                              l.default.sources.USER
                            ),
                          this.quill.format(
                            "direction",
                            t,
                            l.default.sources.USER
                          );
                      },
                      indent: function(t) {
                        var e = this.quill.getSelection(),
                          n = this.quill.getFormat(e),
                          r = parseInt(n.indent || 0);
                        if ("+1" === t || "-1" === t) {
                          var o = "+1" === t ? 1 : -1;
                          "rtl" === n.direction && (o *= -1),
                            this.quill.format(
                              "indent",
                              r + o,
                              l.default.sources.USER
                            );
                        }
                      },
                      link: function(t) {
                        !0 === t && (t = prompt("Enter link URL:")),
                          this.quill.format("link", t, l.default.sources.USER);
                      },
                      list: function(t) {
                        var e = this.quill.getSelection(),
                          n = this.quill.getFormat(e);
                        "check" === t
                          ? "checked" === n.list || "unchecked" === n.list
                            ? this.quill.format(
                                "list",
                                !1,
                                l.default.sources.USER
                              )
                            : this.quill.format(
                                "list",
                                "unchecked",
                                l.default.sources.USER
                              )
                          : this.quill.format(
                              "list",
                              t,
                              l.default.sources.USER
                            );
                      }
                    }
                  }),
                  (e.default = h),
                  (e.addControls = y);
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(28),
                  l = (r = a) && r.__esModule ? r : { default: r };
                var s = (function(t) {
                  function e(t, n) {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r = (function(t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" !== typeof e && "function" !== typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (
                      (r.label.innerHTML = n),
                      r.container.classList.add("ql-color-picker"),
                      [].slice
                        .call(
                          r.container.querySelectorAll(".ql-picker-item"),
                          0,
                          7
                        )
                        .forEach(function(t) {
                          t.classList.add("ql-primary");
                        }),
                      r
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, l.default),
                    o(e, [
                      {
                        key: "buildItem",
                        value: function(t) {
                          var n = i(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "buildItem",
                            this
                          ).call(this, t);
                          return (
                            (n.style.backgroundColor =
                              t.getAttribute("value") || ""),
                            n
                          );
                        }
                      },
                      {
                        key: "selectItem",
                        value: function(t, n) {
                          i(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "selectItem",
                            this
                          ).call(this, t, n);
                          var r = this.label.querySelector(".ql-color-label"),
                            o = (t && t.getAttribute("data-value")) || "";
                          r &&
                            ("line" === r.tagName
                              ? (r.style.stroke = o)
                              : (r.style.fill = o));
                        }
                      }
                    ]),
                    e
                  );
                })();
                e.default = s;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(28),
                  a = (r = i) && r.__esModule ? r : { default: r };
                var l = (function(t) {
                  function e(t, n) {
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r = (function(t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" !== typeof e && "function" !== typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (
                      r.container.classList.add("ql-icon-picker"),
                      [].forEach.call(
                        r.container.querySelectorAll(".ql-picker-item"),
                        function(t) {
                          t.innerHTML = n[t.getAttribute("data-value") || ""];
                        }
                      ),
                      (r.defaultItem = r.container.querySelector(
                        ".ql-selected"
                      )),
                      r.selectItem(r.defaultItem),
                      r
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, a.default),
                    o(e, [
                      {
                        key: "selectItem",
                        value: function(t, n) {
                          (function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                              var i = Object.getPrototypeOf(e);
                              return null === i ? void 0 : t(i, n, r);
                            }
                            if ("value" in o) return o.value;
                            var a = o.get;
                            return void 0 !== a ? a.call(r) : void 0;
                          })(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "selectItem",
                            this
                          ).call(this, t, n),
                            (t = t || this.defaultItem),
                            (this.label.innerHTML = t.innerHTML);
                        }
                      }
                    ]),
                    e
                  );
                })();
                e.default = l;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r);
                    }
                  }
                  return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e;
                  };
                })();
                var o = (function() {
                  function t(e, n) {
                    var r = this;
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this.quill = e),
                      (this.boundsContainer = n || document.body),
                      (this.root = e.addContainer("ql-tooltip")),
                      (this.root.innerHTML = this.constructor.TEMPLATE),
                      this.quill.root === this.quill.scrollingContainer &&
                        this.quill.root.addEventListener("scroll", function() {
                          r.root.style.marginTop =
                            -1 * r.quill.root.scrollTop + "px";
                        }),
                      this.hide();
                  }
                  return (
                    r(t, [
                      {
                        key: "hide",
                        value: function() {
                          this.root.classList.add("ql-hidden");
                        }
                      },
                      {
                        key: "position",
                        value: function(t) {
                          var e =
                              t.left + t.width / 2 - this.root.offsetWidth / 2,
                            n = t.bottom + this.quill.root.scrollTop;
                          (this.root.style.left = e + "px"),
                            (this.root.style.top = n + "px"),
                            this.root.classList.remove("ql-flip");
                          var r = this.boundsContainer.getBoundingClientRect(),
                            o = this.root.getBoundingClientRect(),
                            i = 0;
                          if (
                            (o.right > r.right &&
                              ((i = r.right - o.right),
                              (this.root.style.left = e + i + "px")),
                            o.left < r.left &&
                              ((i = r.left - o.left),
                              (this.root.style.left = e + i + "px")),
                            o.bottom > r.bottom)
                          ) {
                            var a = o.bottom - o.top,
                              l = t.bottom - t.top + a;
                            (this.root.style.top = n - l + "px"),
                              this.root.classList.add("ql-flip");
                          }
                          return i;
                        }
                      },
                      {
                        key: "show",
                        value: function() {
                          this.root.classList.remove("ql-editing"),
                            this.root.classList.remove("ql-hidden");
                        }
                      }
                    ]),
                    t
                  );
                })();
                e.default = o;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function() {
                    return function(t, e) {
                      if (Array.isArray(t)) return t;
                      if (Symbol.iterator in Object(t))
                        return (function(t, e) {
                          var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = t[Symbol.iterator]();
                              !(r = (a = l.next()).done) &&
                              (n.push(a.value), !e || n.length !== e);
                              r = !0
                            );
                          } catch (s) {
                            (o = !0), (i = s);
                          } finally {
                            try {
                              !r && l.return && l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return n;
                        })(t, e);
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = h(n(3)),
                  l = h(n(8)),
                  s = n(43),
                  u = h(s),
                  c = h(n(27)),
                  f = n(15),
                  p = h(n(41));
                function h(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function d(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function y(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                function v(t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var b = [
                    [{ header: ["1", "2", "3", !1] }],
                    ["bold", "italic", "underline", "link"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["clean"]
                  ],
                  g = (function(t) {
                    function e(t, n) {
                      d(this, e),
                        null != n.modules.toolbar &&
                          null == n.modules.toolbar.container &&
                          (n.modules.toolbar.container = b);
                      var r = y(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return r.quill.container.classList.add("ql-snow"), r;
                    }
                    return (
                      v(e, u.default),
                      i(e, [
                        {
                          key: "extendToolbar",
                          value: function(t) {
                            t.container.classList.add("ql-snow"),
                              this.buildButtons(
                                [].slice.call(
                                  t.container.querySelectorAll("button")
                                ),
                                p.default
                              ),
                              this.buildPickers(
                                [].slice.call(
                                  t.container.querySelectorAll("select")
                                ),
                                p.default
                              ),
                              (this.tooltip = new m(
                                this.quill,
                                this.options.bounds
                              )),
                              t.container.querySelector(".ql-link") &&
                                this.quill.keyboard.addBinding(
                                  { key: "K", shortKey: !0 },
                                  function(e, n) {
                                    t.handlers.link.call(t, !n.format.link);
                                  }
                                );
                          }
                        }
                      ]),
                      e
                    );
                  })();
                g.DEFAULTS = (0, a.default)(!0, {}, u.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        link: function(t) {
                          if (t) {
                            var e = this.quill.getSelection();
                            if (null == e || 0 == e.length) return;
                            var n = this.quill.getText(e);
                            /^\S+@\S+\.\S+$/.test(n) &&
                              0 !== n.indexOf("mailto:") &&
                              (n = "mailto:" + n),
                              this.quill.theme.tooltip.edit("link", n);
                          } else this.quill.format("link", !1);
                        }
                      }
                    }
                  }
                });
                var m = (function(t) {
                  function e(t, n) {
                    d(this, e);
                    var r = y(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      (r.preview = r.root.querySelector("a.ql-preview")), r
                    );
                  }
                  return (
                    v(e, s.BaseTooltip),
                    i(e, [
                      {
                        key: "listen",
                        value: function() {
                          var t = this;
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "listen",
                            this
                          ).call(this),
                            this.root
                              .querySelector("a.ql-action")
                              .addEventListener("click", function(e) {
                                t.root.classList.contains("ql-editing")
                                  ? t.save()
                                  : t.edit("link", t.preview.textContent),
                                  e.preventDefault();
                              }),
                            this.root
                              .querySelector("a.ql-remove")
                              .addEventListener("click", function(e) {
                                if (null != t.linkRange) {
                                  var n = t.linkRange;
                                  t.restoreFocus(),
                                    t.quill.formatText(
                                      n,
                                      "link",
                                      !1,
                                      l.default.sources.USER
                                    ),
                                    delete t.linkRange;
                                }
                                e.preventDefault(), t.hide();
                              }),
                            this.quill.on(
                              l.default.events.SELECTION_CHANGE,
                              function(e, n, o) {
                                if (null != e) {
                                  if (
                                    0 === e.length &&
                                    o === l.default.sources.USER
                                  ) {
                                    var i = t.quill.scroll.descendant(
                                        c.default,
                                        e.index
                                      ),
                                      a = r(i, 2),
                                      s = a[0],
                                      u = a[1];
                                    if (null != s) {
                                      t.linkRange = new f.Range(
                                        e.index - u,
                                        s.length()
                                      );
                                      var p = c.default.formats(s.domNode);
                                      return (
                                        (t.preview.textContent = p),
                                        t.preview.setAttribute("href", p),
                                        t.show(),
                                        void t.position(
                                          t.quill.getBounds(t.linkRange)
                                        )
                                      );
                                    }
                                  } else delete t.linkRange;
                                  t.hide();
                                }
                              }
                            );
                        }
                      },
                      {
                        key: "show",
                        value: function() {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "show",
                            this
                          ).call(this),
                            this.root.removeAttribute("data-mode");
                        }
                      }
                    ]),
                    e
                  );
                })();
                (m.TEMPLATE = [
                  '<a class="ql-preview" target="_blank" href="about:blank"></a>',
                  '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
                  '<a class="ql-action"></a>',
                  '<a class="ql-remove"></a>'
                ].join("")),
                  (e.default = g);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = M(n(29)),
                  o = n(36),
                  i = n(38),
                  a = n(64),
                  l = M(n(65)),
                  s = M(n(66)),
                  u = n(67),
                  c = M(u),
                  f = n(37),
                  p = n(26),
                  h = n(39),
                  d = n(40),
                  y = M(n(56)),
                  v = M(n(68)),
                  b = M(n(27)),
                  g = M(n(69)),
                  m = M(n(70)),
                  _ = M(n(71)),
                  w = M(n(72)),
                  x = M(n(73)),
                  O = n(13),
                  E = M(O),
                  k = M(n(74)),
                  A = M(n(75)),
                  N = M(n(57)),
                  j = M(n(41)),
                  S = M(n(28)),
                  T = M(n(59)),
                  P = M(n(60)),
                  C = M(n(61)),
                  q = M(n(108)),
                  L = M(n(62));
                function M(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                r.default.register(
                  {
                    "attributors/attribute/direction": i.DirectionAttribute,
                    "attributors/class/align": o.AlignClass,
                    "attributors/class/background": f.BackgroundClass,
                    "attributors/class/color": p.ColorClass,
                    "attributors/class/direction": i.DirectionClass,
                    "attributors/class/font": h.FontClass,
                    "attributors/class/size": d.SizeClass,
                    "attributors/style/align": o.AlignStyle,
                    "attributors/style/background": f.BackgroundStyle,
                    "attributors/style/color": p.ColorStyle,
                    "attributors/style/direction": i.DirectionStyle,
                    "attributors/style/font": h.FontStyle,
                    "attributors/style/size": d.SizeStyle
                  },
                  !0
                ),
                  r.default.register(
                    {
                      "formats/align": o.AlignClass,
                      "formats/direction": i.DirectionClass,
                      "formats/indent": a.IndentClass,
                      "formats/background": f.BackgroundStyle,
                      "formats/color": p.ColorStyle,
                      "formats/font": h.FontClass,
                      "formats/size": d.SizeClass,
                      "formats/blockquote": l.default,
                      "formats/code-block": E.default,
                      "formats/header": s.default,
                      "formats/list": c.default,
                      "formats/bold": y.default,
                      "formats/code": O.Code,
                      "formats/italic": v.default,
                      "formats/link": b.default,
                      "formats/script": g.default,
                      "formats/strike": m.default,
                      "formats/underline": _.default,
                      "formats/image": w.default,
                      "formats/video": x.default,
                      "formats/list/item": u.ListItem,
                      "modules/formula": k.default,
                      "modules/syntax": A.default,
                      "modules/toolbar": N.default,
                      "themes/bubble": q.default,
                      "themes/snow": L.default,
                      "ui/icons": j.default,
                      "ui/picker": S.default,
                      "ui/icon-picker": P.default,
                      "ui/color-picker": T.default,
                      "ui/tooltip": C.default
                    },
                    !0
                  ),
                  (e.default = r.default);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.IndentClass = void 0);
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(0),
                  l = (r = a) && r.__esModule ? r : { default: r };
                var s = new ((function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, l.default.Attributor.Class),
                    o(e, [
                      {
                        key: "add",
                        value: function(t, n) {
                          if ("+1" === n || "-1" === n) {
                            var r = this.value(t) || 0;
                            n = "+1" === n ? r + 1 : r - 1;
                          }
                          return 0 === n
                            ? (this.remove(t), !0)
                            : i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "add",
                                this
                              ).call(this, t, n);
                        }
                      },
                      {
                        key: "canAdd",
                        value: function(t, n) {
                          return (
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "canAdd",
                              this
                            ).call(this, t, n) ||
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "canAdd",
                              this
                            ).call(this, t, parseInt(n))
                          );
                        }
                      },
                      {
                        key: "value",
                        value: function(t) {
                          return (
                            parseInt(
                              i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "value",
                                this
                              ).call(this, t)
                            ) || void 0
                          );
                        }
                      }
                    ]),
                    e
                  );
                })())("indent", "ql-indent", {
                  scope: l.default.Scope.BLOCK,
                  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
                });
                e.IndentClass = s;
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(4),
                  i = (r = o) && r.__esModule ? r : { default: r };
                var a = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, i.default),
                    e
                  );
                })();
                (a.blotName = "blockquote"),
                  (a.tagName = "blockquote"),
                  (e.default = a);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(4),
                  a = (r = i) && r.__esModule ? r : { default: r };
                var l = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, a.default),
                    o(e, null, [
                      {
                        key: "formats",
                        value: function(t) {
                          return this.tagName.indexOf(t.tagName) + 1;
                        }
                      }
                    ]),
                    e
                  );
                })();
                (l.blotName = "header"),
                  (l.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"]),
                  (e.default = l);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.ListItem = void 0);
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = s(n(0)),
                  a = s(n(4)),
                  l = s(n(25));
                function s(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function u(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function c(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                function f(t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var p = (function(t) {
                  function e() {
                    return (
                      u(this, e),
                      c(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    f(e, a.default),
                    r(
                      e,
                      [
                        {
                          key: "format",
                          value: function(t, n) {
                            t !== h.blotName || n
                              ? o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "format",
                                  this
                                ).call(this, t, n)
                              : this.replaceWith(
                                  i.default.create(this.statics.scope)
                                );
                          }
                        },
                        {
                          key: "remove",
                          value: function() {
                            null == this.prev && null == this.next
                              ? this.parent.remove()
                              : o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "remove",
                                  this
                                ).call(this);
                          }
                        },
                        {
                          key: "replaceWith",
                          value: function(t, n) {
                            return (
                              this.parent.isolate(
                                this.offset(this.parent),
                                this.length()
                              ),
                              t === this.parent.statics.blotName
                                ? (this.parent.replaceWith(t, n), this)
                                : (this.parent.unwrap(),
                                  o(
                                    e.prototype.__proto__ ||
                                      Object.getPrototypeOf(e.prototype),
                                    "replaceWith",
                                    this
                                  ).call(this, t, n))
                            );
                          }
                        }
                      ],
                      [
                        {
                          key: "formats",
                          value: function(t) {
                            return t.tagName === this.tagName
                              ? void 0
                              : o(
                                  e.__proto__ || Object.getPrototypeOf(e),
                                  "formats",
                                  this
                                ).call(this, t);
                          }
                        }
                      ]
                    ),
                    e
                  );
                })();
                (p.blotName = "list-item"), (p.tagName = "LI");
                var h = (function(t) {
                  function e(t) {
                    u(this, e);
                    var n = c(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                      ),
                      r = function(e) {
                        if (e.target.parentNode === t) {
                          var r = n.statics.formats(t),
                            o = i.default.find(e.target);
                          "checked" === r
                            ? o.format("list", "unchecked")
                            : "unchecked" === r && o.format("list", "checked");
                        }
                      };
                    return (
                      t.addEventListener("touchstart", r),
                      t.addEventListener("mousedown", r),
                      n
                    );
                  }
                  return (
                    f(e, l.default),
                    r(e, null, [
                      {
                        key: "create",
                        value: function(t) {
                          var n = "ordered" === t ? "OL" : "UL",
                            r = o(
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this, n);
                          return (
                            ("checked" !== t && "unchecked" !== t) ||
                              r.setAttribute("data-checked", "checked" === t),
                            r
                          );
                        }
                      },
                      {
                        key: "formats",
                        value: function(t) {
                          return "OL" === t.tagName
                            ? "ordered"
                            : "UL" === t.tagName
                            ? t.hasAttribute("data-checked")
                              ? "true" === t.getAttribute("data-checked")
                                ? "checked"
                                : "unchecked"
                              : "bullet"
                            : void 0;
                        }
                      }
                    ]),
                    r(e, [
                      {
                        key: "format",
                        value: function(t, e) {
                          this.children.length > 0 &&
                            this.children.tail.format(t, e);
                        }
                      },
                      {
                        key: "formats",
                        value: function() {
                          return (
                            (t = {}),
                            (e = this.statics.blotName),
                            (n = this.statics.formats(this.domNode)),
                            e in t
                              ? Object.defineProperty(t, e, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                                })
                              : (t[e] = n),
                            t
                          );
                          var t, e, n;
                        }
                      },
                      {
                        key: "insertBefore",
                        value: function(t, n) {
                          if (t instanceof p)
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "insertBefore",
                              this
                            ).call(this, t, n);
                          else {
                            var r = null == n ? this.length() : n.offset(this),
                              i = this.split(r);
                            i.parent.insertBefore(t, i);
                          }
                        }
                      },
                      {
                        key: "optimize",
                        value: function(t) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "optimize",
                            this
                          ).call(this, t);
                          var n = this.next;
                          null != n &&
                            n.prev === this &&
                            n.statics.blotName === this.statics.blotName &&
                            n.domNode.tagName === this.domNode.tagName &&
                            n.domNode.getAttribute("data-checked") ===
                              this.domNode.getAttribute("data-checked") &&
                            (n.moveChildren(this), n.remove());
                        }
                      },
                      {
                        key: "replace",
                        value: function(t) {
                          if (t.statics.blotName !== this.statics.blotName) {
                            var n = i.default.create(this.statics.defaultChild);
                            t.moveChildren(n), this.appendChild(n);
                          }
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "replace",
                            this
                          ).call(this, t);
                        }
                      }
                    ]),
                    e
                  );
                })();
                (h.blotName = "list"),
                  (h.scope = i.default.Scope.BLOCK_BLOT),
                  (h.tagName = ["OL", "UL"]),
                  (h.defaultChild = "list-item"),
                  (h.allowedChildren = [p]),
                  (e.ListItem = p),
                  (e.default = h);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(56),
                  i = (r = o) && r.__esModule ? r : { default: r };
                var a = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, i.default),
                    e
                  );
                })();
                (a.blotName = "italic"),
                  (a.tagName = ["EM", "I"]),
                  (e.default = a);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(6),
                  a = (r = i) && r.__esModule ? r : { default: r };
                var l = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, a.default),
                    o(e, null, [
                      {
                        key: "create",
                        value: function(t) {
                          return "super" === t
                            ? document.createElement("sup")
                            : "sub" === t
                            ? document.createElement("sub")
                            : (function t(e, n, r) {
                                null === e && (e = Function.prototype);
                                var o = Object.getOwnPropertyDescriptor(e, n);
                                if (void 0 === o) {
                                  var i = Object.getPrototypeOf(e);
                                  return null === i ? void 0 : t(i, n, r);
                                }
                                if ("value" in o) return o.value;
                                var a = o.get;
                                return void 0 !== a ? a.call(r) : void 0;
                              })(
                                e.__proto__ || Object.getPrototypeOf(e),
                                "create",
                                this
                              ).call(this, t);
                        }
                      },
                      {
                        key: "formats",
                        value: function(t) {
                          return "SUB" === t.tagName
                            ? "sub"
                            : "SUP" === t.tagName
                            ? "super"
                            : void 0;
                        }
                      }
                    ]),
                    e
                  );
                })();
                (l.blotName = "script"),
                  (l.tagName = ["SUB", "SUP"]),
                  (e.default = l);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(6),
                  i = (r = o) && r.__esModule ? r : { default: r };
                var a = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, i.default),
                    e
                  );
                })();
                (a.blotName = "strike"), (a.tagName = "S"), (e.default = a);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(6),
                  i = (r = o) && r.__esModule ? r : { default: r };
                var a = (function(t) {
                  function e() {
                    return (
                      (function(t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                      (function(t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" !== typeof e && "function" !== typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function(t, e) {
                      if ("function" !== typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, i.default),
                    e
                  );
                })();
                (a.blotName = "underline"), (a.tagName = "U"), (e.default = a);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(0),
                  l = (r = a) && r.__esModule ? r : { default: r },
                  s = n(27);
                var u = ["alt", "height", "width"],
                  c = (function(t) {
                    function e() {
                      return (
                        (function(t, e) {
                          if (!(t instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, e),
                        (function(t, e) {
                          if (!t)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return !e ||
                            ("object" !== typeof e && "function" !== typeof e)
                            ? t
                            : e;
                        })(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).apply(
                            this,
                            arguments
                          )
                        )
                      );
                    }
                    return (
                      (function(t, e) {
                        if ("function" !== typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, l.default.Embed),
                      o(
                        e,
                        [
                          {
                            key: "format",
                            value: function(t, n) {
                              u.indexOf(t) > -1
                                ? n
                                  ? this.domNode.setAttribute(t, n)
                                  : this.domNode.removeAttribute(t)
                                : i(
                                    e.prototype.__proto__ ||
                                      Object.getPrototypeOf(e.prototype),
                                    "format",
                                    this
                                  ).call(this, t, n);
                            }
                          }
                        ],
                        [
                          {
                            key: "create",
                            value: function(t) {
                              var n = i(
                                e.__proto__ || Object.getPrototypeOf(e),
                                "create",
                                this
                              ).call(this, t);
                              return (
                                "string" === typeof t &&
                                  n.setAttribute("src", this.sanitize(t)),
                                n
                              );
                            }
                          },
                          {
                            key: "formats",
                            value: function(t) {
                              return u.reduce(function(e, n) {
                                return (
                                  t.hasAttribute(n) &&
                                    (e[n] = t.getAttribute(n)),
                                  e
                                );
                              }, {});
                            }
                          },
                          {
                            key: "match",
                            value: function(t) {
                              return (
                                /\.(jpe?g|gif|png)$/.test(t) ||
                                /^data:image\/.+;base64/.test(t)
                              );
                            }
                          },
                          {
                            key: "sanitize",
                            value: function(t) {
                              return (0, s.sanitize)(t, [
                                "http",
                                "https",
                                "data"
                              ])
                                ? t
                                : "//:0";
                            }
                          },
                          {
                            key: "value",
                            value: function(t) {
                              return t.getAttribute("src");
                            }
                          }
                        ]
                      ),
                      e
                    );
                  })();
                (c.blotName = "image"), (c.tagName = "IMG"), (e.default = c);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(4),
                  l = n(27),
                  s = (r = l) && r.__esModule ? r : { default: r };
                var u = ["height", "width"],
                  c = (function(t) {
                    function e() {
                      return (
                        (function(t, e) {
                          if (!(t instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, e),
                        (function(t, e) {
                          if (!t)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return !e ||
                            ("object" !== typeof e && "function" !== typeof e)
                            ? t
                            : e;
                        })(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).apply(
                            this,
                            arguments
                          )
                        )
                      );
                    }
                    return (
                      (function(t, e) {
                        if ("function" !== typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, a.BlockEmbed),
                      o(
                        e,
                        [
                          {
                            key: "format",
                            value: function(t, n) {
                              u.indexOf(t) > -1
                                ? n
                                  ? this.domNode.setAttribute(t, n)
                                  : this.domNode.removeAttribute(t)
                                : i(
                                    e.prototype.__proto__ ||
                                      Object.getPrototypeOf(e.prototype),
                                    "format",
                                    this
                                  ).call(this, t, n);
                            }
                          }
                        ],
                        [
                          {
                            key: "create",
                            value: function(t) {
                              var n = i(
                                e.__proto__ || Object.getPrototypeOf(e),
                                "create",
                                this
                              ).call(this, t);
                              return (
                                n.setAttribute("frameborder", "0"),
                                n.setAttribute("allowfullscreen", !0),
                                n.setAttribute("src", this.sanitize(t)),
                                n
                              );
                            }
                          },
                          {
                            key: "formats",
                            value: function(t) {
                              return u.reduce(function(e, n) {
                                return (
                                  t.hasAttribute(n) &&
                                    (e[n] = t.getAttribute(n)),
                                  e
                                );
                              }, {});
                            }
                          },
                          {
                            key: "sanitize",
                            value: function(t) {
                              return s.default.sanitize(t);
                            }
                          },
                          {
                            key: "value",
                            value: function(t) {
                              return t.getAttribute("src");
                            }
                          }
                        ]
                      ),
                      e
                    );
                  })();
                (c.blotName = "video"),
                  (c.className = "ql-video"),
                  (c.tagName = "IFRAME"),
                  (e.default = c);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.FormulaBlot = void 0);
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = l(n(35)),
                  i = l(n(5)),
                  a = l(n(9));
                function l(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function s(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function u(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                function c(t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var f = (function(t) {
                  function e() {
                    return (
                      s(this, e),
                      u(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    c(e, o.default),
                    r(e, null, [
                      {
                        key: "create",
                        value: function(t) {
                          var n = (function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                              var i = Object.getPrototypeOf(e);
                              return null === i ? void 0 : t(i, n, r);
                            }
                            if ("value" in o) return o.value;
                            var a = o.get;
                            return void 0 !== a ? a.call(r) : void 0;
                          })(
                            e.__proto__ || Object.getPrototypeOf(e),
                            "create",
                            this
                          ).call(this, t);
                          return (
                            "string" === typeof t &&
                              (window.katex.render(t, n, {
                                throwOnError: !1,
                                errorColor: "#f00"
                              }),
                              n.setAttribute("data-value", t)),
                            n
                          );
                        }
                      },
                      {
                        key: "value",
                        value: function(t) {
                          return t.getAttribute("data-value");
                        }
                      }
                    ]),
                    e
                  );
                })();
                (f.blotName = "formula"),
                  (f.className = "ql-formula"),
                  (f.tagName = "SPAN");
                var p = (function(t) {
                  function e() {
                    s(this, e);
                    var t = u(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                    );
                    if (null == window.katex)
                      throw new Error("Formula module requires KaTeX.");
                    return t;
                  }
                  return (
                    c(e, a.default),
                    r(e, null, [
                      {
                        key: "register",
                        value: function() {
                          i.default.register(f, !0);
                        }
                      }
                    ]),
                    e
                  );
                })();
                (e.FormulaBlot = f), (e.default = p);
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.CodeToken = e.CodeBlock = void 0);
                var r = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = s(n(0)),
                  i = s(n(5)),
                  a = s(n(9)),
                  l = s(n(13));
                function s(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function u(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function c(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                function f(t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var p = (function(t) {
                  function e() {
                    return (
                      u(this, e),
                      c(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    f(e, l.default),
                    r(e, [
                      {
                        key: "replaceWith",
                        value: function(t) {
                          (this.domNode.textContent = this.domNode.textContent),
                            this.attach(),
                            (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "replaceWith",
                              this
                            ).call(this, t);
                        }
                      },
                      {
                        key: "highlight",
                        value: function(t) {
                          var e = this.domNode.textContent;
                          this.cachedText !== e &&
                            ((e.trim().length > 0 || null == this.cachedText) &&
                              ((this.domNode.innerHTML = t(e)),
                              this.domNode.normalize(),
                              this.attach()),
                            (this.cachedText = e));
                        }
                      }
                    ]),
                    e
                  );
                })();
                p.className = "ql-syntax";
                var h = new o.default.Attributor.Class("token", "hljs", {
                    scope: o.default.Scope.INLINE
                  }),
                  d = (function(t) {
                    function e(t, n) {
                      u(this, e);
                      var r = c(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      if ("function" !== typeof r.options.highlight)
                        throw new Error(
                          "Syntax module requires highlight.js. Please include the library on the page before Quill."
                        );
                      var o = null;
                      return (
                        r.quill.on(
                          i.default.events.SCROLL_OPTIMIZE,
                          function() {
                            clearTimeout(o),
                              (o = setTimeout(function() {
                                r.highlight(), (o = null);
                              }, r.options.interval));
                          }
                        ),
                        r.highlight(),
                        r
                      );
                    }
                    return (
                      f(e, a.default),
                      r(e, null, [
                        {
                          key: "register",
                          value: function() {
                            i.default.register(h, !0),
                              i.default.register(p, !0);
                          }
                        }
                      ]),
                      r(e, [
                        {
                          key: "highlight",
                          value: function() {
                            var t = this;
                            if (!this.quill.selection.composing) {
                              this.quill.update(i.default.sources.USER);
                              var e = this.quill.getSelection();
                              this.quill.scroll
                                .descendants(p)
                                .forEach(function(e) {
                                  e.highlight(t.options.highlight);
                                }),
                                this.quill.update(i.default.sources.SILENT),
                                null != e &&
                                  this.quill.setSelection(
                                    e,
                                    i.default.sources.SILENT
                                  );
                            }
                          }
                        }
                      ]),
                      e
                    );
                  })();
                (d.DEFAULTS = {
                  highlight:
                    null == window.hljs
                      ? null
                      : function(t) {
                          return window.hljs.highlightAuto(t).value;
                        },
                  interval: 1e3
                }),
                  (e.CodeBlock = p),
                  (e.CodeToken = h),
                  (e.default = d);
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
              },
              function(t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
              },
              function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.BubbleTooltip = void 0);
                var r = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  o = (function() {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function(e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = f(n(3)),
                  a = f(n(8)),
                  l = n(43),
                  s = f(l),
                  u = n(15),
                  c = f(n(41));
                function f(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function p(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function h(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e ||
                    ("object" !== typeof e && "function" !== typeof e)
                    ? t
                    : e;
                }
                function d(t, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var y = [
                    ["bold", "italic", "link"],
                    [{ header: 1 }, { header: 2 }, "blockquote"]
                  ],
                  v = (function(t) {
                    function e(t, n) {
                      p(this, e),
                        null != n.modules.toolbar &&
                          null == n.modules.toolbar.container &&
                          (n.modules.toolbar.container = y);
                      var r = h(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return r.quill.container.classList.add("ql-bubble"), r;
                    }
                    return (
                      d(e, s.default),
                      o(e, [
                        {
                          key: "extendToolbar",
                          value: function(t) {
                            (this.tooltip = new b(
                              this.quill,
                              this.options.bounds
                            )),
                              this.tooltip.root.appendChild(t.container),
                              this.buildButtons(
                                [].slice.call(
                                  t.container.querySelectorAll("button")
                                ),
                                c.default
                              ),
                              this.buildPickers(
                                [].slice.call(
                                  t.container.querySelectorAll("select")
                                ),
                                c.default
                              );
                          }
                        }
                      ]),
                      e
                    );
                  })();
                v.DEFAULTS = (0, i.default)(!0, {}, s.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        link: function(t) {
                          t
                            ? this.quill.theme.tooltip.edit()
                            : this.quill.format("link", !1);
                        }
                      }
                    }
                  }
                });
                var b = (function(t) {
                  function e(t, n) {
                    p(this, e);
                    var r = h(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      r.quill.on(a.default.events.EDITOR_CHANGE, function(
                        t,
                        e,
                        n,
                        o
                      ) {
                        if (t === a.default.events.SELECTION_CHANGE)
                          if (
                            null != e &&
                            e.length > 0 &&
                            o === a.default.sources.USER
                          ) {
                            r.show(),
                              (r.root.style.left = "0px"),
                              (r.root.style.width = ""),
                              (r.root.style.width = r.root.offsetWidth + "px");
                            var i = r.quill.getLines(e.index, e.length);
                            if (1 === i.length)
                              r.position(r.quill.getBounds(e));
                            else {
                              var l = i[i.length - 1],
                                s = r.quill.getIndex(l),
                                c = Math.min(
                                  l.length() - 1,
                                  e.index + e.length - s
                                ),
                                f = r.quill.getBounds(new u.Range(s, c));
                              r.position(f);
                            }
                          } else
                            document.activeElement !== r.textbox &&
                              r.quill.hasFocus() &&
                              r.hide();
                      }),
                      r
                    );
                  }
                  return (
                    d(e, l.BaseTooltip),
                    o(e, [
                      {
                        key: "listen",
                        value: function() {
                          var t = this;
                          r(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "listen",
                            this
                          ).call(this),
                            this.root
                              .querySelector(".ql-close")
                              .addEventListener("click", function() {
                                t.root.classList.remove("ql-editing");
                              }),
                            this.quill.on(
                              a.default.events.SCROLL_OPTIMIZE,
                              function() {
                                setTimeout(function() {
                                  if (!t.root.classList.contains("ql-hidden")) {
                                    var e = t.quill.getSelection();
                                    null != e &&
                                      t.position(t.quill.getBounds(e));
                                  }
                                }, 1);
                              }
                            );
                        }
                      },
                      {
                        key: "cancel",
                        value: function() {
                          this.show();
                        }
                      },
                      {
                        key: "position",
                        value: function(t) {
                          var n = r(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "position",
                              this
                            ).call(this, t),
                            o = this.root.querySelector(".ql-tooltip-arrow");
                          if (((o.style.marginLeft = ""), 0 === n)) return n;
                          o.style.marginLeft =
                            -1 * n - o.offsetWidth / 2 + "px";
                        }
                      }
                    ]),
                    e
                  );
                })();
                (b.TEMPLATE = [
                  '<span class="ql-tooltip-arrow"></span>',
                  '<div class="ql-tooltip-editor">',
                  '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
                  '<a class="ql-close"></a>',
                  "</div>"
                ].join("")),
                  (e.BubbleTooltip = b),
                  (e.default = v);
              },
              function(t, e, n) {
                t.exports = n(63);
              }
            ]).default;
          }),
          (t.exports = n());
      }.call(this, n(551).Buffer));
    },
    function(t, e, n) {
      "use strict";
      var r = n(1),
        o = n(556);
      if ("undefined" === typeof r)
        throw Error(
          "create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class."
        );
      var i = new r.Component().updater;
      t.exports = o(r.Component, r.isValidElement, i);
    },
    function(t, e, n) {
      "use strict";
      var r = n(489),
        o = {
          createEditor: function(t, e) {
            var n = new r(t, e);
            return (
              void 0 !== e.tabIndex && this.setEditorTabIndex(n, e.tabIndex),
              this.hookEditor(n),
              n
            );
          },
          hookEditor: function(t) {
            var e = this.makeUnprivilegedEditor(t);
            (this.handleTextChange = function(n, r, o) {
              this.onEditorChangeText &&
                (this.onEditorChangeText(t.root.innerHTML, n, o, e),
                this.onEditorChangeSelection(t.getSelection(), o, e));
            }.bind(this)),
              (this.handleSelectionChange = function(t, n, r) {
                this.onEditorChangeSelection &&
                  this.onEditorChangeSelection(t, r, e);
              }.bind(this)),
              t.on(
                "editor-change",
                function(t, e, n, o) {
                  t === r.events.SELECTION_CHANGE &&
                    this.handleSelectionChange(e, n, o),
                    t === r.events.TEXT_CHANGE &&
                      this.handleTextChange(e, n, o);
                }.bind(this)
              );
          },
          unhookEditor: function(t) {
            t.off("selection-change"), t.off("text-change");
          },
          setEditorReadOnly: function(t, e) {
            e ? t.disable() : t.enable();
          },
          setEditorContents: function(t, e) {
            var n = t.getSelection();
            "string" === typeof e
              ? t.setContents(t.clipboard.convert(e))
              : t.setContents(e),
              n && t.hasFocus() && this.setEditorSelection(t, n);
          },
          setEditorSelection: function(t, e) {
            if (e) {
              var n = t.getLength();
              (e.index = Math.max(0, Math.min(e.index, n - 1))),
                (e.length = Math.max(0, Math.min(e.length, n - 1 - e.index)));
            }
            t.setSelection(e);
          },
          setEditorTabIndex: function(t, e) {
            t.editor &&
              t.editor.scroll &&
              t.editor.scroll.domNode &&
              (t.editor.scroll.domNode.tabIndex = e);
          },
          makeUnprivilegedEditor: function(t) {
            var e = t;
            return {
              getLength: function() {
                return e.getLength.apply(e, arguments);
              },
              getText: function() {
                return e.getText.apply(e, arguments);
              },
              getHTML: function() {
                return e.root.innerHTML;
              },
              getContents: function() {
                return e.getContents.apply(e, arguments);
              },
              getSelection: function() {
                return e.getSelection.apply(e, arguments);
              },
              getBounds: function() {
                return e.getBounds.apply(e, arguments);
              }
            };
          }
        };
      t.exports = o;
    },
    function(t, e, n) {
      var r = n(559)(n(638));
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(463),
        o = n(567),
        i = n(568),
        a = n(569),
        l = n(570),
        s = n(571);
      function u(t) {
        var e = (this.__data__ = new r(t));
        this.size = e.size;
      }
      (u.prototype.clear = o),
        (u.prototype.delete = i),
        (u.prototype.get = a),
        (u.prototype.has = l),
        (u.prototype.set = s),
        (t.exports = u);
    },
    function(t, e, n) {
      var r = n(459),
        o = n(460),
        i = "[object AsyncFunction]",
        a = "[object Function]",
        l = "[object GeneratorFunction]",
        s = "[object Proxy]";
      t.exports = function(t) {
        if (!o(t)) return !1;
        var e = r(t);
        return e == a || e == l || e == i || e == s;
      };
    },
    function(t, e, n) {
      (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }.call(this, n(38)));
    },
    function(t, e) {
      var n = Function.prototype.toString;
      t.exports = function(t) {
        if (null != t) {
          try {
            return n.call(t);
          } catch (e) {}
          try {
            return t + "";
          } catch (e) {}
        }
        return "";
      };
    },
    function(t, e, n) {
      var r = n(591),
        o = n(498),
        i = n(594),
        a = 1,
        l = 2;
      t.exports = function(t, e, n, s, u, c) {
        var f = n & a,
          p = t.length,
          h = e.length;
        if (p != h && !(f && h > p)) return !1;
        var d = c.get(t);
        if (d && c.get(e)) return d == e;
        var y = -1,
          v = !0,
          b = n & l ? new r() : void 0;
        for (c.set(t, e), c.set(e, t); ++y < p; ) {
          var g = t[y],
            m = e[y];
          if (s) var _ = f ? s(m, g, y, e, t, c) : s(g, m, y, t, e, c);
          if (void 0 !== _) {
            if (_) continue;
            v = !1;
            break;
          }
          if (b) {
            if (
              !o(e, function(t, e) {
                if (!i(b, e) && (g === t || u(g, t, n, s, c))) return b.push(e);
              })
            ) {
              v = !1;
              break;
            }
          } else if (g !== m && !u(g, m, n, s, c)) {
            v = !1;
            break;
          }
        }
        return c.delete(t), c.delete(e), v;
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      };
    },
    function(t, e, n) {
      var r = n(608),
        o = n(461),
        i = Object.prototype,
        a = i.hasOwnProperty,
        l = i.propertyIsEnumerable,
        s = r(
          (function() {
            return arguments;
          })()
        )
          ? r
          : function(t) {
              return o(t) && a.call(t, "callee") && !l.call(t, "callee");
            };
      t.exports = s;
    },
    function(t, e, n) {
      (function(t) {
        var r = n(448),
          o = n(609),
          i = e && !e.nodeType && e,
          a = i && "object" == typeof t && t && !t.nodeType && t,
          l = a && a.exports === i ? r.Buffer : void 0,
          s = (l ? l.isBuffer : void 0) || o;
        t.exports = s;
      }.call(this, n(201)(t)));
    },
    function(t, e, n) {
      var r = n(610),
        o = n(611),
        i = n(612),
        a = i && i.isTypedArray,
        l = a ? o(a) : r;
      t.exports = l;
    },
    function(t, e, n) {
      var r = n(460);
      t.exports = function(t) {
        return t === t && !r(t);
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return function(n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      };
    },
    function(t, e, n) {
      var r = n(505),
        o = n(471);
      t.exports = function(t, e) {
        for (var n = 0, i = (e = r(e, t)).length; null != t && n < i; )
          t = t[o(e[n++])];
        return n && n == i ? t : void 0;
      };
    },
    function(t, e, n) {
      var r = n(449),
        o = n(486),
        i = n(625),
        a = n(628);
      t.exports = function(t, e) {
        return r(t) ? t : o(t, e) ? [t] : i(a(t));
      };
    },
    function(t, e, n) {
      var r = n(483);
      t.exports = function(t, e) {
        return r(t, e);
      };
    },
    function(t, e, n) {
      "use strict";
      t.exports = (function(t) {
        function e(e) {
          var n = t.createElement.bind(null, e);
          return (n.type = e), n;
        }
        return {
          a: e("a"),
          abbr: e("abbr"),
          address: e("address"),
          area: e("area"),
          article: e("article"),
          aside: e("aside"),
          audio: e("audio"),
          b: e("b"),
          base: e("base"),
          bdi: e("bdi"),
          bdo: e("bdo"),
          big: e("big"),
          blockquote: e("blockquote"),
          body: e("body"),
          br: e("br"),
          button: e("button"),
          canvas: e("canvas"),
          caption: e("caption"),
          cite: e("cite"),
          code: e("code"),
          col: e("col"),
          colgroup: e("colgroup"),
          data: e("data"),
          datalist: e("datalist"),
          dd: e("dd"),
          del: e("del"),
          details: e("details"),
          dfn: e("dfn"),
          dialog: e("dialog"),
          div: e("div"),
          dl: e("dl"),
          dt: e("dt"),
          em: e("em"),
          embed: e("embed"),
          fieldset: e("fieldset"),
          figcaption: e("figcaption"),
          figure: e("figure"),
          footer: e("footer"),
          form: e("form"),
          h1: e("h1"),
          h2: e("h2"),
          h3: e("h3"),
          h4: e("h4"),
          h5: e("h5"),
          h6: e("h6"),
          head: e("head"),
          header: e("header"),
          hgroup: e("hgroup"),
          hr: e("hr"),
          html: e("html"),
          i: e("i"),
          iframe: e("iframe"),
          img: e("img"),
          input: e("input"),
          ins: e("ins"),
          kbd: e("kbd"),
          keygen: e("keygen"),
          label: e("label"),
          legend: e("legend"),
          li: e("li"),
          link: e("link"),
          main: e("main"),
          map: e("map"),
          mark: e("mark"),
          menu: e("menu"),
          menuitem: e("menuitem"),
          meta: e("meta"),
          meter: e("meter"),
          nav: e("nav"),
          noscript: e("noscript"),
          object: e("object"),
          ol: e("ol"),
          optgroup: e("optgroup"),
          option: e("option"),
          output: e("output"),
          p: e("p"),
          param: e("param"),
          picture: e("picture"),
          pre: e("pre"),
          progress: e("progress"),
          q: e("q"),
          rp: e("rp"),
          rt: e("rt"),
          ruby: e("ruby"),
          s: e("s"),
          samp: e("samp"),
          script: e("script"),
          section: e("section"),
          select: e("select"),
          small: e("small"),
          source: e("source"),
          span: e("span"),
          strong: e("strong"),
          style: e("style"),
          sub: e("sub"),
          summary: e("summary"),
          sup: e("sup"),
          table: e("table"),
          tbody: e("tbody"),
          td: e("td"),
          textarea: e("textarea"),
          tfoot: e("tfoot"),
          th: e("th"),
          thead: e("thead"),
          time: e("time"),
          title: e("title"),
          tr: e("tr"),
          track: e("track"),
          u: e("u"),
          ul: e("ul"),
          var: e("var"),
          video: e("video"),
          wbr: e("wbr"),
          circle: e("circle"),
          clipPath: e("clipPath"),
          defs: e("defs"),
          ellipse: e("ellipse"),
          g: e("g"),
          image: e("image"),
          line: e("line"),
          linearGradient: e("linearGradient"),
          mask: e("mask"),
          path: e("path"),
          pattern: e("pattern"),
          polygon: e("polygon"),
          polyline: e("polyline"),
          radialGradient: e("radialGradient"),
          rect: e("rect"),
          stop: e("stop"),
          svg: e("svg"),
          text: e("text"),
          tspan: e("tspan")
        };
      })(n(1));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      var r = n(489),
        o = n(555);
      (t.exports = o),
        (t.exports.default = o),
        (t.exports.Quill = r),
        (t.exports.Mixin = n(491)),
        (t.exports.Toolbar = n(651));
    },
    function(t, e, n) {
      "use strict";
      (function(t) {
        var r = n(552),
          o = n(553),
          i = n(554);
        function a() {
          return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function l(t, e) {
          if (a() < e) throw new RangeError("Invalid typed array length");
          return (
            s.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = s.prototype)
              : (null === t && (t = new s(e)), (t.length = e)),
            t
          );
        }
        function s(t, e, n) {
          if (!s.TYPED_ARRAY_SUPPORT && !(this instanceof s))
            return new s(t, e, n);
          if ("number" === typeof t) {
            if ("string" === typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return f(this, t);
          }
          return u(this, t, e, n);
        }
        function u(t, e, n, r) {
          if ("number" === typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function(t, e, n, r) {
                if ((e.byteLength, n < 0 || e.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(e)
                    : void 0 === r
                    ? new Uint8Array(e, n)
                    : new Uint8Array(e, n, r);
                s.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = s.prototype)
                  : (t = p(t, e));
                return t;
              })(t, e, n, r)
            : "string" === typeof e
            ? (function(t, e, n) {
                ("string" === typeof n && "" !== n) || (n = "utf8");
                if (!s.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | d(e, n),
                  o = (t = l(t, r)).write(e, n);
                o !== r && (t = t.slice(0, o));
                return t;
              })(t, e, n)
            : (function(t, e) {
                if (s.isBuffer(e)) {
                  var n = 0 | h(e.length);
                  return 0 === (t = l(t, n)).length
                    ? t
                    : (e.copy(t, 0, 0, n), t);
                }
                if (e) {
                  if (
                    ("undefined" !== typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" !== typeof e.length || (r = e.length) !== r
                      ? l(t, 0)
                      : p(t, e);
                  if ("Buffer" === e.type && i(e.data)) return p(t, e.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function c(t) {
          if ("number" !== typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function f(t, e) {
          if ((c(e), (t = l(t, e < 0 ? 0 : 0 | h(e))), !s.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < e; ++n) t[n] = 0;
          return t;
        }
        function p(t, e) {
          var n = e.length < 0 ? 0 : 0 | h(e.length);
          t = l(t, n);
          for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
          return t;
        }
        function h(t) {
          if (t >= a())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function d(t, e) {
          if (s.isBuffer(t)) return t.length;
          if (
            "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" !== typeof t && (t = "" + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return U(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return F(t).length;
              default:
                if (r) return U(t).length;
                (e = ("" + e).toLowerCase()), (r = !0);
            }
        }
        function y(t, e, n) {
          var r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function v(t, e, n, r, o) {
          if (0 === t.length) return -1;
          if (
            ("string" === typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = o ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (o) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!o) return -1;
            n = 0;
          }
          if (("string" === typeof e && (e = s.from(e, r)), s.isBuffer(e)))
            return 0 === e.length ? -1 : b(t, e, n, r, o);
          if ("number" === typeof e)
            return (
              (e &= 255),
              s.TYPED_ARRAY_SUPPORT &&
              "function" === typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : b(t, [e], n, r, o)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function b(t, e, n, r, o) {
          var i,
            a = 1,
            l = t.length,
            s = e.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (a = 2), (l /= 2), (s /= 2), (n /= 2);
          }
          function u(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
          }
          if (o) {
            var c = -1;
            for (i = n; i < l; i++)
              if (u(t, i) === u(e, -1 === c ? 0 : i - c)) {
                if ((-1 === c && (c = i), i - c + 1 === s)) return c * a;
              } else -1 !== c && (i -= i - c), (c = -1);
          } else
            for (n + s > l && (n = l - s), i = n; i >= 0; i--) {
              for (var f = !0, p = 0; p < s; p++)
                if (u(t, i + p) !== u(e, p)) {
                  f = !1;
                  break;
                }
              if (f) return i;
            }
          return -1;
        }
        function g(t, e, n, r) {
          n = Number(n) || 0;
          var o = t.length - n;
          r ? (r = Number(r)) > o && (r = o) : (r = o);
          var i = e.length;
          if (i % 2 !== 0) throw new TypeError("Invalid hex string");
          r > i / 2 && (r = i / 2);
          for (var a = 0; a < r; ++a) {
            var l = parseInt(e.substr(2 * a, 2), 16);
            if (isNaN(l)) return a;
            t[n + a] = l;
          }
          return a;
        }
        function m(t, e, n, r) {
          return z(U(e, t.length - n), t, n, r);
        }
        function _(t, e, n, r) {
          return z(
            (function(t) {
              for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            r
          );
        }
        function w(t, e, n, r) {
          return _(t, e, n, r);
        }
        function x(t, e, n, r) {
          return z(F(e), t, n, r);
        }
        function O(t, e, n, r) {
          return z(
            (function(t, e) {
              for (
                var n, r, o, i = [], a = 0;
                a < t.length && !((e -= 2) < 0);
                ++a
              )
                (n = t.charCodeAt(a)),
                  (r = n >> 8),
                  (o = n % 256),
                  i.push(o),
                  i.push(r);
              return i;
            })(e, t.length - n),
            t,
            n,
            r
          );
        }
        function E(t, e, n) {
          return 0 === e && n === t.length
            ? r.fromByteArray(t)
            : r.fromByteArray(t.slice(e, n));
        }
        function k(t, e, n) {
          n = Math.min(t.length, n);
          for (var r = [], o = e; o < n; ) {
            var i,
              a,
              l,
              s,
              u = t[o],
              c = null,
              f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (o + f <= n)
              switch (f) {
                case 1:
                  u < 128 && (c = u);
                  break;
                case 2:
                  128 === (192 & (i = t[o + 1])) &&
                    (s = ((31 & u) << 6) | (63 & i)) > 127 &&
                    (c = s);
                  break;
                case 3:
                  (i = t[o + 1]),
                    (a = t[o + 2]),
                    128 === (192 & i) &&
                      128 === (192 & a) &&
                      (s = ((15 & u) << 12) | ((63 & i) << 6) | (63 & a)) >
                        2047 &&
                      (s < 55296 || s > 57343) &&
                      (c = s);
                  break;
                case 4:
                  (i = t[o + 1]),
                    (a = t[o + 2]),
                    (l = t[o + 3]),
                    128 === (192 & i) &&
                      128 === (192 & a) &&
                      128 === (192 & l) &&
                      (s =
                        ((15 & u) << 18) |
                        ((63 & i) << 12) |
                        ((63 & a) << 6) |
                        (63 & l)) > 65535 &&
                      s < 1114112 &&
                      (c = s);
              }
            null === c
              ? ((c = 65533), (f = 1))
              : c > 65535 &&
                ((c -= 65536),
                r.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              r.push(c),
              (o += f);
          }
          return (function(t) {
            var e = t.length;
            if (e <= A) return String.fromCharCode.apply(String, t);
            var n = "",
              r = 0;
            for (; r < e; )
              n += String.fromCharCode.apply(String, t.slice(r, (r += A)));
            return n;
          })(r);
        }
        (e.Buffer = s),
          (e.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return s.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (s.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42;
                        }
                      }),
                      42 === t.foo() &&
                        "function" === typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = a()),
          (s.poolSize = 8192),
          (s._augment = function(t) {
            return (t.__proto__ = s.prototype), t;
          }),
          (s.from = function(t, e, n) {
            return u(null, t, e, n);
          }),
          s.TYPED_ARRAY_SUPPORT &&
            ((s.prototype.__proto__ = Uint8Array.prototype),
            (s.__proto__ = Uint8Array),
            "undefined" !== typeof Symbol &&
              Symbol.species &&
              s[Symbol.species] === s &&
              Object.defineProperty(s, Symbol.species, {
                value: null,
                configurable: !0
              })),
          (s.alloc = function(t, e, n) {
            return (function(t, e, n, r) {
              return (
                c(e),
                e <= 0
                  ? l(t, e)
                  : void 0 !== n
                  ? "string" === typeof r
                    ? l(t, e).fill(n, r)
                    : l(t, e).fill(n)
                  : l(t, e)
              );
            })(null, t, e, n);
          }),
          (s.allocUnsafe = function(t) {
            return f(null, t);
          }),
          (s.allocUnsafeSlow = function(t) {
            return f(null, t);
          }),
          (s.isBuffer = function(t) {
            return !(null == t || !t._isBuffer);
          }),
          (s.compare = function(t, e) {
            if (!s.isBuffer(t) || !s.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var n = t.length, r = e.length, o = 0, i = Math.min(n, r);
              o < i;
              ++o
            )
              if (t[o] !== e[o]) {
                (n = t[o]), (r = e[o]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (s.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (s.concat = function(t, e) {
            if (!i(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return s.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = s.allocUnsafe(e),
              o = 0;
            for (n = 0; n < t.length; ++n) {
              var a = t[n];
              if (!s.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(r, o), (o += a.length);
            }
            return r;
          }),
          (s.byteLength = d),
          (s.prototype._isBuffer = !0),
          (s.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 !== 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) y(this, e, e + 1);
            return this;
          }),
          (s.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 !== 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              y(this, e, e + 3), y(this, e + 1, e + 2);
            return this;
          }),
          (s.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 !== 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              y(this, e, e + 7),
                y(this, e + 1, e + 6),
                y(this, e + 2, e + 5),
                y(this, e + 3, e + 4);
            return this;
          }),
          (s.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? k(this, 0, t)
              : function(t, e, n) {
                  var r = !1;
                  if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                    return "";
                  if (
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                  )
                    return "";
                  if ((n >>>= 0) <= (e >>>= 0)) return "";
                  for (t || (t = "utf8"); ; )
                    switch (t) {
                      case "hex":
                        return S(this, e, n);
                      case "utf8":
                      case "utf-8":
                        return k(this, e, n);
                      case "ascii":
                        return N(this, e, n);
                      case "latin1":
                      case "binary":
                        return j(this, e, n);
                      case "base64":
                        return E(this, e, n);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return T(this, e, n);
                      default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        (t = (t + "").toLowerCase()), (r = !0);
                    }
                }.apply(this, arguments);
          }),
          (s.prototype.equals = function(t) {
            if (!s.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === s.compare(this, t);
          }),
          (s.prototype.inspect = function() {
            var t = "",
              n = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, n)
                  .match(/.{2}/g)
                  .join(" ")),
                this.length > n && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (s.prototype.compare = function(t, e, n, r, o) {
            if (!s.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === o && (o = this.length),
              e < 0 || n > t.length || r < 0 || o > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= o && e >= n) return 0;
            if (r >= o) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            for (
              var i = (o >>>= 0) - (r >>>= 0),
                a = (n >>>= 0) - (e >>>= 0),
                l = Math.min(i, a),
                u = this.slice(r, o),
                c = t.slice(e, n),
                f = 0;
              f < l;
              ++f
            )
              if (u[f] !== c[f]) {
                (i = u[f]), (a = c[f]);
                break;
              }
            return i < a ? -1 : a < i ? 1 : 0;
          }),
          (s.prototype.includes = function(t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (s.prototype.indexOf = function(t, e, n) {
            return v(this, t, e, n, !0);
          }),
          (s.prototype.lastIndexOf = function(t, e, n) {
            return v(this, t, e, n, !1);
          }),
          (s.prototype.write = function(t, e, n, r) {
            if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
            else if (void 0 === n && "string" === typeof e)
              (r = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            var o = this.length - e;
            if (
              ((void 0 === n || n > o) && (n = o),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1; ; )
              switch (r) {
                case "hex":
                  return g(this, t, e, n);
                case "utf8":
                case "utf-8":
                  return m(this, t, e, n);
                case "ascii":
                  return _(this, t, e, n);
                case "latin1":
                case "binary":
                  return w(this, t, e, n);
                case "base64":
                  return x(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return O(this, t, e, n);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (i = !0);
              }
          }),
          (s.prototype.toJSON = function() {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          });
        var A = 4096;
        function N(t, e, n) {
          var r = "";
          n = Math.min(t.length, n);
          for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
          return r;
        }
        function j(t, e, n) {
          var r = "";
          n = Math.min(t.length, n);
          for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
          return r;
        }
        function S(t, e, n) {
          var r = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
          for (var o = "", i = e; i < n; ++i) o += B(t[i]);
          return o;
        }
        function T(t, e, n) {
          for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2)
            o += String.fromCharCode(r[i] + 256 * r[i + 1]);
          return o;
        }
        function P(t, e, n) {
          if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function C(t, e, n, r, o, i) {
          if (!s.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > o || e < i)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError("Index out of range");
        }
        function q(t, e, n, r) {
          e < 0 && (e = 65535 + e + 1);
          for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o)
            t[n + o] =
              (e & (255 << (8 * (r ? o : 1 - o)))) >>> (8 * (r ? o : 1 - o));
        }
        function L(t, e, n, r) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o)
            t[n + o] = (e >>> (8 * (r ? o : 3 - o))) & 255;
        }
        function M(t, e, n, r, o, i) {
          if (n + r > t.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function R(t, e, n, r, i) {
          return i || M(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4;
        }
        function I(t, e, n, r, i) {
          return i || M(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8;
        }
        (s.prototype.slice = function(t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t),
            s.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = s.prototype;
          else {
            var o = e - t;
            n = new s(o, void 0);
            for (var i = 0; i < o; ++i) n[i] = this[i + t];
          }
          return n;
        }),
          (s.prototype.readUIntLE = function(t, e, n) {
            (t |= 0), (e |= 0), n || P(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
              r += this[t + i] * o;
            return r;
          }),
          (s.prototype.readUIntBE = function(t, e, n) {
            (t |= 0), (e |= 0), n || P(t, e, this.length);
            for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); )
              r += this[t + --e] * o;
            return r;
          }),
          (s.prototype.readUInt8 = function(t, e) {
            return e || P(t, 1, this.length), this[t];
          }),
          (s.prototype.readUInt16LE = function(t, e) {
            return e || P(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (s.prototype.readUInt16BE = function(t, e) {
            return e || P(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (s.prototype.readUInt32LE = function(t, e) {
            return (
              e || P(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (s.prototype.readUInt32BE = function(t, e) {
            return (
              e || P(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (s.prototype.readIntLE = function(t, e, n) {
            (t |= 0), (e |= 0), n || P(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
              r += this[t + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r;
          }),
          (s.prototype.readIntBE = function(t, e, n) {
            (t |= 0), (e |= 0), n || P(t, e, this.length);
            for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); )
              i += this[t + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
          }),
          (s.prototype.readInt8 = function(t, e) {
            return (
              e || P(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (s.prototype.readInt16LE = function(t, e) {
            e || P(t, 2, this.length);
            var n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (s.prototype.readInt16BE = function(t, e) {
            e || P(t, 2, this.length);
            var n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (s.prototype.readInt32LE = function(t, e) {
            return (
              e || P(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (s.prototype.readInt32BE = function(t, e) {
            return (
              e || P(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (s.prototype.readFloatLE = function(t, e) {
            return e || P(t, 4, this.length), o.read(this, t, !0, 23, 4);
          }),
          (s.prototype.readFloatBE = function(t, e) {
            return e || P(t, 4, this.length), o.read(this, t, !1, 23, 4);
          }),
          (s.prototype.readDoubleLE = function(t, e) {
            return e || P(t, 8, this.length), o.read(this, t, !0, 52, 8);
          }),
          (s.prototype.readDoubleBE = function(t, e) {
            return e || P(t, 8, this.length), o.read(this, t, !1, 52, 8);
          }),
          (s.prototype.writeUIntLE = function(t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1,
              i = 0;
            for (this[e] = 255 & t; ++i < n && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + n;
          }),
          (s.prototype.writeUIntBE = function(t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1,
              i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + n;
          }),
          (s.prototype.writeUInt8 = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 1, 255, 0),
              s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (s.prototype.writeUInt16LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 2, 65535, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : q(this, t, e, !0),
              e + 2
            );
          }),
          (s.prototype.writeUInt16BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 2, 65535, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : q(this, t, e, !1),
              e + 2
            );
          }),
          (s.prototype.writeUInt32LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 4, 4294967295, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (s.prototype.writeUInt32BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 4, 4294967295, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (s.prototype.writeIntLE = function(t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var o = Math.pow(2, 8 * n - 1);
              C(this, t, e, n, o - 1, -o);
            }
            var i = 0,
              a = 1,
              l = 0;
            for (this[e] = 255 & t; ++i < n && (a *= 256); )
              t < 0 && 0 === l && 0 !== this[e + i - 1] && (l = 1),
                (this[e + i] = (((t / a) >> 0) - l) & 255);
            return e + n;
          }),
          (s.prototype.writeIntBE = function(t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var o = Math.pow(2, 8 * n - 1);
              C(this, t, e, n, o - 1, -o);
            }
            var i = n - 1,
              a = 1,
              l = 0;
            for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); )
              t < 0 && 0 === l && 0 !== this[e + i + 1] && (l = 1),
                (this[e + i] = (((t / a) >> 0) - l) & 255);
            return e + n;
          }),
          (s.prototype.writeInt8 = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 1, 127, -128),
              s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (s.prototype.writeInt16LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 2, 32767, -32768),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : q(this, t, e, !0),
              e + 2
            );
          }),
          (s.prototype.writeInt16BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 2, 32767, -32768),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : q(this, t, e, !1),
              e + 2
            );
          }),
          (s.prototype.writeInt32LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 4, 2147483647, -2147483648),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (s.prototype.writeInt32BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || C(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (s.prototype.writeFloatLE = function(t, e, n) {
            return R(this, t, e, !0, n);
          }),
          (s.prototype.writeFloatBE = function(t, e, n) {
            return R(this, t, e, !1, n);
          }),
          (s.prototype.writeDoubleLE = function(t, e, n) {
            return I(this, t, e, !0, n);
          }),
          (s.prototype.writeDoubleBE = function(t, e, n) {
            return I(this, t, e, !1, n);
          }),
          (s.prototype.copy = function(t, e, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              t.length - e < r - n && (r = t.length - e + n);
            var o,
              i = r - n;
            if (this === t && n < e && e < r)
              for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n];
            else if (i < 1e3 || !s.TYPED_ARRAY_SUPPORT)
              for (o = 0; o < i; ++o) t[o + e] = this[o + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
            return i;
          }),
          (s.prototype.fill = function(t, e, n, r) {
            if ("string" === typeof t) {
              if (
                ("string" === typeof e
                  ? ((r = e), (e = 0), (n = this.length))
                  : "string" === typeof n && ((r = n), (n = this.length)),
                1 === t.length)
              ) {
                var o = t.charCodeAt(0);
                o < 256 && (t = o);
              }
              if (void 0 !== r && "string" !== typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" === typeof r && !s.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" === typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= e) return this;
            var i;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              "number" === typeof t)
            )
              for (i = e; i < n; ++i) this[i] = t;
            else {
              var a = s.isBuffer(t) ? t : U(new s(t, r).toString()),
                l = a.length;
              for (i = 0; i < n - e; ++i) this[i + e] = a[i % l];
            }
            return this;
          });
        var D = /[^+\/0-9A-Za-z-_]/g;
        function B(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function U(t, e) {
          var n;
          e = e || 1 / 0;
          for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
            if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
              if (!o) {
                if (n > 56319) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (e -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
                continue;
              }
              n = 65536 + (((o - 55296) << 10) | (n - 56320));
            } else o && (e -= 3) > -1 && i.push(239, 191, 189);
            if (((o = null), n < 128)) {
              if ((e -= 1) < 0) break;
              i.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              i.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              i.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return i;
        }
        function F(t) {
          return r.toByteArray(
            (function(t) {
              if (
                (t = (function(t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(D, "")).length < 2
              )
                return "";
              for (; t.length % 4 !== 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function z(t, e, n, r) {
          for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o)
            e[o + n] = t[o];
          return o;
        }
      }.call(this, n(38)));
    },
    function(t, e, n) {
      "use strict";
      (e.byteLength = function(t) {
        var e = u(t),
          n = e[0],
          r = e[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (e.toByteArray = function(t) {
          for (
            var e,
              n = u(t),
              r = n[0],
              a = n[1],
              l = new i(
                (function(t, e, n) {
                  return (3 * (e + n)) / 4 - n;
                })(0, r, a)
              ),
              s = 0,
              c = a > 0 ? r - 4 : r,
              f = 0;
            f < c;
            f += 4
          )
            (e =
              (o[t.charCodeAt(f)] << 18) |
              (o[t.charCodeAt(f + 1)] << 12) |
              (o[t.charCodeAt(f + 2)] << 6) |
              o[t.charCodeAt(f + 3)]),
              (l[s++] = (e >> 16) & 255),
              (l[s++] = (e >> 8) & 255),
              (l[s++] = 255 & e);
          2 === a &&
            ((e = (o[t.charCodeAt(f)] << 2) | (o[t.charCodeAt(f + 1)] >> 4)),
            (l[s++] = 255 & e));
          1 === a &&
            ((e =
              (o[t.charCodeAt(f)] << 10) |
              (o[t.charCodeAt(f + 1)] << 4) |
              (o[t.charCodeAt(f + 2)] >> 2)),
            (l[s++] = (e >> 8) & 255),
            (l[s++] = 255 & e));
          return l;
        }),
        (e.fromByteArray = function(t) {
          for (
            var e, n = t.length, o = n % 3, i = [], a = 0, l = n - o;
            a < l;
            a += 16383
          )
            i.push(c(t, a, a + 16383 > l ? l : a + 16383));
          1 === o
            ? ((e = t[n - 1]), i.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
            : 2 === o &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              i.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
          return i.join("");
        });
      for (
        var r = [],
          o = [],
          i = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          l = 0,
          s = a.length;
        l < s;
        ++l
      )
        (r[l] = a[l]), (o[a.charCodeAt(l)] = l);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function c(t, e, n) {
        for (var o, i, a = [], l = e; l < n; l += 3)
          (o =
            ((t[l] << 16) & 16711680) +
            ((t[l + 1] << 8) & 65280) +
            (255 & t[l + 2])),
            a.push(
              r[((i = o) >> 18) & 63] +
                r[(i >> 12) & 63] +
                r[(i >> 6) & 63] +
                r[63 & i]
            );
        return a.join("");
      }
      (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
    },
    function(t, e) {
      (e.read = function(t, e, n, r, o) {
        var i,
          a,
          l = 8 * o - r - 1,
          s = (1 << l) - 1,
          u = s >> 1,
          c = -7,
          f = n ? o - 1 : 0,
          p = n ? -1 : 1,
          h = t[e + f];
        for (
          f += p, i = h & ((1 << -c) - 1), h >>= -c, c += l;
          c > 0;
          i = 256 * i + t[e + f], f += p, c -= 8
        );
        for (
          a = i & ((1 << -c) - 1), i >>= -c, c += r;
          c > 0;
          a = 256 * a + t[e + f], f += p, c -= 8
        );
        if (0 === i) i = 1 - u;
        else {
          if (i === s) return a ? NaN : (1 / 0) * (h ? -1 : 1);
          (a += Math.pow(2, r)), (i -= u);
        }
        return (h ? -1 : 1) * a * Math.pow(2, i - r);
      }),
        (e.write = function(t, e, n, r, o, i) {
          var a,
            l,
            s,
            u = 8 * i - o - 1,
            c = (1 << u) - 1,
            f = c >> 1,
            p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = r ? 0 : i - 1,
            d = r ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((l = isNaN(e) ? 1 : 0), (a = c))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (s = Math.pow(2, -a)) < 1 && (a--, (s *= 2)),
                  (e += a + f >= 1 ? p / s : p * Math.pow(2, 1 - f)) * s >= 2 &&
                    (a++, (s /= 2)),
                  a + f >= c
                    ? ((l = 0), (a = c))
                    : a + f >= 1
                    ? ((l = (e * s - 1) * Math.pow(2, o)), (a += f))
                    : ((l = e * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
            o >= 8;
            t[n + h] = 255 & l, h += d, l /= 256, o -= 8
          );
          for (
            a = (a << o) | l, u += o;
            u > 0;
            t[n + h] = 255 & a, h += d, a /= 256, u -= 8
          );
          t[n + h - d] |= 128 * y;
        });
    },
    function(t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function(t) {
          return "[object Array]" == n.call(t);
        };
    },
    function(t, e, n) {
      "use strict";
      var r = n(1),
        o = n(84),
        i = n(490),
        a = n(491),
        l = (n(492), n(643)),
        s = n(506),
        u = n(0),
        c = n(507),
        f = i({
          displayName: "Quill",
          mixins: [a],
          propTypes: {
            id: u.string,
            className: u.string,
            theme: u.string,
            style: u.object,
            readOnly: u.bool,
            value: u.oneOfType([u.string, u.shape({ ops: u.array })]),
            defaultValue: u.oneOfType([u.string, u.shape({ ops: u.array })]),
            placeholder: u.string,
            tabIndex: u.number,
            bounds: u.oneOfType([u.string, u.element]),
            onChange: u.func,
            onChangeSelection: u.func,
            onFocus: u.func,
            onBlur: u.func,
            onKeyPress: u.func,
            onKeyDown: u.func,
            onKeyUp: u.func,
            preserveWhitespace: u.bool,
            modules: function(t) {
              var e = u.object.apply(this, arguments);
              return (
                e ||
                (t.modules &&
                t.modules.toolbar &&
                t.modules.toolbar[0] &&
                t.modules.toolbar[0].type
                  ? new Error(
                      "Since v1.0.0, React Quill will not create a custom toolbar for you anymore. Create a toolbar explictly, or let Quill create one. See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100"
                    )
                  : void 0)
              );
            },
            toolbar: function(t) {
              if ("toolbar" in t)
                return new Error(
                  "The `toolbar` prop has been deprecated. Use `modules.toolbar` instead. See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100"
                );
            },
            formats: function(t) {
              if (u.arrayOf(u.string).apply(this, arguments))
                return new Error(
                  "You cannot specify custom `formats` anymore. Use Parchment instead.  See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100."
                );
            },
            styles: function(t) {
              if ("styles" in t)
                return new Error(
                  "The `styles` prop has been deprecated. Use custom stylesheets instead. See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100."
                );
            },
            pollInterval: function(t) {
              if ("pollInterval" in t)
                return new Error(
                  "The `pollInterval` property does not have any effect anymore. You can safely remove it from your props.See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100."
                );
            },
            children: function(t) {
              if (u.element.apply(this, arguments))
                return new Error(
                  "The Quill editing area can only be composed of a single React element."
                );
              if (
                r.Children.count(t.children) &&
                "textarea" === r.Children.only(t.children).type
              )
                return new Error(
                  "Quill does not support editing on a <textarea>. Use a <div> instead."
                );
            }
          },
          dirtyProps: ["modules", "formats", "bounds", "theme", "children"],
          cleanProps: [
            "id",
            "className",
            "style",
            "placeholder",
            "tabIndex",
            "onChange",
            "onChangeSelection",
            "onFocus",
            "onBlur",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp"
          ],
          getDefaultProps: function() {
            return { theme: "snow", modules: {} };
          },
          isControlled: function() {
            return "value" in this.props;
          },
          getInitialState: function() {
            return {
              generation: 0,
              value: this.isControlled()
                ? this.props.value
                : this.props.defaultValue
            };
          },
          componentWillReceiveProps: function(t, e) {
            var n = this.editor;
            if (n) {
              if ("value" in t) {
                var r = this.getEditorContents(),
                  o = t.value;
                if (o === this.lastDeltaChangeSet)
                  throw new Error(
                    "You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas"
                  );
                this.isEqualValue(o, r) || this.setEditorContents(n, o);
              }
              return (
                "readOnly" in t &&
                  t.readOnly !== this.props.readOnly &&
                  this.setEditorReadOnly(n, t.readOnly),
                this.shouldComponentRegenerate(t, e)
                  ? this.regenerate()
                  : void 0
              );
            }
          },
          componentDidMount: function() {
            if (
              ((this.editor = this.createEditor(
                this.getEditingArea(),
                this.getEditorConfig()
              )),
              this.quillDelta)
            )
              return (
                this.editor.setContents(this.quillDelta),
                this.editor.setSelection(this.quillSelection),
                this.editor.focus(),
                void (this.quillDelta = this.quillSelection = null)
              );
            this.state.value &&
              this.setEditorContents(this.editor, this.state.value);
          },
          componentWillUnmount: function() {
            var t;
            (t = this.getEditor()) &&
              (this.unhookEditor(t), (this.editor = null));
          },
          shouldComponentUpdate: function(t, e) {
            var n = this;
            return (
              this.state.generation !== e.generation ||
              l(this.cleanProps, function(e) {
                return !s(t[e], n.props[e]);
              })
            );
          },
          shouldComponentRegenerate: function(t, e) {
            var n = this;
            return l(this.dirtyProps, function(e) {
              return !s(t[e], n.props[e]);
            });
          },
          componentWillUpdate: function(t, e) {
            this.state.generation !== e.generation &&
              this.componentWillUnmount();
          },
          componentDidUpdate: function(t, e) {
            this.state.generation !== e.generation && this.componentDidMount();
          },
          getEditorConfig: function() {
            return {
              bounds: this.props.bounds,
              formats: this.props.formats,
              modules: this.props.modules,
              placeholder: this.props.placeholder,
              readOnly: this.props.readOnly,
              scrollingContainer: this.props.scrollingContainer,
              tabIndex: this.props.tabIndex,
              theme: this.props.theme
            };
          },
          getEditor: function() {
            return this.editor;
          },
          getEditingArea: function() {
            return o.findDOMNode(this.editingArea);
          },
          getEditorContents: function() {
            return this.state.value;
          },
          getEditorSelection: function() {
            return this.state.selection;
          },
          isDelta: function(t) {
            return t && t.ops;
          },
          isEqualValue: function(t, e) {
            return this.isDelta(t) && this.isDelta(e)
              ? s(t.ops, e.ops)
              : s(t, e);
          },
          regenerate: function() {
            (this.quillDelta = this.editor.getContents()),
              (this.quillSelection = this.editor.getSelection()),
              this.setState({ generation: this.state.generation + 1 });
          },
          renderEditingArea: function() {
            var t = this,
              e = this.props.children,
              n = this.props.preserveWhitespace,
              o = {
                key: this.state.generation,
                tabIndex: this.props.tabIndex,
                ref: function(e) {
                  t.editingArea = e;
                }
              },
              i = r.Children.count(e) ? r.Children.only(e) : null,
              a = n ? c.pre : c.div;
            return i ? r.cloneElement(i, o) : a(o);
          },
          render: function() {
            return c.div(
              {
                id: this.props.id,
                style: this.props.style,
                key: this.state.generation,
                className: ["quill"].concat(this.props.className).join(" "),
                onKeyPress: this.props.onKeyPress,
                onKeyDown: this.props.onKeyDown,
                onKeyUp: this.props.onKeyUp
              },
              this.renderEditingArea()
            );
          },
          onEditorChangeText: function(t, e, n, r) {
            var o = this.getEditorContents(),
              i = this.isDelta(o) ? r.getContents() : r.getHTML();
            this.isEqualValue(i, o) ||
              ((this.lastDeltaChangeSet = e),
              this.setState({ value: i }),
              this.props.onChange && this.props.onChange(t, e, n, r));
          },
          onEditorChangeSelection: function(t, e, n) {
            var r = this.getEditorSelection(),
              o = !r && t,
              i = r && !t;
            s(t, r) ||
              (this.setState({ selection: t }),
              this.props.onChangeSelection &&
                this.props.onChangeSelection(t, e, n),
              o && this.props.onFocus
                ? this.props.onFocus(t, e, n)
                : i && this.props.onBlur && this.props.onBlur(r, e, n));
          },
          focus: function() {
            this.editor.focus();
          },
          blur: function() {
            this.setEditorSelection(this.editor, null);
          }
        });
      t.exports = f;
    },
    function(t, e, n) {
      "use strict";
      var r = n(149),
        o = n(557),
        i = n(558),
        a = "mixins";
      t.exports = function(t, e, n) {
        var l = [],
          s = {
            mixins: "DEFINE_MANY",
            statics: "DEFINE_MANY",
            propTypes: "DEFINE_MANY",
            contextTypes: "DEFINE_MANY",
            childContextTypes: "DEFINE_MANY",
            getDefaultProps: "DEFINE_MANY_MERGED",
            getInitialState: "DEFINE_MANY_MERGED",
            getChildContext: "DEFINE_MANY_MERGED",
            render: "DEFINE_ONCE",
            componentWillMount: "DEFINE_MANY",
            componentDidMount: "DEFINE_MANY",
            componentWillReceiveProps: "DEFINE_MANY",
            shouldComponentUpdate: "DEFINE_ONCE",
            componentWillUpdate: "DEFINE_MANY",
            componentDidUpdate: "DEFINE_MANY",
            componentWillUnmount: "DEFINE_MANY",
            UNSAFE_componentWillMount: "DEFINE_MANY",
            UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
            UNSAFE_componentWillUpdate: "DEFINE_MANY",
            updateComponent: "OVERRIDE_BASE"
          },
          u = { getDerivedStateFromProps: "DEFINE_MANY_MERGED" },
          c = {
            displayName: function(t, e) {
              t.displayName = e;
            },
            mixins: function(t, e) {
              if (e) for (var n = 0; n < e.length; n++) p(t, e[n]);
            },
            childContextTypes: function(t, e) {
              t.childContextTypes = r({}, t.childContextTypes, e);
            },
            contextTypes: function(t, e) {
              t.contextTypes = r({}, t.contextTypes, e);
            },
            getDefaultProps: function(t, e) {
              t.getDefaultProps
                ? (t.getDefaultProps = d(t.getDefaultProps, e))
                : (t.getDefaultProps = e);
            },
            propTypes: function(t, e) {
              t.propTypes = r({}, t.propTypes, e);
            },
            statics: function(t, e) {
              !(function(t, e) {
                if (e)
                  for (var n in e) {
                    var r = e[n];
                    if (e.hasOwnProperty(n)) {
                      var o = n in c;
                      i(
                        !o,
                        'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                        n
                      );
                      var a = n in t;
                      if (a) {
                        var l = u.hasOwnProperty(n) ? u[n] : null;
                        return (
                          i(
                            "DEFINE_MANY_MERGED" === l,
                            "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                            n
                          ),
                          void (t[n] = d(t[n], r))
                        );
                      }
                      t[n] = r;
                    }
                  }
              })(t, e);
            },
            autobind: function() {}
          };
        function f(t, e) {
          var n = s.hasOwnProperty(e) ? s[e] : null;
          m.hasOwnProperty(e) &&
            i(
              "OVERRIDE_BASE" === n,
              "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
              e
            ),
            t &&
              i(
                "DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n,
                "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                e
              );
        }
        function p(t, n) {
          if (n) {
            i(
              "function" !== typeof n,
              "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
            ),
              i(
                !e(n),
                "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
              );
            var r = t.prototype,
              o = r.__reactAutoBindPairs;
            for (var l in (n.hasOwnProperty(a) && c.mixins(t, n.mixins), n))
              if (n.hasOwnProperty(l) && l !== a) {
                var u = n[l],
                  p = r.hasOwnProperty(l);
                if ((f(p, l), c.hasOwnProperty(l))) c[l](t, u);
                else {
                  var h = s.hasOwnProperty(l);
                  if ("function" !== typeof u || h || p || !1 === n.autobind)
                    if (p) {
                      var v = s[l];
                      i(
                        h &&
                          ("DEFINE_MANY_MERGED" === v || "DEFINE_MANY" === v),
                        "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                        v,
                        l
                      ),
                        "DEFINE_MANY_MERGED" === v
                          ? (r[l] = d(r[l], u))
                          : "DEFINE_MANY" === v && (r[l] = y(r[l], u));
                    } else r[l] = u;
                  else o.push(l, u), (r[l] = u);
                }
              }
          }
        }
        function h(t, e) {
          for (var n in (i(
            t && e && "object" === typeof t && "object" === typeof e,
            "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
          ),
          e))
            e.hasOwnProperty(n) &&
              (i(
                void 0 === t[n],
                "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
                n
              ),
              (t[n] = e[n]));
          return t;
        }
        function d(t, e) {
          return function() {
            var n = t.apply(this, arguments),
              r = e.apply(this, arguments);
            if (null == n) return r;
            if (null == r) return n;
            var o = {};
            return h(o, n), h(o, r), o;
          };
        }
        function y(t, e) {
          return function() {
            t.apply(this, arguments), e.apply(this, arguments);
          };
        }
        function v(t, e) {
          return e.bind(t);
        }
        var b = {
            componentDidMount: function() {
              this.__isMounted = !0;
            }
          },
          g = {
            componentWillUnmount: function() {
              this.__isMounted = !1;
            }
          },
          m = {
            replaceState: function(t, e) {
              this.updater.enqueueReplaceState(this, t, e);
            },
            isMounted: function() {
              return !!this.__isMounted;
            }
          },
          _ = function() {};
        return (
          r(_.prototype, t.prototype, m),
          function(t) {
            var e = function(t, r, a) {
              this.__reactAutoBindPairs.length &&
                (function(t) {
                  for (
                    var e = t.__reactAutoBindPairs, n = 0;
                    n < e.length;
                    n += 2
                  ) {
                    var r = e[n],
                      o = e[n + 1];
                    t[r] = v(t, o);
                  }
                })(this),
                (this.props = t),
                (this.context = r),
                (this.refs = o),
                (this.updater = a || n),
                (this.state = null);
              var l = this.getInitialState ? this.getInitialState() : null;
              i(
                "object" === typeof l && !Array.isArray(l),
                "%s.getInitialState(): must return an object or null",
                e.displayName || "ReactCompositeComponent"
              ),
                (this.state = l);
            };
            for (var r in ((e.prototype = new _()),
            (e.prototype.constructor = e),
            (e.prototype.__reactAutoBindPairs = []),
            l.forEach(p.bind(null, e)),
            p(e, b),
            p(e, t),
            p(e, g),
            e.getDefaultProps && (e.defaultProps = e.getDefaultProps()),
            i(
              e.prototype.render,
              "createClass(...): Class specification must implement a `render` method."
            ),
            s))
              e.prototype[r] || (e.prototype[r] = null);
            return e;
          }
        );
      };
    },
    function(t, e, n) {
      "use strict";
      t.exports = {};
    },
    function(t, e, n) {
      "use strict";
      var r = function(t) {};
      t.exports = function(t, e, n, o, i, a, l, s) {
        if ((r(e), !t)) {
          var u;
          if (void 0 === e)
            u = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var c = [n, o, i, a, l, s],
              f = 0;
            (u = new Error(
              e.replace(/%s/g, function() {
                return c[f++];
              })
            )).name = "Invariant Violation";
          }
          throw ((u.framesToPop = 1), u);
        }
      };
    },
    function(t, e, n) {
      var r = n(479),
        o = n(469),
        i = n(468);
      t.exports = function(t) {
        return function(e, n, a) {
          var l = Object(e);
          if (!o(e)) {
            var s = r(n, 3);
            (e = i(e)),
              (n = function(t) {
                return s(l[t], t, l);
              });
          }
          var u = t(e, n, a);
          return u > -1 ? l[s ? e[u] : u] : void 0;
        };
      };
    },
    function(t, e, n) {
      var r = n(561),
        o = n(622),
        i = n(503);
      t.exports = function(t) {
        var e = o(t);
        return 1 == e.length && e[0][2]
          ? i(e[0][0], e[0][1])
          : function(n) {
              return n === t || r(n, t, e);
            };
      };
    },
    function(t, e, n) {
      var r = n(493),
        o = n(483),
        i = 1,
        a = 2;
      t.exports = function(t, e, n, l) {
        var s = n.length,
          u = s,
          c = !l;
        if (null == t) return !u;
        for (t = Object(t); s--; ) {
          var f = n[s];
          if (c && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1;
        }
        for (; ++s < u; ) {
          var p = (f = n[s])[0],
            h = t[p],
            d = f[1];
          if (c && f[2]) {
            if (void 0 === h && !(p in t)) return !1;
          } else {
            var y = new r();
            if (l) var v = l(h, d, p, t, e, y);
            if (!(void 0 === v ? o(d, h, i | a, l, y) : v)) return !1;
          }
        }
        return !0;
      };
    },
    function(t, e) {
      t.exports = function() {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function(t, e, n) {
      var r = n(464),
        o = Array.prototype.splice;
      t.exports = function(t) {
        var e = this.__data__,
          n = r(e, t);
        return (
          !(n < 0) &&
          (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, !0)
        );
      };
    },
    function(t, e, n) {
      var r = n(464);
      t.exports = function(t) {
        var e = this.__data__,
          n = r(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
    },
    function(t, e, n) {
      var r = n(464);
      t.exports = function(t) {
        return r(this.__data__, t) > -1;
      };
    },
    function(t, e, n) {
      var r = n(464);
      t.exports = function(t, e) {
        var n = this.__data__,
          o = r(n, t);
        return o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e), this;
      };
    },
    function(t, e, n) {
      var r = n(463);
      t.exports = function() {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return this.__data__.get(t);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return this.__data__.has(t);
      };
    },
    function(t, e, n) {
      var r = n(463),
        o = n(481),
        i = n(482),
        a = 200;
      t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
          var l = n.__data__;
          if (!o || l.length < a - 1)
            return l.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new i(l);
        }
        return n.set(t, e), (this.size = n.size), this;
      };
    },
    function(t, e, n) {
      var r = n(494),
        o = n(575),
        i = n(460),
        a = n(496),
        l = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        u = Object.prototype,
        c = s.toString,
        f = u.hasOwnProperty,
        p = RegExp(
          "^" +
            c
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function(t) {
        return !(!i(t) || o(t)) && (r(t) ? p : l).test(a(t));
      };
    },
    function(t, e, n) {
      var r = n(465),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        l = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        var e = i.call(t, l),
          n = t[l];
        try {
          t[l] = void 0;
          var r = !0;
        } catch (s) {}
        var o = a.call(t);
        return r && (e ? (t[l] = n) : delete t[l]), o;
      };
    },
    function(t, e) {
      var n = Object.prototype.toString;
      t.exports = function(t) {
        return n.call(t);
      };
    },
    function(t, e, n) {
      var r = n(576),
        o = (function() {
          var t = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })();
      t.exports = function(t) {
        return !!o && o in t;
      };
    },
    function(t, e, n) {
      var r = n(448)["__core-js_shared__"];
      t.exports = r;
    },
    function(t, e) {
      t.exports = function(t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    function(t, e, n) {
      var r = n(579),
        o = n(463),
        i = n(481);
      t.exports = function() {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (i || o)(),
            string: new r()
          });
      };
    },
    function(t, e, n) {
      var r = n(580),
        o = n(581),
        i = n(582),
        a = n(583),
        l = n(584);
      function s(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = a),
        (s.prototype.set = l),
        (t.exports = s);
    },
    function(t, e, n) {
      var r = n(466);
      t.exports = function() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function(t, e, n) {
      var r = n(466),
        o = "__lodash_hash_undefined__",
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        if (r) {
          var n = e[t];
          return n === o ? void 0 : n;
        }
        return i.call(e, t) ? e[t] : void 0;
      };
    },
    function(t, e, n) {
      var r = n(466),
        o = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : o.call(e, t);
      };
    },
    function(t, e, n) {
      var r = n(466),
        o = "__lodash_hash_undefined__";
      t.exports = function(t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = r && void 0 === e ? o : e),
          this
        );
      };
    },
    function(t, e, n) {
      var r = n(467);
      t.exports = function(t) {
        var e = r(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    function(t, e, n) {
      var r = n(467);
      t.exports = function(t) {
        return r(this, t).get(t);
      };
    },
    function(t, e, n) {
      var r = n(467);
      t.exports = function(t) {
        return r(this, t).has(t);
      };
    },
    function(t, e, n) {
      var r = n(467);
      t.exports = function(t, e) {
        var n = r(this, t),
          o = n.size;
        return n.set(t, e), (this.size += n.size == o ? 0 : 1), this;
      };
    },
    function(t, e, n) {
      var r = n(493),
        o = n(497),
        i = n(595),
        a = n(599),
        l = n(617),
        s = n(449),
        u = n(500),
        c = n(501),
        f = 1,
        p = "[object Arguments]",
        h = "[object Array]",
        d = "[object Object]",
        y = Object.prototype.hasOwnProperty;
      t.exports = function(t, e, n, v, b, g) {
        var m = s(t),
          _ = s(e),
          w = m ? h : l(t),
          x = _ ? h : l(e),
          O = (w = w == p ? d : w) == d,
          E = (x = x == p ? d : x) == d,
          k = w == x;
        if (k && u(t)) {
          if (!u(e)) return !1;
          (m = !0), (O = !1);
        }
        if (k && !O)
          return (
            g || (g = new r()),
            m || c(t) ? o(t, e, n, v, b, g) : i(t, e, w, n, v, b, g)
          );
        if (!(n & f)) {
          var A = O && y.call(t, "__wrapped__"),
            N = E && y.call(e, "__wrapped__");
          if (A || N) {
            var j = A ? t.value() : t,
              S = N ? e.value() : e;
            return g || (g = new r()), b(j, S, n, v, g);
          }
        }
        return !!k && (g || (g = new r()), a(t, e, n, v, b, g));
      };
    },
    function(t, e, n) {
      var r = n(482),
        o = n(592),
        i = n(593);
      function a(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
      }
      (a.prototype.add = a.prototype.push = o),
        (a.prototype.has = i),
        (t.exports = a);
    },
    function(t, e) {
      var n = "__lodash_hash_undefined__";
      t.exports = function(t) {
        return this.__data__.set(t, n), this;
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return this.__data__.has(t);
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return t.has(e);
      };
    },
    function(t, e, n) {
      var r = n(465),
        o = n(596),
        i = n(480),
        a = n(497),
        l = n(597),
        s = n(598),
        u = 1,
        c = 2,
        f = "[object Boolean]",
        p = "[object Date]",
        h = "[object Error]",
        d = "[object Map]",
        y = "[object Number]",
        v = "[object RegExp]",
        b = "[object Set]",
        g = "[object String]",
        m = "[object Symbol]",
        _ = "[object ArrayBuffer]",
        w = "[object DataView]",
        x = r ? r.prototype : void 0,
        O = x ? x.valueOf : void 0;
      t.exports = function(t, e, n, r, x, E, k) {
        switch (n) {
          case w:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case _:
            return !(t.byteLength != e.byteLength || !E(new o(t), new o(e)));
          case f:
          case p:
          case y:
            return i(+t, +e);
          case h:
            return t.name == e.name && t.message == e.message;
          case v:
          case g:
            return t == e + "";
          case d:
            var A = l;
          case b:
            var N = r & u;
            if ((A || (A = s), t.size != e.size && !N)) return !1;
            var j = k.get(t);
            if (j) return j == e;
            (r |= c), k.set(t, e);
            var S = a(A(t), A(e), r, x, E, k);
            return k.delete(t), S;
          case m:
            if (O) return O.call(t) == O.call(e);
        }
        return !1;
      };
    },
    function(t, e, n) {
      var r = n(448).Uint8Array;
      t.exports = r;
    },
    function(t, e) {
      t.exports = function(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function(t, r) {
            n[++e] = [r, t];
          }),
          n
        );
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function(t) {
            n[++e] = t;
          }),
          n
        );
      };
    },
    function(t, e, n) {
      var r = n(600),
        o = 1,
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t, e, n, a, l, s) {
        var u = n & o,
          c = r(t),
          f = c.length;
        if (f != r(e).length && !u) return !1;
        for (var p = f; p--; ) {
          var h = c[p];
          if (!(u ? h in e : i.call(e, h))) return !1;
        }
        var d = s.get(t);
        if (d && s.get(e)) return d == e;
        var y = !0;
        s.set(t, e), s.set(e, t);
        for (var v = u; ++p < f; ) {
          var b = t[(h = c[p])],
            g = e[h];
          if (a) var m = u ? a(g, b, h, e, t, s) : a(b, g, h, t, e, s);
          if (!(void 0 === m ? b === g || l(b, g, n, a, s) : m)) {
            y = !1;
            break;
          }
          v || (v = "constructor" == h);
        }
        if (y && !v) {
          var _ = t.constructor,
            w = e.constructor;
          _ != w &&
            "constructor" in t &&
            "constructor" in e &&
            !(
              "function" == typeof _ &&
              _ instanceof _ &&
              "function" == typeof w &&
              w instanceof w
            ) &&
            (y = !1);
        }
        return s.delete(t), s.delete(e), y;
      };
    },
    function(t, e, n) {
      var r = n(601),
        o = n(603),
        i = n(468);
      t.exports = function(t) {
        return r(t, i, o);
      };
    },
    function(t, e, n) {
      var r = n(602),
        o = n(449);
      t.exports = function(t, e, n) {
        var i = e(t);
        return o(t) ? i : r(i, n(t));
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
        return t;
      };
    },
    function(t, e, n) {
      var r = n(604),
        o = n(605),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        l = a
          ? function(t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  r(a(t), function(e) {
                    return i.call(t, e);
                  }));
            }
          : o;
      t.exports = l;
    },
    function(t, e) {
      t.exports = function(t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
          ++n < r;

        ) {
          var a = t[n];
          e(a, n, t) && (i[o++] = a);
        }
        return i;
      };
    },
    function(t, e) {
      t.exports = function() {
        return [];
      };
    },
    function(t, e, n) {
      var r = n(607),
        o = n(499),
        i = n(449),
        a = n(500),
        l = n(484),
        s = n(501),
        u = Object.prototype.hasOwnProperty;
      t.exports = function(t, e) {
        var n = i(t),
          c = !n && o(t),
          f = !n && !c && a(t),
          p = !n && !c && !f && s(t),
          h = n || c || f || p,
          d = h ? r(t.length, String) : [],
          y = d.length;
        for (var v in t)
          (!e && !u.call(t, v)) ||
            (h &&
              ("length" == v ||
                (f && ("offset" == v || "parent" == v)) ||
                (p &&
                  ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
                l(v, y))) ||
            d.push(v);
        return d;
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      };
    },
    function(t, e, n) {
      var r = n(459),
        o = n(461),
        i = "[object Arguments]";
      t.exports = function(t) {
        return o(t) && r(t) == i;
      };
    },
    function(t, e) {
      t.exports = function() {
        return !1;
      };
    },
    function(t, e, n) {
      var r = n(459),
        o = n(485),
        i = n(461),
        a = {};
      (a["[object Float32Array]"] = a["[object Float64Array]"] = a[
        "[object Int8Array]"
      ] = a["[object Int16Array]"] = a["[object Int32Array]"] = a[
        "[object Uint8Array]"
      ] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a[
        "[object Uint32Array]"
      ] = !0),
        (a["[object Arguments]"] = a["[object Array]"] = a[
          "[object ArrayBuffer]"
        ] = a["[object Boolean]"] = a["[object DataView]"] = a[
          "[object Date]"
        ] = a["[object Error]"] = a["[object Function]"] = a[
          "[object Map]"
        ] = a["[object Number]"] = a["[object Object]"] = a[
          "[object RegExp]"
        ] = a["[object Set]"] = a["[object String]"] = a[
          "[object WeakMap]"
        ] = !1),
        (t.exports = function(t) {
          return i(t) && o(t.length) && !!a[r(t)];
        });
    },
    function(t, e) {
      t.exports = function(t) {
        return function(e) {
          return t(e);
        };
      };
    },
    function(t, e, n) {
      (function(t) {
        var r = n(495),
          o = e && !e.nodeType && e,
          i = o && "object" == typeof t && t && !t.nodeType && t,
          a = i && i.exports === o && r.process,
          l = (function() {
            try {
              var t = i && i.require && i.require("util").types;
              return t || (a && a.binding && a.binding("util"));
            } catch (e) {}
          })();
        t.exports = l;
      }.call(this, n(201)(t)));
    },
    function(t, e, n) {
      var r = n(614),
        o = n(615),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = [];
        for (var n in Object(t))
          i.call(t, n) && "constructor" != n && e.push(n);
        return e;
      };
    },
    function(t, e) {
      var n = Object.prototype;
      t.exports = function(t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || n);
      };
    },
    function(t, e, n) {
      var r = n(616)(Object.keys, Object);
      t.exports = r;
    },
    function(t, e) {
      t.exports = function(t, e) {
        return function(n) {
          return t(e(n));
        };
      };
    },
    function(t, e, n) {
      var r = n(618),
        o = n(481),
        i = n(619),
        a = n(620),
        l = n(621),
        s = n(459),
        u = n(496),
        c = u(r),
        f = u(o),
        p = u(i),
        h = u(a),
        d = u(l),
        y = s;
      ((r && "[object DataView]" != y(new r(new ArrayBuffer(1)))) ||
        (o && "[object Map]" != y(new o())) ||
        (i && "[object Promise]" != y(i.resolve())) ||
        (a && "[object Set]" != y(new a())) ||
        (l && "[object WeakMap]" != y(new l()))) &&
        (y = function(t) {
          var e = s(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? u(n) : "";
          if (r)
            switch (r) {
              case c:
                return "[object DataView]";
              case f:
                return "[object Map]";
              case p:
                return "[object Promise]";
              case h:
                return "[object Set]";
              case d:
                return "[object WeakMap]";
            }
          return e;
        }),
        (t.exports = y);
    },
    function(t, e, n) {
      var r = n(453)(n(448), "DataView");
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(453)(n(448), "Promise");
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(453)(n(448), "Set");
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(453)(n(448), "WeakMap");
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(502),
        o = n(468);
      t.exports = function(t) {
        for (var e = o(t), n = e.length; n--; ) {
          var i = e[n],
            a = t[i];
          e[n] = [i, a, r(a)];
        }
        return e;
      };
    },
    function(t, e, n) {
      var r = n(483),
        o = n(624),
        i = n(631),
        a = n(486),
        l = n(502),
        s = n(503),
        u = n(471),
        c = 1,
        f = 2;
      t.exports = function(t, e) {
        return a(t) && l(e)
          ? s(u(t), e)
          : function(n) {
              var a = o(n, t);
              return void 0 === a && a === e ? i(n, t) : r(e, a, c | f);
            };
      };
    },
    function(t, e, n) {
      var r = n(504);
      t.exports = function(t, e, n) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? n : o;
      };
    },
    function(t, e, n) {
      var r = n(626),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = r(function(t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(o, function(t, n, r, o) {
              e.push(r ? o.replace(i, "$1") : n || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    function(t, e, n) {
      var r = n(627),
        o = 500;
      t.exports = function(t) {
        var e = r(t, function(t) {
            return n.size === o && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    function(t, e, n) {
      var r = n(482),
        o = "Expected a function";
      function i(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError(o);
        var n = function n() {
          var r = arguments,
            o = e ? e.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(o)) return i.get(o);
          var a = t.apply(this, r);
          return (n.cache = i.set(o, a) || i), a;
        };
        return (n.cache = new (i.Cache || r)()), n;
      }
      (i.Cache = r), (t.exports = i);
    },
    function(t, e, n) {
      var r = n(629);
      t.exports = function(t) {
        return null == t ? "" : r(t);
      };
    },
    function(t, e, n) {
      var r = n(465),
        o = n(630),
        i = n(449),
        a = n(470),
        l = 1 / 0,
        s = r ? r.prototype : void 0,
        u = s ? s.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (a(e)) return u ? u.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -l ? "-0" : n;
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r; )
          o[n] = e(t[n], n, t);
        return o;
      };
    },
    function(t, e, n) {
      var r = n(632),
        o = n(633);
      t.exports = function(t, e) {
        return null != t && o(t, e, r);
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return null != t && e in Object(t);
      };
    },
    function(t, e, n) {
      var r = n(505),
        o = n(499),
        i = n(449),
        a = n(484),
        l = n(485),
        s = n(471);
      t.exports = function(t, e, n) {
        for (var u = -1, c = (e = r(e, t)).length, f = !1; ++u < c; ) {
          var p = s(e[u]);
          if (!(f = null != t && n(t, p))) break;
          t = t[p];
        }
        return f || ++u != c
          ? f
          : !!(c = null == t ? 0 : t.length) &&
              l(c) &&
              a(p, c) &&
              (i(t) || o(t));
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return t;
      };
    },
    function(t, e, n) {
      var r = n(636),
        o = n(637),
        i = n(486),
        a = n(471);
      t.exports = function(t) {
        return i(t) ? r(a(t)) : o(t);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return function(e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    function(t, e, n) {
      var r = n(504);
      t.exports = function(t) {
        return function(e) {
          return r(e, t);
        };
      };
    },
    function(t, e, n) {
      var r = n(639),
        o = n(479),
        i = n(640),
        a = Math.max;
      t.exports = function(t, e, n) {
        var l = null == t ? 0 : t.length;
        if (!l) return -1;
        var s = null == n ? 0 : i(n);
        return s < 0 && (s = a(l + s, 0)), r(t, o(e, 3), s);
      };
    },
    function(t, e) {
      t.exports = function(t, e, n, r) {
        for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      };
    },
    function(t, e, n) {
      var r = n(641);
      t.exports = function(t) {
        var e = r(t),
          n = e % 1;
        return e === e ? (n ? e - n : e) : 0;
      };
    },
    function(t, e, n) {
      var r = n(642),
        o = 1 / 0,
        i = 1.7976931348623157e308;
      t.exports = function(t) {
        return t
          ? (t = r(t)) === o || t === -o
            ? (t < 0 ? -1 : 1) * i
            : t === t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    function(t, e, n) {
      var r = n(460),
        o = n(470),
        i = NaN,
        a = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (o(t)) return i;
        if (r(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = r(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = s.test(t);
        return n || u.test(t) ? c(t.slice(2), n ? 2 : 8) : l.test(t) ? i : +t;
      };
    },
    function(t, e, n) {
      var r = n(498),
        o = n(479),
        i = n(644),
        a = n(449),
        l = n(650);
      t.exports = function(t, e, n) {
        var s = a(t) ? r : i;
        return n && l(t, e, n) && (e = void 0), s(t, o(e, 3));
      };
    },
    function(t, e, n) {
      var r = n(645);
      t.exports = function(t, e) {
        var n;
        return (
          r(t, function(t, r, o) {
            return !(n = e(t, r, o));
          }),
          !!n
        );
      };
    },
    function(t, e, n) {
      var r = n(646),
        o = n(649)(r);
      t.exports = o;
    },
    function(t, e, n) {
      var r = n(647),
        o = n(468);
      t.exports = function(t, e) {
        return t && r(t, e, o);
      };
    },
    function(t, e, n) {
      var r = n(648)();
      t.exports = r;
    },
    function(t, e) {
      t.exports = function(t) {
        return function(e, n, r) {
          for (var o = -1, i = Object(e), a = r(e), l = a.length; l--; ) {
            var s = a[t ? l : ++o];
            if (!1 === n(i[s], s, i)) break;
          }
          return e;
        };
      };
    },
    function(t, e, n) {
      var r = n(469);
      t.exports = function(t, e) {
        return function(n, o) {
          if (null == n) return n;
          if (!r(n)) return t(n, o);
          for (
            var i = n.length, a = e ? i : -1, l = Object(n);
            (e ? a-- : ++a < i) && !1 !== o(l[a], a, l);

          );
          return n;
        };
      };
    },
    function(t, e, n) {
      var r = n(480),
        o = n(469),
        i = n(484),
        a = n(460);
      t.exports = function(t, e, n) {
        if (!a(n)) return !1;
        var l = typeof e;
        return (
          !!("number" == l
            ? o(n) && i(e, n.length)
            : "string" == l && e in n) && r(n[e], t)
        );
      };
    },
    function(t, e, n) {
      "use strict";
      n(1);
      var r = n(652),
        o = n(490),
        i = n(492),
        a = n(506),
        l = n(0),
        s = n(507),
        u = [
          "rgb(  0,   0,   0)",
          "rgb(230,   0,   0)",
          "rgb(255, 153,   0)",
          "rgb(255, 255,   0)",
          "rgb(  0, 138,   0)",
          "rgb(  0, 102, 204)",
          "rgb(153,  51, 255)",
          "rgb(255, 255, 255)",
          "rgb(250, 204, 204)",
          "rgb(255, 235, 204)",
          "rgb(255, 255, 204)",
          "rgb(204, 232, 204)",
          "rgb(204, 224, 245)",
          "rgb(235, 214, 255)",
          "rgb(187, 187, 187)",
          "rgb(240, 102, 102)",
          "rgb(255, 194, 102)",
          "rgb(255, 255, 102)",
          "rgb(102, 185, 102)",
          "rgb(102, 163, 224)",
          "rgb(194, 133, 255)",
          "rgb(136, 136, 136)",
          "rgb(161,   0,   0)",
          "rgb(178, 107,   0)",
          "rgb(178, 178,   0)",
          "rgb(  0,  97,   0)",
          "rgb(  0,  71, 178)",
          "rgb(107,  36, 178)",
          "rgb( 68,  68,  68)",
          "rgb( 92,   0,   0)",
          "rgb(102,  61,   0)",
          "rgb(102, 102,   0)",
          "rgb(  0,  55,   0)",
          "rgb(  0,  41, 102)",
          "rgb( 61,  20,  10)"
        ].map(function(t) {
          return { value: t };
        }),
        c = [
          {
            label: "Formats",
            type: "group",
            items: [
              {
                label: "Font",
                type: "font",
                items: [
                  { label: "Sans Serif", value: "sans-serif", selected: !0 },
                  { label: "Serif", value: "serif" },
                  { label: "Monospace", value: "monospace" }
                ]
              },
              {
                label: "Size",
                type: "size",
                items: [
                  { label: "Small", value: "10px" },
                  { label: "Normal", value: "13px", selected: !0 },
                  { label: "Large", value: "18px" },
                  { label: "Huge", value: "32px" }
                ]
              },
              {
                label: "Alignment",
                type: "align",
                items: [
                  { label: "", value: "", selected: !0 },
                  { label: "", value: "center" },
                  { label: "", value: "right" },
                  { label: "", value: "justify" }
                ]
              }
            ]
          },
          {
            label: "Text",
            type: "group",
            items: [
              { type: "bold", label: "Bold" },
              { type: "italic", label: "Italic" },
              { type: "strike", label: "Strike" },
              { type: "underline", label: "Underline" },
              { type: "color", label: "Color", items: u },
              { type: "background", label: "Background color", items: u },
              { type: "link", label: "Link" }
            ]
          },
          {
            label: "Blocks",
            type: "group",
            items: [
              { type: "list", value: "bullet" },
              { type: "list", value: "ordered" }
            ]
          },
          {
            label: "Blocks",
            type: "group",
            items: [{ type: "image", label: "Image" }]
          }
        ],
        f = o({
          displayName: "Quill Toolbar",
          propTypes: {
            id: l.string,
            className: l.string,
            style: l.object,
            items: l.array
          },
          getDefaultProps: function() {
            return { items: c };
          },
          componentDidMount: function() {
            console.warn(
              "QuillToolbar is deprecated. Consider switching to the official Quill toolbar format, or providing your own toolbar instead. See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v1-0-0"
            );
          },
          shouldComponentUpdate: function(t, e) {
            return !a(t, this.props);
          },
          renderGroup: function(t, e) {
            return s.span(
              { key: t.label || e, className: "ql-formats" },
              t.items.map(this.renderItem)
            );
          },
          renderChoiceItem: function(t, e) {
            return s.option(
              { key: t.label || t.value || e, value: t.value },
              t.label
            );
          },
          renderChoices: function(t, e) {
            var n = t.items.map(this.renderChoiceItem),
              r = i(t.items, function(t) {
                return t.selected;
              }),
              o = {
                key: t.label || e,
                title: t.label,
                className: "ql-" + t.type,
                value: r.value
              };
            return s.select(o, n);
          },
          renderButton: function(t, e) {
            return s.button(
              {
                type: "button",
                key: t.label || t.value || e,
                value: t.value,
                className: "ql-" + t.type,
                title: t.label
              },
              t.children
            );
          },
          renderAction: function(t, e) {
            return s.button(
              {
                key: t.label || t.value || e,
                className: "ql-" + t.type,
                title: t.label
              },
              t.children
            );
          },
          renderItem: function(t, e) {
            switch (t.type) {
              case "group":
                return this.renderGroup(t, e);
              case "font":
              case "header":
              case "align":
              case "size":
              case "color":
              case "background":
                return this.renderChoices(t, e);
              case "bold":
              case "italic":
              case "underline":
              case "strike":
              case "link":
              case "list":
              case "bullet":
              case "ordered":
              case "indent":
              case "image":
              case "video":
                return this.renderButton(t, e);
              default:
                return this.renderAction(t, e);
            }
          },
          getClassName: function() {
            return "quill-toolbar " + (this.props.className || "");
          },
          render: function() {
            var t = this.props.items
              .map(this.renderItem)
              .map(r.renderToStaticMarkup)
              .join("");
            return s.div({
              id: this.props.id,
              className: this.getClassName(),
              style: this.props.style,
              dangerouslySetInnerHTML: { __html: t }
            });
          }
        });
      (t.exports = f), (f.defaultItems = c), (f.defaultColors = u);
    },
    function(t, e, n) {
      "use strict";
      t.exports = n(653);
    },
    function(t, e, n) {
      "use strict";
      var r = n(149),
        o = n(1);
      function i(t) {
        for (
          var e = arguments.length - 1,
            n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
            r = 0;
          r < e;
          r++
        )
          n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        !(function(t, e, n, r, o, i, a, l) {
          if (!t) {
            if (((t = void 0), void 0 === e))
              t = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var s = [n, r, o, i, a, l],
                u = 0;
              (t = Error(
                e.replace(/%s/g, function() {
                  return s[u++];
                })
              )).name = "Invariant Violation";
            }
            throw ((t.framesToPop = 1), t);
          }
        })(
          !1,
          "Minified React error #" +
            t +
            "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
          n
        );
      }
      var a = "function" === typeof Symbol && Symbol.for,
        l = a ? Symbol.for("react.portal") : 60106,
        s = a ? Symbol.for("react.fragment") : 60107,
        u = a ? Symbol.for("react.strict_mode") : 60108,
        c = a ? Symbol.for("react.profiler") : 60114,
        f = a ? Symbol.for("react.provider") : 60109,
        p = a ? Symbol.for("react.context") : 60110,
        h = a ? Symbol.for("react.concurrent_mode") : 60111,
        d = a ? Symbol.for("react.forward_ref") : 60112,
        y = a ? Symbol.for("react.suspense") : 60113,
        v = a ? Symbol.for("react.memo") : 60115,
        b = a ? Symbol.for("react.lazy") : 60116;
      function g(t) {
        if (null == t) return null;
        if ("function" === typeof t) return t.displayName || t.name || null;
        if ("string" === typeof t) return t;
        switch (t) {
          case h:
            return "ConcurrentMode";
          case s:
            return "Fragment";
          case l:
            return "Portal";
          case c:
            return "Profiler";
          case u:
            return "StrictMode";
          case y:
            return "Suspense";
        }
        if ("object" === typeof t)
          switch (t.$$typeof) {
            case p:
              return "Context.Consumer";
            case f:
              return "Context.Provider";
            case d:
              var e = t.render;
              return (
                (e = e.displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case v:
              return g(t.type);
            case b:
              if ((t = 1 === t._status ? t._result : null)) return g(t);
          }
        return null;
      }
      var m = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      m.hasOwnProperty("ReactCurrentDispatcher") ||
        (m.ReactCurrentDispatcher = { current: null });
      var _ = {};
      function w(t, e) {
        for (var n = 0 | t._threadCount; n <= e; n++)
          (t[n] = t._currentValue2), (t._threadCount = n + 1);
      }
      for (var x = new Uint16Array(16), O = 0; 15 > O; O++) x[O] = O + 1;
      x[15] = 0;
      var E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        k = Object.prototype.hasOwnProperty,
        A = {},
        N = {};
      function j(t) {
        return (
          !!k.call(N, t) ||
          (!k.call(A, t) && (E.test(t) ? (N[t] = !0) : ((A[t] = !0), !1)))
        );
      }
      function S(t, e, n, r) {
        if (
          null === e ||
          "undefined" === typeof e ||
          (function(t, e, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof e) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : "data-" !== (t = t.toLowerCase().slice(0, 5)) &&
                      "aria-" !== t)
                );
              default:
                return !1;
            }
          })(t, e, n, r)
        )
          return !0;
        if (r) return !1;
        if (null !== n)
          switch (n.type) {
            case 3:
              return !e;
            case 4:
              return !1 === e;
            case 5:
              return isNaN(e);
            case 6:
              return isNaN(e) || 1 > e;
          }
        return !1;
      }
      function T(t, e, n, r, o) {
        (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = t),
          (this.type = e);
      }
      var P = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function(t) {
          P[t] = new T(t, 0, !1, t, null);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"]
        ].forEach(function(t) {
          var e = t[0];
          P[e] = new T(e, 1, !1, t[1], null);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function(t) {
            P[t] = new T(t, 2, !1, t.toLowerCase(), null);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha"
        ].forEach(function(t) {
          P[t] = new T(t, 2, !1, t, null);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function(t) {
            P[t] = new T(t, 3, !1, t.toLowerCase(), null);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function(t) {
          P[t] = new T(t, 3, !0, t, null);
        }),
        ["capture", "download"].forEach(function(t) {
          P[t] = new T(t, 4, !1, t, null);
        }),
        ["cols", "rows", "size", "span"].forEach(function(t) {
          P[t] = new T(t, 6, !1, t, null);
        }),
        ["rowSpan", "start"].forEach(function(t) {
          P[t] = new T(t, 5, !1, t.toLowerCase(), null);
        });
      var C = /[\-:]([a-z])/g;
      function q(t) {
        return t[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function(t) {
          var e = t.replace(C, q);
          P[e] = new T(e, 1, !1, t, null);
        }),
        "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function(t) {
            var e = t.replace(C, q);
            P[e] = new T(e, 1, !1, t, "http://www.w3.org/1999/xlink");
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
          var e = t.replace(C, q);
          P[e] = new T(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace");
        }),
        ["tabIndex", "crossOrigin"].forEach(function(t) {
          P[t] = new T(t, 1, !1, t.toLowerCase(), null);
        });
      var L = /["'&<>]/;
      function M(t) {
        if ("boolean" === typeof t || "number" === typeof t) return "" + t;
        t = "" + t;
        var e = L.exec(t);
        if (e) {
          var n,
            r = "",
            o = 0;
          for (n = e.index; n < t.length; n++) {
            switch (t.charCodeAt(n)) {
              case 34:
                e = "&quot;";
                break;
              case 38:
                e = "&amp;";
                break;
              case 39:
                e = "&#x27;";
                break;
              case 60:
                e = "&lt;";
                break;
              case 62:
                e = "&gt;";
                break;
              default:
                continue;
            }
            o !== n && (r += t.substring(o, n)), (o = n + 1), (r += e);
          }
          t = o !== n ? r + t.substring(o, n) : r;
        }
        return t;
      }
      var R = null,
        I = null,
        D = null,
        B = !1,
        U = !1,
        F = null,
        z = 0;
      function H() {
        return null === R && i("307"), R;
      }
      function Y() {
        return (
          0 < z && i("312"), { memoizedState: null, queue: null, next: null }
        );
      }
      function K() {
        return (
          null === D
            ? null === I
              ? ((B = !1), (I = D = Y()))
              : ((B = !0), (D = I))
            : null === D.next
            ? ((B = !1), (D = D.next = Y()))
            : ((B = !0), (D = D.next)),
          D
        );
      }
      function V(t, e, n, r) {
        for (; U; ) (U = !1), (z += 1), (D = null), (n = t(e, r));
        return (I = R = null), (z = 0), (D = F = null), n;
      }
      function W(t, e) {
        return "function" === typeof e ? e(t) : e;
      }
      function Z(t, e, n) {
        if (((R = H()), (D = K()), B)) {
          var r = D.queue;
          if (((e = r.dispatch), null !== F && void 0 !== (n = F.get(r)))) {
            F.delete(r), (r = D.memoizedState);
            do {
              (r = t(r, n.action)), (n = n.next);
            } while (null !== n);
            return (D.memoizedState = r), [r, e];
          }
          return [D.memoizedState, e];
        }
        return (
          (t =
            t === W
              ? "function" === typeof e
                ? e()
                : e
              : void 0 !== n
              ? n(e)
              : e),
          (D.memoizedState = t),
          (t = (t = D.queue = {
            last: null,
            dispatch: null
          }).dispatch = function(t, e, n) {
            if ((25 > z || i("301"), t === R))
              if (
                ((U = !0),
                (t = { action: n, next: null }),
                null === F && (F = new Map()),
                void 0 === (n = F.get(e)))
              )
                F.set(e, t);
              else {
                for (e = n; null !== e.next; ) e = e.next;
                e.next = t;
              }
          }.bind(null, R, t)),
          [D.memoizedState, t]
        );
      }
      function G() {}
      var $ = 0,
        X = {
          readContext: function(t) {
            var e = $;
            return w(t, e), t[e];
          },
          useContext: function(t) {
            H();
            var e = $;
            return w(t, e), t[e];
          },
          useMemo: function(t, e) {
            if (
              ((R = H()), (e = void 0 === e ? null : e), null !== (D = K()))
            ) {
              var n = D.memoizedState;
              if (null !== n && null !== e) {
                t: {
                  var r = n[1];
                  if (null === r) r = !1;
                  else {
                    for (var o = 0; o < r.length && o < e.length; o++) {
                      var i = e[o],
                        a = r[o];
                      if (
                        (i !== a || (0 === i && 1 / i !== 1 / a)) &&
                        (i === i || a === a)
                      ) {
                        r = !1;
                        break t;
                      }
                    }
                    r = !0;
                  }
                }
                if (r) return n[0];
              }
            }
            return (t = t()), (D.memoizedState = [t, e]), t;
          },
          useReducer: Z,
          useRef: function(t) {
            R = H();
            var e = (D = K()).memoizedState;
            return null === e
              ? ((t = { current: t }), (D.memoizedState = t))
              : e;
          },
          useState: function(t) {
            return Z(W, t);
          },
          useLayoutEffect: function() {},
          useCallback: function(t) {
            return t;
          },
          useImperativeHandle: G,
          useEffect: G,
          useDebugValue: G
        },
        Q = {
          html: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg"
        };
      function J(t) {
        switch (t) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      var tt = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
        },
        et = r({ menuitem: !0 }, tt),
        nt = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        rt = ["Webkit", "ms", "Moz", "O"];
      Object.keys(nt).forEach(function(t) {
        rt.forEach(function(e) {
          (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (nt[e] = nt[t]);
        });
      });
      var ot = /([A-Z])/g,
        it = /^ms-/,
        at = o.Children.toArray,
        lt = m.ReactCurrentDispatcher,
        st = { listing: !0, pre: !0, textarea: !0 },
        ut = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        ct = {},
        ft = {};
      var pt = Object.prototype.hasOwnProperty,
        ht = {
          children: null,
          dangerouslySetInnerHTML: null,
          suppressContentEditableWarning: null,
          suppressHydrationWarning: null
        };
      function dt(t, e) {
        void 0 === t && i("152", g(e) || "Component");
      }
      function yt(t, e, n) {
        function a(o, a) {
          var l = (function(t, e, n) {
              var r = t.contextType;
              if ("object" === typeof r && null !== r) return w(r, n), r[n];
              if ((t = t.contextTypes)) {
                for (var o in ((n = {}), t)) n[o] = e[o];
                e = n;
              } else e = _;
              return e;
            })(a, e, n),
            s = [],
            u = !1,
            c = {
              isMounted: function() {
                return !1;
              },
              enqueueForceUpdate: function() {
                if (null === s) return null;
              },
              enqueueReplaceState: function(t, e) {
                (u = !0), (s = [e]);
              },
              enqueueSetState: function(t, e) {
                if (null === s) return null;
                s.push(e);
              }
            },
            f = void 0;
          if (a.prototype && a.prototype.isReactComponent) {
            if (
              ((f = new a(o.props, l, c)),
              "function" === typeof a.getDerivedStateFromProps)
            ) {
              var p = a.getDerivedStateFromProps.call(null, o.props, f.state);
              null != p && (f.state = r({}, f.state, p));
            }
          } else if (
            ((R = {}),
            (f = a(o.props, l, c)),
            null == (f = V(a, o.props, f, l)) || null == f.render)
          )
            return void dt((t = f), a);
          if (
            ((f.props = o.props),
            (f.context = l),
            (f.updater = c),
            void 0 === (c = f.state) && (f.state = c = null),
            "function" === typeof f.UNSAFE_componentWillMount ||
              "function" === typeof f.componentWillMount)
          )
            if (
              ("function" === typeof f.componentWillMount &&
                "function" !== typeof a.getDerivedStateFromProps &&
                f.componentWillMount(),
              "function" === typeof f.UNSAFE_componentWillMount &&
                "function" !== typeof a.getDerivedStateFromProps &&
                f.UNSAFE_componentWillMount(),
              s.length)
            ) {
              c = s;
              var h = u;
              if (((s = null), (u = !1), h && 1 === c.length)) f.state = c[0];
              else {
                p = h ? c[0] : f.state;
                var d = !0;
                for (h = h ? 1 : 0; h < c.length; h++) {
                  var y = c[h];
                  null !=
                    (y =
                      "function" === typeof y ? y.call(f, p, o.props, l) : y) &&
                    (d ? ((d = !1), (p = r({}, p, y))) : r(p, y));
                }
                f.state = p;
              }
            } else s = null;
          if (
            (dt((t = f.render()), a),
            (o = void 0),
            "function" === typeof f.getChildContext &&
              "object" === typeof (l = a.childContextTypes))
          )
            for (var v in (o = f.getChildContext()))
              v in l || i("108", g(a) || "Unknown", v);
          o && (e = r({}, e, o));
        }
        for (; o.isValidElement(t); ) {
          var l = t,
            s = l.type;
          if ("function" !== typeof s) break;
          a(l, s);
        }
        return { child: t, context: e };
      }
      var vt = (function() {
          function t(e, n) {
            if (!(this instanceof t))
              throw new TypeError("Cannot call a class as a function");
            o.isValidElement(e)
              ? e.type !== s
                ? (e = [e])
                : ((e = e.props.children),
                  (e = o.isValidElement(e) ? [e] : at(e)))
              : (e = at(e)),
              (e = {
                type: null,
                domNamespace: Q.html,
                children: e,
                childIndex: 0,
                context: _,
                footer: ""
              });
            var r = x[0];
            if (0 === r) {
              var a = x,
                l = 2 * (r = a.length);
              65536 >= l || i("304");
              var u = new Uint16Array(l);
              for (u.set(a), (x = u)[0] = r + 1, a = r; a < l - 1; a++)
                x[a] = a + 1;
              x[l - 1] = 0;
            } else x[0] = x[r];
            (this.threadID = r),
              (this.stack = [e]),
              (this.exhausted = !1),
              (this.currentSelectValue = null),
              (this.previousWasTextNode = !1),
              (this.makeStaticMarkup = n),
              (this.suspenseDepth = 0),
              (this.contextIndex = -1),
              (this.contextStack = []),
              (this.contextValueStack = []);
          }
          return (
            (t.prototype.destroy = function() {
              if (!this.exhausted) {
                (this.exhausted = !0), this.clearProviders();
                var t = this.threadID;
                (x[t] = x[0]), (x[0] = t);
              }
            }),
            (t.prototype.pushProvider = function(t) {
              var e = ++this.contextIndex,
                n = t.type._context,
                r = this.threadID;
              w(n, r);
              var o = n[r];
              (this.contextStack[e] = n),
                (this.contextValueStack[e] = o),
                (n[r] = t.props.value);
            }),
            (t.prototype.popProvider = function() {
              var t = this.contextIndex,
                e = this.contextStack[t],
                n = this.contextValueStack[t];
              (this.contextStack[t] = null),
                (this.contextValueStack[t] = null),
                this.contextIndex--,
                (e[this.threadID] = n);
            }),
            (t.prototype.clearProviders = function() {
              for (var t = this.contextIndex; 0 <= t; t--)
                this.contextStack[t][this.threadID] = this.contextValueStack[t];
            }),
            (t.prototype.read = function(t) {
              if (this.exhausted) return null;
              var e = $;
              $ = this.threadID;
              var n = lt.current;
              lt.current = X;
              try {
                for (var r = [""], o = !1; r[0].length < t; ) {
                  if (0 === this.stack.length) {
                    this.exhausted = !0;
                    var a = this.threadID;
                    (x[a] = x[0]), (x[0] = a);
                    break;
                  }
                  var l = this.stack[this.stack.length - 1];
                  if (o || l.childIndex >= l.children.length) {
                    var s = l.footer;
                    if (
                      ("" !== s && (this.previousWasTextNode = !1),
                      this.stack.pop(),
                      "select" === l.type)
                    )
                      this.currentSelectValue = null;
                    else if (
                      null != l.type &&
                      null != l.type.type &&
                      l.type.type.$$typeof === f
                    )
                      this.popProvider(l.type);
                    else if (l.type === y) {
                      this.suspenseDepth--;
                      var u = r.pop();
                      if (o) {
                        o = !1;
                        var c = l.fallbackFrame;
                        c || i("303"), this.stack.push(c);
                        continue;
                      }
                      r[this.suspenseDepth] += u;
                    }
                    r[this.suspenseDepth] += s;
                  } else {
                    var p = l.children[l.childIndex++],
                      h = "";
                    try {
                      h += this.render(p, l.context, l.domNamespace);
                    } catch (d) {
                      throw d;
                    }
                    r.length <= this.suspenseDepth && r.push(""),
                      (r[this.suspenseDepth] += h);
                  }
                }
                return r[0];
              } finally {
                (lt.current = n), ($ = e);
              }
            }),
            (t.prototype.render = function(t, e, n) {
              if ("string" === typeof t || "number" === typeof t)
                return "" === (n = "" + t)
                  ? ""
                  : this.makeStaticMarkup
                  ? M(n)
                  : this.previousWasTextNode
                  ? "\x3c!-- --\x3e" + M(n)
                  : ((this.previousWasTextNode = !0), M(n));
              if (
                ((t = (e = yt(t, e, this.threadID)).child),
                (e = e.context),
                null === t || !1 === t)
              )
                return "";
              if (!o.isValidElement(t)) {
                if (null != t && null != t.$$typeof) {
                  var a = t.$$typeof;
                  a === l && i("257"), i("258", a.toString());
                }
                return (
                  (t = at(t)),
                  this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: t,
                    childIndex: 0,
                    context: e,
                    footer: ""
                  }),
                  ""
                );
              }
              if ("string" === typeof (a = t.type))
                return this.renderDOM(t, e, n);
              switch (a) {
                case u:
                case h:
                case c:
                case s:
                  return (
                    (t = at(t.props.children)),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: t,
                      childIndex: 0,
                      context: e,
                      footer: ""
                    }),
                    ""
                  );
                case y:
                  i("294");
              }
              if ("object" === typeof a && null !== a)
                switch (a.$$typeof) {
                  case d:
                    R = {};
                    var g = a.render(t.props, t.ref);
                    return (
                      (g = V(a.render, t.props, g, t.ref)),
                      (g = at(g)),
                      this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: g,
                        childIndex: 0,
                        context: e,
                        footer: ""
                      }),
                      ""
                    );
                  case v:
                    return (
                      (t = [
                        o.createElement(a.type, r({ ref: t.ref }, t.props))
                      ]),
                      this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: t,
                        childIndex: 0,
                        context: e,
                        footer: ""
                      }),
                      ""
                    );
                  case f:
                    return (
                      (n = {
                        type: t,
                        domNamespace: n,
                        children: (a = at(t.props.children)),
                        childIndex: 0,
                        context: e,
                        footer: ""
                      }),
                      this.pushProvider(t),
                      this.stack.push(n),
                      ""
                    );
                  case p:
                    (a = t.type), (g = t.props);
                    var m = this.threadID;
                    return (
                      w(a, m),
                      (a = at(g.children(a[m]))),
                      this.stack.push({
                        type: t,
                        domNamespace: n,
                        children: a,
                        childIndex: 0,
                        context: e,
                        footer: ""
                      }),
                      ""
                    );
                  case b:
                    i("295");
                }
              i("130", null == a ? a : typeof a, "");
            }),
            (t.prototype.renderDOM = function(t, e, n) {
              var a = t.type.toLowerCase();
              n === Q.html && J(a),
                ct.hasOwnProperty(a) ||
                  (ut.test(a) || i("65", a), (ct[a] = !0));
              var l = t.props;
              if ("input" === a)
                l = r({ type: void 0 }, l, {
                  defaultChecked: void 0,
                  defaultValue: void 0,
                  value: null != l.value ? l.value : l.defaultValue,
                  checked: null != l.checked ? l.checked : l.defaultChecked
                });
              else if ("textarea" === a) {
                var s = l.value;
                if (null == s) {
                  s = l.defaultValue;
                  var u = l.children;
                  null != u &&
                    (null != s && i("92"),
                    Array.isArray(u) && (1 >= u.length || i("93"), (u = u[0])),
                    (s = "" + u)),
                    null == s && (s = "");
                }
                l = r({}, l, { value: void 0, children: "" + s });
              } else if ("select" === a)
                (this.currentSelectValue =
                  null != l.value ? l.value : l.defaultValue),
                  (l = r({}, l, { value: void 0 }));
              else if ("option" === a) {
                u = this.currentSelectValue;
                var c = (function(t) {
                  if (void 0 === t || null === t) return t;
                  var e = "";
                  return (
                    o.Children.forEach(t, function(t) {
                      null != t && (e += t);
                    }),
                    e
                  );
                })(l.children);
                if (null != u) {
                  var f = null != l.value ? l.value + "" : c;
                  if (((s = !1), Array.isArray(u))) {
                    for (var p = 0; p < u.length; p++)
                      if ("" + u[p] === f) {
                        s = !0;
                        break;
                      }
                  } else s = "" + u === f;
                  l = r({ selected: void 0, children: void 0 }, l, {
                    selected: s,
                    children: c
                  });
                }
              }
              for (_ in ((s = l) &&
                (et[a] &&
                  (null != s.children || null != s.dangerouslySetInnerHTML) &&
                  i("137", a, ""),
                null != s.dangerouslySetInnerHTML &&
                  (null != s.children && i("60"),
                  ("object" === typeof s.dangerouslySetInnerHTML &&
                    "__html" in s.dangerouslySetInnerHTML) ||
                    i("61")),
                null != s.style && "object" !== typeof s.style && i("62", "")),
              (s = l),
              (u = this.makeStaticMarkup),
              (c = 1 === this.stack.length),
              (f = "<" + t.type),
              s))
                if (pt.call(s, _)) {
                  var h = s[_];
                  if (null != h) {
                    if ("style" === _) {
                      p = void 0;
                      var d = "",
                        y = "";
                      for (p in h)
                        if (h.hasOwnProperty(p)) {
                          var v = 0 === p.indexOf("--"),
                            b = h[p];
                          if (null != b) {
                            var g = p;
                            if (ft.hasOwnProperty(g)) g = ft[g];
                            else {
                              var m = g
                                .replace(ot, "-$1")
                                .toLowerCase()
                                .replace(it, "-ms-");
                              g = ft[g] = m;
                            }
                            (d += y + g + ":"),
                              (y = p),
                              (d += v =
                                null == b || "boolean" === typeof b || "" === b
                                  ? ""
                                  : v ||
                                    "number" !== typeof b ||
                                    0 === b ||
                                    (nt.hasOwnProperty(y) && nt[y])
                                  ? ("" + b).trim()
                                  : b + "px"),
                              (y = ";");
                          }
                        }
                      h = d || null;
                    }
                    p = null;
                    t: if (((v = a), (b = s), -1 === v.indexOf("-")))
                      v = "string" === typeof b.is;
                    else
                      switch (v) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                          v = !1;
                          break t;
                        default:
                          v = !0;
                      }
                    v
                      ? ht.hasOwnProperty(_) ||
                        (p =
                          j((p = _)) && null != h ? p + '="' + M(h) + '"' : "")
                      : ((v = _),
                        (p = h),
                        (h = P.hasOwnProperty(v) ? P[v] : null),
                        (b = "style" !== v) &&
                          (b =
                            null !== h
                              ? 0 === h.type
                              : 2 < v.length &&
                                ("o" === v[0] || "O" === v[0]) &&
                                ("n" === v[1] || "N" === v[1])),
                        b || S(v, p, h, !1)
                          ? (p = "")
                          : null !== h
                          ? ((v = h.attributeName),
                            (p =
                              3 === (h = h.type) || (4 === h && !0 === p)
                                ? v + '=""'
                                : v + '="' + M(p) + '"'))
                          : (p = j(v) ? v + '="' + M(p) + '"' : "")),
                      p && (f += " " + p);
                  }
                }
              u || (c && (f += ' data-reactroot=""'));
              var _ = f;
              (s = ""),
                tt.hasOwnProperty(a)
                  ? (_ += "/>")
                  : ((_ += ">"), (s = "</" + t.type + ">"));
              t: {
                if (null != (u = l.dangerouslySetInnerHTML)) {
                  if (null != u.__html) {
                    u = u.__html;
                    break t;
                  }
                } else if (
                  "string" === typeof (u = l.children) ||
                  "number" === typeof u
                ) {
                  u = M(u);
                  break t;
                }
                u = null;
              }
              return (
                null != u
                  ? ((l = []),
                    st[a] && "\n" === u.charAt(0) && (_ += "\n"),
                    (_ += u))
                  : (l = at(l.children)),
                (t = t.type),
                (n =
                  null == n || "http://www.w3.org/1999/xhtml" === n
                    ? J(t)
                    : "http://www.w3.org/2000/svg" === n &&
                      "foreignObject" === t
                    ? "http://www.w3.org/1999/xhtml"
                    : n),
                this.stack.push({
                  domNamespace: n,
                  type: a,
                  children: l,
                  childIndex: 0,
                  context: e,
                  footer: s
                }),
                (this.previousWasTextNode = !1),
                _
              );
            }),
            t
          );
        })(),
        bt = {
          renderToString: function(t) {
            t = new vt(t, !1);
            try {
              return t.read(1 / 0);
            } finally {
              t.destroy();
            }
          },
          renderToStaticMarkup: function(t) {
            t = new vt(t, !0);
            try {
              return t.read(1 / 0);
            } finally {
              t.destroy();
            }
          },
          renderToNodeStream: function() {
            i("207");
          },
          renderToStaticNodeStream: function() {
            i("208");
          },
          version: "16.8.4"
        },
        gt = { default: bt },
        mt = (gt && bt) || gt;
      t.exports = mt.default || mt;
    }
  ])
]);
//# sourceMappingURL=15.4a7c2e2c.chunk.js.map
