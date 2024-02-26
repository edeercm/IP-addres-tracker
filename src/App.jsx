import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import bgdesktop from './assets/images/pattern-desktop.png'
import bgmobile from './assets/images/pattern-mobile.png'
import SearchInput from './components/SearchInput'
import AddresInfo from './components/AddresInfo'
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
  }
`

function App() {

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=192.212.174.101`);
        const data = await res.json();
        setAddress(data);
      };

      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []);
  

  return <>
    <section className='position-relative'>
      <Background>
        <div className='d-flex flex-column align-items-center gap-2'>
          <h1 className='text-white fs-2'>IP Address Tracker</h1>
          <SearchInput />
        </div>
      </Background>
      {address &&
        <>
          <div className='d-flex justify-content-center'>
            <AddresInfo addressData={address} />
          </div>
          <Map />
        </>
      }
    </section>
  </>
}

export default App
