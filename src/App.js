import React from 'react';
import './App.css';

// Step 1: Create the header
const myHeader = <h1>My three favorite codewarriors are noLan, jhoffner, and OverZealous</h1>;

// Step 2: Create Link component
function CodewarsLink(props) {
    return (
        <a href={`http://www.codewars.com/users/${props.user}`} target="_blank" rel="noopener noreferrer">
            {props.user}
        </a>
    );
}

// Step 3: Create the Leaderboard component
function Leaderboard(props) {
    return (
        <div>
            {props.leaders.map((leader, index) => (
                <CodewarsLink key={index} user={leader} />
            ))}
        </div>
    );
}

// Sample leaderboard data
const leaders = ['Sch3lp', 'nplus', 'jhoffner', 'GiacomoSorbi', 'ZozoFouchtra'];

// Main App component
function App() {
    return (
        <div className="App">
            {myHeader}
            <Leaderboard leaders={leaders} />
        </div>
    );
}

export default App;

