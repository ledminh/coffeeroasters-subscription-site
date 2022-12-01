import Head from 'next/head'

import styles from '../styles/About.module.scss'
import PageLayout from '../layouts/PageLayout';

export default function About() {
  return (
      <PageLayout title="Coffeeroasters subscription site">
        <HeroImage/>
        <OurCommitment/>
        <Quality/>
        <Headquarters/>
      </PageLayout>
  )
};