
// import
import { useEffect, useState, useContext } from "react";
import StylesContext from "./StylesContext";
import PreferencesContext from "../PreferencesProvider/PreferencesContext";

const StylesProvider = ({ children }) => {

    const {isThemeLight} = useContext(PreferencesContext)
    const [noteColors, setNoteColors] = useState([]);

    useEffect(() => {
            setNoteColors([
                {id: "red", noteColorBase: isThemeLight ? "#ff9393" : "#A04C4C", noteColorSecun: isThemeLight ? "#FFE5E5" : "#8A3F3F", noteColorPreview: isThemeLight ? "#FF9393" : "#A04C4C"},
                {id: "orange", noteColorBase: isThemeLight ? "#FFD59A" : "#B45A23", noteColorSecun: isThemeLight ? "#FFEAD6" : "#93471C", noteColorPreview: isThemeLight ? "#FFD59A" : "#B45A23"},
                {id: "yellow", noteColorBase: isThemeLight ? "#FFF4A1" : "#A68F3A", noteColorSecun: isThemeLight ? "#FFF9D9" : "#8C7730", noteColorPreview: isThemeLight ? "#FFF4A1" : "#A68F3A"},
                {id: "light-yellow", noteColorBase: isThemeLight ? "#FAFBD4" : "#A29F6A", noteColorSecun: isThemeLight ? "#fcfcf2" : "#8E8B5C", noteColorPreview: isThemeLight ? "#FAFBD4" : "#A29F6A"},
                {id: "light-green", noteColorBase: isThemeLight ? "#C7FFB5" : "#4C9C4A", noteColorSecun: isThemeLight ? "#E8FFEA" : "#3E803C", noteColorPreview: isThemeLight ? "#C7FFB5" : "#4C9C4A"},
                {id: "green", noteColorBase: isThemeLight ? "#A4E3C4" : "#327B5C", noteColorSecun: isThemeLight ? "#DFF7E6" : "#295F49", noteColorPreview: isThemeLight ? "#A4E3C4" : "#327B5C"},
                {id: "blue", noteColorBase: isThemeLight ? "#A8D9FF" : "#356A99", noteColorSecun: isThemeLight ? "#E3F3FF" : "#2B577D", noteColorPreview: isThemeLight ? "#A8D9FF" : "#356A99"},
                {id: "pink", noteColorBase: isThemeLight ? "#FFD2D2" : "#A46666", noteColorSecun: isThemeLight ? "#FFE7E6" : "#8B5252", noteColorPreview: isThemeLight ? "#FFD2D2" : "#A46666"},
                {id: "dark-gray", noteColorBase: isThemeLight ? "#B6A9A9" : "#525252", noteColorSecun: isThemeLight ? "#DEDADA" : "#404040", noteColorPreview: isThemeLight ? "#B6A9A9" : "#525252"},
                {id: "gray", noteColorBase: isThemeLight ? "#D1D0D3" : "#666566", noteColorSecun: isThemeLight ? "#F7F7F8" : "#4F4F50", noteColorPreview: isThemeLight ? "#D1D0D3" : "#666566"},
                {id: "light", noteColorBase: isThemeLight ? "#e6e6e6" : "#A8A8A8", noteColorSecun: isThemeLight ? "#FAFAFA" : "#8a8888", noteColorPreview: isThemeLight ? "#e6e6e6" : "#BFBFBF"},
                {id: "base", noteColorBase: isThemeLight ? "#ffffff" : "#3E3E3E", noteColorSecun: isThemeLight ? "#fafafa" : "#525252", noteColorPreview: isThemeLight ? "#ffffff" : "#3E3E3E"},
            ]);
    }, [isThemeLight]);

    // for color : color:rgb(233, 232, 232)

    return (
        <StylesContext.Provider value={{ noteColors }}>
            {children}
        </StylesContext.Provider>
    );
};

export default StylesProvider;
