import { useEffect, useState } from 'react';


/******************
 * type definitions
 */
type statusType = 'init' | 'success' | 'error';


type usePaymentModalFunction = (setShow: (show: boolean) => void) => {
    name: string | null;
    email: string | null;
    status: statusType;
    onApprove: (name: string, email: string) => void;
    onClose: () => void;
};




/******************
 * hook
 */

const usePaymentModal:usePaymentModalFunction = (setShow) => {

    const [name, setName] = useState<string|null>(null);
    const [email, setEmail] = useState<string|null>(null);
    const [status, setStatus] = useState<statusType>('init');


    useEffect(() => {
        if (name && email) {
            setStatus('success');
        }
        else {
            setStatus('init');
        }
    }, [name, email]);



    const onApprove = (name: string, email: string) => {
        setName(name);
        setEmail(email);
    }

    const onClose = () => {
        setShow(false);
        setName(null);
        setEmail(null);
    }

    return {
        name,
        email,
        status,
        onApprove,
        onClose
    }
}


export default usePaymentModal;