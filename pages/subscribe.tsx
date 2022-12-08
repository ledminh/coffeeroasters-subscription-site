import Head from 'next/head'

import styles from '../styles/Subscribe.module.scss'
import PageLayout from '../layouts/PageLayout';

import HeroImage from '../components/SubcribeComponents/HeroImage';
import HowItWorks from '../components/HowItWorks';
import CoffeePicker from '../components/SubcribeComponents/CoffeePicker';

export default function Subscribe() {
  return (
        <PageLayout>
            <HeroImage />
            <HowItWorks
                showTitle={false}
                darkTheme={true}
              />
            <CoffeePicker/>
            <button>Create my plan!</button>
        </PageLayout>
  )
};