import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import HeroImage from '../components/AccountComponents/HeroImage';
import StopSign from '../components/AccountComponents/StopSign';
import PageLayout from '../layouts/PageLayout';

import PlanList from '../components/AccountComponents/PlanList';
import { SessionType } from './api/auth/[...nextauth]';
import { SummaryType } from '../types';

interface AccountProps {}

const Account: FC<AccountProps> = () => {

  const {data: session} = useSession();

  const {user} = session || {user: null};
  
  const [plans, setPlans] = useState<SummaryType[]>([]);

  useEffect(() => {
    if (user) {
      fetch('/api/get-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userID: (user as SessionType['user']).id
          })
        }).then((res) => res.json())
        .then(({plans}) => {
          setPlans(plans);
        })
    }
  }, [user])

  return (
    <PageLayout>
      <HeroImage/>
      { !user && <StopSign/> }
      {
        user && (
          <PlanList
            plans={plans}
          />
        )
      }
    </PageLayout>
  )
} 

export default Account;