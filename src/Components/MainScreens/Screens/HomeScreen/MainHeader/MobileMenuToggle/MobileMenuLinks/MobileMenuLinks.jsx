
// base
import style from './MobileMenuLinks.module.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import StylesContext from './../../../../../../../Data/StylesProvider/StylesContext';


const MobileMenuLinks = ({onClick, isThemeLight}) => {

    const {toggleTheme} = useContext(StylesContext)

    // style theme
    const styleTheme = isThemeLight ? style.themeLight : style.themeDark

    return (
        // <Icon icon="" width={20} height={20} />
        <div className={`${style.menuLinksContainer} ${styleTheme}`}>
            <ul className={style.sectionsList}>
                <Link to='/' onClick={onClick}><li><Icon icon='icon-park-outline:notes' width={20} height={20} className={style.icon} /><span>Notas</span></li></Link>
                <Link to='/categories' onClick={onClick}><li><Icon icon="material-symbols:book-outline" width={20} height={20} className={style.icon} /><span>Categorias</span></li></Link>
            </ul>
            <ul className={style.otherLinksList}>
                <Link to='/filtered-notes/favorites' onClick={onClick}><li><Icon icon="mi:favorite" width={20} height={20} className={style.icon} /><span>Favoritos</span></li></Link>
                <Link to='/filtered-notes/archived' onClick={onClick}><li><Icon icon="iconoir:archive" width={19} height={20} className={style.icon} /><span>Arquivadas</span></li></Link>
                <Link to='/filtered-notes/trash' onClick={onClick}><li><Icon icon="mdi:trash-outline" width={21} height={21} className={style.icon} /><span>Lixeira</span></li></Link>
            </ul>
            <span className={style.listDivider}></span>
            <ul className={style.settingsList}>
                {/*<li><Icon icon="material-symbols:inbox-customize-outline-rounded" width={19} height={21} className={style.icon} /><span>Personalizar</span></li>*/}
                <Link to='/preferences' onClick={onClick}><li><Icon icon="pajamas:preferences" width={18} height={19} className={style.icon} /><span>Preferências</span></li></Link>
                <li><Icon icon="material-symbols:help-outline" width={17} height={18} className={style.icon} /><span>Ajuda e Feedback</span></li>
                {/*<li onClick={() => {toggleTheme()}}><Icon icon="mdi:paint-outline" width={20} height={22}  className={style.icon} /><span>Mudar tema</span></li>*/}
            </ul>

        </div>
    )
}

export default MobileMenuLinks;