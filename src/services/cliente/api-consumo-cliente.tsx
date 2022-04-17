import api from "../api";

export const GetCliente = async () => {
    try{
        const response = await api.get("/cliente");

        return response.data;
    }catch(error){
        return "Ocorreu algum erro!";
    }
}

export const DeleteCliente = async(id: number) =>{
    try{
        const response = await api.delete(`/cliente/${id}`);

        return response.data;
    }catch(error){
        return "Ocorreu algum erro";
    }
}