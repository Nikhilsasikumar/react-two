import React, { Component } from 'react';
import './Classcomponent.css';

export default class Classcomponent extends Component {
    state = {
        counter: 0
    }
    incre = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    //RECOMENDED METHOD prev-previous state   
    dncre = () => {
        this.setState((prev, props) => ({ counter: prev.counter - 1 }));
    }


    render() {
        return (
            <div className="Container">
                <section className="Container-Section">
                    <button onClick={this.incre} >+</button>
                    <label>{this.state.counter}</label>
                    <button onClick={this.dncre} >-</button>
                </section>
            </div>
        )
    }
}
