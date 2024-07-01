import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {minutes: 0, seconds: 0}

  start = () => {
    this.intervalId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0,
      }))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  stop = () => {
    clearInterval(this.intervalId)
  }

  reset = () => {
    clearInterval(this.intervalId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state

    return (
      <div className="bg">
        <div>
          <h1 className="stopwatch-heading">Stop Watch </h1>
          <div className="card">
            <div className="timer-img-container">
              {' '}
              <img
                className="stopwatch-img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="running-time">
              {' '}
              {minutes.toString().length === 1
                ? minutes.toString().padStart(2, '0')
                : minutes}
              :
              {seconds.toString().length === 1
                ? seconds.toString().padStart(2, '0')
                : seconds}
            </h1>
            <div className="btn-container">
              <button onClick={this.start} className="start-btn" type="button">
                Start
              </button>
              <button onClick={this.stop} className="stop-btn" type="button">
                Stop
              </button>
              <button onClick={this.reset} className="reset-btn" type="button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
