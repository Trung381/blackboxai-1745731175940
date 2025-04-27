import React from 'react';
import HeaderTopBlock from '../components/HeaderTopBlock';
import NavBar from '../components/NavBar';
import Slide from '../components/Slide';
import Category from '../components/Category';
import DisplayComponent from '../components/DisplayComponent';
import DemoBestSellerProduct from '../components/DemoBestSellerProduct';
import BlogNavigationBlock from '../components/BlogNavigationBlock';
import FeaturedProduct from '../components/FeaturedProduct';
import CompanyPartnerLogo from '../components/CompanyPartnerLogo';
import FollowOn from '../components/FollowOn';
import SubscribeComponent from '../components/SubscribeComponent';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <HeaderTopBlock />
      <NavBar />
      <Slide />
      <Category />
      <DisplayComponent />
      <DemoBestSellerProduct />
      <BlogNavigationBlock />
      <FeaturedProduct />
      <CompanyPartnerLogo />
      <FollowOn />
      <SubscribeComponent />
      <Footer />
    </>
  );
};

export default Home;
