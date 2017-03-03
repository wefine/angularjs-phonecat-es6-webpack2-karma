export class PhoneListController {
    /**
     * @param {!phonecatApp.core.phone}Phone
     * @ngInject
     */
    constructor(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
    }
}

export const phoneListComponent = {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
};