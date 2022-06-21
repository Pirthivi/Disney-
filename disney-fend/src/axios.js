import axios from "axios";


const instance = axios.create({
    baseURL : "https://disneyback.herokuapp.com"
})



export default instance;