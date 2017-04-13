import {ActionTypes} from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import BaseActionCreators from './BaseActionCreators';
import es6BindAll from 'es6bindall';
import { hashHistory } from 'react-router';

class AppActionCreators extends BaseActionCreators {
    constructor() {
        super();
        es6BindAll(this, ['getProducts', 'getOneProduct', 'selectFilter']);
    }

    getProducts() {
        this.toggleLoading(true);
        this.getAppService().getProducts()
        .then(data => {
            this.toggleLoading(false);
            return AppDispatcher.dispatch({
                        type: ActionTypes.GET_PRODUCTS,
                        data
                   });
        })
        .catch(this.showError);
    }

    getOneProduct() {
        this.toggleLoading(true);
        this.getAppService().getProducts()
        .then(data => {
            this.toggleLoading(false);
            return AppDispatcher.dispatch({
                        type: ActionTypes.GET_PRODUCT,
                        data
                   });
        })
        .catch(this.showError);
    }

    selectFilter(filterType, filterName) {
        AppDispatcher.dispatch({
            type: ActionTypes.SELECT_FILTER,
            filterType,
            filterName
        });
    }
};

export default new AppActionCreators();
