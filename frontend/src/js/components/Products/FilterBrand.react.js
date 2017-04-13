import React from 'react';
import PropTypes from 'prop-types';

class FilterBrand extends React.Component {
    render() {
        return (
            <div className="filter">
                <div className="title">{this.props.filterName}</div>
                <ul className="filter-list">
                    {this.props.data.map((item, index) => (
                        <li key={item.id} onClick={() => this.props.selectHandler('filterBrand', item)}>
                            <input type="radio" name="filter-brand" checked={this.props.selected === item}/>
                            <label for="filter-brand">{item}</label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

FilterBrand.propTypes = {
    data: PropTypes.array.isRequired,
    filterName: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    selectHandler: PropTypes.func.isRequired
};

export default FilterBrand;
