

// base
import { Icon } from '@iconify/react';
import style from './NoteTextEditMenu.module.css';
import { useEffect, useState } from 'react';


const NoteTextEditMenu = ({ isOpenTextEditMenu, toggleTextEditMenu, styleColor, isThemeLight }) => {

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    // toggle menu status
    const [isOpenMenu, setIsOpenTextEditMenu] = useState(style.closeMenu);
    const [styleOverflowMask, setStyleOverflowMask] = useState({display:"none"})

    useEffect(() => {
        //wait for the mask to be rendered
        setTimeout(() => {
            setIsOpenTextEditMenu(isOpenTextEditMenu ? style.openMenu : style.closeMenu)
        }, 100)

        isOpenTextEditMenu 
            ? setStyleOverflowMask({ display: "block" })
            // wait for the textEditMenu transition to finish 
            : setTimeout(() => setStyleOverflowMask({ display: "none" }), 500);
    }, [isOpenTextEditMenu])

    return(
        <div className={style.overflowMask} style={styleOverflowMask}>
            <div className={`${style.noteTextEditMenu} ${isOpenMenu} ${styleTheme}`} style={styleColor} >
                <ul className={style.ul}>
                    {/*bold*/}
                    <li className={`${style.hideMenuIcon}`} onClick={() => toggleTextEditMenu()}>
                        <Icon icon="ep:d-arrow-left" width={22} />
                    </li>

                    {/*bold*/}
                    <li className={style.li}>
                        <Icon icon="proicons:text-bold" width={22} />
                    </li>
                    {/*italic*/}
                    <li className={style.li}>
                        <Icon icon="majesticons:italic" width={22} />
                    </li>
                    {/*underline*/}
                    <li className={style.li}>
                        <Icon icon="tabler:underline" width={22} />
                    </li>
                    {/*strikethrough*/}  
                    <li className={style.li}>
                        <Icon icon="tabler:strikethrough" width={22} />
                    </li>
                    {/*text color*/}  
                    <li className={style.li}>
                        <Icon icon="ph:pencil-circle-duotone" width={22} />
                    </li>
                    {/*highlighter*/}  
                    <li className={`${style.li} ${style.highlightLi}`}>
                        <Icon icon="ri:mark-pen-line" width={18} />
                        <span className={style.highlightUnderline} />
                    </li>
                    {/*font*/}  
                    <li className={style.li}>
                        <Icon icon="ion:text" width={22} />
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default NoteTextEditMenu;