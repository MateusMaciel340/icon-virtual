import * as C from "../style";

export function TabelaCliente(){
    return(
        <C.Container>
        <h1>Clientes</h1>
        <C.Tabela>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <td>Mateus de Sousa Maciel</td>
                    <td>mateus@gmail.com</td>
                    <td>Rua Francisco Emanuel Lima, 89</td>
                    <td>(85) 99423 - 9305</td>
                    <td>
                        <C.Icone className="fa fa-edit" cor="#FECE3F"/>
                        <C.Icone className="fa fa-trash" cor="#F5574A"/>
                    </td>
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
    return(
        <C.Container>
            <h1>Categorias</h1>
            <C.Tabela>
                <thead>
                    <th>#</th>
                    <th>Título da categoria</th>
                    <th>Descrição da categoria</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <td>001</td>
                    <td>Camisas</td>
                    <td>Descrevendo sobre camisas</td>
                    <td>
                        <C.Icone className="fa fa-edit" cor="#FECE3F"/>
                        <C.Icone className="fa fa-trash" cor="#F5574A"/>
                    </td>
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