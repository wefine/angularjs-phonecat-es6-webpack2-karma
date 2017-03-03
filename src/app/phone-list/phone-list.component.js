export class PhoneListController {
    constructor() {
        this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM\u2122 with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM\u2122',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];

        this.orderProp = 'age';
    }
}

export const phoneListComponent = {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
};