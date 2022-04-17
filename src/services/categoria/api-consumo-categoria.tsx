import api from "../api";

export const GetCategoria = async () => {
    try{
        const response = await api.get("/categoria");

        return response.data;
    }catch(error){
        return "Ocorreu algum erro";
    }
}

export const DeleteCategoria = async (id: number) => {
    try{
        const response = await api.delete(`/categoria/${id}`);

        return response.data;
    }catch(error){
        return "Ocorreu algum erro";
    }
}