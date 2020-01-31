import * as React from "react";
import { Z_FIXED } from "zlib";


interface Props {
  content: any
  position: number[]
};

export default class MapOverlay extends React.Component<Props> {
  static defaultProps: Props = {
    content: null,
    position: [0,0],
  }

  handleCloseOverlay() {
    console.log('hello')
  }

  popupStyles() {
    if (this.props.position == null) return null
    return {
      left: this.props.position[0],
      top: this.props.position[1]
    }
  }

  render() {

    return(
      <div id="popup" className="ol-popup" style={this.popupStyles()}>
        <a href="#" id="popup-closer" className="ol-popup-closer" onClick={this.handleCloseOverlay}></a>
        <div id="popup-content">
          You clicked in position {this.props.position}
          {/* {this.props.content} */}
        </div>
      </div>
    )
  }
}
