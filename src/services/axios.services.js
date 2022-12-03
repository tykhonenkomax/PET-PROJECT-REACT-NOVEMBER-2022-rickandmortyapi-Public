import axios from "axios";
import {baseURL} from '../configs'


let axiosServices = axios.create({baseURL});

export {
    axiosServices
}