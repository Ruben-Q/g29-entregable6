import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/HomePage/TrackCard"

const HomePage = () => {

const [listTracks, getListTracks]  = useFetch()
const [inputValue, setInputValue] = useState("ricardo arjona")
const [quantityPerPage, setQuantityPerPage] = useState(10)

useEffect(() => { // Con el "useEfect" hacemos la peticion.
getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`) //********** */
}, [inputValue, quantityPerPage]) 

    const inputSearch = useRef()
    const handleSearch = e => {
        e.preventDefault() // Se saca el recargamiento de pagina.
        setInputValue(inputSearch.current.value.trim().toLowerCase())   
    }
    const handleTracksPerPage = (e) => {
        setQuantityPerPage(e.target.value) // Donde se ejecuta el evento. Eje: "onClick"
    }
    
    return ( 
    <div className="homePage">
        <div className="homePage-info">
            <form className="homePage-form" onSubmit={handleSearch}>
                <input className="homePage-input" ref={inputSearch} type="text" />
                <select className="homePage-onChange" onChange={handleTracksPerPage} defaultValue={10}>
                    {
                        [2, 4, 6, 8, 10].map(tracksPerPage => (
                            <option 
                            key={tracksPerPage} 
                            value={tracksPerPage}
                            >{tracksPerPage}</option>
                        ))
                    }
                </select>
            </form>
            <input className="homePage-inputTex" type="text" /> 
            <div className="homePage-listadoBg">
                {
                    listTracks?.tracks.items.map(track => (
                        <TrackCard 
                        key={track.id}
                        track={track} 
                        />
                    ))
                }
            </div>
        </div>
    </div>
    )
}

export default HomePage