import * as C from "../Table/style";
import api from "../../services/api";
import { GrupoCategorias } from "../../types/tipos-opcoes";
import { useEffect, useState } from "react";

import * as Componente from "reactstrap";
import * as Estilo from "../Header/style";

type Props = {
    id_categoria: number,
}

function EditarCategoria({ id_categoria } : Props){

    const [categorias, setCategorias] = useState<GrupoCategorias[]>([]);
    const [modal, setModal] = useState(false);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [mensagem, setMensagem] = useState("");

    function toggle(){
        setModal(!modal);
    }

    useEffect(() => {
        api.get(`/categoria/${id_categoria}`)
            .then(res => {
                setTitulo(res.data[0].titulo_categoria);
                setDescricao(res.data[0].descricao_categoria);
            })
            .catch(error => {
                setMensagem(error.response.data);
            })
    },[])

    const Enviar = (event: any) => {
        event.preventDefault();
        const data = {
            titulo_categoria: titulo, descricao_categoria: descricao,
        }
        api.put(`/categoria/${id_categoria}`, data)
            .then(res => {
                setMensagem("Sua categoria foi atualizada com sucesso!");

                setTimeout(function(){
                    window.location.href = window.location.pathname;
                },1000)
            })
            .catch(error => {
                setMensagem("Houve algum erro ao atualizar sua categoria!");
            })
    }

    return(
        <>
            <C.Icone 
                className="fa fa-edit" cor="#FECE3F"
                onClick={toggle}
            />

            <Componente.Modal isOpen={modal} toggle={toggle}>
                <Componente.ModalHeader toggle={toggle}>Atualizar categoria</Componente.ModalHeader>
                <Componente.ModalBody>
                    <Componente.Form>
                        {mensagem !== "" ? (
                            <Componente.Alert color="secondary">{mensagem}</Componente.Alert>
                        ):""}
                        <Componente.Row>
                            <Componente.Col lg="12">
                                <Componente.Label>Título da Categoria</Componente.Label>
                                <Componente.Input
                                    type="text" placeholder="Atualize o título da categoria"
                                    onChange={e => setTitulo(e.target.value)}
                                    value={titulo}
                                />
                            </Componente.Col>

                            <Componente.Col lg="12">
                                <Componente.Label>Descrição da Categoria</Componente.Label>
                                <Componente.Input
                                    type="textarea" placeholder="Atualize a descrição da categoria"
                                    onChange={e => setDescricao(e.target.value)}
                                    value={descricao} rows="3"
                                />
                            </Componente.Col>

                            <Componente.Col lg="4">
                                <Estilo.Botao onClick={Enviar}>Atualizar</Estilo.Botao>
                            </Componente.Col>
                        </Componente.Row>
                    </Componente.Form>
                </Componente.ModalBody>
            </Componente.Modal>
        </>
    );
}

export default EditarCategoria;