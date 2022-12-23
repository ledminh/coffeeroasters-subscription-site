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
const PaymentScreen:PaymentScreenType = ({total, onApprove, close}) => {


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

                // createOrder={(data, actions) => {
                //     return actions.order.create({
                //         purchase_units: [
                //             {
                //                 amount: {
                //                     value: total +"",
                //                 },
                //             },
                //         ],
                //     });
                // }}



                onApprove={async (data, actions) => {
                    
                    return actions?.subscription?.get().then((details) => {
                        const given_name = (details as any).subscriber.name.given_name;
                        const surname = (details as any).subscriber.name.surname;
                        const name = given_name + " " + surname;
                        const email = (details as any).subscriber.email_address;

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



// /***************************
//  * Paypal Hosted Fields
//  */

// const CUSTOM_FIELD_STYLE = {"border":"1px solid #606060","boxShadow":"2px 2px 10px 2px rgba(0,0,0,0.1)"};
// const INVALID_COLOR = {
// 	color: "#dc3545",
// };

// // Example of custom component to handle form submit
// const SubmitPayment = ({ customStyle }) => {
// 	const [paying, setPaying] = useState(false);
// 	const cardHolderName = useRef(null);
// 	const hostedField = usePayPalHostedFields();

// 	const handleClick = () => {
// 		if (!hostedField?.cardFields) {
//             const childErrorMessage = 'Unable to find any child components in the <PayPalHostedFieldsProvider />';

//             action(ERROR)(childErrorMessage);
//             throw new Error(childErrorMessage);
//         }
// 		const isFormInvalid =
// 			Object.values(hostedField.cardFields.getState().fields).some(
// 				(field) => !field.isValid
// 			) || !cardHolderName?.current?.value;
		
// 		if (isFormInvalid) {
// 			return alert(
// 				"The payment form is invalid"
// 			);
// 		}
// 		setPaying(true);
// 		hostedField.cardFields
// 			.submit({
// 				cardholderName: cardHolderName?.current?.value,
// 			})
// 			.then((data) => {
// 				// Your logic to capture the transaction
// 				fetch("url_to_capture_transaction", {
// 					method: "post",
// 				})
// 					.then((response) => response.json())
// 					.then((data) => {
// 						// Here use the captured info
// 					})
// 					.catch((err) => {
// 						// Here handle error
// 					})
// 					.finally(() => {
// 						setPaying(false);
// 					});
// 			})
// 			.catch((err) => {
// 				// Here handle error
// 				setPaying(false);
// 			});
// 	};

// 	return (
// 		<>
//             <label title="This represents the full name as shown in the card">
// 				Card Holder Name
// 				<input
// 					id="card-holder"
// 					ref={cardHolderName}
// 					className="card-field"
// 					style={{ ...customStyle, outline: "none" }}
// 					type="text"
// 					placeholder="Full name"
// 				/>
// 				</label>
// 			<button
// 				className={`btn${paying ? "" : " btn-primary"}`}
// 				style={{ float: "right" }}
// 				onClick={handleClick}
// 			>
// 				{paying ? <div className="spinner tiny" /> : "Pay"}
// 			</button>
// 		</>
// 	);
// };