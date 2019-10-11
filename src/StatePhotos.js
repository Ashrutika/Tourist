import React from 'react';
import './StatePhotos.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

class StatePhotos extends React.Component{

    constructor(props){
        super(props);
    }
   
    render(){
       
        return(
           
            <div className="photos-div">
           
            <div className="flip-card-inner">
            <div className="flip-card-front">
        
        <img src={require('./images/cities/' +this.props.list.img1)} alt='' className="photo"></img>
       
        <p className="photo-name">{this.props.list.name}</p>
        </div>
        <div className="flip-card-back">
        <Link to={this.props.list.link}><h1>{this.props.list.name}</h1> </Link>
        <p id="info-state">{this.props.list.info}</p> 
        
        </div>
        </div>
        </div>
       
        );
        
    }
}

export default StatePhotos;