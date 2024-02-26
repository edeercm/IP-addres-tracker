import './App.css'
import './reset.css'
import styled from 'styled-components'
import bgdesktop from './assets/images/pattern-desktop.png'
import bgmobile from './assets/images/pattern-mobile.png'
import SearchInput from './components/SearchInput'
import AddresInfo from './components/AddresInfo'
import Map from './components/Map/Map'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
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
  return <>
    <section>
      <Background>
        <article className='d-flex flex-column align-items-center gap-2'>
          <h1 className='text-white fs-2'>IP Address Tracker</h1>
          <SearchInput />
        </article>
        <article className='d-flex justify-content-center'>
          <AddresInfo />
        </article>
      </Background>
      <Map />
    </section>
  </>
}

export default App
