import React, {Component} from 'react';


class Time extends Component {
    render() {
        const { timeValue } = this.props;
        return (
                <span className="text-danger border border-danger rounded time-padding">{timeValue}</span>
        );
    }
}
export default Time;