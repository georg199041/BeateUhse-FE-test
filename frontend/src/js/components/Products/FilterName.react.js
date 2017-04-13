import React from 'react';
import PropTypes from 'prop-types';

class FilterName extends React.Component {
    render() {
        return (
            <div className="filter">
                <div className="title">{this.props.filterName}</div>
                <ul className="filter-list">
                    {this.props.data.map((item, index) => (
                        <li key={item.id} onClick={() => this.props.selectHandler('filterName', item)}>
                            <input type="radio" name="filter-name" checked={this.props.selected === item}/>
                            <label for="filter-name">{item}</label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

FilterName.propTypes = {
    data: PropTypes.array.isRequired,
    filterName: PropTypes.string.isRequired
};

export default FilterName;
