import React, { Fragment, useState } from 'react';


// On every click name will change from Amit to Rajan and vice versa 

export default function TextChange() {
    const [name, setName] = useState("Amit");

        const HandleClick = () => {
         setName(name==='Amit' ? 'Ranjan': 'Amit');
        }

    return (
        <Fragment>
            <div className='container'>
              <h1>My Name is {name}</h1>
                <button onClick={HandleClick}>Change Name</button>
            </div>
        </Fragment>
    )
}