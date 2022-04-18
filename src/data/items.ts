import { Opcoes } from "../types/tipos-opcoes";

import LogoApresentacao from "../assets/logo-apresentacao.jpg";

export const opcoes: Opcoes[] = [
    {   id: 1, tipo: "cliente", imagem: LogoApresentacao, 
        titulo: "Clientes", link: "/selecionado" },
    {   id: 2, tipo: "categoria", imagem: LogoApresentacao, 
        titulo: "Categorias", link: "/selecionado" },
    {   id: 3, tipo: "produto", imagem: LogoApresentacao, 
    titulo: "Produtos", link: "/selecionado" },
]