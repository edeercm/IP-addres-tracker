import React from 'react'
import MarkerPosition from './MarkerPosition'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

const Map = ({ addressData }) => {
  return <>
    <MapContainer
      center={[addressData.location.lat, addressData.location.lng]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '62.5vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPosition addressData={addressData}/>
    </MapContainer>
  </>
}

export default Map