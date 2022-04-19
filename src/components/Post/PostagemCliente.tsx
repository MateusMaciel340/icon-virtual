import * as C from "../Table/style";
import * as Estilo from "../Header/style";

export function PostagemCliente(){
    return(
        <>
            <C.GrupoSeparacao>
                <h1>Clientes</h1>
                <Estilo.Botao>
                    Adicionar Cliente
                </Estilo.Botao>
            </C.GrupoSeparacao>
        </>
    );
}