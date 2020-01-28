import * as React from "react";
import { usePosition } from 'use-position';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import { Point, Polygon, Circle } from 'ol/geom';
import { Vector } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import {Icon, Style, Text, Fill, Stroke} from 'ol/style';
import Feature from 'ol/Feature';
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';
import * as ol from 'ol';

import '../css/ol.css';
import '../css/geol.css';

// TODO:: Import KML

interface Props {
  longitude: number,
  latitude: number,
  zoom: number
};

interface State {
  center: number[]
  zoom: number
};

export const GenerateMap = (props) => {
  let { latitude, longitude, error } = usePosition(); // This will get user's current location
  if (props.longitude && props.latitude) {
    latitude = props.latitude
    longitude = props.longitude
  }

  return <Locate latitude={latitude} longitude={longitude} />
};

 class Locate extends React.Component<Props, State> {

  static defaultProps: Props = {
    longitude: 0,
    latitude: 0,
    zoom: 16
  }

  state: State = {
    center: this.getCenter(),
    zoom: this.props.zoom
  }

  getCenter() {
    return fromLonLat([this.props.longitude, this.props.latitude])
  }

  componentDidMount() {
    // this.initiateOpenLayers()
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props)
        this.setState({center: this.getCenter()})
    this.initiateOpenLayers()
  }

  initiateOpenLayers() {
    this.resetMap();
    console.log(this.state)
    const { center, zoom } = this.state;

    const circle = new Feature({
      geometry: new Circle(center, 1000),
    });

    let featuresLayer = new VectorLayer({
      source: new Vector({
        features:[
          this.generateUserIcon(),
          circle
        ],
      })
    });

    let streetLayer = new TileLayer({
      source: new OSM()
    })

    new Map({
      target: 'map',
      interactions: defaultInteractions().extend([
        new DragRotateAndZoom()
      ]),
      layers: [
        streetLayer,
        featuresLayer
      ],
      view: new View({
        center: center,
        zoom: zoom
      })
    });
  }


  generateUserIcon() {
    const { center } = this.state

    const userIcon = new Feature({
      geometry: new Point(center),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
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
    document.getElementById('map').innerHTML = ""
  }

  render() {
    return(
      <div id="map" className="map">
      </div>
    )
  }
}
