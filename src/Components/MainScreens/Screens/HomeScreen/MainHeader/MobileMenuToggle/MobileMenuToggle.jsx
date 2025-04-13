
//components
import MobileMenuLinks from './MobileMenuLinks/MobileMenuLinks';
import UserProfile from './UserProfile/UserProfile';
import Logo from './Logo/Logo';

// base
import { useEffect, useRef, useState } from 'react'
import style from './MobileMenuToggle.module.css';


const MobileMenuToggle = ({ open, menuToggle, isThemeLight }) => {


    // style theme
    const styleThemeMenu = isThemeLight ? style.themeLightMenu : style.themeDarkMenu
    const styleThemeBackDrop = isThemeLight ? style.themeLightBackDrop : style.themeDarkBackDrop

    const menuContainerRef = useRef(null);
    const [backgroundTransform, setBackgroundTransform] = useState({});
    const [menuTransform, setMenuTransform] = useState({});


    useEffect(() => {
        if(open){
            setBackgroundTransform({transform: "translateX(0%)"});
            setMenuTransform({transform: "translateX(0%)"});
        }
        else {
            setMenuTransform({transform: "translateX(-100%)"});
            setTimeout(() => {
                setBackgroundTransform({transform: "translateX(-100%)"});
            }, 490)
        }
    }, [open])


    const handleClickOutside = (event) => {
        if(menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
            menuToggle(false)
        }
    }


    return (

        <div className={`${style.menuBackdrop} ${styleThemeBackDrop}`} style={backgroundTransform} onClick={handleClickOutside}>
            <div className={`${style.menuContainer} ${styleThemeMenu}`} style={menuTransform} ref={menuContainerRef}>
                <Logo />
                <UserProfile />
                <MobileMenuLinks onClick={menuToggle} isThemeLight={isThemeLight} />
            </div>
        </div>
    )
}


export default MobileMenuToggle;