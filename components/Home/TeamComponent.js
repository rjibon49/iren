import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import mehrab from "../../public/images/content/mehrabHossain.png";
import jibon from "../../public/images/content/raihanHossain.png";
import srikanta from "../../public/images/content/srikanto.png";
import shanto from "../../public/images/content/shantoIslam.png";
import sohan from "../../public/images/content/sohanTalukdar.png";
import jahidul from "../../public/images/content/jahidulHasan.png";

const teamMembers = [
  { name: 'Mehrab Hossain', role: 'SEO & Digital Mkt', image: mehrab },
  { name: 'Md. Raihan Hossain', role: 'Front-end Developer', image: jibon },
  { name: 'Shrikanta Mazumder', role: 'Backend Engineer', image: srikanta },
  { name: 'Shanto Islam Emon', role: 'Video Editor', image: shanto },
  { name: 'Sohan Talukder', role: 'UI/UX Designer', image: sohan },
  { name: 'Jahidul Hassan', role: 'Graphic Designer', image: jahidul },
];

const TeamComponent = () => {
  return (
    <>
      <div className='container' id=''>
        <div className='row w-100 justify-content-start'>
          <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
            <div>
              <div className='mb-5'>
                <span className='sectionTitleFont'><FontAwesomeIcon icon={faUsers} className='me-3 fs-5'/>MY TEAM</span>
              </div>
              <div className='mb-5'>
                <h1 className='font48 mb-4'>Meet My Professional <span className='colorText'>Team</span></h1>
                <p className='font20White'>Our guiding principle is straightforward: assemble a team of diverse and passionate individuals, cultivating a culture that empowers each member to deliver their utmost excellence in work.</p>
              </div>
            </div>
            <div className='d-flex justify-content-center gap-4 flex-wrap'>
              {teamMembers.map((member, index) => (
                <div key={index} className='teamBorder'>
                  <div className='teamImageBody'>
                    <div className='text-center'>
                      <Image src={member.image} alt={member.name} className='memberImage' />
                      <h4 className='font20E6'>{member.name}</h4>
                      <p className='designationFont'>{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamComponent;