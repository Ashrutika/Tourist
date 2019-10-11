import React from 'react';
import './StatePage.css';
import TabButtons from './TabButtons';
import AboutState from './AboutState';
import AllStatesList from './AllStatesList';
import PopularCties from './PopularCities';

import StateHeader from './StateHeader';
import Maharashtra from './Maharashtra';
class StatePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
     
        return(
            <div>
               <Maharashtra/>
            
             </div>
        );
    }
}

export default StatePage;