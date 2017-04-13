'use strict';

// requires for testing
const Code      = require('code');
const expect    = Code.expect;
const Lab       = require('lab');
const lab       = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe  = lab.describe;
const it        = lab.it;

// we require the handlers directly, so we can test the "Lib" functions in isolation
const ProductHandlers = require('../../api-server/handlers/products');

describe('unit tests - products', () => {

    it('should return all products', (done) => {

        // test lib function
        ProductHandlers.lib.getProducts().done((data) => {

            expect(data).to.be.an.array().and.have.length(100);

            done();
        }, (err) => {

            done(err);
        });
    });

    it('should return single product', (done) => {

        ProductHandlers.lib.getProducts(1).done((data) => {

            expect(data).to.be.an.object();

            done();
        }, (err) => {

            expect(response.statusCode).to.equal(400);
            done(err);
        });
    });
});
