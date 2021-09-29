import React, { useState } from 'react';
 
const Contect=()=>{
    const  [data,setdata]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent=(event)=>{
        const {name,value} = event.target;
 
        setdata ((preVal)=>{
               return{
                   ...preVal,
                   [name]:value,
 
               };
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
            `my name is ${data.fullname}. my mobile number is ${data.phone} and email is ${data.email},here i what i want to say ${data.msg}`
        );
 
    }
    return(
        <>                            
          <div className="my-5">
           <h1  className="text-center"> Contect</h1>
           </div>
           <div className="container contact-div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                       <form onSubmit={formSubmit}>
                       <div class="mb-3">
                       <label for="exampleFormControlInput1" class="form-label">
                         Fullname
                         </label>
                       <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        name="fullname"
                        value={data.fullname}
                        onChange={InputEvent}
                        placeholder="fullname"
                        placeholder="mobile number"
                        />
                        </div>
                        <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label">
                         Phone
                         </label>
                       <input
                        type="Number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        name="phone"
                        value={data.phone}
                        onChange={InputEvent}
                        placeholder="name@example.com"
                        placeholder="mobile number"
                        />
                        </div>
                     
                        <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label">
                         Email address
                         </label>
                       <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        placeholder="name@example.com"
                        />
                        </div>
                        <div class="mb-3">
                       <label for="exampleFormControlTextarea1"
                       class="form-label">
                         Massege
 
                          </label>
                          <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="msg"
                          value={data.msg}
                          onChange={InputEvent}
                         
 
                         > </textarea>
                        </div>
                        <div class="col-12">
                       <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                      
                  </form>
 
                   </div>
 
               </div>
           </div>
        </>
    )
}
 
export default Contect;
  
