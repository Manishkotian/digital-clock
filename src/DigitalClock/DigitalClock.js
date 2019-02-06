import React, {Component} from 'react';
import Header from './Header.js';
import Time from './Time.js';

class DigitalClock extends Component {
    constructor(props) {
        super(props);
        let time = new Date();
        let currentTime = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
        this.state = {
            time :currentTime
        }  
        this.interval = null;     
        this.setDigitalTime = this.setDigitalTime.bind(this);        
    }
    componentDidMount() {      
        this.interval = setInterval(this.setDigitalTime,1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    setDigitalTime(e) {
        let time = new Date();
        let currentTime = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
        this.setState({
            time: currentTime
        });
    }
    render() {
        const {time} = this.state;
        return (
            <div className="text-center">
                <Header headerText = "Digital Clock"/><br/>
                <Time timeValue={time}/>
            </div>
        );
    }
}
export default  DigitalClock;