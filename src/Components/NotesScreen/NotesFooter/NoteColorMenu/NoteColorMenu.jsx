
// base
import style from './NoteColorMenu.module.css'
import { useContext, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import StylesContext from '../../../../Data/StylesProvider/StylesContext';

// components
import ColorButton from './ColorButton/ColorButton';


const NoteColorMenu = ({isThemeLight, toggleColorMenu, isOpenColorMenu, everyNotesSource, setEveryNotesSource, idNote}) => {

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    const { noteColors } = useContext(StylesContext)
    const [styleSlideArea, setStyleSlideArea] = useState({})
    const [styleColorContainer, setColorContainer] = useState({})

    // menu transition
    useEffect(() => {
        setColorContainer(isOpenColorMenu ? style.colorContainerOpen : "")
        setStyleSlideArea(isOpenColorMenu ? style.slideAreaOpen : "")        
    }, [isOpenColorMenu])

    
    const changeColorNote = (color) => {

        const noteColorPallete = noteColors.find(item => item.id === color)

        setEveryNotesSource(prev => prev.map(item =>
            item.id === Number(idNote) ? {...item, colorPallete: noteColorPallete} : item 
        ))
    }


    return (
        <div className={`${style.colorMenuContainer} ${styleColorContainer} ${styleTheme}`} >
            <div className={`${style.colorMenuSlideArea} ${styleSlideArea}`}>
                <span className={style.iconCloseContainer}><Icon icon="ep:arrow-down-bold" width={24} height={24} className={style.iconClose} /></span>
                {noteColors.map((item) => 
                    <ColorButton
                        key={item.id} 
                        colorBase={item.noteColorBase} 
                        onClick={() => {changeColorNote(item.id); toggleColorMenu()}} 
                        idNote={idNote}
                        everyNotesSource={everyNotesSource}
                    /> 

                )}
            </div>

        </div>
    )
}


export default NoteColorMenu;