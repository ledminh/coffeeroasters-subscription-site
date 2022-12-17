import { FunctionComponent } from "react";
import OrderSummaryModal from "./OrderSummaryModal";


const Modals:FunctionComponent = () => {


    return (
        <>
            <OrderSummaryModal
                show={true}
                setShow={() => {}}
            />
            <div className="modal-root"></div>
        </>
    );
}

export default Modals;