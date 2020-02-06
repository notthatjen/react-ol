import * as React from "react";
import Location from './Location'
import { usePosition } from 'use-position';

import '../css/ol.css';
import '../css/geol.css';

interface Props {
  zoom: number
  center: number[]
  children: React.ReactNode
}

const Map: React.FunctionComponent = (props: Props) => {
  let { longitude, latitude, error } = usePosition();

  return(
    <Location defaultCenter={!error && [longitude, latitude]}>
      {props.children}
    </Location>
  )
};

export default Map;