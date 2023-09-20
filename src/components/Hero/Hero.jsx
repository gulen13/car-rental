import { RentalBtn } from 'components/Buttons/Buttons';
import React from 'react';
import { HeroContainer, HeroDescription, HeroImg } from './Hero.styled';
import hero from '../../images/hero-img.jpg';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg src={hero} alt="rent a car" />
      <HeroDescription>
        <h1>Welcome to Car Rental Hub</h1>
        <h3>
          Are you ready for your next adventure? At Car Rental Hub, we're here
          to make your journey extraordinary. Discover the freedom of the open
          road with our wide selection of top-quality rental cars.
        </h3>
        <RentalBtn width="120px" />
      </HeroDescription>
    </HeroContainer>
  );
};

export default Hero;
