

// base
import style from './CategoryEditorName.module.css'


const CategoryEditorName = ({ handleInputChange, categoryName, code, isThemeLight }) => {

    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    const messageValidation = [
        { code:0, message:"**Categoria sem nome", style: style.textRed },
        { code:1, message:"**Nome atual", style: style.textGray },
        { code:2, message:"**Tudo certo", style: style.textGreen },
        //{ code:3, message:"**Já há uma categoria com este nome, okay?", style: style.textGray },
    ]

    return(
        <div className={`${style.categoryEditorName} ${styleTheme}`}>
            <input type="text" placeholder='Nome categoria' className={style.inputText} value={categoryName} onChange={handleInputChange}></input>
            <span className={`${style.messageValidation} ${messageValidation[code].style}`}>{messageValidation[code].message}</span>
        </div>
    )
}


export default CategoryEditorName;