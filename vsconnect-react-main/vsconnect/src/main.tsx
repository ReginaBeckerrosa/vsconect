import React from 'react'
import ReactDOM from 'react-dom/client';
//componetes
import Home from "./pages/Home/index";
// import ListadeServico from "./pages/ListaDeServicos/index";

//estilizacao chamar o css
import "./index.css";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
