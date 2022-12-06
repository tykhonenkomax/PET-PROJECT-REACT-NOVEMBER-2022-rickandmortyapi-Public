import {axiosService} from "axios-service";
import {urls} from "../configs";

const episodeServices = {
    getAll: () => axiosService.get(urls.episode)
}
export {
    episodeServices
}