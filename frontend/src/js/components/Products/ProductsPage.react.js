import React from 'react';
import PropTypes from 'prop-types';
import es6BindAll from 'es6bindall';
import AppActions from 'actions/AppActionCreators';
import AppStore from 'stores/AppStore';

// components
import FilterName from './FilterName.react';
import FilterColor from './FilterColor.react';
import FilterPrice from './FilterPrice.react';
import FilterBrand from './FilterBrand.react';
import ProductItem from '../commonComponents/ProductItem.react';

class Products extends React.Component {
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
        AppActions.getProducts();
    }

    _getStateFromStores() {
        return {
            products: AppStore.getProducts(),

            filterName: AppStore.getFilterName(),
            filterColor: AppStore.getFilterColor(),
            filterPrice: AppStore.getFilterPrice(),
            filterBrand: AppStore.getFilterBrand()
        };
    }

    _onChange() {
        this.setState(this._getStateFromStores);
    }

    render() {
        console.log(this.props.location)

        return (
            <div className="products-page">
                <div className="filters">
                    <FilterName
                        data={this.state.filterName.data}
                        filterName={this.state.filterName.filterName}
                        selected={this.state.filterName.selected}
                        selectHandler={AppActions.selectFilter}
                        location={this.props.location} />
                    <FilterColor
                        data={this.state.filterColor.data}
                        filterName={this.state.filterColor.filterName}
                        selected={this.state.filterColor.selected}
                        selectHandler={AppActions.selectFilter}
                        location={this.props.location} />
                    <FilterPrice
                        data={this.state.filterPrice.data}
                        filterName={this.state.filterPrice.filterName}
                        selected={this.state.filterPrice.selected}
                        selectHandler={AppActions.selectFilter}
                        location={this.props.location} />
                    <FilterBrand
                        data={this.state.filterBrand.data}
                        filterName={this.state.filterBrand.filterName}
                        selected={this.state.filterBrand.selected}
                        selectHandler={AppActions.selectFilter}
                        location={this.props.location} />
                </div>
                <div className="product-list">
                    <div className="mini-filters">
                        <div className="mini-filters-title">Net binnen</div>
                        <div className="mini-filters-list">
                            <span>Aanbevolen</span>
                            <span>20 Producten</span>
                        </div>
                    </div>
                    <div className="product-items">
                        {this.state.products.map(item => (
                            <ProductItem key={item.id}
                                id={item.id}
                                name={item.product}
                                price={item.price}
                                brand={item.brand} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
