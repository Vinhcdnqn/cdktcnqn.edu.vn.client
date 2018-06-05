"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var utility_service_1 = require("./utility.service");
describe('UtilityService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [utility_service_1.UtilityService]
        });
    });
    it('should be created', testing_1.inject([utility_service_1.UtilityService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=utility.service.spec.js.map