import { useDispatch } from "react-redux"
import { deleteTrack } from "../../store/slices/tracks.slice"

const TrackPlaylist = ({track}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTrack(track))
  }



  return (
    <section className="tracList">
      <header>
      <img src={track.album.images[0].url} alt="" />
      </header>
        <article className="TracList-info">
          <h3 className="trackList-nombreCancion">{track.name}</h3>
          <ul className="trackList-autor" >
            {
              track.artists.map(artist => (
                <li key={artist.id}>{artist.name}</li>
              ))
            }
            
          </ul>
          
        </article>
        <footer className="footer-btnMenos" onClick={handleDelete}>
          <i className='bx bx-minus-circle'></i>
        </footer>
    </section>
  )
}

export default TrackPlaylist