"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authen_service_1 = require("./authen.service");
describe('AuthenService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [authen_service_1.AuthenService]
        });
    });
    it('should be created', testing_1.inject([authen_service_1.AuthenService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=authen.service.spec.js.map