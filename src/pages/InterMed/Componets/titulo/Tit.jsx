import React from 'react';
import './Tit.css';

const Tit=({text}) =>{
    return (
        <div className='tit-container'>
            <label className='tit-texto'> {text}  </label>
            
        </div>
    )
};
export default Tit;