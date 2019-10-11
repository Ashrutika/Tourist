import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import StatePage from './StatePage';
import AboutState from './AboutState';
import Maharashtra from './Maharashtra';
import CityPage from './CityPage';
import PlacePage from './PlacePage';
//import MapContainer from './MapContainer';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

class  App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
  
  <Router>
    <Route path="/" exact strict component={Home}></Route>
    <Route path="/LoginPage" component={LoginPage}></Route>
    <Route path="/SignupPage" component={SignupPage}></Route>
    <Route path="/Maharashtra" component={Maharashtra}></Route>
  </Router>
      
  );
}
}

export default App;
