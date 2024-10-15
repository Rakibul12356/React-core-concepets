import React, { useState } from 'react';

const Counter = () => {
    const[count,setCount]=useState(0);

    const handleAdd =() =>{
        const newCount = count +1;
        setCount(newCount);

    }

    const handleRemove = () =>{
        const remove= count - 1;
        setCount(remove)
    }

    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleRemove}>Remove 1</button>
        </div>
    );
};

export default Counter;