const keyMirror = require('keymirror');

const conf = {
    ActionTypes: keyMirror({
        GET_PRODUCTS: null,
        GET_PRODUCT: null,
        TOGGLE_LOADING: null,
        SELECT_FILTER: null
    }),
    urls: {
        products: '/api/products'
    }
};

export default conf;
