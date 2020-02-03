import * as React from "react";
import Location from './Location'

import '../css/ol.css';
import '../css/geol.css';

// TODO:: Import KML

export const Map = (props) => {


  return(
    <Location>
      {props.children}
    </Location>
  )
};
