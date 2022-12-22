import { FunctionComponent } from "react";

import styles from './PaymentScreen.module.scss';

import { PayPalButtons } from "@paypal/react-paypal-js";

/***************************
 *  Types
 */
interface PaymentScreenPropsType {
    total: number | null;
    onApprove: (name: string, email: string) => void;
    setShow: (show:boolean) => void;

} 

type PaymentScreenType = FunctionComponent<PaymentScreenPropsType>



/***************************
 *  Main Component
 */
const PaymentScreen:PaymentScreenType = ({total, onApprove, setShow}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <p>Your total is: <span className={styles.ammount}>${total}</span></p>
            </div>
            <div className={styles.footer}>
                <PayPalButtons style={{ 
                        layout: "horizontal",
                        color: "white", 

                    }}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: total +"",
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={async (data, actions) => {
                                if(!actions.order) return;
                                
                                return actions.order.capture().then((details) => {
                                    const givenName = details.payer.name?.given_name?  details.payer.name.given_name : ""; 
                                    const surname = details.payer.name?.surname?  details.payer.name.surname : "";
                                    const name = givenName + " " + surname;
                                    const email = details.payer.email_address? details.payer.email_address : "";

                                    onApprove(name, email);
                                });
                            }}

                            onCancel={() => {
                                setShow(false);     
                            }}
                        />
            </div>
        </div>
    )
}

export default PaymentScreen;