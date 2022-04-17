import * as C from "./Tabelas/Tabelas";

function Table(){

    let id = window.location.pathname.split("/");
    console.log(id[2]);

    return(
        <>
            {id[2] === "cliente" ? (
                <C.TabelaCliente/>
            ): id[2] === "categoria" ? (
                <C.TabelaCategoria/>
            ): ""}
        </>
    );
}

export default Table;