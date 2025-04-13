
// base
import { useContext } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import style from "./NotePreview.module.css";

// providers
import SelectedActionContext from "../../../../Data/SelectedActionProvider/SelectedActionContext";

const NotePreview = ({ id, title, content, noteColorPreview, createDate, isThemeLight }) => {

    // provider and them
    const {activeSelectionMode, isLinkRelease, selectedNotes} = useContext(SelectedActionContext)
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    // title and content
    const titleHTML = DOMPurify.sanitize(title)
    const contentHTML = DOMPurify.sanitize(content)

    // date
    const formattedDate = new Intl.DateTimeFormat('pt-BR').format(createDate);
    const isSelectedNote = new Set(selectedNotes).has(id);

    return (
        <Link to={isLinkRelease ? `/note/${id}` : "#"} className={style.link} onTouchStart={() => isLinkRelease && activeSelectionMode(id)} onClick={() => !isLinkRelease && activeSelectionMode(id)}>
            <div className={`${style.notePreviewContainer} ${isSelectedNote ? style.noteSelected : ''} ${styleTheme}`} style={{backgroundColor: noteColorPreview}}>
                <div className={style.titleContainer}>
                    <h2 dangerouslySetInnerHTML={{__html:titleHTML || ""}} className={style.h2}></h2> {/*title*/}
                </div>
                <div className={style.textContainer}>
                    <p dangerouslySetInnerHTML={{__html:contentHTML || ""}} className={style.p}></p> {/*content*/}
                </div>
                <span className={style.creationDate}>{formattedDate}</span>
            </div>
        </Link>   
    )
}

export default NotePreview;