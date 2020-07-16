import React from 'react';
import './Propsarray.css';

export default function Propsarray(props) {
    return (
        <div className="container">
            <section className="Container-Section">
                <h4>Person</h4>
    <p>Name: <b>{props.name}</b></p>
    <p>Place: <b>{props.place}</b></p>
    <p>District: <b>{props.district}</b></p>
    <p>State: <b>{props.state}</b></p>
    <p>Phone: <b>{props.phone}</b></p>




            </section>
        </div>
    )
}
