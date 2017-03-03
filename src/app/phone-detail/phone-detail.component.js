
export class PhoneDetailController {
    /**
     * @param {!angular.$http} $http
     * @param {!angular.route} $routeParams
     * @ngInject
     */
    constructor($http, $routeParams) {
        let self = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
            self.phone = response.data;
        });
    }
}

export const phoneDetailComponent = {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
};