
import "./phone-list.module";

describe('phoneList', function () {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(angular.mock.module('phonecatApp.phoneList'));

    // Test the controller
    describe('PhoneListController', function () {

        let $httpBackend, ctrl;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            ctrl = $componentController('phoneList');
        }));


        it('should set a default value for the `orderProp` property', function() {
            expect(ctrl.orderProp).toBe('age');
        });

    });

});
