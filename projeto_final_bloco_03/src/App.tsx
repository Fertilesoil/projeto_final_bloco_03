import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/ListaCategorias/ListaCategorias';
import FormCategoria from './components/categoria/FormCategoria/FormCategoria';
import DeletaCategoria from './components/categoria/DeletaCategoria/DeletaCategoria';


import './index.css'


function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/cadastroCategoria" element={<FormCategoria />} />
        <Route path="/editarCategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarCategoria/:id" element={<DeletaCategoria />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
