import React from 'react';
import PropTypes from 'prop-types';
import es6BindAll from 'es6bindall';

import AppActions from 'actions/AppActionCreators';
import AppStore from 'stores/AppStore';

// components
import BreadCrumbs from './BreadCrumbs.react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        // ES6 classes don't have their methods bounded by default
        es6BindAll(this, ['_onChange', '_getStateFromStores']);
        this.state = this._getStateFromStores();
    }

    // Subscribe component for store changes when it's opening
    componentWillMount() {
        AppStore.addChangeListener(this._onChange);
    }
    // and unsubscribe when it's closing
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    componentDidMount() {
        // fetch required data from server
        AppActions.getOneProduct(this.props.id);
    }

    _getStateFromStores() {
        return {
            product: AppStore.getProduct(),
            breadCrumbs: AppStore.getBreadCrumbs()
        };
    }

    _onChange() {
        this.setState(this._getStateFromStores);
    }

    render() {
        return (
            <div className="product-page">
                <BreadCrumbs breadCrumbs={this.state.breadCrumbs} />
            </div>
        );
    }
}

Product.propTypes = {
};

Product.defaultProps = {
};

export default Product;
