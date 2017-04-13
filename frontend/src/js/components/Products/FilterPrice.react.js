import React from 'react';
import PropTypes from 'prop-types';

class FilterPrice extends React.Component {
    render() {
        return (
            <div className="filter">
                <div className="title">{this.props.filterName}</div>
                <ul className="filter-list">
                    {this.props.data.map((item, index) => (
                        <li key={item.id} onClick={() => this.props.selectHandler('filterPrice', item.value)}>
                            <input type="radio" name="filter-price" checked={this.props.selected === item.value}/>
                            <label for="filter-price">{item.title}</label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

FilterPrice.propTypes = {
    data: PropTypes.array.isRequired,
    filterName: PropTypes.string.isRequired
};

export default FilterPrice;
