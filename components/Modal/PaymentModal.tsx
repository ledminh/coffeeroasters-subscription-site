import { FunctionComponent } from "react";
import styles from './PaymentModal.module.scss';

import { PayPalButtons } from "@paypal/react-paypal-js";

import { useState } from "react";

import Modal from "./Modal";

interface PaymentModalProps  {
    show: boolean;
    setShow: (show:boolean) => void;
    total: number | null;
};



type PaymentModalComponent = FunctionComponent<PaymentModalProps>;


const PaymentModal:PaymentModalComponent = ({show, setShow, total}) => {
    
    const [name, setName] = useState<string|null>(null);

    const onApprove = (name: string) => {
        setName(name);
    }

    const onClose = () => {
        setShow(false);
        setName(null);
    }

    return (
        <Modal show={show}
                onClose={() => setShow(false)}
            >
            <div className={styles.header}>
                Payment
            </div>
            {
                name? 
                    <>
                        <div className={styles.body}>
                            <p>Thank you <span className={styles.name}>{name}</span> for your purchase!</p>
                        </div>
                        <div className={styles.footer}>
                            <button className={styles.closeButton} onClick={onClose}>Close</button>
                        </div> 
                    </>:
                    <>
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
                                                const name = details.payer.name?.given_name? details.payer.name.given_name : "Anonymous";
        
                                                onApprove(name);
                                            });
                                        }}
                                    />
                        </div>
                    </>
            }
        </Modal>
    )


}


export default PaymentModal;