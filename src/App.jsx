import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchMovies from './componenents/SearchMovies'

export default function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <h1>Movie Search App</h1>
      <SearchMovies/>
    </div>

    //api key = 87d4b2a3008e4db585a5ebc1b8975625
    //https://api.themoviedb.org/3/search/movie?query=transformers&api_key=87d4b2a3008e4db585a5ebc1b8975625&include_adult=false&language=en-US&page=1
  )
}