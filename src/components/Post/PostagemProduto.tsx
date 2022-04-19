import * as C from "../Table/style";
import * as Estilo from "../Header/style";
import * as Componente from "reactstrap";
import { useState, useEffect } from "react";

import { GetCategoria } from "../../services/categoria/api-consumo-categoria";
import { GrupoCategorias } from "../../types/tipos-opcoes";
import api from "../../services/api";

export function PostagemProduto(){

    const [modal, setModal] = useState(false);
    const [categorias, setCategorias] = useState<GrupoCategorias[]>([]);

    // Estados
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [categoria, setCategoria] = useState("");
    const [mensagem, setMensagem] = useState("");

    function toggle(){
        setModal(!modal);
    }

    const getCategoria = async () => {
        const response = await GetCategoria();

        setCategorias(response);
    }

    const Enviar = (event: any) => {
        event.preventDefault();
        const data = { 
            titulo_produto: titulo, descricao_produto: descricao, preco_produto: preco,
            estoque_produto: estoque, categoria_id: categoria,
        }
        api.post("/produto", data)
            .then(res => {
                setMensagem("Produto postado com sucesso!");

                setTimeout(function(){
                    window.location.href = window.location.pathname;
                },1000)
            })
            .catch(error => {
                setMensagem("Ocorreu algum erro ao postar seu produto!");
            })
    }

    useEffect(() => {
        getCategoria();
    },[])

    return(
        <>
            <C.GrupoSeparacao>
                <h1>Produtos</h1>
                <Estilo.Botao onClick={toggle}>
                    Adicionar Produto
                </Estilo.Botao>
            </C.GrupoSeparacao>

            <Componente.Modal isOpen={modal} toggle={toggle}>
            <Componente.ModalHeader toggle={toggle}>Novo produto</Componente.ModalHeader>
            <Componente.ModalBody>
                <Componente.Form>
                    {mensagem !== "" ? (
                        <Componente.Alert color="secondary">{mensagem}</Componente.Alert>
                    ): ""}
                    <Componente.Row>
                        <Componente.Col lg="6">
                            <Componente.Label>Título do Produto</Componente.Label>
                            <Componente.Input
                                type="text" placeholder="Digite o título do produto"
                                onChange={e => setTitulo(e.target.value)}
                            />
                        </Componente.Col>
                        <Componente.Col lg="6">
                            <Componente.Label>Preço do Produto</Componente.Label>
                            <Componente.Input
                                type="number" placeholder="Digite o preço do produto"
                                onChange={e => setPreco(e.target.value)}
                            />
                        </Componente.Col>
                        <Componente.Col lg="6">
                            <Componente.Label>Estoque do Produto</Componente.Label>
                            <Componente.Input
                                type="number" placeholder="Digite o estoque do produto"
                                onChange={e => setEstoque(e.target.value)}
                            />
                        </Componente.Col>
                        <Componente.Col lg="6">
                            <Componente.Label>Categoria do produto</Componente.Label>
                            <Componente.Input
                                type="select" onChange={e => setCategoria(e.target.value)}>
                                    <option>....</option>
                                    {categorias.map((categoria, index) => (
                                        <option key={index} value={categoria.id_categoria}>{categoria.titulo_categoria}</option>
                                    ))}
                                </Componente.Input>
                        </Componente.Col>
                        <Componente.Col lg="12">
                            <Componente.Label>Descrição do Produto</Componente.Label>
                            <Componente.Input
                                type="textarea" placeholder="Digite o título do produto"
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </Componente.Col>
                        <Componente.Col lg="4">
                            <Estilo.Botao onClick={Enviar}>
                                Postar
                            </Estilo.Botao>
                        </Componente.Col>
                    </Componente.Row>
                </Componente.Form>
            </Componente.ModalBody>
            </Componente.Modal>
        </>
    );
}