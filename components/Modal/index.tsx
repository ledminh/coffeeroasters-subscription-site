import { FunctionComponent } from "react";
import { SummaryType } from "../../types";
import OrderSummaryModal from "./OrderSummaryModal";



/****************************
 *  Types
 */
interface ModalsProps {
    show: boolean,
    setShow: (show:boolean) => void,
    summary: SummaryType
}

type ModalsType = FunctionComponent<ModalsProps>;



/****************************
 *  Main Component
 */

const Modals:ModalsType = ({show, setShow, summary}) => {


    return (
        <>
            <OrderSummaryModal
                show={show}
                setShow={setShow}
                summary={summary}
            />
            <div className="modal-root"></div>
        </>
    );
}

export default Modals;