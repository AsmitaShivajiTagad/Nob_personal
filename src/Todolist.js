import React from "react";
import { useState } from 'react';
import './TodoList.css'

export default function List() {
    const [text, setText] = useState(''); //first element
    const [textList, setTextList] = useState([]); //all list
    const [count, setcount] = useState(0);

    function handleChange(e) { //it will change the data
        // console.log(text);
        setText(e.target.value);
    }

    function handleClick() {      //whenver we click it will going to execute
        if (text === ' ') {
            alert("input field is empty.")
        } else {
            const newText = [...textList, { task: text, completed: false }];
            setTextList(newText);
            setText(' ');  //clear the data after add from text 
            setcount(count + 1);
        }
    }

    const removeEle = (index) => {
        const newTextList = [...textList];
        if (newTextList[index].completed === false) {
            setcount(count - 1);
        }
        newTextList.splice(index, 1);
        setTextList(newTextList);
    }

    const handleComplete = (index) => {
        const newTextList = [...textList];
        if (newTextList[index].completed === false) {
            newTextList[index].completed = true;
            setTextList(newTextList);
            setcount(count - 1);
        }
        console.log(textList);
    }



    return (
        <>
          <div className="Container">
          <div className="InnerContainer">
          <div className="head">
            <h1>Pending Task ({count})</h1>
            </div>

            {textList.map((element, index) => {
                return (
                    <div key={index} className="list">

                        <div className="Cbtn">
                            <button className="btn1" onClick={() => handleComplete(index)}>&#10004;</button>
                            {element.completed ? <strike>{element.task}</strike> : element.task}
                        </div>
                        <div className="Dbtn">
                            <button onClick={() => removeEle(index)} className="btn3">&#10008;</button>
                        </div>
                    </div>
                );

            })}

            <div className="input">
                <input type="text" value={text} onChange={handleChange} />
                <button onClick={handleClick} className="added">Add</button>
                </div>
            </div>
        </div>
        </>

     );


        }

