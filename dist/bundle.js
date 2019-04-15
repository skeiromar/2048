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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UP = 1;
var DOWN = 2;
var LEFT = 3;
var RIGHT = 4;
var OFFSETS = {
  UP: [1, 0],
  DOWN: [-1, 0],
  LEFT: [0, 1],
  RIGHT: [0, -1]
};

function merge(line1) {
  var line = line1.filter(function (i) {
    return i !== 0;
  });

  for (var i = 0; i < line1.length; i++) {
    if (line1[i] === 0) {
      line.push(line1[i]);
    }
  }

  var _loop = function _loop(_i) {
    if (line[_i] === line[_i + 1]) {
      line[_i] += line[_i + 1];
      line = line.filter(function (e, j) {
        return j !== _i + 1;
      });
      line.push(0);
    }
  };

  for (var _i = 0; _i < line.length - 1; _i++) {
    _loop(_i);
  }

  return line;
}

var TwentyFourtyEight =
/*#__PURE__*/
function () {
  function TwentyFourtyEight(gridHeight, gridWidth) {
    var _this = this;

    _classCallCheck(this, TwentyFourtyEight);

    this._grid_height = gridHeight;
    this._grid_width = gridWidth;
    this._is_moved = false;
    this._grid = [];
    this._width_height_max = Math.max(this._grid_width, this._grid_height);
    this._init_tiles = {
      UP: _toConsumableArray(Array(this._grid_width).keys()).map(function (i) {
        return [0, i];
      }),
      DOWN: _toConsumableArray(Array(this._grid_width).keys()).map(function (i) {
        return [_this._grid_height - 1, i];
      }),
      LEFT: _toConsumableArray(Array(this._grid_height).keys()).map(function (i) {
        return [i, 0];
      }),
      RIGHT: _toConsumableArray(Array(this._grid_height).keys()).map(function (i) {
        return [i, _this._grid_width - 1];
      })
    };
    this.reset();
  }

  _createClass(TwentyFourtyEight, [{
    key: "toString",
    value: function toString() {
      var string = "";

      this._grid.map(function (e) {
        return string += "[" + e + "]" + "\n";
      });

      return string;
    }
  }, {
    key: "get_grid_height",
    value: function get_grid_height() {
      return this._grid_height;
    }
  }, {
    key: "get_grid_width",
    value: function get_grid_width() {
      return this._grid_width;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._grid = _toConsumableArray(Array(4).keys()).map(function (e) {
        return _toConsumableArray(Array(4).keys()).map(function (e) {
          return 0;
        });
      });
      this.new_tile();
      this.new_tile();
    }
  }, {
    key: "remove_offsets",
    value: function remove_offsets(offsets_list) {
      var newArr = [];

      for (var i = 0; i < offsets_list.length; i++) {
        if (offsets_list[i] !== offsets_list[i + 1]) {
          newArr.push(offsets_list[i]);
        }
      }

      return newArr;
    }
  }, {
    key: "move",
    value: function move(direction) {
      for (var key in this._init_tiles) {
        if (direction === key) {
          for (var et = 0; et < this._init_tiles[key].length; et++) {
            var each_tile = this._init_tiles[key][et];
            var offsets = [];
            var temp_list = [];
            var col = 0;
            var row = 0;

            for (var tile = 0; tile < this._width_height_max; tile++) {
              offsets.push([each_tile[0] + OFFSETS[key][0] * col, each_tile[1] + OFFSETS[key][1] * row]);

              if (tile < this._grid_height - 1) {
                col += 1;
              }

              if (tile < this._grid_width - 1) {
                row += 1;
              }
            }

            offsets = this.remove_offsets(offsets);

            for (var off = 0; off < offsets.length; off++) {
              var offset = offsets[off];
              temp_list.push(this._grid[offset[0]][offset[1]]);
            }

            temp_list = merge(temp_list);

            for (var i = 0; i < offsets.length; i++) {
              var _offset = offsets[i];

              if (this._grid[_offset[0]][_offset[1]] !== temp_list[i]) {
                this._is_moved = true;
              }

              this._grid[_offset[0]][_offset[1]] = temp_list[i];
            }
          }
        }
      }

      if (this._is_moved) {
        this.new_tile();
      }
    }
  }, {
    key: "new_tile",
    value: function new_tile() {
      var elem = 42;
      var zero_ind = 42;

      var weighted_list = _toConsumableArray(Array(100).keys()).map(function (i) {
        return i < 90 ? 2 : 4;
      });

      while (elem != 0) {
        zero_ind = [Math.floor(Math.random() * this._grid_height), Math.floor(Math.random() * this._grid_width)];
        elem = this._grid[zero_ind[0]][zero_ind[1]];
      }

      this._grid[zero_ind[0]][zero_ind[1]] = weighted_list[Math.floor(Math.random() * weighted_list.length)];
    }
  }, {
    key: "set_tile",
    value: function set_tile(row, col, value) {
      this._grid[row][col] = value;
    }
  }, {
    key: "get_tile",
    value: function get_tile(row, col) {
      return this._grid[row][col];
    }
  }]);

  return TwentyFourtyEight;
}();

