import * as C from "../style";
import { GetCliente , DeleteCliente} from "../../../services/cliente/api-consumo-cliente";
import { GetCategoria, DeleteCategoria } from "../../../services/categoria/api-consumo-categoria";
import { useEffect, useState } from "react";
import { GrupoClientes, GrupoCategorias } from "../../../types/tipos-opcoes";

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
        <h1>Clientes</h1>
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

export function TabelaCategoria(){

    const [categorias, setCategorias] = useState<GrupoCategorias[]>([]);

    const getCategoria = async () => {
        const response = await GetCategoria();

        setCategorias(response);
    }

    const deleteCategoria = async (id: number) => {
        const response = await DeleteCategoria(id);

        setCategorias(
            categorias.filter(categoria => categoria.id_categoria !== id)
        );
    }

    useEffect(() => {
        getCategoria();
    },[])

    return(
        <C.Container>
            <h1>Categorias</h1>
            <C.Tabela>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título da categoria</th>
                        <th>Descrição da categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((dado, index) => (
                        <tr key={index}>
                            <td>00{index+1}</td>
                            <td>{dado.titulo_categoria}</td>
                            <td>{dado.descricao_categoria}</td>
                            <td>
                                <C.Icone 
                                    className="fa fa-edit" cor="#FECE3F"
                                />
                                <C.Icone 
                                    className="fa fa-trash" cor="#F5574A"
                                    onClick={() => deleteCategoria(dado.id_categoria)}
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