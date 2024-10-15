import React from 'react';


const Friend = ({friend}) => {
    console.log(friend)
    return (
        <div className='box'>
            <h4>Name:{friend.name}</h4>
            <p>Email:{friend.email}</p>
            <p>Address:{friend.address.city}</p>
        </div>
    );
};

export default Friend;