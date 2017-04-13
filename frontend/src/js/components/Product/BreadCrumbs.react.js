import React from 'react';
import PropTypes from 'prop-types';

class BreadCrumbs extends React.Component {
    render() {
        return (
            <ul className="breadcrumbs">
                {this.props.breadCrumbs.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }
}

BreadCrumbs.propTypes = {
    breadCrumbs: PropTypes.array.isRequired
};

export default BreadCrumbs;
