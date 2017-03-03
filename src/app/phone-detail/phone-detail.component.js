
export class PhoneDetailController {
    /**
     * @param {!angular.$http} $http
     * @param {!angular.route} $routeParams
     * @ngInject
     */
    constructor($http, $routeParams) {
        let self = this;

        self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
        };

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
            self.phone = response.data;
            self.setImage(self.phone.images[0]);
        });
    }
}

export const phoneDetailComponent = {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
};