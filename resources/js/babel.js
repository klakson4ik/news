"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var jsLib = /*#__PURE__*/function () {
  function jsLib(selector) {
    _classCallCheck(this, jsLib);

    var value = document.getElementsByClassName(selector);

    if (value.length > 1) {
      this.collection = value; //            this.is_one = false;
    } else {
      this.collection = selector; //            this.is_one = true;
    }
  }

  _createClass(jsLib, [{
    key: "html",
    value: function html(htmlContent) {
      var _iterator = _createForOfIteratorHelper(this.collection),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;
          el.innerHTML = htmlContent;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this;
    }
  }, {
    key: "text",
    value: function text(textContent) {
      if (textContent === undefined) {
        var el = Array.from(this.collection)[0];
        return el.textContent;
      }

      var _iterator2 = _createForOfIteratorHelper(this.collection),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _el = _step2.value;
          _el.textContent = textContent;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return this;
    }
  }, {
    key: "on",
    value: function on(name, handler) {
      //        if(this.is_one)
      //           this.collection.addEventListener(name, handler)
      //        else{
      var _iterator3 = _createForOfIteratorHelper(this.collection),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          element.addEventListener(name, handler);
        } //      }

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return this;
    }
  }, {
    key: "child",
    value: function child(selector) {
      this.collection = this.collection.getElementsByClassName(selector);
      return this;
    } //	attr(name, value) {
    //		if (value === undefined) {
    //			const el = Array.from(this.container)[0];
    //			return el.getAttribute(name);
    //		} else {
    //			for (const el of this.container) {
    //				el.setAttribute(name, value);
    //			}
    //		}
    //		return this;
    //	}
    //	click(handler) {
    //		if (handler === undefined) {
    //			for (const el of this.container) {
    //				el.click();
    //			}
    //		} else {
    //			for (const el of this.container) {
    //				el.addEventListener("click", handler);
    //			}
    //		}
    //		return this;
    //	}

  }, {
    key: "addClass",
    value: function addClass(className) {
      var _iterator4 = _createForOfIteratorHelper(this.collection),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var el = _step4.value;
          el.classList.add(className);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return this;
    } //	each(callback) {
    //		const container = Array.from(this.container);
    //
    //		for (let i = 0; i < container.length; i++) {
    //			const result = callback.call(container[i], i, container[i]);
    //
    //			if (result === false) {
    //				break;
    //			}
    //		}
    //		return this;
    //	}

  }, {
    key: "css",
    value: function css(propertyName, value) {
      //		if (value === undefined) {
      //			const el = Array.from(this.container)[0];
      //			return el.style[propertyName];
      //		} else {
      //        if(this.is_one){
      //			this.collection.style[propertyName] = value;
      //       }else{
      var _iterator5 = _createForOfIteratorHelper(this.collection),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var element = _step5.value;
          element.style[propertyName] = value;
        } //        }
        //

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return this;
    } //	is(cssSelector) {
    //		const elems = Array.from(document.querySelectorAll(cssSelector));
    //		const container = Array.from(this.container);
    //
    //		for (const el of container) {
    //			if (!elems.includes(el)) {
    //				return false;
    //			}
    //		}
    //
    //		return true;
    //	}
    //}

  }]);

  return jsLib;
}();

var $ = function $(selector) {
  return new jsLib(selector);
};

$("category-first-level-head").on("mouseover", function (e) {
  var childHead = $(e.currentTarget).child("category-second-level-head");

  if (childHead !== undefined) {
    childHead.css("display", "block");
    childHead.on("mouseover", function (l) {
      console.log(l);
    }); //     console.log($(e.currentTarget).child("category-second-level-element"))
  }
});