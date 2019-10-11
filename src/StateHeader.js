import React from 'react';
import './StateHeader.css';
import TabButtons from './TabButtons';

class StateHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

            <React.Fragment>
            <div className="state-head">
              <h1 id="state-name">{this.props.head.head_name}</h1>
              <p id="con">{this.props.head.india}</p>
               <TabButtons  /> 
              </div>
              </React.Fragment>
        );
    }
}

export default StateHeader;