
// components
import HomeCategoriesMenu from './HomeCategoriesMenu/HomeCategoriesMenu'

// base
import style from './HomeCategoriesArea.module.css'
import { Icon } from '@iconify/react'
import { useEffect, useRef, useState, useContext } from 'react'
import CategoriesContext from '../../../../../../Data/CategoriesProvider/CategoriesContext'

const HomeCategoriesArea = ({ isThemeLight }) => {


    // style theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    const {everyCategoriesSource, setEveryCategoriesSource, currentCategory, changeCategory} = useContext(CategoriesContext);
    
    // categories
    const categoryLabelRef = useRef(null)
    
    // menu
    const categoriesContainerRef = useRef(null)
    const arrowDownRef = useRef(null)


    const [menuOpen, setMenuOpen] = useState(false)
    const menuToggle = () => {
        setTimeout(() => { 
            setMenuOpen(prev => !prev)
        }, 100)
    }

    // Toggle style - open menu
    useEffect(() => {
    if (categoriesContainerRef.current && arrowDownRef.current) {
        if (menuOpen) {
            categoriesContainerRef.current.classList.add(style.AreaContainerMenuOpen)
            arrowDownRef.current.classList.add(style.arrowDownMenuOpen)
        } else {
            categoriesContainerRef.current.classList.remove(style.AreaContainerMenuOpen)
            arrowDownRef.current.classList.remove(style.arrowDownMenuOpen)
        }
    }
    }, [menuOpen])
     
    
    return (    
        <div className={`${style.categoriesAreaContainer} ${styleTheme}`} ref={categoriesContainerRef} onClick={menuToggle}>
            <div className={style.iconCategoryContainer}>
                <Icon icon={currentCategory.icon} width={currentCategory.width - 8} />
            </div>
            <span ref={categoryLabelRef}>{currentCategory.category}</span> {/*exemplo*/}
            <Icon icon="ic:baseline-arrow-drop-down" width={18} height={24} className={style.arrowDown} ref={arrowDownRef} />
            <HomeCategoriesMenu onClick={menuToggle} menuOpen={menuOpen} everyCategoriesSource={everyCategoriesSource} setEveryCategoriesSource={setEveryCategoriesSource} changeCategory={changeCategory} isThemeLight={isThemeLight} />
        </div>
    )
}

export default HomeCategoriesArea;