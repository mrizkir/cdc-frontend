import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost/jsondata",
    // baseURL: "https://cdc-backend.yacanet.com/v1",
    // baseURL: "http://localhost/api2/",
    responseType: "json",

})
