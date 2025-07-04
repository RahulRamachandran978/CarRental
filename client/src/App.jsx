import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/Home'
import Navabar from './components/Navabar'
import CarDetail from './pages/CarDetail'

function App() {

  return (
    <Router>
      {/* <Navabar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/car-detail' element={<CarDetail />} />
      </Routes>
    </Router>
  )
}

export default App
