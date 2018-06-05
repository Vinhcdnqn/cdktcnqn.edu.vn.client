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
var system_constants_1 = require("./../common/system.constants");
var authen_service_1 = require("./authen.service");
var notification_service_1 = require("./notification.service");
var utility_service_1 = require("./utility.service");
var message_constants_1 = require("./../common/message.constants");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var DataService = /** @class */ (function () {
    function DataService(_http, _router, _authenService, _notificationService, _utilityService) {
        this._http = _http;
        this._router = _router;
        this._authenService = _authenService;
        this._notificationService = _notificationService;
        this._utilityService = _utilityService;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    DataService.prototype.getByID = function (uri, ID) {
        this.headers.delete("Authorization");
        this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        var paramStr = 'ID' + '=' + ID;
        return this._http.get(system_constants_1.SystemConstants.BASE_API + uri + "/?" + paramStr, { headers: this.headers }).pipe(operators_1.map(this.extractData));
    };
    DataService.prototype.get = function (uri) {
        this.headers.delete("Authorization");
        this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        return this._http.get(system_constants_1.SystemConstants.BASE_API + uri, { headers: this.headers }).pipe(operators_1.map(this.extractData));
    };
    DataService.prototype.getByValue = function (uri, values) {
        var myHeaders = new http_1.Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        var myParams = new http_1.URLSearchParams();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var item = values_1[_i];
            myParams.append(item.key, item.value);
        }
        var options = new http_1.RequestOptions({ headers: myHeaders, params: myParams });
        return this._http.get(system_constants_1.SystemConstants.BASE_API + uri, options).pipe(operators_1.map(function (response) { return response.json(); }));
    };
    DataService.prototype.post = function (uri, data) {
        this.headers.delete("Authorization");
        this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        return this._http.post(system_constants_1.SystemConstants.BASE_API + uri, data, { headers: this.headers }).pipe(operators_1.map(this.extractData));
    };
    DataService.prototype.put = function (uri, data) {
        this.headers.delete("Authorization");
        this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        return this._http.put(system_constants_1.SystemConstants.BASE_API + uri, data, { headers: this.headers }).pipe(operators_1.map(this.extractData));
    };
    DataService.prototype.delete = function (uri, key, id) {
        this.headers.delete("Authorization");
        this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        return this._http.delete(system_constants_1.SystemConstants.BASE_API + uri + "/?" + key + "=" + id, { headers: this.headers })
            .pipe(operators_1.map(this.extractData));
    };
    DataService.prototype.deleteWithMultiParams = function (uri, params) {
        this.headers.delete('Authorization');
        this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        var paramStr = '';
        for (var param in params) {
            paramStr += param + "=" + params[param] + '&';
        }
        return this._http.delete(system_constants_1.SystemConstants.BASE_API + uri + "/?" + paramStr, { headers: this.headers })
            .pipe(operators_1.map(this.extractData));
    };
    DataService.prototype.postFile = function (uri, data) {
        var formData = new FormData();
        for (var i = 0; i < data.length; i++) {
            formData.append(data[i].name, data[i], data[i].name);
        }
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(system_constants_1.SystemConstants.BASE_API + uri, formData, options)
            .pipe(operators_1.map(this.extractData));
    };
    DataService.prototype.putFile = function (uri, ID, data) {
        var formData = new FormData();
        for (var i = 0; i < data.length; i++) {
            formData.append(data[i].name, data[i], data[i].name);
        }
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
        var options = new http_1.RequestOptions({ headers: headers });
        var paramStr = 'ID' + '=' + ID;
        return this._http.put(system_constants_1.SystemConstants.BASE_API + uri + '/?' + paramStr, formData, options)
            .pipe(operators_1.map(this.extractData));
    };
    DataService.prototype.displayPDF = function (url, ID) {
        var myHeaders = new http_1.Headers();
        myHeaders.append('Content-Type', 'application/json');
        var paramStr = 'ID' + '=' + ID;
        var options = new http_1.RequestOptions({ headers: myHeaders, responseType: http_1.ResponseContentType.Blob });
        return this._http.get(system_constants_1.SystemConstants.BASE_API + url + '/?' + paramStr, options).pipe(operators_1.map(function (res) {
            return new Blob([res.blob()], { type: 'application/pdf' });
        }));
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        if (error.status == 401) {
            localStorage.removeItem(system_constants_1.SystemConstants.CURRENT_USER);
            this._notificationService.printErrorMessage(message_constants_1.MessageContstants.LOGIN_AGAIN_MSG);
            this._utilityService.navigateToLogin();
        }
        else if (error.status == 403) {
            localStorage.removeItem(system_constants_1.SystemConstants.CURRENT_USER);
            this._notificationService.printErrorMessage(message_constants_1.MessageContstants.FORBIDDEN);
            this._utilityService.navigateToLogin();
        }
        else {
            var errMsg = JSON.parse(error._body).Message;
            this._notificationService.printErrorMessage(errMsg);
            return rxjs_1.Observable.throw(errMsg);
        }
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router,
            authen_service_1.AuthenService,
            notification_service_1.NotificationService,
            utility_service_1.UtilityService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map