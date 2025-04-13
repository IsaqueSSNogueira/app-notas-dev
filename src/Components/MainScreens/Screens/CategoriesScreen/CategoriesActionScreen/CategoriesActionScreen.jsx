

// base
import style from './CategoriesActionScreen.module.css'
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

// components
import CategoryColorSelector from './CategoryColorSelector/CategoryColorSelector';
import CategoriesActionButtons from './CategoriesActionButtons/CategoriesActionButtons';
import CategoryEditorName from './CategoryEditorName/CategoryEditorName';
import CategoriesIconSelector from './CategoriesIconSelector/CategoriesIconSelector';



const CategoriesActionScreen = ({ isOpenMenu, isThemeLight, toggleCategoriesActionScreen, addNewCategory, editCategory, addOrEdit, chosenCategory, activeResponseMessage }) => {
    
    // base
    const styleMenu = isOpenMenu ? style.open : style.close;
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;
    

    // title
    const titleContainer = addOrEdit === "edit" ? "Editar categoria" : "Adicionar categoria"

    // input
    const [categoryName, setCategoryName] = useState(chosenCategory.category || ""); 
    const [colorCategory, setColorCategory] = useState(chosenCategory.color || "white")
    const [colorNameCategory, setColorNameCategory] = useState(chosenCategory.colorName || "default")
    const [iconCategory, setIconCategory] = useState(chosenCategory.icon || "solar:book-linear")
    const [codeMessage, setCodeMessage] = useState(0)

    // color
    const styleColor = {backgroundColor: colorCategory || "#ffffff"}

    // initial update
    useEffect(() => {
        if(addOrEdit === "add"){
            setCategoryName("")
            setColorCategory("#ffffff")
            setColorNameCategory("default")
            setIconCategory("solar:book-linear")
        }
        else{
            setCategoryName(chosenCategory.category || "")
            setColorCategory(chosenCategory.color || "#ffffff")
            setColorNameCategory(chosenCategory.colorName || "default")
            setIconCategory(chosenCategory.icon || "solar:book-linear")
        }
    }, [chosenCategory, isOpenMenu, addOrEdit])


    // input onchange & code message
    const handleInputChange = (event) => {
        setCategoryName(event.target.value);
    };

    useEffect(() => {
        if(categoryName === ""){
            setCodeMessage(0)
        }
        else if(categoryName === chosenCategory.category && addOrEdit === "edit"){
            setCodeMessage(1)
        }
        else{
            setCodeMessage(2)
        }
    }, [categoryName])


    // add color and icon
    const chooseColorAndIcon = (type, value, colorName) => {
        switch (type) {
            case "color" : 
                setColorCategory(value)
                setColorNameCategory(colorName)
                break;
            case "icon" :
                setIconCategory(value)
                setColorNameCategory(colorName)

                break;
            default:
                setColorCategory("white")
                setColorNameCategory("white")
                setIconCategory("book")
        }
    }



    return(
        <div className={`${style.categoryActionBackground} ${styleMenu}`}>
            <div className={`${style.categoryActionContainer} ${styleTheme}`}>

                <h3 className={style.title}>{titleContainer}</h3>

                <CategoryEditorName handleInputChange={handleInputChange} categoryName={categoryName} addOrEdit={addOrEdit} code={codeMessage} isThemeLight={isThemeLight} />

                <span className={style.lineDivider}></span>

                <CategoryColorSelector chooseColorAndIcon={chooseColorAndIcon} colorCategory={colorCategory} isThemeLight={isThemeLight} />

                <span className={style.lineDivider}></span>

                <CategoriesIconSelector chooseColorAndIcon={chooseColorAndIcon} iconCategory={iconCategory} isThemeLight={isThemeLight} />
                
                <CategoriesActionButtons
                    isThemeLight={isThemeLight}
                    toggleCategoriesActionScreen={toggleCategoriesActionScreen} 
                    editCategory={editCategory} 
                    addNewCategory={addNewCategory} 
                    addOrEdit={addOrEdit} 
                    chosenCategory={chosenCategory} 
                    categoryName={categoryName} 
                    iconCategory={iconCategory} 
                    colorCategory={colorCategory}
                    colorNameCategory={colorNameCategory}
                    activeResponseMessage={activeResponseMessage}
                />

            </div>
        </div>
    )
}

export default CategoriesActionScreen;