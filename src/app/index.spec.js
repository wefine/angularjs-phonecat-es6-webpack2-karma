import './index';
import 'angular-mocks';

describe('PhoneListController', function () {

    beforeEach(angular.mock.module('phonecatApp'));

    it('should create a `phones` model with 3 phones', angular.mock.inject(function ($controller) {
        var scope = {};
        var ctrl = $controller('PhoneListController', {$scope: scope});

        expect(scope.phones.length).toBe(3);
    }));
});
