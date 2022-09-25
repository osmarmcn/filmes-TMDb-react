import { Outlet } from "react-router-dom";

import './App.css'

import Menu from "./componentes/Menu"

function App() {
  
  return (
    <div className="app-container">
      <Menu/>
      
      <Outlet/>
      
    </div>
  )
}

export default App

/*
as rotas " pai "(que englobam outras rotas) também irão renderizar o conteúdo das suas " filhas " por meio de um rota de reação , chamado Outlet .
As opções da rota que estão sendo acessadas, o componente Outlet irá renderizar ou o componente IndidualInvoice ou componente SentInvoices .
      
*/
