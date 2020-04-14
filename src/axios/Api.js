import axios from 'axios'

export default axios.create({

    // baseURL: "http://localhost:8000/v1",
    baseURL: "https://cdc-backend.yacanet.com/v1",

    responseType: "json",

})
