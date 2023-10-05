import { useState } from "react"
const trackInfo = ({track}) => {

    const [isShowPlayer, setIsShowPlayer] = useState(false) // Muestra y oculta imagen con un "bolean"

    const handlePlayer = () => {
    setIsShowPlayer(!isShowPlayer)
    }

    return (
    <div>
            <article>
            <header>
                <img onClick={handlePlayer} src={track?.album.images[0].url} alt=""/>
            </header>
            <section>
                <h3>{track?.name}</h3>
                <ul>
                    {
                        track?.artists.map(artist => (
                            <li key={artist.id}>{artist.name}</li>
                        ))
                    }
                </ul>
                <p><span>album: </span>{track?.album.name}</p>
                <p><span>Release date: </span>{track?.album.release_date}</p>
            </section>
        </article>
        {
        isShowPlayer
        && ( // Con este "corto circuito" podemos mostrar y ocultar el "iframe"
        <iframe
        style={{borderRadius: '12px'}}
        src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        ></iframe>
        )
    }
    </div>
    )
}

export default trackInfo