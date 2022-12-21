import { FunctionComponent } from "react";
import { SummaryType } from "../../types";
import OrderSummaryModal from "./OrderSummaryModal";
import PaymentModal from "./PaymentModal";



/****************************
 *  Types
 */
interface ModalsProps {
    isOrderSummaryModalShow: boolean,
    setIsOrderSummaryModalShow: (show: boolean) => void,
    isPaymentModalShow: boolean,
    setIsPaymentModalShow: (show: boolean) => void,
    summary: SummaryType,
    onClickCheckout: (total: number) => void,
    total: number
}

type ModalsType = FunctionComponent<ModalsProps>;



/****************************
 *  Main Component
 */

const Modals:ModalsType = ({isOrderSummaryModalShow, setIsOrderSummaryModalShow, isPaymentModalShow, setIsPaymentModalShow, summary, onClickCheckout, total}) => {


    return (
        <>
            <OrderSummaryModal
                show={isOrderSummaryModalShow}
                setShow={setIsOrderSummaryModalShow}
                summary={summary}
                onClick={onClickCheckout}
            />
            <PaymentModal 
                show={isPaymentModalShow}
                setShow={setIsPaymentModalShow}
                total={total}
            />
            <div className="modal-root"></div>
        </>
    );
}

export default Modals;