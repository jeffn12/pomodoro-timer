import React from 'react';
import '../App.css';

const TimerSettings = (props) => {
    return (
        <div id="label-section">
            <div id="break-label" className="label">
                <h3>Break Label</h3>
                <button id="break-increment" onClick={props.breakUp}>Increase</button>
                <div id="break-length">{props.breakLength}</div>
                <button id="break-decrement" onClick={props.breakDown}>Decrease</button>
            </div>
            
            <div id="session-label" className="label">
                <h3>Session Label</h3>
                <button id="session-increment" onClick={props.sessionUp}>Increase</button>
                <div id="session-length">{props.sessionLength}</div>
                <button id="session-decrement" onClick={props.sessionDown}>Decrease</button>
            </div>
        </div>
    );
}

export default TimerSettings;