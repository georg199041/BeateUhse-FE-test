import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <ul className="header">
                {this.props.headerMenu.map(item => (
                    <li key={item.id}>{item}</li>
                ))}
            </ul>
        );
    }
}

Header.propTypes = {
    headerMenu: PropTypes.array.isRequired
};

export default Header;
