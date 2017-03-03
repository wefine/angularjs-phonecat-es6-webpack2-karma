
import "./phone-detail.module";

describe('phoneDetail', function () {

    // Load the module that contains the `phoneDetail` component before each test
    beforeEach(angular.mock.module('phonecatApp.phoneDetail'));

    // Test the controller
    describe('PhoneDetailController', function () {
        let $httpBackend, ctrl;
        let xyzPhoneData = {
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
        };

        beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

            $routeParams.phoneId = 'xyz';

            ctrl = $componentController('phoneDetail');
        }));

        it('should fetch the phone details', function () {

        });
    });

});
