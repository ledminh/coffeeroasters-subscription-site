import PageLayout from '../layouts/PageLayout';
import HeroImage from '../components/HomeComponents/HeroImage';
import OurCollection from '../components/HomeComponents/OurCollection';
import WhyChooseUs from '../components/HomeComponents/WhyChooseUs';

export default function Home() {
  return (
      <PageLayout title="Coffeeroasters subscription site">
        <HeroImage/>
        <OurCollection/>
        <WhyChooseUs/>
      </PageLayout>
  )
};