import React from "react"
import "./HelloWorld.css"

const HelloContainer = ({children}) => (
  <div className="hello-container">{children}</div>
)

export class HelloWorld extends React.Component {
  render() {
    return (
      <HelloContainer>Hello {this.props.name}!</HelloContainer>
    )
  }
}
