import { FunctionComponent } from "react";

import Modal from "./Modal";

import styles from './OrderSummaryModal.module.scss';

interface OrderSummaryModalProps  {
    show: boolean;
    setShow: (show:boolean) => void;
};

type OrderSummaryModalComponent = FunctionComponent<OrderSummaryModalProps>;


const OrderSummaryModal:OrderSummaryModalComponent = ({show, setShow}) => {
    
    
    return (
        <Modal show={show}
                onClose={() => setShow(false)}
            >
            <div className={styles.header}>
                Order Summary
            </div>
            <div className={styles.body}>
                <p className={styles.quote}>&quot;I drink my coffee as <span className={styles.selection}>Filter</span>, with a <span className={styles.selection}>Decaf</span> type of bean. <span className={styles.selection}>250g</span> ground ala <span className={styles.selection}>Cafetiere</span> sent to me Every Week.&quot;</p>
                <p className={styles.prompt}>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.</p>
            </div>
            <div className={styles.footer}>
                <span className={styles.priceOutside}>$11.32/week</span>
                <button className={styles.button}>
                    Checkout <span className={styles.priceInside}>- $11.32/mo</span>
                </button>
            </div>
        </Modal>
    )


}


export default OrderSummaryModal;