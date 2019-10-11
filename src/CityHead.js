import React from 'react';
import './CityHead.css';
import TabButtons from './TabButtons';


class CityHead extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="city-head">
              <h1 id="city-name">{this.props.head.cityname}</h1>
              <div className="subname">
              <p id="state">{this.props.head.statename}</p>
              <p id="con">{this.props.head.india}</p>
              </div>
               <TabButtons /> 
              </div>
              </React.Fragment>
        );
    }
}

export default CityHead;