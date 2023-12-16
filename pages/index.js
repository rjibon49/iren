import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import HomeComponent from '../components/Home/HomeComponent';
import AboutComponent from '../components/Home/AboutComponent';
import EducationComponent from '../components/Home/EducationComponent';


export default function Home() {
  return (
    <>
      <Layout>
        <HomeComponent />
        <AboutComponent />
        <EducationComponent />
      </Layout>
    </>
  )
}
