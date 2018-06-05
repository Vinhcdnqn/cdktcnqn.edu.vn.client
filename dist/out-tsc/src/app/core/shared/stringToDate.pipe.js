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
var StringToDatePipe = /** @class */ (function () {
    function StringToDatePipe() {
    }
    StringToDatePipe.prototype.transform = function (value) {
        var reggie = /(\d{4})-(\d{2})-(\d{2})/;
        var dateArray = reggie.exec(value);
        var dateObject = new Date((+dateArray[1]), ((+dateArray[2])) - 1, (+dateArray[3]));
        return dateObject;
    };
    StringToDatePipe = __decorate([
        core_1.Pipe({
            name: 'stringToDate'
        }),
        __metadata("design:paramtypes", [])
    ], StringToDatePipe);
    return StringToDatePipe;
}());
exports.StringToDatePipe = StringToDatePipe;
var StringToDatePipeModule = /** @class */ (function () {
    function StringToDatePipeModule() {
    }
    StringToDatePipeModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule
            ],
            declarations: [StringToDatePipe],
            exports: [StringToDatePipe]
        })
    ], StringToDatePipeModule);
    return StringToDatePipeModule;
}());
exports.StringToDatePipeModule = StringToDatePipeModule;
//# sourceMappingURL=stringToDate.pipe.js.map