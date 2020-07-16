import React, { Component } from 'react'
import './Basicevents.css'

export default class Basicevents extends Component {
    firstfn=()=>{
alert('jdjd');
    }
    render() {
        return (
            <div className="Container">
                <section className="Container-Section">
<button onClick={this.firstfn}>Click</button>
                </section>
                
            </div>
        )
    }
}
