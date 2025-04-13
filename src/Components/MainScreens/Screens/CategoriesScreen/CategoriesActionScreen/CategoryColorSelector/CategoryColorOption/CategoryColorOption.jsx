
// base
import { Icon } from '@iconify/react/dist/iconify.js';
import style from './CategoryColorOption.module.css'


const CategoryColorOption = ({colorObj, chooseColorAndIcon, colorCategory, isThemeLight}) => {

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    const color = colorObj.color
    const colorName = colorObj.colorName
    const styleColor = {backgroundColor:color || "#ffffff"}
    const styleActive = colorCategory === color ? style.colorOptionActive : ""

    return(
        <div className={`${style.categoryColorOption} ${styleActive} ${styleTheme}`} style={styleColor} onClick={() => chooseColorAndIcon("color", color, colorName)}>
            {colorCategory === color ? <Icon icon="bxs:color-fill" width={21.5} className={style.iconFill} /> : null}
        </div>
    )
}


export default CategoryColorOption;