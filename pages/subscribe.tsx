import { NextPage } from 'next';
import PageLayout from '../layouts/PageLayout';

import HeroImage from '../components/SubscribeComponents/HeroImage';
import HowItWorks from '../components/HowItWorks';
import CoffeePicker from '../components/SubscribeComponents/CoffeePicker';
import { GetServerSideProps } from 'next';
import Modals from '../components/Modal';

import { QuestionType, pricesType } from '../types';

import useSubscribe from '../hooks/subscribeHooks';

import { PayPalScriptProvider } from "@paypal/react-paypal-js";


/**********************************
 * Interface for the props object
 */
interface SubscribeProps {
    clientID: string,
    questionsFromServer: QuestionType[],
    prices: pricesType
}



/**********************************
 * Subscribe page
 */
const Subscribe:NextPage<SubscribeProps> = ({clientID, questionsFromServer, prices}) => {
    
    const {totalPrice, summary, isOrderSummaryModalShow, setIsOrderSummaryModalShow, isPaymentModalShow, setIsPaymentModalShow, onClickCreatePlan, onClickCheckout} = useSubscribe();



    return (
        <PageLayout>
            <PayPalScriptProvider options={{ 
                "client-id": clientID,
                vault: true,
                intent: "subscription",
                }}>
                    <HeroImage />
                    <HowItWorks
                        showTitle={false}
                        darkTheme={true}
                        />
                    <CoffeePicker
                        questionsFromServer={questionsFromServer}
                        prices={prices}
                        onClick={onClickCreatePlan}
                        />
                    {
                        summary === null? null:   
                        <Modals 
                            isOrderSummaryModalShow={isOrderSummaryModalShow}
                            setIsOrderSummaryModalShow={setIsOrderSummaryModalShow}
                            isPaymentModalShow={isPaymentModalShow}
                            setIsPaymentModalShow={setIsPaymentModalShow}
                            summary={summary}
                            onClickCheckout={onClickCheckout}
                            total={totalPrice}
                            />
                    }
            </PayPalScriptProvider>

        </PageLayout>
    )
};

export default Subscribe;



/*********************************
 * GetServerSideProps
 */
export const getServerSideProps:GetServerSideProps = async () =>{

return { props: { 
    clientID: process.env.PAYPAL_CLIENT_ID,
    questionsFromServer: [
    {
        id: 'question1',
        navName: 'Preferences',    
        prompt: "How do you drink your coffee?",
        options: [
            {
                id: 'question1-option1',
                name: 'Capsule',
                description: 'Compatible with Nespresso systems and similar brewers'
            },
            {
                id: 'question1-option2',
                name: 'Filter',
                description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
            },
            {
                id: 'question1-option3',
                name: 'Espresso',
                description: 'Dense and finely ground beans for an intense, flavorful experience'
            }        
        ]
    },

    {
        id: 'question2',
        navName: 'Bean Type',
        prompt: "What type of coffee?",
        options: [
            {
                id: 'question2-option1',
                name: 'Single origin',
                description: 'Distinct, high quality coffee from a specific family-owned farm'
            },
            {
                id: 'question2-option2',
                name: 'Decaf',
                description: 'Just like regular coffee, except the caffeine has been removed'
            },
            {
                id: 'question2-option3',
                name: 'Blended',
                description: 'Combination of two or three dark roasted beans of organic coffees'
            }        
        ]
    },

    {
        id: 'question3',
        navName: 'Quantity',
        prompt: "How much would you like?",
        options: [
            {
                id: 'question3-option1',
                name: '250g',
                description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
            },
            {
                id: 'question3-option2',
                name: '500g',
                description: 'Perfect option for a couple. Yields about 40 delectable cups.'
            },
            {
                id: 'question3-option3',
                name: '1000g',
                description: 'Perfect for offices and events. Yields about 90 delightful cups.'
            }        
        ]
    },

    {
        id: 'question4',
        navName: 'Grind Option',
        prompt: "Want us to grind them?",
        options: [
            {
                id: 'question4-option1',
                name: 'Wholebean',
                description: 'Best choice if you cherish the full sensory experience'
            },
            {
                id: 'question4-option2',
                name: 'Filter',
                description: 'For drip or pour-over coffee methods such as V60 or Aeropress'
            },
            {
                id: 'question4-option3',
                name: 'Cafeti??re',
                description: 'Course ground beans specially suited for french press coffee'
            }        
        ]
    },

    {
        id: 'question5',
        navName: 'Deliveries',
        prompt: "How often should we deliver?",
        options: [
            {
                id: 'question5-option1',
                name: 'Every week',
                description: 'Includes free first-class shipping.'
            },
            {
                id: 'question5-option2',
                name: 'Every 2 weeks',
                description: 'Includes free priority shipping.'
            },
            {
                id: 'question5-option3',
                name: 'Every month',
                description: 'Includes free priority shipping.'
            }        
        ]
    }
    ],

    prices: {
        '250g': [7.2, 9.6, 12],
        '500g': [13, 17.5, 22],
        '1000g': [22, 32, 42]
    }

    }}
}








