import * as React from "react";
import Map from './Map'
import Point from './Point'

export default class Development extends React.Component<any,any> {

  render() {
    return(
      <Map>
        <Point center useCurrentLocation></Point>
        <Point latitude={14.5910506} longitude={121.0598379}></Point>
      </Map>
    )
  }
}