import React from 'react'
import './Navbar.css';

function Navbar(props) {

    return (
        <div className='Navbar' id='navbar'>
          <h1>This Navigation Bar</h1>
          <h3>My Name is {props.name} {props.lastname}</h3>
        </div>
    );
}
export default Navbar