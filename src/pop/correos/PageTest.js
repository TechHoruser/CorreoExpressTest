var PageCorreos = require('./PageCorreos');
var assert = require('assert');

describe('Correos Page Test with Page Object Pattern', function() {
    it('do a search with nonexistent shipping number', function () {
        PageCorreos.open();
        PageCorreos.checkSAC.click();
        PageCorreos.shippingNumber.setValue("12345678901234567890");

        //Si se quiere establecer el valor
        PageCorreos.shippingNumberValue("12345678901234567890");

        PageCorreos.cp.setValue("1234512345");
        PageCorreos.checkShippingStatusButton.click();
        assert(PageCorreos.resultsKO.isVisible);
    })
    it('do a search with existent shipping number', function () {
        PageCorreos.open();
        PageCorreos.checkSAC.click();
        PageCorreos.shippingNumber.setValue("1234567890");
        PageCorreos.cp.setValue("12345");
        PageCorreos.checkShippingStatusButton.click();
        assert(PageCorreos.resultsOK.isVisible);
    })
});