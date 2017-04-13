import axios from 'axios';
import {urls} from '../constants/AppConstants';

class AppService {
    getProducts() {
        return axios.get(urls.products).then(res => res.data.result);
    }

    getProduct(id) {
        return axios.get(`${urls.products}/${id}`).then(res => res.data.result);
    }
}

export default AppService;
