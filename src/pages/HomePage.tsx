import React from 'react';
import Hero from '../components/home/Hero';
import ServiceOverview from '../components/home/ServiceOverview';
import CompanyValues from '../components/home/CompanyValues';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServiceOverview />
      <CompanyValues />
    </div>
  );
};

export default HomePage;