import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const api = 'https://api.themoviedb.org/3/movie/popular?api_key=e4df677c740d3bb623f61c30a5ebff09&page=400'
    const res = await fetch(api)
    const json = await res.json()
    setMovies(json.results)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {movies.map(m => (
        <div key={m.id} style={{ width: '200px', textAlign: 'center' }}>
          <img
            src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
            alt={m.title}
            style={{ width: '100%', borderRadius: '10px' }}
          />
          <h3 style={{ color: 'black' }}>{m.original_title}</h3>
        </div>
      ))}
    </div>
  )
}

export default App
