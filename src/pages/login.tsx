import { useState } from "react";
import * as C from "../styles/GlobalStyle";
import api from "../services/api";

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const EnviarDados = (event: any) => {
        event.preventDefault();
        const data = { email_cliente: email, senha_cliente: senha, }

        api.post("/login", data)
            .then(res => {
                localStorage.setItem("token", res.data);

                setTimeout(function(){
                    window.location.href = "/";
                },1000)

                setMensagem("Sucesso em sua autenticação");
            })
            .catch(error => {
                setMensagem(error.response.data);
            });
    }

    return(
        <C.Container>
            <C.Coluna>
                <img src={"https://st4.depositphotos.com/12985656/20638/i/450/depositphotos_206387114-stock-photo-cropped-shot-businessman-making-shopping.jpg"}/>
            </C.Coluna>
            <C.Coluna>
                {mensagem !== "" ? (
                    <C.MensagemLogin>{mensagem}</C.MensagemLogin>
                ): ""}
                <C.Titulo>Login</C.Titulo>
                <C.Form>
                    <C.Input 
                        type="email"
                        placeholder="Digite seu email" 
                        name="email_usuario" 
                        id="email_usuario"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <C.Input
                        type="password"
                        placeholder="Digite sua senha" 
                        name="senha_cliente" 
                        id="senha_cliente"
                        onChange={e => setSenha(e.target.value)}
                    />
                    <C.Botao type="submit" onClick={EnviarDados}>Entrar</C.Botao>
                </C.Form>
            </C.Coluna>
        </C.Container>
    );
}

export default Login;