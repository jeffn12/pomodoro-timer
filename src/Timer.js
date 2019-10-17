import React from 'react';

export default class Timer extends React.Component {

    render() {
        return (
            <div>
                <div id="timer-label">{this.props.name}</div>
                <div id="time-left">{this.props.time.toString() + ":00"}</div>

                <div id="controls">
                    <button id="start_stop">Start/Stop</button>
                    <button id="reset" onClick={this.props.reset}>Reset</button>
                </div>
            </div>
        );
    }
}