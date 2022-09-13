import React, { useState, useEffect, useRef } from 'react';
import BaseHoc from '../hoc/BaseHoc';

function FunctionalComponent(props) {

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");

    // const prevRef = useRef();

    useEffect(() => { console.log("Component did mount"); }, []);

    useEffect(() => { console.log("Component did update"); });

    useEffect(() => { console.log("Only on Change name"); }, [changeName]);

    // useEffect(() => {
    //     console.log(prevRef.current.innerHTML === count);
    // }, [count]);

    return (
        <div>
            <p>This is a functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to Add 1</button>
            {/* <h1 ref={prevRef}>{count}</h1> */}
            <h1>{count}</h1>
            <h1>My name is {props.name} and favourite number is {props.number}</h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => props.setName(changeName)}>Change name</button>
        </div>
    );
}


export default BaseHoc(FunctionalComponent);