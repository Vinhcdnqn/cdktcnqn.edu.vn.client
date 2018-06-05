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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
// import 'rxjs/add/operator/map';
var loggedin_user_1 = require("../domain/loggedin.user");
var notification_service_1 = require("./notification.service");
var system_constants_1 = require("../../core/common/system.constants");
var operators_1 = require("rxjs/operators");
var AuthenService = /** @class */ (function () {
    function AuthenService(_http, router, notificationService) {
        this._http = _http;
        this.router = router;
        this.notificationService = notificationService;
    }
    AuthenService.prototype.login = function (username, password) {
        var body = "userName=" + encodeURIComponent(username) +
            "&password=" + encodeURIComponent(password) +
            "&grant_type=password";
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(system_constants_1.SystemConstants.BASE_API + '/api/oauth/token', body, options).pipe(operators_1.map(function (response) {
            var user = response.json();
            if (user && user.access_token) {
                localStorage.removeItem(system_constants_1.SystemConstants.CURRENT_USER);
                localStorage.setItem(system_constants_1.SystemConstants.CURRENT_USER, JSON.stringify(user));
            }
        }));
    };
    AuthenService.prototype.logout = function () {
        localStorage.removeItem(system_constants_1.SystemConstants.CURRENT_USER);
    };
    AuthenService.prototype.isUserAuthenticated = function () {
        var user = localStorage.getItem(system_constants_1.SystemConstants.CURRENT_USER);
        if (user != null) {
            return true;
        }
        else
            return false;
    };
    AuthenService.prototype.getLoggedInUser = function () {
        var user;
        if (this.isUserAuthenticated()) {
            var userData = JSON.parse(localStorage.getItem(system_constants_1.SystemConstants.CURRENT_USER));
            user = new loggedin_user_1.LoggedInUser(userData.access_token, userData.username, userData.fullName, userData.email, userData.avatar, userData.roles, userData.permissions);
        }
        else
            user = null;
        return user;
    };
    AuthenService.prototype.checkAccess = function (functionId) {
        var user = this.getLoggedInUser();
        var result = false;
        var permission = JSON.parse(user.permissions);
        var roles = JSON.parse(user.roles);
        var hasPermission = permission.findIndex(function (x) { return x.FunctionId == functionId && x.CanRead == true; });
        if (hasPermission != -1 || roles.findIndex(function (x) { return x == "Admin"; }) != -1) {
            return true;
        }
        else
            return false;
    };
    AuthenService.prototype.hasPermission = function (functionId, action) {
        var user = this.getLoggedInUser();
        var result = false;
        var permission = JSON.parse(user.permissions);
        var roles = JSON.parse(user.roles);
        switch (action) {
            case 'create':
                var hasPermission = permission.findIndex(function (x) { return x.FunctionId == functionId && x.CanCreate == true; });
                if (hasPermission != -1 || roles.findIndex(function (x) { return x == "Admin"; }) != -1)
                    result = true;
                break;
            case 'update':
                var hasPermission = permission.findIndex(function (x) { return x.FunctionId == functionId && x.CanUpdate == true; });
                if (hasPermission != -1 || roles.findIndex(function (x) { return x == "Admin"; }) != -1)
                    result = true;
                break;
            case 'delete':
                var hasPermission = permission.findIndex(function (x) { return x.FunctionId == functionId && x.CanDelete == true; });
                if (hasPermission != -1 || roles.findIndex(function (x) { return x == "Admin"; }) != -1)
                    result = true;
                break;
        }
        return result;
    };
    AuthenService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router,
            notification_service_1.NotificationService])
    ], AuthenService);
    return AuthenService;
}());
exports.AuthenService = AuthenService;
//# sourceMappingURL=authen.service.js.map