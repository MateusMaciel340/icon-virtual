import * as C from "./style";
import { Link } from "react-router-dom";
import { opcoes } from "../../data/items";
import { useState } from "react";

function Header(){

    const [opcao, setOpcao] = useState(opcoes);

    const Sair = (event: any) =>{
        window.localStorage.clear();

        setTimeout(function(){
            window.location.href = "/login";
        },1000)
    }

    console.log(window.location.pathname);

    return(
        <C.Container>
            <C.Coluna>
                <C.Titulo>
                    <Link to="/">
                        Icone Virtual
                    </Link>
                </C.Titulo>
            </C.Coluna>

            {window.location.pathname !== "/login" ? (
            <C.Coluna>
                 <C.Botao
                     onClick={Sair}>Sair</C.Botao>
             </C.Coluna>
            ): ""}
        </C.Container>
    );
}

export default Header;