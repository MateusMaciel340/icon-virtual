import styled from "styled-components";

export const Container = styled.div`
    background-color: #435C7D; display: flex;
    justify-content: space-between; color: white; align-items: center;
    padding-left: 10px; padding-right: 10px;
`; 

export const Titulo = styled.h2`
    a{
        color: #FFFFFF; text-decoration: none;
    }
`;
export const Botao = styled.div`
    background-color: #5cb85c; padding: 10px 20px 10px 20px;
    font-weight: bold; border-radius: 5px; cursor: pointer;
`;

export const Coluna = styled.div`
    ul{
        display: flex; list-style: none;
        li{
            margin-left: 20px; font-weight: bold; cursor: pointer;
        }
        a{
            color: #FFFFFF; text-decoration: none;
        }
    }
`;