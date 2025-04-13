
// base
import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import NotesContext from '../../../Data/NotesProvider/NotesContext'
import style from "./NotesFooter.module.css"

// components
import NoteColorMenu from './NoteColorMenu/NoteColorMenu'
import NoteTextEditMenu from './NoteTextEditMenu/NoteTextEditMenu'

const NotesFooter = ({ everyNotesSource, id, setEveryNotesSource, notaAtual, isThemeLight}) => {

    // style color
    const styleColor = notaAtual?.colorPallete?.noteColorBase ? {backgroundColor:notaAtual.colorPallete.noteColorSecun} : {backgroundColor: isThemeLight ? "white" : "rgb(62, 62, 62)"}
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;



    // color menu
    const [isOpenTextEditMenu, setIsOpenTextEditMenu] = useState(false)
    const toggleTextEditMenu = () => {
        setIsOpenTextEditMenu(prev => !prev)
    }

    // color menu
    const [isOpenColorMenu, setIsOpenColorMenu] = useState(false)
    const toggleColorMenu = () => {
        setIsOpenColorMenu(prev => !prev)
    }
    
    return (
        <footer className={`${style.footer} ${styleTheme}`}>
            <ul className={`${style.featureList}`} style={styleColor}>
                {/*text edit*/}
                <li className={style.li}>
                    <Icon className={style.icon} icon="gridicons:text-color" width={22} height={22} onClick={() => toggleTextEditMenu()} />
                    <NoteTextEditMenu isOpenTextEditMenu={isOpenTextEditMenu} toggleTextEditMenu={toggleTextEditMenu} styleColor={styleColor} isThemeLight={isThemeLight} />    
                </li>

                <li className={style.li}><Icon className={style.icon} icon="mingcute:align-left-line" width={24} height={24} /></li>
                <li className={style.li}><Icon className={style.icon} icon="raphael:ruler" width={20} height={20} /></li>
                <li className={style.li}><Icon className={style.icon} icon="basil:add-outline" width={25} height={25} /></li>
                <li className={style.li}><Icon className={style.icon} icon="material-symbols:add-reaction-outline" width={20} height={20} /></li>

                {/*note color*/}
                <li className={`${style.referencePosition} ${style.li} ${isOpenColorMenu ? style.menuColorOpen : ""}`}>
                    <Icon className={style.icon} icon="mdi:paint-outline" width={22} height={22} onClick={toggleColorMenu} />
                    <NoteColorMenu isThemeLight={isThemeLight} toggleColorMenu={toggleColorMenu} isOpenColorMenu={isOpenColorMenu} everyNotesSource={everyNotesSource} setEveryNotesSource={setEveryNotesSource} idNote={id} />                
                </li>
            </ul>
        </footer>
    )
}

export default NotesFooter;