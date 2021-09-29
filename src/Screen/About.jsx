import React from 'react';
import {Navlink}   from 'react-router-dom';
import preview from '/var/www/html/react/my-app/src/images/preview.png';
import Common from '../components/Header/Common';
 
 
const About=()=>{
    return(
        <>
        <Common
        name="welcome to About page"
        imgsrc={preview}
        visit="./contect"
        btname="Contect Now"
        />
      
      
        </>
    );
};
 
export default About;
