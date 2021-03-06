"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var chartjs_component_1 = require("./chartjs.component");
var chartjs_routing_module_1 = require("./chartjs-routing.module");
var ChartJSModule = /** @class */ (function () {
    function ChartJSModule() {
    }
    ChartJSModule = __decorate([
        core_1.NgModule({
            imports: [
                chartjs_routing_module_1.ChartJSRoutingModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [chartjs_component_1.ChartJSComponent]
        })
    ], ChartJSModule);
    return ChartJSModule;
}());
exports.ChartJSModule = ChartJSModule;
//# sourceMappingURL=chartjs.module.js.map