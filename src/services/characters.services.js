import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const charactersServices ={
    getAll:()=>axiosServices.get(urls.character)
}

export {
    charactersServices
}