import React from 'react'
import Icon from './Icon'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return <>
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '62.5vh', width: '100%'}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={Icon} position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </>
}

export default Map