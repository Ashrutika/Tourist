import React from 'react';
import './PopularStates.css';
import StatePhotos from './StatePhotos';
import himachal from './images/cities/himachal pradesh.jpg';
import maharashtra from './images/cities/maharashtra.jpg'; 
import rajasthan from './images/cities/rajasthan.jpg';
import keral from './images/cities/keral.jpg';
import pune from './images/cities/pune.jpg';
import mumbai from './images/cities/mumbai.jpeg';


class PopularStates extends React.Component{
    
    render(){
        const states=[{
            name:'Himachal Pradesh',
            img1:'himachal pradesh.jpg',
            info:'',
            link:'/'
        },
        {
            name:'Maharashtra',
            img1:'maharashtra.jpg',
            info:'',
            link:'/Maharashtra'
        },
        {
            name:'Rajasthan',
            img1:'rajasthan.jpg',
            info:'',
            link:'/'
        },
        {
            name:'Kerala',
            img1:'keral.jpg',
            info:'',
            link:'/'
        }
    ]

      const state=states.map(list => <StatePhotos list={list}/>);
        return(
            <React.Fragment>
            <div className="pstates">
             Popular States:
            </div>
            <div >
           {state}
            </div>
            <button className="more-btn">More</button>
            </React.Fragment>
        );
    }
}

export default PopularStates;