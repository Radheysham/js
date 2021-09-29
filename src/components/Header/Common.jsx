import React from 'react';
import { NavLink } from 'react-router-dom';
 
 
 
const Common=(props)=>{
    return(
        <>
        <section id="header" className="">
           <div className="container-fluid home_page nav_bg">
               <div className="row">
                   <div className="col-12  mx-auto">
                       <div className="row">
                           <div className=" col-sm-6 pt-5 pt-lg-0 order-2 order-lg-1 content-head">
                               <div className = "content">
                               <h1>
                                   {props .name}
                                   <br/>
                                   <strong className="brand-name"> @Ittech Xpert</strong>
                               </h1>
                               <h3 className="my-3">
                                   we are the team of talented developer making website
                               </h3>
                               <div className= "mt-3">
                                   <NavLink to={props.visit} className="btn-get-started">
                                   {props.btname}
                                   </NavLink>
                                  
                               </div>
                              </div>
                           </div>
                           <div className="col-sm-6 order-1 order-lg-2 header-img">
                               <img src={props.imgsrc}   className="img-fluid-animated" alt="common img" />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </section>
      
      
        </>
    );
};
 
export default Common;

