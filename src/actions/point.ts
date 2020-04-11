// DefaultProps are located /src/components/Point.tsx

import { Icon, Style, Text, Fill, Stroke } from 'ol/style';
import * as geom from 'ol/geom';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import { getIcon } from '../images/image';
import Utils from '../utils';
import t from '../translations'

class Point {
  public points: any;
  public center: any;
  private currentLocation: any;

  constructor(props) {
    this.points = props.points;
    this.currentLocation = props.currentLocation;

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
        src: getIcon(icon)
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
    let center = point.currentLocation || fromLonLat([longitude, latitude]) //fromLonLat([longitude, latitude])

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
          props = { ...props, currentLocation: this.currentLocation }
          this.center = this.currentLocation
        } else {
          this.center = fromLonLat([props.longitude, props.latitude])
        }
      }
      parsedPoints.push(this.setPoint(props))
    })

    this.points = parsedPoints;
    if (!this.center) Utils.returnError(t('errors.noCenter'))
  }

}

export default Point;