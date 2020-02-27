import * as React from "react";

class Point extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default Point;