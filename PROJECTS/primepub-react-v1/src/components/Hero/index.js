import React from 'react';
import NavBar from '../NavBar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
    return ( 
        <HeroContainer>
           <NavBar />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Outstanding Restaurant</HeroH1>
                   <HeroP>Ready to serve you</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
           </HeroContent>
        </HeroContainer>
     );
}
 
export default Hero;