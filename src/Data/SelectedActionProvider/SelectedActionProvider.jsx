
// providers
import SelectedActionContext from "./SelectedActionContext"
import NotesContext from "../NotesProvider/NotesContext";

// base
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom"; 


const SelectedActionProvider = ({children}) => {

    const {setEveryNotesSource} = useContext(NotesContext)

    // states
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [isLinkRelease, setIsLinkRelease] = useState(true)
    const [selectedNotes, setSelectedNotes] = useState([])
    const [selectedNotesCount, setSelectedNotesCount] = useState(0)

    // Selected notes clear function 
    const clearSelectedNotes = () => {
        setSelectedNotes([])
    }

    // actions 
    const toggleSelectedNotesStatus = (action) => {
        setEveryNotesSource(prev => prev.map(item =>
            selectedNotes.includes(item.id) ? { ...item, [action]: !item[action]} : item
        ))
        clearSelectedNotes()
    }

    const changeSelectedNotesCategory = (category) => {
        setEveryNotesSource(prev => prev.map(item =>
            selectedNotes.includes(item.id) ? { ...item, category: category} : item
        ))
        clearSelectedNotes()
    }

    // main selection function  
    const activeSelectionMode = (id) => {
        if(!isSelectionMode){
            setTimeout(() => {
                setIsLinkRelease(false)
                setIsSelectionMode(true)
                setSelectedNotes(prev => [ ...prev, id])
            }, 500)
        }
        else{
            const exists = selectedNotes.some(item => item === id);
            if(exists){
                setSelectedNotes(prevItens => prevItens.filter(item => item !== id))
            }
            else{
                setSelectedNotes((prevItens) => [ ...prevItens, id])
            }
        }
    }

    // close header selection
    const closeHeaderSelection = () => {
        setIsSelectionMode(false)
        setSelectedNotes([])
        setTimeout(() => {
            setIsLinkRelease(true)
        }, 300)
    }

    // Selected Note Count \ close selection mode
    useEffect(() => {
        // verificação base
        if (selectedNotes.length > 0) {
            setSelectedNotesCount(selectedNotes.length);
        } 
        else if (isSelectionMode) {
            closeHeaderSelection();
        }
    }, [selectedNotes, isSelectionMode]);


    // Clear selected notes when the route changes
    const location = useLocation()
    useEffect(() => {
        clearSelectedNotes()
    }, [location.pathname])



    return (
        <SelectedActionContext.Provider value={{ toggleSelectedNotesStatus, activeSelectionMode, isSelectionMode, setIsSelectionMode, isLinkRelease, setIsLinkRelease, selectedNotes, setSelectedNotes, selectedNotesCount, closeHeaderSelection, changeSelectedNotesCategory }}>
            {children}
        </SelectedActionContext.Provider>
    )
}


export default SelectedActionProvider;