var ur = (s, n, t) => {
  if (!n.has(s))
    throw TypeError("Cannot " + t);
};
var d = (s, n, t) => (ur(s, n, "read from private field"), t ? t.call(s) : n.get(s)), v = (s, n, t) => {
  if (n.has(s))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(s) : n.set(s, t);
}, C = (s, n, t, e) => (ur(s, n, "write to private field"), e ? e.call(s, t) : n.set(s, t), t);
var A = (s, n, t) => (ur(s, n, "access private method"), t);
const Wt = document, gi = window, Oa = Wt.documentElement, Be = Wt.createElement.bind(Wt), Ha = Be("div"), dr = Be("table"), Bh = Be("tbody"), Ml = Be("tr"), { isArray: Xo, prototype: Wa } = Array, { concat: Fh, filter: Zr, indexOf: za, map: Ba, push: jh, slice: Fa, some: Qr, splice: Vh } = Wa, Uh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, qh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Yh = /<.+>/, Kh = /^\w+$/;
function tl(s, n) {
  const t = Gh(n);
  return !s || !t && !Pe(n) && !V(n) ? [] : !t && qh.test(s) ? n.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !t && Kh.test(s) ? n.getElementsByTagName(s) : n.querySelectorAll(s);
}
class Jo {
  constructor(n, t) {
    if (!n)
      return;
    if (Sr(n))
      return n;
    let e = n;
    if (nt(n)) {
      const i = t || Wt;
      if (e = Uh.test(n) && Pe(i) ? i.getElementById(n.slice(1).replace(/\\/g, "")) : Yh.test(n) ? Ua(n) : Sr(i) ? i.find(n) : nt(i) ? b(i).find(n) : tl(n, i), !e)
        return;
    } else if (Fe(n))
      return this.ready(n);
    (e.nodeType || e === gi) && (e = [e]), this.length = e.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = e[i];
  }
  init(n, t) {
    return new Jo(n, t);
  }
}
const T = Jo.prototype, b = T.init;
b.fn = b.prototype = T;
T.length = 0;
T.splice = Vh;
typeof Symbol == "function" && (T[Symbol.iterator] = Wa[Symbol.iterator]);
function Sr(s) {
  return s instanceof Jo;
}
function Tn(s) {
  return !!s && s === s.window;
}
function Pe(s) {
  return !!s && s.nodeType === 9;
}
function Gh(s) {
  return !!s && s.nodeType === 11;
}
function V(s) {
  return !!s && s.nodeType === 1;
}
function Xh(s) {
  return !!s && s.nodeType === 3;
}
function Jh(s) {
  return typeof s == "boolean";
}
function Fe(s) {
  return typeof s == "function";
}
function nt(s) {
  return typeof s == "string";
}
function rt(s) {
  return s === void 0;
}
function Bn(s) {
  return s === null;
}
function ja(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function el(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const n = Object.getPrototypeOf(s);
  return n === null || n === Object.prototype;
}
b.isWindow = Tn;
b.isFunction = Fe;
b.isArray = Xo;
b.isNumeric = ja;
b.isPlainObject = el;
function Y(s, n, t) {
  if (t) {
    let e = s.length;
    for (; e--; )
      if (n.call(s[e], e, s[e]) === !1)
        return s;
  } else if (el(s)) {
    const e = Object.keys(s);
    for (let i = 0, o = e.length; i < o; i++) {
      const r = e[i];
      if (n.call(s[r], r, s[r]) === !1)
        return s;
    }
  } else
    for (let e = 0, i = s.length; e < i; e++)
      if (n.call(s[e], e, s[e]) === !1)
        return s;
  return s;
}
b.each = Y;
T.each = function(s) {
  return Y(this, s);
};
T.empty = function() {
  return this.each((s, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function yi(...s) {
  const n = Jh(s[0]) ? s.shift() : !1, t = s.shift(), e = s.length;
  if (!t)
    return {};
  if (!e)
    return yi(n, b, t);
  for (let i = 0; i < e; i++) {
    const o = s[i];
    for (const r in o)
      n && (Xo(o[r]) || el(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), yi(n, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
b.extend = yi;
T.extend = function(s) {
  return yi(T, s);
};
const Zh = /\S+/g;
function Zo(s) {
  return nt(s) ? s.match(Zh) || [] : [];
}
T.toggleClass = function(s, n) {
  const t = Zo(s), e = !rt(n);
  return this.each((i, o) => {
    V(o) && Y(t, (r, l) => {
      e ? n ? o.classList.add(l) : o.classList.remove(l) : o.classList.toggle(l);
    });
  });
};
T.addClass = function(s) {
  return this.toggleClass(s, !0);
};
T.removeAttr = function(s) {
  const n = Zo(s);
  return this.each((t, e) => {
    V(e) && Y(n, (i, o) => {
      e.removeAttribute(o);
    });
  });
};
function Qh(s, n) {
  if (s) {
    if (nt(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !V(this[0]))
          return;
        const t = this[0].getAttribute(s);
        return Bn(t) ? void 0 : t;
      }
      return rt(n) ? this : Bn(n) ? this.removeAttr(s) : this.each((t, e) => {
        V(e) && e.setAttribute(s, n);
      });
    }
    for (const t in s)
      this.attr(t, s[t]);
    return this;
  }
}
T.attr = Qh;
T.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
T.hasClass = function(s) {
  return !!s && Qr.call(this, (n) => V(n) && n.classList.contains(s));
};
T.get = function(s) {
  return rt(s) ? Fa.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
T.eq = function(s) {
  return b(this.get(s));
};
T.first = function() {
  return this.eq(0);
};
T.last = function() {
  return this.eq(-1);
};
function tu(s) {
  return rt(s) ? this.get().map((n) => V(n) || Xh(n) ? n.textContent : "").join("") : this.each((n, t) => {
    V(t) && (t.textContent = s);
  });
}
T.text = tu;
function zt(s, n, t) {
  if (!V(s))
    return;
  const e = gi.getComputedStyle(s, null);
  return t ? e.getPropertyValue(n) || void 0 : e[n] || s.style[n];
}
function Et(s, n) {
  return parseInt(zt(s, n), 10) || 0;
}
function Rl(s, n) {
  return Et(s, `border${n ? "Left" : "Top"}Width`) + Et(s, `padding${n ? "Left" : "Top"}`) + Et(s, `padding${n ? "Right" : "Bottom"}`) + Et(s, `border${n ? "Right" : "Bottom"}Width`);
}
const fr = {};
function eu(s) {
  if (fr[s])
    return fr[s];
  const n = Be(s);
  Wt.body.insertBefore(n, null);
  const t = zt(n, "display");
  return Wt.body.removeChild(n), fr[s] = t !== "none" ? t : "block";
}
function Al(s) {
  return zt(s, "display") === "none";
}
function Va(s, n) {
  const t = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!t && !!n && t.call(s, n);
}
function Qo(s) {
  return nt(s) ? (n, t) => Va(t, s) : Fe(s) ? s : Sr(s) ? (n, t) => s.is(t) : s ? (n, t) => t === s : () => !1;
}
T.filter = function(s) {
  const n = Qo(s);
  return b(Zr.call(this, (t, e) => n.call(t, e, t)));
};
function ue(s, n) {
  return n ? s.filter(n) : s;
}
T.detach = function(s) {
  return ue(this, s).each((n, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const nu = /^\s*<(\w+)[^>]*>/, su = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ll = {
  "*": Ha,
  tr: Bh,
  td: Ml,
  th: Ml,
  thead: dr,
  tbody: dr,
  tfoot: dr
};
function Ua(s) {
  if (!nt(s))
    return [];
  if (su.test(s))
    return [Be(RegExp.$1)];
  const n = nu.test(s) && RegExp.$1, t = Ll[n] || Ll["*"];
  return t.innerHTML = s, b(t.childNodes).detach().get();
}
b.parseHTML = Ua;
T.has = function(s) {
  const n = nt(s) ? (t, e) => tl(s, e).length : (t, e) => e.contains(s);
  return this.filter(n);
};
T.not = function(s) {
  const n = Qo(s);
  return this.filter((t, e) => (!nt(s) || V(e)) && !n.call(e, t, e));
};
function jt(s, n, t, e) {
  const i = [], o = Fe(n), r = e && Qo(e);
  for (let l = 0, a = s.length; l < a; l++)
    if (o) {
      const h = n(s[l]);
      h.length && jh.apply(i, h);
    } else {
      let h = s[l][n];
      for (; h != null && !(e && r(-1, h)); )
        i.push(h), h = t ? h[n] : null;
    }
  return i;
}
function qa(s) {
  return s.multiple && s.options ? jt(Zr.call(s.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : s.value || "";
}
function iu(s) {
  return arguments.length ? this.each((n, t) => {
    const e = t.multiple && t.options;
    if (e || tc.test(t.type)) {
      const i = Xo(s) ? Ba.call(s, String) : Bn(s) ? [] : [String(s)];
      e ? Y(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = rt(s) || Bn(s) ? "" : s;
  }) : this[0] && qa(this[0]);
}
T.val = iu;
T.is = function(s) {
  const n = Qo(s);
  return Qr.call(this, (t, e) => n.call(t, e, t));
};
b.guid = 1;
function Mt(s) {
  return s.length > 1 ? Zr.call(s, (n, t, e) => za.call(e, n) === t) : s;
}
b.unique = Mt;
T.add = function(s, n) {
  return b(Mt(this.get().concat(b(s, n).get())));
};
T.children = function(s) {
  return ue(b(Mt(jt(this, (n) => n.children))), s);
};
T.parent = function(s) {
  return ue(b(Mt(jt(this, "parentNode"))), s);
};
T.index = function(s) {
  const n = s ? b(s)[0] : this[0], t = s ? this : b(n).parent().children();
  return za.call(t, n);
};
T.closest = function(s) {
  const n = this.filter(s);
  if (n.length)
    return n;
  const t = this.parent();
  return t.length ? t.closest(s) : n;
};
T.siblings = function(s) {
  return ue(b(Mt(jt(this, (n) => b(n).parent().children().not(n)))), s);
};
T.find = function(s) {
  return b(Mt(jt(this, (n) => tl(s, n))));
};
const ou = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ru = /^$|^module$|\/(java|ecma)script/i, lu = ["type", "src", "nonce", "noModule"];
function au(s, n) {
  const t = b(s);
  t.filter("script").add(t.find("script")).each((e, i) => {
    if (ru.test(i.type) && Oa.contains(i)) {
      const o = Be("script");
      o.text = i.textContent.replace(ou, ""), Y(lu, (r, l) => {
        i[l] && (o[l] = i[l]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function cu(s, n, t, e, i) {
  e ? s.insertBefore(n, t ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(n, s) : s.parentNode.insertBefore(n, t ? s : s.nextSibling), i && au(n, s.ownerDocument);
}
function de(s, n, t, e, i, o, r, l) {
  return Y(s, (a, h) => {
    Y(b(h), (u, c) => {
      Y(b(n), (f, p) => {
        const g = t ? c : p, y = t ? p : c, x = t ? u : f;
        cu(g, x ? y.cloneNode(!0) : y, e, i, !x);
      }, l);
    }, r);
  }, o), n;
}
T.after = function() {
  return de(arguments, this, !1, !1, !1, !0, !0);
};
T.append = function() {
  return de(arguments, this, !1, !1, !0);
};
function hu(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(s))
    return this;
  const n = /<script[\s>]/.test(s);
  return this.each((t, e) => {
    V(e) && (n ? b(e).empty().append(s) : e.innerHTML = s);
  });
}
T.html = hu;
T.appendTo = function(s) {
  return de(arguments, this, !0, !1, !0);
};
T.wrapInner = function(s) {
  return this.each((n, t) => {
    const e = b(t), i = e.contents();
    i.length ? i.wrapAll(s) : e.append(s);
  });
};
T.before = function() {
  return de(arguments, this, !1, !0);
};
T.wrapAll = function(s) {
  let n = b(s), t = n[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(n), this.appendTo(t);
};
T.wrap = function(s) {
  return this.each((n, t) => {
    const e = b(s)[0];
    b(t).wrapAll(n ? e.cloneNode(!0) : e);
  });
};
T.insertAfter = function(s) {
  return de(arguments, this, !0, !1, !1, !1, !1, !0);
};
T.insertBefore = function(s) {
  return de(arguments, this, !0, !0);
};
T.prepend = function() {
  return de(arguments, this, !1, !0, !0, !0, !0);
};
T.prependTo = function(s) {
  return de(arguments, this, !0, !0, !0, !1, !1, !0);
};
T.contents = function() {
  return b(Mt(jt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
T.next = function(s, n, t) {
  return ue(b(Mt(jt(this, "nextElementSibling", n, t))), s);
};
T.nextAll = function(s) {
  return this.next(s, !0);
};
T.nextUntil = function(s, n) {
  return this.next(n, !0, s);
};
T.parents = function(s, n) {
  return ue(b(Mt(jt(this, "parentElement", !0, n))), s);
};
T.parentsUntil = function(s, n) {
  return this.parents(n, s);
};
T.prev = function(s, n, t) {
  return ue(b(Mt(jt(this, "previousElementSibling", n, t))), s);
};
T.prevAll = function(s) {
  return this.prev(s, !0);
};
T.prevUntil = function(s, n) {
  return this.prev(n, !0, s);
};
T.map = function(s) {
  return b(Fh.apply([], Ba.call(this, (n, t) => s.call(n, t, n))));
};
T.clone = function() {
  return this.map((s, n) => n.cloneNode(!0));
};
T.offsetParent = function() {
  return this.map((s, n) => {
    let t = n.offsetParent;
    for (; t && zt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || Oa;
  });
};
T.slice = function(s, n) {
  return b(Fa.call(this, s, n));
};
const uu = /-([a-z])/g;
function nl(s) {
  return s.replace(uu, (n, t) => t.toUpperCase());
}
T.ready = function(s) {
  const n = () => setTimeout(s, 0, b);
  return Wt.readyState !== "loading" ? n() : Wt.addEventListener("DOMContentLoaded", n), this;
};
T.unwrap = function() {
  return this.parent().each((s, n) => {
    if (n.tagName === "BODY")
      return;
    const t = b(n);
    t.replaceWith(t.children());
  }), this;
};
T.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const n = s.getBoundingClientRect();
  return {
    top: n.top + gi.pageYOffset,
    left: n.left + gi.pageXOffset
  };
};
T.position = function() {
  const s = this[0];
  if (!s)
    return;
  const n = zt(s, "position") === "fixed", t = n ? s.getBoundingClientRect() : this.offset();
  if (!n) {
    const e = s.ownerDocument;
    let i = s.offsetParent || e.documentElement;
    for (; (i === e.body || i === e.documentElement) && zt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && V(i)) {
      const o = b(i).offset();
      t.top -= o.top + Et(i, "borderTopWidth"), t.left -= o.left + Et(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - Et(s, "marginTop"),
    left: t.left - Et(s, "marginLeft")
  };
};
const Ya = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
T.prop = function(s, n) {
  if (s) {
    if (nt(s))
      return s = Ya[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((t, e) => {
        e[s] = n;
      });
    for (const t in s)
      this.prop(t, s[t]);
    return this;
  }
};
T.removeProp = function(s) {
  return this.each((n, t) => {
    delete t[Ya[s] || s];
  });
};
const du = /^--/;
function sl(s) {
  return du.test(s);
}
const pr = {}, { style: fu } = Ha, pu = ["webkit", "moz", "ms"];
function mu(s, n = sl(s)) {
  if (n)
    return s;
  if (!pr[s]) {
    const t = nl(s), e = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${pu.join(`${e} `)}${e}`.split(" ");
    Y(i, (o, r) => {
      if (r in fu)
        return pr[s] = r, !1;
    });
  }
  return pr[s];
}
const gu = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0
};
function Ka(s, n, t = sl(s)) {
  return !t && !gu[s] && ja(n) ? `${n}px` : n;
}
function yu(s, n) {
  if (nt(s)) {
    const t = sl(s);
    return s = mu(s, t), arguments.length < 2 ? this[0] && zt(this[0], s, t) : s ? (n = Ka(s, n, t), this.each((e, i) => {
      V(i) && (t ? i.style.setProperty(s, n) : i.style[s] = n);
    })) : this;
  }
  for (const t in s)
    this.css(t, s[t]);
  return this;
}
T.css = yu;
function Ga(s, n) {
  try {
    return s(n);
  } catch {
    return n;
  }
}
const bu = /^\s+|\s+$/;
function Il(s, n) {
  const t = s.dataset[n] || s.dataset[nl(n)];
  return bu.test(t) ? t : Ga(JSON.parse, t);
}
function wu(s, n, t) {
  t = Ga(JSON.stringify, t), s.dataset[nl(n)] = t;
}
function vu(s, n) {
  if (!s) {
    if (!this[0])
      return;
    const t = {};
    for (const e in this[0].dataset)
      t[e] = Il(this[0], e);
    return t;
  }
  if (nt(s))
    return arguments.length < 2 ? this[0] && Il(this[0], s) : rt(n) ? this : this.each((t, e) => {
      wu(e, s, n);
    });
  for (const t in s)
    this.data(t, s[t]);
  return this;
}
T.data = vu;
function Xa(s, n) {
  const t = s.documentElement;
  return Math.max(s.body[`scroll${n}`], t[`scroll${n}`], s.body[`offset${n}`], t[`offset${n}`], t[`client${n}`]);
}
Y([!0, !1], (s, n) => {
  Y(["Width", "Height"], (t, e) => {
    const i = `${n ? "outer" : "inner"}${e}`;
    T[i] = function(o) {
      if (this[0])
        return Tn(this[0]) ? n ? this[0][`inner${e}`] : this[0].document.documentElement[`client${e}`] : Pe(this[0]) ? Xa(this[0], e) : this[0][`${n ? "offset" : "client"}${e}`] + (o && n ? Et(this[0], `margin${t ? "Top" : "Left"}`) + Et(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Y(["Width", "Height"], (s, n) => {
  const t = n.toLowerCase();
  T[t] = function(e) {
    if (!this[0])
      return rt(e) ? void 0 : this;
    if (!arguments.length)
      return Tn(this[0]) ? this[0].document.documentElement[`client${n}`] : Pe(this[0]) ? Xa(this[0], n) : this[0].getBoundingClientRect()[t] - Rl(this[0], !s);
    const i = parseInt(e, 10);
    return this.each((o, r) => {
      if (!V(r))
        return;
      const l = zt(r, "boxSizing");
      r.style[t] = Ka(t, i + (l === "border-box" ? Rl(r, !s) : 0));
    });
  };
});
const Dl = "___cd";
T.toggle = function(s) {
  return this.each((n, t) => {
    if (!V(t))
      return;
    const e = Al(t);
    (rt(s) ? e : s) ? (t.style.display = t[Dl] || "", Al(t) && (t.style.display = eu(t.tagName))) : e || (t[Dl] = zt(t, "display"), t.style.display = "none");
  });
};
T.hide = function() {
  return this.toggle(!1);
};
T.show = function() {
  return this.toggle(!0);
};
const Pl = "___ce", il = ".", ol = { focus: "focusin", blur: "focusout" }, Ja = { mouseenter: "mouseover", mouseleave: "mouseout" }, xu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function rl(s) {
  return Ja[s] || ol[s] || s;
}
function ll(s) {
  const n = s.split(il);
  return [n[0], n.slice(1).sort()];
}
T.trigger = function(s, n) {
  if (nt(s)) {
    const [e, i] = ll(s), o = rl(e);
    if (!o)
      return this;
    const r = xu.test(o) ? "MouseEvents" : "HTMLEvents";
    s = Wt.createEvent(r), s.initEvent(o, !0, !0), s.namespace = i.join(il), s.___ot = e;
  }
  s.___td = n;
  const t = s.___ot in ol;
  return this.each((e, i) => {
    t && Fe(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Za(s) {
  return s[Pl] = s[Pl] || {};
}
function Cu(s, n, t, e, i) {
  const o = Za(s);
  o[n] = o[n] || [], o[n].push([t, e, i]), s.addEventListener(n, i);
}
function Qa(s, n) {
  return !n || !Qr.call(n, (t) => s.indexOf(t) < 0);
}
function bi(s, n, t, e, i) {
  const o = Za(s);
  if (n)
    o[n] && (o[n] = o[n].filter(([r, l, a]) => {
      if (i && a.guid !== i.guid || !Qa(r, t) || e && e !== l)
        return !0;
      s.removeEventListener(n, a);
    }));
  else
    for (n in o)
      bi(s, n, t, e, i);
}
T.off = function(s, n, t) {
  if (rt(s))
    this.each((e, i) => {
      !V(i) && !Pe(i) && !Tn(i) || bi(i);
    });
  else if (nt(s))
    Fe(n) && (t = n, n = ""), Y(Zo(s), (e, i) => {
      const [o, r] = ll(i), l = rl(o);
      this.each((a, h) => {
        !V(h) && !Pe(h) && !Tn(h) || bi(h, l, r, n, t);
      });
    });
  else
    for (const e in s)
      this.off(e, s[e]);
  return this;
};
T.remove = function(s) {
  return ue(this, s).detach().off(), this;
};
T.replaceWith = function(s) {
  return this.before(s).remove();
};
T.replaceAll = function(s) {
  return b(s).replaceWith(this), this;
};
function $u(s, n, t, e, i) {
  if (!nt(s)) {
    for (const o in s)
      this.on(o, n, t, s[o], i);
    return this;
  }
  return nt(n) || (rt(n) || Bn(n) ? n = "" : rt(t) ? (t = n, n = "") : (e = t, t = n, n = "")), Fe(e) || (e = t, t = void 0), e ? (Y(Zo(s), (o, r) => {
    const [l, a] = ll(r), h = rl(l), u = l in Ja, c = l in ol;
    h && this.each((f, p) => {
      if (!V(p) && !Pe(p) && !Tn(p))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Qa(a, y.namespace.split(il)) || !n && (c && (y.target !== p || y.___ot === h) || u && y.relatedTarget && p.contains(y.relatedTarget)))
          return;
        let x = p;
        if (n) {
          let $ = y.target;
          for (; !Va($, n); )
            if ($ === p || ($ = $.parentNode, !$))
              return;
          x = $;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return x;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const w = e.call(x, y, y.___td);
        i && bi(p, h, a, n, g), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = e.guid = e.guid || b.guid++, Cu(p, h, a, n, g);
    });
  }), this) : this;
}
T.on = $u;
function _u(s, n, t, e) {
  return this.on(s, n, t, e, !0);
}
T.one = _u;
const Su = /\r?\n/g;
function ku(s, n) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(n.replace(Su, `\r
`))}`;
}
const Eu = /file|reset|submit|button|image/i, tc = /radio|checkbox/i;
T.serialize = function() {
  let s = "";
  return this.each((n, t) => {
    Y(t.elements || [t], (e, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Eu.test(i.type) || tc.test(i.type) && !i.checked)
        return;
      const o = qa(i);
      if (!rt(o)) {
        const r = Xo(o) ? o : [o];
        Y(r, (l, a) => {
          s += ku(i.name, a);
        });
      }
    });
  }), s.slice(1);
};
window.$ = b;
function Tu(s, n) {
  if (s == null)
    return [s, void 0];
  typeof n == "string" && (n = n.split("."));
  const t = n.join(".");
  let e = s;
  const i = [e];
  for (; typeof e == "object" && e !== null && n.length; ) {
    let o = n.shift(), r;
    const l = o.indexOf("[");
    if (l > 0 && l < o.length - 1 && o.endsWith("]") && (r = o.substring(l + 1, o.length - 1), o = o.substring(0, l)), e = e[o], i.push(e), r !== void 0)
      if (typeof e == "object" && e !== null)
        e instanceof Map ? e = e.get(r) : e = e[r], i.push(e);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${t}".`);
  }
  if (n.length)
    throw new Error(`Cannot access property with rest path "${n.join(".")}", the full path is "${t}".`);
  return i;
}
function Nu(s, n, t) {
  try {
    const e = Tu(s, n), i = e[e.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function Z(s, ...n) {
  if (n.length === 0)
    return s;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const t = n[0];
    return Object.keys(t).forEach((e) => {
      const i = t[e] ?? "";
      s = s.replace(new RegExp(`\\{${e}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let t = 0; t < n.length; t++) {
    const e = n[t] ?? "";
    s = s.replace(new RegExp(`\\{${t}\\}`, "g"), `${e}`);
  }
  return s;
}
var al = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(al || {});
function Mu(s, n = 2, t) {
  return Number.isNaN(s) ? "?KB" : (t || (s < 1024 ? t = "B" : s < 1048576 ? t = "KB" : s < 1073741824 ? t = "MB" : s < 1099511627776 ? t = "GB" : t = "TB"), (s / al[t]).toFixed(n) + t);
}
const Ru = (s) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const t = s.match(n);
  if (!t)
    return 0;
  const e = t[1];
  return s = s.replace(e, ""), Number.parseInt(s, 10) * al[e];
};
let cl = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Ut;
function Au() {
  return cl;
}
function Lu(s) {
  cl = s.toLowerCase();
}
function ec(s, n) {
  Ut || (Ut = {}), typeof s == "string" && (s = { [s]: n ?? {} }), b.extend(!0, Ut, s);
}
function J(s, n, t, e, i, o) {
  Array.isArray(s) ? Ut && s.unshift(Ut) : s = Ut ? [Ut, s] : [s], typeof t == "string" && (o = i, i = e, e = t, t = void 0);
  const r = i || cl;
  let l;
  for (const a of s) {
    if (!a)
      continue;
    const h = a[r];
    if (!h)
      continue;
    const u = o && a === Ut ? `${o}.${n}` : n;
    if (l = Nu(h, u), l !== void 0)
      break;
  }
  return l === void 0 ? e : t ? Z(l, ...Array.isArray(t) ? t : [t]) : l;
}
function Iu(s, n, t, e) {
  return J(void 0, s, n, t, e);
}
J.addLang = ec;
J.getLang = Iu;
J.getCode = Au;
J.setCode = Lu;
ec({
  zh_cn: {
    confirm: "确定",
    cancel: "取消",
    delete: "删除",
    add: "添加"
  },
  zh_tw: {
    confirm: "確定",
    cancel: "取消",
    delete: "刪除",
    add: "添加"
  },
  en: {
    confirm: "Confirm",
    cancel: "Cancel",
    delete: "Delete",
    add: "Add"
  }
});
function nc(...s) {
  const n = [], t = /* @__PURE__ */ new Map(), e = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? n[r][1] = !!o : (t.set(i, n.length), n.push([i, !!o]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? nc(...i).forEach(e) : i && typeof i == "object" ? Object.entries(i).forEach(e) : typeof i == "string" && i.split(" ").forEach((o) => e(o, !0));
  }), n.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const R = (...s) => nc(...s).reduce((n, [t, e]) => (e && n.push(t), n), []).join(" ");
b.classes = R;
b.fn.setClass = function(s, ...n) {
  return this.each((t, e) => {
    const i = b(e);
    s === !0 ? i.attr("class", R(i.attr("class"), ...n)) : i.addClass(R(s, ...n));
  });
};
const Pn = /* @__PURE__ */ new WeakMap();
function sc(s, n, t) {
  const e = Pn.has(s), i = e ? Pn.get(s) : {};
  typeof n == "string" ? i[n] = t : n === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, n), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!e && s instanceof Element && Object.assign(i, b(s).dataset(), i), Pn.set(s, i)) : Pn.delete(s);
}
function ic(s, n, t) {
  let e = Pn.get(s) || {};
  return !t && s instanceof Element && (e = Object.assign({}, b(s).dataset(), e)), n === void 0 ? e : e[n];
}
b.fn.dataset = b.fn.data;
b.fn.data = function(...s) {
  if (!this.length)
    return;
  const [n, t] = s;
  return !s.length || s.length === 1 && typeof n == "string" ? ic(this[0], n) : this.each((e, i) => sc(i, n, t));
};
b.fn.removeData = function(s = null) {
  return this.each((n, t) => sc(t, s));
};
b.fn._attr = b.fn.attr;
b.fn.extend({
  attr(...s) {
    const [n, t] = s;
    return !s.length || s.length === 1 && typeof n == "string" ? this._attr.apply(this, s) : typeof n == "object" ? (n && Object.keys(n).forEach((e) => {
      const i = n[e];
      i === null ? this.removeAttr(e) : this._attr(e, i);
    }), this) : t === null ? this.removeAttr(n) : this._attr(n, t);
  }
});
b.Event = (s, n) => {
  const [t, ...e] = s.split("."), i = new Event(t, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = e.join("."), i.___ot = t, i.___td = n, i;
};
const wi = (s, n) => new Promise((t) => {
  const e = window.setTimeout(t, s);
  n && n(e);
}), hi = /* @__PURE__ */ new Map();
function vi(s) {
  const { zui: n } = window;
  return hi.size || Object.keys(n).forEach((t) => {
    const e = n[t];
    e.ZUI && hi.set(t.toLowerCase(), e);
  }), s ? hi.get(s.toLowerCase()) : void 0;
}
function Du(s, n, t) {
  const e = vi(s);
  return e ? new e(n, t) : null;
}
function ep(s) {
  if (s) {
    const n = vi(s);
    n && n.defineFn();
  } else
    vi(), hi.forEach((n) => {
      n.defineFn();
    });
}
b.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = b(this).dataset(), t = n.zui;
    delete n.zui, Du(t, this, n);
  }), this;
};
b.fn.zui = function(s, n) {
  const t = this[0];
  if (!t)
    return;
  if (typeof s != "string") {
    const i = ic(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((l) => {
      if (l.startsWith("zui.")) {
        const a = i[l];
        o[l] = a, (!r || r.gid < a.gid) && (r = o[l]);
      }
    }), s === !0 ? o : r;
  }
  const e = vi(s);
  if (e)
    return n === !0 ? e.getAll(t) : e.query(t, n);
};
b(() => {
  b("body").zuiInit();
});
function hl(s, n) {
  const t = b(s)[0];
  if (!t)
    return !1;
  let { viewport: e } = n || {};
  const { left: i, top: o, width: r, height: l } = t.getBoundingClientRect();
  if (!e) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: x, clientWidth: w } = document.documentElement;
    e = { left: 0, top: 0, width: y || w, height: g || x };
  }
  const { left: a, top: h, width: u, height: c } = e;
  if (n != null && n.fullyCheck)
    return i >= a && o >= h && i + r <= u && o + l <= c;
  const f = i <= u && i + r >= a;
  return o <= c && o + l >= h && f;
}
b.fn.isVisible = function(s) {
  return this.each((n, t) => {
    hl(t, s);
  });
};
function ul(s, n, t = !1) {
  const e = b(s);
  if (n !== void 0) {
    if (n.length) {
      const i = `zui-runjs-${b.guid++}`;
      e.append(`<script id="${i}">${n}<\/script>`), t && e.find(`#${i}`).remove();
    }
    return;
  }
  e.find("script").each((i, o) => {
    ul(e, o.innerHTML), o.remove();
  });
}
b.runJS = (s, ...n) => (s = s.trim(), s.startsWith("return ") || (s = `return ${s}`), new Function(...n.map(([e]) => e), s)(...n.map(([, e]) => e)));
b.fn.runJS = function(s) {
  return this.each((n, t) => {
    ul(t, s);
  });
};
function oc(s, n) {
  const t = b(s), { ifNeeded: e = !0, ...i } = n || {};
  return t.each((o, r) => {
    e && hl(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
b.fn.scrollIntoView = function(s) {
  return this.each((n, t) => {
    oc(t, s);
  });
};
const np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: hl,
  runJS: ul,
  scrollIntoView: oc
}, Symbol.toStringTag, { value: "Module" }));
var tr, F, rc, X, pe, Ol, lc, kr, Ye = {}, ac = [], Pu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, dl = Array.isArray;
function ne(s, n) {
  for (var t in n)
    s[t] = n[t];
  return s;
}
function cc(s) {
  var n = s.parentNode;
  n && n.removeChild(s);
}
function q(s, n, t) {
  var e, i, o, r = {};
  for (o in n)
    o == "key" ? e = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? tr.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return ui(s, r, e, i, null);
}
function ui(s, n, t, e, i) {
  var o = { type: s, props: n, key: t, ref: e, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++rc };
  return i == null && F.vnode != null && F.vnode(o), o;
}
function U() {
  return { current: null };
}
function In(s) {
  return s.children;
}
function z(s, n) {
  this.props = s, this.context = n;
}
function xi(s, n) {
  if (n == null)
    return s.__ ? xi(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var t; n < s.__k.length; n++)
    if ((t = s.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof s.type == "function" ? xi(s) : null;
}
function hc(s) {
  var n, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, n = 0; n < s.__k.length; n++)
      if ((t = s.__k[n]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return hc(s);
  }
}
function Hl(s) {
  (!s.__d && (s.__d = !0) && pe.push(s) && !Ci.__r++ || Ol !== F.debounceRendering) && ((Ol = F.debounceRendering) || lc)(Ci);
}
function Ci() {
  var s, n, t, e, i, o, r, l, a;
  for (pe.sort(kr); s = pe.shift(); )
    s.__d && (n = pe.length, e = void 0, i = void 0, o = void 0, l = (r = (t = s).__v).__e, (a = t.__P) && (e = [], i = [], (o = ne({}, r)).__v = r.__v + 1, fl(a, r, o, t.__n, a.ownerSVGElement !== void 0, r.__h != null ? [l] : null, e, l ?? xi(r), r.__h, i), pc(e, r, i), r.__e != l && hc(r)), pe.length > n && pe.sort(kr));
  Ci.__r = 0;
}
function uc(s, n, t, e, i, o, r, l, a, h, u) {
  var c, f, p, g, y, x, w, $, _, k, S = 0, N = e && e.__k || ac, L = N.length, I = L, D = n.length;
  for (t.__k = [], c = 0; c < D; c++)
    (g = t.__k[c] = (g = n[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? ui(null, g, null, null, g) : dl(g) ? ui(In, { children: g }, null, null, null) : g.__b > 0 ? ui(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null && (g.__ = t, g.__b = t.__b + 1, ($ = Ou(g, N, w = c + S, I)) === -1 ? p = Ye : (p = N[$] || Ye, N[$] = void 0, I--), fl(s, g, p, i, o, r, l, a, h, u), y = g.__e, (f = g.ref) && p.ref != f && (p.ref && pl(p.ref, null, g), u.push(f, g.__c || y, g)), y != null && (x == null && (x = y), k = !(_ = p === Ye || p.__v === null) && $ === w, _ ? $ == -1 && S-- : $ !== w && ($ === w + 1 ? (S++, k = !0) : $ > w ? I > D - w ? (S += $ - w, k = !0) : S-- : S = $ < w && $ == w - 1 ? $ - w : 0), w = c + S, k = k || $ == c && !_, typeof g.type != "function" || $ === w && p.__k !== g.__k ? typeof g.type == "function" || k ? g.__d !== void 0 ? (a = g.__d, g.__d = void 0) : a = y.nextSibling : a = fc(s, y, a) : a = dc(g, a, s), typeof t.type == "function" && (t.__d = a)));
  for (t.__e = x, c = L; c--; )
    N[c] != null && (typeof t.type == "function" && N[c].__e != null && N[c].__e == t.__d && (t.__d = N[c].__e.nextSibling), mc(N[c], N[c]));
}
function dc(s, n, t) {
  for (var e, i = s.__k, o = 0; i && o < i.length; o++)
    (e = i[o]) && (e.__ = s, n = typeof e.type == "function" ? dc(e, n, t) : fc(t, e.__e, n));
  return n;
}
function fc(s, n, t) {
  return t == null || t.parentNode !== s ? s.insertBefore(n, null) : n == t && n.parentNode != null || s.insertBefore(n, t), n.nextSibling;
}
function Ou(s, n, t, e) {
  var i = s.key, o = s.type, r = t - 1, l = t + 1, a = n[t];
  if (a === null || a && i == a.key && o === a.type)
    return t;
  if (e > (a != null ? 1 : 0))
    for (; r >= 0 || l < n.length; ) {
      if (r >= 0) {
        if ((a = n[r]) && i == a.key && o === a.type)
          return r;
        r--;
      }
      if (l < n.length) {
        if ((a = n[l]) && i == a.key && o === a.type)
          return l;
        l++;
      }
    }
  return -1;
}
function Hu(s, n, t, e, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || $i(s, o, null, t[o], e);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || $i(s, o, n[o], t[o], e);
}
function Wl(s, n, t) {
  n[0] === "-" ? s.setProperty(n, t ?? "") : s[n] = t == null ? "" : typeof t != "number" || Pu.test(n) ? t : t + "px";
}
function $i(s, n, t, e, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof e == "string" && (s.style.cssText = e = ""), e)
          for (n in e)
            t && n in t || Wl(s.style, n, "");
        if (t)
          for (n in t)
            e && t[n] === e[n] || Wl(s.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in s ? n.toLowerCase().slice(2) : n.slice(2), s.l || (s.l = {}), s.l[n + o] = t, t ? e || s.addEventListener(n, o ? Bl : zl, o) : s.removeEventListener(n, o ? Bl : zl, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "width" && n !== "height" && n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n !== "rowSpan" && n !== "colSpan" && n in s)
        try {
          s[n] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && n[4] !== "-" ? s.removeAttribute(n) : s.setAttribute(n, t));
    }
}
function zl(s) {
  return this.l[s.type + !1](F.event ? F.event(s) : s);
}
function Bl(s) {
  return this.l[s.type + !0](F.event ? F.event(s) : s);
}
function fl(s, n, t, e, i, o, r, l, a, h) {
  var u, c, f, p, g, y, x, w, $, _, k, S, N, L, I, D = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, l = n.__e = t.__e, n.__h = null, o = [l]), (u = F.__b) && u(n);
  try {
    t:
      if (typeof D == "function") {
        if (w = n.props, $ = (u = D.contextType) && e[u.__c], _ = u ? $ ? $.props.value : u.__ : e, t.__c ? x = (c = n.__c = t.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? n.__c = c = new D(w, _) : (n.__c = c = new z(w, _), c.constructor = D, c.render = zu), $ && $.sub(c), c.props = w, c.state || (c.state = {}), c.context = _, c.__n = e, f = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ne({}, c.__s)), ne(c.__s, D.getDerivedStateFromProps(w, c.__s))), p = c.props, g = c.state, c.__v = n, f)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && w !== p && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, _), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, _) === !1 || n.__v === t.__v)) {
            for (n.__v !== t.__v && (c.props = w, c.state = c.__s, c.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(O) {
              O && (O.__ = n);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(p, g, y);
          });
        }
        if (c.context = _, c.props = w, c.__P = s, c.__e = !1, S = F.__r, N = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(n), u = c.render(c.props, c.state, c.context), L = 0; L < c._sb.length; L++)
            c.__h.push(c._sb[L]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++N < 25);
        c.state = c.__s, c.getChildContext != null && (e = ne(ne({}, e), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (y = c.getSnapshotBeforeUpdate(p, g)), uc(s, dl(I = u != null && u.type === In && u.key == null ? u.props.children : u) ? I : [I], n, t, e, i, o, r, l, a, h), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), x && (c.__E = c.__ = null);
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Wu(t.__e, n, t, e, i, o, r, a, h);
    (u = F.diffed) && u(n);
  } catch (O) {
    n.__v = null, (a || o != null) && (n.__e = l, n.__h = !!a, o[o.indexOf(l)] = null), F.__e(O, n, t);
  }
}
function pc(s, n, t) {
  for (var e = 0; e < t.length; e++)
    pl(t[e], t[++e], t[++e]);
  F.__c && F.__c(n, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      F.__e(o, i.__v);
    }
  });
}
function Wu(s, n, t, e, i, o, r, l, a) {
  var h, u, c, f = t.props, p = n.props, g = n.type, y = 0;
  if (g === "svg" && (i = !0), o != null) {
    for (; y < o.length; y++)
      if ((h = o[y]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        s = h, o[y] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(p);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), o = null, l = !1;
  }
  if (g === null)
    f === p || l && s.data === p || (s.data = p);
  else {
    if (o = o && tr.call(s.childNodes), u = (f = t.props || Ye).dangerouslySetInnerHTML, c = p.dangerouslySetInnerHTML, !l) {
      if (o != null)
        for (f = {}, y = 0; y < s.attributes.length; y++)
          f[s.attributes[y].name] = s.attributes[y].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === s.innerHTML) || (s.innerHTML = c && c.__html || ""));
    }
    if (Hu(s, p, f, i, l), c)
      n.__k = [];
    else if (uc(s, dl(y = n.props.children) ? y : [y], n, t, e, i && g !== "foreignObject", o, r, o ? o[0] : t.__k && xi(t, 0), l, a), o != null)
      for (y = o.length; y--; )
        o[y] != null && cc(o[y]);
    l || ("value" in p && (y = p.value) !== void 0 && (y !== s.value || g === "progress" && !y || g === "option" && y !== f.value) && $i(s, "value", y, f.value, !1), "checked" in p && (y = p.checked) !== void 0 && y !== s.checked && $i(s, "checked", y, f.checked, !1));
  }
  return s;
}
function pl(s, n, t) {
  try {
    typeof s == "function" ? s(n) : s.current = n;
  } catch (e) {
    F.__e(e, t);
  }
}
function mc(s, n, t) {
  var e, i;
  if (F.unmount && F.unmount(s), (e = s.ref) && (e.current && e.current !== s.__e || pl(e, null, n)), (e = s.__c) != null) {
    if (e.componentWillUnmount)
      try {
        e.componentWillUnmount();
      } catch (o) {
        F.__e(o, n);
      }
    e.base = e.__P = null, s.__c = void 0;
  }
  if (e = s.__k)
    for (i = 0; i < e.length; i++)
      e[i] && mc(e[i], n, t || typeof s.type != "function");
  t || s.__e == null || cc(s.__e), s.__ = s.__e = s.__d = void 0;
}
function zu(s, n, t) {
  return this.constructor(s, t);
}
function Fn(s, n, t) {
  var e, i, o, r;
  F.__ && F.__(s, n), i = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], fl(n, s = (!e && t || n).__k = q(In, null, [s]), i || Ye, Ye, n.ownerSVGElement !== void 0, !e && t ? [t] : i ? null : n.firstChild ? tr.call(n.childNodes) : null, o, !e && t ? t : i ? i.__e : n.firstChild, e, r), pc(o, s, r);
}
tr = ac.slice, F = { __e: function(s, n, t, e) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, e || {}), r = i.__d), r)
          return i.__E = i;
      } catch (l) {
        s = l;
      }
  throw s;
} }, rc = 0, X = function(s) {
  return s != null && s.constructor === void 0;
}, z.prototype.setState = function(s, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ne({}, this.state), typeof s == "function" && (s = s(ne({}, t), this.props)), s && ne(t, s), s != null && this.__v && (n && this._sb.push(n), Hl(this));
}, z.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Hl(this));
}, z.prototype.render = In, pe = [], lc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, kr = function(s, n) {
  return s.__v.__b - n.__v.__b;
}, Ci.__r = 0;
var gc = function(s, n, t, e) {
  var i;
  n[0] = 0;
  for (var o = 1; o < n.length; o++) {
    var r = n[o++], l = n[o] ? (n[0] |= r ? 1 : 2, t[n[o++]]) : n[++o];
    r === 3 ? e[0] = l : r === 4 ? e[1] = Object.assign(e[1] || {}, l) : r === 5 ? (e[1] = e[1] || {})[n[++o]] = l : r === 6 ? e[1][n[++o]] += l + "" : r ? (i = s.apply(l, gc(s, l, t, ["", null])), e.push(i), l[0] ? n[0] |= 2 : (n[o - 2] = 0, n[o] = i)) : e.push(l);
  }
  return e;
}, Fl = /* @__PURE__ */ new Map();
function Bu(s) {
  var n = Fl.get(this);
  return n || (n = /* @__PURE__ */ new Map(), Fl.set(this, n)), (n = gc(this, n.get(s) || (n.set(s, n = function(t) {
    for (var e, i, o = 1, r = "", l = "", a = [0], h = function(f) {
      o === 1 && (f || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, f, r) : o === 3 && (f || r) ? (a.push(3, f, r), o = 2) : o === 2 && r === "..." && f ? a.push(4, f, 0) : o === 2 && r && !f ? a.push(5, 0, !0, r) : o >= 5 && ((r || !f && o === 5) && (a.push(o, 0, r, i), o = 6), f && (a.push(o, f, 0, i), o = 6)), r = "";
    }, u = 0; u < t.length; u++) {
      u && (o === 1 && h(), h(u));
      for (var c = 0; c < t[u].length; c++)
        e = t[u][c], o === 1 ? e === "<" ? (h(), a = [a], o = 3) : r += e : o === 4 ? r === "--" && e === ">" ? (o = 1, r = "") : r = e + r[0] : l ? e === l ? l = "" : r += e : e === '"' || e === "'" ? l = e : e === ">" ? (h(), o = 1) : o && (e === "=" ? (o = 5, i = r, r = "") : e === "/" && (o < 5 || t[u][c + 1] === ">") ? (h(), o === 3 && (a = a[0]), o = a, (a = a[0]).push(2, 0, o), o = 0) : e === " " || e === "	" || e === `
` || e === "\r" ? (h(), o = 2) : r += e), o === 3 && r === "!--" && (o = 4, a = a[0]);
    }
    return h(), a;
  }(s)), n), arguments, [])).length > 1 ? n : n[0];
}
const sp = Bu.bind(q);
function yc(s) {
  const { tagName: n = "div", className: t, style: e, children: i, attrs: o, forwardRef: r, ...l } = s;
  return q(n, { ref: r, class: R(t), style: e, ...l, ...o }, i);
}
var Fu = 0;
function m(s, n, t, e, i, o) {
  var r, l, a = {};
  for (l in n)
    l == "ref" ? r = n[l] : a[l] = n[l];
  var h = { type: s, props: a, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Fu, __source: i, __self: o };
  if (typeof s == "function" && (r = s.defaultProps))
    for (l in r)
      a[l] === void 0 && (a[l] = r[l]);
  return F.vnode && F.vnode(h), h;
}
var Yn, Kn, Er;
class Nn extends z {
  constructor() {
    super(...arguments);
    v(this, Kn);
    v(this, Yn, U());
  }
  componentDidMount() {
    A(this, Kn, Er).call(this);
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && A(this, Kn, Er).call(this);
  }
  render(t) {
    const { executeScript: e, html: i, ...o } = t;
    return /* @__PURE__ */ m(yc, { forwardRef: d(this, Yn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Yn = new WeakMap(), Kn = new WeakSet(), Er = function() {
  this.props.executeScript && b(d(this, Yn).current).runJS();
};
function ju(s) {
  const {
    tag: n,
    className: t,
    style: e,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: l,
    onGenerate: a,
    onRenderItem: h,
    ...u
  } = s, c = [t], f = { ...e }, p = [], g = [];
  return i.forEach((y) => {
    const x = [];
    if (typeof y == "string" && l && l[y] && (y = l[y]), typeof y == "function")
      if (a)
        x.push(...a.call(r, y, p, ...o));
      else {
        const w = y.call(r, p, ...o);
        w && (Array.isArray(w) ? x.push(...w) : x.push(w));
      }
    else
      x.push(y);
    x.forEach((w) => {
      w != null && (typeof w == "object" && !X(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? p.push(
        /* @__PURE__ */ m("div", { className: R(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? g.push(w.__html) : (w.style && Object.assign(f, w.style), w.className && c.push(w.className), w.children && p.push(w.children), w.attrs && Object.assign(u, w.attrs)) : p.push(w));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: R(c),
    style: f,
    ...u
  }, p];
}
function Tr({
  tag: s = "div",
  ...n
}) {
  const [t, e] = ju(n);
  return q(s, t, ...e);
}
function bc(s, n, t) {
  return typeof s == "function" ? s.call(n, ...t) : Array.isArray(s) ? s.map((e) => bc(e, n, t)) : X(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ m(Nn, { ...s }) : /* @__PURE__ */ m(yc, { ...s }) : s;
}
function Js(s) {
  const { content: n, generatorThis: t, generatorArgs: e } = s, i = bc(n, t, e);
  return i == null || typeof i == "boolean" ? null : X(i) ? i : /* @__PURE__ */ m(In, { children: i });
}
const jl = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function et(s) {
  const { icon: n, className: t, ...e } = s;
  if (!n)
    return null;
  if (X(n))
    return n;
  const i = ["icon", t];
  if (typeof n == "string")
    i.push(jl(n));
  else if (typeof n == "object") {
    const { className: o, icon: r, ...l } = n;
    i.push(o, r ? jl(r) : ""), Object.assign(e, l);
  }
  return /* @__PURE__ */ m("i", { className: R(i), ...e });
}
function Vu(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Uu(s) {
  const n = this, t = s._container;
  n.componentWillUnmount = function() {
    Fn(null, n._temp), n._temp = null, n._container = null;
  }, n._container && n._container !== t && n.componentWillUnmount(), s._vnode ? (n._temp || (n._container = t, n._temp = {
    nodeType: 1,
    parentNode: t,
    childNodes: [],
    appendChild(e) {
      this.childNodes.push(e), n._container.appendChild(e);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(e, i) {
      this.childNodes.push(e), n._container.appendChild(e);
    },
    removeChild(e) {
      this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), n._container.removeChild(e);
    }
  }), Fn(
    q(Vu, { context: n.context }, s._vnode),
    n._temp
  )) : n._temp && n.componentWillUnmount();
}
function qu(s, n) {
  const t = q(Uu, { _vnode: s, _container: n });
  return t.containerInfo = n, t;
}
var qt, Ze, Gn, Qe;
const Ve = class Ve {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(n, t) {
    /**
     * Store the component options.
     */
    v(this, qt, void 0);
    /**
     * Store the component element.
     */
    v(this, Ze, void 0);
    /**
     * The component global ID.
     */
    v(this, Gn, void 0);
    v(this, Qe, void 0);
    C(this, Qe, !1);
    const { KEY: e, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r } = this.constructor, l = b(n);
    if (l.data(e) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = b.guid++;
    if (C(this, Gn, a), C(this, Ze, l[0]), l.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), C(this, qt, { ...o, ...l.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, l.data(e, this).attr(i, `${a}`), r) {
      const h = `${e}:ALL`;
      let u = l.data(h);
      u || (u = /* @__PURE__ */ new Map(), l.data(h, u)), u.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      C(this, Qe, !0), this.emit("inited", this.options), this.afterInit();
    });
  }
  /**
   * ZUI name
   */
  static get ZUI() {
    return this.NAME.replace(/(^[A-Z]+)/, (n) => n.toLowerCase());
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  /**
   * Component namespace, like ".zui.menu"
   */
  static get NAMESPACE() {
    return `.${this.NAME}.zui`;
  }
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  get inited() {
    return d(this, Qe);
  }
  /**
   * Get the component element.
   */
  get element() {
    return d(this, Ze);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return d(this, qt);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return d(this, Gn);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return b(this.element);
  }
  /**
   * Get the component event emitter.
   */
  get $emitter() {
    return this.$element;
  }
  /**
   * Initialize the component.
   */
  init() {
  }
  /**
   * Do something after the component initialized.
   */
  afterInit() {
  }
  /**
   * Render the component.
   *
   * @param options The component options to override before render.
   */
  render(n) {
    this.setOptions(n);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    const { KEY: n, DATA_KEY: t, MULTI_INSTANCE: e } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), i.off(this.namespace).removeData(n).attr(t, null), e) {
      const o = this.$element.data(`${n}:ALL`);
      if (o)
        if (o.delete(this._key), o.size === 0)
          this.$element.removeData(`${n}:ALL`);
        else {
          const r = o.values().next().value;
          i.data(n, r).attr(t, r.gid);
        }
    }
    C(this, qt, void 0), C(this, Ze, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(n) {
    return n && b.extend(d(this, qt), n), d(this, qt);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(n, ...t) {
    const e = b.Event(n);
    return e.__src = this, this.$emitter.trigger(e, [this, ...t]), e;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(n, t, e) {
    const i = this;
    this.$element[e != null && e.once ? "one" : "on"](this._wrapEvent(n), function(o, r) {
      (!o.__src || o.__src === i) && t.call(this, o, r);
    });
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(n, t) {
    this.on(n, t, { once: !0 });
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(n) {
    this.$element.off(this._wrapEvent(n));
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(n, t, e) {
    return J(this.options.i18n, n, t, e, this.options.lang, this.constructor.NAME) ?? J(this.options.i18n, n, t, e, this.options.lang) ?? `{i18n:${n}}`;
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `.${this._key}${this.constructor.NAMESPACE}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  _wrapEvent(n) {
    return n.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(n, t) {
    const e = b(n);
    if (this.MULTI_INSTANCE && t !== void 0) {
      const i = e.data(`${this.KEY}:ALL`);
      return i ? i.get(t) : void 0;
    }
    return e.data(this.KEY);
  }
  /**
   * Ensure the component instance of the given element.
   *
   * @param this      Current component constructor.
   * @param selector  The component element selector.
   * @param options   The component options.
   * @returns         The component instance.
   */
  static ensure(n, t) {
    const e = this.get(n, t == null ? void 0 : t.key);
    return e ? (t && e.setOptions(t), e) : new this(n, t);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(n) {
    const { MULTI_INSTANCE: t, DATA_KEY: e } = this, i = [];
    return b(n || document).find(`[${e}]`).each((o, r) => {
      if (t) {
        const a = b(r).data(`${this.KEY}:ALL`);
        if (a) {
          i.push(...a.values());
          return;
        }
      }
      const l = b(r).data(this.KEY);
      l && i.push(l);
    }), i;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(n, t) {
    return n === void 0 ? this.getAll().sort((e, i) => e.gid - i.gid)[0] : this.get(b(n).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(n) {
    let t = n || this.ZUI;
    b.fn[t] && (t = `zui${this.NAME}`);
    const e = this;
    b.fn.extend({
      [t](i, ...o) {
        const r = typeof i == "object" ? i : void 0, l = typeof i == "string" ? i : void 0;
        let a;
        return this.each((h, u) => {
          let c = e.get(u);
          if (c ? r && c.render(r) : c = new e(u, r), l) {
            let f = c[l];
            f !== void 0 && (f = c.$[l]), typeof f == "function" ? a = f(...o) : a = f;
          }
        }), a !== void 0 ? a : this;
      }
    });
  }
};
qt = new WeakMap(), Ze = new WeakMap(), Gn = new WeakMap(), Qe = new WeakMap(), Ve.DEFAULT = {}, Ve.NAME = Ve.name, Ve.MULTI_INSTANCE = !1;
let ft = Ve;
class j extends ft {
  constructor() {
    super(...arguments), this.ref = U();
  }
  /**
   * The React component instance.
   */
  get $() {
    return this.ref.current;
  }
  /**
   * Render after component init.
   */
  afterInit() {
    this.render();
  }
  /**
   * Destroy component.
   */
  destroy() {
    var n, t;
    (t = (n = this.$) == null ? void 0 : n.componentWillUnmount) == null || t.call(n), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(n) {
    Fn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(n)
      }),
      this.element
    );
  }
}
function Yu({
  component: s = "div",
  className: n,
  children: t,
  style: e,
  attrs: i
}) {
  return q(s, {
    className: R(n),
    style: e,
    ...i
  }, t);
}
function wc({
  type: s,
  component: n = "a",
  className: t,
  children: e,
  content: i,
  attrs: o,
  url: r,
  disabled: l,
  active: a,
  icon: h,
  text: u,
  target: c,
  trailingIcon: f,
  hint: p,
  checked: g,
  onClick: y,
  ...x
}) {
  const w = [
    typeof g == "boolean" ? /* @__PURE__ */ m("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
    /* @__PURE__ */ m(et, { icon: h }),
    /* @__PURE__ */ m("span", { className: "text", children: u }),
    /* @__PURE__ */ m(Js, { content: i }),
    e,
    /* @__PURE__ */ m(et, { icon: f })
  ];
  return q(n, {
    className: R(t, { disabled: l, active: a }),
    title: p,
    [n === "a" ? "href" : "data-url"]: r,
    [n === "a" ? "target" : "data-target"]: c,
    onClick: y,
    ...x,
    ...o
  }, ...w);
}
function Ku({
  component: s = "div",
  className: n,
  text: t,
  attrs: e,
  children: i,
  content: o,
  style: r,
  onClick: l
}) {
  return q(s, {
    className: R(n),
    style: r,
    onClick: l,
    ...e
  }, t, /* @__PURE__ */ m(Js, { content: o }), i);
}
function Gu({
  component: s = "div",
  className: n,
  style: t,
  space: e,
  flex: i,
  attrs: o,
  onClick: r,
  children: l
}) {
  return q(s, {
    className: R(n),
    style: { width: e, height: e, flex: i, ...t },
    onClick: r,
    ...o
  }, l);
}
function Xu({ type: s, ...n }) {
  return /* @__PURE__ */ m(Tr, { ...n });
}
function vc({
  component: s = "div",
  className: n,
  children: t,
  content: e,
  style: i,
  attrs: o
}) {
  return q(s, {
    className: R(n),
    style: i,
    ...o
  }, /* @__PURE__ */ m(Js, { content: e }), t);
}
var Dt;
let er = (Dt = class extends z {
  constructor() {
    super(...arguments), this.ref = U();
  }
  get name() {
    return this.props.name ?? this.constructor.NAME;
  }
  componentDidMount() {
    this.afterRender(!0);
  }
  componentDidUpdate() {
    this.afterRender(!1);
  }
  componentWillUnmount() {
    var n, t;
    (t = (n = this.props).beforeDestroy) == null || t.call(n, { menu: this });
  }
  afterRender(n) {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { menu: this, firstRender: n });
  }
  handleItemClick(n, t, e, i) {
    e && e.call(i.target, i, n, t);
    const { onClickItem: o } = this.props;
    o && o({ menu: this, item: n, index: t, event: i });
  }
  beforeRender() {
    var e;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this)), n.items || (n.items = []);
    const t = (e = n.beforeRender) == null ? void 0 : e.call(n, { menu: this, options: n });
    return t && Object.assign(n, t), n;
  }
  getItemRenderProps(n, t, e) {
    const { commonItemProps: i, onClickItem: o, itemRenderProps: r } = n;
    let l = { ...t };
    return i && Object.assign(l, i[t.type || "item"]), (o || t.onClick) && (l.onClick = this.handleItemClick.bind(this, l, e, t.onClick)), l.className = R(l.className), r && (l = r(l)), l;
  }
  renderItem(n, t, e) {
    if (!t)
      return null;
    const i = this.getItemRenderProps(n, t, e), { itemRender: o } = n;
    if (o) {
      if (typeof o == "object") {
        const y = o[t.type || "item"];
        if (y)
          return /* @__PURE__ */ m(y, { ...i });
      } else if (typeof o == "function") {
        const y = o.call(this, i, q);
        if (X(y))
          return y;
        typeof y == "object" && Object.assign(i, y);
      }
    }
    const { type: r = "item", component: l, key: a = e, rootAttrs: h, rootClass: u, rootStyle: c, rootChildren: f, ...p } = i;
    if (r === "html")
      return /* @__PURE__ */ m(
        "li",
        {
          className: R("action-menu-item", `${this.name}-html`, u, p.className),
          ...h,
          style: c || p.style,
          dangerouslySetInnerHTML: { __html: p.html }
        },
        a
      );
    const g = !l || typeof l == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Dt.ItemComponents[r] : l;
    return Object.assign(p, {
      type: r,
      component: typeof l == "string" ? l : void 0
    }), n.checkbox && r === "item" && p.checked === void 0 && (p.checked = !!p.active), this.renderTypedItem(g, {
      className: R(u),
      children: f,
      style: c,
      key: a,
      ...h
    }, {
      ...p,
      type: r,
      component: typeof l == "string" ? l : void 0
    });
  }
  renderTypedItem(n, t, e) {
    const { children: i, className: o, key: r, ...l } = t;
    return /* @__PURE__ */ m(
      "li",
      {
        className: R(`${this.constructor.NAME}-item`, `${this.name}-${e.type}`, o),
        ...l,
        children: [
          /* @__PURE__ */ m(n, { ...e }),
          typeof i == "function" ? i() : i
        ]
      },
      r
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: t,
      style: e,
      commonItemProps: i,
      className: o,
      items: r,
      children: l,
      itemRender: a,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: f,
      ...p
    } = n, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ m(g, { class: R(this.name, o), style: e, ...p, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, n)),
      l
    ] });
  }
}, Dt.ItemComponents = {
  divider: Yu,
  item: wc,
  heading: Ku,
  space: Gu,
  custom: Xu,
  basic: vc
}, Dt.ROOT_TAG = "menu", Dt.NAME = "action-menu", Dt);
const Pi = class Pi extends j {
};
Pi.NAME = "ActionMenu", Pi.Component = er;
let Vl = Pi;
function Ju({
  items: s,
  show: n,
  level: t,
  ...e
}) {
  return /* @__PURE__ */ m(wc, { ...e });
}
var Xn, yt, tn, Jn;
let ml = (Jn = class extends er {
  constructor(t) {
    super(t);
    v(this, Xn, /* @__PURE__ */ new Set());
    v(this, yt, void 0);
    v(this, tn, (t, e, i) => {
      b(i.target).closest(".not-nested-toggle").length || (this.toggle(t, e), i.preventDefault());
    });
    C(this, yt, t.nestedShow === void 0), d(this, yt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: e, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, indent: l, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((h) => h.items) || (a.className = R(a.className, "no-nested-items")), !r && l && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${l}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: e, controlledMenu: i, nestedShow: o, beforeDestroy: r, beforeRender: l, itemRender: a, onClickItem: h, afterRender: u, commonItemProps: c, level: f, itemRenderProps: p } = this.props;
    return {
      items: t,
      name: e,
      nestedShow: d(this, yt) ? this.state.nestedShow : o,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: i || this,
      commonItemProps: c,
      onClickItem: h,
      afterRender: u,
      beforeRender: l,
      beforeDestroy: r,
      itemRender: a,
      itemRenderProps: p,
      level: (f || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: e } = t;
    if (!e || (typeof e == "function" && (e = e(t, this)), !e.length))
      return;
    const i = this.constructor, o = this.getNestedMenuProps(e);
    return /* @__PURE__ */ m(i, { ...o, "data-level": o.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, e) {
  }
  getItemRenderProps(t, e, i) {
    const o = super.getItemRenderProps(t, e, i);
    if (o.level = t.level || 0, !this.isNestedItem(o))
      return o;
    const r = o.key ?? o.id ?? `${t.level || 0}:${i}`;
    d(this, Xn).add(r);
    const l = this.isExpanded(r);
    if (l && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(e)
    ]), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: d(this, tn).bind(this, r, !0),
        onMouseLeave: d(this, tn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (u) => {
        d(this, tn).call(this, r, void 0, u), h == null || h(u);
      };
    }
    const a = this.renderToggleIcon(l, o);
    return a && (o.children = [o.children, a]), o.show = l, o.rootClass = [o.rootClass, "has-nested-menu", l ? "show" : ""], o;
  }
  isExpanded(t) {
    const e = d(this, yt) ? this.state.nestedShow : this.props.nestedShow;
    return e && typeof e == "object" ? e[t] : !!e;
  }
  toggle(t, e) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, e);
    if (!d(this, yt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...d(this, Xn).values()].reduce((r, l) => (r[l] = !0, r), {}) : o = {}), e === void 0)
      e = !o[t];
    else if (!!o[t] == !!e)
      return !1;
    return e ? o[t] = e : delete o[t], this.setState({ nestedShow: { ...o } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    d(this, yt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    d(this, yt) && this.setState({ nestedShow: !1 });
  }
}, Xn = new WeakMap(), yt = new WeakMap(), tn = new WeakMap(), Jn.ItemComponents = {
  item: Ju
}, Jn);
const Oi = class Oi extends j {
};
Oi.NAME = "ActionMenuNested", Oi.Component = ml;
let Ul = Oi;
var Zn;
let Oe = (Zn = class extends ml {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const n = super.beforeRender();
    let { hasIcons: t } = n;
    return t === void 0 && (t = n.items.some((e) => e.icon)), n.className = R(n.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": n.items.some((e) => this.isNestedItem(e)),
      popup: n.popup
    }), n;
  }
  renderToggleIcon(n) {
    return /* @__PURE__ */ m("span", { class: `${this.name}-toggle-icon caret-${n ? "down" : "right"}` });
  }
}, Zn.NAME = "menu", Zn);
const Hi = class Hi extends j {
};
Hi.NAME = "Menu", Hi.Component = Oe;
let ql = Hi;
class tt extends z {
  render() {
    const {
      component: n,
      type: t,
      btnType: e,
      size: i,
      className: o,
      children: r,
      url: l,
      target: a,
      disabled: h,
      active: u,
      loading: c,
      loadingIcon: f,
      loadingText: p,
      icon: g,
      text: y,
      trailingIcon: x,
      caret: w,
      square: $,
      rounded: _ = !0,
      hint: k,
      ...S
    } = this.props, N = n || (l ? "a" : "button"), L = y == null || typeof y == "string" && !y.length || c && !p, I = w && L && !g && !x && !r && !c;
    return q(
      N,
      {
        className: R("btn", t, o, {
          "btn-caret": I,
          disabled: h || c,
          active: u,
          loading: c,
          square: $ === void 0 ? !I && !r && L : $
        }, i ? `size-${i}` : "", typeof _ == "string" ? _ : { rounded: _ }),
        title: k,
        [N === "a" ? "href" : "data-url"]: l,
        [N === "a" ? "target" : "data-target"]: a,
        type: N === "button" ? e : void 0,
        ...S
      },
      c ? /* @__PURE__ */ m(et, { icon: f || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(et, { icon: g }),
      L ? null : /* @__PURE__ */ m("span", { className: "text", children: c ? p : y }),
      c ? null : r,
      c ? null : /* @__PURE__ */ m(et, { icon: x }),
      c ? null : w ? /* @__PURE__ */ m("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Zu({
  key: s,
  type: n,
  btnType: t,
  ...e
}) {
  return /* @__PURE__ */ m(tt, { type: t, ...e });
}
function Zs(s) {
  return s.split("-")[1];
}
function gl(s) {
  return s === "y" ? "height" : "width";
}
function Le(s) {
  return s.split("-")[0];
}
function Qs(s) {
  return ["top", "bottom"].includes(Le(s)) ? "x" : "y";
}
function Yl(s, n, t) {
  let { reference: e, floating: i } = s;
  const o = e.x + e.width / 2 - i.width / 2, r = e.y + e.height / 2 - i.height / 2, l = Qs(n), a = gl(l), h = e[a] / 2 - i[a] / 2, u = l === "x";
  let c;
  switch (Le(n)) {
    case "top":
      c = { x: o, y: e.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: e.y + e.height };
      break;
    case "right":
      c = { x: e.x + e.width, y: r };
      break;
    case "left":
      c = { x: e.x - i.width, y: r };
      break;
    default:
      c = { x: e.x, y: e.y };
  }
  switch (Zs(n)) {
    case "start":
      c[l] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[l] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Qu = async (s, n, t) => {
  const { placement: e = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let h = await r.getElementRects({ reference: s, floating: n, strategy: i }), { x: u, y: c } = Yl(h, e, a), f = e, p = {}, g = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: x, fn: w } = l[y], { x: $, y: _, data: k, reset: S } = await w({ x: u, y: c, initialPlacement: e, placement: f, strategy: i, middlewareData: p, rects: h, platform: r, elements: { reference: s, floating: n } });
    u = $ ?? u, c = _ ?? c, p = { ...p, [x]: { ...p[x], ...k } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: n, strategy: i }) : S.rects), { x: u, y: c } = Yl(h, f, a)), y = -1);
  }
  return { x: u, y: c, placement: f, strategy: i, middlewareData: p };
};
function ti(s, n) {
  return typeof s == "function" ? s(n) : s;
}
function xc(s) {
  return typeof s != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function _i(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function Cc(s, n) {
  var t;
  n === void 0 && (n = {});
  const { x: e, y: i, platform: o, rects: r, elements: l, strategy: a } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: f = !1, padding: p = 0 } = ti(n, s), g = xc(p), y = l[f ? c === "floating" ? "reference" : "floating" : c], x = _i(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(y))) == null || t ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: h, rootBoundary: u, strategy: a })), w = c === "floating" ? { ...r.floating, x: e, y: i } : r.reference, $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), _ = await (o.isElement == null ? void 0 : o.isElement($)) && await (o.getScale == null ? void 0 : o.getScale($)) || { x: 1, y: 1 }, k = _i(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: $, strategy: a }) : w);
  return { top: (x.top - k.top + g.top) / _.y, bottom: (k.bottom - x.bottom + g.bottom) / _.y, left: (x.left - k.left + g.left) / _.x, right: (k.right - x.right + g.right) / _.x };
}
const Nr = Math.min, td = Math.max;
function Mr(s, n, t) {
  return td(s, Nr(n, t));
}
const Rr = (s) => ({ name: "arrow", options: s, async fn(n) {
  const { x: t, y: e, placement: i, rects: o, platform: r, elements: l } = n, { element: a, padding: h = 0 } = ti(s, n) || {};
  if (a == null)
    return {};
  const u = xc(h), c = { x: t, y: e }, f = Qs(i), p = gl(f), g = await r.getDimensions(a), y = f === "y", x = y ? "top" : "left", w = y ? "bottom" : "right", $ = y ? "clientHeight" : "clientWidth", _ = o.reference[p] + o.reference[f] - c[f] - o.floating[p], k = c[f] - o.reference[f], S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
  let N = S ? S[$] : 0;
  N && await (r.isElement == null ? void 0 : r.isElement(S)) || (N = l.floating[$] || o.floating[p]);
  const L = _ / 2 - k / 2, I = N / 2 - g[p] / 2 - 1, D = Nr(u[x], I), O = Nr(u[w], I), P = D, M = N - g[p] - O, E = N / 2 - g[p] / 2 + L, H = Mr(P, E, M), W = Zs(i) != null && E != H && o.reference[p] / 2 - (E < P ? D : O) - g[p] / 2 < 0 ? E < P ? P - E : M - E : 0;
  return { [f]: c[f] - W, data: { [f]: H, centerOffset: E - H + W } };
} }), ed = ["top", "right", "bottom", "left"];
ed.reduce((s, n) => s.concat(n, n + "-start", n + "-end"), []);
const nd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Si(s) {
  return s.replace(/left|right|bottom|top/g, (n) => nd[n]);
}
function sd(s, n, t) {
  t === void 0 && (t = !1);
  const e = Zs(s), i = Qs(s), o = gl(i);
  let r = i === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Si(r)), { main: r, cross: Si(r) };
}
const id = { start: "end", end: "start" };
function mr(s) {
  return s.replace(/start|end/g, (n) => id[n]);
}
const nr = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(n) {
    var t;
    const { placement: e, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...y } = ti(s, n), x = Le(e), w = Le(r) === r, $ = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), _ = c || (w || !g ? [Si(r)] : function(P) {
      const M = Si(P);
      return [mr(P), M, mr(M)];
    }(r));
    c || p === "none" || _.push(...function(P, M, E, H) {
      const W = Zs(P);
      let B = function(G, fe, si) {
        const Dn = ["left", "right"], ii = ["right", "left"], hr = ["top", "bottom"], zh = ["bottom", "top"];
        switch (G) {
          case "top":
          case "bottom":
            return si ? fe ? ii : Dn : fe ? Dn : ii;
          case "left":
          case "right":
            return fe ? hr : zh;
          default:
            return [];
        }
      }(Le(P), E === "start", H);
      return W && (B = B.map((G) => G + "-" + W), M && (B = B.concat(B.map(mr)))), B;
    }(r, g, p, $));
    const k = [r, ..._], S = await Cc(n, y), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && N.push(S[x]), u) {
      const { main: P, cross: M } = sd(e, o, $);
      N.push(S[P], S[M]);
    }
    if (L = [...L, { placement: e, overflows: N }], !N.every((P) => P <= 0)) {
      var I, D;
      const P = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, M = k[P];
      if (M)
        return { data: { index: P, overflows: L }, reset: { placement: M } };
      let E = (D = L.filter((H) => H.overflows[0] <= 0).sort((H, W) => H.overflows[1] - W.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!E)
        switch (f) {
          case "bestFit": {
            var O;
            const H = (O = L.map((W) => [W.placement, W.overflows.filter((B) => B > 0).reduce((B, G) => B + G, 0)]).sort((W, B) => W[1] - B[1])[0]) == null ? void 0 : O[0];
            H && (E = H);
            break;
          }
          case "initialPlacement":
            E = r;
        }
      if (e !== E)
        return { reset: { placement: E } };
    }
    return {};
  } };
}, sr = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(n) {
    const { x: t, y: e } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: h } = o, u = await (a.isRTL == null ? void 0 : a.isRTL(h.floating)), c = Le(l), f = Zs(l), p = Qs(l) === "x", g = ["left", "top"].includes(c) ? -1 : 1, y = u && p ? -1 : 1, x = ti(r, o);
      let { mainAxis: w, crossAxis: $, alignmentAxis: _ } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return f && typeof _ == "number" && ($ = f === "end" ? -1 * _ : _), p ? { x: $ * y, y: w * g } : { x: w * g, y: $ * y };
    }(n, s);
    return { x: t + i.x, y: e + i.y, data: i };
  } };
};
function od(s) {
  return s === "x" ? "y" : "x";
}
const ki = function(s) {
  return s === void 0 && (s = {}), { name: "shift", options: s, async fn(n) {
    const { x: t, y: e, placement: i } = n, { mainAxis: o = !0, crossAxis: r = !1, limiter: l = { fn: (x) => {
      let { x: w, y: $ } = x;
      return { x: w, y: $ };
    } }, ...a } = ti(s, n), h = { x: t, y: e }, u = await Cc(n, a), c = Qs(Le(i)), f = od(c);
    let p = h[c], g = h[f];
    if (o) {
      const x = c === "y" ? "bottom" : "right";
      p = Mr(p + u[c === "y" ? "top" : "left"], p, p - u[x]);
    }
    if (r) {
      const x = f === "y" ? "bottom" : "right";
      g = Mr(g + u[f === "y" ? "top" : "left"], g, g - u[x]);
    }
    const y = l.fn({ ...n, [c]: p, [f]: g });
    return { ...y, data: { x: y.x - t, y: y.y - e } };
  } };
};
function ot(s) {
  var n;
  return (s == null || (n = s.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Nt(s) {
  return ot(s).getComputedStyle(s);
}
function $c(s) {
  return s instanceof ot(s).Node;
}
function le(s) {
  return $c(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function pt(s) {
  return s instanceof HTMLElement || s instanceof ot(s).HTMLElement;
}
function Kl(s) {
  return typeof ShadowRoot < "u" && (s instanceof ot(s).ShadowRoot || s instanceof ShadowRoot);
}
function jn(s) {
  const { overflow: n, overflowX: t, overflowY: e, display: i } = Nt(s);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + t) && !["inline", "contents"].includes(i);
}
function rd(s) {
  return ["table", "td", "th"].includes(le(s));
}
function Ar(s) {
  const n = yl(), t = Nt(s);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !n && !!t.backdropFilter && t.backdropFilter !== "none" || !n && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((e) => (t.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some((e) => (t.contain || "").includes(e));
}
function yl() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function ir(s) {
  return ["html", "body", "#document"].includes(le(s));
}
const Lr = Math.min, Ke = Math.max, Ei = Math.round, oi = Math.floor, ae = (s) => ({ x: s, y: s });
function _c(s) {
  const n = Nt(s);
  let t = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const i = pt(s), o = i ? s.offsetWidth : t, r = i ? s.offsetHeight : e, l = Ei(t) !== o || Ei(e) !== r;
  return l && (t = o, e = r), { width: t, height: e, $: l };
}
function Pt(s) {
  return s instanceof Element || s instanceof ot(s).Element;
}
function bl(s) {
  return Pt(s) ? s : s.contextElement;
}
function Ge(s) {
  const n = bl(s);
  if (!pt(n))
    return ae(1);
  const t = n.getBoundingClientRect(), { width: e, height: i, $: o } = _c(n);
  let r = (o ? Ei(t.width) : t.width) / e, l = (o ? Ei(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
const ld = ae(0);
function Sc(s) {
  const n = ot(s);
  return yl() && n.visualViewport ? { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop } : ld;
}
function He(s, n, t, e) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const i = s.getBoundingClientRect(), o = bl(s);
  let r = ae(1);
  n && (e ? Pt(e) && (r = Ge(e)) : r = Ge(s));
  const l = function(f, p, g) {
    return p === void 0 && (p = !1), !(!g || p && g !== ot(f)) && p;
  }(o, t, e) ? Sc(o) : ae(0);
  let a = (i.left + l.x) / r.x, h = (i.top + l.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const f = ot(o), p = e && Pt(e) ? ot(e) : e;
    let g = f.frameElement;
    for (; g && e && p !== f; ) {
      const y = Ge(g), x = g.getBoundingClientRect(), w = getComputedStyle(g), $ = x.left + (g.clientLeft + parseFloat(w.paddingLeft)) * y.x, _ = x.top + (g.clientTop + parseFloat(w.paddingTop)) * y.y;
      a *= y.x, h *= y.y, u *= y.x, c *= y.y, a += $, h += _, g = ot(g).frameElement;
    }
  }
  return _i({ width: u, height: c, x: a, y: h });
}
function or(s) {
  return Pt(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function Ot(s) {
  var n;
  return (n = ($c(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : n.documentElement;
}
function kc(s) {
  return He(Ot(s)).left + or(s).scrollLeft;
}
function Mn(s) {
  if (le(s) === "html")
    return s;
  const n = s.assignedSlot || s.parentNode || Kl(s) && s.host || Ot(s);
  return Kl(n) ? n.host : n;
}
function Ec(s) {
  const n = Mn(s);
  return ir(n) ? s.ownerDocument ? s.ownerDocument.body : s.body : pt(n) && jn(n) ? n : Ec(n);
}
function Ti(s, n) {
  var t;
  n === void 0 && (n = []);
  const e = Ec(s), i = e === ((t = s.ownerDocument) == null ? void 0 : t.body), o = ot(e);
  return i ? n.concat(o, o.visualViewport || [], jn(e) ? e : []) : n.concat(e, Ti(e));
}
function Gl(s, n, t) {
  let e;
  if (n === "viewport")
    e = function(i, o) {
      const r = ot(i), l = Ot(i), a = r.visualViewport;
      let h = l.clientWidth, u = l.clientHeight, c = 0, f = 0;
      if (a) {
        h = a.width, u = a.height;
        const p = yl();
        (!p || p && o === "fixed") && (c = a.offsetLeft, f = a.offsetTop);
      }
      return { width: h, height: u, x: c, y: f };
    }(s, t);
  else if (n === "document")
    e = function(i) {
      const o = Ot(i), r = or(i), l = i.ownerDocument.body, a = Ke(o.scrollWidth, o.clientWidth, l.scrollWidth, l.clientWidth), h = Ke(o.scrollHeight, o.clientHeight, l.scrollHeight, l.clientHeight);
      let u = -r.scrollLeft + kc(i);
      const c = -r.scrollTop;
      return Nt(l).direction === "rtl" && (u += Ke(o.clientWidth, l.clientWidth) - a), { width: a, height: h, x: u, y: c };
    }(Ot(s));
  else if (Pt(n))
    e = function(i, o) {
      const r = He(i, !0, o === "fixed"), l = r.top + i.clientTop, a = r.left + i.clientLeft, h = pt(i) ? Ge(i) : ae(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: a * h.x, y: l * h.y };
    }(n, t);
  else {
    const i = Sc(s);
    e = { ...n, x: n.x - i.x, y: n.y - i.y };
  }
  return _i(e);
}
function Tc(s, n) {
  const t = Mn(s);
  return !(t === n || !Pt(t) || ir(t)) && (Nt(t).position === "fixed" || Tc(t, n));
}
function ad(s, n, t) {
  const e = pt(n), i = Ot(n), o = t === "fixed", r = He(s, !0, o, n);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = ae(0);
  if (e || !e && !o)
    if ((le(n) !== "body" || jn(i)) && (l = or(n)), pt(n)) {
      const h = He(n, !0, o, n);
      a.x = h.x + n.clientLeft, a.y = h.y + n.clientTop;
    } else
      i && (a.x = kc(i));
  return { x: r.left + l.scrollLeft - a.x, y: r.top + l.scrollTop - a.y, width: r.width, height: r.height };
}
function Xl(s, n) {
  return pt(s) && Nt(s).position !== "fixed" ? n ? n(s) : s.offsetParent : null;
}
function Jl(s, n) {
  const t = ot(s);
  if (!pt(s))
    return t;
  let e = Xl(s, n);
  for (; e && rd(e) && Nt(e).position === "static"; )
    e = Xl(e, n);
  return e && (le(e) === "html" || le(e) === "body" && Nt(e).position === "static" && !Ar(e)) ? t : e || function(i) {
    let o = Mn(i);
    for (; pt(o) && !ir(o); ) {
      if (Ar(o))
        return o;
      o = Mn(o);
    }
    return null;
  }(s) || t;
}
const cd = { convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: n, offsetParent: t, strategy: e } = s;
  const i = pt(t), o = Ot(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = ae(1);
  const a = ae(0);
  if ((i || !i && e !== "fixed") && ((le(t) !== "body" || jn(o)) && (r = or(t)), pt(t))) {
    const h = He(t);
    l = Ge(t), a.x = h.x + t.clientLeft, a.y = h.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, getDocumentElement: Ot, getClippingRect: function(s) {
  let { element: n, boundary: t, rootBoundary: e, strategy: i } = s;
  const o = [...t === "clippingAncestors" ? function(a, h) {
    const u = h.get(a);
    if (u)
      return u;
    let c = Ti(a).filter((y) => Pt(y) && le(y) !== "body"), f = null;
    const p = Nt(a).position === "fixed";
    let g = p ? Mn(a) : a;
    for (; Pt(g) && !ir(g); ) {
      const y = Nt(g), x = Ar(g);
      x || y.position !== "fixed" || (f = null), (p ? !x && !f : !x && y.position === "static" && f && ["absolute", "fixed"].includes(f.position) || jn(g) && !x && Tc(a, g)) ? c = c.filter((w) => w !== g) : f = y, g = Mn(g);
    }
    return h.set(a, c), c;
  }(n, this._c) : [].concat(t), e], r = o[0], l = o.reduce((a, h) => {
    const u = Gl(n, h, i);
    return a.top = Ke(u.top, a.top), a.right = Lr(u.right, a.right), a.bottom = Lr(u.bottom, a.bottom), a.left = Ke(u.left, a.left), a;
  }, Gl(n, r, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, getOffsetParent: Jl, getElementRects: async function(s) {
  let { reference: n, floating: t, strategy: e } = s;
  const i = this.getOffsetParent || Jl, o = this.getDimensions;
  return { reference: ad(n, await i(t), e), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(s) {
  return Array.from(s.getClientRects());
}, getDimensions: function(s) {
  return _c(s);
}, getScale: Ge, isElement: Pt, isRTL: function(s) {
  return getComputedStyle(s).direction === "rtl";
} };
function wl(s, n, t, e) {
  e === void 0 && (e = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: a = !1 } = e, h = bl(s), u = i || o ? [...h ? Ti(h) : [], ...Ti(n)] : [];
  u.forEach((x) => {
    i && x.addEventListener("scroll", t, { passive: !0 }), o && x.addEventListener("resize", t);
  });
  const c = h && l ? function(x, w) {
    let $, _ = null;
    const k = Ot(x);
    function S() {
      clearTimeout($), _ && _.disconnect(), _ = null;
    }
    return function N(L, I) {
      L === void 0 && (L = !1), I === void 0 && (I = 1), S();
      const { left: D, top: O, width: P, height: M } = x.getBoundingClientRect();
      if (L || w(), !P || !M)
        return;
      const E = { rootMargin: -oi(O) + "px " + -oi(k.clientWidth - (D + P)) + "px " + -oi(k.clientHeight - (O + M)) + "px " + -oi(D) + "px", threshold: Ke(0, Lr(1, I)) || 1 };
      let H = !0;
      function W(B) {
        const G = B[0].intersectionRatio;
        if (G !== I) {
          if (!H)
            return N();
          G ? N(!1, G) : $ = setTimeout(() => {
            N(!1, 1e-7);
          }, 100);
        }
        H = !1;
      }
      try {
        _ = new IntersectionObserver(W, { ...E, root: k.ownerDocument });
      } catch {
        _ = new IntersectionObserver(W, E);
      }
      _.observe(x);
    }(!0), S;
  }(h, t) : null;
  let f, p = -1, g = null;
  r && (g = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === h && g && (g.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      g && g.observe(n);
    })), t();
  }), h && !a && g.observe(h), g.observe(n));
  let y = a ? He(s) : null;
  return a && function x() {
    const w = He(s);
    !y || w.x === y.x && w.y === y.y && w.width === y.width && w.height === y.height || t(), y = w, f = requestAnimationFrame(x);
  }(), t(), () => {
    u.forEach((x) => {
      i && x.removeEventListener("scroll", t), o && x.removeEventListener("resize", t);
    }), c && c(), g && g.disconnect(), g = null, a && cancelAnimationFrame(f);
  };
}
const rr = (s, n, t) => {
  const e = /* @__PURE__ */ new Map(), i = { platform: cd, ...t }, o = { ...i.platform, _c: e };
  return Qu(s, n, { ...i, platform: o });
};
var en, Qn;
let hd = (Qn = class extends Oe {
  constructor() {
    super(...arguments);
    v(this, en, 0);
  }
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  layout() {
    const t = this.ref.current, e = t == null ? void 0 : t.parentElement;
    !t || !e || rr(e, t, {
      placement: "right-start",
      middleware: [nr(), ki(), sr(1)]
    }).then(({ x: i, y: o }) => {
      b(t).css({
        left: i,
        top: o
      });
    });
  }
  getNestedMenuProps(t) {
    const e = super.getNestedMenuProps(t);
    return {
      ...e,
      className: R("absolute", e.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), C(this, en, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ m("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), d(this, en) && clearTimeout(d(this, en));
  }
}, en = new WeakMap(), Qn.defaultProps = {
  ...Oe.defaultProps,
  popup: !0
}, Qn);
const gr = "show", ud = '[data-toggle="contextmenu"]';
var Rt, nn, ts, es, Wi, Nc, zi, Mc;
const Ue = class Ue extends ft {
  constructor() {
    super(...arguments);
    v(this, Wi);
    v(this, zi);
    v(this, Rt, void 0);
    v(this, nn, void 0);
    v(this, ts, void 0);
    v(this, es, void 0);
  }
  get isShown() {
    return d(this, Rt) && b(d(this, Rt)).hasClass(gr);
  }
  get menu() {
    return d(this, Rt) || this.ensureMenu();
  }
  get trigger() {
    return d(this, ts) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: t } = this;
    !t.is("body") && !t.attr("data-toggle") && t.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.isDynamic && this.destroy();
    });
  }
  show(t) {
    return this.isShown || (C(this, ts, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (b(this.menu).addClass(gr), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var e;
    return !this.isShown || ((e = d(this, es)) == null || e.call(this), this.emit("hide").defaultPrevented) ? !1 : (b(d(this, Rt)).removeClass(gr), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = d(this, Rt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, e = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = b(`<div class="${e}" />`).appendTo("body");
    else if (t.length) {
      const o = t.attr("href") || t.dataset("target") || "";
      if (o[0] === "#" && (i = b(document).find(o)), !(i != null && i.length)) {
        const r = t.next();
        r.hasClass(e) ? i = r : i = t.parent().find(`.${e}`);
      }
      i && i.addClass("popup");
    }
    if (!(i != null && i.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return i.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), C(this, Rt, i[0]), i[0];
  }
  getPopperOptions() {
    var o;
    const { placement: t, strategy: e } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: e
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(nr())), i;
  }
  createPopper() {
    const t = this.getPopperOptions(), e = this.getPopperElement(), i = this.menu;
    C(this, es, wl(e, i, () => {
      rr(e, i, t).then(({ x: o, y: r, middlewareData: l, placement: a }) => {
        if (b(i).css({ left: o, top: r }), l.arrow && this.arrowEl) {
          const h = a.split("-")[0], u = A(this, Wi, Nc).call(this, h), { x: c, y: f } = l.arrow;
          b(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: f != null ? `${f}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...A(this, zi, Mc).call(this, h)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: t, items: e } = this.options;
    let i = e || (t == null ? void 0 : t.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...t,
        items: i
      };
  }
  renderMenu() {
    const t = this.getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Fn(q(hd, t), this.menu), !0);
  }
  getPopperElement() {
    return d(this, nn) || C(this, nn, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: e, clientY: i } = t;
          return {
            width: 0,
            height: 0,
            top: i,
            right: e,
            bottom: i,
            left: e
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), d(this, nn);
  }
  static clear(t) {
    var a, h;
    t instanceof Event && (t = { event: t });
    const { event: e, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (e && o && ((h = (a = e.target).closest) != null && h.call(a, o)) || e && e.button === 2)
      return;
    const r = this.getAll(), l = new Set(i || []);
    for (const u of r)
      l.has(u.element) || u.hide();
  }
  static show(t) {
    const { event: e, ...i } = t, o = this.ensure(document.body);
    return o.setOptions(i), o.show(e), e instanceof Event && e.stopPropagation(), o;
  }
  static hide(t) {
    const e = this.query(t);
    return e == null || e.hide(), e;
  }
};
Rt = new WeakMap(), nn = new WeakMap(), ts = new WeakMap(), es = new WeakMap(), Wi = new WeakSet(), Nc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, zi = new WeakSet(), Mc = function(t) {
  const e = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${t[0].toUpperCase()}${t.substring(1)}Style`]: "none",
    [`border${e[t]}Style`]: "none"
  };
}, Ue.MENU_CLASS = "contextmenu", Ue.NAME = "ContextMenu", Ue.MULTI_INSTANCE = !0, Ue.DEFAULT = {
  placement: "bottom-start",
  strategy: "absolute",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
let at = Ue;
b(document).on(`contextmenu${at.NAMESPACE}`, (s) => {
  const n = b(s.target);
  if (n.closest(`.${at.MENU_CLASS}`).length)
    return;
  const t = n.closest(ud).not(":disabled,.disabled");
  if (t.length) {
    const e = `${at.KEY}:options`, i = t.data(e), o = at.ensure(t, i);
    i || t.data(e, o.options), o.show(s), s.preventDefault();
  }
}).on(`click${at.NAMESPACE}`, at.clear.bind(at));
const Zl = '[data-toggle="dropdown"]';
var ye, be, sn, Bi, Rc;
const qe = class qe extends at {
  constructor() {
    super(...arguments);
    v(this, Bi);
    v(this, ye, void 0);
    v(this, be, void 0);
    v(this, sn, void 0);
    C(this, ye, !1), C(this, be, 0), this.hideLater = () => {
      d(this, sn).call(this), C(this, be, window.setTimeout(this.hide.bind(this), 100));
    }, C(this, sn, () => {
      clearTimeout(d(this, be)), C(this, be, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, e) {
    (e == null ? void 0 : e.clearOthers) !== !1 && qe.clear({ event: e == null ? void 0 : e.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!d(this, ye) && this.isHover && A(this, Bi, Rc).call(this), this.$element.addClass(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, e) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...e });
  }
  destroy() {
    d(this, ye) && b(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var i, o;
    const t = super.getPopperOptions(), e = this.getArrowSize();
    return e && this.arrowEl && ((i = t.middleware) == null || i.push(sr(e)), (o = t.middleware) == null || o.push(Rr({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const e = this.getArrowSize(), i = b('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${e}px`,
        height: `${e}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = i[0];
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: e } = t;
      t.afterRender = (...i) => {
        this.arrowEl && b(this.menu).find(".menu").each((o, r) => {
          b(r).find(".arrow-el").length === 0 && b(r).parent().hasClass("dropdown-menu") && b(r).append(this.arrowEl);
        }), e == null || e(...i);
      };
    }
    return t;
  }
};
ye = new WeakMap(), be = new WeakMap(), sn = new WeakMap(), Bi = new WeakSet(), Rc = function() {
  b(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, d(this, sn)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), C(this, ye, !0);
}, qe.MENU_CLASS = "dropdown-menu", qe.NAME = "Dropdown", qe.DEFAULT = {
  ...at.DEFAULT,
  trigger: "click"
};
let ie = qe;
const ri = `${ie.KEY}:options`;
b(document).on("click", function(s) {
  const n = b(s.target).closest(Zl).not(":disabled,.disabled");
  if (!n.length) {
    ie.clear({ event: s });
    return;
  }
  const t = n.data(ri), e = ie.ensure(n, t);
  t || n.data(ri, e.options), e.options.trigger === "click" && e.toggle();
}).on("mouseover", function(s) {
  const n = b(s.target).closest(Zl);
  if (!n.length)
    return;
  const t = n.data(ri), e = ie.ensure(n, t);
  t || n.data(ri, e.options), e.isHover && e.show();
});
let li = 0;
window.addEventListener("scroll", (s) => {
  li && clearTimeout(li), li = window.setTimeout(() => {
    ie.clear({ event: s }), li = 0;
  }, 50);
}, !0);
var ns, on;
class dd extends z {
  constructor(t) {
    var e;
    super(t);
    v(this, ns, void 0);
    v(this, on, U());
    this.state = { placement: ((e = t.dropdown) == null ? void 0 : e.placement) || "", show: !1 };
  }
  get ref() {
    return d(this, on);
  }
  get triggerElement() {
    return d(this, on).current;
  }
  componentDidMount() {
    const { modifiers: t = [], ...e } = this.props.dropdown || {};
    t.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var r;
        const o = ((r = i.placement) == null ? void 0 : r.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), C(this, ns, ie.ensure(this.triggerElement, {
      ...e,
      modifiers: t,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var t;
    (t = d(this, ns)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: e, dropdown: i, ...o } = this.props;
    return {
      className: R("dropdown", t),
      children: typeof e == "function" ? e(this.state) : e,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: d(this, on)
    };
  }
  render() {
    const { children: t, ...e } = this.beforeRender();
    return /* @__PURE__ */ m("div", { ...e, children: t });
  }
}
ns = new WeakMap(), on = new WeakMap();
class fd extends dd {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: n, show: t } = this.state, e = this.beforeRender();
    let { caret: i = !0 } = e;
    if (i !== !1 && (t || i === !0)) {
      const r = (t ? n : (o = this.props.dropdown) == null ? void 0 : o.placement) || "";
      i = (r.includes("top") ? "up" : r.includes("bottom") ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return e.caret = i, /* @__PURE__ */ m(tt, { ...e });
  }
}
function Ac({
  key: s,
  type: n,
  btnType: t,
  ...e
}) {
  return /* @__PURE__ */ m(fd, { type: t, ...e });
}
let Lc = class extends z {
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  handleItemClick(n, t, e, i) {
    e && e.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: n, index: t, event: i });
  }
  beforeRender() {
    var e;
    const n = { ...this.props }, t = (e = n.beforeRender) == null ? void 0 : e.call(this, n);
    return t && Object.assign(n, t), typeof n.items == "function" && (n.items = n.items.call(this)), n;
  }
  onRenderItem(n, t) {
    const { key: e = t, ...i } = n;
    return /* @__PURE__ */ m(tt, { ...i }, e);
  }
  renderItem(n, t, e) {
    const { itemRender: i, btnProps: o, onClickItem: r } = n, l = { key: e, ...t };
    if (o && Object.assign(l, o), r && (l.onClick = this.handleItemClick.bind(this, l, e, t.onClick)), i) {
      const a = i.call(this, l, q);
      if (X(a))
        return a;
      typeof a == "object" && Object.assign(l, a);
    }
    return this.onRenderItem(l, e);
  }
  render() {
    const n = this.beforeRender(), {
      className: t,
      items: e,
      size: i,
      type: o,
      btnProps: r,
      children: l,
      itemRender: a,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: f,
      ...p
    } = n;
    return /* @__PURE__ */ m(
      "div",
      {
        className: R("btn-group", i ? `size-${i}` : "", t),
        ...p,
        children: [
          e && e.map(this.renderItem.bind(this, n)),
          l
        ]
      }
    );
  }
};
function pd({
  key: s,
  type: n,
  btnType: t,
  ...e
}) {
  return /* @__PURE__ */ m(Lc, { type: t, ...e });
}
var se;
let ce = (se = class extends er {
  beforeRender() {
    const { gap: n, btnProps: t, wrap: e, ...i } = super.beforeRender();
    return i.className = R(i.className, e ? "flex-wrap" : "", typeof n == "number" ? `gap-${n}` : ""), typeof n == "string" && (i.style ? i.style.gap = n : i.style = { gap: n }), i;
  }
  isBtnItem(n) {
    return n === "item" || n === "dropdown";
  }
  renderTypedItem(n, t, e) {
    const { type: i } = e, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, l = {
      ...t,
      ...r,
      ...e,
      className: R(`${this.name}-${i}`, t.className, r.className, e.className),
      style: Object.assign({}, t.style, r.style, e.style)
    };
    return i === "btn-group" && (l.btnProps = o), /* @__PURE__ */ m(n, { ...l });
  }
}, se.ItemComponents = {
  item: Zu,
  dropdown: Ac,
  "btn-group": pd
}, se.ROOT_TAG = "nav", se.NAME = "toolbar", se.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, se);
function md({
  className: s,
  style: n,
  actions: t,
  heading: e,
  content: i,
  contentClass: o,
  children: r,
  close: l,
  onClose: a,
  icon: h,
  ...u
}) {
  let c;
  l === !0 ? c = /* @__PURE__ */ m(tt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: a, children: /* @__PURE__ */ m("span", { class: "close" }) }) : X(l) ? c = l : typeof l == "object" && (c = /* @__PURE__ */ m(tt, { ...l, onClick: a }));
  const f = X(t) ? t : t ? /* @__PURE__ */ m(ce, { ...t }) : null;
  return /* @__PURE__ */ m("div", { className: R("alert", s), style: n, ...u, children: [
    /* @__PURE__ */ m(et, { icon: h, className: "alert-icon" }),
    X(i) ? i : /* @__PURE__ */ m("div", { className: R("alert-content", o), children: [
      X(e) ? e : e && /* @__PURE__ */ m("div", { className: "alert-heading", children: e }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      e ? f : null
    ] }),
    e ? null : f,
    c,
    r
  ] });
}
function gd(s) {
  if (s === "center")
    return "fade-from-center";
  if (s) {
    if (s.includes("top"))
      return "fade-from-top";
    if (s.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
function yd({
  margin: s,
  type: n,
  placement: t,
  animation: e,
  show: i,
  className: o,
  time: r,
  ...l
}) {
  return /* @__PURE__ */ m(
    md,
    {
      className: R("messager", o, n, e === !0 ? gd(t) : e, i ? "in" : ""),
      ...l
    }
  );
}
var Yt, je;
const Fi = class Fi extends j {
  constructor() {
    super(...arguments);
    v(this, Yt);
    this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
      t && this.show();
      const { margin: e } = this.options;
      e && this.$element.css("margin", `${e}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      b(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
    });
  }
  setOptions(t) {
    return t = super.setOptions(t), {
      ...t,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this.render(), this.emit("show"), A(this, Yt, je).call(this, () => {
      this._show = !0, this.render(), A(this, Yt, je).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && A(this, Yt, je).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && A(this, Yt, je).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), A(this, Yt, je).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
Yt = new WeakSet(), je = function(t, e = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, e);
}, Fi.NAME = "MessagerItem", Fi.Component = yd;
let Ir = Fi;
var we, bt, ji, Ic, Vi, Dc;
const zn = class zn extends ft {
  constructor() {
    super(...arguments);
    v(this, ji);
    v(this, Vi);
    v(this, we, void 0);
    v(this, bt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = d(this, bt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), A(this, ji, Ic).call(this).show();
  }
  hide() {
    var t;
    (t = d(this, bt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...i } = t, o = zn.ensure(e || "body");
    return o.setOptions(i), o.hide(), o.show(), o;
  }
};
we = new WeakMap(), bt = new WeakMap(), ji = new WeakSet(), Ic = function() {
  if (d(this, bt))
    d(this, bt).setOptions(this.options);
  else {
    const t = A(this, Vi, Dc).call(this), e = new Ir(t, this.options);
    e.on("hidden", () => {
      e.destroy(), t == null || t.remove(), C(this, we, void 0), C(this, bt, void 0);
    }), C(this, bt, e);
  }
  return d(this, bt);
}, Vi = new WeakSet(), Dc = function() {
  if (d(this, we))
    return d(this, we);
  const { placement: t = "top" } = this.options;
  let e = this.$element.find(`.messagers-${t}`);
  e.length || (e = b(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let i = e.find(`#messager-${this.gid}`);
  return i.length || (i = b(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), C(this, we, i[0])), i[0];
}, zn.NAME = "messager", zn.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Ql = zn;
var ss;
let bd = (ss = class extends z {
  render(n) {
    const { percent: t = 50, size: e = 24, circleBg: i, circleColor: o, text: r, className: l, textStyle: a, textX: h, textY: u } = n, c = e / 2;
    let { circleWidth: f = 0.2 } = n;
    f < 1 && (f = e * f);
    const p = (e - f) / 2;
    return /* @__PURE__ */ m("svg", { className: l, width: e, height: e, children: [
      /* @__PURE__ */ m("circle", { cx: c, cy: c, r: p, "stroke-width": f, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ m("circle", { cx: c, cy: c, r: p, "stroke-width": f, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * p * 2, "stroke-dashoffset": Math.PI * p * 2 * (100 - t) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ m("text", { x: h ?? c, y: u ?? c + f / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: a || { fontSize: `${p}px` }, children: r === !0 ? Math.round(t) : r }) : null
    ] });
  }
}, ss.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, ss);
const Ui = class Ui extends j {
};
Ui.NAME = "ProgressCircle", Ui.Component = bd;
let ta = Ui;
var At;
class wd {
  constructor(n = "") {
    v(this, At, void 0);
    typeof n == "object" ? C(this, At, n) : C(this, At, document.appendChild(document.createComment(n)));
  }
  on(n, t, e) {
    d(this, At).addEventListener(n, t, e);
  }
  once(n, t, e) {
    d(this, At).addEventListener(n, t, { once: !0, ...e });
  }
  off(n, t, e) {
    d(this, At).removeEventListener(n, t, e);
  }
  emit(n) {
    return d(this, At).dispatchEvent(n), n;
  }
}
At = new WeakMap();
const ea = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
class Pc extends wd {
  on(n, t, e) {
    super.on(n, t, e);
  }
  off(n, t, e) {
    super.off(n, t, e);
  }
  once(n, t, e) {
    super.once(n, t, e);
  }
  emit(n, t) {
    return typeof n == "string" && (ea.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(Pc.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (ea.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
let Oc = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
const yr = "```ZUI_STR\n";
var is, ve, rn, wt, ln, an, di;
const _l = class _l {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(n, t = "local") {
    v(this, an);
    v(this, is, void 0);
    v(this, ve, void 0);
    v(this, rn, void 0);
    v(this, wt, void 0);
    v(this, ln, void 0);
    C(this, is, t), C(this, rn, n ?? Oc()), C(this, ve, `ZUI_STORE:${d(this, rn)}`), C(this, wt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return d(this, is);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (d(this, ln) || C(this, ln, new _l(d(this, rn), "session")), d(this, ln));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(n, t) {
    const e = d(this, wt).getItem(A(this, an, di).call(this, n));
    if (typeof e == "string") {
      if (e.startsWith(yr))
        return e.substring(yr.length);
      try {
        return JSON.parse(e);
      } catch {
      }
    }
    return e ?? t;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(n, t) {
    if (t == null)
      return this.remove(n);
    d(this, wt).setItem(A(this, an, di).call(this, n), typeof t == "string" ? `${yr}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(n) {
    d(this, wt).removeItem(A(this, an, di).call(this, n));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(n) {
    for (let t = 0; t < d(this, wt).length; t++) {
      const e = d(this, wt).key(t);
      if (e != null && e.startsWith(d(this, ve))) {
        const i = d(this, wt).getItem(e);
        typeof i == "string" && n(e.substring(d(this, ve).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const n = {};
    return this.each((t, e) => {
      n[t] = e;
    }), n;
  }
};
is = new WeakMap(), ve = new WeakMap(), rn = new WeakMap(), wt = new WeakMap(), ln = new WeakMap(), an = new WeakSet(), di = function(n) {
  return `${d(this, ve)}:${n}`;
};
let Ni = _l;
const On = new Ni("DEFAULT");
function vd(s, n = "local") {
  return new Ni(s, n);
}
Object.assign(On, { create: vd });
function xd(s) {
  if (s.indexOf("#") === 0 && (s = s.slice(1)), s.length === 3 && (s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2]), s.length !== 6)
    throw new Error(`Invalid HEX color "${s}".`);
  return [
    parseInt(s.slice(0, 2), 16),
    // r
    parseInt(s.slice(2, 4), 16),
    // g
    parseInt(s.slice(4, 6), 16)
    // b
  ];
}
function Cd(s) {
  const [n, t, e] = typeof s == "string" ? xd(s) : s;
  return n * 0.299 + t * 0.587 + e * 0.114 > 186;
}
function na(s, n) {
  return Cd(s) ? (n == null ? void 0 : n.dark) ?? "#333333" : (n == null ? void 0 : n.light) ?? "#ffffff";
}
function sa(s, n = 255) {
  return Math.min(Math.max(s, 0), n);
}
function $d(s, n, t) {
  s = s % 360 / 360, n = sa(n), t = sa(t);
  const e = t <= 0.5 ? t * (n + 1) : t + n - t * n, i = t * 2 - e, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (e - i) * r * 6 : r * 2 < 1 ? e : r * 3 < 2 ? i + (e - i) * (2 / 3 - r) * 6 : i);
  return [
    o(s + 1 / 3) * 255,
    o(s) * 255,
    o(s - 1 / 3) * 255
  ];
}
function _d(s) {
  let n = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let t = 0; t < s.length; ++t)
      n += (t + 1) * s.charCodeAt(t);
  return n;
}
function Sd(s, n) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= n ? s : s.substring(s.length - n) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= n ? s : s.substring(0, n);
}
let Hc = class extends z {
  render() {
    const {
      className: n,
      style: t,
      size: e = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: l,
      text: a,
      code: h,
      maxTextLength: u = 2,
      src: c,
      hueDistance: f = 43,
      saturation: p = 0.4,
      lightness: g = 0.6,
      children: y,
      ...x
    } = this.props, w = ["avatar", n], $ = { ...t, background: r, color: l };
    let _ = 32;
    e && (typeof e == "number" ? ($.width = `${e}px`, $.height = `${e}px`, $.fontSize = `${Math.max(12, Math.round(e / 2))}px`, _ = e) : (w.push(`size-${e}`), _ = { xs: 20, sm: 24, lg: 48, xl: 80 }[e])), i ? w.push("circle") : o && (typeof o == "number" ? $.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let k;
    if (c)
      w.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: c, alt: a });
    else if (a != null && a.length) {
      const S = Sd(a, u);
      if (w.push("has-text", `has-text-${S.length}`), r)
        !l && r && ($.color = na(r));
      else {
        const L = h ?? a, I = (typeof L == "number" ? L : _d(L)) * f % 360;
        if ($.background = `hsl(${I},${p * 100}%,${g * 100}%)`, !l) {
          const D = $d(I, p, g);
          $.color = na(D);
        }
      }
      let N;
      _ && _ < 14 * S.length && (N = { transform: `scale(${_ / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": _, className: "avatar-text", style: N, children: S });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: R(w),
        style: $,
        ...x,
        children: [
          k,
          y
        ]
      }
    );
  }
};
const qi = class qi extends j {
};
qi.NAME = "Avatar", qi.Component = Hc;
let ia = qi;
const Yi = class Yi extends j {
};
Yi.NAME = "BtnGroup", Yi.Component = Lc;
let oa = Yi;
const Dr = Symbol("EVENT_PICK");
var cn;
class vl extends z {
  constructor(t) {
    super(t);
    v(this, cn, void 0);
    this._handleClick = this._handleClick.bind(this), C(this, cn, !!b(`#${t.id}`).length);
  }
  get hasInput() {
    return d(this, cn);
  }
  _handleClick(t) {
    const { togglePop: e, clickType: i, onClick: o } = this.props;
    let r = i === "open" ? !0 : void 0;
    const l = b(t.target), a = o == null ? void 0 : o(t);
    if (!t.defaultPrevented) {
      if (typeof a == "boolean")
        r = a;
      else {
        if (l.closest('[data-dismiss="pick"]').length) {
          e(!1);
          return;
        }
        if (l.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => e(r));
    }
  }
  _getClass(t) {
    const { state: e, className: i } = t, { open: o, disabled: r } = e;
    return R(
      "pick",
      i,
      o && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: e, style: i, attrs: o } = t;
    return {
      id: `pick-${e}`,
      className: this._getClass(t),
      style: i,
      tabIndex: -1,
      onClick: this._handleClick,
      ...o
    };
  }
  _renderTrigger(t) {
    const { children: e, state: i } = t;
    return e ?? i.value;
  }
  _renderValue(t) {
    const { name: e, state: { value: i = "" }, id: o } = t;
    if (e)
      if (d(this, cn))
        b(`#${o}`).val(i);
      else
        return /* @__PURE__ */ m("input", { id: o, type: "hidden", className: "pick-value", name: e, value: i });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    b(`#${t}`).on(`change.pick.zui.${t}`, (i, o) => {
      if (o === Dr)
        return;
      const r = i.target.value;
      r !== e.value && this.props.changeState({ value: r });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    b(`#${t}`).off(`change.pick.zui.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: i, name: o } = this.props;
    o && t.state.value !== i.value && b(`#${e}`).trigger("change", Dr);
  }
  render(t) {
    return q(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
cn = new WeakMap();
var xe, vt, Kt;
class Wc extends z {
  constructor(t) {
    super(t);
    v(this, xe, void 0);
    v(this, vt, void 0);
    v(this, Kt, void 0);
    C(this, xe, U()), this._handleDocClick = (e) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, l = b(e.target);
      i !== "closing" && !l.closest(`#pick-${o},#pick-pop-${o}`).length && l.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return b(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = d(this, xe)) == null ? void 0 : t.current;
  }
  get container() {
    return d(this, Kt);
  }
  _handleClick(t) {
    const { togglePop: e } = this.props, i = b(t.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return t.stopPropagation(), e(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: i } = t, { open: o } = i;
    return R(
      "pick-pop",
      e,
      o === !0 && "in"
    );
  }
  _getProps(t) {
    const {
      id: e,
      style: i,
      maxHeight: o,
      maxWidth: r,
      minHeight: l,
      minWidth: a
    } = t, h = b.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: l,
      minWidth: a
    }, i);
    return {
      id: `pick-pop-${e}`,
      className: this._getClass(t),
      style: h,
      ref: d(this, xe),
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!d(this, Kt)) {
      const e = b(t.container || "body");
      let i = e.find(".pick-container");
      i.length || (i = b("<div>").addClass("pick-container").appendTo(e)), C(this, Kt, i[0]);
    }
    return d(this, Kt);
  }
  _render(t) {
    return /* @__PURE__ */ m("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  layout() {
    const { element: t, trigger: e, props: i } = this, { state: o } = i;
    if (!t || !e || !o.open) {
      d(this, vt) && (d(this, vt).call(this), C(this, vt, void 0));
      return;
    }
    d(this, vt) || C(this, vt, wl(e, t, () => {
      const { placement: r, width: l } = i;
      rr(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? nr() : null, ki(), sr(1)].filter(Boolean)
      }).then(({ x: a, y: h }) => {
        var u, c;
        b(t).css({
          left: a,
          top: h,
          width: l === "100%" ? b(e).outerWidth() : void 0
        }), (c = (u = this.props).onLayout) == null || c.call(u, t);
      }), l === "100%" && b(t).css({ width: b(t).width() });
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), b(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, i;
    b(document).off("click", this._handleDocClick);
    const t = d(this, vt);
    t && (t(), C(this, vt, void 0)), C(this, Kt, void 0), C(this, xe, void 0), b(`pick-pop-${this.props.id}`).remove(), (i = (e = this.props).beforeDestroy) == null || i.call(e);
  }
  render(t) {
    return qu(this._render(t), this._getContainer(t));
  }
}
xe = new WeakMap(), vt = new WeakMap(), Kt = new WeakMap();
var os, it, Ce, Ie;
let Bt = (Ie = class extends z {
  constructor(t) {
    super(t);
    v(this, os, void 0);
    v(this, it, void 0);
    v(this, Ce, void 0);
    C(this, it, 0), C(this, Ce, U()), this.changeState = (e, i) => new Promise((o) => {
      this.setState(e, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (e, i) => {
      this.props.disabled && (e = !1);
      const { state: o } = this;
      if (typeof e == "boolean" && e === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      d(this, it) && (clearTimeout(d(this, it)), C(this, it, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...i
      }));
      const { open: l } = r;
      return l === "closing" ? (await wi(200, (a) => {
        C(this, it, a);
      }), C(this, it, 0), r = await this.changeState({ open: !1 })) : l === "opening" && (await wi(50, (a) => {
        C(this, it, a);
      }), C(this, it, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, C(this, os, t.id ?? `_pick${b.guid++}`);
  }
  get id() {
    return d(this, os);
  }
  get pop() {
    return d(this, Ce).current;
  }
  open(t) {
    return this.toggle(!0, t);
  }
  close(t) {
    return this.toggle(!1, t);
  }
  _getTriggerProps(t, e) {
    return {
      id: this.id,
      state: e,
      className: t.className,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
      clickType: t.clickType,
      onClick: t.onClick,
      changeState: this.changeState,
      togglePop: this.toggle
    };
  }
  _getPopProps(t, e) {
    return {
      id: this.id,
      state: e,
      className: t.popClass,
      style: t.popStyle,
      changeState: this.changeState,
      togglePop: this.toggle,
      placement: t.popPlacement,
      container: t.popContainer,
      width: t.popWidth,
      height: t.popHeight,
      minHeight: t.popMinHeight,
      maxHeight: t.popMaxHeight,
      maxWidth: t.popMaxWidth,
      minWidth: t.popMinWidth
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderTrigger(t, e) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderPop(t, e) {
    return null;
  }
  _afterRender(t = !1) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: t });
  }
  _getPop(t) {
    return t.Pop || this.constructor.Pop;
  }
  _getTrigger(t) {
    return t.Trigger || this.constructor.Trigger;
  }
  _handleChange(t, e) {
    const { onChange: i } = this.props;
    i && i(t, e);
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: i } = this.state, { open: o } = e;
    if (i === o)
      return;
    const { onPopShow: r, onPopHide: l } = this.props;
    o && r ? r() : !o && l && l();
  }
  componentDidUpdate(t, e) {
    const { open: i, value: o } = this.state, { open: r, value: l } = e;
    if (!!i != !!r) {
      const { onPopShown: a, onPopHidden: h } = this.props;
      i && a ? a() : !i && h && h();
    }
    o !== l && this._handleChange(o, l), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), d(this, it) && clearTimeout(d(this, it));
    const t = d(this, Ce).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: i } = e, o = this._getTrigger(t);
    let r;
    if (i) {
      const l = this._getPop(t);
      r = /* @__PURE__ */ m(l, { ref: d(this, Ce), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ m(In, { children: [
      /* @__PURE__ */ m(o, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
}, os = new WeakMap(), it = new WeakMap(), Ce = new WeakMap(), Ie.Trigger = vl, Ie.Pop = Wc, Ie.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, Ie);
var rs;
let kd = (rs = class extends Bt {
  constructor(n) {
    super(n), this.state.value === void 0 && n.required && (this.state.value = this.getColors()[0]);
  }
  getColors() {
    const { colors: n } = this.props;
    return typeof n == "string" ? n.split(",") : n || [];
  }
  componentDidMount() {
    this.syncColor();
  }
  syncColor() {
    const { syncBackground: n, syncBorder: t, syncColor: e, syncValue: i } = this.props, o = this.state.value || "";
    if (n && b(n).css("backgroundColor", o), t && b(t).css("borderColor", o), e && b(e).css("color", o), i) {
      const r = b(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(n, t) {
    this.props.disabled || (super._handleChange(n, t), this.syncColor());
  }
  _renderTrigger(n, t) {
    const { icon: e } = n, { value: i } = t;
    return [
      e ? /* @__PURE__ */ m(et, { icon: e }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(n, t) {
    const e = super._getTriggerProps(n, t);
    return e.style = b.extend({
      color: t.value
    }, e.style), e.className = R("color-picker", e.className, { disabled: n.disabled }), e;
  }
  _renderPop(n, t) {
    const { closeBtn: e, heading: i } = n, o = this.getColors(), { value: r } = t;
    let l;
    return i && (l = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      i,
      e ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      l,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        o.map((a) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: a }, "data-pick-value": a, children: r === a ? /* @__PURE__ */ m(et, { icon: "check" }) : null }, a)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(et, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
}, rs.defaultProps = {
  ...Bt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, rs);
const Ki = class Ki extends j {
};
Ki.NAME = "ColorPicker", Ki.Component = kd;
let ra = Ki;
const Vn = 24 * 60 * 60 * 1e3, K = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), Ed = (s, n, t = "day") => {
  if (typeof n == "string") {
    const e = Number.parseInt(n, 10);
    t = n.replace(e.toString(), ""), n = e;
  }
  return s = new Date(K(s).getTime()), t === "month" ? s.setMonth(s.getMonth() + n) : t === "year" ? s.setFullYear(s.getFullYear() + n) : t === "week" ? s.setDate(s.getDate() + n * 7) : t === "hour" ? s.setHours(s.getHours() + n) : t === "minute" ? s.setMinutes(s.getMinutes() + n) : t === "second" ? s.setSeconds(s.getSeconds() + n) : s.setDate(s.getDate() + n), s;
}, ei = (s, n = /* @__PURE__ */ new Date()) => K(s).toDateString() === K(n).toDateString(), Pr = (s, n = /* @__PURE__ */ new Date()) => K(s).getFullYear() === K(n).getFullYear(), zc = (s, n = /* @__PURE__ */ new Date()) => (s = K(s), n = K(n), s.getFullYear() === n.getFullYear() && s.getMonth() === n.getMonth()), rp = (s, n = /* @__PURE__ */ new Date()) => {
  s = K(s), n = K(n);
  const t = 1e3 * 60 * 60 * 24, e = Math.floor(s.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((e + 4) / 7) === Math.floor((i + 4) / 7);
}, lp = (s, n) => ei(K(n), s), ap = (s, n) => ei(K(n).getTime() - Vn, s), cp = (s, n) => ei(K(n).getTime() + Vn, s), mt = (s, n = "yyyy-MM-dd hh:mm", t = "") => {
  if (s = K(s), Number.isNaN(s.getDay()))
    return t;
  const e = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n.includes("[yyyy-]") && (n = n.replace("[yyyy-]", Pr(s) ? "" : "yyyy-")), n = n.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((i) => {
    if (new RegExp(`(${i})`).test(n)) {
      const o = `${e[i]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), n;
}, hp = (s, n, t) => {
  const e = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = mt(s, Pr(s) ? e.month : e.full);
  if (ei(s, n))
    return i;
  const o = mt(n, Pr(s, n) ? zc(s, n) ? e.day : e.month : e.full);
  return e.str.replace("{0}", i).replace("{1}", o);
};
var ls, as;
class Td extends z {
  constructor() {
    super(...arguments);
    v(this, ls, U());
    v(this, as, (t, e) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(e.item.key || ""));
    });
  }
  componentDidMount() {
    b(d(this, ls).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: e = 5, hour: i, minute: o } = t, r = [], l = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += e)
      l.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const a = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ m("div", { className: "time-picker-menu row", ref: d(this, ls), children: [
      /* @__PURE__ */ m(
        Oe,
        {
          className: a,
          items: r,
          onClickItem: d(this, as).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ m(
        Oe,
        {
          className: a,
          items: l,
          onClickItem: d(this, as).bind(this, "minute")
        }
      )
    ] });
  }
}
ls = new WeakMap(), as = new WeakMap();
const la = (s) => {
  if (!s)
    return;
  const n = K(`1999-01-01 ${s}`);
  if (!Number.isNaN(n.getDay()))
    return n;
};
var Gi, Xi, Ji, Zi, cs;
let Nd = (cs = class extends Bt {
  constructor(t) {
    super(t);
    v(this, Gi, () => {
      this.toggle(!0);
    });
    v(this, Xi, (t) => {
      this.setTime(t.target.value);
    });
    v(this, Ji, (t, e) => {
      this.setTime({ [t]: e });
    });
    v(this, Zi, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = mt(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [a, h] = (this.state.value || "00:00").split(":"), { hour: u = +a, minute: c = +h } = t;
      e = `${u}:${c}`;
    }
    const i = la(e), { onInvalid: o, required: r, defaultValue: l } = this.props;
    this.setState({ value: i ? mt(i, this.props.format) : r ? l : "" }, () => {
      !i && o && o(e);
    });
  }
  getTime() {
    const t = la(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: i, name: o, icon: r, required: l, disabled: a, readonly: h } = t, { value: u = "", open: c } = e, f = `time-picker-${this.id}`;
    let p;
    return c && !l && u.length ? p = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: d(this, Zi), children: /* @__PURE__ */ m("span", { className: "close" }) }) : r && (r === !0 ? p = /* @__PURE__ */ m("i", { class: "i-time" }) : p = /* @__PURE__ */ m(et, { icon: r })), [
      /* @__PURE__ */ m("input", { name: o, id: f, type: "text", class: "form-control", placeholder: i, value: u, disabled: a, readOnly: h, onFocus: d(this, Gi), onChange: d(this, Xi) }, "input"),
      p ? /* @__PURE__ */ m("label", { for: f, class: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const i = super._getTriggerProps(t, e);
    return {
      ...i,
      className: R(i.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [e, i] = this.getTime() || [];
    return /* @__PURE__ */ m(Td, { hour: e, minute: i, minuteStep: t.minuteStep, onChange: d(this, Ji) });
  }
}, Gi = new WeakMap(), Xi = new WeakMap(), Ji = new WeakMap(), Zi = new WeakMap(), cs.defaultProps = {
  ...Bt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, cs);
J.addLang({
  zh_cn: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  zh_tw: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  en: {
    today: "Today",
    yearFormat: "{0}",
    weekNames: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monthNames: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
  }
});
const Md = (s, n, t = 0) => {
  const e = new Date(s, n - 1, 1), i = new Date(s, n, 0), o = e.getDay(), r = e.getTime() - (7 + o - t) % 7 * Vn;
  return {
    days: i.getDate(),
    startTime: r,
    firstDay: e.getTime()
  };
}, aa = (s, n) => new Set((Array.isArray(s) ? s : [s]).map((t) => mt(t, n)));
var Qi;
class Rd extends z {
  constructor() {
    super(...arguments);
    v(this, Qi, (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const i = b(t.target).closest(".mini-calendar-day").dataset("date");
      i && e(i);
    });
  }
  render(t) {
    const e = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = J.getLang("weekNames"),
      monthNames: r = J.getLang("monthNames"),
      year: l = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: h = [],
      selections: u = []
    } = t, c = [], f = "btn ghost square rounded-full";
    for (let N = 0; N < 7; N++) {
      const L = (i + N) % 7;
      c.push(/* @__PURE__ */ m("div", { className: R("col mini-calendar-day", { "is-weekend": L === 0 || L === 6 }), children: /* @__PURE__ */ m("div", { children: o ? o[L] : L }) }, N));
    }
    const { startTime: p, days: g, firstDay: y } = Md(l, a, i), x = y + g * Vn;
    let w = p;
    const $ = [], _ = "yyyy-MM-dd", k = aa(h, _), S = aa(u, _);
    for (; w <= x; ) {
      const N = [];
      for (let L = 0; L < 7; L++) {
        const I = new Date(w), D = I.getDate(), O = mt(I, _), P = I.getDay(), M = zc(I, y), E = R("col mini-calendar-day", {
          active: k.has(O),
          selected: S.has(O),
          "is-first": D === 1,
          "is-in-month": M,
          "is-out-month": !M,
          "is-today": ei(I, e),
          "is-weekend": P === 0 || P === 6
        });
        N.push(
          /* @__PURE__ */ m("div", { className: E, "data-date": O, children: /* @__PURE__ */ m("a", { className: f, onClick: d(this, Qi), children: D === 1 && r ? r[I.getMonth()] : I.getDate() }) }, O)
        ), w += Vn;
      }
      $.push(/* @__PURE__ */ m("div", { className: "row", children: N }, w));
    }
    return /* @__PURE__ */ m("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ m("div", { className: "row", children: c }),
      $
    ] });
  }
}
Qi = new WeakMap();
var hs, to;
class ca extends z {
  constructor() {
    super(...arguments);
    v(this, hs, U());
    v(this, to, (t) => {
      const { onChange: e } = this.props;
      if (!e)
        return;
      const o = b(t.target).closest("[data-value]").dataset("value");
      o && (e(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    b(d(this, hs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: e, max: i, min: o, value: r } = t, l = [], a = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      l.push(/* @__PURE__ */ m(tt, { type: "ghost", "data-value": h, active: h === r, className: R(a === h ? "is-current" : ""), onClick: d(this, to), children: h }, h));
    return /* @__PURE__ */ m("div", { className: e, ref: d(this, hs), children: l });
  }
}
hs = new WeakMap(), to = new WeakMap();
var hn, us, ds, fs, ps, ms, eo, Bc, no, Fc;
class Ad extends z {
  constructor(t) {
    super(t);
    v(this, eo);
    v(this, no);
    v(this, hn, void 0);
    v(this, us, void 0);
    v(this, ds, void 0);
    v(this, fs, void 0);
    v(this, ps, void 0);
    v(this, ms, void 0);
    C(this, hn, U()), C(this, us, (r) => {
      const l = b(r.target).closest("[data-set-date]");
      l.length && this.changeDate(l.dataset("set-date"));
    }), C(this, ds, () => {
      const { year: r, month: l } = this.state;
      l === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: l - 1 });
    }), C(this, fs, () => {
      const { year: r, month: l } = this.state;
      l === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: l + 1 });
    }), C(this, ps, (r) => {
      this.setState({ year: r, select: "day" });
    }), C(this, ms, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var l, a;
      if (r.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        r.length > 3 && (h = Ed(h, r.substring(5).replace("+", ""))), r = mt(h, "yyyy-MM-dd");
      }
      (a = (l = this.props).onChange) == null || a.call(l, r);
    };
    const { date: e } = t, i = /* @__PURE__ */ new Date(), o = e ? new Date(e) : void 0;
    this.state = { select: "day", year: o ? o.getFullYear() : i.getFullYear(), month: o ? o.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(t) {
    this.setState((e) => e.select === t ? { select: "day" } : { select: t });
  }
  componentDidMount() {
    b(d(this, hn).current).find(".active").scrollIntoView();
  }
  render(t, e) {
    const {
      date: i,
      yearText: o = J.getLang("yearFormat") || "{0}",
      weekNames: r = J.getLang("weekNames"),
      monthNames: l = J.getLang("monthNames"),
      weekStart: a
    } = t, h = i ? new Date(i) : void 0, {
      year: u,
      month: c,
      select: f
    } = e, p = f === "day", g = K(t.minDate || "1970-1-1"), y = K(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ m("div", { className: "date-picker-menu row", ref: d(this, hn), onClick: d(this, us), children: [
      A(this, eo, Bc).call(this, t),
      /* @__PURE__ */ m("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ m("div", { className: "row p-2", children: [
          /* @__PURE__ */ m(tt, { type: f === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Z(o, u) }),
          /* @__PURE__ */ m(tt, { type: f === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: l ? l[c - 1] : c }),
          /* @__PURE__ */ m("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ m(tt, { type: "ghost", size: "sm", square: !0, onClick: d(this, ds), children: /* @__PURE__ */ m("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ m(tt, { type: "ghost", size: "sm", square: !0, onClick: d(this, fs), children: /* @__PURE__ */ m("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ m(
          Rd,
          {
            weekStart: a,
            weekNames: r,
            monthNames: l,
            year: u,
            month: c,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        f === "year" ? /* @__PURE__ */ m(
          ca,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: d(this, ps)
          }
        ) : f === "month" ? /* @__PURE__ */ m(
          ca,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: d(this, ms)
          }
        ) : null,
        p ? A(this, no, Fc).call(this, t) : null
      ] })
    ] });
  }
}
hn = new WeakMap(), us = new WeakMap(), ds = new WeakMap(), fs = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), eo = new WeakSet(), Bc = function(t) {
  let { menu: e } = t;
  return e ? (Array.isArray(e) && (e = { items: e }), /* @__PURE__ */ m(Oe, { ...e })) : null;
}, no = new WeakSet(), Fc = function(t) {
  let { actions: e } = t;
  const { todayText: i, clearText: o } = t;
  return e || (e = [{ text: i, "data-set-date": mt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(e) && (e = { items: e }), /* @__PURE__ */ m("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ m(ce, { btnProps: { className: "ghost text-primary" }, ...e }),
    o ? /* @__PURE__ */ m(tt, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var gs, ys, bs, ws;
let Ld = (ws = class extends Bt {
  constructor(t) {
    super(t);
    v(this, gs, void 0);
    v(this, ys, void 0);
    v(this, bs, void 0);
    C(this, gs, () => {
      this.toggle(!0);
    }), C(this, ys, (i) => {
      this.setDate(i.target.value);
    }), C(this, bs, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      if (this.props.disabled)
        return;
      const o = K(i), r = !i || Number.isNaN(o.getDay()), { onInvalid: l, defaultValue: a = "", required: h } = this.props;
      this.setState({ value: r ? h ? a : "" : mt(o, this.props.format) }, () => {
        !r && l && l(i), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = mt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: i, icon: o, required: r, disabled: l, readonly: a } = t, { value: h = "", open: u } = e, c = `date-picker-${this.id}`;
    let f;
    return u && !r && h.length ? f = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: d(this, bs), children: /* @__PURE__ */ m("span", { className: "close" }) }) : o && (o === !0 ? f = /* @__PURE__ */ m("i", { class: "i-calendar" }) : f = /* @__PURE__ */ m(et, { icon: o })), [
      /* @__PURE__ */ m("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: l, readOnly: a, onFocus: d(this, gs), onChange: d(this, ys) }, "input"),
      f ? /* @__PURE__ */ m("label", { for: c, class: "input-control-suffix", children: f }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const i = super._getTriggerProps(t, e);
    return {
      ...i,
      className: R(i.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const i = super._getPopProps(t, e);
    return {
      ...i,
      className: R(i.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: i, monthNames: o, weekStart: r, yearText: l, todayText: a = J.getLang("today"), clearText: h, menu: u, actions: c, minDate: f, maxDate: p, required: g } = t;
    return /* @__PURE__ */ m(
      Ad,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: i,
        monthNames: o,
        weekStart: r,
        yearText: l,
        todayText: a,
        clearText: g ? "" : h,
        menu: u,
        actions: c,
        minDate: f,
        maxDate: p
      }
    );
  }
}, gs = new WeakMap(), ys = new WeakMap(), bs = new WeakMap(), ws.defaultProps = {
  ...Bt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, ws);
const so = class so extends j {
};
so.NAME = "TimePicker", so.Component = Nd;
let ha = so;
const io = class io extends j {
};
io.NAME = "DatePicker", io.Component = Ld;
let ua = io;
const br = "show", da = "in", Id = '[data-dismiss="modal"]';
var $e, Gt, un, oo, dn, fi;
const gt = class gt extends ft {
  constructor() {
    super(...arguments);
    v(this, dn);
    v(this, $e, 0);
    v(this, Gt, void 0);
    v(this, un, void 0);
    v(this, oo, (t) => {
      const e = t.target, i = e.closest(".modal");
      !i || i !== this.modalElement || (e.closest(Id) || this.options.backdrop === !0 && e === i) && (t.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(br);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return d(this, Gt);
  }
  _observeResize() {
    var t;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (t = d(this, Gt)) == null || t.disconnect();
      const { dialog: e } = this;
      if (e) {
        const i = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const o = e.clientWidth, r = e.clientHeight, [l, a] = d(this, un) || [];
          (l !== o || a !== r) && (C(this, un, [o, r]), this.layout());
        });
        i.observe(e), C(this, Gt, i);
      }
    }
  }
  afterInit() {
    this.on("click", d(this, oo)), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = d(this, Gt)) == null || t.disconnect(), C(this, Gt, void 0);
  }
  show(t) {
    const { modalElement: e } = this;
    if (this.shown)
      return b(e).css("z-index", `${gt.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: i, backdrop: o, className: r, style: l } = this.options;
    return b(e).setClass({
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, br, r).css({
      zIndex: `${gt.zIndex++}`,
      ...l
    }), this.layout(), this.emit("show"), A(this, dn, fi).call(this, () => {
      b(e).addClass(da), A(this, dn, fi).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (b(this.modalElement).removeClass(da), this.emit("hide"), A(this, dn, fi).call(this, () => {
      b(this.modalElement).removeClass(br), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.shown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    const o = b(i);
    if (e = e ?? this.options.size, e) {
      o.removeAttr("data-size");
      const h = { width: "", height: "" };
      typeof e == "object" ? (h.width = e.width, h.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? o.attr("data-size", e) : e && (h.width = e), o.css(h);
    }
    t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, l = i.clientHeight;
    C(this, un, [r, l]), typeof t == "function" && (t = t({ width: r, height: l }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (a.alignSelf = "flex-start", a.top = t) : typeof t == "object" && t ? (a.alignSelf = "flex-start", Object.assign(a, t)) : t === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - l) / 3))}px`) : t === "bottom" ? a.alignSelf = "flex-end" : t === "top" ? a.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (a.alignSelf = "flex-start", a.top = t), o.css(a), b(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  static hide(t) {
    var e;
    (e = gt.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = gt.query(t)) == null || e.show();
  }
};
$e = new WeakMap(), Gt = new WeakMap(), un = new WeakMap(), oo = new WeakMap(), dn = new WeakSet(), fi = function(t, e) {
  d(this, $e) && (clearTimeout(d(this, $e)), C(this, $e, 0)), t && (this.options.animation ? C(this, $e, window.setTimeout(t, e ?? this.options.transTime)) : t());
}, gt.NAME = "Modal", gt.MULTI_INSTANCE = !0, gt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}, gt.zIndex = 1500;
let We = gt;
b(window).on("resize.modal.zui", () => {
  We.getAll().forEach((s) => {
    const n = s;
    n.shown && n.options.responsive && n.layout();
  });
});
b(document).on("to-hide.modal.zui", (s, n) => {
  We.hide(n == null ? void 0 : n.target);
});
const Sl = class Sl extends z {
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  renderHeader() {
    const {
      header: n,
      headerClass: t,
      title: e
    } = this.props;
    return X(n) ? n : n === !1 || !e ? null : /* @__PURE__ */ m("div", { className: R("modal-header", t), children: /* @__PURE__ */ m("div", { className: "modal-title", children: e }) });
  }
  renderActions() {
    const {
      actions: n,
      closeBtn: t
    } = this.props;
    return !t && !n ? null : X(n) ? n : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      n ? /* @__PURE__ */ m(ce, { ...n }) : null,
      t ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: n,
      bodyClass: t
    } = this.props;
    return n ? X(n) ? n : /* @__PURE__ */ m("div", { className: R("modal-body", t), children: n }) : null;
  }
  renderFooter() {
    const {
      footer: n,
      footerClass: t,
      footerActions: e
    } = this.props;
    return X(n) ? n : n === !1 || !e ? null : /* @__PURE__ */ m("div", { className: R("modal-footer", t), children: e ? /* @__PURE__ */ m(ce, { ...e }) : null });
  }
  render() {
    const {
      className: n,
      style: t,
      contentClass: e,
      children: i
    } = this.props;
    return /* @__PURE__ */ m("div", { className: R("modal-dialog", n), style: t, children: /* @__PURE__ */ m("div", { className: R("modal-content", e), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
};
Sl.defaultProps = { closeBtn: !0 };
let Or = Sl;
var fn, pn, mn;
class Dd extends z {
  constructor() {
    super(...arguments);
    v(this, fn, void 0);
    v(this, pn, void 0);
    v(this, mn, void 0);
    C(this, fn, U()), this.state = {}, C(this, mn, () => {
      var i, o;
      const t = (o = (i = d(this, fn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let e = d(this, pn);
      e == null || e.disconnect(), e = new ResizeObserver(() => {
        const r = t.body, l = t.documentElement, a = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, l.offsetHeight));
        this.setState({ height: a });
      }), e.observe(t.body), e.observe(t.documentElement), C(this, pn, e);
    });
  }
  componentDidMount() {
    d(this, mn).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = d(this, pn)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: d(this, fn),
        onLoad: d(this, mn)
      }
    );
  }
}
fn = new WeakMap(), pn = new WeakMap(), mn = new WeakMap();
function Pd(s, n) {
  const { custom: t, title: e, content: i } = n;
  return {
    body: i,
    title: e,
    ...typeof t == "function" ? t() : t
  };
}
async function Od(s, n) {
  const { dataType: t = "html", url: e, request: i, custom: o, title: r, replace: l = !0, executeScript: a = !0 } = n, u = await (await fetch(e, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (t !== "html")
    try {
      const c = JSON.parse(u);
      return {
        title: r,
        ...o,
        ...c
      };
    } catch {
    }
  return l !== !1 && t === "html" ? [u] : {
    title: r,
    ...o,
    body: t === "html" ? /* @__PURE__ */ m(Nn, { className: "modal-body", html: u, executeScript: a }) : u
  };
}
async function Hd(s, n) {
  const { url: t, custom: e, title: i } = n;
  return {
    title: i,
    ...e,
    body: /* @__PURE__ */ m(Dd, { url: t })
  };
}
const Wd = {
  custom: Pd,
  ajax: Od,
  iframe: Hd
}, wr = "loading";
var xt, gn, Ct, vs, Wr, xs, zr;
const me = class me extends We {
  constructor() {
    super(...arguments);
    v(this, vs);
    v(this, xs);
    v(this, xt, void 0);
    v(this, gn, void 0);
    v(this, Ct, void 0);
  }
  get id() {
    return d(this, gn);
  }
  get loading() {
    var t;
    return (t = d(this, xt)) == null ? void 0 : t.classList.contains(wr);
  }
  get shown() {
    var t;
    return !!((t = d(this, xt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = d(this, xt);
    if (!t) {
      const { options: e } = this;
      let i = d(this, gn);
      i || (i = e.id || `modal-${b.guid++}`, C(this, gn, i));
      const { $element: o } = this;
      if (t = o.find(`#${i}`)[0], !t) {
        const r = this.key;
        t = b("<div>").attr({
          id: i,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(o)[0];
      }
      C(this, xt, t);
    }
    return t;
  }
  get $emitter() {
    const t = d(this, xt);
    return t ? b(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = d(this, xt);
    t && (b(t).removeData(this.constructor.KEY).remove(), C(this, xt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    d(this, Ct) && clearTimeout(d(this, Ct));
    const { modalElement: t, options: e } = this, i = b(t), { type: o, loadTimeout: r, loadingText: l = null } = e, a = Wd[o];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", l).addClass(wr), r && C(this, Ct, window.setTimeout(() => {
      C(this, Ct, 0), A(this, xs, zr).call(this, this.options.timeoutTip);
    }, r));
    const h = await a.call(this, t, e);
    return h === !1 ? await A(this, xs, zr).call(this, this.options.failedTip) : h && typeof h == "object" && await A(this, vs, Wr).call(this, h), d(this, Ct) && (clearTimeout(d(this, Ct)), C(this, Ct, 0)), this.layout(), await wi(100), i.removeClass(wr), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const l = me.ensure(i, r);
      l.one("hidden", () => e(l)), l.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: i, icon: o, iconClass: r = "icon-lg muted", actions: l = "confirm", onClickAction: a, custom: h, key: u = "__alert", ...c } = t, f = (typeof h == "function" ? h() : h) || {};
    let p = typeof i == "object" && i.html ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: i.html } }) : /* @__PURE__ */ m("div", { children: i });
    o ? p = /* @__PURE__ */ m("div", { className: R("modal-body row gap-4 items-center", f.bodyClass), children: [
      /* @__PURE__ */ m("div", { className: `icon ${o} ${r}` }),
      p
    ] }) : p = /* @__PURE__ */ m("div", { className: R("modal-body", f.bodyClass), children: p });
    const g = [];
    (Array.isArray(l) ? l : [l]).forEach((w) => {
      w = {
        ...typeof w == "string" ? { key: w } : w
      }, typeof w.key == "string" && (w.text || (w.text = J.getLang(w.key, w.key)), w.btnType || (w.btnType = `btn-wide ${w.key === "confirm" ? "primary" : "btn-default"}`)), w && g.push(w);
    }, []);
    let y;
    const x = g.length ? {
      gap: 4,
      items: g,
      onClickItem: ({ item: w, event: $ }) => {
        const _ = me.query($.target, u);
        y = w.key, (a == null ? void 0 : a(w, _)) !== !1 && _ && _.hide();
      }
    } : void 0;
    return await me.open({
      key: u,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: p,
      backdrop: "static",
      custom: { footerActions: x, ...f },
      ...c
    }), y;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: i, ...o } = t;
    return await me.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (l, a) => {
        i == null || i(l.key === "confirm", a), e == null || e(l, a);
      },
      ...o
    }) === "confirm";
  }
};
xt = new WeakMap(), gn = new WeakMap(), Ct = new WeakMap(), vs = new WeakSet(), Wr = function(t) {
  return new Promise((e) => {
    if (Array.isArray(t))
      return b(this.modalElement).html(t[0]), this.layout(), this._observeResize(), e();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), e();
      },
      ...o
    }, Fn(
      /* @__PURE__ */ m(Or, { ...t }),
      this.modalElement
    );
  });
}, xs = new WeakSet(), zr = function(t) {
  if (t)
    return A(this, vs, Wr).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: t })
    });
}, me.DEFAULT = {
  ...We.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Hr = me;
const zd = '[data-toggle="modal"]';
var Xt, ro, jc, lo, Vc, ao, Uc;
const kl = class kl extends ft {
  constructor() {
    super(...arguments);
    v(this, ro);
    v(this, lo);
    v(this, ao);
    v(this, Xt, void 0);
  }
  get modal() {
    return d(this, Xt);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = A(this, lo, Vc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = d(this, Xt)) == null ? void 0 : t.hide();
  }
};
Xt = new WeakMap(), ro = new WeakSet(), jc = function() {
  const {
    container: t,
    ...e
  } = this.options, i = e, o = this.$element.attr("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), !i.key && i.id && (i.key = i.id), i;
}, lo = new WeakSet(), Vc = function() {
  const t = A(this, ro, jc).call(this);
  let e = d(this, Xt);
  if (e)
    return e.setOptions(t), e;
  if (t.type === "static") {
    const i = A(this, ao, Uc).call(this);
    if (!i)
      return;
    e = We.ensure(i, t);
  } else
    e = Hr.ensure(this.container, t);
  return C(this, Xt, e), e.on("destroyed", () => {
    C(this, Xt, void 0);
  }), e;
}, ao = new WeakSet(), Uc = function() {
  let t = this.options.target;
  if (!t) {
    const { $element: e } = this;
    if (e.is("a")) {
      const i = e.attr("href");
      i != null && i.startsWith("#") && (t = i);
    }
  }
  return this.container.querySelector(t || ".modal");
}, kl.NAME = "ModalTrigger";
let Br = kl;
b(document).on("click.modal.zui", (s) => {
  var e;
  const n = s.target, t = (e = n.closest) == null ? void 0 : e.call(n, zd);
  if (t) {
    const i = Br.ensure(t);
    i && (i.show(), s.preventDefault());
  }
});
var Cs;
let Bd = (Cs = class extends er {
  beforeRender() {
    const n = super.beforeRender();
    return n.className = R(n.className, n.type ? `nav-${n.type}` : "", {
      "nav-stacked": n.stacked
    }), n;
  }
}, Cs.NAME = "nav", Cs);
const co = class co extends j {
};
co.NAME = "Nav", co.Component = Bd;
let fa = co;
function Un(s, n) {
  const t = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof n == "string" && (n === "first" ? n = 1 : n === "last" ? n = t : n === "prev" ? n = s.page - 1 : n === "next" ? n = s.page + 1 : n === "current" ? n = s.page : n = Number.parseInt(n, 10)), n = n !== void 0 ? Math.max(1, Math.min(n < 0 ? t + n : n, t)) : s.page, {
    ...s,
    pageTotal: t,
    page: n
  };
}
function Fd({
  key: s,
  type: n,
  btnType: t,
  page: e,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...l
}) {
  const a = Un(o, e);
  return l.text === void 0 && !l.icon && i && (l.text = typeof i == "function" ? i(a) : Z(i, a)), l.url === void 0 && r && (l.url = typeof r == "function" ? r(a) : Z(r, a)), l.disabled === void 0 && (l.disabled = e !== void 0 && a.page === o.page), /* @__PURE__ */ m(tt, { type: t, ...l });
}
function jd({
  key: s,
  type: n,
  page: t,
  text: e = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const l = Un(i, t);
  return e = typeof e == "function" ? e(l) : Z(e, l), /* @__PURE__ */ m(vc, { ...r, children: [
    o,
    e
  ] });
}
function Vd({
  key: s,
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...l
}) {
  if (!i.pageTotal)
    return;
  const a = { ...l, square: !0 }, h = () => (a.text = "", a.icon = "icon-ellipsis-h", a.disabled = !0, /* @__PURE__ */ m(tt, { type: t, ...a })), u = (f, p) => {
    const g = [];
    for (let y = f; y <= p; y++) {
      a.text = y, delete a.icon, a.disabled = !1;
      const x = Un(i, y);
      r && (a.url = typeof r == "function" ? r(x) : Z(r, x)), g.push(/* @__PURE__ */ m(tt, { type: t, ...a, onClick: o }));
    }
    return g;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= e ? c = [...c, ...u(2, i.pageTotal)] : i.page < e - 2 ? c = [...c, ...u(2, e - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - e + 3 ? c = [...c, h(), ...u(i.pageTotal - e + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((e - 4) / 2), i.page + Math.floor((e - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function Ud({
  type: s,
  pagerInfo: n,
  linkCreator: t,
  items: e = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var a;
  i.items = i.items ?? e.map((h) => {
    const u = { ...n, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === n.recPerPage,
      url: typeof t == "function" ? t(u) : Z(t, u)
    };
  });
  const { text: l = "" } = r;
  return r.text = typeof l == "function" ? l(n) : Z(l, n), i.menu = { ...i.menu, className: R((a = i.menu) == null ? void 0 : a.className, "pager-size-menu") }, /* @__PURE__ */ m(Ac, { type: "dropdown", dropdown: i, ...r });
}
function qd({
  key: s,
  page: n,
  type: t,
  btnType: e,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: l,
  linkCreator: a,
  ...h
}) {
  const u = { ...h };
  let c;
  const f = (y) => {
    var x;
    c = Number((x = y.target) == null ? void 0 : x.value) || 1, c = c > i.pageTotal ? i.pageTotal : c;
  }, p = (y) => {
    if (!(y != null && y.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const x = Un(i, c);
    l && !l({ info: x, event: y }) || (y.target.href = u.url = typeof a == "function" ? a(x) : Z(a, x));
  }, g = Un(i, n || 0);
  return u.url = typeof a == "function" ? a(g) : Z(a, g), /* @__PURE__ */ m("div", { className: R("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ m(tt, { type: e, ...u, onClick: p })
  ] });
}
var De;
let Yd = (De = class extends ce {
  get pagerInfo() {
    const { page: n = 1, recTotal: t = 0, recPerPage: e = 10 } = this.props;
    return { page: n, recTotal: t, recPerPage: e, pageTotal: e ? Math.ceil(t / e) : 0 };
  }
  isBtnItem(n) {
    return n === "link" || n === "nav" || n === "size-menu" || n === "goto" || super.isBtnItem(n);
  }
  getItemRenderProps(n, t, e) {
    const i = super.getItemRenderProps(n, t, e), o = t.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: n.linkCreator }), i;
  }
}, De.NAME = "pager", De.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}, De.ItemComponents = {
  ...ce.ItemComponents,
  link: Fd,
  info: jd,
  nav: Vd,
  "size-menu": Ud,
  goto: qd
}, De);
const ho = class ho extends j {
};
ho.NAME = "Pager", ho.Component = Yd;
let pa = ho;
const uo = class uo extends j {
};
uo.NAME = "Pick", uo.Component = Bt;
let ma = uo;
var yn, $s, _s, fo;
class qc extends z {
  constructor(t) {
    super(t);
    v(this, yn, U());
    v(this, $s, U());
    v(this, _s, (t) => {
      var i, o;
      const e = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, e), this.setState({ search: e }), t.stopPropagation();
    });
    v(this, fo, (t) => {
      var e, i;
      t.stopPropagation(), (i = (e = this.props).onClear) == null || i.call(e), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = d(this, yn).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: e } = d(this, $s), { current: i } = d(this, yn);
      if (e && i) {
        const o = b(i).parent();
        o.width(Math.ceil(Math.min(e.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, e) {
    const { placeholder: i, inline: o } = t, { search: r } = e, l = r.trim().length > 0;
    let a;
    return o ? a = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: d(this, $s), children: r }) : l ? a = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: d(this, fo), children: /* @__PURE__ */ m("span", { className: "close" }) }) : a = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: d(this, _s),
          onInput: d(this, _s),
          ref: d(this, yn)
        }
      ),
      a
    ] });
  }
}
yn = new WeakMap(), $s = new WeakMap(), _s = new WeakMap(), fo = new WeakMap();
var bn, Ss, ks, Es;
class Kd extends vl {
  constructor() {
    super(...arguments);
    v(this, bn, void 0);
    v(this, Ss, void 0);
    v(this, ks, void 0);
    v(this, Es, void 0);
    C(this, bn, U()), C(this, Ss, (t) => {
      const { onDeselect: e, state: { selections: i } } = this.props, o = b(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && i.length && typeof o == "string" && e(o), t.stopPropagation();
    }), C(this, ks, (t) => {
      this.props.changeState({ search: t });
    }), C(this, Es, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ m("span", { className: "text", children: t.text }),
      this.props.disabled ? null : /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: d(this, Ss), "data-value": t.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = d(this, bn).current) == null || e.focus();
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: i } = t;
    return /* @__PURE__ */ m(
      qc,
      {
        inline: !0,
        ref: d(this, bn),
        defaultSearch: e,
        onSearch: d(this, ks),
        onClear: d(this, Es),
        placeholder: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: i }, search: o, placeholder: r, children: l } = this.props, a = i && o;
    return !a && !e.length ? /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      l,
      /* @__PURE__ */ m("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: i = "" }, id: o, valueList: r, emptyValue: l } = t, a = r.length ? r : [l];
    if (e)
      if (this.hasInput)
        b(`#${o}`).val(i);
      else
        return /* @__PURE__ */ m("select", { id: o, multiple: !0, className: "pick-value", name: e, style: { display: "none" }, children: a.map((h) => /* @__PURE__ */ m("option", { value: h, children: h }, h)) });
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: i } = this.props;
    b(`#${t}`).val(e.length ? e : [i]);
  }
  componentDidUpdate(t) {
    const { id: e, state: i, name: o, valueList: r, emptyValue: l } = this.props;
    o && t.state.value !== i.value && b(`#${e}`).val(r.length ? r : [l]).trigger("change", Dr);
  }
}
bn = new WeakMap(), Ss = new WeakMap(), ks = new WeakMap(), Es = new WeakMap();
var Ts, po, mo, go, yo, Yc;
class Gd extends vl {
  constructor() {
    super(...arguments);
    v(this, yo);
    v(this, Ts, U());
    v(this, po, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    v(this, mo, (t) => {
      this.props.changeState({ search: t });
    });
    v(this, go, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = d(this, Ts).current) == null || e.focus();
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ m(
      qc,
      {
        ref: d(this, Ts),
        defaultSearch: e,
        onSearch: d(this, mo),
        onClear: d(this, go),
        placeholder: A(this, yo, Yc).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: i = [], open: o }, placeholder: r, search: l, disabled: a, clearable: h } = t, [u] = i, c = o && l;
    let f;
    c ? f = this._renderSearch(t) : u ? f = /* @__PURE__ */ m("span", { className: "picker-single-selection", children: u.text }, "main") : f = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }, "main");
    const p = h && !c ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: d(this, po), children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null;
    return [
      f,
      e,
      p,
      c ? null : /* @__PURE__ */ m("span", { className: "caret" }, "caret")
    ];
  }
}
Ts = new WeakMap(), po = new WeakMap(), mo = new WeakMap(), go = new WeakMap(), yo = new WeakSet(), Yc = function() {
  const { searchHint: t, state: { value: e, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((l) => l.value === e);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const Xd = (s, n, t = "is-match") => s.reduce((e, i) => [...e].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const l = r.toLowerCase().split(i);
  if (l.length === 1)
    return o.push(r), o;
  let a = 0;
  return l.forEach((h, u) => {
    u && (o.push(/* @__PURE__ */ m("span", { class: t, children: r.substring(a, a + i.length) })), a += i.length), o.push(r.substring(a, a + h.length)), a += h.length;
  }), o;
}, []), n);
var bo, wo, Kc, vo, Gc, xo;
class Jd extends Wc {
  constructor() {
    super(...arguments);
    v(this, wo);
    v(this, vo);
    v(this, bo, U());
    v(this, xo, ({ item: t }) => {
      const e = t.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: l } = this.props;
      i ? o(e) : (r(e), l(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const t = this.element;
    t && b(t).on("mouseenter.picker.zui", ".menu-item", (e) => {
      const i = b(e.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const t = this.element;
    t && b(t).off(".picker.zui");
  }
  setHoverItem(t) {
    this.props.changeState({ hoverItem: t }, () => {
      const e = A(this, wo, Kc).call(this);
      e != null && e.length && e.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-menu"
    );
  }
  _renderPop(t) {
    const { menu: e } = t;
    return /* @__PURE__ */ m(
      Oe,
      {
        ref: d(this, bo),
        className: "picker-menu-list",
        items: A(this, vo, Gc).call(this),
        onClickItem: d(this, xo),
        ...e
      }
    );
  }
}
bo = new WeakMap(), wo = new WeakSet(), Kc = function() {
  const t = this.element;
  if (t)
    return b(t).find(".menu-item>a.hover");
}, vo = new WeakSet(), Gc = function() {
  const { selections: t, items: e, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let l = !1;
  const a = b.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = e.reduce((u, c) => {
    const {
      value: f = "",
      keys: p,
      text: g,
      className: y,
      ...x
    } = c;
    f === i && (l = !0);
    const w = g ?? f;
    return u.push({
      key: f,
      active: r.has(f),
      text: typeof w == "string" ? Xd(a, [w]) : /* @__PURE__ */ m(Js, { content: w }),
      className: R(y, { hover: f === i }),
      "data-value": f,
      ...x
    }), u;
  }, []);
  return !l && h.length && (h[0].className = R(h[0].className, "hover")), h;
}, xo = new WeakMap();
var wn, $t, Lt, vn, Rn;
let Zd = (Rn = class extends Bt {
  constructor(t) {
    super(t);
    v(this, wn, void 0);
    v(this, $t, void 0);
    v(this, Lt, void 0);
    v(this, vn, void 0);
    C(this, Lt, 0), this.isEmptyValue = (r) => d(this, vn).has(r), this.toggleValue = (r, l) => {
      if (!this.props.multiple)
        return l || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: a } = this, h = a.indexOf(r);
      if (l !== h >= 0)
        return h > -1 ? a.splice(h, 1) : a.push(r), this.setValue(a);
    }, this.deselect = (r) => {
      const { valueList: l } = this, a = new Set(this.formatValueList(r)), h = l.filter((u) => !a.has(u));
      this.setValue(h);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const l = this.formatValueList(r), a = this.props.multiple ? [...this.valueList, ...l] : l[0];
      return this.setValue(a);
    }, this.isSelected = (r) => this.valueList.includes(r), b.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: i = "" } = this.props;
    C(this, vn, new Set(i.split(e)));
    const { items: o } = this.state;
    if (Array.isArray(o) && o.length) {
      if (o.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = new Set(o.map((l) => l.value));
        this.state.value = this.valueList.filter((l) => r.has(l)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = o[0].value);
    }
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return d(this, vn).values().next().value;
  }
  async load() {
    let t = d(this, $t);
    t && t.abort(), t = new AbortController(), C(this, $t, t);
    const { items: e, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof e == "function") {
      if (await wi(i || 500), d(this, $t) !== t || (r = await e(o, { signal: t.signal }), d(this, $t) !== t))
        return r;
    } else if (o.length) {
      const l = b.unique(o.toLowerCase().split(" ").filter((a) => a.length));
      l.length ? r = e.reduce((a, h) => {
        const {
          value: u,
          keys: c = "",
          text: f
        } = h;
        return l.every((p) => u.toLowerCase().includes(p) || c.toLowerCase().includes(p) || typeof f == "string" && f.toLowerCase().includes(p)) && a.push(h), a;
      }, []) : r = e;
    } else
      r = e;
    return C(this, $t, void 0), r;
  }
  async update(t) {
    const { state: e, props: i } = this, o = d(this, wn) || {}, r = {};
    if (C(this, wn, o), (t || o.search !== e.search || i.items !== o.items) && (r.items = (await this.load()).filter((a) => (a.value = String(a.value), !this.isEmptyValue(a.value))), r.loading = !1, o.items = i.items, o.search = e.search), t || o.value !== e.value) {
      const a = r.items || e.items, h = new Map(a.map((u) => [u.value, u]));
      r.selections = this.valueList.reduce((u, c) => (this.isEmptyValue(c) || u.push(h.get(c) || { value: c }), u), []), o.value = e.value;
    }
    const l = r.items;
    i.required && !i.multiple && this.isEmptyValue(this.state.value) && Array.isArray(l) && l.length && (r.value = l[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    d(this, Lt) && clearTimeout(d(this, Lt)), C(this, Lt, window.setTimeout(() => {
      C(this, Lt, 0), this.update();
    }, 50));
  }
  componentDidUpdate(t, e) {
    super.componentDidUpdate(t, e), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = d(this, $t)) == null || t.abort(), C(this, $t, void 0), C(this, wn, void 0), clearTimeout(d(this, Lt)), super.componentWillUnmount();
  }
  _getTriggerProps(t, e) {
    return {
      ...super._getTriggerProps(t, e),
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
      disabled: t.disabled,
      clearable: !!this.valueList.length && !t.required,
      valueList: this.valueList,
      emptyValue: this.firstEmptyValue,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getPopProps(t, e) {
    return {
      ...super._getPopProps(t, e),
      menu: t.menu,
      multiple: t.multiple,
      search: t.search,
      searchHint: t.searchHint,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? Kd : Gd);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = b.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = b.unique(t)), e.filter((i) => !this.isEmptyValue(i));
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = []) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let e = this.formatValueList(t);
    if (!e.length)
      return this.changeState({ value: this.firstEmptyValue });
    const { items: i, limitValueInList: o } = this.props;
    if (o) {
      const l = new Set((Array.isArray(i) ? i : this.state.items).map((a) => String(a.value)));
      e = e.filter((a) => l.has(a));
    }
    const r = this.formatValue(e);
    return this.changeState({ value: r });
  }
}, wn = new WeakMap(), $t = new WeakMap(), Lt = new WeakMap(), vn = new WeakMap(), Rn.defaultProps = {
  ...Bt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, Rn.Pop = Jd, Rn);
const Co = class Co extends j {
};
Co.NAME = "Picker", Co.Component = Zd;
let ga = Co;
const $o = class $o extends ft {
  constructor() {
    super(...arguments), this.cleanup = () => {
    }, this.toggle = () => {
    };
  }
  init() {
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      if (this.$target.hasClass("hidden")) {
        this.show();
        return;
      }
      this.hide();
    }, this.$element.addClass("z-50").on("click", this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off("click", this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: n, strategy: t } = this.options, e = {
      placement: n,
      strategy: t,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: l } = this.options;
    return i && e.middleware.push(nr()), o && e.middleware.push(o === !0 ? ki() : ki(o)), r && e.middleware.push(Rr({ element: this.$arrow[0] })), l && e.middleware.push(sr(l)), e;
  }
  createPopper() {
    const n = this.element, t = this.$target[0];
    this.cleanup = wl(n, t, () => {
      rr(n, t, this.computePositionConfig()).then(({ x: e, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${e}px`,
          top: `${i}px`
        }), !Rr || !r.arrow)
          return;
        const { x: l, y: a } = r.arrow, h = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[o.split("-")[0]];
        Object.assign(this.$arrow[0].style, {
          left: l != null ? `${l}px` : "",
          top: a != null ? `${a}px` : "",
          right: "",
          bottom: "",
          [h]: "-4px"
        });
      });
    });
  }
  initTarget() {
    const n = this.$element.data("target");
    if (!n)
      throw new Error("popsvers trigger must have target.");
    const t = b(n);
    if (!t.length)
      throw new Error("popovers target must exist.");
    const { strategy: e } = this.options;
    t.addClass(e), t.addClass("hidden"), t.addClass("z-50"), t.on("click", (i) => {
      b(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = t;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const n = b('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    n.on("click", () => {
      this.hide();
    }), this.$target.parent().append(n), this.$mask = n;
  }
  initArrow() {
    const { arrow: n } = this.options;
    n && (this.$arrow = b('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
};
$o.NAME = "Popovers", $o.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
let ya = $o;
var Ns, Ms, Jt, _o, Rs, As, Ls, Fr, Is;
let Qd = (Is = class extends z {
  constructor(t) {
    super(t);
    v(this, Ls);
    v(this, Ns, void 0);
    v(this, Ms, U());
    v(this, Jt, 0);
    v(this, _o, (t) => {
      const e = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), e.trim() !== "" && (i == null || i("", t));
      });
    });
    v(this, Rs, (t) => {
      const e = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || e === i || (A(this, Ls, Fr).call(this), C(this, Jt, window.setTimeout(() => {
          o(i, t), C(this, Jt, 0);
        }, this.props.delay || 0)));
      });
    });
    v(this, As, (t) => {
      const e = t.type === "focus";
      this.setState({ focus: e }, () => {
        const i = e ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, C(this, Ns, t.id || `search-box-${b.guid++}`);
  }
  get id() {
    return d(this, Ns);
  }
  get input() {
    return d(this, Ms).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    A(this, Ls, Fr).call(this);
  }
  render(t, e) {
    const { style: i, className: o, rootClass: r, rootStyle: l, readonly: a, disabled: h, circle: u, placeholder: c, mergeIcon: f, searchIcon: p, clearIcon: g } = t, { focus: y, value: x } = e, { id: w } = this, $ = typeof x != "string" || !x.trim().length;
    let _, k, S;
    return p && (S = p === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(et, { icon: p })), !f && p && (_ = /* @__PURE__ */ m("label", { for: w, class: "input-control-prefix", children: S }, "prefix")), g && !$ ? k = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: d(this, _o),
        children: g === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(et, { icon: g })
      }
    ) : f && p && (k = S), k && (k = /* @__PURE__ */ m("label", { for: w, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ m("div", { class: R("search-box input-control", r, { focus: y, empty: $, "has-prefix-icon": _, "has-suffix-icon": k }), style: l, children: [
      _,
      /* @__PURE__ */ m(
        "input",
        {
          ref: d(this, Ms),
          id: w,
          type: "text",
          class: R("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: a,
          value: x,
          onInput: d(this, Rs),
          onChange: d(this, Rs),
          onFocus: d(this, As),
          onBlur: d(this, As)
        }
      ),
      k
    ] });
  }
}, Ns = new WeakMap(), Ms = new WeakMap(), Jt = new WeakMap(), _o = new WeakMap(), Rs = new WeakMap(), As = new WeakMap(), Ls = new WeakSet(), Fr = function() {
  d(this, Jt) && clearTimeout(d(this, Jt)), C(this, Jt, 0);
}, Is.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, Is);
const So = class So extends j {
};
So.NAME = "SearchBox", So.Component = Qd;
let ba = So;
const ko = class ko extends j {
};
ko.NAME = "Toolbar", ko.Component = ce;
let wa = ko;
function ni(s) {
  return s.split("-")[1];
}
function xl(s) {
  return s === "y" ? "height" : "width";
}
function Xe(s) {
  return s.split("-")[0];
}
function lr(s) {
  return ["top", "bottom"].includes(Xe(s)) ? "x" : "y";
}
function va(s, n, t) {
  let { reference: e, floating: i } = s;
  const o = e.x + e.width / 2 - i.width / 2, r = e.y + e.height / 2 - i.height / 2, l = lr(n), a = xl(l), h = e[a] / 2 - i[a] / 2, u = l === "x";
  let c;
  switch (Xe(n)) {
    case "top":
      c = { x: o, y: e.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: e.y + e.height };
      break;
    case "right":
      c = { x: e.x + e.width, y: r };
      break;
    case "left":
      c = { x: e.x - i.width, y: r };
      break;
    default:
      c = { x: e.x, y: e.y };
  }
  switch (ni(n)) {
    case "start":
      c[l] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[l] += h * (t && u ? -1 : 1);
  }
  return c;
}
const tf = async (s, n, t) => {
  const { placement: e = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, l = o.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let h = await r.getElementRects({ reference: s, floating: n, strategy: i }), { x: u, y: c } = va(h, e, a), f = e, p = {}, g = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: x, fn: w } = l[y], { x: $, y: _, data: k, reset: S } = await w({ x: u, y: c, initialPlacement: e, placement: f, strategy: i, middlewareData: p, rects: h, platform: r, elements: { reference: s, floating: n } });
    u = $ ?? u, c = _ ?? c, p = { ...p, [x]: { ...p[x], ...k } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: n, strategy: i }) : S.rects), { x: u, y: c } = va(h, f, a)), y = -1);
  }
  return { x: u, y: c, placement: f, strategy: i, middlewareData: p };
};
function Xc(s) {
  return typeof s != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function Mi(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function ef(s, n) {
  var t;
  n === void 0 && (n = {});
  const { x: e, y: i, platform: o, rects: r, elements: l, strategy: a } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: f = !1, padding: p = 0 } = n, g = Xc(p), y = l[f ? c === "floating" ? "reference" : "floating" : c], x = Mi(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(y))) == null || t ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: h, rootBoundary: u, strategy: a })), w = c === "floating" ? { ...r.floating, x: e, y: i } : r.reference, $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), _ = await (o.isElement == null ? void 0 : o.isElement($)) && await (o.getScale == null ? void 0 : o.getScale($)) || { x: 1, y: 1 }, k = Mi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: $, strategy: a }) : w);
  return { top: (x.top - k.top + g.top) / _.y, bottom: (k.bottom - x.bottom + g.bottom) / _.y, left: (x.left - k.left + g.left) / _.x, right: (k.right - x.right + g.right) / _.x };
}
const nf = Math.min, sf = Math.max;
function of(s, n, t) {
  return sf(s, nf(n, t));
}
const rf = (s) => ({ name: "arrow", options: s, async fn(n) {
  const { element: t, padding: e = 0 } = s || {}, { x: i, y: o, placement: r, rects: l, platform: a } = n;
  if (t == null)
    return {};
  const h = Xc(e), u = { x: i, y: o }, c = lr(r), f = xl(c), p = await a.getDimensions(t), g = c === "y" ? "top" : "left", y = c === "y" ? "bottom" : "right", x = l.reference[f] + l.reference[c] - u[c] - l.floating[f], w = u[c] - l.reference[c], $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(t));
  let _ = $ ? c === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0;
  _ === 0 && (_ = l.floating[f]);
  const k = x / 2 - w / 2, S = h[g], N = _ - p[f] - h[y], L = _ / 2 - p[f] / 2 + k, I = of(S, L, N), D = ni(r) != null && L != I && l.reference[f] / 2 - (L < S ? h[g] : h[y]) - p[f] / 2 < 0;
  return { [c]: u[c] - (D ? L < S ? S - L : N - L : 0), data: { [c]: I, centerOffset: L - I } };
} }), lf = ["top", "right", "bottom", "left"];
lf.reduce((s, n) => s.concat(n, n + "-start", n + "-end"), []);
const af = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ri(s) {
  return s.replace(/left|right|bottom|top/g, (n) => af[n]);
}
function cf(s, n, t) {
  t === void 0 && (t = !1);
  const e = ni(s), i = lr(s), o = xl(i);
  let r = i === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = Ri(r)), { main: r, cross: Ri(r) };
}
const hf = { start: "end", end: "start" };
function vr(s) {
  return s.replace(/start|end/g, (n) => hf[n]);
}
const uf = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(n) {
    var t;
    const { placement: e, middlewareData: i, rects: o, initialPlacement: r, platform: l, elements: a } = n, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...y } = s, x = Xe(e), w = Xe(r) === r, $ = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), _ = c || (w || !g ? [Ri(r)] : function(O) {
      const P = Ri(O);
      return [vr(O), P, vr(P)];
    }(r));
    c || p === "none" || _.push(...function(O, P, M, E) {
      const H = ni(O);
      let W = function(B, G, fe) {
        const si = ["left", "right"], Dn = ["right", "left"], ii = ["top", "bottom"], hr = ["bottom", "top"];
        switch (B) {
          case "top":
          case "bottom":
            return fe ? G ? Dn : si : G ? si : Dn;
          case "left":
          case "right":
            return G ? ii : hr;
          default:
            return [];
        }
      }(Xe(O), M === "start", E);
      return H && (W = W.map((B) => B + "-" + H), P && (W = W.concat(W.map(vr)))), W;
    }(r, g, p, $));
    const k = [r, ..._], S = await ef(n, y), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && N.push(S[x]), u) {
      const { main: O, cross: P } = cf(e, o, $);
      N.push(S[O], S[P]);
    }
    if (L = [...L, { placement: e, overflows: N }], !N.every((O) => O <= 0)) {
      var I;
      const O = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, P = k[O];
      if (P)
        return { data: { index: O, overflows: L }, reset: { placement: P } };
      let M = "bottom";
      switch (f) {
        case "bestFit": {
          var D;
          const E = (D = L.map((H) => [H, H.overflows.filter((W) => W > 0).reduce((W, B) => W + B, 0)]).sort((H, W) => H[1] - W[1])[0]) == null ? void 0 : D[0].placement;
          E && (M = E);
          break;
        }
        case "initialPlacement":
          M = r;
      }
      if (e !== M)
        return { reset: { placement: M } };
    }
    return {};
  } };
}, df = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(n) {
    const { x: t, y: e } = n, i = await async function(o, r) {
      const { placement: l, platform: a, elements: h } = o, u = await (a.isRTL == null ? void 0 : a.isRTL(h.floating)), c = Xe(l), f = ni(l), p = lr(l) === "x", g = ["left", "top"].includes(c) ? -1 : 1, y = u && p ? -1 : 1, x = typeof r == "function" ? r(o) : r;
      let { mainAxis: w, crossAxis: $, alignmentAxis: _ } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return f && typeof _ == "number" && ($ = f === "end" ? -1 * _ : _), p ? { x: $ * y, y: w * g } : { x: w * g, y: $ * y };
    }(n, s);
    return { x: t + i.x, y: e + i.y, data: i };
  } };
};
function ct(s) {
  var n;
  return ((n = s.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Tt(s) {
  return ct(s).getComputedStyle(s);
}
function he(s) {
  return Zc(s) ? (s.nodeName || "").toLowerCase() : "";
}
let ai;
function Jc() {
  if (ai)
    return ai;
  const s = navigator.userAgentData;
  return s && Array.isArray(s.brands) ? (ai = s.brands.map((n) => n.brand + "/" + n.version).join(" "), ai) : navigator.userAgent;
}
function Ft(s) {
  return s instanceof ct(s).HTMLElement;
}
function dt(s) {
  return s instanceof ct(s).Element;
}
function Zc(s) {
  return s instanceof ct(s).Node;
}
function xa(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ct(s).ShadowRoot || s instanceof ShadowRoot;
}
function ar(s) {
  const { overflow: n, overflowX: t, overflowY: e, display: i } = Tt(s);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + t) && !["inline", "contents"].includes(i);
}
function ff(s) {
  return ["table", "td", "th"].includes(he(s));
}
function jr(s) {
  const n = /firefox/i.test(Jc()), t = Tt(s), e = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!e && e !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Qc() {
  return !/^((?!chrome|android).)*safari/i.test(Jc());
}
function Cl(s) {
  return ["html", "body", "#document"].includes(he(s));
}
const Ca = Math.min, Hn = Math.max, Ai = Math.round;
function th(s) {
  const n = Tt(s);
  let t = parseFloat(n.width), e = parseFloat(n.height);
  const i = s.offsetWidth, o = s.offsetHeight, r = Ai(t) !== i || Ai(e) !== o;
  return r && (t = i, e = o), { width: t, height: e, fallback: r };
}
function eh(s) {
  return dt(s) ? s : s.contextElement;
}
const nh = { x: 1, y: 1 };
function Je(s) {
  const n = eh(s);
  if (!Ft(n))
    return nh;
  const t = n.getBoundingClientRect(), { width: e, height: i, fallback: o } = th(n);
  let r = (o ? Ai(t.width) : t.width) / e, l = (o ? Ai(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), l && Number.isFinite(l) || (l = 1), { x: r, y: l };
}
function ze(s, n, t, e) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = s.getBoundingClientRect(), l = eh(s);
  let a = nh;
  n && (e ? dt(e) && (a = Je(e)) : a = Je(s));
  const h = l ? ct(l) : window, u = !Qc() && t;
  let c = (r.left + (u && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / a.x, f = (r.top + (u && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / a.y, p = r.width / a.x, g = r.height / a.y;
  if (l) {
    const y = ct(l), x = e && dt(e) ? ct(e) : e;
    let w = y.frameElement;
    for (; w && e && x !== y; ) {
      const $ = Je(w), _ = w.getBoundingClientRect(), k = getComputedStyle(w);
      _.x += (w.clientLeft + parseFloat(k.paddingLeft)) * $.x, _.y += (w.clientTop + parseFloat(k.paddingTop)) * $.y, c *= $.x, f *= $.y, p *= $.x, g *= $.y, c += _.x, f += _.y, w = ct(w).frameElement;
    }
  }
  return { width: p, height: g, top: f, right: c + p, bottom: f + g, left: c, x: c, y: f };
}
function oe(s) {
  return ((Zc(s) ? s.ownerDocument : s.document) || window.document).documentElement;
}
function cr(s) {
  return dt(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function sh(s) {
  return ze(oe(s)).left + cr(s).scrollLeft;
}
function pf(s, n, t) {
  const e = Ft(n), i = oe(n), o = ze(s, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (e || !e && t !== "fixed")
    if ((he(n) !== "body" || ar(i)) && (r = cr(n)), Ft(n)) {
      const a = ze(n, !0);
      l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
    } else
      i && (l.x = sh(i));
  return { x: o.left + r.scrollLeft - l.x, y: o.top + r.scrollTop - l.y, width: o.width, height: o.height };
}
function qn(s) {
  if (he(s) === "html")
    return s;
  const n = s.assignedSlot || s.parentNode || (xa(s) ? s.host : null) || oe(s);
  return xa(n) ? n.host : n;
}
function $a(s) {
  return Ft(s) && Tt(s).position !== "fixed" ? s.offsetParent : null;
}
function _a(s) {
  const n = ct(s);
  let t = $a(s);
  for (; t && ff(t) && Tt(t).position === "static"; )
    t = $a(t);
  return t && (he(t) === "html" || he(t) === "body" && Tt(t).position === "static" && !jr(t)) ? n : t || function(e) {
    let i = qn(e);
    for (; Ft(i) && !Cl(i); ) {
      if (jr(i))
        return i;
      i = qn(i);
    }
    return null;
  }(s) || n;
}
function ih(s) {
  const n = qn(s);
  return Cl(n) ? s.ownerDocument.body : Ft(n) && ar(n) ? n : ih(n);
}
function Wn(s, n) {
  var t;
  n === void 0 && (n = []);
  const e = ih(s), i = e === ((t = s.ownerDocument) == null ? void 0 : t.body), o = ct(e);
  return i ? n.concat(o, o.visualViewport || [], ar(e) ? e : []) : n.concat(e, Wn(e));
}
function Sa(s, n, t) {
  return n === "viewport" ? Mi(function(e, i) {
    const o = ct(e), r = oe(e), l = o.visualViewport;
    let a = r.clientWidth, h = r.clientHeight, u = 0, c = 0;
    if (l) {
      a = l.width, h = l.height;
      const f = Qc();
      (f || !f && i === "fixed") && (u = l.offsetLeft, c = l.offsetTop);
    }
    return { width: a, height: h, x: u, y: c };
  }(s, t)) : dt(n) ? function(e, i) {
    const o = ze(e, !0, i === "fixed"), r = o.top + e.clientTop, l = o.left + e.clientLeft, a = Ft(e) ? Je(e) : { x: 1, y: 1 }, h = e.clientWidth * a.x, u = e.clientHeight * a.y, c = l * a.x, f = r * a.y;
    return { top: f, left: c, right: c + h, bottom: f + u, x: c, y: f, width: h, height: u };
  }(n, t) : Mi(function(e) {
    var i;
    const o = oe(e), r = cr(e), l = (i = e.ownerDocument) == null ? void 0 : i.body, a = Hn(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), h = Hn(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let u = -r.scrollLeft + sh(e);
    const c = -r.scrollTop;
    return Tt(l || o).direction === "rtl" && (u += Hn(o.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: h, x: u, y: c };
  }(oe(s)));
}
const mf = { getClippingRect: function(s) {
  let { element: n, boundary: t, rootBoundary: e, strategy: i } = s;
  const o = t === "clippingAncestors" ? function(h, u) {
    const c = u.get(h);
    if (c)
      return c;
    let f = Wn(h).filter((x) => dt(x) && he(x) !== "body"), p = null;
    const g = Tt(h).position === "fixed";
    let y = g ? qn(h) : h;
    for (; dt(y) && !Cl(y); ) {
      const x = Tt(y), w = jr(y);
      (g ? w || p : w || x.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = x : f = f.filter(($) => $ !== y), y = qn(y);
    }
    return u.set(h, f), f;
  }(n, this._c) : [].concat(t), r = [...o, e], l = r[0], a = r.reduce((h, u) => {
    const c = Sa(n, u, i);
    return h.top = Hn(c.top, h.top), h.right = Ca(c.right, h.right), h.bottom = Ca(c.bottom, h.bottom), h.left = Hn(c.left, h.left), h;
  }, Sa(n, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: n, offsetParent: t, strategy: e } = s;
  const i = Ft(t), o = oe(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const a = { x: 0, y: 0 };
  if ((i || !i && e !== "fixed") && ((he(t) !== "body" || ar(o)) && (r = cr(t)), Ft(t))) {
    const h = ze(t);
    l = Je(t), a.x = h.x + t.clientLeft, a.y = h.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - r.scrollLeft * l.x + a.x, y: n.y * l.y - r.scrollTop * l.y + a.y };
}, isElement: dt, getDimensions: function(s) {
  return th(s);
}, getOffsetParent: _a, getDocumentElement: oe, getScale: Je, async getElementRects(s) {
  let { reference: n, floating: t, strategy: e } = s;
  const i = this.getOffsetParent || _a, o = this.getDimensions;
  return { reference: pf(n, await i(t), e), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (s) => Array.from(s.getClientRects()), isRTL: (s) => Tt(s).direction === "rtl" };
function gf(s, n, t, e) {
  e === void 0 && (e = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: l = !1 } = e, a = i && !l, h = a || o ? [...dt(s) ? Wn(s) : s.contextElement ? Wn(s.contextElement) : [], ...Wn(n)] : [];
  h.forEach((p) => {
    a && p.addEventListener("scroll", t, { passive: !0 }), o && p.addEventListener("resize", t);
  });
  let u, c = null;
  if (r) {
    let p = !0;
    c = new ResizeObserver(() => {
      p || t(), p = !1;
    }), dt(s) && !l && c.observe(s), dt(s) || !s.contextElement || l || c.observe(s.contextElement), c.observe(n);
  }
  let f = l ? ze(s) : null;
  return l && function p() {
    const g = ze(s);
    !f || g.x === f.x && g.y === f.y && g.width === f.width && g.height === f.height || t(), f = g, u = requestAnimationFrame(p);
  }(), t(), () => {
    var p;
    h.forEach((g) => {
      a && g.removeEventListener("scroll", t), o && g.removeEventListener("resize", t);
    }), (p = c) == null || p.disconnect(), c = null, l && cancelAnimationFrame(u);
  };
}
const yf = (s, n, t) => {
  const e = /* @__PURE__ */ new Map(), i = { platform: mf, ...t }, o = { ...i.platform, _c: e };
  return tf(s, n, { ...i, platform: o });
};
var _e, xn, Se, ke, st, Eo, Ds, Ps, Vr, To, oh, No, rh, Mo, lh, Ro, ah, Ao, ch, Lo, hh, Io, uh, Ee, Do, dh;
const lt = class lt extends ft {
  constructor() {
    super(...arguments);
    v(this, Ps);
    v(this, To);
    v(this, No);
    v(this, Mo);
    v(this, Ro);
    v(this, Ao);
    v(this, Lo);
    v(this, Io);
    v(this, Do);
    v(this, _e, void 0);
    v(this, xn, void 0);
    v(this, Se, void 0);
    v(this, ke, void 0);
    v(this, st, void 0);
    v(this, Eo, void 0);
    v(this, Ds, void 0);
    v(this, Ee, void 0);
    C(this, _e, !1), C(this, Se, 0), this.hideLater = () => {
      d(this, Ee).call(this), C(this, Se, window.setTimeout(this.hide.bind(this), 100));
    }, C(this, Ee, () => {
      clearTimeout(d(this, Se)), C(this, Se, 0);
    });
  }
  get isShown() {
    var t;
    return (t = d(this, ke)) == null ? void 0 : t.classList.contains(lt.CLASS_SHOW);
  }
  get tooltip() {
    return d(this, ke) || A(this, No, rh).call(this);
  }
  get trigger() {
    return d(this, Eo) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${lt.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !d(this, _e) && this.isHover && A(this, Do, dh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(lt.CLASS_SHOW), A(this, Lo, hh).call(this), !0;
  }
  hide() {
    var t, e;
    return (t = d(this, Ds)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (e = d(this, ke)) == null || e.classList.remove(lt.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    d(this, _e) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", d(this, Ee)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t = {}) {
    t instanceof Event && (t = { event: t });
    const { exclude: e } = t;
    if (e) {
      const i = this.getAll(), o = new Set(e);
      for (const r of i)
        o.has(r.element) || r.hide();
    }
  }
};
_e = new WeakMap(), xn = new WeakMap(), Se = new WeakMap(), ke = new WeakMap(), st = new WeakMap(), Eo = new WeakMap(), Ds = new WeakMap(), Ps = new WeakSet(), Vr = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, To = new WeakSet(), oh = function() {
  const t = A(this, Ps, Vr).call(this);
  return C(this, st, document.createElement("div")), d(this, st).style.position = this.options.strategy, d(this, st).style.width = `${t}px`, d(this, st).style.height = `${t}px`, d(this, st).style.transform = "rotate(45deg)", d(this, st);
}, No = new WeakSet(), rh = function() {
  var i;
  const t = lt.TOOLTIP_CLASS;
  let e;
  if (this.isDynamic) {
    e = document.createElement("div");
    const o = this.options.className ? this.options.className.split(" ") : [];
    let r = [t, this.options.type || ""];
    r = r.concat(o), e.classList.add(...r), e[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const o = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (o != null && o.startsWith("#") && (e = document.querySelector(o)), !e) {
      const r = this.element.nextElementSibling;
      r != null && r.classList.contains(t) ? e = r : e = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${t}`);
    }
  }
  if (this.options.arrow && (e == null || e.append(A(this, To, oh).call(this))), !e)
    throw new Error("Tooltip: Cannot find tooltip element");
  return e.style.width = "max-content", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", document.body.appendChild(e), C(this, ke, e), e;
}, Mo = new WeakSet(), lh = function() {
  var r;
  const t = A(this, Ps, Vr).call(this), { strategy: e, placement: i } = this.options, o = {
    middleware: [df(t), uf()],
    strategy: e,
    placement: i
  };
  return this.options.arrow && d(this, st) && ((r = o.middleware) == null || r.push(rf({ element: d(this, st) }))), o;
}, Ro = new WeakSet(), ah = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, Ao = new WeakSet(), ch = function(t) {
  return t === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : t === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : t === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
}, Lo = new WeakSet(), hh = function() {
  const t = A(this, Mo, lh).call(this), e = A(this, Io, uh).call(this);
  C(this, Ds, gf(e, this.tooltip, () => {
    this.element && yf(e, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: l }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const a = l.split("-")[0], h = A(this, Ro, ah).call(this, a);
      if (r.arrow && d(this, st)) {
        const { x: u, y: c } = r.arrow;
        Object.assign(d(this, st).style, {
          left: u != null ? `${u}px` : "",
          top: c != null ? `${c}px` : "",
          [h]: `${-d(this, st).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...A(this, Ao, ch).call(this, a)
        });
      }
    });
  }));
}, Io = new WeakSet(), uh = function() {
  return d(this, xn) || C(this, xn, {
    getBoundingClientRect: () => {
      const { element: t } = this;
      if (t instanceof MouseEvent) {
        const { clientX: e, clientY: i } = t;
        return {
          width: 0,
          height: 0,
          top: i,
          right: e,
          bottom: i,
          left: e
        };
      }
      return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
    },
    contextElement: this.element
  }), d(this, xn);
}, Ee = new WeakMap(), Do = new WeakSet(), dh = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", d(this, Ee)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), C(this, _e, !0);
}, lt.NAME = "tooltip", lt.TOOLTIP_CLASS = "tooltip", lt.CLASS_SHOW = "show", lt.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)', lt.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
let Ht = lt;
document.addEventListener("click", function(s) {
  var e;
  const n = s.target, t = (e = n.closest) == null ? void 0 : e.call(n, Ht.MENU_SELECTOR);
  if (t) {
    const i = Ht.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    Ht.clear({ event: s });
});
document.addEventListener("mouseover", function(s) {
  var i;
  const n = s.target, t = (i = n.closest) == null ? void 0 : i.call(n, Ht.MENU_SELECTOR);
  if (!t)
    return;
  const e = Ht.ensure(t);
  e.isHover && e.show();
});
function bf({
  type: s,
  component: n,
  className: t,
  children: e,
  content: i,
  style: o,
  attrs: r,
  url: l,
  disabled: a,
  active: h,
  icon: u,
  text: c,
  target: f,
  trailingIcon: p,
  hint: g,
  checked: y,
  actions: x,
  show: w,
  level: $ = 0,
  items: _,
  ...k
}) {
  const S = Array.isArray(x) ? { items: x } : x;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = R("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ m(
    "div",
    {
      className: R("tree-item-content", t, { disabled: a, active: h }),
      title: g,
      "data-target": f,
      style: Object.assign({ paddingLeft: `calc(${$} * var(--tree-indent, 20px))` }, o),
      "data-level": $,
      ...r,
      ...k,
      children: [
        /* @__PURE__ */ m("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ m("span", { class: `caret-${w ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ m("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
        /* @__PURE__ */ m(et, { icon: u, className: "tree-icon" }),
        l ? /* @__PURE__ */ m("a", { className: "text tree-link not-nested-toggle", href: l, children: c }) : /* @__PURE__ */ m("span", { class: "text", children: c }),
        /* @__PURE__ */ m(Js, { content: i }),
        e,
        S ? /* @__PURE__ */ m(ce, { ...S }) : null,
        /* @__PURE__ */ m(et, { icon: p, className: "tree-trailing-icon" })
      ]
    }
  );
}
var An;
let wf = (An = class extends ml {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(n) {
    const t = super.getNestedMenuProps(n), { collapsedIcon: e, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: e,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...t
    };
  }
  getItemRenderProps(n, t, e) {
    const i = super.getItemRenderProps(n, t, e), { collapsedIcon: o, expandedIcon: r, normalIcon: l, itemActions: a } = n;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : l), i.actions === void 0 && a && (i.actions = typeof a == "function" ? a(t) : a), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const n = super.beforeRender(), { hover: t } = this.props;
    return t && (n.className = R(n.className, "tree-hover")), n;
  }
}, An.ItemComponents = {
  item: bf
}, An.NAME = "tree", An);
const Po = class Po extends j {
};
Po.NAME = "Tree", Po.Component = wf;
let ka = Po;
const El = class El extends ft {
  init() {
    const { multiple: n, defaultFileList: t, limitSize: e } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = e ? Ru(e) : Number.MAX_VALUE, this.currentBytes = 0, n || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
  }
  initUploadCash() {
    const { name: n, uploadText: t, uploadIcon: e, listPosition: i, btnClass: o, tip: r, draggable: l } = this.options;
    this.$list = b('<ul class="file-list py-1"></ul>');
    const a = b(`<span class="upload-tip">${r}</span>`);
    if (!l) {
      if (this.$label = b(`<label class="btn ${o}" for="${n}">${t}</label>`), e) {
        const f = b(`<i class="icon icon-${e}"></i>`);
        this.$label.prepend(f);
      }
      const c = i === "bottom" ? [this.$label, a, this.$list] : [this.$list, this.$label, a];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = b(`<span class="text-primary">${t}</span>`);
    if (e) {
      const c = b(`<i class="icon icon-${e} mr-1"></i>`);
      h.prepend(c);
    }
    this.$label = b(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${n}"></label>`).append(h).append(a), this.bindDragEvent();
    const u = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...u);
  }
  bindDragEvent() {
    this.$label.on("dragover", (n) => {
      n.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (n) => {
      n.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (n) => {
      var e;
      n.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const t = Array.from(((e = n.dataTransfer) == null ? void 0 : e.files) ?? []);
      console.log(n.dataTransfer.files), this.addFileItem(t);
    });
  }
  initFileInputCash() {
    const { name: n, multiple: t, accept: e } = this.options;
    this.$input = b("<input />").addClass("hidden").prop("type", "file").prop("name", n).prop("id", n).prop("multiple", t).on("change", (i) => {
      const o = i.target.files;
      if (!o)
        return;
      const r = [...o];
      this.addFileItem(r);
    }), e && this.$input.prop("accept", e);
  }
  addFile(n) {
    const { multiple: t, onSizeChange: e } = this.options;
    t || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = n.size), this.renameMap.set(n.name, n.name), this.fileMap.set(n.name, n), this.dataTransfer.items.add(n), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += n.size, e == null || e(this.currentBytes);
  }
  renameDuplicatedFile(n) {
    if (!this.fileMap.has(n.name))
      return n;
    const t = n.name.lastIndexOf(".");
    if (t === -1)
      return this.renameDuplicatedFile(new File([n], `${n.name}(1)`));
    const e = n.name.substring(0, t), i = n.name.substring(t);
    return this.renameDuplicatedFile(new File([n], `${e}(1)${i}`));
  }
  filterFiles(n) {
    const { accept: t } = this.options;
    if (!t)
      return n;
    const e = t.replace(/\s/g, "").split(","), i = [], o = [], r = [];
    return e.forEach((l) => {
      l.endsWith("/*") ? o.push(l.substring(0, l.length - 1)) : l.includes("/") ? i.push(l) : l.startsWith(".") && r.push(l);
    }), n.filter((l) => i.includes(l.type) || o.some((a) => l.type.startsWith(a)) || r.some((a) => l.name.endsWith(a)));
  }
  addFileItem(n) {
    n = this.filterFiles(n);
    const { multiple: t, limitCount: e, exceededSizeHint: i, exceededCountHint: o, onAdd: r } = this.options;
    if (t) {
      const h = [];
      for (let u of n) {
        if (e && this.fileMap.size >= e)
          return r == null || r(h), alert(o);
        if (this.currentBytes + u.size > this.limitBytes)
          return r == null || r(h), alert(i);
        u = this.renameDuplicatedFile(u);
        const c = this.createFileItem(u);
        this.itemMap.set(u.name, c), this.$list.append(c), h.push(u);
      }
      r == null || r(h);
      return;
    }
    if (n[0].size > this.limitBytes)
      return;
    const l = this.renameDuplicatedFile(n[0]), a = this.createFileItem(l);
    this.itemMap.clear(), this.itemMap.set(l.name, a), this.$list.empty().append(a), r == null || r(l);
  }
  deleteFileItem(n) {
    var a;
    const t = this.renameMap.get(n) ?? n;
    this.renameMap.delete(n);
    const e = this.fileMap.get(t);
    if (!e)
      return;
    const { onDelete: i, onSizeChange: o } = this.options, r = this.itemMap.get(e.name);
    this.itemMap.delete(e.name), r == null || r.addClass("hidden");
    const l = (a = r == null ? void 0 : r.find(".file-delete")) == null ? void 0 : a.data("tooltip");
    l && (l.destroy(), l.tooltip.remove()), setTimeout(() => r == null ? void 0 : r.remove(), 3e3), i == null || i(e), this.fileMap.delete(e.name), this.currentBytes -= e.size, o == null || o(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(n, t) {
    var o, r;
    const e = this.renameMap.get(n.name);
    this.renameMap.set(n.name, t), e && (n = this.fileMap.get(e) ?? n);
    const i = this.itemMap.get(n.name);
    i && (this.itemMap.set(t, i).delete(n.name), (r = (o = this.options).onRename) == null || r.call(o, t, n.name), this.fileMap.delete(n.name), this.dataTransfer = new DataTransfer(), n = new File([n], t), this.fileMap.set(t, n).forEach((l) => this.dataTransfer.items.add(l)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(n) {
    const { showIcon: t } = this.options;
    return this.addFile(n), b('<li class="file-item my-1 flex items-center gap-2"></li>').append(t ? this.fileIcon() : null).append(this.createFileInfo(n)).append(this.createRenameContainer(n));
  }
  fileIcon() {
    const { icon: n } = this.options;
    return b(`<i class="icon icon-${n}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: n, renameText: t, renameIcon: e, renameClass: i } = this.options;
    if (n) {
      const o = b(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${e}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Ht(o, { title: t }), o;
    }
    return b("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn() {
    const { useIconBtn: n, deleteText: t, deleteIcon: e, deleteClass: i } = this.options;
    if (n) {
      const o = b(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${e}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Ht(o, { title: t })), o;
    }
    return b("<button />").html(t).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(n) {
    return b(`<span class="file-name">${n}</span>`);
  }
  fileSize(n) {
    return b(`<span class="file-size text-gray">${Mu(n)}</span>`);
  }
  createFileInfo(n) {
    const { renameBtn: t, deleteBtn: e, showSize: i } = this.options, o = b('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(n.name)), i && o.append(this.fileSize(n.size)), t && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const l = b(r.target).closest("li").find("input")[0];
        l.focus(), l.value.lastIndexOf(".") !== -1 && l.setSelectionRange(0, l.value.lastIndexOf("."));
      })
    ), e && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(n.name))
    ), o;
  }
  createRenameContainer(n) {
    const { confirmText: t, cancelText: e, duplicatedHint: i } = this.options, o = b('<div class="input-group input-rename-container hidden"></div>'), r = b("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", n.name).on("keydown", (u) => {
      if (u.key === "Enter") {
        const c = o.closest(".file-item"), f = c.find(".file-name");
        if (f.html() === r.val()) {
          o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(n, r.val()), o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), f.html(r.val());
      } else
        u.key === "Escape" && (r.val(n.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), l = b("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(t).on("click", () => {
      const u = o.closest(".file-item"), c = u.find(".file-name");
      if (c.html() === r.val()) {
        o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(n, r.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), c.html(r.val());
    }), a = b("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(e).on("click", () => {
      r.val(n.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = b('<div class="btn-group"></div').append(l).append(a);
    return o.append(r).append(h);
  }
};
El.DEFAULT = {
  uploadText: "上传文件",
  confirmText: "确定",
  cancelText: "取消",
  useIconBtn: !0,
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  renameClass: "",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "",
  showIcon: !0,
  multiple: !0,
  listPosition: "bottom",
  limitSize: !1,
  icon: "file-o",
  btnClass: "",
  tip: "",
  draggable: !1,
  showSize: !0
};
let Ur = El;
const Tl = class Tl extends Ur {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = b(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(b('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: n, tip: t, uploadText: e, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = b('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = b('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = b(`<label for="${n}" class="text-primary cursor-pointer">${e}</label>`);
    if (i) {
      const l = b(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(l);
    }
    this.$tip = b('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), t && this.$tip.append(b(`<span class="upload-tip">${t}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = b('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(n) {
    const { accept: t } = this.options;
    if (t === "image/*")
      return n.filter((i) => i.type.includes("image"));
    const e = t.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return n.filter((i) => e.includes(i.type));
  }
  createFileItem(n) {
    const t = super.createFileItem(n).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(n, t);
    const { deleteBtn: e, showSize: i } = this.options;
    return e && t.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(n.name))
    ), i && t.append(
      this.fileSize(n.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), t;
  }
  setImageUrl(n, t) {
    const e = new FileReader();
    e.onload = () => {
      b('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${e.result})` }).prependTo(t);
    }, e.readAsDataURL(n);
  }
  createFileInfo(n) {
    const t = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = b(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return b('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(b(`<div class="file-name py-1 ellipsis">${n.name}</div>`)).append(t);
  }
  createRenameContainer(n) {
    const { duplicatedHint: t } = this.options, e = b("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", n.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const o = e.closest(".file-item").find(".file-name");
        if (o.html() === e.val()) {
          e.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(e.val()))
          return alert(t);
        this.renameFileItem(n, e.val()), e.addClass("hidden"), o.html(e.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && e.val(n.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = e.closest(".file-item").find(".file-name");
      if (i.html() === e.val()) {
        e.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(e.val()))
        return alert(t);
      this.renameFileItem(n, e.val()), e.addClass("hidden"), i.html(e.val()).closest(".file-info").removeClass("hidden");
    });
    return e;
  }
};
Tl.DEFAULT = {
  uploadText: "添加文件",
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  renameClass: "",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "",
  showIcon: !1,
  multiple: !0,
  limitSize: !1,
  btnClass: "",
  draggable: !0,
  accept: "image/jpg, image/jpeg, image/gif, image/png",
  showSize: !0,
  useIconBtn: !0,
  totalCountText: '共 <span class="font-bold text-black">%s</span> 个文件 <span class="font-bold text-black">%s</span> 个文件等待上传。'
};
let Ea = Tl;
const ci = "Dashboard:Block.cache:";
var Cn, Os, Hs, Ws, Pa;
let vf = (Pa = class extends z {
  constructor() {
    super(...arguments);
    v(this, Cn, void 0);
    v(this, Os, void 0);
    v(this, Hs, void 0);
    v(this, Ws, void 0);
    C(this, Cn, U()), this.load = () => {
      const { block: t, cache: e } = this.props;
      let i = t.fetch;
      if (!i || this.state.loading)
        return;
      typeof i == "string" ? i = { url: i } : typeof i == "function" && (i = i(t.id, t));
      const { url: o, ...r } = i, l = { loading: !0, url: o };
      if (e) {
        const a = typeof e == "string" ? On.get(`${ci}${e}:${o}`) : On.session.get(`${ci}${o}`);
        a && (l.content = /* @__PURE__ */ m(Nn, { class: "dashboard-block-body", html: a, executeScript: !0 }));
      }
      this.setState(l, () => {
        fetch(Z(o, t), {
          headers: { "X-Requested-With": "XMLHttpRequest" },
          ...r
        }).then((a) => {
          a.ok ? a.text().then((h) => {
            this.setState({ loading: !1, content: /* @__PURE__ */ m(Nn, { class: "dashboard-block-body", html: h, executeScript: !0 }) }, () => {
              e && (typeof e == "string" ? On.set(`${ci}${e}:${o}`, h) : On.session.set(`${ci}${o}`, h));
            });
          }) : this.setState({ loading: !1, content: /* @__PURE__ */ m("div", { className: "dashboard-block-body", children: /* @__PURE__ */ m("div", { class: "panel center text-danger p-5 text-center", children: [
            "Error: ",
            a.statusText
          ] }) }) });
        });
      });
    }, C(this, Os, (t) => {
      t.stopPropagation(), at.show({
        event: t.target,
        placement: "bottom-end",
        menu: {
          onClickItem: ({ item: e }) => {
            var i;
            ((i = e.attrs) == null ? void 0 : i["data-type"]) === "refresh" && this.load();
          }
        },
        ...this.props.block.menu
      });
    }), C(this, Hs, (t) => {
      var o, r, l;
      const { element: e } = this, i = e.getBoundingClientRect();
      if (t.clientY - i.top > 48) {
        t.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = t.dataTransfer) == null || o.setData("application/id", this.props.block.id), (l = (r = this.props).onDragStart) == null || l.call(r, t);
    }), C(this, Ws, (t) => {
      var e, i;
      this.setState({ dragging: !1 }), (i = (e = this.props).onDragEnd) == null || i.call(e, t);
    });
  }
  get element() {
    return d(this, Cn).current;
  }
  componentDidMount() {
    this.load(), b(this.element).on("load.zui.dashboard", this.load);
  }
  componentWillUnmount() {
    b(this.element).off("load.zui.dashboard");
  }
  render() {
    const { left: t, top: e, width: i, height: o, style: r, block: l } = this.props, { title: a, menu: h, id: u, content: c } = l, { loading: f, dragging: p, url: g } = this.state;
    let { content: y } = this.state;
    return y === void 0 && b.isPlainObject(c) && c.html && (y = /* @__PURE__ */ m("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: c.html } })), /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: i, height: o, ...r }, children: /* @__PURE__ */ m(
      "div",
      {
        class: `dashboard-block load-indicator${f && !y ? " loading" : ""}${h ? " has-more-menu" : ""}${p ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: d(this, Hs),
        onDragEnd: d(this, Ws),
        "data-id": u,
        "data-url": g,
        ref: d(this, Cn),
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: a }),
            h ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: d(this, Os), children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
          ] }),
          y
        ]
      }
    ) });
  }
}, Cn = new WeakMap(), Os = new WeakMap(), Hs = new WeakMap(), Ws = new WeakMap(), Pa);
var ht, Oo, fh, Ho, ph, Wo, mh, zo, gh, zs, qr, Bs, Yr, Bo, yh, Fs, js, Vs, re, Kr;
let xf = (re = class extends z {
  constructor() {
    super(...arguments);
    v(this, Oo);
    v(this, Ho);
    v(this, Wo);
    v(this, zo);
    v(this, zs);
    v(this, Bs);
    v(this, Bo);
    v(this, ht, void 0);
    v(this, Fs, void 0);
    v(this, js, void 0);
    C(this, ht, /* @__PURE__ */ new Map()), this.state = {}, C(this, Fs, (t) => {
      var i;
      const e = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      e !== void 0 && (this.setState({ dragging: e }), console.log("handleBlockDragStart", t));
    }), C(this, js, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: e } = A(this, Wo, mh).call(this), { cellHeight: i, grid: o, cache: r } = this.props, l = d(this, ht);
    return /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: e * i }, children: t.map((a, h) => {
      const { id: u } = a, [c, f, p, g] = l.get(u) || [0, 0, a.width, a.height];
      return /* @__PURE__ */ m(
        vf,
        {
          id: u,
          index: h,
          left: `${100 * c / o}%`,
          top: i * f,
          height: i * g,
          width: `${100 * p / o}%`,
          block: a,
          cache: r,
          moreMenu: !0,
          onDragStart: d(this, Fs),
          onDragEnd: d(this, js)
        },
        a.id
      );
    }) }) });
  }
}, ht = new WeakMap(), Oo = new WeakSet(), fh = function(t) {
  const { blockDefaultSize: e, blockSizeMap: i } = this.props;
  return t = t ?? e, typeof t == "string" && (t = i[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
}, Ho = new WeakSet(), ph = function() {
  const { blocks: t, blockFetch: e, blockMenu: i } = this.props;
  return t.map((r) => {
    const {
      id: l,
      size: a,
      left: h = -1,
      top: u = -1,
      fetch: c = e,
      menu: f = i,
      ...p
    } = r, [g, y] = A(this, Oo, fh).call(this, a);
    return {
      id: `${l}`,
      width: g,
      height: y,
      left: h,
      top: u,
      fetch: c,
      menu: f,
      ...p
    };
  });
}, Wo = new WeakSet(), mh = function() {
  d(this, ht).clear();
  let t = 0;
  const e = A(this, Ho, ph).call(this);
  return e.forEach((i) => {
    A(this, zo, gh).call(this, i);
    const [, o, , r] = d(this, ht).get(i.id);
    t = Math.max(t, o + r);
  }), { blocks: e, height: t };
}, zo = new WeakSet(), gh = function(t) {
  const e = d(this, ht), { id: i, left: o, top: r, width: l, height: a } = t;
  if (o < 0 || r < 0) {
    const [h, u] = A(this, Bo, yh).call(this, l, a, o, r);
    e.set(i, [h, u, l, a]);
  } else
    A(this, Bs, Yr).call(this, i, [o, r, l, a]);
}, zs = new WeakSet(), qr = function(t) {
  var i;
  const { dragging: e } = this.state;
  for (const [o, r] of d(this, ht).entries())
    if (o !== e && A(i = re, Vs, Kr).call(i, r, t))
      return !1;
  return !0;
}, Bs = new WeakSet(), Yr = function(t, e) {
  var i;
  d(this, ht).set(t, e);
  for (const [o, r] of d(this, ht).entries())
    o !== t && A(i = re, Vs, Kr).call(i, r, e) && (r[1] = e[1] + e[3], A(this, Bs, Yr).call(this, o, r));
}, Bo = new WeakSet(), yh = function(t, e, i, o) {
  if (i >= 0 && o >= 0) {
    if (A(this, zs, qr).call(this, [i, o, t, e]))
      return [i, o];
    o = -1;
  }
  let r = i < 0 ? 0 : i, l = o < 0 ? 0 : o, a = !1;
  const h = this.props.grid;
  for (; !a; ) {
    if (A(this, zs, qr).call(this, [r, l, t, e])) {
      a = !0;
      break;
    }
    i < 0 ? (r += 1, r + t > h && (r = 0, l += 1)) : l += 1;
  }
  return [r, l];
}, Fs = new WeakMap(), js = new WeakMap(), Vs = new WeakSet(), Kr = function([t, e, i, o], [r, l, a, h]) {
  return !(t + i <= r || r + a <= t || e + o <= l || l + h <= e);
}, v(re, Vs), re.defaultProps = {
  responsive: !1,
  cache: !0,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", attrs: { "data-type": "refresh" } }] },
  blockSizeMap: {
    xs: [1, 3],
    sm: [1, 4],
    md: [1, 5],
    lg: [1, 6],
    xl: [1, 8],
    xsWide: [2, 3],
    smWide: [2, 4],
    mdWide: [2, 5],
    lgWide: [2, 6],
    xlWide: [2, 8],
    xsLong: [3, 3],
    smLong: [3, 4],
    mdLong: [3, 5],
    lgLong: [3, 6],
    xlLong: [3, 8]
  }
}, re);
const Fo = class Fo extends j {
};
Fo.NAME = "Dashboard", Fo.Component = xf;
let Ta = Fo;
var Zt, Qt;
class Na extends z {
  constructor(t) {
    super(t);
    v(this, Zt, void 0);
    v(this, Qt, void 0);
    C(this, Zt, 0), C(this, Qt, null), this._handleWheel = (e) => {
      const { wheelContainer: i } = this.props, o = e.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? e.deltaX : e.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && e.preventDefault();
      }
    }, this._handleMouseMove = (e) => {
      const { dragStart: i } = this.state;
      i && (d(this, Zt) && cancelAnimationFrame(d(this, Zt)), C(this, Zt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - i.x : e.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), C(this, Zt, 0);
      })), e.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    }, this._handleClick = (e) => {
      const i = e.currentTarget;
      if (!i)
        return;
      const o = i.getBoundingClientRect(), { type: r, clientSize: l, scrollSize: a } = this.props, h = (r === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(h * a / l), e.preventDefault();
    }, this.state = {
      scrollPos: this.props.defaultScrollPos ?? 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    return this.props.scrollPos ?? this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: t, clientSize: e } = this.props;
    return Math.max(0, t - e);
  }
  get barSize() {
    const { clientSize: t, scrollSize: e, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(t * t / e), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (C(this, Qt, typeof t == "string" ? document : t.current), d(this, Qt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, Qt) && d(this, Qt).removeEventListener("wheel", this._handleWheel);
  }
  scroll(t) {
    return t = Math.max(0, Math.min(Math.round(t), this.maxScrollPos)), t === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(t) : this.setState({
      scrollPos: t
    }, this._afterScroll.bind(this, t)), !0);
  }
  scrollOffset(t) {
    return this.scroll(this.scrollPos + t);
  }
  _afterScroll(t) {
    const { onScroll: e } = this.props;
    e && e(t, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: t,
      type: e,
      size: i = 12,
      className: o,
      style: r,
      left: l,
      top: a,
      bottom: h,
      right: u
    } = this.props, { maxScrollPos: c, scrollPos: f } = this, { dragStart: p } = this.state, g = {
      left: l,
      top: a,
      bottom: h,
      right: u,
      ...r
    }, y = {};
    return e === "horz" ? (g.height = i, g.width = t, y.width = this.barSize, y.left = Math.round(Math.min(c, f) * (t - y.width) / c)) : (g.width = i, g.height = t, y.height = this.barSize, y.top = Math.round(Math.min(c, f) * (t - y.height) / c)), /* @__PURE__ */ m(
      "div",
      {
        className: R("scrollbar", o, {
          "is-vert": e === "vert",
          "is-horz": e === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
          "div",
          {
            className: "scrollbar-bar",
            style: y,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
Zt = new WeakMap(), Qt = new WeakMap();
const Li = /* @__PURE__ */ new Map(), Ii = [];
function bh(s, n) {
  const { name: t } = s;
  if (!(n != null && n.override) && Li.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Li.set(t, s), n != null && n.buildIn && !Ii.includes(t) && Ii.push(t);
}
function Vt(s, n) {
  bh(s, n);
  const t = (e) => {
    if (!e)
      return s;
    const { defaultOptions: i, ...o } = s;
    return {
      ...o,
      defaultOptions: { ...i, ...e }
    };
  };
  return t.plugin = s, t;
}
function wh(s) {
  return Li.delete(s);
}
function Cf(s) {
  if (typeof s == "string") {
    const n = Li.get(s);
    return n || console.warn(`DTable: Cannot found plugin "${s}"`), n;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function vh(s, n, t) {
  return n.forEach((e) => {
    var o;
    if (!e)
      return;
    const i = Cf(e);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && vh(s, i.plugins, t), s.push(i), t.add(i.name)));
  }), s;
}
function $f(s = [], n = !0) {
  return n && Ii.length && s.unshift(...Ii), s != null && s.length ? vh([], s, /* @__PURE__ */ new Set()) : [];
}
function Ma() {
  return {
    cols: [],
    data: [],
    rowKey: "id",
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 20,
    maxColWidth: 9999,
    header: !0,
    footer: void 0,
    headerHeight: 0,
    footerHeight: 0,
    rowHover: !0,
    colHover: !1,
    cellHover: !1,
    bordered: !1,
    striped: !0,
    responsive: !1,
    scrollbarHover: !0,
    horzScrollbarPos: "outside"
  };
}
function _f(s, n, t) {
  return s && (n && (s = Math.max(n, s)), t && (s = Math.min(t, s))), s;
}
function Ra(s, n) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof n == "number" && (typeof s != "number" || isNaN(s)) && (s = n), s;
}
function xr(s, n = !1) {
  if (!s.list.length)
    return;
  if (s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const e = s.width - s.totalWidth;
    if (!n && e > 0 || n && e !== 0) {
      const i = s.flexList.length ? s.flexList : s.list, o = i.reduce((r, l) => r + (l.flex || 1), 0);
      i.forEach((r) => {
        const l = Math[e < 0 ? "max" : "min"](e, Math.ceil(e * ((r.flex || 1) / o)));
        r.realWidth = r.width + l;
      });
    }
  }
  let t = 0;
  s.list.forEach((e) => {
    e.realWidth || (e.realWidth = e.width), e.left = t, t += e.realWidth;
  });
}
function Sf(s, n, t, e) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: l = 0, fixedRightWidth: a = 0 } = n, h = ($) => (typeof $ == "function" && ($ = $.call(s)), $ = Ra($, 0), $ < 1 && ($ = Math.round($ * e)), $), u = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, c = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, f = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, p = [], g = {};
  let y = !1;
  const x = [], w = {};
  if (t.forEach(($) => {
    const { colTypes: _, onAddCol: k } = $;
    _ && Object.entries(_).forEach(([S, N]) => {
      w[S] || (w[S] = []), w[S].push(N);
    }), k && x.push(k);
  }), n.cols.forEach(($) => {
    if ($.hidden)
      return;
    const { type: _ = "", name: k } = $, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...$,
      type: _
    }, N = {
      name: k,
      type: _,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, L = w[_];
    L && L.forEach((H) => {
      const W = typeof H == "function" ? H.call(s, S) : H;
      W && Object.assign(S, W, $);
    });
    const { fixed: I, flex: D, minWidth: O = o, maxWidth: P = r } = S, M = Ra(S.width || i, i);
    N.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, N.width = _f(M < 1 ? Math.round(M * e) : M, O, P), x.forEach((H) => H.call(s, N)), p.push(N), g[N.name] = N;
    const E = I ? I === "left" ? c : f : u;
    E.list.push(N), E.totalWidth += N.width, E.width = E.totalWidth, N.flex && E.flexList.push(N), typeof S.order == "number" && (y = !0);
  }), y) {
    const $ = (_, k) => (_.setting.order ?? 0) - (k.setting.order ?? 0);
    p.sort($), c.list.sort($), u.list.sort($), f.list.sort($);
  }
  return xr(c, !0), xr(f, !0), u.widthSetting = e - c.width - f.width, xr(u), {
    list: p,
    map: g,
    left: c,
    center: u,
    right: f
  };
}
function kf({ col: s, className: n, height: t, row: e, onRenderCell: i, style: o, outerStyle: r, children: l, outerClass: a, width: h, left: u, top: c, ...f }) {
  var M;
  const p = {
    left: u ?? s.left,
    top: c ?? e.top,
    width: h ?? s.realWidth,
    height: t,
    ...r
  }, { align: g, border: y } = s.setting, x = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...o
  }, w = ["dtable-cell", a, n, s.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], $ = ["dtable-cell-content", s.setting.cellClass], _ = (M = e.data) == null ? void 0 : M[s.name], k = [l ?? _ ?? ""], S = i ? i(k, { row: e, col: s, value: _ }, q) : k, N = [], L = [], I = {}, D = {};
  let O = "div";
  S == null || S.forEach((E) => {
    if (typeof E == "object" && E && !X(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const H = E.outer ? N : L;
      E.html ? H.push(/* @__PURE__ */ m("div", { className: R("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? p : x, E.style), E.className && (E.outer ? w : $).push(E.className), E.children && H.push(E.children), E.attrs && Object.assign(E.outer ? I : D, E.attrs)), E.tagName && !E.outer && (O = E.tagName);
    } else
      L.push(E);
  });
  const P = O;
  return /* @__PURE__ */ m(
    "div",
    {
      className: R(w),
      style: p,
      "data-col": s.name,
      "data-row": e.id,
      "data-type": s.type || null,
      ...f,
      ...I,
      children: [
        L.length > 0 && /* @__PURE__ */ m(P, { className: R($), style: x, ...D, children: L }),
        N
      ]
    }
  );
}
function Cr({
  rows: s = [],
  cols: n,
  rowHeight: t,
  scrollLeft: e = 0,
  scrollTop: i = 0,
  left: o = 0,
  top: r = 0,
  width: l,
  height: a = "100%",
  className: h,
  CellComponent: u = kf,
  onRenderCell: c
}) {
  var y;
  const f = Array.isArray(s) ? s : [s], p = ((y = f[0]) == null ? void 0 : y.top) ?? 0, g = f.length;
  return /* @__PURE__ */ m(
    "div",
    {
      className: R("dtable-cells", h),
      style: { top: r, left: o, width: l, height: a },
      children: /* @__PURE__ */ m("div", { className: "dtable-cells-container", style: { left: -e, top: -i + p }, children: f.reduce((x, w, $) => {
        const _ = n.length;
        return n.forEach((k, S) => {
          x.push(
            /* @__PURE__ */ m(
              u,
              {
                className: R(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  S ? "" : "is-first-in-row",
                  S === _ - 1 ? "is-last-in-row" : "",
                  $ ? "" : "is-first-row",
                  $ === g - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: w,
                top: w.top - p,
                height: t,
                onRenderCell: c
              },
              `${w.index}:${k.name}`
            )
          );
        }), x;
      }, []) })
    }
  );
}
function Aa({
  top: s,
  height: n,
  rowHeight: t,
  rows: e,
  cols: { left: i, center: o, right: r },
  scrollLeft: l,
  scrollTop: a,
  className: h,
  style: u,
  onRenderCell: c
}) {
  let f = null;
  i.list.length && (f = /* @__PURE__ */ m(
    Cr,
    {
      className: "dtable-fixed-left",
      rows: e,
      scrollTop: a,
      cols: i.list,
      width: i.width,
      rowHeight: t,
      onRenderCell: c
    },
    "left"
  ));
  let p = null;
  o.list.length && (p = /* @__PURE__ */ m(
    Cr,
    {
      rows: e,
      className: "dtable-scroll-center",
      scrollLeft: l,
      scrollTop: a,
      cols: o.list,
      left: i.width,
      width: o.width,
      rowHeight: t,
      onRenderCell: c
    },
    "center"
  ));
  let g = null;
  return r.list.length && (g = /* @__PURE__ */ m(
    Cr,
    {
      className: "dtable-fixed-right",
      rows: e,
      scrollTop: a,
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      rowHeight: t,
      onRenderCell: c
    },
    "right"
  )), /* @__PURE__ */ m(
    "div",
    {
      className: R("dtable-block", h),
      style: { ...u, top: s, height: n },
      children: [
        f,
        p,
        g
      ]
    }
  );
}
var te, $n, It, _t, ee, Q, St, ut, Te, Us, _n, Ne, kt, Me, Re, jo, xh, Vo, Ch, Uo, $h, qo, _h, qs, Gr, Sn, kn, Ys, Ks, Gs, Xs, En, pi, Yo, Sh, Ko, kh, Go, Eh, Ln;
let Ef = (Ln = class extends z {
  constructor(t) {
    super(t);
    v(this, jo);
    v(this, Vo);
    v(this, Uo);
    v(this, qo);
    v(this, qs);
    v(this, En);
    v(this, Yo);
    v(this, Ko);
    v(this, Go);
    v(this, te, void 0);
    v(this, $n, void 0);
    v(this, It, void 0);
    v(this, _t, void 0);
    v(this, ee, void 0);
    v(this, Q, void 0);
    v(this, St, void 0);
    v(this, ut, void 0);
    v(this, Te, void 0);
    v(this, Us, void 0);
    v(this, _n, void 0);
    v(this, Ne, void 0);
    v(this, kt, void 0);
    v(this, Me, void 0);
    v(this, Re, void 0);
    v(this, Sn, void 0);
    v(this, kn, void 0);
    v(this, Ys, void 0);
    v(this, Ks, void 0);
    v(this, Gs, void 0);
    v(this, Xs, void 0);
    this.ref = U(), C(this, te, 0), C(this, It, !1), C(this, Q, []), C(this, ut, /* @__PURE__ */ new Map()), C(this, Te, {}), C(this, _n, []), C(this, Ne, { in: !1 }), this.updateLayout = () => {
      d(this, te) && cancelAnimationFrame(d(this, te)), C(this, te, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), C(this, te, 0);
      }));
    }, C(this, kt, (e, i) => {
      i = i || e.type;
      const o = d(this, ut).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), C(this, Me, (e) => {
      d(this, kt).call(this, e, `window_${e.type}`);
    }), C(this, Re, (e) => {
      d(this, kt).call(this, e, `document_${e.type}`);
    }), C(this, Sn, (e, i, o) => {
      const { row: r, col: l } = i;
      i.value = this.getCellValue(r, l), e[0] = i.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return d(this, Q).forEach((h) => {
        h[a] && (e = h[a].call(this, e, i, o));
      }), this.options[a] && (e = this.options[a].call(this, e, i, o)), l.setting[a] && (e = l.setting[a].call(this, e, i, o)), e;
    }), C(this, kn, (e, i) => {
      i === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), C(this, Ys, (e) => {
      var a, h, u;
      const i = this.getPointerInfo(e);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: l } = i;
      if (o === "HEADER")
        l && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: l }), d(this, Q).forEach((c) => {
          var f;
          (f = c.onHeaderCellClick) == null || f.call(this, e, { colName: r, element: l });
        }));
      else {
        const c = this.layout.visibleRows.find((f) => f.id === o);
        if (l) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, e, { colName: r, rowID: o, rowInfo: c, element: l })) === !0)
            return;
          for (const f of d(this, Q))
            if (((u = f.onCellClick) == null ? void 0 : u.call(this, e, { colName: r, rowID: o, rowInfo: c, element: l })) === !0)
              return;
        }
      }
    }), C(this, Ks, (e) => {
      const i = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), C(this, Gs, (e) => {
      const i = b(e.target).closest(".dtable-cell");
      if (!i.length)
        return A(this, En, pi).call(this, !1);
      A(this, En, pi).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), C(this, Xs, () => {
      A(this, En, pi).call(this, !1);
    }), C(this, $n, t.id ?? `dtable-${Oc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, C(this, ee, Object.freeze($f(t.plugins))), d(this, ee).forEach((e) => {
      var l;
      const { methods: i, data: o, state: r } = e;
      i && Object.entries(i).forEach(([a, h]) => {
        typeof h == "function" && Object.assign(this, { [a]: h.bind(this) });
      }), o && Object.assign(d(this, Te), o.call(this)), r && Object.assign(this.state, r.call(this)), (l = e.onCreate) == null || l.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = d(this, St)) == null ? void 0 : t.options) || d(this, _t) || Ma();
  }
  get plugins() {
    return d(this, Q);
  }
  get layout() {
    return d(this, St);
  }
  get id() {
    return d(this, $n);
  }
  get data() {
    return d(this, Te);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return d(this, Ne);
  }
  componentWillReceiveProps() {
    C(this, _t, void 0);
  }
  componentDidMount() {
    d(this, It) ? this.forceUpdate() : A(this, qs, Gr).call(this), d(this, Q).forEach((e) => {
      let { events: i } = e;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", d(this, Ys)), this.on("keydown", d(this, Ks));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", d(this, Gs)), this.on("mouseleave", d(this, Xs))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(e), C(this, Us, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    d(this, Q).forEach((e) => {
      var i;
      (i = e.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    d(this, It) ? A(this, qs, Gr).call(this) : d(this, Q).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = d(this, Us)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of d(this, ut).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), d(this, Me)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), d(this, Re)) : t.removeEventListener(i, d(this, kt));
    d(this, Q).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), d(this, ee).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), C(this, Te, {}), d(this, ut).clear();
  }
  on(t, e, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = d(this, ut).get(t);
    o ? o.push(e) : (d(this, ut).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), d(this, Me)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), d(this, Re)) : (r = this.element) == null || r.addEventListener(t, d(this, kt)));
  }
  off(t, e, i) {
    var l;
    i && (t = `${i}_${t}`);
    const o = d(this, ut).get(t);
    if (!o)
      return;
    const r = o.indexOf(e);
    r >= 0 && o.splice(r, 1), o.length || (d(this, ut).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), d(this, Me)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), d(this, Re)) : (l = this.element) == null || l.removeEventListener(t, d(this, kt)));
  }
  emitCustomEvent(t, e) {
    d(this, kt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: l, rowHeight: a, cols: { center: { totalWidth: h, width: u } } } = this.layout, { to: c } = t;
    let { scrollLeft: f, scrollTop: p } = t;
    if (c === "up" || c === "down")
      p = o + (c === "down" ? 1 : -1) * Math.floor(l / a) * a;
    else if (c === "left" || c === "right")
      f = i + (c === "right" ? 1 : -1) * u;
    else if (c === "top")
      p = 0;
    else if (c === "bottom")
      p = r - l;
    else if (c === "begin")
      f = 0;
    else if (c === "end")
      f = h - u;
    else {
      const { offsetLeft: y, offsetTop: x } = t;
      typeof y == "number" && (f = i + y), typeof x == "number" && (f = o + x);
    }
    const g = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, h - u)), f !== i && (g.scrollLeft = f)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - l)), p !== o && (g.scrollTop = p)), Object.keys(g).length ? (this.setState(g, () => {
      var y;
      (y = this.options.onScroll) == null || y.call(this, g), e == null || e.call(this, !0);
    }), !0) : (e == null || e.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { cols: e } = this.layout;
    return typeof t == "number" ? e.list[t] : e.map[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: e, rowsMap: i, allRows: o } = this.layout;
    return typeof t == "number" ? e[t] : i[t] || o.find((r) => r.id === t);
  }
  getCellValue(t, e) {
    var a;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof e == "object" ? e : this.getColInfo(e);
    if (!o)
      return;
    let r = i.id === "HEADER" ? o.setting.title : (a = i.data) == null ? void 0 : a[o.name];
    const { cellValueGetter: l } = this.options;
    return l && (r = l.call(this, i, o, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!d(this, _t))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      C(this, St, void 0);
    else if (i === "options") {
      if (C(this, _t, void 0), !d(this, St))
        return;
      C(this, St, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const i = b(e).closest(".dtable-cell");
    if (!i.length)
      return;
    const o = i.attr("data-row"), r = i.attr("data-col");
    if (!(typeof r != "string" || typeof o != "string"))
      return {
        cellElement: i[0],
        colName: r,
        rowID: o,
        target: e
      };
  }
  i18n(t, e, i) {
    return J(d(this, _n), t, e, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    const t = A(this, Go, Eh).call(this), { className: e, rowHover: i, colHover: o, cellHover: r, bordered: l, striped: a, scrollbarHover: h } = this.options, u = {}, c = ["dtable", e, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": l,
      "dtable-striped": a,
      "scrollbar-hover": h
    }], f = [];
    return t && (u.width = t.width, u.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), f.push(
      A(this, jo, xh).call(this, t),
      A(this, Vo, Ch).call(this, t),
      A(this, Uo, $h).call(this, t),
      A(this, qo, _h).call(this, t)
    ), d(this, Q).forEach((p) => {
      var y;
      const g = (y = p.onRender) == null ? void 0 : y.call(this, t);
      g && (g.style && Object.assign(u, g.style), g.className && c.push(g.className), g.children && f.push(g.children));
    })), /* @__PURE__ */ m(
      "div",
      {
        id: d(this, $n),
        className: R(c),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: f
      }
    );
  }
}, te = new WeakMap(), $n = new WeakMap(), It = new WeakMap(), _t = new WeakMap(), ee = new WeakMap(), Q = new WeakMap(), St = new WeakMap(), ut = new WeakMap(), Te = new WeakMap(), Us = new WeakMap(), _n = new WeakMap(), Ne = new WeakMap(), kt = new WeakMap(), Me = new WeakMap(), Re = new WeakMap(), jo = new WeakSet(), xh = function(t) {
  const { header: e, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!e)
    return null;
  if (e === !0)
    return /* @__PURE__ */ m(
      Aa,
      {
        className: "dtable-header",
        cols: i,
        height: o,
        scrollLeft: r,
        rowHeight: o,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: d(this, Sn)
      },
      "header"
    );
  const l = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    Tr,
    {
      className: "dtable-header",
      style: { height: o },
      renders: l,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, Vo = new WeakSet(), Ch = function(t) {
  const { headerHeight: e, rowsHeight: i, visibleRows: o, rowHeight: r, cols: l, scrollLeft: a, scrollTop: h } = t;
  return /* @__PURE__ */ m(
    Aa,
    {
      className: "dtable-body",
      top: e,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: a,
      scrollTop: h,
      cols: l,
      onRenderCell: d(this, Sn)
    },
    "body"
  );
}, Uo = new WeakSet(), $h = function(t) {
  let { footer: e } = t;
  if (typeof e == "function" && (e = e.call(this, t)), !e)
    return null;
  const i = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    Tr,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    },
    "footer"
  );
}, qo = new WeakSet(), _h = function(t) {
  const e = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: l } }, scrollTop: a, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: f } = t, { scrollbarSize: p = 12, horzScrollbarPos: g } = this.options;
  return l > r && e.push(
    /* @__PURE__ */ m(
      Na,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: l,
        clientSize: r,
        onScroll: d(this, kn),
        left: o,
        bottom: (g === "inside" ? 0 : -p) + c,
        size: p,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: o, height: f + h } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: o + r, height: f + h } })
  ), u > h && e.push(
    /* @__PURE__ */ m(
      Na,
      {
        type: "vert",
        scrollPos: a,
        scrollSize: u,
        clientSize: h,
        onScroll: d(this, kn),
        right: 0,
        size: p,
        top: f,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), e.length ? e : null;
}, qs = new WeakSet(), Gr = function() {
  var t;
  C(this, It, !1), (t = this.options.afterRender) == null || t.call(this), d(this, Q).forEach((e) => {
    var i;
    return (i = e.afterRender) == null ? void 0 : i.call(this);
  });
}, Sn = new WeakMap(), kn = new WeakMap(), Ys = new WeakMap(), Ks = new WeakMap(), Gs = new WeakMap(), Xs = new WeakMap(), En = new WeakSet(), pi = function(t) {
  const { element: e, options: i } = this;
  if (!e)
    return;
  const o = b(e), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const l = d(this, Ne);
  r.in !== l.in && o.toggleClass("dtable-hover", r.in), r.row !== l.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== l.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), C(this, Ne, r);
}, Yo = new WeakSet(), Sh = function() {
  if (d(this, _t))
    return !1;
  const e = { ...Ma(), ...d(this, ee).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return C(this, _t, e), C(this, Q, d(this, ee).reduce((i, o) => {
    const { when: r, options: l } = o;
    let a = e;
    return l && (a = Object.assign({ ...a }, typeof l == "function" ? l.call(this, e) : l)), (!r || r(a)) && (a !== e && Object.assign(e, a), i.push(o)), i;
  }, [])), C(this, _n, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ko = new WeakSet(), kh = function() {
  var O, P;
  const { plugins: t } = this;
  let e = d(this, _t);
  const i = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((M) => {
    var H;
    const E = (H = M.beforeLayout) == null ? void 0 : H.call(this, e);
    E && (e = { ...e, ...E }), Object.assign(i, M.footer);
  });
  let o = e.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: M } = this;
    if (M)
      r = M.clientWidth;
    else {
      C(this, It, !0);
      return;
    }
  }
  const l = Sf(this, e, t, r), { data: a, rowKey: h = "id", rowHeight: u } = e, c = [], f = (M, E, H) => {
    var B, G;
    const W = { data: H ?? { [h]: M }, id: M, index: c.length, top: 0 };
    if (H || (W.lazy = !0), c.push(W), ((B = e.onAddRow) == null ? void 0 : B.call(this, W, E)) !== !1) {
      for (const fe of t)
        if (((G = fe.onAddRow) == null ? void 0 : G.call(this, W, E)) === !1)
          return;
    }
  };
  if (typeof a == "number")
    for (let M = 0; M < a; M++)
      f(`${M}`, M);
  else
    Array.isArray(a) && a.forEach((M, E) => {
      typeof M == "object" ? f(`${M[h] ?? ""}`, E, M) : f(`${M ?? ""}`, E);
    });
  let p = c;
  const g = {};
  if (e.onAddRows) {
    const M = e.onAddRows.call(this, p);
    M && (p = M);
  }
  for (const M of t) {
    const E = (O = M.onAddRows) == null ? void 0 : O.call(this, p);
    E && (p = E);
  }
  p.forEach((M, E) => {
    g[M.id] = M, M.index = E, M.top = M.index * u;
  });
  const { header: y, footer: x } = e, w = y ? e.headerHeight || u : 0, $ = x ? e.footerHeight || u : 0;
  let _ = e.height, k = 0;
  const S = p.length * u, N = w + $ + S;
  if (typeof _ == "function" && (_ = _.call(this, N)), _ === "auto")
    k = N;
  else if (typeof _ == "object")
    k = Math.min(_.max, Math.max(_.min, N));
  else if (_ === "100%") {
    const { parent: M } = this;
    if (M)
      k = M.clientHeight;
    else {
      k = 0, C(this, It, !0);
      return;
    }
  } else
    k = _;
  const L = k - w - $, I = {
    options: e,
    allRows: c,
    width: r,
    height: k,
    rows: p,
    rowsMap: g,
    rowHeight: u,
    rowsHeight: L,
    rowsHeightTotal: S,
    header: y,
    footer: x,
    footerGenerators: i,
    headerHeight: w,
    footerHeight: $,
    cols: l
  }, D = (P = e.onLayout) == null ? void 0 : P.call(this, I);
  D && Object.assign(I, D), t.forEach((M) => {
    if (M.onLayout) {
      const E = M.onLayout.call(this, I);
      E && Object.assign(I, E);
    }
  }), C(this, St, I);
}, Go = new WeakSet(), Eh = function() {
  (A(this, Yo, Sh).call(this) || !d(this, St)) && A(this, Ko, kh).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  const { cols: { center: e } } = t;
  let { scrollLeft: i } = this.state;
  i = Math.min(Math.max(0, e.totalWidth - e.width), i);
  let o = 0;
  e.list.forEach((x) => {
    x.left = o, o += x.realWidth, x.visible = x.left + x.realWidth >= i && x.left <= i + e.width;
  });
  const { rowsHeightTotal: r, rowsHeight: l, rows: a, rowHeight: h } = t, u = Math.min(Math.max(0, r - l), this.state.scrollTop), c = Math.floor(u / h), f = u + l, p = Math.min(a.length, Math.ceil(f / h)), g = [], { rowDataGetter: y } = this.options;
  for (let x = c; x < p; x++) {
    const w = a[x];
    w.lazy && y && (w.data = y([w.id])[0], w.lazy = !1), g.push(w);
  }
  return t.visibleRows = g, t.scrollTop = u, t.scrollLeft = i, t;
}, Ln.addPlugin = bh, Ln.removePlugin = wh, Ln);
const Tf = {
  html: { component: Nn }
}, Nf = {
  name: "custom",
  onRenderCell(s, n) {
    const { col: t } = n;
    let { custom: e } = t.setting;
    if (typeof e == "function" && (e = e.call(this, n)), !e)
      return s;
    const i = Array.isArray(e) ? e : [e], { customMap: o } = this.options;
    return i.forEach((r) => {
      let l;
      typeof r == "string" ? l = r.startsWith("<") ? {
        component: Nn,
        props: { html: Z(r, { value: n.value, ...n.row.data, $value: n.value }) }
      } : {
        component: r
      } : l = r;
      let { component: a } = l;
      const h = [l];
      typeof a == "string" && h.unshift(Tf[a], o == null ? void 0 : o[a]);
      const u = {};
      h.forEach((f) => {
        if (f) {
          const { props: p } = f;
          p && b.extend(u, typeof p == "function" ? p.call(this, n) : p), a = f.component || a;
        }
      }, { props: {} });
      const c = a;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ m(c, { ...u }) };
    }), s;
  }
}, Mf = Vt(Nf);
function Th(s, n, t, e) {
  if (typeof s == "function" && (s = s(n)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return t;
  const { url: i, ...o } = s, { setting: r } = n.col, l = {};
  return r && Object.keys(r).forEach((a) => {
    a.startsWith("data-") && (l[a] = r[a]);
  }), /* @__PURE__ */ m("a", { href: Z(i, n.row.data), ...e, ...o, ...l, children: t });
}
function $l(s, n, t) {
  var e;
  if (s != null)
    return t = t ?? ((e = n.row.data) == null ? void 0 : e[n.col.name]), typeof s == "function" ? s(t, n) : Z(s, t);
}
function Nh(s, n, t, e) {
  var i;
  return t ? (t = t ?? ((i = n.row.data) == null ? void 0 : i[n.col.name]), s === !1 ? t : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(t, n)), mt(t, s, e ?? t))) : e ?? t;
}
function Mh(s, n) {
  const { link: t } = n.col.setting, e = Th(t, n, s[0]);
  return e && (s[0] = e), s;
}
function Rh(s, n) {
  const { format: t } = n.col.setting;
  return t && (s[0] = $l(t, n, s[0])), s;
}
function Ah(s, n) {
  const { map: t } = n.col.setting;
  return typeof t == "function" ? s[0] = t(s[0], n) : typeof t == "object" && t && (s[0] = t[s[0]] ?? s[0]), s;
}
function Lh(s, n, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: e = t, invalidDate: i } = n.col.setting;
  return s[0] = Nh(e, n, s[0], i), s;
}
function Xr(s, n, t = !1) {
  const { html: e = t } = n.col.setting;
  if (e === !1)
    return s;
  const i = s[0], o = e === !0 ? i : $l(e, n, i);
  return s[0] = {
    html: o
  }, s;
}
const Rf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, n) {
        return Xr(s, n, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: e = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = n.setting, r = (t - e) / 2, l = t / 2, a = s[0];
        return s[0] = /* @__PURE__ */ m("svg", { width: t, height: t, children: [
          /* @__PURE__ */ m("circle", { cx: l, cy: l, r, "stroke-width": e, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ m("circle", { cx: l, cy: l, r, "stroke-width": e, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - a) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ m("text", { x: l, y: l + e, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(a) })
        ] }), s;
      }
    },
    datetime: {
      formatDate: "[yyyy-]MM-dd hh:mm"
    },
    date: {
      formatDate: "yyyy-MM-dd"
    },
    time: {
      formatDate: "hh:mm"
    }
  },
  onRenderCell(s, n) {
    const { formatDate: t, html: e, hint: i } = n.col.setting;
    if (t && (s = Lh(s, n, t)), s = Ah(s, n), s = Rh(s, n), e ? s = Xr(s, n) : s = Mh(s, n), i) {
      let o = s[0];
      typeof i == "function" ? o = i.call(this, n) : typeof i == "string" && (o = Z(i, n.row.data)), s.push({ attrs: { title: o } });
    }
    return s;
  }
}, Af = Vt(Rf, { buildIn: !0 });
function Lf(s, n, t = !1) {
  var l, a;
  typeof s == "boolean" && (n = s, s = void 0);
  const e = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!e[h] === u || (u ? e[h] = !0 : delete e[h], i[h] = u);
  };
  if (s === void 0 ? (n === void 0 && (n = !Ih.call(this)), (l = this.layout) == null || l.allRows.forEach(({ id: h }) => {
    r(h, !!n);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((h) => {
    r(h, n ?? !e[h]);
  })), Object.keys(i).length) {
    const h = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, s, i, e);
    h && Object.keys(h).forEach((u) => {
      h[u] ? e[u] = !0 : delete e[u];
    }), this.setState({ checkedRows: { ...e } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, i);
    });
  }
  return i;
}
function If(s) {
  return this.state.checkedRows[s] ?? !1;
}
function Ih() {
  var e, i;
  const s = (e = this.layout) == null ? void 0 : e.allRows.length;
  if (!s)
    return !1;
  const n = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? n === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : n === s;
}
function Df() {
  return Object.keys(this.state.checkedRows);
}
function Pf(s) {
  const { checkable: n } = this.options;
  s === void 0 && (s = !n), n !== s && this.setState({ forceCheckable: s });
}
function La(s, n, t = !1) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${s ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const Ia = 'input[type="checkbox"],.dtable-checkbox', Of = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: La
  },
  when: (s) => !!s.checkable,
  options(s) {
    const { forceCheckable: n } = this.state;
    return n !== void 0 ? s.checkable = n : s.checkable === "auto" && (s.checkable = !!s.cols.some((t) => t.checkbox)), s;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Lf,
    isRowChecked: If,
    isAllRowChecked: Ih,
    getChecks: Df,
    toggleCheckable: Pf
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    zh_tw: {
      checkedCountInfo: "已選擇 {selected} 項",
      totalCountInfo: "共 {total} 項"
    },
    en: {
      checkedCountInfo: "Selected {selected} items",
      totalCountInfo: "Total {total} items"
    }
  },
  footer: {
    checkbox() {
      const s = this.isAllRowChecked();
      return [
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: La(s) })
      ];
    },
    checkedInfo(s, n) {
      const t = this.getChecks(), { checkInfo: e } = this.options;
      if (e)
        return [e.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: n.allRows.length })), [
        /* @__PURE__ */ m("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(s, { row: n, col: t }) {
    var h;
    const { id: e } = n, { canRowCheckable: i } = this.options, o = i ? i.call(this, e) : !0;
    if (!o)
      return s;
    const { checkbox: r } = t.setting, l = typeof r == "function" ? r.call(this, e) : r, a = this.isRowChecked(e);
    if (l) {
      const u = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, a, e, o === "disabled");
      s.unshift(u), s.push({ outer: !0, className: "has-checkbox" });
    }
    return a && s.push({ outer: !0, className: "is-checked" }), s;
  },
  onRenderHeaderCell(s, { row: n, col: t }) {
    var r;
    const { id: e } = n, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, e) : i) {
      const l = this.isAllRowChecked(), a = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, l, e);
      s.unshift(a), s.push({ outer: !0, className: "has-checkbox" });
    }
    return s;
  },
  onHeaderCellClick(s) {
    const n = s.target;
    if (!n)
      return;
    const t = n.closest(Ia);
    t && (this.toggleCheckRows(t.checked), s.stopPropagation());
  },
  onCellClick(s, { rowID: n }) {
    const t = b(s.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(Ia).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(n, void 0, !0);
  }
}, Hf = Vt(Of);
var Dh = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Dh || {});
function Di(s) {
  const n = this.data.nestedMap.get(s);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, e = n.children && t && t[s];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const r = Di.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return n.state = i ? "hidden" : e ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Di.call(this, n.parent).level + 1 : 0, n;
}
function Wf(s) {
  return s !== void 0 ? Di.call(this, s) : this.data.nestedMap;
}
function zf(s, n) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: e } = this.data;
  if (s === "HEADER")
    if (n === void 0 && (n = !Ph.call(this)), n) {
      const i = e.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (t[o] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    n === void 0 && (n = !t[i[0]]), i.forEach((o) => {
      const r = e.get(o);
      n && (r != null && r.children) ? t[o] = !0 : delete t[o];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function Ph() {
  const s = this.data.nestedMap.values();
  for (const n of s)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function Oh(s, n = 0, t, e = 0) {
  var i;
  t || (t = [...s.keys()]);
  for (const o of t) {
    const r = s.get(o);
    r && (r.level === e && (r.order = n++), (i = r.children) != null && i.length && (n = Oh(s, n, r.children, e + 1)));
  }
  return n;
}
function Hh(s, n, t, e) {
  const i = s.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    e[o] = t, Hh(s, o, t, e);
  }), i;
}
function Wh(s, n, t, e, i) {
  var l;
  const o = s.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((l = o.children) == null ? void 0 : l.every((a) => {
    const h = !!(e[a] !== void 0 ? e[a] : i[a]);
    return t === h;
  })) && (e[n] = t), o.parent && Wh(s, o.parent, t, e, i);
}
const Bf = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(s, n) {
      const { nestedMap: t } = this.data, e = t.get(s.id), i = t.get(n.id);
      return (e == null ? void 0 : e.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(s, n, t) {
      if (!this.options.checkable || !(s != null && s.length))
        return;
      const e = {};
      return Object.entries(n).forEach(([i, o]) => {
        const r = Hh(this, i, o, e);
        r != null && r.parent && Wh(this, r.parent, o, e, t);
      }), e;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((n) => n.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: Wf,
    toggleRow: zf,
    isAllCollapsed: Ph,
    getNestedRowInfo: Di
  },
  beforeLayout() {
    var s;
    (s = this.data.nestedMap) == null || s.clear();
  },
  onAddRow(s) {
    var i, o;
    const { nestedMap: n } = this.data, t = String((i = s.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), e = n.get(s.id) ?? {
      state: "",
      level: 0
    };
    if (e.parent = t === "0" ? void 0 : t, (o = s.data) != null && o[this.options.asParentKey ?? "asParent"] && (e.children = []), n.set(s.id, e), t) {
      let r = n.get(t);
      r || (r = {
        state: "",
        level: 0
      }, n.set(t, r)), r.children || (r.children = []), r.children.push(s.id);
    }
  },
  onAddRows(s) {
    return s = s.filter(
      (n) => this.getNestedRowInfo(n.id).state !== "hidden"
      /* hidden */
    ), Oh(this.data.nestedMap), s.sort((n, t) => {
      const e = this.getNestedRowInfo(n.id), i = this.getNestedRowInfo(t.id), o = (e.order ?? 0) - (i.order ?? 0);
      return o === 0 ? n.index - t.index : o;
    }), s;
  },
  onRenderCell(s, { col: n, row: t }) {
    var l;
    const { id: e, data: i } = t, { nestedToggle: o } = n.setting, r = this.getNestedRowInfo(e);
    if (o && (r.children || r.parent) && s.unshift(
      ((l = this.options.onRenderNestedToggle) == null ? void 0 : l.call(this, r, e, n, i)) ?? /* @__PURE__ */ m("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: a = o } = n.setting;
      a && (a === !0 && (a = this.options.nestedIndent ?? 12), s.unshift(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: a * r.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: n, col: t }) {
    var i;
    const { id: e } = n;
    return t.setting.nestedToggle && s.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, e, t, void 0)) ?? /* @__PURE__ */ m("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const n = s.target;
    if (!(!n || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: n }) {
    const t = s.target;
    if (!(!t || !this.getNestedRowInfo(n).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(n), !0;
  }
}, Ff = Vt(Bf);
function $r(s, { row: n, col: t }) {
  const { data: e } = n, i = e ? e[t.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: l, avatarCodeKey: a, avatarNameKey: h = `${t.name}Name` } = t.setting, u = (e ? e[h] : i) || s[0], c = {
    size: "xs",
    className: R(o, l == null ? void 0 : l.className, "flex-none"),
    src: e ? e[r] : void 0,
    text: u,
    code: a ? e ? e[a] : void 0 : i,
    ...l
  };
  if (s[0] = /* @__PURE__ */ m(Hc, { ...c }), t.type === "avatarBtn") {
    const { avatarBtnProps: f } = t.setting, p = typeof f == "function" ? f(t, n) : f;
    s[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      s[0],
      /* @__PURE__ */ m("div", { children: u })
    ] });
  } else
    t.type === "avatarName" && (s[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ m("span", { children: u })
    ] }));
  return s;
}
const jf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: $r
    },
    avatarBtn: {
      onRenderCell: $r
    },
    avatarName: {
      onRenderCell: $r
    }
  }
}, Vf = Vt(jf, { buildIn: !0 }), Uf = {
  name: "sort-type",
  onRenderHeaderCell(s, n) {
    const { col: t } = n, { sortType: e } = t.setting;
    if (e) {
      const i = e === !0 ? "none" : e;
      s.push(
        /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = t.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, t, r, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...a } = o;
        s[0] = /* @__PURE__ */ m("a", { href: Z(l, { ...t.setting, sortType: r }), ...a, children: s[0] });
      }
    }
    return s;
  }
}, qf = Vt(Uf, { buildIn: !0 }), _r = (s) => {
  s.length !== 1 && s.forEach((n, t) => {
    !t || n.setting.border || n.setting.group === s[t - 1].setting.group || (n.setting.border = "left");
  });
}, Yf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: n } = s;
    _r(n.left.list), _r(n.center.list), _r(n.right.list);
  }
}, Kf = Vt(Yf), Gf = {
  name: "cellspan",
  when: (s) => !!s.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(s) {
    const { getCellSpan: n } = this.options;
    if (!n)
      return;
    const { cellSpanMap: t, overlayedCellSet: e } = this.data, { rows: i, cols: o, rowHeight: r } = s;
    t.clear(), e.clear();
    const l = (a, h, u) => {
      const { index: c } = h;
      a.forEach((f, p) => {
        const { index: g } = f, y = `C${g}R${c}`;
        if (e.has(y))
          return;
        const x = n.call(this, { row: h, col: f });
        if (!x)
          return;
        const w = Math.min(x.colSpan || 1, a.length - p), $ = Math.min(x.rowSpan || 1, i.length - u);
        if (w <= 1 && $ <= 1)
          return;
        let _ = 0;
        for (let k = 0; k < w; k++) {
          _ += a[p + k].realWidth;
          for (let S = 0; S < $; S++) {
            const N = `C${g + k}R${c + S}`;
            N !== y && e.add(N);
          }
        }
        t.set(y, {
          colSpan: w,
          rowSpan: $,
          width: _,
          height: r * $
        });
      });
    };
    i.forEach((a, h) => {
      ["left", "center", "right"].forEach((u) => {
        l(o[u].list, a, h);
      });
    });
  },
  onRenderCell(s, { row: n, col: t }) {
    const e = `C${t.index}R${n.index}`;
    if (this.data.overlayedCellSet.has(e))
      s.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(e);
      i && s.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return s;
  }
}, Xf = Vt(Gf), Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Dh,
  avatar: Vf,
  cellspan: Xf,
  checkable: Hf,
  custom: Mf,
  group: Kf,
  nested: Ff,
  renderDatetime: Nh,
  renderDatetimeCell: Lh,
  renderFormat: $l,
  renderFormatCell: Rh,
  renderHtmlCell: Xr,
  renderLink: Th,
  renderLinkCell: Mh,
  renderMapCell: Ah,
  rich: Af,
  sortType: qf
}, Symbol.toStringTag, { value: "Module" })), ge = class ge extends j {
};
ge.NAME = "DTable", ge.Component = Ef, ge.definePlugin = Vt, ge.removePlugin = wh, ge.plugins = Jf;
let Da = ge;
const Zf = "nav", mi = '[data-toggle="tab"]', Qf = "active";
var Ae;
const Nl = class Nl extends ft {
  constructor() {
    super(...arguments);
    v(this, Ae, 0);
  }
  active(t) {
    const e = this.$element, i = e.find(mi);
    let o = t ? b(t).closest(mi) : i.filter(`.${Qf}`);
    if (!o.length && (o = e.find(mi).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), l = o.data("name") || r, a = b(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [l]), this.emit("show", l), d(this, Ae) && clearTimeout(d(this, Ae)), C(this, Ae, setTimeout(() => {
      a.addClass("in").trigger("show", [l]), this.emit("shown", l), C(this, Ae, 0);
    }, 10)));
  }
};
Ae = new WeakMap(), Nl.NAME = "Tabs";
let Jr = Nl;
b(document).on("click.tabs.zui", mi, (s) => {
  s.preventDefault();
  const n = b(s.target), t = n.closest(`.${Zf}`);
  t.length && Jr.ensure(t).active(n);
});
b(() => {
  b(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  b as $,
  Vl as ActionMenu,
  Ul as ActionMenuNested,
  ia as Avatar,
  oa as BtnGroup,
  ra as ColorPicker,
  ft as Component,
  j as ComponentFromReact,
  at as ContextMenu,
  Js as CustomContent,
  Tr as CustomRender,
  Da as DTable,
  Ta as Dashboard,
  ua as DatePicker,
  ie as Dropdown,
  Pc as EventBus,
  yc as HElement,
  Nn as HtmlContent,
  et as Icon,
  ql as Menu,
  Ql as Messager,
  Hr as Modal,
  We as ModalBase,
  Br as ModalTrigger,
  fa as Nav,
  pa as Pager,
  ma as Pick,
  ga as Picker,
  ya as Popovers,
  ta as ProgressCircle,
  z as ReactComponent,
  ba as SearchBox,
  Vn as TIME_DAY,
  Jr as Tabs,
  ha as TimePicker,
  wa as Toolbar,
  Ht as Tooltip,
  ka as Tree,
  Ur as Upload,
  Ea as UploadImgs,
  Ed as addDate,
  b as cash,
  R as classes,
  hi as componentsMap,
  Ru as convertBytes,
  Du as create,
  K as createDate,
  qu as createPortal,
  U as createRef,
  Nu as deepGet,
  Tu as deepGetPath,
  ep as defineFn,
  wi as delay,
  np as dom,
  Mu as formatBytes,
  mt as formatDate,
  hp as formatDateSpan,
  Z as formatString,
  nc as getClassList,
  vi as getComponent,
  q as h,
  sp as hh,
  Bu as htm,
  J as i18n,
  ei as isSameDay,
  zc as isSameMonth,
  rp as isSameWeek,
  Pr as isSameYear,
  lp as isToday,
  cp as isTomorrow,
  X as isValidElement,
  ap as isYesterday,
  ea as nativeEvents,
  Fn as render,
  bc as renderCustomContent,
  ju as renderCustomResult,
  On as store,
  sc as storeData,
  ic as takeData
};
//# sourceMappingURL=zui.js.map
