import React from 'react';
import Header from './Header';
import '../App.css';
import HeroSection from './HeroSection';
import ProjectsComponent from './ProjectsComponent';
import Footer from './Footer';


const Home = () => {
  return (

    <section className='container'>
        <Header />
        <HeroSection />
        <ProjectsComponent />
      <Footer/>

    </section>
   
  );
};

export default Home;
