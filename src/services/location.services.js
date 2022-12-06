import {urls} from "../configs";
import {axiosService} from "axios-service";

const locationServices = {
    getAll: () => axiosService.get(urls.location)
}

export {
    locationServices
}