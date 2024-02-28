import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../assets/images/icon-arrow.svg'

const Input = styled.input`
  width: 25rem;
  height: 3rem;
  border-radius: 0.625rem 0 0 0.625rem;

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 575.97px) {
    width: 17.5rem;
  }
`

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0 0.625rem 0.625rem 0;
  background-color: #000000;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const Arrow = styled.img`
  width: auto;
`

const SearchInput = ({ ipAddress, setIpAddress, getEnteredData }) => {

  const [isValidInput, setIsValidInput] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidInput) {
      getEnteredData();
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setIpAddress(value);
    if (checkIpAddress.test(value) || checkDomain.test(value)) {
      setIsValidInput(true);
      setErrorMessage('');
    } else {
      setIsValidInput(false);
      setErrorMessage('Invalid IP address or domain');
    }
  };

  return (
    <>
      <form autoComplete='off' className='d-flex flex-row' onSubmit={handleSubmit}>
        <div className='d-flex flex-column'>
          <Input
            type="tex"
            name='ipaddress'
            id='ipaddress'
            placeholder='Search for any IP addres or domain'
            className={`form-control ${!isValidInput ? 'is-invalid' : ''}`}
            value={ipAddress}
            onChange={handleInputChange}
          />
          {!isValidInput && <div className="invalid-feedback">{errorMessage}</div>}
        </div>
        <SubmitBtn type="submit" disabled={!isValidInput}>
          <Arrow src={arrow} alt="arrow" />
        </SubmitBtn>
      </form>
    </>
  );
}

export default SearchInput