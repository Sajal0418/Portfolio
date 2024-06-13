import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/footer';
import HeroImg2 from '../components/HeroImg2';
import TestCard from '../components/TestCard';
import Projectcard from '../components/Projectcard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="My Projects"/>
      <Work />
      {/* <TestCard /> */}
      <Footer />
    </div>
  )
}

export default Project
