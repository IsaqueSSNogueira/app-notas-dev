
// base
import { useRef } from 'react';
import style from './UserProfile.module.css';
import { Icon } from '@iconify/react';

const UserProfile = () => {

    const profileImage = useRef(null)
    const userName = useRef(null)

    return (

        <div className={style.profileContainer}>
            <div className={style.profileImage} ref={profileImage}></div>
            <div className={style.userInfo}>
                <span className={style.userName} ref={userName}>Usuário</span>
                <span className={style.viewProfile}>Ver perfil</span>
            </div>
            <div className={style.currentPlan}><Icon icon="mingcute:rocket-line" width={17} height={17} />Free</div>
        </div>
    )
}

export default UserProfile;