import axios from "axios";

export const $api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Bearer oNcAcg3WEzl_FuUFCNQlrW7tBhdceZ9W_P8w0O5s_pQ'
    }
})