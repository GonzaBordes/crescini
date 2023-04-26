import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import SmoothScroll from './hooks/SmoothScroll'

function App() {

  SmoothScroll()

  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App
