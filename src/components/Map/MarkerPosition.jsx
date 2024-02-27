import React, { useEffect } from 'react'
import Icon from './Icon'
import { Marker, Popup, useMap } from 'react-leaflet'

const MarkerPosition = ({ addressData }) => {

  const position = [addressData.location.lat, addressData.location.lng];
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    })
  }, [map, position])

  return <>
    <Marker icon={Icon} position={position}>
      <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
    </Marker>
  </>
}

export default MarkerPosition