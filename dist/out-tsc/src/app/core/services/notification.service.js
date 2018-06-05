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
var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this._notifier = alertify;
        alertify.defaults = {
            // dialogs defaults
            autoReset: true,
            basic: false,
            closable: true,
            closableByDimmer: true,
            frameless: false,
            maintainFocus: true,
            maximizable: true,
            modal: true,
            movable: true,
            moveBounded: false,
            overflow: true,
            padding: true,
            pinnable: true,
            pinned: true,
            preventBodyShift: false,
            resizable: true,
            startMaximized: false,
            transition: 'pulse',
            // notifier defaults
            notifier: {
                // auto-dismiss wait time (in seconds)  
                delay: 5,
                // default position
                position: 'top-right',
                // adds a close button to notifier messages
                closeButton: false
            },
            // language resources 
            glossary: {
                // dialogs default title
                title: 'Xác nhận',
                // ok button text
                ok: 'Đồng ý',
                // cancel button text
                cancel: 'Hủy'
            },
            // theme settings
            theme: {
                // class name attached to prompt dialog input textbox.
                input: 'ajs-input',
                // class name attached to ok button
                ok: 'ajs-ok',
                // class name attached to cancel button 
                cancel: 'ajs-cancel'
            }
        };
    }
    NotificationService.prototype.printSuccessMessage = function (message) {
        this._notifier.success(message);
    };
    NotificationService.prototype.printWarningMessage = function (message) {
        this._notifier.warning(message);
    };
    NotificationService.prototype.printErrorMessage = function (message) {
        this._notifier.error(message);
    };
    NotificationService.prototype.printConfirmationDialog = function (message, okCallback) {
        this._notifier.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    NotificationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map