﻿
(function () {
    function z(a, b) {
        function g() { if ("session" == a) try { h = n.parse(window.name || "{}") } catch (b) { h = {} } } var k = !1, e = 0, j, d, h = {}; Math.random(); if (b || "undefined" == typeof window[a + "Storage"]) if ("local" == a && window.globalStorage) localStorage = window.globalStorage[window.location.hostname]; else if ("userDataBehavior" == m) {
            b && (window[a + "Storage"] && window[a + "Storage"].parentNode) && window[a + "Storage"].parentNode.removeChild(window[a + "Storage"]); d = document.createElement("button"); document.getElementsByTagName("head")[0].appendChild(d);
            "local" == a ? h = c : "session" == a && g(); for (j in h) h.hasOwnProperty(j) && ("__jstorage_meta" != j && "length" != j && "undefined" != typeof h[j]) && (j in d || e++, d[j] = h[j]); d.length = e; d.key = function (a) { var b = 0, d; g(); for (d in h) if (h.hasOwnProperty(d) && "__jstorage_meta" != d && "length" != d && "undefined" != typeof h[d]) { if (b == a) return d; b++ } }; d.getItem = function (b) { g(); return "session" == a ? h[b] : q.jStorage.get(b) }; d.setItem = function (a, b) { "undefined" != typeof b && (d[a] = (b || "").toString()) }; d.removeItem = function (b) {
                if ("local" == a) return q.jStorage.deleteKey(b);
                d[b] = void 0; k = !0; b in d && d.removeAttribute(b); k = !1
            }; d.clear = function () { "session" == a ? (window.name = "", z("session", !0)) : q.jStorage.flush() }; "local" == a && (B = function (a, b) { "length" != a && (k = !0, "undefined" == typeof b ? a in d && (e--, d.removeAttribute(a)) : (a in d || e++, d[a] = (b || "").toString()), d.length = e, k = !1) }); d.attachEvent("onpropertychange", function (b) {
                if ("length" != b.propertyName && !(k || "length" == b.propertyName)) {
                    if ("local" == a) !(b.propertyName in h) && "undefined" != typeof d[b.propertyName] && e++; else if ("session" ==
a) { g(); "undefined" != typeof d[b.propertyName] && !(b.propertyName in h) ? (h[b.propertyName] = d[b.propertyName], e++) : "undefined" == typeof d[b.propertyName] && b.propertyName in h ? (delete h[b.propertyName], e--) : h[b.propertyName] = d[b.propertyName]; "session" == a && (window.name = n.stringify(h)); d.length = e; return } q.jStorage.set(b.propertyName, d[b.propertyName]); d.length = e
                } 
            }); window[a + "Storage"] = d
        } 
    } function F() {
        var a = "{}"; if ("userDataBehavior" == m) {
            f.load("jStorage"); try { a = f.getAttribute("jStorage") } catch (b) { } try {
                s =
f.getAttribute("jStorage_update")
            } catch (c) { } l.jStorage = a
        } G(); A(); H()
    } function v() {
        var a; clearTimeout(I); I = setTimeout(function () {
            if ("localStorage" == m || "globalStorage" == m) a = l.jStorage_update; else if ("userDataBehavior" == m) { f.load("jStorage"); try { a = f.getAttribute("jStorage_update") } catch (b) { } } if (a && a != s) {
                s = a; var g = n.parse(n.stringify(c.__jstorage_meta.CRC32)), k; F(); k = n.parse(n.stringify(c.__jstorage_meta.CRC32)); var e, j = [], d = []; for (e in g) g.hasOwnProperty(e) && (k[e] ? g[e] != k[e] && "2." == String(g[e]).substr(0,
2) && j.push(e) : d.push(e)); for (e in k) k.hasOwnProperty(e) && (g[e] || j.push(e)); t(j, "updated"); t(d, "deleted")
            } 
        }, 25)
    } function t(a, b) { a = [].concat(a || []); if ("flushed" == b) { a = []; for (var c in p) p.hasOwnProperty(c) && a.push(c); b = "deleted" } c = 0; for (var k = a.length; c < k; c++) if (p[a[c]]) for (var e = 0, j = p[a[c]].length; e < j; e++) p[a[c]][e](a[c], b) } function w() {
        var a = (+new Date).toString(); "localStorage" == m || "globalStorage" == m ? l.jStorage_update = a : "userDataBehavior" == m && (f.setAttribute("jStorage_update", a), f.save("jStorage"));
        v()
    } function G() { if (l.jStorage) try { c = n.parse(String(l.jStorage)) } catch (a) { l.jStorage = "{}" } else l.jStorage = "{}"; C = l.jStorage ? String(l.jStorage).length : 0; c.__jstorage_meta || (c.__jstorage_meta = {}); c.__jstorage_meta.CRC32 || (c.__jstorage_meta.CRC32 = {}) } function x() {
        if (c.__jstorage_meta.PubSub) {
            for (var a = +new Date - 2E3, b = 0, g = c.__jstorage_meta.PubSub.length; b < g; b++) if (c.__jstorage_meta.PubSub[b][0] <= a) { c.__jstorage_meta.PubSub.splice(b, c.__jstorage_meta.PubSub.length - b); break } c.__jstorage_meta.PubSub.length ||
delete c.__jstorage_meta.PubSub
        } try { l.jStorage = n.stringify(c), f && (f.setAttribute("jStorage", l.jStorage), f.save("jStorage")), C = l.jStorage ? String(l.jStorage).length : 0 } catch (k) { } 
    } function r(a) { if (!a || "string" != typeof a && "number" != typeof a) throw new TypeError("Key name must be string or numeric"); if ("__jstorage_meta" == a) throw new TypeError("Reserved key name"); return !0 } function A() {
        var a, b, g, k, e = Infinity, j = !1, d = []; clearTimeout(J); if (c.__jstorage_meta && "object" == typeof c.__jstorage_meta.TTL) {
            a = +new Date;
            g = c.__jstorage_meta.TTL; k = c.__jstorage_meta.CRC32; for (b in g) g.hasOwnProperty(b) && (g[b] <= a ? (delete g[b], delete k[b], delete c[b], j = !0, d.push(b)) : g[b] < e && (e = g[b])); Infinity != e && (J = setTimeout(A, e - a)); j && (x(), w(), t(d, "deleted"))
        } 
    } function H() { if (c.__jstorage_meta.PubSub) { for (var a, b = D, g = len = c.__jstorage_meta.PubSub.length - 1; 0 <= g; g--) if (a = c.__jstorage_meta.PubSub[g], a[0] > D) { var b = a[0], k = a[1]; a = a[2]; if (u[k]) for (var e = 0, j = u[k].length; e < j; e++) u[k][e](k, n.parse(n.stringify(a))) } D = b } } var q = window.jQuery || window.$ ||
(window.$ = {}), n = { parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function (a) { return String(a).evalJSON() } || q.parseJSON || q.evalJSON, stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || q.toJSON }; if (!n.parse || !n.stringify) throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page"); var c = { __jstorage_meta: { CRC32: {}} }, l = { jStorage: "{}" }, f = null, C = 0, m = !1, p = {}, I = !1, s = 0, u = {}, D = +new Date, J,
E = { isXML: function (a) { return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1 }, encode: function (a) { if (!this.isXML(a)) return !1; try { return (new XMLSerializer).serializeToString(a) } catch (b) { try { return a.xml } catch (c) { } } return !1 }, decode: function (a) {
    var b = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function (a) { var b = new ActiveXObject("Microsoft.XMLDOM"); b.async = "false"; b.loadXML(a); return b }; if (!b) return !1; a = b.call("DOMParser" in window && new DOMParser || window,
a, "text/xml"); return this.isXML(a) ? a : !1
} 
}, B = function () { }; q.jStorage = { version: "0.3.1", set: function (a, b, g) {
    r(a); g = g || {}; if ("undefined" == typeof b) return this.deleteKey(a), b; if (E.isXML(b)) b = { _is_xml: !0, xml: E.encode(b) }; else { if ("function" == typeof b) return; b && "object" == typeof b && (b = n.parse(n.stringify(b))) } c[a] = b; for (var k = c.__jstorage_meta.CRC32, e = n.stringify(b), j = e.length, d = NaN ^ j, h = 0, f; 4 <= j; ) f = e.charCodeAt(h) & 255 | (e.charCodeAt(++h) & 255) << 8 | (e.charCodeAt(++h) & 255) << 16 | (e.charCodeAt(++h) & 255) << 24, f = 1540483477 *
(f & 65535) + ((1540483477 * (f >>> 16) & 65535) << 16), f ^= f >>> 24, f = 1540483477 * (f & 65535) + ((1540483477 * (f >>> 16) & 65535) << 16), d = 1540483477 * (d & 65535) + ((1540483477 * (d >>> 16) & 65535) << 16) ^ f, j -= 4, ++h; switch (j) { case 3: d ^= (e.charCodeAt(h + 2) & 255) << 16; case 2: d ^= (e.charCodeAt(h + 1) & 255) << 8; case 1: d ^= e.charCodeAt(h) & 255, d = 1540483477 * (d & 65535) + ((1540483477 * (d >>> 16) & 65535) << 16) } d ^= d >>> 13; d = 1540483477 * (d & 65535) + ((1540483477 * (d >>> 16) & 65535) << 16); k[a] = "2." + ((d ^ d >>> 15) >>> 0); this.setTTL(a, g.TTL || 0); B(a, b); t(a, "updated"); return b
},
    get: function (a, b) { r(a); return a in c ? c[a] && "object" == typeof c[a] && c[a]._is_xml ? E.decode(c[a].xml) : c[a] : "undefined" == typeof b ? null : b }, deleteKey: function (a) { r(a); return a in c ? (delete c[a], "object" == typeof c.__jstorage_meta.TTL && a in c.__jstorage_meta.TTL && delete c.__jstorage_meta.TTL[a], delete c.__jstorage_meta.CRC32[a], B(a, void 0), x(), w(), t(a, "deleted"), !0) : !1 }, setTTL: function (a, b) {
        var g = +new Date; r(a); b = Number(b) || 0; return a in c ? (c.__jstorage_meta.TTL || (c.__jstorage_meta.TTL = {}), 0 < b ? c.__jstorage_meta.TTL[a] =
g + b : delete c.__jstorage_meta.TTL[a], x(), A(), w(), !0) : !1
    }, getTTL: function (a) { var b = +new Date; r(a); return a in c && c.__jstorage_meta.TTL && c.__jstorage_meta.TTL[a] ? (a = c.__jstorage_meta.TTL[a] - b) || 0 : 0 }, flush: function () { c = { __jstorage_meta: { CRC32: {}} }; z("local", !0); x(); w(); t(null, "flushed"); return !0 }, storageObj: function () { function a() { } a.prototype = c; return new a }, index: function () { var a = [], b; for (b in c) c.hasOwnProperty(b) && "__jstorage_meta" != b && a.push(b); return a }, storageSize: function () { return C }, currentBackend: function () { return m },
    storageAvailable: function () { return !!m }, listenKeyChange: function (a, b) { r(a); p[a] || (p[a] = []); p[a].push(b) }, stopListening: function (a, b) { r(a); if (p[a]) if (b) for (var c = p[a].length - 1; 0 <= c; c--) p[a][c] == b && p[a].splice(c, 1); else delete p[a] }, subscribe: function (a, b) { a = (a || "").toString(); if (!a) throw new TypeError("Channel not defined"); u[a] || (u[a] = []); u[a].push(b) }, publish: function (a, b) {
        a = (a || "").toString(); if (!a) throw new TypeError("Channel not defined"); c.__jstorage_meta || (c.__jstorage_meta = {}); c.__jstorage_meta.PubSub ||
(c.__jstorage_meta.PubSub = []); c.__jstorage_meta.PubSub.unshift([+new Date, a, b]); x(); w()
    }, reInit: function () { F() } 
}; a: 
    {
        var y = !1; if ("localStorage" in window) try { window.localStorage.setItem("_tmptest", "tmpval"), y = !0, window.localStorage.removeItem("_tmptest") } catch (K) { } if (y) try { window.localStorage && (l = window.localStorage, m = "localStorage", s = l.jStorage_update) } catch (L) { } else if ("globalStorage" in window) try { window.globalStorage && (l = window.globalStorage[window.location.hostname], m = "globalStorage", s = l.jStorage_update) } catch (M) { } else if (f =
document.createElement("link"), f.addBehavior) { f.style.behavior = "url(#default#userData)"; document.getElementsByTagName("head")[0].appendChild(f); try { f.load("jStorage") } catch (N) { f.setAttribute("jStorage", "{}"), f.save("jStorage"), f.load("jStorage") } y = "{}"; try { y = f.getAttribute("jStorage") } catch (O) { } try { s = f.getAttribute("jStorage_update") } catch (P) { } l.jStorage = y; m = "userDataBehavior" } else { f = null; break a } G(); A(); z("local"); z("session"); "localStorage" == m || "globalStorage" == m ? "addEventListener" in window ? window.addEventListener("storage",
v, !1) : document.attachEvent("onstorage", v) : "userDataBehavior" == m && setInterval(v, 1E3); H(); "addEventListener" in window && window.addEventListener("pageshow", function (a) { a.persisted && v() }, !1)
    } 
})();