export class PhoneListController {
    constructor() {
        this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM? with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM?',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    }
}

export const phoneListComponent = {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
};