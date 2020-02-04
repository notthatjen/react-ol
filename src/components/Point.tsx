import { Icon, Style, Text, Fill, Stroke } from 'ol/style';
import { Polygon, Circle } from 'ol/geom';
import * as geom from 'ol/geom';
import Feature from 'ol/Feature';
import { fromLonLat, toLonLat } from 'ol/proj';


    // const circle = new Feature({
    //   geometry: new Circle(center, 1000),
    // });

    // let vectorsAndIcons = new VectorLayer({
    //   source: new Vector({
    //     features:[
    //       this.generateUserIcon(),
    //       circle
    //     ],
    //   })
    // });

// function generateUserIcon(props) {
//   const { center } = props.center

//   const userIcon = new Feature({
//     geometry: new ol.point(center),
//     name: 'UserIcon',
//   });

//   const userIconStyle = new Style({
//     image: new Icon({
//       anchor: [0.5, 46],
//       anchorXUnits: 'fraction',
//       anchorYUnits: 'pixels',
//       src: '/src/images/user-icon.png'
//     }),
//     text: new Text({
//       text: "This is you",
//       offsetY: -60,
//       font: 'bold 14px sans-serif',
//       padding: [5, 5, 5, 5],
//       backgroundStroke: new Stroke({
//         lineJoin: 'round',
//       }),
//       fill: new Fill({
//           color: '#000'
//       }),
//       backgroundFill: new Fill({
//         color: '#FA9B00'
//       })
//     })
//   });

//   userIcon.setStyle(userIconStyle);
//   return userIcon
// }

interface PointInterface {
  longitude:           number
  latitude:            number
  center:              boolean
  defaultCenter:       number[]
}

export default class Point {
  private props: PointInterface
  constructor(props) {

    this.props = props
    return this.setPoint()
  }

  private coords() {
    let { defaultCenter, longitude, latitude } = this.props
    let lonLat = [ longitude, latitude ]
    if (defaultCenter) return defaultCenter
    return fromLonLat(lonLat)
  }

  setPoint() {
    let center = this.coords();
    console.log(center)
    if (center) {
      const point = new Feature({
        geometry: new geom.Point(center),
        name: 'UserIcon',
      });

      const icon = new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: '/src/images/user-icon.png'
        }),
        text: new Text({
          text: "This is you",
          offsetY: -60,
          font: 'bold 14px sans-serif',
          padding: [5, 5, 5, 5],
          backgroundStroke: new Stroke({
            lineJoin: 'round',
          }),
          fill: new Fill({
              color: '#000'
          }),
          backgroundFill: new Fill({
            color: '#FA9B00'
          })
        })
      });

      point.setStyle(icon);
      return point
    }
  }
}


  // state = {
  //   point: this.getCenter(),
  //   zoom: this.props.zoom,
    // showOverlay: false,
    // overlayPos: null,
    // focus: null,
    // width: 700,
    // height: 500
  // }

  // componentDidUpdate(previousProps, previousState) {
  //   if (previousProps !== this.props)
  //       this.setState({
  //         center: this.getCenter(),
  //         zoom: this.props.zoom,
  //       })
  // }


  // getCenter() {
  //   let lonLat = this.props.currentLocation ? this.props.defaultCenter : [this.props.longitude, this.props.latitude]
  //   return fromLonLat(lonLat)
  // }

  // render() {
  //   console.log(this.state.point)
  //   return("hi")
  // }