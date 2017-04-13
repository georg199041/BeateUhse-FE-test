// add polyfill for webkit
require('number-to-locale-string');
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, IndexRedirect, browserHistory} from 'react-router';

//components
import App from 'components/App.react';
import ProductsPage from 'components/Products/ProductsPage.react';
import ProductPage from 'components/Product/ProductPage.react';
import NotFound from 'components/NotFound404.react';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ProductsPage} />
            <Route path="products">
                <IndexRoute component={ProductsPage} />
                <Route path=":id" component={ProductPage}>
                    <IndexRoute component={ProductPage} />
                </Route>
            </Route>
        </Route>
        <Route path="*" status={404}>
            <IndexRoute component={NotFound} />
        </Route>
    </Router>
), document.getElementById('app'));
