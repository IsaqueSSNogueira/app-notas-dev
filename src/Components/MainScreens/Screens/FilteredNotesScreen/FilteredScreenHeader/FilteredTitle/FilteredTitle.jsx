
// base
import style from './FilteredTitle.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';


const FilteredTitle = ({ isThemeLight }) => {

    const styleTheme = isThemeLight ? style.themeLight : style.themeDark;


    const {filter} = useParams()
    const [title, setTitle] = useState('')
    const [icon, setIcon] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        switch (filter){
            case "favorites" :
                setTitle("Favoritas");
                setIcon('ri:star-line')
                break;
            case "archived" :
                setTitle("Arquivadas");
                setIcon('mdi:archive-outline')
                break;
            case "trash" :
                setTitle("Lixeira");
                setIcon('lucide:trash')
                break;
            default :
                navigate("/")
                break;            
        }
    }, [filter])


    return(
        <div className={`${style.container} ${styleTheme}`}>
            <Icon icon={icon} width={14} />
            <h2 className={style.filteredTitle}>{title}</h2>
        </div>
    )

}

export default FilteredTitle;