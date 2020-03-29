import * as React from "react";
// import Map from './Map'
// import Point from './Point'
import { Map, Point } from 'location-api'

export default class Development extends React.Component<any, any> {

  render() {
    return (
      <Map zoom="12">1
        <Point center useCurrentLocation icon="UserMale" label="This is you"></Point>
        <Point latitude={14.5910506} longitude={121.0598379} icon="HandPointDown" label="Somewhere in the Philippines"></Point>
      </Map>
    )
  }
}