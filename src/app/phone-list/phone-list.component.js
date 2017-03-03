export class PhoneListController {
    /**
     * @param {!angular.$http} $http
     * @ngInject
     */
    constructor($http) {
        let self = this;
        self.orderProp = 'age';

        $http.get('phones/phones.json').then(function(response) {
            self.phones = response.data;
        });
    }
}

export const phoneListComponent = {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
};