import { FunctionComponent, useEffect } from "react";
import { SummaryType } from "../../types";

import Modal from "./Modal";

import styles from './OrderSummaryModal.module.scss';

import { useState } from "react";

interface OrderSummaryModalProps  {
    show: boolean;
    setShow: (show:boolean) => void;
    summary: SummaryType
};

type OrderSummaryModalComponent = FunctionComponent<OrderSummaryModalProps>;


const OrderSummaryModal:OrderSummaryModalComponent = ({show, setShow, summary}) => {
    
    const {Preferences, "Bean Type": beanType, Quantity, "Grind Option": grindOption, Deliveries, price} = summary;

    const [total, setTotal] = useState(0);


    useEffect(() => {
        if(price) {
            if(Deliveries === 'Every week') {
                setTotal(price * 4);
            }
            else if(Deliveries === 'Every 2 weeks') {
                setTotal(price * 2);
            }
            else if(Deliveries === 'Every month') {
                setTotal(price);
            }
        }

    }, [price, Deliveries])

    return (
        <Modal show={show}
                onClose={() => setShow(false)}
            >
            <div className={styles.header}>
                Order Summary
            </div>
            <div className={styles.body}>
                <p className={styles.quote}>&quot;I drink my coffee {Preferences === 'Capsule'? 'using' : 'as'} <span className={styles.selection}>{Preferences}</span>, with a <span className={styles.selection}>{beanType}</span> type of bean. <span className={styles.selection}>{Quantity}</span>, {Preferences !== 'Capsule'? <>ground ala <span className={styles.selection}>{grindOption}</span>,</>:''} sent to me <span className={styles.selection}>{Deliveries}</span>.&quot;</p>
                <p className={styles.prompt}>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.</p>
            </div>
            <div className={styles.footer}>
                <span className={styles.priceOutside}>${total}/mo</span>
                <button className={styles.button}>
                    Checkout <span className={styles.priceInside}>- $11.32/mo</span>
                </button>
            </div>
        </Modal>
    )


}


export default OrderSummaryModal;