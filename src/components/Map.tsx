import * as React from "react";
import { usePosition } from 'use-position';
import * as actions from '../actions';
import * as ol from 'ol';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { Vector } from 'ol/source';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import Utils from '../utils'


import '../css/ol.css';
import '../css/geol.css';

function usePositionWrapper(Component) {
  return function Wrapped(props) {
    let { longitude, latitude, error } = usePosition();
    return <Component {...props} defaultLocation={!error && { longitude, latitude }} />
  }
}

interface Props {
  zoom: number
  children: React.ReactNode
  defaultLocation: any
}

class Map extends React.Component<Props> {

  map: ol.Map;
  points: any[] = [];
  center: any[] = [0, 0];
  zoom: number = this.props.zoom || 13;

  componentDidMount() {

    this.initiateMap()
  }

  componentDidUpdate() {
    this.parseChildren();
    this.initiateMap()
  }

  initiateMap() {
    this.resetMap();
    let streetLayer = new TileLayer({
      source: new OSM()
    })

    let vectorsAndIcons = new VectorLayer({
      source: new Vector({
        features: [
          ...this.points
        ]
      })
    })

    this.map = new ol.Map({
      target: 'l-react-map',
      interactions: defaultInteractions().extend([
        new DragRotateAndZoom()
      ]),
      layers: [
        streetLayer,
        vectorsAndIcons
      ],
      view: new ol.View({
        center: this.center,
        zoom: this.zoom
      })
    });
  }

  resetMap() {
    document.getElementById('l-react-map').innerHTML = ""
  }

  parseChildren() {
    // Todo: Transfer this to utils

    let children: any = Utils.findAllChild(this.props.children)
    let parsedPoints = new actions.Point({ points: children.points, defaultLocation: this.props.defaultLocation })


    this.center = parsedPoints.center
    this.points = parsedPoints.points
  }

  render() {
    return <div id="l-react-map"></div>
  }
}




export default usePositionWrapper(Map);