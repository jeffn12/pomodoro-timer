import React from 'react';

export default class Timer extends React.Component {
    

    render() {
        return (
            <div>
                <div id="timer-label">{this.props.name}</div>
                <div id="time-left">{this.props.time}</div>
            </div>
        );
    }
}