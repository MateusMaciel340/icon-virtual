import styled from "styled-components";

export const Container = styled.div`
    overflow-x:auto;
`;

export const Tabela = styled.table`
    font-family: Arial, Helvetica, sans-serif; border-collapse: collapse;
    width: 100%; text-align: center; margin-bottom: 10px;
    border-collapse: collapse; border-spacing: 0;
    td, th{
        border: 1px solid #ddd;
        padding: 8px;
        i{
            margin-right: 10px; font-size: 20px; 
        }
    }
    th{
        padding-top: 12px; padding-bottom: 12px; 
        text-align: left; background-color: #435C7D; color: white;
    }
`;

export const Icone = styled.i<{ cor: string, }>`
    color: ${props => props.cor}; cursor: pointer;
`;

export const Paginacao = styled.div`
    display: flex; justify-content: space-between;
    align-items: center;
`;

export const Coluna = styled.div`
    ul{
        display: flex; list-style: none;
        li{
            border: 2px solid red; padding: 5px; cursor: pointer;
            color: black; padding: 8px 16px; text-decoration: none;
            transition: background-color .3s; border: 1px solid #ddd;
        }
    }
`;

export const GrupoSeparacao = styled.div`
    display: flex; justify-content: space-between; align-items: center;
`
export const GrupoColuna = styled.div``;