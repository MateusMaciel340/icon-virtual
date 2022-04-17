import * as C from "./style";

function Header(){
    return(
        <C.Container>
            <C.Coluna>
                <C.Titulo>Icone Virtual</C.Titulo>
            </C.Coluna>
            <C.Coluna>
                <C.Botao>Login</C.Botao>
            </C.Coluna>
        </C.Container>
    );
}

export default Header;