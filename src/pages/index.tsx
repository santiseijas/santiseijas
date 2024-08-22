import React from 'react';
import Header from '../components/header';
import Experience from '../components/experience';
import Education from '../components/education';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 bg-gray-100 ">
      <Header />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
