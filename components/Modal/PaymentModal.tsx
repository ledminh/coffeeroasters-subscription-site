import { FunctionComponent } from "react";
import styles from './PaymentModal.module.scss';

import { PayPalButtons } from "@paypal/react-paypal-js";

import { useState } from "react";

import Modal from "./Modal";
import PaymentScreen from "../PaymentScreen";
import PaymentSuccessScreen from "../PaymentSuccessScreen";

interface PaymentModalProps  {
    show: boolean;
    setShow: (show:boolean) => void;
    total: number | null;
};



type PaymentModalComponent = FunctionComponent<PaymentModalProps>;


const PaymentModal:PaymentModalComponent = ({show, setShow, total}) => {
    
    const [name, setName] = useState<string|null>(null);
    const [email, setEmail] = useState<string|null>(null);

    const onApprove = (name: string, email: string) => {
        setName(name);
        setEmail(email);
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
                (name && email)? 
                    <PaymentSuccessScreen 
                        name={name}
                        email={email}
                        onClose={onClose}
                    />
                    :
                    <PaymentScreen
                        total={total}
                        onApprove={onApprove}
                        setShow={setShow}
                    />
            }
        </Modal>
    )


}


export default PaymentModal;