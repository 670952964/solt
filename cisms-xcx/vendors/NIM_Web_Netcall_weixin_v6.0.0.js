module.exports = function(e) {
	var t = {};

	function n(o) {
		if (t[o]) return t[o].exports;
		var i = t[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
	}
	return n.m = e, n.c = t, n.d = function(e, t, o) {
		n.o(e, t) || Object.defineProperty(e, t, {
			configurable: !1,
			enumerable: !0,
			get: o
		})
	}, n.r = function(e) {
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 293)
}([, function(e, t, n) {
		"use strict";
		var o = {
			info: {
				hash: "891804947cff7b3fb07111efea49431a29eedd37",
				shortHash: "8918049",
				version: "6.0.0",
				sdkVersion: "52",
				nrtcVersion: "4.4.0",
				nrtcSdkVersion: "1",
				protocolVersion: 1
			},
			agentVersion: "2.8.0.906",
			lbsUrl: "https://lbs.netease.im/lbs/webconf.jsp",
			roomserver: "roomserver.netease.im",
			connectTimeout: 8e3,
			xhrTimeout: 8e3,
			socketTimeout: 8e3,
			reconnectionDelay: 1600,
			reconnectionDelayMax: 8e3,
			reconnectionJitter: .01,
			reconnectiontimer: null,
			heartbeatInterval: 8e3,
			cmdTimeout: 8e3,
			defaultReportUrl: "https://dr.netease.im/1.gif",
			isWeixinApp: !1,
			isNodejs: !1,
			isRN: !1,
			PUSHTOKEN: "",
			PUSHCONFIG: {},
			CLIENTTYPE: 16,
			PushPermissionAsked: !1,
			iosPushConfig: null,
			androidPushConfig: null,
			netDetectAddr: "https://roomserver-dev.netease.im/v1/sdk/detect/local",
			weixinNetcall: {
				checkSumUrl: "https://nrtc.netease.im/demo/getChecksum.action",
				getChannelInfoUrl: "https://nrtc.netease.im/nrtc/getChannelInfos.action"
			},
			formatSocketUrl: function(e) {
				var t = e.url,
					n = e.secure ? "https" : "http";
				return -1 === t.indexOf("http") ? n + "://" + t : t
			},
			uploadUrl: "https://nos.netease.com",
			replaceUrl: "https://{bucket}-nosdn.netease.im/{object}",
			downloadHost: "nos.netease.com",
			downloadUrl: "https://{bucket}-nosdn.netease.im/{object}",
			httpsEnabled: !1,
			threshold: 0,
			genUploadUrl: function(e) {
				return o.uploadUrl + "/" + e
			},
			genDownloadUrl: function(e, t) {
				var n = e.bucket,
					i = (e.tag, e.expireSec),
					r = +new Date,
					s = i ? "&survivalTime=" + i : "",
					a = o.replaceUrl + "?createTime=" + r + s;
				return /^http/.test(a) ? o.httpsEnabled && (a = a.replace("http", "https")) : a = o.httpsEnabled ? "https://" +
					a : "http://" + a, a.replace("{bucket}", n).replace("{object}", t)
			}
		};
		e.exports = o
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var o = s(n(121)),
			i = s(n(107)),
			r = "function" == typeof i.default && "symbol" == typeof o.default ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" :
					typeof e
			};

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = "function" == typeof i.default && "symbol" === r(o.default) ? function(e) {
			return void 0 === e ? "undefined" : r(e)
		} : function(e) {
			return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" :
				void 0 === e ? "undefined" : r(e)
		}
	}, , , function(e, t, n) {
		var o = n(38)("wks"),
			i = n(27),
			r = n(6).Symbol,
			s = "function" == typeof r;
		(e.exports = function(e) {
			return o[e] || (o[e] = s && r[e] || (s ? r : i)("Symbol." + e))
		}).store = o
	}, function(e, t) {
		var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self &&
			self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = n)
	}, , function(e, t, n) {
		var o = n(22),
			i = n(65),
			r = n(40),
			s = Object.defineProperty;
		t.f = n(10) ? Object.defineProperty : function(e, t, n) {
			if (o(e), t = r(t, !0), o(n), i) try {
				return s(e, t, n)
			} catch (e) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (e[t] = n.value), e
		}
	}, function(e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return n.call(e, t)
		}
	}, function(e, t, n) {
		e.exports = !n(21)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(e, t) {
		var n = e.exports = {
			version: "2.5.5"
		};
		"number" == typeof __e && (__e = n)
	}, , function(e, t, n) {
		var o = n(68),
			i = n(42);
		e.exports = function(e) {
			return o(i(e))
		}
	}, function(e, t, n) {
		var o = n(8),
			i = n(25);
		e.exports = n(10) ? function(e, t, n) {
			return o.f(e, t, i(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		}
	}, , function(e, t) {
		e.exports = function(e) {
			return "object" == typeof e ? null !== e : "function" == typeof e
		}
	}, , function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var o, i = n(67),
			r = (o = i) && o.__esModule ? o : {
				default: o
			};
		t.default = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, r.default)(e, o.key,
						o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}()
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.default = function(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
	}, , function(e, t) {
		e.exports = function(e) {
			try {
				return !!e()
			} catch (e) {
				return !0
			}
		}
	}, function(e, t, n) {
		var o = n(16);
		e.exports = function(e) {
			if (!o(e)) throw TypeError(e + " is not an object!");
			return e
		}
	}, function(e, t, n) {
		var o = n(6),
			i = n(11),
			r = n(69),
			s = n(14),
			a = n(9),
			c = function(e, t, n) {
				var u, l, d, f = e & c.F,
					p = e & c.G,
					h = e & c.S,
					_ = e & c.P,
					m = e & c.B,
					y = e & c.W,
					v = p ? i : i[t] || (i[t] = {}),
					g = v.prototype,
					C = p ? o : h ? o[t] : (o[t] || {}).prototype;
				for (u in p && (n = t), n)(l = !f && C && void 0 !== C[u]) && a(v, u) || (d = l ? C[u] : n[u], v[u] = p &&
					"function" != typeof C[u] ? n[u] : m && l ? r(d, o) : y && C[u] == d ? function(e) {
						var t = function(t, n, o) {
							if (this instanceof e) {
								switch (arguments.length) {
									case 0:
										return new e;
									case 1:
										return new e(t);
									case 2:
										return new e(t, n)
								}
								return new e(t, n, o)
							}
							return e.apply(this, arguments)
						};
						return t.prototype = e.prototype, t
					}(d) : _ && "function" == typeof d ? r(Function.call, d) : d, _ && ((v.virtual || (v.virtual = {}))[u] = d, e &
						c.R && g && !g[u] && s(g, u, d)))
			};
		c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
	}, , function(e, t) {
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	}, , function(e, t) {
		var n = 0,
			o = Math.random();
		e.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
		}
	}, function(e, t) {
		e.exports = {}
	}, function(e, t) {
		t.f = {}.propertyIsEnumerable
	}, function(e, t, n) {
		var o = n(62),
			i = n(37);
		e.exports = Object.keys || function(e) {
			return o(e, i)
		}
	}, , , , function(e, t, n) {
		var o = n(6),
			i = n(11),
			r = n(41),
			s = n(35),
			a = n(8).f;
		e.exports = function(e) {
			var t = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
			"_" == e.charAt(0) || e in t || a(t, e, {
				value: s.f(e)
			})
		}
	}, function(e, t, n) {
		t.f = n(5)
	}, function(e, t, n) {
		var o = n(8).f,
			i = n(9),
			r = n(5)("toStringTag");
		e.exports = function(e, t, n) {
			e && !i(e = n ? e : e.prototype, r) && o(e, r, {
				configurable: !0,
				value: t
			})
		}
	}, function(e, t) {
		e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
			",")
	}, function(e, t, n) {
		var o = n(6),
			i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
		e.exports = function(e) {
			return i[e] || (i[e] = {})
		}
	}, function(e, t, n) {
		var o = n(38)("keys"),
			i = n(27);
		e.exports = function(e) {
			return o[e] || (o[e] = i(e))
		}
	}, function(e, t, n) {
		var o = n(16);
		e.exports = function(e, t) {
			if (!o(e)) return e;
			var n, i;
			if (t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
			if ("function" == typeof(n = e.valueOf) && !o(i = n.call(e))) return i;
			if (!t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(e, t) {
		e.exports = !0
	}, function(e, t) {
		e.exports = function(e) {
			if (null == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	}, function(e, t) {
		var n = Math.ceil,
			o = Math.floor;
		e.exports = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
		}
	}, , , function(e, t) {
		t.f = Object.getOwnPropertySymbols
	}, , , function(e, t) {
		var n = {}.toString;
		e.exports = function(e) {
			return n.call(e).slice(8, -1)
		}
	}, function(e, t, n) {
		var o = n(42);
		e.exports = function(e) {
			return Object(o(e))
		}
	}, function(e, t, n) {
		var o = n(22),
			i = n(116),
			r = n(37),
			s = n(39)("IE_PROTO"),
			a = function() {},
			c = function() {
				var e, t = n(64)("iframe"),
					o = r.length;
				for (t.style.display = "none", n(113).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(),
					e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; o--;) delete c.prototype[r[o]];
				return c()
			};
		e.exports = Object.create || function(e, t) {
			var n;
			return null !== e ? (a.prototype = o(e), n = new a, a.prototype = null, n[s] = e) : n = c(), void 0 === t ? n : i(
				n, t)
		}
	}, , , , , , , , , , function(e, t, n) {
		var o = n(62),
			i = n(37).concat("length", "prototype");
		t.f = Object.getOwnPropertyNames || function(e) {
			return o(e, i)
		}
	}, function(e, t, n) {
		var o = n(9),
			i = n(13),
			r = n(115)(!1),
			s = n(39)("IE_PROTO");
		e.exports = function(e, t) {
			var n, a = i(e),
				c = 0,
				u = [];
			for (n in a) n != s && o(a, n) && u.push(n);
			for (; t.length > c;) o(a, n = t[c++]) && (~r(u, n) || u.push(n));
			return u
		}
	}, function(e, t, n) {
		e.exports = n(14)
	}, function(e, t, n) {
		var o = n(16),
			i = n(6).document,
			r = o(i) && o(i.createElement);
		e.exports = function(e) {
			return r ? i.createElement(e) : {}
		}
	}, function(e, t, n) {
		e.exports = !n(10) && !n(21)(function() {
			return 7 != Object.defineProperty(n(64)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(e, t, n) {
		"use strict";
		var o = n(41),
			i = n(23),
			r = n(63),
			s = n(14),
			a = n(28),
			c = n(117),
			u = n(36),
			l = n(112),
			d = n(5)("iterator"),
			f = !([].keys && "next" in [].keys()),
			p = function() {
				return this
			};
		e.exports = function(e, t, n, h, _, m, y) {
			c(n, t, h);
			var v, g, C, b = function(e) {
					if (!f && e in S) return S[e];
					switch (e) {
						case "keys":
						case "values":
							return function() {
								return new n(this, e)
							}
					}
					return function() {
						return new n(this, e)
					}
				},
				O = t + " Iterator",
				k = "values" == _,
				E = !1,
				S = e.prototype,
				N = S[d] || S["@@iterator"] || _ && S[_],
				T = N || b(_),
				w = _ ? k ? b("entries") : T : void 0,
				M = "Array" == t && S.entries || N;
			if (M && (C = l(M.call(new e))) !== Object.prototype && C.next && (u(C, O, !0), o || "function" == typeof C[d] ||
					s(C, d, p)), k && N && "values" !== N.name && (E = !0, T = function() {
					return N.call(this)
				}), o && !y || !f && !E && S[d] || s(S, d, T), a[t] = T, a[O] = p, _)
				if (v = {
						values: k ? T : b("values"),
						keys: m ? T : b("keys"),
						entries: w
					}, y)
					for (g in v) g in S || r(S, g, v[g]);
				else i(i.P + i.F * (f || E), t, v);
			return v
		}
	}, function(e, t, n) {
		e.exports = {
			default: n(97),
			__esModule: !0
		}
	}, function(e, t, n) {
		var o = n(49);
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
			return "String" == o(e) ? e.split("") : Object(e)
		}
	}, function(e, t, n) {
		var o = n(118);
		e.exports = function(e, t, n) {
			if (o(e), void 0 === t) return e;
			switch (n) {
				case 1:
					return function(n) {
						return e.call(t, n)
					};
				case 2:
					return function(n, o) {
						return e.call(t, n, o)
					};
				case 3:
					return function(n, o, i) {
						return e.call(t, n, o, i)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		}
	}, , , , , function(e, t, n) {
		var o = n(43),
			i = Math.min;
		e.exports = function(e) {
			return e > 0 ? i(o(e), 9007199254740991) : 0
		}
	}, function(e, t, n) {
		"use strict";
		var o = n(119)(!0);
		n(66)(String, "String", function(e) {
			this._t = String(e), this._i = 0
		}, function() {
			var e, t = this._t,
				n = this._i;
			return n >= t.length ? {
				value: void 0,
				done: !0
			} : (e = o(t, n), this._i += e.length, {
				value: e,
				done: !1
			})
		})
	}, , , , , , , , , , , , , , , function(e, t, n) {
		var o = n(29),
			i = n(25),
			r = n(13),
			s = n(40),
			a = n(9),
			c = n(65),
			u = Object.getOwnPropertyDescriptor;
		t.f = n(10) ? u : function(e, t) {
			if (e = r(e), t = s(t, !0), c) try {
				return u(e, t)
			} catch (e) {}
			if (a(e, t)) return i(!o.f.call(e, t), e[t])
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(283);
		Object.defineProperty(t, "CONSTANT_ERROR", {
			enumerable: !0,
			get: function() {
				return r(o).default
			}
		});
		var i = n(282);

		function r(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "CONSTANT_SOCKET", {
			enumerable: !0,
			get: function() {
				return r(i).default
			}
		});
		t.NETCALL_MODE = {
			NETCALL_MODE_AUDIO_VIDEO: 0,
			NETCALL_MODE_ONLY_AUDIO: 1,
			NETCALL_MODE_ONLY_VIDEO: 2,
			NETCALL_MODE_NOAUDIO_NOVIDEO: 3
		}, t.KEEP_CALLING_INTERVAL = 3e3, t.CALL_TYPE = {
			NETCALL_TYPE_AUDIO: 1,
			NETCALL_TYPE_VIDEO: 2
		}, t.CONTROL_TYPE = {
			NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON: 1,
			NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_OFF: 2,
			NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_ON: 3,
			NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_OFF: 4,
			NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO: 5,
			NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_AGREE: 6,
			NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_REJECT: 7,
			NETCALL_CONTROL_COMMAND_SWITCH_VIDEO_TO_AUDIO: 8,
			NETCALL_CONTROL_COMMAND_BUSY: 9,
			NETCALL_CONTROL_COMMAND_SELF_CAMERA_INVALID: 10,
			NETCALL_CONTROL_COMMAND_SELF_ON_BACKGROUND: 11,
			NETCALL_CONTROL_COMMAND_START_NOTIFY_RECEIVED: 12
		}, t.SESSION_MODE = {
			P2P: 0,
			MEETING: 1
		}, t.ROLE_FOR_MEETING = {
			ROLE_HOST: 0,
			ROLE_AUDIENCE: 1
		}, t.HANGUP_TYPE = {
			HANGUP_TYPE_NORMAL: 0,
			HANGUP_TYPE_TIMEOUT: -1
		}, t.RECORD_TYPE = {
			RECORD_TYPE_MIX_SINGLE: "0",
			RECORD_TYPE_ONLY_MIX: "1",
			RECORD_TYPE_ONLY_SINGLE: "2"
		}, t.RECORD_AUDIO = {
			RECORD_AUDIO_OPEN: 1,
			RECORD_AUDIO_CLOSE: 0
		}, t.RECORD_VIDEO = {
			RECORD_VIDEO_OPEN: 1,
			RECORD_VIDEO_CLOSE: 0
		}, t.RTMP_RECORD = {
			RTMP_RECORD_OPEN: 1,
			RTMP_RECORD_CLOSE: 0
		}, t.LIVE_ENABLE = {
			LIVE_ENABLE_OPEN: 1,
			LIVE_ENABLE_CLOSE: 0
		}
	}, , , , , function(e, t, n) {
		var o = n(23);
		o(o.S + o.F * !n(10), "Object", {
			defineProperty: n(8).f
		})
	}, function(e, t, n) {
		n(96);
		var o = n(11).Object;
		e.exports = function(e, t, n) {
			return o.defineProperty(e, t, n)
		}
	}, function(e, t, n) {
		n(34)("observable")
	}, function(e, t, n) {
		n(34)("asyncIterator")
	}, function(e, t) {}, function(e, t, n) {
		var o = n(13),
			i = n(61).f,
			r = {}.toString,
			s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
		e.exports.f = function(e) {
			return s && "[object Window]" == r.call(e) ? function(e) {
				try {
					return i(e)
				} catch (e) {
					return s.slice()
				}
			}(e) : i(o(e))
		}
	}, function(e, t, n) {
		var o = n(49);
		e.exports = Array.isArray || function(e) {
			return "Array" == o(e)
		}
	}, function(e, t, n) {
		var o = n(30),
			i = n(46),
			r = n(29);
		e.exports = function(e) {
			var t = o(e),
				n = i.f;
			if (n)
				for (var s, a = n(e), c = r.f, u = 0; a.length > u;) c.call(e, s = a[u++]) && t.push(s);
			return t
		}
	}, function(e, t, n) {
		var o = n(27)("meta"),
			i = n(16),
			r = n(9),
			s = n(8).f,
			a = 0,
			c = Object.isExtensible || function() {
				return !0
			},
			u = !n(21)(function() {
				return c(Object.preventExtensions({}))
			}),
			l = function(e) {
				s(e, o, {
					value: {
						i: "O" + ++a,
						w: {}
					}
				})
			},
			d = e.exports = {
				KEY: o,
				NEED: !1,
				fastKey: function(e, t) {
					if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
					if (!r(e, o)) {
						if (!c(e)) return "F";
						if (!t) return "E";
						l(e)
					}
					return e[o].i
				},
				getWeak: function(e, t) {
					if (!r(e, o)) {
						if (!c(e)) return !0;
						if (!t) return !1;
						l(e)
					}
					return e[o].w
				},
				onFreeze: function(e) {
					return u && d.NEED && c(e) && !r(e, o) && l(e), e
				}
			}
	}, function(e, t, n) {
		"use strict";
		var o = n(6),
			i = n(9),
			r = n(10),
			s = n(23),
			a = n(63),
			c = n(104).KEY,
			u = n(21),
			l = n(38),
			d = n(36),
			f = n(27),
			p = n(5),
			h = n(35),
			_ = n(34),
			m = n(103),
			y = n(102),
			v = n(22),
			g = n(16),
			C = n(13),
			b = n(40),
			O = n(25),
			k = n(51),
			E = n(101),
			S = n(90),
			N = n(8),
			T = n(30),
			w = S.f,
			M = N.f,
			I = E.f,
			L = o.Symbol,
			A = o.JSON,
			P = A && A.stringify,
			R = p("_hidden"),
			j = p("toPrimitive"),
			D = {}.propertyIsEnumerable,
			x = l("symbol-registry"),
			U = l("symbols"),
			V = l("op-symbols"),
			F = Object.prototype,
			H = "function" == typeof L,
			G = o.QObject,
			B = !G || !G.prototype || !G.prototype.findChild,
			Y = r && u(function() {
				return 7 != k(M({}, "a", {
					get: function() {
						return M(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(e, t, n) {
				var o = w(F, t);
				o && delete F[t], M(e, t, n), o && e !== F && M(F, t, o)
			} : M,
			W = function(e) {
				var t = U[e] = k(L.prototype);
				return t._k = e, t
			},
			J = H && "symbol" == typeof L.iterator ? function(e) {
				return "symbol" == typeof e
			} : function(e) {
				return e instanceof L
			},
			K = function(e, t, n) {
				return e === F && K(V, t, n), v(e), t = b(t, !0), v(n), i(U, t) ? (n.enumerable ? (i(e, R) && e[R][t] && (e[R][t] = !
					1), n = k(n, {
					enumerable: O(0, !1)
				})) : (i(e, R) || M(e, R, O(1, {})), e[R][t] = !0), Y(e, t, n)) : M(e, t, n)
			},
			q = function(e, t) {
				v(e);
				for (var n, o = m(t = C(t)), i = 0, r = o.length; r > i;) K(e, n = o[i++], t[n]);
				return e
			},
			z = function(e) {
				var t = D.call(this, e = b(e, !0));
				return !(this === F && i(U, e) && !i(V, e)) && (!(t || !i(this, e) || !i(U, e) || i(this, R) && this[R][e]) || t)
			},
			X = function(e, t) {
				if (e = C(e), t = b(t, !0), e !== F || !i(U, t) || i(V, t)) {
					var n = w(e, t);
					return !n || !i(U, t) || i(e, R) && e[R][t] || (n.enumerable = !0), n
				}
			},
			$ = function(e) {
				for (var t, n = I(C(e)), o = [], r = 0; n.length > r;) i(U, t = n[r++]) || t == R || t == c || o.push(t);
				return o
			},
			Q = function(e) {
				for (var t, n = e === F, o = I(n ? V : C(e)), r = [], s = 0; o.length > s;) !i(U, t = o[s++]) || n && !i(F, t) ||
					r.push(U[t]);
				return r
			};
		H || (a((L = function() {
			if (this instanceof L) throw TypeError("Symbol is not a constructor!");
			var e = f(arguments.length > 0 ? arguments[0] : void 0),
				t = function(n) {
					this === F && t.call(V, n), i(this, R) && i(this[R], e) && (this[R][e] = !1), Y(this, e, O(1, n))
				};
			return r && B && Y(F, e, {
				configurable: !0,
				set: t
			}), W(e)
		}).prototype, "toString", function() {
			return this._k
		}), S.f = X, N.f = K, n(61).f = E.f = $, n(29).f = z, n(46).f = Q, r && !n(41) && a(F, "propertyIsEnumerable", z,
			!0), h.f = function(e) {
			return W(p(e))
		}), s(s.G + s.W + s.F * !H, {
			Symbol: L
		});
		for (var Z =
				"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
					","), ee = 0; Z.length > ee;) p(Z[ee++]);
		for (var te = T(p.store), ne = 0; te.length > ne;) _(te[ne++]);
		s(s.S + s.F * !H, "Symbol", {
			for: function(e) {
				return i(x, e += "") ? x[e] : x[e] = L(e)
			},
			keyFor: function(e) {
				if (!J(e)) throw TypeError(e + " is not a symbol!");
				for (var t in x)
					if (x[t] === e) return t
			},
			useSetter: function() {
				B = !0
			},
			useSimple: function() {
				B = !1
			}
		}), s(s.S + s.F * !H, "Object", {
			create: function(e, t) {
				return void 0 === t ? k(e) : q(k(e), t)
			},
			defineProperty: K,
			defineProperties: q,
			getOwnPropertyDescriptor: X,
			getOwnPropertyNames: $,
			getOwnPropertySymbols: Q
		}), A && s(s.S + s.F * (!H || u(function() {
			var e = L();
			return "[null]" != P([e]) || "{}" != P({
				a: e
			}) || "{}" != P(Object(e))
		})), "JSON", {
			stringify: function(e) {
				for (var t, n, o = [e], i = 1; arguments.length > i;) o.push(arguments[i++]);
				if (n = t = o[1], (g(t) || void 0 !== e) && !J(e)) return y(t) || (t = function(e, t) {
					if ("function" == typeof n && (t = n.call(this, e, t)), !J(t)) return t
				}), o[1] = t, P.apply(A, o)
			}
		}), L.prototype[j] || n(14)(L.prototype, j, L.prototype.valueOf), d(L, "Symbol"), d(Math, "Math", !0), d(o.JSON,
			"JSON", !0)
	}, function(e, t, n) {
		n(105), n(100), n(99), n(98), e.exports = n(11).Symbol
	}, function(e, t, n) {
		e.exports = {
			default: n(106),
			__esModule: !0
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			return {
				value: t,
				done: !!e
			}
		}
	}, function(e, t) {
		e.exports = function() {}
	}, function(e, t, n) {
		"use strict";
		var o = n(109),
			i = n(108),
			r = n(28),
			s = n(13);
		e.exports = n(66)(Array, "Array", function(e, t) {
			this._t = s(e), this._i = 0, this._k = t
		}, function() {
			var e = this._t,
				t = this._k,
				n = this._i++;
			return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
		}, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries")
	}, function(e, t, n) {
		n(110);
		for (var o = n(6), i = n(14), r = n(28), s = n(5)("toStringTag"), a =
				"CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList"
				.split(","), c = 0; c < a.length; c++) {
			var u = a[c],
				l = o[u],
				d = l && l.prototype;
			d && !d[s] && i(d, s, u), r[u] = r.Array
		}
	}, function(e, t, n) {
		var o = n(9),
			i = n(50),
			r = n(39)("IE_PROTO"),
			s = Object.prototype;
		e.exports = Object.getPrototypeOf || function(e) {
			return e = i(e), o(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor
				.prototype : e instanceof Object ? s : null
		}
	}, function(e, t, n) {
		var o = n(6).document;
		e.exports = o && o.documentElement
	}, function(e, t, n) {
		var o = n(43),
			i = Math.max,
			r = Math.min;
		e.exports = function(e, t) {
			return (e = o(e)) < 0 ? i(e + t, 0) : r(e, t)
		}
	}, function(e, t, n) {
		var o = n(13),
			i = n(74),
			r = n(114);
		e.exports = function(e) {
			return function(t, n, s) {
				var a, c = o(t),
					u = i(c.length),
					l = r(s, u);
				if (e && n != n) {
					for (; u > l;)
						if ((a = c[l++]) != a) return !0
				} else
					for (; u > l; l++)
						if ((e || l in c) && c[l] === n) return e || l || 0;
				return !e && -1
			}
		}
	}, function(e, t, n) {
		var o = n(8),
			i = n(22),
			r = n(30);
		e.exports = n(10) ? Object.defineProperties : function(e, t) {
			i(e);
			for (var n, s = r(t), a = s.length, c = 0; a > c;) o.f(e, n = s[c++], t[n]);
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var o = n(51),
			i = n(25),
			r = n(36),
			s = {};
		n(14)(s, n(5)("iterator"), function() {
			return this
		}), e.exports = function(e, t, n) {
			e.prototype = o(s, {
				next: i(1, n)
			}), r(e, t + " Iterator")
		}
	}, function(e, t) {
		e.exports = function(e) {
			if ("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	}, function(e, t, n) {
		var o = n(43),
			i = n(42);
		e.exports = function(e) {
			return function(t, n) {
				var r, s, a = String(i(t)),
					c = o(n),
					u = a.length;
				return c < 0 || c >= u ? e ? "" : void 0 : (r = a.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === u || (s = a.charCodeAt(
						c + 1)) < 56320 || s > 57343 ? e ? a.charAt(c) : r : e ? a.slice(c, c + 2) : s - 56320 + (r - 55296 << 10) +
					65536
			}
		}
	}, function(e, t, n) {
		n(75), n(111), e.exports = n(35).f("iterator")
	}, function(e, t, n) {
		e.exports = {
			default: n(120),
			__esModule: !0
		}
	}, , function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var o = s(n(291)),
			i = s(n(287)),
			r = s(n(2));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError(
				"Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, r.default)(t)));
			e.prototype = (0, i.default)(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var o, i = n(2),
			r = (o = i) && o.__esModule ? o : {
				default: o
			};
		t.default = function(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t
		}
	}, , function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o, i = n(2),
			r = (o = i) && o.__esModule ? o : {
				default: o
			};
		var s, a = {
			post: function(e, t) {
				return this.verifyOptions(t, "url"), new Promise(function(n, o) {
					wx.request({
						url: t.url,
						method: "post",
						data: e,
						header: {
							"content-type": "application/x-www-form-urlencoded"
						},
						success: function(e) {
							var t = e.data;
							n(t)
						},
						fail: function(e) {
							o(e)
						}
					})
				})
			},
			merge: function() {
				var e = arguments;
				return e[0] = Object.assign.apply(Object.assign, arguments), e[0]
			},
			verifyOptions: function() {
				var e = arguments;
				if (e[0] && e[0].constructor === Object)
					for (var t = 1; t < arguments.length; t++) {
						var n = e[t];
						(n = n.split(" ")).map(function(t) {
							if (!e[0][t] && 0 != e[0][t]) throw Error("参数缺失 " + t)
						})
					}
			},
			deepClone: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				for (var n in e) "object" === (0, r.default)(e[n]) ? (t[n] = e[n].constructor === Array ? [] : {}, this.deepClone(
					e[n], t[n])) : t[n] = e[n];
				return t
			},
			guid: (s = function() {
				return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
			}, function() {
				return s() + s() + s() + s() + s() + s() + s() + s()
			}),
			uuid: function() {
				var e = function() {
					return (1e5 * (1 + Math.random()) | 0).toString(10).substring(1)
				};
				return function() {
					return e() + e() + e()
				}
			}(),
			isString: function(e) {
				return e.constructor === String
			},
			isNumber: function(e) {
				return e.constructor === Number
			},
			isBoolean: function(e) {
				return e.constructor === Boolean
			},
			isObject: function(e) {
				return e.constructor === Object
			},
			isArray: function(e) {
				return e.constructor === Array
			},
			isFunction: function(e) {
				return e.constructor === Function
			},
			isDate: function(e) {
				return e.constructor === Date
			},
			isRegExp: function(e) {
				return e.constructor === RegExp
			},
			isNull: function(e) {
				return null === e
			},
			isUndefined: function(e) {
				return void 0 === e
			},
			exist: function(e) {
				return !isNull(e) && !isUndefined(e)
			}
		};
		t.default = a, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(n(19)),
			i = r(n(18));

		function r(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var s = function() {
			function e() {
				(0, o.default)(this, e), this.eventReset()
			}
			return (0, i.default)(e, [{
				key: "eventReset",
				value: function() {
					var e = this;
					this._eventListeners && Object.keys(this._eventListeners).forEach(function(t) {
						delete e._eventListeners[t]
					}), this._eventListeners = {}, this._eventOnceListener && Object.keys(this._eventOnceListener).forEach(
						function(t) {
							delete e._eventOnceListener[t]
						}), this._eventOnceListener = {}
				}
			}, {
				key: "on",
				value: function(e, t) {
					if (!e) throw Error({
						message: "event listener funkey undefined",
						callFunc: "adapter:_on"
					});
					if (!(t instanceof Function)) throw Error({
						message: "event listener next param should be function",
						callFunc: "adapter:_on"
					});
					this._eventListeners[e] = t
				}
			}, {
				key: "off",
				value: function(e) {
					if (!e) throw Error({
						message: "event listener funkey undefined",
						callFunc: "adapter:_off"
					});
					if (!this._eventListeners[e]) throw Error({
						message: "event listener unbind failed!",
						callFunc: "adapter:_off"
					});
					delete this._eventListeners[e]
				}
			}, {
				key: "once",
				value: function(e, t) {
					if (!e) throw Error({
						message: "event once listener funkey undefined",
						callFunc: "adapter:_once"
					});
					if (!(t instanceof Function)) throw Error({
						message: "event once listener next param should be function",
						callFunc: "adapter:_once"
					});
					this._eventOnceListener[e] = t
				}
			}, {
				key: "emit",
				value: function(e, t) {
					var n = this;
					this._eventOnceListener && this._eventOnceListener[e] instanceof Function && setTimeout(function() {
						n._eventOnceListener[e](t), delete n._eventOnceListener[e]
					}, 0), this._eventListeners && this._eventListeners[e] instanceof Function && setTimeout(function() {
						n._eventListeners[e](t)
					}, 0)
				}
			}]), e
		}();
		t.default = s, e.exports = t.default
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t,
		n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.pureLogger = void 0;
		var o = r(n(19)),
			i = r(n(18));

		function r(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var s = function() {
			function e(t) {
				var n = t.debug;
				(0, o.default)(this, e), this.debug = n
			}
			return (0, i.default)(e, [{
				key: "log",
				value: function(e) {
					if (this.debug) {
						for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
						return console.log("%c WeAppRTC:: " + e, "color:#bada55", n)
					}
				}
			}, {
				key: "warn",
				value: function(e) {
					if (this.debug) {
						for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
						return console.warn("%c WeAppRTC:: " + e, n)
					}
				}
			}, {
				key: "error",
				value: function(e) {
					if (this.debug) {
						for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
						return console.error("%c WeAppRTC:: " + e, n)
					}
				}
			}]), e
		}();
		t.default = s;
		t.pureLogger = {
			trace: function() {},
			debug: function() {},
			log: function() {},
			warn: function() {},
			error: function() {}
		}
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
	function(e) {
		e.exports = {
			name: "nim",
			private: !0,
			version: "6.0.0",
			nrtcVersion: "4.4.0",
			sdkVersion: 52,
			nrtcSdkVersion: 1,
			protocolVersion: 1,
			pcAgentVersion: "2.8.0.906",
			description: "NIM Web SDK 网易云信|真正稳定的即时通讯云服务",
			main: "index.js",
			directories: {
				test: "test"
			},
			scripts: {
				clean: "node build/emptyDist.js",
				"build:tag": "node build/parseTagMap.js",
				"build:sdk": "cross-env PLATFORM=all webpack --config webpack.config.js",
				"build:sdk:stats": "webpack --profile --json > dist/webpack-stats.json",
				"build:tester": "node build/tester.js",
				"build:api": "node build/api",
				"build:guide": "node build/guide",
				"watch:tag": "watch 'npm run build:tag' ./src/protocol/map -du --interval=0.25 --filter=./build/parseTagMapFilter.js",
				"watch:sdk": "npm run build:sdk -- -w",
				"zip:api": "cross-env NODE_ENV=production npm run build:api && node build/api/zip.js",
				"zip:sdk": "cross-env NODE_ENV=production node build/sdk/zip.js",
				"copy:sdk": "npm run zip:sdk && node build/sdk/copy.js",
				"copy:api": "npm run build:api && node build/api/copy.js",
				dev: "yarn check && npm run clean && run-p watch:*",
				"dev:prod": "cross-env PLATFORM=all NODE_ENV=production npm run dev",
				"dev:nosm": "NO_SOURCE_MAP=true run-p watch:*",
				"dev:rn": "cross-env PLATFORM=rn NO_SOURCE_MAP=true npm run dev",
				"dev:weixin": "cross-env PLATFORM=weixin NO_SOURCE_MAP=true npm run dev",
				pack: "yarn check && npm run clean && npm run build:sdk && npm run build:tester && npm run deploy && npm run build:api && npm run build:guide",
				"pack:test": "cross-env PLATFORM=all NODE_ENV=test npm run pack",
				"pack:pre": "cross-env PLATFORM=all NODE_ENV=pre npm run pack",
				"pack:prod": "cross-env PLATFORM=all NODE_ENV=production npm run pack && npm run zip:sdk",
				"pack:weixin": "cross-env PLATFORM=weixin NODE_ENV=production npm run build:sdk -- -w",
				"pack:nodejs": "cross-env PLATFORM=nodejs NODE_ENV=production npm run build:sdk -- -w",
				"pack:rn": "cross-env PLATFORM=rn NODE_ENV=production npm run build:sdk -- -w",
				"pack:custom": "cross-env PLATFORM=all NODE_ENV=custom npm run pack",
				deploy: "node build/deploy.js",
				tester: "cross-env PLATFORM=all NODE_ENV=test && node build/tester.js"
			},
			author: "netease im",
			license: "ISC",
			dependencies: {
				axios: "^0.18.0",
				"babel-polyfill": "^6.26.0",
				backo2: "^1.0.2",
				"deep-access": "^0.1.1",
				"es6-promise": "^4.2.4",
				eventemitter3: "^2.0.2",
				gulp: "^3.9.1",
				"gulp-jsdoc3": "^2.0.0",
				"javascript-natural-sort": "^0.7.1",
				jsdoc: "^3.5.5",
				"sdp-transform": "^2.3.0",
				"webrtc-adapter": "6.0.3",
				ws: "^5.1.1",
				x2js: "^3.2.1",
				xhr: "^2.4.1"
			},
			devDependencies: {
				archiver: "^2.1.1",
				"babel-core": "^6.26.0",
				"babel-loader": "^7.1.4",
				"babel-plugin-add-module-exports": "^0.2.1",
				"babel-plugin-transform-async-to-generator": "^6.24.1",
				"babel-plugin-transform-es3-member-expression-literals": "^6.22.0",
				"babel-plugin-transform-es3-property-literals": "^6.22.0",
				"babel-plugin-transform-runtime": "^6.23.0",
				"babel-preset-env": "^1.6.1",
				"babel-preset-stage-2": "^6.24.1",
				"cross-env": "^5.1.4",
				eslint: "^4.19.1",
				"eslint-config-standard": "^11.0.0",
				"eslint-plugin-import": "^2.11.0",
				"eslint-plugin-node": "^6.0.1",
				"eslint-plugin-promise": "^3.7.0",
				"eslint-plugin-standard": "^3.1.0",
				"fs-extra": "^5.0.0",
				"imports-loader": "^0.8.0",
				"ink-docstrap": "^1.3.2",
				"npm-run-all": "^4.1.2",
				"on-build-webpack": "^0.1.0",
				"pre-build-webpack": "^0.1.0",
				prettyjson: "^1.1.3",
				"raw-loader": "^0.5.1",
				"watch-cli": "^0.2.3",
				webpack: "^4.5.0",
				"webpack-cli": "^2.0.14",
				"webpack-merge": "^4.1.2",
				"wolfy87-eventemitter": "^5.2.4",
				yaml: "^0.3.0",
				yargs: "^11.0.0"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = d(n(19)),
			i = d(n(18)),
			r = d(n(124)),
			s = d(n(123)),
			a = d(n(281)),
			c = d(n(127)),
			u = n(177),
			l = n(91);

		function d(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var f = function(e) {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				(0, o.default)(this, t);
				var n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return n._init(e), n._websocket = null, n
			}
			return (0, s.default)(t, e), (0, i.default)(t, [{
				key: "_init",
				value: function(e) {
					var t = e.status,
						n = e.logger,
						o = void 0 === n ? u.pureLogger : n;
					this._mainStatus = t, this.logger = o, this._initStatus()
				}
			}, {
				key: "_initStatus",
				value: function() {
					var e = this;
					this._status || (this._status = {}), Object.keys(this._status).forEach(function(t) {
						delete e._status[t]
					}), Object.assign(this._status, {
						needReconnect: !1,
						reconnectTimer: null,
						currentOptions: null,
						reconnectCount: 0,
						reconnectMaxNum: 8,
						destroy: !1
					})
				}
			}, {
				key: "_destroy",
				value: function() {
					return this._resetReconnectStatus(!0), this.stopSignal()
				}
			}, {
				key: "_resetReconnectStatus",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					clearTimeout(this._status.reconnectTimer), Object.assign(this._status, {
						needReconnect: !1,
						reconnectCount: 0,
						reconnectTimer: null,
						destroy: e
					})
				}
			}, {
				key: "_resetWhenClose",
				value: function() {
					this._resetReconnectStatus(), this._unbindEvent(), this._websocket = null, this._initStatus()
				}
			}, {
				key: "_bindEvent",
				value: function() {
					var e = this;
					this._websocket ? (this._websocket.on("open", this._onOpen.bind(this)), this._websocket.on("error", this._onError
							.bind(this)), this._websocket.on("close", this._onClose.bind(this)), this._websocket.on("hangup", this._onHangup
							.bind(this)), this._websocket.on("syncDone", this._onSyncDone.bind(this)), this._websocket.on(
							"clientLeave", this._onClientLeave.bind(this)), this._websocket.on("clientJoin", this._onClientJoin.bind(
							this)), this._websocket.on("clientUpdate", this._onClientUpdate.bind(this)), this._websocket.on(
							"liveRoomClose", this._onLiveRoomClose.bind(this)), this._websocket.on("kicked", this._onKicked.bind(
							this)), this._websocket.on("sendCommandOverTime", this._onSendCommandOverTime.bind(this)), this._websocket
						.on("heartbeatOverTime", function(t) {
							e.logger.log("WSController::heartbeatOverTime", t), e.stopSignal()
						})) : this.logger.warn("WSController::_bindEvent: _websocket为空！")
				}
			}, {
				key: "_unbindEvent",
				value: function() {
					this._websocket && (this._websocket.off("open"), this._websocket.off("error"), this._websocket.off("close"),
						this._websocket.off("hangup"), this._websocket.off("syncDone"), this._websocket.off("clientLeave"), this._websocket
						.off("clientJoin"), this._websocket.off("clientUpdate"), this._websocket.off("liveRoomClose"), this._websocket
						.off("kicked"), this._websocket.off("sendCommandOverTime"), this._websocket.off("heartbeatOverTime"))
				}
			}, {
				key: "_onOpen",
				value: function(e) {}
			}, {
				key: "_onError",
				value: function(e) {
					this.logger.log("wsController::onerror: ", e), !e || 417 !== e.code && 403 !== e.code ? this._status.reconnectTimer ||
						this.stopSignal() : (this._resetReconnectStatus(), this.emit("loginFailed")), this._status.needReconnect ||
						(e.connectCount = this._status.reconnectCount, this.emit("error", e))
				}
			}, {
				key: "_onClose",
				value: function() {
					var e = this;
					if (this._status.needReconnect) this._unbindEvent(), this._websocket = null, this.logger.log(
						"wsController::onclose: try reconnect No." + this._status.reconnectCount, Date.now()), this.emit(
						"willreconnect", {
							count: this._status.reconnectCount
						}), clearTimeout(this._status.reconnectTimer), this._status.reconnectTimer = setTimeout(function() {
						e.startSignal()
					}, 5e3);
					else {
						var t = this._status.destroy;
						this._resetWhenClose(), t ? this.emit("destroy") : (this.emit("close"), this.logger.log(
							"wsController::onclose: close need not reconnect"))
					}
				}
			}, {
				key: "_onHangup",
				value: function() {
					return this.setEndSessionTime(), this._resetReconnectStatus(!0), this.stopSignal()
				}
			}, {
				key: "_onSyncDone",
				value: function(e) {
					var t = Object.assign({}, e);
					t.userlist.map(function(e) {
							e.account = e.accid, delete e.accid
						}), t.connectCount = this._status.reconnectCount, this._status.needReconnect = !0, this._status.reconnectCount =
						0, this.emit("syncDone", t)
				}
			}, {
				key: "_onClientLeave",
				value: function(e) {
					if (this._mainStatus.sessionMode === l.SESSION_MODE.P2P) return this.emit("_invokeHangup", {
						channelId: e.cid,
						timetag: +new Date,
						account: e.accid
					}), void this.logger.log("wsController::onClientLeave: _invokeHangup");
					var t = Object.assign({}, e);
					delete t.accid, t.account = e.accid, this.emit("clientLeave", t)
				}
			}, {
				key: "_onClientJoin",
				value: function(e) {
					var t = Object.assign({}, e);
					delete t.accid, t.account = e.accid, this.emit("clientJoin", t)
				}
			}, {
				key: "_onClientUpdate",
				value: function(e) {
					var t = Object.assign({}, e.body);
					delete t.accid, t.account = e.accid, this.emit("clientUpdate", t)
				}
			}, {
				key: "_onLiveRoomClose",
				value: function(e) {
					this.emit("liveRoomClose", e)
				}
			}, {
				key: "_onKicked",
				value: function(e) {
					this.emit("kicked", e)
				}
			}, {
				key: "_onSendCommandOverTime",
				value: function() {
					this.emit("sendCommandOverTime")
				}
			}, {
				key: "joinChannel",
				value: function(e) {
					return this.setStartSessionTime(), e.logger = this.logger, e.mainStatus = this._mainStatus, this._status.currentOptions =
						e, this.startSignal(e)
				}
			}, {
				key: "leaveChannel",
				value: function() {
					return this.setEndSessionTime(), this._resetReconnectStatus(!0), this.stopSignal()
				}
			}, {
				key: "startSignal",
				value: function(e) {
					if (e || (e = this._status.currentOptions), !(this._status.reconnectCount <= this._status.reconnectMaxNum)) {
						this._resetReconnectStatus(!0), this.logger.warn("wsController: maxceed reconnect times ...");
						var t = {
							message: "number of connections exceeded"
						};
						return this.emit("reconnectFailed", t), Promise.reject(t)
					}
					if (!this._websocket) return this._status.needReconnect = !0, this._status.reconnectCount++, this._websocket =
						new a.default(e), this._bindEvent(), this._websocket.login();
					this.logger.warn("wsController: already in session ...");
					return Promise.reject({
						message: "already in session"
					})
				}
			}, {
				key: "stopSignal",
				value: function() {
					return this._websocket ? (this.logger.log("wsController::stopSignal: start..."), this._websocket.logout()) :
						(this._onClose(), Promise.resolve())
				}
			}, {
				key: "switchMode",
				value: function(e) {
					return this._websocket.updatePushMode(e)
				}
			}, {
				key: "setStartSessionTime",
				value: function() {
					this.emit("sessionStart")
				}
			}, {
				key: "setEndSessionTime",
				value: function() {
					this.emit("sessionEnd")
				}
			}]), t
		}(c.default);
		t.default = f, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = l(n(19)),
			i = l(n(18)),
			r = l(n(124)),
			s = l(n(123)),
			a = l(n(127)),
			c = n(177),
			u = n(91);

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var d = function(e) {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				(0, o.default)(this, t);
				var n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return n._nim = null, n._init(e), n._status = {
					timeoutTimer: null,
					beCallTimer: null,
					uid4AccountMap: {},
					account4UidMap: {},
					imInfo: {},
					beCalledInfo: {}
				}, n
			}
			return (0, s.default)(t, e), (0, i.default)(t, [{
				key: "_init",
				value: function(e) {
					var t = e.nim,
						n = e.logger,
						o = void 0 === n ? c.pureLogger : n,
						i = e.status;
					this._resetStatus(), this._nim = t, this._logger = o, this._mainStatus = i, this._bindIMEvent()
				}
			}, {
				key: "_resetStatus",
				value: function() {
					this._status && (clearTimeout(this._status.timeoutTimer), Object.assign(this._status, {
						timeoutTimer: null,
						uid4AccountMap: {},
						account4UidMap: {},
						imInfo: {}
					})), this._nim && 0 !== Object.keys(this._nim) && this._nim.protocol.setCurrentNetcall()
				}
			}, {
				key: "_bindIMEvent",
				value: function() {
					this._nim && 0 !== Object.keys(this._nim) ? (this._nim.on("beCalled", this._onBeCalled.bind(this)), this._nim
						.on("notifyCalleeAck", this._onNotifyCalleeAck.bind(this)), this._nim.on("notifyHangup", this._onNotifyHangup
							.bind(this)), this._nim.on("netcallControl", this._onNetcallControl.bind(this)), this._nim.on(
							"notifyCalleeAckSync", this._onNotifyCalleeAckSync.bind(this)), this._nim.on("notifyJoin", this._onNotifyJoin
							.bind(this))) : this._logger.warn("IMController: _bindIMEvent: nim 实例不存在，绑定事件失败！")
				}
			}, {
				key: "_unBindIMEvent",
				value: function() {
					this._nim ? (this._nim.removeListener("beCalled", this._onBeCalled.bind(this)), this._nim.removeListener(
						"notifyCalleeAck", this._onNotifyCalleeAck.bind(this)), this._nim.removeListener("notifyHangup", this._onNotifyHangup
						.bind(this)), this._nim.removeListener("netcallControl", this._onNetcallControl.bind(this)), this._nim.removeListener(
						"notifyCalleeAckSync", this._onNotifyCalleeAckSync.bind(this)), this._nim.removeListener("notifyJoin",
						this._onNotifyJoin.bind(this))) : this._logger.warn("IMController: _unBindIMEvent: nim 实例不存在，解绑事件失败！")
				}
			}, {
				key: "_addAccountUidMap",
				value: function(e, t) {
					this._status.uid4AccountMap || (this._status.uid4AccountMap = {}), this._status.uid4AccountMap[t] = e, this
						._status.account4UidMap || (this._status.account4UidMap = {}), this._status.account4UidMap[e] = t
				}
			}, {
				key: "_parseAccountUidMap",
				value: function(e) {
					for (var t in e) this._addAccountUidMap(t, e[t])
				}
			}, {
				key: "getUidByAccount",
				value: function(e) {
					return this._status.account4UidMap[e]
				}
			}, {
				key: "getAccountByUid",
				value: function(e) {
					var t = this._status.uid4AccountMap[e];
					return this._logger.log("IMController: getAccountByUid " + e + " => " + t), t
				}
			}, {
				key: "initNetcall",
				value: function(e) {
					var t = this;
					return this._logger.log("IMController: initNetcall options=" + e), this._nim.initNetcall(e).then(function(e) {
						return t._logger.log("IMController: initNetcall response=%o", e), t.emit("updateStatus", {
							sessionMode: u.SESSION_MODE.P2P,
							signalInited: !0
						}), Object.assign(t._status.imInfo, e, {
							sessionMode: "p2p",
							account: t._nim.account
						}), Promise.resolve(e.accountUidMap)
					}).catch(function(e) {
						return t._logger.error("IMBusiness:initNetcall error=%o", e), t.emit("updateStatus", {
							signalEndTime: Date.now()
						}), Promise.reject(e)
					})
				}
			}, {
				key: "response",
				value: function(e) {
					var t = this;
					this._logger.log("IMController: response options=%o", e);
					var n = e.caller,
						o = e.accepted,
						i = e.type,
						r = e.cid,
						s = e.fn || "calleeAck";
					return this._nim[s]({
						account: n,
						channelId: r,
						type: i,
						accepted: o
					}).then(function(e) {
						t._logger.log("IMController: response success", e);
						var n = {};
						o && Object.assign(n, {
							signalStartTime: Date.now(),
							onTheCall: !0
						}), Object.assign(n, {
							calling: !!o,
							isCaller: !1
						}), t.emit("updateStatus", n)
					}, function(e) {
						throw t._logger.error("IMController: response error=%o", e), e
					})
				}
			}, {
				key: "hangup",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = null;
					if (this.emit("updateStatus", {
							onTheCall: !1,
							calling: !1
						}), t = this._mainStatus.isCaller ? this._status.imInfo.channelId : this._status.beCalledInfo.channelId,
						this._logger.log("IMController: hangup: ", t), t && this._mainStatus.calling) {
						var n = e.fn || "hangup";
						this._nim[n]({
							channelId: t
						})
					}
					return this._resetWhenHangup(), Promise.resolve()
				}
			}, {
				key: "control",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					if (this._logger.log("IMController: control options=%o", t), t.channelId || (this._mainStatus.isCaller ? t.channelId =
							this._status.imInfo.channelId : t.channelId = this._status.beCalledInfo.channelId), t.command && t.channelId) {
						var n = t.fn || "netcallControl";
						return t.type = t.command, this._nim[n](t).catch(function(t) {
							e._logger.error("IMController: control error=%o", t)
						})
					}
					return Promise.reject("IMController: control: command或channelId为空！")
				}
			}, {
				key: "createChannel",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return this.emit("updateStatus", {
						signalStartTime: Date.now()
					}), this._nim[e](n).then(function(e) {
						return t._logger.log("IMController: createChannel success=%o", e), Promise.resolve(e)
					}).catch(function(e) {
						return t._logger.error("IMController: createChannel error=%o", e), t.emit("updateStatus", {
							signalEndTime: Date.now()
						}), Promise.reject(e)
					})
				}
			}, {
				key: "joinChannel",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return this._nim[e](n).then(function(e) {
						return t._parseAccountUidMap(e.accountUidMap), Object.assign(e, {
							sessionMode: u.SESSION_MODE.MEETING,
							account: t._nim.account,
							uid: t.getUidByAccount(t._nim.account),
							serverMap: JSON.parse(e.serverMap)
						}), t.emit("updateStatus", {
							signalEndTime: Date.now(),
							signalInited: !0,
							sessionMode: u.SESSION_MODE.MEETING
						}), Object.assign(t._status.imInfo, e), Promise.resolve(e)
					}).catch(function(e) {
						return t.emit("updateStatus", {
							signalEndTime: Date.now()
						}), Promise.reject(e)
					})
				}
			}, {
				key: "_onNotifyJoin",
				value: function(e) {
					this._logger.log("IMController: _onNotifyJoin: " + e);
					var t = e.accountUidMap;
					for (var n in this._parseAccountUidMap(t), t) this.emit("joinChannel", {
						uid: t[n],
						account: n,
						cid: e.channelId
					})
				}
			}, {
				key: "_onBeCalled",
				value: function(e) {
					var t = this;
					this._logger.log("IMController: _onBeCalled", e);
					var n = setTimeout(function() {
						console.log("清除被叫状态"), t.emit("updateStatus", {
							calling: !1
						})
					}, u.KEEP_CALLING_INTERVAL - 100);
					this.emit("updateStatus", {
							signalInited: !0,
							isCaller: !1,
							sessionMode: u.SESSION_MODE.P2P,
							calling: !0
						}), !1 === this._mainStatus.onTheCall && Object.assign(this._status.beCalledInfo, e), this._status.imInfo ||
						(this._status.imInfo = {}), this._status.imInfo.uid = e.uid, this._status.beCallTimer = n, this.emit(
							"updateStatistics", {
								appkey: this._nim && this._nim.options && this._nim.options.appKey,
								P2P: {
									value: 1
								}
							}), this.emit("beCalling", {
							caller: e.account,
							cid: e.channelId,
							type: e.type
						})
				}
			}, {
				key: "_onNetcallControl",
				value: function(e) {
					var t = "";
					t = this._mainStatus.isCaller ? this._status.imInfo.channelId : this._status.beCalledInfo.channelId, e.channelId ===
						t ? (this._logger.log("IMController: _onNetcallControl: ", e), this.emit("control", {
							cid: e.channelId,
							command: e.type,
							account: e.account
						})) : this._logger.warn("IMController: _onNetcallControl: not current channel! drop!", e)
				}
			}, {
				key: "_onNotifyCalleeAck",
				value: function(e) {
					this._logger.log("IMController: _onNotifyCalleeAck: ", e);
					var t = e.accepted,
						n = e.account,
						o = e.channelId,
						i = e.type;
					clearTimeout(this._status.beCallTimer), this._status.beCallTimer = null, t ? this.emit("updateStatus", {
						onTheCall: !0
					}) : !1 === this._mainStatus.isTeamCall && this._resetWhenHangup(), this.emit(t ? "callAccepted" :
						"callRejected", {
							cid: o,
							account: n,
							type: i
						})
				}
			}, {
				key: "_onNotifyHangup",
				value: function(e) {
					this._logger.log("IMController: _onNotifyHangup: ", e);
					var t = this._mainStatus.onTheCall,
						n = null;
					this.emit("updateStatus", {
						onTheCall: !1,
						calling: !1
					}), n = this._mainStatus.isCaller ? this._status.imInfo.channelId : this._status.beCalledInfo.channelId;
					var o = e.channelId === n;
					t && o && (this.emit("leaveChannel"), this.emit("sessionEnd"), this._resetStatus()), this.emit("hangup", {
						cid: e.channelId,
						timetag: e.timetag,
						account: e.account
					})
				}
			}, {
				key: "_onNotifyCalleeAckSync",
				value: function(e) {
					this._logger.log("IMController: _onNetcallControl: ", e);
					var t = e.timetag,
						n = e.channelId,
						o = e.type,
						i = e.accepted,
						r = e.fromClientType;
					this.emit("callerAckSync", {
						timetag: t,
						cid: n,
						type: o,
						accepted: i,
						fromClientType: r
					}), this._resetWhenHangup()
				}
			}, {
				key: "_resetWhenHangup",
				value: function() {
					this.emit("resetWhenHangup")
				}
			}, {
				key: "destroy",
				value: function() {
					return this._resetStatus(), this.eventReset(), this._nim = null, Promise.resolve()
				}
			}, {
				key: "reset",
				value: function() {
					return this._resetStatus(), Promise.resolve()
				}
			}]), t
		}(a.default);
		t.default = d, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		r(n(267)), r(n(266));
		var o = n(91),
			i = r(n(126));

		function r(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var s = {
			call: function(e) {
				var t = this;
				if (this._status.calling) return Promise.reject("呼叫失败: 当前正在通话中");
				i.default.verifyOptions(e, "type callee");
				var n = e.callee,
					r = e.type,
					s = e.forceKeepCalling,
					a = n.constructor === Array;
				return this._updateStatus({
					signalStartTime: Date.now(),
					calling: !0,
					isCaller: !0,
					callee: n,
					isTeamCall: a
				}), s && this._dataReporter.updateStatistics({
					always_keep_calling: {
						value: 1
					}
				}), this._dataReporter.updateStatistics({
					appkey: this._imController._nim.options.appKey,
					P2P: {
						value: 1
					},
					miniapp_mode: e.type === o.CALL_TYPE.NETCALL_TYPE_AUDIO ? o.NETCALL_MODE.NETCALL_MODE_ONLY_AUDIO : o.NETCALL_MODE
						.NETCALL_MODE_AUDIO_VIDEO
				}), this._imController.initNetcall({
					type: r,
					pushConfig: {
						forceKeepCalling: s ? 1 : 0
					},
					accounts: a ? n : [n],
					webrtcEnable: !0
				}).catch(function(e) {
					return t.logger.error("call error: " + e), t.destroy()
				})
			},
			control: function(e) {
				return i.default.verifyOptions(e, "command"), e.cid && (e.channelId = e.cid), Object.assign(e, {
					fn: "netcallControl"
				}), this._imController.control(e)
			},
			response: function(e) {
				return i.default.verifyOptions(e, "caller accepted type cid"), this._imController.response(e)
			},
			hangup: function() {
				return this._dataReporter.sendStatistics(), this._imController.hangup({
					fn: "hangup",
					recordType: "cancelNetcallBeforeAccept"
				})
			},
			createChannel: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return i.default.verifyOptions(t, "channelName"), t.custom = t.custom || "", t.webrtcEnable = !0, Object.assign(
					this._status, {
						signalStartTime: Date.now()
					}), this._imController.createChannel("createChannel", t).then(function(e) {
					return Promise.resolve(e)
				}).catch(function(t) {
					return e.logger.error("createChannel error:", t), Object.assign(e._status, {
						signalEndTime: Date.now()
					}), Promise.reject(t)
				})
			},
			joinChannel: function(e) {
				i.default.verifyOptions(e, "channelName mode role");
				var t = i.default.deepClone(e),
					n = this,
					r = {};
				return this._status.role = t.role, new Promise(function(i, s) {
					n._getChannelInfo(t).then(function(a) {
						return r = {
							accountUidMap: a.accountUidMap,
							uid: a.uid,
							cid: a.channelId,
							account: a.account
						}, n._dataReporter.updateStatistics({
							appkey: n._imController._nim.options.appKey,
							uid: a.uid,
							meeting: {
								value: 1
							},
							miniapp_mode: e.mode
						}), n._wsController.joinChannel({
							cid: +a.channelId,
							uid: a.uid,
							accid: a.account || "unknown",
							usertype: 2,
							token: a.channelId + "",
							address: "wss://" + a.serverMap.wechatapparray[0],
							mode: t.mode,
							role: t.role,
							scene: o.SESSION_MODE.MEETING,
							liveEnable: t.liveEnable ? t.liveEnable : o.LIVE_ENABLE.LIVE_ENABLE_CLOSE,
							rtmpRecord: t.rtmpRecord ? t.rtmpRecord : o.RTMP_RECORD.RTMP_RECORD_CLOSE,
							recordAudio: t.recordAudio ? t.recordAudio : o.RECORD_AUDIO.RECORD_AUDIO_CLOSE,
							recordVideo: t.recordVideo ? t.recordVideo : o.RECORD_VIDEO.RECORD_VIDEO_CLOSE,
							recordType: t.recordType ? t.recordType : o.RECORD_TYPE.RECORD_TYPE_MIX_SINGLE
						}).then(function() {
							i(r)
						}).catch(function(e) {
							s(e)
						})
					}).then(function() {
						return Promise.resolve(r)
					}).catch(function(e) {
						s(e)
					})
				})
			},
			startRtc: function(e) {
				var t = this;
				i.default.verifyOptions(e, "mode");
				var n = this._status.isCaller ? this._imController._status.imInfo : this._imController._status.beCalledInfo,
					r = this._imController._nim.account,
					s = n.accountUidMap[r];
				return this._dataReporter.updateStatistics({
					uid: s,
					miniapp_mode: e.mode
				}), new Promise(function(i, a) {
					t._updateStatus({
						signalInited: !0
					}), t._wsController.joinChannel({
						cid: +n.channelId,
						uid: s,
						accid: r || "unknown",
						usertype: 2,
						token: n.channelId + "",
						address: "wss://" + JSON.parse(n.serverMap).wechatapparray[0],
						mode: e.mode,
						scene: o.SESSION_MODE.P2P,
						recordAudio: e.recordAudio ? e.recordAudio : o.RECORD_AUDIO.RECORD_AUDIO_CLOSE,
						recordVideo: e.recordVideo ? e.recordVideo : o.RECORD_VIDEO.RECORD_VIDEO_CLOSE,
						rtmpRecord: e.rtmpRecord ? e.rtmpRecord : o.RTMP_RECORD.RTMP_RECORD_CLOSE,
						recordType: e.recordType ? e.recordType : o.RECORD_TYPE.RECORD_TYPE_MIX_SINGLE
					}).then(function() {
						i({
							uid: n.uid,
							cid: n.channelId,
							account: r
						})
					}).catch(function(e) {
						a(e)
					})
				})
			},
			leaveChannel: function() {
				var e = this,
					t = this;
				return !1 === this._status.signalInited ? (this.logger.error("未处于房间中"), Promise.reject("未处于房间中")) : (this._dataReporter
					.sendStatistics(), new Promise(function(n, o) {
						e._wsController.leaveChannel().then(function() {
							t._resetStatus(), t._imController._resetStatus(), n()
						}).catch(function(e) {
							o(e)
						})
					}))
			},
			switchMode: function(e) {
				if (!i.default.isNumber(e)) throw Error("switchMode: 入参类型必须为Number");
				switch (e = parseInt(e), this._dataReporter.updateStatistics({
					miniapp_mode: e
				}), e) {
					case o.NETCALL_MODE.NETCALL_MODE_AUDIO_VIDEO:
					case o.NETCALL_MODE.NETCALL_MODE_ONLY_AUDIO:
					case o.NETCALL_MODE.NETCALL_MODE_ONLY_VIDEO:
					case o.NETCALL_MODE.NETCALL_MODE_NOAUDIO_NOVIDEO:
						break;
					default:
						return Promise.reject("RTC: switchMode: mode值无效！")
				}
				return this._wsController.switchMode(e)
			},
			_getChannelInfo: function(e) {
				var t = this,
					n = e;
				return this._status.signalInited ? (this.logger.error("已经在房间中了"), Promise.reject("已经在房间中了")) : (i.default.verifyOptions(
					n, "channelName"), new Promise(function(n, o) {
					t._imController.joinChannel("joinChannel", {
						channelName: e.channelName
					}).then(function(e) {
						n(e)
					}).catch(function(e) {
						o(e)
					})
				}))
			}
		};
		t.default = s, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o, i = n(126),
			r = (o = i) && o.__esModule ? o : {
				default: o
			},
			s = n(91);
		var a = n(1),
			c = n(265).version,
			u = {
				createChannel: function() {
					return Promise.reject("NRTC暂无此接口，无需创建，直接加入即可！")
				},
				joinChannel: function(e) {
					if (this._status.isInTheRoom) return Promise.reject("正在房间中，请勿重复加入！");
					var t = this;
					r.default.verifyOptions(e, "channelName scene accid mode role");
					var n = e.uid || r.default.uuid();
					t._updateStatus({
						joinChannelParam: e
					});
					var o = e.scene !== s.SESSION_MODE.MEETING ? {
						P2P: {
							value: 1
						}
					} : {
						meeting: {
							value: 1
						}
					};
					return t._dataReporter.updateStatistics(Object.assign({}, {
						appkey: t._nrtcStatus.appkey,
						uid: n,
						miniapp_mode: e.mode
					}, o)), new Promise(function(o, i) {
						r.default.post({
							uid: n,
							appkey: t._nrtcStatus.appkey
						}, {
							url: a.weixinNetcall.checkSumUrl
						}).then(function(o) {
							return 200 === o.code ? r.default.post({
								uid: n,
								appkey: t._nrtcStatus.appkey,
								channelName: e.channelName,
								secureType: "1",
								osType: "4",
								mode: e.scene === s.SESSION_MODE.MEETING ? 2 : 1,
								netType: "0",
								version: c || "1.0.0",
								curtime: +new Date,
								checksum: o.checksum
							}, {
								url: a.weixinNetcall.getChannelInfoUrl
							}) : Promise.reject(o)
						}).then(function(i) {
							if (200 !== i.code) return Promise.reject(i);
							Object.assign(t._status.createChannelResponse, i, e, {
								uid: n
							});
							var r = t._generateJoinParam(e);
							t._status.role = r.role, t._wsController.joinChannel(r).then(function() {
								t._updateStatus({
									isInTheRoom: !0
								}), o({
									cid: i.cid,
									code: i.code,
									uid: n
								})
							}).catch(function(e) {
								return Promise.reject(e)
							})
						}).catch(function(e) {
							switch (parseInt(e.code)) {
								case 414:
									i({
										code: 414,
										desc: "模式不匹配，该房间以点对点、多人方式创建，但您以多人、点对点方式加入！或appkey非法！"
									});
									break;
								case 417:
									i({
										code: 417,
										desc: "房间已被销毁，请选择新的房间加入"
									});
									break;
								case 600:
									i({
										code: 600,
										desc: "双人房间有第三方加入，请修改加入模式或更换新房间后重新加入！"
									});
									break;
								default:
									i(e)
							}
						})
					})
				},
				leaveChannel: function() {
					return !1 === this._status.isInTheRoom ? Promise.reject("不在房间中了，请勿重复离开") : (this._updateStatus({
						isInTheRoom: !1
					}), this._dataReporter.sendStatistics(), this._wsController.leaveChannel())
				},
				switchMode: function(e) {
					return r.default.isNumber(e) ? (this._dataReporter.updateStatistics({
						miniapp_mode: e
					}), this._wsController.switchMode(e)) : Promise.reject("switchMode: 入参类型必须为Number")
				},
				getUploadUserList: function() {
					return this._wsController._websocket.getUploadUserList()
				},
				_generateJoinParam: function(e) {
					var t = {},
						n = this._status.createChannelResponse;
					return t.accid = n.accid || "unknow", t.cid = parseInt(n.cid), t.uid = parseInt(n.uid), t.token = n.token, t.mode =
						parseInt(e.mode), t.scene = n.scene, t.liveEnable = e.liveEnable ? s.LIVE_ENABLE.LIVE_ENABLE_OPEN : s.LIVE_ENABLE
						.LIVE_ENABLE_CLOSE, t.role = e.role ? s.ROLE_FOR_MEETING.ROLE_AUDIENCE : s.ROLE_FOR_MEETING.ROLE_HOST, t.webrtc =
						1, t.address = e.address || "wss://" + n.ips.wechatapparray[0], t.recordType = e.recordType ? e.recordType : s
						.RECORD_TYPE.RECORD_TYPE_MIX_SINGLE, t.recordAudio = e.recordAudio ? s.RECORD_AUDIO.RECORD_AUDIO_OPEN : s.RECORD_AUDIO
						.RECORD_AUDIO_CLOSE, t.recordVideo = e.recordVideo ? s.RECORD_VIDEO.RECORD_VIDEO_OPEN : s.RECORD_VIDEO.RECORD_VIDEO_CLOSE,
						this.logger.log("Nrtc::joinChannel", t), t
				},
				_getLink: function() {
					return this._wsController._websocket
				}
			};
		t.default = u, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.default = {
			pushConfig: {
				1: "enable",
				2: "needBadge",
				3: "needPushNick",
				4: "pushContent",
				5: "custom",
				6: "pushPayload",
				7: "sound",
				9: "forceKeepCalling",
				10: "webrtcEnable"
			},
			liveOption: {
				1: "liveEnable",
				2: "webrtcEnable"
			}
		}, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.default = {
			pushConfig: {
				enable: 1,
				needBadge: 2,
				needPushNick: 3,
				pushContent: 4,
				custom: 5,
				pushPayload: 6,
				sound: 7,
				forceKeepCalling: 9,
				webrtcEnable: 10
			},
			liveOption: {
				liveEnable: 1,
				webrtcEnable: 2
			}
		}, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = {
				netcall: {
					id: 9,
					initNetcall: 1,
					keepCalling: 3,
					calleeAck: 4,
					notifyCalleeAck: 5,
					hangup: 6,
					notifyHangup: 7,
					netcallControl: 8,
					notifyNetcallControl: 9,
					verifyChannelId: 10,
					createChannel: 13,
					joinChannel: 14,
					queryAccountUidMap: 16
				}
			},
			i = {
				initNetcall: {
					sid: 9,
					cid: o.netcall.initNetcall,
					params: [{
						type: "byte",
						name: "type"
					}, {
						type: "StrArray",
						name: "accounts"
					}, {
						type: "String",
						name: "pushContent"
					}, {
						type: "String",
						name: "custom"
					}, {
						type: "Property",
						name: "pushConfig"
					}]
				},
				keepCalling: {
					sid: 9,
					cid: o.netcall.keepCalling,
					params: [{
						type: "byte",
						name: "type"
					}, {
						type: "StrArray",
						name: "accounts"
					}, {
						type: "long",
						name: "channelId"
					}]
				},
				calleeAck: {
					sid: 9,
					cid: o.netcall.calleeAck,
					params: [{
						type: "string",
						name: "account"
					}, {
						type: "long",
						name: "channelId"
					}, {
						type: "byte",
						name: "type"
					}, {
						type: "bool",
						name: "accepted"
					}]
				},
				hangup: {
					sid: 9,
					cid: o.netcall.hangup,
					params: [{
						type: "long",
						name: "channelId"
					}]
				},
				netcallControl: {
					sid: 9,
					cid: o.netcall.netcallControl,
					params: [{
						type: "long",
						name: "channelId"
					}, {
						type: "byte",
						name: "type"
					}]
				},
				verifyChannelId: {
					sid: 9,
					cid: o.netcall.verifyChannelId,
					params: [{
						type: "long",
						name: "channelId"
					}, {
						type: "String",
						name: "account"
					}]
				},
				createChannel: {
					sid: 9,
					cid: o.netcall.createChannel,
					params: [{
						type: "String",
						name: "channelName"
					}, {
						type: "String",
						name: "custom"
					}, {
						type: "String",
						name: "webrtcEnable"
					}]
				},
				joinChannel: {
					sid: 9,
					cid: o.netcall.joinChannel,
					params: [{
						type: "String",
						name: "channelName"
					}, {
						type: "Property",
						name: "liveOption"
					}]
				},
				queryAccountUidMap: {
					sid: 9,
					cid: o.netcall.queryAccountUidMap,
					params: [{
						type: "String",
						name: "channelName"
					}, {
						type: "LongArray",
						name: "uids"
					}]
				}
			},
			r = {
				"9_1": {
					service: "netcall",
					cmd: "initNetcall",
					response: [{
						type: "Number",
						name: "timetag"
					}, {
						type: "Number",
						name: "uid"
					}, {
						type: "Number",
						name: "channelId"
					}, {
						type: "StrArray",
						name: "turnServerList"
					}, {
						type: "StrArray",
						name: "sturnServerList"
					}, {
						type: "StrArray",
						name: "proxyServerList"
					}, {
						type: "StrArray",
						name: "keepCallingAccounts"
					}, {
						type: "StrLongMap",
						name: "accountUidMap"
					}, {
						type: "String",
						name: "clientConfig"
					}, {
						type: "String",
						name: "serverMap"
					}]
				},
				"9_2": {
					service: "netcall",
					cmd: "beCalled",
					response: [{
						type: "Number",
						name: "timetag"
					}, {
						type: "Number",
						name: "type"
					}, {
						type: "Number",
						name: "channelId"
					}, {
						type: "String",
						name: "account"
					}, {
						type: "Number",
						name: "uid"
					}, {
						type: "StrArray",
						name: "turnServerList"
					}, {
						type: "StrArray",
						name: "sturnServerList"
					}, {
						type: "StrArray",
						name: "proxyServerList"
					}, {
						type: "StrLongMap",
						name: "accountUidMap"
					}, {
						type: "String",
						name: "clientConfig"
					}, {
						type: "String",
						name: "custom"
					}, {
						type: "Property",
						name: "pushConfig"
					}, {
						type: "String",
						name: "serverMap"
					}]
				},
				"9_3": {
					service: "netcall",
					cmd: "keepCalling",
					response: [{
						type: "StrArr",
						name: "accounts"
					}]
				},
				"9_4": {
					service: "netcall",
					cmd: "calleeAck",
					response: []
				},
				"9_5": {
					service: "netcall",
					cmd: "notifyCalleeAck",
					response: [{
						type: "String",
						name: "account"
					}, {
						type: "long",
						name: "channelId"
					}, {
						type: "byte",
						name: "type"
					}, {
						type: "bool",
						name: "accepted"
					}]
				},
				"9_6": {
					service: "netcall",
					cmd: "hangup",
					response: []
				},
				"9_7": {
					service: "netcall",
					cmd: "notifyHangup",
					response: [{
						type: "long",
						name: "channelId"
					}, {
						type: "String",
						name: "account"
					}, {
						type: "long",
						name: "timetag"
					}]
				},
				"9_8": {
					service: "netcall",
					cmd: "netcallControl",
					response: []
				},
				"9_9": {
					service: "netcall",
					cmd: "notifyNetcallControl",
					response: [{
						type: "String",
						name: "account"
					}, {
						type: "byte",
						name: "type"
					}, {
						type: "long",
						name: "channelId"
					}]
				},
				"9_10": {
					service: "netcall",
					cmd: "verifyChannelId",
					response: []
				},
				"9_11": {
					service: "netcall",
					cmd: "notifyNetcallRecord",
					response: [{
						type: "Property",
						name: "msg"
					}]
				},
				"9_12": {
					service: "netcall",
					cmd: "notifyCalleeAckSync",
					response: [{
						type: "String",
						name: "timetag"
					}, {
						type: "long",
						name: "channelId"
					}, {
						type: "byte",
						name: "type"
					}, {
						type: "bool",
						name: "accepted"
					}, {
						type: "byte",
						name: "fromClientType"
					}]
				},
				"9_13": {
					service: "netcall",
					cmd: "createChannel",
					response: [{
						type: "long",
						name: "timetag"
					}]
				},
				"9_14": {
					service: "netcall",
					cmd: "joinChannel",
					response: [{
						type: "long",
						name: "timetag"
					}, {
						type: "long",
						name: "channelId"
					}, {
						type: "StrLongMap",
						name: "accountUidMap"
					}, {
						type: "String",
						name: "serverMap"
					}, {
						type: "String",
						name: "clientConfig"
					}, {
						type: "String",
						name: "custom"
					}]
				},
				"9_15": {
					service: "netcall",
					cmd: "notifyJoin",
					response: [{
						type: "Long",
						name: "channelId"
					}, {
						type: "StrLongMap",
						name: "accountUidMap"
					}]
				},
				"9_16": {
					service: "netcall",
					cmd: "queryAccountUidMap",
					response: []
				}
			};
		t.default = {
			idMap: o,
			cmdConfig: i,
			packetConfig: r
		}, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(91),
			i = {
				install: function(e) {
					var t = e.Protocol.fn;
					t.processNetcall = function(e) {
						switch (e.cmd) {
							case "initNetcall":
								this.onInitNetcall(e);
								break;
							case "beCalled":
								this.onBeCalled(e);
								break;
							case "keepCalling":
								this.onKeepCalling(e);
								break;
							case "calleeAck":
								break;
							case "notifyCalleeAck":
								this.onNotifyCalleeAck(e);
								break;
							case "hangup":
								break;
							case "notifyHangup":
								this.onNotifyHangup(e);
								break;
							case "notifyNetcallControl":
								this.onNetcallControl(e);
								break;
							case "notifyCalleeAckSync":
								this.onNotifyCalleeAckSync(e);
								break;
							case "notifyNetcallRecord":
								this.onMsg(e);
								break;
							case "createChannel":
								break;
							case "joinChannel":
								this.joinChannel(e);
								break;
							case "notifyJoin":
								this.notifyJoin(e)
						}
					}, t.onInitNetcall = function(e) {
						if (!e.error) {
							var t = e.obj.type;
							e.obj = e.content, e.obj.type = t, e.obj.accounts = e.obj.keepCallingAccounts, this.setCurrentNetcall(e.obj.channelId),
								this.keepCalling(e)
						}
					}, t.setCurrentNetcall = function(e) {
						this.currentNetcallChannelId = e
					}, t.onKeepCalling = function(e) {
						e.error || e.content.accounts.length && this.keepCalling(e)
					}, t.keepCalling = function(e) {
						var t = this,
							n = e.obj,
							i = n.type,
							r = n.accounts,
							s = n.channelId;
						r && r.length && setTimeout(function() {
							t.currentNetcallChannelId && t.currentNetcallChannelId === s && t.api.keepCalling({
								type: i,
								accounts: r,
								channelId: s
							}).catch(function() {})
						}, o.KEEP_CALLING_INTERVAL)
					}, t.onBeCalled = function(e) {
						e.error || this.emitAPI({
							type: "beCalled",
							obj: e.content
						})
					}, t.onNotifyCalleeAck = function(e) {
						e.error || this.emitAPI({
							type: "notifyCalleeAck",
							obj: e.content
						})
					}, t.onNotifyHangup = function(e) {
						e.error || this.emitAPI({
							type: "notifyHangup",
							obj: e.content
						})
					}, t.onNetcallControl = function(e) {
						e.error || this.emitAPI({
							type: "netcallControl",
							obj: e.content
						})
					}, t.onNotifyCalleeAckSync = function(e) {
						e.error || this.emitAPI({
							type: "notifyCalleeAckSync",
							obj: e.content
						})
					}, t.notifyJoin = function(e) {
						e.error || this.emitAPI({
							type: "notifyJoin",
							obj: e.content
						})
					}, t.joinChannel = function(e) {
						e.obj = e.content
					}
				}
			};
		t.default = i, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});

		function o(e) {
			return void 0 !== e
		}
		t.default = function(e) {
			o(e.enable) && (this.enable = e.enable ? 1 : 0), o(e.needBadge) && (this.needBadge = e.needBadge ? 1 : 0), o(e.needPushNick) &&
				(this.needPushNick = e.needPushNick ? 1 : 0), o(e.pushContent) && (this.pushContent = "" + e.pushContent), o(e.custom) &&
				(this.custom = "" + e.custom), o(e.pushPayload) && (this.pushPayload = "" + e.pushPayload), o(e.sound) && (this.sound =
					"" + e.sound), o(e.webrtcEnable) && (this.webrtcEnable = e.webrtcEnable ? 1 : 0), o(e.forceKeepCalling) && (
					this.forceKeepCalling = e.forceKeepCalling ? 1 : 0)
		}, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o, i = n(274),
			r = (o = i) && o.__esModule ? o : {
				default: o
			};
		var s = {
			install: function(e) {
				var t = e.fn,
					n = e.util;
				t.initNetcall = function(e) {
					return n.verifyOptions(e, "type accounts", "netcall::initNetcall"), e.pushContent = "", e.custom = "", e.pushConfig ||
						(e.pushConfig = {}), e.pushConfig.webrtcEnable = e.webrtcEnable, e.pushConfig = new r.default(e.pushConfig),
						this.cbAndSendCmd("initNetcall", e)
				}, t.keepCalling = function(e) {
					return n.verifyOptions(e, "type accounts channelId", "netcall::keepCalling"), this.cbAndSendCmd("keepCalling",
						e)
				}, t.calleeAck = function(e) {
					return n.verifyOptions(e, "account channelId type accepted", "netcall::calleeAck"), this.cbAndSendCmd(
						"calleeAck", e)
				}, t.hangup = function(e) {
					return n.verifyOptions(e, "channelId", "netcall::hangup"), this.cbAndSendCmd("hangup", e)
				}, t.netcallControl = function(e) {
					return n.verifyOptions(e, "channelId type", "netcall::netcallControl"), this.cbAndSendCmd("netcallControl", e)
				}, t.createChannel = function(e) {
					return this.cbAndSendCmd("createChannel", e)
				}, t.joinChannel = function(e) {
					return n.verifyOptions(e, "channelName", "netcall::joinChannel"), n.verifyBooleanWithDefault(e, "liveEnable",
						!1, "", "netcall::joinChannel"), n.verifyBooleanWithDefault(e, "webrtcEnable", !1, "",
						"netcall::joinChannel"), this.cbAndSendCmd("joinChannel", {
						channelName: e.channelName,
						liveOption: {
							liveEnable: e.liveEnable ? 1 : 0,
							webrtcEnable: e.webrtcEnable ? 1 : 0
						}
					})
				}, t.queryAccountUidMap = function(e, t) {
					return this.cbAndSendCmd("queryAccountUidMap", {
						channelName: e,
						uids: t
					})
				}
			}
		};
		t.default = s, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = c(n(19)),
			i = c(n(18)),
			r = c(n(124)),
			s = c(n(123)),
			a = c(n(127));

		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var u = n(265).nrtcVersion,
			l = function(e) {
				function t() {
					(0, o.default)(this, t);
					var e = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return e._initStatistics(), e
				}
				return (0, s.default)(t, e), (0, i.default)(t, [{
					key: "_initStatistics",
					value: function() {
						this._statistics = {
							ver: 1,
							time: null,
							sdk_ver: u || "v4.4.0",
							platform: "miniapp",
							uid: null,
							appkey: null,
							P2P: {
								value: 0
							},
							meeting: {
								value: 0
							},
							always_keep_calling: {
								value: 0
							},
							miniapp_mode: null
						}
					}
				}, {
					key: "updateStatistics",
					value: function(e) {
						Object.assign(this._statistics, e)
					}
				}, {
					key: "sendStatistics",
					value: function() {
						var e = this;
						this.updateStatistics({
							time: +new Date
						}), wx.request({
							url: "https://statistic.live.126.net/statistic/realtime/sdkFunctioninfo",
							method: "POST",
							data: this._statistics,
							header: {
								"content-type": "application/json"
							},
							complete: function() {
								e._initStatistics()
							}
						})
					}
				}]), t
			}(a.default);
		t.default = l, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.Config = {
			heartbeatInterval: 3e3,
			heartbeatOverTime: 1e4,
			sendCommandOverTime: 1e4
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.genPacket = function(e, t, n) {
			var i = o[e];
			if (i) {
				var r = {
						cmd: i.cmd,
						body: {},
						seq: n
					},
					s = Object.assign({}, r),
					a = i.body;
				return a.forEach(function(e) {
					(t[e.key] || 0 === t[e.key]) && (s.body[e.key] = t[e.key])
				}), JSON.stringify(s)
			}
		}, t.parsePacket = function(e) {
			var t = JSON.parse(e);
			return t.cmd = i[t.cmd].cmd, t
		};
		var o = {
				login: {
					cmd: 0,
					body: [{
						key: "accid",
						type: "String"
					}, {
						key: "uid",
						type: "Number"
					}, {
						key: "cid",
						type: "String"
					}, {
						key: "accid",
						type: "Number"
					}, {
						key: "token",
						type: "String"
					}, {
						key: "mode",
						type: "Number"
					}, {
						key: "scene",
						type: "Number"
					}, {
						key: "usertype",
						type: "Number"
					}, {
						key: "liveEnable",
						type: "Number"
					}, {
						key: "webrtc",
						type: "Number"
					}, {
						key: "recordAudio",
						type: "Number"
					}, {
						key: "recordVideo",
						type: "Number"
					}, {
						key: "rtmpRecord",
						type: "Number"
					}, {
						key: "rtmpUrl",
						type: "String"
					}, {
						key: "splitMode",
						type: "Number"
					}, {
						key: "layout",
						type: "Boolean"
					}, {
						key: "recordType",
						type: "String"
					}, {
						key: "role",
						type: "Number"
					}]
				},
				heartbeat: {
					cmd: 2,
					body: [{
						key: "uid",
						type: "Number"
					}, {
						key: "cid",
						type: "String"
					}, {
						key: "statistic",
						type: "Object"
					}]
				},
				logout: {
					cmd: 4,
					body: [{
						key: "uid",
						type: "Number"
					}, {
						key: "cid",
						type: "String"
					}, {
						key: "statistic",
						type: "Object"
					}]
				},
				getUploadUserList: {
					cmd: 5,
					body: [{
						key: "uid",
						type: "Number"
					}, {
						key: "cid",
						type: "Number"
					}]
				},
				updatePushMode: {
					cmd: 7,
					body: [{
						key: "uid",
						type: "Number"
					}, {
						key: "cid",
						type: "Number"
					}, {
						key: "mode",
						type: "Number"
					}]
				}
			},
			i = {
				1: {
					cmd: "onLogin",
					body: [{
						key: "code"
					}, {
						key: "errmsg"
					}, {
						key: "userlist"
					}]
				},
				3: {
					cmd: "onHeartbeat",
					body: [{
						key: "code"
					}, {
						key: "errmsg"
					}, {
						key: "userlist"
					}]
				},
				6: {
					cmd: "onUploadUserList",
					body: [{
						key: "code"
					}, {
						key: "errmsg"
					}, {
						key: "userlist"
					}]
				},
				8: {
					cmd: "onUpdatePushMode",
					body: [{
						key: "code"
					}, {
						key: "errmsg"
					}]
				},
				9: {
					cmd: "onLogout",
					body: [{
						key: "code"
					}]
				},
				20: {
					cmd: "onClientJoin",
					body: [{
						key: "uid"
					}, {
						key: "accid"
					}, {
						key: "cid"
					}, {
						key: "url"
					}, {
						key: "mode"
					}]
				},
				21: {
					cmd: "onClientLeave",
					body: [{
						key: "uid"
					}, {
						key: "accid"
					}, {
						key: "cid"
					}]
				},
				22: {
					cmd: "onClientUpdate",
					body: [{
						key: "uid"
					}, {
						key: "accid"
					}, {
						key: "cid"
					}, {
						key: "mode"
					}]
				},
				23: {
					cmd: "onLiveRoomClose",
					body: [{
						key: "cid"
					}, {
						key: "reason"
					}]
				},
				24: {
					cmd: "onKicked",
					body: [{
						key: "cid"
					}, {
						key: "reason"
					}]
				}
			}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.messageMixin = function(e) {
			var t = e.prototype;
			t.onClientLeave = function(e) {
				this.emit("clientLeave", e.body)
			}, t.onClientJoin = function(e) {
				this.emit("clientJoin", e.body)
			}, t.onClientUpdate = function(e) {
				this.emit("clientUpdate", e)
			}, t.onUpdatePushMode = function(e) {
				this.emit("updatePushMode", e)
			}, t.onLiveRoomClose = function(e) {
				this.emit("liveRoomClose", e)
			}, t.onKicked = function(e) {
				this.emit("kicked", e)
			}, t.onHeartbeat = function(e) {
				clearTimeout(this._status.heartbeatOverTimer), this._status.heartbeatOverTimer = null
			}
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.apiMixin = function(e) {
			e.prototype
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = h(n(19)),
			i = h(n(18)),
			r = h(n(124)),
			s = h(n(123)),
			a = h(n(127)),
			c = h(n(126)),
			u = n(280),
			l = n(279),
			d = n(278),
			f = n(91),
			p = n(277);

		function h(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var _ = function(e) {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				(0, o.default)(this, t);
				var n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return n._reset(), n.$options = e, n._mainStatus = e.mainStatus, n.logger = e.logger, n._resetStatus(), Object.keys(
					n._status).forEach(function(t) {
					var o = e[t];
					null != o && (n._status[t] = o)
				}), n
			}
			return (0, s.default)(t, e), (0, i.default)(t, [{
				key: "_resetStatus",
				value: function() {
					if (this._status && (clearInterval(this._status.heartbeatTimer), clearTimeout(this._status.heartbeatOverTimer),
							this._status.sendCommandTimerMap && 0 !== Object.keys(this._status.sendCommandTimerMap).length))
						for (var e in this._status.sendCommandTimerMap) clearTimeout(this._status.sendCommandTimerMap[e]);
					this._status = {
						uid: "",
						cid: "",
						accid: "",
						token: "",
						address: [],
						webrtc: 1,
						mode: 0,
						scene: 1,
						usertype: 3,
						liveEnable: 0,
						rtmpRecord: 0,
						rtmpUrl: "",
						splitMode: "",
						recordAudio: 0,
						recordVideo: 0,
						recordType: 0,
						role: 0,
						seq: 1,
						cmdTasksMap: {},
						heartbeatTimer: null,
						heartbeatOverTimer: null,
						sendCommandTimerMap: {},
						layout: "",
						socketStatus: "CLOSED",
						checkP2PUserTimer: null
					}
				}
			}, {
				key: "_reset",
				value: function() {
					this.$options = {}, this._resetStatus(), this._wsLink = null
				}
			}, {
				key: "login",
				value: function() {
					var e = this;
					return new Promise(function(t, n) {
						e._wsLink = wx.connectSocket({
							url: e._status.address,
							fail: function(t) {
								e.logger.log(f.CONSTANT_ERROR.connectSocketFail.desc), e._status.socketStatus = "CLOSED", n(f.CONSTANT_ERROR
									.connectSocketFail)
							},
							success: function(n) {
								e._status.socketStatus = "OPENING", t()
							}
						}), e._bindWXSocketEvent()
					})
				}
			}, {
				key: "logout",
				value: function() {
					var e = this,
						t = {
							uid: this._status.uid,
							cid: this._status.cid,
							statistic: {},
							seq: this._status.seq++
						};
					return this.logger.log("ws::logout: ws status " + this._status.socketStatus), Promise.resolve().then(
						function() {
							return "LOGIN" === e._status.socketStatus ? e.sendCmd("logout", t).then(function(t) {
								return t && e.logger.log("ws::logout:", t.code), Promise.resolve(t)
							}) : Promise.resolve()
						}).then(function() {
						if (!e._wsLink) return e.emit("close"), Promise.resolve();
						switch (clearInterval(e._status.heartbeatInterval), e._status.socketStatus) {
							case "OPENING":
							case "OPEN":
							case "LOGIN":
							case "CLOSING":
								return e.closeSocket();
							case "CLOSED":
								return e.emit("close"), Promise.resolve()
						}
					})
				}
			}, {
				key: "checkP2PUser",
				value: function() {
					var e = this;
					if (0 === this._status.scene) {
						this.logger.log("ws::checkP2PUser ...");
						var t = {
							uid: this._status.uid,
							cid: this._status.cid,
							seq: this._status.seq++
						};
						clearTimeout(this._status.checkP2PUserTimer), this._status.checkP2PUserTimer = setTimeout(function() {
							e.sendCmd("getUploadUserList", t).then(function(t) {
								e.logger.log("ws::checkP2PUser:getUser ", t)
							}).catch(function(t) {
								e.logger.log("ws::checkP2PUser:error ", t), e.emit("hangup")
							})
						}, 2e4)
					}
				}
			}, {
				key: "closeSocket",
				value: function() {
					var e = this;
					return new Promise(function(t, n) {
						e.logger.log("ws::close WebSocket starting..."), clearInterval(e._status.heartbeatTimer), clearTimeout(e
							._status.heartbeatOverTimer), e._wsLink.close({
							code: 1e3,
							reason: "ws::user force close websocket",
							success: function(t) {
								e._status.socketStatus = "CLOSING", e.logger.log("ws::close WebSocket force closed success")
							},
							fail: function(t) {
								e._status.socketStatus = "CLOSING", e.logger.log("ws::close WebSocket force closed fail")
							},
							complete: function() {
								t()
							}
						})
					})
				}
			}, {
				key: "updatePushMode",
				value: function(e) {
					var t = this;
					return this._status.mode = e, new Promise(function(e, n) {
						t.sendCmd("updatePushMode", t._status).then(function(t) {
							200 === t.code ? e() : n(t)
						})
					})
				}
			}, {
				key: "startHeartbeat",
				value: function() {
					var e = this;
					this._status.heartbeatTimer = setInterval(function() {
						if (!e._status.heartbeatOverTimer) {
							var t = Date.now();
							e._status.heartbeatOverTimer = setTimeout(function() {
								e.logger.log("ws::heartbeating: overtime:", Date.now()), e.emit("heartbeatOverTime", {
									lastTime: t
								})
							}, p.Config.heartbeatOverTime)
						}
						return e.sendCmd("heartbeat", e._status)
					}, p.Config.heartbeatInterval)
				}
			}, {
				key: "getUploadUserList",
				value: function() {
					var e = this;
					return new Promise(function(t, n) {
						e.sendCmd("getUploadUserList", e._status).then(function(e) {
							200 === e.code ? t(e) : n(e)
						})
					})
				}
			}, {
				key: "_judgeRoleAndSave",
				value: function(e) {
					var t = this,
						n = c.default.deepClone(e);
					return 1 === this._mainStatus.role && n.userlist.map(function(e) {
						e.uid === t._status.uid && (t._mainStatus.rtmpPushAddress = e.url, e.url = null)
					}), n
				}
			}, {
				key: "_bindWXSocketEvent",
				value: function() {
					var e = this;
					this._wsLink.onOpen(function(t) {
						e._status.socketStatus = "OPEN", e.logger.log("ws::onOpen "), e.emit("open", f.CONSTANT_SOCKET.connectSocketSuccess),
							e.sendCmd("login", e._status).then(function(t) {
								e.logger.log("ws::onlogin ", t), e._status.socketStatus = "LOGIN", e.startHeartbeat(), e.checkP2PUser(),
									e.emit("syncDone", e._judgeRoleAndSave(t))
							}).catch(function(t) {
								e.emit("error", {
									code: t.code,
									desc: "登录失败"
								})
							})
					}), this._wsLink.onError(function(t) {
						e.logger.log("ws::onerror ", t), e.emit("error", t)
					}), this._wsLink.onClose(function(t) {
						e._status.socketStatus = "CLOSED", e.logger.log("ws::onclose ", t), e.emit("close", t), e._reset()
					}), this._wsLink.onMessage(function(t) {
						var n = t.data;
						if ("onHeartbeat" !== (n = (0, d.parsePacket)(n)).cmd && e.logger.log("ws::onmessage", n), n.seq) {
							var o = e._status.cmdTasksMap[n.seq];
							o && (delete e._status.cmdTasksMap[n.seq], 200 === n.body.code ? o.resolve(n.body) : o.reject(n.body))
						}
						e[n.cmd] && e[n.cmd](n), 0 !== Object.keys(e._status.sendCommandTimerMap).length && (clearTimeout(e._status
							.sendCommandTimerMap[n.seq]), delete e._status.sendCommandTimerMap[n.seq])
					})
				}
			}, {
				key: "sendCmd",
				value: function(e, t) {
					var n = this;
					if ("heartbeat" === e) {
						var o = (0, d.genPacket)(e, t, this._status.seq++);
						return this.logger.log("ws::sendHeartBeat", Date.now()), this._wsLink.send({
							data: o
						}), Promise.resolve()
					}
					var i = setTimeout(function() {
						n.emit("sendCommandOverTime", {
							cmd: e
						})
					}, p.Config.sendCommandOverTime);
					return this._status.sendCommandTimerMap[this._status.seq] = i, new Promise(function(o, i) {
						"logout" === e && setTimeout(function() {
							o()
						}, 300), n._status.cmdTasksMap[n._status.seq] = {
							resolve: o,
							reject: i
						};
						var r = (0, d.genPacket)(e, t, n._status.seq++);
						n.logger.log("ws::sendCmd", r), n._wsLink.send({
							data: r
						})
					})
				}
			}]), t
		}(a.default);
		(0, u.apiMixin)(_), (0, l.messageMixin)(_), t.default = _, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.default = {
			connectSocketSuccess: {
				code: "200",
				desc: "wx: connectSocket: success"
			}
		}, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.default = {
			closeNormal: {
				code: "0",
				desc: "wx: normally closed"
			},
			connectSocketFail: {
				code: "401",
				desc: "wx: connectSocket: fail"
			},
			reconnectFail: {
				code: "403",
				desc: "wx: maxceed reconnect times"
			},
			kick: {
				code: "405",
				desc: "wx: kicked"
			},
			loginFailed: {
				code: "417",
				desc: "wx: login failed cause room destroyed"
			}
		}, e.exports = t.default
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = h(n(19)),
			i = h(n(18)),
			r = h(n(124)),
			s = h(n(123)),
			a = h(n(127)),
			c = h(n(177)),
			u = h(n(126)),
			l = h(n(267)),
			d = h(n(266)),
			f = h(n(276)),
			p = n(91);

		function h(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var _ = function(e) {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				(0, o.default)(this, t);
				var n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return n.logger = new c.default({
						debug: e.debug
					}), n._commonStatus = {}, n._rtcStatus = {}, n._nrtcStatus = {
						appkey: e.appkey || null
					}, n._status = {
						RTC: !1,
						NRTC: !1,
						startSessionTime: 0,
						endSessionTime: 0,
						lastSessionDuation: 0
					}, e.nim ? n._status.RTC = !0 : n._status.NRTC = !0, n._imController = null, n._wsController = null, n._init(),
					n
			}
			return (0, s.default)(t, e), (0, i.default)(t, [{
				key: "_init",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					this._resetStatus(), this._status.RTC && (this._imController = new l.default(Object.assign(e, {
							status: this._status
						})), Object.assign(this, p.CONTROL_TYPE, p.CALL_TYPE)), Object.assign(this, p.ROLE_FOR_MEETING, p.SESSION_MODE,
							p.LIVE_ENABLE, p.RECORD_TYPE, p.RECORD_AUDIO, p.RECORD_VIDEO, p.NETCALL_MODE, p.RTMP_RECORD), this._wsController =
						new d.default(Object.assign(e, {
							status: this._status
						})), this._dataReporter = new f.default, this._bindEvent()
				}
			}, {
				key: "_resetStatus",
				value: function() {
					Object.assign(this._commonStatus, {
							closeEvent: p.CONSTANT_ERROR.closeNormal,
							role: 0,
							rtmpPushAddress: ""
						}), Object.assign(this._rtcStatus, {
							signalInited: !1,
							signalStartTime: 0,
							signalEndTime: 0,
							sessionMode: "",
							calling: !1,
							isCaller: !1,
							pushConfig: {},
							onTheCall: !1,
							isTeamCall: !1
						}), Object.assign(this._nrtcStatus, {
							joinChannelParam: null,
							isInTheRoom: !1,
							createChannelResponse: {}
						}), Object.assign(this._status, this._commonStatus), this._status.RTC ? Object.assign(this._status, this._rtcStatus) :
						Object.assign(this._status, this._nrtcStatus)
				}
			}, {
				key: "_updateStatus",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					Object.assign(this._status, e)
				}
			}, {
				key: "_bindEvent",
				value: function() {
					var e = this;
					this._wsController && (this._wsController.on("reconnectFailed", function(t) {
						e._status.closeEvent = p.CONSTANT_ERROR.reconnectFail, e.destroy()
					}), this._wsController.on("kicked", function(t) {
						e._status.closeEvent = p.CONSTANT_ERROR.kicked, e.emit("kicked", t), e.destroy()
					}), this._wsController.on("loginFailed", function(t) {
						e._status.closeEvent = p.CONSTANT_ERROR.loginFailed, e.destroy()
					}), this._wsController.on("destroy", function() {
						var t = Object.assign({}, e._status.closeEvent);
						e.logger.log("mainController::ws ondestroy: ", t), e._resetStatus(), e.emit("disconnect", t)
					}), this._wsController.on("error", function(t) {
						e.emit("error", t)
					}), this._wsController.on("syncDone", function(t) {
						e.emit("syncDone", t)
					}), this._wsController.on("clientLeave", function(t) {
						e.emit("clientLeave", t)
					}), this._wsController.on("clientJoin", function(t) {
						e.emit("clientJoin", t)
					}), this._wsController.on("clientUpdate", function(t) {
						e.emit("clientUpdate", t)
					}), this._wsController.on("liveRoomClose", function(t) {
						e.emit("liveRoomClose", t)
					}), this._wsController.on("willreconnect", function(t) {
						e.emit("willreconnect", t)
					}), this._wsController.on("sendCommandOverTime", function(t) {
						e.emit("sendCommandOverTime", t)
					}), this._wsController.on("sessionStart", this.setStartSessionTime.bind(this)), this._wsController.on(
						"sessionEnd", this.setEndSessionTime.bind(this)), this._wsController.on("_invokeHangup", function(t) {
						e._imController._onNotifyHangup(t)
					})), this._imController && (this._imController.on("control", function(t) {
						e.emit("control", t)
					}), this._imController.on("beCalling", function(t) {
						e.emit("beCalling", t)
					}), this._imController.on("callAccepted", function(t) {
						e.emit("callAccepted", t)
					}), this._imController.on("callRejected", function(t) {
						e.emit("callRejected", t)
					}), this._imController.on("joinChannel", function(t) {
						e.emit("joinChannel", t)
					}), this._imController.on("leaveChannel", function(t) {
						e.leaveChannel()
					}), this._imController.on("hangup", function(t) {
						e.emit("hangup", t)
					}), this._imController.on("callerAckSync", function(t) {
						e.emit("callerAckSync", t)
					}), this._imController.on("joinChannel", function(t) {
						e.emit("joinChannel", t)
					}), this._imController.on("resetWhenHangup", function(t) {
						e.destroy()
					}), this._imController.on("updateStatus", this._updateStatus.bind(this)), this._imController.on(
						"sessionStart", this.setStartSessionTime.bind(this)), this._imController.on("sessionEnd", this.setEndSessionTime
						.bind(this)), this._imController.on("updateStatistics", function(t) {
						e._dataReporter.updateStatistics(t)
					})), this._dataReporter && this._dataReporter.on("updateStatistics", function(t) {
						e._dataReporter.updateStatistics(t)
					})
				}
			}, {
				key: "destroy",
				value: function() {
					this._imController && (this._imController._resetStatus(), this._imController._nim && this._imController._nim
							.protocol && this._imController._nim.protocol.setCurrentNetcall()), this._wsController && this._wsController
						._destroy()
				}
			}, {
				key: "getStatus",
				value: function() {
					return u.default.deepClone(this._status)
				}
			}, {
				key: "setStartSessionTime",
				value: function() {
					this._status.startSessionTime = +Date.now(), this._status.endSessionTime = 0, this.emit("sessionStart")
				}
			}, {
				key: "setEndSessionTime",
				value: function() {
					this._status.startSessionTime ? (this._status.endSessionTime = +Date.now(), this._status.lastSessionDuation =
						this._status.endSessionTime - this._status.startSessionTime) : this.logger.warn(
						"mainController: setEndSessionTime failed: startSessionTime undefined！")
				}
			}]), t
		}(a.default);
		t.default = _, e.exports = t.default
	},
	function(e, t, n) {
		var o = n(23);
		o(o.S, "Object", {
			create: n(51)
		})
	},
	function(e, t, n) {
		n(285);
		var o = n(11).Object;
		e.exports = function(e, t) {
			return o.create(e, t)
		}
	},
	function(e, t, n) {
		e.exports = {
			default: n(286),
			__esModule: !0
		}
	},
	function(e, t, n) {
		var o = n(16),
			i = n(22),
			r = function(e, t) {
				if (i(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
			};
		e.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, o) {
				try {
					(o = n(69)(Function.call, n(90).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
				} catch (e) {
					t = !0
				}
				return function(e, n) {
					return r(e, n), t ? e.__proto__ = n : o(e, n), e
				}
			}({}, !1) : void 0),
			check: r
		}
	},
	function(e, t, n) {
		var o = n(23);
		o(o.S, "Object", {
			setPrototypeOf: n(288).set
		})
	},
	function(e, t, n) {
		n(289), e.exports = n(11).Object.setPrototypeOf
	},
	function(e, t, n) {
		e.exports = {
			default: n(290),
			__esModule: !0
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.NetcallWeixin = void 0;
		var o = m(n(19)),
			i = m(n(18)),
			r = m(n(124)),
			s = m(n(123)),
			a = m(n(284)),
			c = m(n(275)),
			u = m(n(273)),
			l = m(n(272)),
			d = m(n(271)),
			f = m(n(270)),
			p = m(n(126)),
			h = m(n(269)),
			_ = m(n(268));

		function m(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.NetcallWeixin = function(e) {
			function t(e) {
				(0, o.default)(this, t);
				var n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return e.nim ? (Object.assign(a.default.prototype, _.default), n._init({
					nim: e.nim,
					logger: n.logger
				})) : (p.default.verifyOptions(e, "appkey"), Object.assign(a.default.prototype, h.default), n._init({
					appkey: e.appkey,
					nim: e.nim,
					logger: n.logger
				})), n
			}
			return (0, s.default)(t, e), (0, i.default)(t, null, [{
				key: "getInstance",
				value: function(e) {
					return t.instance ? (e.nim && e.nim && (t.instance._imController._nim = e.nim), t.instance) : t.instance =
						new t(e)
				}
			}, {
				key: "destroy",
				value: function() {
					t.instance = null
				}
			}, {
				key: "install",
				value: function(e, t) {
					c.default.install(e, t), u.default.install(e, t), e.parser.mixin({
						configMap: l.default,
						serializeMap: d.default,
						unserializeMap: f.default
					})
				}
			}]), t
		}(a.default)
	},
	function(e, t, n) {
		"use strict";
		var o = n(292);
		e.exports = o.NetcallWeixin
	}
]);
