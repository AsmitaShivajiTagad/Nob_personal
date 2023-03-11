import React, { useState } from 'react';
import './card.css';


export default function UserProfile(props) {


    function Alert(){
      alert('visited');
    }
    
    return (
      <div className='web'>
        <div className='userprofile'>
          <div className='image'>
           <img src={props.img} alt=" "height='100px' width='100px'></img>
          </div>

          <div className='Info'>
              <h3>{props.designation}</h3>
              <h2>{props.name}</h2>
              <p>{props.description}</p>
              <button onClick={Alert} >Visit</button>
          </div>

        </div>
        </div>
        
    )
}
