// DefaultProps are located /src/components/Point.tsx

import { Icon, Style, Text, Fill, Stroke } from 'ol/style';
import * as geom from 'ol/geom';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import { HandPointDown } from '../images/image';


class Point {
  public points: any;
  public center: any;
  private defaultLocation: any;

  constructor(props) {
    this.points = props.points;
    this.defaultLocation = props.defaultLocation;

    this.handlePointElements()
  }

  private sanitizeLabel(label) {
    if (label.length > 20) return label.slice(0, 20) + "..."
    return label
  }


  private setIcon(point) {
    let { icon, label } = point
    label = this.sanitizeLabel(label)

    const feature = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: HandPointDown
      }),
      text: new Text({
        text: label,
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
    return feature
  }

  setPoint(point) {
    let { longitude, latitude } = point
    let center = fromLonLat([longitude, latitude])
    if (center) {
      const feature = new Feature({
        geometry: new geom.Point(center),
        name: 'User',
      });

      feature.setStyle(this.setIcon(point));
      return feature
    }
  }


  handlePointElements() {
    let points = this.points
    let parsedPoints = [];

    // Reverse to re-adjust the z-index. first element will have the highest z-index when reversed :P
    points.reverse().map(point => {
      let props = point.props;
      if (point.props.center) {
        if (point.props.useCurrentLocation) {
          props = { ...props, ...this.defaultLocation }
        }

        this.center = fromLonLat([props.longitude, props.latitude])
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