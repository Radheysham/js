import React from 'react';
import './Header';
function App() {
   return (
     <React.Fragment>
     <nav class="navbar navbar-expand-md bg-dark navbar-dark">
 <a class="navbar-brand" href="#">Navbar</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
 <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="collapsibleNavbar">
 <ul class="navbar-nav ml-auto">
   <li class="nav-item">
     <a class="nav-link" href="#">Link</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">Link</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="#">Link</a>
   </li>   
 </ul>
 </div> 
 </nav>
 <Header />
 </React.Fragment>
   );
 }
 
 export default Header;


