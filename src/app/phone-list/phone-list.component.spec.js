import angular from "angular";
import "angular-mocks";
import "./phone-list.module";

const {inject} = angular.mock;


describe('phoneList', function () {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(angular.mock.module('phonecatApp.phoneList'));

    // Test the controller
    describe('PhoneListController', function () {

        let ctrl;

        beforeEach(inject(function ($componentController) {
            ctrl = $componentController('phoneList');
        }));

        it('should create a `phones` model with 3 phones', function () {
            expect(ctrl.phones.length).toBe(3);
        });

        it('should set a default value for the `orderProp` model', function () {
            expect(ctrl.orderProp).toBe('age');
        });
    });

});
