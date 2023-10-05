import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import ArtistInfo from '../components/ArtistPage/ArtistInfo'
import ArtistSongsTop from '../components/ArtistPage/ArtistSongsTop'

const ArtistPage = () => {

    const { id } = useParams()
    const [ artist, getArtist ]  = useFetch()

    useEffect(() => {
    getArtist(`/api/artists/${id}`)
    }, [id])

    return (
    <div>
        <Link to="/">Atras</Link>
        <ArtistInfo artist= {artist}
        />
        <ArtistAlbum 
        albums={artist?.albums}
        />
        <ArtistSongsTop 
            tracks={artist?.songsTop}
        />
    </div>
    )
}

export default ArtistPage