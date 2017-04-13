import React from 'react';
import Header from './commonComponents/Header.react';
import AppStore from 'stores/AppStore';

require('../../styles/main.less');

class App extends React.Component {

    render() {
        return (
            <div className="app-outer">
                <Header headerMenu={AppStore.getHeaderMenu()} />
                {this.props.children}
            </div>
        );
    }

}

export default App;
