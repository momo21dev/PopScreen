
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import SingleMovie from './components/SingleMovie'

function App() {
  //const [movies, setMovies] = useState([])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
