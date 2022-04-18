import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header e Footer
import Header from "./components/Header/Header";


// Pages
import Home from "./pages";
import Selecionado from "./pages/selecionado";
import Login from "./pages/login";

// Autenticação - Routers
import RotaPrivada from "./services/autenticacao/autenticacao";
import RotaPrivadaLogin from "./services/autenticacao/protecao-login";

function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" 
                    element={
                        <RotaPrivada><Home/></RotaPrivada>}/>

                <Route path="/selecionado/:tipo/:id" 
                    element={<RotaPrivada><Selecionado/></RotaPrivada>}/>

                <Route path="/login" 
                    element={<RotaPrivadaLogin><Login/></RotaPrivadaLogin>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;