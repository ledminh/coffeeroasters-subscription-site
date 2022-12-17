import { NextPage } from 'next';
import PageLayout from '../layouts/PageLayout';

import HeroImage from '../components/SubscribeComponents/HeroImage';
import HowItWorks from '../components/HowItWorks';
import CoffeePicker from '../components/SubscribeComponents/CoffeePicker';
import { GetServerSideProps } from 'next';
import Modals from '../components/Modal';

/**********************************
 * Interface for the props object
 */
export type QuestionFromServer = {
    navName: string,
    question: string,
    options: {
        name: string,
        description: string
    }[]
}


interface SubscribeProps {
    questionsFromServer: QuestionFromServer[]
}




/**********************************
 * Subscribe page
 */

const Subscribe:NextPage<SubscribeProps> = ({questionsFromServer}) => {
  return (
        <PageLayout>
            <HeroImage />
            <HowItWorks
                showTitle={false}
                darkTheme={true}
              />
            <CoffeePicker
              questionsFromServer={questionsFromServer}
              onClick={(summary) => console.log(summary)}              
            />
            <Modals />
        </PageLayout>
  )
};

export default Subscribe;








/*********************************
 * GetServerSideProps
 */
export const getServerSideProps:GetServerSideProps = async () =>{

  return { props: { questionsFromServer: [
    {
        navName: 'Preferences',    
        question: "How do you drink your coffee?",
        options: [
            {
                name: 'Capsule',
                description: 'Compatible with Nespresso systems and similar brewers'
            },
            {
                name: 'Filter',
                description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
            },
            {
                name: 'Espresso',
                description: 'Dense and finely ground beans for an intense, flavorful experience'
            }        
        ]
    },

    {
        navName: 'Bean Type',
        question: "What type of coffee?",
        options: [
            {
                name: 'Single origin',
                description: 'Distinct, high quality coffee from a specific family-owned farm'
            },
            {
                name: 'Decaf',
                description: 'Just like regular coffee, except the caffeine has been removed'
            },
            {
                name: 'Blended',
                description: 'Combination of two or three dark roasted beans of organic coffees'
            }        
        ]
    },

    {
        navName: 'Quantity',
        question: "How much would you like?",
        options: [
            {
                name: '250g',
                description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
            },
            {
                name: '500g',
                description: 'Perfect option for a couple. Yields about 40 delectable cups.'
            },
            {
                name: '1000g',
                description: 'Perfect for offices and events. Yields about 90 delightful cups.'
            }        
        ]
    },

    {
        navName: 'Grind Option',
        question: "Want us to grind them?",
        options: [
            {
                name: 'Wholebean',
                description: 'Best choice if you cherish the full sensory experience'
            },
            {
                name: 'Filter',
                description: 'For drip or pour-over coffee methods such as V60 or Aeropress'
            },
            {
                name: 'Cafetiére',
                description: 'Course ground beans specially suited for french press coffee'
            }        
        ]
    },

    {
        navName: 'Deliveries',
        question: "How often should we deliver?",
        options: [
            {
                name: 'Every week',
                description: '$14.00 per shipment. Includes free first-class shipping.'
            },
            {
                name: 'Every 2 weeks',
                description: '$17.25 per shipment. Includes free priority shipping.'
            },
            {
                name: 'Every month',
                description: '$22.50 per shipment. Includes free priority shipping.'
            }        
        ]
    }
  ]}}
}
