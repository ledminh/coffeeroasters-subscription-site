import { FunctionComponent } from "react";
import OrderSummaryModal from "./OrderSummaryModal";



/****************************
 *  Types
 */
interface ModalsProps {
    show: boolean,
    setShow: (show:boolean) => void
}

type ModalsType = FunctionComponent<ModalsProps>;



/****************************
 *  Main Component
 */

const Modals:ModalsType = ({show, setShow}) => {


    return (
        <>
            <OrderSummaryModal
                show={show}
                setShow={setShow}
            />
            <div className="modal-root"></div>
        </>
    );
}

export default Modals;