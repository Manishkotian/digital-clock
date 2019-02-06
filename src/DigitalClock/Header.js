import React, {Component} from 'react';


class Header extends Component {
    render() {
        const { headerText } = this.props;
        return (
                <h1 className="header-margin border border-dark rounded">{headerText}</h1>
        );
    }
}
export default Header;