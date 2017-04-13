import {ActionTypes} from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppService from '../services/AppService';

let service = null;

class BaseActionCreators {
    constructor() {
        this.toggleLoading = this.toggleLoading.bind(this);

        service = new AppService();
    }

    toggleLoading(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.TOGGLE_LOADING,
            data
        });
    }

    getAppService() {
        return service;
    }
}

export default BaseActionCreators;
