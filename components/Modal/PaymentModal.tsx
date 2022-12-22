import { FunctionComponent } from "react";
import styles from './PaymentModal.module.scss';

import { PayPalButtons } from "@paypal/react-paypal-js";

import { useState } from "react";

import Modal from "./Modal";
import PaymentScreen from "../PaymentScreen";
import PaymentSuccessScreen from "../PaymentSuccessScreen";
import usePaymentModal from "./hooks/usePaymentModal";

interface PaymentModalProps  {
    show: boolean;
    setShow: (show:boolean) => void;
    total: number | null;
};



type PaymentModalComponent = FunctionComponent<PaymentModalProps>;


const PaymentModal:PaymentModalComponent = ({show, setShow, total}) => {
    
    const {name, email, status, onApprove, onClose} = usePaymentModal(setShow);


    return (
        <Modal show={show}
                onClose={() => setShow(false)}
            >
            <div className={styles.header}>
                Payment
            </div>
            {
                status === 'success'? 
                    <PaymentSuccessScreen 
                        name={name as string}
                        email={email as string}
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