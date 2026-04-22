import { LanguageProvider } from './Contexts/LanguageContext.jsx';
import {Header} from './Header/Header.jsx'
import {Main} from './Main/Main.jsx'
import {Footer} from './Footer/Footer.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <LanguageProvider>
        <Header  />
        <Main  />
        <Footer />
      </LanguageProvider>
      
    </>
  )
}

export default App
