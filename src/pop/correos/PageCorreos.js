var Page = require('../Page');

var PageCorreos = Object.create(Page, {

    open: { value: function() {
        Page.open.call(this, browser.options.baseURLCorreos);
    }},

    checkSAC: { get: function() {
        return browser.element("//div[@class='possibleTags']//p[1]/input");
    }},

    shippingNumber: { get: function() {
        return browser.element("//input[@id='shippingNumber' and @class='input-contactoform']");
    }},

    // Si se quiere establecer el valor
    shippingNumberValue: { value: function (value) {
        this.shippingNumber.setValue(value);
    }},

    cp: { get: function() {
        return browser.element("#cp");
    }},

    checkShippingStatusButton: { get: function() {
        return browser.element("#checkShippingStatusButton");
    }},

    resultsOK: { get: function() {
        return browser.element("//p[text()='Su envío está entregado.']");
    }},

    resultsKO: { get: function() {
        return browser.element("//div[text()[contains(.,'No se han encontrado')]]");
    }},

});

module.exports = PageCorreos;