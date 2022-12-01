import axios from "axios";
import {baseURL} from "../configs/urls";


let axiosServices = axios.create({baseUrl:baseURL});

export {
    axiosServices
}