import * as Categoria from "./Tabelas/TabelaCategoria";
import * as Cliente from "./Tabelas/TabelaCliente";
import * as Produto from "./Tabelas/TabelaProduto";

function Table(){

    let id = window.location.pathname.split("/");

    return(
        <>
            {id[2] === "cliente" ? (
                <Cliente.TabelaCliente/>
            ): id[2] === "categoria" ? (
                <Categoria.TabelaCategoria/>
            ): id[2] === "produto" ? (
                <Produto.TabelaProduto/>
            ): ""}
        </>
    );
}

export default Table;