import React from 'react';
import Header from '../components/header';
import Pricing from '../components/pricing';
import Features from '../components/features';
import Blog from '../components/Blog';
import Contact from '../components/contact';

function Home() {
  return (
    <div className="Home">
        <Header />
        <Features />
        <Pricing />
        <Blog />
        <Contact />
    </div>
  );
}

export default Home;
