import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import UserProfile from './card.js';
import './card.css';
                                              
const User1 = {
  name: 'Amit',
  image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg' ,
    designation : 'Graphic Designer',
  description: 'Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.'
}

const User2 = {
	name : 'Ruhi',
	image : 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	description : 'perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups.',
	designation : 'Singer'
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
  
    <UserProfile   
      name={User1.name}
      img={User1.image}
      description={User1.description}
      designation={User1.designation}
    />

    
    {/* { <UserProfile 
      name={User2.name}
      img={User2.image}
      description={User2.description}
      designation={User2.designation}
    />
     }  */}
  </Fragment>
)
reportWebVitals();

