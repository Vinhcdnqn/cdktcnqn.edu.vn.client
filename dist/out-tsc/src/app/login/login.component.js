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
var notification_service_1 = require("../core/services/notification.service");
var authen_service_1 = require("../core/services/authen.service");
var message_constants_1 = require("../core/common/message.constants");
var url_constants_1 = require("../core/common/url.constants");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenService, notificationService, router) {
        this.authenService = authenService;
        this.notificationService = notificationService;
        this.router = router;
        this.loading = false;
        this.model = {
            username: 'admin',
            password: '123654$'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenService.login(this.model.username, this.model.password).subscribe(function (data) {
            _this.router.navigate([url_constants_1.UrlConstants.HOME]);
        }, function (error) {
            _this.notificationService.printErrorMessage(message_constants_1.MessageContstants.SYSTEM_ERROR_MSG);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [authen_service_1.AuthenService,
            notification_service_1.NotificationService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map