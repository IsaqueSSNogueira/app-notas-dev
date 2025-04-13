

// base
import style from './CategoryColorSelector.module.css'
import { useContext } from 'react';

// context && component
import CategoryColorOption from './CategoryColorOption/CategoryColorOption';
import CategoriesContext from '../../../../../../Data/CategoriesProvider/CategoriesContext';


const CategoryColorSelector = ({ chooseColorAndIcon, colorCategory, isThemeLight }) => {

    const {categoryColors} = useContext(CategoriesContext)

    return(
        <div className={style.categoryColorSelector}>
                <h4 className={style.title}>Escolha a cor</h4>
                <div className={style.colorsArea}>
                    {categoryColors.map(item => 
                        <CategoryColorOption key={item.colorName} colorObj={item} chooseColorAndIcon={chooseColorAndIcon} colorCategory={colorCategory} isThemeLight={isThemeLight} />
                    )}
                </div>
        </div>
    )
}


export default CategoryColorSelector;