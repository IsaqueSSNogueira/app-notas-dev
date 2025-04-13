
// components
import NotePreview from "./../../../BaseMain/NotePreview/NotePreview.jsx";

// base
import { useContext} from 'react'
import NotesContext from './../../../../../Data/NotesProvider/NotesContext.js'
import CategoriesContext from './../../../../../Data/CategoriesProvider/CategoriesContext.js'
import style from "./HomeMain.module.css";



const HomeMain = ({ isThemeLight, isSelectionMode }) => {

    // style themes and providers
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;
    const {currentCategory} = useContext(CategoriesContext);
    const {everyNotesSource, addNewNote} = useContext(NotesContext)

    // main notes
    const filterNotes = everyNotesSource.filter(item => {
        if(item.isArchived || item.isDeleted || item.isPinned) return false
        return currentCategory.category === "Todas" || item.category === currentCategory.category;
    })

    // pinned notes
    let pinnedNotes = everyNotesSource.filter(item => {
        if(item.isArchived || item.isDeleted) return false
        return currentCategory.category === "Todas" && item.isPinned || item.category === currentCategory.category && item.isPinned;
    })
    if(pinnedNotes.length === 0) {
        pinnedNotes = false;
    }

    // slate to html      
    const slateToHtml = (data) => {
        const dataArray = Array.isArray(data) ? data : JSON.parse(data);
        return dataArray.map((block) => {
        if (block.type === 'paragraph') {
            const text = block.children.map(child => child.text).join('');
            return `<p>${text.replace(/\n/g, '<br />')}</p>`;
        }
        return '';
        }).join('');
    };
    

    return (
        <div className={`${style.baseStyleNotesMain} ${styleTheme}`}>
            {pinnedNotes && <div className={style.fixedNotesContainer}>
                <h2 className={style.h2}>Fixadas</h2>
                <div className={style.notesContainer}>
                    {pinnedNotes.map(item => {
                        return <NotePreview 
                                    key={item.id} 
                                    id={item.id} 
                                    title={slateToHtml(item.title)} 
                                    content={slateToHtml(item.content)} 
                                    noteColorPreview={item.colorPallete.noteColorPreview} 
                                    createDate={item.createDate} 
                                    isThemeLight={isThemeLight}
                                />
                    })}
              </div>
            </div>}

            <div className={style.mainNotesContainer}>
                {pinnedNotes && <h2 className={style.h2}>Outras</h2>}
                <div className={style.notesContainer}>
                    {filterNotes.map(item => {
                        return <NotePreview 
                                    key={item.id} 
                                    id={item.id} 
                                    title={slateToHtml(item.title)} 
                                    content={slateToHtml(item.content)} 
                                    noteColorPreview={item.colorPallete.noteColorPreview} 
                                    createDate={item.createDate} 
                                    isThemeLight={isThemeLight}
                                />
                    })}
                </div>
            </div>
            
            {!isSelectionMode && <button className={style.createNotebutton} onClick={() => addNewNote(currentCategory.category)}>+</button>}
        </div>
    )
}

export default HomeMain;