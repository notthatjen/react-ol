import * as React from "react";

interface Props {
  center:              boolean
  longitude:           number
  latitude:            number
  icon:                string
  useCurrentLocation:  boolean
  label:               string
  onClick:             void
}

class Point extends React.Component<Props> {

  static defaultProps: Props = {
    icon:               'Default',
    longitude:          0,
    latitude:           0,
    center:             false,
    useCurrentLocation: false,
    label:              "",
    onClick:            null
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