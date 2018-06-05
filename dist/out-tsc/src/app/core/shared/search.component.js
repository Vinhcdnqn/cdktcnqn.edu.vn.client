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
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.change = new core_1.EventEmitter();
    }
    SearchComponent.prototype.getEachChar = function (value) {
        this.change.emit(value);
    };
    SearchComponent.prototype.clearFilter = function () {
        this.listFilter = null;
        this.change.emit(null);
    };
    SearchComponent.prototype.getPasteData = function (value) {
        var pastedVal = value.clipboardData.getData('text/plain');
        this.change.emit(pastedVal);
        value.preventDefault();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SearchComponent.prototype, "change", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-list',
            template: "                \n                <div class=\"form-group pull-right top_search\">\n                    <div class=\"input-group\">\n                        <input \n                            style=\"border-color:#66afe9\"\n                            class=\"form-control\" \n                            placeholder=\"Nh\u1EADp t\u1EEB kh\u00F3a t\u00ECm ki\u1EBFm\" \n                            (paste)=\"getPasteData($event)\" \n                            (keyup)=\"getEachChar($event.target.value)\" \n                            type=\"text\" \n                            [(ngModel)]=\"listFilter\" />\n                            <span class=\"input-group-btn\">\n                                <button style=\"color:white\" class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-search\"></i></button>                            \n                            </span>\n                    </div>\n                </div>\n           "
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule
            ],
            declarations: [SearchComponent],
            exports: [SearchComponent]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.component.js.map