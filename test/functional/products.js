'use strict';

// requires for testing
const Code        = require('code');
const expect      = Code.expect;
const Lab         = require('lab');
const lab         = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe    = lab.describe;
const it          = lab.it;
const after       = lab.after;

// require hapi server
const Server = require('../../api-server/server.js');

// tests
describe('functional tests - products', () => {

    it('should get products', (done) => {

        // make API call to self to test functionality end-to-end
        Server.inject({
            method: 'GET',
            url: '/api/products'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            expect(response.result.result).to.have.length(100);
            done();
        });
    });

    it('should get single product', (done) => {

        Server.inject({
            method: 'GET',
            url: '/api/products/1'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should not get single product', (done) => {

        Server.inject({
            method: 'GET',
            url: '/api/products/100500'
        }, (response) => {

            expect(response.statusCode).to.equal(400);
            done();
        });
    });

    after((done) => {

        // placeholder to do something post tests
        done();
    });
});
