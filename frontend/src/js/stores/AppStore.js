import {ActionTypes} from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
const CHANGE_EVENT = 'change';

function getInitialState() {
    return {
        products: [],
        product: {},
        loading: false,
        headerMenu: ['Lingerie', 'Mode', 'Love toys', 'Home & Living',
        'Drogist', 'Beauty & Wellness', 'Outlet', 'New Arrivals',
        'Valentine', 'Magezine'],
        breadCrumbs: ['Christina le Duc', 'Lingerine', 'Damesilngerie'],
        filterName: {
            filterName: 'Categorie naam',
            data: ['Shoes', 'Cheese', 'Chips', 'Ball', 'Tuna', 'Pizza'],
            selected: null
        },
        filterColor: {
            filterName: 'Kleur',
            data: ['green', 'yellow', 'fuchsia', 'grey', 'black'],
            selected: null
        },
        filterPrice: {
            filterName: 'Prijs',
            data: [
                {value: '0:20', title: '< $20'},
                {value: '21:40', title: '$20 - $40'},
                {value: '41:60', title: '$40 - $60'},
                {value: '61:999', title: '> $60'}
            ],
            selected: null
        },
        filterBrand: {
            filterName: 'Merken',
            data: ['Toy Joy', 'Fifty Shades of Grey', 'Colt', 'Hidden desire', 'Scandal'],
            selected: null
        }
    };
}

let _state = getInitialState();

const AppStore = Object.assign({}, EventEmitter.prototype, {

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getProducts: () => _state.products,
    getProduct: () => _state.product,
    getLoading: () => _state.loading,
    getHeaderMenu: () => _state.headerMenu,
    getBreadCrumbs: () => _state.breadCrumbs,
    getFilterName: () => _state.filterName,
    getFilterColor: () => _state.filterColor,
    getFilterPrice: () => _state.filterPrice,
    getFilterBrand: () => _state.filterBrand

});

AppStore.dispatchToken = AppDispatcher.register((action) => {

    switch(action.type) {

        case ActionTypes.GET_PRODUCTS:
            _state.products = action.data;
            AppStore.emitChange();
            break;

        case ActionTypes.GET_PRODUCT:
            _state.product = action.data;
            AppStore.emitChange();
            break;

        case ActionTypes.TOGGLE_LOADING:
            _state.loading = action.data;
            AppStore.emitChange();
            break;

        case ActionTypes.SELECT_FILTER:
            _state[action.filterType].selected = action.filterName;
            AppStore.emitChange();

            break;

        default:
            // do nothing

    }
});

export default AppStore;
