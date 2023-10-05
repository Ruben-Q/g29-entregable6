/* COMPARTIENDO "RUTAS ANIDADAS Y PROTEGIDAS" */
import { Navigate, Outlet } from "react-router-dom"
import HeaderMusic from "../components/shared/HeaderMusic"


const ProtectedRoutes = () => {

    if(localStorage.getItem("token") !== null){
    return ( //  "<HeaderMusic />" Ruta hija: "ProtecteRoutes" Todo lo que esta en la ruta "Home se renderiza en el OUTLET". Que en este caso representa lo mismo
        <>
        <HeaderMusic /> 
        <Outlet /> 
        </>
    )
    } else {
    return <Navigate to="/auth/login"/>
    }
}

export default ProtectedRoutes