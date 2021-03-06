import React from 'react';
import Header from '../components/header';
// import Pricing from '../components/pricing';
import Features from '../components/features';
import Blog from '../components/Blog';
import Contact from '../components/contact';
import Subscription from './subscription'
import Footer from '../components/footer'

function Home() {
  return (
    <div className="Home">
        <Header />
        <Features />
        <Subscription />
        {/* <Pricing /> */}
        <Blog />
        <Contact />
        <Footer />
    </div>
  );
}

export default Home;
