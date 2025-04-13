
// componentes
import NotesHeaderMain from './NotesHeaderMain/NotesHeaderMain';
import NotesHeaderSecundary from './NotesHeaderSecundary/NotesHeaderSecundary';
import { Editor } from 'slate';

// base
import style from './NotesHeader.module.css'


const NotesHeader = ({ notaAtual, isThemeLight, history }) => {



    return (
        <header className={style.header}>
            <NotesHeaderMain notaAtual={notaAtual} isThemeLight={isThemeLight} history={history} /> 
            <NotesHeaderSecundary notaAtual={notaAtual} isThemeLight={isThemeLight} />
        </header>
    )
}


export default NotesHeader;