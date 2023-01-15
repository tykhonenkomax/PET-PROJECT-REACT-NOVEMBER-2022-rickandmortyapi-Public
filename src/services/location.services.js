import {axiosServices} from './axios.services'
import {urls} from "../configs";


const locationServices = {
    getAll: () => axiosServices.get(urls.location)
}

export {
    locationServices
}