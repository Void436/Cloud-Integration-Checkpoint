import React from 'react'
import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map.jsx'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'


const location = {
  address: 'Avenue Yasser Arafet, Immeuble Chaima 1er étage Sousse Sahloul، 4054',
  lat: 35.83949577793637,
  lng: 10.596855339346273,
}

const App = () => (
  <div className="App">
    <IntroSection />
    <ContactSection />
    <MapSection location={location} zoomLevel={17} center/> {location}
    <DisclaimerSection />
    <FooterSection />
  </div>
)

export default App