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

// const Map: React.FunctionComponent = (props: Props) => {
//   let { longitude, latitude, error } = usePosition();

//   return(
//     <Location defaultCenter={!error && [longitude, latitude]}>
//       {props.children}
//     </Location>
//   )
// };


class Map extends React.Component<Props> {

  render() {
    return <Location {...this.props} />
  }
}


function usePositionWrapper(Component) {
  return function Wrapped(props) {
    let { longitude, latitude, error } = usePosition();
    return <Component {...props} defaultCenter={!error && [longitude, latitude]} />
  }
}

export default usePositionWrapper(Map);