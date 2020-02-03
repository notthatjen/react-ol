import * as React from "react";
import { Icon, Style, Text, Fill, Stroke } from 'ol/style';
import { Polygon, Circle } from 'ol/geom';
import * as ol from 'ol';
import Feature from 'ol/Feature';
import { fromLonLat, toLonLat } from 'ol/proj';
import { usePosition } from 'use-position';

function generateUserIcon(props) {
  const { center } = props.center

  const userIcon = new Feature({
    geometry: new ol.point(center),
    name: 'UserIcon',
  });

  const userIconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/src/images/user-icon.png'
    }),
    text: new Text({
      text: "This is you",
      offsetY: -60,
      font: 'bold 14px sans-serif',
      padding: [5, 5, 5, 5],
      backgroundStroke: new Stroke({
        lineJoin: 'round',
      }),
      fill: new Fill({
          color: '#000'
      }),
      backgroundFill: new Fill({
        color: '#FA9B00'
      })
    })
  });

  userIcon.setStyle(userIconStyle);
  return userIcon
}

export const Point = (props) => {

  return <PointConfig  {...usePosition()} {...props} />
}

interface State {
  center: number[]
  zoom: number
  // showOverlay: boolean
  // overlayPos: number[]
  // focus: number[]
  // width: number
  // height: number
};

class PointConfig extends React.Component<any,State> {

  state: State = {
    center: this.getCenter(),
    zoom: this.props.zoom,
    // showOverlay: false,
    // overlayPos: null,
    // focus: null,
    // width: 700,
    // height: 500
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props)
        this.setState({
          center: this.getCenter(),
          zoom: this.props.zoom,
        })
  }


  getCenter() {
    return fromLonLat([this.props.longitude, this.props.latitude])
  }

  render() {
    console.log(this.state.center)
    return("hi")
  }
}