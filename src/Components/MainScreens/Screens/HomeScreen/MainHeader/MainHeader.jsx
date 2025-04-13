
// components
import HomeCategoriesArea from './MainCategoriesArea/HomeCategoriesArea';
import MobileMenuToggle from './MobileMenuToggle/MobileMenuToggle';

// base
import style from './MainHeader.module.css'
import { Icon } from '@iconify/react';
import { useState, useContext, useEffect } from 'react';
import CategoriesContext from '../../../../../Data/CategoriesProvider/CategoriesContext';



const MainHeader = ({ isThemeLight }) => {


    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark 

    // header color
    const {currentCategory, everyCategoriesSource} = useContext(CategoriesContext);
    const [styleColorCategory, setStyleColorCategory] = useState({})

    useEffect(() => {
            const color = everyCategoriesSource.find(item => item.category === currentCategory.category)
            setStyleColorCategory({backgroundColor:color.color})

    }, [currentCategory, everyCategoriesSource])
    


    // menu toggle
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggle = (isBackgroundClick) => {
        isBackgroundClick ? setMenuOpen(prevState => !prevState) : setMenuOpen(false);  
    }

    // JSX Markup
    return (
        <header className={`${style.homeHeader} ${styleTheme}`} style={styleColorCategory}>
            {/*mobile menu*/}
            <Icon icon="heroicons:bars-3-bottom-left-16-solid" width={27} height={27} onClick={menuToggle} className={style.styleTheme} />
            <MobileMenuToggle open={menuOpen} menuToggle={menuToggle} isThemeLight={isThemeLight} />

            <HomeCategoriesArea isThemeLight={isThemeLight} />

            <div className={style.iconContainerRight}>
                <Icon icon="heroicons-outline:search" width={23} height={23} />
                <Icon icon="material-symbols:more-vert" width={25} height={27} />
            </div>

        </header>
    )
}

export default MainHeader;