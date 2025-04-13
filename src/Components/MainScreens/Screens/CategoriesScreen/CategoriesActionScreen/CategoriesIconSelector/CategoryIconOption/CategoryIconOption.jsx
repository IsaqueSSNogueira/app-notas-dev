

// base
import style from './CategoryIconOption.module.css'
import { Icon } from '@iconify/react';


const CategoryIconOption = ({ item, chooseColorAndIcon, iconCategory, isThemeLight }) => {

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    const icon = item.icon;
    const iconWidth = item.width
    const styleIconOption = iconCategory === item.icon ? style.styleIconOption : "";

    return(
        <div className={`${style.categoryIconOption} ${styleIconOption} ${styleTheme}`} onClick={() => chooseColorAndIcon("icon", icon, iconWidth)}>
            <Icon icon={icon} width={iconWidth} />
        </div>
    )
}


export default CategoryIconOption;