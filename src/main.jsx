import{BrowserRouter,Routes,Route} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./App"
import Home from "./paginas/Home"
import Search from "./paginas/Search"
import Movie from "./paginas/Movie"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="movie/:id" element={<Movie/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
