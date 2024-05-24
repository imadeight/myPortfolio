import { useState, useEffect } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Header from './components/Header'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  useEffect(() => {
    document.title= 'Portfolio'
  }, [])

  return (
      <>
        <Sidenav />
        <Header />
        <Main />
        <Work />
        <Contact />
        <Footer />
      </>
  )
}

export default App
