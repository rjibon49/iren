import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import HomeComponent from '../components/Home/HomeComponent';
import AboutComponent from '../components/Home/AboutComponent';
import EducationComponent from '../components/Home/EducationComponent';
import ServiceComponent from '../components/Home/ServiceComponent';
import SkillsComponent from '../components/Home/SkillsComponent';


export default function Home() {
  return (
    <>
      <Layout>
        <HomeComponent />
        <AboutComponent />
        <EducationComponent />
        <ServiceComponent />
        <SkillsComponent />
      </Layout>
    </>
  )
}
