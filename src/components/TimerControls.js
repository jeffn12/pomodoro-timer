import React from 'react';

const TimerControls = (props) => {
    return (
        <div id="controls">
            <button id="start_stop" onClick={props.runToggle}>{props.timerRun ? "Stop" : "Start"}</button>
            <button id="reset" onClick={props.reset}>Reset</button>
        </div>
    );
}

export default TimerControls;