/* harmony default export */ __webpack_exports__["default"] = (TwentyFourtyEight);

/***/ }),

/***/ "./src/gameRender.js":
/*!***************************!*\
  !*** ./src/gameRender.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TILE_SIZE = 100;
var HALF_TILE_SIZE = TILE_SIZE / 2;
var BORDER_SIZE = 45;
var UP = 1;
var DOWN = 2;
var LEFT = 3;
var RIGHT = 4;

var TwentyFourtyEightGui =
/*#__PURE__*/
function () {
  function TwentyFourtyEightGui(game) {
    _classCallCheck(this, TwentyFourtyEightGui);

    this.tilesAsset = document.getElementById("tile-asset");
    this._rows = game.get_grid_height();
    this._cols = game.get_grid_width();
    this._game = game;
  }

  _createClass(TwentyFourtyEightGui, [{
    key: "keydown",
    value: function keydown(key) {
      var _this = this;

      document.addEventListener('keydown', function (event) {
        console.log(_this);
        if ("ArrowLeft" === event.key) _this._game.move("LEFT");else if ("ArrowRight" === event.key) _this._game.move("RIGHT");else if ("ArrowUp" === event.key) _this._game.move("UP");else if ("ArrowDown" === event.key) _this._game.move("DOWN");
      }, false);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      function getBaseLog(y, x) {
        return Math.log(y) / Math.log(x);
      }

      for (var row = 0; row < this._rows; row++) {
        for (var col = 0; col < this._cols; col++) {
          var tile = this._game.get_tile(row, col);

          var val = void 0;

          if (tile === 0) {
            val = 0;
          } else {
            val = Math.floor(getBaseLog(tile, 2));
          }

          ctx.drawImage(this.tilesAsset, 50 + HALF_TILE_SIZE + val * TILE_SIZE - 100, HALF_TILE_SIZE - 50, TILE_SIZE, TILE_SIZE, col * TILE_SIZE + HALF_TILE_SIZE + BORDER_SIZE - 45, row * TILE_SIZE + HALF_TILE_SIZE + BORDER_SIZE - 45, TILE_SIZE, TILE_SIZE);
        }
      }
    }
  }, {
    key: "start",
    value: function start() {
      this._game.reset();
    }
  }]);

  return TwentyFourtyEightGui;
}();

/* harmony default export */ __webpack_exports__["default"] = (TwentyFourtyEightGui);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameRender */ "./src/gameRender.js");
/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLogic */ "./src/gameLogic.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#BCADA1";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var game = new _gameLogic__WEBPACK_IMPORTED_MODULE_1__["default"](4, 4);
  var la = new _gameRender__WEBPACK_IMPORTED_MODULE_0__["default"](game);
  la.start();
  la.keydown();
  setInterval(function () {
    la.draw(ctx);
  }, 16);
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map