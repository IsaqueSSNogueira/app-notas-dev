
// components
import FilteredScreenHeader from './FilteredScreenHeader/FilteredScreenHeader'
import HomeHeaderSelection from '../../BaseHeader/HomeHeaderSelection/HomeHeaderSelection';
import FilteredNotesMain from './FilteredNotesMain/FilteredNotesMain';


// base
import style from './FilteredNotesScreen.module.css';
import { useContext} from 'react';
import SelectedActionContext from '../../../../Data/SelectedActionProvider/SelectedActionContext';
import PreferencesContext from '../../../../Data/PreferencesProvider/PreferencesContext';

const FilteredNotesScreen = () => {

    const {isThemeLight} = useContext(PreferencesContext)
    const {isSelectionMode} = useContext(SelectedActionContext)

    return (

        <div className={style.filteredNotesContainer}>
            <FilteredScreenHeader isThemeLight={isThemeLight} />
            {isSelectionMode && <HomeHeaderSelection isThemeLight={isThemeLight} />}
            <FilteredNotesMain isThemeLight={isThemeLight}  />
        </div>
    )
}

export default FilteredNotesScreen;