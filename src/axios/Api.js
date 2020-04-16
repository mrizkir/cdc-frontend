import axios from 'axios'
import { BASE_URL } from '../components/constant'

export default axios.create({

    baseURL: `${BASE_URL}/v1`,
    // baseURL: "https://cdc-backend.yacanet.com/v1",

    responseType: "json",

})
