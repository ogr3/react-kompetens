import React from "react"
import { Spinner } from "./Spinner"

// Higher Order Component
function withData(WrappedComponent) {
  return class withLoadedData extends React.Component {

    state = {
      data: undefined
    }

    componentDidMount = () => {
      setTimeout(() => this.setState({data: "Hello"}), 2000)
    }

    render() {
      if (!this.state.data) {
        return <Spinner />
      } else {
        return <WrappedComponent data={this.state.data}/>
      }
    }
  }
}

const Component = props => (
  <div>{props.data}</div>
)

export const ComponentWithData = withData(Component)