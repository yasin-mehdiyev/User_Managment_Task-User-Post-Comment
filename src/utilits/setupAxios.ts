import axios from "axios";

const API_KEY : string = "https://jsonplaceholder.typicode.com";

export default axios.create({
    baseURL: API_KEY
});