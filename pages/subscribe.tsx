import PageLayout from '../layouts/PageLayout';

import HeroImage from '../components/SubscribeComponents/HeroImage';
import HowItWorks from '../components/HowItWorks';
import CoffeePicker from '../components/SubscribeComponents/CoffeePicker';

export default function Subscribe() {
  return (
        <PageLayout>
            <HeroImage />
            <HowItWorks
                showTitle={false}
                darkTheme={true}
              />
            <CoffeePicker/>
        </PageLayout>
  )
};