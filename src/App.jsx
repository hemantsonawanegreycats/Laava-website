import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Advisory from './components/pages/Advisory'
import Insights from './components/pages/Insights'
import Disclaimer from './components/pages/Disclaimer'
import TermsOfUse from './components/pages/TermsOfUse'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import Mainhome from './components/pages/mainhome'
import CookiesPolicy from './components/pages/CookiesPolicy'

function App() {

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<RootLayout />}>
      
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={<Mainhome/>} />
        <Route path="/cookies" element={<CookiesPolicy/>} />

      </Route>
    </Routes>
    </>
  )
}

export default App;
