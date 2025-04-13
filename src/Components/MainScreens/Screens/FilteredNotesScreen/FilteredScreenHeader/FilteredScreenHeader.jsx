

// components
import FilteredTitle from './FilteredTitle/FilteredTitle';

// base
import style from './FilteredScreenHeader.module.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';



const FilteredScreenHeader = ({ isThemeLight }) => {


    // theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark 

    // header color
    // if you want to be able to customize -> const [styleColorCategory, setStyleColorCategory] = useState({})

    // JSX Markup
    return (
        <header className={`${style.homeHeader} ${styleTheme}`}>
            {/*close icon*/}
            <Link to="/" className={style.linkBack}>
                <Icon icon="mdi:arrow-left" width={27} className={style.backIcon} />
            </Link>

            <FilteredTitle isThemeLight={isThemeLight} />

            <div className={style.iconContainerRight}>
                <Icon icon="heroicons-outline:search" width={23} height={23} />
                <Icon icon="material-symbols:more-vert" width={25} height={27} />
            </div>

        </header>
    )
}

export default FilteredScreenHeader;


