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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var url_constants_1 = require("../../core/common/url.constants");
var authen_service_1 = require("./authen.service");
var UtilityService = /** @class */ (function () {
    function UtilityService(router, http, authenService) {
        this.http = http;
        this.authenService = authenService;
        this.Unflatten = function (arr) {
            var map = {};
            var roots = [];
            for (var i = 0; i < arr.length; i += 1) {
                var node = arr[i];
                node.children = [];
                map[node.ID] = i; // use map to look-up the parents
                if (node.ParentId !== null) {
                    arr[map[node.ParentId]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
        this.Unflatten2 = function (arr) {
            var map = {};
            var roots = [];
            for (var i = 0; i < arr.length; i += 1) {
                var node = arr[i];
                node.children = [];
                map[node.ID] = i; // use map to look-up the parents
                if (node.ParentID !== null) {
                    arr[map[node.ParentID]].children.push(node);
                }
                else {
                    roots.push(node);
                }
            }
            return roots;
        };
        this._router = router;
    }
    UtilityService.prototype.convertDateTime = function (date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    };
    UtilityService.prototype.getCurrentDate = function () {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        return (now.getFullYear() + "-" + (month) + "-" + (day));
    };
    UtilityService.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    UtilityService.prototype.navigateToLogin = function () {
        this._router.navigate([url_constants_1.UrlConstants.LOGIN]);
    };
    UtilityService.prototype.MakeSeoTitle = function (input) {
        if (input == undefined || input == '')
            return '';
        //Đổi chữ hoa thành chữ thường
        var slug = input.toLowerCase();
        //Đổi ký tự có dấu thành không dấu
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        slug = slug.replace(/ /gi, "-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
        return slug;
    };
    UtilityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http, authen_service_1.AuthenService])
    ], UtilityService);
    return UtilityService;
}());
exports.UtilityService = UtilityService;
//# sourceMappingURL=utility.service.js.map