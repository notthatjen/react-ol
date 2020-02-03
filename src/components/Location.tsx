import * as React from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import { Point, Polygon, Circle } from 'ol/geom';
import { Vector } from 'ol/source';
import { fromLonLat, toLonLat } from 'ol/proj';
import { Icon, Style, Text, Fill, Stroke } from 'ol/style';
import Feature from 'ol/Feature';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';

import MapOverlay from './MapOverlay'
interface Props {
  longitude: number,
  latitude: number,
  zoom: number
};

interface State {
  center: number[]
  zoom: number
  showOverlay: boolean
  overlayPos: number[]
  focus: number[]
  width: number
  height: number
};

let map = null;
export default class Location extends React.Component<Props, State> {

  static defaultProps: Props = {
    longitude: 0,
    latitude: 0,
    zoom: 16
  }

  state: State = {
    center: this.getCenter(),
    zoom: this.props.zoom,
    showOverlay: false,
    overlayPos: null,
    focus: null,
    width: 700,
    height: 500
  }

  getCenter() {
    return fromLonLat([this.props.longitude, this.props.latitude])
  }

  componentDidMount() {
    console.log("asd")
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props)
        this.setState({
          center: this.getCenter(),
          zoom: this.props.zoom,
        })
    this.initiateOpenLayers()
  }

  initiateOpenLayers() {
    this.resetMap();
    const { center, zoom, focus } = this.state;

    // const circle = new Feature({
    //   geometry: new Circle(center, 1000),
    // });

    // let vectorsAndIcons = new VectorLayer({
    //   source: new Vector({
    //     features:[
    //       this.generateUserIcon(),
    //       circle
    //     ],
    //   })
    // });

    let streetLayer = new TileLayer({
      source: new OSM()
    })

    map = new Map({
      target: 'l-api-map',
      interactions: defaultInteractions().extend([
        new DragRotateAndZoom()
      ]),
      layers: [
        streetLayer,
        // vectorsAndIcons
      ],
      view: new View({
        center: focus || center,
        zoom: zoom
      })
    });

    map.on('singleclick', this.handleMapClick.bind(this))

  }

  handleMapClick(e) {
    let coord = e.coordinate;
    let iconFeatureA = map.getFeaturesAtPixel(e.pixel);
    const { width, height } = this.state
    console.log(e)

    this.handleOverlayClose();
    this.setState({
      showOverlay: true,
      overlayPos:  [width/2 + 100, height - (height - 30)],
      focus: coord
    })
  }

  handleOverlayClose() {
    this.setState({
      showOverlay: false
    })
  }

  generateUserIcon() {
    const { center } = this.state

    const userIcon = new Feature({
      geometry: new Point(center),
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

  resetMap() {
    document.getElementById('l-api-map').innerHTML = ""
  }

  mapStyles() {

    return {
      height: this.state.height,
      width: this.state.width
    }
  }

  render() {
    return(
      <React.Fragment>
        <div id="l-api-map" className="l-api-map" style={this.mapStyles()}>
        </div>
        <MapOverlay content="asdasd" hidden={!this.state.showOverlay} position={this.state.overlayPos} handleClose={this.handleOverlayClose.bind(this)}></MapOverlay>
        {this.props.children}
      </React.Fragment>
    )
  }
}
