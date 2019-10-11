import React from 'react';
import './TabButtons.css';

class TabButtons extends React.Component{
    render(){
        return(
 
            <div className="links">
                <a href="" className="a-link">Home</a>
                <a href="" className="a-link">States</a>
                <a href="" className="a-link">Cities</a>
                <a href="" className="a-link">Logout</a>
                <input type="text" placeholder="search" id="search-bar"></input>
            </div>
        );
    }
}

export default TabButtons;
