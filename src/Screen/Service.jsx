import React from 'react';
import Sdata from '../components/Header/Sdata';
import Card from '../components/Header/Card';
 
 
 
 
const Service=()=>{
    return(
        <>
       <div className="my-5">
           <h1  className="text-center"> our service</h1>
           </div>
           <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="row ">
                 
                  {Sdata.map((val,index)=>{
                   return <Card key ={index} imgsrc={val.imgsrc} tittle={val.tittle} />
                  })}
 
                               </div>
                               </div>
                       </div>
                   </div>
                
                  
 
          
 
        </>
    );
 
};
 
export default Service;
