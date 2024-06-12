/* eslint-disable no-unused-vars */
import { Content } from './components/content/content'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { DarkMode } from './components/darkMode/darkMode'
import { useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? '' : 'dark bg-darkGray'}>
      <Header />
      <Content />
      <Footer />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App