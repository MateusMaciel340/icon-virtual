import * as C from "../Table/style";
import api from "../../services/api";
import { useState, useEffect, Component } from "react";

import * as Componente from "reactstrap";
import * as Estilo from "../Header/style";

import { GrupoCategorias } from "../../types/tipos-opcoes";
import { GetCategoria } from "../../services/categoria/api-consumo-categoria";

type Props = {
    id_produto: number,
}

function EditarProduto({ id_produto } : Props){

    const [modal, setModal] = useState(false);
    const [categorias, setCategorias] = useState<GrupoCategorias[]>([]);

    // Estados
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [categoria, setCategoria] = useState<number>();
    const [nomeCategoria, setNomeCategoria] = useState("");
    const [categoriaId, setCategoriaId] = useState<number>();

    const [mensagem, setMensagem] = useState("");

    function toggle(){
        setModal(!modal);
    }

    const getCategoria = async () => {
        const response = await GetCategoria();

        setCategorias(response);
    }

    useEffect(() => {
        api.get(`/produto/${id_produto}`)
            .then(res => {
                setTitulo(res.data[0].titulo_produto); setDescricao(res.data[0].descricao_produto);
                setPreco(res.data[0].preco_produto); setEstoque(res.data[0].estoque_produto);
                setCategoria(res.data[0].categoria_id);
                setNomeCategoria(res.data[0].tb_categorium.titulo_categoria);
                setCategoriaId(res.data[0].tb_categorium.id_categoria);
            })
            .catch(error =>{
                console.log(error.response.data);
            });
            getCategoria();
    },[])

    const Enviar = (event: any) => {
        event.preventDefault();
        const data = {
            titulo_produto: titulo, descricao_produto: descricao, preco_produto: preco,
            estoque_produto: estoque, categoria_id: categoria,
        }
        api.put(`/produto/${id_produto}`, data)
            .then(res => {
                setMensagem("Seu produto foi atualizado com sucesso!");

                setTimeout(function(){
                    window.location.href = window.location.pathname;
                },1000)
            })
            .catch(error => {
                setMensagem("Houve um erro ao atualizar o produto");
            })
    }

    return(
        <>
             <C.Icone 
                className="fa fa-edit" cor="#FECE3F" onClick={toggle}
             />

             <Componente.Modal isOpen={modal} toggle={toggle}>
                 <Componente.ModalHeader toggle={toggle}>Atualizar produto</Componente.ModalHeader>
                 <Componente.ModalBody>
                <Componente.Form>
                    {mensagem !== "" ? (
                        <Componente.Alert color="secondary">{mensagem}</Componente.Alert>
                    ): ""}
                    <Componente.Row>
                        <Componente.Col lg="6">
                            <Componente.Label>Título do Produto</Componente.Label>
                            <Componente.Input
                                type="text" placeholder="Atualize o título do produto"
                                onChange={e => setTitulo(e.target.value)}
                                value={titulo}
                            />
                        </Componente.Col>
                        <Componente.Col lg="6">
                            <Componente.Label>Preço do Produto</Componente.Label>
                            <Componente.Input
                                type="number" placeholder="Atualize o preço do produto"
                                onChange={e => setPreco(e.target.value)}
                                value={preco}
                            />
                        </Componente.Col>
                        <Componente.Col lg="6">
                            <Componente.Label>Estoque do Produto</Componente.Label>
                            <Componente.Input
                                type="number" placeholder="Atualize o estoque do produto"
                                onChange={e => setEstoque(e.target.value)}
                                value={estoque}
                            />
                        </Componente.Col>
                        <Componente.Col lg="6">
                            <Componente.Label>Categoria do Produto</Componente.Label>
                            <Componente.Input type="select" onChange={e => setCategoria(Number(e.target.value))} value={categoria}>
                                {categorias.map((dado, index) => (
                                    dado.id_categoria === categoria ? (
                                        <option key={index} value={dado.id_categoria}>{dado.titulo_categoria}</option>
                                    ): ""
                                ))}
                                {categorias.map((dado, index) => (
                                    dado.id_categoria !== categoria ? (
                                        <option key={index} value={dado.id_categoria}>{dado.titulo_categoria}</option>
                                    ): ""
                                ))}
                            </Componente.Input>
                        </Componente.Col>
                        <Componente.Col lg="12">
                            <Componente.Label>Descrição do Produto</Componente.Label>
                            <Componente.Input
                                type="textarea" placeholder="Atualize o título do produto"
                                onChange={e => setDescricao(e.target.value)}
                                value={descricao}
                            />
                        </Componente.Col>
                        <Componente.Col lg="4">
                            <Estilo.Botao onClick={Enviar}>
                                Atualizar
                            </Estilo.Botao>
                        </Componente.Col>
                    </Componente.Row>
                </Componente.Form>
            </Componente.ModalBody>
             </Componente.Modal>
        </>  
    );
}

export default EditarProduto;