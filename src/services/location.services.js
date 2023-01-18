import {axiosServices} from './axios.services'
import {urls} from "../configs";


const locationServices = {
    getAll: () => axiosServices.get(urls.location),
    getById: (id) => axiosServices.get(`${urls.character}/${id}`)
}

export {
    locationServices
}