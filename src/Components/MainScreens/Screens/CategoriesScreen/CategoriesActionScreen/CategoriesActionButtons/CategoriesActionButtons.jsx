

// base
import style from './CategoriesActionButtons.module.css'


const CategoriesActionButtons = ({ isThemeLight, editCategory, addNewCategory, addOrEdit, chosenCategory, categoryName, iconCategory, colorCategory, colorNameCategory, toggleCategoriesActionScreen, activeResponseMessage }) => {

    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    return(
        <div className={`${style.buttonActionsContainer} ${styleTheme}`}>
            <button className={style.closeButton} onClick={() => {
                toggleCategoriesActionScreen() 
                }}>Cancelar</button>
            <button className={style.saveButton} disabled={categoryName === ""} onClick={() => {
                if(addOrEdit === "edit"){
                    editCategory(chosenCategory.category, categoryName, iconCategory, colorCategory, colorNameCategory) 
                    activeResponseMessage(categoryName)
                }
                else{
                    addNewCategory(categoryName, iconCategory, colorCategory, colorNameCategory)
                    activeResponseMessage(categoryName)
                }
                }}>Salvar</button>
        </div>
    )
}


export default CategoriesActionButtons;