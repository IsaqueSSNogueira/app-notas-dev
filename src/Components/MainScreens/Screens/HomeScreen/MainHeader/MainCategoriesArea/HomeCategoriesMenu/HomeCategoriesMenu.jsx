
// base
import style from './HomeCategoriesMenu.module.css';
import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';


const HomeCategoriesMenu = ({ onClick, menuOpen, everyCategoriesSource, setEveryCategoriesSource, changeCategory, isThemeLight }) => {

    // style theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    // ref
    const categoriesMenuContainerRef = useRef(null)

    // Toggle style
    useEffect(() => {
      if(categoriesMenuContainerRef.current){
        if(menuOpen){
            categoriesMenuContainerRef.current.classList.add(style.categoriesContainerMenuOpen)
        }
        else{
            categoriesMenuContainerRef.current.classList.remove(style.categoriesContainerMenuOpen)
        }
      }

    }, [menuOpen])

    return (

        <div className={`${style.categoriesMenuContainer} ${styleTheme}`} ref={categoriesMenuContainerRef}>
            <ul>
            {everyCategoriesSource.map((item) => {
                    if(everyCategoriesSource && everyCategoriesSource.length > 0){
                        return (
                            <li key={item.category} onClick={() => changeCategory(item)}><span>{item.category}</span><span>{item.count}</span></li>
                        )
                    }
                })}
                <li className={style.areaAddCategorie}>
                    <span>Nova categoria</span>
                    <Icon icon="ix:new-indicator" width="18" className={style.buttonAddCategorie}/>
                </li> 
            </ul>
        </div>
    )
}

export default HomeCategoriesMenu;