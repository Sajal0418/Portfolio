import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading ="Connect With Me" text="Leave a Message"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
