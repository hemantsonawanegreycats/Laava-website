import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Advisory from './components/pages/Advisory'
import Insights from './components/pages/Insights'

function App() {

  return (
    <Routes>
      <Route element={<RootLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/insights" element={<Insights />} />

      </Route>
    </Routes>
  )
}

export default App
