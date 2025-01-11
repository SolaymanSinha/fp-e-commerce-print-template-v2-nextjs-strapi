import ExploreAllCategories from '@/components/custom/sections/ExploreAllCategories';
import Hero from '@/components/custom/Hero';
import React from 'react';
import FeaturedProducts from '@/components/custom/sections/FeaturedProducts';
import TopSeller from '@/components/custom/sections/TopSeller';
import BestDeals from '@/components/custom/sections/BestDeals';
import KeyFeatures from '@/components/custom/sections/KeyFeatures';
import Newsletter from '@/components/custom/sections/NewsLetter';
import OnlinePartners from '@/components/custom/sections/OnlinePartners';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ExploreAllCategories />
      <FeaturedProducts />
      <TopSeller />
      <OnlinePartners />
      <BestDeals />
      <KeyFeatures />
      <Newsletter />
    </React.Fragment>
  );
}
