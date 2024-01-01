import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import HomeComponent from '../components/Home/HomeComponent';
import AboutComponent from '../components/Home/AboutComponent';
import EducationComponent from '../components/Home/EducationComponent';
import ServiceComponent from '../components/Home/ServiceComponent';
import SkillsComponent from '../components/Home/SkillsComponent';
import PortfolioComponent from '../components/Home/PortfolioComponent';
import HourlyBooking from '../components/Home/HourlyBooking';
import TeamComponent from '../components/Home/TeamComponent';
import ContactComponent from '../components/Home/ContactComponent';
import CalendlyComponent from '../components/Home/CalendlyComponent';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (you can replace this with actual data loading logic)
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a 2-second delay
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    // You can replace this with your preferred loading spinner or text
    return (
      <div className="loading-container">
        <h1 className='nameFont'>Hello from <span className='colorText'>IREN</span></h1>
        <h1 className='font24White'>I am here to welcome you to my <span className='colorText'>PORTFOLIO</span></h1>
        <div className="spinner-border text-light mt-3" style={{width:"3rem",height:"3rem"}} role="status"> </div>
      </div>
    );
  }

  // Render the actual content when not loading
  return (
    <>
      <Layout>
        <HomeComponent />
        <AboutComponent />
        <EducationComponent />
        <ServiceComponent />
        <SkillsComponent />
        <PortfolioComponent />
        <HourlyBooking />
        <CalendlyComponent />
        <TeamComponent />
        <ContactComponent />
      </Layout>
    </>
  );
}
