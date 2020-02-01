import * as React from "react";
import '../css/animate.css';

interface Props {
  content: any
  position: number[]
  hidden: boolean
  handleClose: React.MouseEventHandler<HTMLElement>
};

export default class MapOverlay extends React.Component<Props> {
  static defaultProps: Props = {
    content: null,
    position: [0,0],
    hidden: true,
    handleClose: null
  }

  popupStyles() {
    if (this.props.hidden == true || this.props.position == null) return { display: "none" }
    return {
      left: this.props.position[0],
      top: this.props.position[1],
    }
  }

  render() {
    return(
      <div id="popup" className="ol-popup fadeIn" style={this.popupStyles()}>
        <a href="#" id="popup-closer" className="ol-popup-closer" onClick={this.props.handleClose}></a>
        <div id="popup-content">
          You clicked in position {this.props.position}
          {/* {this.props.content} */}
        </div>
      </div>
    )
  }
}
