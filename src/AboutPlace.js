import React from 'react';
import './AboutPlace.css';

class AboutPlace extends React.Component{
    render(){
        return(
            <div className="about-place">
            <div className="box-location"></div>
            <div className="place-info">{this.props.about.info}</div>
            <div>
            <p id="cap"><span id="bold">Built by : </span>{this.props.about.builtby}</p>
            <h1 id="title"> Entry Fees and Timing</h1>
            <p id="cap"><span id="bold">Open Days: </span>{this.props.about.days}</p>
            <p id="cap"><span id="bold">Timing: </span>{this.props.about.time}</p>
            <p id="cap"><span id="bold">Entry Fees: </span>{this.props.about.entry}</p>
            <h1 id="title">How to reach</h1>
            <p id="cap"><span id="bold">By Air : </span>{this.props.about.air}</p>
            <p id="cap"><span id="bold">By Rail : </span>{this.props.about.rail}</p>
            <p id="cap"><span id="bold">By Bus : </span>{this.props.about.bus}</p>
            </div>
            </div>

        );
    }
}

export default AboutPlace;