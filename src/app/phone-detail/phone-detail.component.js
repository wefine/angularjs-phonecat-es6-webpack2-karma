export class PhoneDetailController {
    /**
     * @param {!angular.route} $routeParams
     * @param {!phonecatApp.core.phone}Phone
     * @ngInject
     */
    constructor($routeParams, Phone) {
        let self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
        };
    }
}

export const phoneDetailComponent = {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
};