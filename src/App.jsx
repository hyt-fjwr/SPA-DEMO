import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Photo from './pages/Photo'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div className='App'></div>
      <Header ></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Photo" element={<Photo />} />
      </Routes>
    </Router>
  )
}

export default App
