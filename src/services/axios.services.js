import axios from "axios";
import {baseURL} from "../configs";


let axiosServices = axios.create({baseUrl:baseURL});

export {
    axiosServices
}