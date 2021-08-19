
import React from "react";
import Header from './Components/Header';
import {BrowserRouter,NavLink,Route,Switch} from 'react-router-dom'
import Products from './Components/Products';
import Slider from "./Components/Slider";
import Home from './Home';
import Footer from "./Components/Footer";
import Login from './Components/Login';
import './Components/Style.css';
import Signup from "./Components/Signup";
import Productdetail from "./Components/Productdetail";
function App() {
  return (
   <>
    
<BrowserRouter>
<Header/>
<Switch>
<Route exact path="/Home" component={Home}/>
  <Route exact path="/Products" component={Products}/>
  <Route exact path="/Login" component={Login}/>
  <Route exact path="/Signup" component={Signup}/>
  <Route exact path="/Productdetail" component={Productdetail}/>
  <Route exact path="" component={Home}/>


  
</Switch>

</BrowserRouter>
{/* <Footer/> */}
</>  
  );
}

export default App;
