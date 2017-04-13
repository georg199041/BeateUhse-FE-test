'use strict';

const Handlers      = require('../handlers/products');
const SCHEMAS       = require('../schemas');

const API_BASE_PATH = '/api/products';
const routes = [];

// GET /api/products
routes.push({
    method: 'GET',
    path: API_BASE_PATH,
    config: {
        auth: false,
        handler: Handlers.handlers.get,
        description: 'get data for products page',
        notes: 'This endpoint allows for the retrieval components of products page.',
        plugins: {
            'hapi-swagger': {
                responses: {
                    '200': { description: 'Success', schema: SCHEMAS.ProductsRes },
                    '400': { description: 'Bad Request', schema: SCHEMAS.Error }
                },
                security: {}
            }
        },
        tags: ['api'],
        validate: {
            query: {
            }
        },
        response: {
            schema: SCHEMAS.ProductsRes
        }
    }
});

// GET /api/products/:id
routes.push({
    method: 'GET',
    path: API_BASE_PATH + '/{id}',
    config: {
        auth: false,
        handler: Handlers.handlers.get,
        description: 'get data for single product page',
        notes: 'This endpoint allows for the retrieval product for single product page.',
        plugins: {
            'hapi-swagger': {
                responses: {
                    '200': { description: 'Success', schema: SCHEMAS.SingleProductRes },
                    '400': { description: 'Bad Request', schema: SCHEMAS.Error }
                },
                security: {}
            }
        },
        tags: ['api'],
        validate: {
            query: {

            }
        },
        response: {
            schema: SCHEMAS.SingleProductRes
        }
    }
});

// TODO as it is a REST server these methods needs to be implemented,
// but in this case these methods will not be very helpful as we can populate products via fake-generator.js
// POST /api/product
// PUT /api/product/:id
// DELETE /api/product/:id

module.exports = routes;
