
// components
import NoteMoreOptionsMenu from './NoteMoreOptionsMenu/NoteMoreOptionsMenu';

// base
import { useContext, useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';
import style from './NotesHeaderMain.module.css';

// context
import NoteActionsContext from '../../../../Data/NoteActions/NoteActionsContext';
import SlateActionsContext from '../../../../Data/SlateActions/SlateActionsContext';
import UtiityFunctionsContext from '../../../../Data/UtiityFunctionsProvider/UtiityFunctionsContext';

const NotesHeaderMain = ({ notaAtual, isThemeLight, history }) => {

    // style color
    const styleColor = notaAtual?.colorPallete?.noteColorBase ? {backgroundColor:notaAtual.colorPallete.noteColorBase} : {backgroundColor:""}
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    // status note
    const {toggleNoteStatus} = useContext(NoteActionsContext);
    const isNotePinned = notaAtual.isPinned ? "tabler:pinned-filled" : "tabler:pinned";

    // more options menu
    const [menuMoreIsOpen, setMenuMoreIsOpen] = useState(false);
    const toggleMenuMore = (value) => {
        setTimeout(() => {
            setMenuMoreIsOpen(value ?? ((prev) => !prev));
        }, 10);
    };

    const {useCloseMenu} = useContext(UtiityFunctionsContext)
    const iconMenu = useRef(null)
    useCloseMenu(iconMenu, toggleMenuMore, menuMoreIsOpen)


    // history
    const [historyCurrent, setHistoryCurrent] = useState(history.length)
    useEffect(() => {
        setHistoryCurrent(history.length)
    }, [history.length])

    const actionHistory = (type) => {
        if(type === "undo" && historyCurrent > 0){
            setHistoryCurrent(prev => prev - 1)
        }
        else if(type === "redo" && historyCurrent < history.length - 1){
            setHistoryCurrent(prev => prev + 1)
        }
    }

    return (
        <div className={`${style.mainHeader} ${styleTheme}`} style={styleColor}>

            <Link to="/" className={style.removeDefaultLinkProps}><Icon icon="mingcute:arrow-left-line" width={25} height={25} /></Link>

            <div className={style.undoRedoPanel}>
                <span className={style.containerIcon}>
                    <Icon icon="solar:undo-left-bold" width={24} height={24} className={`${style.undoIcon} ${false ? style.canActionIcon : ""}`} onClick={() => actionHistory("undo")} />
                </span>
                <span className={style.containerIcon}>
                    <Icon icon="solar:undo-right-bold" width={24} height={24} className={`${style.redoIcon} ${false ? style.canActionIcon : ""}`} onClick={() => actionHistory("redo")} />
                </span>
            </div>

            <div className={style.rightPanel}>
                <Icon icon={isNotePinned} width={25} onClick={() => toggleNoteStatus("isPinned", notaAtual.id)} ref={iconMenu} />
                <span className={style.menuMore}>
                    <Icon icon="qlementine-icons:menu-dots-16" width={26} onClick={toggleMenuMore} />
                </span>
                <NoteMoreOptionsMenu menuMoreIsOpen={menuMoreIsOpen} onClick={toggleMenuMore} isThemeLight={isThemeLight} iconMenu={iconMenu} />
            </div>

        </div>
    )
}


export default NotesHeaderMain;