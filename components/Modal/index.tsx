import { FunctionComponent } from "react";
import { SummaryType } from "../../types";
import OrderSummaryModal from "./OrderSummaryModal";



/****************************
 *  Types
 */
interface ModalsProps {
    isOrderSummaryModalShow: boolean,
    setIsOrderSummaryModalShow: (show: boolean) => void,
    summary: SummaryType,
    onClickCheckout: (total: number) => void
}

type ModalsType = FunctionComponent<ModalsProps>;



/****************************
 *  Main Component
 */

const Modals:ModalsType = ({isOrderSummaryModalShow, setIsOrderSummaryModalShow, summary, onClickCheckout}) => {


    return (
        <>
            <OrderSummaryModal
                show={isOrderSummaryModalShow}
                setShow={setIsOrderSummaryModalShow}
                summary={summary}
                onClick={onClickCheckout}
            />
            <div className="modal-root"></div>
        </>
    );
}

export default Modals;