import { Route, Routes } from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { useEffect } from "react"
import { setCredentialsSlice } from "./store/slices/credentials.slice"
import { useDispatch } from "react-redux"
import ProtectedRoutes from "./pages/ProtectedRoutes"
import TrackPage from "./pages/TrackPage"
import ArtistPage from "./pages/ArtistPage"
import TrackPlaylist from "./components/shared/TrackList"
import "./components/styles/logingPage.css"
import "./components/styles/registerPage.css"
import "./components/styles/headerMusic.css"
import "./components/styles/trackList.css"
import "./components/styles/trackPage.css"
import "./components/styles/homePage.css"


function App() {

  const dispach = useDispatch()

  useEffect (() => { // Si este codigo esta vacio se actualiza solo en el nacimiento, esto permite que si hay informacion en dicho componente no se ejecte y pierda la informacion.
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const obj = {token, username, email }
    dispach(setCredentialsSlice(obj)) // Lo guardo en el estado global. Pero primero o despachamos
  }, [])

  return ( // Ruta hija:  <Route path="/" element={<HomePage /> } /> 
    <div>
      <Routes>
        <Route path="/auth/login" element={<LoginPage /> } />
        
        <Route path="/auth/register" element={<RegisterPage /> } />
        <Route element={<ProtectedRoutes />} >
        <Route path="/" element={<HomePage /> } />
        <Route path="/tracks/:id" element={<TrackPage /> } /> 
        <Route path="/artist/:id" element={<ArtistPage /> } />
        <Route path="/playList/" element={<TrackPlaylist />} />
      </Route>
      </Routes>
    </div>
  )
}

export default App
