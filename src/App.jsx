import { useState } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Logo from './components/ui/logo/Logo'
import Nav from './components/ui/nav/Nav'

// styles
import './App.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Nav>
      <li>
          <a href="/">New</a>
        </li>
        <li>
          <a href="/">Latest</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
      </Nav>
      <Logo />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
