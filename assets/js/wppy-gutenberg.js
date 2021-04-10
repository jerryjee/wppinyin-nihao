!function (t) {
  var e = {};

  function a(r) {
    if (e[r]) return e[r].exports;
    var n = e[r] = {i: r, l: !1, exports: {}};

    if ('undefined' !== typeof(t[r])) {
      return t[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
  }

  a.m = t, a.c = e, a.d = function (t, e, r) {
    a.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
  }, a.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, a.t = function (t, e) {
    if (1 & e && (t = a(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (a.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) a.d(r, n, function (e) {
      return t[e]
    }.bind(null, n));
    return r
  }, a.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return a.d(e, "a", e), e
  }, a.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, a.p = "", a(a.s = 6)
}([, , , , , , function (t, e, a) {
  t.exports = a(7)
}, function (t, e, a) {
  "use strict";
  a.r(e);
  a(8), a(9), a(10), a(11)
}, function (t, e) {
  var a = wp.element.Fragment, r = wp.i18n, n = r.__, c = r.sprintf, i = wp.richText, o = i.toggleFormat,
      l = i.registerFormatType, m = i.insert, p = i.applyFormat, u = wp.editor, s = u.RichTextToolbarButton,
      g = u.RichTextShortcut, h = wp.components;
  h.SVG, h.Path;
  l("wppy-nihao/rt", {
    title: n("Ruby Character", "wppy-nihao"), tagName: "rt", className: null, edit: function (t) {
      t.isActive, t.value, t.onChange;
      return React.createElement(a, null)
    }
  }), l("wppy-nihao/ruby", {
    title: n("Ruby", "wppy-nihao"), tagName: "ruby", className: null, edit: function (t) {
      var e = t.isActive, r = t.value, i = t.onChange, l = function () {
        var t = "";
        if (e) r = o(r, {type: "wppy-nihao/ruby"}); else {
          t = window.prompt(n("输入注音", "wppy-nihao")) || r.text.substr(r.start, r.end - r.start);
          var a = r.end, c = r.start;
          (r = m(r, t, a)).start = c, r.end = a + t.length, r = p(r, {type: "wppy-nihao/ruby"}, c, a + t.length), r = p(r, {type: "wppy-nihao/rt"}, a, a + t.length)
        }
        return i(r)
      }, u = React.createElement("img", {
        src: '/wp-content/plugins/wppinyin-nihao/assets/images/wppy.svg',
        style: {widht: '24px', height: '24px', margin: '4px 6px 0 0px'}
      });
      c("(%s+Alt+R)", /(MAC|IP)/.test(navigator.platform.toUpperCase()) ? "⌘" : "Ctrl");
      return React.createElement(a, null, React.createElement(g, {
        type: "primaryAlt",
        character: "r",
        onUse: l
      }), React.createElement(s, {
        icon: u,
        title: n("注音", "wppy-nihao"),
        onClick: l,
        isActive: e,
        shorcutType: "primaryAlt",
        shorcutCharacter: "r"
      }))
    }
  })
}]);