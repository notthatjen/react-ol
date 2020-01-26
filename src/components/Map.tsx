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

export class Map extends React.Component<any, any> {


  constructor(props) {
    super(props);

    this.state = {
      center: [63.4281195,-20.2885533],
      zoom: 13
    };
    console.log(ol)
  }

  componentDidMount() {
    let coord = [ 14.5964957,120.9445401 ].reverse();
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
        zoom: 13
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