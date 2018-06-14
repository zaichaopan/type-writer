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

var texts = ['Laravel is the best!', 'Vue is awesome!'];
var input = document.querySelector('input.type-writer');
var inputTypeWriter = new _typeWriter.default({
  texts: texts,
  selector: input,
  speed: 100,
  loop: true,
  clear: true
});
setTimeout(function () {
  inputTypeWriter.start();
}, 400);
input.addEventListener('click', function () {
  inputTypeWriter.stop();
});
input.addEventListener('blur', function () {
  inputTypeWriter.start();
});
var paragraph = ['Laravel is the best! <br> Vue is awesome!'];
var paragraphDiv = document.querySelector('div.paragraph');
console.log(paragraphDiv);
var paragraphTypeWriter = new _typeWriter.default({
  texts: paragraph,
  selector: paragraphDiv,
  speed: 100,
  loop: false,
  clear: false
});
setTimeout(function () {
  paragraphTypeWriter.start();
  console.log('called');
}, 400);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var setTimeoutStore = {};

      var TypeWriter =
      /*#__PURE__*/
      function () {
        function TypeWriter(options) {
          _classCallCheck(this, TypeWriter);

          this.mergeOptions(options);
          this.init();
        }

        _createClass(TypeWriter, [{
          key: "init",
          value: function init() {
            this.selector = typeof this.options.selector === 'string' ? document.querySelector(this.options.selector) : this.options.selector;

            if (this.selector === undefined || this.selector === null) {
              return console.log('Please provide a valid selector.');
            }

            this.texts = this.options.texts;
            this.speed = this.options.speed;
            this.blinkInterval = this.options.blinkInterval;
            this.typing = false;
            this.loop = this.options.loop;
            this.clear = this.options.clear;
          }
        }, {
          key: "initInputSelector",
          value: function initInputSelector() {
            this.typeTarget = 'value';
            this.selector.defaultPlaceholder = this.selector.defaultPlaceholder || this.selector.placeholder;
            this.selector.placeholder = '';
          }
        }, {
          key: "initNoneInputSelector",
          value: function initNoneInputSelector() {
            this.typeTarget = 'innerHTML';
          }
        }, {
          key: "start",
          value: function start() {
            console.log('should start');
            this.isSelectorInput() ? this.initInputSelector() : this.initNoneInputSelector();
            console.log(this.shouldStart());

            if (this.shouldStart()) {
              this.typing = true;
              this.typeTexts(0);
            }
          }
        }, {
          key: "restoreInputSelector",
          value: function restoreInputSelector() {
            this.selector.placeholder = this.selector.defaultPlaceholder;
          }
        }, {
          key: "restoreNoneInputSelector",
          value: function restoreNoneInputSelector() {}
        }, {
          key: "stop",
          value: function stop() {
            if (this.typing) {
              this.isSelectorInput() ? this.restoreInputSelector() : this.restoreNoneInputSelector();
              this.clearSetTimeoutStore();
              this.typing = false;
              this.selector[this.typeTarget] = '';
            }
          }
        }, {
          key: "typeTexts",
          value: function typeTexts(index) {
            var _this = this;

            if (this.loop && this.texts[index] === undefined) {
              this.typeTexts(0);
              return;
            }

            if (index < this.texts.length) {
              this.typeText(this.texts[index], 0, index, function () {
                if (_this.clear) {
                  _this.clearText(_this.texts[index], 0, index, function () {
                    _this.typeTexts(index + 1);
                  });
                } else {
                  _this.typeTexts(index + 1);
                }
              });
            }
          }
        }, {
          key: "typeText",
          value: function typeText(text, index, textArrayIndex, cb) {
            var _this2 = this;

            if (index <= text.length) {
              this.selector[this.typeTarget] = "".concat(text.substring(0, index)).concat(this.getBlinker());
              var timeoutName = "typeText".concat(textArrayIndex).concat(index);
              setTimeoutStore[timeoutName] = setTimeout(function () {
                _this2.typeText(text, index + 1, textArrayIndex, cb);
              }, this.speed);
            } else {
              var blinkingTimeout = "blinding".concat(textArrayIndex).concat(index); // let it blink

              setTimeoutStore[blinkingTimeout] = setTimeout(function () {
                _this2.selector[_this2.typeTarget] = text;
                var blinkingTimeoutAgain = "blinkOnce".concat(textArrayIndex).concat(index);
                setTimeoutStore[blinkingTimeoutAgain] = setTimeout(function () {
                  _this2.selector[_this2.typeTarget] = "".concat(text).concat(_this2.getBlinker());
                  var blinkingTimeoutOnceAgain = "blinkTwice".concat(textArrayIndex).concat(index);
                  setTimeoutStore[blinkingTimeoutOnceAgain] = setTimeout(function () {
                    // finish blinking and type the next text
                    _this2.selector[_this2.typeTarget] = text;
                    var timeoutName = "typeTextCb".concat(textArrayIndex).concat(index);
                    setTimeoutStore[timeoutName] = setTimeout(cb, _this2.blinkInterval);
                  }, _this2.blinkInterval);
                }, _this2.blinkInterval);
              }, this.blinkInterval);
            }
          }
        }, {
          key: "clearText",
          value: function clearText(text, index, textArrayIndex, cb) {
            var _this3 = this;

            if (index <= text.length) {
              this.selector[this.typeTarget] = "".concat(text.substring(0, text.length - index)).concat(this.getBlinker());
              var timeoutName = "clearText".concat(textArrayIndex).concat(index);
              setTimeoutStore[timeoutName] = setTimeout(function () {
                _this3.clearText(text, index + 1, textArrayIndex, cb);
              }, this.speed);
            } else {
              var _timeoutName = "clearTextCb".concat(textArrayIndex).concat(index);

              setTimeoutStore[_timeoutName] = setTimeout(cb, this.pause);
            }
          }
        }, {
          key: "clearSetTimeoutStore",
          value: function clearSetTimeoutStore() {
            Object.keys(setTimeoutStore).forEach(function (key) {
              return clearTimeout(setTimeoutStore[key]);
            });
          }
        }, {
          key: "isSelectorInput",
          value: function isSelectorInput() {
            return this.selector instanceof window.HTMLInputElement && this.selector.type === 'text';
          }
        }, {
          key: "shouldStart",
          value: function shouldStart() {
            return this.isSelectorInput() ? !this.typing && !this.hasDefaultValue() : !this.typing;
          }
        }, {
          key: "hasDefaultValue",
          value: function hasDefaultValue() {
            return this.selector[this.typeTarget] !== '';
          }
        }, {
          key: "getBlinker",
          value: function getBlinker() {
            return this.selector[this.typeTarget].indexOf('|') !== this.selector[this.typeTarget].length ? '|' : '';
          }
        }, {
          key: "mergeOptions",
          value: function mergeOptions(options) {
            var _this4 = this;

            this.options = {
              speed: 100,
              blinkInterval: 200,
              clear: true,
              loop: true,
              selector: '.type-writer',
              texts: []
            };
            Object.keys(options).forEach(function (key) {
              _this4.options[key] = options[key];
            });
          }
        }]);

        return TypeWriter;
      }();

      exports.default = TypeWriter;
      /***/
    }]
    /******/
    )
  );
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