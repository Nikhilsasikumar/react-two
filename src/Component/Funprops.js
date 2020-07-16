import React from 'react';
import './Funprops.css';

export default function Funprops(props) {
    return (
        <div className="Container">
            <section className="Container-Section">
                <form>
                    <h1>{props.name} Register Form</h1>
                    
    <label>Name of {props.name}</label> <br></br>
                    <input/><br></br>
                    <label>{props.name} Reg.Number</label> <br></br>
                    <input/><br></br>
                    <label>{props.name} Native Place</label> <br></br>
                    <input/><br></br>
                </form>
            </section>
            
        </div>
    )
}
