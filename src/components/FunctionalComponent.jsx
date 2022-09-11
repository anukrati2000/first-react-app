import React, { useState } from 'react';

function FunctionalComponent(props) {

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");

    return (
        <div>
            <p>This is a functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to Add 1</button>
            <h1>{count}</h1>
            <h1>My name is {props.name} and favourite number is {props.number}</h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => props.setName(changeName)}>Change name</button>
        </div>
    );
}


export default FunctionalComponent;