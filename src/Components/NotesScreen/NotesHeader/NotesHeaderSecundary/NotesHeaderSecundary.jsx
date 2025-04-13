
// components
import NotesCategoriesArea from './NotesCategoriesArea/NotesCategoriesArea';

// base
import style from './NotesHeaderSecundary.module.css';



const NotesHeaderSecundary = ({ notaAtual, isThemeLight }) => {

    // style themes
    const styleColor = notaAtual?.colorPallete?.noteColorSecun ? {backgroundColor:notaAtual.colorPallete.noteColorSecun} : {backgroundColor:""}
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

    return (
        <div className={`${style.notesHeaderSecundary} ${styleTheme}`} style={styleColor}>
            <NotesCategoriesArea isThemeLight={isThemeLight} />
            {/*<Icon icon="lets-icons:clock" width={24} height={24} className={style.iconClock} />*/}
        </div>
    )
}

export default NotesHeaderSecundary;