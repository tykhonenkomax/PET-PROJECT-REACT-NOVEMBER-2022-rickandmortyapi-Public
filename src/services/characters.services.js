import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const characterServices = {
    getAll: () => axiosServices.get(urls.character),

    getById: (id) => axiosServices.get(`${urls.character}/${id}`),

    searchCharactersByName:(name)=>axiosServices.get(`${urls.character}?name=${name}`)
}

export {
    characterServices
}