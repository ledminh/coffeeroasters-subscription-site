import { useState } from 'react';
import { SummaryType } from '../types';

export default function useSubscribeHooks() {
    const [summary, setSummary] = useState<SummaryType|null>(null);

    const [totalPrice, setTotalPrice] = useState<number>(0); 

    const [isOrderSummaryModalShow, setIsOrderSummaryModalShow] = useState(false);
    const [isPaymentModalShow, setIsPaymentModalShow] = useState(false);

    const onClickCheckout = (totalPrice:number) => {
        setTotalPrice(totalPrice);
        setIsPaymentModalShow(true);
    }

    const onClickCreatePlan = (summary: SummaryType) => {
        setSummary(summary);
        setIsOrderSummaryModalShow(true);
    }

    return {
        summary,
        totalPrice,
        isOrderSummaryModalShow,
        isPaymentModalShow,
        onClickCheckout,
        onClickCreatePlan,
        setIsOrderSummaryModalShow,
        setIsPaymentModalShow
    }

}