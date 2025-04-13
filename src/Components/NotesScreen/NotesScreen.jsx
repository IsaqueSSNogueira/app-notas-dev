
// components
import NotesFooter from "./NotesFooter/NotesFooter.jsx";
import NotesHeader from "./NotesHeader/NotesHeader.jsx"
import NotesMain from "./NotesMain/NotesMain.jsx";

// base
import style from './NotesScreen.module.css';
import NotesContext from "../../Data/NotesProvider/NotesContext.js";
import PreferencesContext from "../../Data/PreferencesProvider/PreferencesContext.js";
import { useContext, useMemo, useEffect, useState, Children } from "react";
import { useParams } from "react-router-dom";

// slate
import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';

const NotesScreen = () => {

    // slate
    const editorTitle = useMemo(() => withReact(createEditor()), []);
    const editorContent = useMemo(() => withReact(createEditor()), []);


    // id & noteProvider
    const { id } = useParams();
    const { everyNotesSource, setEveryNotesSource, saveNote } = useContext(NotesContext);
    const {isThemeLight} = useContext(PreferencesContext)

    // current note
    const notaAtual = everyNotesSource.find((item) => item.id === Number(id));


    // history (for undo / redo )
    const [history, setHistory] = useState([])
    const newhistoryVersion = (children) => {
        // tem que definir limites na quantidade de versoes
        setHistory(prev => [...prev, children])
    }

    return (
        <div className={style.notesScreen}>
            <NotesHeader notaAtual={notaAtual} isThemeLight={isThemeLight} history={history} />
            <NotesMain id={id} saveNote={saveNote} notaAtual={notaAtual} isThemeLight={isThemeLight} editorTitle={editorTitle} editorContent={editorContent} newhistoryVersion={newhistoryVersion} />
            <NotesFooter everyNotesSource={everyNotesSource} id={id} setEveryNotesSource={setEveryNotesSource} notaAtual={notaAtual} isThemeLight={isThemeLight} editorContent={editorContent} />
        </div>
    )
}

export default NotesScreen;