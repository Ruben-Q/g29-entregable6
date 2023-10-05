import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import TracksRelated from "../components/trackPage/TracksRelated";
import TrackInfo from "../components/trackPage/trackInfo";

    const TrackPage = () => {

    const {id}= useParams()

    const [ track, getTrack ] = useFetch()
    useEffect(() => {
    getTrack(`/api/tracks/${id}`)
    }, [id]);

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };
    
    // Se forma una peticion anidad (artist = {**track**?.artists[0].name}/>)
    return (
    <div className>
    <div className="track-btn" onClick={handleBack}>Back</div>
    <TrackInfo
    track = {track}/>
    <TracksRelated 
    artist = {track?.artists[0].name}/> 
    </div>
    );
};

export default TrackPage


