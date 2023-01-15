import {axiosServices} from './axios.services'
import {urls} from "../configs";

const episodeServices = {
    getAll: () => axiosServices.get(urls.epsodes)
}
export {
    episodeServices
}