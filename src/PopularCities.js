import React from 'react';
import './PopularCities.css';
import StatePhotos from './StatePhotos';
import pune from './images/cities/pune.jpg';
import mumbai from './images/cities/mumbai.jpeg';
import delhi from './images/cities/delhi.jpeg';
import banglore from './images/cities/banglore.png';

class PopularCties extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const city=[
            {
              name:'Pune',
              img1:'pune.jpg',
              info:''
            },
            {
                name:'Mumbai',
                img1:'mumbai.jpeg',
                info:''
            },
            {
                name:'Delhi',
                img1:'delhi.jpeg',
                info:''
            },
            {
                name:'Banglore',
                img1:'banglore.png',
                info:''
            }
        ]
        const citiylist=city.map(list => <StatePhotos list={list}/>)
        return(
            <React.Fragment>
            <div className="pcities">
            Popular Cities:
            </div>
            <div >
            {citiylist}
            </div>
            <button className="more-btn">More</button>
            </React.Fragment>
        );
    }
}

export default PopularCties;