
// base
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// context
import NotesContext from './NotesContext';
import StylesContext from '../StylesProvider/StylesContext'
import PreferencesContext from '../PreferencesProvider/PreferencesContext';

//
const NotesProvider = ({ children }) => {

    const [everyNotesSource, setEveryNotesSource] = useState([])
    const navigate = useNavigate()
    const {isSimulatingScreen} = useContext(PreferencesContext)

    // style colors
    const {noteColors, isThemeLight} = useContext(StylesContext)
    const {fontSize, fontFamily, textColor, colorNote} = useContext(PreferencesContext)
    const colorBase = noteColors.find(item => item?.id === colorNote || item?.id === "base") || {id: "base", noteColorBase: isThemeLight ? "#ffffff" : "#3E3E3E", noteColorSecun: isThemeLight ? "#fafafa" : "#525252", noteColorPreview: isThemeLight ? "#ffffff" : "#3E3E3E"};

    // factory function -> notes
    const createNote = (currentCategory) => {

        return {
            // id
            id: Date.now(),
            category: currentCategory || "Todas",
            // content and personalize
            title: JSON.stringify([{ type: 'paragraph', children: [{ text: '' }] }]),
            content: JSON.stringify([{ type: 'paragraph', children: [{ text: '' }] }]),
            attachments: [],
            history: [],
            // default preferences 
            colorPallete: colorBase,
            fontSize:fontSize || 12,
            fontFamily:fontFamily || "Roboto",
            textColor:textColor || "black",
            background: '',
            // info & markers
            createDate: new Date(),
            lastModificationDate: new Date(),
            isPinned: false,
            isFavorite: false,
            isArchived: false,
            isDeleted:false,
            isNewNote:true,
            tags: [],
        }
    }

    const addNewNote = (currentCategory) => {
        const newNote = createNote(currentCategory)
        setEveryNotesSource(prevItem => [...prevItem, newNote])
        navigate(`/note/${newNote.id}`)
    } 

    const saveNote = (id, titleJSON, contentJSON) => {
        setEveryNotesSource(prev => 
            prev.map(note => 
            note.id === Number(id) 
            ? {...note, title:titleJSON, content: contentJSON} 
            : note 
        ))
    }

    // change theme
    useEffect(() => {
        setEveryNotesSource(prev =>
            prev.map(itemNote => ({
                ...itemNote,
                colorPallete: noteColors.find(itemPallete => itemPallete.id === itemNote.colorPallete.id) || {noteColorPreview: ""}
            }))
        );
    }, [noteColors])

    // initial
    useEffect(() => {
        addNewNote()
        navigate(`/`)
    }, []);


  // fullscreen
  useEffect(() => {
      const element = document.documentElement;
      if(!isSimulatingScreen){
        if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) { // Chrome, Safari e Opera
            element.webkitRequestFullscreen();
          } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
          }
      }
  }, [navigate, isSimulatingScreen]);


    return (
        <NotesContext.Provider value={{ everyNotesSource, setEveryNotesSource, addNewNote, saveNote}}>
            {children}
        </NotesContext.Provider>
    )
}


export default NotesProvider;