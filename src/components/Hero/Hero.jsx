import { RentalBtn } from 'components/Buttons/Buttons';
import React from 'react';
import { HeroContainer, HeroDescription, HeroImg } from './Hero.styled';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg
        src="https://pixabay.com/get/g5ccc733f921b3c6098ccff63493780e0965299b4d8e369061c081b1369534ecbb7726dade21841659e27bbed30be60c6139e997feb335971e4af2af07bb902f2_1280.jpg"
        alt="rent a car"
      />
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
