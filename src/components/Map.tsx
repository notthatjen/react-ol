import * as React from "react";
import Location from './Location'
import { usePosition } from 'use-position';

import '../css/ol.css';
import '../css/geol.css';

// TODO:: Import KML

export const Map = (props) => {
  let { longitude, latitude, error } = usePosition();

  return(
    <Location defaultCenter={!error && [longitude, latitude]} />
  )
};
