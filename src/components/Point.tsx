import * as React from "react";


interface Props {
  center:              boolean
  longitude:           number
  latitude:            number
  icon:                string
  useCurrentLocation:  boolean
}

class Point extends React.Component<Props> {

  static defaultProps: Props= {
    icon:               null,
    longitude:          0,
    latitude:           0,
    center:             false,
    useCurrentLocation: false
  }

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