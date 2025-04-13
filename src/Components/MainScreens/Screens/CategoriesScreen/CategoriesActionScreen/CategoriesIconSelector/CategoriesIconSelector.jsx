

// base
import { useContext } from 'react';
import style from './CategoriesIconSelector.module.css'
import CategoriesContext from '../../../../../../Data/CategoriesProvider/CategoriesContext';
import CategoryIconOption from './CategoryIconOption/CategoryIconOption';


const CategoriesIconSelector = ({chooseColorAndIcon, iconCategory, isThemeLight }) => {

    const {categoryIcons} = useContext(CategoriesContext)

    return(
        <div className={style.categoriesIconSelector}>
                <h4 className={style.title}>Escolha um ícone</h4>
                <div className={style.iconsArea}>
                    {categoryIcons.map((item, id) =>
                        <CategoryIconOption key={id} item={item} chooseColorAndIcon={chooseColorAndIcon} iconCategory={iconCategory} isThemeLight={isThemeLight} />
                    )}
                </div>
        </div>
    )
}


export default CategoriesIconSelector;