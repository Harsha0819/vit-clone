import React from 'react';
import './Courses.css';
import first from './1.PNG';
import sec from './2.PNG';
import third from './3.PNG';

function Courses() {
    return (
        <div className="mar">
            <h2>PROGRAMMES OFFERED 2019-20</h2>
            <div className="courses">
            <img className="pic"
            src={first}
            />
            <img
            src={sec}/>

            </div>
          

            
        </div>
    )
}

export default Courses
