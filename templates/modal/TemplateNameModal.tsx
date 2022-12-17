import { FunctionComponent } from "react";

import Modal from "./Modal";

interface TemplateNameModalProps  {
    show: boolean;
    setShow: (show:boolean) => void;
};

type TemplateNameModalComponent = FunctionComponent<TemplateNameModalProps>;


const TemplateNameModal:TemplateNameModalComponent = ({show, setShow}) => {
    
    
    return (
        <Modal show={show}>
            
        </Modal>
    )


}


export default TemplateNameModal;