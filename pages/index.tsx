import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import Layout from '../layout';
import HeroImage from '../components/HomeComponents/HeroImage';

export default function Home() {
  return (
      <Layout title="Coffeeroasters subscription site">
        <HeroImage/>
      </Layout>
  )
};