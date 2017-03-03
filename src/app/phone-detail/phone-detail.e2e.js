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

    });

    it('should display the first phone image as the main phone image', function() {
        let mainImage = element(by.css('img.phone'));

        expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });

    it('should swap the main image when clicking on a thumbnail image', function() {
        let mainImage = element(by.css('img.phone'));
        let thumbnails = element.all(by.css('.phone-thumbs img'));

        thumbnails.get(2).click();
        expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);

        thumbnails.get(0).click();
        expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });
});
