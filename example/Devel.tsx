import * as  React from 'react'
import { Map, Point } from '../src/index'


export default class Devel extends React.Component<any> {

    render() {
        return (
            <Map zoom="12">
                <Point center useCurrentLocation icon="UserMale" label="This is you"></Point>
                <Point latitude={14.5910506} longitude={121.0598379} icon="HandPointDown" label="Somewhere in the Philippines"></Point>
            </Map>
        )
    }
}
