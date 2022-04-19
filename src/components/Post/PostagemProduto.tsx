import * as C from "../Table/style";
import * as Estilo from "../Header/style";

export function PostagemProduto(){
    return(
        <>
            <C.GrupoSeparacao>
                <h1>Produtos</h1>
                <Estilo.Botao>
                    Adicionar Produto
                </Estilo.Botao>
            </C.GrupoSeparacao>
        </>
    );
}