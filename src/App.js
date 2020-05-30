import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Features from './components/features';
import Pricing from './components/pricing';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Blog from './components/Blog';
import Contact from './components/contact';
import $ from 'jquery';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
        <About />
        <Pricing />
        <Blog />
     <Contact />
    </div>
  );
}

export default App;
