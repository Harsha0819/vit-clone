import React from 'react';
import './Coe.css';

function Ceo() {
    return (
        <div className="coe">

           <h4 className="header">Results</h4>
           <div  className="components">
           <p >Registration Number</p>
           <input  style={{backgroundColor: 'white'} } classname="input" placeholder="Enter Reg No"></input>
           <p>Password</p>
           <input  classname="input" placeholder="Password"></input>

           </div>
          

        </div>
    )
}

export default Ceo
