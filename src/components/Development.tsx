import * as React from "react";
import Map from './Map'
import Point from './Point'

export default class Development extends React.Component<any,any> {

  render() {
    return(
      <Map>
        <Point lat={123}></Point>
        <Point lat={321}></Point>
      </Map>
    )
  }
}