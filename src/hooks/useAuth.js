// Estructura vasica del "hook". Funcionalidad o logica del "Register y login".
import axios from "axios"
import { setCredentialsSlice } from "../store/slices/credentials.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

   // Peticion del "login"
    const useAuth = () => {

    const baseURL = "https://playlist-share-dev.fl0.io"
    const dispatch = useDispatch() // Creo el "dispach"
    const navigate = useNavigate()
    
    const loginUser = (data) => { // Cuando se ejecuta el "loginUser" resive como parametro la "data". En este caso "loginUser seria" no seria del registro, sino del "loginPage"
    const url = `${baseURL}/api/auth/login`
    axios.post(url, data) // El update y la data se envian al backen.
    .then(res => {
        const token = res.data.token
        const username = res.data.username
        const email = res.data.email

        localStorage.setItem("token", token)
        localStorage.setItem("username", username)
        localStorage.setItem("email", email)

        console.log(res.data)
        const obj = { token, username, email } // Este objeto se guarda en el estado global
        dispatch(setCredentialsSlice(obj)) // Esta "axion" ejecuta el "dispach"
        navigate("/")
    })
    .catch(err => {
        dispatch(setCredentialsSlice(null)) // Porque "null" porque el valor incial en "credentials.slice.js" en "NULL"
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("email")
    })
}

// funcionlidad del "Register"
const registerUser = (data) => {
    const url = `${baseURL}/api/auth/register`
    axios.post(url, data) // Resivimos la "url del data" y resolvemos la promesa
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
    return { loginUser, registerUser }
}

export default useAuth