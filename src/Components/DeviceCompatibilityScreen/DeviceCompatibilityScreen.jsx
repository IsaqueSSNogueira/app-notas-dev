

// base
import styles from "./DeviceCompatibilityScreen.module.css"
import phoneImg from "./../../assets/img/phone.png"
import PreferencesContext from "../../Data/PreferencesProvider/PreferencesContext"
import { useContext } from "react"

const DeviceCompatibilityScreen = () => {

    const {isSimulatingScreen, setIsSimulatingScreen} = useContext(PreferencesContext)
    
    const smartphoneScreenSimulator = () => {
        setIsSimulatingScreen(prev => !prev)
    }



    return (
    
        <div className={styles.mainContainer}>

            {isSimulatingScreen &&
                <iframe src="https://isaquessnogueira.github.io/app-notas/" style={{ width: "380px", height: "720px", transform: "scale(0.7)", border: "none", borderRadius:"20px" }} className={!isSimulatingScreen ? styles.hide : ""}></iframe>
            }
            {!isSimulatingScreen && 
                <div className={`${styles.notificationContainer}` }>
                    <img src={phoneImg} width="300" className={styles.phoneImg} />
                    <div className={styles.textContainer}>
                        <h1 className={styles.h1}>Notificação de compatibilidade de dispositivo:</h1>
                        <p className={styles.text}>Este aplicativo foi projetado para dispositivos móveis e pode não funcionar corretamente em telas maiores. Para uma melhor experiência, acesse-o em um smartphone.</p>
                        <button className={styles.button} onClick={smartphoneScreenSimulator}>Simular tela de um dispositivo móvel</button>
                        {/* <a className={`${styles.linkGithub} ${styles.button}`} href="https://github.com/IsaqueSSNogueira">Ir para o Github de IsaqueSSNogueira</a> */}
                    </div>
                </div>
            }

        </div>
    )
}

export default DeviceCompatibilityScreen;