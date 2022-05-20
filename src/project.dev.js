window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AnimationMove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5d2fcyTHJKWqdUZpKC69DR", "AnimationMove");
    "use strict";
    var Emitter = require("mEmitter");
    var emitName = require("emitName");
    var Color = require("color");
    var _require = require("./emitName"), aniMoveLeft = _require.aniMoveLeft;
    var positionX = [ 80, 240, 400, 560 ];
    var positionY = [ 560, 400, 240, 80 ];
    cc.Class({
      extends: cc.Component,
      properties: {
        _width: 4,
        getCell: cc.Prefab,
        getParentNode: cc.Component
      },
      onLoad: function onLoad() {
        this.evtAniMoveUp = this.aniMoveUp.bind(this);
        this.evtAniMoveDown = this.aniMoveDown.bind(this);
        this.evtAniMoveLeft = this.aniMoveLeft.bind(this);
        this.evtAniMoveRight = this.aniMoveRight.bind(this);
        Emitter.instance.registerEvent(emitName.aniMoveUp, this.evtAniMoveUp);
        Emitter.instance.registerEvent(emitName.aniMoveDown, this.evtAniMoveDown);
        Emitter.instance.registerEvent(emitName.aniMoveLeft, this.evtAniMoveLeft);
        Emitter.instance.registerEvent(emitName.aniMoveRight, this.evtAniMoveRight);
      },
      start: function start() {},
      aniMoveUp: function aniMoveUp(arrayBlock, listBlock) {
        var _this = this;
        var timeAction = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .2;
        for (var index = 0; index < 4; index++) {
          0 != arrayBlock[index + 3 * this._width] && 0 == arrayBlock[index] && function() {
            var cell = cc.instantiate(_this.getCell);
            cell.parent = _this.getParentNode.node;
            cell.x = listBlock[index + 3 * _this._width].x;
            cell.y = listBlock[index + 3 * _this._width].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 3 * _this._width];
            cell.color = cc.color(Color[arrayBlock[index + 3 * _this._width]]);
            if (0 == arrayBlock[index + 1 * _this._width] && 0 == arrayBlock[index + 2 * _this._width]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[0]));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index + 1 * _this._width]) {
              var _callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[1]));
              cell.runAction(cc.sequence(_moveTo, _callFunc));
              cc.tween(listBlock[index + _this._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index]) {
              var _callFunc2 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo2 = cc.moveTo(timeAction, cc.v2(cell.x, positionY[2]));
              cell.runAction(cc.sequence(_moveTo2, _callFunc2));
              cc.tween(listBlock[index + 2 * _this._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
          0 != arrayBlock[index + 2 * this._width] && 0 == arrayBlock[index] && function() {
            var cell = cc.instantiate(_this.getCell);
            cell.parent = _this.getParentNode.node;
            cell.x = listBlock[index + 2 * _this._width].x;
            cell.y = listBlock[index + 2 * _this._width].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 2 * _this._width];
            cell.color = cc.color(Color[arrayBlock[index + 2 * _this._width]]);
            if (0 == arrayBlock[index + _this._width]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[0]));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index]) {
              var _callFunc3 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo3 = cc.moveTo(timeAction, cc.v2(cell.x, positionY[1]));
              cell.runAction(cc.sequence(_moveTo3, _callFunc3));
              cc.tween(listBlock[index + _this._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
          0 != arrayBlock[index + 1 * this._width] && 0 == arrayBlock[index] && function() {
            var cell = cc.instantiate(_this.getCell);
            cell.parent = _this.getParentNode.node;
            cell.x = listBlock[index + _this._width].x;
            cell.y = listBlock[index + _this._width].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + _this._width];
            cell.color = cc.color(Color[arrayBlock[index + _this._width]]);
            if (0 == arrayBlock[index]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[0]));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
        }
      },
      aniMoveDown: function aniMoveDown(arrayBlock, listBlock) {
        var _this2 = this;
        var timeAction = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .2;
        for (var index = 0; index < 4; index++) {
          0 == arrayBlock[index + 3 * this._width] && 0 != arrayBlock[index] && function() {
            var cell = cc.instantiate(_this2.getCell);
            cell.parent = _this2.getParentNode.node;
            cell.x = listBlock[index].x;
            cell.y = listBlock[index].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index];
            cell.color = cc.color(Color[arrayBlock[index]]);
            if (0 == arrayBlock[index + _this2._width] && 0 == arrayBlock[index + 2 * _this2._width]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[3]));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index + 3 * _this2._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index + 2 * _this2._width]) {
              var _callFunc4 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo4 = cc.moveTo(timeAction, cc.v2(cell.x, positionY[2]));
              cell.runAction(cc.sequence(_moveTo4, _callFunc4));
              cc.tween(listBlock[index + 2 * _this2._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index + 3 * _this2._width]) {
              var _callFunc5 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo5 = cc.moveTo(timeAction, cc.v2(cell.x, positionY[1]));
              cell.runAction(cc.sequence(_moveTo5, _callFunc5));
              cc.tween(listBlock[index + 2 * _this2._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
          0 == arrayBlock[index + 3 * this._width] && 0 != arrayBlock[index + this._width] && function() {
            var cell = cc.instantiate(_this2.getCell);
            cell.parent = _this2.getParentNode.node;
            cell.x = listBlock[index + _this2._width].x;
            cell.y = listBlock[index + _this2._width].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + _this2._width];
            cell.color = cc.color(Color[arrayBlock[index + _this2._width]]);
            if (0 == arrayBlock[index + 2 * _this2._width]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[3]));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index + 3 * _this2._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index + 3 * _this2._width]) {
              var _callFunc6 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo6 = cc.moveTo(timeAction, cc.v2(cell.x, positionY[2]));
              cell.runAction(cc.sequence(_moveTo6, _callFunc6));
              cc.tween(listBlock[index + 2 * _this2._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
          0 == arrayBlock[index + 3 * this._width] && 0 != arrayBlock[index + 2 * this._width] && function() {
            var cell = cc.instantiate(_this2.getCell);
            cell.parent = _this2.getParentNode.node;
            cell.x = listBlock[index + _this2._width].x;
            cell.y = listBlock[index + _this2._width].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 2 * _this2._width];
            cell.color = cc.color(Color[arrayBlock[index + 2 * _this2._width]]);
            if (0 == arrayBlock[index + 3 * _this2._width]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(cell.x, positionY[3]));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index + 3 * _this2._width]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
        }
      },
      aniMoveLeft: function aniMoveLeft(arrayBlock, listBlock) {
        var _this3 = this;
        var timeAction = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .2;
        for (var index = 0; index < 16; index++) if (index % 4 === 0) {
          0 != arrayBlock[index + 3] && 0 == arrayBlock[index] && function() {
            var cell = cc.instantiate(_this3.getCell);
            cell.parent = _this3.getParentNode.node;
            cell.x = listBlock[index + 3].x;
            cell.y = listBlock[index + 3].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 3];
            cell.color = cc.color(Color[arrayBlock[index + 3]]);
            if (0 == arrayBlock[index + 1] && 0 == arrayBlock[index + 2]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index + 1]) {
              var _callFunc7 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo7 = cc.moveTo(timeAction, cc.v2(positionX[1], cell.y));
              cell.runAction(cc.sequence(_moveTo7, _callFunc7));
              cc.tween(listBlock[index + 1]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index]) {
              var _callFunc8 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo8 = cc.moveTo(timeAction, cc.v2(positionX[2], cell.y));
              cell.runAction(cc.sequence(_moveTo8, _callFunc8));
              cc.tween(listBlock[index + 2]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
          0 != arrayBlock[index + 2] && 0 == arrayBlock[index] && function() {
            var cell = cc.instantiate(_this3.getCell);
            cell.parent = _this3.getParentNode.node;
            cell.x = listBlock[index + 2].x;
            cell.y = listBlock[index + 2].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 2];
            cell.color = cc.color(Color[arrayBlock[index + 2]]);
            if (0 == arrayBlock[index + 1]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index]) {
              var _callFunc9 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo9 = cc.moveTo(timeAction, cc.v2(positionX[1], cell.y));
              cell.runAction(cc.sequence(_moveTo9, _callFunc9));
              cc.tween(listBlock[index + 1]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
          0 != arrayBlock[index + 1] && 0 == arrayBlock[index] && function() {
            var cell = cc.instantiate(_this3.getCell);
            cell.parent = _this3.getParentNode.node;
            cell.x = listBlock[index + 1].x;
            cell.y = listBlock[index + 1].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 1];
            cell.color = cc.color(Color[arrayBlock[index + 1]]);
            if (0 == arrayBlock[index]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(positionX[0], cell.y));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
        }
      },
      aniMoveRight: function aniMoveRight(arrayBlock, listBlock) {
        var _this4 = this;
        var timeAction = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .2;
        for (var index = 0; index < 16; index++) if (index % 4 === 0) {
          0 == arrayBlock[index + 3] && 0 != arrayBlock[index] && function() {
            var cell = cc.instantiate(_this4.getCell);
            cell.parent = _this4.getParentNode.node;
            cell.x = listBlock[index].x;
            cell.y = listBlock[index].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index];
            cell.color = cc.color(Color[arrayBlock[index]]);
            if (0 == arrayBlock[index + 1] && 0 == arrayBlock[index + 2]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(positionX[3], cell.y));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index + 2] && 0 != arrayBlock[index + 1]) {
              var _callFunc10 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo10 = cc.moveTo(timeAction, cc.v2(positionX[2], cell.y));
              cell.runAction(cc.sequence(_moveTo10, _callFunc10));
              cc.tween(listBlock[index + 2]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index + 3]) {
              var _callFunc11 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo11 = cc.moveTo(timeAction, cc.v2(positionX[1], cell.y));
              cell.runAction(cc.sequence(_moveTo11, _callFunc11));
              cc.tween(listBlock[index + 1]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
          0 == arrayBlock[index + 3] && 0 != arrayBlock[index + 1] && function() {
            var cell = cc.instantiate(_this4.getCell);
            cell.parent = _this4.getParentNode.node;
            cell.x = listBlock[index + 1].x;
            cell.y = listBlock[index + 1].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 1];
            cell.color = cc.color(Color[arrayBlock[index + 1]]);
            if (0 == arrayBlock[index + 2]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(positionX[3], cell.y));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else if (0 == arrayBlock[index + 3] && 0 != arrayBlock[index + 2]) {
              var _callFunc12 = cc.callFunc(function() {
                cell.destroy();
              });
              var _moveTo12 = cc.moveTo(timeAction, cc.v2(positionX[2], cell.y));
              cell.runAction(cc.sequence(_moveTo12, _callFunc12));
              cc.tween(listBlock[index + 2]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
          0 == arrayBlock[index + 3] && 0 != arrayBlock[index + 2] && function() {
            var cell = cc.instantiate(_this4.getCell);
            cell.parent = _this4.getParentNode.node;
            cell.x = listBlock[index + 2].x;
            cell.y = listBlock[index + 2].y;
            cell.getChildByName("label").getComponent("cc.Label").string = arrayBlock[index + 2];
            cell.color = cc.color(Color[arrayBlock[index + 2]]);
            if (0 == arrayBlock[index + 3]) {
              var callFunc = cc.callFunc(function() {
                cell.destroy();
              });
              var moveTo = cc.moveTo(timeAction, cc.v2(positionX[3], cell.y));
              cell.runAction(cc.sequence(moveTo, callFunc));
              cc.tween(listBlock[index]).to(0, {
                opacity: 0
              }).delay(.2).to(0, {
                opacity: 255
              }).start();
            } else cell.destroy();
          }();
        }
      }
    });
    cc._RF.pop();
  }, {
    "./emitName": "emitName",
    color: "color",
    emitName: "emitName",
    mEmitter: "mEmitter"
  } ],
  1: [ function(require, module, exports) {
    function EventEmitter() {
      this._events = this._events || {};
      this._maxListeners = this._maxListeners || void 0;
    }
    module.exports = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._maxListeners = void 0;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
      if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
      this._maxListeners = n;
      return this;
    };
    EventEmitter.prototype.emit = function(type) {
      var er, handler, len, args, i, listeners;
      this._events || (this._events = {});
      if ("error" === type && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) throw er;
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
        err.context = er;
        throw err;
      }
      handler = this._events[type];
      if (isUndefined(handler)) return false;
      if (isFunction(handler)) switch (arguments.length) {
       case 1:
        handler.call(this);
        break;

       case 2:
        handler.call(this, arguments[1]);
        break;

       case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;

       default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
      } else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for (i = 0; i < len; i++) listeners[i].apply(this, args);
      }
      return true;
    };
    EventEmitter.prototype.addListener = function(type, listener) {
      var m;
      if (!isFunction(listener)) throw TypeError("listener must be a function");
      this._events || (this._events = {});
      this._events.newListener && this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener);
      this._events[type] ? isObject(this._events[type]) ? this._events[type].push(listener) : this._events[type] = [ this._events[type], listener ] : this._events[type] = listener;
      if (isObject(this._events[type]) && !this._events[type].warned) {
        m = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners;
        if (m && m > 0 && this._events[type].length > m) {
          this._events[type].warned = true;
          console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
          "function" === typeof console.trace && console.trace();
        }
      }
      return this;
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
      if (!isFunction(listener)) throw TypeError("listener must be a function");
      var fired = false;
      function g() {
        this.removeListener(type, g);
        if (!fired) {
          fired = true;
          listener.apply(this, arguments);
        }
      }
      g.listener = listener;
      this.on(type, g);
      return this;
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
      var list, position, length, i;
      if (!isFunction(listener)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[type]) return this;
      list = this._events[type];
      length = list.length;
      position = -1;
      if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        this._events.removeListener && this.emit("removeListener", type, listener);
      } else if (isObject(list)) {
        for (i = length; i-- > 0; ) if (list[i] === listener || list[i].listener && list[i].listener === listener) {
          position = i;
          break;
        }
        if (position < 0) return this;
        if (1 === list.length) {
          list.length = 0;
          delete this._events[type];
        } else list.splice(position, 1);
        this._events.removeListener && this.emit("removeListener", type, listener);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
      var key, listeners;
      if (!this._events) return this;
      if (!this._events.removeListener) {
        0 === arguments.length ? this._events = {} : this._events[type] && delete this._events[type];
        return this;
      }
      if (0 === arguments.length) {
        for (key in this._events) {
          if ("removeListener" === key) continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = {};
        return this;
      }
      listeners = this._events[type];
      if (isFunction(listeners)) this.removeListener(type, listeners); else if (listeners) while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
      delete this._events[type];
      return this;
    };
    EventEmitter.prototype.listeners = function(type) {
      var ret;
      ret = this._events && this._events[type] ? isFunction(this._events[type]) ? [ this._events[type] ] : this._events[type].slice() : [];
      return ret;
    };
    EventEmitter.prototype.listenerCount = function(type) {
      if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener)) return 1;
        if (evlistener) return evlistener.length;
      }
      return 0;
    };
    EventEmitter.listenerCount = function(emitter, type) {
      return emitter.listenerCount(type);
    };
    function isFunction(arg) {
      return "function" === typeof arg;
    }
    function isNumber(arg) {
      return "number" === typeof arg;
    }
    function isObject(arg) {
      return "object" === typeof arg && null !== arg;
    }
    function isUndefined(arg) {
      return void 0 === arg;
    }
  }, {} ],
  CreateBlock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20125zXAnJD0YMycQ5w74l8", "CreateBlock");
    "use strict";
    var Emitter = require("mEmitter");
    var emitName = require("emitName");
    var DIRECTION = cc.Enum({
      RIGHT: -1,
      LEFT: -1,
      UP: -1,
      DOWN: -1
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        blockPrefab: cc.Prefab,
        _listBlock: [],
        _arrayBlock: [],
        _canMove: true
      },
      onLoad: function onLoad() {
        var _this = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp.bind(this));
        this.node.on("touchstart", function(event) {
          _this.startPoint = event.getLocation();
        });
        this.node.on("touchend", function(event) {
          _this.endPoint = event.getLocation();
          _this.reflectTouch();
        });
        this.node.on("touchcancel", function(event) {
          _this.endPoint = event.getLocation();
          _this.reflectTouch();
        });
        this.evtGenerate = this.generate.bind(this);
        Emitter.instance.registerEvent(emitName.generate, this.evtGenerate);
      },
      start: function start() {
        for (var index = 0; index <= 15; index++) {
          var block = cc.instantiate(this.blockPrefab);
          block.getComponent("block").labelPrefab.string = "";
          block.parent = this.node;
          this._arrayBlock.push(block.getComponent("block").labelPrefab.string);
          this._listBlock.push(block);
        }
        cc.log(this._listBlock);
        this.generate();
        this.generate();
      },
      generate: function generate() {
        var generateNumber = [ 2, 4 ];
        var random = generateNumber[Math.floor(Math.random() * generateNumber.length)];
        var randomNumber = Math.floor(Math.random() * this._listBlock.length);
        if (0 == this._arrayBlock[randomNumber]) {
          this._arrayBlock[randomNumber] = random;
          this._listBlock[randomNumber].getComponent("block").labelPrefab.string = random;
          cc.tween(this._listBlock[randomNumber]).to(0, {
            scale: 0,
            opacity: 0
          }).to(.2, {
            scale: 1,
            opacity: 255
          }).start();
        } else this.generate();
        Emitter.instance.emit(emitName.blockColor, this._listBlock, this._arrayBlock);
      },
      reflectTouch: function reflectTouch() {
        var startVec = this.startPoint;
        var endVec = this.endPoint;
        var pointsVec = endVec.sub(startVec);
        var VecLength = pointsVec.mag();
        VecLength > 0 && (Math.abs(pointsVec.x) > Math.abs(pointsVec.y) ? pointsVec.x > 0 ? this.moveBlock(DIRECTION.RIGHT) : this.moveBlock(DIRECTION.LEFT) : pointsVec.y > 0 ? this.moveBlock(DIRECTION.UP) : this.moveBlock(DIRECTION.DOWN));
      },
      moveBlock: function moveBlock(direction) {
        switch (direction) {
         case DIRECTION.RIGHT:
          this.moveRight();
          break;

         case DIRECTION.LEFT:
          this.moveLeft();
          break;

         case DIRECTION.UP:
          this.moveUp();
          break;

         case DIRECTION.DOWN:
          this.moveDown();
        }
      },
      onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.up:
          this.moveUp();
          break;

         case cc.macro.KEY.down:
          this.moveDown();
          break;

         case cc.macro.KEY.left:
          this.moveLeft();
          break;

         case cc.macro.KEY.right:
          this.moveRight();
          break;

         case cc.macro.KEY.w:
          this.moveUp();
          break;

         case cc.macro.KEY.s:
          this.moveDown();
          break;

         case cc.macro.KEY.a:
          this.moveLeft();
          break;

         case cc.macro.KEY.d:
          this.moveRight();
        }
      },
      moveUp: function moveUp() {
        Emitter.instance.emit(emitName.moveUp, this._listBlock, this._arrayBlock, this.generate);
      },
      moveDown: function moveDown() {
        Emitter.instance.emit(emitName.moveDown, this._listBlock, this._arrayBlock, this.generate);
      },
      moveLeft: function moveLeft() {
        Emitter.instance.emit(emitName.moveLeft, this._listBlock, this._arrayBlock, this.generate);
      },
      moveRight: function moveRight() {
        Emitter.instance.emit(emitName.moveRight, this._listBlock, this._arrayBlock, this.generate);
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    emitName: "emitName",
    mEmitter: "mEmitter"
  } ],
  HowToPlay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5da61IRf7ZJdp/plyhcjY3Q", "HowToPlay");
    "use strict";
    var _require = require("lodash"), times = _require.times;
    cc.Class({
      extends: cc.Component,
      properties: {
        menu: cc.Node
      },
      loadHowToPlay: function loadHowToPlay() {
        this.menu.active = true;
        this.menu.opacity = 0;
        this.menu.scale = .2;
        cc.tween(this.menu).to(.5, {
          scale: 1,
          opacity: 255
        }, {
          easing: "quartInOut"
        }).start();
      },
      unloadHowToPlay: function unloadHowToPlay() {
        var _this = this;
        cc.tween(this.menu).to(.5, {
          scale: .2,
          opacity: 0
        }, {
          easing: "quartInOut"
        }).call(function() {
          _this.menu.active = false;
        }).start();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    lodash: void 0
  } ],
  MainController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0d9fquJzRBVaR3B39X3NAN", "MainController");
    "use strict";
    var Emitter = require("mEmitter");
    var emitName = require("emitName");
    var Colors = require("color");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        this.evtSetColor = this.setColor.bind(this);
        Emitter.instance.registerEvent(emitName.blockColor, this.evtSetColor);
      },
      start: function start() {},
      setColor: function setColor(listBlock, arrayBlock) {
        var color = Colors;
        for (var index = 0; index < 16; index++) {
          if (0 == arrayBlock[index]) {
            listBlock[index].getComponent("block").labelPrefab.string = "";
            listBlock[index].color = color[0];
          }
          2 == arrayBlock[index] && (listBlock[index].color = color[2]);
          4 == arrayBlock[index] && (listBlock[index].color = color[4]);
          8 == arrayBlock[index] && (listBlock[index].color = color[8]);
          16 == arrayBlock[index] && (listBlock[index].color = color[16]);
          32 == arrayBlock[index] && (listBlock[index].color = color[32]);
          64 == arrayBlock[index] && (listBlock[index].color = color[64]);
          128 == arrayBlock[index] && (listBlock[index].color = color[128]);
          256 == arrayBlock[index] && (listBlock[index].color = color[256]);
          512 == arrayBlock[index] && (listBlock[index].color = color[512]);
          1024 == arrayBlock[index] && (listBlock[index].color = color[1024]);
          2048 == arrayBlock[index] && (listBlock[index].color = color[2048]);
        }
      }
    });
    cc._RF.pop();
  }, {
    color: "color",
    emitName: "emitName",
    mEmitter: "mEmitter"
  } ],
  MoveBlock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d056vyiP9FN5rUvXBxq2Qa", "MoveBlock");
    "use strict";
    var Emitter = require("mEmitter");
    var emitName = require("emitName");
    cc.Class({
      extends: cc.Component,
      properties: {
        _width: 4,
        _canMove: true,
        _isWin: false,
        _canMoveVertical: true,
        _canMoveHorizontal: true,
        getCell: cc.Prefab,
        getParentNode: cc.Component,
        getScore: cc.Label
      },
      onLoad: function onLoad() {
        this.evtMoveUp = this.moveUpCombined.bind(this);
        this.evtMoveDown = this.moveDownCombined.bind(this);
        this.evtMoveLeft = this.moveLeftCombined.bind(this);
        this.evtMoveRight = this.moveRightCombined.bind(this);
        Emitter.instance.registerEvent(emitName.moveUp, this.evtMoveUp);
        Emitter.instance.registerEvent(emitName.moveDown, this.evtMoveDown);
        Emitter.instance.registerEvent(emitName.moveLeft, this.evtMoveLeft);
        Emitter.instance.registerEvent(emitName.moveRight, this.evtMoveRight);
      },
      start: function start() {
        var _this = this;
        this.canMoveRight = true;
        this.canMoveLeft = true;
        this.canMoveUp = true;
        this.canMoveDown = true;
        this.schedule(function() {
          _this._canMove = true;
        }, .3);
      },
      moveUp: function moveUp(listBlock, arrayBlock) {
        for (var index = 0; index < 4; index++) {
          var totalOne = arrayBlock[index];
          var totalTwo = arrayBlock[index + this._width];
          var totalThree = arrayBlock[index + 2 * this._width];
          var totalFour = arrayBlock[index + 3 * this._width];
          var column = [ parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour) ];
          var filterColumn = column.filter(function(num) {
            return num;
          });
          var missing = this._width - filterColumn.length;
          var zeros = Array(missing).fill(0);
          var newColumn = filterColumn.concat(zeros);
          listBlock[index].getComponent("block").labelPrefab.string = newColumn[0];
          listBlock[index + this._width].getComponent("block").labelPrefab.string = newColumn[1];
          listBlock[index + 2 * this._width].getComponent("block").labelPrefab.string = newColumn[2];
          listBlock[index + 3 * this._width].getComponent("block").labelPrefab.string = newColumn[3];
          Emitter.instance.emit(emitName.aniMoveUp, arrayBlock, listBlock);
          arrayBlock[index] = newColumn[0];
          arrayBlock[index + this._width] = newColumn[1];
          arrayBlock[index + 2 * this._width] = newColumn[2];
          arrayBlock[index + 3 * this._width] = newColumn[3];
        }
      },
      moveDown: function moveDown(listBlock, arrayBlock) {
        for (var index = 0; index < 4; index++) {
          var totalOne = arrayBlock[index];
          var totalTwo = arrayBlock[index + this._width];
          var totalThree = arrayBlock[index + 2 * this._width];
          var totalFour = arrayBlock[index + 3 * this._width];
          var column = [ parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour) ];
          var filterColumn = column.filter(function(num) {
            return num;
          });
          var missing = this._width - filterColumn.length;
          var zeros = Array(missing).fill(0);
          var newColumn = zeros.concat(filterColumn);
          listBlock[index].getComponent("block").labelPrefab.string = newColumn[0];
          listBlock[index + this._width].getComponent("block").labelPrefab.string = newColumn[1];
          listBlock[index + 2 * this._width].getComponent("block").labelPrefab.string = newColumn[2];
          listBlock[index + 3 * this._width].getComponent("block").labelPrefab.string = newColumn[3];
          Emitter.instance.emit(emitName.aniMoveDown, arrayBlock, listBlock);
          arrayBlock[index] = newColumn[0];
          arrayBlock[index + this._width] = newColumn[1];
          arrayBlock[index + 2 * this._width] = newColumn[2];
          arrayBlock[index + 3 * this._width] = newColumn[3];
        }
      },
      moveLeft: function moveLeft(listBlock, arrayBlock) {
        for (var index = 0; index < 16; index++) if (index % 4 === 0) {
          var totalOne = arrayBlock[index];
          var totalTwo = arrayBlock[index + 1];
          var totalThree = arrayBlock[index + 2];
          var totalFour = arrayBlock[index + 3];
          var row = [ parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour) ];
          var filterRow = row.filter(function(num) {
            return num;
          });
          var missing = this._width - filterRow.length;
          var zeros = Array(missing).fill(0);
          var newRow = filterRow.concat(zeros);
          listBlock[index].getComponent("block").labelPrefab.string = newRow[0];
          listBlock[index + 1].getComponent("block").labelPrefab.string = newRow[1];
          listBlock[index + 2].getComponent("block").labelPrefab.string = newRow[2];
          listBlock[index + 3].getComponent("block").labelPrefab.string = newRow[3];
          Emitter.instance.emit(emitName.aniMoveLeft, arrayBlock, listBlock);
          arrayBlock[index] = newRow[0];
          arrayBlock[index + 1] = newRow[1];
          arrayBlock[index + 2] = newRow[2];
          arrayBlock[index + 3] = newRow[3];
        }
      },
      moveRight: function moveRight(listBlock, arrayBlock) {
        for (var index = 0; index < 16; index++) if (index % 4 === 0) {
          var totalOne = arrayBlock[index];
          var totalTwo = arrayBlock[index + 1];
          var totalThree = arrayBlock[index + 2];
          var totalFour = arrayBlock[index + 3];
          var row = [ parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour) ];
          var filterRow = row.filter(function(num) {
            return num;
          });
          var missing = 4 - filterRow.length;
          var zeros = Array(missing).fill(0);
          var newRow = zeros.concat(filterRow);
          listBlock[index].getComponent("block").labelPrefab.string = newRow[0];
          listBlock[index + 1].getComponent("block").labelPrefab.string = newRow[1];
          listBlock[index + 2].getComponent("block").labelPrefab.string = newRow[2];
          listBlock[index + 3].getComponent("block").labelPrefab.string = newRow[3];
          Emitter.instance.emit(emitName.aniMoveRight, arrayBlock, listBlock);
          arrayBlock[index] = newRow[0];
          arrayBlock[index + 1] = newRow[1];
          arrayBlock[index + 2] = newRow[2];
          arrayBlock[index + 3] = newRow[3];
        }
      },
      combineRowLeft: function combineRowLeft(listBlock, arrayBlock) {
        for (var index = 0; index <= 15; index++) if (arrayBlock[index] === arrayBlock[index + 1] && (index + 1) % 4 != 0) {
          var combinedTotal = arrayBlock[index] + arrayBlock[index + 1];
          listBlock[index].getComponent("block").labelPrefab.string = combinedTotal;
          listBlock[index + 1].getComponent("block").labelPrefab.string = 0;
          arrayBlock[index] = combinedTotal;
          arrayBlock[index + 1] = 0;
          var score = parseInt(this.getScore.string);
          this.getScore.string = score + combinedTotal;
          this.isWinning(combinedTotal);
        }
      },
      combineRowRight: function combineRowRight(listBlock, arrayBlock) {
        for (var index = 15; index >= 0; index--) if (arrayBlock[index] === arrayBlock[index + 1]) if ((index + 1) % 4 == 0) ; else {
          var combinedTotal = arrayBlock[index] + arrayBlock[index + 1];
          listBlock[index + 1].getComponent("block").labelPrefab.string = combinedTotal;
          listBlock[index].getComponent("block").labelPrefab.string = 0;
          arrayBlock[index + 1] = combinedTotal;
          arrayBlock[index] = 0;
          var score = parseInt(this.getScore.string);
          this.getScore.string = score + combinedTotal;
          this.isWinning(combinedTotal);
        }
      },
      combineColumnUp: function combineColumnUp(listBlock, arrayBlock) {
        for (var index = 0; index <= 15; index++) if (arrayBlock[index] === arrayBlock[index + this._width]) {
          var combinedTotal = arrayBlock[index] + arrayBlock[index + this._width];
          listBlock[index].getComponent("block").labelPrefab.string = combinedTotal;
          listBlock[index + this._width].getComponent("block").labelPrefab.string = 0;
          arrayBlock[index] = combinedTotal;
          arrayBlock[index + this._width] = 0;
          var score = parseInt(this.getScore.string);
          this.getScore.string = score + combinedTotal;
          this.isWinning(combinedTotal);
        }
      },
      combineColumnDown: function combineColumnDown(listBlock, arrayBlock) {
        for (var index = 15; index >= 0; index--) if (arrayBlock[index] == arrayBlock[index + this._width]) {
          var combinedTotal = arrayBlock[index] + arrayBlock[index + this._width];
          listBlock[index].getComponent("block").labelPrefab.string = combinedTotal;
          listBlock[index + this._width].getComponent("block").labelPrefab.string = 0;
          arrayBlock[index] = combinedTotal;
          arrayBlock[index + this._width] = 0;
          var score = parseInt(this.getScore.string);
          this.getScore.string = score + combinedTotal;
          this.isWinning(combinedTotal);
        }
      },
      moveRightCombined: function moveRightCombined(listBlock, arrayBlock) {
        if (true == this._canMove) {
          this._canMove = false;
          this.moveRight(listBlock, arrayBlock);
          this.combineRowRight(listBlock, arrayBlock);
          this.moveRight(listBlock, arrayBlock);
          arrayBlock.includes(0) ? Emitter.instance.emit(emitName.generate) : this.isFull(arrayBlock);
        }
      },
      moveLeftCombined: function moveLeftCombined(listBlock, arrayBlock) {
        if (true == this._canMove) {
          this._canMove = false;
          this.moveLeft(listBlock, arrayBlock);
          this.combineRowLeft(listBlock, arrayBlock);
          this.moveLeft(listBlock, arrayBlock);
          arrayBlock.includes(0) ? Emitter.instance.emit(emitName.generate) : this.isFull(arrayBlock);
        }
      },
      moveUpCombined: function moveUpCombined(listBlock, arrayBlock) {
        if (true == this._canMove) {
          this._canMove = false;
          this.moveUp(listBlock, arrayBlock);
          this.combineColumnUp(listBlock, arrayBlock);
          this.moveUp(listBlock, arrayBlock);
          arrayBlock.includes(0) ? Emitter.instance.emit(emitName.generate) : this.isFull(arrayBlock);
        }
      },
      moveDownCombined: function moveDownCombined(listBlock, arrayBlock) {
        if (true == this._canMove) {
          this._canMove = false;
          this.moveDown(listBlock, arrayBlock);
          this.combineColumnDown(listBlock, arrayBlock);
          this.moveDown(listBlock, arrayBlock);
          arrayBlock.includes(0) ? Emitter.instance.emit(emitName.generate) : this.isFull(arrayBlock);
        }
      },
      isFull: function isFull(arrayBlock) {
        for (var index = 0; index < 16; index++) index % 4 == 0 && arrayBlock[index] != arrayBlock[index + 1] && arrayBlock[index + 1] != arrayBlock[index + 2] && arrayBlock[index + 2] != arrayBlock[index + 3] && (this._canMoveVertical = false);
        for (var _index = 0; _index < 4; _index++) {
          var width = this._width;
          var isIndex = arrayBlock[_index] != arrayBlock[_index + width];
          var isIndex1 = arrayBlock[_index + 1] != arrayBlock[_index + 2 * width];
          var isIndex2 = arrayBlock[_index + 2 * width] != arrayBlock[_index + 3 * width];
          isIndex && isIndex1 && isIndex2 && (this._canMoveHorizontal = true);
        }
        if (this._canMoveHorizontal || this._canMoveVertical) {
          this._canMoveHorizontal = true;
          this._canMoveVertical = true;
        } else cc.log("lose");
      },
      isWinning: function isWinning(total) {
        2048 == total && cc.log("you win");
      }
    });
    cc._RF.pop();
  }, {
    emitName: "emitName",
    mEmitter: "mEmitter"
  } ],
  StartGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eee7feFWTtEsqZiPatjGRZb", "StartGame");
    "use strict";
    var Emitter = require("mEmitter");
    var user = require("User");
    var users = [];
    cc.Class({
      extends: cc.Component,
      properties: {
        startLayout: cc.Node,
        userBoard: cc.Node,
        logo: cc.Sprite,
        loading: cc.Node,
        boardGame: cc.Node,
        username: cc.Label,
        nameEditBox: cc.EditBox,
        alertMessage: cc.Node,
        _flag: false
      },
      onLoad: function onLoad() {
        cc.sys.localStorage.getItem("debug") && cc.sys.localStorage.removeItem("debug");
      },
      openUserBoard: function openUserBoard() {
        this.userBoard.active = true;
        this.node.active = false;
        this.logo.node.runAction(cc.moveBy(1, 0, 100));
      },
      createUser: function createUser() {
        var newUser = new user();
        newUser.name = this.username.string;
        newUser.score = 0;
        users.push(newUser);
        Emitter.instance.emit("users", users);
      },
      validateEditBox: function validateEditBox() {
        if (this.nameEditBox.string) {
          this._flag = false;
          return true;
        }
        this.alertMessageBox("Please enter your name!");
        return false;
      },
      alertMessageBox: function alertMessageBox(value) {
        var _this = this;
        this.alertMessage.getChildByName("alertRichText").getComponent(cc.RichText).string = "<color=B4ECE3>Alert  </c><color=FFF8D5>" + value + "</color>";
        this.alertMessage.runAction(cc.sequence(cc.moveBy(1, 0, -160), cc.delayTime(1.5), cc.moveBy(1, 0, 160), cc.callFunc(function() {
          _this._flag = false;
        })));
      },
      loadingGame: function loadingGame() {
        var _this2 = this;
        if (!this._flag) {
          this._flag = true;
          if (!this.validateEditBox()) return;
          if (this.validateEditBox()) {
            this.createUser();
            if (!this._flag) {
              this._flag = true;
              this.loading.active = true;
              this.loading.runAction(cc.sequence(cc.callFunc(this.onCloud, this), cc.delayTime(2), cc.callFunc(this.offCloud, this)));
              this.loading.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                _this2.loading.getChildByName("BG").active = true;
              }), cc.delayTime(2), cc.callFunc(this.loadProgressBar, this)));
            }
          }
        }
      },
      loadProgressBar: function loadProgressBar() {
        var _this3 = this;
        this.loading.getChildByName("BG").getChildByName("ProgressBar").runAction(cc.repeat(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
          _this3.loading.getChildByName("BG").getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress += .1;
        })), 10));
        this.loading.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.onCloud, this), cc.delayTime(2), cc.callFunc(function() {
          _this3.loading.getChildByName("BG").active = false;
        }), cc.callFunc(this.loadBoardGame, this), cc.callFunc(this.offCloud, this), cc.delayTime(1), cc.callFunc(function() {
          _this3.loading.active = false;
        })));
      },
      loadBoardGame: function loadBoardGame() {
        this.startLayout.active = false;
        this.boardGame.active = true;
      },
      onCloud: function onCloud() {
        this.loading.getChildByName("cloud1").runAction(cc.moveBy(1, 400, 0));
        this.loading.getChildByName("cloud3").runAction(cc.moveBy(1, -400, 0));
        this.loading.getChildByName("cloud4").runAction(cc.moveBy(1, 400, 0));
        this.loading.getChildByName("cloud12").runAction(cc.moveBy(1, 700, 0));
        this.loading.getChildByName("cloud11").runAction(cc.moveBy(1, -680, 0));
        this.loading.getChildByName("cloud13").runAction(cc.moveBy(1, -500, 0));
        this.loading.getChildByName("cloud16").runAction(cc.moveBy(1, 500, 0));
        this.loading.getChildByName("cloud14").runAction(cc.moveBy(1, 350, 0));
        this.loading.getChildByName("cloud15").runAction(cc.moveBy(1, -460, 0));
        this.loading.getChildByName("cloud2").runAction(cc.moveBy(1, 500, 0));
        this.loading.getChildByName("cloud6").runAction(cc.moveBy(1, 450, 0));
        this.loading.getChildByName("cloud7").runAction(cc.moveBy(1, 650, 0));
        this.loading.getChildByName("cloud8").runAction(cc.moveBy(1, -560, 0));
      },
      offCloud: function offCloud() {
        this.loading.getChildByName("cloud1").runAction(cc.moveBy(1, -400, 0));
        this.loading.getChildByName("cloud3").runAction(cc.moveBy(1, 400, 0));
        this.loading.getChildByName("cloud4").runAction(cc.moveBy(1, -400, 0));
        this.loading.getChildByName("cloud12").runAction(cc.moveBy(1, -700, 0));
        this.loading.getChildByName("cloud11").runAction(cc.moveBy(1, 680, 0));
        this.loading.getChildByName("cloud13").runAction(cc.moveBy(1, 500, 0));
        this.loading.getChildByName("cloud16").runAction(cc.moveBy(1, -500, 0));
        this.loading.getChildByName("cloud14").runAction(cc.moveBy(1, -350, 0));
        this.loading.getChildByName("cloud15").runAction(cc.moveBy(1, 460, 0));
        this.loading.getChildByName("cloud2").runAction(cc.moveBy(1, -500, 0));
        this.loading.getChildByName("cloud6").runAction(cc.moveBy(1, -450, 0));
        this.loading.getChildByName("cloud7").runAction(cc.moveBy(1, -650, 0));
        this.loading.getChildByName("cloud8").runAction(cc.moveBy(1, 560, 0));
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    User: "User",
    mEmitter: "mEmitter"
  } ],
  UserBoard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "540a4VudVdN9L17owAaluqg", "UserBoard");
    "use strict";
    var Emitter = require("mEmitter");
    var users = [];
    cc.Class({
      extends: cc.Component,
      properties: {
        score: cc.Label,
        nameOnBoardGame: cc.Label,
        username: cc.Label,
        leadBoard: cc.Node,
        boardGame: cc.Node,
        userList: cc.Prefab,
        content: cc.Node,
        _offBoard: null,
        _flag: false
      },
      onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("users", function(value) {
          cc.log(value);
          users = value;
        }, this);
        this.sortScore();
        this.addLeadBoard();
        this.nameOnBoardGame.string = this.username.string;
        this.boardGame.getComponent(cc.Sprite).node.on("mousedown", this.unloadLeadBoard, this);
      },
      textChange: function textChange(value) {
        cc.log(value);
        this.username.string = value;
      },
      sortScore: function sortScore() {},
      updateScore: function updateScore() {
        for (var i = 0; i < users.length; i++) users[i].name == this.nameOnBoardGame.string && (users[i].score = parseInt(this.score.string));
      },
      addLeadBoard: function addLeadBoard() {
        this.content.removeAllChildren();
        for (var i = 0; i < users.length; i++) {
          cc.log(users[i]);
          var item = cc.instantiate(this.userList);
          item.parent = this.content;
          item.y = -10 - 20 * i;
          item.getChildByName("username").getComponent(cc.Label).string = users[i].name;
          item.getChildByName("score").getComponent(cc.Label).string = users[i].score;
          this.content.height += 2;
        }
      },
      loadLeadBoard: function loadLeadBoard() {
        var _this = this;
        if (!this._flag) {
          this._flag = true;
          this.addLeadBoard();
          this.leadBoard.runAction(cc.sequence(cc.callFunc(function() {
            _this.boardGame.getComponent(cc.Sprite).node.off("mousedown");
          }), cc.moveBy(.3, 0, -700), cc.delayTime(1.5), cc.callFunc(function() {
            _this.boardGame.getComponent(cc.Sprite).node.on("mousedown", _this.unloadLeadBoard, _this);
          })));
        }
      },
      unloadLeadBoard: function unloadLeadBoard() {
        var _this2 = this;
        if (this._flag) {
          this._flag = false;
          this.leadBoard.runAction(cc.sequence(cc.callFunc(function() {
            _this2.boardGame.getComponent(cc.Sprite).node.off("mousedown");
          }), cc.moveBy(.3, 0, 700), cc.delayTime(1.5), cc.callFunc(function() {
            _this2.boardGame.getComponent(cc.Sprite).node.on("mousedown", _this2.unloadLeadBoard, _this2);
          })));
        }
      },
      start: function start() {},
      update: function update(dt) {
        this.updateScore();
      }
    });
    cc._RF.pop();
  }, {
    mEmitter: "mEmitter"
  } ],
  User: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7159MbXDVIDLaW+iIK6QSW", "User");
    "use strict";
    var user = cc.Class({
      name: "",
      score: 0
    });
    module.exports = user;
    cc._RF.pop();
  }, {} ],
  Variables: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d63ddlYAu9A3btQcSG6L4dn", "Variables");
    "use strict";
    var Variables = {
      audio: null,
      transAudio: "transAudio"
    };
    module.exports = Variables;
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  block: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18c8bC2wGFDc689f47Doh79", "block");
    "use strict";
    var Emitter = require("mEmitter");
    var colors = require("color");
    cc.Class({
      extends: cc.Component,
      properties: {
        labelPrefab: cc.Label
      },
      onLoad: function onLoad() {},
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {
    color: "color",
    mEmitter: "mEmitter"
  } ],
  color: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15341+/LGZDx6GZ448ggRN7", "color");
    "use strict";
    var colors = {
      0: cc.color(190, 152, 152, 255),
      2: cc.color(235, 224, 213, 255),
      4: cc.color(234, 219, 193, 255),
      8: cc.color(240, 167, 110, 255),
      16: cc.color(244, 138, 89, 255),
      32: cc.color(245, 112, 85, 255),
      64: cc.color(245, 83, 52, 255),
      128: cc.color(234, 200, 103, 255),
      256: cc.color(234, 197, 87, 255),
      512: cc.color(234, 192, 71, 255),
      1024: cc.color(146, 208, 80, 255),
      2048: cc.color(0, 176, 240, 255)
    };
    module.exports = colors;
    cc._RF.pop();
  }, {} ],
  emitName: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11eceTxcsVGdo/xFQ5dFOG3", "emitName");
    "use strict";
    var name = {
      moveUp: "moveUp",
      moveDown: "moveDown",
      moveLeft: "moveLeft",
      moveRight: "moveRight",
      generate: "generate",
      blockColor: "color",
      aniMoveUp: "animoveup",
      aniMoveDown: "animovedown",
      aniMoveLeft: "animoveleft",
      aniMoveRight: "animoveright"
    };
    module.exports = name;
    cc._RF.pop();
  }, {} ],
  gameOver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87950VqC0FLL6c1mGnCdwQe", "gameOver");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        cc.tween(this.node).to(1, {
          scale: 1,
          opacity: 255
        }, {
          easing: "backInOut"
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  mEmitter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdd22VmKh1MNr6LH2JKUZri", "mEmitter");
    "use strict";
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var EventEmitter = require("events");
    var mEmitter = function() {
      function mEmitter() {
        _classCallCheck(this, mEmitter);
        this._emiter = new EventEmitter();
        this._emiter.setMaxListeners(100);
      }
      _createClass(mEmitter, [ {
        key: "emit",
        value: function emit() {
          var _emiter;
          (_emiter = this._emiter).emit.apply(_emiter, arguments);
        }
      }, {
        key: "registerEvent",
        value: function registerEvent(event, listener) {
          this._emiter.on(event, listener);
        }
      }, {
        key: "registerOnce",
        value: function registerOnce(event, listener) {
          this._emiter.once(event, listener);
        }
      }, {
        key: "removeEvent",
        value: function removeEvent(event, listener) {
          this._emiter.removeListener(event, listener);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this._emiter.removeAllListeners();
          this._emiter = null;
          mEmitter.instance = null;
        }
      } ]);
      return mEmitter;
    }();
    mEmitter.instance = null;
    module.exports = mEmitter;
    cc._RF.pop();
  }, {
    events: 1
  } ],
  sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "369c13G+3JLargpgYDj8tfE", "sound");
    "use strict";
    var Emitter = require("mEmitter");
    var Variables = require("Variables");
    cc.Class({
      extends: cc.Component,
      properties: {
        button_sound: {
          default: null,
          type: cc.AudioClip
        },
        BG_sound: {
          default: null,
          type: cc.AudioClip
        },
        win_sound: {
          default: null,
          type: cc.AudioClip
        },
        lose_sound: {
          default: null,
          type: cc.AudioClip
        },
        move_sound: {
          default: null,
          type: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        Emitter.instance.emit(Variables.transAudio, this);
      },
      start: function start() {},
      playButton_sound: function playButton_sound() {
        this.pauseAll();
        cc.audioEngine.play(this.button_sound, false);
      },
      playBG_sound: function playBG_sound() {
        this.pauseAll();
        cc.audioEngine.play(this.BG_sound, false);
      },
      playWin_sound: function playWin_sound() {
        this.pauseAll();
        cc.audioEngine.play(this.win_sound, false);
      },
      playLose_sound: function playLose_sound() {
        this.pauseAll();
        cc.audioEngine.play(this.lose_sound, false);
      },
      playMove_sound: function playMove_sound() {
        this.pauseAll();
        cc.audioEngine.play(this.move_sound, false);
      },
      onDestroy: function onDestroy() {},
      pauseAll: function pauseAll() {
        cc.audioEngine.pauseAll();
      },
      Show_Window: function Show_Window() {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = .2;
        cc.tween(this.node).to(.5, {
          scale: 1,
          opacity: 255
        }, {
          easing: "quartInOut"
        }).start();
      },
      Hide_Window: function Hide_Window() {
        var _this = this;
        cc.tween(this.node).to(.5, {
          scale: .2,
          opacity: 0
        }, {
          easing: "quartInOut"
        }).call(function() {
          _this.node.active = false;
        }).start();
      }
    });
    cc._RF.pop();
  }, {
    Variables: "Variables",
    mEmitter: "mEmitter"
  } ],
  star1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1101981QiZKC5yKxgfSTGKA", "star1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        cc.tween(this.node).to(.5, {
          position: cc.v2(-96.455, 53.763),
          rotation: 360,
          easing: "sineOutIn"
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  star2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0928b0fImlA5JaceRgHi9ay", "star2");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        cc.tween(this.node).to(.5, {
          position: cc.v2(2, 94),
          rotation: 360,
          easing: "sineOutIn"
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ],
  star3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3048fDwtctCnJRJFusSkZlE", "star3");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        cc.tween(this.node).to(.5, {
          position: cc.v2(102.242, 55.411),
          rotation: 360,
          easing: "sineOutIn"
        }).start();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "AnimationMove", "CreateBlock", "HowToPlay", "MainController", "MoveBlock", "Variables", "sound", "StartGame", "User", "UserBoard", "star1", "star2", "star3", "block", "color", "emitName", "gameOver", "mEmitter" ]);