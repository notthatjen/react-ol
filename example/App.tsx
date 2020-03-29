import * as  React from 'react'
import Point from 'location-api'
import Map from 'location-api'

const App = (props: any) => {
    return(
      <Map zoom="12">1
        <Point center useCurrentLocation icon="UserMale" label="This is you"></Point>
        <Point latitude={14.5910506} longitude={121.0598379} icon="HandPointDown" label="Somewhere in the Philippines"></Point>
      </Map>
    )
}

export default App;