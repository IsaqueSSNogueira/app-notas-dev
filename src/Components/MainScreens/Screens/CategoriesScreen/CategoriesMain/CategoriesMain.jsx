
// base
import { useEffect, useState } from 'react';
import CategoriesItem from './CategoriesItem/CategoriesItem';
import style from './CategoriesMain.module.css'


const CategoriesMain = ({ isThemeLight, everyCategoriesSource, toggleCategoriesActionScreen, responseMessage,  clicked, setClicked }) => {

    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    const [statusResponse, setStatusResponse] = useState(style.hidden)
    
    useEffect(() => {

        if(clicked){
            setStatusResponse('')
        }
        else{
            setStatusResponse(style.visibilityNone)
            setTimeout(() => {
                setStatusResponse(style.hidden)
            }, 2000)
        }
    }, [clicked])

    return (
        <main className={`${style.main} ${styleTheme}`}>
            {everyCategoriesSource.map(item => 
                <CategoriesItem key={item.category} objCategory={item} categoryName={item.category} categoryCount={item.count} color={item.color} icon={item.icon} toggleCategoriesActionScreen={toggleCategoriesActionScreen} isThemeLight={isThemeLight} />
            )}
            <span className={`${style.responseMessage} ${statusResponse}`}>{responseMessage}</span>
        </main>
    )
}


export default CategoriesMain;