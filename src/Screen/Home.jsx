import React from 'react';
import { NavLink } from 'react-router-dom';
import computer from '/var/www/html/react/my-app/src/images/computer.png';
import Common from '../components/Header/Common';
 
const Home=()=>{
   return(
       <>
       <Common
       name="Grow your busness with"
      
      imgsrc ={computer}
       visit= "./service"
       btname="Get started"
       />
     
      
      
       </>
   );
};
 
export default Home;

