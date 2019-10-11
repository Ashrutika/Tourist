import React from 'react';
import './HomeHeader.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './LoginPage';
//import HomeWallpaper from './images/Home1.jpg';
//import Logo from './images/Home.jpg';
//import search from './images/search.svg';

class HomeHeader extends React.Component{
    render(){
        return(
           
         <React.Fragment>
          <div className="header">
          <h1 className="app-name">Tourist Guide</h1>
          <input type="text" placeholder="Search...." id="srch" ></input>
          </div>
          
          <ul className="ul-list">
           <li><a id="link-a" href="">About</a></li>
           <li className="dropdown"><a id="link-a" href="" className="drop-btn">Season</a>
           <div className="drop-content">
           <a id="link-a" href="">Rainy</a>
           <a id="link-a" href="">winter</a>
           <a id="link-a" href="">summer</a>
           </div>
           </li>

           <li className="dropdown"><a id="link-a" href="" className="drop-btn">States</a>
           <div className="drop-content">
           <a id="link-a" href="">Maharashtra</a>
           <a id="link-a" href="">Utter Pradesh</a>
           <a id="link-a" href="">Andhra Pradesh</a>
           </div>
           </li>

           <li className="dropdown"><a id="link-a" href="" className="drop-btn">Cities</a>
           <div className="drop-content">
           <a id="link-a" href="">Pune</a>
           <a id="link-a" href="">Delhi</a>
           <a id="link-a" href="">Hydrabad</a>
           </div>
           </li>

           <li className="dropdown"><a id="link-a" href="" className="drop-btn">Treks</a>
           <div className="drop-content">
           <a id="link-a" href="">Forts</a>
           <a id="link-a" href="">Mountains</a>
           </div>
           </li>
           
           <li><Link id="link-a" to="/LoginPage">Login</Link></li>
       </ul>
       
         
          </React.Fragment>
          
         
      
         
         

        
        );
    }
}
export default HomeHeader;
