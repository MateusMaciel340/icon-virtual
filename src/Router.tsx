import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header e Footer
import Header from "./components/Header/Header";

import Home from "./pages";
import Selecionado from "./pages/selecionado";


function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/selecionado/:tipo/:id" element={<Selecionado/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;