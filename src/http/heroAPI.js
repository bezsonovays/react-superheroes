import  { $host} from "./index";
import jwt_decode from "jwt-decode";

export const addHero = async (hero) => {
    const {data} = await $host.post('/', {hero})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}