
import { Icon } from '@iconify/react/dist/iconify.js';
import style from './NotesCategoriesMenu.module.css';

const NotesCategoriesMenu = ({ id, menuIsOpen, everyCategoriesSource, changeCategoryNote, isThemeLight }) => {

    // style theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;
    const styleMenuOpen = menuIsOpen ? style.styleOpenMenu : ""

    return (
        <div className={`${style.categoriesMenuContainer} ${styleTheme} ${styleMenuOpen}`}>
            <ul className={style.ul}>
                {everyCategoriesSource.map(item => (
                    <li key={item.category} role="button" className={style.li} onClick={() => changeCategoryNote(item.category, id)}>
                        <div className={style.containerIcon}>
                            <Icon icon={item.icon} width={15} />
                        </div>
                        {item.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesCategoriesMenu;
