import React from 'react';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div id="root">
        <div id="wrapper">
          
          <div id="label-section">
            <div id="break-label" className="label">
              <h3>Break Label</h3>
              <button id="break-increment">Increase</button>
              <div id="break-length">5</div>
              <button id="break-decrement">Decrease</button>
            </div>
            <div id="session-label" className="label">
              <h3>Session Label</h3>
              <button id="session-increment">Increase</button>
              <div id="session-length">25</div>
              <button id="session-decrement">Decrease</button>
            </div>
          </div>
          
          <div id="countdown-section">
              <div id="timer-label">Session</div>
              <div id="time-left">25:00</div>
          </div>

          <div id="controls">
            <button id="start_stop">Start/Stop</button>
            <button id="reset">Reset</button>
          </div>
          
        </div>
      </div>
    )
  }
}
