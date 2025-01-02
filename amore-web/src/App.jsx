
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Register from './pages/register/register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/register' element={<Register />}></Route>
    </Routes>



  )
}

export default App
