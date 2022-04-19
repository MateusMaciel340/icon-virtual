import { GetProduto, DeleteProduto } from "../../../services/produto/api-consumo-produto";
import { useEffect, useState } from "react";
import { GrupoProdutos } from "../../../types/tipos-opcoes";
import * as C from "../style";
import * as Estilo from "../../Header/style";

import * as Postagem from "../../Post/PostagemProduto";

export function TabelaProduto(){

    const [produtos, setProduto] = useState<GrupoProdutos[]>([]);

    const getProduto = async () => {
        const response = await GetProduto();

        setProduto(response);
    }

    const deleteProduto = async(id: number)=>{
        const response = await DeleteProduto(id);

        setProduto(
            produtos.filter(produto => produto.id_produto !== id)
        );
    }

    useEffect(() => {
        getProduto();
    })

    return(
        <C.Container>
            <Postagem.PostagemProduto/>
            <C.Tabela>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título da produto</th>
                        <th>Preço do produto</th>
                        <th>Estoque do produto</th>
                        <th>Categoria do produto</th>
                        <th>Favoritar</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((dado, index) => (
                        <tr key={index}>
                            <td>{dado.id_produto}</td>
                            <td>{dado.titulo_produto}</td>
                            <td>R$ {dado.preco_produto}</td>
                            <td>{dado.estoque_produto}</td>
                            <td>{dado.tb_categorium.titulo_categoria}</td>
                            <td>
                                ....
                            </td>
                            <td>
                                <C.Icone 
                                    className="fa fa-edit" cor="#FECE3F"
                                />
                                <C.Icone 
                                    className="fa fa-trash" cor="#F5574A"
                                    onClick={() => deleteProduto(dado.id_produto)}
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