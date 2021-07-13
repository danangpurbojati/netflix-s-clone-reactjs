import React from 'react';
import netflixHero from '../../assets/images/hero-netflix.jpg';
import { HeroImage, HeroWrapper } from './styles';

const Hero = ({children}) => {
    return (
        <HeroWrapper>
            <HeroImage src={netflixHero} alt="heroImage" />
            {children}
        </HeroWrapper>
    )
}

export default Hero
