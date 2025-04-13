

// components
import NotesCategoriesMenu from './NotesCategoriesMenu/NotesCategoriesMenu';

//  base
import style from './NotesCategoriesArea.module.css'
import { Icon } from '@iconify/react'
import { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

// context
import CategoriesContext from './../../../../../Data/CategoriesProvider/CategoriesContext.js'
import NotesContext from '../../../../../Data/NotesProvider/NotesContext.js';
import UtiityFunctionsContext from '../../../../../Data/UtiityFunctionsProvider/UtiityFunctionsContext.js';

const NotesCategoriesArea = ({ isThemeLight }) => {

    // style theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    // toggle menu
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const styleOpenMenu = menuIsOpen ? style.styleOpenMenu : ""
    const toggleMenu = (value) => {
        setMenuIsOpen(value ?? ((prev) => !prev));
    }
    
    const {useCloseMenu} = useContext(UtiityFunctionsContext)
    const container = useRef()
    useCloseMenu(container, toggleMenu, menuIsOpen) 

    // providers
    const { id } = useParams();
    const {everyCategoriesSource, changeCategoryNote} = useContext(CategoriesContext);
    const {everyNotesSource, setEveryNotesSource} = useContext(NotesContext)

    // logic: change name base 
    const [currentCategoryNote, setCurrentCategoryNote] = useState('')
    const note = everyNotesSource.find(item => item.id === Number(id) ? item : null);
    
    useEffect(() => {
        const categoryObj = everyCategoriesSource.find(item => item.category === note.category) || {category: "Todes", icon: "hugeicons:workflow-square-06", width: "22"}
        setCurrentCategoryNote(categoryObj)
    }, [id, everyNotesSource, everyCategoriesSource])
    

    return (
        <div className={`${style.notesCategoriesArea} ${styleTheme} ${styleOpenMenu}`} onClick={() => toggleMenu()} style={{backgroundColor: note?.colorPallete?.noteColorBase || "white"}} ref={container}>
            <div className={style.categoryArea}> {/*style*/}
                <Icon icon={currentCategoryNote.icon} width={15} />
                <span className={style.text}>{currentCategoryNote.category}</span>
                <Icon icon="iconamoon:arrow-down-2-light" width={18} height={18} className={style.arrowDown} />
                
                <NotesCategoriesMenu id={id} menuIsOpen={menuIsOpen} everyCategoriesSource={everyCategoriesSource} setEveryNotesSource={setEveryNotesSource} changeCategoryNote={changeCategoryNote} isThemeLight={isThemeLight} />
            </div>
        </div>
    )
}

export default NotesCategoriesArea;