!(function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ngDatePicker = t() : e.ngDatePicker = t();
})(this, function() {
    return (function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "/", t(t.s = 47);
    })([ function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
    }, function(e, t) {
        var n = e.exports = {
            version: "2.5.1"
        };
        "number" == typeof __e && (__e = n);
    }, function(e, t, n) {
        var r = n(33)("wks"), a = n(34), i = n(0).Symbol, o = "function" == typeof i;
        (e.exports = function(e) {
            return r[e] || (r[e] = o && i[e] || (o ? i : a)("Symbol." + e));
        }).store = r;
    }, function(e, t, n) {
        var r = n(0), a = n(1), i = n(8), o = n(5), s = function(e, t, n) {
            var u, c, l, d = e & s.F, f = e & s.G, h = e & s.S, v = e & s.P, p = e & s.B, m = e & s.W, y = f ? a : a[t] || (a[t] = {}), g = y.prototype, M = f ? r : h ? r[t] : (r[t] || {}).prototype;
            f && (n = t);
            for (u in n) (c = !d && M && void 0 !== M[u]) && u in y || (l = c ? M[u] : n[u], 
            y[u] = f && "function" != typeof M[u] ? n[u] : p && c ? i(l, r) : m && M[u] == l ? (function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();

                          case 1:
                            return new e(t);

                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                    }
                    return e.apply(this, arguments);
                };
                return t.prototype = e.prototype, t;
            })(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((y.virtual || (y.virtual = {}))[u] = l, 
            e & s.R && g && !g[u] && o(g, u, l)));
        };
        s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s;
    }, function(e, t, n) {
        var r = n(9);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    }, function(e, t, n) {
        var r = n(6), a = n(22);
        e.exports = n(7) ? function(e, t, n) {
            return r.f(e, t, a(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    }, function(e, t, n) {
        var r = n(4), a = n(53), i = n(54), o = Object.defineProperty;
        t.f = n(7) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = i(t, !0), r(n), a) try {
                return o(e, t, n);
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
        };
    }, function(e, t, n) {
        e.exports = !n(12)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, function(e, t, n) {
        var r = n(11);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
              case 1:
                return function(n) {
                    return e.call(t, n);
                };

              case 2:
                return function(n, r) {
                    return e.call(t, n, r);
                };

              case 3:
                return function(n, r, a) {
                    return e.call(t, n, r, a);
                };
            }
            return function() {
                return e.apply(t, arguments);
            };
        };
    }, function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    }, function(e, t) {
        e.exports = {};
    }, function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    }, function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t);
        };
    }, function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1);
        };
    }, function(e, t, n) {
        var r = n(20);
        e.exports = function(e) {
            return Object(r(e));
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(65), a = (function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        })(r);
        t.default = (function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    (0, a.default)(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        })();
    }, function(e, t, n) {
        e.exports = {
            default: n(51),
            __esModule: !0
        };
    }, function(e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
        };
    }, function(e, t) {
        e.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    }, function(e, t, n) {
        var r = n(9), a = n(0).document, i = r(a) && r(a.createElement);
        e.exports = function(e) {
            return i ? a.createElement(e) : {};
        };
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    }, function(e, t, n) {
        var r = n(59), a = n(35);
        e.exports = Object.keys || function(e) {
            return r(e, a);
        };
    }, function(e, t, n) {
        var r = n(32), a = n(20);
        e.exports = function(e) {
            return r(a(e));
        };
    }, function(e, t, n) {
        var r = n(19), a = Math.min;
        e.exports = function(e) {
            return e > 0 ? a(r(e), 9007199254740991) : 0;
        };
    }, function(e, t, n) {
        var r = n(33)("keys"), a = n(34);
        e.exports = function(e) {
            return r[e] || (r[e] = a(e));
        };
    }, function(e, t, n) {
        var r = n(6).f, a = n(13), i = n(2)("toStringTag");
        e.exports = function(e, t, n) {
            e && !a(e = n ? e : e.prototype, i) && r(e, i, {
                configurable: !0,
                value: t
            });
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            var t, n;
            this.promise = new e(function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r;
            }), this.resolve = a(t), this.reject = a(n);
        }
        var a = n(11);
        e.exports.f = function(e) {
            return new r(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(52)(!0);
        n(30)(String, "String", function(e) {
            this._t = String(e), this._i = 0;
        }, function() {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            });
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(31), a = n(3), i = n(55), o = n(5), s = n(13), u = n(10), c = n(56), l = n(27), d = n(62), f = n(2)("iterator"), h = !([].keys && "next" in [].keys()), v = function() {
            return this;
        };
        e.exports = function(e, t, n, p, m, y, g) {
            c(n, t, p);
            var M, _, D, b = function(e) {
                if (!h && e in O) return O[e];
                switch (e) {
                  case "keys":
                  case "values":
                    return function() {
                        return new n(this, e);
                    };
                }
                return function() {
                    return new n(this, e);
                };
            }, A = t + " Iterator", x = "values" == m, T = !1, O = e.prototype, E = O[f] || O["@@iterator"] || m && O[m], k = E || b(m), w = m ? x ? b("entries") : k : void 0, C = "Array" == t ? O.entries || E : E;
            if (C && (D = d(C.call(new e()))) !== Object.prototype && D.next && (l(D, A, !0), 
            r || s(D, f) || o(D, f, v)), x && E && "values" !== E.name && (T = !0, k = function() {
                return E.call(this);
            }), r && !g || !h && !T && O[f] || o(O, f, k), u[t] = k, u[A] = v, m) if (M = {
                values: x ? k : b("values"),
                keys: y ? k : b("keys"),
                entries: w
            }, g) for (_ in M) _ in O || i(O, _, M[_]); else a(a.P + a.F * (h || T), t, M);
            return M;
        };
    }, function(e, t) {
        e.exports = !0;
    }, function(e, t, n) {
        var r = n(14);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
        };
    }, function(e, t, n) {
        var r = n(0), a = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        e.exports = function(e) {
            return a[e] || (a[e] = {});
        };
    }, function(e, t) {
        var n = 0, r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
        };
    }, function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(e, t, n) {
        var r = n(0).document;
        e.exports = r && r.documentElement;
    }, function(e, t, n) {
        var r = n(4);
        e.exports = function(e, t, n, a) {
            try {
                return a ? t(r(n)[0], n[1]) : t(n);
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && r(i.call(e)), t;
            }
        };
    }, function(e, t, n) {
        var r = n(10), a = n(2)("iterator"), i = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || i[a] === e);
        };
    }, function(e, t, n) {
        var r = n(40), a = n(2)("iterator"), i = n(10);
        e.exports = n(1).getIteratorMethod = function(e) {
            if (void 0 != e) return e[a] || e["@@iterator"] || i[r(e)];
        };
    }, function(e, t, n) {
        var r = n(14), a = n(2)("toStringTag"), i = "Arguments" == r((function() {
            return arguments;
        })()), o = function(e, t) {
            try {
                return e[t];
            } catch (e) {}
        };
        e.exports = function(e) {
            var t, n, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = o(t = Object(e), a)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s;
        };
    }, function(e, t, n) {
        var r = n(2)("iterator"), a = !1;
        try {
            var i = [ 7 ][r]();
            i.return = function() {
                a = !0;
            }, Array.from(i, function() {
                throw 2;
            });
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var i = [ 7 ], o = i[r]();
                o.next = function() {
                    return {
                        done: n = !0
                    };
                }, i[r] = function() {
                    return o;
                }, e(i);
            } catch (e) {}
            return n;
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DATE_COLUMNS = t.WEEK_OF_ROW = t.Helper = void 0;
        var r = n(18), a = (function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        })(r), i = {
            daysGenerator: function(e) {
                var t = e.d, n = e.DATE_FORMAT, r = e.dateMax, o = e.dateMin, s = e.disabledMinDate, u = e.disabledMaxDate, c = e.canDisabledWeekdays, l = e.disabledWeekdays, d = [], f = i.getFirstDayOfMonth(t), h = i.getDaysInPrevMonth(t);
                if (7 !== f) for (var v = h - f; v < h; ) {
                    var p = ++v, m = moment(t).subtract(1, "months").set("date", p).startOf("date");
                    d.push({
                        date: m.format(n),
                        value: m.valueOf(),
                        prev: !0,
                        day: p
                    });
                }
                (0, a.default)({
                    length: moment(t).daysInMonth()
                }).forEach(function(e, a) {
                    var f = a + 1, h = moment(t).set("date", f).startOf("date"), v = h.format(n), p = h.valueOf(), m = h.isoWeekday(), y = o && p <= s, g = r && p >= u, M = i.handleIsToday(v, n), _ = c && l.includes(m);
                    d.push({
                        date: v,
                        disabled: y || g || _,
                        value: p,
                        isToday: M,
                        day: f
                    });
                });
                for (var y = 0, g = 42 - d.length; y <= g; ) {
                    var M = ++y, _ = moment(t).add(1, "months").set("date", M).startOf("date");
                    d.push({
                        date: _.format(n),
                        value: _.valueOf(),
                        next: !0,
                        day: M
                    });
                }
                return d;
            },
            handleIsToday: function(e, t) {
                var n = moment(new Date(), t);
                return moment(e, t).isSame(n, "day");
            },
            getDaysInPrevMonth: function(e) {
                return moment(e).subtract(1, "months").daysInMonth();
            },
            getFirstDayOfMonth: function(e) {
                return moment(e).set("date", 1).get("day");
            },
            validateDate: function(e, t) {
                return !!e && moment(e, t, !0).isValid();
            }
        };
        t.Helper = i, t.WEEK_OF_ROW = 7, t.DATE_COLUMNS = 6;
    }, function(e, t, n) {
        var r = n(4), a = n(11), i = n(2)("species");
        e.exports = function(e, t) {
            var n, o = r(e).constructor;
            return void 0 === o || void 0 == (n = r(o)[i]) ? t : a(n);
        };
    }, function(e, t, n) {
        var r, a, i, o = n(8), s = n(89), u = n(36), c = n(21), l = n(0), d = l.process, f = l.setImmediate, h = l.clearImmediate, v = l.MessageChannel, p = l.Dispatch, m = 0, y = {}, g = function() {
            var e = +this;
            if (y.hasOwnProperty(e)) {
                var t = y[e];
                delete y[e], t();
            }
        }, M = function(e) {
            g.call(e.data);
        };
        f && h || (f = function(e) {
            for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
            return y[++m] = function() {
                s("function" == typeof e ? e : Function(e), t);
            }, r(m), m;
        }, h = function(e) {
            delete y[e];
        }, "process" == n(14)(d) ? r = function(e) {
            d.nextTick(o(g, e, 1));
        } : p && p.now ? r = function(e) {
            p.now(o(g, e, 1));
        } : v ? (a = new v(), i = a.port2, a.port1.onmessage = M, r = o(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
            l.postMessage(e + "", "*");
        }, l.addEventListener("message", M, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
            u.appendChild(c("script")).onreadystatechange = function() {
                u.removeChild(this), g.call(e);
            };
        } : function(e) {
            setTimeout(o(g, e, 1), 0);
        }), e.exports = {
            set: f,
            clear: h
        };
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                };
            } catch (e) {
                return {
                    e: !0,
                    v: e
                };
            }
        };
    }, function(e, t, n) {
        var r = n(4), a = n(9), i = n(28);
        e.exports = function(e, t) {
            if (r(e), a(t) && t.constructor === e) return t;
            var n = i.f(e);
            return (0, n.resolve)(t), n.promise;
        };
    }, function(e, t, n) {
        n(48), e.exports = n(103);
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(49), i = r(a), o = n(69), s = r(o), u = n(72), c = r(u), l = n(74), d = r(l), f = n(101), h = {
            selector: "datepicker",
            bindings: {
                dateFormat: "@",
                dateMin: "<",
                dateMax: "<",
                disabled: "<",
                datepickerVisibility: "<",
                dateDisabledWeekdays: "@",
                allowClear: "@"
            },
            require: {
                ngModel: "^ngModel"
            },
            controllerAs: "vm",
            template: f,
            controller: d.default
        };
        t.default = angular.module("ngDatepicker", [ i.default, s.default ]).component(h.selector, h).component(c.default.selector, c.default).run([ "$templateCache", function(e) {
            e.put("ngCalendar.html", n(102));
        } ]).name;
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(50), a = (function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        })(r), i = n(68), o = {
            selector: "calendarDates",
            bindings: {
                dates: "<",
                selectedDate: "<",
                dateFormat: "@",
                onClickDate: "&"
            },
            controllerAs: "vm",
            template: i,
            controller: a.default
        };
        t.default = angular.module("ngCalendarDates", []).component(o.selector, o).name;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(18), i = r(a), o = n(16), s = r(o), u = n(17), c = r(u), l = n(42), d = (function() {
            function e(t, n, r, a) {
                "ngInject";
                (0, s.default)(this, e);
                var o = a.DATETIME_FORMATS.SHORTDAY;
                this.SHORTDAY = o.map(function(e) {
                    return e.replace("周", "");
                }), this.DATE_COLUMNS = (0, i.default)({
                    length: l.DATE_COLUMNS
                }).map(function(e, t) {
                    return t + 1;
                });
            }
            return e.$inject = [ "$scope", "$element", "$attrs", "$locale" ], (0, c.default)(e, [ {
                key: "daysOfWeeks",
                value: function(e) {
                    this.dates = this.dates || [];
                    var t = (e - 1) * l.WEEK_OF_ROW;
                    return this.dates.slice(1 * t, t + l.WEEK_OF_ROW);
                }
            }, {
                key: "handleIsSelectedDate",
                value: function(e) {
                    var t = moment(e, this.dateFormat), n = moment(this.selectedDate, this.dateFormat);
                    return t.isSame(n, "day");
                }
            }, {
                key: "onSelectDate",
                value: function(e) {
                    this.onClickDate && this.onClickDate({
                        date: e
                    });
                }
            } ]), e;
        })();
        t.default = d;
    }, function(e, t, n) {
        n(29), n(63), e.exports = n(1).Array.from;
    }, function(e, t, n) {
        var r = n(19), a = n(20);
        e.exports = function(e) {
            return function(t, n) {
                var i, o, s = String(a(t)), u = r(n), c = s.length;
                return u < 0 || u >= c ? e ? "" : void 0 : (i = s.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === c || (o = s.charCodeAt(u + 1)) < 56320 || o > 57343 ? e ? s.charAt(u) : i : e ? s.slice(u, u + 2) : o - 56320 + (i - 55296 << 10) + 65536);
            };
        };
    }, function(e, t, n) {
        e.exports = !n(7) && !n(12)(function() {
            return 7 != Object.defineProperty(n(21)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, function(e, t, n) {
        var r = n(9);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, a;
            if (t && "function" == typeof (n = e.toString) && !r(a = n.call(e))) return a;
            if ("function" == typeof (n = e.valueOf) && !r(a = n.call(e))) return a;
            if (!t && "function" == typeof (n = e.toString) && !r(a = n.call(e))) return a;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function(e, t, n) {
        e.exports = n(5);
    }, function(e, t, n) {
        "use strict";
        var r = n(57), a = n(22), i = n(27), o = {};
        n(5)(o, n(2)("iterator"), function() {
            return this;
        }), e.exports = function(e, t, n) {
            e.prototype = r(o, {
                next: a(1, n)
            }), i(e, t + " Iterator");
        };
    }, function(e, t, n) {
        var r = n(4), a = n(58), i = n(35), o = n(26)("IE_PROTO"), s = function() {}, u = function() {
            var e, t = n(21)("iframe"), r = i.length;
            for (t.style.display = "none", n(36).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, 
            e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--; ) delete u.prototype[i[r]];
            return u();
        };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (s.prototype = r(e), n = new s(), s.prototype = null, n[o] = e) : n = u(), 
            void 0 === t ? n : a(n, t);
        };
    }, function(e, t, n) {
        var r = n(6), a = n(4), i = n(23);
        e.exports = n(7) ? Object.defineProperties : function(e, t) {
            a(e);
            for (var n, o = i(t), s = o.length, u = 0; s > u; ) r.f(e, n = o[u++], t[n]);
            return e;
        };
    }, function(e, t, n) {
        var r = n(13), a = n(24), i = n(60)(!1), o = n(26)("IE_PROTO");
        e.exports = function(e, t) {
            var n, s = a(e), u = 0, c = [];
            for (n in s) n != o && r(s, n) && c.push(n);
            for (;t.length > u; ) r(s, n = t[u++]) && (~i(c, n) || c.push(n));
            return c;
        };
    }, function(e, t, n) {
        var r = n(24), a = n(25), i = n(61);
        e.exports = function(e) {
            return function(t, n, o) {
                var s, u = r(t), c = a(u.length), l = i(o, c);
                if (e && n != n) {
                    for (;c > l; ) if ((s = u[l++]) != s) return !0;
                } else for (;c > l; l++) if ((e || l in u) && u[l] === n) return e || l || 0;
                return !e && -1;
            };
        };
    }, function(e, t, n) {
        var r = n(19), a = Math.max, i = Math.min;
        e.exports = function(e, t) {
            return e = r(e), e < 0 ? a(e + t, 0) : i(e, t);
        };
    }, function(e, t, n) {
        var r = n(13), a = n(15), i = n(26)("IE_PROTO"), o = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = a(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(8), a = n(3), i = n(15), o = n(37), s = n(38), u = n(25), c = n(64), l = n(39);
        a(a.S + a.F * !n(41)(function(e) {
            Array.from(e);
        }), "Array", {
            from: function(e) {
                var t, n, a, d, f = i(e), h = "function" == typeof this ? this : Array, v = arguments.length, p = v > 1 ? arguments[1] : void 0, m = void 0 !== p, y = 0, g = l(f);
                if (m && (p = r(p, v > 2 ? arguments[2] : void 0, 2)), void 0 == g || h == Array && s(g)) for (t = u(f.length), 
                n = new h(t); t > y; y++) c(n, y, m ? p(f[y], y) : f[y]); else for (d = g.call(f), 
                n = new h(); !(a = d.next()).done; y++) c(n, y, m ? o(d, p, [ a.value, y ], !0) : a.value);
                return n.length = y, n;
            }
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(6), a = n(22);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, a(0, n)) : e[t] = n;
        };
    }, function(e, t, n) {
        e.exports = {
            default: n(66),
            __esModule: !0
        };
    }, function(e, t, n) {
        n(67);
        var r = n(1).Object;
        e.exports = function(e, t, n) {
            return r.defineProperty(e, t, n);
        };
    }, function(e, t, n) {
        var r = n(3);
        r(r.S + r.F * !n(7), "Object", {
            defineProperty: n(6).f
        });
    }, function(e, t) {
        e.exports = "<div class=calendar-days> <table class=calendar-table cellspacing=0> <thead> <tr role=row> <th ng-repeat=\"day in vm.SHORTDAY\" class=calendar-column-header>{{day}}</th> </tr> </thead> <tbody> <tr role=row ng-repeat=\"column in vm.DATE_COLUMNS track by column\"> <td class=calendar-cell ng-repeat=\"d in vm.daysOfWeeks(column) track by $index\" ng-class=\"{\n                        'calendar-last-month-cell': d.prev,\n                        'calendar-next-month-btn-day': d.next,\n                        'calendar-selected-day': vm.handleIsSelectedDate(d.date),\n                        'calendar-today': d.isToday,\n                        'calenday-disabled': d.disabled\n                    }\"> <button class=calendar-date type=button ng-disabled=\"d.disabled || d.prev || d.next\" ng-click=vm.onSelectDate(d); title={{d.date}}>{{d.day}}</button> </td> </tr> </tbody> </table> </div>";
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(70), a = (function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        })(r), i = n(71), o = {
            selector: "calendarYears",
            bindings: {
                calendarDate: "<",
                yearsPanelOpened: "<",
                selectedDate: "<",
                disabledMinYear: "@",
                disabledMaxYear: "@",
                onSelectYear: "&"
            },
            controllerAs: "vm",
            template: i,
            controller: a.default
        };
        t.default = angular.module("ngCalendarYears", []).component(o.selector, o).name;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(16), i = r(a), o = n(17), s = r(o), u = (function() {
            function e() {
                (0, i.default)(this, e);
            }
            return (0, s.default)(e, [ {
                key: "$onChanges",
                value: function(e) {
                    var t = e.yearsPanelOpened;
                    t && t.currentValue && (this.years = this.yearsGenerator(this.selectedDate || this.calendarDate));
                }
            }, {
                key: "isActiveYear",
                value: function(e) {
                    return moment(this.calendarDate).get("year") === e;
                }
            }, {
                key: "handleSelectYear",
                value: function(e) {
                    this.onSelectYear({
                        y: e
                    });
                }
            }, {
                key: "yearsGenerator",
                value: function(e) {
                    for (var t = [], n = moment(e).get("year"), r = 10; r > 0; r -= 1) t.push(+n - r);
                    for (var a = 0; a < 14; a += 1) t.push(+n + a);
                    return t;
                }
            } ]), e;
        })();
        t.default = u;
    }, function(e, t) {
        e.exports = '<div class="calendar-years-wrap clearfix" ng-class="{\n        visible : vm.yearsPanelOpened,\n        hidden: !vm.yearsPanelOpened\n    }"> <a class="calendar-year calendar-year-btn" ng-class="{\n            \'active-year\': vm.isActiveYear(y),\n            disabled: (vm.disabledMinYear && vm.disabledMinYear > y) || (vm.disabledMaxYear && vm.disabledMaxYear < y)\n        }" ng-click=vm.handleSelectYear(y) ng-repeat="y in vm.years track by y"> <span>{{y}}</span> </a> </div>';
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(16), i = r(a), o = n(17), s = r(o), u = n(73), c = (function() {
            function e() {
                (0, i.default)(this, e);
            }
            return (0, s.default)(e, [ {
                key: "$onInit",
                value: function() {
                    this.dateFormat = this.dateFormat || "YYYY-MM-DD HH:mm", this.selectedDate = moment(this.selectedDate || new Date(), this.dateFormat), 
                    this.hour = this.getTime("hour", this.selectedDate), this.minute = this.getTime("minute", this.selectedDate);
                }
            }, {
                key: "$onChanges",
                value: function(e) {
                    var t = e.selectedDate;
                    t && t.currentValue !== t.previousValue && (moment(t.currentValue, "YYYY-MM-DD").isSame(moment(t.previousValue, "YYYY-MM-DD")) || this.updateTime());
                }
            }, {
                key: "updateTime",
                value: function() {
                    this.canDisableTimeMin() ? (this.hourMin = this.getTime("hour", this.dateMin), this.minuteMin = this.getTime("minute", this.dateMin), 
                    this.hour = this.hourMin, this.minute = this.minuteMin, this.hanldeTimeChange()) : (this.hourMin = 0, 
                    this.minuteMin = 0);
                }
            }, {
                key: "hanldeTimeChange",
                value: function() {
                    this.onChange({
                        hour: this.hour,
                        minute: this.minute
                    });
                }
            }, {
                key: "getTime",
                value: function(e, t) {
                    return moment(t, this.dateFormat).get(e);
                }
            }, {
                key: "dateTransform",
                value: function(e) {
                    return e = +e || 0, e < 10 ? "0" + e : e;
                }
            }, {
                key: "canDisableTimeMin",
                value: function() {
                    if (this.dateMin) {
                        var e = moment(this.selectedDate, this.dateFormat), t = moment(this.dateMin, this.dateFormat);
                        return moment(e).isSame(t, "day");
                    }
                    return !1;
                }
            } ]), e;
        })(), l = {
            selector: "timePicker",
            bindings: {
                dateFormat: "@",
                selectedDate: "<",
                onChange: "&",
                dateMin: "<"
            },
            controllerAs: "vm",
            template: u,
            controller: c
        };
        t.default = l;
    }, function(e, t) {
        e.exports = '<div class=range-slider-wrapper> <div class=time-current>{{vm.dateTransform(vm.hour)}} : {{vm.dateTransform(vm.minute)}}</div> <div class=range-slider-item> <input type=range min={{vm.hourMin}} max=23 step=1 ng-model-options="{debounce: 10}" ng-change="vm.hanldeTimeChange(\'HH\', vm.hour);" ng-model=vm.hour list=tickmarks> </div> <div class=range-slider-item> <input type=range min={{vm.minuteMin}} max=59 step=1 ng-change="vm.hanldeTimeChange(\'MM\', vm.minute);" ng-model-options="{debounce: 10}" ng-model=vm.minute> </div> </div>';
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(75), i = r(a), o = n(79), s = r(o), u = n(18), c = r(u), l = n(95), d = r(l), f = n(16), h = r(f), v = n(17), p = r(v), m = n(42), y = moment(new Date(), "YYYY-MM-DD").startOf("date"), g = (function() {
            function e(t, n, r, a, i, o, s, u) {
                "ngInject";
                (0, h.default)(this, e), (0, d.default)(this, {
                    $scope: t,
                    $element: n,
                    $attrs: r,
                    $compile: a,
                    $timeout: i,
                    $window: o,
                    $templateCache: s
                });
                var l = u.DATETIME_FORMATS, f = l.SHORTDAY, v = l.MONTH;
                this.SHORTDAY = f, this.SHORTMONTH = v, this.DATE_COLUMNS = (0, c.default)({
                    length: m.DATE_COLUMNS
                }).map(function(e, t) {
                    return t + 1;
                }), this.DATE_FORMAT = this.dateFormat || "YYYY-MM-DD", this.hideCalendar = this.hideCalendar.bind(this);
            }
            return e.$inject = [ "$scope", "$element", "$attrs", "$compile", "$timeout", "$window", "$templateCache", "$locale" ], 
            (0, p.default)(e, [ {
                key: "$onInit",
                value: function() {
                    var e = this, t = this.$attrs, n = t.timePicker, r = t.pickerId, a = m.Helper.validateDate, i = this.$element[0];
                    this.input = angular.element(i.querySelector(".calendar-picker-input")), this.calendarIsOpend = !1, 
                    "true" === n && (this.timePicker = !0), r && (this.input[0].id = r), this.dateDisabledWeekdays = this.$scope.$eval(this.dateDisabledWeekdays), 
                    this.ngModel.$render = function() {
                        e.CALENDAR_DATE = a(e.ngModel.$viewValue, e.DATE_FORMAT) ? moment(e.ngModel.$viewValue, e.DATE_FORMAT) : moment(), 
                        e.ngModel.$viewValue && a(e.ngModel.$viewValue, e.DATE_FORMAT) && (e.ngModelDate = moment(e.ngModel.$viewValue, e.DATE_FORMAT).format(e.DATE_FORMAT)), 
                        e.updateDatePanel(e.CALENDAR_DATE);
                    }, this.bindAttributes(this.input[0]), this.bindEvents();
                }
            }, {
                key: "$onChanges",
                value: function(e) {
                    var t = m.Helper.validateDate, n = e.dateMin, r = e.dateMax, a = e.datepickerVisibility;
                    (n && n.currentValue !== n.previousValue || r && r.currentValue !== r.previousValue) && t(this.CALENDAR_DATE, this.DATE_FORMAT) && this.updateDatePanel(this.CALENDAR_DATE), 
                    a && (a.currentValue && this.showCalendar(), !1 === a.currentValue && this.hideCalendar());
                }
            }, {
                key: "handleSetDate",
                value: function(e) {
                    var t = e.prev, n = e.next, r = e.day;
                    t || n || (this.CALENDAR_DATE = this.CALENDAR_DATE.set("date", r), this.ngModelDate = this.CALENDAR_DATE.clone().format(this.DATE_FORMAT), 
                    this.ngModel.$setViewValue(this.ngModelDate), this.yearsPanelOpened = !1, this.timePicker || this.hideCalendar());
                }
            }, {
                key: "handleTimeOnChange",
                value: function(e) {
                    var t = e.hour, n = e.minute;
                    this.CALENDAR_DATE = this.CALENDAR_DATE.set({
                        hour: t,
                        minute: n
                    }), this.ngModelDate = this.CALENDAR_DATE.clone().format(this.DATE_FORMAT), this.ngModel.$setViewValue(this.ngModelDate);
                }
            }, {
                key: "handleClearDate",
                value: function() {
                    this.ngModelDate && (this.ngModelDate = null, this.ngModel.$setViewValue(this.ngModelDate), 
                    this.updateDatePanel(this.CALENDAR_DATE));
                }
            }, {
                key: "handleToggleYearPanel",
                value: function() {
                    this.yearsPanelOpened = !this.yearsPanelOpened;
                }
            }, {
                key: "handlePickerYear",
                value: function(e) {
                    if (this.CALENDAR_DATE.get("year") === e) return void this.handleToggleYearPanel();
                    this.CALENDAR_DATE = this.CALENDAR_DATE.set("year", e), this.updateDatePanel(this.CALENDAR_DATE), 
                    this.handleToggleYearPanel();
                }
            }, {
                key: "hanleChangeMonth",
                value: function(e) {
                    this.CALENDAR_DATE = "next" === e ? this.CALENDAR_DATE.add(1, "months") : this.CALENDAR_DATE.subtract(1, "months"), 
                    this.updateDatePanel(this.CALENDAR_DATE);
                }
            }, {
                key: "daysGenerator",
                value: function(e) {
                    var t = m.Helper.validateDate;
                    if (t(this.dateMin, this.DATE_FORMAT)) {
                        var n = moment(this.dateMin, this.DATE_FORMAT).startOf("date");
                        this.disabledMinDate = n.valueOf(), this.disabledMinYear = n.get("year"), this.disabledTodayBtn = this.disabledMinDate >= y.valueOf();
                    }
                    if (t(this.dateMax, this.DATE_FORMAT)) {
                        var r = moment(this.dateMax, this.DATE_FORMAT).startOf("date");
                        this.disabledMaxDate = r.valueOf(), this.disabledMaxYear = r.get("year");
                    }
                    var a = this.dateDisabledWeekdays, i = a && a.length;
                    return m.Helper.daysGenerator({
                        d: e,
                        DATE_FORMAT: this.DATE_FORMAT,
                        dateMax: this.dateMax,
                        dateMin: this.dateMin,
                        disabledMinDate: this.disabledMinDate,
                        disabledMaxDate: this.disabledMaxDate,
                        canDisabledWeekdays: i,
                        disabledWeekdays: a
                    });
                }
            }, {
                key: "hiddenMonthBtn",
                value: function(e) {
                    var t = moment(this.CALENDAR_DATE, "YYYY-MM");
                    if ("prev" === e && this.dateMin) {
                        var n = moment(this.dateMin, "YYYY-MM");
                        return moment(t).isSame(n, "month");
                    }
                    if ("next" === e && this.dateMax) {
                        var r = moment(this.dateMax, "YYYY-MM");
                        return moment(t).isSame(r, "month");
                    }
                    return !1;
                }
            }, {
                key: "updateDatePanel",
                value: function(e) {
                    var t = this.daysGenerator(e);
                    this.daysInMonth = t, this.headerDate = moment(e).valueOf();
                }
            }, {
                key: "setStylesOnElement",
                value: function(e, t) {
                    e && (0, d.default)(e.style, t);
                }
            }, {
                key: "createCalendar",
                value: function() {
                    var e = this;
                    return new s.default(function(t) {
                        if (e.calendar) t(); else {
                            var n = e.$templateCache.get("ngCalendar.html"), r = angular.element(n);
                            e.$compile(r)(e.$scope), angular.element(e.$element).append(r), e.calendar = angular.element(r)[0], 
                            e.calendar.id = "ng-calendar-" + new Date().getTime(), angular.element(e.calendar).on("click", function(e) {
                                return e.stopPropagation();
                            });
                            var a = e.$timeout(function() {
                                e.$timeout.cancel(a), t();
                            }, 100);
                        }
                    });
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var e = this;
                    this.input.on("focus click", function(t) {
                        t.stopPropagation(), e.createCalendar().then(function() {
                            e.showCalendar();
                        });
                    });
                }
            }, {
                key: "showCalendar",
                value: function() {
                    var e = this;
                    this.calendar ? (angular.element(this.$window).on("click", this.hideCalendar), this.calendarIsOpend = !0, 
                    this.calendarPosition()) : this.createCalendar().then(function() {
                        e.showCalendar();
                    });
                }
            }, {
                key: "hideCalendar",
                value: function() {
                    var e = this;
                    this.calendarIsOpend = !1, this.yearsPanelOpened = !1, angular.element(this.$window).off("click", this.hideCalendar);
                    var t = this.$timeout(function() {
                        if (e.$timeout.cancel(t), e.ngModelDate) {
                            var n = moment(e.ngModelDate, e.DATE_FORMAT), r = moment(e.CALENDAR_DATE, e.DATE_FORMAT);
                            n.isSame(r, "day") || (e.CALENDAR_DATE = n.clone(), e.updateDatePanel(e.ngModelDate));
                        }
                    });
                    this.calendar && this.calendar.classList.remove("active-calendar");
                }
            }, {
                key: "hiddenOtherCalendar",
                value: function() {
                    var e = document.querySelectorAll(".active-calendar");
                    e.length && Array.prototype.forEach.call(e, function(e) {
                        e.classList.remove("active-calendar");
                    });
                }
            }, {
                key: "bindAttributes",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var n = [ "placeholder", "required" ];
                        (0, i.default)(this.$attrs).forEach(function(r) {
                            n.includes(r) && e.setAttribute(r, t.$attrs[r]);
                        });
                    }
                }
            }, {
                key: "calendarPosition",
                value: function() {
                    this.hiddenOtherCalendar(), this.calendar.classList.add("active-calendar");
                }
            }, {
                key: "$onDestroy",
                value: function() {
                    angular.element(this.$window).off("click", this.hideCalendar), this.calendar && (this.calendar.parentNode.removeChild(this.calendar), 
                    this.calendar = null);
                }
            }, {
                key: "selectedMonthFormat",
                get: function() {
                    return this.SHORTMONTH[moment(this.headerDate).format("M") - 1];
                }
            } ]), e;
        })();
        t.default = g;
    }, function(e, t, n) {
        e.exports = {
            default: n(76),
            __esModule: !0
        };
    }, function(e, t, n) {
        n(77), e.exports = n(1).Object.keys;
    }, function(e, t, n) {
        var r = n(15), a = n(23);
        n(78)("keys", function() {
            return function(e) {
                return a(r(e));
            };
        });
    }, function(e, t, n) {
        var r = n(3), a = n(1), i = n(12);
        e.exports = function(e, t) {
            var n = (a.Object || {})[e] || Object[e], o = {};
            o[e] = t(n), r(r.S + r.F * i(function() {
                n(1);
            }), "Object", o);
        };
    }, function(e, t, n) {
        e.exports = {
            default: n(80),
            __esModule: !0
        };
    }, function(e, t, n) {
        n(81), n(29), n(82), n(86), n(93), n(94), e.exports = n(1).Promise;
    }, function(e, t) {}, function(e, t, n) {
        n(83);
        for (var r = n(0), a = n(5), i = n(10), o = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
            var c = s[u], l = r[c], d = l && l.prototype;
            d && !d[o] && a(d, o, c), i[c] = i.Array;
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(84), a = n(85), i = n(10), o = n(24);
        e.exports = n(30)(Array, "Array", function(e, t) {
            this._t = o(e), this._i = 0, this._k = t;
        }, function() {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, a(1)) : "keys" == t ? a(0, n) : "values" == t ? a(0, e[n]) : a(0, [ n, e[n] ]);
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, function(e, t) {
        e.exports = function() {};
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            };
        };
    }, function(e, t, n) {
        "use strict";
        var r, a, i, o, s = n(31), u = n(0), c = n(8), l = n(40), d = n(3), f = n(9), h = n(11), v = n(87), p = n(88), m = n(43), y = n(44).set, g = n(90)(), M = n(28), _ = n(45), D = n(46), b = u.TypeError, A = u.process, x = u.Promise, T = "process" == l(A), O = function() {}, E = a = M.f, k = !!(function() {
            try {
                var e = x.resolve(1), t = (e.constructor = {})[n(2)("species")] = function(e) {
                    e(O, O);
                };
                return (T || "function" == typeof PromiseRejectionEvent) && e.then(O) instanceof t;
            } catch (e) {}
        })(), w = function(e) {
            var t;
            return !(!f(e) || "function" != typeof (t = e.then)) && t;
        }, C = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                g(function() {
                    for (var r = e._v, a = 1 == e._s, i = 0; n.length > i; ) !(function(t) {
                        var n, i, o = a ? t.ok : t.fail, s = t.resolve, u = t.reject, c = t.domain;
                        try {
                            o ? (a || (2 == e._h && R(e), e._h = 1), !0 === o ? n = r : (c && c.enter(), n = o(r), 
                            c && c.exit()), n === t.promise ? u(b("Promise-chain cycle")) : (i = w(n)) ? i.call(n, s, u) : s(n)) : u(r);
                        } catch (e) {
                            u(e);
                        }
                    })(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && P(e);
                });
            }
        }, P = function(e) {
            y.call(u, function() {
                var t, n, r, a = e._v, i = S(e);
                if (i && (t = _(function() {
                    T ? A.emit("unhandledRejection", a, e) : (n = u.onunhandledrejection) ? n({
                        promise: e,
                        reason: a
                    }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", a);
                }), e._h = T || S(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v;
            });
        }, S = function(e) {
            if (1 == e._h) return !1;
            for (var t, n = e._a || e._c, r = 0; n.length > r; ) if (t = n[r++], t.fail || !S(t.promise)) return !1;
            return !0;
        }, R = function(e) {
            y.call(u, function() {
                var t;
                T ? A.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                });
            });
        }, j = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), 
            C(t, !0));
        }, L = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw b("Promise can't be resolved itself");
                    (t = w(e)) ? g(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, c(L, r, 1), c(j, r, 1));
                        } catch (e) {
                            j.call(r, e);
                        }
                    }) : (n._v = e, n._s = 1, C(n, !1));
                } catch (e) {
                    j.call({
                        _w: n,
                        _d: !1
                    }, e);
                }
            }
        };
        k || (x = function(e) {
            v(this, x, "Promise", "_h"), h(e), r.call(this);
            try {
                e(c(L, this, 1), c(j, this, 1));
            } catch (e) {
                j.call(this, e);
            }
        }, r = function(e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
            this._n = !1;
        }, r.prototype = n(91)(x.prototype, {
            then: function(e, t) {
                var n = E(m(this, x));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, 
                n.domain = T ? A.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && C(this, !1), 
                n.promise;
            },
            catch: function(e) {
                return this.then(void 0, e);
            }
        }), i = function() {
            var e = new r();
            this.promise = e, this.resolve = c(L, e, 1), this.reject = c(j, e, 1);
        }, M.f = E = function(e) {
            return e === x || e === o ? new i(e) : a(e);
        }), d(d.G + d.W + d.F * !k, {
            Promise: x
        }), n(27)(x, "Promise"), n(92)("Promise"), o = n(1).Promise, d(d.S + d.F * !k, "Promise", {
            reject: function(e) {
                var t = E(this);
                return (0, t.reject)(e), t.promise;
            }
        }), d(d.S + d.F * (s || !k), "Promise", {
            resolve: function(e) {
                return D(s && this === o ? x : this, e);
            }
        }), d(d.S + d.F * !(k && n(41)(function(e) {
            x.all(e).catch(O);
        })), "Promise", {
            all: function(e) {
                var t = this, n = E(t), r = n.resolve, a = n.reject, i = _(function() {
                    var n = [], i = 0, o = 1;
                    p(e, !1, function(e) {
                        var s = i++, u = !1;
                        n.push(void 0), o++, t.resolve(e).then(function(e) {
                            u || (u = !0, n[s] = e, --o || r(n));
                        }, a);
                    }), --o || r(n);
                });
                return i.e && a(i.v), n.promise;
            },
            race: function(e) {
                var t = this, n = E(t), r = n.reject, a = _(function() {
                    p(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r);
                    });
                });
                return a.e && r(a.v), n.promise;
            }
        });
    }, function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e;
        };
    }, function(e, t, n) {
        var r = n(8), a = n(37), i = n(38), o = n(4), s = n(25), u = n(39), c = {}, l = {}, t = e.exports = function(e, t, n, d, f) {
            var h, v, p, m, y = f ? function() {
                return e;
            } : u(e), g = r(n, d, t ? 2 : 1), M = 0;
            if ("function" != typeof y) throw TypeError(e + " is not iterable!");
            if (i(y)) {
                for (h = s(e.length); h > M; M++) if ((m = t ? g(o(v = e[M])[0], v[1]) : g(e[M])) === c || m === l) return m;
            } else for (p = y.call(e); !(v = p.next()).done; ) if ((m = a(p, g, v.value, t)) === c || m === l) return m;
        };
        t.BREAK = c, t.RETURN = l;
    }, function(e, t) {
        e.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
              case 0:
                return r ? e() : e.call(n);

              case 1:
                return r ? e(t[0]) : e.call(n, t[0]);

              case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

              case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

              case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t);
        };
    }, function(e, t, n) {
        var r = n(0), a = n(44).set, i = r.MutationObserver || r.WebKitMutationObserver, o = r.process, s = r.Promise, u = "process" == n(14)(o);
        e.exports = function() {
            var e, t, n, c = function() {
                var r, a;
                for (u && (r = o.domain) && r.exit(); e; ) {
                    a = e.fn, e = e.next;
                    try {
                        a();
                    } catch (r) {
                        throw e ? n() : t = void 0, r;
                    }
                }
                t = void 0, r && r.enter();
            };
            if (u) n = function() {
                o.nextTick(c);
            }; else if (i) {
                var l = !0, d = document.createTextNode("");
                new i(c).observe(d, {
                    characterData: !0
                }), n = function() {
                    d.data = l = !l;
                };
            } else if (s && s.resolve) {
                var f = s.resolve();
                n = function() {
                    f.then(c);
                };
            } else n = function() {
                a.call(r, c);
            };
            return function(r) {
                var a = {
                    fn: r,
                    next: void 0
                };
                t && (t.next = a), e || (e = a, n()), t = a;
            };
        };
    }, function(e, t, n) {
        var r = n(5);
        e.exports = function(e, t, n) {
            for (var a in t) n && e[a] ? e[a] = t[a] : r(e, a, t[a]);
            return e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), a = n(1), i = n(6), o = n(7), s = n(2)("species");
        e.exports = function(e) {
            var t = "function" == typeof a[e] ? a[e] : r[e];
            o && t && !t[s] && i.f(t, s, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(3), a = n(1), i = n(0), o = n(43), s = n(46);
        r(r.P + r.R, "Promise", {
            finally: function(e) {
                var t = o(this, a.Promise || i.Promise), n = "function" == typeof e;
                return this.then(n ? function(n) {
                    return s(t, e()).then(function() {
                        return n;
                    });
                } : e, n ? function(n) {
                    return s(t, e()).then(function() {
                        throw n;
                    });
                } : e);
            }
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(3), a = n(28), i = n(45);
        r(r.S, "Promise", {
            try: function(e) {
                var t = a.f(this), n = i(e);
                return (n.e ? t.reject : t.resolve)(n.v), t.promise;
            }
        });
    }, function(e, t, n) {
        e.exports = {
            default: n(96),
            __esModule: !0
        };
    }, function(e, t, n) {
        n(97), e.exports = n(1).Object.assign;
    }, function(e, t, n) {
        var r = n(3);
        r(r.S + r.F, "Object", {
            assign: n(98)
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(23), a = n(99), i = n(100), o = n(15), s = n(32), u = Object.assign;
        e.exports = !u || n(12)(function() {
            var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) {
                t[e] = e;
            }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r;
        }) ? function(e, t) {
            for (var n = o(e), u = arguments.length, c = 1, l = a.f, d = i.f; u > c; ) for (var f, h = s(arguments[c++]), v = l ? r(h).concat(l(h)) : r(h), p = v.length, m = 0; p > m; ) d.call(h, f = v[m++]) && (n[f] = h[f]);
            return n;
        } : u;
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols;
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable;
    }, function(e, t) {
        e.exports = '<div class=calendar-input-wrap> <input type=text tabindex=-1 class=calendar-picker-input ng-model=vm.ngModelDate ng-disabled=vm.disabled readonly=readonly> <button class=clear-date ng-if="vm.allowClear && vm.ngModelDate && !vm.disabled" ng-click=vm.handleClearDate();> <svg class=icon viewBox="0 0 1024 1024" xmlns=http://www.w3.org/180/svg><path d="M462.662 512l-91.695 91.695 49.338 49.338L512 561.338l91.695 91.695 49.338-49.338L561.338 512l91.695-91.695-49.338-49.338L512 462.662l-91.695-91.695-49.338 49.338L462.662 512zM512 837.818a325.818 325.818 0 1 1 0-651.636 325.818 325.818 0 0 1 0 651.636z"/></svg> </button> </div>';
    }, function(e, t) {
        e.exports = '<div class=ng-calendar-wrap ng-class="{\'timepicker-mode\': vm.timePicker}"> <div class=calendar-panel> <div class=calendar-header> <a class="calendar-prev-month-btn calendar-btn" ng-class="{disabled: vm.hiddenMonthBtn(\'prev\')}" ng-click="vm.hanleChangeMonth(\'prev\');"> <svg width=8 height=10 viewBox="0 0 6 10"><path d="M 5,0 l -5,5 l 5,5"></path></svg> </a> <a class="calendar-year-select calendar-btn" ng-click=vm.handleToggleYearPanel();> <span ng-bind=vm.selectedMonthFormat></span> <span ng-bind="vm.headerDate | date: \'yyyy\'"></span> </a> <a class="calendar-next-month-btn calendar-btn" ng-class="{disabled: vm.hiddenMonthBtn(\'next\')}" ng-click="vm.hanleChangeMonth(\'next\');"> <svg width=8 height=10 viewBox="0 0 6 10"><path d="M 2,0 l 5,5 l -5,5"></path></svg> </a> </div> <div class=calendar-body> <calendar-years calendar-date=vm.CALENDAR_DATE selected-date=vm.ngModelDate disabled-min-year={{vm.disabledMinYear}} disabled-max-year={{vm.disabledMaxYear}} on-select-year=vm.handlePickerYear(y) years-panel-opened=vm.yearsPanelOpened> </calendar-years> <calendar-dates dates=vm.daysInMonth date-format={{vm.dateFormat}} selected-date=vm.ngModelDate on-click-date=vm.handleSetDate(date)> </calendar-dates> </div> </div> <time-picker ng-if=vm.timePicker selected-date=vm.ngModelDate date-min=vm.dateMin date-format={{vm.dateFormat}} on-change="vm.handleTimeOnChange({hour, minute})"></time-picker> </div>';
    }, function(e, t) {} ]);
});