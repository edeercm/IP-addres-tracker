import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  margin: 2.75rem 0 -4.25rem;
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
  }

  @media (max-width: 575.97px) {
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
  }

  @media (max-width: 575.97px) {
  }
`

const AddresInfo = () => {
  return <>
    <Card>
      <div className="container">
        <div className="row">
          <div className="col-3 border-end border-2">
            <Label>Ip addres</Label>
            <Info>123.123.123.123</Info>
          </div>
          <div className="col-3 border-end border-2">
            <Label>Location</Label>
            <Info>Brooklyn, Ny 10001</Info>
          </div>
          <div className="col-3 border-end border-2">
            <Label>Timezone</Label>
            <Info>UTC -05:00</Info>
          </div>
          <div className="col-3">
            <Label>Isp</Label>
            <Info>Space X</Info>
          </div>
        </div>
      </div>
    </Card>
  </>
}

export default AddresInfo