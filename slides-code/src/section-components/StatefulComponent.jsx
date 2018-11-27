import React from "react"

export class StatefulComponent extends React.Component {
  state = {
    name: "C.A.G"
  }

  updateName = () => {
    this.setState({ name: "C.A.G Contact" })
  }

  render() {
    return (
      <div onClick={this.updateName}>Hello {this.state.name}</div>
    )
  }
}