import React from "react";
import { useState } from 'react';


export default function InputChange() {
    const [data, setText] = useState('');
    const [arrIndex, setTextIndex] = useState([]);

    function handleChange(e) {
        console.log(data);
        setText(e.target.value);

    }

    function handleClick() {
        setTextIndex([...arrIndex, data]);
        setText('');
    }

    return (
        <>
            <input type="text" value={data} onChange={handleChange} placeholder='Add here....' />
            <button onClick={handleClick}>Add</button>
            <ul>
            {arrIndex.map((item,ind) => (
                <li key={ind}>{item}</li>
            ))}
            </ul>
        </>

    );
}