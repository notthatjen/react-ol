import { Icon, Style, Text, Fill, Stroke } from 'ol/style';
import * as geom from 'ol/geom';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';


interface PointInterface {
  longitude:           number
  latitude:            number
  center:              boolean
  defaultCenter:       number[]
}

class Point {
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

export default Point;