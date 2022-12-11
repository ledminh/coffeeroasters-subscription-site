import Head from 'next/head'

import styles from '../styles/Subscribe.module.scss'
import PageLayout from '../layouts/PageLayout';

import HeroImage from '../components/SubscribeComponents/HeroImage';
import HowItWorks from '../components/HowItWorks';
import CoffeePicker from '../components/SubscribeComponents/CoffeePicker';
import CreateMyPlanButton from '../components/CreateMyPlanButton';

export default function Subscribe() {
  return (
        <PageLayout>
            <HeroImage />
            <HowItWorks
                showTitle={false}
                darkTheme={true}
              />
            <CoffeePicker/>
            <CreateMyPlanButton/>            
        </PageLayout>
  )
};