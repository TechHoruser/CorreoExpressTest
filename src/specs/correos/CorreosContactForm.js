var assert = require('assert');

describe('Correos Page Test', function() {
    it('do a search with nonexistent shipping number', function () {
        browser.url(browser.options.baseURLCorreos);

        checkSAC = browser.element("//div[@class='possibleTags']//p[1]/input");
        checkSAC.click();

        shippingNumber = browser.element("//input[@id='shippingNumber' and @class='input-contactoform']");
        shippingNumber.setValue("12345678901234567890");

        browser.setValue('#cp', "1234512345");

        browser.click("#checkShippingStatusButton");

        assert(browser.isVisible("//div[text()[contains(.,'No se han encontrado')]]"));
    })
    it('do a search with an existing shipping number', function () {
        browser.url(browser.options.baseURLCorreos);

        checkSAC = browser.element("//div[@class='possibleTags']//p[1]/input");
        checkSAC.click();

        shippingNumber = browser.element("//input[@id='shippingNumber' and @class='input-contactoform']");
        shippingNumber.setValue("1234567890");

        browser.setValue('#cp', "12345");

        browser.click("#checkShippingStatusButton");

        assert(browser.isVisible("//p[text()='Su envío está entregado.']"));
    })
});