export type Opcoes = {
    id: number, tipo: string, titulo: string, imagem: string, link: string,
}

export type GrupoClientes = {
    cpf_cliente: string, email_cliente: string, endereco_cliente: string,
    id_cliente: number, nome_cliente: string, senha_cliente: string,
    telefone_cliente: number,
}

export type GrupoCategorias = {
    id_categoria: number, titulo_categoria: string, descricao_categoria: string,
}

export type GrupoProdutos = {
    id_produto: number, titulo_produto: string, descricao_produto: string,
    preco_produto: number, estoque_produto: number, categoria_id: number,
    tb_categorium:{
        titulo_categoria: string,
    }
}