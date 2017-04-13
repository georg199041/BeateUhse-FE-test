'use strict';

const Promise = require('promise');

// handlers are exported back for use in hapi routes
const Handlers = {};

// Lib contains our business specific logic
const Lib = {};

// our pretend database data
const Database = require('./products.json');

// a unit test-able function
Lib.getProducts = function getProducts(id) {

    return new Promise((resolve, reject) => {
        // if id passed, fetch single item
        if (id) {
            const result = Database.find(item => item.id === id);
            if (typeof result === 'undefined') {
                reject();
            } else {
                resolve(result);
            }
        }
        // in other cases fetch all items
        resolve(Database);
    });
};

// hapi route handler
// only this function can call reply
Handlers.get = function get(req, reply) {
    //
    // Perform req processing & conversions for input here.
    //
    let id = null;

    if (req.params.id) {
        id = req.params.id;
    }

    // call business function
    Lib.getProducts(parseInt(id)).done((data) => {
        // api success
        reply({ result: data }).code(200);
    }, (err) => {
        // api error
        reply(err).code(400);
    });
};

module.exports = {
    handlers: Handlers,
    // we only export lib for tests
    /* $lab:coverage:off$ */
    lib:      (process.env.NODE_ENV === 'test') ? Lib : null
    /* $lab:coverage:on$ */
};
