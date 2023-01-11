import { FunctionComponent, useEffect } from "react";
import Link from "next/link";

import { SummaryType } from "../../types";

import { signIn, useSession } from "next-auth/react";

import Modal from "./Modal";


import styles from './OrderSummaryModal.module.scss';

import { useState } from "react";

interface OrderSummaryModalProps  {
    show: boolean;
    setShow: (show:boolean) => void;
    summary: SummaryType,
    onClick: (total: number) => void
};

type OrderSummaryModalComponent = FunctionComponent<OrderSummaryModalProps>;


const OrderSummaryModal:OrderSummaryModalComponent = ({show, setShow, summary, onClick}) => {
    
    const {data:session} = useSession();

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


    const handleCheckout = () => {
        setShow(false);
        onClick(total);
    }

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
                {
                    session? (<p className={styles.loggedInPrompt}>You are logged in as <span className={styles.email}><Link href="/account">{session.user?.email}</Link></span></p>) : (<p className={styles.notLoggedInPrompt}>Please log in using your Google account to keep track of your plan.</p>)
                }
            </div>
            <div className={styles.footer}>
                <span className={styles.priceOutside}>${Number.isInteger(total)? total : total.toFixed(2)}/mo</span>
                {
                    session? (
                        <button className={`${styles.checkout} ${styles.button}`}
                                onClick={handleCheckout}
                            >
                            Checkout <span className={styles.priceInside}>- ${Number.isInteger(total)? total : total.toFixed(2)}/mo</span>
                        </button>
                    ):
                    (
                        <button className={`${styles.login} ${styles.button}`}
                                onClick={() => signIn()}
                            >
                                Log in
                        </button>
                    )
                }
            </div>
        </Modal>
    )


}


export default OrderSummaryModal;