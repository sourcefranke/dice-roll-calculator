import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    return (
        <div className="App">
            <h1>Welcome to Dice Roll Calculator!</h1>
            <p>This is a web app for calculating dice rolls.<br/>You can define your throw via a formula and roll for results.</p>
            <button style={{cursor: 'pointer', fontSize: 'xx-large'}}>
                Test
            </button>
            <p>Source code hosted on <a href="https://github.com/sourcefranke/dice-roll-calculator">GitHub</a></p>
        </div>
    );
}

export default App;
