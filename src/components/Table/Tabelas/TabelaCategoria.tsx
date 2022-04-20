import { GetCategoria, DeleteCategoria } from "../../../services/categoria/api-consumo-categoria";
import { useEffect, useState } from "react";
import { GrupoCategorias } from "../../../types/tipos-opcoes";
import * as C from "../style";
import EditarCategoria from "../../Edit/EditarCategoria";

import * as Postagem from "../../Post/PostagemCategoria";

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
            <Postagem.PostagemCategoria/>
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
                                <EditarCategoria
                                    id_categoria={dado.id_categoria}
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