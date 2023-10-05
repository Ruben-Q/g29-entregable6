import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import TrackCard from "../HomePage/TrackCard"

// Traemos la informacion del primer artista.
const TracksRelated = ({artist}) => { // Artist cambia el valor.

    const [trackList, getTrackList] = useFetch()
    useEffect(() => {
    getTrackList(`/api/tracks?limit=10&q=${artist}`) // Esperamos a que la informacion llegue a "artist"
    }, [artist]) // Cada vez que "artist cambie la info se vuelve sa ejecutar"

    return ( // Utilizamos un componente para reutilizar: ** trackList?.tracks.items.map(track => --<TrackCard/>--) / y como prop resivo "track={track}"**
    <section>
        <h3>Track ralated</h3>
        <div>
            {
                trackList?.tracks.items.map(track =>
                <TrackCard
                key={track.id}
                track={track}
                />
                )
            }
        </div>
    </section>
    )
} 

export default TracksRelated