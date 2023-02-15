!(function (t, e) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = e())
		: "function" == typeof define && define.amd
		? define([], e)
		: "object" == typeof exports
		? (exports.Candy = e())
		: (t.Candy = e());
})(this, function () {
	return (function (t) {
		var e = {};
		function i(o) {
			if (e[o]) return e[o].exports;
			var n = (e[o] = { i: o, l: !1, exports: {} });
			return t[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
		}
		return (
			(i.m = t),
			(i.c = e),
			(i.d = function (t, e, o) {
				i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
			}),
			(i.r = function (t) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(t, "__esModule", { value: !0 });
			}),
			(i.t = function (t, e) {
				if ((1 & e && (t = i(t)), 8 & e)) return t;
				if (4 & e && "object" == typeof t && t && t.__esModule) return t;
				var o = Object.create(null);
				if (
					(i.r(o),
					Object.defineProperty(o, "default", { enumerable: !0, value: t }),
					2 & e && "string" != typeof t)
				)
					for (var n in t)
						i.d(
							o,
							n,
							function (e) {
								return t[e];
							}.bind(null, n),
						);
				return o;
			}),
			(i.n = function (t) {
				var e =
					t && t.__esModule
						? function () {
								return t.default;
						  }
						: function () {
								return t;
						  };
				return i.d(e, "a", e), e;
			}),
			(i.o = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(i.p = ""),
			i((i.s = 1))
		);
	})([
		function (t, e) {
			function i(t, e, o) {
				if (!(this instanceof i)) return new i(t);
				void 0 !== t &&
					((this.canvas = "string" == typeof t ? document.querySelector(t) : t),
					(this.ctx = this.canvas.getContext("2d")),
					(this.width = e),
					(this.height = o),
					(this.canvas.width = CANVAS_WIDTH = this.width),
					(this.canvas.height = CANVAS_HEIGHT = this.height)),
					(this.idIndex = 0),
					(this.screenBuffers = {}),
					(this.fireCallback = !1),
					(this.resCount = 0),
					(this.doFill = !0),
					(this.doStroke = !0),
					(this.rectmode = "CORNER"),
					(this.font = ["24px", "Arial"]),
					(this.animateLoop = !0),
					(this.pixels = []),
					(this.imageData = null),
					(this.preload = function () {
						return null;
					}),
					this.trypreload(),
					this._initCanvas();
			}
			(i.prototype.trypreload = function () {
				if (window.preload || this.preload)
					var t = window.setInterval(
						function () {
							if (this.resCount <= 0) {
								var e = (performance.now() / 1e3).toFixed(2);
								return (
									console.log(
										"%cAll Resources Loaded in " + e + "s",
										"color : green",
									),
									(void 0 === window.preload ? this.preload : window.preload)(),
									void window.clearInterval(t)
								);
							}
						}.bind(this),
						10,
					);
			}),
				(i.prototype.resize = function (t) {
					window.addEventListener(
						"resize",
						function () {
							this.resizeCanvas(this.canvas, t);
						}.bind(this),
					),
						this.resizeCanvas(this.canvas, t);
				}),
				(i.prototype.fullScreen = function (t) {
					t = void 0 === t ? 4 : t;
					let e = WINDOW_WIDTH - t,
						i = WINDOW_HEIGHT - t;
					(this.canvas.width = e),
						(this.canvas.height = i),
						(this.width = e),
						(this.height = i),
						(CANVAS_WIDTH = e),
						(CANVAS_HEIGHT = i);
				}),
				(i.prototype.createCanvas = function (t, e) {
					return (
						(this.canvas = document.createElement("canvas")),
						(this.canvas.id = "CandyCanvas-" + this.idIndex),
						(this.canvas.width = t || 200),
						(this.canvas.height = e || 200),
						(CANVAS_WIDTH = this.canvas.width),
						(CANVAS_HEIGHT = this.canvas.height),
						(this.ctx = this.canvas.getContext("2d")),
						document.body.appendChild(this.canvas),
						this.index++,
						this
					);
				}),
				(i.prototype.createScreenBuffer = function (t, e, o) {
					let n = document.createElement("canvas");
					return (
						(n.id = "CandyCanvasOffscreen-" + this.idIndex),
						(n.width = e || this.canvas.width),
						(n.height = o || this.canvas.height),
						(this.screenBuffers[t] = new i(n, n.width, n.height)),
						this.screenBuffers[t]
					);
				}),
				(i.prototype.putScreenBuffer = function (t) {
					this.ctx.drawImage(t.canvas, 0, 0);
				}),
				(i.prototype._initCanvas = function () {
					window.addEventListener(
						"DOMContentLoaded",
						function () {
							window.animate && this.fireCallback && animate();
						}.bind(this),
					);
				}),
				(i.prototype.noLoop = function () {
					this.animateLoop = !1;
				}),
				(i.prototype.loop = function (t) {
					if (this.animateLoop)
						return window.animate
							? requestAnimationFrame(animate)
							: requestAnimationFrame(t);
					this.animateLoop = !0;
				}),
				(i.prototype.resizeCanvas = function (t, e) {
					let i = (9 * window.innerWidth) / 16;
					window.innerHeight > i
						? (e
								? ((t.width = window.innerWidth), (t.height = i))
								: ((t.style.width = window.innerWidth + "px"),
								  (t.style.height = i + "px")),
						  (t.style.left = "0px"),
						  (t.style.top = (window.innerHeight - i) / 2 + "px"))
						: (e
								? ((t.width = (16 * window.innerHeight) / 9),
								  (t.height = window.innerHeight))
								: ((t.style.width = (16 * window.innerHeight) / 9 + "px"),
								  (t.style.height = window.innerHeight + "px")),
						  (t.style.left = (window.innerWidth - t.width) / 2 + "px"),
						  (t.style.top = "0px"));
				}),
				(t.exports = i);
		},
		function (t, e, i) {
			const o = i(0);
			i(2), i(3), i(4), i(5), (t.exports = o);
		},
		function (t, e, i) {
			const o = i(0);
			(o.prototype.noFill = function () {
				return (this.doFill = !1), this;
			}),
				(o.prototype.noStroke = function () {
					return (this.doStroke = !1), this;
				}),
				(o.prototype.fill = function (t, e, i, o) {
					let n = this._parseColor(t, e, i, o);
					if ("object" == typeof t && !(t instanceof CanvasGradient)) {
						let e = c.ctx.createLinearGradient(100, 0, 0, 100);
						for (let i = 0; i < t.length; i++)
							e.addColorStop(i / t.length, t[i]);
						return (this.ctx.fillStyle = e), (this.doFill = !0), !0;
					}
					return (
						(this.ctx.fillStyle = n),
						(this.doFill = !0),
						void 0 === t ? (this.ctx.fill(), this) : this
					);
				}),
				(o.prototype.stroke = function (t, e, i, o) {
					let n = this._parseColor(t, e, i, o);
					if ("object" == typeof t && !(t instanceof CanvasGradient)) {
						let e = c.ctx.createLinearGradient(100, 0, 0, 100);
						for (let i = 0; i < t.length; i++)
							e.addColorStop(i / t.length, t[i]);
						return (this.ctx.strokeStyle = e), (this.doStroke = !0), !0;
					}
					return (
						(this.ctx.strokeStyle = n),
						(this.doStroke = !0),
						void 0 === t ? (this.ctx.stroke(), this) : this
					);
				}),
				(o.prototype.linearGradient = function (t, e, i, o, n) {
					let r = this.ctx.createLinearGradient(t, e, i, o);
					for (let t = 0; t < n.length; t++) {
						let e = t / n.length,
							i = n[t].split("-");
						void 0 !== i[1] && (e = i[1]), r.addColorStop(e, i[0]);
					}
					return r;
				}),
				(o.prototype.radialGradient = function (t, e, i, o, n) {
					let r = this.ctx.createRadialGradient(t, e, i, t, e, o);
					for (let t = 0; t < n.length; t++) {
						let e = t / n.length,
							i = n[t].split("-");
						void 0 !== i[1] && (e = i[1]), r.addColorStop(e, i[0]);
					}
					return r;
				}),
				(o.prototype.shadow = function (t, e, i, o) {
					(this.ctx.shadowColor = o || "rgba(100,100,100,.4)"),
						(this.ctx.shadowOffsetX = t || 0),
						(this.ctx.shadowOffsetY = e || 0),
						(this.ctx.shadowBlur = i || 0);
				}),
				(o.prototype.noShadow = function () {
					(this.ctx.shadowColor = "rgba(0, 0, 0, 0)"),
						(this.ctx.shadowOffsetX = 0),
						(this.ctx.shadowOffsetY = 0),
						(this.ctx.shadowBlur = 0);
				}),
				(o.prototype.strokeWeight = function (t) {
					return (this.ctx.lineWidth = t), this;
				}),
				(o.prototype.clear = function (t, e, i, o) {
					let n = this._parseColor(t, e, i, o);
					return n
						? ((this.ctx.fillStyle = n),
						  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height),
						  this)
						: (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
						  this);
				}),
				(o.prototype.rectMode = function (t) {
					this.rectmode = t;
				}),
				(o.prototype.rect = function (t, e, i, o, n, r, s, h) {
					void 0 === o && (o = i),
						void 0 === r && (r = n),
						void 0 === s && (s = r),
						void 0 === h && (h = s);
					let a = i / 2,
						c = o / 2;
					return n
						? (this.ctx.beginPath(),
						  "center" === this.rectmode
								? (this.ctx.moveTo(t - a + n, e - c),
								  this.ctx.arcTo(t - a + i, e - c, t - a + i, e - c + o, r),
								  this.ctx.arcTo(t - a + i, e - c + o, t - a, e - c + o, s),
								  this.ctx.arcTo(t - a, e - c + o, t - a, e - c, h),
								  this.ctx.arcTo(t - a, e - c, t - a + i, e - c, n))
								: (this.ctx.moveTo(t + n, e),
								  this.ctx.arcTo(t + i, e, t + i, e + o, r),
								  this.ctx.arcTo(t + i, e + o, t, e + o, s),
								  this.ctx.arcTo(t, e + o, t, e, h),
								  this.ctx.arcTo(t, e, t + i, e, n)),
						  this.doFill && this.ctx.fill(),
						  this.doStroke && this.ctx.stroke(),
						  this.ctx.closePath(),
						  this)
						: (this.ctx.beginPath(),
						  "center" === this.rectmode
								? this.ctx.rect(t - i / 2, e - o / 2, i, o)
								: this.ctx.rect(t, e, i, o),
						  this.doFill && this.ctx.fill(),
						  this.doStroke && this.ctx.stroke(),
						  this.ctx.closePath(),
						  this);
				}),
				(o.prototype.triangle = function (t, e, i, o) {
					this.ctx.beginPath(),
						this.ctx.moveTo(t, e),
						this.ctx.lineTo(t + i / 2, e - o),
						this.ctx.lineTo(t + i, e),
						this.ctx.closePath(),
						this.doFill && this.ctx.fill(),
						this.doStroke && this.ctx.stroke();
				}),
				(o.prototype.circle = function (t, e, i) {
					return (
						this.ctx.beginPath(),
						this.ctx.arc(t, e, i, 0, 2 * Math.PI),
						this.doFill && this.ctx.fill(),
						this.doStroke && this.ctx.stroke(),
						this.ctx.closePath(),
						this
					);
				}),
				(o.prototype.line = function (t, e, i, o) {
					return (
						this.ctx.beginPath(),
						this.ctx.moveTo(t, e),
						this.ctx.lineTo(i, o),
						this.doFill && this.ctx.fill(),
						this.doStroke && this.ctx.stroke(),
						this.ctx.closePath(),
						this
					);
				}),
				(o.prototype.begin = function () {
					this.ctx.beginPath();
				}),
				(o.prototype.close = function () {
					this.ctx.closePath();
				}),
				(o.prototype.from = function (t, e) {
					return (
						"object" == typeof t && this.ctx.moveTo(t.x, t.y),
						this.ctx.moveTo(t, e),
						this
					);
				}),
				(o.prototype.to = function (t, e) {
					return (
						"object" == typeof t && this.ctx.lineTo(t.x, t.y),
						this.ctx.lineTo(t, e),
						this
					);
				}),
				(o.prototype.image = function (t, e, i, o, n, r, s, h, a) {
					t.complete
						? 5 === arguments.length
							? this.ctx.drawImage(t, e, i, o, n)
							: this.ctx.drawImage(t, e, i, o, n, r, s, h, a)
						: window.setTimeout(() => {
								5 === arguments.length
									? this.image(t, e, i, o, n)
									: this.image(t, e, i, o, n, r, s, h, a);
						  }, 50);
				}),
				(o.prototype.textAlign = function (t) {
					return (this.ctx.textAlign = t), this;
				}),
				(o.prototype.textBaseline = function (t) {
					return (this.ctx.textBaseline = t), this;
				}),
				(o.prototype.textFont = function (t) {
					return (this.font[1] = t), this;
				}),
				(o.prototype.textSize = function (t) {
					return (this.font[0] = t + "px"), this;
				}),
				(o.prototype.text = function (t, e, i, o, n) {
					return (
						(this.ctx.font = this.font.join(" ")),
						this.doFill && this.ctx.fillText(t, e, i, o, n),
						this.doStroke && this.ctx.strokeText(t, e, i, o, n),
						this
					);
				}),
				(o.prototype.blendMode = function (t) {
					this.ctx.globalCompositeOperation = t;
				}),
				(o.prototype.alpha = function (t) {
					this.ctx.globalAlpha = t;
				}),
				(o.prototype.translate = function (t, e) {
					return void 0 === e && (e = t), this.ctx.translate(t, e), this;
				}),
				(o.prototype.rotate = function (t) {
					return this.ctx.rotate(t), this;
				}),
				(o.prototype.scale = function (t, e) {
					return (
						void 0 === t && (t = 1),
						void 0 === e && (e = t),
						this.ctx.scale(t, e),
						this
					);
				}),
				(o.prototype.transRot = function (t, e, i) {
					return this.ctx.translate(t, e), this.ctx.rotate(i), this;
				}),
				(o.prototype.push = function () {
					this.ctx.save();
				}),
				(o.prototype.pop = function () {
					this.ctx.restore();
				}),
				(o.prototype.smooth = function (t) {
					"imageSmoothingEnabled" in this.ctx &&
						((this.ctx.imageSmoothingEnabled = !0),
						(this.ctx.imageSmoothingQuality = t));
				}),
				(o.prototype.noSmooth = function () {
					"imageSmoothingEnabled" in this.ctx &&
						(this.ctx.imageSmoothingEnabled = !1);
				}),
				(o.prototype.loadPixels = function (t, e) {
					void 0 === t && (t = this.canvas.width),
						void 0 === e && (e = this.canvas.height);
					let i = this.ctx.getImageData(0, 0, t, e);
					return (
						(this.imageData = i),
						(this.pixels = i.data),
						{ imageData: i, pixels: i.data }
					);
				}),
				(o.prototype.updatePixels = function (t, e, i, o) {
					void 0 === t &&
						void 0 === e &&
						void 0 === i &&
						void 0 === o &&
						((t = 0),
						(e = 0),
						(i = this.canvas.width),
						(o = this.canvas.height)),
						this.ctx.putImageData(this.imageData, t, e, 0, 0, i, o);
				}),
				(o.prototype.setPixelXYColor = function (t, e, i, o) {
					let n = 4 * (t + e * this.canvas.width);
					this.setPixelArrayColor(n, i, o);
				}),
				(o.prototype.setPixelArrayColor = function (t, e, i) {
					let o;
					if ((o = void 0 !== i ? i : this.pixels).length < 1)
						throw new Error("loadPixels() is not called");
					return (
						(o[t + 0] = e[0]),
						(o[t + 1] = e[1]),
						(o[t + 2] = e[2]),
						(o[t + 3] = e[3] || 255),
						o
					);
				}),
				(t.exports = o);
		},
		function (t, e, i) {
			const o = i(0);
			(o.prototype.loadImage = function (t) {
				this.resCount++;
				let e = new Image();
				return (
					(e.src = t),
					(e.onload = function () {
						this.resCount--;
					}.bind(this)),
					e
				);
			}),
				(o.prototype.loadJSON = function (t, e) {
					this.resCount++;
					let i = new XMLHttpRequest();
					i.open("GET", t, !0),
						(i.onload = () => {
							this.resCount--,
								4 === i.readyState && 200 === i.status
									? e(null, i.responseText)
									: e("Error loading JSON", null);
						}),
						i.send();
				}),
				(o.prototype.drawJSON = function (t) {
					for (const e in t) {
						let i = e.split("-")[0];
						switch (i) {
							case "fill":
							case "stroke":
								this[i](t[i]);
								break;
							default:
								"object" == typeof t[i]
									? this[i].apply(this, t[i])
									: this[i].call(this, t[i]);
						}
					}
				}),
				(t.exports = o);
		},
		function (t, e, i) {
			const o = i(0);
			(o.prototype._parseColor = function (t, e, i, o) {
				let n = t;
				return (
					"number" == typeof t && (n = rgba(t, e, i)),
					"number" != typeof t ||
						!e ||
						i ||
						o ||
						((o = e), (n = rgba(t, t, t, e))),
					"number" == typeof t &&
						"number" == typeof e &&
						"number" == typeof i &&
						(n = rgba(t, e, i, o)),
					n
				);
			}),
				(o.prototype.keyIsPressed = function (t) {
					return !0 === CURRENT_KEYS[t];
				}),
				(t.exports = o);
		},
		function (t, e, i) {
			(function (t) {
				function e() {
					(t.WINDOW_WIDTH = window.innerWidth),
						(t.WINDOW_HEIGHT = window.innerHeight);
				}
				(t.rgba = function (t, e, i, o) {
					return (
						void 0 === e && (e = t),
						void 0 === i && (i = t),
						void 0 === o && (o = 1),
						o > 1 && (o /= 255),
						"rgba(" +
							clamp(t, 0, 255) +
							"," +
							clamp(e, 0, 255) +
							"," +
							clamp(i, 0, 255) +
							"," +
							clamp(o, 0, 1) +
							")"
					);
				}),
					(t.rgb = function (t, e, i) {
						return (
							void 0 === e && (e = t),
							void 0 === i && (i = t),
							"rgb(" +
								clamp(t, 0, 255) +
								"," +
								clamp(e, 0, 255) +
								"," +
								clamp(i, 0, 255) +
								")"
						);
					}),
					(t.hsla = function (t, e, i, o) {
						return (
							"hsla(" +
							t +
							"deg, " +
							clamp(e, 0, 100) +
							"%, " +
							clamp(i, 0, 100) +
							"%, " +
							(void 0 === o ? 1 : o) +
							")"
						);
					}),
					(t.hsl = function (t, e, i) {
						return (
							"hsl(" +
							t +
							"deg, " +
							clamp(e, 0, 100) +
							"%, " +
							clamp(i, 0, 100) +
							"%)"
						);
					}),
					(t.randomRGB = function (t, e, i) {
						let o = randomInt(t || 255),
							n = randomInt(e || 255),
							r = randomInt(i || 255);
						return rgb(o, n, r);
					}),
					(t.randomHSLA = function (t, e, i, o) {
						let n = randomInt(t || 360),
							r = randomInt(e || 100),
							s = randomInt(i || 100);
						return hsla(n, r, s, void 0 === o ? 1 : o);
					}),
					(t.radians = function (t) {
						return (t * Math.PI) / 180;
					}),
					(t.norm = function (t, e, i) {
						return (t - e) / (i - e);
					}),
					(t.lerp = function (t, e, i) {
						return (i - e) * t + e;
					}),
					(t.map = function (t, e, i, o, n) {
						return this.lerp(this.norm(t, e, i), o, n);
					}),
					(t.dist = function (t, e, i, o) {
						let n = t - i,
							r = e - o;
						return Math.sqrt(n * n + r * r);
					}),
					(t.distSq = function (t, e, i, o) {
						let n = t - i,
							r = e - o;
						return n * n + r * r;
					}),
					(t.random = function (t, e) {
						return void 0 === e
							? Math.random() * (void 0 === t ? 1 : t)
							: t + Math.random() * (e - t);
					}),
					(t.randomInt = function (t, e) {
						return Math.floor(random(t, e));
					}),
					(t.clamp = function (t, e, i) {
						return Math.min(Math.max(t, Math.min(e, i)), Math.max(e, i));
					}),
					(t.tween = function (t, e, i) {
						return null == i && (i = 20), (t += (e - t) / i);
					}),
					(t.checkType = function (t, e) {
						if (void 0 !== t) {
							if ("object" == typeof t) {
								if (
									-1 ===
									t.constructor
										.toString()
										.toLowerCase()
										.indexOf(e + "()")
								)
									throw (
										"Type Cheking Error : (" +
										typeof t +
										" " +
										t +
										") is not typeof " +
										e
									);
								return t;
							}
							if (typeof t !== e)
								throw (
									"Type Cheking Error : (" +
									typeof t +
									" " +
									t +
									") is not typeof " +
									e
								);
							return t;
						}
					}),
					(t.optional = function (t, e) {
						return void 0 === t && (t = e), t;
					}),
					(t.intersects = function (t, e) {
						let i = t.x,
							o = t.x + t.width,
							n = t.y,
							r = t.y + t.height,
							s = e.x,
							h = e.x + e.width,
							a = e.y,
							c = e.y + e.height;
						return (
							(t.width && t.height) || ((o = t.x), (r = t.y)),
							(e.width && e.height) || ((h = e.x), (c = e.y)),
							(t.width && t.height) || (e.width && e.height),
							!(s >= o || i >= h || a >= r || n >= c)
						);
					}),
					(t.mouseX = 0),
					(t.mouseY = 0),
					(t.mouseDown = !1),
					window.addEventListener("mousemove", function (e) {
						(t.mouseX = e.offsetX), (t.mouseY = e.offsetY);
					}),
					window.addEventListener("mousedown", function () {
						t.mouseDown = !0;
					}),
					window.addEventListener("mouseup", function () {
						t.mouseDown = !1;
					}),
					(t.CURRENT_KEYS = {}),
					(t.KEY_W = 87),
					(t.KEY_A = 65),
					(t.KEY_S = 83),
					(t.KEY_D = 68),
					(t.KEY_SPACE = 32),
					(t.ARROW_UP = 38),
					(t.ARROW_DOWN = 40),
					(t.ARROW_LEFT = 37),
					(t.ARROW_RIGHT = 39),
					window.addEventListener("keydown", function (e) {
						(t.code = e.keyCode || e.which),
							(t.CURRENT_KEYS[code] = !0),
							window.onKeyPressed && t.onKeyPressed(code, e);
					}),
					window.addEventListener("keyup", function (e) {
						(t.code = e.keyCode || e.which), (t.CURRENT_KEYS[code] = !1);
					}),
					(t.CANVAS_WIDTH = 0),
					(t.CANVAS_HEIGHT = 0),
					(t.WINDOW_WIDTH = 0),
					(t.WINDOW_HEIGHT = 0),
					e(),
					window.addEventListener("resize", e),
					(t.ADD = "lighter"),
					(t.DIFFERENCE = "difference"),
					(t.EXCLUSION = "exclusion"),
					(t.SCREEN = "screen"),
					(t.XOR = "xor"),
					(t.COPY = "copy"),
					(t.SRC_OVER = "source-over"),
					(t.SRC_OUT = "source-out"),
					(t.SRC_IN = "source-in"),
					(t.SRC_TOP = "source-atop"),
					(t.DEST_OVER = "destination-over"),
					(t.DEST_OUT = "destination-out"),
					(t.DEST_IN = "destination-in"),
					(t.DEST_TOP = "destination-atop"),
					(t.CENTER = "center"),
					(t.MIDDLE = "middle"),
					(t.CORNER = "corner");
			}.call(this, i(6)));
		},
		function (t, e) {
			var i;
			i = (function () {
				return this;
			})();
			try {
				i = i || new Function("return this")();
			} catch (t) {
				"object" == typeof window && (i = window);
			}
			t.exports = i;
		},
	]);
});
