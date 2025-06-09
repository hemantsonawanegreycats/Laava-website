import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Advisory from './components/pages/Advisory'
import Insights from './components/pages/Insights'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<RootLayout />}>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/insights" element={<Insights />} />

      </Route>
    </Routes>
    </>
  )
}

export default App;
