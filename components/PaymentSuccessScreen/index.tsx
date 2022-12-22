import { FunctionComponent } from "react";

import styles from './PaymentSuccessScreen.module.scss';

/***************************
 *  Types
 */
interface PaymentSuccessScreenPropsType {
    name: string;
    email: string;
    onClose: () => void;
} 

type PaymentSuccessScreenType = FunctionComponent<PaymentSuccessScreenPropsType>



/***************************
 *  Main Component
 */
const PaymentSuccessScreen:PaymentSuccessScreenType = ({name, email, onClose}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <p>Thank you <span className={styles.name}>{name}</span> for your purchase!</p>
                <p>We will send you an email to <span className={styles.email}>{email}</span> with the details of your purchase.</p>
            </div>
            <div className={styles.footer}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default PaymentSuccessScreen;