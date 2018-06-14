/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeWriter = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Turn an input into a type writer
 */
var input = document.querySelector('input.type-writer');
var texts = ['Vue', 'React', 'Angular'];
var inputTypeWriter = new _typeWriter.default({
  texts: texts,
  selector: input,
  speed: 100,
  loop: true,
  clear: true
});
setTimeout(function () {
  inputTypeWriter.start();
}, 500);
input.addEventListener('click', function () {
  inputTypeWriter.stop();
});
input.addEventListener('blur', function () {
  inputTypeWriter.start();
});
/**
 *  Type each text in a new line
 *
 */

var paragraph = ['Hello world!', 'How are you doing?'];
var paragraphDiv = document.querySelector('div.paragraph');
var paragraphTypeWriter = new _typeWriter.default({
  texts: paragraph,
  selector: paragraphDiv,
  speed: 100,
  loop: true,
  clear: false,
  lineBreak: true
});
setTimeout(function () {
  paragraphTypeWriter.start();
}, 400);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};

    function i(n) {
      if (e[n]) return e[n].exports;
      var o = e[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
    }

    return i.m = t, i.c = e, i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, i.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, i.t = function (t, e) {
      if (1 & e && (t = i(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        i.d(n, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return n;
    }, i.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return i.d(e, "a", e), e;
    }, i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, i.p = "", i(i.s = 0);
  }([function (t, e, i) {
    "use strict";

    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var o = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.mergeOptions(e), this.init();
      }

      var e, i, o;
      return e = t, (i = [{
        key: "init",
        value: function value() {
          if (this.selector = "string" == typeof this.options.selector ? document.querySelector(this.options.selector) : this.options.selector, void 0 === this.selector || null === this.selector) return console.log("Please provide a valid selector.");
          this.lineBreak = this.options.lineBreak, this.texts = this.normalizeTexts(this.options.texts), this.speed = this.options.speed, this.blinkInterval = this.options.blinkInterval, this.typing = !1, this.loop = this.options.loop, this.clear = this.options.clear, this.setTimeOutStore = {};
        }
      }, {
        key: "initInputSelector",
        value: function value() {
          this.typeTarget = "value", this.selector.defaultPlaceholder = this.selector.defaultPlaceholder || this.selector.placeholder, this.selector.placeholder = "";
        }
      }, {
        key: "initNoneInputSelector",
        value: function value() {
          this.typeTarget = "innerHTML";
        }
      }, {
        key: "start",
        value: function value() {
          this.isSelectorInput() ? this.initInputSelector() : this.initNoneInputSelector(), this.shouldStart() && (this.typing = !0, this.typeTexts(0));
        }
      }, {
        key: "restoreInputSelector",
        value: function value() {
          this.selector.placeholder = this.selector.defaultPlaceholder;
        }
      }, {
        key: "restoreNoneInputSelector",
        value: function value() {}
      }, {
        key: "stop",
        value: function value() {
          this.typing && (this.isSelectorInput() ? this.restoreInputSelector() : this.restoreNoneInputSelector(), this.clearSetTimeoutStore(), this.typing = !1, this.selector[this.typeTarget] = "");
        }
      }, {
        key: "typeTexts",
        value: function value(t) {
          var e = this;

          if (void 0 === this.texts[t]) {
            if (this.loop) return void this.typeTexts(0);
            this.clear && (this.selector[this.typeTarget] = "");
          }

          t < this.texts.length && this.typeText(this.texts[t], 0, t, function () {
            e.clear ? e.clearText(e.texts[t], 0, t, function () {
              e.typeTexts(t + 1);
            }) : e.typeTexts(t + 1);
          });
        }
      }, {
        key: "typeText",
        value: function value(t, e, i, n) {
          var o = this;

          if (e <= t.length) {
            this.shouldLineBreak(t[e]) && (e += 3), this.selector[this.typeTarget] = "".concat(t.substring(0, e)).concat(this.getBlinker());
            var r = "typeText".concat(i).concat(e);
            this.setTimeOutStore[r] = setTimeout(function () {
              o.typeText(t, e + 1, i, n);
            }, this.speed);
          } else {
            if (this.lineBreak) {
              this.selector[this.typeTarget] = "".concat(t);
              var s = "typeTextCb".concat(i).concat(e);
              return void (this.setTimeOutStore[s] = setTimeout(n, this.blinkInterval));
            }

            var l = "blinding".concat(i).concat(e);
            this.setTimeOutStore[l] = setTimeout(function () {
              o.selector[o.typeTarget] = t;
              var r = "blinkOnce".concat(i).concat(e);
              o.setTimeOutStore[r] = setTimeout(function () {
                o.selector[o.typeTarget] = "".concat(t).concat(o.getBlinker());
                var r = "blinkTwice".concat(i).concat(e);
                o.setTimeOutStore[r] = setTimeout(function () {
                  o.selector[o.typeTarget] = t;
                  var r = "typeTextCb".concat(i).concat(e);
                  o.setTimeOutStore[r] = setTimeout(n, o.blinkInterval);
                }, o.blinkInterval);
              }, o.blinkInterval);
            }, this.blinkInterval);
          }
        }
      }, {
        key: "clearText",
        value: function value(t, e, i, n) {
          var o = this;

          if (e <= t.length) {
            this.shouldLineBreak(t[t.length - e]) && (e += 3), this.selector[this.typeTarget] = "".concat(t.substring(0, t.length - e)).concat(this.getBlinker());
            var r = "clearText".concat(i).concat(e);
            this.setTimeOutStore[r] = setTimeout(function () {
              o.clearText(t, e + 1, i, n);
            }, this.speed);
          } else {
            var s = "clearTextCb".concat(i).concat(e);
            this.setTimeOutStore[s] = setTimeout(n, this.blinkInterval);
          }
        }
      }, {
        key: "clearSetTimeoutStore",
        value: function value() {
          var t = this;
          Object.keys(this.setTimeOutStore).forEach(function (e) {
            return clearTimeout(t.setTimeOutStore[e]);
          });
        }
      }, {
        key: "isSelectorInput",
        value: function value() {
          return this.selector instanceof window.HTMLInputElement && "text" === this.selector.type;
        }
      }, {
        key: "shouldStart",
        value: function value() {
          return this.isSelectorInput() ? !this.typing && !this.hasDefaultValue() : !this.typing;
        }
      }, {
        key: "hasDefaultValue",
        value: function value() {
          return "" !== this.selector[this.typeTarget];
        }
      }, {
        key: "getBlinker",
        value: function value() {
          return this.selector[this.typeTarget].indexOf("|") !== this.selector[this.typeTarget].length ? "|" : "";
        }
      }, {
        key: "normalizeTexts",
        value: function value(t) {
          return this.lineBreak && (t = [t.join("<br>")]), t;
        }
      }, {
        key: "shouldLineBreak",
        value: function value(t) {
          return "<" === t || ">" === t;
        }
      }, {
        key: "mergeOptions",
        value: function value(t) {
          var e = this;
          this.options = {
            speed: 100,
            blinkInterval: 200,
            clear: !0,
            loop: !0,
            selector: ".type-writer",
            texts: [],
            lineBreak: !1
          }, Object.keys(t).forEach(function (i) {
            e.options[i] = t[i];
          });
        }
      }]) && n(e.prototype, i), o && n(e, o), t;
    }();

    e.default = o;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);