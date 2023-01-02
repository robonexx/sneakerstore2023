import { useState } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Logo from './components/ui/buttons/logo/Logo'

// styles
import './App.scss'
import Nav from './components/ui/nav/Nav'

function App() {
  const [count, setCount] = useState(0)

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
     {/*  <div className="card">
      <button onClick={() => setCount((count) => count - 1)}>
          Remove -
        </button>
        <div>
          {count}
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
           Add +
        </button>
        </div> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
