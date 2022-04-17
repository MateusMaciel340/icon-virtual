import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px; margin: 0 auto;
    margin-top: 20px; padding: 20px; display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const ContainerTable = styled.div`
    max-width: 1200px; margin: 0 auto;
    margin-top: 30px; padding: 10px;
`;

export const Card = styled.div`
    border: 2px solid #ccc; border-radius: 5px; padding: 10px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); margin-right: 20px;
    margin-top: 20px; text-align: center;
`;

export const CardImagem = styled.img`
    width: 100%;
`;

export const TituloImagem = styled.h2`
    background-color: #435C7D; padding: 5px; color: #FFFFFF;
    border: 1px solid #ccc; border-radius: 5px;
`;

export const CardBotao = styled.button`
    background-color: #5cb85c; border: none;
    font-weight: bold; font-size: 20px; padding: 10px 20px 10px 20px;
    border-radius: 5px; cursor: pointer;
    a{
        color: #FFFFFF; text-decoration: none;
    }
`;