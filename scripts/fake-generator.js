'use strict';

const
    faker = require('Faker'),
    fs    = require('fs'),
    path  = require('path');

module.exports = {

    /**
     *
     * @returns {Array}
     */
    createProductsJSON() {

        let total = 100,
            products = [],
            writePath = path.join(__dirname, '..', 'api-server', 'handlers', 'products.json');

        while (total--) {
            products.push({
                price: faker.commerce.price(),
                product: faker.commerce.product(),
                brand: faker.company.companyName(),
                color: faker.commerce.color(),
                id: total,
                // math random 50% chance
                isRecommended: !!Math.floor(Math.random()*2)
            });
        }

        fs.writeFileSync(writePath, JSON.stringify(products, null, 2));

        return products;
    }
};

module.exports.createProductsJSON();
