import React from 'react';
import PropTypes from 'prop-types';

class FilterColor extends React.Component {
    render() {
        return (
            <div className="filter">
                <div className="title">{this.props.filterName}</div>
                <ul className="filter-list">
                    {this.props.data.map((item, index) => (
                        <li key={item.id} onClick={() => this.props.selectHandler('filterColor', item)}>
                            <input type="radio" name="filter-color" checked={this.props.selected === item}/>
                            <label for="filter-color">{item}</label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

FilterColor.propTypes = {
    data: PropTypes.array.isRequired,
    filterName: PropTypes.string.isRequired
};

export default FilterColor;
