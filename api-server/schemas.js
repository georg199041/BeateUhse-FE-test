'use strict';

//
// We should store all of our shared schemas in one place
//

const Joi = require('joi');
const SCHEMAS = {};

SCHEMAS.Product = {
    price:   Joi.number(),
    product: Joi.string(),
    brand: Joi.string(),
    color: Joi.string(),
    id: Joi.number(),
    isRecommended: Joi.boolean()
};

SCHEMAS.Error = Joi.object({
    error: {
        msg: Joi.string().min(3).description('Human readable error').default('An error has occurred.'),
        type: Joi.string().min(3).description('Type of error').default('GENERIC_ERR')
    }
}).label('Error');

SCHEMAS.ProductsRes = Joi.object({
    result: Joi.array().items(SCHEMAS.Product)
}).label('Response');

SCHEMAS.SingleProductRes = Joi.object({
    result: SCHEMAS.Product
}).label('Response');

module.exports = SCHEMAS;
