import React from 'react';

export default class TimerDisplay extends React.Component {
    getTimeFormat = () => {
        const arr = this.props.time.split(':');
        const min = arr[0] < 10 ? '0' + arr[0].toString() : arr[0].toString();
        const sec = ( arr[1] < 10 & arr[1] != '00' ) ? '0' + arr[1].toString() : arr[1].toString();
        return min + ":" + sec;
    }

    render() {
        return (
            <div>
                <div id="timer-label">{this.props.name}</div>
                <div id="time-left">{this.getTimeFormat(this.props.time)}</div>
            </div>
        );
    }
}