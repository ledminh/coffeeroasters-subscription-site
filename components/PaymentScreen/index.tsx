import { FunctionComponent } from "react";

import styles from './PaymentScreen.module.scss';

import { PayPalButtons } from "@paypal/react-paypal-js";

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
const PaymentScreen:PaymentScreenType = ({total, onApprove, close}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <p>Your total is: <span className={styles.ammount}>${total}</span></p>
            </div>
            <div className={styles.footer}>
                <PayButton 
                    total={total}
                    onApprove={onApprove}
                />
                {/* <PayPalHostedFieldsProvider
                    createOrder={() => {
                        // Here define the call to create and order
                        return fetch(
                            "/your-server-side-integration-endpoint/orders"
                        )
                            .then((response) => response.json())
                            .then((order) => order.id)
                            .catch((err) => {
                                // Handle any error
                            });
                    }}
                >
                    <PayPalHostedField
                        id="card-number"
                        hostedFieldType="number"
                        options={{ selector: "#card-number" }}
                    />
                    <PayPalHostedField
                        id="cvv"
                        hostedFieldType="cvv"
                        options={{ selector: "#cvv" }}
                    />
                    <PayPalHostedField
                        id="expiration-date"
                        hostedFieldType="expirationDate"
                        options={{
                            selector: "#expiration-date",
                            placeholder: "MM/YY",
                        }}
                    />
                    <SubmitPayment />
                </PayPalHostedFieldsProvider> */}
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
                    close();     
                }}
            />
    )
}



/**********************************
 * SubmitPayment Component
 */
// const SubmitPayment = () => {
//     // Here declare the variable containing the hostedField instance
//     const hostedFields = usePayPalHostedFields();

//     const submitHandler = () => {
//         if (typeof hostedFields.submit !== "function") return; // validate that `submit()` exists before using it
//         hostedFields
//             .submit({
//                 // The full name as shown in the card and billing address
//                 cardholderName: "John Wick",
//             })
//             .then((order) => {
//                 fetch(
//                     "/your-server-side-integration-endpoint/capture-payment-info"
//                 )
//                     .then((response) => response.json())
//                     .then((data) => {
//                         // Inside the data you can find all the information related to the payment
//                     })
//                     .catch((err) => {
//                         // Handle any error
//                     });
//             });
//     };

//     return <button onClick={submitHandler}>Pay</button>;
// };