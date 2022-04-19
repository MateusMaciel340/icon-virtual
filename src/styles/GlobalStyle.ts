import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    body{
        padding: 0; margin: 0; box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    label, button{
        margin-top: 8px; margin-bottom: 10px;
    }
`;

export const Container = styled.div`
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(2, 1fr);
    margin-top: 0px;
    @media(max-width:900px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Coluna = styled.div`
    text-align: center;
    img{
        width: 100%;
    }
    @media(max-width:900px){
        form{
            margin-bottom: 100px;
        }
        img{
            display: block;
        }
    }
`;

export const Titulo = styled.h1`
    text-align: center; margin-top: 80px;
`;
export const Input = styled.input`
    width: 90%; padding: 12px 20px; margin: 8px 0;
    box-sizing: border-box; font-size: 20px; margin: 10px;
    border: 2px solid #ccc;
    @media(max-width:900px){
        width: 90%;
    }
`;

export const Botao = styled.button`
    background-color: #435C7D; border: none; color: #FFFFFF;
    padding: 10px 30px 10px 30px; font-size: 20px; width: 90%;
    margin-top: 10px; cursor: pointer;
    @media(max-width:500px){
        width: 90%;
    }
`;

export const MensagemLogin = styled.div`
    background-color: #ccc; margin-top: 30px; margin-left: 30px; margin-right: 30px;
    padding: 10px; border-radius: 5px; border: 2px solid black;
`;

export const Form = styled.form``;