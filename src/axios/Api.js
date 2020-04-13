import axios from 'axios'

export default axios.create({
    // baseURL: "http://localhost/jsondata",
    baseURL: "https://cdc-backend.yacanet.com/v1",
    responseType: "json"
})
