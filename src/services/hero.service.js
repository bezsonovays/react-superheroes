import {axiosService} from "./axios.servise";
import  {urls} from "./urls";


const heroService = {
    getAll: () =>  axiosService.get(urls.heroes),
    getByID: (id) => axiosService.get(`${urls.heroes}/${id}`),
    createHero: (hero) => axiosService.post(urls.heroes, hero),
    updateById: (id, newHero) => axiosService.put(`${urls.heroes}/${id}`, newHero),
    deleteByID: (id) => axiosService.delete(`${urls.heroes}/${id}`),
}

export {
    heroService
}