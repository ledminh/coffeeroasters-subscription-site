import Head from 'next/head'

import styles from '../styles/About.module.scss'
import PageLayout from '../layouts/PageLayout';

import HeroImage from '../components/AboutComponents/HeroImage';
import OurCommitment from '../components/AboutComponents/OurCommitment';
import Quality from '../components/AboutComponents/Quality';
import Headquarters from '../components/AboutComponents/Headquarters';

export default function About() {
  return (
      <PageLayout>
        <HeroImage/>
        <OurCommitment/>
        <Quality/>
        <Headquarters/>
      </PageLayout>
  )
};