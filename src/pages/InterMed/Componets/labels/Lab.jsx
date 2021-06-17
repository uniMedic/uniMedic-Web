import React from 'react';
import './Lab.css';

const Lab= ({text}) =>{
    return(
        <div className='lab-style'>
            <label> {text} </label>
        </div>
    )
};
export default Lab;