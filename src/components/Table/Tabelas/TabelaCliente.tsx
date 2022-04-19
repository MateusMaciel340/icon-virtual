import { GetCliente, DeleteCliente} from "../../../services/cliente/api-consumo-cliente";
import { useEffect, useState } from "react";
import * as C from "../style";
import { GrupoClientes } from "../../../types/tipos-opcoes";
import * as Estilo from "../../Header/style";

import * as Postagem from "../../Post/PostagemCliente";

export function TabelaCliente(){

    const [clientes, setCliente] = useState<GrupoClientes[]>([]);

    const getCliente = async () => {
        const response = await GetCliente();

        setCliente(response);
    }

    const deleteCliente = async(id: number)=>{
        const response = await DeleteCliente(id);

        setCliente(
            clientes.filter(cliente => cliente.id_cliente !== id)
        );
    }

    useEffect(() => {
        getCliente();
    },[])

    return(
        <C.Container>
        <Postagem.PostagemCliente/>
        <C.Tabela>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((dado, index) => (
                        <tr key={index}>
                            <td>{dado.nome_cliente}</td>
                            <td>{dado.email_cliente}</td>
                            <td>{dado.endereco_cliente}</td>
                            <td>{dado.telefone_cliente}</td>
                            <td>
                                <C.Icone 
                                    className="fa fa-edit" cor="#FECE3F"
                                />
                                <C.Icone 
                                    className="fa fa-trash" cor="#F5574A"
                                    onClick={() => deleteCliente(dado.id_cliente)}
                                />
                            </td>
                         </tr>
                    ))}
                </tbody>
            </C.Tabela>
            <C.Paginacao>
                <C.Coluna>
                    Mostrando <b>5</b> de <b>25</b> registros
                </C.Coluna>
                <C.Coluna>
                    <ul>
                        <li>Anterior</li>
                        <li>1</li>
                        <li>Próximo</li>
                    </ul>
                </C.Coluna>
            </C.Paginacao>
        </C.Container>
    );
}