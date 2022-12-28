import { FunctionComponent } from "react";

import styles from './PaymentScreen.module.scss';

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


/***************************
 *  Types
 */
interface PaymentScreenPropsType {
    total: number | null;
    onApprove: (name: string, email: string) => void;
    close: () => void;

} 

type PaymentScreenType = FunctionComponent<PaymentScreenPropsType>


/***************************
 *  Main Component
 */
const PaymentScreen:PaymentScreenType = ({total, onApprove}) => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <p>Your total is: <span className={styles.ammount}>${Number.isInteger(total)? total : total?.toFixed(2)}</span></p>
            </div>
            <div className={styles.footer}>
                <PayButton 
                    total={total}
                    onApprove={onApprove}
                />
            </div>
        </div>
    )
}

export default PaymentScreen;



/**********************************
 * PayButton Component
 */

interface PayButtonProps {
    total: number | null;
    onApprove: (name: string, email: string) => void;
}

type PayButtonType = FunctionComponent<PayButtonProps>;

const PayButton:PayButtonType = ({total, onApprove}) => {
    return (
        <PayPalButtons style={{ 
            layout: "vertical",
            color: "white", 

            }}
                createSubscription={(data, actions) => {
                    return actions.subscription.create({
                        plan_id: "P-0BL20044TX123340FMOSVPDQ",
                        plan: {
                            // plan_id: "P-0BL20044TX123340FMOSVPDQ",
                            name: "Coffee Roasters",
                            description: "Delicious coffee delivered to your door",
                            status: "ACTIVE",
                            billing_cycles: [
                                {
                                    frequency: {
                                        interval_unit: "MONTH",
                                        interval_count: "1",
                                    },
                                    tenure_type: "REGULAR",
                                    sequence: "1",
                                    total_cycles: "0",
                                    pricing_scheme: {
                                        fixed_price: {
                                            value: total? total+'' : '0',
                                            currency_code: "USD",
                                        },
                                    },
                                },
                            ],
                            payment_preferences: {
                                auto_bill_outstanding: true,
                                setup_fee_failure_action: "CONTINUE",
                                payment_failure_threshold: "3",
                            },
                            tax_inclusive: false,
                            quantity_supported: false,
                        }
                        
                        
                    });
                }}

                
                onApprove={async (data, actions) => {
                    
                    return actions?.subscription?.get().then((details) => {
                        const _details = details as any; 
                        
                        const given_name = _details.subscriber.name.given_name;
                        const surname = _details.subscriber.name.surname;
                        const name = given_name + " " + surname;
                        const email = _details.subscriber.email_address;



                        onApprove(name, email);
                    })


                    
                }}

                onCancel={() => {
                    close();     
                }}

                onError={(err) => {
                    console.log(err);
                }}
            />
    )
}
