import api from "../api";

export const GetProduto = async () => {
    try{
        const response = await api.get("/produto");

        return response.data;
    }catch(error){
        return "Ocorreu algum erro!";
    }
}

export const DeleteProduto = async (id: number) => {
    try{
        const response = await api.delete(`/produto/${id}`);

        return response.data;
    }catch(error){
        return "Ocorreu algum erro";
    }
}