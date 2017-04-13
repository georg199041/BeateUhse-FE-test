import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

class ProductItem extends React.Component {
    render() {
        return (
            <Link className="product-item" to={`/products/${this.props.id}`}>
                <div className="product-item-name">{this.props.name}</div>
                <div className="product-item-desc">
                    <div>{this.props.price}</div>
                    <div>{this.props.brand}</div>
                </div>
            </Link>
        );
    }
}

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default ProductItem;
