import * as React from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import {Vector} from 'ol/source';
import {fromLonLat} from 'ol/proj';

import * as ol from 'ol';

import '../css/ol.css';
import '../css/geol.css';

// TODO:: Import KML

interface Props {
  lon: number,
  lat: number,
  zoom: number
};

interface State {
  center: number[]
  zoom: number
};

export class GenerateMap extends React.Component<Props, State> {

  static defaultProps: Props = {
    lon: 0,
    lat: 0,
    zoom: 13
  }

  state: State = {
    center: [this.props.lon, this.props.lat],
    zoom: this.props.zoom
  }


  componentDidMount() {
    let coord = this.state.center.reverse();
    let zoom = this.state.zoom;
    let center = fromLonLat(coord);
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


  render() {
    return(
      <div id="map" className="map">
      </div>
    )
  }
}
