import { useSelector } from "react-redux"
import Tracklist from "./TrackList"
import{ useForm } from "react-hook-form"
import usePlaylist from "../../hooks/usePlaylist"


/**** COMPONENTE COMPARTIDO ****/
const HeaderMusic = () => {

    const tracksPlaylist = useSelector(store => store.tracks) // Resibimos como parametro un colback que representa el "STORE" / El balor del estado se retorna en el "useSelector" y se guarda en una variable
    const {reset,handleSubmit, register }  = useForm()
    const { postPlaylist } = usePlaylist()

    const submit = dada => {
        const obj = {
            ...data,
            tracks:tracksPlaylist.map(e => ({id:e.id}))
        }
        postPlaylist(obj)
        reset({
        title:"",
        to:"",
        message:""
    })
    }

    return (
    <header className="header-music">
    <div>
        <form onSubmit= {handleSubmit(submit)}/>
        <h1 className="header-tit-giftM">Gift Music</h1>
        <form className="header-form-info">
            <div>
                <label htmlFor="title">Title</label>
                <input {...register("title")}type="text" id="title" />
            </div>

            <div>
                <label htmlFor="to">To</label>
                <input {...register("to")} type="text" id="to" />
                
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" />
                
            </div>

            <button className="header-btn-create">Create</button>
            <div className="playList">
                { // Aqui desplegamos la info del "TrakPlaylist"
                    tracksPlaylist.map(track => (
                    <Tracklist 
                    key={track.id}
                    track = {track}/>
                ))
                }
                
            </div>
            
        </form> 
    </div>    
    </header>

    )
}

export default HeaderMusic