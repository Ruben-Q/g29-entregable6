import axios from "axios"
import { useState } from "react"


const useFetch = () => {

    const baseURL = "https://playlist-share-dev.fl0.io"

    const [infoApi, setInfoApi] = useState()

    const getApi = (path) => { // Path de la "url"
        const url = `${baseURL}${path}`
        const config = { // Esto sirve para todos los "token"
            headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`
            }
        }
        axios.get(url, config)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }
    return [ infoApi, getApi ]
}

export default useFetch