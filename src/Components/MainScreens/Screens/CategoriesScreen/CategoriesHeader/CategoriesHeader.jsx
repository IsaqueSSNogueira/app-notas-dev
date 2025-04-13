
// base 
import { Link } from 'react-router-dom';
import style from './CategoriesHeader.module.css'
import { Icon } from '@iconify/react';


const CategoriesHeader = ({ isThemeLight }) => {

    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    return (
        <header className={`${style.categoriesHeader} ${styleTheme}`}>
            <Link to="/" className={style.iconClose}><Icon icon="mdi:arrow-left" width={28} /></Link>
            <div className={style.categoriesArea}>
                <Icon icon="bx:category" width={20} />
                <span>Categorias</span>
            </div>
        </header>
    )
}

export default CategoriesHeader;