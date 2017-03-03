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

        it('should display placeholder page with `phoneId`', function() {
            expect(element(by.binding('$ctrl.phoneId')).getText()).toBe('nexus-s');
        });
    })

});
