import { signIn } from "next-auth/react";
import { FunctionComponent } from "react";

import styles from './StopSign.module.scss';

/***************************
 *  Types
 */
interface StopSignPropsType {

} 

type StopSignType = FunctionComponent<StopSignPropsType>



/***************************
 *  Main Component
 */
const StopSign:StopSignType = () => {

    return (
        <div className={styles.wrapper}>
            <p>To access this page and manage your plans, you must be a registered user. Please <button className={styles.loginButton} onClick={()=>signIn()}>log in</button> using your Google account.</p>
        </div>
    )
}

export default StopSign;