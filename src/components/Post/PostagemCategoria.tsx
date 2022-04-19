import * as C from "../Table/style";
import * as Estilo from "../Header/style";

export function PostagemCategoria(){
    return(
        <>
         <C.GrupoSeparacao>
            <h1>Categorias</h1>
            <Estilo.Botao>
                Adicionar Categoria
            </Estilo.Botao>
        </C.GrupoSeparacao>
        </>
    );
}