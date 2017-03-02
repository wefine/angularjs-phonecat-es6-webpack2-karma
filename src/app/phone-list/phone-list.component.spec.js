import angular from "angular";

import "angular-mocks";
import "./phone-list.module";

const {inject} = angular.mock;


describe('phoneList', function () {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(angular.mock.module('phonecatApp.phoneList'));

    // Test the controller
    describe('PhoneListController', function () {

        it('should create a `phones` model with 3 phones', inject(function ($componentController) {
            let ctrl = $componentController('phoneList');

            expect(ctrl.phones.length).toBe(3);
        }));

    });

});
