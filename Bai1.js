"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle = /** @class */ (function () {
    function Triangle(ma, mb, mc) {
        this._ma = ma;
        this._mb = mb;
        this._mc = mc;
    }
    Object.defineProperty(Triangle.prototype, "ma", {
        get: function () {
            return this._ma;
        },
        set: function (value) {
            this._ma = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "mb", {
        get: function () {
            return this._mb;
        },
        set: function (value) {
            this._mb = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "mc", {
        get: function () {
            return this._mc;
        },
        set: function (value) {
            this._mc = value;
        },
        enumerable: false,
        configurable: true
    });
    return Triangle;
}());
exports.default = Triangle;
