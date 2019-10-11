import React from 'react';
import './CulturePhotos.css';
import AboutState from './AboutState';

class CulturePhotos extends React.Component{
    render(){
        return(
           
            <div id="photos">
                    
             <img src={require('./images/cities/' +this.props.photos.pic)}  alt="" className="maha-img"></img>  
             
             </div>
        );
    }
}

export default CulturePhotos;