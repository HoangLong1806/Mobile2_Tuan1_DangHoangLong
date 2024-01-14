"use strict";
var Vehicle = /** @class */ (function () {
    function Vehicle(chuXe, loaiXe, triGiaXe, dungTichXyLanh) {
        this.chuXe = chuXe;
        this.loaiXe = loaiXe;
        this.triGiaXe = triGiaXe;
        this.dungTichXyLanh = dungTichXyLanh;
    }
    Vehicle.prototype.setChuXe = function (tenChuXe) {
        this.chuXe = tenChuXe;
    };
    Vehicle.prototype.getChuXe = function () {
        return this.chuXe;
    };
    Vehicle.prototype.setLoaiXe = function (loaiXe) {
        this.loaiXe = loaiXe;
    };
    Vehicle.prototype.getLoaiXe = function () {
        return this.loaiXe;
    };
    Vehicle.prototype.setTriGiaXe = function (triGiaXe) {
        if (triGiaXe >= 0) {
            this.triGiaXe = triGiaXe;
        }
        else {
            throw new Error("Tri gia xe phai >= 0");
        }
    };
    Vehicle.prototype.getTriGiaXe = function () {
        return this.triGiaXe;
    };
    Vehicle.prototype.setDungTichXyLanh = function (dungTichXyLanh) {
        if (dungTichXyLanh >= 0) {
            this.dungTichXyLanh = dungTichXyLanh;
        }
        else {
            throw new Error("Dung tich xy lanh >= 0");
        }
    };
    Vehicle.prototype.getDungTichXyLanh = function () {
        return this.dungTichXyLanh;
    };
    Vehicle.prototype.tinhThueXe = function () {
        if (this.dungTichXyLanh < 100 && this.dungTichXyLanh >= 0) {
            return this.triGiaXe * 0.01;
        }
        else if (this.dungTichXyLanh >= 100 && this.dungTichXyLanh <= 200) {
            return this.triGiaXe * 0.03;
        }
        else {
            return this.triGiaXe * 0.05;
        }
    };
    Vehicle.prototype.toString = function () {
        return "T\u00EAn ch\u1EE7 xe: ".concat(this.chuXe, ", Lo\u1EA1i xe: ").concat(this.loaiXe, ", Dung t\u00EDch: ").concat(this.dungTichXyLanh, ", Tr\u1ECB gi\u00E1: ").concat(this.triGiaXe, ", Thu\u1EBF ph\u1EA3i n\u1ED9p: ").concat(this.tinhThueXe());
    };
    return Vehicle;
}());
