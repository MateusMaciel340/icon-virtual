import api from "../../services/api";
import { useEffect, useState } from "react";
import * as Componente from "reactstrap";
import * as Estilo from "../Header/style";
import * as C from "../Table/style";

type Props = {
    id_cliente: number,
}

function EditarCliente({ id_cliente } : Props){

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

    useEffect(() => {
        api.get(`/cliente/${id_cliente}`)
            .then(res => {
                setNome(res.data[0].nome_cliente); setEmail(res.data[0].email_cliente);
                setSenha(res.data[0].senha_cliente); setTipo(res.data[0].tipo_cliente);
                setCpf(res.data[0].cpf_cliente); setTelefone(res.data[0].telefone_cliente);
                setEndereco(res.data[0].endereco_cliente);
            })
            .catch(error => {
                setMensagem(error.response.data);
            })
    },[])

    const Enviar = (event: any) => {
        event.preventDefault();
        const data = {
            nome_cliente: nome, email_cliente: email, senha_cliente: senha, tipo_cliente: tipo,
            cpf_cliente: cpf, telefone_cliente: telefone, endereco_cliente: endereco,
        }
        api.put(`/cliente/${id_cliente}`, data)
            .then(res => {
                setMensagem("O cliente foi atualizado com sucesso!");

                setTimeout(function(){
                    window.location.href = window.location.pathname;
                },1000)
            })
            .catch(error => {
                setMensagem("Houve um erro ao atualizar o cliente");
            })
    }

    return(
        <>
            <C.Icone 
                className="fa fa-edit" cor="#FECE3F" onClick={toggle}
            />

            <Componente.Modal isOpen={modal} toggle={toggle} size="lg" style={{maxWidth: '700px', width: '100%'}}>
                <Componente.ModalHeader toggle={toggle}>
                    Atualizar cliente
                </Componente.ModalHeader>
                <Componente.ModalBody>
                    <Componente.Form>
                        {mensagem !== "" ? (
                            <Componente.Alert color="secondary">{mensagem}</Componente.Alert>
                        ): ""}
                        <Componente.Row>
                        <Componente.Col lg="6">
                                <Componente.Label>Nome do cliente</Componente.Label>
                                <Componente.Input
                                    type="text" placeholder="Atualize o nome completo do cliente"
                                    onChange={e => setNome(e.target.value)}
                                    value={nome}
                                />
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Email do cliente</Componente.Label>
                                <Componente.Input
                                    type="email" placeholder="Atualize o email do cliente"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Senha do cliente</Componente.Label>
                                <Componente.Input
                                    type="password" placeholder="Atualize a senha do cliente"
                                    onChange={e => setSenha(e.target.value)} value={senha}
                                />
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Tipo de Cliente</Componente.Label>
                                <Componente.Input type="select" onChange={e => setTipo(e.target.value)}>
                                    {tipo == "1" ? (
                                        <option value="1">Cliente - Comum</option>
                                    ):(
                                        <option value="">...</option>
                                    )}
                                </Componente.Input>
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Cpf do cliente</Componente.Label>
                                <Componente.Input
                                    type="text" placeholder="Atualize o cpf do cliente"
                                    onChange={e => setCpf(e.target.value)} value={cpf}
                                />
                            </Componente.Col>

                            <Componente.Col lg="6">
                                <Componente.Label>Telefone do cliente</Componente.Label>
                                <Componente.Input
                                    type="text" placeholder="Atualize o telefone do cliente"
                                    onChange={e => setTelefone(e.target.value)} value={telefone}
                                />
                            </Componente.Col>

                            <Componente.Col lg="12">
                                <Componente.Label>Endereço do cliente</Componente.Label>
                                <Componente.Input
                                    type="textarea" placeholder="Atualize o endereço do cliente"
                                    onChange={e => setEndereco(e.target.value)}
                                    rows="3" value={endereco}
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

export default EditarCliente;