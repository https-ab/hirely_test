import axios from "axios";

const newRequest = axios.create({
    baseURL : "https://hirely-test.onrender.com/api/",
    withCredentials : true
})

export default newRequest
