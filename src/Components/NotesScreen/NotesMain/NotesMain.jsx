
// base
import style from './NotesMain.module.css'
import { Slate, Editable} from "slate-react";
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';

// context


const NotesMain = ({ id, saveNote, notaAtual, isThemeLight, editorTitle, editorContent, newhistoryVersion }) => {
  
  // theme, ref and base
  const styleTheme = isThemeLight ? style.themeLight : style.themeDark;

  const debouncedSave = debounce(() => {
    typing()
    handleSave();
  }, 300);

  /*saveNote*/
  const handleSave = () => {
    const titleJSON = JSON.stringify(editorTitle.children);
    const contentJSON = JSON.stringify(editorContent.children);
    saveNote(id,titleJSON,contentJSON);
  };


  // history
  const [isTyping, setIsTyping] = useState(false)
  const stoppedTyping = useRef(null);
  const typing = () => {
    clearTimeout(stoppedTyping.current)
    stoppedTyping.current = setTimeout(() => {
      setIsTyping(true)
    }, 3000);
  }

  useEffect(() => {return () => clearTimeout(stoppedTyping.current)}, [])

  useEffect(() => {
    if(isTyping){
      const contentJSON = JSON.stringify(editorContent.children);
      newhistoryVersion(contentJSON)
      setIsTyping(false)
    }
  }, [isTyping])


  // initial value
  const titleSlateInitialValue = notaAtual?.title ? JSON.parse(notaAtual.title) : [{ type: 'paragraph', children: [{ text: '' }] }];
  const contentSlateInitialValue = notaAtual?.content ? JSON.parse(notaAtual.content) : [{ type: 'paragraph', children: [{ text: '' }] }];


  return (

      <main className={`${styleTheme} ${style.notesMain}`}>
        {/* title */}
        <div className={style.containerTitle}>
          <Slate editor={editorTitle} initialValue={titleSlateInitialValue} onChange={debouncedSave}>
            <Editable className={style.noteTitle} placeholder="Título" />
          </Slate>
        </div>

        {/* content */}
        <div className={style.containerText}>
          <Slate editor={editorContent} initialValue={contentSlateInitialValue} onChange={debouncedSave}>
            <Editable className={`${style.noteText} ${style[`font_size_${notaAtual.fontSize}`]} ${style[`font_family_${notaAtual.fontFamily}`]} ${style[`text_color_${notaAtual.textColor}`]}`} placeholder="Nota" /> 
          </Slate>
        </div>
      </main>

  );
}

export default NotesMain;
