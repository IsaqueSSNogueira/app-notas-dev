
// base
import styles from './PreferencesPanelButtons.module.css'


const PreferencesPanelButtons = ({ togglePanel, fn, value }) => {

    const saveAndClose = () => {
        togglePanel() 
        fn(value)
    }

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonCancel} onClick={() => togglePanel()}>Cancel</button>
            <button className={styles.buttonSave} onClick={() => saveAndClose()}>Save</button>
         </div>
    )
}

export default PreferencesPanelButtons;