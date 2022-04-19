import * as C from "../Table/style";
import * as Estilo from "../Header/style";

import * as Componente from "reactstrap";
import { useState } from "react";
import api from "../../services/api";

export function PostagemCategoria(){

    const [modal, setModal] = useState(false);

    // Estados
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [mensagem, setMensagem] = useState("");

    function toggle(){
        setModal(!modal);
    }

    const Enviar = (event: any) => {
        event.preventDefault();
        const data = {
            titulo_categoria: titulo, descricao_categoria: descricao,
        }

        api.post("/categoria", data)
            .then(res => {
                setMensagem("Categoria postada com sucesso!");

                setTimeout(function(){
                    window.location.href = window.location.pathname;
                },1000)
            })
            .catch(error => {
                setMensagem("Ocorreu um erro ao postar sua categoria");
            })
    }

    return(
        <>
         <C.GrupoSeparacao>
            <h1>Categorias</h1>
            <Estilo.Botao onClick={toggle}>
                Adicionar Categoria
            </Estilo.Botao>
        </C.GrupoSeparacao>

        <Componente.Modal isOpen={modal} toggle={toggle}>
            <Componente.ModalHeader toggle={toggle}>
                Nova categoria
            </Componente.ModalHeader>

            <Componente.ModalBody>
                <Componente.Form>
                    {mensagem !== "" ? (
                        <Componente.Alert color="secondary">
                            {mensagem}
                        </Componente.Alert>
                    ): ""}
                    <Componente.Row>
                        <Componente.Col lg="12">
                            <Componente.Label>Título da categoria</Componente.Label>
                            <Componente.Input
                                type="text" placeholder="Digite o título da categoria"
                                onChange={e => setTitulo(e.target.value)}
                            />
                        </Componente.Col>
                        <Componente.Col lg="12">
                            <Componente.Label>Descrição da categoria</Componente.Label>
                            <Componente.Input
                                type="textarea" placeholder="Digite a descrição da categoria"
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