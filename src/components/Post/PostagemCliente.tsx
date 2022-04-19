import * as C from "../Table/style";
import * as Estilo from "../Header/style";
import * as Componente from "reactstrap";
import { useState } from "react";

import api from "../../services/api";

export function PostagemCliente(){

    const [modal, setModal] = useState(false);
    
    // Estados
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipo, setTipo] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [mensagem, setMensagem] = useState("");

    function toggle(){
        setModal(!modal);
    }

    const Enviar = (event: any) => {
        event.preventDefault();
        const data = {
            nome_cliente: nome, email_cliente: email, senha_cliente: senha,
            tipo_cliente: tipo, cpf_cliente: cpf, telefone_cliente: telefone, 
            endereco_cliente: endereco,  
        }
        api.post("/cliente", data)
            .then(res => {
                setMensagem("O cliente foi cadastrado com sucesso!");

                setTimeout(function(){
                    window.location.href = window.location.pathname;
                },1000)
            })
            .catch(error => {
                setMensagem("Houve algum problema ao cadastrar o cliente");
            })
    }
    

    return(
        <>
            <C.GrupoSeparacao>
                <h1>Clientes</h1>
                <Estilo.Botao onClick={toggle}>
                    Adicionar Cliente
                </Estilo.Botao>
            </C.GrupoSeparacao>

            <Componente.Modal isOpen={modal} toggle={toggle} size="lg" style={{maxWidth: '700px', width: '100%'}}>
                <Componente.ModalHeader toggle={toggle}>Novo cliente</Componente.ModalHeader>
                <Componente.ModalBody>
                    <Componente.Form>
                        {mensagem !== "" ? (
                            <Componente.Alert color="secondary">{mensagem}</Componente.Alert>
                        ): ""}
                        <Componente.Row>
                            <Componente.Col lg="6">
                                <Componente.Label>Nome do cliente</Componente.Label>
                                <Componente.Input
                                    type="text" placeholder="Digite o nome completo do cliente"
                                    onChange={e => setNome(e.target.value)}
                                />
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Email do cliente</Componente.Label>
                                <Componente.Input
                                    type="email" placeholder="Digite o email do cliente"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Senha do cliente</Componente.Label>
                                <Componente.Input
                                    type="password" placeholder="Digite a senha do cliente"
                                    onChange={e => setSenha(e.target.value)}
                                />
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Tipo de Cliente</Componente.Label>
                                <Componente.Input type="select" onChange={e => setTipo(e.target.value)}>
                                    <option value="">...</option>
                                    <option value="1">Cliente - Comum</option>
                                </Componente.Input>
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Cpf do cliente</Componente.Label>
                                <Componente.Input
                                    type="text" placeholder="Digite o cpf do cliente"
                                    onChange={e => setCpf(e.target.value)}
                                />
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Telefone do cliente</Componente.Label>
                                <Componente.Input
                                    type="text" placeholder="Digite o telefone do cliente"
                                    onChange={e => setTelefone(e.target.value)}
                                />
                            </Componente.Col>

                            <Componente.Col lg="12">
                                <Componente.Label>Endereço do cliente</Componente.Label>
                                <Componente.Input
                                    type="textarea" placeholder="Digite o endereço do cliente"
                                    onChange={e => setEndereco(e.target.value)}
                                    rows="3"
                                />
                            </Componente.Col>
                            <Componente.Col lg="4">
                                <Estilo.Botao onClick={Enviar}>Postar</Estilo.Botao>
                            </Componente.Col>
                        </Componente.Row>
                    </Componente.Form>
                </Componente.ModalBody>
            </Componente.Modal>
        </>
    );
}