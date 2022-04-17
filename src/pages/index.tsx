import { opcoes } from "../data/items";
import { useState } from "react";
import * as C from "../components/General/style";
import { Link } from "react-router-dom";

function Home(){

    const [opcao, setOpcao] = useState(opcoes);

    return(
        <C.Container>
            {opcao.map((dados, index) => (
                <C.Card key={index}>
                    <C.CardImagem src={dados.imagem}/>
                    <C.TituloImagem>{dados.titulo}</C.TituloImagem>
                    <C.CardBotao>
                        <Link to={{ pathname: `${dados.link}/${dados.tipo}/${dados.id}` }}>
                            Acessar
                        </Link>
                    </C.CardBotao>
                </C.Card>
            ))}
        </C.Container>
    );
}

export default Home;