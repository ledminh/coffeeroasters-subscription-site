import React, { FC } from 'react';
import HeroImage from '../components/AccountComponents/HeroImage';
import StopSign from '../components/AccountComponents/StopSign';
import PageLayout from '../layouts/PageLayout';


interface AccountProps {}

const Account: FC<AccountProps> = () => (
  <PageLayout>
    <HeroImage/>
    <StopSign/>
  </PageLayout>
);

export default Account;
