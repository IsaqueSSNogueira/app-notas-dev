
// base
import styles from './PreferencesNoteColor.module.css'
import { Icon } from '@iconify/react';
import { useContext, useEffect, useState } from 'react';

// components
import PreferencesPanelButtons from '../PreferencesPanelButtons/PreferencesPanelButtons';

// context
import StylesContext from '../../../../../../../../Data/StylesProvider/StylesContext';


const PreferencesNoteColor = ({ togglePanel, colorNote, setColorNote, improveColorNote }) => {


    // base
    const {noteColors} = useContext(StylesContext)
    const [currentNoteColor, setCurrentNoteColor] = useState(colorNote);    

    const toggleNoteColor = (value) => {
        setCurrentNoteColor(prev => value || prev)
    }

    return (

        <div className={styles.containerPreference}>

            <h3 className={styles.titlePreference}>Color note</h3>

            <ul className={styles.list}>
                {noteColors.map(item => {
                    return (
                        <li style={{backgroundColor: item.noteColorBase}} className={styles.button} onClick={() => toggleNoteColor(item.id)}>
                            {currentNoteColor === item.id && <Icon icon='material-symbols:check' width={20} />}
                        </li>
                    )})}
            </ul>


            <PreferencesPanelButtons togglePanel={togglePanel} fn={improveColorNote} value={currentNoteColor} />

        </div>
    )
}

export default PreferencesNoteColor;