 import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/"
    
});

    export default api; 
/* import axios from "axios";

const api = axios.create({
    baseURL: "https://dark-ruby-scallop-robe.cyclic.app/"
})

export default api; */