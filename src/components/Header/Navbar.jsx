import React from 'react';
import {NavLink} from 'react-router-dom'
 
const Navbar =()=>{
return(
  <React.Fragment>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 <a class="navbar-brand" href="#">Navbar</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 
    <div className="collapse navbar-collapse"
    id="navbarSupportedContent"
    >
     <ul className="navbar-nav ml-auto">
       <li className="nav-item">
         <NavLink exact
         className="nav-link active"
           aria-current="page"
           to="/"
           >
           Home
           </NavLink>
       </li>
       <li className="nav-item">
         <NavLink exact  className="nav-link" to="/service">
         Service
         </NavLink>
       </li>
       <li className="nav-item">
         <NavLink exact  className="nav-link" to="/about">
           About
           </NavLink>
       </li>
     
 
       <li className="nav-item">
         <NavLink exact className="nav-link" to="/contect">
           Contect
           </NavLink>
       </li>
     </ul>
   </div>
</nav>
  </React.Fragment>
)
}
export default Navbar;
