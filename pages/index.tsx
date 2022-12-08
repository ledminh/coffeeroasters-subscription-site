import PageLayout from '../layouts/PageLayout';
import HeroImage from '../components/HomeComponents/HeroImage';
import OurCollection from '../components/HomeComponents/OurCollection';
import WhyChooseUs from '../components/HomeComponents/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import CreateYourPlanButton from '../components/CreateYourPlanButton';


export default function Home() {
  return (
      <PageLayout>
        <HeroImage/>
        <OurCollection/>
        <WhyChooseUs/>
        <HowItWorks
          showTitle={true}
          darkTheme={false}
        />
        <CreateYourPlanButton/>
      </PageLayout>
  )
};