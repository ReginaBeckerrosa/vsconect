import React from 'react'
import ReactDOM from 'react-dom/client';
//componetes

import Home from "./pages/Home/index";
import ListadeServicos from './pages/ListaDeServicos';
import Footer from './components/Footer';
import Header from './components/Header';


// import ListadeServico from "./pages/ListaDeServicos/index";

//estilizacao chamar o css
import "./index.css";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home />
    {/* <ListadeServicos/> */}
    <Footer/>
  </React.StrictMode>
)
