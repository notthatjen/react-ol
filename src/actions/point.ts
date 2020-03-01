import { Icon, Style, Text, Fill, Stroke } from 'ol/style';
import * as geom from 'ol/geom';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';


class Point {
  public points: any;
  public center: any;
  private defaultLocation: any;

  constructor(props) {
    this.points = props.points;
    this.defaultLocation = props.defaultLocation;

    this.handlePointElements()
  }


  private setIcon(name) {
    // TODO: var name will identify the icon image
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
    return icon
  }

  setPoint(point) {
    let { icon, longitude, latitude  } = point
    let center = fromLonLat([longitude, latitude])
    console.log(point)
    if (center) {
      const point = new Feature({
        geometry: new geom.Point(center),
        name: 'User',
      });

      point.setStyle(this.setIcon(icon));
      return point
    }
  }


  handlePointElements() {
    let points = this.points
    let parsedPoints = [];
    points.map( point => {
      let props = point.props;
      if (point.props.center) {
        if (point.props.useCurrentLocation) {
          props = {...props, ...this.defaultLocation}
        }

        this.center = fromLonLat([ props.longitude, props.latitude ])
      }
      parsedPoints.push(this.setPoint(props))
    })

    this.points = parsedPoints;

    if (!this.center) throw new Error(
      '404 Not Found: Center point is required e.g. <Point center />'
    )
  }

}

export default Point;