import { Component } from "react";
import './HandlingFunction.css'

function HandlingFunction() {

    const handlefunctions = () => {console.log("Hello There")}
    return (
        <div id="handlingfunction">
        <>
            <h1>This is how to handle events in functional Components</h1>
            <button onClick={handlefunctions}>Click Me!</button>
        </>
        </div>
    )
}
export default HandlingFunction;