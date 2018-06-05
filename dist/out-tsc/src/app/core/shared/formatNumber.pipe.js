"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var PADDING = "000000";
var formatNumberPipe = /** @class */ (function () {
    function formatNumberPipe() {
        this.DECIMAL_SEPARATOR = ",";
        this.THOUSANDS_SEPARATOR = " ";
    }
    formatNumberPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        var _a = (value || "").toString()
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction;
    };
    formatNumberPipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        var _a = (value || "").split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        return integer + fraction;
    };
    formatNumberPipe = __decorate([
        core_1.Pipe({ name: "formatNumber" }),
        __metadata("design:paramtypes", [])
    ], formatNumberPipe);
    return formatNumberPipe;
}());
exports.formatNumberPipe = formatNumberPipe;
var FormatNumberPipeModule = /** @class */ (function () {
    function FormatNumberPipeModule() {
    }
    FormatNumberPipeModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule
            ],
            declarations: [formatNumberPipe],
            exports: [formatNumberPipe]
        })
    ], FormatNumberPipeModule);
    return FormatNumberPipeModule;
}());
exports.FormatNumberPipeModule = FormatNumberPipeModule;
//# sourceMappingURL=formatNumber.pipe.js.map