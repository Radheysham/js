import React from 'react';
 
 
import Home from './Screen/Home';
import About from './Screen/About';
import Contect  from './Screen/Contect';
import Service from './Screen/Service'
import Navbar from '../src/components/Header/Navbar'
import {Switch,Route, Redirect} from 'react-router-dom';
import Footer from '../src/Screen/Footer';
 
 
const App=() =>{
    return(
        <>
        <Navbar />
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route  exact path="/about" component={About}/>
        <Route path="/contect" component={Contect}/>
        <Route path="/Service" component={Service}/>
        
      
        <Redirect to="/"  />
 
      
       </Switch>
       <Footer/>
       
      
       
        </>
    );
};
 
export default App;
