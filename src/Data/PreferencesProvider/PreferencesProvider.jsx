
// import
import PreferencesContext from "./PreferencesContext"
import { useState } from "react";


const PreferencesProvider = ({ children }) => {

    // theme
    const [isThemeLight, setIsThemeLight] = useState(true);
    const toggleTheme = () => setIsThemeLight(prev => !prev)

    // notification
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const toggleNotificationsState  = () => setNotificationsEnabled(prev => !prev)


    // text preferences default
    const [fontSize, setFontSize] = useState(14);
    const [fontFamily, setFontFamily] = useState("Roboto"); 
    const [textColor, setTextColor] = useState("default");
    const [colorNote, setColorNote] = useState('base');

    // values
    const arrayFontSize = [10, 12, 14, 16, 18, 20, 22, 24, 28]
    const arrayFontFamily = ['Roboto', 'Poppins', 'Patrick_Hand', 'Dancing_Script', 'Raleway', "Grechen_Fuemen", "Jacquard_12"]
    const arrayTextColor = ['default', "red", "orange", "yellow", "blue", "green", "brown", "purple", "pink", "gray"];

    // functions 
    const improveFontSize = (newValue) => setFontSize(newValue)
    const improveFontFamily = (newValue) => setFontFamily(newValue)
    const improveTextColor = (newValue) => setTextColor(newValue)
    const improveColorNote = (newValue) => setColorNote(newValue)
    const resetDefaultPreferences = () => {
        setFontSize(12)
        setFontFamily("Roboto")
        setTextColor("default")
        improveColorNote("base")
    }

    const [isSimulatingScreen, setIsSimulatingScreen] = useState(false)


    return (
        <PreferencesContext.Provider value={{ isThemeLight, toggleTheme, 
                                              notificationsEnabled, toggleNotificationsState, 
                                              fontSize, fontFamily, textColor, colorNote, 
                                              setColorNote /* "I will create the function directly in the PreferencesProvider to access the note colors*/,
                                              arrayFontSize, arrayFontFamily, arrayTextColor,
                                              improveFontSize, improveFontFamily, improveTextColor, improveColorNote, resetDefaultPreferences,
                                              isSimulatingScreen, setIsSimulatingScreen /*for screen simulation*/ }}>
            {children}
        </PreferencesContext.Provider>
    )
}

export default PreferencesProvider;