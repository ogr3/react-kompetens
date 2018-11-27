import React from "react"

const ClockFace = props => (
  <div>Time is: {props.time}</div>
)

export class Clock extends React.Component {
  state = {
    date: new Date()
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <ClockFace time={this.state.date.toLocaleTimeString()}></ClockFace>
    )
  }
}
