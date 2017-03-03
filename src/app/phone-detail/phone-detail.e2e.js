'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function () {

    it('should redirect `index.html` to `index.html#!/phones', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toBe('/phones');
    });

    describe('phoneDetail', function () {

        beforeEach(function() {
            browser.get('index.html#!/phones/nexus-s');
        });

        it('should display the `nexus-s` page', function() {
            expect(element(by.binding('$ctrl.phone.name')).getText()).toBe('Nexus S');
        });

    })

});
