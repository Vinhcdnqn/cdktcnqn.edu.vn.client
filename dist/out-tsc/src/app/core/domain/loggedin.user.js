"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggedInUser = /** @class */ (function () {
    function LoggedInUser(access_token, username, fullName, email, avatar, roles, permissions) {
        this.access_token = access_token;
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.avatar = avatar;
        this.roles = roles;
        this.permissions = permissions;
    }
    return LoggedInUser;
}());
exports.LoggedInUser = LoggedInUser;
//# sourceMappingURL=loggedin.user.js.map