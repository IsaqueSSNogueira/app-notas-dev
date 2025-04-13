
// components
import NotePreview from './../../../BaseMain/NotePreview/NotePreview'

// base
import { useParams } from "react-router-dom";
import { useContext} from 'react'
import NotesContext from '../../../../../Data/NotesProvider/NotesContext.js'
import style from './FilteredNotesMain.module.css';

const FilteredNotesMain = ({ isThemeLight, activeSelectionMode, isLinkRelease, selectedNotes}) => {

    // style themes
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    // providers
    const {everyNotesSource} = useContext(NotesContext)

    const {filter} = useParams()    

    const filterNotes = everyNotesSource.filter(item => {
        switch (filter) {
            case 'trash' :
                return item.isDeleted
            case 'archived' :
                return item.isArchived && !item.isDeleted
            case 'favorites' :
                return item.isFavorite && !item.isArchived && !item.isDeleted
        }
    })

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
            <main className={style.homeMain}>
                {filterNotes.map(item => {
                    return <NotePreview 
                                key={item.id}
                                id={item.id} 
                                title={slateToHtml(item.title)} 
                                content={slateToHtml(item.content)} 
                                noteColorPreview={item.colorPallete.noteColorPreview} 
                                createDate={item.createDate} 
                                activeSelectionMode={activeSelectionMode} 
                                isLinkRelease={isLinkRelease} 
                                selectedNotes={selectedNotes}
                                isThemeLight={isThemeLight}
                            />
                })}
            </main>
        </div>
    )
}


export default FilteredNotesMain;