
// base
import { useContext, useEffect, useState } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom";
import NoteActionsContext from "./NoteActionsContext"
import NotesContext from "../NotesProvider/NotesContext"

const NoteActionsProvider = ({ children }) => {

    // base
    const {everyNotesSource, setEveryNotesSource} = useContext(NotesContext);
    const navigate = useNavigate()

    // 
    const toggleNoteStatus = (action, id) => {
        setEveryNotesSource(prev => prev.map(item =>
            item.id === Number(id) ? { ...item, [action]: !item[action] } : item
        ))
        if(action === "isDeleted"){
            navigate("/")
        }
    }

    // jsx
    return (
        <NoteActionsContext.Provider value={{ toggleNoteStatus }}>
            {children}
        </NoteActionsContext.Provider>
    )
}


export default NoteActionsProvider;