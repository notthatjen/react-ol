import * as React from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import { Vector } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { usePosition } from 'use-position';

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
  let { latitude, longitude, error } = usePosition();
  // if (props.longitude && props.latitude) {
  //   latitude = props.latitude
  //   longitude = props.longitude
  // }
  console.log(latitude, longitude, "ASD")
  // React.useEffect(() => {
  //   if (latitude && longitude && !error) {
  //         TODO: Do something here?
  //   }
  // }, []);

  return <Locate latitude={latitude} longitude={longitude} />
};

 class Locate extends React.Component<Props, State> {

  static defaultProps: Props = {
    longitude: 0,
    latitude: 0,
    zoom: 16
  }

  state: State = {
    center: [this.props.latitude, this.props.longitude],
    zoom: this.props.zoom
  }

  componentDidMount() {
    this.initiateOpenLayers()
  }

  componentDidUpdate() {
    this.initiateOpenLayers()
  }

  initiateOpenLayers() {
    this.resetMap();
    console.log(this.props)
    let coord = [ this.props.longitude, this.props.latitude ];
    let zoom = this.props.zoom;
    let center = fromLonLat(coord);
    console.log(center)
    let featuresLayer = new VectorLayer({
      source: new Vector({
        features:[],
      })
    });

    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        featuresLayer
      ],
      view: new View({
        center: center,
        zoom: zoom
      })
    });
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
