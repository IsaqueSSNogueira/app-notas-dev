
// base
import style from "./CategoriesScreen.module.css"
import { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import CategoriesContext from "../../../../Data/CategoriesProvider/CategoriesContext";
import PreferencesContext from "./../../../../Data/PreferencesProvider/PreferencesContext"

// components
import CategoriesHeader from "./CategoriesHeader/CategoriesHeader";
import CategoriesMain from "./CategoriesMain/CategoriesMain";
import CategoriesActionScreen from "./CategoriesActionScreen/CategoriesActionScreen";

const CategoriesScreen = () => {

    // providers
    const {everyCategoriesSource, addNewCategory, editCategory, currentCategory} = useContext(CategoriesContext)
    const {isThemeLight} = useContext(PreferencesContext)

    // style
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;


    // categoriesActionScreen
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [addOrEdit, setAddOrEdit] = useState('')
    const [chosenCategory, setChosenCategory] = useState({})
    const [responseMessage, setResponseMessage] = useState("Salvo com sucesso")
    const [clicked, setClicked] = useState(false)

    const toggleCategoriesActionScreen = (type, objCategory) => {
        setIsOpenMenu(prev => !prev)
        switch (type) {
            case 'add':
                setAddOrEdit('add')
                break;
            case 'edit':
                setAddOrEdit('edit')
                setChosenCategory(objCategory)
                break;
            default: 
                setAddOrEdit('add')
        }
    }

    const activeResponseMessage = (categoryName) => {
        if(addOrEdit === "edit"){
            setResponseMessage("Categoria atualizada")
        }
        else if(addOrEdit === "add"){
            const exist = everyCategoriesSource.some(item => item.category === categoryName)
            exist ? setResponseMessage("Já existe uma categoria com este nome, só foi atualizada") : setResponseMessage("Salvo com sucesso")
        }
        else {
        setResponseMessage("Salvo com sucesso")
        }

        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        }, 1000)

        toggleCategoriesActionScreen()
    }

    return (
        <div className={`${style.categoriesScreen} ${styleTheme}`}>
            <CategoriesHeader isThemeLight={isThemeLight} />
            <CategoriesMain isThemeLight={isThemeLight} everyCategoriesSource={everyCategoriesSource} toggleCategoriesActionScreen={toggleCategoriesActionScreen} responseMessage={responseMessage} clicked={clicked} setClicked={setClicked} />
            <CategoriesActionScreen toggleCategoriesActionScreen={toggleCategoriesActionScreen} activeResponseMessage={activeResponseMessage} isOpenMenu={isOpenMenu} addNewCategory={addNewCategory} addOrEdit={addOrEdit} chosenCategory={chosenCategory} editCategory={editCategory} isThemeLight={isThemeLight} />
            <button className={style.buttonAddCategory} onClick={() => toggleCategoriesActionScreen('add')}><Icon icon="material-symbols:add" width={16} /> Adicionar Categoria</button>
        </div>
    )
}

export default CategoriesScreen;