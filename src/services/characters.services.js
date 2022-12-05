import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const characterServices = {
    getAll: () => axiosServices.get(urls.character),

    searchCharactersByName: (name) => axiosServices.get(`${urls.character}/?name=${name}`)
}

export {
    characterServices
}