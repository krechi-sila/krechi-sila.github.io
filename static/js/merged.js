(function (e) {
  function s (i, s, o) {
    var u = !1
    if (n) {
      var a = []
      e.each(r, function () {
        o.hasOwnProperty(this) && (u = !0) && a.push({
          name: this,
          val: o[this]
        })
      }), u && (e.each(o, function (e) {
        a.push({
          name: e,
          val: this
        })
      }), o = a)
    }
    e.each(o, function (n, r) {
      u && (n = r.name, r = r.val)
      if (e.isFunction(r) && (!t || r.toString().indexOf('.__base') > -1)) {
        var o = i[n] || function () {}
        s[n] = function () {
          var e = this.__base
          this.__base = o
          var t = r.apply(this, arguments)
          return this.__base = e, t
        }
      } else {
        s[n] = r
      }
    })
  }

  var t = function () {
      _
    }.toString().indexOf('_') > -1,
    n = e.browser.msie,
    r = n ? ['toString', 'valueOf'] : null,
    i = function () {}
  e.inherit = function () {
    var t = arguments,
      n = e.isFunction(t[0]),
      r = n ? t[0] : i,
      o = t[n ? 1 : 0] || {},
      u = t[n ? 2 : 1],
      a = o.__constructor || n && r.prototype.__constructor ? function () {
        return this.__constructor.apply(this, arguments)
      } : function () {}
    if (!n) return a.prototype = o, a.prototype.__self = a.prototype.constructor = a, e.extend(a, u)
    e.extend(a, r)
    var f = function () {},
      l = f.prototype = r.prototype,
      c = a.prototype = new f
    return c.__self = c.constructor = a, s(l, c, o), u && s(r, a, u), a
  }, e.inheritSelf = function (e, t, n) {
    var r = e.prototype
    return s(r, r, t), n && s(e, e, n), e
  }
})(jQuery),
  function (e) {
    var t = 0,
      n = '__' + +(new Date),
      r = function () {
        return 'uniq' + ++t
      }
    e.identify = function (e, t) {
      if (!e) return r()
      var i = 'uniqueID' in e ? 'uniqueID' : n
      return t || i in e ? e[i] : e[i] = r()
    }
  }(jQuery),
  function (e) {
    e.isEmptyObject || (e.isEmptyObject = function (e) {
      for (var t in e) return !1;
      return !0
    })
  }(jQuery),
  function (e) {
    e.extend({
      debounce: function (e, t, n, r) {
        arguments.length == 3 && typeof n != 'boolean' && (r = n, n = !1)
        var i
        return function () {
          var s = arguments
          r = r || this, n && !i && e.apply(r, s), clearTimeout(i), i = setTimeout(function () {
            n || e.apply(r, s), i = null
          }, t)
        }
      },
      throttle: function (e, t, n) {
        var r, i, s
        return function () {
          i = arguments, s = !0, n = n || this, r || function () {
            s ? (e.apply(n, i), s = !1, r = setTimeout(arguments.callee, t)) : r = null
          }()
        }
      }
    })
  }(jQuery),
  function (e) {
    var t = '__' + +(new Date) + 'storage',
      n = function (t, n) {
        return e.identify(t) + (n ? e.identify(n) : '')
      },
      r = {
        buildEventName: function (e) {
          return e
        },
        on: function (r, i, s, o, u) {
          if (typeof r == 'string') {
            e.isFunction(i) && (o = s, s = i, i = undefined)
            var a = n(s, o),
              f = this[t] || (this[t] = {}),
              l = r.split(' '),
              c = 0,
              h
            while (r = l[c++]) {
              r = this.buildEventName(r), h = f[r] || (f[r] = {
                ids: {},
                list: {}
              })
              if (!(a in h.ids)) {
                var p = h.list,
                  d = {
                    fn: s,
                    data: i,
                    ctx: o,
                    special: u
                  }
                p.last ? (p.last.next = d, d.prev = p.last) : p.first = d, h.ids[a] = p.last = d
              }
            }
          } else {
            var v = this
            e.each(r, function (e, t) {
              v.on(e, t, i, u)
            })
          }
          return this
        },
        onFirst: function (e, t, n, r) {
          return this.on(e, t, n, r, {
            one: !0
          })
        },
        un: function (r, i, s) {
          if (typeof r == 'string' || typeof r == 'undefined') {
            var o = this[t]
            if (o) {
              if (r) {
                var u = r.split(' '),
                  a = 0,
                  f
                while (r = u[a++]) {
                  r = this.buildEventName(r)
                  if (f = o[r]) {
                    if (i) {
                      var l = n(i, s),
                        c = f.ids
                      if (l in c) {
                        var h = f.list,
                          p = c[l],
                          d = p.prev,
                          v = p.next
                        d ? d.next = v : p === h.first && (h.first = v), v
                          ? v.prev = d
                          : p === h.last && (h.last = d), delete c[l]
                      }
                    } else {
                      delete this[t][r]
                    }
                  }
                }
              } else {
                delete this[t]
              }
            }
          } else {
            var m = this
            e.each(r, function (e, t) {
              m.un(e, t, s)
            })
          }
          return this
        },
        trigger: function (n, r) {
          var i = this,
            s = i[t],
            o
          typeof n == 'string'
            ? n = e.Event(i.buildEventName(o = n))
            : n.type = i.buildEventName(o = n.type), n.target || (n.target = i)
          if (s && (s = s[n.type])) {
            var u = s.list.first,
              a
            while (u) n.data = u.data, a = u.fn.call(u.ctx || i, n, r), typeof a != 'undefined' && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())), u.special && u.special.one && i.un(o, u.fn, u.ctx), u = u.next
          }
          return this
        }
      }
    e.observable = e.inherit(r, r)
  }(jQuery),
  function (e, t) {
    function s (e, t, n) {
      return (e ? '__elem_' + e : '') + '__mod' + (t ? '_' + t : '') + (n ? '_' + n : '')
    }

    function o (t, n, r) {
      e.isFunction(t) ? n[s(r, '*', '*')] = t : e.each(t, function (t, i) {
        e.isFunction(i) ? n[s(r, t, '*')] = i : e.each(i, function (e, i) {
          n[s(r, t, e)] = i
        })
      })
    }

    function u (e, t) {
      return t ? Array.isArray(t) ? function (n) {
        var r = 0,
          i = t.length
        while (r < i) {
          if (n.hasMod(e, t[r++])) return !0
        }
        return !1
      } : function (n) {
        return n.hasMod(e, t)
      } : function (t) {
        return t.hasMod(e)
      }
    }

    var n = [],
      r = {},
      i = {}
    this.BEM = e.inherit(e.observable, {
      __constructor: function (e, t, n) {
        var r = this
        r._modCache = e || {}, r._processingMods = {}, r._params = t, r.params = null, n !== !1
          ? r._init()
          : r.afterCurrentEvent(function () {
            r._init()
          })
      },
      _init: function () {
        return !this._initing && !this.hasMod('js', 'inited') && (this._initing = !0, this.params || (this.params = e.extend(this.getDefaultParams(), this._params), delete this._params), this.setMod('js', 'inited'), delete this._initing, this.hasMod('js', 'inited') && this.trigger('init')), this
      },
      changeThis: function (e, t) {
        return e.bind(t || this)
      },
      afterCurrentEvent: function (e, t) {
        this.__self.afterCurrentEvent(this.changeThis(e, t))
      },
      trigger: function (e, t) {
        return this.__base(e = this.buildEvent(e), t).__self.trigger(e, t), this
      },
      buildEvent: function (t) {
        return typeof t == 'string' && (t = e.Event(t)), t.block = this, t
      },
      hasMod: function (e, n, r) {
        var i = arguments.length,
          s = !1
        i == 1 ? (r = '', n = e, e = t, s = !0) : i == 2 && (typeof e == 'string'
          ? (r = n, n = e, e = t)
          : (r = '', s = !0))
        var o = this.getMod(e, n) === r
        return s ? !o : o
      },
      getMod: function (e, t) {
        var n = typeof e
        if (n === 'string' || n === 'undefined') {
          t = e || t
          var r = this._modCache
          return t in r ? r[t] : r[t] = this._extractModVal(t)
        }
        return this._getElemMod(t, e)
      },
      _getElemMod: function (e, t, n) {
        return this._extractModVal(e, t, n)
      },
      getMods: function (e) {
        var n = e && typeof e != 'string',
          r = this,
          i = [].slice.call(arguments, n ? 1 : 0),
          s = r._extractMods(i, n ? e : t)
        return n || (i.length ? i.forEach(function (e) {
          r._modCache[e] = s[e]
        }) : r._modCache = s), s
      },
      setMod: function (n, r, i) {
        typeof i == 'undefined' && (i = r, r = n, n = t)
        var s = this
        if (!n || n[0]) {
          var o = (n && n[0] ? e.identify(n[0]) : '') + '_' + r
          if (this._processingMods[o]) return s
          var u, a = n ? s._getElemMod(r, n, u = s.__self._extractElemNameFrom(n)) : s.getMod(r)
          if (a === i) return s
          this._processingMods[o] = !0
          var f = !0,
            l = [r, i, a]
          n && l.unshift(n), [
            ['*', '*'],
            [r, '*'],
            [r, i]
          ].forEach(function (e) {
            f = s._callModFn(u, e[0], e[1], l) !== !1 && f
          }), !n && f && (s._modCache[r] = i), f && s._afterSetMod(r, i, a, n, u), delete this._processingMods[o]
        }
        return s
      },
      _afterSetMod: function (e, t, n, r, i) {},
      toggleMod: function (e, n, r, i, s) {
        typeof e == 'string' && (s = i, i = r, r = n, n = e, e = t), typeof i == 'undefined'
          ? i = ''
          : typeof i == 'boolean' && (s = i, i = '')
        var o = this.getMod(e, n)
        return (o == r || o == i) && this.setMod(e, n, typeof s == 'boolean'
          ? s
                                                         ? r
                                                         : i
          : this.hasMod(e, n, r)
                                                         ? i
                                                         : r), this
      },
      delMod: function (e, n) {
        return n || (n = e, e = t), this.setMod(e, n, '')
      },
      _callModFn: function (e, n, r, i) {
        var o = s(e, n, r)
        return this[o] ? this[o].apply(this, i) : t
      },
      _extractModVal: function (e, t) {
        return ''
      },
      _extractMods: function (e, t) {
        return {}
      },
      channel: function (e, t) {
        return this.__self.channel(e, t)
      },
      getDefaultParams: function () {
        return {}
      },
      del: function (e) {
        var t = [].slice.call(arguments)
        return typeof e == 'string' && t.unshift(this), this.__self.del.apply(this.__self, t), this
      },
      destruct: function () {}
    }, {
      _name: 'i-bem',
      blocks: r,
      decl: function (n, i, s) {
        typeof n == 'string' ? n = {
          block: n
        } : n.name && (n.block = n.name)
        if (n.baseBlock && !r[n.baseBlock]) throw 'baseBlock "' + n.baseBlock + '" for "' + n.block + '" is undefined'
        i || (i = {}), i.onSetMod && (o(i.onSetMod, i), delete i.onSetMod), i.onElemSetMod && (e.each(i.onElemSetMod, function (e, t) {
          o(t, i, e)
        }), delete i.onElemSetMod)
        var a = r[n.baseBlock || n.block] || this
        if (n.modName) {
          var f = u(n.modName, n.modVal)
          e.each(i, function (n, r) {
            e.isFunction(r) && (i[n] = function () {
              var e
              if (f(this)) {
                e = r
              } else {
                var s = a.prototype[n]
                s && s !== i[n] && (e = this.__base)
              }
              return e ? e.apply(this, arguments) : t
            })
          })
        }
        if (s && typeof s.live == 'boolean') {
          var l = s.live
          s.live = function () {
            return l
          }
        }
        var c
        return n.block == a._name
          ? (c = e.inheritSelf(a, i, s))._processLive(!0)
          : (c = r[n.block] = e.inherit(a, i, s))._name = n.block, c
      },
      _processLive: function (e) {
        return !1
      },
      create: function (e, t) {
        return typeof e == 'string' && (e = {
          block: e
        }), new r[e.block](e.mods, t)
      },
      getName: function () {
        return this._name
      },
      _extractElemNameFrom: function (e) {},
      afterCurrentEvent: function (e, t) {
        n.push({
          fn: e,
          ctx: t
        }) == 1 && setTimeout(this._runAfterCurrentEventFns, 0)
      },
      _runAfterCurrentEventFns: function () {
        var e = n.length
        if (e) {
          var t, r = n.splice(0, e)
          while (t = r.shift()) t.fn.call(t.ctx || this)
        }
      },
      changeThis: function (e, t) {
        return e.bind(t || this)
      },
      del: function (e) {
        var t = typeof e == 'string',
          n = t ? 0 : 1,
          r = arguments.length
        t && (e = this)
        while (n < r) delete e[arguments[n++]]
        return this
      },
      channel: function (n, r) {
        typeof n == 'boolean' && (r = n, n = t), n || (n = 'default')
        if (r) {
          i[n] && (i[n].un(), delete i[n])
          return
        }
        return i[n] || (i[n] = new e.observable)
      }
    })
  }(jQuery),
  function () {
    Object.keys || (Object.keys = function (e) {
      var t = []
      for (var n in e) e.hasOwnProperty(n) && t.push(n);
      return t
    })
  }(),
  function () {
    var e = Array.prototype,
      t = Object.prototype.toString,
      n = {
        indexOf: function (e, t) {
          t = +(t || 0)
          var n = this,
            r = n.length
          if (r > 0 && t < r) {
            t = t < 0 ? Math.ceil(t) : Math.floor(t), t < -r && (t = 0), t < 0 && (t += r)
            while (t < r) {
              if (t in n && n[t] === e) return t
              ++t
            }
          }
          return -1
        },
        forEach: function (e, t) {
          var n = -1,
            r = this,
            i = r.length
          while (++n < i) n in r && (t ? e.call(t, r[n], n, r) : e(r[n], n, r))
        },
        map: function (e, t) {
          var n = -1,
            r = this,
            i = r.length,
            s = new Array(i)
          while (++n < i) n in r && (s[n] = t ? e.call(t, r[n], n, r) : e(r[n], n, r))
          return s
        },
        filter: function (e, t) {
          var n = -1,
            r = this,
            i = r.length,
            s = []
          while (++n < i) n in r && (t ? e.call(t, r[n], n, r) : e(r[n], n, r)) && s.push(r[n])
          return s
        },
        reduce: function (e, t) {
          var n = -1,
            r = this,
            i = r.length,
            s
          if (arguments.length < 2) {
            while (++n < i) {
              if (n in r) {
                s = r[n]
                break
              }
            }
          } else {
            s = t
          }
          while (++n < i) n in r && (s = e(s, r[n], n, r))
          return s
        },
        some: function (e, t) {
          var n = -1,
            r = this,
            i = r.length
          while (++n < i) {
            if (n in r && (t ? e.call(t, r[n], n, r) : e(r[n], n, r))) return !0
          }
          return !1
        },
        every: function (e, t) {
          var n = -1,
            r = this,
            i = r.length
          while (++n < i) {
            if (n in r && (t ? !e.call(t, r[n], n, r) : !e(r[n], n, r))) return !1
          }
          return !0
        }
      }
    for (var r in n) e[r] || (e[r] = n[r]);
    Array.isArray || (Array.isArray = function (e) {
      return t.call(e) === '[object Array]'
    })
  }(),
  function () {
    var e = Array.prototype.slice
    Function.prototype.bind || (Function.prototype.bind = function (t) {
      var n = this,
        r = e.call(arguments, 1)
      return function () {
        return n.apply(t, r.concat(e.call(arguments)))
      }
    })
  }(),
  function (e, t, n) {
    function o (e, t, n) {
      n.push(r, e, r, t)
    }

    function u (e, t, n, r) {
      r.push(e), n && o(t, n, r)
    }

    function a (e, t, r, s, a) {
      u(e, n, n, a), a.push(i, t), s && o(r, s, a)
    }

    var r = '_',
      i = '__',
      s = '[a-zA-Z0-9-]+'
    e.INTERNAL = {
      NAME_PATTERN: s,
      MOD_DELIM: r,
      ELEM_DELIM: i,
      buildModPostfix: function (e, t, n) {
        var r = n || []
        return o(e, t, r), n ? r : r.join('')
      },
      buildClass: function (e, t, r, i, s) {
        var o = typeof r
        o == 'string'
          ? typeof i != 'string' && (s = i, i = r, r = t, t = n)
          : o != 'undefined'
          ? (s = r, r = n)
          : t && typeof t != 'string' && (s = t, t = n)
        if (!(t || r || s)) return e
        var f = s || []
        return t ? a(e, t, r, i, f) : u(e, r, i, f), s ? f : f.join('')
      },
      buildClasses: function (e, r, i, s) {
        r && typeof r != 'string' && (s = i, i = r, r = n)
        var o = s || []
        return r ? a(e, r, n, n, o) : u(e, n, n, o), i && t.each(i, function (t, n) {
          n && (o.push(' '), r ? a(e, r, t, n, o) : u(e, t, n, o))
        }), s ? o : o.join('')
      }
    }
  }(BEM, jQuery),
  function (e, t, n) {
    function g (e, n) {
      var r = e[0]
      t.each(E(r), function (i, s) {
        b(s, r, i, n)
        var u = o[s.uniqId]
        u
          ? u.domElem.index(r) < 0 && (u.domElem = u.domElem.add(e), t.extend(u._params, s))
          : y(i, e, s)
      })
    }

    function y (e, r, i, u, a) {
      typeof i == 'boolean' && (a = u, u = i, i = n)
      var f = r[0]
      i = b(i || E(f)[e], f, e)
      var c = i.uniqId
      if (o[c]) return o[c]._init()
      s[c] = s[c] ? s[c].add(r) : r
      var h = f.parentNode;
      (!h || h.nodeType === 11) && t.unique(s[c])
      var p = l[e] || C.decl(e, {}, {
        live: !0
      })
      if (!(p._liveInitable = !!p._processLive()) || u || i.live === !1) {
        var d = new p(s[c], i, !!u)
        return delete s[c], a && a.apply(d, Array.prototype.slice.call(arguments, 4)), d
      }
    }

    function b (e, n, r, i) {
      (e || (e = {})).uniqId || (e.uniqId = (e.id
        ? r + '-id-' + e.id
        : t.identify()) + (i || t.identify()))
      var s = t.identify(n),
        o = u[s] || (u[s] = {})
      return o[r] || (o[r] = e), e
    }

    function w (e, t, n) {
      var r = e.find(t)
      return n ? r : r.add(e.filter(t))
    }

    function E (e) {
      var n = t.identify(e)
      return u[n] || (u[n] = S(e))
    }

    function S (e) {
      var n = e.onclick || e.ondblclick
      if (!n && e.tagName.toLowerCase() == 'body') {
        var r = t(e),
          i = r.attr('onclick') || r.attr('ondblclick')
        i && (n = Function(i))
      }
      return n ? n() : {}
    }

    function x (e) {
      delete u[t.identify(e)]
    }

    function T (e, t) {
      e.domElem.length === 1 ? e.destruct(!0) : e.domElem = e.domElem.not(t)
    }

    function N () {
      return i[0][t.support.boxModel ? 'documentElement' : 'body']
    }

    var r = t(window),
      i = t(document),
      s = {},
      o = {},
      u = {},
      a = {},
      f = {},
      l = e.blocks,
      c = e.INTERNAL,
      h = c.NAME_PATTERN,
      p = c.MOD_DELIM,
      d = c.ELEM_DELIM,
      v = c.buildModPostfix,
      m = c.buildClass
    t.fn.bem = function (e, t) {
      return y(e, this, t, !0)
    }
    var C = e.DOM = e.decl('i-bem__dom', {
      __constructor: function (e, n, r) {
        var i = this
        i.domElem = e, i._eventNameCache = {}, i._elemCache = {}, o[i._uniqId = n.uniqId || t.identify(i)] = i, i._needSpecialUnbind = !1, i.__base(null, n, r)
      },
      findBlocksInside: function (e, t) {
        return this._findBlocks('find', e, t)
      },
      findBlockInside: function (e, t) {
        return this._findBlocks('find', e, t, !0)
      },
      findBlocksOutside: function (e, t) {
        return this._findBlocks('parents', e, t)
      },
      findBlockOutside: function (e, t) {
        return this._findBlocks('closest', e, t)[0] || null
      },
      findBlocksOn: function (e, t) {
        return this._findBlocks('', e, t)
      },
      findBlockOn: function (e, t) {
        return this._findBlocks('', e, t, !0)
      },
      _findBlocks: function (e, r, i, s) {
        i || (i = r, r = n)
        var o = r ? typeof r == 'string' ? this.findElem(r) : r : this.domElem,
          u = typeof i == 'string',
          a = u ? i : i.block || i.blockName,
          f = '.' + (u ? m(a) : m(a, i.modName, i.modVal)) + (s ? ':first' : ''),
          l = o.filter(f)
        e && (l = l.add(o[e](f)))
        if (s) return l[0] ? y(a, l.eq(0), !0) : null
        var c = [],
          h = {}
        return t.each(l, function (e, n) {
          var r = y(a, t(n), !0)
          h[r._uniqId] || (h[r._uniqId] = !0, c.push(r))
        }), c
      },
      bindToDomElem: function (e, n, r) {
        var i = this
        return r ? e.bind(i._buildEventName(n), function (e) {
          return (e.data || (e.data = {})).domElem = t(this), r.apply(i, arguments)
        }) : t.each(n, function (t, n) {
          i.bindToDomElem(e, t, n)
        }), i
      },
      bindToDoc: function (e, t) {
        return this._needSpecialUnbind = !0, this.bindToDomElem(i, e, t)
      },
      bindToWin: function (e, t) {
        return this._needSpecialUnbind = !0, this.bindToDomElem(r, e, t)
      },
      bindTo: function (e, n, r) {
        return !n || t.isFunction(n)
          ? (r = n, n = e, e = this.domElem)
          : typeof e == 'string' && (e = this.elem(e)), this.bindToDomElem(e, n, r)
      },
      unbindFromDomElem: function (e, t) {
        return e.unbind(this._buildEventName(t)), this
      },
      unbindFromDoc: function (e) {
        return this.unbindFromDomElem(i, e)
      },
      unbindFromWin: function (e) {
        return this.unbindFromDomElem(r, e)
      },
      unbindFrom: function (e, t) {
        return t
          ? typeof e == 'string' && (e = this.elem(e))
          : (t = e, e = this.domElem), this.unbindFromDomElem(e, t)
      },
      _buildEventName: function (e) {
        var t = this
        return e.indexOf(' ') > 1 ? e.split(' ').map(function (e) {
          return t._buildOneEventName(e)
        }).join(' ') : t._buildOneEventName(e)
      },
      _buildOneEventName: function (e) {
        var t = this,
          n = t._eventNameCache
        if (e in n) return n[e]
        var r = '.' + t._uniqId
        if (e.indexOf('.') < 0) return n[e] = e + r
        var i = '.bem_' + t.__self._name
        return n[e] = e.split('.').map(function (e, t) {
          return t == 0 ? e + i : i + '_' + e
        }).join('') + r
      },
      trigger: function (e, t) {
        return this.__base(e = this.buildEvent(e), t).domElem && this._ctxTrigger(e, t), this
      },
      _ctxTrigger: function (e, n) {
        var r = this,
          i = a[r.__self._buildCtxEventName(e.type)],
          s = {}
        i && r.domElem.each(function () {
          var o = this,
            u = i.counter
          while (o && u) {
            var a = t.identify(o, !0)
            if (a) {
              if (s[a]) break
              var f = i.ctxs[a]
              f && (t.each(f, function (t, i) {
                i.fn.call(i.ctx || r, e, n)
              }), u--), s[a] = !0
            }
            o = o.parentNode
          }
        })
      },
      setMod: function (e, n, r) {
        if (e && typeof r != 'undefined' && e.length > 1) {
          var i = this
          return e.each(function () {
            var s = t(this)
            s.__bemElemName = e.__bemElemName, i.setMod(s, n, r)
          }), i
        }
        return this.__base(e, n, r)
      },
      _extractModVal: function (e, t, n) {
        var r = (t || this.domElem)[0],
          i
        return r && (i = r.className.match(this.__self._buildModValRE(e, n || t))), i ? i[2] : ''
      },
      _extractMods: function (e, t) {
        var n = {},
          r = !e.length,
          i = 0
        return ((t || this.domElem)[0].className.match(this.__self._buildModValRE('(' + (r
          ? h
          : e.join('|')) + ')', t, 'g')) || []).forEach(function (e) {
          var t = (e = e.trim()).lastIndexOf(p),
            r = e.substr(0, t - 1).lastIndexOf(p)
          n[e.substr(r + 1, t - r - 1)] = e.substr(t + 1), ++i
        }), i < e.length && e.forEach(function (e) {
          e in n || (n[e] = '')
        }), n
      },
      _afterSetMod: function (e, n, r, i, s) {
        var o = this.__self,
          u = o._buildModClassPrefix(e, s),
          a = o._buildModValRE(e, s),
          f = n === '';
        (i || this.domElem).each(function () {
          var e = this.className
          e.indexOf(u) > -1
            ? this.className = e.replace(a, (f ? '' : '$1' + u + n) + '$3')
            : f || t(this).addClass(u + n)
        }), s && this.dropElemCache(s, e, r).dropElemCache(s, e, n)
      },
      findElem: function (e, t, n, r) {
        arguments.length % 2
          ? (r = n, n = t, t = e, e = this.domElem)
          : typeof e == 'string' && (e = this.findElem(e))
        var i = this.__self,
          s = '.' + t.split(' ').map(function (e) {
            return m(i._name, e, n, r)
          }).join(',.')
        return w(e, s)
      },
      _elem: function (e, t, n) {
        var r = e + v(t, n),
          i
        return (i = this._elemCache[r]) || (i = this._elemCache[r] = this.findElem(e, t, n), i.__bemElemName = e), i
      },
      elem: function (e, n, r) {
        if (n && typeof n != 'string') return n.__bemElemName = e, n
        if (e.indexOf(' ') < 0) return this._elem(e, n, r)
        var i = t([]),
          s = this
        return e.split(' ').forEach(function (e) {
          i = i.add(s._elem(e, n, r))
        }), i
      },
      dropElemCache: function (e, t, n) {
        if (e) {
          var r = this,
            i = v(t, n)
          e.indexOf(' ') < 0 ? delete r._elemCache[e + i] : e.split(' ').forEach(function (e) {
            delete r._elemCache[e + i]
          })
        } else {
          this._elemCache = {}
        }
        return this
      },
      elemParams: function (e) {
        var t
        return typeof e == 'string'
          ? (t = e, e = this.elem(e))
          : t = this.__self._extractElemNameFrom(e), S(e[0])[m(this.__self.getName(), t)] || {}
      },
      containsDomElem: function (e) {
        var t = !1
        return this.domElem.each(function () {
          return !(t = e.parents().andSelf().index(this) > -1)
        }), t
      },
      buildSelector: function (e, t, n) {
        return this.__self.buildSelector(e, t, n)
      },
      destruct: function (e) {
        var n = this,
          r = n.__self
        n._isDestructing = !0, n._needSpecialUnbind && r.doc.add(r.win)
          .unbind('.' + n._uniqId), n.dropElemCache().domElem.each(function (e, n) {
          var r = E(n)
          t.each(r, function (e, t) {
            var i = o[t.uniqId]
            i ? i._isDestructing || (T(i, n), delete r[e]) : delete s[t.uniqId]
          }), t.isEmptyObject(r) && x(n)
        }), e || n.domElem.remove(), delete o[n.un()._uniqId], delete n.domElem, delete n._elemCache, n.__base()
      }
    }, {
      doc: i,
      win: r,
      _processLive: function (e) {
        var t = this,
          n = t._liveInitable
        if ('live' in t) {
          var r = typeof n == 'undefined'
          r ^ e && (n = t.live() !== !1, t.live = function () {})
        }
        return n
      },
      init: function (e, n, r) {
        if (!e || t.isFunction(e)) r = n, n = e, e = i
        var s = t.identify()
        return w(e, '.i-bem').each(function () {
          g(t(this), s)
        }), n && this.afterCurrentEvent(function () {
          n.call(r || this, e)
        }), this._runAfterCurrentEventFns(), e
      },
      destruct: function (e, r, i) {
        typeof e != 'boolean' && (i = r, r = e, e = n), w(r, '.i-bem', i).each(function (e, n) {
          var r = E(this)
          t.each(r, function (e, t) {
            if (t.uniqId) {
              var i = o[t.uniqId]
              i ? (T(i, n), delete r[e]) : delete s[t.uniqId]
            }
          }), t.isEmptyObject(r) && x(this)
        }), e || (i ? r.empty() : r.remove())
      },
      update: function (e, t, n, r) {
        this.destruct(e, !0), this.init(e.html(t), n, r)
      },
      replace: function (e, n) {
        this.destruct(!0, e), this.init(t(n).replaceAll(e))
      },
      append: function (e, n) {
        this.init(t(n).appendTo(e))
      },
      prepend: function (e, n) {
        this.init(t(n).prependTo(e))
      },
      before: function (e, n) {
        this.init(t(n).insertBefore(e))
      },
      after: function (e, n) {
        this.init(t(n).insertAfter(e))
      },
      _buildCtxEventName: function (e) {
        return this._name + ':' + e
      },
      _liveClassBind: function (e, n, r, s) {
        var o = this
        if (n.indexOf(' ') > -1) {
          n.split(' ').forEach(function (t) {
            o._liveClassBind(e, t, r, s)
          })
        } else {
          var u = f[n],
            a = t.identify(r)
          u || (u = f[n] = {}, i.bind(n, o.changeThis(o._liveClassTrigger, o))), u = u[e] || (u[e] = {
            uniqIds: {},
            fns: []
          }), a in u.uniqIds || (u.fns.push({
            uniqId: a,
            fn: o._buildLiveEventFn(r, s)
          }), u.uniqIds[a] = u.fns.length - 1)
        }
        return this
      },
      _liveClassUnbind: function (e, n, r) {
        var i = f[n]
        if (i) {
          if (r) {
            if (i = i[e]) {
              var s = t.identify(r)
              if (s in i.uniqIds) {
                var o = i.uniqIds[s],
                  u = i.fns.length - 1
                i.fns.splice(o, 1)
                while (o < u) i.uniqIds[i.fns[o++].uniqId] = o - 1
                delete i.uniqIds[s]
              }
            }
          } else {
            delete i[e]
          }
        }
        return this
      },
      _liveClassTrigger: function (e) {
        var n = f[e.type]
        if (n) {
          var r = e.target,
            i = []
          for (var s in n) n.hasOwnProperty(s) && i.push(s);
          do {
            var o = ' ' + r.className + ' ',
              u = 0
            while (s = i[u++]) {
              if (o.indexOf(' ' + s + ' ') > -1) {
                var a = 0,
                  l = n[s].fns,
                  c, h = !1
                while (c = l[a++]) c.fn.call(t(r), e) === !1 && (h = !0)
                h && e.preventDefault()
                if (h || e.isPropagationStopped()) return
                i.splice(--u, 1)
              }
            }
          } while (i.length && (r = r.parentNode))
        }
      },
      _buildLiveEventFn: function (e, n) {
        var r = this
        return function (i) {
          var s = [r._name, ((i.data || (i.data = {})).domElem = t(this)).closest(r.buildSelector()), !0],
            o = y.apply(null, n ? s.concat([e, i]) : s)
          if (o && !n && e) return e.apply(o, arguments)
        }
      },
      liveInitOnEvent: function (e, t, n) {
        return this.liveBindTo(e, t, n, !0)
      },
      liveBindTo: function (e, r, i, s) {
        if (!r || t.isFunction(r)) i = r, r = e, e = n
        if (!e || typeof e == 'string') {
          e = {
            elem: e
          }
        }
        e.elemName && (e.elem = e.elemName)
        var o = this
        return e.elem && e.elem.indexOf(' ') > 1 ? (e.elem.split(' ').forEach(function (t) {
          o._liveClassBind(m(o._name, t, e.modName, e.modVal), r, i, s)
        }), o) : o._liveClassBind(m(o._name, e.elem, e.modName, e.modVal), r, i, s)
      },
      liveUnbindFrom: function (e, t, n) {
        var r = this
        return e.indexOf(' ') > 1 ? (e.split(' ').forEach(function (e) {
          r._liveClassUnbind(m(r._name, e), t, n)
        }), r) : r._liveClassUnbind(m(r._name, e), t, n)
      },
      _liveInitOnBlockEvent: function (e, t, n, r) {
        var i = this._name
        return l[t].on(e, function (e) {
          var t = arguments,
            s = e.block[r](i)
          n && s.forEach(function (e) {
            n.apply(e, t)
          })
        }), this
      },
      liveInitOnBlockEvent: function (e, t, n) {
        return this._liveInitOnBlockEvent(e, t, n, 'findBlocksOn')
      },
      liveInitOnBlockInsideEvent: function (e, t, n) {
        return this._liveInitOnBlockEvent(e, t, n, 'findBlocksOutside')
      },
      liveInitOnBlockInit: function (e, t) {
        return this.liveInitOnBlockEvent('init', e, t)
      },
      liveInitOnBlockInsideInit: function (e, t) {
        return this.liveInitOnBlockInsideEvent('init', e, t)
      },
      on: function (e, t, n, r, i) {
        return e.jquery ? this._liveCtxBind(e, t, n, r, i) : this.__base(e, t, n, r)
      },
      un: function (e, t, n, r) {
        return e.jquery ? this._liveCtxUnbind(e, t, n, r) : this.__base(e, t, n)
      },
      liveCtxBind: function (e, t, n, r, i) {
        return this._liveCtxBind(e, t, n, r, i)
      },
      _liveCtxBind: function (e, r, i, s, o) {
        var u = this
        if (typeof r == 'string') {
          t.isFunction(i) && (o = s, s = i, i = n)
          if (r.indexOf(' ') > -1) {
            r.split(' ').forEach(function (t) {
              u._liveCtxBind(e, t, i, s, o)
            })
          } else {
            var f = u._buildCtxEventName(r),
              l = a[f] || (a[f] = {
                counter: 0,
                ctxs: {}
              })
            e.each(function () {
              var e = t.identify(this),
                n = l.ctxs[e]
              n || (n = l.ctxs[e] = {}, ++l.counter), n[t.identify(s) + (o
                ? t.identify(o)
                : '')] = {
                fn: s,
                data: i,
                ctx: o
              }
            })
          }
        } else {
          t.each(r, function (t, n) {
            u._liveCtxBind(e, t, n, i)
          })
        }
        return u
      },
      liveCtxUnbind: function (e, t, n, r) {
        return this._liveCtxUnbind(e, t, n, r)
      },
      _liveCtxUnbind: function (e, n, r, i) {
        var s = this,
          o = a[n = s._buildCtxEventName(n)]
        return o && (e.each(function () {
          var e = t.identify(this, !0),
            n
          if (e && (n = o.ctxs[e])) {
            r && delete n[t.identify(r) + (i ? t.identify(i) : '')]
            if (!r || t.isEmptyObject(n)) o.counter--, delete o.ctxs[e]
          }
        }), o.counter || delete a[n]), s
      },
      _extractElemNameFrom: function (e) {
        if (e.__bemElemName) return e.__bemElemName
        var t = e[0].className.match(this._buildElemNameRE())
        return t ? t[1] : n
      },
      extractParams: S,
      _buildModClassPrefix: function (e, t) {
        return m(this._name) + (t
          ? d + (typeof t == 'string' ? t : this._extractElemNameFrom(t))
          : '') + p + e + p
      },
      _buildModValRE: function (e, t, n) {
        return new RegExp('(\\s?)' + this._buildModClassPrefix(e, t) + '(' + h + ')(\\s|$)', n)
      },
      _buildElemNameRE: function () {
        return new RegExp(this._name + d + '(' + h + ')(?:\\s|$)')
      },
      buildSelector: function (e, t, n) {
        return '.' + m(this._name, e, t, n)
      },
      getBlockByUniqId: function (e) {
        return o[e]
      },
      getWindowSize: function () {
        return {
          width: r.width(),
          height: r.height()
        }
      }
    })
  }(BEM, jQuery),
  function () {
    String.prototype.trim || (String.prototype.trim = function () {
      var e = this.replace(/^\s\s*/, ''),
        t = /\s/,
        n = e.length
      while (t.test(e.charAt(--n)))
      return e.slice(0, n + 1)
    })
  }(), $(function () {
  BEM.DOM.init()
}),
  function () {
    BEM.DOM.decl('i-menu', {
      onElemSetMod: {
        item: {
          state: {
            current: function (e, t, n, r) {
              if (r == 'disabled') return !1
              var i = this.elem('item', 'state', 'current')
              this.delMod(i, 'state').trigger('current', {
                prev: i,
                current: e
              })
            }
          }
        }
      },
      onItemSelectorClick: function (e) {
        var t = this._getItemByEvent(e)
        this.setMod(t, 'state', 'current')
      },
      _getItemByEvent: function (e) {
        return e.data.domElem.closest(this.buildSelector('item'))
      }
    }, {
      live: function () {
        this.liveBindTo('item-selector', 'leftclick', function (e) {
          this.onItemSelectorClick(e)
        })
      }
    })
  }(),
  function (e) {
    var t = e.event.special.leftclick = {
      setup: function () {
        e(this).bind('click', t.handler)
      },
      teardown: function () {
        e(this).unbind('click', t.handler)
      },
      handler: function (t) {
        t.button || (t.type = 'leftclick', e.event.handle.apply(this, arguments), t.type = 'click')
      }
    }
  }(jQuery),
  function () {
    BEM.DOM.decl({
      name: 'b-menu-horiz',
      baseBlock: 'i-menu'
    })
  }(),
  function (e) {
    BEM.DOM.decl('b-site-menu', {
      onSetMod: {
        js: function () {}
      }
    }, {
      live: function () {}
    })
  }(), BEM.DOM.decl({
  name: 'b-map',
  modName: 'api',
  modVal: 'dynamic'
}, {
  onSetMod: {
    js: function () {
      this.hasMod('static') || this.loadMapsApi()
    }
  },
  mapsPakages: [
    ['templateLayoutFactory', 'hotspot.Layer', 'hotspot.ObjectSource', 'geometry.pixel.LineString', 'package.geoObjects'],
    ['package.map']
  ],
  loadMapsApi: function () {
    var e = this
    if (!window.ymaps) {
      var t = document.createElement('script'),
        n = 'ymapsloaded'
      window[n] = function () {
        e.onAPILoaded()
      }, t.src = ['http://api-maps.yandex.ru/2.0/?', 'ns=ymaps', '&coordorder=longlat', '&load=' + this.mapsPakages[0].join(','), '&lang=' + this.params.lang, '&mode=release', '&onload=' + n].join(''), document.getElementsByTagName('head')[0].appendChild(t)
    } else {
      this.onAPILoaded()
    }
  },
  onAPILoaded: function () {
    ymaps.load(this.mapsPakages[1].join(','), function () {
      this.initMap()
    }, this)
  },
  initMap: function () {
    var e = this,
      t = this.domElem,
      n = this.params.center || [55.76, 37.64],
      r = this.params.spn,
      i = r && [
        [n[0] - r[0] / 2, n[1] - r[1] / 2],
        [n[0] + r[0] / 2, n[1] + r[1] / 2]
      ],
      s = this.params.zoom || r && ymaps.util.bounds.getCenterAndZoom(i, [t.width(), t.height()]).zoom || 10
    this.ymap = new ymaps.Map(this.elem('map')[0], {
      type: this.params.type,
      center: n,
      zoom: s,
      behaviors: ['drag', 'dblClickZoom', 'multiTouch']
    }), this.ymap.zoomRange.get().then(function (t) {
      s > t[1] ? e.ymap.setZoom(t[1], {
        callback: function () {
          e.showMap()
        }
      }) : e.showMap()
    }), this._extendsYmaps(ymaps), this.attachEvents(), this.params.userPos && this.showYa(this.params.userPos), this.trigger('map-inited')
  },
  showMap: function () {
    this.elem('map').css('visibility', 'visible')
  },
  attachEvents: function () {
    this.ymap.events.add('click', function () {
      var e = this
      this.trigger('user-action', {
        type: 'click'
      })
    }, this).add('dblclick', function () {
      this.firstClickTimer && (clearTimeout(this.firstClickTimer), this.firstClickNeedSend = 0), this.trigger('user-action', {
        type: 'dblclick'
      })
    }, this).add('mousedown', function () {
      this.trigger('user-action', {
        type: 'mousedown'
      })
    }, this).add('wheel', function () {
      this.trigger('user-action', {
        type: 'wheel'
      })
    }, this).add('balloonopen', function () {
        this.trigger('user-action', {
          type: 'balloonopen'
        })
      }, this)
      .add('boundschange', this._onBoundsChangeCounter, this), this.on('user-action', this._onUserAction, this)
  },
  _extendsYmaps: function (e) {
    !e.overlay && (e.overlay = {}), e.overlay.MultiLine = function () {
      function t (t, n, r) {
        this._geometry = t, this._data = n, this.options = new e.option.Manager(r), this.events = new e.event.Manager({
          context: this
        })
      }

      return t.prototype = {
        setMap: function (e) {
          this._map = e, e ? this._onAddToMap(e) : this._onRemoveFromMap()
        },
        getMap: function () {
          return this._map
        },
        _onAddToMap: function (t) {
          this._graphicsOverlay || (this._graphicsOverlay = e.geoObject.overlayFactory.interactiveGraphics.createOverlay(this._getLineGeometry(), this._data)), this._graphicsOverlay.events.setParent(this.events), this._graphicsOverlay.options.setParent(this.options), this._graphicsOverlay.setMap(t)
        },
        _onRemoveFromMap: function () {
          this._graphicsOverlay && (this._graphicsOverlay.setMap(null), this._graphicsOverlay = null)
        },
        setGeometry: function (e) {
          this._geometry = e, this._map && this._graphicsOverlay.setGeometry(this._getLineGeometry())
        },
        getGeometry: function () {
          return this._geometry
        },
        getData: function () {
          return this._data
        },
        _getLineGeometry: function () {
          var t = this.getGeometry().getCoordinates()
          return new e.geometry.pixel.LineString(t.reduce(function (e, t) {
            return e.concat(t.splice(0, t.length - 1), 0)
          }, []))
        }
      }, t
    }()
  },
  _onUserAction: function (e, t) {
    t && t.type != 'mousedown' && (this.firstClickNeedSend = 0), this.isUserAction = !t || !t.controls, this.elem('goto-map')
      .show()
  },
  _mapButtonUpdate: function (e, t) {
    var n = t.bounds,
      r = t.selectedPoint && t.selectedPoint.params.id
    this.elem('goto-map')
      .attr('href', this.params.mapUrl.replace(/\&?(source)=[^&$]*/gi, '') + (this.hasMod('geo-objects-yes') || r
        ? '&where='
        : '') + '&ll=' + t.center.join() + '&spn=' + [n[1][0] - n[0][0], n[1][1] - n[0][1]].join() + '&z=' + t.zoom + (r
        ? '&ol=biz&oid=' + r
        : ''))
  },
  _onBoundsChangeCounter: function (e) {},
  _geoLocation: function () {
    var e = this
    BEM.blocks['i-geolocation'].get({}, function (t) {
      if (t.error) {
        spin.delMod('progress'), icon.show()
      } else {
        var n = {
          latitude: t.coords.latitude,
          longitude: t.coords.longitude
        }
        this._ajax = BEM.create('i-request_type_ajax', {
          url: '//www.yandex.ru/gpsave',
          dataType: 'jsonp',
          callbackCtx: e
        }), this._ajax.get({
          lon: t.coords.longitude,
          lat: t.coords.latitude,
          precision: t.coords.accuracy,
          persistent: 1,
          device: 1,
          format: 'JSONP',
          lang: 'ru',
          yu: Lego.params.yandexuid
        }, function (e) {
          n.address = e.address, this.showYa(n, function () {
            this.findBlockInside('controls', 'b-spin')
              .delMod('progress'), this.findElem('control-icon', 'type', 'userlocation')
              .show(), this.getGeoData(null, null, function () {
              this.fitAll()
            })
          })
        })
      }
    })
  },
  showYa: function (e, t) {
    this.yaPoint && this.ymap.geoObjects.remove(this.yaPoint), this.yaPoint = new ymaps.Placemark([e.longitude, e.latitude], {
      iconContent: 'ya',
      iconType: 'ya',
      hintContent: 'Ваше местоположение',
      balloonContentBody: e.address,
      balloonContentHeader: 'Ваше местоположение',
      isIconHovered: 'no'
    }, {
      iconLayout: ymaps.templateLayoutFactory.createClass('<div class="i-geo-point i-geo-point_type_ya i-geo-point_hovered_$[properties.isIconHovered]"> </div>'),
      zIndex: 1,
      openBalloonOnClick: !0,
      balloonAutoPan: !0,
      balloonMaxWidth: 320,
      balloonMaxHeight: 250
    }), this.ymap.geoObjects.add(this.yaPoint), t && t.call(this)
  },
  animDuration: 400,
  getCenter: function () {
    return this.ymap.getCenter()
  },
  getZoom: function () {
    return this.ymap.getZoom()
  },
  getGlobalPixelCenter: function () {
    return this.ymap.getGlobalPixelCenter()
  },
  getBounds: function () {
    return this.ymap.getBounds()
  },
  toGlobalPixels: function (e, t) {
    return ymaps.projection.wgs84Mercator.toGlobalPixels([parseFloat(e[0]), parseFloat(e[1])], t || this.ymap.getZoom())
  },
  fromGlobalPixels: function (e, t) {
    return ymaps.projection.wgs84Mercator.fromGlobalPixels([parseFloat(e[0]), parseFloat(e[1])], t || this.ymap.getZoom())
  },
  setCenter: function (e, t) {
    t = t || this.getZoom(), this.setGlobalPixelCenter(this.toGlobalPixels(e, t), t)
  },
  setGlobalPixelCenter: function (e, t) {
    this.ymap.setGlobalPixelCenter(e, t || this.getZoom(), {
      duration: this.animDuration
    })
  },
  changeZoom: function (e) {
    this.zoomChain = this.zoomChain || [], this.zoomChain.push(e), this.zoomChain.length === 1 && this._changeZoom()
  },
  _changeZoom: function (e) {
    var t = this.ymap.zoomRange.getCurrent(),
      n = function () {
        var e = this.zoomChain.shift()
        this.ymap.action.events.remove('end', n, this), e && this._changeZoom(this.getZoom() + e)
      }
    if (this.ymap.action.getCurrentState().isTicking) {
      this.ymap.action.events.add('end', n, this)
    } else {
      var r = this.getZoom() + this.zoomChain.shift()
      r >= t[0] && r <= t[1]
        ? (this.setGlobalPixelCenter(this.toGlobalPixels(this.getCenter(), r), r), this.ymap.action.events.add('end', n, this))
        : (this.zoomChain.shift(), this.zoomChain.length && this._changeZoom())
    }
  },
  moveTo: function (e, t) {
    this.setGlobalPixelCenter(this.toGlobalPixels(e, t), t)
  },
  destruct: function () {
    delete ymaps, this.ymap.destroy(), delete this.ymap
  }
}, {}), BEM.decl({
  name: 'i-geo-point'
}, {
  onSetMod: {
    js: function () {
      var e = this.params
      this.mapPoint = new ymaps.Placemark([e.location.longitude, e.location.latitude], {
        iconContent: e.iconContent,
        iconType: e.type,
        iconWithContent: e.type !== 'single' && e.type !== 'adv',
        iconUrl: e.url,
        hintContent: e.hint,
        balloonContent: e.balloonContent,
        isIconHovered: 'no'
      }, {
        iconLayout: ymaps.templateLayoutFactory.createClass('<div href="$[properties.iconUrl]" class="i-geo-point [if properties.iconType]i-geo-point_type_$[properties.iconType][endif] i-geo-point_hovered_$[properties.isIconHovered]" target="_blank">[if properties.iconWithContent]<span class="i-geo-point__cont">$[properties.iconContent]</span>[endif]</div>'),
        zIndex: 1,
        openBalloonOnClick: !1,
        balloonAutoPan: !1,
        balloonMaxWidth: 320,
        balloonMaxHeight: 250,
        balloonScrollX: !1
      }), navigator.userAgent.match(/iPad/i) == null && (this.mapPoint.events.add('mouseenter', function () {
        this.trigger('point-mouseenter')
      }, this), this.mapPoint.events.add('mouseleave', function () {
        this.trigger('point-mouseleave')
      }, this)), this.mapPoint.events.add('click', function (e) {
        var t = e.originalEvent.domEvent.originalEvent
        return this.trigger('point-select'), t.preventDefault && t.preventDefault(), t.returnValue = !1, !1
      }, this), this.trigger('point-add')
    },
    selected: {
      '': function () {
        this.mapPoint.options.set('zIndex', this.zIndex), this.mapPoint.properties.set('isIconHovered', 'no')
      },
      yes: function () {
        this.mapPoint.options.set('zIndex', '1000'), this.mapPoint.properties.set('isIconHovered', 'no')
      }
    },
    hovered: {
      '': function () {
        this.mapPoint.options.set('zIndex', this.zIndex), this.mapPoint.properties.set('isIconHovered', 'no')
      },
      yes: function () {
        this.mapPoint.options.set('zIndex', '1000'), this.mapPoint.properties.set('isIconHovered', 'yes')
      }
    }
  },
  destruct: function () {
    this.trigger('point-del')
  }
}, {}), BEM.decl('i-snake', {
  onSetMod: {
    js: function () {
      this.map = this.params.map, this.size = 10, this.step = 1, this.coords = [this.map.getGlobalPixelCenter()], this.coords[1] = [this.coords[0][0], this.coords[0][1] + this.size], this.len = this.coords.length - 1, this.line = new ymaps.Polyline(this._getCoords(), {}, {
        strokeWidth: 8
      }), this.points = []
      for (var e = 0, t = 5; e < t; e++) this.points.push(this.createPoint());
      this.map.ymap.geoObjects.add(this.line), this.params.btn.elem('text')
        .html('Счет: ' + (this.len - 1)), this.start()
    }
  },
  _sign: function (e) {
    return (e > 0) - (e < 0)
  },
  _getCoords: function () {
    var e = []
    for (var t = this.coords, n = 0, r = t.length; n < r; n++) e[n] = this.map.fromGlobalPixels(t[n]);
    return e
  },
  start: function () {
    var e = this
    this.timer = setInterval(function () {
      e._tick()
    }, 10), $(window).bind('keydown', function (t) {
      return e.control(t)
    })
  },
  stop: function () {
    clearInterval(this.timer)
  },
  _tick: function () {
    this.move()
  },
  control: function (e) {
    var t = e.keyCode
    t == 27 && this.stop()
    var n = this.coords[0],
      r = this.coords[this.coords.length - 1],
      i = this.coords[this.coords.length - 2],
      s = 1e-5
    if (n[1] === this.coords[1][1]) {
      if (t == 38) return this.coords.unshift([n[0], n[1] - s]), !1
      if (t == 40) return this.coords.unshift([n[0], n[1] + s]), !1
    }
    if (n[0] === this.coords[1][0]) {
      if (t == 37) return this.coords.unshift([n[0] - s, n[1]]), !1
      if (t == 39) return this.coords.unshift([n[0] + s, n[1]]), !1
    }
    if (t >= 37 && t <= 40) return !1
  },
  move: function () {
    var e = 0,
      t = this.moveCoord(this.coords[0], this.coords[1])
    for (var n = 0, r = this.coords.length - 1; n < r; n++) e += Math.abs(this.coords[n][0] - this.coords[n + 1][0]) + Math.abs(this.coords[n][1] - this.coords[n + 1][1]);
    this.eatPoints(this.coords[0], t), this.checkCross(this.coords[0], t)
      ? this.die()
      : this.coords[0] = t
    if (Math.abs(e - this.size * this.len) < .001) {
      var i = this.coords[this.coords.length - 1],
        s = this.moveCoord(i, this.coords[this.coords.length - 2], !0)
      if (this.coords.length > 2) {
        var o = this.coords[this.coords.length - 2]
        i[0] == o[0] && this._sign(o[1] - i[1]) != this._sign(o[1] - s[1]) || i[1] == o[1] && this._sign(o[0] - i[0]) != this._sign(o[0] - s[0])
          ? (this.coords.pop(), this.coords[this.coords.length - 1] = this.moveCoord(this.coords[this.coords.length - 1], this.coords[this.coords.length - 2], !0))
          : this.coords[this.coords.length - 1] = s
      } else {
        this.coords[this.coords.length - 1] = s
      }
    }
    this.line.geometry.setCoordinates(this._getCoords())
  },
  moveCoord: function (e, t, n) {
    if (e[0] == t[0]) return [e[0], e[1] + this.step * this._sign(e[1] - t[1]) * (n ? -1 : 1)]
    if (e[1] == t[1]) return [e[0] + this.step * this._sign(e[0] - t[0]) * (n ? -1 : 1), e[1]]
  },
  createPoint: function () {
    var e = [350 - Math.round(Math.random() * 700), 150 - Math.round(Math.random() * 300)],
      t = this.map.getGlobalPixelCenter(),
      n = new ymaps.Placemark(this.map.fromGlobalPixels([t[0] + e[0], t[1] + e[1]]), {
        iconType: 'ya',
        hintContent: 'Съешь меня',
        isIconHovered: 'no'
      }, {
        iconLayout: ymaps.templateLayoutFactory.createClass('<div class="i-geo-point i-geo-point_type_ya i-geo-point_hovered_$[properties.isIconHovered]"> </div>'),
        zIndex: 1,
        openBalloonOnClick: !1
      })
    return this.map.ymap.geoObjects.add(n), n
  },
  eatPoints: function (e, t) {
    var n = this.points,
      r = 5,
      i
    for (var s = n.length; s--;) {
      i = this.map.toGlobalPixels(n[s].geometry.getCoordinates())
      if (e[0] === t[0] && i[0] + r > e[0] && i[0] - r < e[0] && this._sign(i[1] - e[1]) != this._sign(i[1] - t[1]) || e[1] === t[1] && i[1] + r > e[1] && i[1] - r < e[1] && this._sign(i[0] - e[0]) != this._sign(i[0] - t[0])) {
        this.map.ymap.geoObjects.remove(n[s]), n.splice(s, 1), n.push(this.createPoint()), this.len += 1, this.params.btn.elem('text')
          .html('Счет: ' + (this.len - 1))
      }
    }
  },
  checkCross: function (e, t) {
    var n, r
    if (e[1] === t[1]) {
      for (n = 0, r = this.coords.length - 1; n < r; n++) {
        if (this.coords[n][0] === this.coords[n + 1][0] && (this.coords[n][1] >= e[1] && this.coords[n + 1][1] <= e[1] || this.coords[n][1] <= e[1] && this.coords[n + 1][1] >= e[1]) && this._sign(this.coords[n][0] - e[0]) != this._sign(this.coords[n][0] - t[0])) return !0
      }
    }
    if (e[0] === t[0]) {
      for (n = 0, r = this.coords.length - 1; n < r; n++) {
        if (this.coords[n][1] === this.coords[n + 1][1] && (this.coords[n][0] >= e[0] && this.coords[n + 1][0] <= e[0] || this.coords[n][0] <= e[0] && this.coords[n + 1][0] >= e[0]) && this._sign(this.coords[n][1] - e[1]) != this._sign(this.coords[n][1] - t[1])) return !0
      }
    }
    return !1
  },
  die: function () {
    this.line.options.set('strokeColor', '#AA0000'), this.stop()
  },
  destruct: function () {
    var e = this.points
    for (var t = e.length; t--;) this.map.ymap.geoObjects.remove(e[t]);
    this.map.ymap.geoObjects.remove(this.line)
  }
}), BEM.DOM.decl({
  name: 'b-map',
  modName: 'geo-objects',
  modVal: 'yes'
}, {
  initMap: function () {
    this.geoObjectsArray = [], this.selected = null, this.__base.apply(this, arguments), this.params.points && this.createGeoObjects(this.params.points), this.params.streetLine && this.createStreetLine(this.params.streetLine)
  },
  attachEvents: function () {
    this.__base.apply(this, arguments), this.pointsHandlers = {
      'point-add': function (e) {
        this._addPoint(e.target.mapPoint)
      },
      'point-mouseenter': function (e, t) {
        this._hoverPoint(this._getTargetPoint(e, t))
      },
      'point-mouseleave': function (e, t) {
        this._unhoverPoint(this._getTargetPoint(e, t))
      },
      'point-select': function (e, t) {
        this._selectPoint(this._getTargetPoint(e, t))
      },
      'point-del': function (e, t) {
        this._delPoint(this._getTargetPoint(e, t))
      }
    }
    for (var e in this.pointsHandlers) this.pointsHandlers.hasOwnProperty(e) && BEM.blocks['i-geo-point'].on(e, this.pointsHandlers[e], this);
    this.ymap.events.add('click', function () {
      this._unselectPoint()
    }, this).add('boundschange', this._onBoundsUpdate, this)
  },
  createGeoObjects: function (e) {
    this.add(e), this.fitAll(this.params.zoom), this.trigger('map-points-added', {
      total: this.params.total
    }), this.params.searchText && this.params.searchText === 'Яндекс' && this.bindTo('userlocation', 'click', function () {
      this.snake && this.snake.destruct(), this.findBlockInside('b-map-panel')
        .getMod(this.findBlockInside('b-map-panel')
          .elem('switcher'), 'state') != 'closed' && this.findBlockInside('b-map-panel')
        ._toggleState(), this.delMod('geo-objects-search')
      for (var e = this.geoObjectsArray.length; e--;) this.geoObjectsArray[e].destruct();
      this.snake = BEM.create('i-snake', {
        map: this,
        btn: this.findBlockOn(this.elem('goto-map'), 'b-form-button')
      })
    })
  },
  createStreetLine: function (e) {
    var t = this
    this._streetStrokeOpacity = .4, this._streetObject = new ymaps.Polygon(e, {}, {
      strokeColor: '#000000',
      fillColor: '#00000000',
      strokeWidth: 4,
      strokeOpacity: this._streetStrokeOpacity,
      simplification: !1,
      interactivityModel: 'default#transparent',
      overlayFactory: {
        createOverlay: function (e, t, n) {
          return new ymaps.overlay.MultiLine(e, t, n)
        }
      }
    }), this._streetObject.events.add('mouseenter', function () {
      this._streetObject.options.set('strokeOpacity', this._streetStrokeOpacity), clearTimeout(this._hideStreetTimeout), this._clearHideStreetAnimation()
    }, this).add('mouseleave', function () {
      this._streetObject.options.set('strokeOpacity', '0')
    }, this), this._hideStreetTimeout = setTimeout(function () {
      t._hideStreetTimeoutFunc()
    }, 2e3), this.ymap.geoObjects.add(this._streetObject)
  },
  _hideStreetTimeoutFunc: function () {
    var e = this
    this._hideStreetAnimationTick = 0, this._hideStreetAnimationTimeout = setTimeout(function () {
      return e._hideStreetAnimationFunc()
    }, 100)
  },
  _hideStreetAnimationFunc: function () {
    var e = this,
      t = this._streetStrokeOpacity,
      n
    this._hideStreetAnimationTick++, n = t - t * Math.sin(Math.PI * this._hideStreetAnimationTick / 20), this._streetObject.options.set('strokeOpacity', Math.round(n * 100) / 100), n > 0 && (this._hideStreetAnimationTimeout = setTimeout(function () {
      e._hideStreetAnimationFunc()
    }, 10))
  },
  _clearHideStreetAnimation: function () {
    this._hideStreetAnimationTick = 0, clearTimeout(this._hideStreetAnimationTimeout)
  },
  _addPoint: function (e) {
    this.ymap.geoObjects.add(e)
  },
  _delPoint: function (e) {
    this.ymap.geoObjects.remove(e.mapPoint)
  },
  _hoverPoint: function (e) {
    e.setMod('hovered', 'yes')
  },
  _unhoverPoint: function (e) {
    e.delMod('hovered')
  },
  _selectPoint: function (e) {
    this.selected !== e && (this._unselectPoint(), this.selected = e)
    var t = e.mapPoint.balloon.open(),
      n = t.getOverlay().getBalloonLayout().getClientBoundingRect(),
      r = [Math.abs(n[1][0] - n[0][0]), Math.abs(n[1][1] - n[0][1]) + 21],
      i = this.getZoom(),
      s = this.getGlobalPixelCenter(),
      o = this.getBounds(),
      u = [this.toGlobalPixels(o[0]), this.toGlobalPixels(o[1])],
      a = this.toGlobalPixels(e.mapPoint.geometry.getCoordinates(), i),
      f = [
        [a[0] - r[0] / 2, a[1]],
        [a[0] + r[0] / 2, a[1] - r[1]]
      ],
      l = [
        [u[0][0] - f[0][0], u[0][1] - f[0][1]],
        [u[1][0] - f[1][0], u[1][1] - f[1][1]]
      ],
      c = [l[0][0] > 0 && Math.abs(l[0][0]) < r[0]
        ? l[0][0] + 30
        : l[1][0] < 0 && Math.abs(l[1][0]) < r[0]
             ? l[1][0] - 20
             : 0, l[0][1] < 0 ? l[0][1] - 20 : l[1][1] > 0 ? l[1][1] + 30 : 0],
      h = [0, 0]
    e.setMod('selected', 'yes'), this.setGlobalPixelCenter([s[0] - c[0] + h[0], s[1] - c[1]], i), this._onBoundsUpdate()
  },
  _unselectPoint: function () {
    if (!this.selected) return
    this.selected.delMod('selected'), this.selected.mapPoint.balloon.close(), this.selected.trigger('point-unselect'), this.selected = null, this._onBoundsUpdate()
  },
  _onBoundsUpdate: function (e) {
    this.trigger('map-boundschange', {
      center: this.getCenter(),
      bounds: this.getBounds(),
      zoom: e ? e.get('newZoom') : this.getZoom(),
      selectedPoint: this.selected
    })
  },
  _findPointByName: function (e) {
    for (var t = 0, n = this.geoObjectsArray.length, r; r = this.geoObjectsArray[t], t < n; t++) {
      if (r.params.name.toString() == e.toString()) return r
    }
    return !1
  },
  _getTargetPoint: function (e, t) {
    return e.target.mapPoint && e.target || t && this._findPointByName(t.name)
  },
  add: function (e) {
    var t = this.geoObjectsArray
    for (var n = 0, r = e.length !== undefined
      ? e.length
      : 1, i; i = e[n] || e, n < r; n++) {
      t.push(BEM.create({
        block: 'i-geo-point',
        mods: {
          type: i.type
        }
      }, i))
    }
    var s = [],
      o, u, a = 20
    for (n = 0, r = t.length; n < r; n++) {
      var f = t[n].params.location
      for (o = 0, u = s.length; o < u; o++) {
        var l = t[s[o][0]].params.location
        if (l.longitude == f.longitude && l.latitude == f.latitude) break
      }
      s[o] ? s[o].push(n) : s[o] = [n]
    }
    for (n = 0, r = s.length; n < r; n++) {
      t[s[n][0]].mapPoint.options.set('zIndex', t[s[n][0]].zIndex = s.length - n + s[n].length)
      for (o = 1, u = s[n].length; o < u; o++) {
        t[s[n][o]].mapPoint.options.set('iconOffset', [Math.round(a * Math.cos(2 * Math.PI * o / u)), Math.round(a * Math.sin(2 * Math.PI * o / u))])
          .set('zIndex', t[s[n][o]].zIndex = u - o)
      }
    }
  },
  remove: function (e) {
    for (var t = 0, n = this.geoObjectsArray.length; t < n; t++) {
      if (this.geoObjectsArray[t] === e) {
        e.destruct(), this.geoObjectsArray.splice(t, 1)
        return
      }
    }
  },
  removeAll: function () {
    for (var e = 0, t = this.geoObjectsArray.length; e < t; e++) this.geoObjectsArray[e].destruct();
    this.geoObjectsArray = []
  },
  fitAll: function (e) {
    var t = this,
      n = [],
      r = [],
      i, s, o
    for (var u = 0, a = this.geoObjectsArray.length, f; u < a; u++) f = this.geoObjectsArray[u].params.location, n.push(f.latitude), r.push(f.longitude);
    s = [Math.min.apply(Math, r), Math.max.apply(Math, n)], i = [Math.max.apply(Math, r), Math.min.apply(Math, n)], o = ymaps.util.bounds.getCenterAndZoom([s, i], [this.domElem.width() * .8, this.domElem.height() * .8]), this.ymap.zoomRange.get(o.center)
      .then(function (n) {
        t.moveTo(o.center, Math.min(e || t.getZoom(), o.zoom, n[1])), t.showMap()
      })
  },
  destruct: function () {
    for (var e in this.pointsHandlers) this.pointsHandlers.hasOwnProperty(e) && BEM.blocks["i-geo-point"].un(e, this.pointsHandlers[e], this);
    this.__base.apply(this, arguments)
  }
}, {}),
  function (e) {
    BEM.DOM.decl("b-link-list", {
      onSetMod: {
        js: function () {}
      }
    }, {
      live: function () {}
    })
  }(),
  function (e) {
    BEM.DOM.decl("b-link-list", {
      onSetMod: {
        js: function () {}
      }
    }, {
      live: function () {}
    })
  }(),
  function (e) {
    BEM.DOM.decl("b-link-list", {
      onSetMod: {
        js: function () {}
      }
    }, {
      live: function () {}
    })
  }()