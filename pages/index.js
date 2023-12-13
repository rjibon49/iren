import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import HomeComponent from '../components/Home/HomeComponent';


export default function Home() {
  return (
    <>
      <Layout>
        <HomeComponent />
      </Layout>
    </>
  )
}
