import api from "../api";

export const GetFavorito = async () => {
    try{
        const response = await api.get("/favorito");

        return response.data;
    }catch(error){
        return "Ocorreu algum erro!";
    }
}