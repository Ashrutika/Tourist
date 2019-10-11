import React from 'react';
import './Maharashtra.css';
import StateHeader from './StateHeader';
import StatePage from './StatePage';
import AboutState from './AboutState';
import StatePhotos from './StatePhotos';
import CulturePhotos from './CulturePhotos';
import Andhra from './images/cities/Andhra.jpg';
import keral from './images/cities/himachal pradesh.jpg'


class Maharashtra extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    const head=[{
        head_name:"Maharashtra",
        india:"India"
    }]

    const about=[{
        img:'maharashtra.jpg',
        capital: "Mumbai",
        fest:"    Ganesh Chaturthi, a popular festival in the state.Statue of Shivaji The Great opposite to Gateway of India in South Mumbai.Ambedkar Jayanti procession at Chaitya Bhoomi, Mumbai. Household shrine in a Maharashtrian home.Vada Pav is one of the original dishes of Maharashtra. Pav Bhaji is also famous in maharashtra",
        info: "Maharashtra, a state spanning west-central India, is best known for its fast-paced capital, Mumbai (formerly Bombay). This sprawling metropolis is the seat of the Bollywood film industry It also has sites like the British Raj-era Gateway of India monument and cave temples at Elephanta Island. To the south is the rustic,beach-lined Konkan Coast. In the city of Pune, Aga Khan Palace is  a memorial to Mahatma Gandhi."
    }
]

    const images=[
        {
           name:"Pune",
           img1:'pune.jpg',
       
           info:"Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace."
         },
        {
            name:"Mumbai",
            img1:'mumbai.jpeg',
           
            info:"Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924."
        },
        {
            name:"Ratnagiri",
            img1:'ratnagiri.gif',
            
            info:"Ratnagiri is a port town in Maharashtra, western India. Overlooking the Arabian Sea, Ratnadurg Fort has the Bhagwati temple and a lighthouse. Northeast, a fish museum and aquarium includes turtles and a whale skeleton."

        }
    ]

    const photos=[
        {
            pic:'maha1.jpg'
        },
        {
            pic:'maha2.jpg'
        },
        {
            pic:'maha3.jpeg'
        },
        {
            pic:'maha4.jpg'
        },
        {
            pic:'maha5.jpg'
        },
        {
            pic:'maha6.jpg'
        }
    ]

    const images_states=[
        {
        name:'Andhra Pradesh',
        img1:'Andhra.jpg'
        },
        {
            name:'Kerala',
            img1:'keral.jpg'
        },
        {
            name:'Himachal Pradesh',
            img1:'himachal pradesh.jpg'
        },
]
    
     

    const head_info=head.map(head => <StateHeader head={head}/>);
    const aboutstate=about.map(about => <AboutState about={about} />);
    const popular_cities=images.map(list => <StatePhotos list={list} /> );
    const culture=photos.map(photos => <CulturePhotos photos={photos} />);
    const popular_states=images_states.map(list => <StatePhotos list={list} /> );
        return(
          <React.Fragment>
            {head_info}
            {aboutstate}
            <div className="culture">
            {culture}
            </div>
              <div className="popular">
              <div id="pcities">Popular Cities in Maharashtra </div>
              {popular_cities} 
              </div>
              <button id="more-btn">More</button>
              <div className="popularstates">
              <div id="pstates">Recommended States </div>
              {popular_states} 
              </div>
              <button id="more-state">More</button>
             
              
          </React.Fragment>

        );
    }
}

export default Maharashtra;