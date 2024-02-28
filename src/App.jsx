import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import bgdesktop from './assets/images/pattern-desktop.png'
import bgmobile from './assets/images/pattern-mobile.png'
import SearchInput from './components/SearchInput'
import AddressInfo from './components/AddresInfo'
import Map from './components/Map/Map'
import './App.css'
import './reset.css'

const Background = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem 0 0;
    width: 100%;
    height: 37.5vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${bgdesktop});

    @media (max-width: 991.98px) {
      background-image: url(${bgmobile});
      padding: 5rem 0 0;
    }
  `

function App() {

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("")
  const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=8.8.8.8`);
        const data = await res.json();
        setAddress(data);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    getInitialData();
  }, []);

  const getEnteredData = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${checkIpAddress.test(ipAddress)
        ? `ipAddress=${ipAddress}`
        : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      }`
    )
    const data = await res.json()
    setAddress(data)
  }

  return <>
    <section className='position-relative'>
      <Background>
        <div className='d-flex flex-column align-items-center gap-2'>
          <h1 className='text-white fs-2'>IP Address Tracker</h1>
          <SearchInput ipAddress={ipAddress} setIpAddress={setIpAddress} getEnteredData={getEnteredData}/>
        </div>
      </Background>
      {address &&
        <>
          <div className='d-flex justify-content-center'>
            <AddressInfo addressData={address} />
          </div>
          <Map addressData={address} />
        </>
      }
    </section>
  </>
}

export default App
