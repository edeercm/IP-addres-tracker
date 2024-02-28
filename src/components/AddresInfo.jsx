import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: absolute;
  top: 27.5%;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 75%;
  height: 20svh;
  padding: 0 1.5rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0.75rem 1rem hsl(0, 0%, 59%);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 90%;
    height: 15svh;
  }

  @media (max-width: 575.97px) {
    width: 90%;
    height: 40svh;
    padding: 0;
  }
`

const Label = styled.h5`
  color: hsl(0, 0%, 59%);
  font-weight: bold;
  font-size: 0.825rem;
  text-transform: uppercase; 

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Info = styled.p`
  color: hsl(0, 0%, 17%);
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1.125rem;
  }

  @media (max-width: 575.97px) {
  }
`

const AddresInfo = ({ addressData }) => {
  return <>
    <Card>
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-12 col-md-3 mt-3 mt-md-0 border-none border-0 border-md-end border-md-2">
            <Label>Ip addres</Label>
            <Info>{addressData.ip}</Info>
          </div>
          <div className="col-12 col-md-3 border-none border-0 border-md-end border-md-2">
            <Label>Location</Label>
            <Info>{addressData.location.city}, {addressData.location.region}</Info>
          </div>
          <div className="col-12 col-md-3 border-none border-0 border-md-end border-md-2">
            <Label>Timezone</Label>
            <Info>{addressData.location.timezone}</Info>
          </div>
          <div className="col-12 col-md-3">
            <Label>Isp</Label>
            <Info>{addressData.isp}</Info>
          </div>
        </div>
      </div>
    </Card>
  </>
}

export default AddresInfo