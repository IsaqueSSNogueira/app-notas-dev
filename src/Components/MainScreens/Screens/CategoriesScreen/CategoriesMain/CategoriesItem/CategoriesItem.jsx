
// base
import { Icon } from '@iconify/react';
import style from './CategoriesItem.module.css'


const CategoriesItem = ({ objCategory, categoryName, categoryCount, color, icon, toggleCategoriesActionScreen, isThemeLight }) => {

    // styles
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;
    const styleColor = {backgroundColor:color}


    return (
        <div className={`${style.categoriesItemContainer} ${styleTheme}`} style={styleColor}>
            <Icon icon="mdi:drag-horizontal-variant" width={24} className={style.dragIcon} />
            <div className={style.areaIcon}>
                <Icon icon={icon} />
            </div>
            <div className={style.textContainer}>
                <span>{categoryName}</span>
                <span>{`(${categoryCount})`}</span>
            </div>
            <Icon icon="solar:menu-dots-bold" width={24} className={style.menuDotsIcon} onClick={() => toggleCategoriesActionScreen('edit', objCategory)} />
        </div>
    )
}


export default CategoriesItem;