import { Component } from 'react';
import './HandlingClass.css'

class HandlingClass extends Component {

    handleclass() {
        console.log("I am the Class")
    }
    
    render() {
        return (
            <div id='handlingclass'>
            <> 
            
              <h1>This is how to handle events in Class Components</h1>
              <button onClick={this.handleclass}>Click me now!</button>
            </>
            </div>
        )
    } 
}

export default HandlingClass;