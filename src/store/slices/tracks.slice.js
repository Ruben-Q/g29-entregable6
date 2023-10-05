import { createSlice } from "@reduxjs/toolkit"


export const tracksSlice = createSlice({
    name: "tracks",
    initialState: [],
    reducers: {
        setTracksSlice: (state, action) => action.payload,
        addTrack: (state, action) => {
        if(state.findIndex(track => track.id === action.payload.id) === -1) { // Si el elemento que queremos agregar en el "id del track da -1", lo podemos ingresar, de lo contrario quiere decir que "existe" y lo dejamos igual que antes. "state".
        return [...state, action.payload]
        } else {
            return state
        }
        },  
         // el segundo parametro lo envio como argumento o parametro.
    // Manteniamos lo que teniamos en el arreglo y agregamos un objeto-
        deleteTrack: (state, action) => state.filter(track => track.id !== action.payload.id)
    }
})

export const { setTracksSlice, addTrack, deleteTrack } = tracksSlice.actions;
export default tracksSlice.reducer;