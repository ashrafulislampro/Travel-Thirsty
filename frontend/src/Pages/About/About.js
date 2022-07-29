import React from 'react';
import AboutHeader from '../Header/HeaderBanner/AboutHeader';
import Counter from './AboutCounter/Counter';
import HeroAbout from './HeroAbout';
import OurTeam from './OurTeam/OurTeam';
import Partners from './Partners';
import WhyUs from './WhyUs/WhyUs';

const About = () => {
    return (
        <div className=''>
            <AboutHeader/>
            <HeroAbout/>
            <Counter/>
            <WhyUs/>
            <Partners/>
            <OurTeam/>
        </div>
    );
};

export default About;