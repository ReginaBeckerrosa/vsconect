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

//rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter> { /*indica que a aplicação terá rotas*/}
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='lista de servicos' element={<ListadeServicos />} />

      </Routes>
       <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)
