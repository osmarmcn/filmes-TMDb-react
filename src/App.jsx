import { Outlet } from "react-router-dom";

import './App.css'

import Menu from "./componentes/Menu"

function App() {
  
  return (
    <div className="App">
      <Menu/>
      <h2>Filmes TMDb</h2>
      <Outlet/>
      
    </div>
  )
}

export default App
