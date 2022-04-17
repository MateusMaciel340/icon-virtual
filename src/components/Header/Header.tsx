import * as C from "./style";
import { Link } from "react-router-dom";
import { opcoes } from "../../data/items";
import { useState } from "react";

function Header(){

    const [opcao, setOpcao] = useState(opcoes);

    return(
        <C.Container>
            <C.Coluna>
                <C.Titulo>
                    <Link to="/">
                        Icone Virtual
                    </Link>
                </C.Titulo>
            </C.Coluna>
        </C.Container>
    );
}

export default Header;