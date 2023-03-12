import React, { Fragment } from 'react';
import { useState } from 'react';

//Increase button will increase the count by 1 and the other will decrease the count by 1
export default function App() {

    const [count, setCount] = useState(0);

    const HandleInc = () => {
        setCount((val) => val + 1);
    }

    const HandleDec = () => {
        setCount((val) => val - 1);
    }


    return (
        <Fragment>
        <div className='container'>
            <h1 className='display' >{count}</h1>
            <button className="btn1" onClick={HandleInc}>Increament</button>
            <button  className="btn2" onClick={HandleDec}>Decrement</button>
         </div>
        </Fragment>
    );

}
