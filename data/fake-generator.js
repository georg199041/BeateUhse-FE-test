'use strict';

const Faker = require('Faker');
const fs    = require('fs');


console.log(Faker);

function generator(count, type, subType) {
    let list = [];

    while(count--)
        list.push(Faker[type][subType]());

    return list;
}

module.exports = {
    writeProductsJSON() {
        let products = generator(100, 'Commerce', 'product');

        fs.writeFileSync('./products', JSON.stringify(products, null, 2));
    }
};

module.exports.writeProductsJSON();