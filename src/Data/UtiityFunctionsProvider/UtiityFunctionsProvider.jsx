
// base
import { useEffect } from "react";
import UtiityFunctionsContext from "./UtiityFunctionsContext";


const UtiityFunctionsProvider = ({ children }) => {


    const useCloseMenu = (ref, callback, active = true) => {

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref?.current && !ref.current.contains(event.target)) {
                    callback(false);
                }
            };
        
            if (active) {
                document.addEventListener('click', handleClickOutside);
            }
        
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }, [active])
    }


    return (
        <UtiityFunctionsContext.Provider value={{useCloseMenu}}>
            {children}
        </UtiityFunctionsContext.Provider>
    )
}

export default UtiityFunctionsProvider;