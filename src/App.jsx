/* eslint-disable no-unused-vars */
import Content from './components/content/content'
import { Footer } from './components/footer/footer'
import Header from './components/header/header'
import DarkMode from './components/darkMode/darkMode'
import Translate from './translations/translate'
import { setDefaultLanguage, setDefaultTranslations } from 'react-multi-lang'
import en from './translations/en.json'
import fa from './translations/fa.json'

setDefaultLanguage('en')
setDefaultTranslations({ en, fa })


function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <DarkMode />
      <Translate />
    </div>
  )
}

export default App