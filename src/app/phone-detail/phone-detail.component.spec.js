import angular from "angular";
import "angular-mocks";
import "angular-route";
import "./phone-detail.module";

const {inject} = angular.mock;


describe('phoneDetail', function () {

    // Load the module that contains the `phoneDetail` component before each test
    beforeEach(angular.mock.module('phonecatApp.phoneDetail'));

    // Test the controller
    describe('PhoneDetailController', function () {
        let $httpBackend, ctrl;

        beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond({name: 'phone xyz'});

            $routeParams.phoneId = 'xyz';

            ctrl = $componentController('phoneDetail');
        }));

        it('should fetch the phone details', function () {
            expect(ctrl.phone).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.phone).toEqual({name: 'phone xyz'});
        });

    });

});
