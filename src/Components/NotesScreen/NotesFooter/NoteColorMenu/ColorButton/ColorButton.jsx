import { useEffect, useState } from 'react';
import style from './ColorButton.module.css';
import { Icon } from '@iconify/react';

const ColorButton = ({ isBase, colorBase, onClick, everyNotesSource, idNote }) => {

    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        const note = everyNotesSource.find(item => item.id === Number(idNote));
        const isColorSelected = note?.colorPallete?.noteColorBase === colorBase;
        setIsSelected(isColorSelected);
    }, [everyNotesSource, idNote, colorBase]);

    return (

        <div className={style.colorButton} style={{ backgroundColor: colorBase }} onClick={onClick}>
            {isSelected && <Icon icon="material-symbols:check" className={style.selectedColor} width={22} />}
        </div>

    );
};

export default ColorButton;
