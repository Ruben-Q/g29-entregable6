import TrackCard from "../HomePage/TrackCard"

const ArtistSongsTop = ({ tracks }) => {

    

    return (
    <section>
        <h3>Artist Top Songs </h3>
        <div>
            {
                tracks?.map(trackInfo =>(
                    <TrackCard
                    key={trackInfo.id}
                    track={trackInfo}
                    />
                    
                ))
            }
        </div>
    </section>

    )
}

export default ArtistSongsTop