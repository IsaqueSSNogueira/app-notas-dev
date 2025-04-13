
// base
import SlateActionsContext from "./SlateActionsContext";
import { useState } from "react";
import { Editor, Range } from "slate";


const SlateActionsProvider = ({ children }) => {

    /*
    // undo && redo functions
    const undoNote = (editorContent) => {
        if (Editor.hasPath(editorContent, [0])) {
            editorContent.undo()
        }
    }
    const redoNote = (editorContent) => {
        if (Editor.hasPath(editorContent, [0])) {
            editorContent.redo()
        }
    }

    // for style action buttons
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);

    const checkHistory = (editorContent) => {
        setCanUndo(editorContent.history.undos.length > 0);
        setCanRedo(editorContent.history.redos.length > 0);
    }

    */


    return (

        <SlateActionsContext.Provider value={{/*undoNote, redoNote, canUndo, canRedo, checkHistory*/}}>
            {children}
        </SlateActionsContext.Provider>
    )
}


export default SlateActionsProvider;