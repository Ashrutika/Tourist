import React from 'react';
import './AboutState.css';




class AboutState extends React.Component{
constructor(props){
    super(props);
}
    render(){
        return(
            <div className="about-state">
                <div className="loc-state">
                <img src={require('./images/cities/'+this.props.about.img)} id="state-img"></img>
                <div id="location-box"></div>
                </div>
                <div className="state-info">
                    {this.props.about.info}
                    <p id="cap"><span id="bold">Capital :</span><a href="https://en.wikipedia.org/wiki/Mumbai" target="_blank">{this.props.about.capital}</a> </p>
                    <p id="bold">Culture,Festivals and Food</p>
                    {this.props.about.fest}
                </div>
            </div>
        );
    }
}

export default AboutState;